/* ═════════ ETHYLENEXX — a Chemical demo gateway (2026-11-26, Sean; build -97) ═════════
   Built with the _tools/README.md recipe. Palette (dark): night plant, molecule teal, ripe-banana yellow.
   Home sector: Chemical (GW_HOME already says so; listed only there). Every company, maker, pro and product is
   fictional; places (Teesside) and the chemistry are real: ethylene (C₂H₄) is the simplest alkene, the gas that
   ripens fruit, and the building block of polyethylene (recycling codes 2 and 4). */
(function(){
const U = (id, w, h) => `https://images.unsplash.com/photo-${id}?w=${w}&h=${h}&fit=crop&q=75`;
const TEAL = 'linear-gradient(135deg,#2DD4BF,#0F766E)', RIPE = 'linear-gradient(135deg,#FDE047,#CA8A04)', NIGHT = 'linear-gradient(135deg,#334155,#0B1120)', LOOP = 'linear-gradient(135deg,#A78BFA,#5B21B6)';

GATEWAYS.ethylene = {
  name: 'EthyleneXX', domain: 'ethylenexx.com', emoji: '⚗️', sector: 'chemical', live: true,
  tagline: 'The Ethylene Universe',
  theme: {
    bg: '#081214', text: '#E3F1F0', cardBg: 'rgba(255,255,255,.045)', cardBorder: 'rgba(227,241,240,.09)',
    headerBg: 'linear-gradient(180deg,#10262A,#081214)', accent: '#2DD4BF', accentAlt: '#FACC15', dark: true
  },
  gradient: 'linear-gradient(135deg,#081214,#0F766E,#FACC15)',
  stats: { members: '640K', brands: '310+', agents: '19' },
  spaces: ['All Feed', 'Chemistry', 'Plastics & Recycling', 'Food & Ripening', 'Plant Life', 'Careers'],
  trending: ['#C2H4', '#RecycleCode2', '#RipeningRoom'],
  brandZones: [
    { key: 'teesmere-chemicals', name: 'Teesmere Chemicals', color: '#2DD4BF', tier: 'Founding Partner', tag: 'Ethylene and polyethylene from Teesside' },
    { key: 'ripewell', name: 'Ripewell', color: '#FACC15', tier: 'Brand Zone', tag: 'Keep fruit fresher, longer' },
    { key: 'polyloop', name: 'Polyloop', color: '#A78BFA', tier: 'Brand Zone', tag: 'Everyday things made from recycled polyethylene' },
    { key: 'molekit', name: 'Molekit', color: '#94A3B8', tier: 'Brand Zone', tag: 'Molecular model kits for curious minds' }
  ],
  apps: [
    { name: 'Ripeness Planner', color: '#FACC15', desc: 'Which fruit to keep apart, and why', key: 'ripeness-planner', url: 'apps/ripeness-planner.html',
      dev: 'Ripewell', rating: '4.8', users: '1.3M', perms: ['profile', 'feed'],
      tagline: 'One bad apple, explained.',
      about: 'Ripeness Planner explains ethylene, the gas ripening fruit gives off. Tell it what’s in your fruit bowl and fridge and it shows what to keep apart, what to ripen together and what to eat first.',
      features: ['Givers and sensitive foods', 'Your bowl, sorted', 'Ripen an avocado faster', 'Share a tip'],
      shots: ['apps/ripeness-planner/shot-1.jpg', 'apps/ripeness-planner/shot-2.jpg', 'apps/ripeness-planner/shot-3.jpg'],
      version: '3.4', size: '9 KB',
      updates: [ { v: '3.4', ago: 2, notes: 'Your bowl, sorted.' }, { v: '2.9', ago: 75, notes: 'More vegetables.' }, { v: '2.1', ago: 220, notes: 'Signed in with GENEXXO.' } ],
      reviews: [ { who: '@kitchen_chemist_kat', stars: 5, ago: 1, text: 'Moved the bananas away from the broccoli. Life changed.' }, { who: '@sarah_lindqvist_chem', stars: 5, ago: 15, text: 'I use it in my Year 9 lessons.' }, { who: '@teesside_tom', stars: 4, ago: 36, text: 'Simple and clever.' } ] },
    { name: 'Molecule Builder', color: '#2DD4BF', desc: 'Build small molecules and weigh them', key: 'molecule-builder', url: 'apps/molecule-builder.html',
      dev: 'Molekit', rating: '4.9', users: '860K', perms: ['profile', 'feed'],
      tagline: 'Carbon, hydrogen, a double bond.',
      about: 'Molecule Builder lets you add carbon and hydrogen atoms and see the formula, the family (alkane or alkene) and the molar mass, using real atomic masses. Start with ethylene, C₂H₄.',
      features: ['Formula and family', 'Molar mass', 'Alkanes and alkenes side by side', 'Share a molecule'],
      shots: ['apps/molecule-builder/shot-1.jpg', 'apps/molecule-builder/shot-2.jpg', 'apps/molecule-builder/shot-3.jpg'],
      version: '2.6', size: '9 KB',
      updates: [ { v: '2.6', ago: 3, notes: 'Alkanes and alkenes side by side.' }, { v: '2.0', ago: 85, notes: 'Molar mass.' }, { v: '1.4', ago: 230, notes: 'Signed in with GENEXXO.' } ],
      reviews: [ { who: '@sarah_lindqvist_chem', stars: 5, ago: 2, text: 'GCSE organic chemistry, finally visual.' }, { who: '@kitchen_chemist_kat', stars: 5, ago: 20, text: 'My son revised with it.' }, { who: '@bill_thornton_eng', stars: 4, ago: 44, text: 'Good for the basics.' } ] },
    { name: 'Plastic Codes', color: '#A78BFA', desc: 'What the recycling number on plastic means', key: 'plastic-codes', url: 'apps/plastic-codes.html',
      dev: 'Polyloop', rating: '4.8', users: '1.1M', perms: ['profile', 'feed'],
      tagline: 'Turn it over. Read the number.',
      about: 'Plastic Codes explains the number inside the recycling triangle: what each plastic is, where you see it and how it’s usually collected. Codes 2 and 4 are both polyethylene, made from ethylene. Always check your own council’s rules.',
      features: ['All seven codes', 'Where you find each one', 'Your recycling tally', 'Share your tally'],
      shots: ['apps/plastic-codes/shot-1.jpg', 'apps/plastic-codes/shot-2.jpg', 'apps/plastic-codes/shot-3.jpg'],
      version: '3.0', size: '9 KB',
      updates: [ { v: '3.0', ago: 1, notes: 'Recycling tally.' }, { v: '2.5', ago: 62, notes: 'Where you find each one.' }, { v: '1.8', ago: 190, notes: 'Signed in with GENEXXO.' } ],
      reviews: [ { who: '@teesside_tom', stars: 5, ago: 3, text: 'Settled a family argument about yoghurt pots.' }, { who: '@kitchen_chemist_kat', stars: 5, ago: 21, text: 'Clear, finally.' }, { who: '@ade_okafor_safety', stars: 4, ago: 47, text: 'Handy.' } ] }
  ],
  pros: [
    { key: 'sarah-lindqvist-chem', name: 'Dr Sarah Lindqvist Chemistry Tutoring', color: '#2DD4BF', tag: 'Chemistry tutoring, GCSE to degree', role: 'Chemistry tutor',
      img: U('1758685848602-09e52ef9c7d3', 800, 800), base: 'Durham, UK · and online', langs: 'English, Swedish', years: 19, rating: '4.9', reviewsN: 356, cur: '£',
      creds: ['PhD in organic chemistry', 'Former industrial research chemist', 'Teaches GCSE, A-level and first-year degree'],
      about: 'Sarah worked on polymers in industry before she started tutoring. She makes organic chemistry visual, from double bonds to how a gas becomes a carrier bag.',
      services: [ { id: 'lesson', name: 'Tutoring session', dur: '60 minutes', price: 50, desc: 'Any chemistry topic, online.' },
                  { id: 'exam', name: 'Exam revision block', dur: 'Five sessions', price: 230, desc: 'Past papers and the tricky bits.' },
                  { id: 'talk', name: 'School talk: chemistry in your kitchen', dur: '60 minutes', price: 140, desc: 'For classes and clubs.' } ],
      avail: { days: [1, 2, 3, 4, 6], times: ['16:00', '17:30', '19:00'] },
      reviews: [ { who: '@kitchen_chemist_kat', stars: 5, ago: 3, text: 'My daughter went from a 4 to an 8.' }, { who: '@teesside_tom', stars: 5, ago: 26, text: 'Made polymers click.' }, { who: '@bill_thornton_eng', stars: 5, ago: 51, text: 'Superb teacher.' } ],
      posts: [ { ago: 1, text: 'Ethylene has a double bond between its two carbons. Open it up and the molecules link into long chains: that’s polyethylene.' } ],
      tier: 'Pro Zone', verified: true },
    { key: 'bill-thornton-eng', name: 'Bill Thornton Chemical Engineering Mentoring', color: '#94A3B8', tag: 'Careers mentoring in chemical engineering', role: 'Chemical engineering mentor',
      img: U('1662815020802-2bd475c72d93', 800, 800), base: 'Middlesbrough, UK', langs: 'English', years: 44, rating: '5.0', reviewsN: 228, cur: '£',
      creds: ['Forty years on Teesside chemical plants', 'Chartered chemical engineer', 'Mentors apprentices and graduates'],
      about: 'Bill started as an apprentice on a Teesside plant and finished as its chief engineer. Now he helps young people find their way into chemical engineering, with or without a degree.',
      services: [ { id: 'call', name: 'Career chat', dur: '45 minutes', price: 30, desc: 'Apprenticeship or degree? Let’s talk.' },
                  { id: 'cv', name: 'CV and interview prep', dur: '1 week', price: 70, desc: 'For plant and process roles.' },
                  { id: 'school', name: 'School careers talk', dur: '60 minutes', price: 90, desc: 'What a chemical engineer does all day.' } ],
      avail: { days: [2, 3, 4], times: ['10:00', '14:00'] },
      reviews: [ { who: '@teesside_tom', stars: 5, ago: 2, text: 'Got my apprenticeship after his mock interview.' }, { who: '@kitchen_chemist_kat', stars: 5, ago: 29, text: 'Inspired my whole class.' }, { who: '@sarah_lindqvist_chem', stars: 5, ago: 55, text: 'A Teesside legend.' } ],
      posts: [ { ago: 2, text: 'I started on the plant at sixteen with a spanner. You don’t need a degree to start a career in chemicals; you need curiosity.' } ],
      tier: 'Pro Zone', verified: true },
    { key: 'ade-okafor-safety', name: 'Ade Okafor Process Safety Training', color: '#FACC15', tag: 'Process safety training for chemical sites', role: 'Process safety trainer',
      img: U('1726221062299-88f27b653c59', 800, 800), base: 'Stockton-on-Tees, UK · and on site', langs: 'English, Yoruba', years: 20, rating: '4.9', reviewsN: 264, cur: '£',
      creds: ['Chartered safety practitioner', 'Fifteen years as a plant safety lead', 'Trains operators and engineers'],
      about: 'Ade teaches chemical site teams how accidents happen and how to stop them: permits to work, isolations and what to do when an alarm sounds.',
      services: [ { id: 'basics', name: 'Process safety basics', dur: 'One day', price: 220, desc: 'Per person, for new starters.' },
                  { id: 'permit', name: 'Permit to work course', dur: 'One day', price: 240, desc: 'Writing and checking permits.' },
                  { id: 'review', name: 'Site safety walk-round', dur: 'Half a day', price: 480, desc: 'Fresh eyes on your plant.' } ],
      avail: { days: [1, 2, 3, 4, 5], times: ['08:00', '13:00'] },
      reviews: [ { who: '@teesside_tom', stars: 5, ago: 1, text: 'The best training on my induction.' }, { who: '@bill_thornton_eng', stars: 5, ago: 23, text: 'Exactly what young operators need.' }, { who: '@sarah_lindqvist_chem', stars: 5, ago: 46, text: 'Serious and practical.' } ],
      posts: [ { ago: 3, text: 'Every serious accident starts as a small thing nobody stopped. If something looks wrong, stop the job and ask.' } ],
      tier: 'Pro Zone', verified: true }
  ],
  communities: [
    { key: 'the-fume-cupboard', name: 'The Fume Cupboard', domain: 'fume.ethylenexx.com', color: '#2DD4BF', img: U('1694230155228-cdde50083573', 900, 500),
      scope: 'Global', where: 'In every lab and kitchen', members: 214000, online: 2640, tagline: 'Chemistry, for everyone.',
      about: 'Students, teachers, chemists and the curious sharing safe experiments, homework help, chemistry news and the science behind everyday things.',
      rules: ['Safety first: no dangerous experiments', 'Homework help, not homework done', 'Beginners’ questions welcome'],
      mods: ['@kitchen_chemist_kat', '@teesside_tom'],
      threads: [ { t: 'Why does a banana ripen faster in a paper bag?', by: '@kitchen_chemist_kat', tag: 'EVERYDAY', replies: 1860, ago: 0, votes: 3420 }, { t: 'Explain polymers like I’m twelve', by: '@teesside_tom', tag: 'HELP', replies: 920, ago: 1, votes: 1880 }, { t: 'Best safe kitchen experiments for kids', by: '@kitchen_chemist_kat', tag: 'KIDS', replies: 740, ago: 2, votes: 1620 }, { t: 'What do chemical engineers actually do?', by: '@teesside_tom', tag: 'CAREERS', replies: 860, ago: 3, votes: 1740 } ],
      events: [ { title: 'Ask a chemist: live chat', day: 7, time: '19:00', where: 'Online' }, { title: 'Christmas kitchen chemistry', day: 21, time: '18:00', where: 'Online' } ] },
    { key: 'teesside-chemistry-network', name: 'Teesside Chemistry Network', domain: 'teesside.ethylenexx.com', color: '#FACC15', img: U('1649070486864-fdbc35fdb1e1', 900, 500),
      scope: 'Local', where: 'Teesside', members: 1680, online: 36, tagline: 'Where Britain makes its chemicals.',
      about: 'Engineers, operators, apprentices, students and retired plant people on Teesside. Talks, careers nights, plant history and a pint after.',
      rules: ['No company secrets', 'Everyone welcome, badge or not', 'Be kind to newcomers'],
      mods: ['@bill_thornton_eng', '@teesside_tom'],
      threads: [ { t: 'December careers night: who’s hiring?', by: '@bill_thornton_eng', tag: 'CAREERS', replies: 64, ago: 0, votes: 132 }, { t: 'Old photos of the plants', by: '@teesside_tom', tag: 'HISTORY', replies: 52, ago: 1, votes: 110 }, { t: 'Lift share to the Christmas social', by: '@teesside_tom', tag: 'SOCIAL', replies: 24, ago: 2, votes: 48 } ],
      events: [ { title: 'Careers night: chemicals on Teesside', day: 13, time: '18:30', where: 'Middlesbrough' }, { title: 'Christmas social', day: 22, time: '19:00', where: 'Middlesbrough' } ] }
  ],
  feed: [
    { av: 'EX', avBg: TEAL, author: 'EthyleneXX Editorial', sub: 'Featured · Just now', badge: '★ FEATURED',
      text: 'Two carbons, four hydrogens and a double bond. Ethylene ripens your fruit, makes the world’s most common plastic and keeps whole towns working. Chemistry, plants, recycling and careers, all in one place.',
      img: U('1786532852011-443cba5dc9fe', 800, 600), eng: '♡ 24.6K · 💬 1.9K · ↗ 3.2K' },
    { av: 'KK', avBg: RIPE, author: '@kitchen_chemist_kat', sub: 'Food & Ripening · Just now', badge: 'COMMUNITY',
      text: 'Kitchen experiment: two bags of green bananas, one with an apple inside. Three days later the apple bag is spotty and sweet. Ethylene at work 🍌',
      img: U('1760000622077-929c01d80975', 800, 600), eng: '♡ 14.2K · 💬 1.8K · ↗ 1.2K' },
    { av: 'TC', avBg: TEAL, author: 'Teesmere Chemicals', sub: 'Founding Partner · Brand Zone', badge: 'BRAND ZONE',
      text: 'Live now: our first furnace heated by electricity instead of gas fires is switching on tonight. Follow the control room as <b>Teesmere</b> starts the trial.',
      img: U('1768128834406-f5b1b962af9d', 800, 600), eng: '♡ 18.6K · 💬 2.2K · ↗ 2.6K' },
    { av: 'RW', avBg: RIPE, author: 'Ripewell', sub: 'Brand Zone · 1h ago', badge: 'BRAND ZONE',
      text: 'Bananas give off ethylene, and that speeds up everything near them. A <b>Ripewell Fresh Sachet</b> in the fruit bowl soaks it up.',
      img: U('1603833665858-e61d17a86224', 800, 600), eng: '♡ 8.4K · 💬 620 · ↗ 980' },
    { av: 'TT', avBg: NIGHT, author: '@teesside_tom', sub: 'Careers · 2h ago', badge: 'COMMUNITY',
      text: 'Night shift view from the control room window. Three years ago I was stacking shelves. Now I’m a second-year process apprentice.',
      img: U('1566221857770-508d35ee6220', 800, 600), eng: '♡ 9.6K · 💬 980 · ↗ 460' },
    { av: 'PL', avBg: LOOP, author: 'Polyloop', sub: 'Brand Zone · 4h ago', badge: 'BRAND ZONE',
      text: 'Thousands of bottle tops, sorted by colour, about to become something new. The <b>Polyloop Garden Bench</b> is made from 1,800 of them.',
      img: U('1760307837830-5d5d31fcf25f', 800, 600), eng: '♡ 6.2K · 💬 440 · ↗ 720' },
    { av: 'SL', avBg: TEAL, author: 'Dr Sarah Lindqvist Chemistry Tutoring', sub: 'Chemistry · 6h ago', badge: 'PRO ZONE',
      text: 'Tonight’s revision: alkenes. If you remember one thing, remember the double bond. It’s why ethylene reacts, and why it can become a plastic.',
      img: U('1758685848543-5c8ba81bc822', 800, 600), eng: '♡ 3.4K · 💬 220 · ↗ 300' }
  ],
  prompts: ['What is ethylene and why does it ripen fruit?', 'How is plastic made from ethylene?', 'What do the recycling numbers on plastic mean?', 'How do I become a chemical engineer?'],
  businesses: ['tees-tank-storage', 'brightbench-analytics']
};

/* the four Brand Zones and two Business Zones */
const brand = (o) => Object.assign({ kind: 'brand', gw: 'ethylene', verified: true }, o);
Object.assign(ZONES, {
  'teesmere-chemicals': brand({ key: 'teesmere-chemicals', name: 'Teesmere Chemicals', color: '#2DD4BF', gradient: TEAL, tier: 'Founding Partner',
    tagline: 'Ethylene and polyethylene from Teesside', stats: { followers: '186K', content: '540', products: '10' },
    ad: { badge: 'Featured', img: U('1629447388369-760612337eff', 760, 760), hl: 'The building block of everyday things.', sub: 'Ethylene and polyethylene, made on Teesside.', meta: 'From £980 / tonne' },
    products: [
      { name: 'Teesmere Polyethylene Pellets', price: 'From £980 / tonne', tag: 'FLAGSHIP', emoji: '⚪', rating: 4.8, reviews: 420, cat: 'polymers', special: true, desc: 'High-density polyethylene for pipes, crates and bottles.', features: ['Food-contact grade', 'Bulk or bagged'], review: { who: 'Tom H.', text: 'Consistent batch after batch.' } },
      { name: 'Recycled-Blend Pellets', price: 'From £1,120 / tonne', tag: 'BESTSELLER', emoji: '♻️', rating: 4.7, reviews: 260, cat: 'polymers', desc: 'Polyethylene with 30% recycled content.', features: ['Certified recycled content'], review: { who: 'Kat R.', text: 'Our bags are now 30% recycled.' } },
      { name: 'Plant Tour', price: '£10', emoji: '🏭', rating: 4.9, reviews: 860, cat: 'visits', desc: 'A guided tour of the site, by bus, with an engineer.', features: ['Ages 14 and up'], review: { who: 'Bill T.', text: 'Brought back forty years of memories.' } },
      { name: 'Apprentice Open Day', price: '£5', tag: 'SPECIAL', emoji: '🎓', rating: 4.9, reviews: 540, cat: 'visits', special: true, desc: 'Meet apprentices and try real equipment, safely.', features: ['Refunded on the day'], review: { who: 'Ade O.', text: 'Where many careers start.' } }
    ],
    shopCats: [ { key: 'polymers', label: 'Polymers', icon: '⚪' }, { key: 'visits', label: 'Visits', icon: '🏭' } ],
    feed: [
      { type: 'post', sub: 'Brand post · 2h', text: 'The plant at dusk, ten minutes before the trial starts. Behind every <b>Polyethylene Pellet</b> is a night like this.', img: U('1704130092069-30ae33e2def0', 800, 440), eng: '♡ 18.6K · 💬 2.2K · ↗ 2.6K', product: 0 },
      { type: 'post', sub: 'Site · Yesterday', text: 'Columns, pipes and a very blue sky. Come and see it for yourself on a <b>Plant Tour</b>.', img: U('1784915480177-e5787fd4e6e7', 800, 440), eng: '♡ 5.4K · 💬 340', product: 2 },
      { type: 'community', who: 'Kat R.', whoBg: RIPE, sub: 'Community · 1d', text: 'Is the ethylene you make the same gas that ripens my bananas?', eng: '♡ 680 · 💬 200', reply: 'Hi Kat! Yes, exactly the same molecule, C₂H₄. Fruit makes a tiny amount naturally; we make it from gas liquids and turn almost all of it into polyethylene. ⚗️' }
    ],
    events: [ { zoneEvent: true, tag: 'LIVE', title: 'Teesmere Live · the electric furnace trial', when: 'Live now', desc: 'Follow the control room as an electrically heated furnace starts up.', registered: 7860, capacity: 20000 } ],
    about: { founded: 'Teesside · 1971', story: 'A Teesside plant that has made ethylene for fifty years and is now cutting the carbon in how it does it. We joined EthyleneXX as Founding Partner to show people what chemistry does for them.', milestones: [['1971', 'The first cracker'], ['2022', 'Recycled-blend pellets'], ['2026', 'Founding Partner on EthyleneXX']], values: ['Safety above output', 'Lower carbon every year', 'Apprentices from Teesside'] } }),

  'ripewell': brand({ key: 'ripewell', name: 'Ripewell', color: '#FACC15', gradient: RIPE, tier: 'Brand Zone',
    tagline: 'Keep fruit fresher, longer', stats: { followers: '124K', content: '420', products: '18' },
    ad: { badge: 'New', img: U('1781125694557-bb263b24f902', 760, 760), hl: 'Less waste. Fresher fruit.', sub: 'Sachets that soak up ripening gas.', meta: 'From £4' },
    products: [
      { name: 'Ripewell Fresh Sachets', price: '£6', tag: 'FLAGSHIP', emoji: '🍌', rating: 4.7, reviews: 3860, cat: 'home', special: true, desc: 'Absorb ethylene in the fruit bowl or fridge drawer.', features: ['Each lasts three months', 'Pack of four'], review: { who: 'Kat R.', text: 'Strawberries lasted twice as long.' } },
      { name: 'Ripening Bag', price: '£4', tag: 'BESTSELLER', emoji: '🥑', rating: 4.8, reviews: 2140, cat: 'home', desc: 'A paper bag that holds ethylene in to ripen avocados faster.', features: ['Reusable'], review: { who: 'Tom H.', text: 'Guacamole tomorrow, not next week.' } },
      { name: 'Two-Zone Fruit Bowl', price: '£29', emoji: '🥣', rating: 4.6, reviews: 860, cat: 'home', desc: 'Keeps the ethylene givers apart from the rest.', features: ['Bamboo'], review: { who: 'Sarah L.', text: 'A chemistry lesson on the table.' } },
      { name: 'Grocer’s Fresh Pack', price: '£45', tag: 'SPECIAL', emoji: '🛒', rating: 4.8, reviews: 240, cat: 'trade', special: true, desc: 'Fifty large sachets for shops and markets.', features: ['Cuts fruit waste'], review: { who: 'Bill T.', text: 'Our local greengrocer swears by them.' } }
    ],
    shopCats: [ { key: 'home', label: 'Home', icon: '🍌' }, { key: 'trade', label: 'Trade', icon: '🛒' } ],
    feed: [ { type: 'post', sub: 'Brand post · 1h', text: 'Green today, yellow by Friday. Speed them up with a <b>Ripening Bag</b>, or slow them down with a sachet.', img: U('1760696473646-ca046232002b', 800, 440), eng: '♡ 8.4K · 💬 620', product: 1 } ],
    events: [ { zoneEvent: true, tag: 'SALE', title: 'Christmas sale: buy two, get one free', when: 'Dec 4 · All day', desc: 'Three packs of sachets for the price of two.', registered: 1460, capacity: 4000 } ],
    about: { founded: 'Norwich · 2015', story: 'Food scientists who were tired of throwing away fruit.', milestones: [['2015', 'The first sachet'], ['2022', 'Shops and markets'], ['2026', 'Brand Zone on EthyleneXX']], values: ['Less food waste', 'Plastic-free sachets', 'Science you can taste'] } }),

  'polyloop': brand({ key: 'polyloop', name: 'Polyloop', color: '#A78BFA', gradient: LOOP, tier: 'Brand Zone',
    tagline: 'Everyday things made from recycled polyethylene', stats: { followers: '96.2K', content: '360', products: '30' },
    ad: { badge: 'Gift', img: U('1757904257878-5aa64279086d', 760, 760), hl: 'Your old bottle tops, a new bench.', sub: 'Garden and home goods from recycled plastic.', meta: 'From £12' },
    products: [
      { name: 'Polyloop Garden Bench', price: '£189', tag: 'FLAGSHIP', emoji: '🪑', rating: 4.8, reviews: 1460, cat: 'garden', special: true, desc: 'Made from 1,800 recycled bottle tops. Never rots, never needs paint.', features: ['Fifty-year guarantee', 'Recyclable again'], review: { who: 'Tom H.', text: 'Survived a Teesside winter without a mark.' } },
      { name: 'Raised Bed Kit', price: '£79', tag: 'BESTSELLER', emoji: '🌱', rating: 4.8, reviews: 1120, cat: 'garden', desc: 'Planks that click together, from recycled milk bottles.', features: ['1.2 m × 2.4 m'], review: { who: 'Kat R.', text: 'Up in half an hour.' } },
      { name: 'Chopping Board Set', price: '£24', emoji: '🔪', rating: 4.7, reviews: 860, cat: 'kitchen', desc: 'Three boards, food-safe recycled polyethylene.', features: ['Dishwasher-safe'], review: { who: 'Sarah L.', text: 'Code 2 plastic, cleverly reused.' } },
      { name: 'Cap Collection Box', price: '£12', tag: 'SPECIAL', emoji: '📦', rating: 4.9, reviews: 1240, cat: 'kitchen', special: true, desc: 'Fill it with bottle tops, post it back, get £5 off a bench.', features: ['Free returns'], review: { who: 'Bill T.', text: 'My grandchildren filled it in a month.' } }
    ],
    shopCats: [ { key: 'garden', label: 'Garden', icon: '🪑' }, { key: 'kitchen', label: 'Kitchen', icon: '🔪' } ],
    feed: [ { type: 'post', sub: 'Brand post · 1d', text: 'Baled, washed, melted, moulded. Milk bottles on their way to becoming a <b>Raised Bed Kit</b>.', img: U('1591193686104-fddba4d0e4d8', 800, 440), eng: '♡ 4.6K · 💬 300', product: 1 } ],
    events: [ { zoneEvent: true, tag: 'SALE', title: 'Christmas sale: 20% off benches', when: 'Dec 4 · All day', desc: 'A fifth off every bench, one day only.', registered: 980, capacity: 3000 } ],
    about: { founded: 'Hull · 2018', story: 'Engineers who wanted plastic that’s already been made to stay useful for decades.', milestones: [['2018', 'The first bench'], ['2023', 'Cap collection boxes'], ['2026', 'Brand Zone on EthyleneXX']], values: ['Made from waste', 'Built to last fifty years', 'Recyclable again'] } }),

  'molekit': brand({ key: 'molekit', name: 'Molekit', color: '#94A3B8', gradient: NIGHT, tier: 'Brand Zone',
    tagline: 'Molecular model kits for curious minds', stats: { followers: '62.4K', content: '240', products: '20' },
    ad: { badge: 'Featured', img: U('1602052577122-f73b9710adba', 760, 760), hl: 'Hold a molecule.', sub: 'Model kits for students and teachers.', meta: 'From £14' },
    products: [
      { name: 'Molekit Organic Set', price: '£29', tag: 'FLAGSHIP', emoji: '🧪', rating: 4.9, reviews: 2860, cat: 'kits', special: true, desc: '120 atoms and bonds, enough for GCSE and A-level organic chemistry.', features: ['Double and triple bonds', 'Guide included'], review: { who: 'Sarah L.', text: 'Every student should have one.' } },
      { name: 'Classroom Box', price: '£149', tag: 'BESTSELLER', emoji: '🏫', rating: 4.9, reviews: 640, cat: 'kits', desc: 'Ten sets in a sturdy box for a whole class.', features: ['Lesson plans'], review: { who: 'Bill T.', text: 'Our school has three.' } },
      { name: 'Polymer Chain Kit', price: '£19', emoji: '⛓️', rating: 4.8, reviews: 960, cat: 'kits', desc: 'Build ethylene, then link it into polyethylene.', features: ['50 monomers'], review: { who: 'Kat R.', text: 'Made polymers make sense.' } },
      { name: 'Starter Kit', price: '£14', tag: 'SPECIAL', emoji: '🎁', rating: 4.8, reviews: 1460, cat: 'kits', special: true, desc: 'Water, methane, ethylene and more, for ages 10 and up.', features: ['Gift box'], review: { who: 'Tom H.', text: 'My nephew loved it.' } }
    ],
    shopCats: [ { key: 'kits', label: 'Kits', icon: '🧪' } ],
    feed: [ { type: 'post', sub: 'Brand post · 4h', text: 'Glassware, notebooks and a box of atoms. Build it before you draw it, with the <b>Organic Set</b>.', img: U('1783454975251-8baeadeb91f7', 800, 440), eng: '♡ 3.6K · 💬 220', product: 0 } ],
    events: [ { zoneEvent: true, tag: 'EVENT', title: 'Teachers’ webinar: teaching polymers', when: 'Dec 2 · 16:30', desc: 'Lesson ideas with the Polymer Chain Kit, with live Q&A.', registered: 520, capacity: 1500 } ],
    about: { founded: 'Oxford · 2009', story: 'A chemistry teacher who wanted kits that didn’t break in a school bag.', milestones: [['2009', 'The first kit'], ['2019', 'Polymer Chain Kit'], ['2026', 'Brand Zone on EthyleneXX']], values: ['Built for classrooms', 'Lifetime replacement parts', 'Teachers first'] } }),

  'tees-tank-storage': { key: 'tees-tank-storage', kind: 'business', gw: 'ethylene', name: 'Tees Tank Storage', color: '#2DD4BF', gradient: TEAL, img: U('1589725971211-7e86a631e2c2', 900, 500),
    tier: 'Verified', category: 'Bulk liquid storage', tagline: 'Safe storage on the river.',
    about: { founded: 'Teesside · 1988', story: 'We store chemicals and fuels in tanks by the Tees, with jetties for ships and links to the pipelines.' },
    stats: { years: 38, staff: 140, clients: '60 customers' },
    caps: [ { name: 'Tank storage', detail: 'Steel and lined tanks.' }, { name: 'Jetties', detail: 'Ships loaded and unloaded.' }, { name: 'Pipelines', detail: 'Linked to the plants nearby.' } ],
    specs: { moq: 'One tank', lead: '1 to 3 months', regions: 'North East England', certs: ['Major hazard site, regulated', 'Emergency team on site', 'Fully insured'] },
    supplies: [ { kind: 'brand', key: 'teesmere-chemicals', what: 'Storage for Teesmere’s feedstock' } ],
    cases: [ { title: 'Thirty years without a spill', text: 'A safety record built one shift at a time.' } ],
    feed: [ { sub: 'Jetty · 3d', text: 'A new tank inspected and back in service.' } ],
    contact: { person: 'Laura Bennett, Commercial', response: 'Replies within two working days' } },

  'brightbench-analytics': { key: 'brightbench-analytics', kind: 'business', gw: 'ethylene', name: 'Brightbench Analytics', color: '#FACC15', gradient: RIPE, img: U('1766297247072-93fd815afef3', 900, 500),
    tier: 'Verified', category: 'Chemical testing laboratory', tagline: 'Know exactly what’s in it.',
    about: { founded: 'Wilton · 2006', story: 'An independent lab testing plastics, chemicals and recycled materials for purity, strength and safety.' },
    stats: { years: 20, staff: 70, clients: '400 customers' },
    caps: [ { name: 'Polymer testing', detail: 'Strength, melt flow and density.' }, { name: 'Purity', detail: 'Trace impurities found.' }, { name: 'Recycled content', detail: 'Checked and certified.' } ],
    specs: { moq: 'One sample', lead: '3 to 10 days', regions: 'UK and Europe', certs: ['Accredited laboratory', 'Independently audited', 'Fully insured'] },
    supplies: [ { kind: 'brand', key: 'polyloop', what: 'Tests every batch of Polyloop recycled plastic' } ],
    cases: [ { title: 'Recycled, proven', text: 'A packaging firm’s recycled claims checked and certified.' } ],
    feed: [ { sub: 'Lab · 5d', text: 'A new instrument that spots impurities at parts per billion.' } ],
    contact: { person: 'Dr Priya Raman, Lab', response: 'Replies within one working day' } }
});

/* events in the Events tab */
gxEvents('ethylene', [
  { gw: 'ethylene', zone: 'teesmere-chemicals', type: 'Live', icon: '🔴', live: true, time: 'Live Now', title: 'Teesmere Live · the electric furnace trial', desc: 'Follow the control room as an electrically heated furnace starts up.' },
  { gw: 'ethylene', zone: 'ripewell', type: 'Sale', icon: '🍌', time: 'Dec 4', title: 'Ripewell Christmas sale', desc: 'Three packs of sachets for the price of two.' },
  { gw: 'ethylene', zone: 'polyloop', type: 'Sale', icon: '🪑', time: 'Dec 4', title: 'Polyloop Christmas sale', desc: '20% off every recycled bench.' },
  { gw: 'ethylene', zone: 'molekit', type: 'Event', icon: '🧪', time: 'Dec 2', title: 'Teachers’ webinar: teaching polymers', desc: 'Lesson ideas with Molekit, with live Q&A.' },
  { gw: 'ethylene', type: 'Event', icon: '💬', time: 'Dec 3', title: 'Ask a chemist: live chat', desc: 'The Fume Cupboard puts your questions to a chemist.' },
  { gw: 'ethylene', type: 'Event', icon: '🎓', time: 'Dec 9', title: 'Careers night: chemicals on Teesside', desc: 'Teesside Chemistry Network meets apprentices and employers.' },
  { gw: 'ethylene', type: 'Event', icon: '🎄', time: 'Dec 17', title: 'Christmas kitchen chemistry', desc: 'The Fume Cupboard’s festive experiments, safe for kids.' },
  { gw: 'ethylene', type: 'Event', icon: '🍻', time: 'Dec 18', title: 'Christmas social, Middlesbrough', desc: 'Teesside Chemistry Network ends the year together.' }
]);
})();
/* ═════════ /ETHYLENEXX ═════════ */
