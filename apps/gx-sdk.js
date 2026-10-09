/* GENEXXO App SDK, v1 (2026-10-09).
   The small library a third-party app includes to talk to the GENEXXO host it runs inside. The app
   runs in a sandboxed iframe with no access to GENEXXO itself; everything goes through postMessage:
     GX.init({seed})  → Promise<{gateway, user, grants, data, standalone}>
     GX.save(data)    → stores the app's own data with the host (per app, on this device)
     GX.post(text, badge) → Promise; posts a card to the gateway feed. Needs the 'feed' grant.
     GX.can(perm)     → whether the user granted it
   Opened on its own (no host answers within 700ms) the app runs on its seed data, nothing saved.
   Route Logger predates this file and speaks the same protocol directly. */
(function(){
  const host = window.parent !== window ? window.parent : null;
  const send = m => host && host.postMessage(Object.assign({gx:1}, m), '*');
  let ctx = null, onPosted = null;
  window.addEventListener('message', e => {
    const m = e.data || {}; if(!m.gx) return;
    if(m.type==='init' && !ctx && GX._resolve){
      ctx = { gateway:m.gateway, user:m.user, grants:m.grants||[], data:m.data, standalone:false };
      GX._resolve(ctx);
    }
    if(m.type==='posted' && onPosted){ const f=onPosted; onPosted=null; f(true); }
  });
  window.GX = {
    init(opts){
      opts = opts || {};
      return new Promise(res => {
        GX._resolve = c => { if(c.data==null && opts.seed) c.data = opts.seed(); res(c); };
        send({type:'ready'});
        setTimeout(()=>{ if(!ctx){ ctx = {gateway:opts.gateway||'GENEXXO', user:null, grants:['feed','profile'], data:opts.seed?opts.seed():null, standalone:true}; res(ctx); } }, 700);
      });
    },
    save(data){ if(ctx && !ctx.standalone) send({type:'save', data}); },
    post(text, badge){
      return new Promise(res => {
        if(!ctx || ctx.standalone){ res(false); return; }
        onPosted = res; send({type:'post', text, badge});
        setTimeout(()=>{ if(onPosted===res){ onPosted=null; res(false); } }, 3000);
      });
    },
    can(p){ return !!(ctx && ctx.grants.includes(p)); },
    /* Helpers every demo app wants: a PRNG seeded by a string (forecasts that change daily but hold
       steady within a day), today-relative dates, and escaping for anything user-typed. */
    rng(seedStr){ let h=2166136261; for(const c of String(seedStr)) h=Math.imul(h^c.charCodeAt(0),16777619);
      return () => { h^=h<<13; h^=h>>>17; h^=h<<5; return ((h>>>0)%100000)/100000; }; },
    today(off){ const d=new Date(); d.setHours(12,0,0,0); d.setDate(d.getDate()+(off||0)); return d; },
    iso(off){ return GX.today(off).toISOString().slice(0,10); },
    day(d, opts){ return new Date(d).toLocaleDateString('en-GB', opts||{weekday:'short', day:'numeric', month:'short'}); },
    esc(s){ return String(s==null?'':s).replace(/[&<>"]/g, c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c])); },
  };
})();
