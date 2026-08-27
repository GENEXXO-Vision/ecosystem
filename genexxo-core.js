/* GENEXXO — shared core.  Pure, data-derived logic with no DOM and no app state.
   Split out 2026-08-26 so the mobile and desktop shells CANNOT diverge on the two things
   that already bit us once: how a gateway's home tile is resolved, and how search ranks.
   Depends only on genexxo-data.js, which must load first. Load order:
       genexxo-data.js  ->  genexxo-core.js  ->  the shell
   Anything that touches the DOM, `state`, or render() belongs in a shell, not here. */

const sectorOf = k => SECTORS.find(s=>s.key===k);
function accentOf(sec){ const m = sec.g.match(/#[0-9A-Fa-f]{6}/g); return m ? m[m.length-1] : '#111116'; }
function sectorColor(sec){ const m = sec.g.match(/#[0-9A-Fa-f]{6}/g); return m ? m[0] : '#1a1a2e'; }
function gwKeyFromName(name){ return name.replace(/XX$/,'').toLowerCase(); }
/* Sub-group headers: a SECTOR_GATEWAYS entry starting with '#' is a divider label, not a
   gateway (e.g. '#Water Adventure'). Grouped sectors render in file order with a divider
   before each group; plain (header-less) sectors keep their live/fav sort. */
function isGwHeader(x){ return typeof x==='string' && x[0]==='#'; }
function gwSearchText(name){
  const key=gwKeyFromName(name);
  const tags = (typeof GW_TAGS!=='undefined' && GW_TAGS[key]) ? ' '+GW_TAGS[key] : '';
  return (name+tags).toLowerCase();
}
function gwCount(sk){ return (SECTOR_GATEWAYS[sk]||[]).filter(x=>!isGwHeader(x)).length; }
function hasGwGroups(sk){ return (SECTOR_GATEWAYS[sk]||[]).some(isGwHeader); }
/* The XX suffix and the .com ARE the identity — people type "plantxx" and "plantxx.com" as
   readily as "plant", and used to get nothing: gwRank strips XX off the gateway NAME
   (PlantXX → plant) but nothing stripped it off the QUERY, so every test failed on the exact
   name of the thing being searched for. Every form of the query is tried and the best rank
   wins, so adding the suffix can only ever help — it can never remove a result you'd have had.
   The trailing-xx strip needs >1 character left over, or a bare "xx" would match everything. */
function gwQueryForms(q){
  const out=[q];
  const bare=q.replace(/\.com$/,'');
  if(bare!==q && bare) out.push(bare);
  const noxx=bare.replace(/xx$/,'');
  if(noxx!==bare && noxx.length>1) out.push(noxx);
  return out;
}
function gwRank1(name, q){
  const key=gwKeyFromName(name);
  if(key===q) return 0;
  if(key.startsWith(q)) return 1;
  const tags=(typeof GW_TAGS!=='undefined' && GW_TAGS[key]) ? GW_TAGS[key].toLowerCase() : '';
  return tags.split(',').some(t=>t.trim().startsWith(q)) ? 2 : -1;
}
function gwRank(name, q){
  let best=-1;
  for(const f of gwQueryForms(q)){
    const r=gwRank1(name,f);
    if(r>=0 && (best<0 || r<best)) best=r;
  }
  return best;
}
function gwMatchesWide(name, q){ return gwRank(name,q) >= 0; }
/* Every OTHER sector a query hits → [{name, sectors:[key,…]}], nearest-first by tile order.
   Deliberately excludes anything already shown in the active sector's own results, so the
   local list is never diluted — this is a second tier, not a merged one. */
function gwFindElsewhere(q, sk, exclude){
  const hits=new Map();
  for(const k in SECTOR_GATEWAYS){
    if(k===sk) continue;
    for(const n of SECTOR_GATEWAYS[k]){
      if(isGwHeader(n) || exclude.has(n.toLowerCase()) || !gwMatchesWide(n,q)) continue;
      if(!hits.has(n)) hits.set(n,[]);
      hits.get(n).push(k);
    }
  }
  return [...hits].map(([name,sectors])=>({name,sectors}))
    .sort((a,b)=>(gwIsLive(b.name)?1:0)-(gwIsLive(a.name)?1:0) || a.name.localeCompare(b.name));
}
/* "Built out & live" signals (2026-07-27): a gateway is live if it has a real GATEWAYS
   def; a sector is live if any of its gateways are. Drives the green light + list order. */
function gwIsLive(name){ return !!GATEWAYS[gwKeyFromName(name)]; }
function sectorIsLive(sk){ for(const k in GATEWAYS){ if(gwSecOf(GATEWAYS[k])===sk) return true; } return false; }
const _homeSecCache = new Map();   // taxonomy is static after load; this is called per rendered row
function gwHomeSector(name, prefer){
  const cacheKey = name+'|'+(prefer||'');
  if(_homeSecCache.has(cacheKey)) return _homeSecCache.get(cacheKey);
  const out = _gwHomeSector(name, prefer);
  _homeSecCache.set(cacheKey, out);
  return out;
}
function gwSecOf(g){ return (g && g.name) ? (gwHomeSector(g.name, g.sector) || g.sector) : (g && g.sector); }
function _gwHomeSector(name, prefer){
  const k = gwKeyFromName(name);
  const inSector = sk => (SECTOR_GATEWAYS[sk]||[]).some(n=>!isGwHeader(n)&&gwKeyFromName(n)===k);
  // A dual-use gateway's home is declared, not inferred — and it outranks `prefer`,
  // so arriving from a guest tile never re-homes the gateway to that tile.
  if(GW_HOME[k] && inSector(GW_HOME[k])) return GW_HOME[k];
  if(prefer && inSector(prefer)) return prefer;
  for(const sk in SECTOR_GATEWAYS){ if(inSector(sk)) return sk; }
  // Not a gateway in the taxonomy any more — CryptoXX became a sector tile in its own right.
  if(SECTORS.some(s=>s.key===k)) return k;
  const decl = GATEWAYS[k] && GATEWAYS[k].sector;
  return (decl && sectorOf(decl)) ? decl : (prefer || null);
}
function getGateway(name, sectorKey){
  const key = gwKeyFromName(name);
  // Real gateway: return a shallow clone carrying the RESOLVED sector, so the shared GATEWAYS
  // def is never mutated but the drawer/back-target follow the current taxonomy.
  if (GATEWAYS[key]){
    const home = gwHomeSector(name, sectorKey);
    return home && home!==GATEWAYS[key].sector ? {...GATEWAYS[key], sector:home} : GATEWAYS[key];
  }
  const sec = sectorOf(sectorKey) || SECTORS[0];
  const acc = accentOf(sec);
  return {
    name, domain:key+'xx.com'.replace('xxxx','xx'), emoji:sec.icon, sector:sec.key, live:false,
    tagline:'The '+name.replace('XX','')+' Universe',
    theme:{bg:'#101014',text:'#EDEDF0',cardBg:'rgba(255,255,255,.04)',cardBorder:'rgba(255,255,255,.07)',headerBg:sec.g,accent:acc,accentAlt:acc,dark:true},
    gradient:sec.g, stats:{members:'—',brands:'—',agents:'—'},
    spaces:['All Feed'], trending:[], brandZones:[], apps:[],
    feed:[], prompts:['What can I do in '+name+'?'], structural:true,
  };
}
function domainOf(name){ return gwKeyFromName(name)+'xx.com'; }
/* Gateway row label: one line, "DietXX.com", with the TLD a shade lighter (2026-08-25).
   Rows used to stack the name over its full domain, which repeated the name back at you
   and cost a line in every list. Inherits colour and fades via opacity, so it still reads
   correctly on the accent-coloured active row.
   The <wbr> is the only break opportunity in the label, so a long one (Environmental-
   scienceXX.com) drops just the .com to a second line instead of overflowing the row and
   shoving the favourite star off the edge. Short labels are unaffected — <wbr> only breaks
   when the line actually needs it. Rows carrying this must set min-width:0 on the flex
   text wrapper, or the unbreakable name still refuses to shrink. */
function gwLabel(name){ return `${name}<wbr><span class="tld">.com</span>`; }
/* Does a sector match a drawer query? Name + key, as before, plus light plural tolerance
   so a singular tile name (Pet, Book, Drink) is still found by the plural people type.
   Deliberately NOT matching the tag line — including it turned "sport" into four hits. */
function secSearchHit(s, q){
  if(!q) return true;
  const hay = (s.name+' '+s.key).toLowerCase();
  if(hay.includes(q)) return true;
  const singular = q.replace(/(?:es|s)$/,'');          // pets → pet, watches → watch
  return singular.length>2 && hay.includes(singular);
}
function gwGroupsOf(sk){                       // [{name,count,index}] in file order
  const names=SECTOR_GATEWAYS[sk]||[]; const groups=[]; let gi=-1;
  for(const n of names){
    if(isGwHeader(n)){ groups.push({name:n.slice(1), count:0, index:++gi}); }
    else if(gi>=0){ groups[gi].count++; }
  }
  return groups;
}
/* resolve any fav key to display data — live gateways from GATEWAYS, structural
   ones synthesized from their sector (so every gateway can be favourited) */
function gwMetaFromKey(k){
  const g = GATEWAYS[k];
  if(g) return {name:g.name, sector:gwHomeSector(g.name, g.sector)||g.sector, emoji:g.emoji, gradient:g.gradient, domain:g.domain, live:true};
  for(const sk in SECTOR_GATEWAYS){
    const name = SECTOR_GATEWAYS[sk].find(n=>!isGwHeader(n)&&gwKeyFromName(n)===k);
    if(name){ const s=sectorOf(sk); return {name, sector:sk, emoji:s.icon, gradient:s.g, domain:domainOf(name), live:false}; }
  }
  return null;
}
