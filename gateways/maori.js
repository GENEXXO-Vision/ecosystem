/* ═════════ MAORIXX — a Cultures demo gateway (2026-11-28, Sean; build -102) ═════════
   Built with the _tools/README.md recipe. Palette (dark): night sky, pōhutukawa red and fern green.
   Home sector: Culture (Sean’s list; also listed in Language, so 'culture' is in HOME_ONLY). Every group, maker, pro and
   product is fictional; places are real.
   CARE (_tools/CARE-BRIEFS.md): te reo Māori, tikanga, kapa haka, art and community in Aotearoa and the UK. Māori always
   with the macron. Never tā moko on non-Māori models, sacred items as merchandise or mock haka. No outside adviser
   (Sean, 21 Nov), so terms and imagery get extra care: carvings and places are shown, not sold. */
GW_HOME.maori = 'culture';
(function(){
const U = (id, w, h) => `https://images.unsplash.com/photo-${id}?w=${w}&h=${h}&fit=crop&q=75`;
const RED = 'linear-gradient(135deg,#F87171,#991B1B)', FERN = 'linear-gradient(135deg,#86EFAC,#166534)', SEA = 'linear-gradient(135deg,#67E8F9,#155E75)', OCHRE = 'linear-gradient(135deg,#FCD34D,#92400E)';

GATEWAYS.maori = {
  name: 'MaoriXX', domain: 'maorixx.com', emoji: '🌿', sector: 'culture', live: true,
  tagline: 'The Te Ao Māori Universe',
  theme: {
    bg: '#0C1210', text: '#F0F5F2', cardBg: '#15201C', cardBorder: 'rgba(240,245,242,.09)',
    headerBg: 'linear-gradient(180deg,#15201C,#0C1210)', accent: '#E0483E', accentAlt: '#4ADE80', dark: true
  },
  gradient: 'linear-gradient(135deg,#991B1B,#0C1210,#166534)',
  stats: { members: '1.2M', brands: '220+', agents: '16' },
  spaces: ['All Feed', 'Te Reo', 'Kapa Haka', 'Toi (Art)', 'Matariki', 'Whānau in the UK'],
  trending: ['#TeReoMāori', '#KapaHaka', '#Matariki'],
  brandZones: [
    { key: 'kotuku-cultural-group', name: 'Kōtuku Cultural Group', color: '#E0483E', tier: 'Founding Partner', tag: 'A Māori cultural group in London: kapa haka, te reo and whānau' },
    { key: 'korero-books', name: 'Kōrero Books', color: '#4ADE80', tier: 'Brand Zone', tag: 'Books and cards for learning te reo Māori' },
    { key: 'rau-weaving-studio', name: 'Rau Weaving Studio', color: '#F59E0B', tier: 'Brand Zone', tag: 'Harakeke weaving classes, taught by Māori weavers' },
    { key: 'pohutukawa-kitchen', name: 'Pōhutukawa Kitchen', color: '#22D3EE', tier: 'Brand Zone', tag: 'A New Zealand café in Bristol' }
  ],
  apps: [
    { name: 'Kupu o te Rā', color: '#4ADE80', desc: 'A te reo Māori word each day, with how to say it', key: 'reo-word', url: 'apps/reo-word.html',
      dev: 'Kōrero Books', rating: '4.9', users: '540K', perms: ['profile', 'feed'],
      tagline: 'One word a day. Say it out loud.',
      about: 'Kupu o te Rā (word of the day) gives you one te reo Māori word a day, with its meaning, a guide to saying it and an example. Vowels are short or long, and the macron shows a long vowel: it changes the meaning, so it always matters.',
      features: ['A word each day', 'How to say it', 'Vowel sounds explained', 'Share your word'],
      shots: ['apps/reo-word/shot-1.jpg', 'apps/reo-word/shot-2.jpg', 'apps/reo-word/shot-3.jpg'],
      version: '2.2', size: '9 KB',
      updates: [ { v: '2.2', ago: 2, notes: 'Vowel guide.' }, { v: '1.8', ago: 66, notes: 'Your words.' }, { v: '1.3', ago: 200, notes: 'Signed in with GENEXXO.' } ],
      reviews: [ { who: '@learning_reo_lucy', stars: 5, ago: 1, text: 'I finally say whānau properly.' }, { who: '@matiu_reo_tutor', stars: 5, ago: 18, text: 'Careful with the macrons. Ka pai.' }, { who: '@london_whanau_mere', stars: 4, ago: 40, text: 'My kids use it at breakfast.' } ] },
    { name: 'Whakataukī', color: '#E0483E', desc: 'A Māori proverb to reflect on', key: 'whakatauki', url: 'apps/whakatauki.html',
      dev: 'Kōtuku Cultural Group', rating: '4.9', users: '320K', perms: ['profile', 'feed'],
      tagline: 'Old words for today.',
      about: 'Whakataukī are Māori proverbs, handed down to teach and guide. Each card has the proverb in te reo Māori, an English meaning and a note on when it’s used. Meanings can be deep and are often explained differently by different iwi.',
      features: ['A proverb each day', 'Te reo and English', 'When it’s used', 'Save and share'],
      shots: ['apps/whakatauki/shot-1.jpg', 'apps/whakatauki/shot-2.jpg', 'apps/whakatauki/shot-3.jpg'],
      version: '1.6', size: '9 KB',
      updates: [ { v: '1.6', ago: 3, notes: 'Saved cards.' }, { v: '1.3', ago: 70, notes: 'Notes on use.' }, { v: '1.0', ago: 190, notes: 'Signed in with GENEXXO.' } ],
      reviews: [ { who: '@london_whanau_mere', stars: 5, ago: 2, text: 'Reminds me of my nan.' }, { who: '@learning_reo_lucy', stars: 5, ago: 24, text: 'Beautiful.' }, { who: '@aroha_weaves', stars: 4, ago: 48, text: 'Respectfully done.' } ] },
    { name: 'Matariki Calendar', color: '#22D3EE', desc: 'The nine stars of Matariki and what each one holds', key: 'matariki', url: 'apps/matariki.html',
      dev: 'Pōhutukawa Kitchen', rating: '4.8', users: '260K', perms: ['profile', 'feed'],
      tagline: 'Remember, celebrate, look ahead.',
      about: 'Matariki is the Māori new year, marked when the Matariki star cluster rises in mid-winter in Aotearoa, in June or July. This app explains the nine stars and what each is connected to, and helps you plan a gathering wherever you are.',
      features: ['The nine stars', 'Remember, celebrate, look ahead', 'Plan a gathering', 'Share a wish'],
      shots: ['apps/matariki/shot-1.jpg', 'apps/matariki/shot-2.jpg', 'apps/matariki/shot-3.jpg'],
      version: '1.4', size: '9 KB',
      updates: [ { v: '1.4', ago: 1, notes: 'Gathering planner.' }, { v: '1.2', ago: 60, notes: 'The nine stars.' }, { v: '1.0', ago: 180, notes: 'Signed in with GENEXXO.' } ],
      reviews: [ { who: '@london_whanau_mere', stars: 5, ago: 3, text: 'Our first Matariki dinner in London.' }, { who: '@matiu_reo_tutor', stars: 5, ago: 26, text: 'Clear and kind.' }, { who: '@learning_reo_lucy', stars: 4, ago: 52, text: 'Learned so much.' } ] }
  ],
  pros: [
    { key: 'matiu-reo-tutor', name: 'Matiu Rangi, Te Reo Tutor', color: '#4ADE80', tag: 'Te reo Māori classes for beginners, online and in London', role: 'Te reo Māori tutor',
      img: U('1614247521228-d4184c975eff', 800, 800), base: 'London, UK · and online', langs: 'Te reo Māori, English', years: 9, rating: '5.0', reviewsN: 168, cur: '£',
      creds: ['Raised speaking te reo Māori', 'Teaches beginners and whānau', 'Tutor with Kōtuku Cultural Group'],
      about: 'Matiu teaches te reo Māori to beginners: pronunciation first, then everyday kōrero. His classes welcome everyone, Māori and non-Māori, and he’s patient with vowels.',
      services: [ { id: 'one', name: 'One-to-one lesson', dur: '1 hour', price: 35, desc: 'Online, at your pace.' },
                  { id: 'course', name: 'Beginners’ course', dur: 'Eight weeks', price: 120, desc: 'Evenings, online or in London.' },
                  { id: 'names', name: 'Saying names well', dur: '30 minutes', price: 20, desc: 'Place names and people’s names, said properly.' } ],
      avail: { days: [1, 3, 4], times: ['12:00', '19:00'] },
      reviews: [ { who: '@learning_reo_lucy', stars: 5, ago: 2, text: 'Patient and funny.' }, { who: '@london_whanau_mere', stars: 5, ago: 30, text: 'My tamariki love his classes.' }, { who: '@dr_hannah_collections', stars: 5, ago: 60, text: 'Helped our staff say names properly.' } ],
      posts: [ { ago: 1, text: 'Five vowels, short or long. Get those right and most of te reo Māori opens up. The macron isn’t decoration: kēkē is an armpit, keke is a cake.' } ],
      tier: 'Pro Zone', verified: true },
    { key: 'aroha-weaves', name: 'Aroha Te Paa, Weaver', color: '#F59E0B', tag: 'Harakeke weaving workshops', role: 'Weaver (raranga)',
      img: U('1630939687530-241d630735df', 800, 800), base: 'Bristol, UK · and online', langs: 'English, te reo Māori', years: 14, rating: '4.9', reviewsN: 112, cur: '£',
      creds: ['Learned raranga from her nan', 'Teaches beginners’ workshops', 'Works with UK-grown harakeke'],
      about: 'Aroha teaches harakeke (New Zealand flax) weaving, starting with the tikanga of cutting and caring for the plant. Beginners make a small kete or flower.',
      services: [ { id: 'work', name: 'Beginners’ workshop', dur: '3 hours', price: 45, desc: 'Make a small woven flower.' },
                  { id: 'kete', name: 'Kete workshop', dur: 'Two days', price: 140, desc: 'Weave a small kete (basket).' },
                  { id: 'talk', name: 'Talk: raranga and tikanga', dur: '1 hour', price: 80, desc: 'For groups and museums.' } ],
      avail: { days: [2, 5, 6], times: ['10:00', '14:00'] },
      reviews: [ { who: '@learning_reo_lucy', stars: 5, ago: 4, text: 'Calm, careful and generous.' }, { who: '@dr_hannah_collections', stars: 5, ago: 32, text: 'A wonderful teacher.' }, { who: '@london_whanau_mere', stars: 5, ago: 62, text: 'Like being home.' } ],
      posts: [ { ago: 2, text: 'We never take the centre shoots of the harakeke, the parent and child leaves. Those keep the plant alive. Weaving starts with respect.' } ],
      tier: 'Pro Zone', verified: true },
    { key: 'dr-hannah-collections', name: 'Dr Hannah Ellis, Collections Curator', color: '#22D3EE', tag: 'Pacific collections and community partnerships', role: 'Museum curator',
      img: U('1590650213165-c1fef80648c4', 800, 800), base: 'Edinburgh, UK', langs: 'English', years: 12, rating: '4.9', reviewsN: 64, cur: '£',
      creds: ['Curator of Pacific collections', 'Works with Māori communities on display and return', 'Speaks at museums and schools'],
      about: 'Hannah looks after Pacific collections in a UK museum and works alongside Māori communities on how taonga (treasured objects) are cared for, described and, where requested, returned.',
      services: [ { id: 'talk', name: 'Talk: museums and taonga', dur: '1 hour', price: 90, desc: 'For schools, groups and museums.' },
                  { id: 'advice', name: 'Advice for small museums', dur: '1 hour', price: 70, desc: 'Working with source communities.' },
                  { id: 'tour', name: 'Collections tour', dur: '90 minutes', price: 15, desc: 'Per person, by arrangement.' } ],
      avail: { days: [2, 3, 4], times: ['11:00', '15:00'] },
      reviews: [ { who: '@matiu_reo_tutor', stars: 5, ago: 3, text: 'Listens first.' }, { who: '@aroha_weaves', stars: 5, ago: 36, text: 'Respectful partner.' }, { who: '@learning_reo_lucy', stars: 5, ago: 66, text: 'A fascinating talk.' } ],
      posts: [ { ago: 3, text: 'Museums don’t decide alone how taonga should be described. The community it came from does, and that changes everything about the label.' } ],
      tier: 'Pro Zone', verified: true }
  ],
  communities: [
    { key: 'te-reo-learners', name: 'Te Reo Learners', domain: 'reo.maorixx.com', color: '#4ADE80', img: U('1528287942171-fbe365d1d9ac', 900, 500),
      scope: 'Global', where: 'Wherever you are', members: 148000, online: 1640, tagline: 'Kia kaha te reo Māori. Every learner welcome.',
      about: 'People learning te reo Māori, from first words to fluent kōrero, Māori and non-Māori alike. Always use macrons, be patient with each other and remember that tikanga varies between iwi. This is a demo community.',
      rules: ['Macrons, always', 'Kindness to every learner', 'Respect differences between iwi'],
      mods: ['@matiu_reo_tutor', '@learning_reo_lucy'],
      threads: [ { t: 'Your first sentence in te reo', by: '@learning_reo_lucy', tag: 'BEGINNERS', replies: 980, ago: 0, votes: 2240 }, { t: 'Long vowels: tips that helped', by: '@matiu_reo_tutor', tag: 'PRONUNCIATION', replies: 760, ago: 1, votes: 1860 }, { t: 'Waiata to learn with', by: '@london_whanau_mere', tag: 'WAIATA', replies: 640, ago: 2, votes: 1520 }, { t: 'Saying place names properly', by: '@matiu_reo_tutor', tag: 'NAMES', replies: 520, ago: 3, votes: 1280 } ],
      events: [ { title: 'Live: kōrero hour for beginners', day: 4, time: '19:00', where: 'Online' }, { title: 'Waiata evening', day: 11, time: '19:30', where: 'Online' } ] },
    { key: 'edinburgh-maori-whanau', name: 'Edinburgh Māori Whānau', domain: 'edinburgh.maorixx.com', color: '#E0483E', img: U('1674253490096-8574ec507268', 900, 500),
      scope: 'Local', where: 'Edinburgh', members: 260, online: 8, tagline: 'Kai, waiata and whānau, far from home.',
      about: 'Māori living in and around Edinburgh, their whānau and friends. A monthly shared kai, waiata practice and a Matariki gathering in winter. Everyone is welcome.',
      rules: ['Manaakitanga: look after each other', 'Bring a plate', 'Tamariki always welcome'],
      mods: ['@london_whanau_mere', '@dr_hannah_collections'],
      threads: [ { t: 'December shared kai', by: '@london_whanau_mere', tag: 'MEETUP', replies: 24, ago: 0, votes: 56 }, { t: 'Who can teach the tamariki a waiata?', by: '@london_whanau_mere', tag: 'WAIATA', replies: 16, ago: 1, votes: 38 }, { t: 'Thank you for the welcome', by: '@dr_hannah_collections', tag: 'THANKS', replies: 12, ago: 2, votes: 32 } ],
      events: [ { title: 'December shared kai', day: 7, time: '13:00', where: 'Edinburgh' }, { title: 'New year waiata practice', day: 43, time: '18:00', where: 'Edinburgh' } ] }
  ],
  feed: [
    { av: 'MX', avBg: RED, author: 'MaoriXX Editorial', sub: 'Featured · Just now', badge: '★ FEATURED',
      text: 'Te ao Māori, the Māori world: te reo Māori, tikanga, kapa haka, art and whānau, in Aotearoa and here in the UK. Kia ora, and welcome. We always use macrons, and we know that tikanga can differ from iwi to iwi.',
      img: U('1765200135391-cc6797cf566e', 800, 600), eng: '♡ 14.2K · 💬 1.2K · ↗ 2.0K' },
    { av: 'KC', avBg: RED, author: 'Kōtuku Cultural Group', sub: 'Founding Partner · Brand Zone', badge: 'BRAND ZONE',
      text: 'Live now: kapa haka rehearsal in London. Waiata, poi and the work behind a performance, with our tutors explaining what each item means. Haere mai, come and watch. Follow <b>Kōtuku Cultural Group</b>.',
      img: U('1707912259002-8b328e6ec5a4', 800, 600), eng: '♡ 11.4K · 💬 1.5K · ↗ 1.8K' },
    { av: 'LL', avBg: FERN, author: '@learning_reo_lucy', sub: 'Te Reo · Just now', badge: 'COMMUNITY',
      text: 'Week twelve of te reo Māori. Today I introduced myself in my pepeha for the first time, and nobody laughed at my vowels. Ngā mihi to everyone in the class.',
      img: U('1518657690763-9a447bbb9eca', 800, 600), eng: '♡ 7.8K · 💬 840 · ↗ 620' },
    { av: 'RW', avBg: OCHRE, author: 'Rau Weaving Studio', sub: 'Brand Zone · 1h ago', badge: 'BRAND ZONE',
      text: 'Strips of harakeke, softened and ready. Our <b>Beginners’ Workshop</b> starts with the plant, then the first weave.',
      img: U('1534953342533-7711c98712be', 800, 600), eng: '♡ 4.6K · 💬 300 · ↗ 420' },
    { av: 'MR', avBg: FERN, author: 'Matiu Rangi, Te Reo Tutor', sub: 'Te Reo · 2h ago', badge: 'PRO ZONE',
      text: 'Taranaki maunga at dawn. Many iwi introduce themselves by their mountain, their river and their people. That’s a pepeha, and it’s a good place to begin.',
      img: U('1597655601841-214a4cfe8b2c', 800, 600), eng: '♡ 6.2K · 💬 520 · ↗ 760' },
    { av: 'PK', avBg: SEA, author: 'Pōhutukawa Kitchen', sub: 'Brand Zone · 4h ago', badge: 'BRAND ZONE',
      text: 'The pōhutukawa flowers red in December, so for many New Zealanders it’s the Christmas tree. Our <b>Summer Christmas Menu</b> starts this week.',
      img: U('1779815348300-3a600f46934d', 800, 600), eng: '♡ 3.8K · 💬 240 · ↗ 320' },
    { av: 'HE', avBg: SEA, author: 'Dr Hannah Ellis, Collections Curator', sub: 'Toi (Art) · 6h ago', badge: 'PRO ZONE',
      text: 'Carving tells stories of ancestors. We show carvings in place in Aotearoa, and we ask the communities they belong to how they should be described.',
      img: U('1773728652030-518f9a467167', 800, 600), eng: '♡ 4.4K · 💬 280 · ↗ 380' }
  ],
  prompts: ['How do I say “whānau”?', 'What is Matariki?', 'What is a whakataukī?', 'Where can I learn te reo Māori in the UK?'],
  businesses: ['aotearoa-travel-desk', 'waka-language-lab']
};

/* the four Brand Zones and two Business Zones */
const brand = (o) => Object.assign({ kind: 'brand', gw: 'maori', verified: true }, o);
Object.assign(ZONES, {
  'kotuku-cultural-group': brand({ key: 'kotuku-cultural-group', name: 'Kōtuku Cultural Group', color: '#E0483E', gradient: RED, tier: 'Founding Partner',
    tagline: 'A Māori cultural group in London: kapa haka, te reo and whānau', stats: { followers: '128K', content: '360', products: '6' },
    ad: { badge: 'Featured', img: U('1764543491689-53ad4bced73e', 760, 760), hl: 'Haere mai. Welcome.', sub: 'Kapa haka, te reo and whānau, in London.', meta: 'Classes from £5' },
    products: [
      { name: 'Kapa Haka Practice', price: '£5', tag: 'FLAGSHIP', emoji: '🎶', rating: 4.9, reviews: 1460, cat: 'classes', special: true, desc: 'A weekly practice: waiata and poi, taught by our tutors.', features: ['All welcome', 'Tuesdays'], review: { who: 'Mere T.', text: 'My Tuesday family.' } },
      { name: 'Te Reo Evening Class', price: '£8', tag: 'BESTSELLER', emoji: '💬', rating: 4.9, reviews: 1120, cat: 'classes', desc: 'Beginners’ te reo Māori, every Thursday.', features: ['Online or in person'], review: { who: 'Lucy B.', text: 'Gentle and fun.' } },
      { name: 'School Visit', price: '£180', emoji: '🏫', rating: 4.9, reviews: 420, cat: 'visits', desc: 'Waiata, stories and te reo for a class.', features: ['Ninety minutes'], review: { who: 'Hannah E.', text: 'The pupils loved it.' } },
      { name: 'Poi-making Workshop', price: '£15', tag: 'SPECIAL', emoji: '⚪', rating: 4.8, reviews: 320, cat: 'visits', special: true, desc: 'Make and learn to swing your own poi.', features: ['Ages 8 and up'], review: { who: 'Matiu R.', text: 'Great for whānau.' } }
    ],
    shopCats: [ { key: 'classes', label: 'Classes', icon: '🎶' }, { key: 'visits', label: 'Visits & workshops', icon: '🏫' } ],
    feed: [
      { type: 'post', sub: 'Brand post · 2h', text: 'Red sails and a carved rock face on the lake. Stories in the land, shared at every <b>Te Reo Evening Class</b>.', img: U('1604995384335-6b5ca07aee5a', 800, 440), eng: '♡ 11.4K · 💬 1.5K · ↗ 1.8K', product: 1 },
      { type: 'community', who: 'Lucy B.', whoBg: RED, sub: 'Community · 1d', text: 'I’m not Māori. Can I join kapa haka practice?', eng: '♡ 560 · 💬 170', reply: 'Kia ora Lucy! Yes, everyone is welcome to practise with us and learn. Our tutors will explain what each waiata and action means, and some items are performed only by people who belong to them. Haere mai! 🌿' }
    ],
    events: [ { zoneEvent: true, tag: 'LIVE', title: 'Kōtuku Live · kapa haka rehearsal, London', when: 'Live now', desc: 'Waiata, poi and the meaning behind each item.', registered: 5680, capacity: 14000 } ],
    about: { founded: 'London · 2004', story: 'Māori in London who wanted a place to practise kapa haka, speak te reo and be whānau far from home. We joined MaoriXX as Founding Partner to share what we can, with care.', milestones: [['2004', 'First practice'], ['2016', 'Te reo classes'], ['2026', 'Founding Partner on MaoriXX']], values: ['Manaakitanga', 'Whanaungatanga', 'Te reo first'] } }),

  'korero-books': brand({ key: 'korero-books', name: 'Kōrero Books', color: '#4ADE80', gradient: FERN, tier: 'Brand Zone',
    tagline: 'Books and cards for learning te reo Māori', stats: { followers: '64.6K', content: '180', products: '26' },
    ad: { badge: 'New', img: U('1765912381737-10cbe7cff934', 760, 760), hl: 'Kōrero mai. Talk to me.', sub: 'Te reo Māori books for every learner.', meta: 'From £6' },
    products: [
      { name: 'First Words in Te Reo', price: '£12', tag: 'FLAGSHIP', emoji: '📗', rating: 4.9, reviews: 1340, cat: 'books', special: true, desc: 'Two hundred everyday words, with a guide to saying them.', features: ['Audio online'], review: { who: 'Lucy B.', text: 'My constant companion.' } },
      { name: 'Picture Book for Tamariki', price: '£8', tag: 'BESTSELLER', emoji: '📘', rating: 4.9, reviews: 860, cat: 'books', desc: 'A bilingual picture book for young children.', features: ['Ages 2 to 6'], review: { who: 'Mere T.', text: 'Bedtime favourite.' } },
      { name: 'Flashcard Set', price: '£10', emoji: '🗂️', rating: 4.8, reviews: 620, cat: 'cards', desc: 'Sixty cards with pictures and macrons.', features: ['Pronunciation on the back'], review: { who: 'Matiu R.', text: 'I use them in class.' } },
      { name: 'Whakataukī Cards', price: '£9', tag: 'SPECIAL', emoji: '🃏', rating: 4.8, reviews: 380, cat: 'cards', special: true, desc: 'Thirty proverbs with meanings.', features: ['Gift box'], review: { who: 'Aroha T.', text: 'Lovely gift.' } }
    ],
    shopCats: [ { key: 'books', label: 'Books', icon: '📗' }, { key: 'cards', label: 'Cards', icon: '🗂️' } ],
    feed: [ { type: 'post', sub: 'Brand post · 1d', text: 'A koru unfolding: a new beginning. <b>First Words in Te Reo</b>, for yours.', img: U('1641958062931-073e41e15ee8', 800, 440), eng: '♡ 4.2K · 💬 260', product: 0 } ],
    events: [ { zoneEvent: true, tag: 'EVENT', title: 'Story time in te reo Māori', when: 'Dec 5 · 10:30', desc: 'A bilingual picture book, read live.', registered: 520, capacity: 1400 } ],
    about: { founded: 'Wellington and London · 2015', story: 'A small Māori-led publisher making te reo learning books for people far from home.', milestones: [['2015', 'First Words'], ['2021', 'Picture books'], ['2026', 'Brand Zone on MaoriXX']], values: ['Te reo first', 'Macrons always', 'Made by Māori'] } }),

  'rau-weaving-studio': brand({ key: 'rau-weaving-studio', name: 'Rau Weaving Studio', color: '#F59E0B', gradient: OCHRE, tier: 'Brand Zone',
    tagline: 'Harakeke weaving classes, taught by Māori weavers', stats: { followers: '38.4K', content: '120', products: '8' },
    ad: { badge: 'Workshops', img: U('1605581810243-b1f6d8b6e1d3', 760, 760), hl: 'Learn the weave.', sub: 'Harakeke weaving, starting with tikanga.', meta: 'From £45' },
    products: [
      { name: 'Beginners’ Workshop', price: '£45', tag: 'FLAGSHIP', emoji: '🌿', rating: 4.9, reviews: 860, cat: 'workshops', special: true, desc: 'Three hours: caring for harakeke and a woven flower.', features: ['All materials'], review: { who: 'Lucy B.', text: 'So calming.' } },
      { name: 'Kete Weekend', price: '£140', tag: 'BESTSELLER', emoji: '🧺', rating: 4.9, reviews: 420, cat: 'workshops', desc: 'Two days to weave a small kete.', features: ['Lunch included'], review: { who: 'Hannah E.', text: 'I’m so proud of my kete.' } },
      { name: 'Online Taster', price: '£20', emoji: '💻', rating: 4.7, reviews: 320, cat: 'online', desc: 'Weave with us online, harakeke posted to you.', features: ['UK only'], review: { who: 'Mere T.', text: 'Worked well.' } },
      { name: 'Group Session', price: '£220', tag: 'SPECIAL', emoji: '👥', rating: 4.8, reviews: 140, cat: 'online', special: true, desc: 'For up to ten people.', features: ['At your venue'], review: { who: 'Matiu R.', text: 'A great team day.' } }
    ],
    shopCats: [ { key: 'workshops', label: 'Workshops', icon: '🌿' }, { key: 'online', label: 'Online & groups', icon: '💻' } ],
    feed: [ { type: 'post', sub: 'Brand post · 3h', text: 'Dune grass at dusk on a long west-coast beach, back home. Our weavers begin every <b>Kete Weekend</b> with stories of the land and the plant.', img: U('1496614932623-0a3a9743552e', 800, 440), eng: '♡ 3.4K · 💬 200', product: 1 } ],
    events: [ { zoneEvent: true, tag: 'EVENT', title: 'Weave a woven flower, live', when: 'Dec 6 · 14:00', desc: 'Online taster, harakeke posted to you.', registered: 280, capacity: 600 } ],
    about: { founded: 'Bristol · 2019', story: 'Māori weavers in the UK sharing raranga, the art of weaving, with care for the plant and its tikanga.', milestones: [['2019', 'First workshop'], ['2023', 'UK-grown harakeke'], ['2026', 'Brand Zone on MaoriXX']], values: ['Respect for the plant', 'Taught by Māori', 'Small groups'] } }),

  'pohutukawa-kitchen': brand({ key: 'pohutukawa-kitchen', name: 'Pōhutukawa Kitchen', color: '#22D3EE', gradient: SEA, tier: 'Brand Zone',
    tagline: 'A New Zealand café in Bristol', stats: { followers: '46.2K', content: '150', products: '20' },
    ad: { badge: 'Christmas', img: U('1638664705205-03ab5a6357f6', 760, 760), hl: 'A summer Christmas.', sub: 'New Zealand food in Bristol.', meta: 'From £4' },
    products: [
      { name: 'Summer Christmas Menu', price: '£28', tag: 'FLAGSHIP', emoji: '🎄', rating: 4.8, reviews: 920, cat: 'menu', special: true, desc: 'A Kiwi Christmas lunch, with pavlova.', features: ['December only'], review: { who: 'Mere T.', text: 'Tastes like home.' } },
      { name: 'Flat White & Slice', price: '£6', tag: 'BESTSELLER', emoji: '☕', rating: 4.8, reviews: 1460, cat: 'cafe', desc: 'Our coffee and a slice of the day.', features: ['All day'], review: { who: 'Lucy B.', text: 'Perfect flat white.' } },
      { name: 'Pavlova', price: '£5', emoji: '🍰', rating: 4.9, reviews: 760, cat: 'cafe', desc: 'Crisp outside, soft inside, with fruit.', features: ['Gluten free'], review: { who: 'Aroha T.', text: 'The best outside home.' } },
      { name: 'Matariki Dinner (June)', price: '£35', tag: 'SPECIAL', emoji: '✨', rating: 4.9, reviews: 260, cat: 'menu', special: true, desc: 'A shared winter dinner for Matariki.', features: ['Bookings open'], review: { who: 'Matiu R.', text: 'A lovely gathering.' } }
    ],
    shopCats: [ { key: 'cafe', label: 'Café', icon: '☕' }, { key: 'menu', label: 'Special menus', icon: '🎄' } ],
    feed: [ { type: 'post', sub: 'Brand post · 5h', text: 'An old tree by the sea, back home. That’s where our <b>Flat White & Slice</b> recipes come from.', img: U('1687857724569-b95e29e00fbb', 800, 440), eng: '♡ 3.2K · 💬 180', product: 1 } ],
    events: [ { zoneEvent: true, tag: 'EVENT', title: 'Kiwi Christmas lunch', when: 'Dec 12 · 12:30', desc: 'A summer Christmas in December, in Bristol.', registered: 180, capacity: 400 } ],
    about: { founded: 'Bristol · 2017', story: 'Two New Zealanders, one Māori and one Pākehā, who missed home cooking and opened a café.', milestones: [['2017', 'Opened'], ['2022', 'Matariki dinners'], ['2026', 'Brand Zone on MaoriXX']], values: ['Manaakitanga', 'Good coffee', 'Home cooking'] } }),

  'aotearoa-travel-desk': { key: 'aotearoa-travel-desk', kind: 'business', gw: 'maori', name: 'Aotearoa Travel Desk', color: '#22D3EE', gradient: SEA, img: U('1778640405667-bed7caf6f381', 900, 500),
    tier: 'Verified', category: 'Travel to Aotearoa New Zealand', tagline: 'Trips that include Māori-led experiences.',
    about: { founded: 'London · 2012', story: 'A travel desk planning trips to Aotearoa New Zealand, with Māori-owned tours and stays booked directly so communities benefit.' },
    stats: { years: 14, staff: 18, clients: '6,400 trips planned' },
    caps: [ { name: 'Trip planning', detail: 'Two to four weeks, North and South Island.' }, { name: 'Māori-led tours', detail: 'Booked directly with operators.' }, { name: 'Visiting whānau', detail: 'Flights and help for families.' } ],
    specs: { moq: 'One traveller', lead: '2 to 6 months', regions: 'Aotearoa New Zealand', certs: ['Bonded travel agent', 'Māori-owned partners', 'Responsible travel'] },
    supplies: [ { kind: 'brand', key: 'kotuku-cultural-group', what: 'Group travel for performances' } ],
    cases: [ { title: 'Home for a reunion', text: 'We flew twelve members of one whānau home for a family reunion.' } ],
    feed: [ { sub: 'Team · 3d', text: 'Planning for Matariki 2027 trips now open.' } ],
    contact: { person: 'Jess Brown, Trips', response: 'Replies within one working day' } },

  'waka-language-lab': { key: 'waka-language-lab', kind: 'business', gw: 'maori', name: 'Waka Language Lab', color: '#4ADE80', gradient: FERN, img: U('1628498188904-036f5e25e93e', 900, 500),
    tier: 'Verified', category: 'Te reo Māori training for organisations', tagline: 'Saying names and places with respect.',
    about: { founded: 'Manchester · 2018', story: 'We help UK organisations with Māori staff, partners or collections learn basic te reo Māori and say names properly, with Māori tutors.' },
    stats: { years: 8, staff: 10, clients: '140 teams trained' },
    caps: [ { name: 'Pronunciation sessions', detail: 'Names and places.' }, { name: 'Beginners’ courses', detail: 'Six weeks, online.' }, { name: 'Tikanga basics', detail: 'For museums and partners.' } ],
    specs: { moq: 'One session', lead: '2 to 4 weeks', regions: 'UK and online', certs: ['Māori tutors', 'Macrons in every resource', 'Small groups'] },
    supplies: [ { kind: 'brand', key: 'korero-books', what: 'Learning books for each course' } ],
    cases: [ { title: 'A museum that says names properly', text: 'A whole gallery team learned to pronounce the names in its Pacific galleries.' } ],
    feed: [ { sub: 'Team · 5d', text: 'New pronunciation sessions for January.' } ],
    contact: { person: 'Tama Wilson, Courses', response: 'Replies within two working days' } }
});

/* events in the Events tab */
gxEvents('maori', [
  { gw: 'maori', zone: 'kotuku-cultural-group', type: 'Live', icon: '🔴', live: true, time: 'Live Now', title: 'Kōtuku Live · kapa haka rehearsal, London', desc: 'Waiata, poi and the meaning behind each item.' },
  { gw: 'maori', type: 'Event', icon: '💬', time: 'Dec 2', title: 'Live: kōrero hour for beginners', desc: 'Te Reo Learners practise together.' },
  { gw: 'maori', zone: 'korero-books', type: 'Event', icon: '📘', time: 'Dec 5', title: 'Story time in te reo Māori', desc: 'A bilingual picture book, read live.' },
  { gw: 'maori', type: 'Event', icon: '🍲', time: 'Dec 5', title: 'Edinburgh Māori Whānau: December kai', desc: 'Bring a plate. Everyone welcome.' },
  { gw: 'maori', zone: 'rau-weaving-studio', type: 'Event', icon: '🌿', time: 'Dec 6', title: 'Weave a woven flower, live', desc: 'Online taster, harakeke posted to you.' },
  { gw: 'maori', type: 'Event', icon: '🎶', time: 'Dec 9', title: 'Waiata evening', desc: 'Learn a waiata together, online.' },
  { gw: 'maori', type: 'Event', icon: '🏛️', time: 'Dec 10', title: 'Museums and taonga, with Dr Hannah Ellis', desc: 'How communities guide care and display.' },
  { gw: 'maori', zone: 'pohutukawa-kitchen', type: 'Event', icon: '🎄', time: 'Dec 12', title: 'Kiwi Christmas lunch', desc: 'A summer Christmas in December, in Bristol.' }
]);
})();
/* ═════════ /MAORIXX ═════════ */
