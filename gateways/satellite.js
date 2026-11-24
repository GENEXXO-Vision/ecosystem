/* ═════════ SATELLITEXX — a Space demo gateway (2026-11-24, Sean; build -95) ═════════
   Built with the _tools/README.md recipe. Palette (dark): deep space, indigo, signal cyan.
   Home sector: Space (GW_HOME already says so; it is also listed in Defense, so 'space' is in HOME_ONLY in liveBand()).
   Every operator, maker, pro and product is fictional; places and the physics are real. Pass times, launches and
   prices are illustrative. */
(function(){
const U = (id, w, h) => `https://images.unsplash.com/photo-${id}?w=${w}&h=${h}&fit=crop&q=75`;
const ORBIT = 'linear-gradient(135deg,#818CF8,#312E81)', SIGNAL = 'linear-gradient(135deg,#22D3EE,#0E7490)', DEEP = 'linear-gradient(135deg,#334155,#070B1A)', SOLAR = 'linear-gradient(135deg,#FBBF24,#B45309)';

GATEWAYS.satellite = {
  name: 'SatelliteXX', domain: 'satellitexx.com', emoji: '🛰️', sector: 'space', live: true,
  tagline: 'The Satellite Universe',
  theme: {
    bg: '#070B1A', text: '#E6E9F5', cardBg: 'rgba(255,255,255,.045)', cardBorder: 'rgba(230,233,245,.09)',
    headerBg: 'linear-gradient(180deg,#11173A,#070B1A)', accent: '#818CF8', accentAlt: '#22D3EE', dark: true
  },
  gradient: 'linear-gradient(135deg,#070B1A,#312E81,#22D3EE)',
  stats: { members: '1.4M', brands: '700+', agents: '28' },
  spaces: ['All Feed', 'Spotting', 'Launches', 'Earth from Orbit', 'Ground Stations', 'Careers'],
  trending: ['#SatellitePass', '#LaunchNight', '#EarthFromOrbit'],
  brandZones: [
    { key: 'orbitra', name: 'Orbitra', color: '#818CF8', tier: 'Founding Partner', tag: 'Broadband from low Earth orbit' },
    { key: 'clearorbit-imaging', name: 'Clearorbit Imaging', color: '#22D3EE', tier: 'Brand Zone', tag: 'Fresh Earth images for farms, cities and you' },
    { key: 'nightpass-optics', name: 'Nightpass Optics', color: '#FBBF24', tier: 'Brand Zone', tag: 'Binoculars and trackers for satellite spotting' },
    { key: 'groundlink-kits', name: 'Groundlink Kits', color: '#94A3B8', tier: 'Brand Zone', tag: 'Build your own satellite ground station' }
  ],
  apps: [
    { name: 'Pass Predictor', color: '#818CF8', desc: 'Which satellites cross your sky tonight', key: 'pass-predictor', url: 'apps/pass-predictor.html',
      dev: 'Nightpass Optics', rating: '4.9', users: '1.8M', perms: ['profile', 'feed'],
      tagline: 'Look up at the right moment.',
      about: 'Pass Predictor lists tonight’s brightest satellite passes over your town: when to look, which direction and how bright. Get a reminder before the space station flies over. Illustrative times in this demo.',
      features: ['Tonight’s bright passes', 'Where to look', 'Reminders', 'Log what you saw'],
      shots: ['apps/pass-predictor/shot-1.jpg', 'apps/pass-predictor/shot-2.jpg', 'apps/pass-predictor/shot-3.jpg'],
      version: '4.1', size: '10 KB',
      updates: [ { v: '4.1', ago: 2, notes: 'Log what you saw.' }, { v: '3.5', ago: 75, notes: 'Reminders.' }, { v: '2.8', ago: 220, notes: 'Signed in with GENEXXO.' } ],
      reviews: [ { who: '@passes_with_pia', stars: 5, ago: 1, text: 'Showed my kids the space station from the garden. They screamed.' }, { who: '@graham_hale_radio', stars: 5, ago: 16, text: 'Accurate and simple.' }, { who: '@dish_dad_dev', stars: 4, ago: 34, text: 'The reminders are the killer feature.' } ] },
    { name: 'Orbit School', color: '#22D3EE', desc: 'How satellites stay up, in ten minutes a day', key: 'orbit-school', url: 'apps/orbit-school.html',
      dev: 'Clearorbit Imaging', rating: '4.8', users: '620K', perms: ['profile', 'feed'],
      tagline: 'Falling, and always missing.',
      about: 'Orbit School explains low, medium and geostationary orbits with a lesson and a quiz a day: why satellites don’t fall down, how long an orbit takes and what each orbit is for.',
      features: ['Three orbits explained', 'A quiz a day', 'Orbit calculator', 'Share your score'],
      shots: ['apps/orbit-school/shot-1.jpg', 'apps/orbit-school/shot-2.jpg', 'apps/orbit-school/shot-3.jpg'],
      version: '2.3', size: '9 KB',
      updates: [ { v: '2.3', ago: 3, notes: 'Orbit calculator.' }, { v: '1.9', ago: 90, notes: 'Geostationary lesson.' }, { v: '1.3', ago: 240, notes: 'Signed in with GENEXXO.' } ],
      reviews: [ { who: '@elin_sorensen_orbits', stars: 5, ago: 2, text: 'I use it with my A-level class.' }, { who: '@passes_with_pia', stars: 5, ago: 19, text: 'Finally get why the station goes round every 90 minutes.' }, { who: '@space_career_kofi', stars: 4, ago: 41, text: 'Great before an interview.' } ] },
    { name: 'Dish Aligner', color: '#FBBF24', desc: 'Point a dish at a geostationary satellite', key: 'dish-aligner', url: 'apps/dish-aligner.html',
      dev: 'Groundlink Kits', rating: '4.7', users: '410K', perms: ['profile', 'feed'],
      tagline: 'Azimuth, elevation, done.',
      about: 'Dish Aligner works out where to point a dish from your town to a satellite parked over the equator: the compass bearing and the angle above the horizon, worked out from the real geometry.',
      features: ['Bearing and elevation', 'UK towns built in', 'Choose the orbital slot', 'Save your setup'],
      shots: ['apps/dish-aligner/shot-1.jpg', 'apps/dish-aligner/shot-2.jpg', 'apps/dish-aligner/shot-3.jpg'],
      version: '3.0', size: '9 KB',
      updates: [ { v: '3.0', ago: 4, notes: 'Choose the orbital slot.' }, { v: '2.4', ago: 80, notes: 'More towns.' }, { v: '1.8', ago: 210, notes: 'Signed in with GENEXXO.' } ],
      reviews: [ { who: '@dish_dad_dev', stars: 5, ago: 1, text: 'Lined up first time from Aberdeen.' }, { who: '@graham_hale_radio', stars: 5, ago: 22, text: 'The maths is right. I checked.' }, { who: '@passes_with_pia', stars: 4, ago: 45, text: 'Useful for the caravan.' } ] }
  ],
  pros: [
    { key: 'graham-hale-radio', name: 'Graham Hale Satellite Radio', color: '#94A3B8', tag: 'Amateur radio and satellite reception lessons', role: 'Amateur radio tutor',
      img: U('1758685734414-951a86561065', 800, 800), base: 'Glasgow, UK · and online', langs: 'English', years: 30, rating: '4.9', reviewsN: 268, cur: '£',
      creds: ['Full amateur radio licence', 'Retired electronics lecturer', 'Has heard the space station on his own kit'],
      about: 'Graham teaches people to listen to satellites: weather images straight from orbit, voice from the space station and the radio licence that lets you talk back.',
      services: [ { id: 'start', name: 'First satellite signal', dur: '90 minutes', price: 45, desc: 'Receive a weather image together.' },
                  { id: 'licence', name: 'Licence course', dur: 'Six evenings', price: 120, desc: 'Everything for the foundation exam.' },
                  { id: 'station', name: 'Ground station set-up', dur: '2 hours', price: 70, desc: 'Antenna, radio and software, at yours.' } ],
      avail: { days: [1, 3, 4, 6], times: ['10:00', '14:00', '19:00'] },
      reviews: [ { who: '@dish_dad_dev', stars: 5, ago: 3, text: 'My first weather image from orbit. Goosebumps.' }, { who: '@passes_with_pia', stars: 5, ago: 24, text: 'Patient with total beginners.' }, { who: '@space_career_kofi', stars: 5, ago: 49, text: 'Passed my licence first time.' } ],
      posts: [ { ago: 1, text: 'A simple antenna, a cheap radio dongle and a clear pass overhead: that’s all you need to pull a weather picture out of the sky.' } ],
      tier: 'Pro Zone', verified: true },
    { key: 'adaeze-nwosu-careers', name: 'Adaeze Nwosu Space Careers', color: '#22D3EE', tag: 'Careers coaching for the UK space industry', role: 'Space careers coach',
      img: U('1756588534346-e8899364757b', 800, 800), base: 'London, UK · and online', langs: 'English, Igbo', years: 9, rating: '4.9', reviewsN: 196, cur: '£',
      creds: ['Eight years as a satellite operations engineer', 'Mentors graduates and career changers', 'Knows the UK space scene'],
      about: 'Adaeze worked in satellite operations before she started coaching. She helps graduates and career changers find their way into the space industry, which needs far more than rocket scientists.',
      services: [ { id: 'call', name: 'Where do I fit? call', dur: '45 minutes', price: 50, desc: 'Your skills mapped to space jobs.' },
                  { id: 'cv', name: 'CV and application review', dur: '1 week', price: 90, desc: 'Written for the space industry.' },
                  { id: 'mock', name: 'Mock interview', dur: '60 minutes', price: 70, desc: 'Technical and general questions.' } ],
      avail: { days: [1, 2, 3, 4], times: ['09:30', '13:00', '18:30'] },
      reviews: [ { who: '@space_career_kofi', stars: 5, ago: 2, text: 'From accountant to satellite operator in a year.' }, { who: '@passes_with_pia', stars: 5, ago: 26, text: 'Opened my eyes to jobs I didn’t know existed.' }, { who: '@dish_dad_dev', stars: 5, ago: 52, text: 'Brilliant for my daughter.' } ],
      posts: [ { ago: 2, text: 'Space companies hire lawyers, accountants, writers and project managers too. Your way in might not be engineering.' } ],
      tier: 'Pro Zone', verified: true },
    { key: 'elin-sorensen-orbits', name: 'Dr Elin Sørensen Physics Tutoring', color: '#818CF8', tag: 'Physics and orbital mechanics, A-level to degree', role: 'Physics tutor',
      img: U('1758685847747-597ce085906e', 800, 800), base: 'Edinburgh, UK · and online', langs: 'English, Norwegian', years: 18, rating: '4.9', reviewsN: 344, cur: '£',
      creds: ['PhD in astrophysics', 'Former university lecturer', 'Teaches A-level and first-year degree'],
      about: 'Elin makes gravity, orbits and circular motion make sense. She tutors A-level and university students, and anyone who has ever wondered why the Moon doesn’t fall down.',
      services: [ { id: 'lesson', name: 'Tutoring session', dur: '60 minutes', price: 55, desc: 'Any physics topic, online.' },
                  { id: 'revision', name: 'Exam revision block', dur: 'Five sessions', price: 250, desc: 'Past papers and the tricky bits.' },
                  { id: 'talk', name: 'School talk: orbits', dur: '60 minutes', price: 150, desc: 'For classes and clubs.' } ],
      avail: { days: [1, 2, 3, 4, 6], times: ['16:00', '17:30', '19:00'] },
      reviews: [ { who: '@space_career_kofi', stars: 5, ago: 4, text: 'Orbital mechanics finally clicked.' }, { who: '@passes_with_pia', stars: 5, ago: 28, text: 'My son went from a D to an A.' }, { who: '@graham_hale_radio', stars: 5, ago: 54, text: 'Her school talk was superb.' } ],
      posts: [ { ago: 3, text: 'An orbit is just falling sideways fast enough to keep missing the ground. Eight kilometres a second does it.' } ],
      tier: 'Pro Zone', verified: true }
  ],
  communities: [
    { key: 'satellite-spotters', name: 'Satellite Spotters', domain: 'spotters.satellitexx.com', color: '#818CF8', img: U('1528818955841-a7f1425131b5', 900, 500),
      scope: 'Global', where: 'Under every clear sky', members: 318000, online: 4260, tagline: 'Keep looking up.',
      about: 'People who watch satellites cross the night sky: pass alerts, long-exposure photos, flares and the thrill of the space station going over.',
      rules: ['Share your town, not your address', 'Credit your photos', 'Beginners’ questions welcome'],
      mods: ['@passes_with_pia', '@dish_dad_dev'],
      threads: [ { t: 'Tonight’s space station pass: who saw it?', by: '@passes_with_pia', tag: 'PASSES', replies: 1860, ago: 0, votes: 3420 }, { t: 'Satellite trails in my star photos: love or hate?', by: '@dish_dad_dev', tag: 'DEBATE', replies: 920, ago: 1, votes: 1740 }, { t: 'Best binoculars for beginners', by: '@passes_with_pia', tag: 'KIT', replies: 540, ago: 2, votes: 1060 }, { t: 'Your best satellite photo of the year', by: '@dish_dad_dev', tag: 'PHOTOS', replies: 1240, ago: 3, votes: 2860 } ],
      events: [ { title: 'Geminids watch: live chat', day: 19, time: '21:00', where: 'Online' }, { title: 'Beginners’ spotting night', day: 6, time: '19:30', where: 'Online and outside' } ] },
    { key: 'glasgow-space-meetup', name: 'Glasgow Space Meetup', domain: 'glasgow.satellitexx.com', color: '#22D3EE', img: U('1759772082797-6c5fef25a39c', 900, 500),
      scope: 'Local', where: 'Glasgow', members: 1460, online: 34, tagline: 'Europe’s busiest satellite city.',
      about: 'Engineers, students and space fans in a city that builds more small satellites than almost anywhere in Europe. Talks, factory visits and a pint after.',
      rules: ['Everyone welcome, no badge needed', 'No company secrets', 'Be kind to newcomers'],
      mods: ['@graham_hale_radio', '@space_career_kofi'],
      threads: [ { t: 'December talk: how a satellite gets built', by: '@graham_hale_radio', tag: 'TALK', replies: 58, ago: 0, votes: 118 }, { t: 'Who’s hiring in Glasgow?', by: '@space_career_kofi', tag: 'JOBS', replies: 46, ago: 1, votes: 94 }, { t: 'Rooftop spotting night', by: '@graham_hale_radio', tag: 'SPOTTING', replies: 30, ago: 2, votes: 62 } ],
      events: [ { title: 'Talk: how a satellite gets built', day: 8, time: '19:00', where: 'Glasgow' }, { title: 'Christmas rooftop spotting', day: 16, time: '18:30', where: 'Glasgow' } ] }
  ],
  feed: [
    { av: 'SX', avBg: ORBIT, author: 'SatelliteXX Editorial', sub: 'Featured · Just now', badge: '★ FEATURED',
      text: 'Thousands of satellites, quietly running the modern world: weather, maps, broadband, time. Spot them, hear them, learn how they work or build a career among them. Satellites, all in one place.',
      img: U('1446776709462-d6b525c57bd3', 800, 600), eng: '♡ 38.4K · 💬 3.1K · ↗ 4.6K' },
    { av: 'PP', avBg: DEEP, author: '@passes_with_pia', sub: 'Spotting · Just now', badge: 'COMMUNITY',
      text: 'Two hours of star trails from the garden, and three satellites streaking straight through the middle of it. Wouldn’t have it any other way ✨',
      img: U('1768222780460-3cb1027f51e2', 800, 600), eng: '♡ 13.8K · 💬 1.6K · ↗ 920' },
    { av: 'OB', avBg: ORBIT, author: 'Orbitra', sub: 'Founding Partner · Brand Zone', badge: 'BRAND ZONE',
      text: 'Live now: forty new <b>Orbitra</b> satellites unfold their solar panels and wake up, one by one, from mission control.',
      img: U('1708738793054-32b71e3fc822', 800, 600), eng: '♡ 24.2K · 💬 2.8K · ↗ 3.6K' },
    { av: 'CI', avBg: SIGNAL, author: 'Clearorbit Imaging', sub: 'Brand Zone · 1h ago', badge: 'BRAND ZONE',
      text: 'Rivers, fields and roads from 500 kilometres up. A <b>Clearorbit Print</b> of anywhere on Earth, from this month’s images.',
      img: U('1446776899648-aa78eefe8ed0', 800, 600), eng: '♡ 8.8K · 💬 640 · ↗ 760' },
    { av: 'DD', avBg: SIGNAL, author: '@dish_dad_dev', sub: 'Ground Stations · 2h ago', badge: 'COMMUNITY',
      text: 'First night with the new dish in the back garden. Pulled a weather picture straight down from orbit, and my neighbour now thinks I’m a spy 📡',
      img: U('1610457642191-05328cdf34ff', 800, 600), eng: '♡ 10.4K · 💬 1.2K · ↗ 480' },
    { av: 'GK', avBg: DEEP, author: 'Groundlink Kits', sub: 'Brand Zone · 4h ago', badge: 'BRAND ZONE',
      text: 'Big dishes listen to deep space. Ours fit on a shed. The <b>Groundlink Starter Kit</b> hears its first satellite in an evening.',
      img: U('1572224104782-91a08d296390', 800, 600), eng: '♡ 4.6K · 💬 300 · ↗ 380' },
    { av: 'ES', avBg: ORBIT, author: 'Dr Elin Sørensen Physics Tutoring', sub: 'Learn · 6h ago', badge: 'PRO ZONE',
      text: 'Tomorrow’s lesson: why a geostationary satellite sits 35,786 kilometres up, exactly. One orbit a day, matching the Earth’s turn.',
      img: U('1777047023436-35b85bc0412f', 800, 600), eng: '♡ 3.8K · 💬 260 · ↗ 440' }
  ],
  prompts: ['When can I see the space station from my town?', 'How do satellites stay in orbit?', 'How can I receive pictures from weather satellites?', 'How do I get a job in the space industry?'],
  businesses: ['kestrel-space-systems', 'clearpath-orbital']
};

/* the four Brand Zones and two Business Zones */
const brand = (o) => Object.assign({ kind: 'brand', gw: 'satellite', verified: true }, o);
Object.assign(ZONES, {
  'orbitra': brand({ key: 'orbitra', name: 'Orbitra', color: '#818CF8', gradient: ORBIT, tier: 'Founding Partner',
    tagline: 'Broadband from low Earth orbit', stats: { followers: '412K', content: '860', products: '10' },
    ad: { badge: 'Featured', img: U('1777047023536-8e47688b77f9', 760, 760), hl: 'Fast broadband. Anywhere.', sub: 'Satellite broadband for homes far from a cable.', meta: 'From £45 / month' },
    products: [
      { name: 'Orbitra Home Broadband', price: '£45 / month', tag: 'FLAGSHIP', emoji: '🛰️', rating: 4.7, reviews: 9640, cat: 'plans', special: true, desc: 'Fast broadband from low Earth orbit, for homes the cables never reached.', features: ['No contract', 'Set up in an hour'], review: { who: 'Pia L.', text: 'Our farm finally has video calls.' } },
      { name: 'Orbitra Dish Kit', price: 'From £299', tag: 'BESTSELLER', emoji: '📡', rating: 4.7, reviews: 6120, cat: 'kit', desc: 'A flat dish that finds the satellites by itself.', features: ['Snow-melt mode'], review: { who: 'Dev R.', text: 'Plugged in, pointed up, done.' } },
      { name: 'Orbitra Roam', price: '£65 / month', emoji: '🚐', rating: 4.6, reviews: 2240, cat: 'plans', desc: 'Broadband for campervans and boats, across Europe.', features: ['Pause any month'], review: { who: 'Kofi A.', text: 'Worked from a Highland loch.' } },
      { name: 'Mounting Pole', price: '£49', tag: 'SPECIAL', emoji: '🔩', rating: 4.6, reviews: 1460, cat: 'kit', special: true, desc: 'Lifts the dish clear of trees and roofs.', features: ['Wall or ground'], review: { who: 'Graham H.', text: 'Solid. Survived a Glasgow winter.' } }
    ],
    shopCats: [ { key: 'plans', label: 'Plans', icon: '🛰️' }, { key: 'kit', label: 'Kit', icon: '📡' } ],
    feed: [
      { type: 'post', sub: 'Brand post · 2h', text: 'Dawn creeping round the Earth, seen from 550 kilometres up where our satellites work. <b>Home Broadband</b> from right up there.', img: U('1777047023579-5007a6d402bc', 800, 440), eng: '♡ 24.2K · 💬 2.8K · ↗ 3.6K', product: 0 },
      { type: 'post', sub: 'Ground station · Yesterday', text: 'Our ground dishes talk to every satellite as it passes. Yours just needs the <b>Dish Kit</b>.', img: U('1762452136301-cca9fb2e55a8', 800, 440), eng: '♡ 6.8K · 💬 420', product: 1 },
      { type: 'community', who: 'Pia L.', whoBg: DEEP, sub: 'Community · 1d', text: 'Does it work in heavy rain and snow?', eng: '♡ 520 · 💬 140', reply: 'Hi Pia! Heavy rain can slow it a little for a few minutes, and the dish melts snow off itself in snow-melt mode. Most customers never notice the weather at all. 🛰️' }
    ],
    events: [ { zoneEvent: true, tag: 'LIVE', title: 'Orbitra Live · forty new satellites wake up', when: 'Live now', desc: 'Watch from mission control as forty satellites unfold their panels and come online.', registered: 9240, capacity: 25000 } ],
    about: { founded: 'Oxfordshire · 2018', story: 'Engineers who grew up in villages with no broadband. Now a constellation of small satellites and a quarter of a million customers. We joined SatelliteXX as Founding Partner because the people who love satellites are here.', milestones: [['2018', 'Founded'], ['2023', 'First 100 satellites'], ['2026', 'Founding Partner on SatelliteXX']], values: ['Rural homes first', 'Every satellite brought down safely at end of life', 'No contracts'] } }),

  'clearorbit-imaging': brand({ key: 'clearorbit-imaging', name: 'Clearorbit Imaging', color: '#22D3EE', gradient: SIGNAL, tier: 'Brand Zone',
    tagline: 'Fresh Earth images for farms, cities and you', stats: { followers: '88.6K', content: '640', products: '16' },
    ad: { badge: 'New', img: U('1614730321146-b6fa6a46bcb4', 760, 760), hl: 'Your world, from orbit.', sub: 'Fresh satellite images of anywhere.', meta: 'From £29' },
    products: [
      { name: 'Clearorbit Print', price: '£59', tag: 'FLAGSHIP', emoji: '🖼️', rating: 4.9, reviews: 2860, cat: 'prints', special: true, desc: 'Anywhere on Earth from this month’s images, printed large.', features: ['Three sizes', 'Framed or unframed'], review: { who: 'Pia L.', text: 'Our village, from space, over the fireplace.' } },
      { name: 'Field Watch, One Farm', price: '£24 / month', tag: 'BESTSELLER', emoji: '🌾', rating: 4.8, reviews: 960, cat: 'data', desc: 'Weekly crop-health maps of your fields.', features: ['Alerts for problem patches'], review: { who: 'Dev R.', text: 'Spotted a blocked drain from orbit.' } },
      { name: 'Night Lights Print', price: '£49', emoji: '🌃', rating: 4.8, reviews: 1240, cat: 'prints', desc: 'Your city at night, as seen from orbit.', features: ['Matte finish'], review: { who: 'Kofi A.', text: 'Stunning.' } },
      { name: 'Then and Now Pack', price: '£29', tag: 'SPECIAL', emoji: '🕰️', rating: 4.7, reviews: 640, cat: 'prints', special: true, desc: 'Your street ten years ago and today, side by side.', features: ['Digital download'], review: { who: 'Graham H.', text: 'Fascinating to see the change.' } }
    ],
    shopCats: [ { key: 'prints', label: 'Prints', icon: '🖼️' }, { key: 'data', label: 'Data', icon: '🌾' } ],
    feed: [ { type: 'post', sub: 'Brand post · 1h', text: 'A continent at night, every city lit. The <b>Night Lights Print</b>.', img: U('1451187580459-43490279c0fa', 800, 440), eng: '♡ 8.8K · 💬 640', product: 2 } ],
    events: [ { zoneEvent: true, tag: 'SALE', title: 'Black Friday: 30% off prints', when: 'Nov 27 · All day', desc: 'Every print a third off, one day only.', registered: 1420, capacity: 4000 } ],
    about: { founded: 'Guildford · 2014', story: 'A small-satellite imaging company that started selling prints because people kept asking for pictures of their homes.', milestones: [['2014', 'The first images'], ['2021', 'Field Watch'], ['2026', 'Brand Zone on SatelliteXX']], values: ['Fresh images', 'Privacy first: no zooming into gardens', 'Data for farmers'] } }),

  'nightpass-optics': brand({ key: 'nightpass-optics', name: 'Nightpass Optics', color: '#FBBF24', gradient: SOLAR, tier: 'Brand Zone',
    tagline: 'Binoculars and trackers for satellite spotting', stats: { followers: '54.2K', content: '280', products: '30' },
    ad: { badge: 'Gift', img: U('1488866022504-f2584929ca5f', 760, 760), hl: 'The night sky, closer.', sub: 'Binoculars and trackers for spotting satellites.', meta: 'From £35' },
    products: [
      { name: 'Nightpass 10x50 Binoculars', price: '£119', tag: 'FLAGSHIP', emoji: '🔭', rating: 4.8, reviews: 2460, cat: 'optics', special: true, desc: 'Bright, wide binoculars for satellites, stars and the Moon.', features: ['Tripod thread', 'Ten-year warranty'], review: { who: 'Pia L.', text: 'Saw the station’s solar panels glint.' } },
      { name: 'Star Tracker Mount', price: '£249', tag: 'BESTSELLER', emoji: '🌌', rating: 4.8, reviews: 860, cat: 'photo', desc: 'Follows the stars so your long exposures stay sharp.', features: ['Fits any camera'], review: { who: 'Dev R.', text: 'My satellite trails have never been crisper.' } },
      { name: 'Red Head Torch', price: '£35', emoji: '🔦', rating: 4.7, reviews: 1460, cat: 'kit', desc: 'A red light that keeps your night vision.', features: ['USB charging'], review: { who: 'Graham H.', text: 'Every spotter needs one.' } },
      { name: 'Spotter’s Gift Box', price: '£89', tag: 'SPECIAL', emoji: '🎁', rating: 4.9, reviews: 640, cat: 'kit', special: true, desc: 'Small binoculars, a red torch and a sky guide.', features: ['Gift-wrapped'], review: { who: 'Kofi A.', text: 'Bought one for my nephew.' } }
    ],
    shopCats: [ { key: 'optics', label: 'Optics', icon: '🔭' }, { key: 'photo', label: 'Photo', icon: '🌌' }, { key: 'kit', label: 'Kit', icon: '🔦' } ],
    feed: [ { type: 'post', sub: 'Brand post · 1d', text: 'Four hours, one tripod, the whole sky turning. Steady trails with the <b>Star Tracker Mount</b>.', img: U('1768466587836-7f031fd5e632', 800, 440), eng: '♡ 4.2K · 💬 240', product: 1 } ],
    events: [ { zoneEvent: true, tag: 'SALE', title: 'Black Friday: 25% off binoculars', when: 'Nov 27 · All day', desc: 'A quarter off every pair, one day only.', registered: 980, capacity: 3000 } ],
    about: { founded: 'Northumberland · 2012', story: 'Started under some of England’s darkest skies by two astronomers who wanted affordable, honest optics.', milestones: [['2012', 'The first binoculars'], ['2020', 'The Star Tracker'], ['2026', 'Brand Zone on SatelliteXX']], values: ['Honest optics', 'Ten-year warranty', 'Dark skies matter'] } }),

  'groundlink-kits': brand({ key: 'groundlink-kits', name: 'Groundlink Kits', color: '#94A3B8', gradient: DEEP, tier: 'Brand Zone',
    tagline: 'Build your own satellite ground station', stats: { followers: '31.4K', content: '220', products: '22' },
    ad: { badge: 'Featured', img: U('1745697213293-21d6c972ac1a', 760, 760), hl: 'Hear a satellite tonight.', sub: 'Ground-station kits for beginners and clubs.', meta: 'From £39' },
    products: [
      { name: 'Groundlink Starter Kit', price: '£89', tag: 'FLAGSHIP', emoji: '📡', rating: 4.8, reviews: 1460, cat: 'kits', special: true, desc: 'Antenna, radio receiver and guide: receive weather images from orbit.', features: ['No licence needed to listen', 'Works with a laptop'], review: { who: 'Dev R.', text: 'First image in an evening.' } },
      { name: 'Club Ground Station', price: 'From £1,400', tag: 'BESTSELLER', emoji: '🏫', rating: 4.9, reviews: 240, cat: 'kits', desc: 'A tracking antenna for schools and radio clubs.', features: ['Lesson plans included'], review: { who: 'Elin S.', text: 'My students tracked their first satellite.' } },
      { name: 'Turnstile Antenna', price: '£59', emoji: '📶', rating: 4.7, reviews: 640, cat: 'parts', desc: 'An antenna tuned for weather satellites.', features: ['Weatherproof'], review: { who: 'Graham H.', text: 'Well made.' } },
      { name: 'Radio Receiver Dongle', price: '£39', tag: 'SPECIAL', emoji: '🔌', rating: 4.7, reviews: 1860, cat: 'parts', special: true, desc: 'A USB radio for satellites and much more.', features: ['Open-source software'], review: { who: 'Pia L.', text: 'Endless fun for the price.' } }
    ],
    shopCats: [ { key: 'kits', label: 'Kits', icon: '📡' }, { key: 'parts', label: 'Parts', icon: '📶' } ],
    feed: [ { type: 'post', sub: 'Brand post · 4h', text: 'From pros to beginners: our <b>Club Ground Station</b> puts a school in touch with orbit.', img: U('1757594530015-f1a34277d673', 800, 440), eng: '♡ 4.6K · 💬 300', product: 1 } ],
    events: [ { zoneEvent: true, tag: 'EVENT', title: 'Build night: your first ground station', when: 'Dec 3 · 19:00', desc: 'Build a Starter Kit live, then catch a pass together.', registered: 520, capacity: 1500 } ],
    about: { founded: 'Glasgow · 2017', story: 'Radio amateurs who wanted everyone to hear a satellite at least once.', milestones: [['2017', 'The first kit'], ['2023', '200 schools'], ['2026', 'Brand Zone on SatelliteXX']], values: ['Learn by building', 'Open-source software', 'Schools first'] } }),

  'kestrel-space-systems': { key: 'kestrel-space-systems', kind: 'business', gw: 'satellite', name: 'Kestrel Space Systems', color: '#818CF8', gradient: ORBIT, img: U('1759327769172-b6a041f5ed03', 900, 500),
    tier: 'Verified', category: 'Small satellite manufacturing', tagline: 'Small satellites, designed and built in Glasgow.',
    about: { founded: 'Glasgow · 2012', story: 'We design and build small satellites, from shoebox-sized to fridge-sized, for operators, universities and governments.' },
    stats: { years: 14, staff: 320, clients: '160 satellites built' },
    caps: [ { name: 'Satellite design', detail: 'From mission idea to flight model.' }, { name: 'Build and test', detail: 'Clean rooms, vibration and thermal testing.' }, { name: 'Launch support', detail: 'Integration with the rocket.' } ],
    specs: { moq: 'One satellite', lead: '9 to 24 months', regions: 'Worldwide', certs: ['Space-qualified quality system', 'Clean rooms', 'Fully insured'] },
    supplies: [ { kind: 'brand', key: 'orbitra', what: 'Satellite buses for the Orbitra constellation' } ],
    cases: [ { title: 'Forty in a batch', text: 'Forty satellites built, tested and shipped in eleven months.' } ],
    feed: [ { sub: 'Clean room · 3d', text: 'Twelve satellites through vibration testing this week.' } ],
    contact: { person: 'Fiona Reid, Missions', response: 'Replies within two working days' } },

  'clearpath-orbital': { key: 'clearpath-orbital', kind: 'business', gw: 'satellite', name: 'Clearpath Orbital', color: '#22D3EE', gradient: SIGNAL, img: U('1757594530010-141b3aef2d5f', 900, 500),
    tier: 'Verified', category: 'Space traffic tracking', tagline: 'Tracking satellites and debris to keep orbits safe.',
    about: { founded: 'Harwell · 2020', story: 'We track satellites and debris with our own radar and telescopes, and warn operators when two objects are getting too close.' },
    stats: { years: 6, staff: 90, clients: '40 operators' },
    caps: [ { name: 'Tracking', detail: 'Radar and optical, day and night.' }, { name: 'Close-approach alerts', detail: 'Hours of warning before a near miss.' }, { name: 'End-of-life planning', detail: 'Bringing satellites down safely.' } ],
    specs: { moq: 'One satellite', lead: '1 to 4 weeks', regions: 'Worldwide', certs: ['Independently audited', 'Fully insured', 'Alerts all night'] },
    supplies: [ { kind: 'brand', key: 'orbitra', what: 'Close-approach alerts for Orbitra satellites' } ],
    cases: [ { title: 'A near miss avoided', text: 'A warning three days ahead let an operator nudge its satellite clear of debris.' } ],
    feed: [ { sub: 'Tracking · 5d', text: 'A new radar site online, watching low Earth orbit.' } ],
    contact: { person: 'Omar Haddad, Operators', response: 'Replies within one working day' } }
});

/* events in the Events tab */
gxEvents('satellite', [
  { gw: 'satellite', zone: 'orbitra', type: 'Live', icon: '🔴', live: true, time: 'Live Now', title: 'Orbitra Live · forty new satellites wake up', desc: 'Watch from mission control as forty satellites unfold their panels and come online.' },
  { gw: 'satellite', zone: 'clearorbit-imaging', type: 'Sale', icon: '🖼️', time: 'Nov 27', title: 'Clearorbit Black Friday', desc: '30% off every print, one day only.' },
  { gw: 'satellite', zone: 'nightpass-optics', type: 'Sale', icon: '🔭', time: 'Nov 27', title: 'Nightpass Black Friday', desc: '25% off every pair of binoculars.' },
  { gw: 'satellite', type: 'Event', icon: '🛰️', time: 'Nov 30', title: 'Beginners’ spotting night', desc: 'Satellite Spotters help newcomers find their first satellite.' },
  { gw: 'satellite', type: 'Event', icon: '🎤', time: 'Dec 2', title: 'Talk: how a satellite gets built, Glasgow', desc: 'Glasgow Space Meetup hears from a satellite engineer.' },
  { gw: 'satellite', zone: 'groundlink-kits', type: 'Event', icon: '📡', time: 'Dec 3', title: 'Build night: your first ground station', desc: 'Build a Groundlink Starter Kit live, then catch a pass together.' },
  { gw: 'satellite', type: 'Event', icon: '🎄', time: 'Dec 10', title: 'Christmas rooftop spotting, Glasgow', desc: 'Glasgow Space Meetup watches the passes from a city rooftop.' },
  { gw: 'satellite', type: 'Event', icon: '🌠', time: 'Dec 13', title: 'Geminids watch: live chat', desc: 'Satellite Spotters watch the year’s best meteor shower together.' }
]);
})();
/* ═════════ /SATELLITEXX ═════════ */
