/* ═════════ CLIMATEXX — an Environment demo gateway (2026-11-26, Sean; build -97) ═════════
   Built with the _tools/README.md recipe. Palette (light): clean air, forest green, sky blue.
   Home sector: Environment (GW_HOME already says so; listed only there). Every installer, maker, pro and product is
   fictional; places and the science (CO₂ about 420 ppm today, about 280 before industry; the Paris goal) are real.
   Tone: practical and hopeful, never party-political; figures in apps are illustrative. */
(function(){
const U = (id, w, h) => `https://images.unsplash.com/photo-${id}?w=${w}&h=${h}&fit=crop&q=75`;
const FOREST = 'linear-gradient(135deg,#4ADE80,#166534)', SKY = 'linear-gradient(135deg,#7DD3FC,#0369A1)', PEAT = 'linear-gradient(135deg,#A16207,#422006)', WARM = 'linear-gradient(135deg,#FDBA74,#C2410C)';

GATEWAYS.climate = {
  name: 'ClimateXX', domain: 'climatexx.com', emoji: '🌍', sector: 'environment', live: true,
  tagline: 'The Climate Universe',
  theme: {
    bg: '#F3F8F5', text: '#10231A', cardBg: '#FFFFFF', cardBorder: 'rgba(16,35,26,.08)',
    headerBg: 'linear-gradient(180deg,#FFFFFF,#F3F8F5)', accent: '#15803D', accentAlt: '#0369A1', dark: false
  },
  gradient: 'linear-gradient(135deg,#7DD3FC,#15803D,#166534)',
  stats: { members: '3.4M', brands: '1.3K+', agents: '38' },
  spaces: ['All Feed', 'At Home', 'Nature', 'Science', 'Action', 'Careers'],
  trending: ['#HeatPumpHomes', '#TreeTuesday', '#PeatIsPrecious'],
  brandZones: [
    { key: 'greenwarm', name: 'Greenwarm', color: '#C2410C', tier: 'Founding Partner', tag: 'Heat pumps for real British homes' },
    { key: 'treeline-nurseries', name: 'Treeline Nurseries', color: '#15803D', tier: 'Brand Zone', tag: 'Native trees and hedges, grown in Britain' },
    { key: 'draughtless', name: 'Draughtless', color: '#0369A1', tier: 'Brand Zone', tag: 'Insulation and draught-proofing you can fit yourself' },
    { key: 'mendable', name: 'Mendable', color: '#A16207', tier: 'Brand Zone', tag: 'Repair kits and spare parts, so things last' }
  ],
  apps: [
    { name: 'Footprint Check', color: '#15803D', desc: 'Your household’s carbon, and the biggest wins', key: 'footprint-check', url: 'apps/footprint-check.html',
      dev: 'Greenwarm', rating: '4.8', users: '2.1M', perms: ['profile', 'feed'],
      tagline: 'Find your biggest win first.',
      about: 'Footprint Check makes a rough estimate of your home’s yearly carbon from heating, electricity, driving, flights and food, then shows which change would cut the most. Illustrative factors; for a full picture use an energy assessor.',
      features: ['Five areas, a few taps each', 'Your biggest win first', 'Before and after', 'Share your plan'],
      shots: ['apps/footprint-check/shot-1.jpg', 'apps/footprint-check/shot-2.jpg', 'apps/footprint-check/shot-3.jpg'],
      version: '4.6', size: '9 KB',
      updates: [ { v: '4.6', ago: 2, notes: 'Before and after.' }, { v: '4.0', ago: 70, notes: 'Food added.' }, { v: '3.2', ago: 210, notes: 'Signed in with GENEXXO.' } ],
      reviews: [ { who: '@low_carbon_layla', stars: 5, ago: 1, text: 'Showed us flights were bigger than everything else put together.' }, { who: '@tom_becker_carbon', stars: 5, ago: 15, text: 'A good honest starting point.' }, { who: '@peat_digger_pip', stars: 4, ago: 36, text: 'Quick and clear.' } ] },
    { name: 'Tree Tally', color: '#0369A1', desc: 'Count the trees you plant and watch them grow', key: 'tree-tally', url: 'apps/tree-tally.html',
      dev: 'Treeline Nurseries', rating: '4.9', users: '890K', perms: ['profile', 'feed'],
      tagline: 'Every sapling counts.',
      about: 'Tree Tally logs every tree and hedge plant you put in: species, where and when. It shows how tall they should be by now and keeps a running count for you, your school or your group.',
      features: ['Log by species', 'Expected height by age', 'Group totals', 'Share a planting day'],
      shots: ['apps/tree-tally/shot-1.jpg', 'apps/tree-tally/shot-2.jpg', 'apps/tree-tally/shot-3.jpg'],
      version: '3.0', size: '9 KB',
      updates: [ { v: '3.0', ago: 3, notes: 'Group totals.' }, { v: '2.4', ago: 80, notes: 'Expected height.' }, { v: '1.8', ago: 230, notes: 'Signed in with GENEXXO.' } ],
      reviews: [ { who: '@alasdair_ross_woods', stars: 5, ago: 2, text: 'My volunteers love seeing the total climb.' }, { who: '@low_carbon_layla', stars: 5, ago: 21, text: 'Our school planted 400 this year.' }, { who: '@peat_digger_pip', stars: 4, ago: 44, text: 'Lovely little app.' } ] },
    { name: 'Climate Quiz', color: '#C2410C', desc: 'Ten questions a day on climate science', key: 'climate-quiz', url: 'apps/climate-quiz.html',
      dev: 'Draughtless', rating: '4.8', users: '1.4M', perms: ['profile', 'feed'],
      tagline: 'The science, simply.',
      about: 'Climate Quiz asks ten questions a day about the science: carbon dioxide, the greenhouse effect, peat, oceans and what works at home. Every answer comes with the short story behind it.',
      features: ['Ten questions a day', 'The story behind each answer', 'Your best score', 'Share your score'],
      shots: ['apps/climate-quiz/shot-1.jpg', 'apps/climate-quiz/shot-2.jpg', 'apps/climate-quiz/shot-3.jpg'],
      version: '2.5', size: '9 KB',
      updates: [ { v: '2.5', ago: 1, notes: 'Peat and oceans questions.' }, { v: '2.0', ago: 64, notes: 'Stories behind each answer.' }, { v: '1.4', ago: 190, notes: 'Signed in with GENEXXO.' } ],
      reviews: [ { who: '@martin_hale_science', stars: 5, ago: 3, text: 'Accurate and well pitched.' }, { who: '@low_carbon_layla', stars: 5, ago: 20, text: 'My teenagers compete every morning.' }, { who: '@tom_becker_carbon', stars: 4, ago: 46, text: 'Good fun.' } ] }
  ],
  pros: [
    { key: 'martin-hale-science', name: 'Prof Martin Hale Climate Science Talks', color: '#0369A1', tag: 'Climate science explained for schools and groups', role: 'Climate scientist',
      img: U('1758685734511-4f49ce9a382b', 800, 800), base: 'Reading, UK · and online', langs: 'English', years: 32, rating: '4.9', reviewsN: 312, cur: '£',
      creds: ['Thirty years in atmospheric science', 'Retired university professor', 'Gives talks to schools, clubs and businesses'],
      about: 'Martin spent his career studying the atmosphere. Now he explains climate science plainly: what we know, how we know it and what we can still change.',
      services: [ { id: 'talk', name: 'Talk for your group', dur: '60 minutes', price: 150, desc: 'Schools, clubs and workplaces.' },
                  { id: 'qa', name: 'Ask a scientist call', dur: '45 minutes', price: 50, desc: 'Your questions, answered.' },
                  { id: 'course', name: 'Climate basics course', dur: 'Four evenings', price: 90, desc: 'Online, with slides to keep.' } ],
      avail: { days: [1, 2, 3, 4], times: ['10:00', '16:00', '19:00'] },
      reviews: [ { who: '@low_carbon_layla', stars: 5, ago: 3, text: 'He made the greenhouse effect make sense to Year 6.' }, { who: '@tom_becker_carbon', stars: 5, ago: 26, text: 'Clear and calm.' }, { who: '@alasdair_ross_woods', stars: 5, ago: 52, text: 'Superb talk.' } ],
      posts: [ { ago: 1, text: 'Before the industrial age the air held about 280 parts per million of carbon dioxide. Today it’s about 420. That rise is why the world is warming.' } ],
      tier: 'Pro Zone', verified: true },
    { key: 'tom-becker-carbon', name: 'Tom Becker Low-Carbon Home Coaching', color: '#15803D', tag: 'Practical plans to cut your home’s carbon and bills', role: 'Low-carbon home coach',
      img: U('1758685848368-7ff986985e30', 800, 800), base: 'Manchester, UK · and online', langs: 'English, German', years: 9, rating: '4.8', reviewsN: 236, cur: '£',
      creds: ['Qualified retrofit coordinator', 'Domestic energy assessor', 'Independent: sells no products'],
      about: 'Tom helps households make a plan: insulation, heating, solar or simply better habits, in the right order and within budget.',
      services: [ { id: 'call', name: 'Where do I start? call', dur: '45 minutes', price: 45, desc: 'Your home and bills, a clear plan.' },
                  { id: 'plan', name: 'Whole-house plan', dur: '1 week', price: 220, desc: 'A visit and a step-by-step report.' },
                  { id: 'check', name: 'Quote check', dur: '1 week', price: 60, desc: 'Installer quotes compared.' } ],
      avail: { days: [1, 2, 3, 4, 5], times: ['09:00', '13:00', '18:00'] },
      reviews: [ { who: '@low_carbon_layla', stars: 5, ago: 2, text: 'Our plan took the panic out of it.' }, { who: '@peat_digger_pip', stars: 5, ago: 24, text: 'Honest about what’s worth it.' }, { who: '@martin_hale_science', stars: 5, ago: 49, text: 'Practical and kind.' } ],
      posts: [ { ago: 2, text: 'Fabric first: stop the heat escaping before you change how you make it. Loft, walls, windows, draughts.' } ],
      tier: 'Pro Zone', verified: true },
    { key: 'alasdair-ross-woods', name: 'Alasdair Ross Woodland Restoration', color: '#A16207', tag: 'Native woodland and peatland restoration advice', role: 'Restoration ecologist',
      img: U('1668621819576-e5a92bcd7e15', 800, 800), base: 'Perthshire, Scotland', langs: 'English, Gaelic', years: 38, rating: '5.0', reviewsN: 268, cur: '£',
      creds: ['Forty years restoring Highland woodland', 'Former forestry ranger', 'Runs volunteer planting days'],
      about: 'Alasdair advises landowners and community groups on bringing back native woodland and wet peat bogs, the slow, patient work of letting nature store carbon again.',
      services: [ { id: 'visit', name: 'Site visit and plan', dur: 'One day', price: 280, desc: 'What to plant, where and when.' },
                  { id: 'day', name: 'Volunteer planting day', dur: 'One day', price: 25, desc: 'Per person; tools and lunch included.' },
                  { id: 'talk', name: 'Talk: why peat matters', dur: '60 minutes', price: 120, desc: 'For groups and schools.' } ],
      avail: { days: [3, 5, 6], times: ['09:00'] },
      reviews: [ { who: '@peat_digger_pip', stars: 5, ago: 4, text: 'A day with Alasdair teaches you more than a book.' }, { who: '@low_carbon_layla', stars: 5, ago: 31, text: 'Our community wood is thriving.' }, { who: '@tom_becker_carbon', stars: 5, ago: 57, text: 'A legend.' } ],
      posts: [ { ago: 3, text: 'Healthy peat bogs store more carbon than all of Britain’s forests put together. Wet the bog and it starts storing again.' } ],
      tier: 'Pro Zone', verified: true }
  ],
  communities: [
    { key: 'everyday-climate', name: 'Everyday Climate', domain: 'everyday.climatexx.com', color: '#15803D', img: U('1598335624134-5bceb5de202d', 900, 500),
      scope: 'Global', where: 'In every home and street', members: 624000, online: 6480, tagline: 'Small steps, big numbers.',
      about: 'People making practical changes at home and in their communities: heat pumps, insulation, food, travel, repair and planting. Questions welcome, judgement not.',
      rules: ['No party politics', 'Kindness over perfection', 'Share sources for facts'],
      mods: ['@low_carbon_layla', '@peat_digger_pip'],
      threads: [ { t: 'Our first winter with a heat pump: ask us anything', by: '@low_carbon_layla', tag: 'HEAT PUMPS', replies: 2640, ago: 0, votes: 4820 }, { t: 'Cheapest draught-proofing that actually worked', by: '@peat_digger_pip', tag: 'TIPS', replies: 1460, ago: 1, votes: 2960 }, { t: 'Repaired, not replaced: show us', by: '@low_carbon_layla', tag: 'REPAIR', replies: 980, ago: 2, votes: 2140 }, { t: 'How do you talk to family about climate?', by: '@peat_digger_pip', tag: 'TALK', replies: 1240, ago: 3, votes: 2380 } ],
      events: [ { title: 'Heat pump owners: live Q&A', day: 5, time: '19:30', where: 'Online' }, { title: 'Repair along: fix one thing tonight', day: 14, time: '19:00', where: 'Online' } ] },
    { key: 'moors-peat-restorers', name: 'Moors Peat Restorers', domain: 'moors.climatexx.com', color: '#A16207', img: U('1742071853545-653689b94aac', 900, 500),
      scope: 'Local', where: 'North York Moors', members: 1260, online: 30, tagline: 'Wet bogs, happy planet.',
      about: 'Volunteers who block old drains and plant sphagnum moss on the North York Moors, so the peat stays wet and keeps its carbon. Muddy boots, flasks of tea.',
      rules: ['Follow the site leader', 'Leave no trace', 'Be kind to newcomers'],
      mods: ['@peat_digger_pip', '@alasdair_ross_woods'],
      threads: [ { t: 'December work party: drain blocking', by: '@peat_digger_pip', tag: 'WORK PARTY', replies: 48, ago: 0, votes: 102 }, { t: 'Lift share from Middlesbrough?', by: '@peat_digger_pip', tag: 'TRAVEL', replies: 34, ago: 1, votes: 66 }, { t: 'Sphagnum: how fast does it grow?', by: '@alasdair_ross_woods', tag: 'SCIENCE', replies: 26, ago: 2, votes: 58 } ],
      events: [ { title: 'Work party: drain blocking', day: 9, time: '09:30', where: 'North York Moors' }, { title: 'Winter moss planting', day: 23, time: '09:30', where: 'North York Moors' } ] }
  ],
  feed: [
    { av: 'CX', avBg: FOREST, author: 'ClimateXX Editorial', sub: 'Featured · Just now', badge: '★ FEATURED',
      text: 'The science, the solutions and the people getting on with it: warmer homes, wetter bogs, more trees and things that last. Climate, all in one place.',
      img: U('1462143338528-eca9936a4d09', 800, 600), eng: '♡ 46.2K · 💬 3.8K · ↗ 6.4K' },
    { av: 'LL', avBg: SKY, author: '@low_carbon_layla', sub: 'At Home · Just now', badge: 'COMMUNITY',
      text: 'One year with the heat pump in our 1930s semi. Warmer than with the old boiler, and the gas meter has gone. Ask me anything 🌍',
      img: U('1764625792087-e4bcdb96e459', 800, 600), eng: '♡ 16.8K · 💬 2.6K · ↗ 1.6K' },
    { av: 'GW', avBg: WARM, author: 'Greenwarm', sub: 'Founding Partner · Brand Zone', badge: 'BRAND ZONE',
      text: 'Live now: a family home in Leeds gets its heat pump today. Thermal camera before and after, and the crew answering your questions as they go. Follow <b>Greenwarm</b>.',
      img: U('1608460538152-56571d16b11e', 800, 600), eng: '♡ 22.4K · 💬 2.9K · ↗ 3.2K' },
    { av: 'TN', avBg: FOREST, author: 'Treeline Nurseries', sub: 'Brand Zone · 1h ago', badge: 'BRAND ZONE',
      text: 'Bare-root season is here: the best time to plant. Our <b>Native Hedge Pack</b> gives birds a home and your garden a green wall.',
      img: U('1763856957026-a74ab4f05891', 800, 600), eng: '♡ 9.6K · 💬 720 · ↗ 1.2K' },
    { av: 'PP', avBg: PEAT, author: '@peat_digger_pip', sub: 'Nature · 2h ago', badge: 'COMMUNITY',
      text: 'Forty volunteers, one wet moor, 600 metres of old drains blocked before lunch. The bog will be soggy by spring, which is exactly the point.',
      img: U('1589982783178-2f066f8e3559', 800, 600), eng: '♡ 8.2K · 💬 640 · ↗ 520' },
    { av: 'DL', avBg: SKY, author: 'Draughtless', sub: 'Brand Zone · 4h ago', badge: 'BRAND ZONE',
      text: 'Plant a tree outside, stop the draughts inside. A <b>Draughtless Door Kit</b> takes twenty minutes to fit.',
      img: U('1761448761933-26d7b9b4a2fc', 800, 600), eng: '♡ 5.8K · 💬 420 · ↗ 680' },
    { av: 'AR', avBg: PEAT, author: 'Alasdair Ross Woodland Restoration', sub: 'Nature · 6h ago', badge: 'PRO ZONE',
      text: 'Twenty years ago this hillside was bare. Today the birches are taller than me, and the wood is planting itself.',
      img: U('1503435980610-a51f3ddfee50', 800, 600), eng: '♡ 4.6K · 💬 310 · ↗ 420' }
  ],
  prompts: ['Is a heat pump right for my home?', 'What is the greenhouse effect?', 'Why does peat matter for the climate?', 'What is the biggest thing I can do at home?'],
  businesses: ['peatland-works', 'floodwise-engineering']
};

/* the four Brand Zones and two Business Zones */
const brand = (o) => Object.assign({ kind: 'brand', gw: 'climate', verified: true }, o);
Object.assign(ZONES, {
  'greenwarm': brand({ key: 'greenwarm', name: 'Greenwarm', color: '#C2410C', gradient: WARM, tier: 'Founding Partner',
    tagline: 'Heat pumps for real British homes', stats: { followers: '412K', content: '880', products: '12' },
    ad: { badge: 'Featured', img: U('1771616555048-291fb6856cf1', 760, 760), hl: 'Warm home. No gas.', sub: 'Heat pumps for old houses, fitted by our own engineers.', meta: 'From £3,900 after the grant' },
    products: [
      { name: 'Greenwarm Air Source 7 kW', price: 'From £3,900 after the grant', tag: 'FLAGSHIP', emoji: '♨️', rating: 4.8, reviews: 3860, cat: 'heatpumps', special: true, desc: 'A quiet heat pump sized for a three-bed house, fitted with new radiators where needed.', features: ['Heat-loss survey first', 'Seven-year warranty'], review: { who: 'Layla K.', text: 'Warmer than the boiler ever was.' } },
      { name: 'Hot Water Cylinder', price: 'From £1,200', tag: 'BESTSELLER', emoji: '🚿', rating: 4.7, reviews: 1460, cat: 'heatpumps', desc: 'A well-insulated tank that works with the heat pump.', features: ['Fits a cupboard'], review: { who: 'Tom B.', text: 'Plenty of hot water for five.' } },
      { name: 'Heat-Loss Survey', price: '£150', emoji: '🌡️', rating: 4.8, reviews: 2240, cat: 'surveys', desc: 'Every room measured, so the system is sized right.', features: ['Refunded if you go ahead'], review: { who: 'Pip D.', text: 'Thorough and honest.' } },
      { name: 'Smart Controls', price: '£180', tag: 'SPECIAL', emoji: '📱', rating: 4.6, reviews: 960, cat: 'surveys', special: true, desc: 'Runs the heat pump on the cheapest hours.', features: ['App and wall screen'], review: { who: 'Martin H.', text: 'Bills dropped another tenth.' } }
    ],
    shopCats: [ { key: 'heatpumps', label: 'Heat pumps', icon: '♨️' }, { key: 'surveys', label: 'Surveys & controls', icon: '🌡️' } ],
    feed: [
      { type: 'post', sub: 'Brand post · 2h', text: 'Fitted this morning, warm by tea time. Another <b>Air Source 7 kW</b> on another ordinary street.', img: U('1765612897070-9953f9097314', 800, 440), eng: '♡ 22.4K · 💬 2.9K · ↗ 3.2K', product: 0 },
      { type: 'post', sub: 'Survey · Yesterday', text: 'Clean power on the hills, warm homes in the valley. Every one starts with a <b>Heat-Loss Survey</b>.', img: U('1780140228943-69abd40bfa1c', 800, 440), eng: '♡ 6.4K · 💬 420', product: 2 },
      { type: 'community', who: 'Layla K.', whoBg: SKY, sub: 'Community · 1d', text: 'Will a heat pump work in an old house with solid walls?', eng: '♡ 920 · 💬 280', reply: 'Hi Layla! Usually yes. We measure every room first, then size the heat pump and swap any radiators that are too small. Some insulation helps too, and we’ll tell you honestly if your home needs it first. ♨️' }
    ],
    events: [ { zoneEvent: true, tag: 'LIVE', title: 'Greenwarm Live · a family home goes gas-free', when: 'Live now', desc: 'A Leeds family home gets its heat pump, with thermal camera before and after.', registered: 10860, capacity: 26000 } ],
    about: { founded: 'Leeds · 2016', story: 'Plumbers and engineers who proved heat pumps work in old houses. We joined ClimateXX as Founding Partner because the best way to cut carbon is a warm, happy home.', milestones: [['2016', 'Founded'], ['2023', '10,000 homes'], ['2026', 'Founding Partner on ClimateXX']], values: ['Survey every room', 'Own engineers, no subcontracting', 'Honest about what each home needs'] } }),

  'treeline-nurseries': brand({ key: 'treeline-nurseries', name: 'Treeline Nurseries', color: '#15803D', gradient: FOREST, tier: 'Brand Zone',
    tagline: 'Native trees and hedges, grown in Britain', stats: { followers: '164K', content: '540', products: '60' },
    ad: { badge: 'New', img: U('1777150895644-2ca253ee1c93', 760, 760), hl: 'Plant a hedge this winter.', sub: 'Bare-root native trees, grown from British seed.', meta: 'From £15' },
    products: [
      { name: 'Native Hedge Pack', price: '£45', tag: 'FLAGSHIP', emoji: '🌿', rating: 4.9, reviews: 3240, cat: 'hedges', special: true, desc: 'Fifty plants for 10 metres of mixed hawthorn, hazel, blackthorn and dog rose.', features: ['Bare-root, November to March', 'Planting guide'], review: { who: 'Pip D.', text: 'Every one took.' } },
      { name: 'School Woodland Pack', price: '£120', tag: 'BESTSELLER', emoji: '🏫', rating: 4.9, reviews: 860, cat: 'trees', desc: '105 saplings with guards and canes.', features: ['Lesson plans included'], review: { who: 'Layla K.', text: 'Our pupils planted a wood.' } },
      { name: 'Oak Sapling', price: '£15', emoji: '🌳', rating: 4.8, reviews: 1460, cat: 'trees', desc: 'A two-year-old English oak.', features: ['Grown from British acorns'], review: { who: 'Alasdair R.', text: 'Strong, healthy stock.' } },
      { name: 'Gift a Tree', price: '£18', tag: 'SPECIAL', emoji: '🎁', rating: 4.9, reviews: 2140, cat: 'trees', special: true, desc: 'A native tree planted in a community wood, with a certificate.', features: ['Photo update in a year'], review: { who: 'Tom B.', text: 'My go-to present now.' } }
    ],
    shopCats: [ { key: 'hedges', label: 'Hedges', icon: '🌿' }, { key: 'trees', label: 'Trees', icon: '🌳' } ],
    feed: [ { type: 'post', sub: 'Brand post · 1h', text: 'Gloves on, roots in, a very long future. The <b>School Woodland Pack</b>.', img: U('1782386963665-b83ce1d6752e', 800, 440), eng: '♡ 9.6K · 💬 720', product: 1 } ],
    events: [ { zoneEvent: true, tag: 'SALE', title: 'Black Friday: free guards with every pack', when: 'Nov 27 · All day', desc: 'Free tree guards with every hedge and woodland pack.', registered: 1640, capacity: 4500 } ],
    about: { founded: 'Shropshire · 1998', story: 'A family nursery that grows every tree from British seed.', milestones: [['1998', 'The first seedbeds'], ['2020', 'School packs'], ['2026', 'Brand Zone on ClimateXX']], values: ['British seed, British grown', 'Peat-free', 'Native species only'] } }),

  'draughtless': brand({ key: 'draughtless', name: 'Draughtless', color: '#0369A1', gradient: SKY, tier: 'Brand Zone',
    tagline: 'Insulation and draught-proofing you can fit yourself', stats: { followers: '98.2K', content: '360', products: '44' },
    ad: { badge: 'Gift', img: U('1542601906990-b4d3fb778b09', 760, 760), hl: 'Keep the heat you pay for.', sub: 'Draught-proofing kits, fitted in an afternoon.', meta: 'From £12' },
    products: [
      { name: 'Draughtless Door Kit', price: '£24', tag: 'FLAGSHIP', emoji: '🚪', rating: 4.8, reviews: 4120, cat: 'draughts', special: true, desc: 'Brush strip, letterbox flap and keyhole cover.', features: ['Fits in 20 minutes', 'Any door'], review: { who: 'Layla K.', text: 'The hall is warm for the first time.' } },
      { name: 'Window Seal Kit', price: '£19', tag: 'BESTSELLER', emoji: '🪟', rating: 4.7, reviews: 2860, cat: 'draughts', desc: 'Seals for sash and casement windows.', features: ['Paintable'], review: { who: 'Tom B.', text: 'Stopped the rattle and the draught.' } },
      { name: 'Loft Top-Up Roll', price: '£29', emoji: '🏠', rating: 4.7, reviews: 1460, cat: 'insulation', desc: '200 mm of recycled insulation for the loft.', features: ['Itch-free'], review: { who: 'Pip D.', text: 'Easy and clean.' } },
      { name: 'Chimney Balloon', price: '£12', tag: 'SPECIAL', emoji: '🎈', rating: 4.6, reviews: 960, cat: 'draughts', special: true, desc: 'Stops warm air vanishing up an unused chimney.', features: ['Removable'], review: { who: 'Martin H.', text: 'Genius.' } }
    ],
    shopCats: [ { key: 'draughts', label: 'Draughts', icon: '🚪' }, { key: 'insulation', label: 'Insulation', icon: '🏠' } ],
    feed: [ { type: 'post', sub: 'Brand post · 1d', text: 'Twenty minutes, one screwdriver, no more whistling letterbox. The <b>Door Kit</b>.', img: U('1626736748712-ab382559fbd1', 800, 440), eng: '♡ 5.8K · 💬 420', product: 0 } ],
    events: [ { zoneEvent: true, tag: 'EVENT', title: 'Live: draught-proof a room in an hour', when: 'Dec 3 · 19:00', desc: 'Follow along with a kit, live with Q&A.', registered: 1120, capacity: 3000 } ],
    about: { founded: 'Sheffield · 2012', story: 'A housing charity’s volunteers who turned their best fixes into kits.', milestones: [['2012', 'The first door kit'], ['2021', 'Recycled insulation'], ['2026', 'Brand Zone on ClimateXX']], values: ['Cheapest wins first', 'Made in Britain', 'Free fitting videos'] } }),

  'mendable': brand({ key: 'mendable', name: 'Mendable', color: '#A16207', gradient: PEAT, tier: 'Brand Zone',
    tagline: 'Repair kits and spare parts, so things last', stats: { followers: '72.4K', content: '280', products: '220' },
    ad: { badge: 'Featured', img: U('1568288796918-03e7d93306bd', 760, 760), hl: 'Fix it. Keep it.', sub: 'Spare parts and kits for everyday things.', meta: 'From £6' },
    products: [
      { name: 'Mendable Home Repair Kit', price: '£39', tag: 'FLAGSHIP', emoji: '🧰', rating: 4.8, reviews: 1860, cat: 'kits', special: true, desc: 'Glues, patches, fuses and tools for a hundred small fixes.', features: ['Video guides', 'Refills sold'], review: { who: 'Pip D.', text: 'Fixed the kettle, the coat and the chair.' } },
      { name: 'Clothes Mending Kit', price: '£18', tag: 'BESTSELLER', emoji: '🧵', rating: 4.8, reviews: 1460, cat: 'kits', desc: 'Darning, patches and buttons.', features: ['Beginner’s guide'], review: { who: 'Layla K.', text: 'Visible mending is my new hobby.' } },
      { name: 'Repair Café Starter Box', price: '£149', emoji: '☕', rating: 4.9, reviews: 320, cat: 'community', desc: 'Everything a community needs to start a monthly repair café.', features: ['Safety guide'], review: { who: 'Tom B.', text: 'Our café fixes forty things a month.' } },
      { name: 'Spare Parts Finder', price: '£6', tag: 'SPECIAL', emoji: '🔍', rating: 4.6, reviews: 640, cat: 'community', special: true, desc: 'A year of help finding the right part for anything.', features: ['Ask a fixer'], review: { who: 'Martin H.', text: 'Found a hoover belt from 1998.' } }
    ],
    shopCats: [ { key: 'kits', label: 'Kits', icon: '🧰' }, { key: 'community', label: 'Community', icon: '☕' } ],
    feed: [ { type: 'post', sub: 'Brand post · 4h', text: 'Every jumper on this rail deserves a second life. Darn it, patch it, wear it again: the <b>Clothes Mending Kit</b>.', img: U('1582719188393-bb71ca45dbb9', 800, 440), eng: '♡ 3.8K · 💬 240', product: 1 } ],
    events: [ { zoneEvent: true, tag: 'SALE', title: 'Black Friday: buy nothing new, fix something', when: 'Nov 27 · All day', desc: '30% off repair kits, one day only.', registered: 1340, capacity: 4000 } ],
    about: { founded: 'Bristol · 2017', story: 'Fixers from a repair café who wanted the right part to be easy to find.', milestones: [['2017', 'The first kit'], ['2023', 'Repair café boxes'], ['2026', 'Brand Zone on ClimateXX']], values: ['Repair before replace', 'Parts for old things', 'Community first'] } }),

  'peatland-works': { key: 'peatland-works', kind: 'business', gw: 'climate', name: 'Peatland Works', color: '#A16207', gradient: PEAT, img: U('1593349783603-654a7069d88d', 900, 500),
    tier: 'Verified', category: 'Peatland restoration contractor', tagline: 'Re-wetting bogs so they store carbon again.',
    about: { founded: 'Penrith · 2009', story: 'We block old drains, re-profile peat hags and plant sphagnum moss, so damaged bogs become wet and healthy again.' },
    stats: { years: 17, staff: 95, clients: '28,000 hectares restored' },
    caps: [ { name: 'Drain blocking', detail: 'Peat dams and timber dams.' }, { name: 'Re-vegetation', detail: 'Sphagnum and cotton grass.' }, { name: 'Monitoring', detail: 'Water tables, before and after.' } ],
    specs: { moq: 'One hectare', lead: '1 to 6 months', regions: 'UK uplands', certs: ['Low-pressure machinery', 'Ecologist on every site', 'Fully insured'] },
    supplies: [ { kind: 'brand', key: 'treeline-nurseries', what: 'Native planting around restored bogs' } ],
    cases: [ { title: 'A moor gets wet again', text: 'Water tables rose within a year on 600 hectares.' } ],
    feed: [ { sub: 'Moor · 3d', text: 'Winter season under way: dams in before the snow.' } ],
    contact: { person: 'Kirsty Bell, Projects', response: 'Replies within two working days' } },

  'floodwise-engineering': { key: 'floodwise-engineering', kind: 'business', gw: 'climate', name: 'Floodwise Engineering', color: '#0369A1', gradient: SKY, img: U('1762017934271-57809cc6832c', 900, 500),
    tier: 'Verified', category: 'Natural flood management', tagline: 'Slowing the flow, upstream.',
    about: { founded: 'Hebden Bridge · 2016', story: 'We design leaky dams, ponds and planting upstream of towns, so rivers rise more slowly after heavy rain.' },
    stats: { years: 10, staff: 55, clients: '70 catchments' },
    caps: [ { name: 'Leaky dams', detail: 'Timber structures in streams.' }, { name: 'Storage ponds', detail: 'Space for water to wait.' }, { name: 'Modelling', detail: 'How much each step slows the flood.' } ],
    specs: { moq: 'One catchment', lead: '3 to 12 months', regions: 'UK', certs: ['Hydrologists on staff', 'Landowner agreements', 'Fully insured'] },
    supplies: [ { kind: 'brand', key: 'treeline-nurseries', what: 'Riverside tree planting' } ],
    cases: [ { title: 'An hour more warning', text: 'Upstream works delayed a town’s flood peak by an hour.' } ],
    feed: [ { sub: 'Catchment · 5d', text: 'Forty leaky dams finished before winter rain.' } ],
    contact: { person: 'Nadia Hussain, Catchments', response: 'Replies within one working day' } }
});

/* events in the Events tab */
gxEvents('climate', [
  { gw: 'climate', zone: 'greenwarm', type: 'Live', icon: '🔴', live: true, time: 'Live Now', title: 'Greenwarm Live · a family home goes gas-free', desc: 'A Leeds family home gets its heat pump, with thermal camera before and after.' },
  { gw: 'climate', zone: 'treeline-nurseries', type: 'Sale', icon: '🌿', time: 'Nov 27', title: 'Treeline Black Friday', desc: 'Free tree guards with every hedge and woodland pack.' },
  { gw: 'climate', zone: 'mendable', type: 'Sale', icon: '🧰', time: 'Nov 27', title: 'Mendable: fix something Friday', desc: '30% off repair kits.' },
  { gw: 'climate', type: 'Event', icon: '♨️', time: 'Dec 1', title: 'Heat pump owners: live Q&A', desc: 'Everyday Climate members answer your heat pump questions.' },
  { gw: 'climate', zone: 'draughtless', type: 'Event', icon: '🚪', time: 'Dec 3', title: 'Live: draught-proof a room in an hour', desc: 'Follow along with a Draughtless kit.' },
  { gw: 'climate', type: 'Event', icon: '🥾', time: 'Dec 5', title: 'Work party: drain blocking, North York Moors', desc: 'Moors Peat Restorers re-wet the bog.' },
  { gw: 'climate', type: 'Event', icon: '🔧', time: 'Dec 10', title: 'Repair along: fix one thing tonight', desc: 'Everyday Climate mends together, online.' },
  { gw: 'climate', type: 'Event', icon: '🌱', time: 'Dec 19', title: 'Winter moss planting, North York Moors', desc: 'Moors Peat Restorers plant sphagnum moss.' }
]);
})();
/* ═════════ /CLIMATEXX ═════════ */
