/* ═════════ TRUCKXX — a Cars demo gateway (2026-11-23, Sean; build -94) ═════════
   Built with the _tools/README.md recipe. Palette (dark): night-road asphalt, cab blue, amber marker lights.
   Home sector: Cars (key `automotive`). Every truck maker, truck stop, fleet, pro and product is fictional; roads
   and towns are real. Prices, ranges and driving-hours figures are illustrative: the tachograph and the rules are
   the record, not this demo. */
(function(){
const U = (id, w, h) => `https://images.unsplash.com/photo-${id}?w=${w}&h=${h}&fit=crop&q=75`;
const CAB = 'linear-gradient(135deg,#3B82F6,#1E3A8A)', AMBER = 'linear-gradient(135deg,#FBBF24,#B45309)', STEEL = 'linear-gradient(135deg,#64748B,#1E293B)', HIVIS = 'linear-gradient(135deg,#D9F99D,#65A30D)';

GATEWAYS.truck = {
  name: 'TruckXX', domain: 'truckxx.com', emoji: '🚛', sector: 'automotive', live: true,
  tagline: 'The Truck Universe',
  theme: {
    bg: '#0D1117', text: '#E6EAF0', cardBg: 'rgba(255,255,255,.045)', cardBorder: 'rgba(230,234,240,.09)',
    headerBg: 'linear-gradient(180deg,#172033,#0D1117)', accent: '#3B82F6', accentAlt: '#F59E0B', dark: true
  },
  gradient: 'linear-gradient(135deg,#0F172A,#1E40AF,#F59E0B)',
  stats: { members: '2.6M', brands: '2,200+', agents: '44' },
  spaces: ['All Feed', 'On the Road', 'Electric Trucks', 'Cab Life', 'Truck Stops', 'Getting Your Licence'],
  trending: ['#NightShift', '#ElectricHGV', '#CabTour'],
  brandZones: [
    { key: 'haulmark-trucks', name: 'Haulmark Trucks', color: '#3B82F6', tier: 'Founding Partner', tag: 'Electric and diesel trucks, built in Britain' },
    { key: 'lantern-truckstops', name: 'Lantern Truckstops', color: '#F59E0B', tier: 'Brand Zone', tag: 'Secure overnight parking, showers and hot food' },
    { key: 'nightroute-cab', name: 'Nightroute Cab Gear', color: '#94A3B8', tier: 'Brand Zone', tag: 'Fridges, mattresses and cab comforts' },
    { key: 'gritline-workwear', name: 'Gritline Workwear', color: '#84CC16', tier: 'Brand Zone', tag: 'Boots, hi-vis and cold-weather kit' }
  ],
  apps: [
    { name: 'Drive Hours', color: '#3B82F6', desc: 'Driving time and breaks, at a glance', key: 'drive-hours', url: 'apps/drive-hours.html',
      dev: 'Haulmark Trucks', rating: '4.8', users: '780K', perms: ['profile', 'feed'],
      tagline: 'Know your next break before it’s due.',
      about: 'Drive Hours shows how long you can drive before your next break, how much of today’s driving is left and your week so far. A planning aid alongside your tachograph, which is always the record.',
      features: ['Time to your next break', 'Today and this week', 'Split breaks', 'Planning aid, not a tachograph'],
      shots: ['apps/drive-hours/shot-1.jpg', 'apps/drive-hours/shot-2.jpg', 'apps/drive-hours/shot-3.jpg'],
      version: '4.2', size: '10 KB',
      updates: [ { v: '4.2', ago: 2, notes: 'Split breaks.' }, { v: '3.8', ago: 70, notes: 'Weekly view.' }, { v: '3.0', ago: 210, notes: 'Signed in with GENEXXO.' } ],
      reviews: [ { who: '@nightshift_nadia', stars: 5, ago: 1, text: 'Clear and simple. Exactly what I need at 3am.' }, { who: '@lorry_lad_lewis', stars: 5, ago: 11, text: 'Plan my stops round it every day.' }, { who: '@diesel_dave', stars: 4, ago: 30, text: 'Would love a widget.' } ] },
    { name: 'Bay Finder', color: '#F59E0B', desc: 'Overnight truck parking with free bays', key: 'bay-finder', url: 'apps/bay-finder.html',
      dev: 'Lantern Truckstops', rating: '4.7', users: '540K', perms: ['profile', 'feed'],
      tagline: 'A safe bay, a hot shower, booked.',
      about: 'Bay Finder lists truck stops on the motorways and A roads with free bays tonight, what they have (showers, food, security) and the price. Reserve a bay and keep your favourites.',
      features: ['Free bays tonight', 'Showers, food and security', 'Reserve a bay', 'Favourite stops'],
      shots: ['apps/bay-finder/shot-1.jpg', 'apps/bay-finder/shot-2.jpg', 'apps/bay-finder/shot-3.jpg'],
      version: '2.9', size: '9 KB',
      updates: [ { v: '2.9', ago: 3, notes: 'Reserve a bay.' }, { v: '2.4', ago: 80, notes: 'Security ratings.' }, { v: '1.9', ago: 230, notes: 'Signed in with GENEXXO.' } ],
      reviews: [ { who: '@lorry_lad_lewis', stars: 5, ago: 2, text: 'No more circling services at 9pm.' }, { who: '@nightshift_nadia', stars: 5, ago: 15, text: 'The shower ratings are honest.' }, { who: '@diesel_dave', stars: 4, ago: 33, text: 'More stops in Scotland please.' } ] },
    { name: 'Load Planner', color: '#84CC16', desc: 'Check your payload before you load', key: 'load-planner', url: 'apps/load-planner.html',
      dev: 'Gritline Workwear', rating: '4.7', users: '310K', perms: ['profile', 'feed'],
      tagline: 'How much more can you take?',
      about: 'Load Planner adds up pallets against your truck’s weight limit and shows the space left. Pick the truck, add pallets by weight and see whether it fits. A planning aid: the weighbridge is the record.',
      features: ['Common truck types', 'Pallets by weight', 'Weight and space left', 'Save a load'],
      shots: ['apps/load-planner/shot-1.jpg', 'apps/load-planner/shot-2.jpg', 'apps/load-planner/shot-3.jpg'],
      version: '1.6', size: '9 KB',
      updates: [ { v: '1.6', ago: 4, notes: 'Save a load.' }, { v: '1.3', ago: 90, notes: 'Rigid trucks.' }, { v: '1.0', ago: 240, notes: 'Signed in with GENEXXO.' } ],
      reviews: [ { who: '@diesel_dave', stars: 5, ago: 3, text: 'Quick check before the forklift arrives.' }, { who: '@sam_transport_ops', stars: 5, ago: 18, text: 'Our planners use it daily.' }, { who: '@lorry_lad_lewis', stars: 4, ago: 37, text: 'Simple and it works.' } ] }
  ],
  pros: [
    { key: 'gary-holt-hgv', name: 'Gary Holt HGV Training', color: '#3B82F6', tag: 'HGV driving lessons, Class 2 and Class 1 · West Midlands', role: 'HGV driving instructor',
      img: U('1574757974346-45bae947d89a', 800, 800), base: 'Wolverhampton, UK', langs: 'English', years: 22, rating: '4.9', reviewsN: 538, cur: '£',
      creds: ['Qualified HGV driving instructor', 'Twenty years driving Class 1', 'Teaches career changers'],
      about: 'Gary drove trucks across Europe for twenty years before teaching. His lessons are calm and practical: reversing, coupling, roundabouts and the test routes round Wolverhampton.',
      services: [ { id: 'c2', name: 'Class 2 (rigid) course', dur: '5 days', price: 1650, desc: 'Training and the practical test.' },
                  { id: 'c1', name: 'Class 1 (artic) course', dur: '5 days', price: 1850, desc: 'For drivers with a Class 2 licence.' },
                  { id: 'assess', name: 'Assessment drive', dur: '2 hours', price: 120, desc: 'See how many lessons you need.' } ],
      avail: { days: [1, 2, 3, 4, 5], times: ['07:30', '12:30'] },
      reviews: [ { who: '@lorry_lad_lewis', stars: 5, ago: 3, text: 'Passed first time after five days.' }, { who: '@nightshift_nadia', stars: 5, ago: 19, text: 'He made reversing an artic feel possible.' }, { who: '@diesel_dave', stars: 5, ago: 44, text: 'Proper old-school teacher.' } ],
      posts: [ { ago: 1, text: 'Reversing tip: small steering, slow speed, and get out and look. Nobody ever failed for checking.' } ],
      tier: 'Pro Zone', verified: true },
    { key: 'claire-dawson-mechanic', name: 'Claire Dawson Mobile Truck Repairs', color: '#F59E0B', tag: 'Roadside and depot repairs for trucks and trailers', role: 'HGV mechanic',
      img: U('1687462970787-61d953508926', 800, 800), base: 'Leeds, UK', langs: 'English', years: 18, rating: '4.9', reviewsN: 422, cur: '£',
      creds: ['Qualified HGV technician', 'Electric truck trained', 'Mobile workshop van'],
      about: 'Claire fixes trucks and trailers where they stand: brakes, lights, tyres, air leaks and the new electric trucks too. Small fleets call her before they call anyone else.',
      services: [ { id: 'call', name: 'Roadside call-out', dur: 'First hour', price: 140, desc: 'Within 50 miles of Leeds.' },
                  { id: 'check', name: 'Safety inspection', dur: '2 hours', price: 160, desc: 'Truck or trailer, with a written report.' },
                  { id: 'ev', name: 'Electric truck health check', dur: '90 minutes', price: 180, desc: 'Battery, charging and cooling.' } ],
      avail: { days: [1, 2, 3, 4, 5, 6], times: ['06:00', '10:00', '14:00'] },
      reviews: [ { who: '@diesel_dave', stars: 5, ago: 2, text: 'Back on the road in forty minutes.' }, { who: '@sam_transport_ops', stars: 5, ago: 14, text: 'Our go-to for inspections.' }, { who: '@nightshift_nadia', stars: 5, ago: 33, text: 'Knows electric trucks inside out.' } ],
      posts: [ { ago: 2, text: 'Cold mornings: drain your air tanks. Water in the system freezes, and frozen brakes ruin your day.' } ],
      tier: 'Pro Zone', verified: true },
    { key: 'priya-shah-compliance', name: 'Priya Shah Transport Compliance', color: '#84CC16', tag: 'Help for small fleets with operator licences and audits', role: 'Transport compliance consultant',
      img: U('1611432579402-7037e3e2c1e4', 800, 800), base: 'Birmingham, UK · and online', langs: 'English, Gujarati', years: 14, rating: '4.9', reviewsN: 198, cur: '£',
      creds: ['Qualified transport manager', 'Former fleet compliance lead', 'Trains drivers on hours and checks'],
      about: 'Priya helps small hauliers keep their paperwork in order: walk-round checks, drivers’ hours records, maintenance files and audits. Practical help, not legal advice.',
      services: [ { id: 'audit', name: 'Compliance health check', dur: 'Half a day', price: 450, desc: 'Your files checked, with a plain-English report.' },
                  { id: 'train', name: 'Driver toolbox talk', dur: '2 hours', price: 280, desc: 'Walk-round checks and hours, for your drivers.' },
                  { id: 'call', name: 'Advice call', dur: '45 minutes', price: 75, desc: 'Ask anything about running a fleet.' } ],
      avail: { days: [1, 2, 3, 4, 5], times: ['09:00', '13:00', '16:00'] },
      reviews: [ { who: '@sam_transport_ops', stars: 5, ago: 4, text: 'Sorted our files before the audit.' }, { who: '@diesel_dave', stars: 5, ago: 21, text: 'Explained everything clearly.' }, { who: '@lorry_lad_lewis', stars: 5, ago: 46, text: 'Great talk for our drivers.' } ],
      posts: [ { ago: 3, text: 'A walk-round check takes fifteen minutes and saves days off the road. Write down what you find, every time.' } ],
      tier: 'Pro Zone', verified: true }
  ],
  communities: [
    { key: 'knights-of-the-road', name: 'Knights of the Road', domain: 'knights.truckxx.com', color: '#3B82F6', img: U('1719495439037-ca335257edbd', 900, 500),
      scope: 'Global', where: 'Every road', members: 418000, online: 5240, tagline: 'Drivers, for drivers.',
      about: 'Truck drivers everywhere: cab tours, road reports, truck stop reviews, licence questions and a lot of sunrise photos taken at the right moment, parked.',
      rules: ['Never post while driving', 'Respect every driver', 'No naming and shaming firms'],
      mods: ['@nightshift_nadia', '@diesel_dave'],
      threads: [ { t: 'Cab tour: show us your setup', by: '@lorry_lad_lewis', tag: 'CAB LIFE', replies: 2860, ago: 0, votes: 5240 }, { t: 'Electric trucks: drivers who’ve switched, how is it?', by: '@diesel_dave', tag: 'DEBATE', replies: 1840, ago: 1, votes: 3120 }, { t: 'Best truck stop breakfast in Britain', by: '@nightshift_nadia', tag: 'FOOD', replies: 1460, ago: 2, votes: 2640 }, { t: 'Career changers: how did your first year go?', by: '@sam_transport_ops', tag: 'Q&A', replies: 620, ago: 3, votes: 1180 } ],
      events: [ { title: 'Live Q&A: switching to electric', day: 3, time: '20:00', where: 'Online' }, { title: 'Christmas convoy for charity', day: 12, time: '09:00', where: 'Online and on the road' } ] },
    { key: 'midlands-truckers-breakfast', name: 'Midlands Truckers’ Breakfast Club', domain: 'midlands.truckxx.com', color: '#F59E0B', img: U('1783243858623-aa17e2e07779', 900, 500),
      scope: 'Local', where: 'Birmingham', members: 2400, online: 48, tagline: 'Full breakfast, full yard.',
      about: 'Drivers based around Birmingham who meet for breakfast on the first Saturday of the month: news, road reports and help for new drivers.',
      rules: ['Everyone welcome', 'Help new drivers', 'Park considerately'],
      mods: ['@diesel_dave', '@gary_holt_hgv'],
      threads: [ { t: 'December breakfast: who’s in?', by: '@diesel_dave', tag: 'EVENT', replies: 42, ago: 0, votes: 88 }, { t: 'M6 roadworks at Junction 10: how bad?', by: '@lorry_lad_lewis', tag: 'ROADS', replies: 36, ago: 1, votes: 70 }, { t: 'New driver here: tips for Saltley?', by: '@sam_transport_ops', tag: 'HELP', replies: 28, ago: 2, votes: 54 } ],
      events: [ { title: 'Monthly breakfast', day: 12, time: '08:00', where: 'Birmingham' }, { title: 'Christmas breakfast and toy run', day: 26, time: '08:00', where: 'Birmingham' } ] }
  ],
  feed: [
    { av: 'TX', avBg: CAB, author: 'TruckXX Editorial', sub: 'Featured · Just now', badge: '★ FEATURED',
      text: 'The trucks, the drivers, the truck stops, the electric switch and every mile between. Licences, cab life, kit and the people who keep the shelves full. Trucks, all in one place.',
      img: U('1592805144716-feeccccef5ac', 800, 600), eng: '♡ 42.6K · 💬 3.8K · ↗ 4.4K' },
    { av: 'NN', avBg: STEEL, author: '@nightshift_nadia', sub: 'On the Road · Just now', badge: 'COMMUNITY',
      text: 'Midnight on the motorway, a full load and a flask of tea. Taken from a layby, parked up and handbrake on. Nights are the best time to drive 🌙',
      img: U('1788370538342-b28c755cf61b', 800, 600), eng: '♡ 16.8K · 💬 2.2K · ↗ 1.2K' },
    { av: 'HM', avBg: CAB, author: 'Haulmark Trucks', sub: 'Founding Partner · Brand Zone', badge: 'BRAND ZONE',
      text: 'The <b>E-Haul 44</b> runs Glasgow to London tonight on one charge with a full trailer. Follow the run live, with the driver and the battery numbers on screen.',
      img: U('1695222833131-54ee679ae8e5', 800, 600), eng: '♡ 24.2K · 💬 2.6K · ↗ 3.8K' },
    { av: 'LT', avBg: AMBER, author: 'Lantern Truckstops', sub: 'Brand Zone · 1h ago', badge: 'BRAND ZONE',
      text: 'Lit, fenced and watched all night. Every <b>Lantern</b> bay comes with a hot shower and a breakfast that sets you up for the day.',
      img: U('1774279922089-1b4333ca3a22', 800, 600), eng: '♡ 8.4K · 💬 640 · ↗ 520' },
    { av: 'LL', avBg: HIVIS, author: '@lorry_lad_lewis', sub: 'Cab Life · 2h ago', badge: 'COMMUNITY',
      text: 'Six months since I passed my Class 1. Office with a view, mate. Still grinning every morning when I climb in.',
      img: U('1785224928389-bdca9e0c3b1c', 800, 600), eng: '♡ 11.2K · 💬 1.4K · ↗ 460' },
    { av: 'GW', avBg: HIVIS, author: 'Gritline Workwear', sub: 'Brand Zone · 4h ago', badge: 'BRAND ZONE',
      text: 'Out of the cab at 5am in the frost for the walk-round check. The <b>Nightshift Parka</b> is waterproof, hi-vis and warm to minus ten.',
      img: U('1722898414188-df8e94b0cfee', 800, 600), eng: '♡ 4.6K · 💬 280 · ↗ 310' },
    { av: 'GH', avBg: CAB, author: 'Gary Holt HGV Training', sub: 'Getting Your Licence · 6h ago', badge: 'PRO ZONE',
      text: 'Another pass this morning. Long, open roads are where new drivers find their rhythm. Mirrors, mirrors, mirrors: the cab is your classroom.',
      img: U('1675889335425-a4af2d00154d', 800, 600), eng: '♡ 3.8K · 💬 240 · ↗ 380' }
  ],
  prompts: ['How do I get an HGV licence?', 'Find a secure truck stop on the M6 tonight', 'How long can I drive before a break?', 'Are electric trucks ready for long distances?'],
  businesses: ['corridor-telematics', 'trailerworks']
};

/* the four Brand Zones and two Business Zones */
const brand = (o) => Object.assign({ kind: 'brand', gw: 'truck', verified: true }, o);
Object.assign(ZONES, {
  'haulmark-trucks': brand({ key: 'haulmark-trucks', name: 'Haulmark Trucks', color: '#3B82F6', gradient: CAB, tier: 'Founding Partner',
    tagline: 'Electric and diesel trucks, built in Britain', stats: { followers: '246K', content: '980', products: '12' },
    ad: { badge: 'Featured', img: U('1766785368863-f2188a8c8b32', 760, 760), hl: 'Glasgow to London. One charge.', sub: 'The E-Haul 44 electric tractor unit.', meta: 'Lease from £2,950 a month' },
    products: [
      { name: 'E-Haul 44 Lease', price: '£2,950 / month', tag: 'FLAGSHIP', emoji: '🔋', rating: 4.8, reviews: 640, cat: 'trucks', special: true, desc: 'An electric tractor unit for 44-tonne work: up to 400 miles a charge, illustrative. Lease includes servicing.', features: ['Five-year lease', 'Servicing included', 'Charger installation available'], review: { who: 'Dave K.', text: 'Quiet, smooth and the drivers fight over it.' } },
      { name: 'H-Series Diesel Tractor', price: 'From £118,000', tag: 'BESTSELLER', emoji: '🚛', rating: 4.7, reviews: 1860, cat: 'trucks', desc: 'The long-haul diesel tractor, with the big sleeper cab.', features: ['Euro 6', 'Sleeper cab'], review: { who: 'Nadia R.', text: 'Best cab I’ve slept in.' } },
      { name: 'Depot Charger Install', price: 'From £24,000', emoji: '⚡', rating: 4.7, reviews: 220, cat: 'charging', desc: 'A fast charger at your depot, surveyed and fitted.', features: ['Site survey included'], review: { who: 'Sam O.', text: 'Fitted in a week.' } },
      { name: 'E-Haul 44 Model, 1:24', price: '£89', tag: 'SPECIAL', emoji: '🎁', rating: 4.9, reviews: 960, cat: 'gifts', special: true, desc: 'A die-cast model of the E-Haul 44 with opening doors.', features: ['Gift box'], review: { who: 'Lewis T.', text: 'On my dashboard, obviously.' } }
    ],
    shopCats: [ { key: 'trucks', label: 'Trucks', icon: '🚛' }, { key: 'charging', label: 'Charging', icon: '⚡' }, { key: 'gifts', label: 'Gifts', icon: '🎁' } ],
    feed: [
      { type: 'post', sub: 'Brand post · 2h', text: 'Loaded, charged and ready for tonight’s run in the <b>E-Haul 44</b>.', img: U('1616432043562-3671ea2e5242', 800, 440), eng: '♡ 24.2K · 💬 2.6K · ↗ 3.8K', product: 0 },
      { type: 'post', sub: 'On the road · Yesterday', text: 'Headlights on a night test run. The <b>H-Series</b> sleeper cab, still our bestseller.', img: U('1760127831098-6a75c69ee79c', 800, 440), eng: '♡ 6.8K · 💬 520', product: 1 },
      { type: 'community', who: 'Dave K.', whoBg: STEEL, sub: 'Community · 1d', text: 'Honest question: what happens to range on an electric truck in winter?', eng: '♡ 620 · 💬 184', reply: 'Hi Dave! Cold weather does cost range: in our own testing the E-Haul 44 loses around 10 to 15% on a frosty night, mostly heating the cab and the battery. Pre-heating while it’s still on the charger gets most of that back. The live run tonight is in November on purpose, so you can see the real numbers. 🔋' }
    ],
    events: [ { zoneEvent: true, tag: 'LIVE', title: 'Haulmark Live · The E-Haul 44 night run', when: 'Live now', desc: 'Glasgow to London on one charge, live from the cab, with the battery numbers on screen.', registered: 8240, capacity: 20000 } ],
    about: { founded: 'Leyland · 1987', story: 'A family truck builder in Lancashire that built its first electric truck in 2019. We joined TruckXX as Founding Partner because the drivers who will decide whether electric works are here.', milestones: [['1987', 'The first truck'], ['2019', 'The first electric prototype'], ['2026', 'Founding Partner on TruckXX']], values: ['Built in Britain', 'Drivers test every cab', 'Electric and diesel, honestly compared'] } }),

  'lantern-truckstops': brand({ key: 'lantern-truckstops', name: 'Lantern Truckstops', color: '#F59E0B', gradient: AMBER, tier: 'Brand Zone',
    tagline: 'Secure overnight parking, showers and hot food', stats: { followers: '128K', content: '420', products: '9' },
    ad: { badge: 'Featured', img: U('1565793298595-6a879b1d9492', 760, 760), hl: 'Park safe. Sleep well.', sub: 'Fenced, lit and watched, with a hot shower.', meta: 'Bays from £28' },
    products: [
      { name: 'Overnight Bay', price: '£28', tag: 'FLAGSHIP', emoji: '🅿️', rating: 4.8, reviews: 6240, cat: 'parking', special: true, desc: 'A secure overnight bay with a shower and a £10 meal voucher.', features: ['Fenced and lit', 'Staff on site all night'], review: { who: 'Nadia R.', text: 'The only place I sleep properly.' } },
      { name: 'Weekend Bay', price: '£64', tag: 'BESTSELLER', emoji: '📅', rating: 4.7, reviews: 1460, cat: 'parking', desc: 'Friday night to Monday morning, with showers and laundry.', features: ['Laundry included'], review: { who: 'Dave K.', text: 'Like a mini holiday.' } },
      { name: 'Big Breakfast', price: '£9', emoji: '🍳', rating: 4.9, reviews: 4860, cat: 'food', desc: 'Two eggs, bacon, sausage, beans, mushrooms, toast and tea.', features: ['Served from 4am'], review: { who: 'Lewis T.', text: 'Worth the detour.' } },
      { name: 'Fleet Bay Pass', price: '£520', tag: 'SPECIAL', emoji: '💳', rating: 4.8, reviews: 320, cat: 'fleet', special: true, desc: 'Twenty overnight bays for your drivers, at any Lantern.', features: ['One monthly invoice'], review: { who: 'Sam O.', text: 'Our drivers love it.' } }
    ],
    shopCats: [ { key: 'parking', label: 'Parking', icon: '🅿️' }, { key: 'food', label: 'Food', icon: '🍳' }, { key: 'fleet', label: 'Fleet', icon: '💳' } ],
    feed: [ { type: 'post', sub: 'Brand post · 1h', text: 'Snow at our A1 stop tonight: bays filling up, showers hot, kitchen open.', img: U('1763895934500-37caf15f1f97', 800, 440), eng: '♡ 8.4K · 💬 640', product: 0 } ],
    events: [ { zoneEvent: true, tag: 'EVENT', title: 'Christmas dinner for drivers', when: 'Dec 13 · 12:00', desc: 'Free Christmas dinner at every Lantern for drivers on the road.', registered: 1860, capacity: 4000 } ],
    about: { founded: 'Doncaster · 2012', story: 'A former driver who was fed up with unlit laybys, and built the truck stop he wanted to sleep in.', milestones: [['2012', 'The first Lantern'], ['2023', 'Twenty stops'], ['2026', 'Brand Zone on TruckXX']], values: ['Lit, fenced and watched', 'Clean showers, always', 'Drivers first'] } }),

  'nightroute-cab': brand({ key: 'nightroute-cab', name: 'Nightroute Cab Gear', color: '#94A3B8', gradient: STEEL, tier: 'Brand Zone',
    tagline: 'Fridges, mattresses and cab comforts', stats: { followers: '76.2K', content: '310', products: '140' },
    ad: { badge: 'New', img: U('1764440295815-b34cd998a132', 760, 760), hl: 'Make the cab feel like home.', sub: 'Fridges, mattress toppers and cab kit.', meta: 'From £12' },
    products: [
      { name: 'Cab Mattress Topper', price: '£79', tag: 'FLAGSHIP', emoji: '🛏️', rating: 4.9, reviews: 2860, cat: 'sleep', special: true, desc: 'Memory foam cut to fit most sleeper cabs.', features: ['Washable cover', 'Rolls up for the day'], review: { who: 'Nadia R.', text: 'Life-changing. Not exaggerating.' } },
      { name: '12/24V Cab Fridge', price: '£149', tag: 'BESTSELLER', emoji: '🧊', rating: 4.8, reviews: 1960, cat: 'kitchen', desc: 'A quiet 25-litre fridge that runs off the truck.', features: ['Low-battery cut-off'], review: { who: 'Lewis T.', text: 'Fresh food all week.' } },
      { name: 'Cab Kettle, 24V', price: '£34', emoji: '☕', rating: 4.7, reviews: 3240, cat: 'kitchen', desc: 'Boils a mug of water in about eight minutes.', features: ['Auto off'], review: { who: 'Dave K.', text: 'Tea. Anywhere.' } },
      { name: 'Blackout Curtain Set', price: '£42', tag: 'SPECIAL', emoji: '🌙', rating: 4.8, reviews: 860, cat: 'sleep', special: true, desc: 'Magnetic blackout curtains for day sleeping.', features: ['Fits most cabs'], review: { who: 'Sam O.', text: 'Night drivers need these.' } }
    ],
    shopCats: [ { key: 'sleep', label: 'Sleep', icon: '🛏️' }, { key: 'kitchen', label: 'Kitchen', icon: '☕' } ],
    feed: [ { type: 'post', sub: 'Brand post · 1d', text: 'Tail lights, tea in the <b>Cab Kettle</b>, last mile to the stop.', img: U('1795370518758-93bc97f645a5', 800, 440), eng: '♡ 3.2K · 💬 210', product: 2 } ],
    events: [ { zoneEvent: true, tag: 'SALE', title: 'Black Friday: 25% off cab kit', when: 'Nov 27 · All day', desc: 'A quarter off everything, one day only.', registered: 1240, capacity: 5000 } ],
    about: { founded: 'Preston · 2015', story: 'A driver couple who kitted out their own cab, then started making the bits they couldn’t buy.', milestones: [['2015', 'The first topper'], ['2022', 'Cab fridges'], ['2026', 'Brand Zone on TruckXX']], values: ['Tested by drivers', 'Fits most cabs', 'Two-year guarantee'] } }),

  'gritline-workwear': brand({ key: 'gritline-workwear', name: 'Gritline Workwear', color: '#84CC16', gradient: HIVIS, tier: 'Brand Zone',
    tagline: 'Boots, hi-vis and cold-weather kit', stats: { followers: '64.8K', content: '260', products: '180' },
    ad: { badge: 'Winter', img: U('1794418095595-d6c3ea35b25e', 760, 760), hl: 'Built for the yard and the road.', sub: 'Hi-vis, boots and winter kit for drivers.', meta: 'From £14' },
    products: [
      { name: 'Nightshift Parka', price: '£89', tag: 'FLAGSHIP', emoji: '🧥', rating: 4.8, reviews: 2140, cat: 'jackets', special: true, desc: 'Waterproof, hi-vis and warm to minus ten.', features: ['Reflective tape', 'Fleece lining'], review: { who: 'Dave K.', text: 'Warm on a frosty yard at 5am.' } },
      { name: 'Safety Boots, Waterproof', price: '£74', tag: 'BESTSELLER', emoji: '🥾', rating: 4.7, reviews: 3860, cat: 'boots', desc: 'Toe caps, slip-resistant soles and comfortable all shift.', features: ['Sizes 5 to 13'], review: { who: 'Lewis T.', text: 'Comfy from day one.' } },
      { name: 'Hi-Vis Vest, Five Pack', price: '£14', emoji: '🦺', rating: 4.8, reviews: 2860, cat: 'hivis', desc: 'Lightweight hi-vis vests for the cab door pocket.', features: ['Five vests'], review: { who: 'Nadia R.', text: 'Always one to hand.' } },
      { name: 'Thermal Gloves', price: '£19', tag: 'SPECIAL', emoji: '🧤', rating: 4.7, reviews: 960, cat: 'hivis', special: true, desc: 'Grippy, warm gloves for straps and couplings.', features: ['Touchscreen fingertips'], review: { who: 'Sam O.', text: 'Can still use my phone.' } }
    ],
    shopCats: [ { key: 'jackets', label: 'Jackets', icon: '🧥' }, { key: 'boots', label: 'Boots', icon: '🥾' }, { key: 'hivis', label: 'Hi-vis', icon: '🦺' } ],
    feed: [ { type: 'post', sub: 'Brand post · 4h', text: 'Bright enough to be seen across a dark yard: the <b>Nightshift Parka</b> in orange.', img: U('1718227695329-9e781364c448', 800, 440), eng: '♡ 4.6K · 💬 280', product: 0 } ],
    events: [ { zoneEvent: true, tag: 'EVENT', title: 'Winter kit live', when: 'Dec 1 · 19:00', desc: 'What to wear for winter driving, live, with questions answered.', registered: 640, capacity: 2000 } ],
    about: { founded: 'Wakefield · 2009', story: 'Workwear made with drivers and yard staff, tested through Yorkshire winters.', milestones: [['2009', 'The first parka'], ['2020', 'Recycled hi-vis'], ['2026', 'Brand Zone on TruckXX']], values: ['Tested on shift', 'Hi-vis that lasts', 'Free returns'] } }),

  'corridor-telematics': { key: 'corridor-telematics', kind: 'business', gw: 'truck', name: 'Corridor Fleet Telematics', color: '#3B82F6', gradient: CAB, img: U('1565891741441-64926e441838', 900, 500),
    tier: 'Verified', category: 'Fleet tracking', tagline: 'Where your trucks are, and how they’re doing.',
    about: { founded: 'Milton Keynes · 2010', story: 'Tracking, fuel and battery data for fleets of five to five hundred trucks.' },
    stats: { years: 16, staff: 120, clients: '2,400 fleets' },
    caps: [ { name: 'Live tracking', detail: 'Every truck on one map.' }, { name: 'Electric fleets', detail: 'Battery and charging data.' }, { name: 'Driver coaching', detail: 'Smoother driving, less fuel.' } ],
    specs: { moq: 'Five trucks', lead: '1 to 3 weeks', regions: 'UK & Europe', certs: ['Data protection certified', 'Fully insured', 'Works with most trucks'] },
    supplies: [ { kind: 'brand', key: 'haulmark-trucks', what: 'Battery data for the E-Haul 44' } ],
    cases: [ { title: 'Less fuel, same miles', text: 'A forty-truck fleet cut fuel use by 9% with driver coaching.' } ],
    feed: [ { sub: 'Data · 3d', text: 'Winter range data from 200 electric trucks, out next week.' } ],
    contact: { person: 'Tom Hughes, Fleets', response: 'Replies within one working day' } },

  'trailerworks': { key: 'trailerworks', kind: 'business', gw: 'truck', name: 'Trailerworks Bodybuilders', color: '#F59E0B', gradient: AMBER, img: U('1780172168747-de0ec68b6724', 900, 500),
    tier: 'Verified', category: 'Trailer and body building', tagline: 'Trailers and truck bodies, built to order.',
    about: { founded: 'Telford · 1994', story: 'Curtainsiders, box bodies and fridge trailers, built to order and repaired in our workshops.' },
    stats: { years: 32, staff: 210, clients: '1,800 trailers a year' },
    caps: [ { name: 'Curtainsiders', detail: 'Standard and double-deck.' }, { name: 'Fridge bodies', detail: 'Chilled and frozen.' }, { name: 'Repairs', detail: 'Accident and wear repairs.' } ],
    specs: { moq: 'One trailer', lead: '8 to 20 weeks', regions: 'UK', certs: ['Approved bodybuilder', 'Fully insured', 'Recycled aluminium options'] },
    supplies: [ { kind: 'brand', key: 'haulmark-trucks', what: 'Trailers for the E-Haul 44 night run' } ],
    cases: [ { title: 'A lighter fridge trailer', text: 'Recycled aluminium saved 600 kg, so more pallets per trip.' } ],
    feed: [ { sub: 'Workshop · 5d', text: 'Ten double-deck curtainsiders leave the line this week.' } ],
    contact: { person: 'Kerry Lloyd, Sales', response: 'Replies within one working day' } }
});

/* events in the Events tab */
gxEvents('truck', [
  { gw: 'truck', zone: 'haulmark-trucks', type: 'Live', icon: '🔴', live: true, time: 'Live Now', title: 'Haulmark Live · The E-Haul 44 night run', desc: 'Glasgow to London on one charge, live from the cab.' },
  { gw: 'truck', type: 'Event', icon: '🔋', time: 'Nov 26', title: 'Live Q&A: switching to electric', desc: 'Knights of the Road ask drivers who’ve switched.' },
  { gw: 'truck', zone: 'nightroute-cab', type: 'Sale', icon: '🛏️', time: 'Nov 27', title: 'Nightroute Black Friday', desc: '25% off cab kit, one day only.' },
  { gw: 'truck', zone: 'gritline-workwear', type: 'Event', icon: '🧥', time: 'Dec 1', title: 'Gritline winter kit live', desc: 'What to wear for winter driving, with questions answered.' },
  { gw: 'truck', type: 'Event', icon: '🍳', time: 'Dec 5', title: 'Midlands Truckers’ breakfast', desc: 'The monthly breakfast in Birmingham. New drivers welcome.' },
  { gw: 'truck', type: 'Event', icon: '🎄', time: 'Dec 5', title: 'Christmas convoy for charity', desc: 'Knights of the Road drive together for a children’s charity.' },
  { gw: 'truck', zone: 'lantern-truckstops', type: 'Event', icon: '🍽️', time: 'Dec 13', title: 'Christmas dinner for drivers', desc: 'Free Christmas dinner at every Lantern truck stop.' },
  { gw: 'truck', type: 'Event', icon: '🧸', time: 'Dec 19', title: 'Christmas breakfast and toy run, Birmingham', desc: 'Midlands Truckers bring toys for a children’s hospital.' }
]);
})();
/* ═════════ /TRUCKXX ═════════ */
