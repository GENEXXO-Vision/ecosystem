/* ═════════ ENGINEERXX — a Career demo gateway (2026-11-16, Sean) ═════════
   Built like GolfXX and ChristmasXX: theme, feed, 4 Brand Zones, 2 Business Zones, 3 Pros, 2 communities, 3 apps, events.
   Palette (dark): blueprint navy, hi-vis amber, blueprint cyan. Home sector: Career (Engineering Careers).
   Brands, pros and communities are fictional; places are real. Source of truth: _lab/careers/engineerxx-block.js. */
(function(){
const U = (id, w, h) => `https://images.unsplash.com/photo-${id}?w=${w}&h=${h}&fit=crop&q=75`;
const AMBER = 'linear-gradient(135deg,#FFC23D,#C47F00)', CYAN = 'linear-gradient(135deg,#4FC3F7,#1565A8)', RED = 'linear-gradient(135deg,#F0646E,#A3263A)', ORANGE = 'linear-gradient(135deg,#FF9F43,#C4550A)', STEEL = 'linear-gradient(135deg,#6E86A8,#2C3E5C)';

GATEWAYS.engineer = {
  name: 'EngineerXX', domain: 'engineerxx.com', emoji: '⚙️', sector: 'career', live: true,
  tagline: 'The Engineer Universe',
  theme: {
    bg: '#0A1630', text: '#EAF2FF', cardBg: 'rgba(255,255,255,.045)', cardBorder: 'rgba(79,195,247,.16)',
    headerBg: 'linear-gradient(180deg,#14306A,#0A1630)', accent: '#FFB000', accentAlt: '#4FC3F7', dark: true
  },
  gradient: 'linear-gradient(135deg,#14306A,#4FC3F7,#FFB000)',
  stats: { members: '5.2M', brands: '3,400+', agents: '92' },
  spaces: ['All Feed', 'Projects', 'Chartership', 'Tools & Kit', 'Renewables', 'Jobs'],
  trending: ['#BuiltIt', '#Chartership', '#OffshoreWind'],
  brandZones: [
    { key: 'torque-tally', name: 'Torque & Tally', color: '#FFB000', tier: 'Founding Partner', tag: 'Precision hand tools, calibrated and guaranteed' },
    { key: 'sparkplane', name: 'Sparkplane Electronics', color: '#4FC3F7', tier: 'Brand Zone', tag: 'Dev boards, sensors and kits for builders' },
    { key: 'layerline-3d', name: 'Layerline 3D', color: '#F0646E', tier: 'Brand Zone', tag: '3D printers and engineering filaments' },
    { key: 'siteworthy', name: 'Siteworthy', color: '#FF8C1A', tier: 'Brand Zone', tag: 'PPE and workwear that fits, for every site' }
  ],
  apps: [
    { name: 'Unit Convert', color: '#4FC3F7', desc: 'Engineering units, both ways', key: 'unit-convert', url: 'apps/unit-convert.html',
      dev: 'Datum Software', rating: '4.9', users: '684K', perms: ['profile', 'feed'],
      tagline: 'Newtons, psi, kilowatts, done.',
      about: 'Unit Convert handles the conversions engineers actually do: length, force, pressure, torque, power, energy and temperature. Type in either box and the other follows. Keep your favourites at the top.',
      features: ['Seven engineering quantities', 'Type in either direction', 'Significant figures you choose', 'Recent conversions saved'],
      shots: ['apps/unit-convert/shot-1.jpg', 'apps/unit-convert/shot-2.jpg', 'apps/unit-convert/shot-3.jpg'],
      version: '8.3', size: '9 KB',
      updates: [ { v: '8.3', ago: 3, notes: 'Torque added: N·m, lbf·ft, kgf·m.' }, { v: '8.0', ago: 110, notes: 'Recent conversions remembered.' }, { v: '7.5', ago: 240, notes: 'Signed in with GENEXXO.' } ],
      reviews: [ { who: '@mech_maddie', stars: 5, ago: 2, text: 'Fastest psi to bar on my phone.' }, { who: '@civil_chloe', stars: 5, ago: 8, text: 'Clean, no ads, does what it says.' }, { who: '@sparky_sanjay', stars: 4, ago: 19, text: 'Would love electrical units too.' } ] },
    { name: 'Resistor Code', color: '#FFB000', desc: 'Colour bands and Ohm’s law', key: 'resistor-code', url: 'apps/resistor-code.html',
      dev: 'Sparkplane Electronics', rating: '4.8', users: '312K', perms: ['profile', 'feed'],
      tagline: 'Brown, black, red: 1 kΩ. Every time.',
      about: 'Resistor Code reads four- and five-band resistors: tap the colours and see the value and tolerance, or type a value and see its bands. A second tab works out Ohm’s law and power from any two values.',
      features: ['Four- and five-band resistors', 'Value to colours and back', 'Ohm’s law and power', 'Nearest standard E12 value'],
      shots: ['apps/resistor-code/shot-1.jpg', 'apps/resistor-code/shot-2.jpg', 'apps/resistor-code/shot-3.jpg'],
      version: '4.6', size: '10 KB',
      updates: [ { v: '4.6', ago: 5, notes: 'Nearest E12 value shown.' }, { v: '4.2', ago: 130, notes: 'Ohm’s law tab.' }, { v: '3.8', ago: 250, notes: 'Signed in with GENEXXO.' } ],
      reviews: [ { who: '@robot_rafi', stars: 5, ago: 1, text: 'Saves me squinting at bands under the bench light.' }, { who: '@student_eng_ella', stars: 5, ago: 12, text: 'Got me through first-year labs.' }, { who: '@sparky_sanjay', stars: 4, ago: 26, text: 'Great. Six-band support please.' } ] },
    { name: 'Chartership Tracker', color: '#F0646E', desc: 'Your evidence towards chartered status', key: 'chartership', url: 'apps/chartership.html',
      dev: 'Datum Software', rating: '4.7', users: '96.4K', perms: ['profile', 'feed'],
      tagline: 'Five competences. One clear path to CEng.',
      about: 'Chartership Tracker logs your evidence against the five UK-SPEC competence areas, A to E, and your CPD hours, so you can see which areas are ready for your review and which need more. Follow your own institution’s guidance on what counts.',
      features: ['Evidence against A to E', 'Strength meter for each area', 'CPD hours this year', 'Share when you are ready to apply'],
      shots: ['apps/chartership/shot-1.jpg', 'apps/chartership/shot-2.jpg', 'apps/chartership/shot-3.jpg'],
      version: '2.4', size: '10 KB',
      updates: [ { v: '2.4', ago: 6, notes: 'CPD hours alongside your evidence.' }, { v: '2.0', ago: 150, notes: 'Strength meter for each competence.' }, { v: '1.6', ago: 270, notes: 'Signed in with GENEXXO.' } ],
      reviews: [ { who: '@civil_chloe', stars: 5, ago: 4, text: 'Showed me I was weak on area D. Fixed it in three months.' }, { who: '@mech_maddie', stars: 5, ago: 14, text: 'My mentor and I go through it every month.' }, { who: '@offshore_owen', stars: 4, ago: 31, text: 'Very useful, would like an export.' } ] }
  ],
  pros: [
    { key: 'dr-hannah-kerr-mentoring', name: 'Dr Hannah Kerr Chartership Mentoring', color: '#F0646E', tag: 'CEng mentor · competence reports, review interviews', role: 'Chartership mentor',
      img: U('1581091226825-a6a2a5aee158', 800, 800), base: 'Glasgow, Scotland', langs: 'English', years: 16, rating: '4.9', reviewsN: 386, cur: '£',
      creds: ['Chartered Engineer (CEng)', 'Professional review interviewer', 'PhD, mechanical engineering'],
      about: 'Hannah is a chartered mechanical engineer who has mentored more than two hundred engineers to CEng and IEng. She helps you find the evidence you already have and write it so the reviewers can see it.',
      services: [ { id: 'gap', name: 'Competence gap review', dur: '60 minutes', price: 80, desc: 'We go through A to E and plan the evidence you still need.' },
                  { id: 'report', name: 'Competence report review', dur: 'Written feedback', price: 150, desc: 'Line-by-line comments on your draft report within a week.' },
                  { id: 'mock', name: 'Mock review interview', dur: '90 minutes', price: 140, desc: 'A full mock with two interviewers and written feedback.' } ],
      avail: { days: [1, 2, 4, 5], times: ['12:30', '17:30', '19:00'] },
      reviews: [ { who: '@civil_chloe', stars: 5, ago: 6, text: 'Chartered in March. Hannah’s mock was the reason I was calm.' }, { who: '@mech_maddie', stars: 5, ago: 15, text: 'Her report feedback was gold.' }, { who: '@offshore_owen', stars: 5, ago: 29, text: 'Patient with a very busy offshore schedule.' } ],
      posts: [ { ago: 1, text: 'Write “I”, not “we”. The reviewers need to see what you did.' }, { ago: 8, text: 'Spring review dates are out. Start your report in December.' } ],
      tier: 'Pro Zone', verified: true },
    { key: 'ravi-shah-structures', name: 'Ravi Shah Structural Engineering', color: '#FFB000', tag: 'Structural engineer · knock-throughs, loft conversions, surveys', role: 'Structural engineer',
      img: U('1772442198624-4fc4d7281e89', 800, 800), base: 'Bristol, UK', langs: 'English, Gujarati', years: 19, rating: '4.9', reviewsN: 512, cur: '£',
      creds: ['Chartered Structural Engineer', 'Professional indemnity insured', 'Party Wall surveyor'],
      about: 'Ravi designs the steel and timber for home projects around Bristol: kitchen knock-throughs, loft conversions and extensions, with calculations and drawings ready for building control.',
      services: [ { id: 'visit', name: 'Site visit and advice', dur: '60 minutes on site', price: 180, desc: 'A look at the walls, floors and roof, and a written note of what is needed.' },
                  { id: 'calcs', name: 'Beam calculations and drawing', dur: 'Within 10 days', price: 420, desc: 'Steel or timber sized for building control, with a simple drawing.' },
                  { id: 'loft', name: 'Loft conversion package', dur: 'Within 3 weeks', price: 950, desc: 'Floor, roof and steel design with full calculations.' } ],
      avail: { days: [1, 2, 3, 4, 5], times: ['09:00', '11:30', '14:00'] },
      reviews: [ { who: '@diy_dan', stars: 5, ago: 4, text: 'Clear advice and the calcs were approved first time.' }, { who: '@civil_chloe', stars: 5, ago: 18, text: 'Learned a lot shadowing Ravi on a loft job.' }, { who: '@home_hannah', stars: 4, ago: 32, text: 'Busy, but worth the wait.' } ],
      posts: [ { ago: 2, text: 'Thinking of a knock-through in the new year? Book the site visit before the builder.' } ],
      tier: 'Pro Zone', verified: true },
    { key: 'make-it-real-prototyping', name: 'Make It Real Prototyping', color: '#4FC3F7', tag: 'Product design and prototyping studio · CAD, 3D printing, small runs', role: 'Prototyping studio',
      img: U('1581092334651-ddf26d9a09d0', 800, 800), base: 'Sheffield, UK', langs: 'English', years: 8, rating: '4.8', reviewsN: 274, cur: '£',
      creds: ['Chartered mechanical engineers', 'ISO 9001 workshop', 'Design for manufacture specialists'],
      about: 'A small studio in Sheffield that takes an idea from a sketch to a working prototype: CAD, 3D printing, machining and electronics under one roof, then a small production run when you are ready.',
      services: [ { id: 'idea', name: 'Idea session', dur: '90 minutes', price: 120, desc: 'Sketch to plan: what to build first and what it will cost.' },
                  { id: 'cad', name: 'CAD and first print', dur: 'About 2 weeks', price: 650, desc: 'A full CAD model and a 3D-printed prototype in your hands.' },
                  { id: 'run', name: 'Production run consultation', dur: '45 minutes + quote', price: 60, desc: 'Machined or moulded parts, 50 to 5,000 units. Fee refunded when you order.' } ],
      avail: { days: [1, 2, 3, 4], times: ['10:00', '14:00'] },
      reviews: [ { who: '@robot_rafi', stars: 5, ago: 7, text: 'Turned my napkin sketch into a working gripper.' }, { who: '@maker_mo', stars: 5, ago: 21, text: 'Honest about what would and would not work.' }, { who: '@diy_dan', stars: 4, ago: 44, text: 'Great results, book early.' } ],
      posts: [ { ago: 1, text: 'January idea sessions are open. Bring the sketch you have been carrying around all year.' } ],
      tier: 'Pro Zone', verified: true }
  ],
  communities: [
    { key: 'offshore-wind-crew', name: 'Offshore Wind Crew', domain: 'offshore.engineerxx.com', color: '#4FC3F7', img: U('1788252172210-670016c2a273', 900, 500),
      scope: 'Global', where: 'North Sea and beyond', members: 26400, online: 410, tagline: 'Two weeks on, two weeks off, and a lot of turbines.',
      about: 'Technicians, engineers and everyone else who keeps offshore wind turning. Rotations, kit, training tips, life on the vessel and the view from the nacelle.',
      rules: ['Safety first, always', 'No confidential project details', 'Help the new starters'],
      mods: ['@offshore_owen', '@nacelle_nina'],
      threads: [ { t: 'First rotation next week: what do I pack?', by: '@new_tech_toby', tag: 'Q&A', replies: 164, ago: 0, votes: 288 }, { t: 'Sunrise from 120 m up this morning', by: '@nacelle_nina', tag: 'PHOTOS', replies: 92, ago: 1, votes: 540 }, { t: 'Best boots for transfer days?', by: '@offshore_owen', tag: 'KIT', replies: 71, ago: 2, votes: 126 }, { t: 'Moving from oil and gas to wind: AMA', by: '@rig_to_wind_ray', tag: 'CAREERS', replies: 208, ago: 4, votes: 402 } ],
      events: [ { title: 'Crew meet-up, Hull', day: 5, time: '18:30', where: 'Hull' }, { title: 'Careers in wind (online)', day: 2, time: '19:00', where: 'Online' } ] },
    { key: 'bristol-robotics-meetup', name: 'Bristol Robotics Meetup', domain: 'bristol.engineerxx.com', color: '#FFB000', img: U('1581090121489-ff9b54bbee43', 900, 500),
      scope: 'Local', where: 'Bristol', members: 1940, online: 52, tagline: 'Build it, break it, bring it on Thursday.',
      about: 'Makers, students and professional engineers who build robots around Bristol. Monthly show-and-tell, build nights, and a battle-bot league that is mostly for fun.',
      rules: ['Every level welcome', 'Lithium batteries in fire bags', 'Share your code'],
      mods: ['@robot_rafi', '@maker_mo'],
      threads: [ { t: 'Thursday show-and-tell: who is bringing what?', by: '@robot_rafi', tag: 'MEET', replies: 38, ago: 0, votes: 74 }, { t: 'Cheap servos that are not terrible', by: '@maker_mo', tag: 'PARTS', replies: 56, ago: 1, votes: 98 }, { t: 'Battle-bot league rules for 2027', by: '@robot_rafi', tag: 'LEAGUE', replies: 44, ago: 3, votes: 61 } ],
      events: [ { title: 'Build night', day: 4, time: '18:30', where: 'Harbourside, Bristol' }, { title: 'Battle-bot friendlies', day: 6, time: '13:00', where: 'Bristol' } ] }
  ],
  feed: [
    { av: 'EX', avBg: AMBER, author: 'EngineerXX Editorial', sub: 'Featured · Just now', badge: '★ FEATURED',
      text: 'Bridges, robots, circuits, turbines and the tools that build them. From first-year labs to chartership and beyond: engineering, all in one place.',
      img: U('1529926691761-20fb82067c71', 800, 600), eng: '♡ 44.2K · 💬 5.3K · ↗ 4.1K' },
    { av: 'CC', avBg: CYAN, author: '@civil_chloe', sub: 'Projects · Just now', badge: 'COMMUNITY',
      text: 'Three years of design work and this morning the final span went in, lifted by crane in one go. Watched it from the riverbank with my whole team 🌉',
      img: U('1763113349178-05cded58108e', 800, 600), eng: '♡ 16.8K · 💬 2.2K · ↗ 1.4K' },
    { av: 'TT', avBg: AMBER, author: 'Torque & Tally', sub: 'Founding Partner · Brand Zone', badge: 'BRAND ZONE',
      text: 'The <b>Calibrated Socket Set</b>: 94 pieces, a click torque wrench certified to ±3%, and a recalibration every year for free.',
      img: U('1672659605632-895c18f09563', 800, 600), eng: '♡ 8.6K · 💬 640 · ↗ 920' },
    { av: 'SP', avBg: CYAN, author: 'Sparkplane Electronics', sub: 'Brand Zone · 1h ago', badge: 'BRAND ZONE',
      text: 'Meet the <b>Sparkplane Nano</b>: Wi-Fi, Bluetooth and twenty pins on a board the size of a stick of gum. Hand-soldered prototypes welcome.',
      img: U('1640955785023-1854685dae05', 800, 600), eng: '♡ 5.4K · 💬 380 · ↗ 510' },
    { av: 'RR', avBg: RED, author: '@robot_rafi', sub: 'Projects · 2h ago', badge: 'COMMUNITY',
      text: 'Spent the weekend at a factory open day watching a six-axis arm pick parts faster than I can blink. Bringing what I learned to the Bristol Robotics Meetup on Thursday 🤖',
      img: U('1716191299980-a6e8827ba10b', 800, 600), eng: '♡ 4.9K · 💬 520 · ↗ 210' },
    { av: 'SW', avBg: ORANGE, author: 'Siteworthy', sub: 'Brand Zone · 4h ago', badge: 'BRAND ZONE',
      text: 'PPE that actually fits: the <b>Siteworthy Hi-Vis Jacket</b> comes in sizes cut for women and men, waterproof, and warm enough for a December site.',
      img: U('1761227447538-f4e1ec0a9df6', 800, 600), eng: '♡ 3.2K · 💬 260 · ↗ 340' },
    { av: 'HK', avBg: RED, author: 'Dr Hannah Kerr Chartership Mentoring', sub: 'Chartership · 6h ago', badge: 'PRO ZONE',
      text: 'Spring professional reviews: if you start your competence report in December, you will submit it calmly in February. Three mentoring places left.',
      img: U('1581092583537-20d51b4b4f1b', 800, 600), eng: '♡ 2.4K · 💬 188 · ↗ 230' }
  ],
  prompts: ['What do I need for chartered engineer status?', 'Find a structural engineer for a kitchen knock-through in Bristol', 'Which dev board should I use for a weather station?', 'How do I move from oil and gas into offshore wind?'],
  businesses: ['northgate-steel', 'tideway-offshore']
};

/* the four Brand Zones and two Business Zones */
const brand = (o) => Object.assign({ kind: 'brand', gw: 'engineer', verified: true }, o);
Object.assign(ZONES, {
  'torque-tally': brand({ key: 'torque-tally', name: 'Torque & Tally', color: '#FFB000', gradient: AMBER, tier: 'Founding Partner',
    tagline: 'Measured, calibrated, guaranteed for life', stats: { followers: '142K', content: '860', products: '210' },
    ad: { badge: 'Featured', img: U('1672659605632-895c18f09563', 760, 760), hl: 'The Calibrated Socket Set.', sub: '94 pieces, a certified torque wrench, free yearly recalibration.', meta: 'From £22' },
    products: [
      { name: 'Calibrated Socket Set (94 pc)', price: '£189', tag: 'FLAGSHIP', emoji: '🔧', rating: 4.9, reviews: 2140, cat: 'sets', special: true, desc: 'Metric and imperial sockets with a click torque wrench certified to ±3%.', features: ['94 pieces', 'Certified torque wrench', 'Free yearly recalibration'], review: { who: 'Maddie R.', text: 'The certificate in the lid is a lovely touch.' } },
      { name: 'Digital Vernier Caliper (150 mm)', price: '£49', tag: 'BESTSELLER', emoji: '📏', rating: 4.8, reviews: 3860, cat: 'measuring', desc: 'Stainless caliper reading to 0.01 mm, metric and inch.', features: ['0.01 mm resolution', 'IP54'], review: { who: 'Mo K.', text: 'Repeatable and solid. Lives in my apron.' } },
      { name: 'Combination Spanner Set (12 pc)', price: '£64', emoji: '🔩', rating: 4.8, reviews: 1920, cat: 'sets', desc: 'Chrome vanadium spanners, 8 to 19 mm, with a roll case.', features: ['8–19 mm', 'Lifetime guarantee'], review: { who: 'Dan W.', text: 'Will outlive me.' } },
      { name: 'Torque Wrench 20–100 N·m', price: '£89', emoji: '🛠️', rating: 4.8, reviews: 1460, cat: 'torque', special: true, desc: 'A click torque wrench with a certificate of calibration.', features: ['±3% accuracy', 'Certificate included'], review: { who: 'Owen P.', text: 'Exactly what our site needed.' } },
      { name: 'Engineer’s Square Set', price: '£22', emoji: '📐', rating: 4.7, reviews: 980, cat: 'measuring', desc: 'Three hardened steel squares, 75, 100 and 150 mm.', features: ['Hardened steel', 'Checked to DIN 875'], review: { who: 'Ella J.', text: 'Our workshop’s new standard.' } },
      { name: 'Recalibration Service', price: '£25', tag: 'SERVICE', emoji: '🔬', rating: 4.9, reviews: 760, cat: 'service', desc: 'Torque wrenches and calipers recalibrated with a new certificate. Any brand.', features: ['UKAS-traceable', '5-day turnaround'], review: { who: 'Chloe M.', text: 'Saves us a fortune in audits.' } }
    ],
    shopCats: [ { key: 'sets', label: 'Sets', icon: '🔧' }, { key: 'torque', label: 'Torque', icon: '🛠️' }, { key: 'measuring', label: 'Measuring', icon: '📏' }, { key: 'service', label: 'Calibration', icon: '🔬' } ],
    feed: [
      { type: 'post', sub: 'Brand post · 3h', text: 'The <b>Calibrated Socket Set</b>: certified out of the box, and every year after.', img: U('1672659605632-895c18f09563', 800, 440), eng: '♡ 8.6K · 💬 640 · ↗ 920', product: 0 },
      { type: 'post', sub: 'Workshop · Yesterday', text: 'Every spanner is drop-forged, heat-treated and checked by hand before it leaves Sheffield.', img: U('1613206484719-7e2e511ed117', 800, 440), eng: '♡ 4.1K · 💬 220' },
      { type: 'community', who: 'Ella J.', whoBg: CYAN, sub: 'Community · 1d', text: 'First-year student. What do I actually need for workshop modules?', eng: '♡ 164 · 💬 38', reply: 'Good question, Ella. Start with the Digital Vernier Caliper and an Engineer’s Square Set; your university lends the rest. Our student discount takes 20% off with your university email. 📏' }
    ],
    events: [ { zoneEvent: true, tag: 'EVENT', title: 'Free calibration day', when: 'Nov 26 · Sheffield', desc: 'Bring any torque wrench or caliper and we check it while you have a coffee.', registered: 340, capacity: 500 } ],
    about: { founded: 'Sheffield · 1921', story: 'Toolmakers in Sheffield for a century, now making calibrated tools for engineers in every field. We joined GENEXXO as EngineerXX’s Founding Partner because this is where the people who use our tools gather.', milestones: [['1921', 'The first spanners forged in Sheffield'], ['1998', 'Calibration lab opens'], ['2026', 'Founding Partner on EngineerXX']], values: ['Measured, not guessed', 'Guaranteed for life', 'Repair and recalibrate'] } }),

  'sparkplane': brand({ key: 'sparkplane', name: 'Sparkplane Electronics', color: '#4FC3F7', gradient: CYAN, tier: 'Brand Zone',
    tagline: 'Boards and kits for people who build', stats: { followers: '88.4K', content: '540', products: '160' },
    ad: { badge: 'New', img: U('1640955785023-1854685dae05', 760, 760), hl: 'Sparkplane Nano.', sub: 'Wi-Fi, Bluetooth and twenty pins on a board the size of a stick of gum.', meta: 'From £6' },
    products: [
      { name: 'Sparkplane Nano', price: '£14', tag: 'NEW', emoji: '📟', rating: 4.8, reviews: 2860, cat: 'boards', special: true, desc: 'A tiny Wi-Fi and Bluetooth board with twenty GPIO pins.', features: ['Wi-Fi and Bluetooth', '20 GPIO', 'USB-C'], review: { who: 'Rafi H.', text: 'Running three of them in my robot.' } },
      { name: 'Weather Station Kit', price: '£39', tag: 'BESTSELLER', emoji: '🌦️', rating: 4.8, reviews: 1720, cat: 'kits', special: true, desc: 'Temperature, humidity, pressure and wind sensors with a step-by-step guide.', features: ['Four sensors', 'No soldering', 'Weekend build'], review: { who: 'Dan W.', text: 'My kids and I built it in an afternoon.' } },
      { name: 'Sensor Pack (12)', price: '£24', emoji: '🧲', rating: 4.7, reviews: 2140, cat: 'parts', desc: 'Twelve common sensors on breakout boards.', features: ['Light, sound, motion and more'], review: { who: 'Mo K.', text: 'Everything I need for prototyping.' } },
      { name: 'Soldering Station', price: '£69', emoji: '🔥', rating: 4.8, reviews: 980, cat: 'tools', desc: 'Temperature-controlled station with a fine tip set.', features: ['200–450 °C', 'Five tips'], review: { who: 'Sanjay P.', text: 'Heats in seconds.' } },
      { name: 'Resistor Kit (600 pc)', price: '£6', emoji: '🎨', rating: 4.7, reviews: 3410, cat: 'parts', desc: 'Thirty common values from 10 Ω to 1 MΩ, labelled.', features: ['E12 values', '1% tolerance'], review: { who: 'Ella J.', text: 'Never short of a resistor again.' } }
    ],
    shopCats: [ { key: 'boards', label: 'Boards', icon: '📟' }, { key: 'kits', label: 'Kits', icon: '🌦️' }, { key: 'parts', label: 'Parts', icon: '🧲' }, { key: 'tools', label: 'Tools', icon: '🔥' } ],
    feed: [ { type: 'post', sub: 'Brand post · 1h', text: 'Meet the <b>Sparkplane Nano</b>: small enough for anything.', img: U('1562408590-e32931084e23', 800, 440), eng: '♡ 5.4K · 💬 380', product: 0 } ],
    events: [ { zoneEvent: true, tag: 'LIVE BUILD', title: 'Build a weather station, live', when: 'Live now · Online', desc: 'Our engineers build the Weather Station Kit live. Build along at home.', registered: 4200, capacity: 10000 } ],
    about: { founded: 'Cambridge · 2014', story: 'Two electronics engineers who wanted boards that were cheap, well documented and fun. Everything ships with open guides.', milestones: [['2014', 'The first Sparkplane board'], ['2023', 'The Nano'], ['2026', 'Brand Zone on EngineerXX']], values: ['Open guides', 'Fair prices', 'Built for learning'] } }),

  'layerline-3d': brand({ key: 'layerline-3d', name: 'Layerline 3D', color: '#F0646E', gradient: RED, tier: 'Brand Zone',
    tagline: 'Print parts that work', stats: { followers: '61.7K', content: '390', products: '88' },
    ad: { badge: 'Featured', img: U('1761454165168-cfdf007c6a31', 760, 760), hl: 'Layerline Pro filaments.', sub: 'Carbon-fibre nylon, PETG and TPU, tuned for engineering parts.', meta: 'From £19' },
    products: [
      { name: 'Layerline Core 3D Printer', price: '£449', tag: 'FLAGSHIP', emoji: '🖨️', rating: 4.8, reviews: 1180, cat: 'printers', special: true, desc: 'A fast, enclosed printer for engineering filaments, ready in ten minutes.', features: ['Enclosed', 'Up to 300 °C nozzle', 'Auto bed levelling'], review: { who: 'Mo K.', text: 'Prints carbon nylon without a fuss.' } },
      { name: 'Carbon-Fibre Nylon (1 kg)', price: '£42', tag: 'BESTSELLER', emoji: '🧵', rating: 4.8, reviews: 1640, cat: 'filament', desc: 'Stiff, strong and heat-resistant parts straight off the bed.', features: ['Dried and sealed', 'Hardened nozzle advised'], review: { who: 'Rafi H.', text: 'My gripper fingers are stiff as aluminium.' } },
      { name: 'Engineering PETG (1 kg)', price: '£19', emoji: '🟦', rating: 4.7, reviews: 2860, cat: 'filament', desc: 'Tough, easy to print and chemical-resistant.', features: ['Twelve colours'], review: { who: 'Ella J.', text: 'Our lab’s go-to.' } },
      { name: 'Flexible TPU (750 g)', price: '£26', emoji: '🟠', rating: 4.6, reviews: 980, cat: 'filament', special: true, desc: 'Shore 95A for seals, bumpers and grips.', features: ['Shore 95A'], review: { who: 'Dan W.', text: 'Printed new feet for my workbench.' } },
      { name: 'Print Service (per part)', price: '£12', tag: 'SERVICE', emoji: '📦', rating: 4.9, reviews: 540, cat: 'service', desc: 'Send a file, get a part. Engineering filaments only.', features: ['Quote in an hour', 'Posted in 3 days'], review: { who: 'Chloe M.', text: 'Bracket prototype in my hands by Thursday.' } }
    ],
    shopCats: [ { key: 'printers', label: 'Printers', icon: '🖨️' }, { key: 'filament', label: 'Filament', icon: '🧵' }, { key: 'service', label: 'Print service', icon: '📦' } ],
    feed: [ { type: 'post', sub: 'Brand post · 5h', text: 'Engineering parts, straight off the bed: <b>the Layerline Core</b>.', img: U('1761454165168-cfdf007c6a31', 800, 440), eng: '♡ 3.4K · 💬 240', product: 0 } ],
    events: [ { zoneEvent: true, tag: 'EVENT', title: 'Print farm open day', when: 'Dec 4 · Leeds', desc: 'See forty printers running, bring a file and print it on the day.', registered: 260, capacity: 400 } ],
    about: { founded: 'Leeds · 2017', story: 'Mechanical engineers who wanted printed parts that held up in real machines. We test every filament batch on a tensile rig.', milestones: [['2017', 'First engineering filaments'], ['2024', 'The Layerline Core printer'], ['2026', 'Brand Zone on EngineerXX']], values: ['Tested, not guessed', 'Engineering-grade', 'Spools you can recycle'] } }),

  'siteworthy': brand({ key: 'siteworthy', name: 'Siteworthy', color: '#FF8C1A', gradient: ORANGE, tier: 'Brand Zone',
    tagline: 'PPE that fits the person wearing it', stats: { followers: '47.9K', content: '260', products: '120' },
    ad: { badge: 'Featured', img: U('1621905251189-08b45d6a269e', 760, 760), hl: 'Siteworthy Hi-Vis Jacket.', sub: 'Cut for women and men. Waterproof, warm and certified.', meta: 'From £9' },
    products: [
      { name: 'Hi-Vis Waterproof Jacket', price: '£79', tag: 'FLAGSHIP', emoji: '🦺', rating: 4.8, reviews: 1980, cat: 'workwear', special: true, desc: 'A warm, waterproof hi-vis jacket in women’s and men’s cuts.', features: ['EN ISO 20471 Class 3', 'Women’s and men’s fits', 'Fleece lined'], review: { who: 'Chloe M.', text: 'First hi-vis that has ever actually fitted me.' } },
      { name: 'Safety Boots', price: '£95', tag: 'BESTSELLER', emoji: '🥾', rating: 4.8, reviews: 2640, cat: 'boots', desc: 'Composite toe and midsole, waterproof, light enough for a twelve-hour day.', features: ['S3 rated', 'Composite toe', 'Sizes 3 to 14'], review: { who: 'Owen P.', text: 'Comfortable from day one.' } },
      { name: 'Vented Hard Hat', price: '£24', emoji: '⛑️', rating: 4.7, reviews: 1540, cat: 'head', desc: 'A light, vented hard hat with a ratchet harness.', features: ['EN 397', 'Six colours'], review: { who: 'Sanjay P.', text: 'Cool in summer, which is rare.' } },
      { name: 'Safety Glasses (3 pack)', price: '£9', emoji: '🥽', rating: 4.6, reviews: 3120, cat: 'head', special: true, desc: 'Anti-fog, scratch-resistant glasses that fit over most frames.', features: ['EN 166', 'Anti-fog'], review: { who: 'Ella J.', text: 'Actually do not fog. Amazing.' } },
      { name: 'Team Kit Fitting', price: '£45', tag: 'SERVICE', emoji: '📋', rating: 4.9, reviews: 320, cat: 'service', desc: 'We visit your site, size your team and deliver everything labelled.', features: ['Teams of 10+', 'Fee refunded on order'], review: { who: 'Maddie R.', text: 'Every one of our 40 fitted properly.' } }
    ],
    shopCats: [ { key: 'workwear', label: 'Workwear', icon: '🦺' }, { key: 'boots', label: 'Boots', icon: '🥾' }, { key: 'head', label: 'Head & eyes', icon: '⛑️' }, { key: 'service', label: 'Team fitting', icon: '📋' } ],
    feed: [ { type: 'post', sub: 'Brand post · 4h', text: 'Hi-vis that fits: the <b>Siteworthy Waterproof Jacket</b>.', img: U('1761227447538-f4e1ec0a9df6', 800, 440), eng: '♡ 3.2K · 💬 260', product: 0 } ],
    events: [ { zoneEvent: true, tag: 'DEADLINE', title: 'Last order for Christmas delivery', when: 'Dec 15 · 23:59', desc: 'Order by midnight on 15 December for delivery before Christmas.', registered: 720, capacity: 3000 } ],
    about: { founded: 'Newcastle · 2015', story: 'Started by a site engineer who was handed a men’s XL jacket on her first day. We make PPE in cuts and sizes that fit everyone on site.', milestones: [['2015', 'The first women’s-cut hi-vis'], ['2021', 'Safety boots from size 3'], ['2026', 'Brand Zone on EngineerXX']], values: ['Fit is safety', 'Certified, always', 'Recycle old PPE with us'] } }),

  'northgate-steel': { key: 'northgate-steel', kind: 'business', gw: 'engineer', name: 'Northgate Steel Fabrication', color: '#6E86A8', gradient: STEEL, img: U('1785257272547-f8dd0b6aa3f5', 900, 500),
    tier: 'Verified', category: 'Structural steel', tagline: 'Structural steel, fabricated and erected.',
    about: { founded: 'Middlesbrough · 1979', story: 'We fabricate and erect structural steel for buildings, canopies and bridges: from a single beam for a house to a full steel frame.' },
    stats: { years: 47, staff: 260, clients: '1,100+ projects' },
    caps: [ { name: 'Fabrication', detail: 'Beams, columns and trusses cut, drilled and welded in our own works.' }, { name: 'Erection', detail: 'Our own crews and cranes on site.' }, { name: 'Coatings', detail: 'Shot-blasting, galvanising and intumescent paint.' } ],
    specs: { moq: '1 beam', lead: '1–3 weeks; frames 6–12 weeks', regions: 'UK', certs: ['CE/UKCA Execution Class 3', 'ISO 9001', 'ISO 14001'] },
    supplies: [ { kind: 'brand', key: 'siteworthy', what: 'PPE for every erection crew' } ],
    cases: [ { title: 'Station canopy, North East', text: 'A curved steel canopy fabricated in sections and erected over four night possessions.' } ],
    feed: [ { sub: 'Projects · 3d', text: 'Canopy steel for a new station in the North East leaves the works this week.' }, { sub: 'Careers · 1w', text: 'Apprentice welders wanted for January.' } ],
    contact: { person: 'Gareth Lowe, Estimating', response: 'Replies within 24 hours' } },

  'tideway-offshore': { key: 'tideway-offshore', kind: 'business', gw: 'engineer', name: 'Tideway Offshore Services', color: '#4FC3F7', gradient: CYAN, img: U('1783065894338-2b26b0ffecab', 900, 500),
    tier: 'Verified', category: 'Wind turbine installation & maintenance', tagline: 'Installing and maintaining wind turbines, on and offshore.',
    about: { founded: 'Hull · 2010', story: 'We install, inspect and maintain wind turbines on land and at sea: blade repairs, gearbox changes and annual service campaigns, with our own trained technicians.' },
    stats: { years: 16, staff: 640, clients: '70+ wind farms' },
    caps: [ { name: 'Installation', detail: 'Turbine assembly and commissioning on land and offshore.' }, { name: 'Blade repair', detail: 'Rope-access technicians for inspection and leading-edge repair.' }, { name: 'Service campaigns', detail: 'Annual services across whole wind farms.' } ],
    specs: { moq: '1 turbine', lead: '2–8 weeks', regions: 'UK, Europe', certs: ['GWO training provider', 'ISO 45001', 'IRATA rope access'] },
    supplies: [ { kind: 'brand', key: 'torque-tally', what: 'Calibrated torque tools for bolt tensioning' } ],
    cases: [ { title: 'Blade repair campaign, North Sea', text: 'Leading-edge repairs on 86 turbines in one summer weather window.' } ],
    feed: [ { sub: 'News · 4d', text: 'Recruiting wind turbine technicians for 2027. GWO training provided.' } ],
    contact: { person: 'Kirsty Marsh, Wind partnerships', response: 'Replies within one working day' } }
});

/* events in the Events tab */
gxEvents('engineer', [
  { gw: 'engineer', zone: 'sparkplane', type: 'Live', icon: '🔴', live: true, time: 'Live Now', title: 'Sparkplane Live · Build a Weather Station', desc: 'Two Sparkplane engineers build the Weather Station Kit live. Build along at home and ask anything.' },
  { gw: 'engineer', type: 'Event', icon: '🤖', time: 'Nov 20', title: 'Bristol Robotics show-and-tell', desc: 'Bring a robot, finished or not, and show it off. Every level welcome.' },
  { gw: 'engineer', zone: 'torque-tally', type: 'Event', icon: '🔧', time: 'Nov 26', title: 'Free calibration day, Sheffield', desc: 'Torque & Tally: bring any torque wrench or caliper and have it checked while you wait.' },
  { gw: 'engineer', type: 'Event', icon: '📋', time: 'Dec 2', title: 'Chartership report workshop (online)', desc: 'Dr Hannah Kerr: how to write a competence report reviewers can follow.' },
  { gw: 'engineer', zone: 'layerline-3d', type: 'Event', icon: '🖨️', time: 'Dec 4', title: 'Layerline print farm open day, Leeds', desc: 'Forty printers running. Bring a file and print it on the day.' },
  { gw: 'engineer', type: 'Event', icon: '🌬️', time: 'Dec 9', title: 'Offshore Wind Crew meet-up, Hull', desc: 'Crew between rotations meet on the waterfront. New starters very welcome.' },
  { gw: 'engineer', zone: 'siteworthy', type: 'Deadline', icon: '🦺', time: 'Dec 15', title: 'Last order for Christmas delivery', desc: 'Siteworthy: order by midnight for delivery before Christmas.' },
  { gw: 'engineer', type: 'Event', icon: '💡', time: 'Jan 14', title: 'Idea sessions open, Sheffield', desc: 'Make It Real Prototyping: bring a sketch, leave with a plan.' }
]);
})();
/* ═════════ /ENGINEERXX ═════════ */
