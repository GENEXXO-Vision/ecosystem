/* ═════════ SCULPTUREXX — an Art demo gateway (2026-11-21, Sean; build -90) ═════════
   Built with the _tools/README.md recipe. Palette (light): marble white, terracotta, bronze. Home sector: Art.
   Every sculptor, park, studio and work here is fictional; places are real. Photos are of classical
   (public-domain) statues, makers at work and unattributed studio pieces; no named contemporary artworks. */
(function(){
const U = (id, w, h) => `https://images.unsplash.com/photo-${id}?w=${w}&h=${h}&fit=crop&q=75`;
const CLAY = 'linear-gradient(135deg,#E08A5F,#A34E2A)', BRONZE = 'linear-gradient(135deg,#C9A15A,#7A5A22)', STONE = 'linear-gradient(135deg,#D8D3CB,#8E877C)', SLATE = 'linear-gradient(135deg,#6B7280,#2F343C)';

GATEWAYS.sculpture = {
  name: 'SculptureXX', domain: 'sculpturexx.com', emoji: '🗿', sector: 'art', live: true,
  tagline: 'The Sculpture Universe',
  theme: {
    bg: '#FBF8F4', text: '#2A2420', cardBg: '#FFFFFF', cardBorder: 'rgba(163,78,42,.12)',
    headerBg: 'linear-gradient(180deg,#F3E9DF,#FBF8F4)', accent: '#B85A33', accentAlt: '#8A6A2E', dark: false
  },
  gradient: 'linear-gradient(135deg,#2F343C,#B85A33,#E9DFD2)',
  stats: { members: '2.4M', brands: '1,300+', agents: '39' },
  spaces: ['All Feed', 'Clay', 'Stone', 'Bronze', 'Sculpture Parks', 'Collect'],
  trending: ['#PortraitHead', '#StoneCarving', '#SculptureTrail'],
  brandZones: [
    { key: 'hollow-lane-park', name: 'Hollow Lane Sculpture Park', color: '#B85A33', tier: 'Founding Partner', tag: 'A sculpture park and foundry in Wiltshire' },
    { key: 'wedge-wire', name: 'Wedge & Wire', color: '#A34E2A', tier: 'Brand Zone', tag: 'Clay, tools and armatures from Stoke-on-Trent' },
    { key: 'plinth-gallery', name: 'Plinth', color: '#8A6A2E', tier: 'Brand Zone', tag: 'Small sculptures by living artists, from £60' },
    { key: 'carve-club', name: 'Carve Club', color: '#6B7280', tier: 'Brand Zone', tag: 'Stone carving weekends in the Cotswolds' }
  ],
  apps: [
    { name: 'Clay Shrink', color: '#A34E2A', desc: 'How big will it be after the kiln?', key: 'clay-shrink', url: 'apps/clay-shrink.html',
      dev: 'Wedge & Wire', rating: '4.8', users: '310K', perms: ['profile', 'feed'],
      tagline: 'Make it the right size, wet.',
      about: 'Clay shrinks as it dries and again when it’s fired. Pick your clay body and Clay Shrink tells you how big a piece will be after firing, or how big to make it wet to hit a finished size.',
      features: ['Eight common clay bodies', 'Wet to fired, or fired to wet', 'Centimetres or inches', 'Save your pieces'],
      shots: ['apps/clay-shrink/shot-1.jpg', 'apps/clay-shrink/shot-2.jpg', 'apps/clay-shrink/shot-3.jpg'],
      version: '1.6', size: '7 KB',
      updates: [ { v: '1.6', ago: 3, notes: 'Work backwards from a finished size.' }, { v: '1.3', ago: 90, notes: 'Paper clay and porcelain.' }, { v: '1.0', ago: 240, notes: 'Signed in with GENEXXO.' } ],
      reviews: [ { who: '@clay_clara', stars: 5, ago: 2, text: 'My commission came out exactly the size I promised.' }, { who: '@weekend_carver', stars: 4, ago: 11, text: 'Simple and spot on.' }, { who: '@studio_sam', stars: 5, ago: 26, text: 'Should have had this years ago.' } ] },
    { name: 'Head Measure', color: '#8A6A2E', desc: 'Proportions for a portrait head, from your sitter’s measurements', key: 'head-measure', url: 'apps/head-measure.html',
      dev: 'Carve Club', rating: '4.9', users: '260K', perms: ['profile', 'feed'],
      tagline: 'Eyes are halfway. Start there.',
      about: 'Head Measure takes the head height of your sitter (or a standard head) and marks where the eyes, nose, mouth and ears sit, scaled to the size you’re working at. A quick reference before you add clay or take stone away.',
      features: ['Landmarks scaled to your piece', 'Front and side views', 'Life size, half or any scale', 'Notes for each landmark'],
      shots: ['apps/head-measure/shot-1.jpg', 'apps/head-measure/shot-2.jpg', 'apps/head-measure/shot-3.jpg'],
      version: '2.2', size: '9 KB',
      updates: [ { v: '2.2', ago: 4, notes: 'Side view.' }, { v: '2.0', ago: 70, notes: 'Any scale.' }, { v: '1.4', ago: 210, notes: 'Signed in with GENEXXO.' } ],
      reviews: [ { who: '@portrait_pete', stars: 5, ago: 1, text: 'Caught my ears sitting far too high. Again.' }, { who: '@clay_clara', stars: 5, ago: 13, text: 'Lives on the stand next to my calipers.' }, { who: '@new_sculptor_nat', stars: 4, ago: 35, text: 'A great place to start.' } ] },
    { name: 'Casting Calc', color: '#B85A33', desc: 'How much bronze will your wax need?', key: 'casting-calc', url: 'apps/casting-calc.html',
      dev: 'Hollow Lane Sculpture Park', rating: '4.7', users: '120K', perms: ['profile', 'feed'],
      tagline: 'Weigh the wax, know the metal.',
      about: 'Weigh your finished wax, add the sprues and Casting Calc estimates the bronze, aluminium or silver you’ll need and roughly what it will cost. Your foundry has the final say.',
      features: ['Bronze, aluminium, brass or silver', 'Allowance for sprues and cups', 'Rough cost at today’s price', 'Keep a list of your casts'],
      shots: ['apps/casting-calc/shot-1.jpg', 'apps/casting-calc/shot-2.jpg', 'apps/casting-calc/shot-3.jpg'],
      version: '1.3', size: '7 KB',
      updates: [ { v: '1.3', ago: 6, notes: 'Silver for small pieces.' }, { v: '1.1', ago: 110, notes: 'Rough costs.' }, { v: '1.0', ago: 250, notes: 'Signed in with GENEXXO.' } ],
      reviews: [ { who: '@studio_sam', stars: 5, ago: 4, text: 'Finally know what to budget before I call the foundry.' }, { who: '@portrait_pete', stars: 4, ago: 19, text: 'Handy for quotes.' }, { who: '@clay_clara', stars: 5, ago: 40, text: 'My first bronze, and no surprises.' } ] }
  ],
  pros: [
    { key: 'marcus-odum-sculpture', name: 'Marcus Odum Portrait Sculpture', color: '#8A6A2E', tag: 'Portrait heads and figures in clay and bronze · commissions and classes', role: 'Portrait sculptor',
      img: U('1570158268183-d296b2892211', 800, 800), base: 'Bristol, UK', langs: 'English, Yoruba', years: 18, rating: '4.9', reviewsN: 342, cur: '£',
      creds: ['Fellow of a British sculpture society', 'Public portrait commissions', 'Teaches portrait from life'],
      about: 'Marcus models portrait heads from life, in clay, then casts them in bronze. His weekend courses take complete beginners from a block of clay to a recognisable head, using calipers, careful looking and a lot of patience.',
      services: [ { id: 'course', name: 'Portrait head weekend', dur: '2 days', price: 260, desc: 'From life, with a model. Clay and tools included.' },
                  { id: 'commission', name: 'Portrait commission (clay)', dur: 'Four sittings', price: 2400, desc: 'A life-size head in clay, ready to cast.' },
                  { id: 'crit', name: 'Studio critique', dur: '45 minutes', price: 50, desc: 'Bring a piece in progress, or show it on a call.' } ],
      avail: { days: [2, 4, 6, 0], times: ['10:00', '14:00'] },
      reviews: [ { who: '@portrait_pete', stars: 5, ago: 5, text: 'Two days and my head actually looks like the model.' }, { who: '@new_sculptor_nat', stars: 5, ago: 18, text: 'Patient and very precise.' }, { who: '@studio_sam', stars: 5, ago: 42, text: 'His critiques changed how I look.' } ],
      posts: [ { ago: 1, text: 'Measure, then look, then measure again. Calipers stop you making everyone’s head the shape of your own.' }, { ago: 7, text: 'January portrait weekends are open.' } ],
      tier: 'Pro Zone', verified: true },
    { key: 'hannah-yew-stone', name: 'Hannah Yew Stone Carving', color: '#6B7280', tag: 'Letter cutting and stone carving · Bath stone, Portland, slate', role: 'Stone carver',
      img: U('1758599543111-36ce5c34fceb', 800, 800), base: 'Bath, UK', langs: 'English', years: 14, rating: '4.9', reviewsN: 218, cur: '£',
      creds: ['Trained as a cathedral mason', 'Letter-cutter for memorials and buildings', 'Carving tutor'],
      about: 'Hannah trained in a cathedral stoneyard and now carves lettering, garden pieces and memorials. Her one-to-one sessions teach how to hold a chisel, read the grain of the stone and keep your hands and lungs safe.',
      services: [ { id: 'taster', name: 'One-to-one carving taster', dur: '3 hours', price: 120, desc: 'Bath stone, tools, goggles and masks provided.' },
                  { id: 'letter', name: 'Letter-cutting lesson', dur: '3 hours', price: 120, desc: 'Cut your first letters in slate.' },
                  { id: 'commission', name: 'Carved house sign', dur: '4 to 6 weeks', price: 480, desc: 'Hand-cut in slate or stone.' } ],
      avail: { days: [1, 3, 5, 6], times: ['09:30', '13:30'] },
      reviews: [ { who: '@weekend_carver', stars: 5, ago: 6, text: 'I cut my initials in slate. Hooked.' }, { who: '@clay_clara', stars: 5, ago: 22, text: 'Calm and so skilled.' }, { who: '@garden_gina', stars: 5, ago: 48, text: 'Our house sign is beautiful.' } ],
      posts: [ { ago: 2, text: 'Carving stone makes fine dust. Mask, water spray and a good extractor, every time.' } ],
      tier: 'Pro Zone', verified: true },
    { key: 'ola-adeyemi-clay', name: 'Ola Adeyemi Clay Studio', color: '#A34E2A', tag: 'Clay sculpture for beginners · animals, figures and faces', role: 'Clay sculpture teacher',
      img: U('1554727242-741c14fa561c', 800, 800), base: 'London, UK · and online', langs: 'English', years: 10, rating: '4.9', reviewsN: 410, cur: '£',
      creds: ['MA in sculpture', 'Runs a Hackney community studio', 'Teaches adults and teens'],
      about: 'Ola’s evening classes are where many people make their first sculpture: an animal, a hand, then a small figure. Everything is fired in the studio kiln and you take it home.',
      services: [ { id: 'class', name: 'Evening class', dur: '2.5 hours', price: 38, desc: 'Clay, tools and firing included.' },
                  { id: 'course', name: 'Six-week beginners course', dur: '6 × 2.5 hours', price: 195, desc: 'Animal, hand, head and a small figure.' },
                  { id: 'online', name: 'Online sculpt-along', dur: '90 minutes', price: 15, desc: 'With air-dry clay at home.' } ],
      avail: { days: [1, 2, 3, 4], times: ['18:30', '19:00'] },
      reviews: [ { who: '@new_sculptor_nat', stars: 5, ago: 3, text: 'Made a hare in my first class. A hare!' }, { who: '@clay_clara', stars: 5, ago: 15, text: 'A lovely studio and great teaching.' }, { who: '@studio_sam', stars: 4, ago: 33, text: 'Busy, so book early.' } ],
      posts: [ { ago: 3, text: 'Hollow out anything thicker than your thumb before it’s fired, or it might crack in the kiln.' } ],
      tier: 'Pro Zone', verified: true }
  ],
  communities: [
    { key: 'clay-and-chisel', name: 'Clay & Chisel', domain: 'makers.sculpturexx.com', color: '#B85A33', img: U('1762628727567-250080e7e9a3', 900, 500),
      scope: 'Global', where: 'Studios everywhere', members: 142000, online: 1980, tagline: 'Make it in three dimensions.',
      about: 'Sculptors of every level, in clay, stone, wood, wax and metal. Works in progress, technique questions, kiln disasters and a monthly challenge.',
      rules: ['Show your process, not just the finish', 'Critique kindly and specifically', 'Credit your teachers'],
      mods: ['@clay_clara', '@studio_sam'],
      threads: [ { t: 'Show your first portrait head (be brave)', by: '@portrait_pete', tag: 'SHOW', replies: 860, ago: 0, votes: 2240 }, { t: 'December challenge: a small figure a day', by: '@studio_sam', tag: 'CHALLENGE', replies: 412, ago: 1, votes: 880 }, { t: 'Why did my piece crack in the kiln?', by: '@new_sculptor_nat', tag: 'Q&A', replies: 238, ago: 2, votes: 410 }, { t: 'Best stone for a first carving?', by: '@weekend_carver', tag: 'STONE', replies: 156, ago: 3, votes: 290 } ],
      events: [ { title: 'Live portrait sculpt-along', day: 4, time: '19:00', where: 'Online' }, { title: 'December challenge starts', day: 10, time: '09:00', where: 'Online' } ] },
    { key: 'bristol-sculptors', name: 'Bristol Sculptors', domain: 'bristol.sculpturexx.com', color: '#6B7280', img: U('1758522277740-8ed5be25d2b6', 900, 500),
      scope: 'Local', where: 'Bristol', members: 1400, online: 26, tagline: 'Shared models, shared kilns, shared tea.',
      about: 'Sculptors in Bristol and around: weekly life sessions, a shared kiln in Bedminster, studio swaps and an open studios weekend every December.',
      rules: ['Book the kiln on the sheet', 'Pay the model on the night', 'Leave the studio cleaner than you found it'],
      mods: ['@studio_sam', '@bristol_bev'],
      threads: [ { t: 'Open studios: who’s showing?', by: '@bristol_bev', tag: 'OPEN STUDIOS', replies: 38, ago: 0, votes: 84 }, { t: 'Friday life session: new model booked', by: '@studio_sam', tag: 'LIFE', replies: 22, ago: 1, votes: 46 }, { t: 'Anyone selling a banding wheel?', by: '@new_sculptor_nat', tag: 'SWAP', replies: 14, ago: 2, votes: 20 } ],
      events: [ { title: 'Life modelling session', day: 6, time: '19:00', where: 'Bedminster, Bristol' }, { title: 'Open studios weekend', day: 15, time: '11:00', where: 'Bedminster, Bristol' } ] }
  ],
  feed: [
    { av: 'SX', avBg: CLAY, author: 'SculptureXX Editorial', sub: 'Featured · Just now', badge: '★ FEATURED',
      text: 'From a lump of clay to a bronze in a park. Classes, carving, casting, sculpture trails and the people who make things you can walk around. Sculpture, all in one place.',
      img: U('1447758902204-48010b87c24d', 800, 600), eng: '♡ 32.4K · 💬 2.2K · ↗ 3.8K' },
    { av: 'PP', avBg: STONE, author: '@portrait_pete', sub: 'Clay · Just now', badge: 'COMMUNITY',
      text: 'My first portrait head, from life, after a weekend course. It’s my neighbour. He says it’s flattering 🗿',
      img: U('1747191092806-c7da11881986', 800, 600), eng: '♡ 12.6K · 💬 1.4K · ↗ 380' },
    { av: 'HL', avBg: CLAY, author: 'Hollow Lane Sculpture Park', sub: 'Founding Partner · Brand Zone', badge: 'BRAND ZONE',
      text: '<b>The Winter Trail</b> is open: 60 sculptures across 200 acres of Wiltshire, lit by lanterns on Saturday nights until Christmas.',
      img: U('1613957871189-f6165548ae02', 800, 600), eng: '♡ 10.2K · 💬 860 · ↗ 1.6K' },
    { av: 'WW', avBg: CLAY, author: 'Wedge & Wire', sub: 'Brand Zone · 1h ago', badge: 'BRAND ZONE',
      text: 'Our <b>Grogged Sculpting Clay</b> is dug and pugged in Stoke: forgiving to model, strong enough for big hollow pieces.',
      img: U('1758522277297-e7c5c327fd4f', 800, 600), eng: '♡ 4.8K · 💬 360 · ↗ 420' },
    { av: 'WC', avBg: SLATE, author: '@weekend_carver', sub: 'Stone · 2h ago', badge: 'COMMUNITY',
      text: 'Three days, one block of Bath stone, a lot of dust. The first time I’ve made something I can’t put in a drawer.',
      img: U('1772211506168-1cbfcb361be8', 800, 600), eng: '♡ 5.6K · 💬 480 · ↗ 160' },
    { av: 'PL', avBg: BRONZE, author: 'Plinth', sub: 'Brand Zone · 4h ago', badge: 'BRAND ZONE',
      text: 'Gold-mended porcelain by a Sheffield artist: one of 40 small sculptures in our <b>Christmas Edit</b>, all under £300.',
      img: U('1637666505754-7416ebd70cbf', 800, 600), eng: '♡ 3.9K · 💬 280 · ↗ 340' },
    { av: 'MO', avBg: BRONZE, author: 'Marcus Odum Portrait Sculpture', sub: 'Clay · 6h ago', badge: 'PRO ZONE',
      text: 'Halfway through a commission. The head is roughed out; now the slow part, an eighth of an inch at a time.',
      img: U('1721009714211-a4d1da7d05f4', 800, 600), eng: '♡ 2.8K · 💬 190 · ↗ 260' }
  ],
  prompts: ['Find a beginners sculpture class in Bristol', 'Which sculpture parks are open this winter?', 'How do I stop clay cracking in the kiln?', 'What does it cost to cast a small bronze?'],
  businesses: ['severn-art-foundry', 'isle-quarry-stone']
};

/* the four Brand Zones and two Business Zones */
const brand = (o) => Object.assign({ kind: 'brand', gw: 'sculpture', verified: true }, o);
Object.assign(ZONES, {
  'hollow-lane-park': brand({ key: 'hollow-lane-park', name: 'Hollow Lane Sculpture Park', color: '#B85A33', gradient: CLAY, tier: 'Founding Partner',
    tagline: 'A sculpture park and foundry in Wiltshire', stats: { followers: '118K', content: '640', products: '16' },
    ad: { badge: 'Featured', img: U('1548811579-017cf2a4268b', 760, 760), hl: 'Sixty sculptures. Two hundred acres.', sub: 'The Winter Trail, lit by lanterns on Saturday nights.', meta: 'From £9' },
    products: [
      { name: 'Winter Trail: Lantern Night', price: '£16', tag: 'FLAGSHIP', emoji: '🏮', rating: 4.9, reviews: 2860, cat: 'visits', special: true, desc: 'The sculpture trail after dark, lit by lanterns, with mulled drinks at the barn.', features: ['Saturdays until 19 December', 'Under-12s free', 'Step-free route'], review: { who: 'Gina H.', text: 'The bronzes by lantern light are something else.' } },
      { name: 'Day Ticket', price: '£9', tag: 'BESTSELLER', emoji: '🎟️', rating: 4.8, reviews: 4120, cat: 'visits', desc: 'The park, the galleries and the café, any day.', features: ['Dogs on leads welcome'], review: { who: 'Pete D.', text: 'Bring wellies.' } },
      { name: 'Foundry Day', price: '£145', emoji: '🔥', rating: 4.9, reviews: 420, cat: 'courses', desc: 'Make a small wax and watch the pour. We send your bronze three weeks later.', features: ['Ages 16 and up'], review: { who: 'Sam T.', text: 'My first bronze. I may cry.' } },
      { name: 'Annual Pass', price: '£48', tag: 'SPECIAL', emoji: '💛', rating: 4.9, reviews: 860, cat: 'membership', special: true, desc: 'Unlimited visits, lantern nights and a members’ preview of each new show.', features: ['A year'], review: { who: 'Bev K.', text: 'We go every month.' } }
    ],
    shopCats: [ { key: 'visits', label: 'Visit', icon: '🎟️' }, { key: 'courses', label: 'Courses', icon: '🔥' }, { key: 'membership', label: 'Members', icon: '💛' } ],
    feed: [
      { type: 'post', sub: 'Brand post · 2h', text: 'Clear skies over <b>The Winter Trail</b> today. Lantern nights run every Saturday until 19 December.', img: U('1786709287840-d6de3883ef1f', 800, 440), eng: '♡ 10.2K · 💬 860 · ↗ 1.6K', product: 0 },
      { type: 'post', sub: 'In the foundry · Yesterday', text: 'A plaster study waiting for its mould, ready for next week’s pour.', img: U('1604854574894-1be73ca43cb8', 800, 440), eng: '♡ 3.4K · 💬 240' },
      { type: 'community', who: 'Gina H.', whoBg: STONE, sub: 'Community · 1d', text: 'Is the lantern trail OK with a wheelchair? It’s my dad’s birthday.', eng: '♡ 380 · 💬 64', reply: 'Hi Gina! Yes: the lantern route is the step-free loop, on compacted paths, about 1.5 km with benches every few hundred metres. Blue Badge parking is right by the barn and we can lend a heated blanket. Happy birthday to your dad! 🏮' }
    ],
    events: [ { zoneEvent: true, tag: 'LIVE', title: 'Hollow Lane Live · A bronze pour from the foundry', when: 'Live now', desc: 'Watch molten bronze poured into twelve moulds live, with the foundry team explaining each step.', registered: 3120, capacity: 8000 } ],
    about: { founded: 'Wiltshire · 1994', story: 'A farm that became a sculpture park after the owners lent a field to an artist friend. Thirty years later it has sixty works, a foundry and a programme of courses. We joined SculptureXX as Founding Partner to bring sculpture to people who think it isn’t for them.', milestones: [['1994', 'The first sculpture in a field'], ['2008', 'Our own foundry'], ['2026', 'Founding Partner on SculptureXX']], values: ['Free for under-12s', 'Step-free routes', 'Living artists first'] } }),

  'wedge-wire': brand({ key: 'wedge-wire', name: 'Wedge & Wire', color: '#A34E2A', gradient: CLAY, tier: 'Brand Zone',
    tagline: 'Clay, tools and armatures from Stoke-on-Trent', stats: { followers: '64.8K', content: '290', products: '120' },
    ad: { badge: 'New', img: U('1758522277401-5a11fb4499f2', 760, 760), hl: 'Clay that forgives you.', sub: 'Grogged Sculpting Clay, dug and pugged in Stoke.', meta: 'From £4' },
    products: [
      { name: 'Grogged Sculpting Clay, 12.5 kg', price: '£18', tag: 'FLAGSHIP', emoji: '🧱', rating: 4.8, reviews: 2460, cat: 'clay', special: true, desc: 'Red or buff, with fine grog for strength. Fires to 1,200°C.', features: ['Low shrinkage', 'Great for hollow pieces'], review: { who: 'Clara M.', text: 'The best modelling clay I’ve used.' } },
      { name: 'Modelling Tool Set', price: '£24', tag: 'BESTSELLER', emoji: '🛠️', rating: 4.8, reviews: 1840, cat: 'tools', desc: 'Twelve boxwood and wire tools in a roll.', features: ['Hand-finished'], review: { who: 'Nat P.', text: 'Everything I need.' } },
      { name: 'Portrait Head Armature', price: '£36', emoji: '🗿', rating: 4.7, reviews: 640, cat: 'tools', desc: 'A steel and aluminium armature on a board, for a life-size head.', features: ['Adjustable height'], review: { who: 'Pete D.', text: 'Solid as a rock.' } },
      { name: 'Spring Calipers', price: '£4', tag: 'SPECIAL', emoji: '📏', rating: 4.6, reviews: 980, cat: 'tools', special: true, desc: 'Steel outside calipers for measuring a sitter.', features: ['20 cm'], review: { who: 'Sam T.', text: 'Cheap and essential.' } }
    ],
    shopCats: [ { key: 'clay', label: 'Clay', icon: '🧱' }, { key: 'tools', label: 'Tools', icon: '🛠️' } ],
    feed: [ { type: 'post', sub: 'Brand post · 1h', text: 'Twelve-and-a-half kilos of <b>Grogged Sculpting Clay</b> becomes one portrait head.', img: U('1758522277297-e7c5c327fd4f', 800, 440), eng: '♡ 4.8K · 💬 360', product: 0 } ],
    events: [ { zoneEvent: true, tag: 'SALE', title: 'Christmas sale: a quarter off tools', when: 'Dec 4 · All day', desc: 'A quarter off every tool and armature, for one day.', registered: 1860, capacity: 5000 } ],
    about: { founded: 'Stoke-on-Trent · 1971', story: 'A family clay works in the Potteries that started selling to sculptors when the local studios asked.', milestones: [['1971', 'The clay works opens'], ['2012', 'Sculpture clays and armatures'], ['2026', 'Brand Zone on SculptureXX']], values: ['Dug in Staffordshire', 'Recycled packaging', 'Advice by phone'] } }),

  'plinth-gallery': brand({ key: 'plinth-gallery', name: 'Plinth', color: '#8A6A2E', gradient: BRONZE, tier: 'Brand Zone',
    tagline: 'Small sculptures by living artists, from £60', stats: { followers: '86.2K', content: '520', products: '340' },
    ad: { badge: 'Featured', img: U('1637666505754-7416ebd70cbf', 760, 760), hl: 'The Christmas Edit.', sub: 'Forty small sculptures, all under £300.', meta: 'From £60' },
    products: [
      { name: 'Mended Bust (porcelain and gold)', price: '£280', tag: 'FLAGSHIP', emoji: '🏺', rating: 4.9, reviews: 120, cat: 'sculpture', special: true, desc: 'A porcelain bust broken and repaired with gold, by a Sheffield artist. One of five.', features: ['Signed', 'Certificate included'], review: { who: 'Bev K.', text: 'Even better in person.' } },
      { name: 'Bronze Hare, small', price: '£240', tag: 'BESTSELLER', emoji: '🐇', rating: 4.9, reviews: 310, cat: 'sculpture', desc: 'A 12 cm bronze hare, cast in Wiltshire.', features: ['Edition of 30'], review: { who: 'Gina H.', text: 'Sits on my desk and makes me happy.' } },
      { name: 'Stone Pebble Form', price: '£60', emoji: '🪨', rating: 4.8, reviews: 260, cat: 'sculpture', desc: 'Hand-carved Portland stone, smooth enough to hold.', features: ['Each one different'], review: { who: 'Pete D.', text: 'A perfect gift.' } },
      { name: 'Gift Card', price: '£50', tag: 'SPECIAL', emoji: '🎁', rating: 4.9, reviews: 180, cat: 'gifts', special: true, desc: 'Let them choose their own piece.', features: ['£50 to £500'], review: { who: 'Sam T.', text: 'Easiest present ever.' } }
    ],
    shopCats: [ { key: 'sculpture', label: 'Sculpture', icon: '🗿' }, { key: 'gifts', label: 'Gifts', icon: '🎁' } ],
    feed: [ { type: 'post', sub: 'Brand post · 4h', text: 'The <b>Christmas Edit</b>: forty pieces by living artists, all under £300.', img: U('1571033690858-b336bfa1dd0f', 800, 440), eng: '♡ 3.9K · 💬 280', product: 0 } ],
    events: [ { zoneEvent: true, tag: 'DEADLINE', title: 'Last orders for Christmas delivery', when: 'Dec 18 · 23:59', desc: 'Order by 18 December for delivery before Christmas.', registered: 640, capacity: 2000 } ],
    about: { founded: 'London · 2019', story: 'A gallery for people who’d love a sculpture but thought they couldn’t afford one. Artists keep 60% of every sale.', milestones: [['2019', 'The first fifty pieces'], ['2023', '300 artists'], ['2026', 'Brand Zone on SculptureXX']], values: ['Artists keep 60%', 'Living artists only', 'Free returns'] } }),

  'carve-club': brand({ key: 'carve-club', name: 'Carve Club', color: '#6B7280', gradient: SLATE, tier: 'Brand Zone',
    tagline: 'Stone carving weekends in the Cotswolds', stats: { followers: '42.6K', content: '240', products: '9' },
    ad: { badge: 'Gift', img: U('1772211506168-1cbfcb361be8', 760, 760), hl: 'Three days. One block of stone.', sub: 'Carving weekends for complete beginners.', meta: 'From £35' },
    products: [
      { name: 'Beginners Carving Weekend', price: '£295', tag: 'FLAGSHIP', emoji: '🪨', rating: 4.9, reviews: 640, cat: 'courses', special: true, desc: 'Three days in a Cotswold stone barn, carving Bath stone. Tools, stone, lunch and safety kit included.', features: ['Six people per tutor', 'Take your carving home'], review: { who: 'Ali W.', text: 'The best weekend I’ve had in years.' } },
      { name: 'Taster Day', price: '£110', tag: 'BESTSELLER', emoji: '⛏️', rating: 4.8, reviews: 920, cat: 'courses', desc: 'One day, a small relief carving.', features: ['Lunch included'], review: { who: 'Nat P.', text: 'A brilliant start.' } },
      { name: 'Home Carving Kit', price: '£65', emoji: '🧰', rating: 4.7, reviews: 380, cat: 'kits', desc: 'Soapstone, three rasps, a chisel, mask and goggles, with video lessons.', features: ['Soapstone is soft and quiet'], review: { who: 'Clara M.', text: 'Did it on the kitchen table.' } },
      { name: 'Gift Voucher', price: '£35', tag: 'SPECIAL', emoji: '🎁', rating: 4.9, reviews: 260, cat: 'gifts', special: true, desc: 'Towards any course, valid for a year.', features: ['Any amount from £35'], review: { who: 'Gina H.', text: 'He loved it.' } }
    ],
    shopCats: [ { key: 'courses', label: 'Courses', icon: '🪨' }, { key: 'kits', label: 'Kits', icon: '🧰' }, { key: 'gifts', label: 'Gifts', icon: '🎁' } ],
    feed: [ { type: 'post', sub: 'Brand post · 1d', text: 'Day three on the <b>Beginners Carving Weekend</b>: six people, six faces appearing out of stone.', img: U('1662808141421-54240cbfd45f', 800, 440), eng: '♡ 2.4K · 💬 180', product: 0 } ],
    events: [ { zoneEvent: true, tag: 'EVENT', title: 'December taster weekend', when: 'Dec 12 · 09:30', desc: 'Two taster days back to back, near Stroud.', registered: 22, capacity: 24 } ],
    about: { founded: 'Gloucestershire · 2016', story: 'A stonemason who wanted more people to feel stone give under a chisel. Over 4,000 people have carved with us.', milestones: [['2016', 'The first weekend'], ['2022', 'Home carving kits'], ['2026', 'Brand Zone on SculptureXX']], values: ['Safety first', 'Small groups', 'Local stone'] } }),

  'severn-art-foundry': { key: 'severn-art-foundry', kind: 'business', gw: 'sculpture', name: 'Severn Art Foundry', color: '#8A6A2E', gradient: BRONZE, img: U('1601887389937-0b02c26b602c', 900, 500),
    tier: 'Verified', category: 'Fine-art bronze casting', tagline: 'Bronze casting for sculptors, from one piece to public commissions.',
    about: { founded: 'Gloucester · 1989', story: 'A fine-art foundry casting for sculptors, colleges and sculpture parks, from 5 cm to 5 metres, with moulding, patination and installation.' },
    stats: { years: 37, staff: 22, clients: '600 artists' },
    caps: [ { name: 'Lost-wax casting', detail: 'Ceramic shell, from small to monumental.' }, { name: 'Moulding', detail: 'Silicone moulds from clay, plaster or found objects.' }, { name: 'Patination and installation', detail: 'Hot patinas, bases and fixing on site.' } ],
    specs: { moq: 'One piece', lead: '6 to 12 weeks', regions: 'UK & Europe', certs: ['ISO 14001', 'Fully insured', 'Recycled bronze'] },
    supplies: [ { kind: 'brand', key: 'plinth-gallery', what: 'Editions of the bronze hare' } ],
    cases: [ { title: 'A first public commission', text: 'A life-size bronze for a town square, from clay to plinth in four months.' } ],
    feed: [ { sub: 'Foundry · 3d', text: 'Pour day: 140 kg of bronze into twenty-two moulds.' } ],
    contact: { person: 'Rob Carter, Projects', response: 'Replies within 24 hours' } },

  'isle-quarry-stone': { key: 'isle-quarry-stone', kind: 'business', gw: 'sculpture', name: 'Isle Quarry Stone', color: '#6B7280', gradient: STONE, img: U('1772211506168-1cbfcb361be8', 900, 500),
    tier: 'Verified', category: 'Carving stone', tagline: 'Portland and Purbeck stone for carvers, cut to size.',
    about: { founded: 'Dorset · 1962', story: 'A family quarry on the Dorset coast supplying blocks to carvers, colleges and masons, cut to size and delivered.' },
    stats: { years: 64, staff: 30, clients: '1,200 carvers & masons' },
    caps: [ { name: 'Carving blocks', detail: 'From 5 kg to several tonnes.' }, { name: 'Cut to size', detail: 'Sawn blocks and slabs to your drawing.' }, { name: 'Delivery', detail: 'Pallets across the UK.' } ],
    specs: { moq: 'One block', lead: '1 to 3 weeks', regions: 'UK', certs: ['Responsible quarrying', 'Fully insured', 'Restored quarry faces'] },
    supplies: [ { kind: 'brand', key: 'carve-club', what: 'Carving blocks for every weekend course' } ],
    cases: [ { title: 'A college carving course', text: 'Forty matched blocks delivered every September.' } ],
    feed: [ { sub: 'Quarry · 5d', text: 'Blocks sawn for the December carving weekends.' } ],
    contact: { person: 'Kate Stone, Orders', response: 'Replies within one working day' } }
});

/* events in the Events tab */
gxEvents('sculpture', [
  { gw: 'sculpture', zone: 'hollow-lane-park', type: 'Live', icon: '🔴', live: true, time: 'Live Now', title: 'Hollow Lane Live · A bronze pour from the foundry', desc: 'Molten bronze poured into twelve moulds, live, with the foundry team explaining each step.' },
  { gw: 'sculpture', type: 'Event', icon: '🗿', time: 'Dec 2', title: 'Live portrait sculpt-along', desc: 'Clay & Chisel: model a small head in 90 minutes, online.' },
  { gw: 'sculpture', type: 'Event', icon: '✏️', time: 'Dec 4', title: 'Life modelling session, Bristol', desc: 'Bristol Sculptors: a three-hour pose in Bedminster.' },
  { gw: 'sculpture', zone: 'wedge-wire', type: 'Sale', icon: '🛠️', time: 'Dec 4', title: 'Wedge & Wire Christmas sale', desc: 'A quarter off every tool and armature, for one day.' },
  { gw: 'sculpture', zone: 'hollow-lane-park', type: 'Event', icon: '🏮', time: 'Dec 5', title: 'Lantern night on the Winter Trail', desc: 'Hollow Lane Sculpture Park after dark, with mulled drinks at the barn.' },
  { gw: 'sculpture', type: 'Event', icon: '🚪', time: 'Dec 6', title: 'Open studios weekend, Bristol', desc: 'Bristol Sculptors open their Bedminster studios.' },
  { gw: 'sculpture', zone: 'carve-club', type: 'Event', icon: '🪨', time: 'Dec 12', title: 'Stone carving taster weekend', desc: 'Carve Club: two taster days near Stroud.' },
  { gw: 'sculpture', zone: 'plinth-gallery', type: 'Deadline', icon: '🎁', time: 'Dec 18', title: 'Last orders for Christmas delivery', desc: 'Plinth: order by midnight for delivery before Christmas.' }
]);
})();
/* ═════════ /SCULPTUREXX ═════════ */
