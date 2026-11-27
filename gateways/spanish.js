/* ═════════ SPANISHXX — a Languages demo gateway (2026-11-27, Sean; build -99) ═════════
   Built with the _tools/README.md recipe. Palette (light): warm plaster, terracotta red, saffron.
   Home sector: Languages (key 'language'; listed only there). Every company, maker, pro and product is fictional; places are real.
   Tone: learning Spanish for real life: travel, friends, food and family. Spain and Latin America both, no clichés. */
(function(){
const U = (id, w, h) => `https://images.unsplash.com/photo-${id}?w=${w}&h=${h}&fit=crop&q=75`;
const RED = 'linear-gradient(135deg,#F87171,#B91C1C)', SAFFRON = 'linear-gradient(135deg,#FCD34D,#CA8A04)', BROWN = 'linear-gradient(135deg,#D6A27A,#7C2D12)', OLIVE = 'linear-gradient(135deg,#86EFAC,#166534)';

GATEWAYS.spanish = {
  name: 'SpanishXX', domain: 'spanishxx.com', emoji: '🗣️', sector: 'language', live: true,
  tagline: 'The Spanish Universe',
  theme: {
    bg: '#FFF8F1', text: '#2A1408', cardBg: '#FFFFFF', cardBorder: 'rgba(42,20,8,.08)',
    headerBg: 'linear-gradient(180deg,#FFFFFF,#FFF8F1)', accent: '#B91C1C', accentAlt: '#CA8A04', dark: false
  },
  gradient: 'linear-gradient(135deg,#F87171,#B91C1C,#CA8A04)',
  stats: { members: '4.6M', brands: '720+', agents: '32' },
  spaces: ['All Feed', 'Beginners', 'Travel', 'Food', 'Latin America', 'Exchange'],
  trending: ['#VerbDelDía', '#TapasSpanish', '#Intercambio'],
  brandZones: [
    { key: 'hablamos', name: 'Hablamos', color: '#B91C1C', tier: 'Founding Partner', tag: 'Live online Spanish classes in small groups' },
    { key: 'palabra', name: 'Palabra', color: '#7C2D12', tier: 'Brand Zone', tag: 'Graded readers and audiobooks for learners' },
    { key: 'viaje', name: 'Viaje', color: '#CA8A04', tier: 'Brand Zone', tag: 'Language holidays in Spain and Latin America' },
    { key: 'despensa', name: 'Despensa', color: '#166534', tier: 'Brand Zone', tag: 'A Spanish deli for cooking what you learn' }
  ],
  apps: [
    { name: 'Verb Drill', color: '#B91C1C', desc: 'Five minutes of present-tense verbs a day', key: 'verb-drill', url: 'apps/verb-drill.html',
      dev: 'Hablamos', rating: '4.9', users: '2.4M', perms: ['profile', 'feed'],
      tagline: 'Hablo, hablas, habla… got it.',
      about: 'Verb Drill gives you ten quick present-tense questions a day, from regular -ar, -er and -ir verbs to the irregular ones you use most: ser, estar, ir and tener. Tables are one tap away.',
      features: ['Ten a day', 'Regular and irregular verbs', 'Full verb tables', 'Share your streak'],
      shots: ['apps/verb-drill/shot-1.jpg', 'apps/verb-drill/shot-2.jpg', 'apps/verb-drill/shot-3.jpg'],
      version: '5.0', size: '9 KB',
      updates: [ { v: '5.0', ago: 2, notes: 'Irregular verbs.' }, { v: '4.3', ago: 66, notes: 'Verb tables.' }, { v: '3.6', ago: 210, notes: 'Signed in with GENEXXO.' } ],
      reviews: [ { who: '@tapas_tom_learns', stars: 5, ago: 1, text: 'Forty days in a row now.' }, { who: '@lucia_ferrer_es', stars: 5, ago: 15, text: 'I set it as homework.' }, { who: '@abuela_ana_uk', stars: 4, ago: 38, text: 'Helps me teach my grandson.' } ] },
    { name: 'Phrase Book', color: '#CA8A04', desc: 'The Spanish you need at the café, the station and the chemist', key: 'phrase-book', url: 'apps/phrase-book.html',
      dev: 'Viaje', rating: '4.8', users: '1.8M', perms: ['profile', 'feed'],
      tagline: 'Say it right, first time.',
      about: 'Phrase Book has the everyday Spanish you need when you travel: ordering food, asking the way, shopping and getting help. Save your favourites and learn the numbers too.',
      features: ['Café, directions, shops and help', 'Save favourites', 'Numbers made easy', 'Share a phrase'],
      shots: ['apps/phrase-book/shot-1.jpg', 'apps/phrase-book/shot-2.jpg', 'apps/phrase-book/shot-3.jpg'],
      version: '3.3', size: '9 KB',
      updates: [ { v: '3.3', ago: 3, notes: 'Numbers tab.' }, { v: '2.7', ago: 72, notes: 'Saved phrases.' }, { v: '2.0', ago: 220, notes: 'Signed in with GENEXXO.' } ],
      reviews: [ { who: '@tapas_tom_learns', stars: 5, ago: 2, text: 'Ordered for the whole table in Seville.' }, { who: '@javier_molina_es', stars: 5, ago: 22, text: 'Natural phrases, not textbook ones.' }, { who: '@abuela_ana_uk', stars: 4, ago: 46, text: 'Very useful.' } ] },
    { name: 'Spanish Quiz', color: '#7C2D12', desc: 'Ten words and phrases a day', key: 'spanish-quiz', url: 'apps/spanish-quiz.html',
      dev: 'Palabra', rating: '4.8', users: '1.5M', perms: ['profile', 'feed'],
      tagline: 'Ten a day keeps the rust away.',
      about: 'Spanish Quiz asks ten questions a day on words, phrases and the false friends that catch everyone out. Every answer explains why.',
      features: ['Ten a day', 'False friends', 'Your best score', 'Share your score'],
      shots: ['apps/spanish-quiz/shot-1.jpg', 'apps/spanish-quiz/shot-2.jpg', 'apps/spanish-quiz/shot-3.jpg'],
      version: '2.5', size: '9 KB',
      updates: [ { v: '2.5', ago: 1, notes: 'False friends.' }, { v: '2.0', ago: 58, notes: 'Explanations.' }, { v: '1.4', ago: 180, notes: 'Signed in with GENEXXO.' } ],
      reviews: [ { who: '@abuela_ana_uk', stars: 5, ago: 3, text: 'Embarazada! I’ll never forget that one.' }, { who: '@tapas_tom_learns', stars: 5, ago: 25, text: 'My morning coffee habit.' }, { who: '@carmen_ruiz_cocina', stars: 4, ago: 50, text: 'Fun and quick.' } ] }
  ],
  pros: [
    { key: 'lucia-ferrer-es', name: 'Lucía Ferrer Spanish Tutor', color: '#B91C1C', tag: 'Friendly one-to-one Spanish online', role: 'Spanish tutor',
      img: U('1592621385612-4d7129426394', 800, 800), base: 'Valencia, Spain · online', langs: 'Spanish, English, Valencian', years: 10, rating: '4.9', reviewsN: 326, cur: '£',
      creds: ['Qualified Spanish teacher', 'Teaches adults from beginner to advanced', 'Former GCSE examiner'],
      about: 'Lucía teaches real Spanish for real conversations. Lessons are relaxed, full of speaking and built around what you actually want to say.',
      services: [ { id: 'one', name: 'One-to-one lesson', dur: '1 hour', price: 28, desc: 'Online, at your level.' },
                  { id: 'trip', name: 'Before-your-trip pack', dur: 'Five lessons', price: 125, desc: 'The Spanish you’ll need on holiday.' },
                  { id: 'gcse', name: 'GCSE speaking practice', dur: '45 minutes', price: 24, desc: 'Exam-style questions, with feedback.' } ],
      avail: { days: [1, 2, 3, 4, 5], times: ['08:00', '18:00', '19:30'] },
      reviews: [ { who: '@tapas_tom_learns', stars: 5, ago: 2, text: 'I finally speak instead of freezing.' }, { who: '@abuela_ana_uk', stars: 5, ago: 20, text: 'Warm and patient.' }, { who: '@javier_molina_es', stars: 5, ago: 50, text: 'A great teacher.' } ],
      posts: [ { ago: 1, text: 'Don’t wait until it’s perfect. Say it badly today and better tomorrow. That’s how everyone learns.' } ],
      tier: 'Pro Zone', verified: true },
    { key: 'javier-molina-es', name: 'Javier Molina Conversation Classes', color: '#CA8A04', tag: 'Small conversation groups in Brighton', role: 'Conversation teacher',
      img: U('1564564244660-5d73c057f2d2', 800, 800), base: 'Brighton, UK · and online', langs: 'Spanish, English', years: 7, rating: '4.9', reviewsN: 188, cur: '£',
      creds: ['Grew up in Mexico City', 'Runs Brighton’s Spanish conversation evenings', 'Teaches Latin American Spanish'],
      about: 'Javier runs relaxed conversation groups where you talk about real things: food, football, films and family. He teaches Mexican and wider Latin American Spanish.',
      services: [ { id: 'group', name: 'Conversation evening', dur: '90 minutes', price: 15, desc: 'Small groups in a Brighton café.' },
                  { id: 'one', name: 'One-to-one lesson', dur: '1 hour', price: 30, desc: 'Online or in Brighton.' },
                  { id: 'course', name: 'Ten-week course', dur: 'Ten evenings', price: 130, desc: 'For improvers.' } ],
      avail: { days: [2, 3, 4], times: ['18:30', '20:00'] },
      reviews: [ { who: '@tapas_tom_learns', stars: 5, ago: 4, text: 'Best night of my week.' }, { who: '@lucia_ferrer_es', stars: 5, ago: 28, text: 'Great energy.' }, { who: '@carmen_ruiz_cocina', stars: 5, ago: 56, text: 'Everyone talks, nobody hides.' } ],
      posts: [ { ago: 2, text: 'In Mexico we say “¿Mande?” when we didn’t hear you. In Spain it’s “¿Perdona?”. Same language, lots of flavours.' } ],
      tier: 'Pro Zone', verified: true },
    { key: 'carmen-ruiz-cocina', name: 'Carmen Ruiz Cook & Speak', color: '#166534', tag: 'Learn Spanish while you cook', role: 'Cookery and Spanish teacher',
      img: U('1759765468070-120cdc180be8', 800, 800), base: 'Manchester, UK', langs: 'Spanish, English', years: 26, rating: '5.0', reviewsN: 214, cur: '£',
      creds: ['Born in Andalucía, in Manchester since 1998', 'Ran a tapas bar for fifteen years', 'Teaches cookery classes in Spanish'],
      about: 'Carmen teaches Spanish around her kitchen table: you chop, stir and taste, and the language comes with it. Beginners very welcome.',
      services: [ { id: 'class', name: 'Cook & Speak evening', dur: '3 hours', price: 55, desc: 'Cook three tapas, all in Spanish. Dinner included.' },
                  { id: 'private', name: 'Private class for two', dur: '3 hours', price: 140, desc: 'A gift for someone special.' },
                  { id: 'online', name: 'Online cook-along', dur: '1 hour', price: 18, desc: 'One dish, live from Carmen’s kitchen.' } ],
      avail: { days: [4, 5, 6], times: ['18:00'] },
      reviews: [ { who: '@abuela_ana_uk', stars: 5, ago: 3, text: 'Like being back home.' }, { who: '@tapas_tom_learns', stars: 5, ago: 30, text: 'I learned “sofrito” and how to make one.' }, { who: '@javier_molina_es', stars: 5, ago: 60, text: 'Pure joy.' } ],
      posts: [ { ago: 3, text: 'Today’s word: “sobremesa”. The time you stay at the table talking after a meal. English has no word for it, and it should.' } ],
      tier: 'Pro Zone', verified: true }
  ],
  communities: [
    { key: 'spanish-learners', name: 'Spanish Learners Worldwide', domain: 'learners.spanishxx.com', color: '#B91C1C', img: U('1653664947867-b09564f1e973', 900, 500),
      scope: 'Global', where: 'Wherever you’re learning', members: 624000, online: 6840, tagline: 'Every level, every accent, one community.',
      about: 'Learners and native speakers helping each other with Spanish from Spain and Latin America. Post your mistakes proudly: that’s how we all learn.',
      rules: ['Kind corrections only', 'Every accent is correct Spanish', 'Write in Spanish when you can'],
      mods: ['@tapas_tom_learns', '@abuela_ana_uk'],
      threads: [ { t: 'Ser or estar? The trick that finally worked for me', by: '@tapas_tom_learns', tag: 'GRAMMAR', replies: 2460, ago: 0, votes: 4860 }, { t: 'My funniest mistake in Spanish (embarazada…)', by: '@abuela_ana_uk', tag: 'FUN', replies: 3120, ago: 1, votes: 5240 }, { t: 'Spain or Latin American Spanish: which should I learn?', by: '@tapas_tom_learns', tag: 'BEGINNERS', replies: 1680, ago: 2, votes: 2860 }, { t: 'Podcasts for improvers', by: '@abuela_ana_uk', tag: 'LISTENING', replies: 940, ago: 3, votes: 1820 } ],
      events: [ { title: 'Live: ser and estar in twenty minutes', day: 4, time: '19:00', where: 'Online' }, { title: 'Christmas words and traditions in Spanish', day: 15, time: '18:30', where: 'Online' } ] },
    { key: 'manchester-intercambio', name: 'Manchester Intercambio', domain: 'manchester.spanishxx.com', color: '#CA8A04', img: U('1653212452950-63bdcf07fd04', 900, 500),
      scope: 'Local', where: 'Manchester', members: 1620, online: 38, tagline: 'Half in English, half in Spanish, all friendly.',
      about: 'A language exchange in Manchester: Spanish speakers practise English, English speakers practise Spanish, and everyone makes friends. Every other Thursday, in a café in the Northern Quarter.',
      rules: ['Half the time in each language', 'Everyone is a learner', 'Buy your own drinks'],
      mods: ['@carmen_ruiz_cocina', '@tapas_tom_learns'],
      threads: [ { t: 'December intercambio: Christmas special', by: '@carmen_ruiz_cocina', tag: 'MEETUP', replies: 46, ago: 0, votes: 108 }, { t: 'New here: what’s it like?', by: '@tapas_tom_learns', tag: 'NEW', replies: 32, ago: 1, votes: 70 }, { t: 'Tapas night after the January one?', by: '@carmen_ruiz_cocina', tag: 'SOCIAL', replies: 24, ago: 2, votes: 52 } ],
      events: [ { title: 'Intercambio: Christmas special', day: 6, time: '19:00', where: 'Manchester' }, { title: 'New year intercambio', day: 48, time: '19:00', where: 'Manchester' } ] }
  ],
  feed: [
    { av: 'SX', avBg: RED, author: 'SpanishXX Editorial', sub: 'Featured · Just now', badge: '★ FEATURED',
      text: 'Spoken by around 500 million people in more than twenty countries. Learn Spanish for real life: travel, friends, food and family, from Seville to Mexico City.',
      img: U('1509840841025-9088ba78a826', 800, 600), eng: '♡ 34.2K · 💬 2.8K · ↗ 4.6K' },
    { av: 'TT', avBg: SAFFRON, author: '@tapas_tom_learns', sub: 'Travel · Just now', badge: 'COMMUNITY',
      text: 'Day 3 in Seville. Ordered for the whole table, asked about the croquetas and understood the answer. The waiter replied in Spanish, not English. Huge win.',
      img: U('1656423521731-9665583f100c', 800, 600), eng: '♡ 14.2K · 💬 1.8K · ↗ 1.3K' },
    { av: 'HB', avBg: RED, author: 'Hablamos', sub: 'Founding Partner · Brand Zone', badge: 'BRAND ZONE',
      text: 'Live now: a beginners’ class orders tapas in Seville, live from a bar in Triana. Ten words, one real conversation. Follow <b>Hablamos</b>.',
      img: U('1625418277638-6db2d521a78c', 800, 600), eng: '♡ 18.6K · 💬 2.4K · ↗ 2.8K' },
    { av: 'VJ', avBg: SAFFRON, author: 'Viaje', sub: 'Brand Zone · 1h ago', badge: 'BRAND ZONE',
      text: 'Lessons in the morning, Plaza de España in the afternoon. <b>Viaje Seville</b>: a week of Spanish with a local host family.',
      img: U('1661442196003-f2f6eb54bd94', 800, 600), eng: '♡ 8.6K · 💬 620 · ↗ 940' },
    { av: 'AA', avBg: BROWN, author: '@abuela_ana_uk', sub: 'Family · 2h ago', badge: 'COMMUNITY',
      text: 'My grandson was born in Leeds and I was born in Bilbao. Every Sunday we do ten minutes of Spanish. Today he said “te quiero, abuela” without being asked.',
      img: U('1549643276-fdf2fab574f5', 800, 600), eng: '♡ 9.8K · 💬 840 · ↗ 760' },
    { av: 'DP', avBg: OLIVE, author: 'Despensa', sub: 'Brand Zone · 4h ago', badge: 'BRAND ZONE',
      text: 'Pimientos de Padrón: some are hot, most are not. Blister them in olive oil, add sea salt, and say it with us: “unos pican y otros no”. <b>Despensa</b>.',
      img: U('1709740198353-df155e1acf36', 800, 600), eng: '♡ 5.8K · 💬 380 · ↗ 520' },
    { av: 'CR', avBg: OLIVE, author: 'Carmen Ruiz Cook & Speak', sub: 'Food · 6h ago', badge: 'PRO ZONE',
      text: 'Friday’s class made three tapas and learned twenty kitchen words. By dessert everyone was asking for seconds in Spanish.',
      img: U('1761110429384-0678d7015545', 800, 600), eng: '♡ 6.2K · 💬 410 · ↗ 480' }
  ],
  prompts: ['When do I use ser or estar?', 'How do I order food in Spanish?', 'Should I learn Spain or Latin American Spanish?', 'How long does it take to learn Spanish?'],
  businesses: ['linea-translations', 'casa-escuela']
};

/* the four Brand Zones and two Business Zones */
const brand = (o) => Object.assign({ kind: 'brand', gw: 'spanish', verified: true }, o);
Object.assign(ZONES, {
  'hablamos': brand({ key: 'hablamos', name: 'Hablamos', color: '#B91C1C', gradient: RED, tier: 'Founding Partner',
    tagline: 'Live online Spanish classes in small groups', stats: { followers: '486K', content: '920', products: '6' },
    ad: { badge: 'Featured', img: U('1722466125996-728f52108eee', 760, 760), hl: 'Speak from your first lesson.', sub: 'Small live classes with native teachers.', meta: 'From £9 a class' },
    products: [
      { name: 'Hablamos Membership', price: '£39 a month', tag: 'FLAGSHIP', emoji: '🗣️', rating: 4.9, reviews: 7420, cat: 'classes', special: true, desc: 'Unlimited live group classes, every level, all day.', features: ['Six students per class', 'Spain and Latin America'], review: { who: 'Tom H.', text: 'Speaking after a month.' } },
      { name: 'Ten-Class Pack', price: '£90', tag: 'BESTSELLER', emoji: '🎟️', rating: 4.8, reviews: 3860, cat: 'classes', desc: 'Ten live classes to use when you like.', features: ['Valid for a year'], review: { who: 'Ana G.', text: 'Fits around my shifts.' } },
      { name: 'Level Test', price: '£10', emoji: '📝', rating: 4.7, reviews: 1240, cat: 'extras', desc: 'A short speaking test to find your level.', features: ['Twenty minutes'], review: { who: 'Lucía F.', text: 'Accurate and friendly.' } },
      { name: 'Gift Card', price: '£50', tag: 'SPECIAL', emoji: '🎁', rating: 4.9, reviews: 620, cat: 'extras', special: true, desc: 'Spanish classes as a present.', features: ['Email or printed'], review: { who: 'Carmen R.', text: 'My daughter loved it.' } }
    ],
    shopCats: [ { key: 'classes', label: 'Classes', icon: '🗣️' }, { key: 'extras', label: 'Tests & gifts', icon: '🎁' } ],
    feed: [
      { type: 'post', sub: 'Brand post · 2h', text: 'After class, the best homework: ordering for the whole table in Spanish. A <b>Hablamos</b> meetup night.', img: U('1767096088529-1ba1ecc457ee', 800, 440), eng: '♡ 18.6K · 💬 2.4K · ↗ 2.8K', product: 0 },
      { type: 'community', who: 'Tom H.', whoBg: RED, sub: 'Community · 1d', text: 'I freeze when I have to speak. Should I wait until I know more?', eng: '♡ 980 · 💬 280', reply: 'Hola Tom! Please don’t wait: everyone freezes at first. Join a beginners’ class, say one sentence, and celebrate it. Confidence comes from speaking, not from studying more. 🗣️' }
    ],
    events: [ { zoneEvent: true, tag: 'LIVE', title: 'Hablamos Live · ordering tapas in Seville', when: 'Live now', desc: 'A beginners’ class orders for real, live from Triana.', registered: 11240, capacity: 26000 } ],
    about: { founded: 'Madrid · 2015', story: 'Two teachers who believed people learn to speak by speaking. We joined SpanishXX as Founding Partner because a language is for talking to people.', milestones: [['2015', 'The first online class'], ['2021', 'Latin American teachers join'], ['2026', 'Founding Partner on SpanishXX']], values: ['Speak from day one', 'Small classes', 'Every accent welcome'] } }),

  'palabra': brand({ key: 'palabra', name: 'Palabra', color: '#7C2D12', gradient: BROWN, tier: 'Brand Zone',
    tagline: 'Graded readers and audiobooks for learners', stats: { followers: '132K', content: '360', products: '48' },
    ad: { badge: 'New', img: U('1634048703492-eeded62bb987', 760, 760), hl: 'Read your first novel in Spanish.', sub: 'Stories written for your level.', meta: 'From £7' },
    products: [
      { name: 'Seis Calles', price: '£8', tag: 'FLAGSHIP', emoji: '📕', rating: 4.9, reviews: 2860, cat: 'readers', special: true, desc: 'A mystery in six streets of Seville, for beginners.', features: ['Glossary on every page', 'Audio included'], review: { who: 'Tom H.', text: 'My first book in Spanish!' } },
      { name: 'Cuentos de Buenos Aires', price: '£9', tag: 'BESTSELLER', emoji: '📗', rating: 4.8, reviews: 1640, cat: 'readers', desc: 'Short stories for improvers, in Argentine Spanish.', features: ['Twelve stories'], review: { who: 'Javier M.', text: 'Beautiful voices.' } },
      { name: 'Audiobook Bundle', price: '£15', emoji: '🎧', rating: 4.7, reviews: 860, cat: 'audio', desc: 'Five graded stories, read slowly and clearly.', features: ['Download and stream'], review: { who: 'Ana G.', text: 'Perfect for the car.' } },
      { name: 'Reading Journal', price: '£7', tag: 'SPECIAL', emoji: '📓', rating: 4.7, reviews: 420, cat: 'audio', special: true, desc: 'Track new words and books you’ve finished.', features: ['A5 size'], review: { who: 'Lucía F.', text: 'Lovely habit.' } }
    ],
    shopCats: [ { key: 'readers', label: 'Readers', icon: '📕' }, { key: 'audio', label: 'Audio & more', icon: '🎧' } ],
    feed: [ { type: 'post', sub: 'Brand post · 1d', text: 'Six streets, one mystery and a glossary on every page. <b>Seis Calles</b>, for brave beginners.', img: U('1722466123647-29905e8d3d5b', 800, 440), eng: '♡ 5.2K · 💬 310', product: 0 } ],
    events: [ { zoneEvent: true, tag: 'EVENT', title: 'Book club: Seis Calles, chapter one', when: 'Dec 2 · 19:30', desc: 'Read it together, in easy Spanish.', registered: 1460, capacity: 4000 } ],
    about: { founded: 'Salamanca · 2012', story: 'Teachers writing the stories their students wanted to read.', milestones: [['2012', 'The first reader'], ['2019', 'Audiobooks'], ['2026', 'Brand Zone on SpanishXX']], values: ['Real stories', 'Every level', 'Spain and Latin America'] } }),

  'viaje': brand({ key: 'viaje', name: 'Viaje', color: '#CA8A04', gradient: SAFFRON, tier: 'Brand Zone',
    tagline: 'Language holidays in Spain and Latin America', stats: { followers: '164K', content: '420', products: '24' },
    ad: { badge: 'Featured', img: U('1785061008822-2cb9c12d04f0', 760, 760), hl: 'A week of Spanish, lived.', sub: 'Morning lessons, afternoon adventures, a local host family.', meta: 'From £640 a week' },
    products: [
      { name: 'Viaje Seville', price: 'From £640 a week', tag: 'FLAGSHIP', emoji: '🏛️', rating: 4.9, reviews: 1860, cat: 'trips', special: true, desc: 'Twenty hours of classes and a host family in Seville.', features: ['All levels', 'Flights not included'], review: { who: 'Tom H.', text: 'Best week of my year.' } },
      { name: 'Viaje Madrid', price: 'From £690 a week', tag: 'BESTSELLER', emoji: '🌆', rating: 4.8, reviews: 1240, cat: 'trips', desc: 'Classes near the Gran Vía and evenings exploring.', features: ['Shared flat option'], review: { who: 'Ana G.', text: 'Brilliant teachers.' } },
      { name: 'Viaje Oaxaca', price: 'From £720 a week', emoji: '🌮', rating: 4.9, reviews: 640, cat: 'trips', desc: 'Spanish, cooking and culture in southern Mexico.', features: ['Cooking class included'], review: { who: 'Javier M.', text: 'Mi tierra. Wonderful.' } },
      { name: 'Weekend in Valencia', price: 'From £320', tag: 'SPECIAL', emoji: '🥘', rating: 4.8, reviews: 420, cat: 'short', special: true, desc: 'Two days of classes and a paella lesson.', features: ['Friday to Sunday'], review: { who: 'Lucía F.', text: 'My city, done right.' } }
    ],
    shopCats: [ { key: 'trips', label: 'Week-long', icon: '🏛️' }, { key: 'short', label: 'Short breaks', icon: '🥘' } ],
    feed: [ { type: 'post', sub: 'Brand post · 3h', text: 'Golden hour over the rooftops, after a morning of classes. That’s <b>Viaje Madrid</b>.', img: U('1539037116277-4db20889f2d4', 800, 440), eng: '♡ 8.6K · 💬 620', product: 1 } ],
    events: [ { zoneEvent: true, tag: 'SALE', title: 'Spring trips: £100 off before Christmas', when: 'Dec 6 · All week', desc: 'Book a spring language week, £100 off.', registered: 1980, capacity: 5000 } ],
    about: { founded: 'Seville · 2010', story: 'Language teachers and host families who think the best classroom is a real city.', milestones: [['2010', 'Seville'], ['2018', 'Latin America'], ['2026', 'Brand Zone on SpanishXX']], values: ['Small groups', 'Trusted host families', 'Local teachers'] } }),

  'despensa': brand({ key: 'despensa', name: 'Despensa', color: '#166534', gradient: OLIVE, tier: 'Brand Zone',
    tagline: 'A Spanish deli for cooking what you learn', stats: { followers: '92.6K', content: '260', products: '120' },
    ad: { badge: 'Christmas', img: U('1776191707227-109f5f3f09d3', 760, 760), hl: 'Cook it, say it, share it.', sub: 'Spanish deli boxes with recipes in two languages.', meta: 'From £12' },
    products: [
      { name: 'Tapas Night Box', price: '£34', tag: 'FLAGSHIP', emoji: '🫒', rating: 4.8, reviews: 2460, cat: 'boxes', special: true, desc: 'Olives, cheese, padrón peppers and recipes in Spanish and English.', features: ['Serves four', 'Bilingual recipe cards'], review: { who: 'Carmen R.', text: 'Proper ingredients.' } },
      { name: 'Paella Kit', price: '£28', tag: 'BESTSELLER', emoji: '🥘', rating: 4.8, reviews: 1860, cat: 'boxes', desc: 'Bomba rice, saffron, paprika and a 30 cm pan.', features: ['Serves four'], review: { who: 'Lucía F.', text: 'Approved by a Valencian.' } },
      { name: 'Smoked Paprika Trio', price: '£12', emoji: '🌶️', rating: 4.7, reviews: 1120, cat: 'pantry', desc: 'Sweet, bittersweet and hot pimentón.', features: ['Tins'], review: { who: 'Tom H.', text: 'Changed my cooking.' } },
      { name: 'Christmas Turrón Box', price: '£18', tag: 'SPECIAL', emoji: '🎄', rating: 4.9, reviews: 640, cat: 'pantry', special: true, desc: 'Four kinds of turrón for the festive table.', features: ['Gift wrapped'], review: { who: 'Ana G.', text: 'Tastes like Christmas at home.' } }
    ],
    shopCats: [ { key: 'boxes', label: 'Boxes', icon: '🫒' }, { key: 'pantry', label: 'Pantry', icon: '🌶️' } ],
    feed: [ { type: 'post', sub: 'Brand post · 5h', text: 'A shopping list in Spanish and a street full of little shops. Every <b>Tapas Night Box</b> comes with the list in both languages.', img: U('1605739094919-b444b839a675', 800, 440), eng: '♡ 5.8K · 💬 380', product: 0 } ],
    events: [ { zoneEvent: true, tag: 'EVENT', title: 'Cook-along: tortilla in Spanish', when: 'Dec 11 · 18:30', desc: 'Cook a tortilla live, learning the words as you go.', registered: 1240, capacity: 3000 } ],
    about: { founded: 'Bristol · 2016', story: 'A Galician chef and a Bristol grocer who think food is the tastiest way to learn a language.', milestones: [['2016', 'The shop'], ['2021', 'Bilingual recipe boxes'], ['2026', 'Brand Zone on SpanishXX']], values: ['Real Spanish produce', 'Recipes in two languages', 'Small producers'] } }),

  'linea-translations': { key: 'linea-translations', kind: 'business', gw: 'spanish', name: 'Línea Translations', color: '#B91C1C', gradient: RED, img: U('1543783207-ec64e4d95325', 900, 500),
    tier: 'Verified', category: 'Spanish translation and interpreting', tagline: 'Spanish and English, translated by people.',
    about: { founded: 'Edinburgh · 2009', story: 'Professional translators and interpreters working between English and Spanish for businesses, charities and families. Every job is checked by a second translator.' },
    stats: { years: 17, staff: 36, clients: '2,400 clients' },
    caps: [ { name: 'Documents', detail: 'Contracts, websites and certificates.' }, { name: 'Interpreting', detail: 'In person or by video.' }, { name: 'Localisation', detail: 'Spain or Latin America, chosen carefully.' } ],
    specs: { moq: 'One page', lead: '2 to 5 days', regions: 'UK, Spain and Latin America', certs: ['Qualified translators', 'Second-translator checks', 'Confidential'] },
    supplies: [ { kind: 'brand', key: 'hablamos', what: 'Spanish lessons for client teams' } ],
    cases: [ { title: 'A Scottish distillery in Mexico', text: 'Labels, website and tasting notes adapted for Mexican customers.' } ],
    feed: [ { sub: 'Team · 3d', text: 'Welcome to our new interpreters in Bogotá and Valencia.' } ],
    contact: { person: 'Isabel Moreno, Projects', response: 'Replies within one working day' } },

  'casa-escuela': { key: 'casa-escuela', kind: 'business', gw: 'spanish', name: 'Casa Escuela', color: '#CA8A04', gradient: SAFFRON, img: U('1779249920901-b5aec676c999', 900, 500),
    tier: 'Verified', category: 'Spanish school for adults', tagline: 'Spanish evening classes in Brighton.',
    about: { founded: 'Brighton · 2012', story: 'A small language school for adults, with evening and Saturday classes at every level and teachers from Spain, Mexico, Colombia and Argentina.' },
    stats: { years: 14, staff: 16, clients: '6,000 students taught' },
    caps: [ { name: 'Evening classes', detail: 'Ten-week courses at six levels.' }, { name: 'Company courses', detail: 'Spanish for teams who work with Spain or Latin America.' }, { name: 'Exam preparation', detail: 'GCSE, A-level and DELE.' } ],
    specs: { moq: 'One course', lead: 'Courses start monthly', regions: 'Brighton and online', certs: ['Qualified teachers', 'Small classes', 'Free level test'] },
    supplies: [ { kind: 'brand', key: 'palabra', what: 'Graded readers for every class' } ],
    cases: [ { title: 'A café team in Spanish', text: 'A Brighton café trained its staff to welcome Spanish-speaking visitors.' } ],
    feed: [ { sub: 'School · 5d', text: 'January courses are open. Free level test this Saturday.' } ],
    contact: { person: 'Diego Torres, Admissions', response: 'Replies within two working days' } }
});

/* events in the Events tab */
gxEvents('spanish', [
  { gw: 'spanish', zone: 'hablamos', type: 'Live', icon: '🔴', live: true, time: 'Live Now', title: 'Hablamos Live · ordering tapas in Seville', desc: 'A beginners’ class orders for real, live from Triana.' },
  { gw: 'spanish', zone: 'palabra', type: 'Event', icon: '📕', time: 'Dec 2', title: 'Book club: Seis Calles, chapter one', desc: 'Read it together, in easy Spanish.' },
  { gw: 'spanish', type: 'Event', icon: '🗣️', time: 'Dec 1', title: 'Live: ser and estar in twenty minutes', desc: 'Spanish Learners Worldwide, live.' },
  { gw: 'spanish', zone: 'viaje', type: 'Sale', icon: '✈️', time: 'Dec 6', title: 'Spring trips: £100 off before Christmas', desc: 'Book a spring language week.' },
  { gw: 'spanish', type: 'Event', icon: '☕', time: 'Dec 3', title: 'Manchester Intercambio: Christmas special', desc: 'Half English, half Spanish, all friendly.' },
  { gw: 'spanish', zone: 'despensa', type: 'Event', icon: '🥔', time: 'Dec 11', title: 'Cook-along: tortilla in Spanish', desc: 'Cook and learn the words as you go.' },
  { gw: 'spanish', type: 'Event', icon: '🎄', time: 'Dec 12', title: 'Christmas words and traditions in Spanish', desc: 'From Nochebuena to the Three Kings.' },
  { gw: 'spanish', type: 'Event', icon: '🍳', time: 'Dec 4', title: 'Cook & Speak evening with Carmen Ruiz', desc: 'Three tapas, all in Spanish, in Manchester.' }
]);
})();
/* ═════════ /SPANISHXX ═════════ */
