/* ═════════ BALLETXX — a Performing Arts demo gateway (2026-11-21, Sean; build -90) ═════════
   Built with the _tools/README.md recipe. Palette (light): blush, rose, midnight navy. Home sector: Performing Arts (perform).
   It's Nutcracker season, so the Founding Partner is a touring company. Pointe work is the teacher's call, never the app's.
   Brands, pros and communities are fictional; places are real. Some images are Degas paintings (public domain). */
(function(){
const U = (id, w, h) => `https://images.unsplash.com/photo-${id}?w=${w}&h=${h}&fit=crop&q=75`;
const ROSE = 'linear-gradient(135deg,#F48CA6,#C2375B)', NAVY = 'linear-gradient(135deg,#4B5E96,#1F2A4D)', BLUSH = 'linear-gradient(135deg,#F9D5DC,#D99AAA)', GOLD = 'linear-gradient(135deg,#E9C77B,#A9822E)';

GATEWAYS.ballet = {
  name: 'BalletXX', domain: 'balletxx.com', emoji: '🩰', sector: 'perform', live: true,
  tagline: 'The Ballet Universe',
  theme: {
    bg: '#FFF7F8', text: '#22223A', cardBg: '#FFFFFF', cardBorder: 'rgba(194,55,91,.12)',
    headerBg: 'linear-gradient(180deg,#FBE3E9,#FFF7F8)', accent: '#D6466E', accentAlt: '#2B3A67', dark: false
  },
  gradient: 'linear-gradient(135deg,#1F2A4D,#C2375B,#F9D5DC)',
  stats: { members: '3.6M', brands: '1,900+', agents: '48' },
  spaces: ['All Feed', 'Adult Ballet', 'Pointe', 'Performances', 'Dancer Health', 'Teachers'],
  trending: ['#NutcrackerSeason', '#AdultBallet', '#PointeShoes'],
  brandZones: [
    { key: 'riverside-ballet', name: 'Riverside Ballet', color: '#D6466E', tier: 'Founding Partner', tag: 'A touring ballet company from Bristol' },
    { key: 'pointe-ribbon', name: 'Pointe & Ribbon', color: '#C9A15A', tier: 'Brand Zone', tag: 'Pointe shoes, made by hand in Northampton' },
    { key: 'arabesque-wear', name: 'Arabesque', color: '#2B3A67', tier: 'Brand Zone', tag: 'Leotards and warm-ups for every body' },
    { key: 'barre-at-home', name: 'Barre at Home', color: '#D99AAA', tier: 'Brand Zone', tag: 'Live ballet classes for adults, online' }
  ],
  apps: [
    { name: 'Barre Timer', color: '#D6466E', desc: 'A ballet class, exercise by exercise, at your barre', key: 'barre-timer', url: 'apps/barre-timer.html',
      dev: 'Barre at Home', rating: '4.8', users: '540K', perms: ['profile', 'feed'],
      tagline: 'Your class, in the right order.',
      about: 'Barre Timer runs a ballet class in the traditional order: pliés, tendus, jetés, ronds de jambe, fondus, frappés, adage and grands battements, each with a timer and a reminder of what to think about. Choose a 30, 45 or 60-minute class.',
      features: ['Barre in the classic order', '30, 45 or 60-minute classes', 'A cue for every exercise', 'Log the classes you’ve done'],
      shots: ['apps/barre-timer/shot-1.jpg', 'apps/barre-timer/shot-2.jpg', 'apps/barre-timer/shot-3.jpg'],
      version: '2.4', size: '9 KB',
      updates: [ { v: '2.4', ago: 3, notes: 'The 30-minute class.' }, { v: '2.0', ago: 80, notes: 'Cues for every exercise.' }, { v: '1.6', ago: 220, notes: 'Signed in with GENEXXO.' } ],
      reviews: [ { who: '@adult_beginner_bea', stars: 5, ago: 1, text: 'My kitchen counter is now a barre. Three classes a week.' }, { who: '@returner_ruth', stars: 5, ago: 9, text: 'Back to ballet after 25 years. This keeps me honest.' }, { who: '@tutu_tom', stars: 4, ago: 21, text: 'Would love centre work too.' } ] },
    { name: 'Pointe Log', color: '#C9A15A', desc: 'Track the hours on every pair of pointe shoes', key: 'pointe-log', url: 'apps/pointe-log.html',
      dev: 'Pointe & Ribbon', rating: '4.7', users: '190K', perms: ['profile', 'feed'],
      tagline: 'Know when a pair is done.',
      about: 'Pointe Log keeps the hours you’ve danced in each pair of pointe shoes and how they feel, so you can see when a pair is going soft and order the next in time. Your teacher decides when you go on pointe and which shoe suits you; this just keeps count.',
      features: ['Hours per pair', 'How soft they feel', 'Rotate two pairs', 'Order-again reminders'],
      shots: ['apps/pointe-log/shot-1.jpg', 'apps/pointe-log/shot-2.jpg', 'apps/pointe-log/shot-3.jpg'],
      version: '1.5', size: '8 KB',
      updates: [ { v: '1.5', ago: 5, notes: 'Two-pair rotation.' }, { v: '1.2', ago: 90, notes: 'Softness notes.' }, { v: '1.0', ago: 230, notes: 'Signed in with GENEXXO.' } ],
      reviews: [ { who: '@pointe_priya', stars: 5, ago: 2, text: 'Finally know how long a pair really lasts me.' }, { who: '@returner_ruth', stars: 4, ago: 12, text: 'Simple and handy.' }, { who: '@ballet_mum_mel', stars: 5, ago: 30, text: 'Saves us running out before a show.' } ] },
    { name: 'Ballet Words', color: '#2B3A67', desc: 'Every ballet term, what it means and how to say it', key: 'ballet-words', url: 'apps/ballet-words.html',
      dev: 'Riverside Ballet', rating: '4.9', users: '820K', perms: ['profile', 'feed'],
      tagline: 'Plié, tendu, sauté: sorted.',
      about: 'Ballet Words explains the French terms teachers use, how to say them and what your body should do, grouped by barre, centre and jumps. Practise with flashcards before class.',
      features: ['Terms by barre, centre and jumps', 'Say-it-like-this guides', 'What the step actually is', 'Flashcards'],
      shots: ['apps/ballet-words/shot-1.jpg', 'apps/ballet-words/shot-2.jpg', 'apps/ballet-words/shot-3.jpg'],
      version: '3.1', size: '10 KB',
      updates: [ { v: '3.1', ago: 4, notes: 'Flashcards.' }, { v: '2.8', ago: 80, notes: 'Jumps section.' }, { v: '2.2', ago: 220, notes: 'Signed in with GENEXXO.' } ],
      reviews: [ { who: '@adult_beginner_bea', stars: 5, ago: 3, text: 'No more nodding along pretending I know what a frappé is.' }, { who: '@tutu_tom', stars: 5, ago: 14, text: 'Really clear.' }, { who: '@ballet_mum_mel', stars: 4, ago: 33, text: 'My daughter uses it before exams.' } ] }
  ],
  pros: [
    { key: 'leah-campbell-ballet', name: 'Leah Campbell Ballet School', color: '#D6466E', tag: 'Ballet for adults and teens · beginners, returners, pointe preparation', role: 'Ballet teacher',
      img: U('1662850886700-4ec19bd30d11', 800, 800), base: 'Manchester, UK · and online', langs: 'English', years: 16, rating: '4.9', reviewsN: 486, cur: '£',
      creds: ['Former soloist with a UK touring company', 'Registered ballet teacher', 'Adult beginners specialist'],
      about: 'Leah danced professionally for ten years before teaching. Her adult classes are warm, unhurried and full of people who swore they’d never dance; her pointe preparation is careful and only when you’re genuinely ready.',
      services: [ { id: 'trial', name: 'First class', dur: '60 minutes', price: 10, desc: 'Absolute beginners welcome. Come in comfy clothes.' },
                  { id: 'term', name: 'Ten-week term', dur: '10 × 75 minutes', price: 120, desc: 'Adult ballet in Ancoats, Manchester.' },
                  { id: 'private', name: 'Private lesson', dur: '45 minutes', price: 45, desc: 'Technique, exam preparation or pointe readiness.' } ],
      avail: { days: [1, 2, 4, 6], times: ['10:00', '18:30', '19:45'] },
      reviews: [ { who: '@adult_beginner_bea', stars: 5, ago: 4, text: 'Started at 41. Leah made it feel completely normal.' }, { who: '@returner_ruth', stars: 5, ago: 15, text: 'Patient and very precise.' }, { who: '@tutu_tom', stars: 5, ago: 40, text: 'The only man in class and never once felt odd.' } ],
      posts: [ { ago: 1, text: 'Pointe readiness is about strength and alignment, not age or years of classes. Your teacher should check, every time.' }, { ago: 6, text: 'January beginners term: a few places left.' } ],
      tier: 'Pro Zone', verified: true },
    { key: 'mei-lin-dance-physio', name: 'Dr Mei Lin Dance Physiotherapy', color: '#2B3A67', tag: 'Physiotherapy for dancers · ankles, hips, backs, return to dance', role: 'Dance physiotherapist',
      img: U('1758691737605-69a0e78bd193', 800, 800), base: 'London, UK', langs: 'English, Mandarin', years: 12, rating: '4.9', reviewsN: 312, cur: '£',
      creds: ['HCPC-registered physiotherapist', 'PhD in dance medicine', 'Physio to a London ballet school'],
      about: 'Mei treats dancers of every age and level. She also runs pre-pointe assessments, so teachers and dancers know whether ankles and core are ready. Pain that lingers isn’t something to dance through.',
      services: [ { id: 'assess', name: 'Assessment and treatment', dur: '50 minutes', price: 70, desc: 'Find the problem, start fixing it, plan your return.' },
                  { id: 'prepointe', name: 'Pre-pointe assessment', dur: '45 minutes', price: 60, desc: 'Strength and range tests, with a report for your teacher.' },
                  { id: 'follow', name: 'Follow-up', dur: '30 minutes', price: 45, desc: 'Progress and exercises.' } ],
      avail: { days: [1, 2, 3, 5], times: ['08:30', '12:30', '17:30'] },
      reviews: [ { who: '@pointe_priya', stars: 5, ago: 6, text: 'Her pre-pointe report gave my teacher exactly what she needed.' }, { who: '@returner_ruth', stars: 5, ago: 18, text: 'Fixed my hip and explained why.' }, { who: '@ballet_mum_mel', stars: 5, ago: 44, text: 'Kind with nervous teens.' } ],
      posts: [ { ago: 2, text: 'Sickling (rolling the foot inwards on demi-pointe) is a common cause of ankle sprains. Ask your teacher to watch for it.' } ],
      tier: 'Pro Zone', verified: true },
    { key: 'rosie-tate-pointe-fitting', name: 'Rosie Tate Pointe Fitting', color: '#C9A15A', tag: 'Pointe shoe fitting · first pairs, problem feet, professionals', role: 'Pointe shoe fitter',
      img: U('1484863137850-59afcfe05386', 800, 800), base: 'Leeds, UK', langs: 'English', years: 9, rating: '4.9', reviewsN: 264, cur: '£',
      creds: ['Trained fitter for three makers', 'Fits a northern ballet school', 'Former dancer'],
      about: 'Rosie fits pointe shoes by looking at the whole foot: length, width, toe shape and strength. First fittings take an hour, and she only fits a first pair with a note from your teacher.',
      services: [ { id: 'first', name: 'First pointe fitting', dur: '60 minutes', price: 25, desc: 'With your teacher’s go-ahead. Shoes extra.' },
                  { id: 'refit', name: 'Re-fit', dur: '30 minutes', price: 15, desc: 'For a change of shoe or new problems.' },
                  { id: 'sew', name: 'Ribbons and elastics sewn', dur: 'Same day', price: 12, desc: 'Sewn in the right place, firmly.' } ],
      avail: { days: [2, 4, 5, 6], times: ['10:00', '13:00', '16:00'] },
      reviews: [ { who: '@pointe_priya', stars: 5, ago: 5, text: 'The first pair that didn’t hurt.' }, { who: '@ballet_mum_mel', stars: 5, ago: 19, text: 'So reassuring for a first fitting.' }, { who: '@returner_ruth', stars: 4, ago: 37, text: 'Knows her stuff.' } ],
      posts: [ { ago: 3, text: 'Never buy pointe shoes to grow into. They should fit snugly today.' } ],
      tier: 'Pro Zone', verified: true }
  ],
  communities: [
    { key: 'adult-ballet-club', name: 'Adult Ballet Club', domain: 'adults.balletxx.com', color: '#D6466E', img: U('1766170449315-e2c4ad8c92fb', 900, 500),
      scope: 'Global', where: 'Every kitchen barre', members: 186000, online: 2860, tagline: 'It’s never too late to plié.',
      about: 'Adults who dance ballet, from first classes to returners and late starters on pointe. Progress posts, class recommendations, terminology questions and a lot of encouragement.',
      rules: ['Encourage, always', 'No body talk, only dancing', 'Pointe advice comes from teachers'],
      mods: ['@adult_beginner_bea', '@returner_ruth'],
      threads: [ { t: 'First ballet class after 40: share yours', by: '@adult_beginner_bea', tag: 'STORIES', replies: 1240, ago: 0, votes: 3210 }, { t: 'Nutcracker season: which productions are you seeing?', by: '@tutu_tom', tag: 'PERFORMANCES', replies: 486, ago: 1, votes: 920 }, { t: 'What is the difference between a fondu and a frappé?', by: '@new_to_barre_nia', tag: 'Q&A', replies: 214, ago: 2, votes: 380 }, { t: 'Adult pointe: when were you ready?', by: '@pointe_priya', tag: 'POINTE', replies: 312, ago: 3, votes: 560 } ],
      events: [ { title: 'Online adult beginners class', day: 3, time: '19:00', where: 'Online' }, { title: 'Nutcracker watch party', day: 14, time: '19:30', where: 'Online' } ] },
    { key: 'manchester-adult-ballet', name: 'Manchester Adult Ballet', domain: 'manchester.balletxx.com', color: '#2B3A67', img: U('1782249522917-5f9bd0233067', 900, 500),
      scope: 'Local', where: 'Manchester', members: 1800, online: 34, tagline: 'Class, coffee and the occasional show.',
      about: 'Adult dancers in Manchester: shared class timetables, group trips to the ballet and an end-of-year showcase where everyone dances, whatever their level.',
      rules: ['Everyone dances in the showcase', 'Coffee after class is compulsory', 'Be kind'],
      mods: ['@manc_mira', '@tutu_tom'],
      threads: [ { t: 'Group trip to the Nutcracker: who’s in?', by: '@manc_mira', tag: 'TRIP', replies: 42, ago: 0, votes: 96 }, { t: 'Showcase music vote', by: '@tutu_tom', tag: 'SHOWCASE', replies: 28, ago: 1, votes: 60 }, { t: 'Best adult classes in town?', by: '@new_to_barre_nia', tag: 'Q&A', replies: 34, ago: 2, votes: 52 } ],
      events: [ { title: 'Group trip to the Nutcracker', day: 12, time: '19:00', where: 'Manchester' }, { title: 'Christmas showcase', day: 19, time: '19:00', where: 'Ancoats, Manchester' } ] }
  ],
  feed: [
    { av: 'BX', avBg: ROSE, author: 'BalletXX Editorial', sub: 'Featured · Just now', badge: '★ FEATURED',
      text: 'From your first plié to the Nutcracker’s snow scene. Classes, pointe shoes, performances, dancer health and the teachers who make it look easy. Ballet, all in one place.',
      img: U('1495791185843-c73f2269f669', 800, 600), eng: '♡ 48.6K · 💬 3.6K · ↗ 5.2K' },
    { av: 'AB', avBg: BLUSH, author: '@adult_beginner_bea', sub: 'Adult Ballet · Just now', badge: 'COMMUNITY',
      text: 'Bought my first proper ballet shoes at 41. Took them out of the box and just looked at them for ten minutes 🩰',
      img: U('1682987228796-cdc66c167dcd', 800, 600), eng: '♡ 16.4K · 💬 1.9K · ↗ 520' },
    { av: 'RB', avBg: ROSE, author: 'Riverside Ballet', sub: 'Founding Partner · Brand Zone', badge: 'BRAND ZONE',
      text: '<b>The Nutcracker</b> opens in Bristol on 4 December, then tours to Cardiff, Birmingham and Leeds. Thirty-two dancers, a live orchestra and a lot of snow.',
      img: U('1619445704651-098bc122b05d', 800, 600), eng: '♡ 14.8K · 💬 1.2K · ↗ 2.1K' },
    { av: 'PR', avBg: GOLD, author: 'Pointe & Ribbon', sub: 'Brand Zone · 1h ago', badge: 'BRAND ZONE',
      text: 'Every pair of our <b>Studio Pointe</b> is made by hand in Northampton, with three shank strengths. Your fitter will know which is yours.',
      img: U('1555489400-df7b0ded356d', 800, 600), eng: '♡ 6.2K · 💬 480 · ↗ 510' },
    { av: 'TT', avBg: NAVY, author: '@tutu_tom', sub: 'Performances · 2h ago', badge: 'COMMUNITY',
      text: 'Tickets booked for the Nutcracker with my whole adult class. Fourteen of us. The usher has no idea what’s coming 🎄',
      img: U('1529229504105-4ea795dcbf59', 800, 600), eng: '♡ 7.8K · 💬 640 · ↗ 220' },
    { av: 'AR', avBg: NAVY, author: 'Arabesque', sub: 'Brand Zone · 4h ago', badge: 'BRAND ZONE',
      text: 'Leotards in 14 sizes and warm-ups that actually keep you warm in a draughty church hall. The <b>Winter Layers</b> are in.',
      img: U('1547153760-18fc86324498', 800, 600), eng: '♡ 4.6K · 💬 360 · ↗ 380' },
    { av: 'RT', avBg: GOLD, author: 'Rosie Tate Pointe Fitting', sub: 'Pointe · 6h ago', badge: 'PRO ZONE',
      text: 'A good fit lets you stand right over the box, with no gap at the heel and no crunched toes. If in doubt, come back for a re-fit.',
      img: U('1675806549575-55449af51b14', 800, 600), eng: '♡ 3.4K · 💬 240 · ↗ 520' }
  ],
  prompts: ['Find an adult beginners ballet class in Manchester', 'Where can I see the Nutcracker this December?', 'What does a ballet barre class involve?', 'How do I know if I’m ready for pointe?'],
  businesses: ['sprung-floors-uk', 'stagecraft-costume']
};

/* the four Brand Zones and two Business Zones */
const brand = (o) => Object.assign({ kind: 'brand', gw: 'ballet', verified: true }, o);
Object.assign(ZONES, {
  'riverside-ballet': brand({ key: 'riverside-ballet', name: 'Riverside Ballet', color: '#D6466E', gradient: ROSE, tier: 'Founding Partner',
    tagline: 'A touring ballet company from Bristol', stats: { followers: '162K', content: '860', products: '18' },
    ad: { badge: 'Featured', img: U('1511715282680-fbf93a50e721', 760, 760), hl: 'The Nutcracker, on tour.', sub: 'Bristol, Cardiff, Birmingham and Leeds, with a live orchestra.', meta: 'From £18' },
    products: [
      { name: 'The Nutcracker: Bristol', price: '£38', tag: 'FLAGSHIP', emoji: '🎄', rating: 4.9, reviews: 3240, cat: 'tickets', special: true, desc: 'Stalls seats for the opening week in Bristol, with the live orchestra.', features: ['4–13 December', 'Relaxed performance on the 6th', 'Under-16s half price'], review: { who: 'Tom K.', text: 'The snow scene made me cry. Again.' } },
      { name: 'The Nutcracker: on tour', price: '£32', tag: 'BESTSELLER', emoji: '🎟️', rating: 4.9, reviews: 2180, cat: 'tickets', desc: 'Cardiff, Birmingham and Leeds, 15–31 December.', features: ['Choose your city'], review: { who: 'Bea L.', text: 'A family tradition now.' } },
      { name: 'Backstage Tour', price: '£18', emoji: '🎭', rating: 4.8, reviews: 860, cat: 'experiences', desc: 'Watch class on stage, see the costumes and meet a dancer.', features: ['Saturday mornings'], review: { who: 'Mel S.', text: 'My daughter met the Sugar Plum Fairy.' } },
      { name: 'Friends Membership', price: '£60', tag: 'SPECIAL', emoji: '💗', rating: 4.9, reviews: 640, cat: 'membership', special: true, desc: 'Priority booking, open rehearsals and a programme for every show.', features: ['A year'], review: { who: 'Ruth P.', text: 'Open rehearsals are magic.' } }
    ],
    shopCats: [ { key: 'tickets', label: 'Tickets', icon: '🎟️' }, { key: 'experiences', label: 'Backstage', icon: '🎭' }, { key: 'membership', label: 'Friends', icon: '💗' } ],
    feed: [
      { type: 'post', sub: 'Brand post · 2h', text: 'Rehearsals for <b>The Nutcracker</b>: the Waltz of the Flowers, day nine.', img: U('1766170449376-f68bba7a46fd', 800, 440), eng: '♡ 14.8K · 💬 1.2K · ↗ 2.1K', product: 0 },
      { type: 'post', sub: 'In the studio · Yesterday', text: 'Our dancers get through about 1,200 pairs of pointe shoes in a Nutcracker season.', img: U('1555656220-46e30749d330', 800, 440), eng: '♡ 5.4K · 💬 380' },
      { type: 'community', who: 'Bea L.', whoBg: BLUSH, sub: 'Community · 1d', text: 'Is there a relaxed performance for my nephew? He finds loud theatres hard.', eng: '♡ 410 · 💬 86', reply: 'Hi Bea! Yes: 6 December in Bristol is a relaxed performance, with the house lights partly up, softer sound effects, a chill-out space and nobody minding a bit of noise. Book through the Nutcracker: Bristol page and choose the 6th. 🎄' }
    ],
    events: [ { zoneEvent: true, tag: 'LIVE', title: 'Riverside Ballet Live · Nutcracker rehearsal', when: 'Live now', desc: 'Watch the company rehearse the snow scene live, with the ballet mistress explaining every correction.', registered: 3860, capacity: 9000 } ],
    about: { founded: 'Bristol · 1987', story: 'A small company that has toured classical ballet to towns big companies don’t reach for almost forty years. We joined BalletXX as Founding Partner because our audiences are here.', milestones: [['1987', 'The first tour'], ['2005', 'Our own Nutcracker'], ['2026', 'Founding Partner on BalletXX']], values: ['Ballet for everyone', 'Live music, always', 'Relaxed performances every run'] } }),

  'pointe-ribbon': brand({ key: 'pointe-ribbon', name: 'Pointe & Ribbon', color: '#C9A15A', gradient: GOLD, tier: 'Brand Zone',
    tagline: 'Pointe shoes, made by hand in Northampton', stats: { followers: '72.4K', content: '320', products: '28' },
    ad: { badge: 'New', img: U('1555489400-d802b08e0982', 760, 760), hl: 'Made by hand, fitted by eye.', sub: 'Studio Pointe, in three shank strengths.', meta: 'From £6' },
    products: [
      { name: 'Studio Pointe', price: '£58', tag: 'FLAGSHIP', emoji: '🩰', rating: 4.8, reviews: 2140, cat: 'pointe', special: true, desc: 'A hand-made pointe shoe with a tapered box and soft, medium or hard shank. Always fitted by a trained fitter first.', features: ['Made in Northampton', 'Three shank strengths'], review: { who: 'Priya R.', text: 'Lasts longer than anything I’ve tried.' } },
      { name: 'Ballet Flats (canvas, split sole)', price: '£22', tag: 'BESTSELLER', emoji: '👟', rating: 4.8, reviews: 3860, cat: 'flats', desc: 'Stretch canvas, split sole, pre-sewn elastics.', features: ['Pink, black or skin tones'], review: { who: 'Bea L.', text: 'My first proper ballet shoes.' } },
      { name: 'Ribbons and Elastics Kit', price: '£6', emoji: '🎀', rating: 4.7, reviews: 1460, cat: 'care', desc: 'Satin ribbons, elastic and a darning needle.', features: ['Six shades'], review: { who: 'Mel S.', text: 'Everything in one packet.' } },
      { name: 'Gel Toe Pads', price: '£14', tag: 'SPECIAL', emoji: '🧦', rating: 4.6, reviews: 980, cat: 'care', special: true, desc: 'Thin gel pads that protect toes without losing the feel of the floor.', features: ['Washable'], review: { who: 'Ruth P.', text: 'Saved my toes in rehearsals.' } }
    ],
    shopCats: [ { key: 'pointe', label: 'Pointe', icon: '🩰' }, { key: 'flats', label: 'Flats', icon: '👟' }, { key: 'care', label: 'Care', icon: '🎀' } ],
    feed: [ { type: 'post', sub: 'Brand post · 1h', text: 'Sewn, darned and broken in: a <b>Studio Pointe</b> ready for its first class.', img: U('1555656220-46e30749d330', 800, 440), eng: '♡ 6.2K · 💬 480', product: 0 } ],
    events: [ { zoneEvent: true, tag: 'EVENT', title: 'Pointe fitting day, Northampton', when: 'Dec 5 · 10:00', desc: 'Free fittings with our makers (teacher’s note needed for a first pair).', registered: 120, capacity: 160 } ],
    about: { founded: 'Northampton · 1998', story: 'Shoemakers in England’s shoe town who started making pointe shoes for a local school.', milestones: [['1998', 'The first pointe shoes'], ['2015', 'Three shank strengths'], ['2026', 'Brand Zone on BalletXX']], values: ['Made by hand', 'Fitted, never guessed', 'Skin-tone shades'] } }),

  'arabesque-wear': brand({ key: 'arabesque-wear', name: 'Arabesque', color: '#2B3A67', gradient: NAVY, tier: 'Brand Zone',
    tagline: 'Leotards and warm-ups for every body', stats: { followers: '88.6K', content: '410', products: '64' },
    ad: { badge: 'Featured', img: U('1547153760-18fc86324498', 760, 760), hl: 'The Winter Layers.', sub: 'Warm-ups for draughty studios, in 14 sizes.', meta: 'From £12' },
    products: [
      { name: 'Camisole Leotard', price: '£32', tag: 'FLAGSHIP', emoji: '🩱', rating: 4.8, reviews: 2860, cat: 'leotards', special: true, desc: 'A classic camisole leotard in recycled fabric, in 14 sizes.', features: ['XXS to 4XL', 'Recycled fabric'], review: { who: 'Bea L.', text: 'Finally a leotard that fits me.' } },
      { name: 'Knitted Wrap Top', price: '£36', tag: 'BESTSELLER', emoji: '🧶', rating: 4.8, reviews: 1840, cat: 'warmups', desc: 'The classic wrap cardigan for the barre.', features: ['Six colours'], review: { who: 'Ruth P.', text: 'Warm all through class.' } },
      { name: 'Men’s Training Tights', price: '£28', emoji: '🩲', rating: 4.7, reviews: 640, cat: 'leotards', desc: 'Footed tights with a proper waistband.', features: ['S to XXL'], review: { who: 'Tom K.', text: 'Comfortable and sturdy.' } },
      { name: 'Warm-Up Booties', price: '£24', tag: 'SPECIAL', emoji: '🥾', rating: 4.7, reviews: 1120, cat: 'warmups', special: true, desc: 'Padded booties for warming up and between rehearsals.', features: ['One size'], review: { who: 'Priya R.', text: 'Rehearsal essential.' } }
    ],
    shopCats: [ { key: 'leotards', label: 'Leotards', icon: '🩱' }, { key: 'warmups', label: 'Warm-ups', icon: '🧶' } ],
    feed: [ { type: 'post', sub: 'Brand post · 4h', text: 'Fourteen sizes, recycled fabric: the <b>Camisole Leotard</b>.', img: U('1675806528444-75a88ed9c014', 800, 440), eng: '♡ 4.6K · 💬 360', product: 0 } ],
    events: [ { zoneEvent: true, tag: 'SALE', title: 'Black Friday: a quarter off warm-ups', when: 'Nov 27 · All day', desc: 'A quarter off every warm-up, for one day.', registered: 2140, capacity: 6000 } ],
    about: { founded: 'Leicester · 2017', story: 'Two dancers who couldn’t find leotards for bodies like theirs. Every style comes in 14 sizes.', milestones: [['2017', 'The first leotard'], ['2023', 'Recycled fabrics'], ['2026', 'Brand Zone on BalletXX']], values: ['Every body', 'Recycled fabric', 'Made in Leicester'] } }),

  'barre-at-home': brand({ key: 'barre-at-home', name: 'Barre at Home', color: '#D99AAA', gradient: BLUSH, tier: 'Brand Zone',
    tagline: 'Live ballet classes for adults, online', stats: { followers: '64.2K', content: '1.2K', products: '6' },
    ad: { badge: 'Gift', img: U('1782248726698-cb65e6a0106a', 760, 760), hl: 'The barre is your kitchen counter.', sub: 'Live adult ballet classes, every weekday.', meta: 'From £8' },
    products: [
      { name: 'Monthly Membership', price: '£24', tag: 'FLAGSHIP', emoji: '💻', rating: 4.8, reviews: 1840, cat: 'membership', special: true, desc: 'Five live classes a week plus the replay library.', features: ['Beginners to intermediate'], review: { who: 'Bea L.', text: 'Three classes a week from my kitchen.' } },
      { name: 'Drop-In Class', price: '£8', tag: 'BESTSELLER', emoji: '🩰', rating: 4.7, reviews: 1260, cat: 'classes', desc: 'One live class, any day.', features: ['60 minutes'], review: { who: 'Nia O.', text: 'Perfect for trying it out.' } },
      { name: 'Portable Barre', price: '£89', emoji: '🪵', rating: 4.7, reviews: 520, cat: 'kit', desc: 'A freestanding, adjustable barre that folds flat.', features: ['Single or double rail'], review: { who: 'Ruth P.', text: 'No more kitchen counter.' } },
      { name: 'Gift: Three Months', price: '£64', tag: 'SPECIAL', emoji: '🎁', rating: 4.9, reviews: 380, cat: 'membership', special: true, desc: 'Three months of classes, as a gift.', features: ['Choose a start date'], review: { who: 'Mel S.', text: 'Mum loves it.' } }
    ],
    shopCats: [ { key: 'membership', label: 'Membership', icon: '💻' }, { key: 'classes', label: 'Classes', icon: '🩰' }, { key: 'kit', label: 'Kit', icon: '🪵' } ],
    feed: [ { type: 'post', sub: 'Brand post · 1d', text: 'Pliés with 600 people in their kitchens this morning. Join us tomorrow at 7.', img: U('1528224564567-1611757a2909', 800, 440), eng: '♡ 2.8K · 💬 210', product: 1 } ],
    events: [ { zoneEvent: true, tag: 'DEADLINE', title: 'Last day for Christmas gift memberships', when: 'Dec 23 · 23:59', desc: 'Buy a gift by 23 December and it’s emailed on Christmas morning.', registered: 460, capacity: 1500 } ],
    about: { founded: 'Online · 2020', story: 'A ballet teacher whose studio closed in 2020 and who kept teaching from her kitchen. Now 5,000 adults take class with us.', milestones: [['2020', 'The first online class'], ['2024', 'Five classes a week'], ['2026', 'Brand Zone on BalletXX']], values: ['Adults welcome', 'Kind, careful teaching', 'Every level'] } }),

  'sprung-floors-uk': { key: 'sprung-floors-uk', kind: 'business', gw: 'ballet', name: 'Sprung Floors UK', color: '#2B3A67', gradient: NAVY, img: U('1516737488405-7b6d6868fad3', 900, 500),
    tier: 'Verified', category: 'Dance flooring', tagline: 'Sprung floors and portable dance surfaces for studios and stages.',
    about: { founded: 'Derby · 2002', story: 'We build sprung floors for dance studios and supply portable vinyl dance surfaces for touring companies and school halls.' },
    stats: { years: 24, staff: 38, clients: '900 studios & theatres' },
    caps: [ { name: 'Sprung floors', detail: 'Built to the shock-absorption dancers need.' }, { name: 'Touring surfaces', detail: 'Roll-out vinyl floors for stages on tour.' }, { name: 'Barres and mirrors', detail: 'Wall and freestanding barres, safety mirrors.' } ],
    specs: { moq: 'One studio', lead: '4 to 8 weeks', regions: 'UK & Ireland', certs: ['Sports floor standard', 'Fully insured', 'Constructionline'] },
    supplies: [ { kind: 'brand', key: 'riverside-ballet', what: 'The touring floor for The Nutcracker' } ],
    cases: [ { title: 'A church-hall ballet school', text: 'A floating sprung floor that packs away for Sunday services.' } ],
    feed: [ { sub: 'Projects · 3d', text: 'The Nutcracker touring floor is packed: 140 square metres of it.' } ],
    contact: { person: 'Helen Marsh, Studios', response: 'Replies within 24 hours' } },

  'stagecraft-costume': { key: 'stagecraft-costume', kind: 'business', gw: 'ballet', name: 'Stagecraft Costume Works', color: '#D6466E', gradient: ROSE, img: U('1782248726751-b3a29837b9c3', 900, 500),
    tier: 'Verified', category: 'Costume making', tagline: 'Tutus and costumes for companies, schools and shows.',
    about: { founded: 'Birmingham · 1995', story: 'We make classical tutus and stage costumes for ballet companies, schools and amateur productions, and hire out a stock of 3,000.' },
    stats: { years: 31, staff: 26, clients: '400 companies & schools' },
    caps: [ { name: 'Classical tutus', detail: 'Platter and romantic tutus, made to measure.' }, { name: 'Costume hire', detail: '3,000 costumes, including three full Nutcrackers.' }, { name: 'Alterations', detail: 'Re-fits between casts.' } ],
    specs: { moq: 'One costume', lead: '6 to 10 weeks', regions: 'UK & Europe', certs: ['Flame-retardant treatments', 'Fully insured', 'Living Wage employer'] },
    supplies: [ { kind: 'brand', key: 'riverside-ballet', what: 'Snowflake tutus for The Nutcracker' } ],
    cases: [ { title: 'A school’s first Nutcracker', text: 'Sixty costumes hired, fitted and altered in three weeks.' } ],
    feed: [ { sub: 'Workroom · 5d', text: 'Forty snowflake tutus, each with 12 layers of net.' } ],
    contact: { person: 'Joan Price, Hire', response: 'Replies within one working day' } }
});

/* events in the Events tab */
gxEvents('ballet', [
  { gw: 'ballet', zone: 'riverside-ballet', type: 'Live', icon: '🔴', live: true, time: 'Live Now', title: 'Riverside Ballet Live · Nutcracker rehearsal', desc: 'The snow scene, rehearsed live, with the ballet mistress explaining every correction.' },
  { gw: 'ballet', type: 'Event', icon: '🩰', time: 'Nov 24', title: 'Online adult beginners class', desc: 'Adult Ballet Club: a gentle first class from your kitchen.' },
  { gw: 'ballet', zone: 'arabesque-wear', type: 'Sale', icon: '🧶', time: 'Nov 27', title: 'Arabesque Black Friday', desc: 'A quarter off every warm-up, for one day.' },
  { gw: 'ballet', type: 'Event', icon: '🎄', time: 'Dec 4', title: 'The Nutcracker opens, Bristol', desc: 'Riverside Ballet’s opening night, with a live orchestra.' },
  { gw: 'ballet', zone: 'pointe-ribbon', type: 'Event', icon: '👣', time: 'Dec 5', title: 'Pointe fitting day, Northampton', desc: 'Free fittings with the makers. Teacher’s note needed for a first pair.' },
  { gw: 'ballet', type: 'Event', icon: '🎟️', time: 'Dec 3', title: 'Group trip to the Nutcracker, Manchester', desc: 'Manchester Adult Ballet goes to the ballet together.' },
  { gw: 'ballet', type: 'Event', icon: '✨', time: 'Dec 10', title: 'Christmas showcase, Manchester', desc: 'Manchester Adult Ballet’s end-of-year showcase. Everyone dances.' },
  { gw: 'ballet', zone: 'barre-at-home', type: 'Deadline', icon: '🎁', time: 'Dec 23', title: 'Last day for gift memberships', desc: 'Barre at Home: buy by midnight, emailed on Christmas morning.' }
]);
})();
/* ═════════ /BALLETXX ═════════ */
