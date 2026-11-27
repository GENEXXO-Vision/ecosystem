/* ═════════ PREGNANCYXX — a Parenting demo gateway (2026-11-27, Sean; build -100) ═════════
   Built with the _tools/README.md recipe. Palette (light): soft linen, calm blue, peach.
   Home sector: Parenting (Sean’s list): GW_HOME.pregnancy = 'parenting' below, and 'parenting' is in HOME_ONLY
   (it is also listed in Health, which keeps its own gateways). Every company, maker, pro and product is fictional; places are real.
   CARE (_tools/CARE-BRIEFS.md): weeks, scans, classes and getting ready. Never diagnosis, symptom verdicts or dose advice,
   and never loss used as content. Health-style wording: explain and record only; point to the person’s own midwife, NHS 111, 999.
   The movements app never counts kicks: if movements slow down, stop or change, it says call your maternity unit straight away. */
GW_HOME.pregnancy = 'parenting';
(function(){
const U = (id, w, h) => `https://images.unsplash.com/photo-${id}?w=${w}&h=${h}&fit=crop&q=75`;
const BLUE = 'linear-gradient(135deg,#93C5FD,#2563EB)', PEACH = 'linear-gradient(135deg,#FDBA74,#EA580C)', SAGE = 'linear-gradient(135deg,#A7F3D0,#047857)', ROSE = 'linear-gradient(135deg,#FBCFE8,#BE185D)';

GATEWAYS.pregnancy = {
  name: 'PregnancyXX', domain: 'pregnancyxx.com', emoji: '🤰', sector: 'parenting', live: true,
  tagline: 'The Pregnancy Universe',
  theme: {
    bg: '#FBF8F4', text: '#1A1D2B', cardBg: '#FFFFFF', cardBorder: 'rgba(26,29,43,.08)',
    headerBg: 'linear-gradient(180deg,#FFFFFF,#FBF8F4)', accent: '#2563EB', accentAlt: '#EA580C', dark: false
  },
  gradient: 'linear-gradient(135deg,#93C5FD,#2563EB,#FDBA74)',
  stats: { members: '2.9M', brands: '780+', agents: '30' },
  spaces: ['All Feed', 'Week by Week', 'Classes', 'Getting Ready', 'Partners', 'Due Together'],
  trending: ['#DueInMay', '#HospitalBag', '#AntenatalClass'],
  brandZones: [
    { key: 'bumpclass', name: 'Bumpclass', color: '#2563EB', tier: 'Founding Partner', tag: 'Antenatal classes led by midwives' },
    { key: 'littlenest', name: 'Littlenest', color: '#047857', tier: 'Brand Zone', tag: 'Organic baby clothes and nursery basics' },
    { key: 'strollwell', name: 'Strollwell', color: '#EA580C', tier: 'Brand Zone', tag: 'Prams and car seats, tested and fitted' },
    { key: 'bloom-maternity', name: 'Bloom Maternity', color: '#BE185D', tier: 'Brand Zone', tag: 'Comfortable maternity and nursing clothes' }
  ],
  apps: [
    { name: 'Bump Weeks', color: '#2563EB', desc: 'Your pregnancy week by week, and what usually happens when', key: 'bump-weeks', url: 'apps/bump-weeks.html',
      dev: 'Bumpclass', rating: '4.9', users: '1.8M', perms: ['profile', 'feed'],
      tagline: 'Week by week, at your own pace.',
      about: 'Bump Weeks shows how many weeks you are, the usual appointments and scans around now, and things to get ready. It’s general information: your midwife is the person to ask about you and your baby.',
      features: ['Your week and trimester', 'Usual appointments', 'Getting-ready list', 'Share your week'],
      shots: ['apps/bump-weeks/shot-1.jpg', 'apps/bump-weeks/shot-2.jpg', 'apps/bump-weeks/shot-3.jpg'],
      version: '4.2', size: '9 KB',
      updates: [ { v: '4.2', ago: 2, notes: 'Getting-ready list.' }, { v: '3.6', ago: 70, notes: 'Usual appointments.' }, { v: '3.0', ago: 220, notes: 'Signed in with GENEXXO.' } ],
      reviews: [ { who: '@due_in_may_ellie', stars: 5, ago: 1, text: 'Calm and clear. No scary stuff.' }, { who: '@rosa_delgado_antenatal', stars: 5, ago: 14, text: 'I recommend it to my classes.' }, { who: '@first_time_dad_sam', stars: 4, ago: 38, text: 'Helps me keep up.' } ] },
    { name: 'Movements', color: '#EA580C', desc: 'Get to know your baby’s pattern, and know when to call', key: 'baby-movements', url: 'apps/baby-movements.html',
      dev: 'Strollwell', rating: '4.9', users: '1.1M', perms: ['profile', 'feed'],
      tagline: 'Know your baby’s pattern.',
      about: 'Movements helps you notice your baby’s usual pattern of movements each day. There is no set number to count. If movements slow down, stop or change, it tells you to call your maternity unit straight away, day or night. Don’t wait.',
      features: ['A daily “usual pattern” check', 'Call your maternity unit now, if anything changes', 'Your own notes', 'Share a milestone'],
      shots: ['apps/baby-movements/shot-1.jpg', 'apps/baby-movements/shot-2.jpg', 'apps/baby-movements/shot-3.jpg'],
      version: '2.0', size: '9 KB',
      updates: [ { v: '2.0', ago: 3, notes: 'Call-now button always on screen.' }, { v: '1.5', ago: 76, notes: 'Your notes.' }, { v: '1.0', ago: 200, notes: 'Signed in with GENEXXO.' } ],
      reviews: [ { who: '@due_in_may_ellie', stars: 5, ago: 2, text: 'Reassuring, and clear about when to call.' }, { who: '@grace_mensah_doula', stars: 5, ago: 20, text: 'The right message, every time.' }, { who: '@first_time_dad_sam', stars: 4, ago: 44, text: 'Simple.' } ] },
    { name: 'Hospital Bag', color: '#047857', desc: 'Everything to pack, ticked off together', key: 'hospital-bag', url: 'apps/hospital-bag.html',
      dev: 'Littlenest', rating: '4.8', users: '1.3M', perms: ['profile', 'feed'],
      tagline: 'Packed and ready.',
      about: 'Hospital Bag lists what to pack for you, your baby and your birth partner. Tick things off as you go and share your progress with your partner.',
      features: ['You, baby and partner', 'Tick off as you pack', 'Your own extras', 'Share your progress'],
      shots: ['apps/hospital-bag/shot-1.jpg', 'apps/hospital-bag/shot-2.jpg', 'apps/hospital-bag/shot-3.jpg'],
      version: '2.4', size: '9 KB',
      updates: [ { v: '2.4', ago: 1, notes: 'Partner list.' }, { v: '1.9', ago: 62, notes: 'Your own extras.' }, { v: '1.2', ago: 180, notes: 'Signed in with GENEXXO.' } ],
      reviews: [ { who: '@first_time_dad_sam', stars: 5, ago: 3, text: 'I packed my own bag for once!' }, { who: '@due_in_may_ellie', stars: 5, ago: 24, text: 'Done by 36 weeks.' }, { who: '@yuki_tanaka_yoga', stars: 4, ago: 50, text: 'Thoughtful list.' } ] }
  ],
  pros: [
    { key: 'rosa-delgado-antenatal', name: 'Rosa Delgado Antenatal Classes', color: '#2563EB', tag: 'Antenatal classes from a registered midwife', role: 'Midwife and antenatal teacher',
      img: U('1780396700817-2ec700591808', 800, 800), base: 'Leeds, UK · and online', langs: 'English, Spanish', years: 18, rating: '5.0', reviewsN: 286, cur: '£',
      creds: ['Registered midwife for fifteen years', 'Antenatal teacher', 'Runs classes for first-time parents and partners'],
      about: 'Rosa runs calm, practical antenatal classes: what happens in labour, feeding, the first few days and looking after each other. Classes are for learning together: for anything about your own care, she’ll point you to your own midwife.',
      services: [ { id: 'course', name: 'Antenatal course', dur: 'Four evenings', price: 160, desc: 'For you and your birth partner.' },
                  { id: 'feeding', name: 'Feeding workshop', dur: '2 hours', price: 40, desc: 'Breast, bottle and everything between.' },
                  { id: 'online', name: 'Online class', dur: '90 minutes', price: 25, desc: 'One topic, live.' } ],
      avail: { days: [1, 3, 6], times: ['10:00', '18:30'] },
      reviews: [ { who: '@due_in_may_ellie', stars: 5, ago: 2, text: 'We left feeling ready, not scared.' }, { who: '@first_time_dad_sam', stars: 5, ago: 22, text: 'Finally understood what my job is.' }, { who: '@grace_mensah_doula', stars: 5, ago: 50, text: 'A brilliant teacher.' } ],
      posts: [ { ago: 1, text: 'If you’re ever unsure about anything, call your maternity unit. That’s what they’re there for, day and night, and nobody minds.' } ],
      tier: 'Pro Zone', verified: true },
    { key: 'yuki-tanaka-yoga', name: 'Yuki Tanaka Pregnancy Yoga', color: '#047857', tag: 'Gentle pregnancy yoga and breathing', role: 'Pregnancy yoga teacher',
      img: U('1589553009868-c7b2bb474531', 800, 800), base: 'Bristol, UK · and online', langs: 'English, Japanese', years: 12, rating: '4.9', reviewsN: 214, cur: '£',
      creds: ['Specialist pregnancy yoga training', 'Teaches classes in Bristol', 'Mother of two'],
      about: 'Yuki teaches gentle movement, stretching and breathing for pregnancy. Classes are calm and sociable. Check with your midwife before starting any new exercise.',
      services: [ { id: 'class', name: 'Weekly class', dur: '75 minutes', price: 12, desc: 'In Bristol or online.' },
                  { id: 'block', name: 'Six-week block', dur: 'Six classes', price: 60, desc: 'Save on the weekly price.' },
                  { id: 'partner', name: 'Partner workshop', dur: '2 hours', price: 35, desc: 'Breathing and comfort for two.' } ],
      avail: { days: [2, 4, 6], times: ['10:00', '18:00'] },
      reviews: [ { who: '@due_in_may_ellie', stars: 5, ago: 4, text: 'The highlight of my week.' }, { who: '@first_time_dad_sam', stars: 5, ago: 28, text: 'The partner workshop was lovely.' }, { who: '@rosa_delgado_antenatal', stars: 5, ago: 56, text: 'Safe and calm.' } ],
      posts: [ { ago: 2, text: 'This week’s class ended with ten minutes of slow breathing and tea. Half the class made friends for life.' } ],
      tier: 'Pro Zone', verified: true },
    { key: 'grace-mensah-doula', name: 'Grace Mensah Doula Support', color: '#BE185D', tag: 'Emotional and practical birth support', role: 'Doula',
      img: U('1531123897727-8f129e1688ce', 800, 800), base: 'London, UK', langs: 'English, Twi', years: 9, rating: '4.9', reviewsN: 168, cur: '£',
      creds: ['Trained doula', 'Supported over two hundred births', 'Also offers postnatal support'],
      about: 'Grace offers calm, practical support before, during and after birth, working alongside your midwife. A doula doesn’t give medical advice, but she’s there for you and your partner.',
      services: [ { id: 'birth', name: 'Birth support package', dur: 'From 36 weeks', price: 950, desc: 'Two visits before, the birth and one after.' },
                  { id: 'postnatal', name: 'Postnatal visit', dur: '3 hours', price: 75, desc: 'Rest, feeding support and a hot meal.' },
                  { id: 'chat', name: 'Getting-to-know-you call', dur: '30 minutes', price: 20, desc: 'Taken off the package if you book.' } ],
      avail: { days: [1, 2, 4, 5], times: ['11:00', '17:00'] },
      reviews: [ { who: '@due_in_may_ellie', stars: 5, ago: 3, text: 'Like having a calm big sister.' }, { who: '@first_time_dad_sam', stars: 5, ago: 30, text: 'She looked after me too.' }, { who: '@yuki_tanaka_yoga', stars: 5, ago: 60, text: 'Wonderful.' } ],
      posts: [ { ago: 3, text: 'Partners: your job isn’t to fix anything. Bring water, hold a hand, ask what helps, and keep the snacks coming.' } ],
      tier: 'Pro Zone', verified: true }
  ],
  communities: [
    { key: 'due-together', name: 'Due Together', domain: 'due.pregnancyxx.com', color: '#2563EB', img: U('1573496546038-82f9c39f6365', 900, 500),
      scope: 'Global', where: 'Wherever you’re expecting', members: 468000, online: 5860, tagline: 'Find others due the same month as you.',
      about: 'Parents-to-be sharing the journey, month by month. We support each other, but we’re not medical experts: for anything about your health or your baby’s, call your midwife or maternity unit, NHS 111, or 999 in an emergency. This is a demo community.',
      rules: ['No medical advice: ask your midwife', 'Be kind, every journey is different', 'No selling'],
      mods: ['@due_in_may_ellie', '@first_time_dad_sam'],
      threads: [ { t: 'Due in May: say hello!', by: '@due_in_may_ellie', tag: 'MAY', replies: 2460, ago: 0, votes: 4280 }, { t: 'What actually went in your hospital bag?', by: '@first_time_dad_sam', tag: 'GETTING READY', replies: 1820, ago: 1, votes: 3460 }, { t: 'Partners: what helped you feel useful?', by: '@first_time_dad_sam', tag: 'PARTNERS', replies: 1240, ago: 2, votes: 2780 }, { t: 'Antenatal class friends: still in touch?', by: '@due_in_may_ellie', tag: 'CLASSES', replies: 860, ago: 3, votes: 1940 } ],
      events: [ { title: 'Live: packing the hospital bag together', day: 3, time: '19:00', where: 'Online' }, { title: 'Partners’ evening: what to expect', day: 12, time: '19:30', where: 'Online' } ] },
    { key: 'leeds-bump-buddies', name: 'Leeds Bump Buddies', domain: 'leeds.pregnancyxx.com', color: '#EA580C', img: U('1761035005546-62b8018b212a', 900, 500),
      scope: 'Local', where: 'Leeds', members: 1380, online: 32, tagline: 'Walks, coffee and new friends before baby arrives.',
      about: 'Parents-to-be around Leeds who meet for gentle walks, coffee and the odd yoga class, and stay friends after the babies arrive. Partners welcome.',
      rules: ['Everyone welcome', 'No medical advice', 'Gentle pace always'],
      mods: ['@rosa_delgado_antenatal', '@due_in_may_ellie'],
      threads: [ { t: 'December walk: Roundhay Park and hot chocolate', by: '@due_in_may_ellie', tag: 'MEETUP', replies: 40, ago: 0, votes: 92 }, { t: 'Who’s due in spring?', by: '@rosa_delgado_antenatal', tag: 'HELLO', replies: 34, ago: 1, votes: 70 }, { t: 'Best baby-change spots in town', by: '@due_in_may_ellie', tag: 'TIPS', replies: 26, ago: 2, votes: 54 } ],
      events: [ { title: 'December walk: Roundhay Park', day: 9, time: '10:30', where: 'Leeds' }, { title: 'New year coffee morning', day: 45, time: '10:30', where: 'Leeds' } ] }
  ],
  feed: [
    { av: 'PX', avBg: BLUE, author: 'PregnancyXX Editorial', sub: 'Featured · Just now', badge: '★ FEATURED',
      text: 'Weeks, scans, classes and getting ready, shared with people at the same stage. This is a demo: for anything about your health or your baby’s, speak to your midwife, call NHS 111, or 999 in an emergency.',
      img: U('1538678867871-8a43e7487746', 800, 600), eng: '♡ 26.8K · 💬 2.2K · ↗ 3.4K' },
    { av: 'EL', avBg: PEACH, author: '@due_in_may_ellie', sub: 'Week by Week · Just now', badge: 'COMMUNITY',
      text: '20 weeks today. We saw the scan pictures and my partner hasn’t stopped smiling since. Halfway there!',
      img: U('1528218635780-5952720c9729', 800, 600), eng: '♡ 13.6K · 💬 1.6K · ↗ 1.1K' },
    { av: 'BC', avBg: BLUE, author: 'Bumpclass', sub: 'Founding Partner · Brand Zone', badge: 'BRAND ZONE',
      text: 'Live now: a midwife-led birth-preparation class. What happens in labour, how partners can help, and your questions answered. Follow <b>Bumpclass</b>.',
      img: U('1767605545968-a102fc151b08', 800, 600), eng: '♡ 15.8K · 💬 2.0K · ↗ 2.3K' },
    { av: 'LN', avBg: SAGE, author: 'Littlenest', sub: 'Brand Zone · 1h ago', badge: 'BRAND ZONE',
      text: 'Tiny vests, soft sleepsuits and not too many of either. The <b>Littlenest First Wardrobe</b> is everything for the first six weeks.',
      img: U('1766918780914-5df4a5a98c44', 800, 600), eng: '♡ 7.6K · 💬 540 · ↗ 760' },
    { av: 'SD', avBg: SAGE, author: '@first_time_dad_sam', sub: 'Partners · 2h ago', badge: 'COMMUNITY',
      text: 'Built the cot, washed every tiny vest and learned to fold a sleepsuit. My partner says I’m “nesting”. I say I’m ready.',
      img: U('1543346242-2b8e41fb91ca', 800, 600), eng: '♡ 6.8K · 💬 520 · ↗ 440' },
    { av: 'BM', avBg: ROSE, author: 'Bloom Maternity', sub: 'Brand Zone · 4h ago', badge: 'BRAND ZONE',
      text: 'Comfortable from the first bump to the last month, and beyond. The <b>Bloom Everyday Dress</b> grows with you.',
      img: U('1568043625493-2b0633c7c491', 800, 600), eng: '♡ 5.4K · 💬 360 · ↗ 480' },
    { av: 'YT', avBg: SAGE, author: 'Yuki Tanaka Pregnancy Yoga', sub: 'Classes · 6h ago', badge: 'PRO ZONE',
      text: 'Sunset at the end of a long week. This week’s class was all about slow breathing: in for four, out for six.',
      img: U('1778184423837-d5a47ffe23d5', 800, 600), eng: '♡ 4.6K · 💬 280 · ↗ 360' }
  ],
  prompts: ['What happens at the 20-week scan?', 'What should I pack in my hospital bag?', 'How can my partner help in labour?', 'When are antenatal classes usually?'],
  businesses: ['safe-seat-fitting', 'calm-bump-studio']
};

/* the four Brand Zones and two Business Zones */
const brand = (o) => Object.assign({ kind: 'brand', gw: 'pregnancy', verified: true }, o);
Object.assign(ZONES, {
  'bumpclass': brand({ key: 'bumpclass', name: 'Bumpclass', color: '#2563EB', gradient: BLUE, tier: 'Founding Partner',
    tagline: 'Antenatal classes led by midwives', stats: { followers: '386K', content: '620', products: '8' },
    ad: { badge: 'Featured', img: U('1782478971950-197713212321', 760, 760), hl: 'Feel ready, together.', sub: 'Antenatal classes led by registered midwives.', meta: 'From £25' },
    products: [
      { name: 'Antenatal Course', price: '£160', tag: 'FLAGSHIP', emoji: '🤰', rating: 4.9, reviews: 4860, cat: 'classes', special: true, desc: 'Four evenings with a midwife: labour, birth, feeding and the first days.', features: ['Partners included', 'Small groups'], review: { who: 'Ellie M.', text: 'We made friends for life.' } },
      { name: 'Online Class Pass', price: '£25', tag: 'BESTSELLER', emoji: '💻', rating: 4.8, reviews: 3260, cat: 'classes', desc: 'Three live online classes of your choice.', features: ['Recordings for a month'], review: { who: 'Sam K.', text: 'Perfect around shifts.' } },
      { name: 'Feeding Workshop', price: '£40', emoji: '🍼', rating: 4.8, reviews: 1460, cat: 'workshops', desc: 'Breast, bottle and everything between.', features: ['Two hours'], review: { who: 'Grace M.', text: 'Practical and kind.' } },
      { name: 'Gift Voucher', price: '£50', tag: 'SPECIAL', emoji: '🎁', rating: 4.9, reviews: 520, cat: 'workshops', special: true, desc: 'Towards any class.', features: ['Valid a year'], review: { who: 'Rosa D.', text: 'A lovely present.' } }
    ],
    shopCats: [ { key: 'classes', label: 'Classes', icon: '🤰' }, { key: 'workshops', label: 'Workshops', icon: '🍼' } ],
    feed: [
      { type: 'post', sub: 'Brand post · 2h', text: 'Mats out, partners in. Week two of the <b>Antenatal Course</b> is all about comfort in labour.', img: U('1710897869539-a48e3d69a8d7', 800, 440), eng: '♡ 15.8K · 💬 2.0K · ↗ 2.3K', product: 0 },
      { type: 'community', who: 'Ellie M.', whoBg: BLUE, sub: 'Community · 1d', text: 'When should we book an antenatal class?', eng: '♡ 860 · 💬 240', reply: 'Hi Ellie! Many people book around 20 to 24 weeks and take classes between about 30 and 36 weeks, but there’s no wrong time. Your midwife can tell you about free NHS classes near you too. 🤰' }
    ],
    events: [ { zoneEvent: true, tag: 'LIVE', title: 'Bumpclass Live · a midwife-led birth preparation class', when: 'Live now', desc: 'Labour, partners and your questions, live.', registered: 9640, capacity: 22000 } ],
    about: { founded: 'Leeds · 2012', story: 'Midwives who wanted every parent-to-be to feel ready, not frightened. We joined PregnancyXX as Founding Partner because good information and good company make a real difference.', milestones: [['2012', 'The first class'], ['2020', 'Online classes'], ['2026', 'Founding Partner on PregnancyXX']], values: ['Led by midwives', 'Calm, not scary', 'Partners welcome'] } }),

  'littlenest': brand({ key: 'littlenest', name: 'Littlenest', color: '#047857', gradient: SAGE, tier: 'Brand Zone',
    tagline: 'Organic baby clothes and nursery basics', stats: { followers: '204K', content: '420', products: '86' },
    ad: { badge: 'New', img: U('1766918780916-228d10b071be', 760, 760), hl: 'Just what you need. Nothing more.', sub: 'Organic cotton clothes for the first year.', meta: 'From £8' },
    products: [
      { name: 'First Wardrobe', price: '£48', tag: 'FLAGSHIP', emoji: '👶', rating: 4.9, reviews: 3640, cat: 'clothes', special: true, desc: 'Vests, sleepsuits and hats for the first six weeks.', features: ['Organic cotton', 'Newborn and 0–3 months'], review: { who: 'Ellie M.', text: 'Exactly enough.' } },
      { name: 'Sleepsuit Three-Pack', price: '£22', tag: 'BESTSELLER', emoji: '🧸', rating: 4.8, reviews: 2860, cat: 'clothes', desc: 'Soft, zip-up sleepsuits.', features: ['Two-way zip'], review: { who: 'Sam K.', text: 'Zips! No more poppers at 3 a.m.' } },
      { name: 'Cot Mobile', price: '£28', emoji: '🐑', rating: 4.8, reviews: 960, cat: 'nursery', desc: 'Felted sheep, handmade in Wales.', features: ['Wool'], review: { who: 'Yuki T.', text: 'Beautiful.' } },
      { name: 'Muslin Squares', price: '£8', tag: 'SPECIAL', emoji: '🧺', rating: 4.8, reviews: 1840, cat: 'nursery', special: true, desc: 'Six soft muslins. You will use them all.', features: ['Organic'], review: { who: 'Grace M.', text: 'Every new parent needs these.' } }
    ],
    shopCats: [ { key: 'clothes', label: 'Clothes', icon: '👶' }, { key: 'nursery', label: 'Nursery', icon: '🐑' } ],
    feed: [ { type: 'post', sub: 'Brand post · 1d', text: 'One white vest, two tiny socks and a little star. The <b>First Wardrobe</b> starts here.', img: U('1622290319146-7b63df48a635', 800, 440), eng: '♡ 7.6K · 💬 540', product: 0 } ],
    events: [ { zoneEvent: true, tag: 'SALE', title: 'Winter sleepsuits 20% off', when: 'Dec 4 · All week', desc: 'Sleepsuit three-packs, 20% off.', registered: 2240, capacity: 6000 } ],
    about: { founded: 'Bristol · 2014', story: 'Two new parents who were overwhelmed by baby shops and wanted to keep it simple.', milestones: [['2014', 'The first vest'], ['2021', 'Nursery range'], ['2026', 'Brand Zone on PregnancyXX']], values: ['Organic cotton', 'Only what you need', 'Made to be handed down'] } }),

  'strollwell': brand({ key: 'strollwell', name: 'Strollwell', color: '#EA580C', gradient: PEACH, tier: 'Brand Zone',
    tagline: 'Prams and car seats, tested and fitted', stats: { followers: '168K', content: '360', products: '28' },
    ad: { badge: 'Featured', img: U('1560328055-e938bb2ed50a', 760, 760), hl: 'Out and about, from day one.', sub: 'Prams and car seats, with free fitting.', meta: 'From £120' },
    products: [
      { name: 'Strollwell Travel System', price: 'From £640', tag: 'FLAGSHIP', emoji: '🛒', rating: 4.8, reviews: 2140, cat: 'prams', special: true, desc: 'Pram, pushchair and car seat that click together.', features: ['Folds one-handed', 'Free car seat fitting'], review: { who: 'Sam K.', text: 'Easy to fold. Honestly.' } },
      { name: 'City Pushchair', price: '£320', tag: 'BESTSELLER', emoji: '🏙️', rating: 4.7, reviews: 1640, cat: 'prams', desc: 'Light and compact for buses and trains.', features: ['From six months'], review: { who: 'Ellie M.', text: 'Fits in our tiny hall.' } },
      { name: 'Infant Car Seat', price: '£180', emoji: '🚗', rating: 4.8, reviews: 1240, cat: 'seats', desc: 'Rear-facing seat for newborns, tested to current standards.', features: ['Free fitting check'], review: { who: 'Grace M.', text: 'The fitter was brilliant.' } },
      { name: 'Car Seat Fitting Check', price: '£15', tag: 'SPECIAL', emoji: '✅', rating: 4.9, reviews: 860, cat: 'seats', special: true, desc: 'An expert checks any seat is fitted properly.', features: ['Twenty minutes'], review: { who: 'Rosa D.', text: 'Every parent should do this.' } }
    ],
    shopCats: [ { key: 'prams', label: 'Prams', icon: '🛒' }, { key: 'seats', label: 'Car seats', icon: '🚗' } ],
    feed: [ { type: 'post', sub: 'Brand post · 3h', text: 'Sunset, a little one up in the air and the pushchair parked for five minutes. The <b>City Pushchair</b> goes where you go.', img: U('1542948843-bf19f4f535cf', 800, 440), eng: '♡ 5.8K · 💬 380', product: 1 } ],
    events: [ { zoneEvent: true, tag: 'EVENT', title: 'Car seat fitting day: free checks', when: 'Dec 5 · All day', desc: 'Bring your car and seat for a free check.', registered: 1480, capacity: 3000 } ],
    about: { founded: 'Manchester · 2010', story: 'Engineers and parents who test every pram on real pavements and every seat with real fitters.', milestones: [['2010', 'The first pushchair'], ['2018', 'Free fitting service'], ['2026', 'Brand Zone on PregnancyXX']], values: ['Safety tested', 'Free fitting', 'Repair, don’t replace'] } }),

  'bloom-maternity': brand({ key: 'bloom-maternity', name: 'Bloom Maternity', color: '#BE185D', gradient: ROSE, tier: 'Brand Zone',
    tagline: 'Comfortable maternity and nursing clothes', stats: { followers: '142K', content: '300', products: '74' },
    ad: { badge: 'Christmas', img: U('1623249288685-835abe0123b4', 760, 760), hl: 'Comfortable, every month.', sub: 'Maternity and nursing clothes that grow with you.', meta: 'From £18' },
    products: [
      { name: 'Bloom Everyday Dress', price: '£42', tag: 'FLAGSHIP', emoji: '👗', rating: 4.8, reviews: 2460, cat: 'maternity', special: true, desc: 'A soft dress that fits from the first bump to nursing.', features: ['Nursing access', 'Machine washable'], review: { who: 'Ellie M.', text: 'I lived in it.' } },
      { name: 'Over-Bump Leggings', price: '£24', tag: 'BESTSELLER', emoji: '🩱', rating: 4.8, reviews: 3120, cat: 'maternity', desc: 'Soft, supportive and stay up.', features: ['Two lengths'], review: { who: 'Yuki T.', text: 'Perfect for yoga.' } },
      { name: 'Nursing Top Pair', price: '£30', emoji: '👚', rating: 4.7, reviews: 1460, cat: 'nursing', desc: 'Discreet feeding tops.', features: ['Two colours'], review: { who: 'Grace M.', text: 'Comfy and easy.' } },
      { name: 'Winter Wrap Cardigan', price: '£38', tag: 'SPECIAL', emoji: '🧶', rating: 4.8, reviews: 640, cat: 'nursing', special: true, desc: 'Wraps over a bump, then a baby carrier.', features: ['Wool blend'], review: { who: 'Rosa D.', text: 'Clever design.' } }
    ],
    shopCats: [ { key: 'maternity', label: 'Maternity', icon: '👗' }, { key: 'nursing', label: 'Nursing', icon: '👚' } ],
    feed: [ { type: 'post', sub: 'Brand post · 5h', text: 'A quiet morning by the window, just the two of you. The <b>Nursing Top Pair</b>: soft, simple and easy.', img: U('1773243086577-5a98bc868a2f', 800, 440), eng: '♡ 5.4K · 💬 360', product: 2 } ],
    events: [ { zoneEvent: true, tag: 'EVENT', title: 'Try-on evening: maternity and nursing', when: 'Dec 10 · 18:00', desc: 'Try everything on, with tea and cake.', registered: 680, capacity: 1600 } ],
    about: { founded: 'London · 2016', story: 'A designer who couldn’t find maternity clothes she wanted to wear.', milestones: [['2016', 'The first dress'], ['2022', 'Nursing range'], ['2026', 'Brand Zone on PregnancyXX']], values: ['Comfort first', 'Wear it after too', 'Ethically made'] } }),

  'safe-seat-fitting': { key: 'safe-seat-fitting', kind: 'business', gw: 'pregnancy', name: 'Safe Seat Fitting', color: '#EA580C', gradient: PEACH, img: U('1546015720-b8b30df5aa27', 900, 500),
    tier: 'Verified', category: 'Car seat fitting service', tagline: 'Every car seat, fitted properly.',
    about: { founded: 'Leeds · 2015', story: 'Trained fitters who check and fit car seats at home, at work or in our car parks, for any brand. We show you how to do it yourself, too.' },
    stats: { years: 11, staff: 22, clients: '26,000 seats checked' },
    caps: [ { name: 'Fitting', detail: 'At home or at our sites.' }, { name: 'Checks', detail: 'Any seat, any car.' }, { name: 'Teaching', detail: 'So you can fit it yourself.' } ],
    specs: { moq: 'One seat', lead: '2 to 7 days', regions: 'Yorkshire', certs: ['Trained fitters', 'Brand-independent', 'DBS checked'] },
    supplies: [ { kind: 'brand', key: 'strollwell', what: 'Fitting days at Strollwell shops' } ],
    cases: [ { title: 'One morning, eighty seats', text: 'A community fitting day in Leeds checked eighty seats.' } ],
    feed: [ { sub: 'Team · 3d', text: 'December fitting days are filling up.' } ],
    contact: { person: 'Dan Whitaker, Bookings', response: 'Replies within one working day' } },

  'calm-bump-studio': { key: 'calm-bump-studio', kind: 'business', gw: 'pregnancy', name: 'Calm Bump Studio', color: '#047857', gradient: SAGE, img: U('1770831208268-07daeaa6c6c4', 900, 500),
    tier: 'Verified', category: 'Pregnancy and baby classes', tagline: 'Yoga, baby massage and friendly coffee mornings.',
    about: { founded: 'Bristol · 2013', story: 'A small studio for pregnancy yoga, baby massage and parent coffee mornings. Our teachers are specialist-trained, and we always say check with your midwife first.' },
    stats: { years: 13, staff: 14, clients: '9,000 parents welcomed' },
    caps: [ { name: 'Pregnancy yoga', detail: 'From the second trimester.' }, { name: 'Baby massage', detail: 'Five-week courses.' }, { name: 'Coffee mornings', detail: 'Every Friday.' } ],
    specs: { moq: 'One class', lead: 'Book weekly', regions: 'Bristol', certs: ['Specialist-trained teachers', 'Step-free studio', 'Baby-change room'] },
    supplies: [ { kind: 'brand', key: 'littlenest', what: 'Muslins for baby massage' } ],
    cases: [ { title: 'From class to friends', text: 'Our spring class still meets every Friday, a year on.' } ],
    feed: [ { sub: 'Studio · 5d', text: 'New Saturday pregnancy yoga class from January.' } ],
    contact: { person: 'Laura Bennett, Studio', response: 'Replies within two working days' } }
});

/* events in the Events tab */
gxEvents('pregnancy', [
  { gw: 'pregnancy', zone: 'bumpclass', type: 'Live', icon: '🔴', live: true, time: 'Live Now', title: 'Bumpclass Live · a midwife-led birth preparation class', desc: 'Labour, partners and your questions, live.' },
  { gw: 'pregnancy', type: 'Event', icon: '🎒', time: 'Nov 30', title: 'Live: packing the hospital bag together', desc: 'Due Together packs along, online.' },
  { gw: 'pregnancy', zone: 'littlenest', type: 'Sale', icon: '🧸', time: 'Dec 4', title: 'Winter sleepsuits 20% off', desc: 'Sleepsuit three-packs, 20% off.' },
  { gw: 'pregnancy', zone: 'strollwell', type: 'Event', icon: '🚗', time: 'Dec 5', title: 'Car seat fitting day: free checks', desc: 'Bring your car and seat.' },
  { gw: 'pregnancy', type: 'Event', icon: '🌳', time: 'Dec 6', title: 'Leeds Bump Buddies: Roundhay Park walk', desc: 'A gentle walk and hot chocolate.' },
  { gw: 'pregnancy', type: 'Event', icon: '🧔', time: 'Dec 9', title: 'Partners’ evening: what to expect', desc: 'Due Together, online.' },
  { gw: 'pregnancy', zone: 'bloom-maternity', type: 'Event', icon: '👗', time: 'Dec 10', title: 'Try-on evening: maternity and nursing', desc: 'Tea, cake and comfy clothes.' },
  { gw: 'pregnancy', type: 'Event', icon: '🍼', time: 'Dec 12', title: 'Feeding workshop with Rosa Delgado', desc: 'Breast, bottle and everything between.' }
]);
})();
/* ═════════ /PREGNANCYXX ═════════ */
