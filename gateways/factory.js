/* ═════════ FACTORYXX — a Manufacturing demo gateway (2026-11-24, Sean; build -96) ═════════
   Built with the _tools/README.md recipe. Palette (light): clean shop floor, engineering blue, safety yellow.
   Home sector: Manufacturing (key 'industrial'; GW_HOME already says so; listed only there). Every maker, factory, pro
   and product is fictional; places and the engineering are real. Prices and figures are illustrative. */
(function(){
const U = (id, w, h) => `https://images.unsplash.com/photo-${id}?w=${w}&h=${h}&fit=crop&q=75`;
const BLUE = 'linear-gradient(135deg,#3B82F6,#1E40AF)', SAFETY = 'linear-gradient(135deg,#FACC15,#CA8A04)', STEELG = 'linear-gradient(135deg,#94A3B8,#334155)', TEAL = 'linear-gradient(135deg,#2DD4BF,#0F766E)';

GATEWAYS.factory = {
  name: 'FactoryXX', domain: 'factoryxx.com', emoji: '🏭', sector: 'industrial', live: true,
  tagline: 'The Factory Universe',
  theme: {
    bg: '#F5F7FB', text: '#111827', cardBg: '#FFFFFF', cardBorder: 'rgba(17,24,39,.08)',
    headerBg: 'linear-gradient(180deg,#FFFFFF,#F5F7FB)', accent: '#1E40AF', accentAlt: '#CA8A04', dark: false
  },
  gradient: 'linear-gradient(135deg,#1E40AF,#3B82F6,#FACC15)',
  stats: { members: '1.8M', brands: '920+', agents: '31' },
  spaces: ['All Feed', 'Automation', 'Lean', 'Machining', 'Safety', 'Careers'],
  trending: ['#MadeInBritain', '#CobotDay', '#ZeroDefects'],
  brandZones: [
    { key: 'linewise-robotics', name: 'Linewise Robotics', color: '#1E40AF', tier: 'Founding Partner', tag: 'Collaborative robots for small factories' },
    { key: 'makerbench', name: 'Makerbench', color: '#0F766E', tier: 'Brand Zone', tag: 'Desktop CNC machines and 3D printers' },
    { key: 'guardline-workwear', name: 'Guardline Workwear', color: '#CA8A04', tier: 'Brand Zone', tag: 'Safety boots, gloves and hi-vis that fit' },
    { key: 'tallyboard', name: 'Tallyboard', color: '#334155', tier: 'Brand Zone', tag: 'Live shop-floor screens for every line' }
  ],
  apps: [
    { name: 'OEE Tracker', color: '#1E40AF', desc: 'How well is your line really running?', key: 'oee-tracker', url: 'apps/oee-tracker.html',
      dev: 'Tallyboard', rating: '4.8', users: '780K', perms: ['profile', 'feed'],
      tagline: 'Availability × performance × quality.',
      about: 'OEE Tracker works out overall equipment effectiveness for each shift: how long the machine ran, how fast and how many parts were good. See where the lost time goes.',
      features: ['OEE by shift', 'The three losses', 'A week at a glance', 'Share a record shift'],
      shots: ['apps/oee-tracker/shot-1.jpg', 'apps/oee-tracker/shot-2.jpg', 'apps/oee-tracker/shot-3.jpg'],
      version: '4.4', size: '9 KB',
      updates: [ { v: '4.4', ago: 2, notes: 'A week at a glance.' }, { v: '3.8', ago: 75, notes: 'The three losses.' }, { v: '3.0', ago: 220, notes: 'Signed in with GENEXXO.' } ],
      reviews: [ { who: '@hannah_kerr_lean', stars: 5, ago: 1, text: 'The simplest honest OEE I’ve seen.' }, { who: '@line_lead_lucy', stars: 5, ago: 16, text: 'My team checks it every break.' }, { who: '@cnc_carl', stars: 4, ago: 35, text: 'Found 40 minutes a shift.' } ] },
    { name: 'Takt Timer', color: '#CA8A04', desc: 'Match your line to what customers order', key: 'takt-timer', url: 'apps/takt-timer.html',
      dev: 'Linewise Robotics', rating: '4.8', users: '520K', perms: ['profile', 'feed'],
      tagline: 'Time available ÷ units needed.',
      about: 'Takt Timer works out the pace your line needs to keep up with orders, then times each station against it, so you can see the bottleneck at a glance.',
      features: ['Takt time from orders', 'Time each station', 'Find the bottleneck', 'Share your line'],
      shots: ['apps/takt-timer/shot-1.jpg', 'apps/takt-timer/shot-2.jpg', 'apps/takt-timer/shot-3.jpg'],
      version: '2.7', size: '9 KB',
      updates: [ { v: '2.7', ago: 3, notes: 'Find the bottleneck.' }, { v: '2.1', ago: 88, notes: 'Time each station.' }, { v: '1.5', ago: 230, notes: 'Signed in with GENEXXO.' } ],
      reviews: [ { who: '@line_lead_lucy', stars: 5, ago: 2, text: 'Showed the boss why station 3 needs help.' }, { who: '@ravi_mehta_factory', stars: 5, ago: 19, text: 'I use it on every client visit.' }, { who: '@cnc_carl', stars: 4, ago: 42, text: 'Clear and quick.' } ] },
    { name: 'Shift Handover', color: '#0F766E', desc: 'Pass the shift on, nothing forgotten', key: 'shift-handover', url: 'apps/shift-handover.html',
      dev: 'Guardline Workwear', rating: '4.7', users: '640K', perms: ['profile', 'feed'],
      tagline: 'What happened, what’s next.',
      about: 'Shift Handover is a short checklist for the end of every shift: output, safety, machine problems and jobs left open, so the next team starts knowing everything.',
      features: ['Handover checklist', 'Safety first', 'Open jobs carried over', 'Share a safe shift'],
      shots: ['apps/shift-handover/shot-1.jpg', 'apps/shift-handover/shot-2.jpg', 'apps/shift-handover/shot-3.jpg'],
      version: '3.1', size: '9 KB',
      updates: [ { v: '3.1', ago: 1, notes: 'Open jobs carried over.' }, { v: '2.6', ago: 64, notes: 'Safety section.' }, { v: '1.9', ago: 180, notes: 'Signed in with GENEXXO.' } ],
      reviews: [ { who: '@samuel_boateng_safety', stars: 5, ago: 3, text: 'Near misses get written down now.' }, { who: '@line_lead_lucy', stars: 5, ago: 21, text: 'No more scribbled notes.' }, { who: '@cnc_carl', stars: 4, ago: 46, text: 'Does the job.' } ] }
  ],
  pros: [
    { key: 'hannah-kerr-lean', name: 'Dr Hannah Kerr Lean Coaching', color: '#1E40AF', tag: 'Lean and continuous improvement coaching', role: 'Lean coach',
      img: U('1581091224003-01e7c2e69f6f', 800, 800), base: 'Coventry, UK · and on site', langs: 'English', years: 16, rating: '4.9', reviewsN: 248, cur: '£',
      creds: ['PhD in manufacturing systems', 'Ten years running car-parts lines', 'Lean black belt'],
      about: 'Hannah ran production lines before she started coaching. She helps small factories cut waste with their own people: no jargon, no binders, just better days on the floor.',
      services: [ { id: 'walk', name: 'Gemba walk and report', dur: 'Half a day', price: 450, desc: 'Your floor, walked and written up.' },
                  { id: 'kaizen', name: 'Kaizen week', dur: 'Five days', price: 3800, desc: 'One problem, fixed with your team.' },
                  { id: 'call', name: 'Coaching call', dur: '60 minutes', price: 90, desc: 'For managers and team leaders.' } ],
      avail: { days: [1, 2, 3, 4], times: ['08:00', '13:00'] },
      reviews: [ { who: '@line_lead_lucy', stars: 5, ago: 2, text: 'Our changeovers went from an hour to twenty minutes.' }, { who: '@cnc_carl', stars: 5, ago: 23, text: 'Listened to the operators first.' }, { who: '@ravi_mehta_factory', stars: 5, ago: 48, text: 'The best lean coach I know.' } ],
      posts: [ { ago: 1, text: 'The best improvement ideas are already on your shop floor. Ask the person who runs the machine every day.' } ],
      tier: 'Pro Zone', verified: true },
    { key: 'ravi-mehta-factory', name: 'Ravi Mehta Factory Consulting', color: '#334155', tag: 'Automation and factory planning advice', role: 'Manufacturing consultant',
      img: U('1771244702701-6c9edac63255', 800, 800), base: 'Leicester, UK · and on site', langs: 'English, Gujarati, Hindi', years: 19, rating: '4.8', reviewsN: 196, cur: '£',
      creds: ['Chartered manufacturing engineer', 'Planned 40 factory layouts', 'Independent: no supplier commission'],
      about: 'Ravi helps owners decide what to automate, what to leave alone and how to lay out a new factory. He sells no machines, so his advice is about your numbers.',
      services: [ { id: 'review', name: 'Automation review', dur: 'One day', price: 950, desc: 'Which jobs a robot should do, and the payback.' },
                  { id: 'layout', name: 'Factory layout plan', dur: 'Two weeks', price: 4200, desc: 'Flow, space and safety, drawn up.' },
                  { id: 'call', name: 'Owner’s call', dur: '45 minutes', price: 75, desc: 'One decision, talked through.' } ],
      avail: { days: [1, 2, 3, 4, 5], times: ['09:00', '14:00'] },
      reviews: [ { who: '@cnc_carl', stars: 5, ago: 3, text: 'Told us not to buy the robot. Saved us £80,000.' }, { who: '@line_lead_lucy', stars: 5, ago: 27, text: 'The new layout halved our walking.' }, { who: '@hannah_kerr_lean', stars: 5, ago: 53, text: 'Clear-headed and honest.' } ],
      posts: [ { ago: 2, text: 'Automate the dull, dirty and dangerous jobs first. Keep people on the jobs that need judgement.' } ],
      tier: 'Pro Zone', verified: true },
    { key: 'samuel-boateng-safety', name: 'Samuel Boateng Safety Training', color: '#CA8A04', tag: 'Health and safety training for factories', role: 'Safety trainer',
      img: U('1688841747582-41097036109d', 800, 800), base: 'Manchester, UK · and on site', langs: 'English, Twi', years: 22, rating: '4.9', reviewsN: 342, cur: '£',
      creds: ['Chartered safety practitioner', 'Fifteen years as a factory safety manager', 'Certified forklift instructor'],
      about: 'Samuel trains factory teams to spot hazards and look after each other. His courses are practical, short and done on your own floor.',
      services: [ { id: 'awareness', name: 'Safety awareness morning', dur: 'Half a day', price: 380, desc: 'For up to twelve people, on site.' },
                  { id: 'forklift', name: 'Forklift refresher', dur: 'One day', price: 220, desc: 'Per driver, with a test.' },
                  { id: 'audit', name: 'Safety walk-round', dur: 'Half a day', price: 420, desc: 'Hazards found, fixes suggested.' } ],
      avail: { days: [1, 2, 3, 4, 5], times: ['07:30', '13:00'] },
      reviews: [ { who: '@line_lead_lucy', stars: 5, ago: 1, text: 'My team actually enjoyed safety training.' }, { who: '@cnc_carl', stars: 5, ago: 20, text: 'Spotted a guard we’d all stopped noticing.' }, { who: '@hannah_kerr_lean', stars: 5, ago: 44, text: 'Practical and warm.' } ],
      posts: [ { ago: 3, text: 'Near misses are free lessons. Write every one down, and thank the person who reported it.' } ],
      tier: 'Pro Zone', verified: true }
  ],
  communities: [
    { key: 'shop-floor', name: 'The Shop Floor', domain: 'floor.factoryxx.com', color: '#1E40AF', img: U('1787422429941-b1966d776195', 900, 500),
      scope: 'Global', where: 'On every production line', members: 342000, online: 3940, tagline: 'Where things get made.',
      about: 'Operators, engineers, team leaders and owners swapping fixes, jigs, lean wins and shop-floor stories.',
      rules: ['No company secrets', 'Safety first, always', 'Beginners’ questions welcome'],
      mods: ['@line_lead_lucy', '@cnc_carl'],
      threads: [ { t: 'Your best five-minute fix this year', by: '@line_lead_lucy', tag: 'FIXES', replies: 1680, ago: 0, votes: 3120 }, { t: 'Cobots: worth it for a small shop?', by: '@cnc_carl', tag: 'DEBATE', replies: 1140, ago: 1, votes: 2060 }, { t: 'Show us your tidiest workbench', by: '@line_lead_lucy', tag: 'PHOTOS', replies: 720, ago: 2, votes: 1480 }, { t: 'Night shift survival tips', by: '@cnc_carl', tag: 'SHIFTS', replies: 860, ago: 3, votes: 1640 } ],
      events: [ { title: 'Ask a lean coach: live chat', day: 7, time: '12:30', where: 'Online' }, { title: 'Make it in Britain: year in review', day: 22, time: '19:00', where: 'Online' } ] },
    { key: 'birmingham-makers', name: 'Birmingham Makers', domain: 'birmingham.factoryxx.com', color: '#CA8A04', img: U('1602230986242-b0e2b80e1ce5', 900, 500),
      scope: 'Local', where: 'Birmingham', members: 2120, online: 46, tagline: 'The city of a thousand trades.',
      about: 'Engineers, machinists, makers and factory owners in the city that built the industrial revolution. Factory tours, talks and a pint after.',
      rules: ['Everyone welcome', 'No hard selling', 'Be kind to newcomers'],
      mods: ['@cnc_carl', '@hannah_kerr_lean'],
      threads: [ { t: 'December factory tour: who’s in?', by: '@cnc_carl', tag: 'TOUR', replies: 62, ago: 0, votes: 126 }, { t: 'Apprentices wanted: post your vacancies', by: '@hannah_kerr_lean', tag: 'JOBS', replies: 48, ago: 1, votes: 98 }, { t: 'Jewellery Quarter workshops open day', by: '@cnc_carl', tag: 'OPEN DAY', replies: 30, ago: 2, votes: 64 } ],
      events: [ { title: 'Factory tour: a precision machining shop', day: 10, time: '14:00', where: 'Birmingham' }, { title: 'Makers’ Christmas social', day: 16, time: '18:30', where: 'Birmingham' } ] }
  ],
  feed: [
    { av: 'FX', avBg: BLUE, author: 'FactoryXX Editorial', sub: 'Featured · Just now', badge: '★ FEATURED',
      text: 'Everything you own was made somewhere. Robots, lathes, lean lines, safety, careers and the people who make things. Manufacturing, all in one place.',
      img: U('1717386255773-1e3037c81788', 800, 600), eng: '♡ 36.8K · 💬 2.9K · ↗ 4.4K' },
    { av: 'LL', avBg: SAFETY, author: '@line_lead_lucy', sub: 'Lean · Just now', badge: 'COMMUNITY',
      text: 'New floor markings went down over the weekend. Walkways, tool spots, a home for everything. Monday morning felt like a different factory 🟨',
      img: U('1764185800646-f75f7e16e465', 800, 600), eng: '♡ 10.8K · 💬 1.1K · ↗ 560' },
    { av: 'LR', avBg: BLUE, author: 'Linewise Robotics', sub: 'Founding Partner · Brand Zone', badge: 'BRAND ZONE',
      text: 'Live now: a family bakery in Bolton switches on its first robot. The <b>Linewise Co-Arm</b> takes over the heavy tray-lifting, and nobody loses their job.',
      img: U('1717386255767-52643970d483', 800, 600), eng: '♡ 23.6K · 💬 2.7K · ↗ 3.3K' },
    { av: 'MB', avBg: TEAL, author: 'Makerbench', sub: 'Brand Zone · 1h ago', badge: 'BRAND ZONE',
      text: 'A small shop, a big idea. The <b>Makerbench Mill</b> cuts aluminium parts on a workbench.',
      img: U('1740209475472-aa7d280f7452', 800, 600), eng: '♡ 7.8K · 💬 560 · ↗ 640' },
    { av: 'CC', avBg: STEELG, author: '@cnc_carl', sub: 'Machining · 2h ago', badge: 'COMMUNITY',
      text: 'Last part of a 500-piece run, and every single one in tolerance. The lathe gets a clean and I get a cuppa.',
      img: U('1666634157070-6fd830fb5672', 800, 600), eng: '♡ 8.4K · 💬 720 · ↗ 340' },
    { av: 'TB', avBg: STEELG, author: 'Tallyboard', sub: 'Brand Zone · 4h ago', badge: 'BRAND ZONE',
      text: 'Every line, every machine, live on one screen. <b>Tallyboard Line Screen</b> shows the whole team how the shift is going.',
      img: U('1717386255773-a456c611dc4e', 800, 600), eng: '♡ 4.8K · 💬 320 · ↗ 380' },
    { av: 'SB', avBg: SAFETY, author: 'Samuel Boateng Safety Training', sub: 'Safety · 6h ago', badge: 'PRO ZONE',
      text: 'Electrical isolation training this morning. Lock it, tag it, test it, every time. Twelve new people who’ll go home safe.',
      img: U('1758101755915-462eddc23f57', 800, 600), eng: '♡ 3.4K · 💬 220 · ↗ 280' }
  ],
  prompts: ['What is lean manufacturing?', 'Should my small factory buy a robot?', 'How do I get into manufacturing?', 'What is OEE and how do I measure it?'],
  businesses: ['midland-precision', 'brightline-packaging']
};

/* the four Brand Zones and two Business Zones */
const brand = (o) => Object.assign({ kind: 'brand', gw: 'factory', verified: true }, o);
Object.assign(ZONES, {
  'linewise-robotics': brand({ key: 'linewise-robotics', name: 'Linewise Robotics', color: '#1E40AF', gradient: BLUE, tier: 'Founding Partner',
    tagline: 'Collaborative robots for small factories', stats: { followers: '362K', content: '780', products: '12' },
    ad: { badge: 'Featured', img: U('1716191300020-b52dec5b70a8', 760, 760), hl: 'A robot that works beside you.', sub: 'Cobots that small factories can afford.', meta: 'From £18,500' },
    products: [
      { name: 'Linewise Co-Arm 10', price: 'From £18,500', tag: 'FLAGSHIP', emoji: '🦾', rating: 4.8, reviews: 1860, cat: 'cobots', special: true, desc: 'A 10 kg collaborative arm that works safely next to people.', features: ['Taught by hand, no code', 'Stops at a touch'], review: { who: 'Lucy T.', text: 'Our packers love it. No more sore backs.' } },
      { name: 'Co-Arm 5', price: 'From £12,900', tag: 'BESTSELLER', emoji: '🤖', rating: 4.8, reviews: 1240, cat: 'cobots', desc: 'A lighter arm for pick-and-place and machine loading.', features: ['Fits on a bench'], review: { who: 'Carl M.', text: 'Loads my lathe all night.' } },
      { name: 'Robot Lease', price: 'From £690 / month', emoji: '📝', rating: 4.7, reviews: 640, cat: 'plans', desc: 'A Co-Arm with support, paid monthly.', features: ['Hand it back any time'], review: { who: 'Ravi M.', text: 'The right way for small firms to start.' } },
      { name: 'Two-Day Robot Course', price: '£590', tag: 'SPECIAL', emoji: '🎓', rating: 4.9, reviews: 860, cat: 'plans', special: true, desc: 'Teach a cobot its first job, in two days.', features: ['At our Bolton centre'], review: { who: 'Hannah K.', text: 'Operators came back as robot experts.' } }
    ],
    shopCats: [ { key: 'cobots', label: 'Cobots', icon: '🦾' }, { key: 'plans', label: 'Plans & training', icon: '📝' } ],
    feed: [
      { type: 'post', sub: 'Brand post · 2h', text: 'A line of machines, and one <b>Co-Arm 10</b> doing the lifting nobody wanted to do.', img: U('1777464375799-768774f30542', 800, 440), eng: '♡ 23.6K · 💬 2.7K · ↗ 3.3K', product: 0 },
      { type: 'post', sub: 'Training · Yesterday', text: 'Operators, not programmers: this week’s <b>Two-Day Robot Course</b> taught four cobots their first jobs.', img: U('1581091212991-8891c7d4bd9b', 800, 440), eng: '♡ 6.6K · 💬 420', product: 3 },
      { type: 'community', who: 'Lucy T.', whoBg: SAFETY, sub: 'Community · 1d', text: 'Will a cobot replace people on our line?', eng: '♡ 560 · 💬 180', reply: 'Hi Lucy! Most of our customers move people off the heavy, repetitive jobs and onto checking, setting and improving. A Co-Arm takes the lifting; your team keeps the judgement. 🦾' }
    ],
    events: [ { zoneEvent: true, tag: 'LIVE', title: 'Linewise Live · a bakery’s first robot', when: 'Live now', desc: 'A family bakery in Bolton switches on its first collaborative robot.', registered: 9120, capacity: 22000 } ],
    about: { founded: 'Bolton · 2016', story: 'Robot engineers who thought small factories deserved automation too. We joined FactoryXX as Founding Partner because the shop floor is where the best ideas come from.', milestones: [['2016', 'Founded'], ['2021', 'Co-Arm 10'], ['2026', 'Founding Partner on FactoryXX']], values: ['Robots beside people, not instead of them', 'Taught by hand', 'Support from engineers'] } }),

  'makerbench': brand({ key: 'makerbench', name: 'Makerbench', color: '#0F766E', gradient: TEAL, tier: 'Brand Zone',
    tagline: 'Desktop CNC machines and 3D printers', stats: { followers: '148K', content: '560', products: '26' },
    ad: { badge: 'New', img: U('1787039467622-ddec5c24320c', 760, 760), hl: 'A factory on your bench.', sub: 'Desktop mills and printers for small shops.', meta: 'From £349' },
    products: [
      { name: 'Makerbench Mill', price: '£2,490', tag: 'FLAGSHIP', emoji: '⚙️', rating: 4.7, reviews: 960, cat: 'cnc', special: true, desc: 'A desktop CNC mill for aluminium, plastics and wood.', features: ['Enclosed and quiet', 'Software included'], review: { who: 'Carl M.', text: 'Prototypes in an afternoon.' } },
      { name: 'Makerbench Printer Pro', price: '£899', tag: 'BESTSELLER', emoji: '🖨️', rating: 4.8, reviews: 2240, cat: 'printers', desc: 'A fast 3D printer for jigs and fixtures.', features: ['Prints tough nylon'], review: { who: 'Lucy T.', text: 'We print our own jigs now.' } },
      { name: 'Makerbench Laser', price: '£1,290', emoji: '🔦', rating: 4.6, reviews: 640, cat: 'cnc', desc: 'Cuts and engraves sheet and labels.', features: ['Fume filter'], review: { who: 'Hannah K.', text: 'Labels for every shadow board.' } },
      { name: 'Starter Printer', price: '£349', tag: 'SPECIAL', emoji: '🎁', rating: 4.6, reviews: 1860, cat: 'printers', special: true, desc: 'A first 3D printer for apprentices and schools.', features: ['Ready in 15 minutes'], review: { who: 'Samuel B.', text: 'Bought one for our apprentices.' } }
    ],
    shopCats: [ { key: 'cnc', label: 'CNC', icon: '⚙️' }, { key: 'printers', label: 'Printers', icon: '🖨️' } ],
    feed: [ { type: 'post', sub: 'Brand post · 1h', text: 'Sparks, a steady beam and a part cut in minutes. The <b>Makerbench Laser</b> at work.', img: U('1764114235891-66ff86abaf87', 800, 440), eng: '♡ 7.8K · 💬 560', product: 2 } ],
    events: [ { zoneEvent: true, tag: 'SALE', title: 'Christmas sale: 20% off printers', when: 'Dec 4 · All day', desc: 'A fifth off every printer, one day only.', registered: 1480, capacity: 4000 } ],
    about: { founded: 'Cambridge · 2015', story: 'Engineers who wanted small shops to make their own parts.', milestones: [['2015', 'The first printer'], ['2022', 'The Mill'], ['2026', 'Brand Zone on FactoryXX']], values: ['Repairable machines', 'Open file formats', 'Schools discount'] } }),

  'guardline-workwear': brand({ key: 'guardline-workwear', name: 'Guardline Workwear', color: '#CA8A04', gradient: SAFETY, tier: 'Brand Zone',
    tagline: 'Safety boots, gloves and hi-vis that fit', stats: { followers: '96.8K', content: '340', products: '64' },
    ad: { badge: 'Gift', img: U('1772299121503-cd62a57e3a26', 760, 760), hl: 'Safe, and it fits.', sub: 'Workwear in real sizes, for everyone.', meta: 'From £9' },
    products: [
      { name: 'Guardline Safety Boots', price: '£79', tag: 'FLAGSHIP', emoji: '🥾', rating: 4.8, reviews: 4120, cat: 'boots', special: true, desc: 'Composite toe caps, light as trainers.', features: ['Women’s and men’s fits', 'Anti-slip soles'], review: { who: 'Lucy T.', text: 'First boots that fit my feet.' } },
      { name: 'Cut-Resistant Gloves', price: '£12', tag: 'BESTSELLER', emoji: '🧤', rating: 4.7, reviews: 3260, cat: 'gloves', desc: 'Thin enough to feel a screw, tough enough for sheet metal.', features: ['Touchscreen fingers'], review: { who: 'Carl M.', text: 'Tough and nimble.' } },
      { name: 'Hi-Vis Jacket', price: '£39', emoji: '🦺', rating: 4.7, reviews: 1460, cat: 'hivis', desc: 'Warm, waterproof and very visible.', features: ['Eight sizes'], review: { who: 'Samuel B.', text: 'What I recommend for yard work.' } },
      { name: 'Ear Defenders', price: '£9', tag: 'SPECIAL', emoji: '🎧', rating: 4.6, reviews: 1240, cat: 'gloves', special: true, desc: 'Comfortable all shift long.', features: ['Fold flat'], review: { who: 'Hannah K.', text: 'Comfortable enough to keep on.' } }
    ],
    shopCats: [ { key: 'boots', label: 'Boots', icon: '🥾' }, { key: 'gloves', label: 'Gloves & ears', icon: '🧤' }, { key: 'hivis', label: 'Hi-vis', icon: '🦺' } ],
    feed: [ { type: 'post', sub: 'Brand post · 1d', text: 'Hairnets, gloves and good boots, from the first shift to the last. <b>Guardline Safety Boots</b> in every size.', img: U('1652211955967-99c892925469', 800, 440), eng: '♡ 4.2K · 💬 260', product: 0 } ],
    events: [ { zoneEvent: true, tag: 'SALE', title: 'Christmas sale: 30% off boots', when: 'Dec 4 · All day', desc: 'Every pair of safety boots 30% off, one day only.', registered: 1160, capacity: 3500 } ],
    about: { founded: 'Leeds · 2012', story: 'Started by a factory worker who was tired of safety kit made for someone else’s body.', milestones: [['2012', 'The first boot'], ['2020', 'Women’s range'], ['2026', 'Brand Zone on FactoryXX']], values: ['Real sizes', 'Tested on real shifts', 'Recycled where we can'] } }),

  'tallyboard': brand({ key: 'tallyboard', name: 'Tallyboard', color: '#334155', gradient: STEELG, tier: 'Brand Zone',
    tagline: 'Live shop-floor screens for every line', stats: { followers: '58.4K', content: '220', products: '8' },
    ad: { badge: 'Featured', img: U('1764114235916-74de69e6851f', 760, 760), hl: 'See the shift, live.', sub: 'Screens that show every line, every hour.', meta: 'From £29 / month' },
    products: [
      { name: 'Tallyboard Line Screen', price: '£49 / month', tag: 'FLAGSHIP', emoji: '📺', rating: 4.7, reviews: 860, cat: 'screens', special: true, desc: 'A big screen per line: output, target and stops, live.', features: ['Connects to most machines', 'Set up in a day'], review: { who: 'Lucy T.', text: 'The team chases the target now.' } },
      { name: 'Machine Sensor Kit', price: '£189', tag: 'BESTSELLER', emoji: '📡', rating: 4.7, reviews: 1120, cat: 'sensors', desc: 'Clip-on sensors that count parts on old machines.', features: ['No rewiring'], review: { who: 'Carl M.', text: 'My 1980s lathe is online.' } },
      { name: 'Tallyboard Starter', price: '£29 / month', emoji: '📊', rating: 4.6, reviews: 640, cat: 'screens', desc: 'One line, one screen, to try it out.', features: ['Cancel any time'], review: { who: 'Hannah K.', text: 'A cheap way to start.' } },
      { name: 'Andon Light', price: '£69', tag: 'SPECIAL', emoji: '🚨', rating: 4.6, reviews: 420, cat: 'sensors', special: true, desc: 'A light that calls for help when a line stops.', features: ['Three colours'], review: { who: 'Samuel B.', text: 'Faster help, fewer frustrated operators.' } }
    ],
    shopCats: [ { key: 'screens', label: 'Screens', icon: '📺' }, { key: 'sensors', label: 'Sensors', icon: '📡' } ],
    feed: [ { type: 'post', sub: 'Brand post · 4h', text: 'A busy floor, a target and a screen the whole team can see. That’s the <b>Line Screen</b>.', img: U('1781330191153-f7b5f2634511', 800, 440), eng: '♡ 4.8K · 💬 320', product: 0 } ],
    events: [ { zoneEvent: true, tag: 'EVENT', title: 'Webinar: OEE without the spreadsheets', when: 'Dec 3 · 12:30', desc: 'Measure your lines properly, with live Q&A.', registered: 680, capacity: 2000 } ],
    about: { founded: 'Sheffield · 2019', story: 'Software people who spent a year on factory floors before writing a line of code.', milestones: [['2019', 'The first screen'], ['2023', 'Sensor Kit'], ['2026', 'Brand Zone on FactoryXX']], values: ['Simple screens', 'Works with old machines', 'Your data stays yours'] } }),

  'midland-precision': { key: 'midland-precision', kind: 'business', gw: 'factory', name: 'Midland Precision', color: '#1E40AF', gradient: BLUE, img: U('1585201731775-0597e1be4bfb', 900, 500),
    tier: 'Verified', category: 'Contract precision machining', tagline: 'Precision parts, made in Coventry.',
    about: { founded: 'Coventry · 1979', story: 'We turn and mill precision parts for aerospace, medical and motorsport customers, from one-offs to thousands.' },
    stats: { years: 47, staff: 180, clients: '320 customers' },
    caps: [ { name: 'CNC milling', detail: 'Five-axis, up to a metre.' }, { name: 'CNC turning', detail: 'Bar-fed, lights-out.' }, { name: 'Inspection', detail: 'Every part measured.' } ],
    specs: { moq: 'One part', lead: '1 to 8 weeks', regions: 'UK and Europe', certs: ['Aerospace quality certified', 'Medical quality certified', 'Fully insured'] },
    supplies: [ { kind: 'brand', key: 'linewise-robotics', what: 'Machined joints for the Co-Arm' } ],
    cases: [ { title: 'Lights-out Fridays', text: 'Two cobots load the lathes overnight, all weekend.' } ],
    feed: [ { sub: 'Shop floor · 3d', text: 'New five-axis machine in. Apprentices first in the queue.' } ],
    contact: { person: 'Priya Sandhu, Sales', response: 'Replies within one working day' } },

  'brightline-packaging': { key: 'brightline-packaging', kind: 'business', gw: 'factory', name: 'Brightline Packaging', color: '#CA8A04', gradient: SAFETY, img: U('1782948603191-065fb15e2e8e', 900, 500),
    tier: 'Verified', category: 'Contract packing and fulfilment', tagline: 'Packed, labelled and shipped.',
    about: { founded: 'Northampton · 2008', story: 'We pack, label and store products for brands that would rather make than pack.' },
    stats: { years: 18, staff: 260, clients: '140 brands' },
    caps: [ { name: 'Contract packing', detail: 'By hand or by line.' }, { name: 'Gift sets', detail: 'Seasonal builds at speed.' }, { name: 'Storage', detail: '20,000 pallets.' } ],
    specs: { moq: '500 units', lead: '1 to 4 weeks', regions: 'UK', certs: ['Food-grade site', 'Independently audited', 'Fully insured'] },
    supplies: [ { kind: 'brand', key: 'guardline-workwear', what: 'Packs and ships Guardline workwear' } ],
    cases: [ { title: 'A million gift sets', text: 'A Christmas rush packed in six weeks.' } ],
    feed: [ { sub: 'Warehouse · 5d', text: 'Christmas peak: three shifts, every aisle full.' } ],
    contact: { person: 'Tom Ashby, New business', response: 'Replies within one working day' } }
});

/* events in the Events tab */
gxEvents('factory', [
  { gw: 'factory', zone: 'linewise-robotics', type: 'Live', icon: '🔴', live: true, time: 'Live Now', title: 'Linewise Live · a bakery’s first robot', desc: 'A family bakery in Bolton switches on its first collaborative robot.' },
  { gw: 'factory', zone: 'makerbench', type: 'Sale', icon: '🖨️', time: 'Dec 4', title: 'Makerbench Christmas sale', desc: '20% off every 3D printer.' },
  { gw: 'factory', zone: 'guardline-workwear', type: 'Sale', icon: '🥾', time: 'Dec 4', title: 'Guardline Christmas sale', desc: '30% off every pair of safety boots.' },
  { gw: 'factory', type: 'Event', icon: '💬', time: 'Dec 1', title: 'Ask a lean coach: live chat', desc: 'The Shop Floor puts your questions to a lean coach.' },
  { gw: 'factory', zone: 'tallyboard', type: 'Event', icon: '📊', time: 'Dec 3', title: 'Webinar: OEE without the spreadsheets', desc: 'Measure your lines properly, with Tallyboard.' },
  { gw: 'factory', type: 'Event', icon: '🏭', time: 'Dec 4', title: 'Factory tour, Birmingham', desc: 'Birmingham Makers visit a precision machining shop.' },
  { gw: 'factory', type: 'Event', icon: '🎄', time: 'Dec 10', title: 'Makers’ Christmas social, Birmingham', desc: 'Birmingham Makers end the year together.' },
  { gw: 'factory', type: 'Event', icon: '🇬🇧', time: 'Dec 16', title: 'Make it in Britain: year in review', desc: 'The Shop Floor looks back at a year of making.' }
]);
})();
/* ═════════ /FACTORYXX ═════════ */
