/* ═════════ PLANTXX — a Garden demo gateway (2026-11-19, Sean) ═════════
   Built like HotelXX: theme, feed, 4 Brand Zones, 2 Business Zones, 3 Pros, 2 communities, 3 apps, events.
   Palette (light): leaf green, terracotta pot, cream. Home sector: Garden (PlantXX was also listed under Nature;
   GW_HOME below makes Garden its home so it leads that band only).
   Brands, pros and communities are fictional; places are real. Source of truth: _lab/home85/plantxx-block.js. */
(function(){
const U = (id, w, h) => `https://images.unsplash.com/photo-${id}?w=${w}&h=${h}&fit=crop&q=75`;
const LEAF = 'linear-gradient(135deg,#4FA36B,#22603A)', POT = 'linear-gradient(135deg,#E39A5B,#B05A27)', MOSS = 'linear-gradient(135deg,#A3B86C,#5E7431)', SKY = 'linear-gradient(135deg,#7FB7C9,#36748A)';
GW_HOME.plant = 'garden';

GATEWAYS.plant = {
  name: 'PlantXX', domain: 'plantxx.com', emoji: '🪴', sector: 'garden', live: true,
  tagline: 'The Plant Universe',
  theme: {
    bg: '#F3F7F0', text: '#1E2B1F', cardBg: '#FFFFFF', cardBorder: 'rgba(34,96,58,.13)',
    headerBg: 'linear-gradient(180deg,#E1EEDB,#F3F7F0)', accent: '#2F7D4A', accentAlt: '#C8692E', dark: false
  },
  gradient: 'linear-gradient(135deg,#22603A,#4FA36B,#E39A5B)',
  stats: { members: '7.1M', brands: '6,300+', agents: '82' },
  spaces: ['All Feed', 'Houseplants', 'Grow Your Own', 'Plant Clinic', 'Pots & Tools', 'Garden Design'],
  trending: ['#PlantParent', '#PeatFree', '#WinterWatering'],
  brandZones: [
    { key: 'fernway', name: 'Fernway Plants', color: '#2F7D4A', tier: 'Founding Partner', tag: 'Houseplants grown in Britain, delivered to your door' },
    { key: 'potters-field', name: 'Potter’s Field Ceramics', color: '#C8692E', tier: 'Brand Zone', tag: 'Plant pots thrown in Stoke-on-Trent' },
    { key: 'rootwell', name: 'Rootwell', color: '#5E7431', tier: 'Brand Zone', tag: 'Peat-free compost that plants love' },
    { key: 'greenhand', name: 'Greenhand Tools', color: '#36748A', tier: 'Brand Zone', tag: 'Garden tools forged in Sheffield' }
  ],
  apps: [
    { name: 'Water Me', color: '#2F7D4A', desc: 'Knows when each of your plants needs a drink', key: 'water-me', url: 'apps/water-me.html',
      dev: 'Fernway Plants', rating: '4.8', users: '2.3M', perms: ['profile', 'feed'],
      tagline: 'No more drowned ferns.',
      about: 'Water Me keeps a list of your plants and tells you which ones need water today. It waters less in winter, reminds you to feel the soil first, and keeps a little diary of every drink, feed and repot.',
      features: ['Today’s watering list', 'Slower schedule in winter', 'Feed and repot reminders', 'A diary for every plant'],
      shots: ['apps/water-me/shot-1.jpg', 'apps/water-me/shot-2.jpg', 'apps/water-me/shot-3.jpg'],
      version: '6.1', size: '10 KB',
      updates: [ { v: '6.1', ago: 2, notes: 'Winter mode: longer gaps from November to February.' }, { v: '5.6', ago: 70, notes: 'Feed reminders.' }, { v: '5.0', ago: 210, notes: 'Signed in with GENEXXO.' } ],
      reviews: [ { who: '@monstera_mags', stars: 5, ago: 1, text: 'Forty-two plants and I have not lost one since.' }, { who: '@firstflat_finn', stars: 5, ago: 8, text: 'My calathea is alive. That is a sentence I never thought I’d write.' }, { who: '@windowsill_wes', stars: 4, ago: 21, text: 'Would love photos in the diary.' } ] },
    { name: 'Light Finder', color: '#C8692E', desc: 'Which plants will be happy in which window', key: 'light-finder', url: 'apps/light-finder.html',
      dev: 'Leafline Labs', rating: '4.7', users: '940K', perms: ['profile', 'feed'],
      tagline: 'The right plant for the right spot.',
      about: 'Light Finder asks which way your window faces and how far from it the plant will sit, and suggests plants that will thrive there, with a pet-safe label on each. Save a spot for every room.',
      features: ['Pick a window, get plants', 'Distance-from-window guide', 'Pet-safe labels', 'Save a spot for every room'],
      shots: ['apps/light-finder/shot-1.jpg', 'apps/light-finder/shot-2.jpg', 'apps/light-finder/shot-3.jpg'],
      version: '2.8', size: '9 KB',
      updates: [ { v: '2.8', ago: 5, notes: 'Pet-safe labels on every plant.' }, { v: '2.4', ago: 85, notes: 'Distance from the window.' }, { v: '2.0', ago: 230, notes: 'Signed in with GENEXXO.' } ],
      reviews: [ { who: '@catmum_cass', stars: 5, ago: 3, text: 'The pet-safe filter means I can actually buy plants again.' }, { who: '@northflat_nora', stars: 5, ago: 10, text: 'North-facing flat, and now it is a jungle.' }, { who: '@windowsill_wes', stars: 4, ago: 26, text: 'Simple and spot on.' } ] },
    { name: 'Sow Calendar', color: '#5E7431', desc: 'What to sow, plant and pick this month in the UK', key: 'sow-calendar', url: 'apps/sow-calendar.html',
      dev: 'Rootwell', rating: '4.8', users: '1.2M', perms: ['profile', 'feed'],
      tagline: 'Know what to do on the plot this month.',
      about: 'Sow Calendar tells you what to sow, plant and harvest this month in a UK garden or allotment, from garlic in November to tomatoes in spring. Tick jobs off, keep a plot list, and share your harvest.',
      features: ['This month’s jobs', 'Sow, plant and harvest lists', 'Your own plot list', 'Share a harvest to PlantXX'],
      shots: ['apps/sow-calendar/shot-1.jpg', 'apps/sow-calendar/shot-2.jpg', 'apps/sow-calendar/shot-3.jpg'],
      version: '4.0', size: '10 KB',
      updates: [ { v: '4.0', ago: 4, notes: 'Your own plot list.' }, { v: '3.5', ago: 95, notes: 'Harvest sharing.' }, { v: '3.0', ago: 250, notes: 'Signed in with GENEXXO.' } ],
      reviews: [ { who: '@plot42_pat', stars: 5, ago: 2, text: 'Garlic in, broad beans in, ticked off. Lovely.' }, { who: '@firstflat_finn', stars: 4, ago: 14, text: 'Great even for a balcony.' }, { who: '@allotment_ade', stars: 5, ago: 30, text: 'Better than my old paper calendar.' } ] }
  ],
  pros: [
    { key: 'ruth-akande-design', name: 'Ruth Akande Garden Design', color: '#2F7D4A', tag: 'Small gardens, courtyards and balconies · planting plans', role: 'Garden designer',
      img: U('1573496358961-3c82861ab8f4', 800, 800), base: 'London, UK', langs: 'English, Yoruba', years: 14, rating: '4.9', reviewsN: 342, cur: '£',
      creds: ['Diploma in garden design', 'Show garden designer at a major UK flower show', 'Member of a UK garden designers’ society'],
      about: 'Ruth designs small London gardens that feel twice their size: layered planting, places to sit and something in flower every month of the year.',
      services: [ { id: 'visit', name: 'Garden consultation', dur: '90 minutes', price: 140, desc: 'Ruth walks the garden with you and leaves you with ideas and a plant list.' },
                  { id: 'plan', name: 'Planting plan', dur: 'Delivered in 3 weeks', price: 480, desc: 'A scaled plan with every plant named and placed.' },
                  { id: 'full', name: 'Full garden design', dur: 'Delivered in 6 weeks', price: 1600, desc: 'Layout, materials, planting and a builder’s brief.' } ],
      avail: { days: [1, 2, 3, 4], times: ['09:30', '13:00', '16:00'] },
      reviews: [ { who: '@balcony_bea', stars: 5, ago: 6, text: 'Our three-metre yard is now the best room in the house.' }, { who: '@monstera_mags', stars: 5, ago: 18, text: 'Something in flower every single month, as promised.' }, { who: '@newgarden_ned', stars: 4, ago: 40, text: 'Clear and practical plans.' } ],
      posts: [ { ago: 1, text: 'November is for planting bare-root roses and hedging. Cheaper, and they settle in better.' }, { ago: 5, text: 'Taking new design clients for spring.' } ],
      tier: 'Pro Zone', verified: true },
    { key: 'owen-price-plant-clinic', name: 'Owen Price Plant Clinic', color: '#C8692E', tag: 'Sick plant? Video diagnosis, pests, rescue repots', role: 'Horticulturist',
      img: U('1757744705465-ea08b0ddc38a', 800, 800), base: 'Cardiff, UK · and online', langs: 'English, Welsh', years: 10, rating: '4.9', reviewsN: 718, cur: '£',
      creds: ['Degree in horticulture', 'Former glasshouse manager at a botanic garden', 'Integrated pest management trained'],
      about: 'Owen ran the tropical glasshouses at a botanic garden before opening his plant clinic. Show him your yellow leaves on a video call and he will tell you why, nine times out of ten in the first minute (it is usually the watering).',
      services: [ { id: 'video', name: 'Plant clinic video call', dur: '20 minutes', price: 20, desc: 'One or two plants, a diagnosis and a plan.' },
                  { id: 'collection', name: 'Whole collection check', dur: '60 minutes', price: 55, desc: 'Every plant in the house, room by room.' },
                  { id: 'rescue', name: 'Rescue repot (Cardiff)', dur: 'At the clinic', price: 30, desc: 'Bring it in. Root check, clean, fresh compost, new pot.' } ],
      avail: { days: [1, 2, 3, 4, 5, 6], times: ['10:00', '13:00', '18:00'] },
      reviews: [ { who: '@firstflat_finn', stars: 5, ago: 3, text: 'Saved my fiddle-leaf fig in twenty minutes.' }, { who: '@monstera_mags', stars: 5, ago: 12, text: 'Spotted thrips I had not even seen.' }, { who: '@catmum_cass', stars: 5, ago: 34, text: 'Kind, quick and very funny.' } ],
      posts: [ { ago: 2, text: 'Winter rule: water less, never on a schedule. Push a finger in. Dry to the second knuckle? Then water.' } ],
      tier: 'Pro Zone', verified: true },
    { key: 'leah-morgan-grow', name: 'Leah Morgan Grow Your Own', color: '#5E7431', tag: 'Allotment and veg-patch coaching · first plots, raised beds, balconies', role: 'Grow-your-own coach',
      img: U('1699899657680-421c2c2d5064', 800, 800), base: 'Sheffield, UK', langs: 'English', years: 8, rating: '4.8', reviewsN: 256, cur: '£',
      creds: ['Allotment holder for 15 years', 'Community-growing project lead', 'Certificate in horticulture'],
      about: 'Leah helps people get food out of their first plot without losing heart: what to grow, when, and how to keep on top of it in a few hours a week.',
      services: [ { id: 'plot', name: 'First plot visit', dur: '90 minutes', price: 60, desc: 'On your plot, with a plan for the first year.' },
                  { id: 'year', name: 'Year-round coaching', dur: 'Monthly call for 12 months', price: 240, desc: 'A call a month and a seasonal plan.' },
                  { id: 'balcony', name: 'Balcony veg plan', dur: 'Delivered in 7 days', price: 45, desc: 'What will grow in your pots, in your light.' } ],
      avail: { days: [2, 4, 5, 6], times: ['09:00', '12:00', '15:00'] },
      reviews: [ { who: '@plot42_pat', stars: 5, ago: 5, text: 'First year on a plot and we have not bought a potato since July.' }, { who: '@balcony_bea', stars: 5, ago: 15, text: 'Tomatoes on a fourth-floor balcony. Who knew.' }, { who: '@allotment_ade', stars: 4, ago: 38, text: 'Down to earth, literally.' } ],
      posts: [ { ago: 3, text: 'Plant your garlic before Christmas. It needs the cold to split into cloves.' } ],
      tier: 'Pro Zone', verified: true }
  ],
  communities: [
    { key: 'houseplant-hospital', name: 'Houseplant Hospital', domain: 'hospital.plantxx.com', color: '#2F7D4A', img: U('1693086913434-96cb7f64729e', 900, 500),
      scope: 'Global', where: 'Every windowsill', members: 392000, online: 6120, tagline: 'Post a sad leaf. Someone will know.',
      about: 'Brown tips, yellow leaves, mystery bugs: post a photo and the community will help. Plus swaps, propagation wins and the occasional dramatic recovery.',
      rules: ['Photo of the whole plant, please', 'Say how often you water', 'Be kind to beginners'],
      mods: ['@monstera_mags', '@windowsill_wes'],
      threads: [ { t: 'Why is my monstera crying? (It is guttation, it’s fine)', by: '@firstflat_finn', tag: 'Q&A', replies: 1180, ago: 0, votes: 2460 }, { t: 'Winter watering: share your rules', by: '@windowsill_wes', tag: 'CARE', replies: 524, ago: 1, votes: 980 }, { t: 'Pet-safe plants that actually look good', by: '@catmum_cass', tag: 'PETS', replies: 368, ago: 2, votes: 860 }, { t: 'Rescue of the year: before and after', by: '@monstera_mags', tag: 'WINS', replies: 296, ago: 3, votes: 1120 } ],
      events: [ { title: 'Winter houseplant clinic, live', day: 2, time: '19:00', where: 'Online' }, { title: 'Cuttings swap', day: 9, time: '11:00', where: 'Online sign-up, local meet-ups' } ] },
    { key: 'sheffield-allotments', name: 'Sheffield Allotment Network', domain: 'sheffield.plantxx.com', color: '#5E7431', img: U('1525033842647-a956848705f0', 900, 500),
      scope: 'Local', where: 'Sheffield', members: 6400, online: 110, tagline: 'Seventy sites, one big shed.',
      about: 'Plot holders across Sheffield sharing seeds, tools, gluts and advice. Waiting-list tips, work days and the annual giant-leek argument.',
      rules: ['Share your gluts', 'Return borrowed tools', 'No chemical sprays near the bees'],
      mods: ['@plot42_pat', '@allotment_ade'],
      threads: [ { t: 'Garlic planting morning this Saturday', by: '@plot42_pat', tag: 'WORK DAY', replies: 38, ago: 0, votes: 96 }, { t: 'Who has spare manure?', by: '@allotment_ade', tag: 'SWAPS', replies: 52, ago: 1, votes: 74 }, { t: 'Waiting list: how long did yours take?', by: '@newgarden_ned', tag: 'Q&A', replies: 64, ago: 2, votes: 88 } ],
      events: [ { title: 'Garlic planting morning', day: 3, time: '10:00', where: 'Meersbrook, Sheffield' }, { title: 'Seed swap and soup', day: 10, time: '12:00', where: 'Heeley, Sheffield' } ] }
  ],
  feed: [
    { av: 'PX', avBg: LEAF, author: 'PlantXX Editorial', sub: 'Featured · Just now', badge: '★ FEATURED',
      text: 'From one pothos on a windowsill to a whole allotment. Houseplants, growing your own, plant clinics, pots, tools and garden design. Plants, all in one place.',
      img: U('1772907952251-09e722aafa6a', 800, 600), eng: '♡ 68.4K · 💬 5.2K · ↗ 7.8K' },
    { av: 'MM', avBg: MOSS, author: '@monstera_mags', sub: 'Houseplants · Just now', badge: 'COMMUNITY',
      text: 'Five years ago this monstera was a single leaf in a jam jar. Now she needs her own stool 🌿',
      img: U('1583753075968-1236ccb83c66', 800, 600), eng: '♡ 22.6K · 💬 2.4K · ↗ 860' },
    { av: 'FW', avBg: LEAF, author: 'Fernway Plants', sub: 'Founding Partner · Brand Zone', badge: 'BRAND ZONE',
      text: 'Grown in Britain, delivered in paper. The <b>Winter Windowsill Box</b>: three easy plants that are happy in low winter light, with pots.',
      img: U('1601985705806-5b9a71f6004f', 800, 600), eng: '♡ 12.8K · 💬 960 · ↗ 1.6K' },
    { av: 'PF', avBg: POT, author: 'Potter’s Field Ceramics', sub: 'Brand Zone · 1h ago', badge: 'BRAND ZONE',
      text: 'Every pot has a drainage hole and a matching saucer. Thrown by hand in Stoke-on-Trent, glazed in eight colours.',
      img: U('1636039479790-be1d880e2b8c', 800, 600), eng: '♡ 5.8K · 💬 420 · ↗ 510' },
    { av: 'FN', avBg: SKY, author: '@firstflat_finn', sub: 'Plant Clinic · 2h ago', badge: 'COMMUNITY',
      text: 'Owen from the Plant Clinic diagnosed my fig in one look: too much water, too little light. Moved it, stopped fussing, new leaf this week 🌱',
      img: U('1768407313710-9fb5f82c63d6', 800, 600), eng: '♡ 6.4K · 💬 540 · ↗ 210' },
    { av: 'RW', avBg: MOSS, author: 'Rootwell', sub: 'Brand Zone · 4h ago', badge: 'BRAND ZONE',
      text: 'Peat bogs store more carbon than forests. Our <b>peat-free compost</b> is made from bark, wool and coir, and seedlings love it.',
      img: U('1742672870196-d79b916ef37d', 800, 600), eng: '♡ 4.2K · 💬 360 · ↗ 680' },
    { av: 'RA', avBg: LEAF, author: 'Ruth Akande Garden Design', sub: 'Garden Design · 6h ago', badge: 'PRO ZONE',
      text: 'Plan for every month. Irises for May, salvias for summer, grasses for winter. A small garden can flower all year if you plan it.',
      img: U('1785693259771-c43a354bf968', 800, 600), eng: '♡ 3.6K · 💬 230 · ↗ 480' }
  ],
  prompts: ['Which houseplants are safe for cats?', 'How often should I water a monstera in winter?', 'What can I sow on my allotment in November?', 'Design a small courtyard garden that flowers all year'],
  businesses: ['lea-valley-growers', 'verdant-offices']
};

/* the four Brand Zones and two Business Zones */
const brand = (o) => Object.assign({ kind: 'brand', gw: 'plant', verified: true }, o);
Object.assign(ZONES, {
  'fernway': brand({ key: 'fernway', name: 'Fernway Plants', color: '#2F7D4A', gradient: LEAF, tier: 'Founding Partner',
    tagline: 'Houseplants grown in Britain, delivered to your door', stats: { followers: '284K', content: '1.6K', products: '220' },
    ad: { badge: 'Featured', img: U('1601985705806-5b9a71f6004f', 760, 760), hl: 'The Winter Windowsill Box.', sub: 'Three low-light plants, with pots, delivered in paper.', meta: 'From £12' },
    products: [
      { name: 'Winter Windowsill Box', price: '£48', tag: 'FLAGSHIP', emoji: '📦', rating: 4.9, reviews: 3840, cat: 'boxes', special: true, desc: 'A snake plant, a ZZ plant and a pothos: all happy in low winter light, in three pots.', features: ['Grown in Britain', 'Plastic-free packaging', '30-day plant guarantee'], review: { who: 'Finn W.', text: 'Even I cannot kill these.' } },
      { name: 'Monstera Deliciosa (60cm)', price: '£38', tag: 'BESTSELLER', emoji: '🌿', rating: 4.8, reviews: 5120, cat: 'plants', desc: 'The big-leaved classic, already showing its holes.', features: ['Toxic to pets', 'Bright, indirect light'], review: { who: 'Mags T.', text: 'Arrived bigger than the picture.' } },
      { name: 'Pet-Safe Trio', price: '£42', tag: 'SPECIAL', emoji: '🐈', rating: 4.9, reviews: 1460, cat: 'boxes', special: true, desc: 'A calathea, a parlour palm and a spider plant: safe around cats and dogs.', features: ['All pet-safe'], review: { who: 'Cass R.', text: 'Plants and cats, finally together.' } },
      { name: 'Pothos in a Hanging Pot', price: '£22', emoji: '🪴', rating: 4.8, reviews: 2860, cat: 'plants', desc: 'The easiest trailing plant there is.', features: ['Toxic to pets', 'Low to bright light'], review: { who: 'Wes K.', text: 'Grows a foot a month in summer.' } },
      { name: 'Plant Gift Card', price: '£25', emoji: '🎁', rating: 4.9, reviews: 980, cat: 'gifts', desc: 'Let them pick their own jungle.', features: ['Never expires'], review: { who: 'Nora P.', text: 'The best present I have given.' } }
    ],
    shopCats: [ { key: 'boxes', label: 'Plant boxes', icon: '📦' }, { key: 'plants', label: 'Plants', icon: '🌿' }, { key: 'gifts', label: 'Gift cards', icon: '🎁' } ],
    feed: [
      { type: 'post', sub: 'Brand post · 2h', text: 'The <b>Winter Windowsill Box</b> is back: three plants that like a grey day.', img: U('1772795831981-4b66d1a3063e', 800, 440), eng: '♡ 12.8K · 💬 960 · ↗ 1.6K', product: 0 },
      { type: 'post', sub: 'In the nursery · Yesterday', text: 'Every plant spends two weeks “hardening” in a cool glasshouse before it ships, so it doesn’t sulk in your house.', img: U('1764072385165-f7e7969e0d84', 800, 440), eng: '♡ 4.6K · 💬 310' },
      { type: 'community', who: 'Cass R.', whoBg: POT, sub: 'Community · 1d', text: 'Is the Winter Windowsill Box safe for my cats?', eng: '♡ 260 · 💬 52', reply: 'Hi Cass! Not quite: snake plants, ZZ plants and pothos can upset cats if they chew them. Our Pet-Safe Trio is made for you: a calathea, a parlour palm and a spider plant, all safe around cats and dogs. And never bring lilies home with cats, even as cut flowers. 🐈' }
    ],
    events: [ { zoneEvent: true, tag: 'LIVE', title: 'Fernway Live · Winter houseplant clinic', when: 'Live now', desc: 'Our growers answer your winter plant questions and show what is new in the glasshouse.', registered: 3860, capacity: 9000 } ],
    about: { founded: 'Lincolnshire · 2013', story: 'A family glasshouse that grew tomatoes for forty years, then switched to houseplants. We grow most of what we sell, and we joined PlantXX as Founding Partner to be where plant people talk.', milestones: [['2013', 'The first houseplants'], ['2020', 'Plastic-free delivery'], ['2026', 'Founding Partner on PlantXX']], values: ['Grown in Britain', 'Peat-free, plastic-free', 'A guarantee on every plant'] } }),

  'potters-field': brand({ key: 'potters-field', name: 'Potter’s Field Ceramics', color: '#C8692E', gradient: POT, tier: 'Brand Zone',
    tagline: 'Plant pots thrown in Stoke-on-Trent', stats: { followers: '72.4K', content: '340', products: '64' },
    ad: { badge: 'New', img: U('1614597408749-ed5e0f4f3dc7', 760, 760), hl: 'Every pot has a hole.', sub: 'Thrown by hand in Stoke, glazed in eight colours.', meta: 'From £9' },
    products: [
      { name: 'Thrown Plant Pot (15cm)', price: '£24', tag: 'FLAGSHIP', emoji: '🏺', rating: 4.9, reviews: 2460, cat: 'pots', special: true, desc: 'Hand-thrown stoneware with a drainage hole and matching saucer.', features: ['Eight glazes', 'Frost-proof'], review: { who: 'Mags T.', text: 'Every one slightly different. Love that.' } },
      { name: 'Terracotta Trio', price: '£18', tag: 'BESTSELLER', emoji: '🪴', rating: 4.8, reviews: 3120, cat: 'pots', desc: 'Three plain terracotta pots, 10, 12 and 15cm. Terracotta breathes, so roots don’t rot.', features: ['Unglazed'], review: { who: 'Wes K.', text: 'Perfect for succulents.' } },
      { name: 'Seconds Box', price: '£30', tag: 'SPECIAL', emoji: '♻️', rating: 4.8, reviews: 980, cat: 'pots', special: true, desc: 'Four pots with tiny glaze slips. Half price.', features: ['Random glazes'], review: { who: 'Finn W.', text: 'Could not see a single flaw.' } },
      { name: 'Watering Jug', price: '£32', emoji: '🫖', rating: 4.7, reviews: 640, cat: 'extras', desc: 'A slender stoneware jug for watering into the soil, not the leaves.', features: ['1 litre'], review: { who: 'Nora P.', text: 'Too pretty to put away.' } }
    ],
    shopCats: [ { key: 'pots', label: 'Pots', icon: '🏺' }, { key: 'extras', label: 'Extras', icon: '🫖' } ],
    feed: [ { type: 'post', sub: 'Brand post · 1h', text: 'Seconds Sale this Friday: every slightly wonky pot at half price.', img: U('1632900931939-9a1028f7cef6', 800, 440), eng: '♡ 5.8K · 💬 420', product: 2 } ],
    events: [ { zoneEvent: true, tag: 'SALE', title: 'Christmas seconds sale', when: 'Dec 4 · All day', desc: 'Every second at half price, while they last.', registered: 2240, capacity: 5000 } ],
    about: { founded: 'Stoke-on-Trent · 2016', story: 'Three potters in an old pottery bank in Burslem who only make one thing: pots that plants can live in.', milestones: [['2016', 'The first kiln firing'], ['2022', '100,000 pots thrown'], ['2026', 'Brand Zone on PlantXX']], values: ['Always a drainage hole', 'Made in the Potteries', 'Seconds, never skipped'] } }),

  'rootwell': brand({ key: 'rootwell', name: 'Rootwell', color: '#5E7431', gradient: MOSS, tier: 'Brand Zone',
    tagline: 'Peat-free compost that plants love', stats: { followers: '48.6K', content: '220', products: '18' },
    ad: { badge: 'Featured', img: U('1791461021399-df54f71f2eb1', 760, 760), hl: 'Peat-free. Proper results.', sub: 'Bark, wool and coir compost for pots, beds and seeds.', meta: 'From £8' },
    products: [
      { name: 'Peat-Free Multi-Purpose (40L)', price: '£12', tag: 'FLAGSHIP', emoji: '🟫', rating: 4.8, reviews: 4280, cat: 'compost', special: true, desc: 'For pots, beds and borders. Made from composted bark, sheep’s wool and coir.', features: ['Peat-free', 'Soil Association approved'], review: { who: 'Pat D.', text: 'Best tomatoes I have had in years.' } },
      { name: 'Houseplant Mix (10L)', price: '£8', tag: 'BESTSELLER', emoji: '🪴', rating: 4.8, reviews: 3620, cat: 'compost', desc: 'Chunky and free-draining, with bark and perlite. For aroids and most houseplants.', features: ['Peat-free'], review: { who: 'Mags T.', text: 'My monstera’s roots have never looked better.' } },
      { name: 'Seed Sowing Compost (20L)', price: '£9', emoji: '🌱', rating: 4.7, reviews: 1480, cat: 'compost', desc: 'Fine and light, for seeds and cuttings.', features: ['Peat-free'], review: { who: 'Ade O.', text: 'Every seed came up.' } },
      { name: 'Wool Pellets (2kg)', price: '£14', tag: 'SPECIAL', emoji: '🐑', rating: 4.8, reviews: 860, cat: 'feed', special: true, desc: 'Slow-release feed from British sheep’s wool. Holds water too.', features: ['Feeds for 6 months'], review: { who: 'Bea L.', text: 'Balcony pots stay damp much longer.' } }
    ],
    shopCats: [ { key: 'compost', label: 'Compost', icon: '🟫' }, { key: 'feed', label: 'Feed', icon: '🐑' } ],
    feed: [ { type: 'post', sub: 'Brand post · 4h', text: 'Our <b>Houseplant Mix</b>: chunky, airy, and not a gram of peat.', img: U('1615671524827-c1fe3973b648', 800, 440), eng: '♡ 4.2K · 💬 360', product: 1 } ],
    events: [ { zoneEvent: true, tag: 'EVENT', title: 'Going peat-free: free webinar', when: 'Dec 2 · 19:00', desc: 'Why it matters and how to get the best from peat-free compost.', registered: 1460, capacity: 3000 } ],
    about: { founded: 'Cumbria · 2011', story: 'A sheep farm that started composting its wool. Now we make peat-free compost for gardeners across Britain.', milestones: [['2011', 'The first wool compost'], ['2021', 'Soil Association approval'], ['2026', 'Brand Zone on PlantXX']], values: ['Never peat', 'British wool', 'Results first'] } }),

  'greenhand': brand({ key: 'greenhand', name: 'Greenhand Tools', color: '#36748A', gradient: SKY, tier: 'Brand Zone',
    tagline: 'Garden tools forged in Sheffield', stats: { followers: '39.2K', content: '180', products: '36' },
    ad: { badge: 'Featured', img: U('1783236307381-8057502b2383', 760, 760), hl: 'Tools for a lifetime.', sub: 'Forged in Sheffield, guaranteed for life.', meta: 'From £16' },
    products: [
      { name: 'Border Spade', price: '£68', tag: 'FLAGSHIP', emoji: '🪏', rating: 4.9, reviews: 1640, cat: 'digging', special: true, desc: 'A smaller, lighter spade forged from one piece of steel, with an ash handle.', features: ['Lifetime guarantee', 'Made in Sheffield'], review: { who: 'Pat D.', text: 'My grandad’s was like this. Lasted fifty years.' } },
      { name: 'Bypass Secateurs', price: '£34', tag: 'BESTSELLER', emoji: '✂️', rating: 4.8, reviews: 2880, cat: 'cutting', desc: 'Clean cuts on live stems up to 20mm. Every part replaceable.', features: ['Spare blades sold'], review: { who: 'Ruth A.', text: 'Sharp, balanced, built to last.' } },
      { name: 'Hand Trowel', price: '£16', emoji: '🥄', rating: 4.8, reviews: 2140, cat: 'digging', desc: 'Stainless steel, a strong neck that will not bend.', features: ['Lifetime guarantee'], review: { who: 'Bea L.', text: 'The only trowel I have not bent.' } },
      { name: 'Gift Set in a Canvas Roll', price: '£58', tag: 'SPECIAL', emoji: '🎁', rating: 4.9, reviews: 760, cat: 'gifts', special: true, desc: 'Trowel, fork and secateurs in a waxed canvas roll.', features: ['Gift wrapped'], review: { who: 'Ned F.', text: 'My dad has not stopped talking about it.' } }
    ],
    shopCats: [ { key: 'digging', label: 'Digging', icon: '🪏' }, { key: 'cutting', label: 'Cutting', icon: '✂️' }, { key: 'gifts', label: 'Gift sets', icon: '🎁' } ],
    feed: [ { type: 'post', sub: 'Brand post · 1d', text: 'The <b>Border Spade</b>: for people who find a full-size spade too much.', img: U('1533792344354-ed5e8fc12494', 800, 440), eng: '♡ 2.4K · 💬 180', product: 0 } ],
    events: [ { zoneEvent: true, tag: 'DEADLINE', title: 'Last order for Christmas delivery', when: 'Dec 17 · 23:59', desc: 'Order gift sets by midnight on 17 December for delivery before Christmas.', registered: 680, capacity: 2000 } ],
    about: { founded: 'Sheffield · 1908', story: 'A forge in the Don Valley that made agricultural tools for a century, and now makes them for gardeners.', milestones: [['1908', 'The forge opens'], ['2018', 'Selling direct to gardeners'], ['2026', 'Brand Zone on PlantXX']], values: ['Forged, not stamped', 'Every part replaceable', 'Guaranteed for life'] } }),

  'lea-valley-growers': { key: 'lea-valley-growers', kind: 'business', gw: 'plant', name: 'Lea Valley Growers', color: '#2F7D4A', gradient: LEAF, img: U('1774446931753-5c28039f1a41', 900, 500),
    tier: 'Verified', category: 'Wholesale nursery', tagline: 'Houseplants and bedding grown under glass for garden centres and shops.',
    about: { founded: 'Cheshunt · 1952', story: 'Four hectares of glasshouses in the Lea Valley, growing houseplants and bedding for garden centres, florists and online shops across the South East.' },
    stats: { years: 74, staff: 140, clients: '380 garden centres & shops' },
    caps: [ { name: 'Contract growing', detail: 'Your plants, grown to your size and date.' }, { name: 'Houseplants', detail: 'Ninety varieties from 6cm plugs to 1.5m specimens.' }, { name: 'Biological pest control', detail: 'Ladybirds and predatory mites, not sprays.' } ],
    specs: { moq: 'One trolley', lead: 'Ready in 1 to 12 weeks', regions: 'South East England', certs: ['Peat-free growing', 'Plant passport registered', 'Red Tractor'] },
    supplies: [ { kind: 'brand', key: 'fernway', what: 'Calatheas and palms for the Pet-Safe Trio' } ],
    cases: [ { title: 'A chain of 12 garden centres', text: 'Moved their entire houseplant range to peat-free in two seasons.' } ],
    feed: [ { sub: 'Glasshouse · 2d', text: 'Poinsettias are coloured and ready to ship for Christmas.' }, { sub: 'News · 1w', text: 'The last of our glasshouses now runs on a heat pump.' } ],
    contact: { person: 'Joe Russo, Trade sales', response: 'Replies within 24 hours' } },

  'verdant-offices': { key: 'verdant-offices', kind: 'business', gw: 'plant', name: 'Verdant Office Plants', color: '#C8692E', gradient: POT, img: U('1641816482997-515cdf9bb054', 900, 500),
    tier: 'Verified', category: 'Plant hire & care', tagline: 'Plants for offices, hotels and shops, looked after for you.',
    about: { founded: 'Manchester · 2010', story: 'We design, install and look after plants in workplaces across the North West, from a desk plant to a living wall.' },
    stats: { years: 16, staff: 85, clients: '900 workplaces' },
    caps: [ { name: 'Plant hire', detail: 'Plants, pots and care for one monthly fee.' }, { name: 'Living walls', detail: 'Designed, planted and kept green.' }, { name: 'Fortnightly care visits', detail: 'Watering, cleaning and swaps if a plant struggles.' } ],
    specs: { moq: 'Ten plants', lead: 'Installed within 3 weeks', regions: 'North West England', certs: ['ISO 14001', 'Fully insured', 'Living Wage employer'] },
    supplies: [ { kind: 'brand', key: 'potters-field', what: 'Large planters for office receptions' } ],
    cases: [ { title: 'A 400-desk office in Spinningfields', text: '260 plants and a living wall, cared for every fortnight.' } ],
    feed: [ { sub: 'Projects · 5d', text: 'A new living wall for a hospital waiting room in Salford.' } ],
    contact: { person: 'Chloe Barker, New clients', response: 'Replies within one working day' } }
});

/* events in the Events tab */
gxEvents('plant', [
  { gw: 'plant', zone: 'fernway', type: 'Live', icon: '🔴', live: true, time: 'Live Now', title: 'Fernway Live · Winter houseplant clinic', desc: 'Growers answer your winter plant questions live from the glasshouse.' },
  { gw: 'plant', type: 'Event', icon: '🧄', time: 'Nov 28', title: 'Garlic planting morning, Sheffield', desc: 'Sheffield Allotment Network: bring a fork, leave with garlic in the ground.' },
  { gw: 'plant', zone: 'potters-field', type: 'Sale', icon: '🏺', time: 'Dec 4', title: 'Potter’s Field seconds sale', desc: 'Every slightly wonky pot at half price, for one day.' },
  { gw: 'plant', zone: 'rootwell', type: 'Event', icon: '🟫', time: 'Dec 2', title: 'Going peat-free: free webinar', desc: 'Rootwell on why peat matters and how to get the best from peat-free compost.' },
  { gw: 'plant', type: 'Event', icon: '🩺', time: 'Dec 3', title: 'Winter houseplant clinic, live', desc: 'Houseplant Hospital with Owen Price: bring your saddest leaf.' },
  { gw: 'plant', type: 'Event', icon: '🌱', time: 'Dec 5', title: 'Cuttings swap', desc: 'Houseplant Hospital: sign up online and swap cuttings at local meet-ups.' },
  { gw: 'plant', type: 'Event', icon: '🏡', time: 'Dec 10', title: 'Small gardens that flower all year', desc: 'A free talk by Ruth Akande on planting for every month.' },
  { gw: 'plant', zone: 'greenhand', type: 'Deadline', icon: '🎁', time: 'Dec 17', title: 'Last order for Christmas tool gifts', desc: 'Greenhand Tools: order gift sets by midnight for delivery before Christmas.' }
]);
})();
/* ═════════ /PLANTXX ═════════ */
