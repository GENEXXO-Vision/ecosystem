/* ═════════ DIVORCEXX — a Family demo gateway (2026-11-27, Sean; build -100) ═════════
   Built with the _tools/README.md recipe. Palette (light): calm morning, sky blue, soft green.
   Home sector: Family (listed only there). Every company, maker, pro and product is fictional; places are real.
   CARE (_tools/CARE-BRIEFS.md): separating well: co-parenting, money, a new home, looking after yourself. Never legal advice,
   never taking sides, no jokes about exes. Signposts: Gov.uk family mediation information, Citizens Advice,
   National Domestic Abuse Helpline 0808 2000 247. */
(function(){
const U = (id, w, h) => `https://images.unsplash.com/photo-${id}?w=${w}&h=${h}&fit=crop&q=75`;
const SKY = 'linear-gradient(135deg,#7DD3FC,#0369A1)', LEAF = 'linear-gradient(135deg,#86EFAC,#15803D)', SAND = 'linear-gradient(135deg,#FDE68A,#B45309)', LILAC = 'linear-gradient(135deg,#C4B5FD,#6D28D9)';

GATEWAYS.divorce = {
  name: 'DivorceXX', domain: 'divorcexx.com', emoji: '🌤️', sector: 'family', live: true,
  tagline: 'The Separating Well Universe',
  theme: {
    bg: '#F5F9FB', text: '#0F1C26', cardBg: '#FFFFFF', cardBorder: 'rgba(15,28,38,.08)',
    headerBg: 'linear-gradient(180deg,#FFFFFF,#F5F9FB)', accent: '#0369A1', accentAlt: '#15803D', dark: false
  },
  gradient: 'linear-gradient(135deg,#7DD3FC,#0369A1,#86EFAC)',
  stats: { members: '1.9M', brands: '420+', agents: '24' },
  spaces: ['All Feed', 'Co-parenting', 'Money', 'New Home', 'Looking After You', 'Children'],
  trending: ['#ParentingApart', '#TwoHomes', '#OneStepAtATime'],
  brandZones: [
    { key: 'middleway-mediation', name: 'Middleway Mediation', color: '#0369A1', tier: 'Founding Partner', tag: 'Family mediation that keeps children at the centre' },
    { key: 'twohomes', name: 'Twohomes', color: '#15803D', tier: 'Brand Zone', tag: 'A second set of everything, for children with two homes' },
    { key: 'freshstart-removals', name: 'Freshstart Removals', color: '#B45309', tier: 'Brand Zone', tag: 'Small, kind removals for a new start' },
    { key: 'hopscotch-books', name: 'Hopscotch Books', color: '#6D28D9', tier: 'Brand Zone', tag: 'Gentle books for children whose parents live apart' }
  ],
  apps: [
    { name: 'Co-Parent Calendar', color: '#0369A1', desc: 'Whose week is it? Handovers, plans and swaps in one place', key: 'coparent-calendar', url: 'apps/coparent-calendar.html',
      dev: 'Middleway Mediation', rating: '4.9', users: '860K', perms: ['profile', 'feed'],
      tagline: 'Two homes, one calendar.',
      about: 'Co-Parent Calendar shows which home the children are at each day, the next handover and anything coming up, like a school play or a dentist visit. It keeps the plan clear so there’s less to argue about.',
      features: ['Week-on, week-off or your own pattern', 'Next handover', 'Shared notes for school things', 'Share the plan'],
      shots: ['apps/coparent-calendar/shot-1.jpg', 'apps/coparent-calendar/shot-2.jpg', 'apps/coparent-calendar/shot-3.jpg'],
      version: '3.1', size: '9 KB',
      updates: [ { v: '3.1', ago: 2, notes: 'Custom patterns.' }, { v: '2.5', ago: 70, notes: 'School notes.' }, { v: '1.9', ago: 220, notes: 'Signed in with GENEXXO.' } ],
      reviews: [ { who: '@two_homes_tom', stars: 5, ago: 1, text: 'Fewer texts, fewer arguments.' }, { who: '@richard_hale_mediation', stars: 5, ago: 14, text: 'I suggest it to every family I work with.' }, { who: '@starting_over_sian', stars: 4, ago: 40, text: 'The kids like seeing the plan too.' } ] },
    { name: 'Separation Checklist', color: '#15803D', desc: 'One step at a time: what to sort, and who can help', key: 'separation-checklist', url: 'apps/separation-checklist.html',
      dev: 'Freshstart Removals', rating: '4.8', users: '540K', perms: ['profile', 'feed'],
      tagline: 'One step at a time.',
      about: 'Separation Checklist breaks the practical side of separating into small steps: the children, money, home, paperwork and looking after yourself. Each step says who can help. It is not legal advice.',
      features: ['Five areas, small steps', 'Who can help with each', 'Your progress', 'Share a milestone'],
      shots: ['apps/separation-checklist/shot-1.jpg', 'apps/separation-checklist/shot-2.jpg', 'apps/separation-checklist/shot-3.jpg'],
      version: '2.0', size: '9 KB',
      updates: [ { v: '2.0', ago: 3, notes: 'Who can help.' }, { v: '1.5', ago: 76, notes: 'Looking after yourself.' }, { v: '1.0', ago: 200, notes: 'Signed in with GENEXXO.' } ],
      reviews: [ { who: '@starting_over_sian', stars: 5, ago: 2, text: 'Made something huge feel manageable.' }, { who: '@nia_robinson_money', stars: 5, ago: 20, text: 'Clear and kind.' }, { who: '@two_homes_tom', stars: 4, ago: 44, text: 'Good place to start.' } ] },
    { name: 'Budget Splitter', color: '#B45309', desc: 'Plan money for two homes, honestly', key: 'budget-splitter', url: 'apps/budget-splitter.html',
      dev: 'Twohomes', rating: '4.8', users: '420K', perms: ['profile', 'feed'],
      tagline: 'Two homes, one clear plan.',
      about: 'Budget Splitter helps you plan your own monthly budget after separating: income, costs at your home and shared children’s costs. Figures are yours to enter. It’s a planning tool, not financial or legal advice.',
      features: ['Your monthly budget', 'Shared children’s costs', 'What’s left each month', 'Share a milestone, never the numbers'],
      shots: ['apps/budget-splitter/shot-1.jpg', 'apps/budget-splitter/shot-2.jpg', 'apps/budget-splitter/shot-3.jpg'],
      version: '1.6', size: '9 KB',
      updates: [ { v: '1.6', ago: 1, notes: 'Shared costs.' }, { v: '1.2', ago: 62, notes: 'What’s left.' }, { v: '1.0', ago: 170, notes: 'Signed in with GENEXXO.' } ],
      reviews: [ { who: '@starting_over_sian', stars: 5, ago: 3, text: 'First time I felt in control of money.' }, { who: '@nia_robinson_money', stars: 5, ago: 24, text: 'Simple and private.' }, { who: '@two_homes_tom', stars: 4, ago: 52, text: 'Useful.' } ] }
  ],
  pros: [
    { key: 'richard-hale-mediation', name: 'Richard Hale Family Mediation', color: '#0369A1', tag: 'Calm family mediation for separating parents', role: 'Family mediator',
      img: U('1776196256129-729528f393dd', 800, 800), base: 'Bristol, UK · and online', langs: 'English', years: 22, rating: '4.9', reviewsN: 228, cur: '£',
      creds: ['Accredited family mediator', 'Twenty years’ experience', 'Trained in child-inclusive mediation'],
      about: 'Richard helps separating parents agree arrangements for children and money, calmly and without taking sides. Mediation isn’t right for everyone, especially where there has been abuse; he’ll talk that through with each of you privately first.',
      services: [ { id: 'miam', name: 'First meeting (on your own)', dur: '1 hour', price: 120, desc: 'A private first meeting to see if mediation suits you.' },
                  { id: 'joint', name: 'Joint session', dur: '90 minutes', price: 180, desc: 'Per person, online or in Bristol.' },
                  { id: 'plan', name: 'Parenting plan session', dur: '2 hours', price: 220, desc: 'Write a plan for the children together.' } ],
      avail: { days: [1, 2, 3, 4], times: ['09:30', '13:00', '17:30'] },
      reviews: [ { who: '@two_homes_tom', stars: 5, ago: 2, text: 'We left with a plan, and still talking.' }, { who: '@starting_over_sian', stars: 5, ago: 26, text: 'Fair to both of us.' }, { who: '@sarah_lim_children', stars: 5, ago: 52, text: 'A calm, wise mediator.' } ],
      posts: [ { ago: 1, text: 'You don’t have to like each other to parent well together. You just have to keep the children at the centre of every decision.' } ],
      tier: 'Pro Zone', verified: true },
    { key: 'sarah-lim-children', name: 'Sarah Lim Children’s Voice', color: '#15803D', tag: 'Helping children be heard when parents separate', role: 'Child-inclusive practitioner',
      img: U('1600481176431-47ad2ab2745d', 800, 800), base: 'Leeds, UK · and online', langs: 'English, Cantonese', years: 15, rating: '5.0', reviewsN: 164, cur: '£',
      creds: ['Child-inclusive mediation practitioner', 'Former school counsellor', 'Works alongside family mediators'],
      about: 'Sarah meets children, with their parents’ agreement, so their feelings can be shared safely and kindly. She never asks children to choose.',
      services: [ { id: 'child', name: 'Child consultation', dur: '1 hour', price: 150, desc: 'For children aged ten and over.' },
                  { id: 'parents', name: 'Parent session', dur: '1 hour', price: 90, desc: 'Talking to children about separation.' },
                  { id: 'talk', name: 'School staff talk', dur: '1 hour', price: 180, desc: 'Supporting pupils whose parents separate.' } ],
      avail: { days: [2, 4, 5], times: ['10:00', '16:00'] },
      reviews: [ { who: '@starting_over_sian', stars: 5, ago: 4, text: 'My son felt listened to.' }, { who: '@two_homes_tom', stars: 5, ago: 28, text: 'Gentle and wise.' }, { who: '@richard_hale_mediation', stars: 5, ago: 56, text: 'Children trust her.' } ],
      posts: [ { ago: 2, text: 'Children rarely need the full story. They need to hear it isn’t their fault, that both parents love them, and what happens next.' } ],
      tier: 'Pro Zone', verified: true },
    { key: 'nia-robinson-money', name: 'Nia Robinson Money Coaching', color: '#B45309', tag: 'Budgeting help after separation', role: 'Money coach',
      img: U('1589156191108-c762ff4b96ab', 800, 800), base: 'Birmingham, UK · and online', langs: 'English', years: 8, rating: '4.9', reviewsN: 138, cur: '£',
      creds: ['Accredited money coach', 'Former bank customer adviser', 'Volunteers at a debt advice charity'],
      about: 'Nia helps people build a clear budget for life after separating. She’s a coach, not a financial adviser or solicitor, and will point you to Citizens Advice or a professional for anything beyond budgeting.',
      services: [ { id: 'start', name: 'Budget starter session', dur: '1 hour', price: 45, desc: 'Your money, mapped out.' },
                  { id: 'month', name: 'Month of coaching', dur: 'Four calls', price: 150, desc: 'Build the habit together.' },
                  { id: 'qa', name: 'Quick question call', dur: '20 minutes', price: 20, desc: 'One money worry, talked through.' } ],
      avail: { days: [1, 3, 5], times: ['12:00', '19:00'] },
      reviews: [ { who: '@starting_over_sian', stars: 5, ago: 3, text: 'I sleep better knowing the numbers.' }, { who: '@two_homes_tom', stars: 5, ago: 30, text: 'No judgement, just help.' }, { who: '@sarah_lim_children', stars: 5, ago: 60, text: 'Warm and practical.' } ],
      posts: [ { ago: 3, text: 'Start with one list: what comes in and what must go out. Everything else can wait until next week.' } ],
      tier: 'Pro Zone', verified: true }
  ],
  communities: [
    { key: 'parenting-apart', name: 'Parenting Apart', domain: 'apart.divorcexx.com', color: '#0369A1', img: U('1764697383508-b7f53784ffc0', 900, 500),
      scope: 'Global', where: 'Wherever you are', members: 284000, online: 3240, tagline: 'Two homes, one family. Kindness first.',
      about: 'Separated and separating parents sharing what helps children thrive in two homes. No taking sides, no blaming exes and no legal advice: Gov.uk has information on family mediation, and Citizens Advice can help with your situation. If you’re worried about your safety, call the National Domestic Abuse Helpline free on 0808 2000 247. This is a demo community.',
      rules: ['No blaming or naming exes', 'No legal advice: point to professionals', 'Children’s privacy always'],
      mods: ['@two_homes_tom', '@starting_over_sian'],
      threads: [ { t: 'Handover ideas that keep things calm', by: '@two_homes_tom', tag: 'HANDOVERS', replies: 1640, ago: 0, votes: 3260 }, { t: 'How we told the children (and what we’d change)', by: '@starting_over_sian', tag: 'CHILDREN', replies: 2120, ago: 1, votes: 4080 }, { t: 'First Christmas in two homes: your plans', by: '@two_homes_tom', tag: 'CHRISTMAS', replies: 1380, ago: 2, votes: 2860 }, { t: 'Small things that helped me cope', by: '@starting_over_sian', tag: 'YOU', replies: 980, ago: 3, votes: 2240 } ],
      events: [ { title: 'Live: planning a two-home Christmas', day: 4, time: '19:30', where: 'Online' }, { title: 'Ask a mediator anything', day: 12, time: '19:00', where: 'Online' } ] },
    { key: 'bristol-parents-apart', name: 'Bristol Parents Apart', domain: 'bristol.divorcexx.com', color: '#15803D', img: U('1604881991405-b273c7a4386a', 900, 500),
      scope: 'Local', where: 'Bristol', members: 760, online: 18, tagline: 'Coffee, company and no judgement.',
      about: 'Separated parents around Bristol who meet for coffee, park trips with the kids and a friendly ear. Everyone welcome, however long it’s been.',
      rules: ['What’s said at coffee stays there', 'No blaming exes', 'Kids always welcome'],
      mods: ['@richard_hale_mediation', '@starting_over_sian'],
      threads: [ { t: 'December coffee: surviving the school holidays', by: '@starting_over_sian', tag: 'MEETUP', replies: 32, ago: 0, votes: 78 }, { t: 'Park trip with the kids on Sunday?', by: '@starting_over_sian', tag: 'KIDS', replies: 24, ago: 1, votes: 52 }, { t: 'Thank you all, from a new member', by: '@richard_hale_mediation', tag: 'THANKS', replies: 18, ago: 2, votes: 46 } ],
      events: [ { title: 'December coffee: the school holidays', day: 8, time: '10:00', where: 'Bristol' }, { title: 'New year park trip', day: 37, time: '11:00', where: 'Bristol' } ] }
  ],
  feed: [
    { av: 'DX', avBg: SKY, author: 'DivorceXX Editorial', sub: 'Featured · Just now', badge: '★ FEATURED',
      text: 'Separating well: co-parenting, money, a new home and looking after yourself, one step at a time. No sides, no blame. This is a demo: for advice, speak to Citizens Advice or a family solicitor. If you feel unsafe, the National Domestic Abuse Helpline is free on 0808 2000 247.',
      img: U('1644941002474-6ee8ab0ee8cb', 800, 600), eng: '♡ 18.6K · 💬 1.6K · ↗ 2.8K' },
    { av: 'TT', avBg: LEAF, author: '@two_homes_tom', sub: 'Co-parenting · Just now', badge: 'COMMUNITY',
      text: 'Handover day used to be the hardest hour of the week. Now we meet at the park, the kids play for ten minutes and we swap the bag and one sentence of news. It works.',
      img: U('1557176278-3326a3193580', 800, 600), eng: '♡ 9.8K · 💬 1.2K · ↗ 840' },
    { av: 'MM', avBg: SKY, author: 'Middleway Mediation', sub: 'Founding Partner · Brand Zone', badge: 'BRAND ZONE',
      text: 'Live now: “Telling the children, together.” A family mediator and a child psychologist answer your questions about what to say, when, and how. Follow <b>Middleway Mediation</b>.',
      img: U('1777464320955-1f884994b3ea', 800, 600), eng: '♡ 12.4K · 💬 1.8K · ↗ 2.0K' },
    { av: 'TH', avBg: LEAF, author: 'Twohomes', sub: 'Brand Zone · 1h ago', badge: 'BRAND ZONE',
      text: 'A toothbrush, pyjamas and a favourite cup in both homes means less packing and fewer tears. The <b>Twohomes Starter Box</b> has a second set of the everyday things.',
      img: U('1531984929664-2fb2be468d3e', 800, 600), eng: '♡ 5.6K · 💬 420 · ↗ 580' },
    { av: 'SO', avBg: SAND, author: '@starting_over_sian', sub: 'New Home · 2h ago', badge: 'COMMUNITY',
      text: 'Six months on. My own flat, plants on every windowsill and the kids chose the colour for their room. Some days are still hard. Most days, now, are good.',
      img: U('1730154838368-c37b1fdebcf6', 800, 600), eng: '♡ 8.4K · 💬 960 · ↗ 620' },
    { av: 'HB', avBg: LILAC, author: 'Hopscotch Books', sub: 'Brand Zone · 4h ago', badge: 'BRAND ZONE',
      text: 'A picture book about a little girl with two front doors, two bedrooms and one big heart. <b>Two Doors</b>, for children aged three to seven.',
      img: U('1533667196701-76bd7496b125', 800, 600), eng: '♡ 4.6K · 💬 300 · ↗ 420' },
    { av: 'SL', avBg: LEAF, author: 'Sarah Lim Children’s Voice', sub: 'Children · 6h ago', badge: 'PRO ZONE',
      text: 'Homework at one home on Tuesday, the other on Thursday. A nine-year-old told me the best bit is that both homes know her spelling list. Small things matter.',
      img: U('1758687126375-e2c1683219e9', 800, 600), eng: '♡ 5.2K · 💬 340 · ↗ 460' }
  ],
  prompts: ['How do we tell the children?', 'What is family mediation?', 'How do I budget for two homes?', 'How can handovers be calmer?'],
  businesses: ['calmsplit-money', 'new-chapter-counselling']
};

/* the four Brand Zones and two Business Zones */
const brand = (o) => Object.assign({ kind: 'brand', gw: 'divorce', verified: true }, o);
Object.assign(ZONES, {
  'middleway-mediation': brand({ key: 'middleway-mediation', name: 'Middleway Mediation', color: '#0369A1', gradient: SKY, tier: 'Founding Partner',
    tagline: 'Family mediation that keeps children at the centre', stats: { followers: '186K', content: '420', products: '5' },
    ad: { badge: 'Featured', img: U('1604881988758-f76ad2f7aac1', 760, 760), hl: 'Agree what’s best, together.', sub: 'Accredited family mediators, online and across England.', meta: 'From £120' },
    products: [
      { name: 'First Meeting', price: '£120', tag: 'FLAGSHIP', emoji: '🤝', rating: 4.9, reviews: 2640, cat: 'mediation', special: true, desc: 'A private first meeting for each of you, to see if mediation is right.', features: ['Online or in person', 'Safety screening'], review: { who: 'Tom H.', text: 'Calm and fair from the start.' } },
      { name: 'Joint Session', price: '£180 per person', tag: 'BESTSELLER', emoji: '🗓️', rating: 4.8, reviews: 1860, cat: 'mediation', desc: 'Ninety minutes with an accredited mediator.', features: ['Online or in person'], review: { who: 'Sian P.', text: 'We agreed the holidays in one go.' } },
      { name: 'Parenting Plan Pack', price: '£25', emoji: '📝', rating: 4.8, reviews: 1240, cat: 'plans', desc: 'A workbook to plan arrangements for the children together.', features: ['Printable'], review: { who: 'Richard H.', text: 'I use it with every family.' } },
      { name: 'Child Consultation', price: 'From £150', tag: 'SPECIAL', emoji: '🧒', rating: 4.9, reviews: 420, cat: 'plans', special: true, desc: 'A specialist meets your child, so their views are heard.', features: ['Ages ten and over'], review: { who: 'Sarah L.', text: 'Gives children a voice.' } }
    ],
    shopCats: [ { key: 'mediation', label: 'Mediation', icon: '🤝' }, { key: 'plans', label: 'Plans & children', icon: '📝' } ],
    feed: [
      { type: 'post', sub: 'Brand post · 2h', text: 'Two coffees, one table, and a plan for the children. That’s a <b>Joint Session</b>.', img: U('1574644729371-36f25b3c8c0e', 800, 440), eng: '♡ 12.4K · 💬 1.8K · ↗ 2.0K', product: 1 },
      { type: 'community', who: 'Sian P.', whoBg: SKY, sub: 'Community · 1d', text: 'Is mediation right if we can barely talk?', eng: '♡ 640 · 💬 190', reply: 'Hi Sian. Many couples start that way. Mediators can work with you in separate rooms, called shuttle mediation. If there has been abuse, tell the mediator privately at the first meeting: mediation may not be right, and that’s okay. 🤝' }
    ],
    events: [ { zoneEvent: true, tag: 'LIVE', title: 'Middleway Live · telling the children, together', when: 'Live now', desc: 'A mediator and a child psychologist answer your questions.', registered: 7860, capacity: 18000 } ],
    about: { founded: 'Bristol · 2011', story: 'Mediators who believe separation can be done kindly, with children at the centre. We joined DivorceXX as Founding Partner because good information helps families separate well.', milestones: [['2011', 'Founded'], ['2020', 'Online mediation'], ['2026', 'Founding Partner on DivorceXX']], values: ['Children at the centre', 'No sides', 'Safety first'] } }),

  'twohomes': brand({ key: 'twohomes', name: 'Twohomes', color: '#15803D', gradient: LEAF, tier: 'Brand Zone',
    tagline: 'A second set of everything, for children with two homes', stats: { followers: '84.6K', content: '220', products: '36' },
    ad: { badge: 'New', img: U('1759559585493-8f3a10cec180', 760, 760), hl: 'At home in both homes.', sub: 'Second sets of the everyday things.', meta: 'From £12' },
    products: [
      { name: 'Twohomes Starter Box', price: '£45', tag: 'FLAGSHIP', emoji: '📦', rating: 4.8, reviews: 1460, cat: 'boxes', special: true, desc: 'Toothbrush, pyjamas, towel, cup and night light.', features: ['Ages 3 to 12', 'Choose colours'], review: { who: 'Tom H.', text: 'Bedtime at mine got so much easier.' } },
      { name: 'Two-Home Wall Calendar', price: '£12', tag: 'BESTSELLER', emoji: '🗓️', rating: 4.8, reviews: 980, cat: 'helpers', desc: 'Children colour in which home they’re at.', features: ['Stickers included'], review: { who: 'Sian P.', text: 'My daughter loves it.' } },
      { name: 'Handover Bag', price: '£20', emoji: '🎒', rating: 4.7, reviews: 760, cat: 'helpers', desc: 'A small bag just for the special things that travel.', features: ['Name tag'], review: { who: 'Sarah L.', text: 'Children love having their own.' } },
      { name: 'Comfort Bear Pair', price: '£24', tag: 'SPECIAL', emoji: '🧸', rating: 4.9, reviews: 540, cat: 'boxes', special: true, desc: 'Two matching bears, one for each home.', features: ['Washable'], review: { who: 'Richard H.', text: 'Such a kind idea.' } }
    ],
    shopCats: [ { key: 'boxes', label: 'Boxes', icon: '📦' }, { key: 'helpers', label: 'Helpers', icon: '🗓️' } ],
    feed: [ { type: 'post', sub: 'Brand post · 1d', text: 'A big hug at handover. The <b>Comfort Bear Pair</b>: one bear in each home.', img: U('1528743061033-811f9c409881', 800, 440), eng: '♡ 5.6K · 💬 420', product: 3 } ],
    events: [ { zoneEvent: true, tag: 'SALE', title: 'Two-home Christmas: starter boxes 20% off', when: 'Dec 3 · All week', desc: 'Starter Boxes, 20% off.', registered: 1180, capacity: 3000 } ],
    about: { founded: 'Leeds · 2018', story: 'A separated dad who was tired of forgotten toothbrushes and tearful bedtimes.', milestones: [['2018', 'The first box'], ['2023', 'Comfort bears'], ['2026', 'Brand Zone on DivorceXX']], values: ['Children first', 'Kind design', 'Fair prices'] } }),

  'freshstart-removals': brand({ key: 'freshstart-removals', name: 'Freshstart Removals', color: '#B45309', gradient: SAND, tier: 'Brand Zone',
    tagline: 'Small, kind removals for a new start', stats: { followers: '62.4K', content: '180', products: '6' },
    ad: { badge: 'Featured', img: U('1714647211902-bb711d643a17', 760, 760), hl: 'A gentle move.', sub: 'Small removals with a kind, careful team.', meta: 'From £180' },
    products: [
      { name: 'Small Move', price: 'From £180', tag: 'FLAGSHIP', emoji: '🚚', rating: 4.9, reviews: 1840, cat: 'moves', special: true, desc: 'A van and two movers for a flat or a few rooms.', features: ['Half day', 'Fully insured'], review: { who: 'Sian P.', text: 'They were so kind on a hard day.' } },
      { name: 'Packing Help', price: '£120', tag: 'BESTSELLER', emoji: '📦', rating: 4.8, reviews: 1120, cat: 'moves', desc: 'Two packers for a morning, boxes included.', features: ['Fragile items wrapped'], review: { who: 'Tom H.', text: 'Saved me a week.' } },
      { name: 'Storage Month', price: '£60', emoji: '🏠', rating: 4.7, reviews: 640, cat: 'storage', desc: 'Store things safely while you settle.', features: ['Collected and delivered'], review: { who: 'Nia R.', text: 'Peace of mind.' } },
      { name: 'Moving Box Pack', price: '£25', tag: 'SPECIAL', emoji: '🧷', rating: 4.7, reviews: 520, cat: 'storage', special: true, desc: 'Twenty boxes, tape and labels.', features: ['Delivered'], review: { who: 'Richard H.', text: 'Good strong boxes.' } }
    ],
    shopCats: [ { key: 'moves', label: 'Moves', icon: '🚚' }, { key: 'storage', label: 'Storage & boxes', icon: '🏠' } ],
    feed: [ { type: 'post', sub: 'Brand post · 3h', text: 'Boxes by the window and the light coming in. A <b>Small Move</b> for a fresh start.', img: U('1663625318264-695d2d04f11a', 800, 440), eng: '♡ 3.6K · 💬 220', product: 0 } ],
    events: [ { zoneEvent: true, tag: 'EVENT', title: 'Free moving checklist evening', when: 'Dec 8 · 18:30', desc: 'Plan a calm move, live online.', registered: 620, capacity: 1600 } ],
    about: { founded: 'Bristol · 2015', story: 'A family firm that noticed many of its moves came at hard times, and trained its team to be gentle.', milestones: [['2015', 'The first van'], ['2021', 'Storage'], ['2026', 'Brand Zone on DivorceXX']], values: ['Careful and kind', 'Fixed prices', 'No rush'] } }),

  'hopscotch-books': brand({ key: 'hopscotch-books', name: 'Hopscotch Books', color: '#6D28D9', gradient: LILAC, tier: 'Brand Zone',
    tagline: 'Gentle books for children whose parents live apart', stats: { followers: '72.8K', content: '200', products: '22' },
    ad: { badge: 'Christmas', img: U('1514925312285-7a2c94c2c095', 760, 760), hl: 'Stories that help.', sub: 'Gentle books for children with two homes.', meta: 'From £7' },
    products: [
      { name: 'Two Doors', price: '£8', tag: 'FLAGSHIP', emoji: '🚪', rating: 4.9, reviews: 1860, cat: 'picture', special: true, desc: 'A little girl with two homes and one big heart.', features: ['Ages 3 to 7'], review: { who: 'Sian P.', text: 'We read it every night for a month.' } },
      { name: 'Still My Family', price: '£7', tag: 'BESTSELLER', emoji: '💛', rating: 4.8, reviews: 1240, cat: 'picture', desc: 'Families change, and love stays.', features: ['Ages 4 to 8'], review: { who: 'Tom H.', text: 'Helped my son ask questions.' } },
      { name: 'My Feelings Journal', price: '£9', emoji: '📓', rating: 4.8, reviews: 640, cat: 'older', desc: 'A journal for children aged eight to twelve.', features: ['Prompts and stickers'], review: { who: 'Sarah L.', text: 'I recommend it often.' } },
      { name: 'Parent’s Guide', price: '£12', tag: 'SPECIAL', emoji: '📘', rating: 4.9, reviews: 420, cat: 'older', special: true, desc: 'How to talk with children about separation, age by age.', features: ['Written with child specialists'], review: { who: 'Richard H.', text: 'Wise and practical.' } }
    ],
    shopCats: [ { key: 'picture', label: 'Picture books', icon: '🚪' }, { key: 'older', label: 'Older children & parents', icon: '📓' } ],
    feed: [ { type: 'post', sub: 'Brand post · 5h', text: 'Footprints in the sand and a story for bedtime. <b>Still My Family</b>, for ages four to eight.', img: U('1601193708180-afe6737e5636', 800, 440), eng: '♡ 3.8K · 💬 210', product: 1 } ],
    events: [ { zoneEvent: true, tag: 'EVENT', title: 'Story time live: Two Doors', when: 'Dec 6 · 10:00', desc: 'The author reads, and answers children’s questions.', registered: 840, capacity: 2000 } ],
    about: { founded: 'York · 2017', story: 'A children’s author and a family therapist writing the books they wished existed.', milestones: [['2017', 'Two Doors'], ['2022', 'Parent’s Guide'], ['2026', 'Brand Zone on DivorceXX']], values: ['Gentle honesty', 'No blame', 'Every family’s story'] } }),

  'calmsplit-money': { key: 'calmsplit-money', kind: 'business', gw: 'divorce', name: 'Calmsplit Money', color: '#B45309', gradient: SAND, img: U('1542338332-76971ae8c292', 900, 500),
    tier: 'Verified', category: 'Budgeting help after separation', tagline: 'Clear budgets for life after separating.',
    about: { founded: 'Manchester · 2016', story: 'Money coaches who help people build a budget for one income and two homes. Coaching only: we refer you to Citizens Advice or a regulated adviser for anything else.' },
    stats: { years: 10, staff: 18, clients: '5,200 people helped' },
    caps: [ { name: 'Budget sessions', detail: 'One-to-one, online.' }, { name: 'Workshops', detail: 'For community groups and employers.' }, { name: 'Signposting', detail: 'To the right free help.' } ],
    specs: { moq: 'One session', lead: '2 to 5 days', regions: 'UK, online', certs: ['Accredited coaches', 'Not financial advice', 'Low-cost and free sessions'] },
    supplies: [ { kind: 'brand', key: 'middleway-mediation', what: 'Budget sessions for mediation clients' } ],
    cases: [ { title: 'A workplace that helps', text: 'A Manchester employer offers our sessions to staff going through separation.' } ],
    feed: [ { sub: 'Team · 3d', text: 'Free January budget workshops now open.' } ],
    contact: { person: 'Femi Adeyemi, Sessions', response: 'Replies within one working day' } },

  'new-chapter-counselling': { key: 'new-chapter-counselling', kind: 'business', gw: 'divorce', name: 'New Chapter Counselling', color: '#0369A1', gradient: SKY, img: U('1773625706534-4cfa0e74f229', 900, 500),
    tier: 'Verified', category: 'Counselling during separation', tagline: 'Someone to talk to, while things change.',
    about: { founded: 'York · 2012', story: 'Registered counsellors who support adults and young people through separation and change, face to face and online. If you are in crisis, call Samaritans on 116 123 or 999 in an emergency.' },
    stats: { years: 14, staff: 30, clients: '7,000 people supported' },
    caps: [ { name: 'Individual counselling', detail: 'Weekly sessions.' }, { name: 'Young people', detail: 'For ages eleven to eighteen.' }, { name: 'Groups', detail: 'Six-week separation support groups.' } ],
    specs: { moq: 'One session', lead: '1 to 2 weeks', regions: 'Yorkshire and online', certs: ['Registered counsellors', 'Confidential', 'Sliding-scale fees'] },
    supplies: [ { kind: 'brand', key: 'hopscotch-books', what: 'Books for our young people’s groups' } ],
    cases: [ { title: 'A group that became friends', text: 'Our spring support group still meets for coffee every month.' } ],
    feed: [ { sub: 'Team · 5d', text: 'New evening group starts in January.' } ],
    contact: { person: 'Helen Price, Intake', response: 'Replies within two working days' } }
});

/* events in the Events tab */
gxEvents('divorce', [
  { gw: 'divorce', zone: 'middleway-mediation', type: 'Live', icon: '🔴', live: true, time: 'Live Now', title: 'Middleway Live · telling the children, together', desc: 'A mediator and a child psychologist answer your questions.' },
  { gw: 'divorce', type: 'Event', icon: '🎄', time: 'Dec 1', title: 'Live: planning a two-home Christmas', desc: 'Parenting Apart shares what works.' },
  { gw: 'divorce', zone: 'twohomes', type: 'Sale', icon: '📦', time: 'Dec 3', title: 'Two-home Christmas: starter boxes 20% off', desc: 'Starter Boxes, 20% off.' },
  { gw: 'divorce', type: 'Event', icon: '☕', time: 'Dec 5', title: 'Bristol Parents Apart: the school holidays', desc: 'Coffee and company, no judgement.' },
  { gw: 'divorce', zone: 'hopscotch-books', type: 'Event', icon: '🚪', time: 'Dec 6', title: 'Story time live: Two Doors', desc: 'The author reads and answers children’s questions.' },
  { gw: 'divorce', zone: 'freshstart-removals', type: 'Event', icon: '🚚', time: 'Dec 8', title: 'Free moving checklist evening', desc: 'Plan a calm move, live online.' },
  { gw: 'divorce', type: 'Event', icon: '🙋', time: 'Dec 9', title: 'Ask a mediator anything', desc: 'General questions only. Not legal advice.' },
  { gw: 'divorce', type: 'Event', icon: '💷', time: 'Dec 10', title: 'Budget starter session with Nia Robinson', desc: 'Your money, mapped out, kindly.' }
]);
})();
/* ═════════ /DIVORCEXX ═════════ */
