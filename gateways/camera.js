/* ═════════ CAMERAXX — a Photography demo gateway (2026-11-21, Sean; build -90) ═════════
   Built with the _tools/README.md recipe. Palette (dark): charcoal, silver, a warm amber "golden hour" accent.
   Home sector: Photography. Every camera maker, film stock, lab and photographer here is fictional; places are real.
   Photos avoid prominent real camera brand logos. */
(function(){
const U = (id, w, h) => `https://images.unsplash.com/photo-${id}?w=${w}&h=${h}&fit=crop&q=75`;
const AMBER = 'linear-gradient(135deg,#F5B342,#C2410C)', STEEL = 'linear-gradient(135deg,#94A3B8,#475569)', NIGHT = 'linear-gradient(135deg,#334155,#0F172A)', TEAL = 'linear-gradient(135deg,#5EEAD4,#0F766E)';

GATEWAYS.camera = {
  name: 'CameraXX', domain: 'cameraxx.com', emoji: '📷', sector: 'photography', live: true,
  tagline: 'The Camera Universe',
  theme: {
    bg: '#111418', text: '#EEF1F5', cardBg: 'rgba(255,255,255,.05)', cardBorder: 'rgba(238,241,245,.1)',
    headerBg: 'linear-gradient(180deg,#1C2128,#111418)', accent: '#F5A524', accentAlt: '#94A3B8', dark: true
  },
  gradient: 'linear-gradient(135deg,#0F172A,#475569,#F5A524)',
  stats: { members: '6.8M', brands: '4,100+', agents: '62' },
  spaces: ['All Feed', 'Learn', 'Film', 'Landscape', 'Street', 'Kit'],
  trending: ['#GoldenHour', '#ShootFilm', '#PhotoWalk'],
  brandZones: [
    { key: 'halden-cameras', name: 'Halden Cameras', color: '#F5A524', tier: 'Founding Partner', tag: 'Cameras and lenses, designed in Edinburgh' },
    { key: 'silverline-lab', name: 'Silverline Film Lab', color: '#94A3B8', tier: 'Brand Zone', tag: 'Film developing and scanning, Brighton' },
    { key: 'strap-satchel', name: 'Strap & Satchel', color: '#B45309', tier: 'Brand Zone', tag: 'Camera bags and straps, made in Walsall' },
    { key: 'shutter-school', name: 'Shutter School', color: '#14B8A6', tier: 'Brand Zone', tag: 'Photography courses, online and on location' }
  ],
  apps: [
    { name: 'Exposure Calc', color: '#F5A524', desc: 'Swap aperture, shutter and ISO and keep the same exposure', key: 'exposure-calc', url: 'apps/exposure-calc.html',
      dev: 'Shutter School', rating: '4.8', users: '1.1M', perms: ['profile', 'feed'],
      tagline: 'Same light, different picture.',
      about: 'Lock in a good exposure, then change one setting and Exposure Calc moves another to match, so you can choose a shallower depth of field or freeze motion without getting it too bright or dark. Includes the Sunny 16 rule and ND filters.',
      features: ['Equivalent exposures', 'Sunny 16 starting points', 'ND filter times', 'Explains what each change does'],
      shots: ['apps/exposure-calc/shot-1.jpg', 'apps/exposure-calc/shot-2.jpg', 'apps/exposure-calc/shot-3.jpg'],
      version: '3.0', size: '9 KB',
      updates: [ { v: '3.0', ago: 3, notes: 'ND filter times.' }, { v: '2.6', ago: 70, notes: 'Sunny 16.' }, { v: '2.0', ago: 210, notes: 'Signed in with GENEXXO.' } ],
      reviews: [ { who: '@first_dslr_dani', stars: 5, ago: 1, text: 'The exposure triangle finally makes sense.' }, { who: '@film_fran', stars: 5, ago: 10, text: 'Sunny 16 in my pocket.' }, { who: '@long_exposure_leo', stars: 4, ago: 24, text: 'ND times are spot on.' } ] },
    { name: 'Golden Hour', color: '#C2410C', desc: 'When the light is best today, wherever you are', key: 'golden-hour', url: 'apps/golden-hour.html',
      dev: 'Halden Cameras', rating: '4.9', users: '2.2M', perms: ['profile', 'feed'],
      tagline: 'Be there before the light is.',
      about: 'Golden Hour shows sunrise, sunset, golden hour and blue hour for your city today and through the week, so you can plan a shoot around the best light.',
      features: ['Golden and blue hour', 'Twelve UK cities', 'The week ahead', 'Plan a shoot and share it'],
      shots: ['apps/golden-hour/shot-1.jpg', 'apps/golden-hour/shot-2.jpg', 'apps/golden-hour/shot-3.jpg'],
      version: '4.2', size: '9 KB',
      updates: [ { v: '4.2', ago: 2, notes: 'Plan a shoot.' }, { v: '4.0', ago: 60, notes: 'Blue hour.' }, { v: '3.1', ago: 200, notes: 'Signed in with GENEXXO.' } ],
      reviews: [ { who: '@landscape_lou', stars: 5, ago: 2, text: 'I check it every night before bed.' }, { who: '@glasgow_gav', stars: 5, ago: 12, text: 'Winter golden hour is at lunchtime up here!' }, { who: '@first_dslr_dani', stars: 4, ago: 30, text: 'Simple and beautiful.' } ] },
    { name: 'Film Log', color: '#94A3B8', desc: 'Every roll, every frame, every setting', key: 'film-log', url: 'apps/film-log.html',
      dev: 'Silverline Film Lab', rating: '4.7', users: '420K', perms: ['profile', 'feed'],
      tagline: 'Remember what you shot.',
      about: 'Film Log keeps track of each roll: the film, the camera, how many frames you’ve taken and the settings for each one, so when your scans come back you know what worked.',
      features: ['Rolls in progress and finished', 'Frame-by-frame notes', 'Count frames left', 'Push and pull reminders'],
      shots: ['apps/film-log/shot-1.jpg', 'apps/film-log/shot-2.jpg', 'apps/film-log/shot-3.jpg'],
      version: '1.8', size: '9 KB',
      updates: [ { v: '1.8', ago: 4, notes: 'Push and pull reminders.' }, { v: '1.5', ago: 90, notes: 'Frame notes.' }, { v: '1.0', ago: 240, notes: 'Signed in with GENEXXO.' } ],
      reviews: [ { who: '@film_fran', stars: 5, ago: 3, text: 'No more scribbles on the back of my hand.' }, { who: '@street_sol', stars: 4, ago: 15, text: 'Quick to log on the go.' }, { who: '@landscape_lou', stars: 5, ago: 36, text: 'Great for learning from my mistakes.' } ] }
  ],
  pros: [
    { key: 'priya-shah-photo-tutor', name: 'Priya Shah Photography Lessons', color: '#14B8A6', tag: 'One-to-one photography lessons · get off auto, portraits, low light', role: 'Photography tutor',
      img: U('1758600587815-b654d1405e83', 800, 800), base: 'Glasgow, UK · and online', langs: 'English, Gujarati', years: 12, rating: '4.9', reviewsN: 512, cur: '£',
      creds: ['Associate of a royal photographic society', 'Former newspaper photographer', 'Teaches beginners every week'],
      about: 'Priya teaches people to take their camera off auto. Lessons are on a walk through the city, so you practise as you learn, and she explains everything in plain English.',
      services: [ { id: 'walk', name: 'Get off auto: city walk', dur: '2 hours', price: 85, desc: 'Aperture, shutter and ISO, learnt on the street.' },
                  { id: 'online', name: 'Online lesson', dur: '60 minutes', price: 45, desc: 'Settings, editing or a portfolio review.' },
                  { id: 'night', name: 'Low-light and night', dur: '2 hours', price: 95, desc: 'Tripods, long exposures and city lights.' } ],
      avail: { days: [2, 4, 6, 0], times: ['10:00', '14:00', '16:00'] },
      reviews: [ { who: '@first_dslr_dani', stars: 5, ago: 4, text: 'Two hours and I’m never going back to auto.' }, { who: '@glasgow_gav', stars: 5, ago: 17, text: 'She makes it all click. Sorry.' }, { who: '@street_sol', stars: 5, ago: 41, text: 'The night walk was brilliant.' } ],
      posts: [ { ago: 1, text: 'Winter tip: golden hour in Glasgow starts around 2.30pm in December. Lunch break photowalk, anyone?' }, { ago: 6, text: 'Night photography walks start again in January.' } ],
      tier: 'Pro Zone', verified: true },
    { key: 'tom-adler-weddings', name: 'Tom Adler Wedding Photography', color: '#F5A524', tag: 'Relaxed, documentary wedding photography · UK and Europe', role: 'Wedding photographer',
      img: U('1757620765404-a1ee66df5e27', 800, 800), base: 'Leeds, UK', langs: 'English, German', years: 15, rating: '4.9', reviewsN: 286, cur: '£',
      creds: ['600+ weddings', 'Fully insured, two of everything', 'Mentors new wedding photographers'],
      about: 'Tom photographs weddings as they happen: very few posed shots, a lot of real moments. He also mentors photographers starting out in weddings.',
      services: [ { id: 'full', name: 'Full-day wedding', dur: 'Up to 10 hours', price: 1850, desc: 'Prep to first dance, with an online gallery.' },
                  { id: 'small', name: 'Small wedding or elopement', dur: 'Up to 4 hours', price: 850, desc: 'Register office, small venues, elopements.' },
                  { id: 'mentor', name: 'Mentoring session', dur: '90 minutes', price: 120, desc: 'For photographers starting in weddings.' } ],
      avail: { days: [1, 3, 5], times: ['10:00', '13:00', '18:00'] },
      reviews: [ { who: '@newlyweds_nina', stars: 5, ago: 9, text: 'We barely noticed him and the photos are perfect.' }, { who: '@street_sol', stars: 5, ago: 26, text: 'His mentoring got me my first booking.' }, { who: '@landscape_lou', stars: 5, ago: 52, text: 'Our families still talk about him.' } ],
      posts: [ { ago: 2, text: 'Winter weddings mean four o’clock sunsets. Plan portraits for the early afternoon.' } ],
      tier: 'Pro Zone', verified: true },
    { key: 'kit-doctor-ash', name: 'Ash Morgan Camera Repairs', color: '#94A3B8', tag: 'Film camera servicing and repairs · light seals, shutters, lenses', role: 'Camera repair technician',
      img: U('1539571696357-5a69c17a67c6', 800, 800), base: 'Manchester, UK · and by post', langs: 'English', years: 11, rating: '4.9', reviewsN: 640, cur: '£',
      creds: ['Trained at a camera service centre', 'Specialist in film SLRs and rangefinders', 'Six-month guarantee'],
      about: 'Ash brings old film cameras back to life: new light seals, cleaned shutters, hazy lenses cleared. Send it by post or drop it at the workshop in the Northern Quarter.',
      services: [ { id: 'cla', name: 'Clean, lubricate, adjust', dur: '2 to 3 weeks', price: 95, desc: 'A full service for a film SLR or rangefinder.' },
                  { id: 'seals', name: 'Light seals replaced', dur: '1 week', price: 35, desc: 'Stops light leaks on most cameras.' },
                  { id: 'check', name: 'Check-up and quote', dur: '15 minutes', price: 10, desc: 'Before you buy, or when something feels wrong.' } ],
      avail: { days: [2, 3, 4, 6], times: ['10:00', '12:00', '15:00'] },
      reviews: [ { who: '@film_fran', stars: 5, ago: 5, text: 'My grandad’s camera works again.' }, { who: '@street_sol', stars: 5, ago: 19, text: 'Quick, fair and honest.' }, { who: '@first_dslr_dani', stars: 4, ago: 38, text: 'Told me not to buy a dud. Saved me £200.' } ],
      posts: [ { ago: 3, text: 'Light leaks are usually old foam seals. Cheap to fix; don’t bin the camera.' } ],
      tier: 'Pro Zone', verified: true }
  ],
  communities: [
    { key: 'golden-hour-club', name: 'Golden Hour Club', domain: 'goldenhour.cameraxx.com', color: '#F5A524', img: U('1492691527719-9d1e07e534b4', 900, 500),
      scope: 'Global', where: 'Wherever the light is', members: 412000, online: 6420, tagline: 'Chasing the good light.',
      about: 'Photographers who get up early and stay out late. Weekly themes, honest critiques, settings shared with every shot and a lot of sunrises.',
      rules: ['Share your settings', 'Critique the photo, not the kit', 'Credit locations kindly'],
      mods: ['@landscape_lou', '@long_exposure_leo'],
      threads: [ { t: 'This week’s theme: winter light', by: '@landscape_lou', tag: 'THEME', replies: 2140, ago: 0, votes: 5120 }, { t: 'Your first photo you were proud of', by: '@first_dslr_dani', tag: 'STORIES', replies: 860, ago: 1, votes: 1980 }, { t: 'Film or digital for learning?', by: '@film_fran', tag: 'DEBATE', replies: 640, ago: 2, votes: 920 }, { t: 'Settings for frost at sunrise?', by: '@long_exposure_leo', tag: 'Q&A', replies: 186, ago: 3, votes: 310 } ],
      events: [ { title: 'Golden hour challenge', day: 7, time: '15:30', where: 'Wherever you are' }, { title: 'Solstice sunrise shoot', day: 30, time: '08:00', where: 'Wherever you are' } ] },
    { key: 'glasgow-photowalks', name: 'Glasgow Photowalks', domain: 'glasgow.cameraxx.com', color: '#14B8A6', img: U('1590486803833-1c5dc8ddd4c8', 900, 500),
      scope: 'Local', where: 'Glasgow', members: 2600, online: 48, tagline: 'Every street has a picture in it.',
      about: 'A walk with cameras every week, from the Merchant City to the Clyde, then a pint and a look at everyone’s shots. All levels, any camera, phones welcome.',
      rules: ['Phones count', 'Ask before photographing people up close', 'First round’s on the newest member'],
      mods: ['@glasgow_gav', '@street_sol'],
      threads: [ { t: 'Christmas lights walk: route ideas?', by: '@glasgow_gav', tag: 'WALK', replies: 46, ago: 0, votes: 104 }, { t: 'Best shots from the Clyde walk', by: '@street_sol', tag: 'SHOW', replies: 62, ago: 1, votes: 140 }, { t: 'Second-hand lens recommendations', by: '@first_dslr_dani', tag: 'KIT', replies: 30, ago: 2, votes: 48 } ],
      events: [ { title: 'Night photowalk, Merchant City', day: 4, time: '18:00', where: 'Glasgow' }, { title: 'Christmas lights photowalk', day: 14, time: '16:00', where: 'George Square, Glasgow' } ] }
  ],
  feed: [
    { av: 'CX', avBg: AMBER, author: 'CameraXX Editorial', sub: 'Featured · Just now', badge: '★ FEATURED',
      text: 'From your first time off auto to a roll of film at sunrise. Lessons, cameras, labs, photowalks and the photographers who notice light. Photography, all in one place.',
      img: U('1497316730643-415fac54a2af', 800, 600), eng: '♡ 64.2K · 💬 4.8K · ↗ 7.1K' },
    { av: 'FF', avBg: STEEL, author: '@film_fran', sub: 'Film · Just now', badge: 'COMMUNITY',
      text: 'My first roll of film came back from the lab today. Twenty-four frames, nineteen in focus, and I love every one 📷',
      img: U('1769788873505-c2d2f570ae0c', 800, 600), eng: '♡ 18.6K · 💬 2.1K · ↗ 640' },
    { av: 'HC', avBg: AMBER, author: 'Halden Cameras', sub: 'Founding Partner · Brand Zone', badge: 'BRAND ZONE',
      text: 'The <b>Halden M6</b>: a medium-format camera with a waist-level finder, designed in Edinburgh. Slow down and look down.',
      img: U('1763315152539-06fc234b526c', 800, 600), eng: '♡ 16.4K · 💬 1.3K · ↗ 2.4K' },
    { av: 'SL', avBg: STEEL, author: 'Silverline Film Lab', sub: 'Brand Zone · 1h ago', badge: 'BRAND ZONE',
      text: 'Send us your rolls by 9 December and your scans are back before Christmas. Every roll developed by hand in Brighton.',
      img: U('1766039132515-ea88dc3950bd', 800, 600), eng: '♡ 5.2K · 💬 420 · ↗ 380' },
    { av: 'DA', avBg: NIGHT, author: '@first_dslr_dani', sub: 'Learn · 2h ago', badge: 'COMMUNITY',
      text: 'Shutter at 1/1000 and my camera is somehow frozen mid-air. (My friend threw it. It was fine. Don’t do this.)',
      img: U('1542038784456-1ea8e935640e', 800, 600), eng: '♡ 9.8K · 💬 1.1K · ↗ 420' },
    { av: 'SS', avBg: TEAL, author: 'Shutter School', sub: 'Brand Zone · 4h ago', badge: 'BRAND ZONE',
      text: 'Our <b>Off Auto in 30 Days</b> course: ten minutes a day, one setting at a time. 120,000 people have finished it.',
      img: U('1541516160071-4bb0c5af65ba', 800, 600), eng: '♡ 4.4K · 💬 320 · ↗ 510' },
    { av: 'PS', avBg: TEAL, author: 'Priya Shah Photography Lessons', sub: 'Learn · 6h ago', badge: 'PRO ZONE',
      text: 'Fill the frame, then take one step closer. Most first photos are taken from too far away.',
      img: U('1772441936562-b7136602856e', 800, 600), eng: '♡ 3.6K · 💬 240 · ↗ 680' }
  ],
  prompts: ['Find a beginners photography lesson in Glasgow', 'When is golden hour this weekend?', 'Where can I get film developed before Christmas?', 'What camera should I buy to learn on?'],
  businesses: ['northlight-print', 'glass-hire-co']
};

/* the four Brand Zones and two Business Zones */
const brand = (o) => Object.assign({ kind: 'brand', gw: 'camera', verified: true }, o);
Object.assign(ZONES, {
  'halden-cameras': brand({ key: 'halden-cameras', name: 'Halden Cameras', color: '#F5A524', gradient: AMBER, tier: 'Founding Partner',
    tagline: 'Cameras and lenses, designed in Edinburgh', stats: { followers: '286K', content: '1.1K', products: '24' },
    ad: { badge: 'Featured', img: U('1770027705793-e68be23cdd5f', 760, 760), hl: 'Slow down. Look down.', sub: 'The Halden M6, a medium-format camera with a waist-level finder.', meta: 'From £24' },
    products: [
      { name: 'Halden M6', price: '£1,450', tag: 'FLAGSHIP', emoji: '📷', rating: 4.9, reviews: 1240, cat: 'cameras', special: true, desc: 'A medium-format film camera with a waist-level finder and an 80 mm lens. Made to last a lifetime and to be repaired.', features: ['6×6 negatives', 'Two-year guarantee', 'Spare parts for 25 years'], review: { who: 'Lou B.', text: 'Changed how I photograph.' } },
      { name: 'Halden C2 (digital)', price: '£980', tag: 'BESTSELLER', emoji: '📸', rating: 4.8, reviews: 3860, cat: 'cameras', desc: 'A compact digital camera with real dials for aperture, shutter and ISO.', features: ['Fixed 35 mm lens', 'Weather-sealed'], review: { who: 'Dani R.', text: 'Learning on dials made it click.' } },
      { name: 'Halden 400 (three rolls)', price: '£24', emoji: '🎞️', rating: 4.8, reviews: 2140, cat: 'film', desc: 'A colour negative film with warm skin tones and fine grain.', features: ['120 or 35 mm'], review: { who: 'Fran T.', text: 'Gorgeous in winter light.' } },
      { name: 'Winter Light Workshop', price: '£180', tag: 'SPECIAL', emoji: '🏔️', rating: 4.9, reviews: 420, cat: 'workshops', special: true, desc: 'A day in the Lake District with our photographers and a loan camera.', features: ['January and February'], review: { who: 'Leo K.', text: 'Freezing and unforgettable.' } }
    ],
    shopCats: [ { key: 'cameras', label: 'Cameras', icon: '📷' }, { key: 'film', label: 'Film', icon: '🎞️' }, { key: 'workshops', label: 'Workshops', icon: '🏔️' } ],
    feed: [
      { type: 'post', sub: 'Brand post · 2h', text: 'Through the waist-level finder of the <b>Halden M6</b>: the world upside down, slowed down.', img: U('1763315152539-06fc234b526c', 800, 440), eng: '♡ 16.4K · 💬 1.3K · ↗ 2.4K', product: 0 },
      { type: 'post', sub: 'On location · Yesterday', text: 'Scouting for the Winter Light Workshop above Buttermere.', img: U('1492691527719-9d1e07e534b4', 800, 440), eng: '♡ 6.8K · 💬 420' },
      { type: 'community', who: 'Dani R.', whoBg: NIGHT, sub: 'Community · 1d', text: 'Is the C2 OK for a complete beginner, or too much camera?', eng: '♡ 520 · 💬 140', reply: 'Hi Dani! It’s a great first camera: there’s a full auto mode while you start, and every dial is labelled so you can take over one setting at a time. Pair it with the free Exposure Calc app and Shutter School’s 30-day course and you’ll be off auto by Christmas. 📸' }
    ],
    events: [ { zoneEvent: true, tag: 'LIVE', title: 'Halden Live · Golden hour in the Lake District', when: 'Live now', desc: 'Our photographers shoot the winter sunset above Buttermere live, settings on screen, your questions answered.', registered: 5840, capacity: 12000 } ],
    about: { founded: 'Edinburgh · 2011', story: 'Two engineers who thought cameras should be simple, mended rather than replaced, and fun to use. We joined CameraXX as Founding Partner because the people who love photography are here.', milestones: [['2011', 'The first lens'], ['2019', 'The Halden M6'], ['2026', 'Founding Partner on CameraXX']], values: ['Built to be repaired', 'Real dials', 'Spare parts for 25 years'] } }),

  'silverline-lab': brand({ key: 'silverline-lab', name: 'Silverline Film Lab', color: '#94A3B8', gradient: STEEL, tier: 'Brand Zone',
    tagline: 'Film developing and scanning, Brighton', stats: { followers: '96.4K', content: '480', products: '12' },
    ad: { badge: 'New', img: U('1766039132515-ea88dc3950bd', 760, 760), hl: 'Every roll, by hand.', sub: 'Developed and scanned in Brighton, back in five days.', meta: 'From £9' },
    products: [
      { name: 'Develop and Scan', price: '£13', tag: 'FLAGSHIP', emoji: '🎞️', rating: 4.9, reviews: 6240, cat: 'develop', special: true, desc: 'Colour or black and white, 35 mm or 120, developed by hand and scanned in high resolution.', features: ['Back in five working days', 'Free return postage'], review: { who: 'Fran T.', text: 'Scans are gorgeous.' } },
      { name: 'Develop Only', price: '£9', tag: 'BESTSELLER', emoji: '🧪', rating: 4.8, reviews: 2140, cat: 'develop', desc: 'Negatives back in a sleeve, for home scanning.', features: ['Any format'], review: { who: 'Sol M.', text: 'Fast and careful.' } },
      { name: 'Hand Prints, 10 × 8', price: '£18', emoji: '🖼️', rating: 4.9, reviews: 860, cat: 'prints', desc: 'Darkroom prints on fibre paper.', features: ['Black and white'], review: { who: 'Lou B.', text: 'Like holding the light.' } },
      { name: 'Prepaid Mailers (five)', price: '£58', tag: 'SPECIAL', emoji: '📮', rating: 4.8, reviews: 640, cat: 'develop', special: true, desc: 'Five develop-and-scan mailers at a lower price.', features: ['Never expire'], review: { who: 'Gav D.', text: 'Always have one in my bag.' } }
    ],
    shopCats: [ { key: 'develop', label: 'Develop', icon: '🎞️' }, { key: 'prints', label: 'Prints', icon: '🖼️' } ],
    feed: [ { type: 'post', sub: 'Brand post · 1h', text: 'Twelve hundred rolls through the lab this week. <b>Develop and Scan</b>, back in five days.', img: U('1772441936553-31bf98952dfc', 800, 440), eng: '♡ 5.2K · 💬 420', product: 0 } ],
    events: [ { zoneEvent: true, tag: 'DEADLINE', title: 'Last day to send film for Christmas', when: 'Dec 9 · 17:00', desc: 'Post your rolls by 9 December and your scans are back before Christmas.', registered: 1840, capacity: 5000 } ],
    about: { founded: 'Brighton · 2014', story: 'A darkroom in a Brighton basement that started developing friends’ film. Now 60,000 rolls a year.', milestones: [['2014', 'The first roll'], ['2020', 'High-resolution scans'], ['2026', 'Brand Zone on CameraXX']], values: ['Developed by hand', 'Chemicals recycled', 'Free return postage'] } }),

  'strap-satchel': brand({ key: 'strap-satchel', name: 'Strap & Satchel', color: '#B45309', gradient: AMBER, tier: 'Brand Zone',
    tagline: 'Camera bags and straps, made in Walsall', stats: { followers: '58.2K', content: '260', products: '46' },
    ad: { badge: 'Featured', img: U('1493863641943-9b68992a8d07', 760, 760), hl: 'A bag that doesn’t look like a camera bag.', sub: 'Waxed canvas and leather, made in Walsall.', meta: 'From £22' },
    products: [
      { name: 'Walker Shoulder Bag', price: '£145', tag: 'FLAGSHIP', emoji: '👜', rating: 4.8, reviews: 1460, cat: 'bags', special: true, desc: 'Waxed canvas and leather, with padded inserts for a camera and two lenses.', features: ['Made in Walsall', 'Repairs for life'], review: { who: 'Sol M.', text: 'Nobody knows there’s a camera in it.' } },
      { name: 'Leather Camera Strap', price: '£38', tag: 'BESTSELLER', emoji: '🎗️', rating: 4.8, reviews: 2860, cat: 'straps', desc: 'Bridle leather that softens with age.', features: ['Three lengths'], review: { who: 'Fran T.', text: 'Gets better every year.' } },
      { name: 'Rolltop Backpack', price: '£165', emoji: '🎒', rating: 4.7, reviews: 640, cat: 'bags', desc: 'For a day in the hills: camera, lenses and a flask.', features: ['Side access'], review: { who: 'Lou B.', text: 'Dry after a day in the rain.' } },
      { name: 'Wrist Strap', price: '£22', tag: 'SPECIAL', emoji: '✋', rating: 4.7, reviews: 980, cat: 'straps', special: true, desc: 'A simple leather wrist strap for small cameras.', features: ['Five colours'], review: { who: 'Dani R.', text: 'Perfect for street photography.' } }
    ],
    shopCats: [ { key: 'bags', label: 'Bags', icon: '👜' }, { key: 'straps', label: 'Straps', icon: '🎗️' } ],
    feed: [ { type: 'post', sub: 'Brand post · 4h', text: 'The <b>Walker Shoulder Bag</b>, out on the streets of Bangkok with a customer.', img: U('1493863641943-9b68992a8d07', 800, 440), eng: '♡ 3.6K · 💬 260', product: 0 } ],
    events: [ { zoneEvent: true, tag: 'SALE', title: 'Christmas sale: a quarter off straps', when: 'Dec 4 · All day', desc: 'A quarter off every strap, for one day.', registered: 1460, capacity: 4000 } ],
    about: { founded: 'Walsall · 2015', story: 'A saddlery family in England’s leather town who started making camera straps for a photographer friend.', milestones: [['2015', 'The first strap'], ['2021', 'Waxed canvas bags'], ['2026', 'Brand Zone on CameraXX']], values: ['Made in Walsall', 'Repairs for life', 'Vegetable-tanned leather'] } }),

  'shutter-school': brand({ key: 'shutter-school', name: 'Shutter School', color: '#14B8A6', gradient: TEAL, tier: 'Brand Zone',
    tagline: 'Photography courses, online and on location', stats: { followers: '142K', content: '2.4K', products: '14' },
    ad: { badge: 'Gift', img: U('1541516160071-4bb0c5af65ba', 760, 760), hl: 'Off auto in 30 days.', sub: 'Ten minutes a day, one setting at a time.', meta: 'From £29' },
    products: [
      { name: 'Off Auto in 30 Days', price: '£49', tag: 'FLAGSHIP', emoji: '🎓', rating: 4.9, reviews: 8420, cat: 'courses', special: true, desc: 'Thirty short lessons and daily challenges, from aperture to editing.', features: ['Any camera, even a phone', 'Feedback on your photos'], review: { who: 'Dani R.', text: 'Day 12 and I shoot in manual.' } },
      { name: 'Landscape Masterclass', price: '£89', tag: 'BESTSELLER', emoji: '🏔️', rating: 4.8, reviews: 1860, cat: 'courses', desc: 'Composition, light and filters, with a field day.', features: ['Eight weeks'], review: { who: 'Lou B.', text: 'My photos are so much better.' } },
      { name: 'Editing Basics', price: '£29', emoji: '🖥️', rating: 4.7, reviews: 1240, cat: 'courses', desc: 'Exposure, colour and cropping, in free software.', features: ['Two hours of video'], review: { who: 'Fran T.', text: 'Clear and quick.' } },
      { name: 'Gift: Any Course', price: '£49', tag: 'SPECIAL', emoji: '🎁', rating: 4.9, reviews: 640, cat: 'gifts', special: true, desc: 'Give someone the course of their choice.', features: ['Valid for a year'], review: { who: 'Gav D.', text: 'Mum is hooked.' } }
    ],
    shopCats: [ { key: 'courses', label: 'Courses', icon: '🎓' }, { key: 'gifts', label: 'Gifts', icon: '🎁' } ],
    feed: [ { type: 'post', sub: 'Brand post · 1d', text: 'Day 1 of <b>Off Auto in 30 Days</b>: hold the camera properly. You’d be surprised.', img: U('1556103255-4443dbae8e5a', 800, 440), eng: '♡ 2.6K · 💬 190', product: 0 } ],
    events: [ { zoneEvent: true, tag: 'EVENT', title: 'Live photo critique', when: 'Dec 2 · 19:00', desc: 'Send a photo and our tutors critique it live.', registered: 2860, capacity: 6000 } ],
    about: { founded: 'Bristol · 2017', story: 'Three photography teachers who wanted lessons short enough to fit into a lunch break.', milestones: [['2017', 'The first course'], ['2022', '100,000 students'], ['2026', 'Brand Zone on CameraXX']], values: ['Any camera', 'Plain English', 'Real feedback'] } }),

  'northlight-print': { key: 'northlight-print', kind: 'business', gw: 'camera', name: 'Northlight Print Studio', color: '#94A3B8', gradient: STEEL, img: U('1497316730643-415fac54a2af', 900, 500),
    tier: 'Verified', category: 'Fine-art printing', tagline: 'Gallery-quality photographic prints for photographers and galleries.',
    about: { founded: 'Glasgow · 2006', story: 'A fine-art print studio making archival prints, framing and exhibition hanging for photographers, galleries and festivals.' },
    stats: { years: 20, staff: 18, clients: '2,400 photographers' },
    caps: [ { name: 'Archival prints', detail: 'Pigment prints on cotton rag, up to 1.5 metres wide.' }, { name: 'Framing', detail: 'Hand-made frames and mounts.' }, { name: 'Exhibitions', detail: 'Printing, framing and hanging for shows.' } ],
    specs: { moq: 'One print', lead: '3 to 10 days', regions: 'UK & Europe', certs: ['Archival standards', 'FSC papers', 'Fully insured'] },
    supplies: [ { kind: 'brand', key: 'halden-cameras', what: 'Prints for the Winter Light exhibition' } ],
    cases: [ { title: 'A first solo show', text: 'Thirty prints, framed and hung in a week.' } ],
    feed: [ { sub: 'Studio · 3d', text: 'Proofing a landscape series on cotton rag.' } ],
    contact: { person: 'Iona Fraser, Studio', response: 'Replies within 24 hours' } },

  'glass-hire-co': { key: 'glass-hire-co', kind: 'business', gw: 'camera', name: 'Glass Hire Co.', color: '#F5A524', gradient: NIGHT, img: U('1556103255-4443dbae8e5a', 900, 500),
    tier: 'Verified', category: 'Camera and lens hire', tagline: 'Cameras, lenses and lighting to hire, by post or collection.',
    about: { founded: 'Manchester · 2012', story: 'Hire cameras, lenses and lighting for a day, a weekend or a month, for photographers, filmmakers and anyone trying before they buy.' },
    stats: { years: 14, staff: 24, clients: '18,000 photographers' },
    caps: [ { name: 'Lens hire', detail: '900 lenses, from wide to super-telephoto.' }, { name: 'Try before you buy', detail: 'Hire fees off if you buy.' }, { name: 'Lighting', detail: 'Studio and portable lights.' } ],
    specs: { moq: 'One day', lead: 'Next day', regions: 'UK', certs: ['Fully insured', 'Every item checked', 'Next-day delivery'] },
    supplies: [ { kind: 'brand', key: 'shutter-school', what: 'Loan kit for field days' } ],
    cases: [ { title: 'A wildlife trip', text: 'A long lens for a fortnight in the Highlands, for less than a week’s fuel.' } ],
    feed: [ { sub: 'Hire desk · 5d', text: 'Every long lens is out for the Christmas holidays.' } ],
    contact: { person: 'Raj Patel, Hire', response: 'Replies within two hours' } }
});

/* events in the Events tab */
gxEvents('camera', [
  { gw: 'camera', zone: 'halden-cameras', type: 'Live', icon: '🔴', live: true, time: 'Live Now', title: 'Halden Live · Golden hour in the Lake District', desc: 'The winter sunset above Buttermere, shot live with settings on screen.' },
  { gw: 'camera', type: 'Event', icon: '🌃', time: 'Dec 2', title: 'Night photowalk, Merchant City', desc: 'Glasgow Photowalks: city lights, tripods optional.' },
  { gw: 'camera', zone: 'strap-satchel', type: 'Sale', icon: '🎗️', time: 'Dec 4', title: 'Strap & Satchel Christmas sale', desc: 'A quarter off every strap, for one day.' },
  { gw: 'camera', type: 'Event', icon: '🌅', time: 'Nov 28', title: 'Golden hour challenge', desc: 'Golden Hour Club: one photo at golden hour, wherever you are.' },
  { gw: 'camera', zone: 'shutter-school', type: 'Event', icon: '🎓', time: 'Dec 2', title: 'Live photo critique', desc: 'Shutter School tutors critique your photos live.' },
  { gw: 'camera', type: 'Event', icon: '🎄', time: 'Dec 5', title: 'Christmas lights photowalk, Glasgow', desc: 'Glasgow Photowalks from George Square at dusk.' },
  { gw: 'camera', zone: 'silverline-lab', type: 'Deadline', icon: '🎞️', time: 'Dec 9', title: 'Last day to send film for Christmas', desc: 'Silverline Film Lab: post your rolls by 5pm.' },
  { gw: 'camera', type: 'Event', icon: '☀️', time: 'Dec 21', title: 'Solstice sunrise shoot', desc: 'Golden Hour Club: the shortest day, the latest sunrise.' }
]);
})();
/* ═════════ /CAMERAXX ═════════ */
