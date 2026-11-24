/* ═════════ TUNNELXX — a Construction demo gateway (2026-11-24, Sean; build -96) ═════════
   Built with the _tools/README.md recipe. Palette (dark): underground navy, concrete grey, hi-vis amber.
   Home sector: Construction (GW_HOME already says so; listed only there). Every contractor, maker, pro, machine and
   product is fictional; places, history and engineering are real. Figures are illustrative. */
(function(){
const U = (id, w, h) => `https://images.unsplash.com/photo-${id}?w=${w}&h=${h}&fit=crop&q=75`;
const HIVIS = 'linear-gradient(135deg,#FBBF24,#D97706)', DEEP = 'linear-gradient(135deg,#1E3A8A,#0B1220)', CONCRETE = 'linear-gradient(135deg,#9CA3AF,#374151)', LAMP = 'linear-gradient(135deg,#FDE68A,#B45309)';

GATEWAYS.tunnel = {
  name: 'TunnelXX', domain: 'tunnelxx.com', emoji: '🚇', sector: 'construction', live: true,
  tagline: 'The Tunnel Universe',
  theme: {
    bg: '#0B1220', text: '#E8ECF3', cardBg: 'rgba(255,255,255,.045)', cardBorder: 'rgba(232,236,243,.09)',
    headerBg: 'linear-gradient(180deg,#16213A,#0B1220)', accent: '#FBBF24', accentAlt: '#60A5FA', dark: true
  },
  gradient: 'linear-gradient(135deg,#0B1220,#1E3A8A,#FBBF24)',
  stats: { members: '980K', brands: '420+', agents: '22' },
  spaces: ['All Feed', 'Breakthroughs', 'Boring Machines', 'History', 'Safety', 'Careers'],
  trending: ['#Breakthrough', '#StBarbarasDay', '#TunnelTours'],
  brandZones: [
    { key: 'deepline-tunnelling', name: 'Deepline Tunnelling', color: '#FBBF24', tier: 'Founding Partner', tag: 'Tunnel boring for railways, water and power' },
    { key: 'lampwright', name: 'Lampwright', color: '#FDE68A', tier: 'Brand Zone', tag: 'Head torches and work lights for dark places' },
    { key: 'shaftsafe', name: 'Shaftsafe', color: '#60A5FA', tier: 'Brand Zone', tag: 'Gas detectors and rescue kit for underground work' },
    { key: 'subterra-tours', name: 'Subterra Tours', color: '#9CA3AF', tier: 'Brand Zone', tag: 'Hard-hat tours of tunnels old and new' }
  ],
  apps: [
    { name: 'TBM Tracker', color: '#FBBF24', desc: 'Follow a boring machine, ring by ring', key: 'tbm-tracker', url: 'apps/tbm-tracker.html',
      dev: 'Deepline Tunnelling', rating: '4.9', users: '860K', perms: ['profile', 'feed'],
      tagline: 'How far has she dug today?',
      about: 'TBM Tracker follows a fictional tunnel boring machine on her drive under a city: rings built, metres dug, the day’s best shift and the countdown to breakthrough. Illustrative figures in this demo.',
      features: ['Rings and metres, day by day', 'Countdown to breakthrough', 'Best shifts', 'Share the progress'],
      shots: ['apps/tbm-tracker/shot-1.jpg', 'apps/tbm-tracker/shot-2.jpg', 'apps/tbm-tracker/shot-3.jpg'],
      version: '3.2', size: '9 KB',
      updates: [ { v: '3.2', ago: 2, notes: 'Countdown to breakthrough.' }, { v: '2.7', ago: 70, notes: 'Best shifts.' }, { v: '2.0', ago: 210, notes: 'Signed in with GENEXXO.' } ],
      reviews: [ { who: '@tunnel_fan_tash', stars: 5, ago: 1, text: 'I check on Margaret every morning.' }, { who: '@yusuf_demir_safety', stars: 5, ago: 15, text: 'My crew love seeing their shift on it.' }, { who: '@ring_builder_rob', stars: 4, ago: 34, text: 'Spot on.' } ] },
    { name: 'Tunnel Quiz', color: '#60A5FA', desc: 'The world’s great tunnels, ten questions a day', key: 'tunnel-quiz', url: 'apps/tunnel-quiz.html',
      dev: 'Subterra Tours', rating: '4.8', users: '540K', perms: ['profile', 'feed'],
      tagline: 'From Brunel to the Gotthard.',
      about: 'Tunnel Quiz asks about real tunnels: the Thames Tunnel, the Channel Tunnel, the Gotthard and more. Ten questions a day, with the story behind each answer.',
      features: ['Ten questions a day', 'The story behind each answer', 'Your best score', 'Share your score'],
      shots: ['apps/tunnel-quiz/shot-1.jpg', 'apps/tunnel-quiz/shot-2.jpg', 'apps/tunnel-quiz/shot-3.jpg'],
      version: '2.2', size: '9 KB',
      updates: [ { v: '2.2', ago: 3, notes: 'Stories behind each answer.' }, { v: '1.8', ago: 85, notes: 'More tunnels.' }, { v: '1.2', ago: 230, notes: 'Signed in with GENEXXO.' } ],
      reviews: [ { who: '@ken_walsh_tunnels', stars: 5, ago: 2, text: 'I wrote some of these. Still got one wrong.' }, { who: '@tunnel_fan_tash', stars: 5, ago: 20, text: 'The kids are hooked.' }, { who: '@ring_builder_rob', stars: 4, ago: 41, text: 'Good fun on the bus.' } ] },
    { name: 'Gas Check', color: '#9CA3AF', desc: 'Pre-entry checks for confined spaces', key: 'gas-check', url: 'apps/gas-check.html',
      dev: 'Shaftsafe', rating: '4.8', users: '380K', perms: ['profile', 'feed'],
      tagline: 'Test before you enter.',
      about: 'Gas Check records the readings from your gas detector before anyone goes underground: oxygen, flammable gas, carbon monoxide and hydrogen sulphide, checked against the usual alarm levels. A record, not a replacement for training or your site’s rules.',
      features: ['Four-gas check', 'Pass or stop, at a glance', 'A log of every entry', 'Share a safe week'],
      shots: ['apps/gas-check/shot-1.jpg', 'apps/gas-check/shot-2.jpg', 'apps/gas-check/shot-3.jpg'],
      version: '4.0', size: '9 KB',
      updates: [ { v: '4.0', ago: 1, notes: 'A log of every entry.' }, { v: '3.4', ago: 60, notes: 'Hydrogen sulphide.' }, { v: '2.6', ago: 190, notes: 'Signed in with GENEXXO.' } ],
      reviews: [ { who: '@yusuf_demir_safety', stars: 5, ago: 3, text: 'Every entry recorded. Exactly right.' }, { who: '@ring_builder_rob', stars: 5, ago: 22, text: 'Quick to fill in, gloves and all.' }, { who: '@fiona_macleod_geo', stars: 4, ago: 47, text: 'Good habit-builder.' } ] }
  ],
  pros: [
    { key: 'yusuf-demir-safety', name: 'Yusuf Demir Tunnel Safety', color: '#FBBF24', tag: 'Underground and confined-space safety training', role: 'Tunnel safety trainer',
      img: U('1672748341520-6a839e6c05bb', 800, 800), base: 'London, UK · and on site', langs: 'English, Turkish', years: 21, rating: '4.9', reviewsN: 318, cur: '£',
      creds: ['Fifteen years on tunnel crews', 'Confined-space rescue instructor', 'Chartered safety practitioner'],
      about: 'Yusuf worked on London’s railway tunnels before he started training crews. His courses cover confined spaces, gas testing and underground rescue, taught in a real shaft.',
      services: [ { id: 'confined', name: 'Confined-space entry course', dur: 'One day', price: 240, desc: 'Per person, with a practical test.' },
                  { id: 'rescue', name: 'Underground rescue course', dur: 'Two days', price: 460, desc: 'Escape sets and casualty recovery.' },
                  { id: 'induction', name: 'Site induction design', dur: 'One week', price: 1800, desc: 'Your tunnel’s induction, written.' } ],
      avail: { days: [1, 2, 3, 4], times: ['07:30', '13:00'] },
      reviews: [ { who: '@ring_builder_rob', stars: 5, ago: 2, text: 'The best training I’ve had in twenty years.' }, { who: '@fiona_macleod_geo', stars: 5, ago: 26, text: 'Calm, serious and practical.' }, { who: '@tunnel_fan_tash', stars: 5, ago: 50, text: 'Took my son’s apprentice group. They loved it.' } ],
      posts: [ { ago: 1, text: 'Test the air before you enter, and keep testing while you’re down there. Gas doesn’t send a warning.' } ],
      tier: 'Pro Zone', verified: true },
    { key: 'fiona-macleod-geo', name: 'Dr Fiona MacLeod Ground Engineering', color: '#60A5FA', tag: 'Geotechnical advice and ground investigation', role: 'Geotechnical engineer',
      img: U('1716037991590-c975184b37df', 800, 800), base: 'Edinburgh, UK · and online', langs: 'English, Gaelic', years: 17, rating: '4.9', reviewsN: 184, cur: '£',
      creds: ['PhD in rock mechanics', 'Chartered engineer', 'Worked on hydro and rail tunnels'],
      about: 'Fiona reads the ground before anyone digs: boreholes, rock and groundwater. She advises tunnel teams, and mentors young engineers who want to work underground.',
      services: [ { id: 'review', name: 'Ground report review', dur: 'One week', price: 1200, desc: 'Your site investigation, checked.' },
                  { id: 'mentor', name: 'Career mentoring', dur: '60 minutes', price: 60, desc: 'For graduates and career changers.' },
                  { id: 'talk', name: 'School talk: what’s under our feet', dur: '60 minutes', price: 150, desc: 'For classes and clubs.' } ],
      avail: { days: [1, 2, 3, 4, 5], times: ['10:00', '14:00', '18:00'] },
      reviews: [ { who: '@ring_builder_rob', stars: 5, ago: 4, text: 'Her ground notes saved us a week.' }, { who: '@tunnel_fan_tash', stars: 5, ago: 31, text: 'My daughter wants to be a geologist now.' }, { who: '@yusuf_demir_safety', stars: 5, ago: 56, text: 'Knows the ground like no one else.' } ],
      posts: [ { ago: 2, text: 'London clay is a tunneller’s dream: soft enough to dig, firm enough to stand. Most of the Tube runs through it.' } ],
      tier: 'Pro Zone', verified: true },
    { key: 'ken-walsh-tunnels', name: 'Ken Walsh Tunnel History Walks', color: '#9CA3AF', tag: 'Guided walks and talks on tunnel history', role: 'Tunnel historian',
      img: U('1566761284295-af58908238bb', 800, 800), base: 'Liverpool, UK', langs: 'English', years: 35, rating: '5.0', reviewsN: 422, cur: '£',
      creds: ['Thirty years as a railway engineer', 'Author of two local history books', 'Volunteer at Liverpool’s heritage tunnels'],
      about: 'Ken spent his career keeping Victorian railway tunnels safe. Now he leads walks and gives talks on the tunnels under Liverpool and the people who dug them.',
      services: [ { id: 'walk', name: 'Liverpool tunnels walk', dur: '2 hours', price: 18, desc: 'Per person, rain or shine.' },
                  { id: 'talk', name: 'Talk for your group', dur: '60 minutes', price: 120, desc: 'Slides, stories and questions.' },
                  { id: 'private', name: 'Private family walk', dur: '2 hours', price: 90, desc: 'Up to eight people.' } ],
      avail: { days: [3, 5, 6, 0], times: ['10:30', '14:00'] },
      reviews: [ { who: '@tunnel_fan_tash', stars: 5, ago: 1, text: 'Two hours flew by. What a storyteller.' }, { who: '@ring_builder_rob', stars: 5, ago: 24, text: 'Took my dad. He still talks about it.' }, { who: '@fiona_macleod_geo', stars: 5, ago: 52, text: 'History told by an engineer.' } ],
      posts: [ { ago: 3, text: 'The first tunnel ever dug under a navigable river opened beneath the Thames in 1843. It took eighteen years to dig.' } ],
      tier: 'Pro Zone', verified: true }
  ],
  communities: [
    { key: 'tunnel-fans', name: 'Tunnel Fans', domain: 'fans.tunnelxx.com', color: '#FBBF24', img: U('1672571053794-6a44d8f45034', 900, 500),
      scope: 'Global', where: 'Under every city', members: 228000, online: 2740, tagline: 'Long live the underground.',
      about: 'People who love tunnels: breakthroughs, boring machines and their names, abandoned railways, history and the crews who build them.',
      rules: ['No trespassing photos', 'Credit your photos', 'Beginners’ questions welcome'],
      mods: ['@tunnel_fan_tash', '@ring_builder_rob'],
      threads: [ { t: 'Breakthrough day: who watched it live?', by: '@tunnel_fan_tash', tag: 'BREAKTHROUGH', replies: 1640, ago: 0, votes: 3020 }, { t: 'Why are boring machines named after women?', by: '@ring_builder_rob', tag: 'HISTORY', replies: 860, ago: 1, votes: 1880 }, { t: 'Most beautiful tunnel portal', by: '@tunnel_fan_tash', tag: 'PHOTOS', replies: 720, ago: 2, votes: 1460 }, { t: 'What it’s really like on a tunnel crew', by: '@ring_builder_rob', tag: 'CAREERS', replies: 940, ago: 3, votes: 2120 } ],
      events: [ { title: 'St Barbara’s Day: live chat with tunnellers', day: 10, time: '19:00', where: 'Online' }, { title: 'Tunnel history night: the Thames Tunnel', day: 21, time: '19:30', where: 'Online' } ] },
    { key: 'london-underground-club', name: 'London Below', domain: 'london.tunnelxx.com', color: '#60A5FA', img: U('1788871639951-620d50667196', 900, 500),
      scope: 'Local', where: 'London', members: 2680, online: 58, tagline: 'The city under the city.',
      about: 'Engineers, tunnellers, history buffs and Tube fans in a city with more tunnels than anywhere in Britain. Talks, walks and a pint after.',
      rules: ['Never go where you shouldn’t', 'No security details', 'Be kind to newcomers'],
      mods: ['@yusuf_demir_safety', '@tunnel_fan_tash'],
      threads: [ { t: 'December talk: how a Tube tunnel gets built', by: '@yusuf_demir_safety', tag: 'TALK', replies: 66, ago: 0, votes: 140 }, { t: 'Walk: London’s lost railway tunnels', by: '@tunnel_fan_tash', tag: 'WALK', replies: 50, ago: 1, votes: 104 }, { t: 'Who’s hiring tunnel apprentices?', by: '@yusuf_demir_safety', tag: 'JOBS', replies: 34, ago: 2, votes: 72 } ],
      events: [ { title: 'Talk: how a Tube tunnel gets built', day: 8, time: '19:00', where: 'London' }, { title: 'Walk: London’s lost railway tunnels', day: 18, time: '11:00', where: 'London' } ] }
  ],
  feed: [
    { av: 'TX', avBg: HIVIS, author: 'TunnelXX Editorial', sub: 'Featured · Just now', badge: '★ FEATURED',
      text: 'Railways, water mains, power cables and roads: the hidden world under our feet. Watch the machines, meet the crews, learn the history. Tunnels, all in one place.',
      img: U('1672571055011-8c74bf640894', 800, 600), eng: '♡ 31.2K · 💬 2.6K · ↗ 3.8K' },
    { av: 'TT', avBg: DEEP, author: '@tunnel_fan_tash', sub: 'Boring Machines · Just now', badge: 'COMMUNITY',
      text: 'Got to see a boring machine’s cutter head before it went underground. Taller than a house, and she’s called Margaret after the site manager’s gran 🚇',
      img: U('1672571053852-81881fdc5800', 800, 600), eng: '♡ 10.6K · 💬 1.2K · ↗ 620' },
    { av: 'DT', avBg: HIVIS, author: 'Deepline Tunnelling', sub: 'Founding Partner · Brand Zone', badge: 'BRAND ZONE',
      text: 'Live now: breakthrough day. After fourteen months and 6.2 kilometres under the city, our boring machine <b>Margaret</b> is about to cut into daylight.',
      img: U('1521216706186-4d37debe7cb9', 800, 600), eng: '♡ 24.8K · 💬 3.0K · ↗ 3.6K' },
    { av: 'LW', avBg: LAMP, author: 'Lampwright', sub: 'Brand Zone · 1h ago', badge: 'BRAND ZONE',
      text: 'When the only light is the one you brought. The <b>Lampwright Shift Torch</b> lasts a twelve-hour shift.',
      img: U('1679750184902-5992e3445eed', 800, 600), eng: '♡ 6.4K · 💬 420 · ↗ 510' },
    { av: 'RB', avBg: CONCRETE, author: '@ring_builder_rob', sub: 'Careers · 2h ago', badge: 'COMMUNITY',
      text: 'Night shift done: twelve rings built, six segments each. The tunnel’s a bit longer than it was this morning, and I helped.',
      img: U('1623411902459-d1f809a0908d', 800, 600), eng: '♡ 8.8K · 💬 760 · ↗ 360' },
    { av: 'ST', avBg: CONCRETE, author: 'Subterra Tours', sub: 'Brand Zone · 4h ago', badge: 'BRAND ZONE',
      text: 'A finished tunnel, before the trains arrive. Walk it yourself on a <b>Subterra Hard-Hat Tour</b>.',
      img: U('1467841957672-77f08ccd982b', 800, 600), eng: '♡ 5.6K · 💬 380 · ↗ 440' },
    { av: 'KW', avBg: CONCRETE, author: 'Ken Walsh Tunnel History Walks', sub: 'History · 6h ago', badge: 'PRO ZONE',
      text: 'Old rails, rough rock and 150 years of stories. Saturday’s walk visits three of Liverpool’s oldest tunnels.',
      img: U('1736664031253-d3581dbd9d07', 800, 600), eng: '♡ 3.2K · 💬 210 · ↗ 260' }
  ],
  prompts: ['How does a tunnel boring machine work?', 'Why are tunnel boring machines named after women?', 'How do I get a job in tunnelling?', 'Where can I go on a tunnel tour?'],
  businesses: ['segmentcast', 'groundtruth-surveys']
};

/* the four Brand Zones and two Business Zones */
const brand = (o) => Object.assign({ kind: 'brand', gw: 'tunnel', verified: true }, o);
Object.assign(ZONES, {
  'deepline-tunnelling': brand({ key: 'deepline-tunnelling', name: 'Deepline Tunnelling', color: '#FBBF24', gradient: HIVIS, tier: 'Founding Partner',
    tagline: 'Tunnel boring for railways, water and power', stats: { followers: '286K', content: '640', products: '8' },
    ad: { badge: 'Featured', img: U('1542577195-d562c6698ff3', 760, 760), hl: 'We dig, the city flows.', sub: 'Tunnels for railways, water and power.', meta: 'Projects from £2M' },
    products: [
      { name: 'Deepline Boring Machine Hire', price: 'From £180,000 / month', tag: 'FLAGSHIP', emoji: '🚇', rating: 4.8, reviews: 140, cat: 'machines', special: true, desc: 'A refurbished boring machine with crew, for 3 to 8 metre tunnels.', features: ['Our crew runs it', 'Refurbished between jobs'], review: { who: 'Fiona M.', text: 'Handled mixed ground beautifully.' } },
      { name: 'Micro-Tunnel Service', price: 'From £95,000', tag: 'BESTSELLER', emoji: '🔧', rating: 4.8, reviews: 260, cat: 'services', desc: 'Small tunnels for pipes and cables, under roads without digging them up.', features: ['No road closures'], review: { who: 'Rob H.', text: 'Under a dual carriageway, no one noticed.' } },
      { name: 'Tunnel Inspection', price: 'From £4,800', emoji: '🔦', rating: 4.7, reviews: 320, cat: 'services', desc: 'A survey of an old tunnel’s lining, by people and scanners.', features: ['Report in two weeks'], review: { who: 'Ken W.', text: 'Thorough and respectful of the old brickwork.' } },
      { name: 'Breakthrough Print', price: '£25', tag: 'SPECIAL', emoji: '🖼️', rating: 4.9, reviews: 1460, cat: 'shop', special: true, desc: 'A print of Margaret’s breakthrough, for fans and crews.', features: ['Signed by the crew'], review: { who: 'Tash P.', text: 'On my wall already.' } }
    ],
    shopCats: [ { key: 'machines', label: 'Machines', icon: '🚇' }, { key: 'services', label: 'Services', icon: '🔧' }, { key: 'shop', label: 'Shop', icon: '🖼️' } ],
    feed: [
      { type: 'post', sub: 'Brand post · 2h', text: 'Looking up the shaft the night before breakthrough, as the crane lowers the last rings.', img: U('1625082299956-faa4f627834b', 800, 440), eng: '♡ 24.8K · 💬 3.0K · ↗ 3.6K', product: 0 },
      { type: 'post', sub: 'Shaft · Yesterday', text: 'Looking down the launch shaft where Margaret started her drive. Fourteen months ago it was a car park. The <b>Breakthrough Print</b> is out today.', img: U('1754926916005-0143b1378afe', 800, 440), eng: '♡ 7.4K · 💬 460', product: 3 },
      { type: 'community', who: 'Tash P.', whoBg: DEEP, sub: 'Community · 1d', text: 'What happens to the boring machine after breakthrough?', eng: '♡ 640 · 💬 210', reply: 'Hi Tash! Margaret will be taken apart in the reception shaft, lifted out in pieces and refurbished for her next tunnel. Some machines are left underground, but we bring ours home. 🚇' }
    ],
    events: [ { zoneEvent: true, tag: 'LIVE', title: 'Deepline Live · breakthrough day', when: 'Live now', desc: 'Watch Margaret cut into daylight after 6.2 kilometres underground.', registered: 9860, capacity: 25000 } ],
    about: { founded: 'Ashford · 1994', story: 'A tunnelling crew that grew into a contractor, still run by people who started at the face. We joined TunnelXX as Founding Partner because tunnels deserve fans.', milestones: [['1994', 'Founded'], ['2015', 'The first boring machine'], ['2026', 'Founding Partner on TunnelXX']], values: ['Everyone home safe', 'Machines refurbished, not scrapped', 'Apprentices on every drive'] } }),

  'lampwright': brand({ key: 'lampwright', name: 'Lampwright', color: '#FDE68A', gradient: LAMP, tier: 'Brand Zone',
    tagline: 'Head torches and work lights for dark places', stats: { followers: '84.2K', content: '310', products: '28' },
    ad: { badge: 'Gift', img: U('1614699160211-ab5ac10f9763', 760, 760), hl: 'Light for the long shift.', sub: 'Head torches and lights that last.', meta: 'From £19' },
    products: [
      { name: 'Lampwright Shift Torch', price: '£69', tag: 'FLAGSHIP', emoji: '🔦', rating: 4.8, reviews: 2860, cat: 'torches', special: true, desc: 'A head torch that lasts a twelve-hour shift.', features: ['Fits any hard hat', 'Waterproof'], review: { who: 'Rob H.', text: 'Never died on me underground.' } },
      { name: 'Site Floodlight', price: '£149', tag: 'BESTSELLER', emoji: '💡', rating: 4.7, reviews: 1240, cat: 'site', desc: 'A rechargeable floodlight for shafts and sites.', features: ['Eight hours on full'], review: { who: 'Yusuf D.', text: 'Bright and tough.' } },
      { name: 'Walker’s Head Torch', price: '£29', emoji: '🥾', rating: 4.7, reviews: 1860, cat: 'torches', desc: 'Light and bright, for walks and caves.', features: ['Red night mode'], review: { who: 'Ken W.', text: 'What I hand out on my walks.' } },
      { name: 'Spare Battery Pack', price: '£19', tag: 'SPECIAL', emoji: '🔋', rating: 4.6, reviews: 960, cat: 'torches', special: true, desc: 'Swap in seconds, gloves on.', features: ['USB-C'], review: { who: 'Fiona M.', text: 'Always in my pocket.' } }
    ],
    shopCats: [ { key: 'torches', label: 'Torches', icon: '🔦' }, { key: 'site', label: 'Site lights', icon: '💡' } ],
    feed: [ { type: 'post', sub: 'Brand post · 1h', text: 'One beam, one long tunnel. The <b>Shift Torch</b> lights it all the way.', img: U('1638741015176-8f280df193f8', 800, 440), eng: '♡ 6.4K · 💬 420', product: 0 } ],
    events: [ { zoneEvent: true, tag: 'SALE', title: 'Black Friday: 25% off torches', when: 'Nov 27 · All day', desc: 'A quarter off every head torch, one day only.', registered: 1340, capacity: 4000 } ],
    about: { founded: 'Barnsley · 1998', story: 'Made by the family of a miner who wanted a lamp that never let you down.', milestones: [['1998', 'The first lamp'], ['2019', 'The Shift Torch'], ['2026', 'Brand Zone on TunnelXX']], values: ['Built for the dark', 'Repairable', 'Made in Yorkshire'] } }),

  'shaftsafe': brand({ key: 'shaftsafe', name: 'Shaftsafe', color: '#60A5FA', gradient: DEEP, tier: 'Brand Zone',
    tagline: 'Gas detectors and rescue kit for underground work', stats: { followers: '46.8K', content: '210', products: '36' },
    ad: { badge: 'Featured', img: U('1714562377019-e6d03ea94ba2', 760, 760), hl: 'Know the air.', sub: 'Gas detectors for every crew.', meta: 'From £39' },
    products: [
      { name: 'Shaftsafe Four-Gas Detector', price: '£449', tag: 'FLAGSHIP', emoji: '📟', rating: 4.8, reviews: 960, cat: 'detectors', special: true, desc: 'Oxygen, flammable gas, carbon monoxide and hydrogen sulphide, all in one.', features: ['Loud alarm and vibration', 'Bump-test dock'], review: { who: 'Yusuf D.', text: 'The one I train with.' } },
      { name: 'Escape Set', price: '£289', tag: 'BESTSELLER', emoji: '😷', rating: 4.8, reviews: 540, cat: 'rescue', desc: 'Fifteen minutes of breathable air to get out.', features: ['Belt-worn'], review: { who: 'Rob H.', text: 'Never needed it. Never without it.' } },
      { name: 'Tripod and Winch', price: 'From £1,850', emoji: '🪝', rating: 4.7, reviews: 180, cat: 'rescue', desc: 'For safe entry to shafts and manholes.', features: ['Fits in a van'], review: { who: 'Fiona M.', text: 'Solid kit.' } },
      { name: 'Calibration Gas', price: '£39', tag: 'SPECIAL', emoji: '🧪', rating: 4.6, reviews: 420, cat: 'detectors', special: true, desc: 'Keeps your detector honest.', features: ['Two-year shelf life'], review: { who: 'Ken W.', text: 'Essential.' } }
    ],
    shopCats: [ { key: 'detectors', label: 'Detectors', icon: '📟' }, { key: 'rescue', label: 'Rescue', icon: '🪝' } ],
    feed: [ { type: 'post', sub: 'Brand post · 1d', text: 'Down the ladder, detector clipped on. The <b>Four-Gas Detector</b> goes everywhere the crew goes.', img: U('1751054824448-749f467ffc4f', 800, 440), eng: '♡ 3.8K · 💬 240', product: 0 } ],
    events: [ { zoneEvent: true, tag: 'EVENT', title: 'Webinar: gas testing done right', when: 'Dec 2 · 12:30', desc: 'Bump tests, calibration and alarms, with live Q&A.', registered: 560, capacity: 1500 } ],
    about: { founded: 'Chesterfield · 2006', story: 'Mine-rescue veterans who build the kit they wish they’d had.', milestones: [['2006', 'The first detector'], ['2018', 'Escape Set'], ['2026', 'Brand Zone on TunnelXX']], values: ['Everyone home safe', 'Free calibration reminders', 'Training with every order'] } }),

  'subterra-tours': brand({ key: 'subterra-tours', name: 'Subterra Tours', color: '#9CA3AF', gradient: CONCRETE, tier: 'Brand Zone',
    tagline: 'Hard-hat tours of tunnels old and new', stats: { followers: '112K', content: '380', products: '14' },
    ad: { badge: 'New', img: U('1509689266740-ecc1b3c3de2a', 760, 760), hl: 'Go underground.', sub: 'Tours of tunnels you’d never otherwise see.', meta: 'From £24' },
    products: [
      { name: 'Subterra Hard-Hat Tour', price: '£45', tag: 'FLAGSHIP', emoji: '⛑️', rating: 4.9, reviews: 3860, cat: 'tours', special: true, desc: 'Walk a brand-new tunnel before it opens, with an engineer.', features: ['Hard hat and boots provided', 'Ages 12 and up'], review: { who: 'Tash P.', text: 'The best two hours of my year.' } },
      { name: 'Victorian Tunnels Walk', price: '£24', tag: 'BESTSELLER', emoji: '🧱', rating: 4.8, reviews: 2240, cat: 'tours', desc: 'Old railway and canal tunnels, with a historian.', features: ['Family friendly'], review: { who: 'Ken W.', text: 'Our best seller for a reason.' } },
      { name: 'Gift Voucher', price: '£45', emoji: '🎁', rating: 4.9, reviews: 1460, cat: 'gifts', desc: 'A hard-hat tour, gift-wrapped.', features: ['Valid for a year'], review: { who: 'Rob H.', text: 'Dad loved it.' } },
      { name: 'School Trip', price: '£12 / pupil', tag: 'SPECIAL', emoji: '🏫', rating: 4.9, reviews: 640, cat: 'tours', special: true, desc: 'A tour and workshop for classes.', features: ['Lesson plans included'], review: { who: 'Fiona M.', text: 'My nephew’s class came back buzzing.' } }
    ],
    shopCats: [ { key: 'tours', label: 'Tours', icon: '⛑️' }, { key: 'gifts', label: 'Gifts', icon: '🎁' } ],
    feed: [ { type: 'post', sub: 'Brand post · 4h', text: 'Concrete, quiet and endless. Walk it before the trains do on a <b>Hard-Hat Tour</b>.', img: U('1648842014403-f29110567a52', 800, 440), eng: '♡ 5.6K · 💬 380', product: 0 } ],
    events: [ { zoneEvent: true, tag: 'SALE', title: 'Black Friday: two tours for one', when: 'Nov 27 · All day', desc: 'Book one hard-hat tour, bring a friend free.', registered: 1820, capacity: 4000 } ],
    about: { founded: 'London · 2014', story: 'Engineers who couldn’t stop telling their friends about the tunnels they’d built.', milestones: [['2014', 'The first tour'], ['2022', 'School trips'], ['2026', 'Brand Zone on TunnelXX']], values: ['Safety first', 'Real engineers as guides', 'History respected'] } }),

  'segmentcast': { key: 'segmentcast', kind: 'business', gw: 'tunnel', name: 'Segmentcast', color: '#9CA3AF', gradient: CONCRETE, img: U('1517089596392-fb9a9033e05b', 900, 500),
    tier: 'Verified', category: 'Precast tunnel segments', tagline: 'The concrete rings every tunnel is built from.',
    about: { founded: 'Sittingbourne · 2002', story: 'We cast the curved concrete segments that boring machines bolt together into rings, for railways, sewers and cable tunnels.' },
    stats: { years: 24, staff: 220, clients: '180 km of tunnel' },
    caps: [ { name: 'Segment casting', detail: 'Steel or fibre reinforced.' }, { name: 'Moulds', detail: 'Any diameter from 2 to 12 metres.' }, { name: 'Delivery', detail: 'Just in time, ring by ring.' } ],
    specs: { moq: 'One tunnel', lead: '3 to 9 months', regions: 'UK and Europe', certs: ['Quality certified', 'Low-carbon concrete option', 'Fully insured'] },
    supplies: [ { kind: 'brand', key: 'deepline-tunnelling', what: 'Every segment in Margaret’s tunnel' } ],
    cases: [ { title: 'Thirty thousand segments', text: 'A 6 km railway tunnel, delivered on time.' } ],
    feed: [ { sub: 'Yard · 3d', text: 'The last ring for Margaret’s drive, cured and loaded.' } ],
    contact: { person: 'Grace Nwachukwu, Projects', response: 'Replies within two working days' } },

  'groundtruth-surveys': { key: 'groundtruth-surveys', kind: 'business', gw: 'tunnel', name: 'Groundtruth Surveys', color: '#60A5FA', gradient: DEEP, img: U('1603814929877-d5d927322656', 900, 500),
    tier: 'Verified', category: 'Ground investigation', tagline: 'Know the ground before you dig.',
    about: { founded: 'Glasgow · 2010', story: 'We drill boreholes, test soil and rock, and monitor buildings above tunnels as they are dug.' },
    stats: { years: 16, staff: 110, clients: '1,400 sites' },
    caps: [ { name: 'Boreholes', detail: 'Up to 150 metres deep.' }, { name: 'Lab testing', detail: 'Soil, rock and water.' }, { name: 'Monitoring', detail: 'Every building above the tunnel.' } ],
    specs: { moq: 'One borehole', lead: '1 to 6 weeks', regions: 'UK', certs: ['Accredited laboratory', 'Independently audited', 'Fully insured'] },
    supplies: [ { kind: 'brand', key: 'deepline-tunnelling', what: 'Ground monitoring along Margaret’s route' } ],
    cases: [ { title: 'Not a crack', text: 'Four hundred buildings watched as a tunnel passed beneath.' } ],
    feed: [ { sub: 'Site · 5d', text: 'New boreholes for a water tunnel in the Highlands.' } ],
    contact: { person: 'Callum Reid, Investigations', response: 'Replies within one working day' } }
});

/* events in the Events tab */
gxEvents('tunnel', [
  { gw: 'tunnel', zone: 'deepline-tunnelling', type: 'Live', icon: '🔴', live: true, time: 'Live Now', title: 'Deepline Live · breakthrough day', desc: 'Watch Margaret cut into daylight after 6.2 kilometres underground.' },
  { gw: 'tunnel', zone: 'lampwright', type: 'Sale', icon: '🔦', time: 'Nov 27', title: 'Lampwright Black Friday', desc: '25% off every head torch.' },
  { gw: 'tunnel', zone: 'subterra-tours', type: 'Sale', icon: '⛑️', time: 'Nov 27', title: 'Subterra Black Friday', desc: 'Two hard-hat tours for the price of one.' },
  { gw: 'tunnel', zone: 'shaftsafe', type: 'Event', icon: '📟', time: 'Dec 2', title: 'Webinar: gas testing done right', desc: 'Bump tests, calibration and alarms, with Shaftsafe.' },
  { gw: 'tunnel', type: 'Event', icon: '🎤', time: 'Dec 2', title: 'Talk: how a Tube tunnel gets built, London', desc: 'London Below hears from a tunnel engineer.' },
  { gw: 'tunnel', type: 'Event', icon: '⛪', time: 'Dec 4', title: 'St Barbara’s Day: live chat with tunnellers', desc: 'Tunnel Fans marks the tunnellers’ patron saint’s day with the crews.' },
  { gw: 'tunnel', type: 'Event', icon: '🚶', time: 'Dec 12', title: 'Walk: London’s lost railway tunnels', desc: 'London Below explores the city’s forgotten tunnels.' },
  { gw: 'tunnel', type: 'Event', icon: '📜', time: 'Dec 15', title: 'Tunnel history night: the Thames Tunnel', desc: 'Tunnel Fans on the first tunnel ever dug under a navigable river.' }
]);
})();
/* ═════════ /TUNNELXX ═════════ */
