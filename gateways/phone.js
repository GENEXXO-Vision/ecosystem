/* ═════════ PHONEXX — a Tech demo gateway (2026-11-24, Sean; build -95) ═════════
   Built with the _tools/README.md recipe. Palette (light): soft white, indigo, coral.
   Home sector: Tech. Every phone maker, network, repairer, pro and product is fictional; cities are real. No real
   handset or app branding in photos or copy. Prices and plans are illustrative. */
(function(){
const U = (id, w, h) => `https://images.unsplash.com/photo-${id}?w=${w}&h=${h}&fit=crop&q=75`;
const INDIGO = 'linear-gradient(135deg,#818CF8,#3730A3)', CORAL = 'linear-gradient(135deg,#FB7185,#BE123C)', MINT = 'linear-gradient(135deg,#34D399,#047857)', INK = 'linear-gradient(135deg,#475569,#0F172A)';

GATEWAYS.phone = {
  name: 'PhoneXX', domain: 'phonexx.com', emoji: '📱', sector: 'tech', live: true,
  tagline: 'The Phone Universe',
  theme: {
    bg: '#F8F7FC', text: '#1B1830', cardBg: '#FFFFFF', cardBorder: 'rgba(27,24,48,.08)',
    headerBg: 'linear-gradient(180deg,#FFFFFF,#F8F7FC)', accent: '#4F46E5', accentAlt: '#F43F5E', dark: false
  },
  gradient: 'linear-gradient(135deg,#3730A3,#4F46E5,#F43F5E)',
  stats: { members: '6.8M', brands: '2,400+', agents: '52' },
  spaces: ['All Feed', 'New Phones', 'Phone Photography', 'Fix It', 'Screen Time', 'Deals & Plans'],
  trending: ['#ShotOnPhone', '#RightToRepair', '#ScreenFreeSunday'],
  brandZones: [
    { key: 'lumen-phones', name: 'Lumen Phones', color: '#4F46E5', tier: 'Founding Partner', tag: 'Phones with great cameras and long lives' },
    { key: 'fixwell-repairs', name: 'Fixwell Repairs', color: '#F43F5E', tier: 'Brand Zone', tag: 'Screens and batteries fixed while you wait' },
    { key: 'kindred-cases', name: 'Kindred Cases', color: '#10B981', tier: 'Brand Zone', tag: 'Cases and chargers made from recycled materials' },
    { key: 'brightsim', name: 'Brightsim', color: '#64748B', tier: 'Brand Zone', tag: 'Simple SIM plans, no contract' }
  ],
  apps: [
    { name: 'Screen Balance', color: '#10B981', desc: 'Notice your screen time, gently', key: 'screen-balance', url: 'apps/screen-balance.html',
      dev: 'Kindred Cases', rating: '4.8', users: '2.6M', perms: ['profile', 'feed'],
      tagline: 'Less scrolling. More living.',
      about: 'Screen Balance helps you notice how you use your phone: log your day, set a gentle goal and plan phone-free times. No shaming, no lock-outs, just a clearer picture.',
      features: ['Your day at a glance', 'A gentle daily goal', 'Phone-free times', 'Share a streak'],
      shots: ['apps/screen-balance/shot-1.jpg', 'apps/screen-balance/shot-2.jpg', 'apps/screen-balance/shot-3.jpg'],
      version: '3.2', size: '10 KB',
      updates: [ { v: '3.2', ago: 2, notes: 'Phone-free times.' }, { v: '2.7', ago: 70, notes: 'Weekly view.' }, { v: '2.0', ago: 210, notes: 'Signed in with GENEXXO.' } ],
      reviews: [ { who: '@screenfree_sam', stars: 5, ago: 1, text: 'Down from five hours a day to three. Didn’t feel like a diet.' }, { who: '@nia_brooks_balance', stars: 5, ago: 14, text: 'The kindest screen-time app I’ve used.' }, { who: '@pocket_lens_li', stars: 4, ago: 35, text: 'Phone-free Sunday mornings are the best feature.' } ] },
    { name: 'Plan Picker', color: '#64748B', desc: 'Find the SIM plan that fits how you use your phone', key: 'plan-picker', url: 'apps/plan-picker.html',
      dev: 'Brightsim', rating: '4.7', users: '940K', perms: ['profile', 'feed'],
      tagline: 'Stop paying for data you don’t use.',
      about: 'Plan Picker asks how you use your phone (streaming, maps, calls, travel) and suggests the data you really need, then compares plans side by side. Illustrative plans and prices.',
      features: ['Your real data needs', 'Plans side by side', 'Yearly saving', 'Roaming check'],
      shots: ['apps/plan-picker/shot-1.jpg', 'apps/plan-picker/shot-2.jpg', 'apps/plan-picker/shot-3.jpg'],
      version: '2.5', size: '9 KB',
      updates: [ { v: '2.5', ago: 3, notes: 'Roaming check.' }, { v: '2.0', ago: 85, notes: 'Yearly saving.' }, { v: '1.4', ago: 230, notes: 'Signed in with GENEXXO.' } ],
      reviews: [ { who: '@deal_hunter_dee', stars: 5, ago: 2, text: 'Saving £14 a month. I was on a 100GB plan using 9GB.' }, { who: '@screenfree_sam', stars: 4, ago: 21, text: 'Quick and honest.' }, { who: '@tom_varga_repairs', stars: 5, ago: 44, text: 'I send customers here before they upgrade.' } ] },
    { name: 'Repair Tracker', color: '#F43F5E', desc: 'Book a repair and follow it to collection', key: 'repair-tracker', url: 'apps/repair-tracker.html',
      dev: 'Fixwell Repairs', rating: '4.8', users: '1.4M', perms: ['profile', 'feed'],
      tagline: 'Cracked? Sorted.',
      about: 'Repair Tracker gets you a quote for a screen, battery or charging port, books a slot at a shop near you and follows your repair step by step until it’s ready to collect.',
      features: ['Instant quotes', 'Book a slot', 'Follow your repair', 'Warranty kept on file'],
      shots: ['apps/repair-tracker/shot-1.jpg', 'apps/repair-tracker/shot-2.jpg', 'apps/repair-tracker/shot-3.jpg'],
      version: '2.9', size: '10 KB',
      updates: [ { v: '2.9', ago: 4, notes: 'Warranty kept on file.' }, { v: '2.4', ago: 90, notes: 'Charging port repairs.' }, { v: '1.7', ago: 240, notes: 'Signed in with GENEXXO.' } ],
      reviews: [ { who: '@pocket_lens_li', stars: 5, ago: 1, text: 'New screen in 40 minutes, with a coffee.' }, { who: '@deal_hunter_dee', stars: 5, ago: 18, text: 'A new battery instead of a new phone. Saved hundreds.' }, { who: '@screenfree_sam', stars: 4, ago: 39, text: 'Handy to see when it’s ready.' } ] }
  ],
  pros: [
    { key: 'tom-varga-repairs', name: 'Tom Varga Microsoldering', color: '#F43F5E', tag: 'Board-level phone repair and data recovery · Cardiff', role: 'Phone repair technician',
      img: U('1590086782957-93c06ef21604', 800, 800), base: 'Cardiff, UK · and by post', langs: 'English, Hungarian', years: 12, rating: '4.9', reviewsN: 486, cur: '£',
      creds: ['Board-level repair specialist', '20,000 repairs', 'Volunteers at the Cardiff Repair Café'],
      about: 'Tom fixes the phones other shops send back: water damage, dead boards and lost photos. He’s happiest rescuing a phone everyone else gave up on.',
      services: [ { id: 'diag', name: 'Diagnosis', dur: '1 day', price: 25, desc: 'What’s wrong, and what it costs to fix.' },
                  { id: 'data', name: 'Photo and data recovery', dur: '3 to 5 days', price: 180, desc: 'From phones that won’t turn on.' },
                  { id: 'water', name: 'Water damage repair', dur: '2 to 4 days', price: 120, desc: 'Cleaned, dried and repaired.' } ],
      avail: { days: [1, 2, 3, 4, 5, 6], times: ['09:00', '12:30', '16:00'] },
      reviews: [ { who: '@pocket_lens_li', stars: 5, ago: 3, text: 'Got back three years of photos from a phone that went in the sea.' }, { who: '@screenfree_sam', stars: 5, ago: 20, text: 'Honest: told me it wasn’t worth fixing.' }, { who: '@deal_hunter_dee', stars: 5, ago: 46, text: 'A wizard with a soldering iron.' } ],
      posts: [ { ago: 1, text: 'Dropped it in water? Turn it off. Don’t charge it. Don’t put it in rice. Bring it in.' } ],
      tier: 'Pro Zone', verified: true },
    { key: 'freya-lund-photo', name: 'Freya Lund Phone Photography', color: '#4F46E5', tag: 'Phone photography courses and photo walks', role: 'Phone photography teacher',
      img: U('1604072366595-e75dc92d6bdc', 800, 800), base: 'Edinburgh, UK · and online', langs: 'English, Danish', years: 8, rating: '4.9', reviewsN: 362, cur: '£',
      creds: ['Photographer for ten years', 'Every shot on her phone since 2018', 'Teaches beginners and families'],
      about: 'Freya teaches people to take photos they love with the phone already in their pocket: light, composition and a little editing. Courses online and photo walks in Edinburgh.',
      services: [ { id: 'walk', name: 'Photo walk, Edinburgh', dur: '2 hours', price: 45, desc: 'Old Town at golden hour, small group.' },
                  { id: 'course', name: 'Online course', dur: 'Four weeks', price: 79, desc: 'One lesson and one challenge a week.' },
                  { id: 'one', name: 'One-to-one session', dur: '60 minutes', price: 55, desc: 'Your photos, reviewed kindly.' } ],
      avail: { days: [3, 4, 5, 6, 0], times: ['10:00', '14:00', '15:30'] },
      reviews: [ { who: '@pocket_lens_li', stars: 5, ago: 2, text: 'My holiday photos finally look like the holiday felt.' }, { who: '@screenfree_sam', stars: 5, ago: 23, text: 'The photo walk was the highlight of our trip.' }, { who: '@deal_hunter_dee', stars: 5, ago: 48, text: 'No jargon. Loved it.' } ],
      posts: [ { ago: 2, text: 'Tap on your subject before you shoot, then slide the brightness down a touch. Instantly moodier.' } ],
      tier: 'Pro Zone', verified: true },
    { key: 'nia-brooks-balance', name: 'Nia Brooks Digital Balance', color: '#10B981', tag: 'Coaching for a calmer relationship with your phone', role: 'Digital wellbeing coach',
      img: U('1623594675959-02360202d4d6', 800, 800), base: 'London, UK · and online', langs: 'English', years: 6, rating: '4.8', reviewsN: 214, cur: '£',
      creds: ['Qualified coach', 'Works with families and teams', 'Coaching, not therapy'],
      about: 'Nia helps people and families use their phones on purpose: fewer late-night scrolls, phone-free meals and notifications that serve you. Practical coaching; she’ll point you to your GP if something deeper is going on.',
      services: [ { id: 'call', name: 'Phone habits call', dur: '45 minutes', price: 50, desc: 'Where your time goes, and one change to try.' },
                  { id: 'family', name: 'Family phone plan', dur: '90 minutes', price: 95, desc: 'Agree screen rules everyone can live with.' },
                  { id: 'team', name: 'Team workshop', dur: '2 hours', price: 380, desc: 'Notifications, focus and switching off.' } ],
      avail: { days: [1, 2, 3, 4], times: ['10:00', '13:00', '19:00'] },
      reviews: [ { who: '@screenfree_sam', stars: 5, ago: 4, text: 'One session and I sleep better.' }, { who: '@deal_hunter_dee', stars: 5, ago: 27, text: 'Our family plan actually stuck.' }, { who: '@pocket_lens_li', stars: 4, ago: 50, text: 'Practical, not preachy.' } ],
      posts: [ { ago: 3, text: 'Charge your phone outside the bedroom for one week. That’s the whole tip. Try it.' } ],
      tier: 'Pro Zone', verified: true }
  ],
  communities: [
    { key: 'phone-photographers', name: 'Phone Photographers', domain: 'photo.phonexx.com', color: '#4F46E5', img: U('1727334291061-fd29582ef9dc', 900, 500),
      scope: 'Global', where: 'Wherever you are', members: 612000, online: 8240, tagline: 'The best camera is the one you have.',
      about: 'People who take photos on their phones: weekly challenges, editing tips and kind feedback.',
      rules: ['Phone photos only', 'Ask before photographing people', 'Kind, specific feedback'],
      mods: ['@pocket_lens_li', '@freya_lund_photo'],
      threads: [ { t: 'This week’s challenge: reflections', by: '@freya_lund_photo', tag: 'CHALLENGE', replies: 2460, ago: 0, votes: 4820 }, { t: 'Night mode tips that work', by: '@pocket_lens_li', tag: 'HOW-TO', replies: 840, ago: 1, votes: 1640 }, { t: 'Editing: how much is too much?', by: '@screenfree_sam', tag: 'DEBATE', replies: 620, ago: 2, votes: 1120 }, { t: 'Your best photo of 2026', by: '@pocket_lens_li', tag: 'PHOTOS', replies: 3120, ago: 3, votes: 5860 } ],
      events: [ { title: 'Photo of the year: live vote', day: 9, time: '19:00', where: 'Online' }, { title: 'Christmas lights photo walk', day: 19, time: '17:00', where: 'Online and everywhere' } ] },
    { key: 'cardiff-repair-cafe', name: 'Cardiff Repair Café', domain: 'cardiff.phonexx.com', color: '#F43F5E', img: U('1539331586018-346b53b2aaa4', 900, 500),
      scope: 'Local', where: 'Cardiff', members: 1180, online: 26, tagline: 'Don’t bin it. Fix it.',
      about: 'Volunteers and neighbours in Cardiff fixing phones, laptops and anything else, for free, over tea and cake, once a month.',
      rules: ['Everyone welcome', 'Back up your phone before you come', 'Volunteers teach, you learn'],
      mods: ['@tom_varga_repairs', '@screenfree_sam'],
      threads: [ { t: 'Next café: what are you bringing?', by: '@tom_varga_repairs', tag: 'CAFÉ', replies: 46, ago: 0, votes: 88 }, { t: 'Battery swaps: can I do it myself?', by: '@deal_hunter_dee', tag: 'HOW-TO', replies: 32, ago: 1, votes: 64 }, { t: 'Volunteers wanted for December', by: '@tom_varga_repairs', tag: 'HELP', replies: 20, ago: 2, votes: 44 } ],
      events: [ { title: 'Repair café', day: 4, time: '11:00', where: 'Cardiff' }, { title: 'Christmas repair café', day: 18, time: '11:00', where: 'Cardiff' } ] }
  ],
  feed: [
    { av: 'PX', avBg: INDIGO, author: 'PhoneXX Editorial', sub: 'Featured · Just now', badge: '★ FEATURED',
      text: 'The phone in your pocket: the cameras, the repairs, the plans and the habits. Take better photos, keep your phone longer and use it on purpose. Phones, all in one place.',
      img: U('1514575110897-1253ff7b2ccb', 800, 600), eng: '♡ 64.2K · 💬 5.4K · ↗ 7.8K' },
    { av: 'PL', avBg: CORAL, author: '@pocket_lens_li', sub: 'Phone Photography · Just now', badge: 'COMMUNITY',
      text: 'Sunset on the rocks at Porthcurno, shot on my phone, nothing edited but the crop. You really don’t need a big camera 🌅',
      img: U('1500763702684-af70eba9a9f1', 800, 600), eng: '♡ 22.8K · 💬 2.6K · ↗ 1.9K' },
    { av: 'LP', avBg: INDIGO, author: 'Lumen Phones', sub: 'Founding Partner · Brand Zone', badge: 'BRAND ZONE',
      text: 'Live now: the <b>Lumen 9</b> launch. A camera that sees in the dark, seven years of updates and a battery you can change yourself.',
      img: U('1606512070436-b56e3105bbf7', 800, 600), eng: '♡ 31.6K · 💬 4.2K · ↗ 5.6K' },
    { av: 'FR', avBg: CORAL, author: 'Fixwell Repairs', sub: 'Brand Zone · 1h ago', badge: 'BRAND ZONE',
      text: 'Cracked screen this morning, good as new by lunch. <b>Screen Replacement</b> while you wait, in 120 shops.',
      img: U('1550041473-d296a3a8a18a', 800, 600), eng: '♡ 9.4K · 💬 680 · ↗ 820' },
    { av: 'SS', avBg: MINT, author: '@screenfree_sam', sub: 'Screen Time · 2h ago', badge: 'COMMUNITY',
      text: 'Counted on the train home: 41 of 43 people on their phones. Including me, until I started counting. Phones away for the last two stops 📵',
      img: U('1521517407911-565264e7d82d', 800, 600), eng: '♡ 14.6K · 💬 2.2K · ↗ 1.4K' },
    { av: 'KC', avBg: MINT, author: 'Kindred Cases', sub: 'Brand Zone · 4h ago', badge: 'BRAND ZONE',
      text: 'Six colours, all from recycled bottles. The <b>Kindred Weave Case</b>, made to last as long as your phone.',
      img: U('1692780256774-198bc0a3bbf0', 800, 600), eng: '♡ 6.2K · 💬 410 · ↗ 520' },
    { av: 'FL', avBg: INDIGO, author: 'Freya Lund Phone Photography', sub: 'Phone Photography · 6h ago', badge: 'PRO ZONE',
      text: 'From last night’s walk: hold the phone low, let the street lights lead the eye, and wait for someone to walk into the frame.',
      img: U('1523371683773-affcb4a2e39e', 800, 600), eng: '♡ 5.8K · 💬 360 · ↗ 640' }
  ],
  prompts: ['Is it worth repairing my phone or buying a new one?', 'How much mobile data do I really need?', 'Help me take better night photos on my phone', 'How can I spend less time on my phone?'],
  businesses: ['second-light-refurb', 'cellcycle']
};

/* the four Brand Zones and two Business Zones */
const brand = (o) => Object.assign({ kind: 'brand', gw: 'phone', verified: true }, o);
Object.assign(ZONES, {
  'lumen-phones': brand({ key: 'lumen-phones', name: 'Lumen Phones', color: '#4F46E5', gradient: INDIGO, tier: 'Founding Partner',
    tagline: 'Phones with great cameras and long lives', stats: { followers: '1.2M', content: '1.6K', products: '14' },
    ad: { badge: 'Featured', img: U('1592890288564-76628a30a657', 760, 760), hl: 'Made to last seven years.', sub: 'The Lumen 9: night camera, swappable battery.', meta: 'From £24 / month' },
    products: [
      { name: 'Lumen 9', price: 'From £699', tag: 'FLAGSHIP', emoji: '📱', rating: 4.8, reviews: 8640, cat: 'phones', special: true, desc: 'A night camera, seven years of updates and a battery you can swap at home.', features: ['128GB to 512GB', 'Seven years of updates'], review: { who: 'Li W.', text: 'The night photos are unreal.' } },
      { name: 'Lumen 9 Lite', price: 'From £399', tag: 'BESTSELLER', emoji: '📲', rating: 4.7, reviews: 6120, cat: 'phones', desc: 'The same long life, a smaller price.', features: ['Two-day battery'], review: { who: 'Dee A.', text: 'Everything I need, nothing I don’t.' } },
      { name: 'Lumen Care, 2 Years', price: '£6 / month', emoji: '🛡️', rating: 4.6, reviews: 2140, cat: 'care', desc: 'Screen and battery repairs covered for two years.', features: ['Repairs in 120 Fixwell shops'], review: { who: 'Sam T.', text: 'Already used it once.' } },
      { name: 'Swap-In Battery', price: '£39', tag: 'SPECIAL', emoji: '🔋', rating: 4.9, reviews: 1860, cat: 'care', special: true, desc: 'A fresh battery you fit yourself in two minutes.', features: ['No tools needed'], review: { who: 'Tom V.', text: 'Finally, a phone that wants to be fixed.' } }
    ],
    shopCats: [ { key: 'phones', label: 'Phones', icon: '📱' }, { key: 'care', label: 'Care', icon: '🛡️' } ],
    feed: [
      { type: 'post', sub: 'Brand post · 2h', text: 'Shot at dusk, handheld, no filter. The <b>Lumen 9</b> camera sees what you see.', img: U('1425315283416-2acc50323ee6', 800, 440), eng: '♡ 31.6K · 💬 4.2K · ↗ 5.6K', product: 0 },
      { type: 'post', sub: 'Shot on Lumen · Yesterday', text: 'A covered footbridge after dark, lit end to end. The <b>Lumen 9 Lite</b> keeps up.', img: U('1495549115977-ca0a18c9f6a4', 800, 440), eng: '♡ 8.2K · 💬 520', product: 1 },
      { type: 'community', who: 'Sam T.', whoBg: MINT, sub: 'Community · 1d', text: 'How long will my Lumen keep getting updates?', eng: '♡ 820 · 💬 240', reply: 'Hi Sam! Every Lumen 9 gets security and software updates for seven years from launch, so yours is covered until 2033. And when the battery tires, you can swap it in two minutes. 📱' }
    ],
    events: [ { zoneEvent: true, tag: 'LIVE', title: 'Lumen Live · the Lumen 9 launch', when: 'Live now', desc: 'The night camera, the swappable battery and seven years of updates, with questions answered live.', registered: 18400, capacity: 50000 } ],
    about: { founded: 'Cambridge · 2015', story: 'Engineers who thought phones should last longer and be easier to fix. We joined PhoneXX as Founding Partner because the people who care about their phones are here.', milestones: [['2015', 'The first Lumen'], ['2022', 'The swap-in battery'], ['2026', 'Founding Partner on PhoneXX']], values: ['Seven years of updates', 'Built to be repaired', 'Cameras for real life'] } }),

  'fixwell-repairs': brand({ key: 'fixwell-repairs', name: 'Fixwell Repairs', color: '#F43F5E', gradient: CORAL, tier: 'Brand Zone',
    tagline: 'Screens and batteries fixed while you wait', stats: { followers: '186K', content: '540', products: '18' },
    ad: { badge: 'New', img: U('1782671987176-a9b521bcf296', 760, 760), hl: 'Fixed by lunch.', sub: 'Screens, batteries and ports in 120 shops.', meta: 'From £49' },
    products: [
      { name: 'Screen Replacement', price: '£89', tag: 'FLAGSHIP', emoji: '🔧', rating: 4.8, reviews: 14200, cat: 'repairs', special: true, desc: 'A new screen in under an hour, with a twelve-month guarantee.', features: ['Most phones', 'While you wait'], review: { who: 'Li W.', text: 'Forty minutes and a coffee.' } },
      { name: 'Battery Replacement', price: '£49', tag: 'BESTSELLER', emoji: '🔋', rating: 4.8, reviews: 10600, cat: 'repairs', desc: 'All-day battery life back for a fraction of a new phone.', features: ['Twelve-month guarantee'], review: { who: 'Dee A.', text: 'Like a new phone.' } },
      { name: 'Charging Port Repair', price: '£59', emoji: '🔌', rating: 4.7, reviews: 3240, cat: 'repairs', desc: 'Cleaned or replaced, same day.', features: ['Free check first'], review: { who: 'Sam T.', text: 'It was just fluff! They didn’t charge.' } },
      { name: 'Screen Protector, Fitted', price: '£15', tag: 'SPECIAL', emoji: '🛡️', rating: 4.7, reviews: 5120, cat: 'extras', special: true, desc: 'A tough glass protector, fitted bubble-free.', features: ['Replaced free if it cracks'], review: { who: 'Tom V.', text: 'The cheapest repair is the one you avoid.' } }
    ],
    shopCats: [ { key: 'repairs', label: 'Repairs', icon: '🔧' }, { key: 'extras', label: 'Extras', icon: '🛡️' } ],
    feed: [ { type: 'post', sub: 'Brand post · 1h', text: 'Lights on, kettle on, ready for the day’s <b>screen repairs</b>.', img: U('1773904215693-934764345e52', 800, 440), eng: '♡ 9.4K · 💬 680', product: 0 } ],
    events: [ { zoneEvent: true, tag: 'SALE', title: 'Christmas sale: £20 off batteries', when: 'Dec 4 · All day', desc: 'Every battery replacement £20 off, one day only.', registered: 2640, capacity: 8000 } ],
    about: { founded: 'Bristol · 2010', story: 'One market stall fixing screens. Now 120 shops, and still fixing screens.', milestones: [['2010', 'A market stall'], ['2020', '100 shops'], ['2026', 'Brand Zone on PhoneXX']], values: ['Fix before you replace', 'Twelve-month guarantee', 'Honest quotes'] } }),

  'kindred-cases': brand({ key: 'kindred-cases', name: 'Kindred Cases', color: '#10B981', gradient: MINT, tier: 'Brand Zone',
    tagline: 'Cases and chargers made from recycled materials', stats: { followers: '142K', content: '380', products: '120' },
    ad: { badge: 'Featured', img: U('1560305527-51dc8ad5a8f8', 760, 760), hl: 'Protect it. Kindly.', sub: 'Cases and chargers from recycled materials.', meta: 'From £15' },
    products: [
      { name: 'Kindred Weave Case', price: '£29', tag: 'FLAGSHIP', emoji: '🧵', rating: 4.8, reviews: 6840, cat: 'cases', special: true, desc: 'Woven from recycled bottles, tested to a two-metre drop.', features: ['Six colours', 'Compostable packaging'], review: { who: 'Li W.', text: 'Survived a drop on the cobbles.' } },
      { name: 'Marble Slim Case', price: '£24', tag: 'BESTSELLER', emoji: '🪨', rating: 4.7, reviews: 4120, cat: 'cases', desc: 'A slim case with a stone finish.', features: ['Wireless charging friendly'], review: { who: 'Dee A.', text: 'Gets compliments every week.' } },
      { name: 'Fast Charger and Cable', price: '£22', emoji: '🔌', rating: 4.8, reviews: 3260, cat: 'charging', desc: 'A fast charger with a braided cable that lasts.', features: ['Two-year guarantee'], review: { who: 'Sam T.', text: 'Cable hasn’t frayed in a year.' } },
      { name: 'Case Trade-In', price: '£15', tag: 'SPECIAL', emoji: '♻️', rating: 4.8, reviews: 1460, cat: 'cases', special: true, desc: 'Send back an old case and get a new one for £15.', features: ['We recycle the old one'], review: { who: 'Nia B.', text: 'Nice to have somewhere to send them.' } }
    ],
    shopCats: [ { key: 'cases', label: 'Cases', icon: '🧵' }, { key: 'charging', label: 'Charging', icon: '🔌' } ],
    feed: [ { type: 'post', sub: 'Brand post · 4h', text: 'Plugged in overnight, full by breakfast: the <b>Fast Charger and Cable</b>.', img: U('1557767382-97b28f5488e7', 800, 440), eng: '♡ 6.2K · 💬 410', product: 2 } ],
    events: [ { zoneEvent: true, tag: 'SALE', title: 'Christmas sale: 30% off cases', when: 'Dec 4 · All day', desc: 'Every case a third off, one day only.', registered: 2180, capacity: 6000 } ],
    about: { founded: 'Brighton · 2017', story: 'Two designers who couldn’t find a phone case that wasn’t plastic for ever.', milestones: [['2017', 'The first Weave Case'], ['2023', 'Case trade-in'], ['2026', 'Brand Zone on PhoneXX']], values: ['Recycled materials', 'Made to last', 'Take-back on everything'] } }),

  'brightsim': brand({ key: 'brightsim', name: 'Brightsim', color: '#64748B', gradient: INK, tier: 'Brand Zone',
    tagline: 'Simple SIM plans, no contract', stats: { followers: '96.4K', content: '260', products: '8' },
    ad: { badge: 'Gift', img: U('1565035812153-a190783dbc09', 760, 760), hl: 'Pay for the data you use.', sub: 'SIM-only plans, no contract.', meta: 'From £6 / month' },
    products: [
      { name: '20GB SIM Plan', price: '£10 / month', tag: 'FLAGSHIP', emoji: '📶', rating: 4.7, reviews: 8420, cat: 'plans', special: true, desc: 'Unlimited calls and texts, 20GB of data, cancel any time.', features: ['5G included', 'EU roaming'], review: { who: 'Dee A.', text: 'Half what I was paying.' } },
      { name: 'Unlimited SIM Plan', price: '£20 / month', tag: 'BESTSELLER', emoji: '♾️', rating: 4.7, reviews: 5240, cat: 'plans', desc: 'Unlimited everything, no contract.', features: ['Tethering included'], review: { who: 'Li W.', text: 'Streams all the way to Glasgow.' } },
      { name: 'Light SIM Plan', price: '£6 / month', emoji: '🌱', rating: 4.6, reviews: 2860, cat: 'plans', desc: '5GB of data for people who are mostly on wi-fi.', features: ['Roll over unused data'], review: { who: 'Sam T.', text: 'Perfect since I cut down.' } },
      { name: 'Family Bundle, 4 SIMs', price: '£32 / month', tag: 'SPECIAL', emoji: '👨‍👩‍👧‍👦', rating: 4.8, reviews: 1460, cat: 'plans', special: true, desc: 'Four plans on one bill, with parental controls.', features: ['Share data'], review: { who: 'Nia B.', text: 'Easy to set limits for the kids.' } }
    ],
    shopCats: [ { key: 'plans', label: 'Plans', icon: '📶' } ],
    feed: [ { type: 'post', sub: 'Brand post · 1d', text: 'Same phones, smaller bills. Switch to a <b>20GB plan</b> and keep your number.', img: U('1573152143286-0c422b4d2175', 800, 440), eng: '♡ 3.6K · 💬 220', product: 0 } ],
    events: [ { zoneEvent: true, tag: 'SALE', title: 'Christmas sale: three months half price', when: 'Dec 4 · All day', desc: 'Half price for three months on any new plan.', registered: 3120, capacity: 10000 } ],
    about: { founded: 'Manchester · 2019', story: 'A small network on a big one’s masts, with a simple idea: no contracts, no surprises.', milestones: [['2019', 'The first SIM'], ['2024', 'A million customers'], ['2026', 'Brand Zone on PhoneXX']], values: ['No contracts', 'No price rises mid-plan', 'Real people on the phone'] } }),

  'second-light-refurb': { key: 'second-light-refurb', kind: 'business', gw: 'phone', name: 'Second Light Refurb', color: '#4F46E5', gradient: INDIGO, img: U('1691256676376-357c3aa66c89', 900, 500),
    tier: 'Verified', category: 'Refurbished phones', tagline: 'Graded, tested and refurbished phones for retailers.',
    about: { founded: 'Swindon · 2013', story: 'We buy used phones, test every part, refurbish them and sell them on to shops and networks with a full grade.' },
    stats: { years: 13, staff: 210, clients: '340 retailers' },
    caps: [ { name: 'Grading', detail: '70-point test on every phone.' }, { name: 'Refurbishment', detail: 'Screens, batteries and housings.' }, { name: 'Data wiping', detail: 'Certified wipe, every time.' } ],
    specs: { moq: '50 phones', lead: '1 to 3 weeks', regions: 'UK & Europe', certs: ['Certified data erasure', 'Fully insured', 'Twelve-month warranty'] },
    supplies: [ { kind: 'brand', key: 'fixwell-repairs', what: 'Refurbished phones sold in Fixwell shops' } ],
    cases: [ { title: 'A second life', text: 'Forty thousand trade-in phones refurbished and resold in a year.' } ],
    feed: [ { sub: 'Workshop · 3d', text: 'Ten thousand trade-ins graded this week, ready for Christmas.' } ],
    contact: { person: 'Priya Shah, Retailers', response: 'Replies within one working day' } },

  'cellcycle': { key: 'cellcycle', kind: 'business', gw: 'phone', name: 'Cellcycle Recycling', color: '#10B981', gradient: MINT, img: U('1765220066469-54d4efe41ca5', 900, 500),
    tier: 'Verified', category: 'Phone recycling', tagline: 'Recovering metals from phones that can’t be fixed.',
    about: { founded: 'Teesside · 2016', story: 'When a phone can’t be repaired, we take it apart safely and recover the gold, copper, cobalt and glass inside.' },
    stats: { years: 10, staff: 150, clients: '90 partners' },
    caps: [ { name: 'Collection', detail: 'From shops, councils and offices.' }, { name: 'Recovery', detail: 'Metals and glass, recovered.' }, { name: 'Reporting', detail: 'Audited reports for every batch.' } ],
    specs: { moq: '100kg', lead: '1 to 2 weeks', regions: 'UK', certs: ['Licensed waste operator', 'Independently audited', 'Fully insured'] },
    supplies: [ { kind: 'brand', key: 'kindred-cases', what: 'Recycling for Kindred’s trade-in scheme' } ],
    cases: [ { title: 'Nothing to landfill', text: 'A council’s collected phones were recovered with nothing sent to landfill.' } ],
    feed: [ { sub: 'Recovery · 5d', text: 'Two tonnes of old phones in, recovered metals out.' } ],
    contact: { person: 'James Moore, Partners', response: 'Replies within two working days' } }
});

/* events in the Events tab */
gxEvents('phone', [
  { gw: 'phone', zone: 'lumen-phones', type: 'Live', icon: '🔴', live: true, time: 'Live Now', title: 'Lumen Live · the Lumen 9 launch', desc: 'The night camera, the swappable battery and seven years of updates, with questions answered live.' },
  { gw: 'phone', zone: 'fixwell-repairs', type: 'Sale', icon: '🔋', time: 'Dec 4', title: 'Fixwell Christmas sale', desc: '£20 off every battery replacement, one day only.' },
  { gw: 'phone', zone: 'kindred-cases', type: 'Sale', icon: '🧵', time: 'Dec 4', title: 'Kindred Christmas sale', desc: '30% off every case, one day only.' },
  { gw: 'phone', zone: 'brightsim', type: 'Sale', icon: '📶', time: 'Dec 4', title: 'Brightsim Christmas sale', desc: 'Three months half price on any new plan.' },
  { gw: 'phone', type: 'Event', icon: '🔧', time: 'Nov 28', title: 'Repair café, Cardiff', desc: 'Cardiff Repair Café fixes phones and laptops for free.' },
  { gw: 'phone', type: 'Event', icon: '📸', time: 'Dec 3', title: 'Photo of the year: live vote', desc: 'Phone Photographers pick 2026’s best phone photo.' },
  { gw: 'phone', type: 'Event', icon: '🎄', time: 'Dec 12', title: 'Christmas repair café, Cardiff', desc: 'Cardiff Repair Café’s festive session, with mince pies.' },
  { gw: 'phone', type: 'Event', icon: '✨', time: 'Dec 13', title: 'Christmas lights photo walk', desc: 'Phone Photographers shoot the lights wherever they are.' }
]);
})();
/* ═════════ /PHONEXX ═════════ */
