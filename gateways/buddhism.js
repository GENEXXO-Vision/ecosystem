/* ═════════ BUDDHISMXX — a Religion demo gateway (2026-11-28, Sean; build -101) ═════════
   Built with the _tools/README.md recipe. Palette (light): saffron, maroon and a calm lotus pink.
   Home sector: Religion (listed only there). Every company, maker, pro and product is fictional; places are real.
   CARE (_tools/CARE-BRIEFS.md): practice, meditation, festivals, temples, study. Never treat it as a lifestyle trend,
   never use a Buddha image as decor or merchandise, no health claims. Respectful terms; photos of practice,
   not tourist poses on statues. Traditions differ, and we say so. */
(function(){
const U = (id, w, h) => `https://images.unsplash.com/photo-${id}?w=${w}&h=${h}&fit=crop&q=75`;
const SAFFRON = 'linear-gradient(135deg,#FCD34D,#C2410C)', MAROON = 'linear-gradient(135deg,#FCA5A5,#7F1D1D)', LOTUS = 'linear-gradient(135deg,#FBCFE8,#BE185D)', MOSS = 'linear-gradient(135deg,#BBF7D0,#3F6212)';

GATEWAYS.buddhism = {
  name: 'BuddhismXX', domain: 'buddhismxx.com', emoji: '☸️', sector: 'religion', live: true,
  tagline: 'The Buddhist Practice Universe',
  theme: {
    bg: '#FBF7F0', text: '#2A1A12', cardBg: '#FFFFFF', cardBorder: 'rgba(42,26,18,.08)',
    headerBg: 'linear-gradient(180deg,#FFFFFF,#FBF7F0)', accent: '#C2410C', accentAlt: '#7F1D1D', dark: false
  },
  gradient: 'linear-gradient(135deg,#FCD34D,#C2410C,#7F1D1D)',
  stats: { members: '1.4M', brands: '260+', agents: '18' },
  spaces: ['All Feed', 'Meditation', 'Study', 'Festivals', 'Temples & Centres', 'Community'],
  trending: ['#BodhiDay', '#SittingTogether', '#DailyPractice'],
  brandZones: [
    { key: 'clearwater-meditation', name: 'Clearwater Meditation Centre', color: '#C2410C', tier: 'Founding Partner', tag: 'A meditation centre open to everyone, beginners welcome' },
    { key: 'zafu-and-bell', name: 'Zafu & Bell', color: '#7F1D1D', tier: 'Brand Zone', tag: 'Meditation cushions, benches and bells, made by hand' },
    { key: 'sandal-lane-incense', name: 'Sandal Lane Incense', color: '#BE185D', tier: 'Brand Zone', tag: 'Natural incense, hand-rolled in small batches' },
    { key: 'bodhi-leaf-books', name: 'Bodhi Leaf Books', color: '#3F6212', tier: 'Brand Zone', tag: 'Translations, teachings and study guides' }
  ],
  apps: [
    { name: 'Bell Timer', color: '#C2410C', desc: 'A meditation timer with soft bells', key: 'bell-timer', url: 'apps/bell-timer.html',
      dev: 'Zafu & Bell', rating: '4.9', users: '680K', perms: ['profile', 'feed'],
      tagline: 'Sit. The bell will tell you.',
      about: 'Bell Timer rings a soft bell to begin and end your sitting, with optional interval bells. Choose a length, sit, and let the timer keep time so you don’t have to. It records your sittings privately.',
      features: ['Opening, interval and closing bells', 'Five to sixty minutes', 'Your sittings this week', 'Share a milestone'],
      shots: ['apps/bell-timer/shot-1.jpg', 'apps/bell-timer/shot-2.jpg', 'apps/bell-timer/shot-3.jpg'],
      version: '3.0', size: '9 KB',
      updates: [ { v: '3.0', ago: 2, notes: 'Interval bells.' }, { v: '2.4', ago: 66, notes: 'Your week.' }, { v: '1.8', ago: 210, notes: 'Signed in with GENEXXO.' } ],
      reviews: [ { who: '@morning_sitter_ana', stars: 5, ago: 1, text: 'The bell sound is perfect.' }, { who: '@tenzin_wright_teaching', stars: 5, ago: 18, text: 'I recommend it to every beginner.' }, { who: '@dr_june_study', stars: 4, ago: 42, text: 'Simple and quiet.' } ] },
    { name: 'Festival Calendar', color: '#7F1D1D', desc: 'Buddhist festivals across traditions, explained', key: 'festival-calendar', url: 'apps/festival-calendar.html',
      dev: 'Clearwater Meditation Centre', rating: '4.8', users: '320K', perms: ['profile', 'feed'],
      tagline: 'What’s being marked, and why.',
      about: 'Festival Calendar lists major Buddhist festivals and observances, with what each one remembers and how it’s marked in different traditions. Dates vary by tradition and by the lunar calendar, so check with your local temple or centre.',
      features: ['Festivals across traditions', 'What each one marks', 'Days until the next', 'Share a festival'],
      shots: ['apps/festival-calendar/shot-1.jpg', 'apps/festival-calendar/shot-2.jpg', 'apps/festival-calendar/shot-3.jpg'],
      version: '1.6', size: '9 KB',
      updates: [ { v: '1.6', ago: 3, notes: 'Bodhi Day details.' }, { v: '1.3', ago: 70, notes: 'Traditions explained.' }, { v: '1.0', ago: 190, notes: 'Signed in with GENEXXO.' } ],
      reviews: [ { who: '@dr_june_study', stars: 5, ago: 2, text: 'Careful about differences between traditions.' }, { who: '@morning_sitter_ana', stars: 5, ago: 24, text: 'Learned so much.' }, { who: '@tenzin_wright_teaching', stars: 4, ago: 48, text: 'Respectful and clear.' } ] },
    { name: 'Daily Teaching', color: '#3F6212', desc: 'A short verse to reflect on each day', key: 'daily-sutta', url: 'apps/daily-sutta.html',
      dev: 'Bodhi Leaf Books', rating: '4.8', users: '410K', perms: ['profile', 'feed'],
      tagline: 'One verse, read slowly.',
      about: 'Daily Teaching offers a short verse each day, adapted from the early teachings, with a note on its context and a question to reflect on. Save the ones that speak to you.',
      features: ['A verse each day', 'Context in plain words', 'A question to reflect on', 'Save and share'],
      shots: ['apps/daily-sutta/shot-1.jpg', 'apps/daily-sutta/shot-2.jpg', 'apps/daily-sutta/shot-3.jpg'],
      version: '2.1', size: '9 KB',
      updates: [ { v: '2.1', ago: 1, notes: 'Saved verses.' }, { v: '1.7', ago: 62, notes: 'Reflection questions.' }, { v: '1.2', ago: 180, notes: 'Signed in with GENEXXO.' } ],
      reviews: [ { who: '@dr_june_study', stars: 5, ago: 3, text: 'Good translations, honest notes.' }, { who: '@morning_sitter_ana', stars: 5, ago: 26, text: 'My morning ritual.' }, { who: '@tenzin_wright_teaching', stars: 4, ago: 52, text: 'Lovely.' } ] }
  ],
  pros: [
    { key: 'tenzin-wright-teaching', name: 'Tom Tenzin Wright, Meditation Teacher', color: '#C2410C', tag: 'Meditation classes for beginners and regular sitters', role: 'Meditation teacher',
      img: U('1677543167033-af3c688aa4df', 800, 800), base: 'Manchester, UK · and online', langs: 'English', years: 18, rating: '4.9', reviewsN: 204, cur: '£',
      creds: ['Practising for twenty-five years', 'Trained in the Tibetan tradition', 'Teaches beginners’ courses'],
      about: 'Tom teaches meditation simply and warmly, for beginners and for people who have sat for years. He’s clear that meditation is part of a wider path, and that it isn’t a replacement for medical care.',
      services: [ { id: 'one', name: 'One-to-one guidance', dur: '1 hour', price: 40, desc: 'Questions about your practice.' },
                  { id: 'course', name: 'Beginners’ course', dur: 'Six evenings', price: 90, desc: 'Online or in Manchester.' },
                  { id: 'drop', name: 'Drop-in sitting', dur: '1 hour', price: 5, desc: 'Donations welcome beyond this.' } ],
      avail: { days: [1, 3, 4], times: ['07:00', '19:00'] },
      reviews: [ { who: '@morning_sitter_ana', stars: 5, ago: 2, text: 'Patient and funny.' }, { who: '@dr_june_study', stars: 5, ago: 30, text: 'A thoughtful teacher.' }, { who: '@margaret_hollis_care', stars: 5, ago: 60, text: 'Grounded and kind.' } ],
      posts: [ { ago: 1, text: 'When your mind wanders, that isn’t failure. Noticing it wandered and coming back is the practice.' } ],
      tier: 'Pro Zone', verified: true },
    { key: 'dr-june-study', name: 'Dr June Okoro, Buddhist Studies', color: '#7F1D1D', tag: 'Study groups on Buddhist history, texts and traditions', role: 'Lecturer in Buddhist studies',
      img: U('1517462964-21fdcec3f25b', 800, 800), base: 'Bristol, UK · and online', langs: 'English, Pali reading', years: 15, rating: '5.0', reviewsN: 126, cur: '£',
      creds: ['PhD in Buddhist studies', 'University lecturer', 'Runs public study groups'],
      about: 'June teaches the history and texts of Buddhism across its traditions, Theravada, Mahayana and Vajrayana, for anyone curious. Her study groups read short texts slowly and talk about them.',
      services: [ { id: 'group', name: 'Study group', dur: 'Six weeks', price: 60, desc: 'One short text, read together.' },
                  { id: 'talk', name: 'Public talk', dur: '1 hour', price: 120, desc: 'For schools, libraries and groups.' },
                  { id: 'q', name: 'Quick question call', dur: '20 minutes', price: 15, desc: 'One question about a text or tradition.' } ],
      avail: { days: [2, 4], times: ['10:00', '18:30'] },
      reviews: [ { who: '@morning_sitter_ana', stars: 5, ago: 4, text: 'Opened up the texts for me.' }, { who: '@tenzin_wright_teaching', stars: 5, ago: 32, text: 'Scholarly and warm.' }, { who: '@margaret_hollis_care', stars: 5, ago: 62, text: 'Wonderful study group.' } ],
      posts: [ { ago: 2, text: 'There isn’t one Buddhism. A temple in Leicester, a Zen group in London and a Tibetan centre in Scotland may practise very differently, and that diversity is old.' } ],
      tier: 'Pro Zone', verified: true },
    { key: 'margaret-hollis-chaplain', name: 'Margaret Hollis, Buddhist Chaplain', color: '#3F6212', tag: 'Pastoral care in hospitals and prisons', role: 'Chaplain',
      img: U('1719037108848-685e9e599827', 800, 800), base: 'Leeds, UK', langs: 'English', years: 22, rating: '4.9', reviewsN: 88, cur: '£',
      creds: ['Hospital and prison chaplain', 'Practising for forty years', 'Trains volunteer visitors'],
      about: 'Margaret offers Buddhist pastoral care in hospitals and prisons, and trains volunteers who visit. She’ll always point people to medical and mental-health support too.',
      services: [ { id: 'train', name: 'Volunteer visitor training', dur: 'Half day', price: 60, desc: 'For sanghas starting visiting.' },
                  { id: 'talk', name: 'Talk: care at the end of life', dur: '1 hour', price: 80, desc: 'For groups and care teams.' },
                  { id: 'chat', name: 'A conversation', dur: '45 minutes', price: 20, desc: 'Pastoral support, in confidence.' } ],
      avail: { days: [1, 2, 5], times: ['11:00', '15:00'] },
      reviews: [ { who: '@dr_june_study', stars: 5, ago: 3, text: 'Deeply compassionate.' }, { who: '@morning_sitter_ana', stars: 5, ago: 36, text: 'Helped me when my dad was ill.' }, { who: '@tenzin_wright_teaching', stars: 5, ago: 66, text: 'A quiet strength.' } ],
      posts: [ { ago: 3, text: 'Often the kindest thing at a bedside is to sit quietly and listen. Nothing needs fixing in that moment.' } ],
      tier: 'Pro Zone', verified: true }
  ],
  communities: [
    { key: 'sitting-together', name: 'Sitting Together', domain: 'sit.buddhismxx.com', color: '#C2410C', img: U('1643682661119-28da0685be2c', 900, 500),
      scope: 'Global', where: 'Wherever you sit', members: 196000, online: 2260, tagline: 'Practice, study and kindness. All traditions welcome.',
      about: 'People who practise, or want to learn about, Buddhism, from every tradition and none. Share practice, ask questions, mark festivals. Be respectful of traditions other than your own, and remember that meditation isn’t a medical treatment. This is a demo community.',
      rules: ['Respect every tradition', 'No health claims', 'Questions always welcome'],
      mods: ['@tenzin_wright_teaching', '@morning_sitter_ana'],
      threads: [ { t: 'Bodhi Day: how does your sangha mark it?', by: '@morning_sitter_ana', tag: 'FESTIVALS', replies: 1240, ago: 0, votes: 2680 }, { t: 'Sitting with a busy mind', by: '@tenzin_wright_teaching', tag: 'PRACTICE', replies: 980, ago: 1, votes: 2140 }, { t: 'Theravada and Mahayana: a gentle intro', by: '@dr_june_study', tag: 'STUDY', replies: 720, ago: 2, votes: 1760 }, { t: 'Visiting a temple for the first time', by: '@morning_sitter_ana', tag: 'TEMPLES', replies: 640, ago: 3, votes: 1480 } ],
      events: [ { title: 'Live: Bodhi Day sitting', day: 10, time: '19:00', where: 'Online' }, { title: 'Study evening: the Dhammapada', day: 4, time: '19:30', where: 'Online' } ] },
    { key: 'manchester-evening-sitting', name: 'Manchester Evening Sitting', domain: 'manchester.buddhismxx.com', color: '#7F1D1D', img: U('1643682661044-f0c34205dd65', 900, 500),
      scope: 'Local', where: 'Manchester', members: 380, online: 11, tagline: 'Thirty minutes of silence, then tea.',
      about: 'A weekly evening sitting in central Manchester, open to everyone. Thirty minutes of silent meditation, a short reading, then tea and conversation. Cushions and chairs provided.',
      rules: ['Arrive a few minutes early', 'Phones off', 'Chairs and cushions, whatever suits you'],
      mods: ['@tenzin_wright_teaching', '@morning_sitter_ana'],
      threads: [ { t: 'Thursday sitting this week', by: '@tenzin_wright_teaching', tag: 'MEETUP', replies: 22, ago: 0, votes: 54 }, { t: 'First time: what should I expect?', by: '@morning_sitter_ana', tag: 'NEW', replies: 18, ago: 1, votes: 42 }, { t: 'Thank you for the Christmas tea', by: '@morning_sitter_ana', tag: 'THANKS', replies: 10, ago: 2, votes: 30 } ],
      events: [ { title: 'Thursday evening sitting', day: 5, time: '19:00', where: 'Manchester' }, { title: 'New year day of practice', day: 37, time: '10:00', where: 'Manchester' } ] }
  ],
  feed: [
    { av: 'BX', avBg: SAFFRON, author: 'BuddhismXX Editorial', sub: 'Featured · Just now', badge: '★ FEATURED',
      text: 'Buddhist practice, study, festivals and community, across many traditions. We try to describe each tradition as its own practitioners would, and we never treat it as a trend. Meditation is part of a path, not a medical treatment.',
      img: U('1574095203563-aa3b2519ab33', 800, 600), eng: '♡ 15.6K · 💬 1.3K · ↗ 2.2K' },
    { av: 'CM', avBg: SAFFRON, author: 'Clearwater Meditation Centre', sub: 'Founding Partner · Brand Zone', badge: 'BRAND ZONE',
      text: 'Live now: an evening sitting with our teacher. Thirty minutes of guided then silent meditation, and time for questions. Join from wherever you are. Follow <b>Clearwater Meditation Centre</b>.',
      img: U('1778694276944-66df489166e6', 800, 600), eng: '♡ 11.8K · 💬 1.6K · ↗ 1.9K' },
    { av: 'AN', avBg: LOTUS, author: '@morning_sitter_ana', sub: 'Meditation · Just now', badge: 'COMMUNITY',
      text: 'One hundred mornings in a row. Not all of them calm, not all of them long, but I sat. Thank you to everyone here who said “just keep coming back.”',
      img: U('1758274539654-23fa349cc090', 800, 600), eng: '♡ 8.4K · 💬 920 · ↗ 680' },
    { av: 'DJ', avBg: MAROON, author: 'Dr June Okoro, Buddhist Studies', sub: 'Festivals · 1h ago', badge: 'PRO ZONE',
      text: 'On 8 December many Mahayana Buddhists mark Bodhi Day, remembering the Buddha’s awakening. In Theravada traditions it’s remembered at Vesak in spring. Same event, different calendars.',
      img: U('1622506092974-38b108ee3436', 800, 600), eng: '♡ 6.2K · 💬 540 · ↗ 820' },
    { av: 'ZB', avBg: MAROON, author: 'Zafu & Bell', sub: 'Brand Zone · 2h ago', badge: 'BRAND ZONE',
      text: 'Prayer flags in the wind outside the workshop, and a new batch of cushions inside. The <b>Buckwheat Zafu</b>, stitched by hand.',
      img: U('1773335084430-4a9105258527', 800, 600), eng: '♡ 4.2K · 💬 260 · ↗ 380' },
    { av: 'SL', avBg: LOTUS, author: 'Sandal Lane Incense', sub: 'Brand Zone · 4h ago', badge: 'BRAND ZONE',
      text: 'Hand-rolled, slow-dried and lit for the evening sitting. <b>Temple Sandalwood</b>, made from sustainably sourced wood.',
      img: U('1783142978783-c141673fe042', 800, 600), eng: '♡ 3.8K · 💬 210 · ↗ 320' },
    { av: 'TW', avBg: SAFFRON, author: 'Tom Tenzin Wright, Meditation Teacher', sub: 'Practice · 6h ago', badge: 'PRO ZONE',
      text: 'A teacher once told me: walk as if you’re kissing the earth with your feet. Slow walking meditation in the garden this morning, leaves underfoot.',
      img: U('1575177090226-6788f22c3c86', 800, 600), eng: '♡ 4.6K · 💬 300 · ↗ 440' }
  ],
  prompts: ['How do I start meditating?', 'What is Bodhi Day?', 'What are the main Buddhist traditions?', 'What should I know before visiting a temple?'],
  businesses: ['stillpoint-retreat-house', 'oakbench-woodcraft']
};

/* the four Brand Zones and two Business Zones */
const brand = (o) => Object.assign({ kind: 'brand', gw: 'buddhism', verified: true }, o);
Object.assign(ZONES, {
  'clearwater-meditation': brand({ key: 'clearwater-meditation', name: 'Clearwater Meditation Centre', color: '#C2410C', gradient: SAFFRON, tier: 'Founding Partner',
    tagline: 'A meditation centre open to everyone, beginners welcome', stats: { followers: '164K', content: '420', products: '10' },
    ad: { badge: 'Featured', img: U('1785057687746-9669fde478e0', 760, 760), hl: 'Come and sit with us.', sub: 'Classes, courses and retreats, beginners welcome.', meta: 'From £5' },
    products: [
      { name: 'Beginners’ Course', price: '£90', tag: 'FLAGSHIP', emoji: '🧘', rating: 4.9, reviews: 2460, cat: 'courses', special: true, desc: 'Six evenings: posture, breath and kindness.', features: ['Online or in person'], review: { who: 'Ana R.', text: 'Changed my mornings.' } },
      { name: 'Weekend Retreat', price: 'From £180', tag: 'BESTSELLER', emoji: '🏡', rating: 4.9, reviews: 1380, cat: 'retreats', desc: 'Two days of silence, teaching and simple food.', features: ['Bursaries available'], review: { who: 'June O.', text: 'Deeply restful.' } },
      { name: 'Drop-in Class', price: '£5', emoji: '🔔', rating: 4.8, reviews: 1840, cat: 'courses', desc: 'An hour’s sitting, any evening.', features: ['Donations welcome'], review: { who: 'Tom W.', text: 'Everyone feels welcome.' } },
      { name: 'Day of Practice', price: '£35', tag: 'SPECIAL', emoji: '🍵', rating: 4.8, reviews: 620, cat: 'retreats', special: true, desc: 'Sitting, walking and a shared lunch.', features: ['Saturdays'], review: { who: 'Margaret H.', text: 'A beautiful day.' } }
    ],
    shopCats: [ { key: 'courses', label: 'Courses', icon: '🧘' }, { key: 'retreats', label: 'Retreats', icon: '🏡' } ],
    feed: [
      { type: 'post', sub: 'Brand post · 2h', text: 'A lotus opening at first light. Our <b>Weekend Retreat</b> begins each day with a dawn sitting.', img: U('1763182198113-a9a8d0fe3144', 800, 440), eng: '♡ 11.8K · 💬 1.6K · ↗ 1.9K', product: 1 },
      { type: 'community', who: 'Ana R.', whoBg: SAFFRON, sub: 'Community · 1d', text: 'Do I need to be Buddhist to come to a class?', eng: '♡ 540 · 💬 170', reply: 'Hi Ana. Not at all! Everyone is welcome, whatever you believe. Our teachers share the Buddhist background of the practice, and you can take as much or as little as feels right. 🙏' }
    ],
    events: [ { zoneEvent: true, tag: 'LIVE', title: 'Clearwater Live · an evening sitting with a teacher', when: 'Live now', desc: 'Guided and silent meditation, then questions.', registered: 6240, capacity: 15000 } ],
    about: { founded: 'Hebden Bridge · 2006', story: 'A meditation centre in an old mill, open to everyone. We joined BuddhismXX as Founding Partner to share practice and study respectfully, across traditions.', milestones: [['2006', 'Opened'], ['2016', 'Retreat house'], ['2026', 'Founding Partner on BuddhismXX']], values: ['Open to everyone', 'Respect for tradition', 'Generosity'] } }),

  'zafu-and-bell': brand({ key: 'zafu-and-bell', name: 'Zafu & Bell', color: '#7F1D1D', gradient: MAROON, tier: 'Brand Zone',
    tagline: 'Meditation cushions, benches and bells, made by hand', stats: { followers: '72.4K', content: '200', products: '30' },
    ad: { badge: 'New', img: U('1769246752403-df4ff7fce8be', 760, 760), hl: 'Sit well.', sub: 'Hand-stitched cushions and small bells.', meta: 'From £18' },
    products: [
      { name: 'Buckwheat Zafu', price: '£42', tag: 'FLAGSHIP', emoji: '🟠', rating: 4.9, reviews: 1860, cat: 'cushions', special: true, desc: 'A round cushion filled with buckwheat hulls.', features: ['Organic cotton', 'Removable cover'], review: { who: 'Ana R.', text: 'My knees thank you.' } },
      { name: 'Zabuton Mat', price: '£48', tag: 'BESTSELLER', emoji: '🟫', rating: 4.8, reviews: 1120, cat: 'cushions', desc: 'A padded mat to go under your cushion.', features: ['Cotton'], review: { who: 'Tom W.', text: 'Solid and comfortable.' } },
      { name: 'Small Meditation Bell', price: '£28', emoji: '🔔', rating: 4.8, reviews: 760, cat: 'bells', desc: 'A brass bell with a long, soft ring.', features: ['Cushion and striker'], review: { who: 'June O.', text: 'A beautiful tone.' } },
      { name: 'Travel Cushion', price: '£18', tag: 'SPECIAL', emoji: '🎒', rating: 4.7, reviews: 420, cat: 'bells', special: true, desc: 'An inflatable cushion for retreats.', features: ['Packs small'], review: { who: 'Margaret H.', text: 'Handy.' } }
    ],
    shopCats: [ { key: 'cushions', label: 'Cushions', icon: '🟠' }, { key: 'bells', label: 'Bells & travel', icon: '🔔' } ],
    feed: [ { type: 'post', sub: 'Brand post · 1d', text: 'Flags along the forest bridge, cushions in the workshop. The <b>Zabuton Mat</b> is back in stock.', img: U('1761498084106-6b4e47de3beb', 800, 440), eng: '♡ 4.2K · 💬 260', product: 1 } ],
    events: [ { zoneEvent: true, tag: 'SALE', title: 'Winter cushions: 15% off', when: 'Dec 3 · All week', desc: 'Zafus and mats, 15% off.', registered: 860, capacity: 2400 } ],
    about: { founded: 'Totnes · 2011', story: 'A couple who couldn’t find a cushion they liked, so they learned to make one.', milestones: [['2011', 'The first zafu'], ['2019', 'Bells'], ['2026', 'Brand Zone on BuddhismXX']], values: ['Made by hand', 'Natural materials', 'Fair prices'] } }),

  'sandal-lane-incense': brand({ key: 'sandal-lane-incense', name: 'Sandal Lane Incense', color: '#BE185D', gradient: LOTUS, tier: 'Brand Zone',
    tagline: 'Natural incense, hand-rolled in small batches', stats: { followers: '48.6K', content: '150', products: '22' },
    ad: { badge: 'Featured', img: U('1551690935-a9e6f0a7e788', 760, 760), hl: 'A thin line of smoke.', sub: 'Natural incense, hand-rolled.', meta: 'From £6' },
    products: [
      { name: 'Temple Sandalwood', price: '£9', tag: 'FLAGSHIP', emoji: '🪵', rating: 4.9, reviews: 1340, cat: 'sticks', special: true, desc: 'Forty sticks of sustainably sourced sandalwood.', features: ['Natural binders'], review: { who: 'Tom W.', text: 'Clean and calm.' } },
      { name: 'Morning Cedar', price: '£8', tag: 'BESTSELLER', emoji: '🌲', rating: 4.8, reviews: 920, cat: 'sticks', desc: 'A fresh cedar blend.', features: ['Forty sticks'], review: { who: 'Ana R.', text: 'Lovely in the morning.' } },
      { name: 'Incense Cones', price: '£6', emoji: '🔺', rating: 4.7, reviews: 540, cat: 'cones', desc: 'Twenty cones of sandalwood and rose.', features: ['Short burn'], review: { who: 'June O.', text: 'Nice for a short sit.' } },
      { name: 'Ceramic Holder', price: '£14', tag: 'SPECIAL', emoji: '🏺', rating: 4.8, reviews: 320, cat: 'cones', special: true, desc: 'A small glazed holder with an ash tray.', features: ['Handmade'], review: { who: 'Margaret H.', text: 'Simple and beautiful.' } }
    ],
    shopCats: [ { key: 'sticks', label: 'Sticks', icon: '🪵' }, { key: 'cones', label: 'Cones & holders', icon: '🔺' } ],
    feed: [ { type: 'post', sub: 'Brand post · 3h', text: 'Two cones, two thin trails of smoke. Our <b>Incense Cones</b>, sandalwood and rose.', img: U('1762541115443-d83816da748c', 800, 440), eng: '♡ 3.8K · 💬 210', product: 2 } ],
    events: [ { zoneEvent: true, tag: 'EVENT', title: 'Workshop: rolling incense by hand', when: 'Dec 6 · 14:00', desc: 'Live online, materials posted to you.', registered: 340, capacity: 900 } ],
    about: { founded: 'Brighton · 2014', story: 'A small workshop making natural incense the slow way, with sustainably sourced wood.', milestones: [['2014', 'First batch'], ['2021', 'Sustainable sandalwood'], ['2026', 'Brand Zone on BuddhismXX']], values: ['Natural ingredients', 'Sustainable sourcing', 'Small batches'] } }),

  'bodhi-leaf-books': brand({ key: 'bodhi-leaf-books', name: 'Bodhi Leaf Books', color: '#3F6212', gradient: MOSS, tier: 'Brand Zone',
    tagline: 'Translations, teachings and study guides', stats: { followers: '56.2K', content: '180', products: '48' },
    ad: { badge: 'Study', img: U('1629780595644-51ae076d8396', 760, 760), hl: 'Read slowly.', sub: 'Clear translations with honest notes.', meta: 'From £7' },
    products: [
      { name: 'The Dhammapada, a New Translation', price: '£12', tag: 'FLAGSHIP', emoji: '📗', rating: 4.9, reviews: 1460, cat: 'texts', special: true, desc: 'The classic verses, with notes on each chapter.', features: ['Pali alongside'], review: { who: 'June O.', text: 'Faithful and readable.' } },
      { name: 'Many Paths', price: '£14', tag: 'BESTSELLER', emoji: '📘', rating: 4.8, reviews: 980, cat: 'guides', desc: 'An introduction to Buddhism’s traditions.', features: ['Maps and timeline'], review: { who: 'Ana R.', text: 'Exactly what I needed.' } },
      { name: 'Sitting Every Day', price: '£9', emoji: '📙', rating: 4.8, reviews: 640, cat: 'guides', desc: 'A practical guide to a daily practice.', features: ['Pocket size'], review: { who: 'Tom W.', text: 'Wise and gentle.' } },
      { name: 'Study Group Pack', price: '£25', tag: 'SPECIAL', emoji: '📚', rating: 4.9, reviews: 280, cat: 'texts', special: true, desc: 'Six copies and a leader’s guide.', features: ['For sanghas and schools'], review: { who: 'Margaret H.', text: 'Our group loves it.' } }
    ],
    shopCats: [ { key: 'texts', label: 'Texts', icon: '📗' }, { key: 'guides', label: 'Guides', icon: '📘' } ],
    feed: [ { type: 'post', sub: 'Brand post · 5h', text: 'Monks walking to morning alms, a scene from <b>Many Paths</b>, our guide to the traditions.', img: U('1575129694595-28364f2bcdc0', 800, 440), eng: '♡ 3.4K · 💬 190', product: 1 } ],
    events: [ { zoneEvent: true, tag: 'EVENT', title: 'Book talk: Many Paths', when: 'Dec 9 · 19:00', desc: 'The author on Buddhism’s traditions, live.', registered: 420, capacity: 1200 } ],
    about: { founded: 'Oxford · 2009', story: 'A small press publishing careful translations and plain-English guides, edited with practitioners from each tradition.', milestones: [['2009', 'First translation'], ['2020', 'Study packs'], ['2026', 'Brand Zone on BuddhismXX']], values: ['Faithful translation', 'Every tradition', 'Plain English'] } }),

  'stillpoint-retreat-house': { key: 'stillpoint-retreat-house', kind: 'business', gw: 'buddhism', name: 'Stillpoint Retreat House', color: '#C2410C', gradient: SAFFRON, img: U('1474557157379-8aa74a6ef541', 900, 500),
    tier: 'Verified', category: 'Retreat venue for meditation groups', tagline: 'A quiet house for groups who practise.',
    about: { founded: 'Shropshire · 2012', story: 'A quiet country house that hosts meditation groups and sanghas of every tradition: simple rooms, a meditation hall and vegetarian food.' },
    stats: { years: 14, staff: 12, clients: '180 groups hosted' },
    caps: [ { name: 'Group retreats', detail: 'Up to thirty-five people.' }, { name: 'Vegetarian kitchen', detail: 'Simple, seasonal food.' }, { name: 'Meditation hall', detail: 'Cushions, chairs and a bell.' } ],
    specs: { moq: 'One weekend', lead: '3 to 12 months', regions: 'Shropshire', certs: ['Step-free hall', 'Quiet grounds', 'All traditions welcome'] },
    supplies: [ { kind: 'brand', key: 'clearwater-meditation', what: 'Weekend retreats' } ],
    cases: [ { title: 'A sangha’s first retreat', text: 'A small Leeds group held its first silent weekend here.' } ],
    feed: [ { sub: 'Team · 3d', text: 'Spring dates now open for groups.' } ],
    contact: { person: 'Helen Marsh, Bookings', response: 'Replies within two working days' } },

  'oakbench-woodcraft': { key: 'oakbench-woodcraft', kind: 'business', gw: 'buddhism', name: 'Oakbench Woodcraft', color: '#3F6212', gradient: MOSS, img: U('1632133548524-dd064a954bad', 900, 500),
    tier: 'Verified', category: 'Meditation benches and centre furniture', tagline: 'Benches, shelves and altars for meditation centres.',
    about: { founded: 'Cumbria · 2015', story: 'Woodworkers who make kneeling benches, shoe racks and simple furniture for meditation centres and temples, from local oak.' },
    stats: { years: 11, staff: 8, clients: '140 centres furnished' },
    caps: [ { name: 'Kneeling benches', detail: 'Three heights.' }, { name: 'Centre furniture', detail: 'Shelves, racks and tables.' }, { name: 'Repairs', detail: 'Old benches restored.' } ],
    specs: { moq: 'One bench', lead: '3 to 8 weeks', regions: 'UK', certs: ['Local oak', 'Natural oils', 'Made to order'] },
    supplies: [ { kind: 'brand', key: 'zafu-and-bell', what: 'Kneeling benches' } ],
    cases: [ { title: 'Forty benches for a new hall', text: 'We furnished a new meditation hall in the north.' } ],
    feed: [ { sub: 'Team · 5d', text: 'A new low bench for longer sittings.' } ],
    contact: { person: 'Sam Kerr, Workshop', response: 'Replies within two working days' } }
});

/* events in the Events tab */
gxEvents('buddhism', [
  { gw: 'buddhism', zone: 'clearwater-meditation', type: 'Live', icon: '🔴', live: true, time: 'Live Now', title: 'Clearwater Live · an evening sitting with a teacher', desc: 'Guided and silent meditation, then questions.' },
  { gw: 'buddhism', type: 'Event', icon: '📖', time: 'Dec 2', title: 'Study evening: the Dhammapada', desc: 'Sitting Together reads a chapter, slowly.' },
  { gw: 'buddhism', zone: 'zafu-and-bell', type: 'Sale', icon: '🟠', time: 'Dec 3', title: 'Winter cushions: 15% off', desc: 'Zafus and mats, 15% off.' },
  { gw: 'buddhism', type: 'Event', icon: '🍵', time: 'Dec 3', title: 'Manchester Evening Sitting', desc: 'Thirty minutes of silence, then tea.' },
  { gw: 'buddhism', zone: 'sandal-lane-incense', type: 'Event', icon: '🪵', time: 'Dec 6', title: 'Workshop: rolling incense by hand', desc: 'Live online, materials posted to you.' },
  { gw: 'buddhism', type: 'Event', icon: '🌳', time: 'Dec 8', title: 'Live: Bodhi Day sitting', desc: 'Remembering the Buddha’s awakening.' },
  { gw: 'buddhism', zone: 'bodhi-leaf-books', type: 'Event', icon: '📘', time: 'Dec 9', title: 'Book talk: Many Paths', desc: 'The author on Buddhism’s traditions, live.' },
  { gw: 'buddhism', type: 'Event', icon: '🙏', time: 'Dec 10', title: 'Care at the end of life, with Margaret Hollis', desc: 'A gentle talk for carers and sanghas.' }
]);
})();
/* ═════════ /BUDDHISMXX ═════════ */
