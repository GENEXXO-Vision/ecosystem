/* ═════════ SOLARXX — an Energy demo gateway (2026-11-24, Sean; build -96) ═════════
   Built with the _tools/README.md recipe. Palette (light): warm daylight, sun gold, sky blue.
   Home sector: Energy (GW_HOME already says so; listed only there). Every installer, maker, pro and product is
   fictional; places and the physics are real. Prices, payback times and generation figures are illustrative. */
(function(){
const U = (id, w, h) => `https://images.unsplash.com/photo-${id}?w=${w}&h=${h}&fit=crop&q=75`;
const SUN = 'linear-gradient(135deg,#FACC15,#CA8A04)', SKY = 'linear-gradient(135deg,#38BDF8,#1D4ED8)', LEAF = 'linear-gradient(135deg,#4ADE80,#15803D)', DUSK = 'linear-gradient(135deg,#FB923C,#9A3412)';

GATEWAYS.solar = {
  name: 'SolarXX', domain: 'solarxx.com', emoji: '☀️', sector: 'energy', live: true,
  tagline: 'The Solar Universe',
  theme: {
    bg: '#FFFBF0', text: '#1F1A0E', cardBg: '#FFFFFF', cardBorder: 'rgba(31,26,14,.08)',
    headerBg: 'linear-gradient(180deg,#FFFFFF,#FFFBF0)', accent: '#CA8A04', accentAlt: '#1D4ED8', dark: false
  },
  gradient: 'linear-gradient(135deg,#FACC15,#CA8A04,#1D4ED8)',
  stats: { members: '2.2M', brands: '1.1K+', agents: '34' },
  spaces: ['All Feed', 'Rooftop', 'Batteries', 'Community Energy', 'Installers', 'Careers'],
  trending: ['#SolarSummerInWinter', '#MyFirstKWh', '#CommunitySolar'],
  brandZones: [
    { key: 'sunvault', name: 'Sunvault', color: '#CA8A04', tier: 'Founding Partner', tag: 'Solar panels and batteries for every home' },
    { key: 'brightroof', name: 'Brightroof', color: '#1D4ED8', tier: 'Brand Zone', tag: 'Solar roof tiles that look like a roof' },
    { key: 'plugsun', name: 'Plugsun', color: '#15803D', tier: 'Brand Zone', tag: 'Plug-in solar for balconies, sheds and vans' },
    { key: 'gridkind', name: 'Gridkind', color: '#EA580C', tier: 'Brand Zone', tag: 'Smart chargers that run your car on sunshine' }
  ],
  apps: [
    { name: 'Payback Planner', color: '#CA8A04', desc: 'How long until solar pays for itself', key: 'payback-planner', url: 'apps/payback-planner.html',
      dev: 'Sunvault', rating: '4.8', users: '1.6M', perms: ['profile', 'feed'],
      tagline: 'The honest sums, before you buy.',
      about: 'Payback Planner works out what a solar system could save you: your roof size, which way it faces, your bill and whether you add a battery. Illustrative figures in this demo; get a real survey before you buy.',
      features: ['Savings by the year', 'Battery or no battery', 'Which way your roof faces', 'Share your sums'],
      shots: ['apps/payback-planner/shot-1.jpg', 'apps/payback-planner/shot-2.jpg', 'apps/payback-planner/shot-3.jpg'],
      version: '5.2', size: '9 KB',
      updates: [ { v: '5.2', ago: 2, notes: 'Battery comparison.' }, { v: '4.6', ago: 70, notes: 'Roof direction.' }, { v: '3.9', ago: 200, notes: 'Signed in with GENEXXO.' } ],
      reviews: [ { who: '@sunny_semi_sam', stars: 5, ago: 1, text: 'Showed us the battery was worth it for our evenings.' }, { who: '@simone_clarke_energy', stars: 5, ago: 14, text: 'I send all my clients here first.' }, { who: '@off_grid_owain', stars: 4, ago: 33, text: 'Clear and honest.' } ] },
    { name: 'Roof Planner', color: '#1D4ED8', desc: 'How many panels fit on your roof', key: 'roof-planner', url: 'apps/roof-planner.html',
      dev: 'Brightroof', rating: '4.7', users: '840K', perms: ['profile', 'feed'],
      tagline: 'Draw your roof, see your panels.',
      about: 'Roof Planner lays panels out on your roof: enter the size of each roof face, mark the skylights and chimney, and see how many panels fit and roughly what they make in a year.',
      features: ['Panels laid out for you', 'Mark chimneys and windows', 'Yearly output estimate', 'Save each roof'],
      shots: ['apps/roof-planner/shot-1.jpg', 'apps/roof-planner/shot-2.jpg', 'apps/roof-planner/shot-3.jpg'],
      version: '3.4', size: '9 KB',
      updates: [ { v: '3.4', ago: 3, notes: 'Mark chimneys and windows.' }, { v: '2.8', ago: 85, notes: 'Two roof faces.' }, { v: '2.0', ago: 230, notes: 'Signed in with GENEXXO.' } ],
      reviews: [ { who: '@daniel_mensah_solar', stars: 5, ago: 2, text: 'Customers arrive knowing what fits. Saves me a visit.' }, { who: '@sunny_semi_sam', stars: 5, ago: 20, text: 'Fourteen panels, exactly what the installer said.' }, { who: '@bristol_coop_bea', stars: 4, ago: 44, text: 'Used it for the school roof.' } ] },
    { name: 'Generation Diary', color: '#15803D', desc: 'Log what your panels make every day', key: 'generation-diary', url: 'apps/generation-diary.html',
      dev: 'Plugsun', rating: '4.8', users: '1.1M', perms: ['profile', 'feed'],
      tagline: 'Every sunny day, counted.',
      about: 'Generation Diary keeps a daily log of what your panels made, with the weather beside it. See your best day, your month against last year and how much you used yourself.',
      features: ['Daily log with weather', 'Best days and streaks', 'Month by month', 'Share a record day'],
      shots: ['apps/generation-diary/shot-1.jpg', 'apps/generation-diary/shot-2.jpg', 'apps/generation-diary/shot-3.jpg'],
      version: '4.0', size: '9 KB',
      updates: [ { v: '4.0', ago: 1, notes: 'Month by month.' }, { v: '3.3', ago: 66, notes: 'Weather beside each day.' }, { v: '2.5', ago: 190, notes: 'Signed in with GENEXXO.' } ],
      reviews: [ { who: '@off_grid_owain', stars: 5, ago: 2, text: 'Six years of logs. Addictive.' }, { who: '@sunny_semi_sam', stars: 5, ago: 18, text: 'Made 3 kWh in November. I’m oddly proud.' }, { who: '@bristol_coop_bea', stars: 4, ago: 39, text: 'Simple and lovely.' } ] }
  ],
  pros: [
    { key: 'daniel-mensah-solar', name: 'Daniel Mensah Solar', color: '#CA8A04', tag: 'Certified solar and battery installer', role: 'Solar installer',
      img: U('1621905252507-b35492cc74b4', 800, 800), base: 'Leeds, UK · Yorkshire', langs: 'English, Twi', years: 12, rating: '4.9', reviewsN: 412, cur: '£',
      creds: ['Certified installer for solar and batteries', 'Qualified electrician', 'Over 900 roofs fitted'],
      about: 'Daniel fits solar panels and batteries across Yorkshire. He surveys every roof himself, tells you straight if solar isn’t worth it, and his team are tidy.',
      services: [ { id: 'survey', name: 'Roof survey and quote', dur: '90 minutes', price: 60, desc: 'Refunded if you go ahead.' },
                  { id: 'battery', name: 'Add a battery', dur: 'One day', price: 3200, desc: 'To an existing system, fitted.' },
                  { id: 'health', name: 'System health check', dur: '1 hour', price: 95, desc: 'Panels, inverter and wiring tested.' } ],
      avail: { days: [1, 2, 3, 4, 5], times: ['09:00', '12:00', '15:00'] },
      reviews: [ { who: '@sunny_semi_sam', stars: 5, ago: 3, text: 'Fitted in a day, left no mess.' }, { who: '@off_grid_owain', stars: 5, ago: 25, text: 'Honest about what my roof could do.' }, { who: '@bristol_coop_bea', stars: 5, ago: 50, text: 'Found a fault the last installer missed.' } ],
      posts: [ { ago: 1, text: 'Even in a Leeds November, a south-facing system still makes something every day. Winter is when you notice a battery most.' } ],
      tier: 'Pro Zone', verified: true },
    { key: 'simone-clarke-energy', name: 'Simone Clarke Home Energy', color: '#1D4ED8', tag: 'Independent home energy advice', role: 'Home energy adviser',
      img: U('1573164713350-b14a82d3c15b', 800, 800), base: 'Bristol, UK · and online', langs: 'English', years: 8, rating: '4.9', reviewsN: 288, cur: '£',
      creds: ['Qualified domestic energy assessor', 'Independent: no commission from installers', 'Retrofit coordinator'],
      about: 'Simone helps households decide what to do first: insulation, solar, a battery or a heat pump. She sells nothing but advice, so her answer is the one that suits your home.',
      services: [ { id: 'call', name: 'Where do I start? call', dur: '45 minutes', price: 45, desc: 'Your bills and home, a clear plan.' },
                  { id: 'visit', name: 'Whole-home energy visit', dur: '2 hours', price: 150, desc: 'A room-by-room report.' },
                  { id: 'quotes', name: 'Quote check', dur: '1 week', price: 60, desc: 'Three installer quotes compared.' } ],
      avail: { days: [1, 2, 4, 5], times: ['10:00', '13:30', '18:00'] },
      reviews: [ { who: '@sunny_semi_sam', stars: 5, ago: 2, text: 'Told us to insulate the loft first. She was right.' }, { who: '@bristol_coop_bea', stars: 5, ago: 22, text: 'Spotted a quote that was £2,000 too high.' }, { who: '@off_grid_owain', stars: 5, ago: 47, text: 'Calm, clear and independent.' } ],
      posts: [ { ago: 2, text: 'Before solar, check the cheap wins: loft insulation, draughts and a lower flow temperature on the boiler.' } ],
      tier: 'Pro Zone', verified: true },
    { key: 'owain-pryce-offgrid', name: 'Owain Pryce Off-Grid Workshops', color: '#15803D', tag: 'Hands-on off-grid solar courses', role: 'Off-grid solar teacher',
      img: U('1608649672519-e8797a9560cf', 800, 800), base: 'Machynlleth, Wales', langs: 'English, Welsh', years: 31, rating: '4.9', reviewsN: 356, cur: '£',
      creds: ['Thirty years living off-grid', 'Retired electrical engineer', 'Teaches safe low-voltage wiring'],
      about: 'Owain has run his smallholding on sun and wind since the nineties. His weekend workshops teach you to size, wire and run a small off-grid system for a cabin, van or boat.',
      services: [ { id: 'weekend', name: 'Off-grid weekend', dur: 'Two days', price: 240, desc: 'Size and wire a system yourself.' },
                  { id: 'van', name: 'Campervan solar day', dur: 'One day', price: 130, desc: 'Panels, battery and safe wiring.' },
                  { id: 'call', name: 'Design check call', dur: '60 minutes', price: 50, desc: 'Your plan, checked before you buy.' } ],
      avail: { days: [5, 6], times: ['09:30', '14:00'] },
      reviews: [ { who: '@off_grid_owain', stars: 5, ago: 4, text: 'A weekend that changed how I live.' }, { who: '@bristol_coop_bea', stars: 5, ago: 30, text: 'My van runs on sunshine now.' }, { who: '@sunny_semi_sam', stars: 5, ago: 58, text: 'Patient and very funny.' } ],
      posts: [ { ago: 3, text: 'Size an off-grid system for December, not June. If it works in the darkest week, it works all year.' } ],
      tier: 'Pro Zone', verified: true }
  ],
  communities: [
    { key: 'solar-owners-club', name: 'Solar Owners Club', domain: 'owners.solarxx.com', color: '#CA8A04', img: U('1761472823286-9f6093ed6663', 900, 500),
      scope: 'Global', where: 'On every sunny roof', members: 486000, online: 5120, tagline: 'Every kilowatt-hour counts.',
      about: 'People with panels on their roofs: record days, battery tips, tariff questions and the quiet joy of a meter running backwards.',
      rules: ['Share your town, not your address', 'No selling or cold-calling', 'Beginners’ questions welcome'],
      mods: ['@sunny_semi_sam', '@off_grid_owain'],
      threads: [ { t: 'What did your panels make in November?', by: '@sunny_semi_sam', tag: 'NUMBERS', replies: 2140, ago: 0, votes: 3860 }, { t: 'Battery: was it worth it for you?', by: '@off_grid_owain', tag: 'DEBATE', replies: 1320, ago: 1, votes: 2410 }, { t: 'Cleaning panels: do you bother?', by: '@sunny_semi_sam', tag: 'TIPS', replies: 640, ago: 2, votes: 1180 }, { t: 'Your roof, from above', by: '@off_grid_owain', tag: 'PHOTOS', replies: 980, ago: 3, votes: 2220 } ],
      events: [ { title: 'Winter solar Q&A: live chat', day: 7, time: '19:30', where: 'Online' }, { title: 'Shortest-day generation challenge', day: 27, time: 'All day', where: 'Online' } ] },
    { key: 'bristol-solar-coop', name: 'Bristol Solar Co-op', domain: 'bristol.solarxx.com', color: '#1D4ED8', img: U('1588888689244-1f24c30f5419', 900, 500),
      scope: 'Local', where: 'Bristol', members: 2240, online: 48, tagline: 'Our roofs, our power.',
      about: 'Neighbours who club together to put panels on schools, halls and each other’s roofs, and share what they make. Members’ meetings, roof walks and a pint after.',
      rules: ['Everyone welcome, panels or not', 'One member, one vote', 'Be kind to newcomers'],
      mods: ['@bristol_coop_bea', '@simone_clarke_energy'],
      threads: [ { t: 'December members’ meeting: the next school roof', by: '@bristol_coop_bea', tag: 'MEETING', replies: 64, ago: 0, votes: 132 }, { t: 'Bulk-buy batteries this winter?', by: '@simone_clarke_energy', tag: 'BULK BUY', replies: 52, ago: 1, votes: 108 }, { t: 'Roof walk volunteers', by: '@bristol_coop_bea', tag: 'VOLUNTEER', replies: 28, ago: 2, votes: 60 } ],
      events: [ { title: 'Members’ meeting: the next school roof', day: 9, time: '19:00', where: 'Bristol' }, { title: 'Winter roof walk', day: 18, time: '11:00', where: 'Bristol' } ] }
  ],
  feed: [
    { av: 'SX', avBg: SUN, author: 'SolarXX Editorial', sub: 'Featured · Just now', badge: '★ FEATURED',
      text: 'Sunlight on your roof, turned into the cheapest power you’ll ever use. Panels, batteries, honest installers and neighbours who’ve done it already. Solar, all in one place.',
      img: U('1497435334941-8c899ee9e8e9', 800, 600), eng: '♡ 41.2K · 💬 3.6K · ↗ 5.2K' },
    { av: 'SS', avBg: SKY, author: '@sunny_semi_sam', sub: 'Rooftop · Just now', badge: 'COMMUNITY',
      text: 'Fourteen panels on a 1930s semi in Stockport. Grey November and it still made enough to run the fridge and the washing machine today ☀️',
      img: U('1658298775754-5839ffd434cc', 800, 600), eng: '♡ 12.6K · 💬 1.4K · ↗ 820' },
    { av: 'SV', avBg: SUN, author: 'Sunvault', sub: 'Founding Partner · Brand Zone', badge: 'BRAND ZONE',
      text: 'Live now: one street in Leeds goes solar in a single day. Twelve homes, twelve roofs, one crew, and the first <b>Sunvault</b> battery switching on at sunset.',
      img: U('1660330589505-9a433a742a7b', 800, 600), eng: '♡ 26.4K · 💬 3.1K · ↗ 3.9K' },
    { av: 'BR', avBg: SKY, author: 'Brightroof', sub: 'Brand Zone · 1h ago', badge: 'BRAND ZONE',
      text: 'Is it a roof or a power station? Both. <b>Brightroof Tiles</b> sit flush with the slates, so the street sees a roof and the meter sees the sun.',
      img: U('1764885518069-84608997f900', 800, 600), eng: '♡ 9.4K · 💬 720 · ↗ 880' },
    { av: 'OP', avBg: LEAF, author: '@off_grid_owain', sub: 'Off-Grid · 2h ago', badge: 'COMMUNITY',
      text: 'Field panels at the smallholding, soaking up a rare clear morning. Thirty winters off-grid and a sunny day still makes me grin.',
      img: U('1497440001374-f26997328c1b', 800, 600), eng: '♡ 8.2K · 💬 640 · ↗ 410' },
    { av: 'PS', avBg: LEAF, author: 'Plugsun', sub: 'Brand Zone · 4h ago', badge: 'BRAND ZONE',
      text: 'No roof? No problem. Two <b>Plugsun Balcony Panels</b> and a plug: flat-dwellers make their own power too.',
      img: U('1724041875334-0a6397111c7e', 800, 600), eng: '♡ 6.8K · 💬 520 · ↗ 610' },
    { av: 'DM', avBg: SUN, author: 'Daniel Mensah Solar', sub: 'Installers · 6h ago', badge: 'PRO ZONE',
      text: 'Roof number 912 this morning. The trick in winter: a frosty start, rails on by ten, panels on by two, switched on before dark.',
      img: U('1719848576338-9516ba7ccd8b', 800, 600), eng: '♡ 4.1K · 💬 280 · ↗ 360' }
  ],
  prompts: ['Is solar worth it on my roof?', 'Do solar panels work in winter?', 'Should I get a battery with my solar panels?', 'How do I find a good solar installer?'],
  businesses: ['meadowfield-solar', 'clearcell-recycling']
};

/* the four Brand Zones and two Business Zones */
const brand = (o) => Object.assign({ kind: 'brand', gw: 'solar', verified: true }, o);
Object.assign(ZONES, {
  'sunvault': brand({ key: 'sunvault', name: 'Sunvault', color: '#CA8A04', gradient: SUN, tier: 'Founding Partner',
    tagline: 'Solar panels and batteries for every home', stats: { followers: '486K', content: '920', products: '14' },
    ad: { badge: 'Featured', img: U('1660330589243-4c640d878052', 760, 760), hl: 'Your roof. Your power.', sub: 'Panels and a battery, fitted in a day.', meta: 'From £5,400' },
    products: [
      { name: 'Sunvault Home 4 kW', price: 'From £5,400', tag: 'FLAGSHIP', emoji: '☀️', rating: 4.8, reviews: 8420, cat: 'systems', special: true, desc: 'Ten panels, an inverter and the app, fitted by a certified crew.', features: ['25-year panel warranty', 'Fitted in a day'], review: { who: 'Sam R.', text: 'Our bills dropped from the first month.' } },
      { name: 'Sunvault Battery 10', price: 'From £3,900', tag: 'BESTSELLER', emoji: '🔋', rating: 4.8, reviews: 5160, cat: 'batteries', desc: 'Keeps the day’s sunshine for your evening.', features: ['10 kWh', 'Backup during power cuts'], review: { who: 'Owain P.', text: 'Runs our evenings into the night.' } },
      { name: 'Sunvault Home 6 kW', price: 'From £7,200', emoji: '🏠', rating: 4.7, reviews: 2380, cat: 'systems', desc: 'Fifteen panels for bigger roofs and bigger households.', features: ['Two roof faces'], review: { who: 'Bea K.', text: 'Worth it with an electric car.' } },
      { name: 'Panel Care Plan', price: '£8 / month', tag: 'SPECIAL', emoji: '🧽', rating: 4.6, reviews: 1240, cat: 'care', special: true, desc: 'A yearly check and clean, and call-outs covered.', features: ['Cancel any time'], review: { who: 'Simone C.', text: 'Peace of mind for older clients.' } }
    ],
    shopCats: [ { key: 'systems', label: 'Systems', icon: '☀️' }, { key: 'batteries', label: 'Batteries', icon: '🔋' }, { key: 'care', label: 'Care', icon: '🧽' } ],
    feed: [
      { type: 'post', sub: 'Brand post · 2h', text: 'Low winter sun across a roof of new panels. A <b>Sunvault Home 4 kW</b>, fitted this week.', img: U('1613665813446-82a78c468a1d', 800, 440), eng: '♡ 26.4K · 💬 3.1K · ↗ 3.9K', product: 0 },
      { type: 'post', sub: 'Install day · Yesterday', text: 'The last panel of the day, and the light already going. Tonight the <b>Battery 10</b> does the work.', img: U('1624397640148-949b1732bb0a', 800, 440), eng: '♡ 7.2K · 💬 480', product: 1 },
      { type: 'community', who: 'Sam R.', whoBg: SKY, sub: 'Community · 1d', text: 'Is it worth fitting solar in winter, or should we wait for spring?', eng: '♡ 610 · 💬 160', reply: 'Hi Sam! Winter is a great time to fit: crews are freer, and your system is ready for the long spring days when it makes the most. You’ll still make some power from day one. ☀️' }
    ],
    events: [ { zoneEvent: true, tag: 'LIVE', title: 'Sunvault Live · a whole street goes solar', when: 'Live now', desc: 'Follow one crew as twelve homes in Leeds get panels in a single day.', registered: 10240, capacity: 25000 } ],
    about: { founded: 'Leeds · 2015', story: 'Two electricians who were tired of hard-sell solar. Now 60,000 homes, every roof surveyed in person. We joined SolarXX as Founding Partner because the best salespeople for solar are its owners.', milestones: [['2015', 'Founded'], ['2022', 'Battery 10 launched'], ['2026', 'Founding Partner on SolarXX']], values: ['Survey every roof in person', 'No pressure selling', 'Panels recycled at end of life'] } }),

  'brightroof': brand({ key: 'brightroof', name: 'Brightroof', color: '#1D4ED8', gradient: SKY, tier: 'Brand Zone',
    tagline: 'Solar roof tiles that look like a roof', stats: { followers: '96.4K', content: '410', products: '9' },
    ad: { badge: 'New', img: U('1558449028-b53a39d100fc', 760, 760), hl: 'A roof that pays you back.', sub: 'Solar tiles that sit flush with your slates.', meta: 'From £9,800' },
    products: [
      { name: 'Brightroof Tiles', price: 'From £9,800', tag: 'FLAGSHIP', emoji: '🏠', rating: 4.7, reviews: 1420, cat: 'roofs', special: true, desc: 'Solar tiles in place of slates, for new roofs and re-roofs.', features: ['Planning-friendly', 'Slate grey or terracotta'], review: { who: 'Bea K.', text: 'The conservation officer said yes.' } },
      { name: 'Brightroof Slim Panels', price: 'From £4,900', tag: 'BESTSELLER', emoji: '⬛', rating: 4.8, reviews: 2860, cat: 'panels', desc: 'All-black panels that sit low on the roof.', features: ['No silver frames'], review: { who: 'Sam R.', text: 'The neighbours barely noticed.' } },
      { name: 'Roof Survey by Drone', price: '£75', emoji: '🚁', rating: 4.8, reviews: 960, cat: 'surveys', desc: 'Your roof measured from the air, no ladders.', features: ['Report in two days'], review: { who: 'Daniel M.', text: 'Accurate to the centimetre.' } },
      { name: 'Facade Panels', price: 'From £12,000', tag: 'SPECIAL', emoji: '🏢', rating: 4.6, reviews: 240, cat: 'panels', special: true, desc: 'Solar panels as the walls of a building.', features: ['For offices and flats'], review: { who: 'Simone C.', text: 'Beautiful on a new build.' } }
    ],
    shopCats: [ { key: 'roofs', label: 'Roofs', icon: '🏠' }, { key: 'panels', label: 'Panels', icon: '⬛' }, { key: 'surveys', label: 'Surveys', icon: '🚁' } ],
    feed: [ { type: 'post', sub: 'Brand post · 1h', text: 'Low, black and tidy: <b>Slim Panels</b> under a big Yorkshire sky.', img: U('1508514177221-188b1cf16e9d', 800, 440), eng: '♡ 9.4K · 💬 720', product: 1 } ],
    events: [ { zoneEvent: true, tag: 'SALE', title: 'Christmas sale: free drone surveys', when: 'Dec 4 · All day', desc: 'A free roof survey by drone with every quote booked today.', registered: 1640, capacity: 4000 } ],
    about: { founded: 'Bath · 2017', story: 'Architects who wanted solar that old streets would welcome.', milestones: [['2017', 'The first tile'], ['2023', 'Facade panels'], ['2026', 'Brand Zone on SolarXX']], values: ['Beautiful roofs', 'Made to last fifty years', 'Planning help included'] } }),

  'plugsun': brand({ key: 'plugsun', name: 'Plugsun', color: '#15803D', gradient: LEAF, tier: 'Brand Zone',
    tagline: 'Plug-in solar for balconies, sheds and vans', stats: { followers: '142K', content: '520', products: '24' },
    ad: { badge: 'Gift', img: U('1521618755572-156ae0cdd74d', 760, 760), hl: 'Solar with a plug.', sub: 'Panels for flats, sheds and campervans.', meta: 'From £89' },
    products: [
      { name: 'Plugsun Balcony Pair', price: '£449', tag: 'FLAGSHIP', emoji: '🏙️', rating: 4.7, reviews: 3240, cat: 'balcony', special: true, desc: 'Two panels and a small inverter for a balcony railing.', features: ['Clips on, no drilling', 'App shows what you make'], review: { who: 'Bea K.', text: 'Our flat makes its own power now.' } },
      { name: 'Van Kit 200', price: '£329', tag: 'BESTSELLER', emoji: '🚐', rating: 4.8, reviews: 2120, cat: 'van', desc: 'A 200-watt roof panel, controller and cables.', features: ['Fitting guide'], review: { who: 'Owain P.', text: 'My students fit this one first.' } },
      { name: 'Shed Light Kit', price: '£89', emoji: '💡', rating: 4.7, reviews: 1860, cat: 'garden', desc: 'A small panel, battery and LED lights for a shed.', features: ['No wiring to the house'], review: { who: 'Sam R.', text: 'Fitted in an afternoon.' } },
      { name: 'Folding Camping Panel', price: '£139', tag: 'SPECIAL', emoji: '⛺', rating: 4.6, reviews: 980, cat: 'van', special: true, desc: 'Folds into a bag, charges phones and power banks.', features: ['Weighs 2 kg'], review: { who: 'Simone C.', text: 'A brilliant present.' } }
    ],
    shopCats: [ { key: 'balcony', label: 'Balcony', icon: '🏙️' }, { key: 'van', label: 'Van', icon: '🚐' }, { key: 'garden', label: 'Garden', icon: '💡' } ],
    feed: [ { type: 'post', sub: 'Brand post · 1d', text: 'Small panels, big smiles. The <b>Van Kit 200</b> powers a weekend away.', img: U('1509389928833-fe62aef36deb', 800, 440), eng: '♡ 4.6K · 💬 300', product: 1 } ],
    events: [ { zoneEvent: true, tag: 'SALE', title: 'Christmas sale: 20% off kits', when: 'Dec 4 · All day', desc: 'A fifth off every Plugsun kit, one day only.', registered: 1240, capacity: 3500 } ],
    about: { founded: 'Bristol · 2019', story: 'Started by renters who couldn’t put panels on a roof they didn’t own.', milestones: [['2019', 'The first balcony kit'], ['2024', 'Van kits'], ['2026', 'Brand Zone on SolarXX']], values: ['Solar for renters', 'Safe by design', 'Repairable parts'] } }),

  'gridkind': brand({ key: 'gridkind', name: 'Gridkind', color: '#EA580C', gradient: DUSK, tier: 'Brand Zone',
    tagline: 'Smart chargers that run your car on sunshine', stats: { followers: '64.8K', content: '260', products: '12' },
    ad: { badge: 'Featured', img: U('1768839727824-28d6f0dcd1d1', 760, 760), hl: 'Drive on sunshine.', sub: 'A charger that waits for your panels.', meta: 'From £699' },
    products: [
      { name: 'Gridkind Solar Charger', price: 'From £699', tag: 'FLAGSHIP', emoji: '🔌', rating: 4.8, reviews: 2240, cat: 'chargers', special: true, desc: 'Charges your car from spare solar first, the grid last.', features: ['Fitting included', 'Works with any panels'], review: { who: 'Sam R.', text: 'Our car ran on our roof all summer.' } },
      { name: 'Gridkind Hub', price: '£149', tag: 'BESTSELLER', emoji: '📟', rating: 4.7, reviews: 1460, cat: 'smart', desc: 'Sends spare solar to the hot water, car or battery.', features: ['Works with any battery'], review: { who: 'Daniel M.', text: 'I fit one with every system.' } },
      { name: 'Hot Water Diverter', price: '£279', emoji: '🚿', rating: 4.7, reviews: 1120, cat: 'smart', desc: 'Heats your water with spare solar.', features: ['Fits most tanks'], review: { who: 'Owain P.', text: 'Free hot water from April to September.' } },
      { name: 'Energy Display', price: '£59', tag: 'SPECIAL', emoji: '📊', rating: 4.6, reviews: 860, cat: 'smart', special: true, desc: 'A kitchen screen showing what the sun is making now.', features: ['Battery lasts a year'], review: { who: 'Bea K.', text: 'The kids run the washing machine when it’s green.' } }
    ],
    shopCats: [ { key: 'chargers', label: 'Chargers', icon: '🔌' }, { key: 'smart', label: 'Smart home', icon: '📟' } ],
    feed: [ { type: 'post', sub: 'Brand post · 4h', text: 'Midday sun, panels working flat out, every spare watt sent to the car. That’s the <b>Solar Charger</b>.', img: U('1768839722298-0491a671634d', 800, 440), eng: '♡ 5.2K · 💬 340', product: 0 } ],
    events: [ { zoneEvent: true, tag: 'EVENT', title: 'Webinar: charge your car on sunshine', when: 'Dec 3 · 19:00', desc: 'How much of your driving your roof can cover, with live Q&A.', registered: 640, capacity: 2000 } ],
    about: { founded: 'Nottingham · 2018', story: 'Engineers who hated watching spare solar go back to the grid for pennies.', milestones: [['2018', 'The Hub'], ['2022', 'Solar Charger'], ['2026', 'Brand Zone on SolarXX']], values: ['Use your own sunshine first', 'Works with any brand', 'Made in the Midlands'] } }),

  'meadowfield-solar': { key: 'meadowfield-solar', kind: 'business', gw: 'solar', name: 'Meadowfield Solar', color: '#CA8A04', gradient: SUN, img: U('1780922576334-8f8d4e8740cf', 900, 500),
    tier: 'Verified', category: 'Solar farm development', tagline: 'Solar farms where sheep still graze.',
    about: { founded: 'Truro · 2011', story: 'We plan, build and run solar farms with local landowners, with sheep and wildflowers between the rows.' },
    stats: { years: 15, staff: 140, clients: '62 solar farms' },
    caps: [ { name: 'Site finding', detail: 'Grid connection and planning.' }, { name: 'Build', detail: 'From field to switch-on in a season.' }, { name: 'Running', detail: 'Monitoring, grazing and repairs.' } ],
    specs: { moq: 'One field', lead: '12 to 30 months', regions: 'UK', certs: ['Biodiversity plan on every site', 'Fully insured', 'Community share offers'] },
    supplies: [ { kind: 'brand', key: 'sunvault', what: 'Panel recycling partner for Sunvault' } ],
    cases: [ { title: 'A village shares the sun', text: 'A Cornish village owns a fifth of the farm next door.' } ],
    feed: [ { sub: 'Site · 3d', text: 'Lambs between the rows next spring. The flock moves in this week.' } ],
    contact: { person: 'Kerensa Hocking, Landowners', response: 'Replies within two working days' } },

  'clearcell-recycling': { key: 'clearcell-recycling', kind: 'business', gw: 'solar', name: 'Clearcell Recycling', color: '#15803D', gradient: LEAF, img: U('1629726797843-618688139f5a', 900, 500),
    tier: 'Verified', category: 'Solar panel recycling', tagline: 'Old panels in. Glass, silver and silicon out.',
    about: { founded: 'Teesside · 2020', story: 'We take apart old and broken panels and send the glass, aluminium, silver and silicon back into new things.' },
    stats: { years: 6, staff: 75, clients: '1.2M panels recycled' },
    caps: [ { name: 'Collection', detail: 'From roofs, farms and depots.' }, { name: 'Recovery', detail: 'Over 95% of each panel reused.' }, { name: 'Reports', detail: 'Paperwork for every load.' } ],
    specs: { moq: 'One pallet', lead: '1 to 3 weeks', regions: 'UK and Ireland', certs: ['Licensed waste site', 'Independently audited', 'Fully insured'] },
    supplies: [ { kind: 'brand', key: 'sunvault', what: 'Recycling for every Sunvault panel at end of life' } ],
    cases: [ { title: 'A farm repowered', text: 'Forty thousand old panels recycled when a farm was upgraded.' } ],
    feed: [ { sub: 'Plant · 5d', text: 'A new line that recovers the silver from old cells.' } ],
    contact: { person: 'Jamie Lowther, Collections', response: 'Replies within one working day' } }
});

/* events in the Events tab */
gxEvents('solar', [
  { gw: 'solar', zone: 'sunvault', type: 'Live', icon: '🔴', live: true, time: 'Live Now', title: 'Sunvault Live · a whole street goes solar', desc: 'Follow one crew as twelve homes in Leeds get panels in a single day.' },
  { gw: 'solar', zone: 'brightroof', type: 'Sale', icon: '🚁', time: 'Dec 4', title: 'Brightroof Christmas sale', desc: 'A free drone roof survey with every quote booked.' },
  { gw: 'solar', zone: 'plugsun', type: 'Sale', icon: '🏙️', time: 'Dec 4', title: 'Plugsun Christmas sale', desc: '20% off every plug-in solar kit.' },
  { gw: 'solar', type: 'Event', icon: '💬', time: 'Dec 1', title: 'Winter solar Q&A: live chat', desc: 'Solar Owners Club answers your winter questions.' },
  { gw: 'solar', zone: 'gridkind', type: 'Event', icon: '🔌', time: 'Dec 3', title: 'Webinar: charge your car on sunshine', desc: 'How much of your driving your roof can cover.' },
  { gw: 'solar', type: 'Event', icon: '🗳️', time: 'Dec 3', title: 'Bristol Solar Co-op members’ meeting', desc: 'Choosing the co-op’s next school roof.' },
  { gw: 'solar', type: 'Event', icon: '🚶', time: 'Dec 12', title: 'Winter roof walk, Bristol', desc: 'Bristol Solar Co-op visits the roofs it powers.' },
  { gw: 'solar', type: 'Event', icon: '🌅', time: 'Dec 21', title: 'Shortest-day generation challenge', desc: 'Solar Owners Club logs what every roof makes on the darkest day.' }
]);
})();
/* ═════════ /SOLARXX ═════════ */
