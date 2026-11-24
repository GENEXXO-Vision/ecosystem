/* ═════════ TAXIXX — a Transit demo gateway (2026-11-24, Sean; build -95) ═════════
   Built with the _tools/README.md recipe. Palette (dark): night street, rooflight yellow, amber.
   Home sector: Transit. Every cab firm, school, maker, pro and product is fictional; streets and cities are real.
   Fares, tariffs and licensing notes are illustrative: the council's tariff and licence conditions are the record. */
(function(){
const U = (id, w, h) => `https://images.unsplash.com/photo-${id}?w=${w}&h=${h}&fit=crop&q=75`;
const ROOF = 'linear-gradient(135deg,#FACC15,#A16207)', NIGHT = 'linear-gradient(135deg,#27272A,#0E0E10)', AMBER = 'linear-gradient(135deg,#FB923C,#9A3412)', TEAL = 'linear-gradient(135deg,#2DD4BF,#115E59)';

GATEWAYS.taxi = {
  name: 'TaxiXX', domain: 'taxixx.com', emoji: '🚕', sector: 'transit', live: true,
  tagline: 'The Taxi Universe',
  theme: {
    bg: '#0E0E10', text: '#F4F4F5', cardBg: 'rgba(255,255,255,.045)', cardBorder: 'rgba(244,244,245,.09)',
    headerBg: 'linear-gradient(180deg,#1C1C20,#0E0E10)', accent: '#FACC15', accentAlt: '#FB923C', dark: true
  },
  gradient: 'linear-gradient(135deg,#0E0E10,#3F3F46,#FACC15)',
  stats: { members: '1.6M', brands: '900+', agents: '24' },
  spaces: ['All Feed', 'On the Rank', 'The Knowledge', 'Going Electric', 'Cab Life', 'Passengers'],
  trending: ['#TheKnowledge', '#NightShift', '#ElectricCab'],
  brandZones: [
    { key: 'kerbside-cabs', name: 'Kerbside Cabs', color: '#FACC15', tier: 'Founding Partner', tag: 'Book a licensed cab in twelve UK cities' },
    { key: 'bluebook-knowledge', name: 'Bluebook Knowledge School', color: '#FB923C', tier: 'Brand Zone', tag: 'Learn the Knowledge of London' },
    { key: 'ranklight', name: 'Ranklight', color: '#2DD4BF', tier: 'Brand Zone', tag: 'Meters, card readers and rooflights' },
    { key: 'steadyseat', name: 'Steadyseat Cab Comfort', color: '#A1A1AA', tier: 'Brand Zone', tag: 'Seats, mounts and kit for long shifts' }
  ],
  apps: [
    { name: 'Knowledge Runs', color: '#FB923C', desc: 'Learn the runs and points of London', key: 'knowledge-runs', url: 'apps/knowledge-runs.html',
      dev: 'Bluebook Knowledge School', rating: '4.9', users: '86K', perms: ['profile', 'feed'],
      tagline: 'Twenty-five thousand streets. One at a time.',
      about: 'Knowledge Runs quizzes you on the points of London: which street a theatre, hospital or station is on, and where you’d set down. Keep a streak, track the points you know and see how far you’ve come.',
      features: ['Daily points quiz', 'Your runs, ticked off', 'Streaks that keep you going', 'Share milestones'],
      shots: ['apps/knowledge-runs/shot-1.jpg', 'apps/knowledge-runs/shot-2.jpg', 'apps/knowledge-runs/shot-3.jpg'],
      version: '4.2', size: '10 KB',
      updates: [ { v: '4.2', ago: 2, notes: 'Streaks.' }, { v: '3.6', ago: 60, notes: 'More West End points.' }, { v: '2.9', ago: 190, notes: 'Signed in with GENEXXO.' } ],
      reviews: [ { who: '@knowledge_kev', stars: 5, ago: 1, text: 'Two years on a moped and this is what finally made the points stick.' }, { who: '@marcus_bello_knowledge', stars: 5, ago: 14, text: 'I give it to every new student.' }, { who: '@nightrank_nina', stars: 4, ago: 33, text: 'Still fun to test myself after 20 years.' } ] },
    { name: 'Fare Estimator', color: '#FACC15', desc: 'What will the meter say?', key: 'fare-estimator', url: 'apps/fare-estimator.html',
      dev: 'Kerbside Cabs', rating: '4.7', users: '1.2M', perms: ['profile', 'feed'],
      tagline: 'Know before you hail.',
      about: 'Fare Estimator gives you a fair idea of a metered fare: pick the distance, the time of day and the traffic, and see an estimate and a range. Illustrative tariffs; the meter is always the fare.',
      features: ['Day, night and holiday rates', 'Traffic makes a difference', 'Split the fare', 'Save regular trips'],
      shots: ['apps/fare-estimator/shot-1.jpg', 'apps/fare-estimator/shot-2.jpg', 'apps/fare-estimator/shot-3.jpg'],
      version: '3.1', size: '9 KB',
      updates: [ { v: '3.1', ago: 3, notes: 'Split the fare.' }, { v: '2.6', ago: 80, notes: 'Holiday rates.' }, { v: '1.8', ago: 220, notes: 'Signed in with GENEXXO.' } ],
      reviews: [ { who: '@late_train_lola', stars: 5, ago: 2, text: 'Stopped me panicking about the fare home after the last train.' }, { who: '@nightrank_nina', stars: 4, ago: 19, text: 'Close to the meter most nights.' }, { who: '@knowledge_kev', stars: 5, ago: 41, text: 'Simple and clear.' } ] },
    { name: 'Cab Shift', color: '#2DD4BF', desc: 'Your takings, costs and real hourly rate', key: 'cab-shift', url: 'apps/cab-shift.html',
      dev: 'Ranklight', rating: '4.8', users: '64K', perms: ['profile', 'feed'],
      tagline: 'What did tonight actually pay?',
      about: 'Cab Shift logs each fare, your charging or fuel and your hours, and shows what the shift really paid per hour after costs. See your week at a glance. Keep proper records for your accountant too.',
      features: ['Log a fare in one tap', 'Costs: charging, fuel, rent', 'Real hourly rate', 'Your week at a glance'],
      shots: ['apps/cab-shift/shot-1.jpg', 'apps/cab-shift/shot-2.jpg', 'apps/cab-shift/shot-3.jpg'],
      version: '2.4', size: '10 KB',
      updates: [ { v: '2.4', ago: 4, notes: 'Your week at a glance.' }, { v: '2.0', ago: 70, notes: 'Charging costs.' }, { v: '1.3', ago: 200, notes: 'Signed in with GENEXXO.' } ],
      reviews: [ { who: '@nightrank_nina', stars: 5, ago: 1, text: 'Turns out Sunday nights pay best. Who knew.' }, { who: '@mei_lin_cab_accounts', stars: 5, ago: 22, text: 'My clients’ records are so much tidier now.' }, { who: '@scouse_cabbie_steve', stars: 4, ago: 37, text: 'Does the job.' } ] }
  ],
  pros: [
    { key: 'marcus-bello-knowledge', name: 'Marcus Bello Knowledge Coaching', color: '#FB923C', tag: 'One-to-one coaching for the Knowledge of London', role: 'Knowledge coach and licensed cabbie',
      img: U('1522529599102-193c0d76b5b6', 800, 800), base: 'London, UK', langs: 'English, Portuguese', years: 14, rating: '4.9', reviewsN: 288, cur: '£',
      creds: ['All London licence since 2012', 'Coached 140 students to their badge', 'Mock appearances, run like the real thing'],
      about: 'Marcus did the Knowledge on a moped in three and a half years, and still drives a cab two days a week. He coaches students through the runs, the points and the appearances, calmly.',
      services: [ { id: 'call', name: 'Where am I? call', dur: '30 minutes', price: 30, desc: 'Your progress and a plan for the next stage.' },
                  { id: 'calling', name: 'Calling-over session', dur: '90 minutes', price: 45, desc: 'Call your runs; Marcus checks every turn.' },
                  { id: 'mock', name: 'Mock appearance', dur: '45 minutes', price: 60, desc: 'Run like the real thing, with feedback.' } ],
      avail: { days: [1, 2, 3, 6], times: ['10:00', '14:00', '18:30'] },
      reviews: [ { who: '@knowledge_kev', stars: 5, ago: 4, text: 'The mock appearances took the fear out of the real ones.' }, { who: '@nightrank_nina', stars: 5, ago: 21, text: 'Coached my son. He got his badge last month.' }, { who: '@late_train_lola', stars: 5, ago: 50, text: 'Patient and very funny.' } ],
      posts: [ { ago: 1, text: 'Calling over: say every turn out loud, every time. Left, right, forward, set down. The road you skip is the one they ask.' } ],
      tier: 'Pro Zone', verified: true },
    { key: 'mei-lin-cab-accounts', name: 'Mei Lin Cab Accounts', color: '#2DD4BF', tag: 'Accounts and tax returns for taxi and private-hire drivers', role: 'Accountant for drivers',
      img: U('1581065178047-8ee15951ede6', 800, 800), base: 'Manchester, UK · and online', langs: 'English, Cantonese', years: 12, rating: '4.9', reviewsN: 342, cur: '£',
      creds: ['Chartered accountant', '600 driver clients', 'Fixed fees, agreed up front'],
      about: 'Mei looks after the books of taxi and private-hire drivers: expenses, the vehicle, the tax return and the questions you didn’t know to ask. Plain English, fixed fees.',
      services: [ { id: 'return', name: 'Self assessment return', dur: 'Two weeks', price: 195, desc: 'Your tax return, done and filed.' },
                  { id: 'check', name: 'Expenses check-up', dur: '45 minutes', price: 55, desc: 'What you can and can’t claim.' },
                  { id: 'year', name: 'Year-round bookkeeping', dur: '12 months', price: 420, desc: 'Monthly records and the return.' } ],
      avail: { days: [1, 2, 3, 4, 5], times: ['09:30', '13:00', '17:00'] },
      reviews: [ { who: '@scouse_cabbie_steve', stars: 5, ago: 3, text: 'First January in ten years without a panic.' }, { who: '@nightrank_nina', stars: 5, ago: 26, text: 'Knows the trade inside out.' }, { who: '@knowledge_kev', stars: 5, ago: 44, text: 'Sorted my first year as a driver.' } ],
      posts: [ { ago: 2, text: 'Keep every charging and fuel receipt, even the small ones. Snap them the same night and you’ll thank yourself in January.' } ],
      tier: 'Pro Zone', verified: true },
    { key: 'karen-doyle-licensing', name: 'Karen Doyle Licensing Help', color: '#FACC15', tag: 'Help with taxi and private-hire licence applications', role: 'Licensing adviser',
      img: U('1758599543125-0a927f1d7a3b', 800, 800), base: 'Liverpool, UK · and online', langs: 'English', years: 16, rating: '4.8', reviewsN: 198, cur: '£',
      creds: ['Fifteen years in a council licensing team', 'Knows the forms and the tests', 'Advice, not legal representation'],
      about: 'Karen spent fifteen years processing licence applications for a council. Now she helps new drivers get theirs right first time: the forms, the checks, the knowledge and safeguarding tests.',
      services: [ { id: 'call', name: 'Getting started call', dur: '30 minutes', price: 35, desc: 'The steps for your council, in order.' },
                  { id: 'check', name: 'Application check', dur: '1 week', price: 90, desc: 'Your forms checked before you send them.' },
                  { id: 'prep', name: 'Test preparation', dur: '60 minutes', price: 50, desc: 'Local knowledge and safeguarding practice.' } ],
      avail: { days: [1, 2, 4, 5], times: ['10:00', '13:30', '16:00'] },
      reviews: [ { who: '@scouse_cabbie_steve', stars: 5, ago: 5, text: 'Licence through in record time.' }, { who: '@late_train_lola', stars: 5, ago: 29, text: 'My brother couldn’t have done it without her.' }, { who: '@nightrank_nina', stars: 4, ago: 52, text: 'Clear and kind.' } ],
      posts: [ { ago: 3, text: 'Every council does it slightly differently. Read your own council’s conditions first, then the forum.' } ],
      tier: 'Pro Zone', verified: true }
  ],
  communities: [
    { key: 'cabbies-corner', name: 'Cabbies’ Corner', domain: 'corner.taxixx.com', color: '#FACC15', img: U('1782414971609-7fe9c83c759d', 900, 500),
      scope: 'Global', where: 'Every rank in the country', members: 142000, online: 2160, tagline: 'Kettle’s on.',
      about: 'Taxi and private-hire drivers swapping news, tips and stories from the rank: the best shelters, the worst roadworks and the passengers you never forget.',
      rules: ['Drivers and passengers welcome', 'No passenger details, ever', 'Be kind to new drivers'],
      mods: ['@nightrank_nina', '@scouse_cabbie_steve'],
      threads: [ { t: 'Best all-night cafés near a rank', by: '@nightrank_nina', tag: 'TIPS', replies: 820, ago: 0, votes: 1640 }, { t: 'Going electric: a year in', by: '@scouse_cabbie_steve', tag: 'ELECTRIC', replies: 640, ago: 1, votes: 1280 }, { t: 'Your kindest passenger story', by: '@late_train_lola', tag: 'STORIES', replies: 1140, ago: 2, votes: 2460 }, { t: 'Christmas party season: survival guide', by: '@nightrank_nina', tag: 'NIGHTS', replies: 360, ago: 3, votes: 740 } ],
      events: [ { title: 'Going electric: ask a driver', day: 3, time: '20:00', where: 'Online' }, { title: 'Party season night-shift meet-up', day: 17, time: '23:30', where: 'Online' } ] },
    { key: 'liverpool-cab-drivers', name: 'Liverpool Cab Drivers', domain: 'liverpool.taxixx.com', color: '#FB923C', img: U('1785443040892-111a9d187849', 900, 500),
      scope: 'Local', where: 'Liverpool', members: 2400, online: 48, tagline: 'From Lime Street to the Pier Head.',
      about: 'Hackney and private-hire drivers around Liverpool: rank news, match-day traffic, cruise-ship days and a breakfast once a month.',
      rules: ['Liverpool and Merseyside drivers', 'Share rank news fairly', 'Look after each other'],
      mods: ['@scouse_cabbie_steve', '@karen_doyle_licensing'],
      threads: [ { t: 'Match day: which ranks, which roads', by: '@scouse_cabbie_steve', tag: 'MATCH DAY', replies: 64, ago: 0, votes: 120 }, { t: 'Breakfast this month: where?', by: '@scouse_cabbie_steve', tag: 'MEET', replies: 38, ago: 1, votes: 70 }, { t: 'New rapid chargers at the docks', by: '@nightrank_nina', tag: 'ELECTRIC', replies: 26, ago: 2, votes: 58 } ],
      events: [ { title: 'Drivers’ breakfast', day: 5, time: '08:00', where: 'Liverpool' }, { title: 'Christmas lights night: rank plan', day: 15, time: '19:00', where: 'Liverpool' } ] }
  ],
  feed: [
    { av: 'TX', avBg: ROOF, author: 'TaxiXX Editorial', sub: 'Featured · Just now', badge: '★ FEATURED',
      text: 'The cabs, the drivers, the Knowledge, the night shift and every fare between. Going electric, finding a rank, getting home safe. Taxis, all in one place.',
      img: U('1652110329694-acaa1f2b21e7', 800, 600), eng: '♡ 32.4K · 💬 2.6K · ↗ 3.1K' },
    { av: 'NN', avBg: NIGHT, author: '@nightrank_nina', sub: 'On the Rank · Just now', badge: 'COMMUNITY',
      text: 'Rooflight on, kettle in the shelter, 2am and the rain’s just started. Busiest hour of the week starts now 🚕',
      img: U('1613638377394-281765460baa', 800, 600), eng: '♡ 12.8K · 💬 1.4K · ↗ 860' },
    { av: 'KC', avBg: ROOF, author: 'Kerbside Cabs', sub: 'Founding Partner · Brand Zone', badge: 'BRAND ZONE',
      text: 'Live tonight: a night shift across London with a <b>Kerbside</b> cabbie. Every street from memory, every fare a story.',
      img: U('1777328639143-b1deffc25d78', 800, 600), eng: '♡ 18.6K · 💬 2.1K · ↗ 2.8K' },
    { av: 'BK', avBg: AMBER, author: 'Bluebook Knowledge School', sub: 'Brand Zone · 1h ago', badge: 'BRAND ZONE',
      text: 'Twenty-five thousand streets, learned one run at a time. Our <b>Knowledge Starter Course</b> begins in January.',
      img: U('1526129318478-62ed807ebdf9', 800, 600), eng: '♡ 6.4K · 💬 520 · ↗ 610' },
    { av: 'KK', avBg: AMBER, author: '@knowledge_kev', sub: 'The Knowledge · 2h ago', badge: 'COMMUNITY',
      text: 'Year three on the moped. Out at night pointing, because the West End looks completely different after dark. Fourth appearance next week 🤞',
      img: U('1675001627371-398128df6275', 800, 600), eng: '♡ 9.2K · 💬 1.1K · ↗ 380' },
    { av: 'RL', avBg: TEAL, author: 'Ranklight', sub: 'Brand Zone · 4h ago', badge: 'BRAND ZONE',
      text: 'Card, phone or cash: the <b>Ranklight Tap</b> reader takes them all and pays out the next morning.',
      img: U('1482029255085-35a4a48b7084', 800, 600), eng: '♡ 4.2K · 💬 260 · ↗ 310' },
    { av: 'MB', avBg: AMBER, author: 'Marcus Bello Knowledge Coaching', sub: 'The Knowledge · 6h ago', badge: 'PRO ZONE',
      text: 'Tonight’s calling-over: Regent Street to the Old Vic. Say every turn out loud. The road you skip is the one they ask.',
      img: U('1514729797186-944d57303199', 800, 600), eng: '♡ 3.8K · 💬 240 · ↗ 420' }
  ],
  prompts: ['What is the Knowledge of London?', 'How much will a cab from King’s Cross to Heathrow cost?', 'How do I become a taxi driver in my city?', 'Is an electric taxi worth it?'],
  businesses: ['citywide-cab-insurance', 'greenrank-charging']
};

/* the four Brand Zones and two Business Zones */
const brand = (o) => Object.assign({ kind: 'brand', gw: 'taxi', verified: true }, o);
Object.assign(ZONES, {
  'kerbside-cabs': brand({ key: 'kerbside-cabs', name: 'Kerbside Cabs', color: '#FACC15', gradient: ROOF, tier: 'Founding Partner',
    tagline: 'Book a licensed cab in twelve UK cities', stats: { followers: '312K', content: '1.1K', products: '12' },
    ad: { badge: 'Featured', img: U('1777328639163-596a56ac8da3', 760, 760), hl: 'A proper cab, when you need one.', sub: 'Licensed drivers, metered fares, twelve cities.', meta: 'Book in the app' },
    products: [
      { name: 'Airport Fixed Fare, Central London to Heathrow', price: '£95', tag: 'FLAGSHIP', emoji: '✈️', rating: 4.8, reviews: 6240, cat: 'rides', special: true, desc: 'One fixed price to the terminal, whatever the traffic.', features: ['Bags in the boot', 'Meet and greet on return'], review: { who: 'Lola P.', text: 'No meter-watching on the M4.' } },
      { name: 'Kerbside Ride Pass, 10 Rides', price: '£18', tag: 'BESTSELLER', emoji: '🎟️', rating: 4.7, reviews: 3120, cat: 'passes', desc: 'Ten rides with no booking fee, for a year.', features: ['Use in any city'], review: { who: 'Kev O.', text: 'Pays for itself in a month.' } },
      { name: 'Business Account', price: 'Billed monthly', emoji: '💼', rating: 4.8, reviews: 840, cat: 'business', desc: 'Cabs for your team on one monthly bill.', features: ['Receipts by email'], review: { who: 'Mei L.', text: 'Expenses sorted.' } },
      { name: 'Safe Home Gift Card', price: '£40', tag: 'SPECIAL', emoji: '🎁', rating: 4.9, reviews: 1460, cat: 'passes', special: true, desc: 'Forty pounds of cab rides, for the people you want home safe.', features: ['Never expires'], review: { who: 'Nina R.', text: 'Gave one to my daughter at uni.' } }
    ],
    shopCats: [ { key: 'rides', label: 'Rides', icon: '🚕' }, { key: 'passes', label: 'Passes', icon: '🎟️' }, { key: 'business', label: 'Business', icon: '💼' } ],
    feed: [
      { type: 'post', sub: 'Brand post · 2h', text: 'Out of the rain and home in twenty minutes. Fixed fares to every London airport with <b>Kerbside</b>.', img: U('1777769921330-1132a5806bda', 800, 440), eng: '♡ 18.6K · 💬 2.1K · ↗ 2.8K', product: 0 },
      { type: 'post', sub: 'Night shift · Yesterday', text: 'Westminster at midnight from the driver’s seat. Ten rides, no booking fee, with a <b>Ride Pass</b>.', img: U('1510997017461-3c4b81f07779', 800, 440), eng: '♡ 7.2K · 💬 520', product: 1 },
      { type: 'community', who: 'Lola P.', whoBg: NIGHT, sub: 'Community · 1d', text: 'If I leave something in the cab, how do I get it back?', eng: '♡ 380 · 💬 96', reply: 'Hi Lola! Open your trip in the app and tap Lost Property: it messages your driver straight away. Most things are back with you within a day. 🚕' }
    ],
    events: [ { zoneEvent: true, tag: 'LIVE', title: 'Kerbside Live · a night shift across London', when: 'Live now', desc: 'Ride along with a cabbie: the Knowledge in action, every street from memory.', registered: 5840, capacity: 15000 } ],
    about: { founded: 'London · 2011', story: 'Three cabbies who wanted licensed taxis to be as easy to book as anything else. Now twelve cities and thirty thousand drivers. We joined TaxiXX as Founding Partner because the trade’s best people talk here.', milestones: [['2011', 'Three cabbies, one app'], ['2019', 'Twelve cities'], ['2026', 'Founding Partner on TaxiXX']], values: ['Licensed drivers only', 'The meter is the fare', 'Drivers keep more'] } }),

  'bluebook-knowledge': brand({ key: 'bluebook-knowledge', name: 'Bluebook Knowledge School', color: '#FB923C', gradient: AMBER, tier: 'Brand Zone',
    tagline: 'Learn the Knowledge of London', stats: { followers: '48.6K', content: '420', products: '9' },
    ad: { badge: 'New', img: U('1556122071-e404eaedb77f', 760, 760), hl: 'Earn your badge.', sub: 'Knowledge courses, calling-over and mock appearances.', meta: 'From £35' },
    products: [
      { name: 'Knowledge Starter Course', price: '£295', tag: 'FLAGSHIP', emoji: '🗺️', rating: 4.9, reviews: 960, cat: 'courses', special: true, desc: 'Twelve evenings: the first runs, the points and how to study.', features: ['Starts in January', 'Maps included'], review: { who: 'Kev O.', text: 'The best start I could have had.' } },
      { name: 'Calling-Over Membership', price: '£35 / month', tag: 'BESTSELLER', emoji: '🗣️', rating: 4.8, reviews: 1240, cat: 'courses', desc: 'Calling-over sessions every weeknight with other students.', features: ['Cancel any time'], review: { who: 'Marcus B.', text: 'Where the runs really go in.' } },
      { name: 'Mock Appearance', price: '£60', emoji: '🎓', rating: 4.9, reviews: 640, cat: 'appearances', desc: 'A practice appearance with a retired examiner.', features: ['Written feedback'], review: { who: 'Nina R.', text: 'Nerves gone by the real one.' } },
      { name: 'Bluebook Map Set', price: '£48', tag: 'SPECIAL', emoji: '📘', rating: 4.8, reviews: 820, cat: 'books', special: true, desc: 'The runs on wall maps, with a dry-wipe pen.', features: ['Six sheets'], review: { who: 'Lola P.', text: 'Covers my whole hallway.' } }
    ],
    shopCats: [ { key: 'courses', label: 'Courses', icon: '🗺️' }, { key: 'appearances', label: 'Appearances', icon: '🎓' }, { key: 'books', label: 'Maps', icon: '📘' } ],
    feed: [ { type: 'post', sub: 'Brand post · 1h', text: 'Study by day, point by night. The <b>Starter Course</b> begins in January.', img: U('1516733968668-dbdce39c4651', 800, 440), eng: '♡ 6.4K · 💬 520', product: 0 } ],
    events: [ { zoneEvent: true, tag: 'EVENT', title: 'Knowledge open evening', when: 'Dec 2 · 19:00', desc: 'What the Knowledge involves, how long it takes and how to start.', registered: 420, capacity: 900 } ],
    about: { founded: 'London · 1998', story: 'A Knowledge school above a café, run by cabbies who remember every appearance they ever sat.', milestones: [['1998', 'The first students'], ['2015', '1,000 badges'], ['2026', 'Brand Zone on TaxiXX']], values: ['Taught by cabbies', 'Honest about the time it takes', 'Students help students'] } }),

  'ranklight': brand({ key: 'ranklight', name: 'Ranklight', color: '#2DD4BF', gradient: TEAL, tier: 'Brand Zone',
    tagline: 'Meters, card readers and rooflights', stats: { followers: '36.4K', content: '210', products: '24' },
    ad: { badge: 'Featured', img: U('1622096961194-18e96b4348f0', 760, 760), hl: 'Every way to pay, one reader.', sub: 'Card readers, meters and rooflights for cabs.', meta: 'From £39' },
    products: [
      { name: 'Ranklight Tap Card Reader', price: '£79', tag: 'FLAGSHIP', emoji: '💳', rating: 4.8, reviews: 2840, cat: 'payments', special: true, desc: 'Card, phone and watch payments, with next-morning payouts.', features: ['Low fixed fee per fare', 'Prints receipts'], review: { who: 'Nina R.', text: 'Never lost a fare to “cash only” again.' } },
      { name: 'Smart Taxi Meter', price: '£349', tag: 'BESTSELLER', emoji: '🧮', rating: 4.8, reviews: 960, cat: 'meters', desc: 'A meter that updates to your council’s tariff by itself.', features: ['Fitted by an approved installer'], review: { who: 'Steve M.', text: 'Tariff change? Done overnight.' } },
      { name: 'LED Rooflight', price: '£129', emoji: '💡', rating: 4.7, reviews: 540, cat: 'lights', desc: 'A bright, low-power rooflight that lasts.', features: ['Five-year warranty'], review: { who: 'Kev O.', text: 'Bright as anything.' } },
      { name: 'Spare Reader Battery', price: '£39', tag: 'SPECIAL', emoji: '🔋', rating: 4.7, reviews: 420, cat: 'payments', special: true, desc: 'A second battery for the long shifts.', features: ['Swaps in seconds'], review: { who: 'Mei L.', text: 'Essential for twelve-hour nights.' } }
    ],
    shopCats: [ { key: 'payments', label: 'Payments', icon: '💳' }, { key: 'meters', label: 'Meters', icon: '🧮' }, { key: 'lights', label: 'Lights', icon: '💡' } ],
    feed: [ { type: 'post', sub: 'Brand post · 4h', text: 'Light on, ready for the next fare. The <b>Tap</b> reader takes every card.', img: U('1638366174129-e83938733381', 800, 440), eng: '♡ 4.2K · 💬 260', product: 0 } ],
    events: [ { zoneEvent: true, tag: 'SALE', title: 'Black Friday: card reader half price', when: 'Nov 27 · All day', desc: 'The Tap reader at half price, one day only.', registered: 1240, capacity: 4000 } ],
    about: { founded: 'Coventry · 2008', story: 'Engineers who started out repairing taxi meters and now make the kit inside thousands of cabs.', milestones: [['2008', 'The first meter repair'], ['2017', 'The Tap reader'], ['2026', 'Brand Zone on TaxiXX']], values: ['Payouts the next morning', 'Made to be repaired', 'Fair fees'] } }),

  'steadyseat': brand({ key: 'steadyseat', name: 'Steadyseat Cab Comfort', color: '#A1A1AA', gradient: NIGHT, tier: 'Brand Zone',
    tagline: 'Seats, mounts and kit for long shifts', stats: { followers: '22.8K', content: '150', products: '40' },
    ad: { badge: 'Gift', img: U('1514041181368-bca62cceffcd', 760, 760), hl: 'Ten hours. Still comfortable.', sub: 'Back support and cab kit for drivers.', meta: 'From £19' },
    products: [
      { name: 'Steadyseat Back Support', price: '£69', tag: 'FLAGSHIP', emoji: '🪑', rating: 4.8, reviews: 3260, cat: 'comfort', special: true, desc: 'A firm, breathable lumbar support that fits any driver’s seat.', features: ['Washable cover', 'Two firmness levels'], review: { who: 'Steve M.', text: 'My back says thank you.' } },
      { name: 'Magnetic Phone Mount', price: '£24', tag: 'BESTSELLER', emoji: '📱', rating: 4.7, reviews: 4120, cat: 'mounts', desc: 'Holds your phone steady over the worst potholes.', features: ['Fits most vents'], review: { who: 'Nina R.', text: 'Hasn’t dropped once.' } },
      { name: 'Seat Cover Set', price: '£89', emoji: '🧵', rating: 4.6, reviews: 860, cat: 'comfort', desc: 'Hard-wearing covers for the passenger seats.', features: ['Wipe clean'], review: { who: 'Kev O.', text: 'Survived party season.' } },
      { name: 'Night Shift Flask', price: '£19', tag: 'SPECIAL', emoji: '☕', rating: 4.8, reviews: 1460, cat: 'kit', special: true, desc: 'Hot for twelve hours, fits the cup holder.', features: ['Leak-proof lid'], review: { who: 'Lola P.', text: 'Bought one for my dad.' } }
    ],
    shopCats: [ { key: 'comfort', label: 'Comfort', icon: '🪑' }, { key: 'mounts', label: 'Mounts', icon: '📱' }, { key: 'kit', label: 'Kit', icon: '☕' } ],
    feed: [ { type: 'post', sub: 'Brand post · 1d', text: 'Map up, phone steady, eyes on the road: the <b>Magnetic Phone Mount</b>.', img: U('1600320254374-ce2d293c324e', 800, 440), eng: '♡ 2.8K · 💬 160', product: 1 } ],
    events: [ { zoneEvent: true, tag: 'SALE', title: 'Black Friday: 25% off comfort', when: 'Nov 27 · All day', desc: 'A quarter off back supports and seat covers.', registered: 620, capacity: 2000 } ],
    about: { founded: 'Leicester · 2015', story: 'A physio married to a cabbie, tired of hearing about his back.', milestones: [['2015', 'The first back support'], ['2022', 'Phone mounts'], ['2026', 'Brand Zone on TaxiXX']], values: ['Made for ten-hour shifts', 'Tested by drivers', 'Two-year guarantee'] } }),

  'citywide-cab-insurance': { key: 'citywide-cab-insurance', kind: 'business', gw: 'taxi', name: 'Citywide Cab Insurance', color: '#FACC15', gradient: ROOF, img: U('1582820795651-f358eebe4406', 900, 500),
    tier: 'Verified', category: 'Taxi insurance', tagline: 'Insurance for taxi and private-hire drivers and fleets.',
    about: { founded: 'Birmingham · 2004', story: 'An insurance broker that only does taxis: single drivers, fleets and electric cabs.' },
    stats: { years: 22, staff: 90, clients: '18,000 drivers' },
    caps: [ { name: 'Driver cover', detail: 'Public and private hire.' }, { name: 'Fleets', detail: 'From five cabs up.' }, { name: 'Off the road', detail: 'A replacement cab while yours is fixed.' } ],
    specs: { moq: 'One cab', lead: 'Same day', regions: 'UK', certs: ['Authorised broker', 'Claims line all night', 'Taxi specialists'] },
    supplies: [ { kind: 'brand', key: 'kerbside-cabs', what: 'Cover for Kerbside drivers' } ],
    cases: [ { title: 'Back on the road in a day', text: 'A driver with a damaged cab had a replacement by the next morning.' } ],
    feed: [ { sub: 'Advice · 3d', text: 'Winter driving: what your policy covers in snow and ice.' } ],
    contact: { person: 'Ravi Patel, Drivers', response: 'Replies within one working day' } },

  'greenrank-charging': { key: 'greenrank-charging', kind: 'business', gw: 'taxi', name: 'Greenrank Charging', color: '#2DD4BF', gradient: TEAL, img: U('1519566657253-e37fbcf36dfb', 900, 500),
    tier: 'Verified', category: 'Rapid charging for cabs', tagline: 'Rapid chargers at taxi ranks and depots.',
    about: { founded: 'Bristol · 2019', story: 'We put rapid chargers where cabbies actually wait: ranks, depots and shelters.' },
    stats: { years: 7, staff: 60, clients: '9 councils' },
    caps: [ { name: 'Rank chargers', detail: 'Rapid charging while you wait for a fare.' }, { name: 'Depots', detail: 'Overnight charging for fleets.' }, { name: 'Driver rates', detail: 'Lower prices for licensed drivers.' } ],
    specs: { moq: 'One charger', lead: '4 to 12 weeks', regions: 'UK', certs: ['Approved installer', 'Fully insured', 'Fault line all night'] },
    supplies: [ { kind: 'brand', key: 'kerbside-cabs', what: 'Driver rates for Kerbside drivers' } ],
    cases: [ { title: 'Charging on the rank', text: 'Six rapid chargers at a city-centre rank cut drivers’ trips to charge by half.' } ],
    feed: [ { sub: 'Install · 5d', text: 'Four new rapid chargers live at a Liverpool rank.' } ],
    contact: { person: 'Holly Grant, Councils', response: 'Replies within two working days' } }
});

/* events in the Events tab */
gxEvents('taxi', [
  { gw: 'taxi', zone: 'kerbside-cabs', type: 'Live', icon: '🔴', live: true, time: 'Live Now', title: 'Kerbside Live · a night shift across London', desc: 'Ride along with a cabbie: the Knowledge in action, every street from memory.' },
  { gw: 'taxi', zone: 'ranklight', type: 'Sale', icon: '💳', time: 'Nov 27', title: 'Ranklight Black Friday', desc: 'The Tap card reader at half price, one day only.' },
  { gw: 'taxi', zone: 'steadyseat', type: 'Sale', icon: '🪑', time: 'Nov 27', title: 'Steadyseat Black Friday', desc: '25% off back supports and seat covers.' },
  { gw: 'taxi', type: 'Event', icon: '⚡', time: 'Nov 27', title: 'Going electric: ask a driver', desc: 'Cabbies’ Corner: drivers a year into electric cabs answer questions.' },
  { gw: 'taxi', type: 'Event', icon: '🍳', time: 'Nov 29', title: 'Drivers’ breakfast, Liverpool', desc: 'Liverpool Cab Drivers meet for their monthly breakfast.' },
  { gw: 'taxi', zone: 'bluebook-knowledge', type: 'Event', icon: '🗺️', time: 'Dec 2', title: 'Knowledge open evening', desc: 'Bluebook explains what the Knowledge involves and how to start.' },
  { gw: 'taxi', type: 'Event', icon: '🎄', time: 'Dec 9', title: 'Christmas lights night, Liverpool', desc: 'Liverpool Cab Drivers plan the ranks for the busiest night.' },
  { gw: 'taxi', type: 'Event', icon: '🌙', time: 'Dec 11', title: 'Party season night-shift meet-up', desc: 'Cabbies’ Corner meets online at half eleven.' }
]);
})();
/* ═════════ /TAXIXX ═════════ */
