/* ═════════ ROMEXX — a Places demo gateway (2026-11-21, Sean; build -91) ═════════
   Built with the _tools/README.md recipe. Palette (light): travertine cream, terracotta, ochre, cypress green.
   Home sector: Places. Rome's landmarks and neighbourhoods are real; every tour company, hotel, school, guide and shop is
   fictional. Opening times and prices are illustrative. */
(function(){
const U = (id, w, h) => `https://images.unsplash.com/photo-${id}?w=${w}&h=${h}&fit=crop&q=75`;
const TERRA = 'linear-gradient(135deg,#D9734E,#9A3B22)', OCHRE = 'linear-gradient(135deg,#E8B54D,#A87A1C)', CYPRESS = 'linear-gradient(135deg,#5E8C61,#2E4E33)', STONE = 'linear-gradient(135deg,#E7DCC8,#A8977A)';

GATEWAYS.rome = {
  name: 'RomeXX', domain: 'romexx.com', emoji: '🏛️', sector: 'places', live: true,
  tagline: 'The Rome Universe',
  theme: {
    bg: '#FBF6EE', text: '#2C2420', cardBg: '#FFFFFF', cardBorder: 'rgba(154,59,34,.12)',
    headerBg: 'linear-gradient(180deg,#F4E7D3,#FBF6EE)', accent: '#B5462B', accentAlt: '#C9962B', dark: false
  },
  gradient: 'linear-gradient(135deg,#9A3B22,#D9734E,#E8B54D)',
  stats: { members: '6.2M', brands: '3,400+', agents: '58' },
  spaces: ['All Feed', 'Ancient Rome', 'Eat & Drink', 'Neighbourhoods', 'Stay', 'Learn Italian'],
  trending: ['#RomeInWinter', '#Carbonara', '#Trastevere'],
  brandZones: [
    { key: 'via-lucia-tours', name: 'Via Lucia Tours', color: '#B5462B', tier: 'Founding Partner', tag: 'Small-group walking tours of Rome' },
    { key: 'testaccio-kitchen', name: 'Testaccio Kitchen', color: '#C9962B', tier: 'Brand Zone', tag: 'Pasta classes in Rome and online' },
    { key: 'casa-sette-colli', name: 'Casa Sette Colli', color: '#5E8C61', tier: 'Brand Zone', tag: 'Small guesthouses on Rome’s seven hills' },
    { key: 'dispensa', name: 'Dispensa', color: '#8A5A3C', tier: 'Brand Zone', tag: 'A Roman pantry, delivered to the UK' }
  ],
  apps: [
    { name: 'Rome Walks', color: '#B5462B', desc: 'Walking routes through Rome, stop by stop', key: 'rome-walks', url: 'apps/rome-walks.html',
      dev: 'Via Lucia Tours', rating: '4.9', users: '1.6M', perms: ['profile', 'feed'],
      tagline: 'The best of Rome is between the sights.',
      about: 'Rome Walks has four walks through the historic centre, each with stops, the walking time between them and what to look for. Tick off stops as you go and plan which walk goes on which day.',
      features: ['Four walks, 2 to 4 km each', 'Walking time between stops', 'What to look for at each stop', 'Plan your days'],
      shots: ['apps/rome-walks/shot-1.jpg', 'apps/rome-walks/shot-2.jpg', 'apps/rome-walks/shot-3.jpg'],
      version: '3.2', size: '10 KB',
      updates: [ { v: '3.2', ago: 2, notes: 'Plan your days.' }, { v: '3.0', ago: 70, notes: 'Testaccio walk.' }, { v: '2.4', ago: 210, notes: 'Signed in with GENEXXO.' } ],
      reviews: [ { who: '@roma_rachel', stars: 5, ago: 1, text: 'Walked all four in a long weekend. Perfect pacing.' }, { who: '@citybreak_cal', stars: 5, ago: 12, text: 'Found the keyhole thanks to this.' }, { who: '@pasta_pete', stars: 4, ago: 26, text: 'Wish it had more food stops!' } ] },
    { name: 'Pasta Shapes', color: '#C9962B', desc: 'Which pasta goes with which sauce, the Roman way', key: 'pasta-shapes', url: 'apps/pasta-shapes.html',
      dev: 'Testaccio Kitchen', rating: '4.8', users: '880K', perms: ['profile', 'feed'],
      tagline: 'Rigatoni or spaghetti? It matters.',
      about: 'Pasta Shapes matches shapes to sauces: the four Roman classics and many more. Pick a sauce to see the shapes that suit it, or a shape to see what to cook. Save your favourites to try.',
      features: ['Rome’s four classic pastas', 'Shape to sauce, sauce to shape', 'Why each pairing works', 'A list to cook next'],
      shots: ['apps/pasta-shapes/shot-1.jpg', 'apps/pasta-shapes/shot-2.jpg', 'apps/pasta-shapes/shot-3.jpg'],
      version: '1.9', size: '9 KB',
      updates: [ { v: '1.9', ago: 3, notes: 'Why it works, for every pairing.' }, { v: '1.6', ago: 80, notes: 'Sauce to shape.' }, { v: '1.0', ago: 230, notes: 'Signed in with GENEXXO.' } ],
      reviews: [ { who: '@pasta_pete', stars: 5, ago: 2, text: 'Rigatoni for carbonara changed my life.' }, { who: '@roma_rachel', stars: 5, ago: 15, text: 'Lovely and so useful.' }, { who: '@nonna_in_training', stars: 4, ago: 33, text: 'More shapes please.' } ] },
    { name: 'Italian Phrases', color: '#5E8C61', desc: 'The Italian you actually need in Rome', key: 'italian-phrases', url: 'apps/italian-phrases.html',
      dev: 'Dispensa', rating: '4.8', users: '1.2M', perms: ['profile', 'feed'],
      tagline: 'Un caffè, per favore.',
      about: 'Italian Phrases has the phrases you’ll use in Rome, from the bar counter to the train station, with a say-it guide for each. Star the ones you want to learn and practise them as flashcards.',
      features: ['Phrases by situation', 'Say-it guides', 'Star and practise', 'Polite and casual versions'],
      shots: ['apps/italian-phrases/shot-1.jpg', 'apps/italian-phrases/shot-2.jpg', 'apps/italian-phrases/shot-3.jpg'],
      version: '2.5', size: '9 KB',
      updates: [ { v: '2.5', ago: 4, notes: 'Practise mode.' }, { v: '2.2', ago: 90, notes: 'At the bar.' }, { v: '1.8', ago: 220, notes: 'Signed in with GENEXXO.' } ],
      reviews: [ { who: '@citybreak_cal', stars: 5, ago: 3, text: 'Ordered coffee like a local. Well, nearly.' }, { who: '@roma_rachel', stars: 5, ago: 17, text: 'The say-it guides are spot on.' }, { who: '@pasta_pete', stars: 4, ago: 36, text: 'Great for beginners.' } ] }
  ],
  pros: [
    { key: 'giulia-bianchi-guide', name: 'Giulia Bianchi Rome Guide', color: '#B5462B', tag: 'Licensed guide · ancient Rome, the Vatican and hidden neighbourhoods', role: 'Licensed tour guide',
      img: U('1544005313-94ddf0286df2', 800, 800), base: 'Rome, Italy', langs: 'Italian, English, French', years: 13, rating: '4.9', reviewsN: 1460, cur: '€',
      creds: ['Licensed Rome tour guide', 'Degree in archaeology', 'Guides schools and families'],
      about: 'Giulia makes ancient Rome make sense: who walked here, what they ate and why it still matters. Her private tours are paced for you, including children and anyone who needs fewer steps.',
      services: [ { id: 'ancient', name: 'Colosseum and Forum, private', dur: '3 hours', price: 240, desc: 'Up to six people; entry tickets extra.' },
                  { id: 'hidden', name: 'Hidden Rome walk', dur: '2.5 hours', price: 180, desc: 'Courtyards, churches and backstreets.' },
                  { id: 'family', name: 'Family gladiator tour', dur: '2 hours', price: 160, desc: 'For ages 6 and up.' } ],
      avail: { days: [1, 2, 3, 4, 5, 6], times: ['08:30', '11:00', '14:30'] },
      reviews: [ { who: '@roma_rachel', stars: 5, ago: 3, text: 'Brought the Forum to life.' }, { who: '@citybreak_cal', stars: 5, ago: 14, text: 'Our kids are now obsessed with Romans.' }, { who: '@pasta_pete', stars: 5, ago: 39, text: 'Knows every corner.' } ],
      posts: [ { ago: 1, text: 'Winter is Rome’s secret season: shorter queues, low golden light, and you can actually see the Trevi Fountain.' }, { ago: 6, text: 'December dates are filling up.' } ],
      tier: 'Pro Zone', verified: true },
    { key: 'marco-rinaldi-italian', name: 'Marco Rinaldi Italian Lessons', color: '#5E8C61', tag: 'Italian for travellers and beginners · online, one to one', role: 'Italian tutor',
      img: U('1660247539720-b713500f701a', 800, 800), base: 'London, UK · and online', langs: 'Italian, English', years: 10, rating: '4.9', reviewsN: 386, cur: '£',
      creds: ['Qualified teacher of Italian as a foreign language', 'From Rome, lives in London', 'Runs a conversation club'],
      about: 'Marco teaches the Italian you’ll actually use, with real conversations from lesson one. His “Rome in four weeks” course gets travellers ordering, asking and chatting before they fly.',
      services: [ { id: 'trip', name: 'Rome in four weeks', dur: '8 × 45 minutes', price: 160, desc: 'Travel Italian before your trip.' },
                  { id: 'lesson', name: 'One-to-one lesson', dur: '60 minutes', price: 32, desc: 'Any level.' },
                  { id: 'trial', name: 'Trial lesson', dur: '30 minutes', price: 12, desc: 'Find your level.' } ],
      avail: { days: [1, 2, 3, 4, 6], times: ['08:00', '12:30', '19:00'] },
      reviews: [ { who: '@citybreak_cal', stars: 5, ago: 4, text: 'Chatted with our landlady in Italian!' }, { who: '@roma_rachel', stars: 5, ago: 18, text: 'Patient and funny.' }, { who: '@nonna_in_training', stars: 5, ago: 42, text: 'Finally understand my in-laws.' } ],
      posts: [ { ago: 2, text: 'In a Roman bar, pay first at the till, then take your receipt to the counter. Then say “un caffè, per favore”.' } ],
      tier: 'Pro Zone', verified: true },
    { key: 'franco-esposito-pasta', name: 'Franco Esposito Pasta School', color: '#C9962B', tag: 'Fresh pasta classes in Testaccio · and live online', role: 'Pasta maker and cooking teacher',
      img: U('1776728029175-c6b9d807c6b8', 800, 800), base: 'Rome, Italy · and online', langs: 'Italian, English', years: 41, rating: '4.9', reviewsN: 2240, cur: '€',
      creds: ['Forty years in Roman kitchens', 'Ran a trattoria in Testaccio', 'Teaches with his granddaughter'],
      about: 'Franco has made pasta by hand every day since he was a boy. In his small Testaccio kitchen he teaches fettuccine, ravioli and the Roman classics, then everyone sits down to eat what they made.',
      services: [ { id: 'class', name: 'Pasta class and lunch', dur: '3 hours', price: 85, desc: 'Make two pastas, then eat them with wine.' },
                  { id: 'online', name: 'Live online class', dur: '90 minutes', price: 25, desc: 'Cook along from your own kitchen.' },
                  { id: 'private', name: 'Private class', dur: '3 hours', price: 420, desc: 'Up to eight people.' } ],
      avail: { days: [2, 3, 4, 5, 6], times: ['10:00', '17:00'] },
      reviews: [ { who: '@pasta_pete', stars: 5, ago: 2, text: 'The best morning of our trip.' }, { who: '@nonna_in_training', stars: 5, ago: 11, text: 'He corrected my hands like my nonna used to.' }, { who: '@roma_rachel', stars: 5, ago: 30, text: 'Unforgettable.' } ],
      posts: [ { ago: 3, text: 'Carbonara: eggs, pecorino, guanciale, pepper. No cream. Never cream.' } ],
      tier: 'Pro Zone', verified: true }
  ],
  communities: [
    { key: 'roma-lovers', name: 'Roma Lovers', domain: 'lovers.romexx.com', color: '#B5462B', img: U('1773590320601-b909dde1823d', 900, 500),
      scope: 'Global', where: 'Rome and everywhere', members: 486000, online: 6240, tagline: 'All roads lead here.',
      about: 'People who love Rome: trip planning, favourite trattorias, neighbourhood tips, history questions and a lot of photos of domes at sunset.',
      rules: ['Share what you loved', 'Be kind to first-timers', 'No tout or ticket-reseller links'],
      mods: ['@roma_rachel', '@citybreak_cal'],
      threads: [ { t: 'Rome in winter: worth it?', by: '@citybreak_cal', tag: 'PLANNING', replies: 1460, ago: 0, votes: 3240 }, { t: 'Your best carbonara in Rome (no names of chains)', by: '@pasta_pete', tag: 'FOOD', replies: 2140, ago: 1, votes: 4860 }, { t: 'Three days with kids: itinerary help', by: '@family_fiona', tag: 'Q&A', replies: 312, ago: 2, votes: 620 }, { t: 'Your photos of the domes at sunset', by: '@roma_rachel', tag: 'PHOTOS', replies: 980, ago: 3, votes: 2860 } ],
      events: [ { title: 'Live Q&A: planning a winter trip', day: 5, time: '19:00', where: 'Online' }, { title: 'Pasta cook-along', day: 13, time: '18:00', where: 'Online' } ] },
    { key: 'london-italian-club', name: 'London Italian Conversation Club', domain: 'london.romexx.com', color: '#5E8C61', img: U('1647953815782-647b79f68bba', 900, 500),
      scope: 'Local', where: 'London', members: 2100, online: 42, tagline: 'Parliamo! Over aperitivo.',
      about: 'A weekly Italian conversation evening in a Clerkenwell café, for learners and native speakers, with aperitivo and tables by level.',
      rules: ['Italian only at the tables (try!)', 'Every level welcome', 'Native speakers help learners'],
      mods: ['@marco_r', '@nonna_in_training'],
      threads: [ { t: 'Christmas aperitivo: who’s bringing panettone?', by: '@nonna_in_training', tag: 'EVENT', replies: 34, ago: 0, votes: 76 }, { t: 'Beginners’ table: phrases for this week', by: '@marco_r', tag: 'LEARN', replies: 22, ago: 1, votes: 48 }, { t: 'Going to Rome in January: tips?', by: '@citybreak_cal', tag: 'TRAVEL', replies: 41, ago: 2, votes: 60 } ],
      events: [ { title: 'Weekly conversation evening', day: 3, time: '19:00', where: 'Clerkenwell, London' }, { title: 'Christmas aperitivo', day: 17, time: '19:00', where: 'Clerkenwell, London' } ] }
  ],
  feed: [
    { av: 'RX', avBg: TERRA, author: 'RomeXX Editorial', sub: 'Featured · Just now', badge: '★ FEATURED',
      text: 'From a sunrise at the Colosseum to a plate of cacio e pepe in Testaccio. Walks, food, places to stay, Italian to learn and the people who make Rome feel like home. Rome, all in one place.',
      img: U('1775401152739-662f585e4360', 800, 600), eng: '♡ 86.2K · 💬 6.8K · ↗ 9.6K' },
    { av: 'RR', avBg: OCHRE, author: '@roma_rachel', sub: 'Neighbourhoods · Just now', badge: 'COMMUNITY',
      text: 'Got lost in Trastevere on purpose this morning. Ivy, scooters, washing lines and not a single queue. Rome in November is a gift 🛵',
      img: U('1598258500419-5d7895465a20', 800, 600), eng: '♡ 24.6K · 💬 2.2K · ↗ 1.4K' },
    { av: 'VL', avBg: TERRA, author: 'Via Lucia Tours', sub: 'Founding Partner · Brand Zone', badge: 'BRAND ZONE',
      text: '<b>The Colosseum at Dawn</b>: in before the crowds, twelve people, one guide and the arena floor in the first light.',
      img: U('1775401152601-79793ac4c173', 800, 600), eng: '♡ 18.4K · 💬 1.4K · ↗ 2.8K' },
    { av: 'TK', avBg: OCHRE, author: 'Testaccio Kitchen', sub: 'Brand Zone · 1h ago', badge: 'BRAND ZONE',
      text: 'Flour, eggs, a rolling pin and forty minutes: our <b>Pasta Morning</b> ends with lunch at a long table.',
      img: U('1771360873707-f435ef9732ea', 800, 600), eng: '♡ 8.2K · 💬 640 · ↗ 760' },
    { av: 'PP', avBg: STONE, author: '@pasta_pete', sub: 'Eat & Drink · 2h ago', badge: 'COMMUNITY',
      text: 'Three days, three pastas: carbonara, cacio e pepe and this amatriciana. I regret nothing. My trousers regret everything.',
      img: U('1556761223-4c4282c73f77', 800, 600), eng: '♡ 12.8K · 💬 1.6K · ↗ 420' },
    { av: 'CS', avBg: CYPRESS, author: 'Casa Sette Colli', sub: 'Brand Zone · 4h ago', badge: 'BRAND ZONE',
      text: 'The view from our Aventine terrace this morning: domes, rooftops and a coffee going cold because nobody wants to stop looking.',
      img: U('1529260830199-42c24126f198', 800, 600), eng: '♡ 6.4K · 💬 420 · ↗ 580' },
    { av: 'GB', avBg: TERRA, author: 'Giulia Bianchi Rome Guide', sub: 'Ancient Rome · 6h ago', badge: 'PRO ZONE',
      text: 'The Temple of Saturn held Rome’s treasury. Eight columns survive; the rest you have to imagine. That’s the fun part.',
      img: U('1786426118730-48a2adb1fc00', 800, 600), eng: '♡ 4.8K · 💬 320 · ↗ 640' }
  ],
  prompts: ['Plan three days in Rome in December', 'Where can I take a pasta class in Rome?', 'What’s the best time to visit the Colosseum?', 'Teach me some Italian for ordering coffee'],
  businesses: ['tiber-travel-partners', 'pietra-conservation']
};

/* the four Brand Zones and two Business Zones */
const brand = (o) => Object.assign({ kind: 'brand', gw: 'rome', verified: true }, o);
Object.assign(ZONES, {
  'via-lucia-tours': brand({ key: 'via-lucia-tours', name: 'Via Lucia Tours', color: '#B5462B', gradient: TERRA, tier: 'Founding Partner',
    tagline: 'Small-group walking tours of Rome', stats: { followers: '312K', content: '1.4K', products: '16' },
    ad: { badge: 'Featured', img: U('1555992828-ca4dbe41d294', 760, 760), hl: 'The Colosseum at dawn.', sub: 'In before the crowds, twelve people, one guide.', meta: 'From €39' },
    products: [
      { name: 'The Colosseum at Dawn', price: '€89', tag: 'FLAGSHIP', emoji: '🏟️', rating: 4.9, reviews: 6420, cat: 'tours', special: true, desc: 'Early entry to the Colosseum, the arena floor and the Forum, with a licensed guide. Twelve people at most.', features: ['3 hours', 'Entry included', 'Step-free route on request'], review: { who: 'Rachel O.', text: 'Standing on the arena floor at sunrise. Unreal.' } },
      { name: 'Trastevere Food Walk', price: '€75', tag: 'BESTSELLER', emoji: '🍝', rating: 4.9, reviews: 4860, cat: 'tours', desc: 'Eight tastings in Trastevere: supplì, pizza, cheese and gelato.', features: ['3.5 hours, evenings'], review: { who: 'Pete G.', text: 'Came hungry, left very happy.' } },
      { name: 'Hidden Rome Walk', price: '€39', emoji: '🗝️', rating: 4.8, reviews: 2140, cat: 'tours', desc: 'Courtyards, keyholes and churches most visitors miss.', features: ['2.5 hours'], review: { who: 'Cal B.', text: 'Saw a side of Rome I never knew.' } },
      { name: 'Vatican Early Entry', price: '€99', tag: 'SPECIAL', emoji: '⛪', rating: 4.8, reviews: 3240, cat: 'tours', special: true, desc: 'The Vatican Museums and Sistine Chapel before the main doors open.', features: ['3 hours', 'Shoulders and knees covered'], review: { who: 'Fiona M.', text: 'Worth the early alarm.' } }
    ],
    shopCats: [ { key: 'tours', label: 'Tours', icon: '🏛️' } ],
    feed: [
      { type: 'post', sub: 'Brand post · 2h', text: 'First light over the Forum, from this morning’s <b>Colosseum at Dawn</b>.', img: U('1626285220266-e35bd313d05b', 800, 440), eng: '♡ 18.4K · 💬 1.4K · ↗ 2.8K', product: 0 },
      { type: 'post', sub: 'On the walk · Yesterday', text: 'The Tiber at dusk, halfway through the Trastevere Food Walk.', img: U('1610412215329-a4ce5c25b9bb', 800, 440), eng: '♡ 6.4K · 💬 410', product: 1 },
      { type: 'community', who: 'Fiona M.', whoBg: CYPRESS, sub: 'Community · 1d', text: 'Can my mum do the Colosseum tour? She uses a walking stick and can’t manage lots of stairs.', eng: '♡ 480 · 💬 112', reply: 'Hi Fiona! Yes: book the Colosseum at Dawn and tick “step-free route”. Your guide will use the lift to the upper level and a smoother path through the Forum, with plenty of stops to rest. It’s about 2 km in total and there are benches along the way. 🏛️' }
    ],
    events: [ { zoneEvent: true, tag: 'LIVE', title: 'Via Lucia Live · Sunrise at the Colosseum', when: 'Live now', desc: 'Walk the arena floor live as the sun comes up, with a guide answering your questions.', registered: 6240, capacity: 15000 } ],
    about: { founded: 'Rome · 2008', story: 'Two archaeology graduates who started leading walks for friends of friends. Now fifty licensed guides, and still never more than twelve on a tour. We joined RomeXX as Founding Partner because Rome’s visitors are here.', milestones: [['2008', 'The first walk'], ['2016', 'The Colosseum at Dawn'], ['2026', 'Founding Partner on RomeXX']], values: ['Twelve people at most', 'Licensed guides only', 'Step-free routes'] } }),

  'testaccio-kitchen': brand({ key: 'testaccio-kitchen', name: 'Testaccio Kitchen', color: '#C9962B', gradient: OCHRE, tier: 'Brand Zone',
    tagline: 'Pasta classes in Rome and online', stats: { followers: '146K', content: '620', products: '12' },
    ad: { badge: 'New', img: U('1642354571956-d77dfd9596bb', 760, 760), hl: 'Make it. Then eat it.', sub: 'Fresh pasta classes in Testaccio, ending with lunch.', meta: 'From €25' },
    products: [
      { name: 'Pasta Morning', price: '€85', tag: 'FLAGSHIP', emoji: '🍝', rating: 4.9, reviews: 3860, cat: 'classes', special: true, desc: 'Make fettuccine and ravioli by hand, then sit down to lunch with wine.', features: ['3 hours', 'Vegetarian options'], review: { who: 'Pete G.', text: 'The highlight of our trip.' } },
      { name: 'Roman Classics Evening', price: '€95', tag: 'BESTSELLER', emoji: '🧀', rating: 4.9, reviews: 2140, cat: 'classes', desc: 'Carbonara, cacio e pepe, gricia and amatriciana: the four Roman classics.', features: ['Evenings'], review: { who: 'Rachel O.', text: 'Finally got cacio e pepe to work.' } },
      { name: 'Live Online Class', price: '€25', emoji: '💻', rating: 4.8, reviews: 1460, cat: 'online', desc: 'Cook along from your own kitchen.', features: ['90 minutes'], review: { who: 'Cal B.', text: 'Rome in my kitchen.' } },
      { name: 'Gift Voucher', price: '€85', tag: 'SPECIAL', emoji: '🎁', rating: 4.9, reviews: 620, cat: 'gifts', special: true, desc: 'A Pasta Morning, as a gift.', features: ['Valid a year'], review: { who: 'Fiona M.', text: 'Perfect anniversary present.' } }
    ],
    shopCats: [ { key: 'classes', label: 'Classes', icon: '🍝' }, { key: 'online', label: 'Online', icon: '💻' }, { key: 'gifts', label: 'Gifts', icon: '🎁' } ],
    feed: [ { type: 'post', sub: 'Brand post · 1h', text: 'Ravioli by the tray at this morning’s <b>Pasta Morning</b>.', img: U('1465911817134-741b5e473a1b', 800, 440), eng: '♡ 8.2K · 💬 640', product: 0 } ],
    events: [ { zoneEvent: true, tag: 'EVENT', title: 'Christmas pasta cook-along', when: 'Dec 4 · 18:00', desc: 'Make tortellini for Christmas, live online.', registered: 1240, capacity: 3000 } ],
    about: { founded: 'Rome · 2014', story: 'A former trattoria kitchen in Testaccio, Rome’s old food district, turned into a cooking school.', milestones: [['2014', 'The first class'], ['2021', 'Live online'], ['2026', 'Brand Zone on RomeXX']], values: ['Taught by Romans', 'Local producers', 'Everyone eats together'] } }),

  'casa-sette-colli': brand({ key: 'casa-sette-colli', name: 'Casa Sette Colli', color: '#5E8C61', gradient: CYPRESS, tier: 'Brand Zone',
    tagline: 'Small guesthouses on Rome’s seven hills', stats: { followers: '84.6K', content: '310', products: '7' },
    ad: { badge: 'Featured', img: U('1529260830199-42c24126f198', 760, 760), hl: 'Wake up above Rome.', sub: 'Seven small guesthouses, one on each hill.', meta: 'From €120' },
    products: [
      { name: 'Aventine Terrace Room', price: '€180', tag: 'FLAGSHIP', emoji: '🌿', rating: 4.9, reviews: 1240, cat: 'rooms', special: true, desc: 'A quiet room on the Aventine with a shared terrace overlooking the domes.', features: ['Breakfast on the terrace', 'Per night, two people'], review: { who: 'Rachel O.', text: 'That view with breakfast. Wow.' } },
      { name: 'Monti Classic Room', price: '€140', tag: 'BESTSELLER', emoji: '🛏️', rating: 4.8, reviews: 2140, cat: 'rooms', desc: 'In Monti, ten minutes’ walk from the Colosseum.', features: ['Per night, two people'], review: { who: 'Cal B.', text: 'Perfect base.' } },
      { name: 'Family Apartment, Celio', price: '€210', emoji: '👨‍👩‍👧', rating: 4.8, reviews: 640, cat: 'rooms', desc: 'Two bedrooms and a kitchen near the Colosseum.', features: ['Sleeps five'], review: { who: 'Fiona M.', text: 'So easy with kids.' } },
      { name: 'Winter Escape (three nights)', price: '€360', tag: 'SPECIAL', emoji: '❄️', rating: 4.9, reviews: 420, cat: 'offers', special: true, desc: 'Three nights for the price of two-and-a-half, December to February.', features: ['Any guesthouse'], review: { who: 'Pete G.', text: 'Rome in winter is magic.' } }
    ],
    shopCats: [ { key: 'rooms', label: 'Rooms', icon: '🛏️' }, { key: 'offers', label: 'Offers', icon: '❄️' } ],
    feed: [ { type: 'post', sub: 'Brand post · 4h', text: 'Domes and rooftops from the <b>Aventine Terrace</b>, just after breakfast.', img: U('1773590320601-b909dde1823d', 800, 440), eng: '♡ 6.4K · 💬 420', product: 0 } ],
    events: [ { zoneEvent: true, tag: 'SALE', title: 'Christmas sale: Winter Escape from €300', when: 'Dec 4 · All day', desc: 'Three winter nights for €300, one day only.', registered: 2140, capacity: 6000 } ],
    about: { founded: 'Rome · 2012', story: 'A family who restored a guesthouse on the Aventine, then one on each of the other six hills.', milestones: [['2012', 'The Aventine house'], ['2022', 'All seven hills'], ['2026', 'Brand Zone on RomeXX']], values: ['Local staff', 'Breakfast from local bakers', 'Restored, not rebuilt'] } }),

  'dispensa': brand({ key: 'dispensa', name: 'Dispensa', color: '#8A5A3C', gradient: STONE, tier: 'Brand Zone',
    tagline: 'A Roman pantry, delivered to the UK', stats: { followers: '58.2K', content: '260', products: '140' },
    ad: { badge: 'Gift', img: U('1600803907087-f56d462fd26b', 760, 760), hl: 'Rome, in a box.', sub: 'Pecorino, guanciale and pasta from small Roman producers.', meta: 'From £12' },
    products: [
      { name: 'Carbonara Box', price: '£34', tag: 'FLAGSHIP', emoji: '📦', rating: 4.9, reviews: 1860, cat: 'boxes', special: true, desc: 'Guanciale, Pecorino Romano, bronze-cut rigatoni and Franco’s recipe card. Serves six.', features: ['Next-day delivery', 'Chilled packaging'], review: { who: 'Pete G.', text: 'Tastes like Testaccio.' } },
      { name: 'Roman Christmas Hamper', price: '£85', tag: 'BESTSELLER', emoji: '🎄', rating: 4.8, reviews: 960, cat: 'boxes', desc: 'Panettone, olive oil, pasta, wine and biscotti.', features: ['Order by 18 December'], review: { who: 'Fiona M.', text: 'Everyone wanted the hamper.' } },
      { name: 'Bronze-Cut Pasta, Four Shapes', price: '£12', emoji: '🍝', rating: 4.8, reviews: 1240, cat: 'pantry', desc: 'Rigatoni, spaghetti, tonnarelli and mezze maniche.', features: ['500 g each'], review: { who: 'Rachel O.', text: 'The sauce clings properly.' } },
      { name: 'Monthly Pantry Box', price: '£29', tag: 'SPECIAL', emoji: '🫒', rating: 4.8, reviews: 420, cat: 'boxes', special: true, desc: 'A box of Roman ingredients and recipes every month.', features: ['Skip any month'], review: { who: 'Cal B.', text: 'A treat every month.' } }
    ],
    shopCats: [ { key: 'boxes', label: 'Boxes', icon: '📦' }, { key: 'pantry', label: 'Pantry', icon: '🫒' } ],
    feed: [ { type: 'post', sub: 'Brand post · 1d', text: 'Bronze-cut pasta, rough enough for the sauce to cling, in every <b>Carbonara Box</b>. No cream in sight.', img: U('1447279506476-3faec8071eee', 800, 440), eng: '♡ 3.6K · 💬 280', product: 0 } ],
    events: [ { zoneEvent: true, tag: 'DEADLINE', title: 'Last orders for Christmas hampers', when: 'Dec 18 · 23:59', desc: 'Order by 18 December for delivery before Christmas.', registered: 640, capacity: 2000 } ],
    about: { founded: 'London · 2017', story: 'A Roman in London who missed proper guanciale, and started importing it for friends.', milestones: [['2017', 'The first delivery'], ['2023', 'The Carbonara Box'], ['2026', 'Brand Zone on RomeXX']], values: ['Small producers', 'Fairly paid', 'Recyclable cold packaging'] } }),

  'tiber-travel-partners': { key: 'tiber-travel-partners', kind: 'business', gw: 'rome', name: 'Tiber Travel Partners', color: '#B5462B', gradient: TERRA, img: U('1531572753322-ad063cecc140', 900, 500),
    tier: 'Verified', category: 'Destination management', tagline: 'Group travel, events and school trips in Rome.',
    about: { founded: 'Rome · 2003', story: 'We plan and run trips to Rome for schools, companies and tour operators: hotels, guides, transport and the paperwork.' },
    stats: { years: 23, staff: 64, clients: '1,200 groups a year' },
    caps: [ { name: 'School trips', detail: 'Classics and history trips, risk-assessed.' }, { name: 'Corporate events', detail: 'Dinners in palazzos, team days.' }, { name: 'Guides and transport', detail: 'Licensed guides, coaches, accessible vehicles.' } ],
    specs: { moq: 'Ten people', lead: '4 to 12 weeks', regions: 'Rome & Lazio', certs: ['Licensed tour operator', 'Fully insured', 'Accessible travel trained'] },
    supplies: [ { kind: 'brand', key: 'via-lucia-tours', what: 'Licensed guides for school groups' } ],
    cases: [ { title: 'A Latin department’s trip', text: 'Fifty students, four days, every site on the syllabus.' } ],
    feed: [ { sub: 'Planning · 3d', text: 'Spring school trips are filling up.' } ],
    contact: { person: 'Paola Ricci, Groups', response: 'Replies within 24 hours' } },

  'pietra-conservation': { key: 'pietra-conservation', kind: 'business', gw: 'rome', name: 'Pietra Conservation', color: '#5E8C61', gradient: STONE, img: U('1786426118730-48a2adb1fc00', 900, 500),
    tier: 'Verified', category: 'Stone conservation', tagline: 'Conserving historic stone and fountains.',
    about: { founded: 'Rome · 1991', story: 'Conservators who clean, repair and protect historic stone: façades, fountains, statues and floors.' },
    stats: { years: 35, staff: 42, clients: '300 historic sites' },
    caps: [ { name: 'Fountain conservation', detail: 'Cleaning and repair of marble and travertine.' }, { name: 'Façades', detail: 'Laser cleaning, consolidation.' }, { name: 'Surveys', detail: 'Condition reports for owners.' } ],
    specs: { moq: 'One survey', lead: '2 to 16 weeks', regions: 'Italy', certs: ['Accredited conservators', 'Fully insured', 'Heritage-approved methods'] },
    supplies: [ { kind: 'brand', key: 'casa-sette-colli', what: 'Restored travertine for the Aventine house' } ],
    cases: [ { title: 'A neighbourhood fountain', text: 'A small Baroque fountain cleaned and running again.' } ],
    feed: [ { sub: 'On site · 5d', text: 'Laser-cleaning a travertine doorway, one square centimetre at a time.' } ],
    contact: { person: 'Luca Ferri, Projects', response: 'Replies within one working day' } }
});

/* events in the Events tab */
gxEvents('rome', [
  { gw: 'rome', zone: 'via-lucia-tours', type: 'Live', icon: '🔴', live: true, time: 'Live Now', title: 'Via Lucia Live · Sunrise at the Colosseum', desc: 'The arena floor at first light, live, with a guide answering your questions.' },
  { gw: 'rome', type: 'Event', icon: '💬', time: 'Dec 1', title: 'Italian conversation evening, London', desc: 'London Italian Conversation Club: tables by level, aperitivo.' },
  { gw: 'rome', type: 'Event', icon: '❓', time: 'Dec 3', title: 'Live Q&A: planning a winter trip to Rome', desc: 'Roma Lovers: guides answer your questions.' },
  { gw: 'rome', zone: 'casa-sette-colli', type: 'Sale', icon: '❄️', time: 'Dec 4', title: 'Casa Sette Colli Christmas sale', desc: 'Three winter nights for €300, one day only.' },
  { gw: 'rome', zone: 'testaccio-kitchen', type: 'Event', icon: '🍝', time: 'Dec 4', title: 'Christmas pasta cook-along', desc: 'Testaccio Kitchen: make tortellini, live online.' },
  { gw: 'rome', type: 'Event', icon: '👩‍🍳', time: 'Dec 4', title: 'Pasta cook-along', desc: 'Roma Lovers cook cacio e pepe together online.' },
  { gw: 'rome', type: 'Event', icon: '🥂', time: 'Dec 8', title: 'Christmas aperitivo, London', desc: 'London Italian Conversation Club’s festive evening.' },
  { gw: 'rome', zone: 'dispensa', type: 'Deadline', icon: '🎄', time: 'Dec 18', title: 'Last orders for Christmas hampers', desc: 'Dispensa: order by midnight for delivery before Christmas.' }
]);
})();
/* ═════════ /ROMEXX ═════════ */
