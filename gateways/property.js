/* ═════════ PROPERTYXX — a Real Estate demo gateway (2026-11-27, Sean; build -98) ═════════
   Built with the _tools/README.md recipe. Palette (light): warm brick, front-door teal, Sunday-morning cream.
   Home sector: Real Estate (key 'realestate'; listed only there). Every agent, firm, pro and product is fictional; places are real.
   Care: no mortgage, legal or investment advice: money and legal questions go to a qualified adviser, solicitor or surveyor.
   Prices and figures in apps are illustrative. */
(function(){
const U = (id, w, h) => `https://images.unsplash.com/photo-${id}?w=${w}&h=${h}&fit=crop&q=75`;
const TEAL = 'linear-gradient(135deg,#2DD4BF,#0F766E)', BRICK = 'linear-gradient(135deg,#FCA5A5,#B91C1C)', SAND = 'linear-gradient(135deg,#FDE68A,#B45309)', SLATE = 'linear-gradient(135deg,#94A3B8,#334155)';

GATEWAYS.property = {
  name: 'PropertyXX', domain: 'propertyxx.com', emoji: '🏡', sector: 'realestate', live: true,
  tagline: 'The Property Universe',
  theme: {
    bg: '#FAF7F2', text: '#1C2422', cardBg: '#FFFFFF', cardBorder: 'rgba(28,36,34,.08)',
    headerBg: 'linear-gradient(180deg,#FFFFFF,#FAF7F2)', accent: '#0D9488', accentAlt: '#B91C1C', dark: false
  },
  gradient: 'linear-gradient(135deg,#2DD4BF,#0D9488,#B91C1C)',
  stats: { members: '4.1M', brands: '1.6K+', agents: '42' },
  spaces: ['All Feed', 'Buying', 'Renting', 'Moving', 'Homes', 'Careers'],
  trending: ['#FirstHome', '#ViewingDay', '#KeysInHand'],
  brandZones: [
    { key: 'keystone-homes', name: 'Keystone Homes', color: '#0D9488', tier: 'Founding Partner', tag: 'The estate agent that shows you everything' },
    { key: 'movewell', name: 'Movewell', color: '#B91C1C', tier: 'Brand Zone', tag: 'Removals and boxes, without the stress' },
    { key: 'brightlet', name: 'Brightlet', color: '#B45309', tier: 'Brand Zone', tag: 'Lettings with fair fees and fast repairs' },
    { key: 'truesurvey', name: 'Truesurvey', color: '#334155', tier: 'Brand Zone', tag: 'House surveys in plain English' }
  ],
  apps: [
    { name: 'Viewing Notes', color: '#0D9488', desc: 'Score every home you view, side by side', key: 'viewing-notes', url: 'apps/viewing-notes.html',
      dev: 'Keystone Homes', rating: '4.9', users: '1.8M', perms: ['profile', 'feed'],
      tagline: 'Remember every viewing.',
      about: 'Viewing Notes keeps a checklist for each home you view: light, damp, noise, storage, the commute, and how it felt. Score them and compare side by side, so the decision is yours and not the last one you saw.',
      features: ['A checklist for every viewing', 'Scores side by side', 'Questions to ask the agent', 'Share your favourite'],
      shots: ['apps/viewing-notes/shot-1.jpg', 'apps/viewing-notes/shot-2.jpg', 'apps/viewing-notes/shot-3.jpg'],
      version: '4.2', size: '9 KB',
      updates: [ { v: '4.2', ago: 2, notes: 'Questions to ask.' }, { v: '3.6', ago: 64, notes: 'Side-by-side scores.' }, { v: '2.8', ago: 210, notes: 'Signed in with GENEXXO.' } ],
      reviews: [ { who: '@first_home_freya', stars: 5, ago: 1, text: 'Saw nine flats in a weekend. This kept me sane.' }, { who: '@leila_haddad_law', stars: 5, ago: 15, text: 'I recommend it to every first-time buyer.' }, { who: '@renting_in_leeds', stars: 4, ago: 39, text: 'Works for rentals too.' } ] },
    { name: 'Moving Day', color: '#B91C1C', desc: 'A countdown checklist from offer to keys', key: 'moving-day', url: 'apps/moving-day.html',
      dev: 'Movewell', rating: '4.8', users: '1.2M', perms: ['profile', 'feed'],
      tagline: 'Nothing forgotten.',
      about: 'Moving Day counts down to your move and tells you what to do each week: book the van, tell the council, read the meters, pack a first-night box. Tick things off as you go.',
      features: ['A countdown to moving day', 'Tasks week by week', 'A first-night box list', 'Share your progress'],
      shots: ['apps/moving-day/shot-1.jpg', 'apps/moving-day/shot-2.jpg', 'apps/moving-day/shot-3.jpg'],
      version: '3.0', size: '9 KB',
      updates: [ { v: '3.0', ago: 3, notes: 'First-night box.' }, { v: '2.4', ago: 72, notes: 'Week-by-week tasks.' }, { v: '1.8', ago: 220, notes: 'Signed in with GENEXXO.' } ],
      reviews: [ { who: '@first_home_freya', stars: 5, ago: 2, text: 'Remembered the meter readings for me.' }, { who: '@amy_fielding_lettings', stars: 5, ago: 20, text: 'I give it to every tenant.' }, { who: '@nikos_petrou_surveys', stars: 4, ago: 42, text: 'Very handy.' } ] },
    { name: 'Deposit Saver', color: '#B45309', desc: 'Set a goal, track every pound towards your deposit', key: 'deposit-saver', url: 'apps/deposit-saver.html',
      dev: 'Brightlet', rating: '4.8', users: '960K', perms: ['profile', 'feed'],
      tagline: 'One step closer every month.',
      about: 'Deposit Saver tracks your savings towards a deposit, shows how long to go at your pace and celebrates each milestone. It’s a savings tracker, not financial advice: talk to a qualified adviser about mortgages.',
      features: ['Goal and progress', 'Months to go', 'Milestones', 'Share a milestone'],
      shots: ['apps/deposit-saver/shot-1.jpg', 'apps/deposit-saver/shot-2.jpg', 'apps/deposit-saver/shot-3.jpg'],
      version: '2.2', size: '9 KB',
      updates: [ { v: '2.2', ago: 1, notes: 'Milestones.' }, { v: '1.8', ago: 66, notes: 'Months to go.' }, { v: '1.2', ago: 190, notes: 'Signed in with GENEXXO.' } ],
      reviews: [ { who: '@renting_in_leeds', stars: 5, ago: 3, text: 'Seeing the bar fill keeps me going.' }, { who: '@first_home_freya', stars: 5, ago: 21, text: 'Got there in 26 months!' }, { who: '@amy_fielding_lettings', stars: 4, ago: 47, text: 'Simple and motivating.' } ] }
  ],
  pros: [
    { key: 'leila-haddad-law', name: 'Leila Haddad Conveyancing', color: '#0D9488', tag: 'Home buying and selling, explained step by step', role: 'Conveyancing solicitor',
      img: U('1637589267610-6c66fc2a086b', 800, 800), base: 'Sheffield, UK · and online', langs: 'English, Arabic', years: 16, rating: '4.9', reviewsN: 318, cur: '£',
      creds: ['Qualified solicitor', 'Fifteen years in residential conveyancing', 'Fixed fees, agreed up front'],
      about: 'Leila handles the legal side of buying and selling homes, and explains every step in plain English so nothing comes as a surprise.',
      services: [ { id: 'call', name: 'First-time buyer call', dur: '30 minutes', price: 40, desc: 'What happens from offer to keys.' },
                  { id: 'buy', name: 'Purchase conveyancing', dur: '8 to 12 weeks', price: 950, desc: 'Fixed fee, plus searches and disbursements.' },
                  { id: 'sell', name: 'Sale conveyancing', dur: '8 to 12 weeks', price: 850, desc: 'Fixed fee for selling your home.' } ],
      avail: { days: [1, 2, 3, 4, 5], times: ['09:30', '13:00', '16:30'] },
      reviews: [ { who: '@first_home_freya', stars: 5, ago: 2, text: 'She answered every silly question kindly.' }, { who: '@renting_in_leeds', stars: 5, ago: 25, text: 'Clear about every cost.' }, { who: '@nikos_petrou_surveys', stars: 5, ago: 50, text: 'Thorough and calm.' } ],
      posts: [ { ago: 1, text: 'Exchange is when the deal becomes binding; completion is when you get the keys. Don’t book the removal van until you’ve exchanged.' } ],
      tier: 'Pro Zone', verified: true },
    { key: 'nikos-petrou-surveys', name: 'Nikos Petrou Chartered Surveys', color: '#334155', tag: 'Home surveys for older houses', role: 'Chartered surveyor',
      img: U('1468218457742-ee484fe2fe4c', 800, 800), base: 'York, UK', langs: 'English, Greek', years: 32, rating: '5.0', reviewsN: 274, cur: '£',
      creds: ['Chartered building surveyor', 'Thirty years surveying homes', 'Specialist in Victorian and stone houses'],
      about: 'Nikos surveys homes before people buy them, especially old ones, and writes reports that tell you what matters and what doesn’t.',
      services: [ { id: 'survey', name: 'Full building survey', dur: 'Report in 5 days', price: 780, desc: 'For older or altered homes.' },
                  { id: 'level2', name: 'Home condition survey', dur: 'Report in 3 days', price: 480, desc: 'For newer, standard homes.' },
                  { id: 'call', name: 'Talk me through it call', dur: '30 minutes', price: 45, desc: 'Your survey report, explained.' } ],
      avail: { days: [1, 2, 4, 5], times: ['09:00', '14:00'] },
      reviews: [ { who: '@first_home_freya', stars: 5, ago: 3, text: 'Found a roof problem and saved us thousands.' }, { who: '@leila_haddad_law', stars: 5, ago: 29, text: 'The best reports I read.' }, { who: '@renting_in_leeds', stars: 5, ago: 55, text: 'Honest and patient.' } ],
      posts: [ { ago: 2, text: 'Old stone cottages need to breathe. Modern cement and plastic paint trap damp in solid walls. Lime is your friend.' } ],
      tier: 'Pro Zone', verified: true },
    { key: 'amy-fielding-lettings', name: 'Amy Fielding Renting Advice', color: '#B45309', tag: 'Help for renters and small landlords', role: 'Lettings adviser',
      img: U('1544717305-2782549b5136', 800, 800), base: 'Leeds, UK · and online', langs: 'English', years: 11, rating: '4.9', reviewsN: 206, cur: '£',
      creds: ['Ten years in lettings', 'Trained in tenancy law basics', 'Volunteers at a renters’ advice service'],
      about: 'Amy helps renters understand their tenancy and small landlords do things properly: deposits protected, repairs done, everyone treated fairly.',
      services: [ { id: 'tenant', name: 'Renter’s check call', dur: '30 minutes', price: 30, desc: 'Your tenancy agreement, read together.' },
                  { id: 'landlord', name: 'New landlord session', dur: '90 minutes', price: 120, desc: 'What you must do before letting.' },
                  { id: 'deposit', name: 'Deposit dispute help', dur: '1 week', price: 90, desc: 'Getting your evidence together.' } ],
      avail: { days: [1, 3, 4, 6], times: ['10:00', '18:00'] },
      reviews: [ { who: '@renting_in_leeds', stars: 5, ago: 2, text: 'Got my deposit back in full.' }, { who: '@first_home_freya', stars: 5, ago: 24, text: 'Calm and fair to everyone.' }, { who: '@leila_haddad_law', stars: 5, ago: 48, text: 'Knows her stuff.' } ],
      posts: [ { ago: 3, text: 'Moving in? Photograph every room, every mark, with the date. It takes ten minutes and protects your deposit.' } ],
      tier: 'Pro Zone', verified: true }
  ],
  communities: [
    { key: 'first-home-club', name: 'First Home Club', domain: 'firsthome.propertyxx.com', color: '#0D9488', img: U('1643804926339-e94f0a655185', 900, 500),
      scope: 'Global', where: 'Everyone working towards their first home', members: 586000, online: 5240, tagline: 'From saving to keys, together.',
      about: 'First-time buyers sharing saving tips, viewing stories, questions about the process and the joy of getting the keys. For money and legal questions, we point you to a qualified adviser.',
      rules: ['No financial advice: share experiences, not tips to buy', 'Kindness, always', 'No selling to members'],
      mods: ['@first_home_freya', '@renting_in_leeds'],
      threads: [ { t: 'Got the keys today! Show us your door', by: '@first_home_freya', tag: 'KEYS', replies: 3240, ago: 0, votes: 6120 }, { t: 'What I wish I’d asked at viewings', by: '@renting_in_leeds', tag: 'VIEWINGS', replies: 1860, ago: 1, votes: 3420 }, { t: 'How long did your deposit take to save?', by: '@first_home_freya', tag: 'SAVING', replies: 2480, ago: 2, votes: 4260 }, { t: 'Exchange vs completion: explained', by: '@renting_in_leeds', tag: 'PROCESS', replies: 920, ago: 3, votes: 2140 } ],
      events: [ { title: 'Ask a conveyancer: live Q&A', day: 6, time: '19:00', where: 'Online' }, { title: 'Viewing checklist workshop', day: 14, time: '18:30', where: 'Online' } ] },
    { key: 'leeds-renters', name: 'Leeds Renters', domain: 'leeds.propertyxx.com', color: '#B91C1C', img: U('1600210491892-03d54c0aaf87', 900, 500),
      scope: 'Local', where: 'Leeds', members: 3260, online: 64, tagline: 'Good homes, fair rents, friendly neighbours.',
      about: 'Renters across Leeds sharing which areas suit whom, how to get repairs done and where to find help. Landlords who want to do it right are welcome too.',
      rules: ['No naming and shaming individuals', 'Point people to proper advice', 'Be neighbourly'],
      mods: ['@renting_in_leeds', '@amy_fielding_lettings'],
      threads: [ { t: 'Damp in winter: what worked for you?', by: '@renting_in_leeds', tag: 'REPAIRS', replies: 86, ago: 0, votes: 164 }, { t: 'Headingley or Chapel Allerton?', by: '@renting_in_leeds', tag: 'AREAS', replies: 64, ago: 1, votes: 118 }, { t: 'December drop-in: tenancy questions', by: '@amy_fielding_lettings', tag: 'MEETUP', replies: 30, ago: 2, votes: 72 } ],
      events: [ { title: 'Renters’ drop-in: tenancy questions', day: 8, time: '18:00', where: 'Leeds' }, { title: 'Winter damp and heating clinic', day: 20, time: '18:30', where: 'Leeds' } ] }
  ],
  feed: [
    { av: 'PX', avBg: TEAL, author: 'PropertyXX Editorial', sub: 'Featured · Just now', badge: '★ FEATURED',
      text: 'Buying, renting, moving and making a home. The people who help, the questions to ask and the moment you get the keys. Home, all in one place.',
      img: U('1782024743342-32025f4c0000', 800, 600), eng: '♡ 38.6K · 💬 3.2K · ↗ 5.2K' },
    { av: 'FF', avBg: TEAL, author: '@first_home_freya', sub: 'Buying · Just now', badge: 'COMMUNITY',
      text: 'Twenty-six months of saving, nine viewings, one very patient solicitor. Today I opened my own front door for the first time 🔑',
      img: U('1741156386380-0236c72eb6f9', 800, 600), eng: '♡ 24.8K · 💬 3.6K · ↗ 2.2K' },
    { av: 'KH', avBg: TEAL, author: 'Keystone Homes', sub: 'Founding Partner · Brand Zone', badge: 'BRAND ZONE',
      text: 'Live now: an open house in Sheffield, room by room, loft to cellar. Ask anything and our agent checks it on camera. Follow <b>Keystone Homes</b>.',
      img: U('1773536291669-37163d1279e3', 800, 600), eng: '♡ 19.6K · 💬 2.8K · ↗ 2.9K' },
    { av: 'MW', avBg: BRICK, author: 'Movewell', sub: 'Brand Zone · 1h ago', badge: 'BRAND ZONE',
      text: 'The last key turned, the last box in. Our <b>Full Move</b> crews pack, carry and unpack, so you can just open the door.',
      img: U('1609770231080-e321deccc34c', 800, 600), eng: '♡ 8.6K · 💬 640 · ↗ 980' },
    { av: 'BL', avBg: SAND, author: 'Brightlet', sub: 'Brand Zone · 2h ago', badge: 'BRAND ZONE',
      text: 'Bright, warm and ready this week. Every <b>Brightlet</b> flat is checked for damp and draughts before anyone moves in.',
      img: U('1586023492125-27b2c045efd7', 800, 600), eng: '♡ 6.2K · 💬 480 · ↗ 560' },
    { av: 'LH', avBg: TEAL, author: 'Leila Haddad Conveyancing', sub: 'Buying · 4h ago', badge: 'PRO ZONE',
      text: 'Exchange day for a young family this morning. Handshakes, a few happy tears, and completion booked for Friday.',
      img: U('1781229771042-2a859f8f8022', 800, 600), eng: '♡ 5.4K · 💬 360 · ↗ 420' },
    { av: 'NP', avBg: SLATE, author: 'Nikos Petrou Chartered Surveys', sub: 'Homes · 6h ago', badge: 'PRO ZONE',
      text: 'Surveyed this stone cottage today. Two hundred years old, sound as a bell, and the ivy can stay if it’s kept off the roof.',
      img: U('1722062767419-ff110d4e7db7', 800, 600), eng: '♡ 4.2K · 💬 280 · ↗ 340' }
  ],
  prompts: ['What happens between offer and keys?', 'What should I look for at a viewing?', 'What does a house survey check?', 'How do I get my rental deposit back?'],
  businesses: ['oakfield-conveyancing', 'stonebridge-renovation']
};

/* the four Brand Zones and two Business Zones */
const brand = (o) => Object.assign({ kind: 'brand', gw: 'property', verified: true }, o);
Object.assign(ZONES, {
  'keystone-homes': brand({ key: 'keystone-homes', name: 'Keystone Homes', color: '#0D9488', gradient: TEAL, tier: 'Founding Partner',
    tagline: 'The estate agent that shows you everything', stats: { followers: '428K', content: '960', products: '6' },
    ad: { badge: 'Featured', img: U('1759428679273-11d914866394', 760, 760), hl: 'See it all before you visit.', sub: 'Live video viewings, honest descriptions, fixed fees.', meta: 'Selling from £1,195' },
    products: [
      { name: 'Keystone Sell', price: '£1,195 fixed fee', tag: 'FLAGSHIP', emoji: '🏡', rating: 4.8, reviews: 3640, cat: 'selling', special: true, desc: 'Photos, floor plan, a live video tour and viewings handled for you.', features: ['No sale, no fee option', 'Honest descriptions'], review: { who: 'Freya L.', text: 'Sold in three weeks with no surprises.' } },
      { name: 'Live Video Viewing', price: '£25', tag: 'BESTSELLER', emoji: '📹', rating: 4.9, reviews: 2280, cat: 'buying', desc: 'An agent walks you round live, opening every cupboard you ask.', features: ['Recorded for you'], review: { who: 'Sam R.', text: 'Saved me a four-hour drive.' } },
      { name: 'Valuation Visit', price: '£45', emoji: '📏', rating: 4.7, reviews: 1460, cat: 'selling', desc: 'A local agent values your home, with recent nearby sales.', features: ['Refunded if you sell with us'], review: { who: 'Nikos P.', text: 'Realistic, not flattering.' } },
      { name: 'Buyer’s Pack', price: '£15', tag: 'SPECIAL', emoji: '📦', rating: 4.8, reviews: 860, cat: 'buying', special: true, desc: 'Questions to ask, what to check and who to call.', features: ['Printable'], review: { who: 'Leila H.', text: 'I wish every buyer had this.' } }
    ],
    shopCats: [ { key: 'selling', label: 'Selling', icon: '🏡' }, { key: 'buying', label: 'Buying', icon: '📹' } ],
    feed: [
      { type: 'post', sub: 'Brand post · 2h', text: 'Painted doors, pretty street, honest photos. Every listing with <b>Keystone Sell</b> shows the home as it is.', img: U('1783024109972-2255bb4f6fa5', 800, 440), eng: '♡ 19.6K · 💬 2.8K · ↗ 2.9K', product: 0 },
      { type: 'community', who: 'Freya L.', whoBg: TEAL, sub: 'Community · 1d', text: 'How do I know if a house has damp from a viewing?', eng: '♡ 1.2K · 💬 340', reply: 'Hi Freya! Look for tide marks, peeling paint and black mould in corners, and notice any musty smell. Ask us anything on a viewing and we’ll show you. For a proper answer, a surveyor’s report is the way to be sure. 🏡' }
    ],
    events: [ { zoneEvent: true, tag: 'LIVE', title: 'Keystone Live · open house in Sheffield', when: 'Live now', desc: 'A family home, room by room, with your questions answered on camera.', registered: 11240, capacity: 28000 } ],
    about: { founded: 'Sheffield · 2012', story: 'Agents who were tired of wide-angle photos and vague descriptions. We joined PropertyXX as Founding Partner because buying a home should start with the truth.', milestones: [['2012', 'Founded'], ['2020', 'Live video viewings'], ['2026', 'Founding Partner on PropertyXX']], values: ['Show everything', 'Fixed fees', 'Answer every question'] } }),

  'movewell': brand({ key: 'movewell', name: 'Movewell', color: '#B91C1C', gradient: BRICK, tier: 'Brand Zone',
    tagline: 'Removals and boxes, without the stress', stats: { followers: '164K', content: '420', products: '30' },
    ad: { badge: 'New', img: U('1763621605783-307c1743e308', 760, 760), hl: 'Your keys. Our van.', sub: 'Careful crews, fixed quotes, no surprises.', meta: 'From £295' },
    products: [
      { name: 'Full Move', price: 'From £595', tag: 'FLAGSHIP', emoji: '🚚', rating: 4.8, reviews: 3120, cat: 'moves', special: true, desc: 'We pack, carry, drive and unpack.', features: ['Fixed quote', 'Fully insured'], review: { who: 'Freya L.', text: 'Kettle on before they left.' } },
      { name: 'Man and Van', price: 'From £295', tag: 'BESTSELLER', emoji: '🚐', rating: 4.7, reviews: 2460, cat: 'moves', desc: 'Two movers and a van for flats and small homes.', features: ['Half or full day'], review: { who: 'Sam R.', text: 'Quick and careful.' } },
      { name: 'Box Bundle', price: '£35', emoji: '📦', rating: 4.7, reviews: 1860, cat: 'boxes', desc: 'Twenty-five strong boxes, tape and paper.', features: ['Free collection after'], review: { who: 'Amy F.', text: 'They even took the boxes back.' } },
      { name: 'First-Night Box', price: '£18', tag: 'SPECIAL', emoji: '☕', rating: 4.9, reviews: 960, cat: 'boxes', special: true, desc: 'Kettle, mugs, tea, loo roll, bulbs and a torch.', features: ['Ready-packed'], review: { who: 'Leila H.', text: 'Genius moving gift.' } }
    ],
    shopCats: [ { key: 'moves', label: 'Moves', icon: '🚚' }, { key: 'boxes', label: 'Boxes', icon: '📦' } ],
    feed: [ { type: 'post', sub: 'Brand post · 1d', text: 'The best bit of every move: keys in hand. Then the kettle, from the <b>First-Night Box</b>.', img: U('1722487631997-cf1e0f92c2c4', 800, 440), eng: '♡ 8.6K · 💬 640', product: 3 } ],
    events: [ { zoneEvent: true, tag: 'SALE', title: 'Christmas sale: free boxes with every move', when: 'Dec 4 · All day', desc: 'A free Box Bundle with any move booked today.', registered: 1860, capacity: 5000 } ],
    about: { founded: 'Bristol · 2008', story: 'One van, two brothers and a promise to treat every home like their mum’s.', milestones: [['2008', 'The first van'], ['2018', 'Twelve crews'], ['2026', 'Brand Zone on PropertyXX']], values: ['Fixed quotes', 'Careful hands', 'Living wage crews'] } }),

  'brightlet': brand({ key: 'brightlet', name: 'Brightlet', color: '#B45309', gradient: SAND, tier: 'Brand Zone',
    tagline: 'Lettings with fair fees and fast repairs', stats: { followers: '112K', content: '320', products: '8' },
    ad: { badge: 'Featured', img: U('1618221195710-dd6b41faaea6', 760, 760), hl: 'Renting, done right.', sub: 'Warm, checked homes and repairs within a week.', meta: 'Landlords from 8%' },
    products: [
      { name: 'Brightlet Full Management', price: '12% of rent', tag: 'FLAGSHIP', emoji: '🔑', rating: 4.8, reviews: 1640, cat: 'landlords', special: true, desc: 'We find tenants, protect the deposit and handle repairs.', features: ['Repairs within a week', 'Deposit protected'], review: { who: 'Amy F.', text: 'Tenants and landlords both happy.' } },
      { name: 'Tenant Find', price: '8% of rent', tag: 'BESTSELLER', emoji: '🤝', rating: 4.7, reviews: 1120, cat: 'landlords', desc: 'We find and reference good tenants.', features: ['Fair checks'], review: { who: 'Nikos P.', text: 'Quick and fair.' } },
      { name: 'Repair Request', price: '£1 to report', emoji: '🛠️', rating: 4.8, reviews: 2460, cat: 'renters', desc: 'Report a repair with photos, track it to done.', features: ['Updates by text'], review: { who: 'Freya L.', text: 'Boiler fixed in two days.' } },
      { name: 'Move-In Check', price: '£60', tag: 'SPECIAL', emoji: '📸', rating: 4.9, reviews: 640, cat: 'renters', special: true, desc: 'A dated photo report of the home on day one.', features: ['Shared with both sides'], review: { who: 'Leila H.', text: 'Prevents so many arguments.' } }
    ],
    shopCats: [ { key: 'landlords', label: 'For landlords', icon: '🔑' }, { key: 'renters', label: 'For renters', icon: '🛠️' } ],
    feed: [ { type: 'post', sub: 'Brand post · 3h', text: 'Fresh paint, a fire that works and plenty of light. Every room photographed on day one in our <b>Move-In Check</b>.', img: U('1774199496664-a9690967be5a', 800, 440), eng: '♡ 6.2K · 💬 480', product: 3 } ],
    events: [ { zoneEvent: true, tag: 'EVENT', title: 'Live: your renting questions answered', when: 'Dec 2 · 19:00', desc: 'Renters and landlords ask Brightlet anything.', registered: 1240, capacity: 3500 } ],
    about: { founded: 'Leeds · 2015', story: 'Former renters who wanted lettings to be fair to everyone.', milestones: [['2015', 'The first flat'], ['2022', 'Repairs within a week'], ['2026', 'Brand Zone on PropertyXX']], values: ['Fair fees', 'Fast repairs', 'Warm, dry homes'] } }),

  'truesurvey': brand({ key: 'truesurvey', name: 'Truesurvey', color: '#334155', gradient: SLATE, tier: 'Brand Zone',
    tagline: 'House surveys in plain English', stats: { followers: '74.6K', content: '240', products: '6' },
    ad: { badge: 'Featured', img: U('1464082354059-27db6ce50048', 760, 760), hl: 'Know what you’re buying.', sub: 'Chartered surveyors, plain-English reports.', meta: 'From £395' },
    products: [
      { name: 'Home Condition Survey', price: '£395', tag: 'FLAGSHIP', emoji: '📋', rating: 4.8, reviews: 2140, cat: 'surveys', special: true, desc: 'Traffic-light report for standard homes.', features: ['Report in 3 days', 'Follow-up call'], review: { who: 'Freya L.', text: 'Clear and fast.' } },
      { name: 'Full Building Survey', price: '£695', tag: 'BESTSELLER', emoji: '🏚️', rating: 4.9, reviews: 1260, cat: 'surveys', desc: 'Deep survey for older or altered homes.', features: ['Report in 5 days'], review: { who: 'Nikos P.', text: 'What I’d want for my own home.' } },
      { name: 'Damp Report', price: '£180', emoji: '💧', rating: 4.7, reviews: 640, cat: 'checks', desc: 'Independent damp check, with no treatment to sell.', features: ['Causes, not just symptoms'], review: { who: 'Amy F.', text: 'Honest and useful.' } },
      { name: 'Report Explained Call', price: '£35', tag: 'SPECIAL', emoji: '📞', rating: 4.9, reviews: 420, cat: 'checks', special: true, desc: 'Your surveyor talks you through the report.', features: ['30 minutes'], review: { who: 'Leila H.', text: 'Every buyer should have one.' } }
    ],
    shopCats: [ { key: 'surveys', label: 'Surveys', icon: '📋' }, { key: 'checks', label: 'Checks', icon: '💧' } ],
    feed: [ { type: 'post', sub: 'Brand post · 5h', text: 'A thousand roofs, every one different. That’s why each <b>Full Building Survey</b> starts at the top.', img: U('1532000215025-af6f2b8075f9', 800, 440), eng: '♡ 3.4K · 💬 220', product: 1 } ],
    events: [ { zoneEvent: true, tag: 'EVENT', title: 'How to read a survey report', when: 'Dec 10 · 19:00', desc: 'A chartered surveyor explains the traffic lights, live.', registered: 860, capacity: 2500 } ],
    about: { founded: 'York · 2009', story: 'Surveyors who wanted buyers to understand their reports.', milestones: [['2009', 'The first survey'], ['2021', 'Traffic-light reports'], ['2026', 'Brand Zone on PropertyXX']], values: ['Plain English', 'Independent', 'Chartered surveyors only'] } }),

  'oakfield-conveyancing': { key: 'oakfield-conveyancing', kind: 'business', gw: 'property', name: 'Oakfield Conveyancing', color: '#0D9488', gradient: TEAL, img: U('1758227365187-016878604d94', 900, 500),
    tier: 'Verified', category: 'Conveyancing solicitors', tagline: 'The legal side of moving home, in plain English.',
    about: { founded: 'Nottingham · 2004', story: 'A firm of solicitors who do one thing: help people buy and sell homes, with fixed fees and a named person who answers the phone.' },
    stats: { years: 22, staff: 64, clients: '30,000 moves completed' },
    caps: [ { name: 'Buying and selling', detail: 'Freehold and leasehold.' }, { name: 'Remortgages', detail: 'With your lender’s panel.' }, { name: 'Transfers', detail: 'Adding or removing a name.' } ],
    specs: { moq: 'One move', lead: '8 to 12 weeks', regions: 'England and Wales', certs: ['Regulated solicitors', 'Fixed fees', 'Online tracking'] },
    supplies: [ { kind: 'brand', key: 'keystone-homes', what: 'Conveyancing for Keystone buyers and sellers' } ],
    cases: [ { title: 'A chain of six, completed together', text: 'Six families moved on the same Friday.' } ],
    feed: [ { sub: 'Office · 3d', text: 'Forty completions before Christmas. Champagne on Friday.' } ],
    contact: { person: 'Harriet Cole, New moves', response: 'Replies within one working day' } },

  'stonebridge-renovation': { key: 'stonebridge-renovation', kind: 'business', gw: 'property', name: 'Stonebridge Renovation', color: '#B91C1C', gradient: BRICK, img: U('1787094497609-5efe6029b950', 900, 500),
    tier: 'Verified', category: 'Home renovation builders', tagline: 'Old homes, made warm and sound.',
    about: { founded: 'Derby · 2011', story: 'Builders who renovate older homes carefully: damp sorted at the cause, insulation done right, and the character kept.' },
    stats: { years: 15, staff: 48, clients: '1,400 homes renovated' },
    caps: [ { name: 'Renovation', detail: 'Kitchens, bathrooms and whole houses.' }, { name: 'Damp and repairs', detail: 'Roofs, gutters and lime render.' }, { name: 'Insulation', detail: 'Walls, lofts and floors.' } ],
    specs: { moq: 'One room', lead: '4 to 12 weeks', regions: 'East Midlands and Yorkshire', certs: ['Trade association members', 'Insurance-backed guarantee', 'Fully insured'] },
    supplies: [ { kind: 'brand', key: 'truesurvey', what: 'Survey findings turned into repair plans' } ],
    cases: [ { title: 'A damp cottage, dry at last', text: 'Lime render and new gutters fixed what three damp treatments didn’t.' } ],
    feed: [ { sub: 'Site · 5d', text: 'Handed back a farmhouse this week: warm, dry and still full of character.' } ],
    contact: { person: 'Joe Barker, Surveys and quotes', response: 'Replies within two working days' } }
});

/* events in the Events tab */
gxEvents('property', [
  { gw: 'property', zone: 'keystone-homes', type: 'Live', icon: '🔴', live: true, time: 'Live Now', title: 'Keystone Live · open house in Sheffield', desc: 'A family home, room by room, with your questions answered on camera.' },
  { gw: 'property', zone: 'movewell', type: 'Sale', icon: '📦', time: 'Dec 4', title: 'Movewell Christmas sale', desc: 'Free boxes with every move booked today.' },
  { gw: 'property', zone: 'brightlet', type: 'Event', icon: '🔑', time: 'Dec 2', title: 'Live: your renting questions answered', desc: 'Renters and landlords ask Brightlet anything.' },
  { gw: 'property', type: 'Event', icon: '⚖️', time: 'Dec 3', title: 'Ask a conveyancer: live Q&A', desc: 'First Home Club asks about offer to keys.' },
  { gw: 'property', type: 'Event', icon: '🏘️', time: 'Dec 5', title: 'Leeds Renters’ drop-in', desc: 'Tenancy questions answered in Leeds.' },
  { gw: 'property', zone: 'truesurvey', type: 'Event', icon: '📋', time: 'Dec 10', title: 'How to read a survey report', desc: 'A chartered surveyor explains, live.' },
  { gw: 'property', type: 'Event', icon: '✅', time: 'Dec 11', title: 'Viewing checklist workshop', desc: 'First Home Club on what to look for.' },
  { gw: 'property', type: 'Event', icon: '💧', time: 'Dec 17', title: 'Winter damp and heating clinic', desc: 'Leeds Renters with practical help.' }
]);
})();
/* ═════════ /PROPERTYXX ═════════ */
