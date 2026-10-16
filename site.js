/* GENEXXO WEBSITE v2 — shared chrome (2026-10-16)
   One source for the top bar, menu drawer, footer and cookie sheet, so the pages can't drift apart.
   A page says who it is with <body data-page="…">; the matching link is marked "on".
   Logo paths are the app's own (welcomeSplash in genexxo-app.html). */
document.documentElement.classList.add('js');
const XX='M203.7,1.8h-8.9l15.3,23.1,4.6-6.5-11-16.6Z M245.5,38.8l10.9,16.5h8.9l-15.3-23.1-4.5,6.7Z M247.6,28.5l-4.5,6.7h0l-8.7,13.2-4.4,6.7-4.4-6.7-8.7-13.2-13.2,20h-8.9l16.7-25.3h0s.9-1.4.9-1.4h0l4.4-6.7,8.7-13.2,4.4-6.7,4.4,6.7,8.7,13.2,13.2-20h8.9l-17.6,26.7Z M238.7,28.5l-8.7-13.2-8.7,13.2,8.7,13.2,8.7-13.2Z';
const GENE='M52.2,17.2c-2-5.1-5.2-9.1-9.7-11.9-4.4-2.8-9.5-4.2-15.2-4.2s-9.6,1.2-13.8,3.5c-4.2,2.3-7.5,5.6-9.9,9.7C1.2,18.5,0,23.2,0,28.4s1.2,9.9,3.7,14.1c2.4,4.2,5.7,7.4,9.9,9.7,4.2,2.3,8.8,3.5,13.8,3.5s8.9-1,12.8-3.1c3.8-2.1,6.9-4.9,9.3-8.4,2.4-3.5,3.9-7.3,4.4-11.5v-6.9h-29.5v7h20.1c-.7,4.6-2.5,8.2-5.5,10.9-3,2.7-6.9,4-11.6,4s-6.7-.8-9.5-2.4c-2.8-1.6-4.9-3.9-6.5-6.8-1.6-3-2.4-6.4-2.4-10.2s.8-7.2,2.4-10.2c1.6-2.9,3.7-5.2,6.5-6.8,2.8-1.6,5.9-2.4,9.5-2.4s6.1.7,8.6,2c2.5,1.4,4.4,3.4,5.8,6h10.6Z M92.1,8.8V1.7h-29.6v53.6h29.6v-7.2h-20.8v-16.4h18.5v-7.2h-18.5v-15.7h20.8Z M146.9,1.7h-8.8v39.9L111.7,1.7h-8.8v53.6h8.8V15.3l26.4,40h8.8V1.7Z M188,8.8V1.7h-29.6v53.6h29.6v-7.2h-20.8v-16.4h18.5v-7.2h-18.5v-15.7h20.8Z';
const OH='M292.5,55.8c5,0,9.6-1.2,13.8-3.5,4.2-2.3,7.5-5.6,9.9-9.8,2.4-4.2,3.6-8.9,3.6-14.1s-1.2-9.9-3.6-14.1c-2.4-4.2-5.7-7.4-9.9-9.7-4.2-2.3-8.8-3.5-13.8-3.5s-9.6,1.2-13.8,3.5c-4.2,2.3-7.5,5.6-9.9,9.7-2.4,4.2-3.7,8.9-3.7,14.1s1.2,10,3.7,14.1c2.4,4.2,5.8,7.5,9.9,9.8,4.2,2.3,8.8,3.5,13.8,3.5Z M292.5,48.2c-3.5,0-6.7-.8-9.5-2.4-2.8-1.6-4.9-3.9-6.5-6.9-1.6-3-2.4-6.5-2.4-10.4s.8-7.4,2.4-10.4c1.6-3,3.7-5.3,6.5-6.9,2.8-1.6,5.9-2.4,9.5-2.4s6.7.8,9.5,2.4c2.8,1.6,4.9,3.9,6.5,6.9,1.6,3,2.4,6.4,2.4,10.4s-.8,7.4-2.4,10.4c-1.6,3-3.7,5.3-6.5,6.9-2.8,1.6-5.9,2.4-9.5,2.4Z';
const $=id=>document.getElementById(id);
const wordmark=fill=>`<g fill="${fill}"><path d="${GENE}"/><path d="${XX}"/><path d="${OH}"/></g>`;
const MONO='<span class="gx-mono"></span>';
const DEMO='genexxo-app.html';
const TERMS='https://www.genexxovision.com/assets/terms-of-service.pdf', PRIVACY='https://www.genexxovision.com/assets/privacy-policy.pdf';

const PAGES=[
  ['index','index.html','Home'],
  ['collection','collection.html','The Collection','The Collection'],
  ['gallery','domain-gallery.html','Domain Gallery','Gallery'],
  ['layer','ultimate-asset.html','One Organizing Layer','One Layer'],
  ['edge','the-edge.html','The Winning Edge','The Edge'],
  ['about','about.html','About Us','About'],
];

(function chrome(){
  const me=document.body.dataset.page||'';
  const esc=s=>s.replace(/&/g,'&amp;');
  const top=document.createElement('header');
  top.className='top'; top.id='top';
  top.innerHTML=`<div class="top-in">
    <a class="brand" href="index.html" aria-label="GENEXXO home"><span class="gx-dot">${MONO}</span><span class="gx-word">GENEXXO</span></a>
    <nav class="links" aria-label="Main">${PAGES.slice(1).map(([k,h,,s])=>`<a href="${h}"${k===me?' class="on" aria-current="page"':''}>${s}</a>`).join('')}</nav>
    <a class="btn btn-dark cta" href="${DEMO}"><span>Launch<span class="lbl-long"> the demo</span> →</span></a>
    <button class="menu" aria-label="Open menu" onclick="nav(true)"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M3 6h14M3 10h14M3 14h14"/></svg></button>
  </div>`;
  const dr=document.createElement('div');
  dr.innerHTML=`<div class="scrim" onclick="nav(false)"></div>
  <aside class="drawer" aria-label="Menu">
    <div class="dr-head"><span class="gx-dot">${MONO}</span><span class="gx-word">GENEXXO</span><button class="dr-x" aria-label="Close menu" onclick="nav(false)">✕</button></div>
    <div class="dr-body">
      ${PAGES.map(([k,h,l])=>`<a href="${h}"${k===me?' class="on"':''}>${l}</a>`).join('')}
      <a class="btn btn-dark dr-demo" href="${DEMO}">Launch the demo →</a>
    </div>
  </aside>`;
  document.body.prepend(top,...dr.children);

  const ft=document.createElement('footer');
  ft.innerHTML=`<a href="index.html" aria-label="GENEXXO home"><svg viewBox="0 0 320 57.2" role="img" aria-label="GENEXXO">${wordmark('#231F20')}</svg></a>
    <div class="t">The Organizing Layer for the Internet</div>
    <div class="fl">${PAGES.slice(1).map(([,h,l])=>`<a href="${h}">${l}</a>`).join('')}<a href="${DEMO}">Demo</a></div>
    <div class="legal">© ${new Date().getFullYear()} GENEXXO Vision Limited · Company No. 022622V · Isle of Man<br><a href="${TERMS}">Terms of Service</a> · <a href="${PRIVACY}">Privacy Policy</a> · <a href="#" onclick="cookieOpen();return false">Cookies</a></div>`;
  document.body.append(ft);

  const ck=document.createElement('div');
  ck.className='cookie'; ck.id='cookie'; ck.setAttribute('role','dialog'); ck.setAttribute('aria-label','Cookie preferences');
  ck.innerHTML=`<b>Cookie preferences</b>
    <p>We use cookies to ensure the website functions properly and to analyze traffic. You can choose to allow only necessary cookies or enable optional cookies for analytics. Please read our <a href="${TERMS}">Terms of Service</a> and <a href="${PRIVACY}">Privacy Policy</a> before making your selection.</p>
    <div class="row"><button class="btn btn-ghost" onclick="cookieSet('rejected')">Reject optional</button><button class="btn btn-white" onclick="cookieSet('accepted')">Accept optional</button></div>`;
  document.body.append(ck);
})();

function nav(on){document.body.classList.toggle('nav-open',on)}
addEventListener('keydown',e=>{if(e.key==='Escape')nav(false)});

/* the top bar hides on the way down and returns on the way up, like the app's chrome */
(function(){let y=scrollY;addEventListener('scroll',()=>{const n=scrollY;$('top').classList.toggle('hidden',n>y&&n>200&&!document.body.classList.contains('nav-open'));y=n},{passive:true})})();

/* reveal on scroll — call again after a page adds .rv elements */
function reveal(){
  const els=document.querySelectorAll('.rv:not(.in)');
  if(!('IntersectionObserver' in window)){els.forEach(e=>e.classList.add('in'));return}
  const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{rootMargin:'0px 0px -8% 0px'});
  els.forEach(e=>io.observe(e));
}
addEventListener('DOMContentLoaded',reveal);

/* cookies: the same key as the live site, so a choice made there carries over */
function cookieSet(c){try{localStorage.setItem('genexxo_cookies',c)}catch(e){}$('cookie').classList.remove('show')}
function cookieOpen(){$('cookie').classList.add('show')}
(function(){let seen=null;try{seen=localStorage.getItem('genexxo_cookies')}catch(e){}if(!seen)setTimeout(cookieOpen,3600)})();

/* domains in their sector's colour (site-data.js, built from the app's taxonomy by make-data.js) */
const dColour=w=>(window.SITE_DATA&&SITE_DATA.colour[w.toLowerCase()])||'#111116';
const dTile=w=>`<div class="dtile" style="background:${dColour(w)}">${MONO}<b>${w}<em>XX.com</em></b></div>`;
const dChip=w=>`<span class="dom"><i style="background:${dColour(w)}">${MONO}</i>${w}XX<em>.com</em></span>`;

/* the demo opens in its own tab, so the website stays where you left it */
addEventListener('DOMContentLoaded',()=>document.querySelectorAll(`a[href="${DEMO}"]`).forEach(a=>{a.target='_blank';a.rel='noopener'}));
