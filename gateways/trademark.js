/* ═════════ TRADEMARKXX — a Law demo gateway (2026-11-28, Sean; build -102) ═════════
   Built with the _tools/README.md recipe. Palette (light): paper white, ink navy and a registered-mark gold.
   Home sector: Law (listed only there). Every firm, brand, pro and product is fictional; places are real.
   CARE (_tools/CARE-BRIEFS.md): protecting a brand name: searches, classes, filing, logos. Never legal advice
   (“you will be granted”), never real brands’ marks as examples. Signposts: the UK Intellectual Property Office (UK IPO);
   “speak to a qualified trade mark attorney” on every result. */
(function(){
const U = (id, w, h) => `https://images.unsplash.com/photo-${id}?w=${w}&h=${h}&fit=crop&q=75`;
const INK = 'linear-gradient(135deg,#A5B4FC,#1E1B4B)', GOLD = 'linear-gradient(135deg,#FDE68A,#A16207)', ROSE = 'linear-gradient(135deg,#FBCFE8,#9D174D)', MINT = 'linear-gradient(135deg,#A7F3D0,#047857)';

GATEWAYS.trademark = {
  name: 'TrademarkXX', domain: 'trademarkxx.com', emoji: '®️', sector: 'law', live: true,
  tagline: 'The Protect Your Name Universe',
  theme: {
    bg: '#F8F8FA', text: '#14122B', cardBg: '#FFFFFF', cardBorder: 'rgba(20,18,43,.08)',
    headerBg: 'linear-gradient(180deg,#FFFFFF,#F8F8FA)', accent: '#312E81', accentAlt: '#A16207', dark: false
  },
  gradient: 'linear-gradient(135deg,#1E1B4B,#312E81,#FDE68A)',
  stats: { members: '980K', brands: '260+', agents: '18' },
  spaces: ['All Feed', 'Naming', 'Searches', 'Classes', 'Filing', 'After Registration'],
  trending: ['#SearchFirst', '#TradeMarkClasses', '#ProtectYourName'],
  brandZones: [
    { key: 'brightmark-ip', name: 'Brightmark IP', color: '#312E81', tier: 'Founding Partner', tag: 'Trade mark attorneys for small businesses' },
    { key: 'namecraft-studio', name: 'Namecraft Studio', color: '#A16207', tier: 'Brand Zone', tag: 'Naming new businesses and products' },
    { key: 'logobench', name: 'Logobench', color: '#9D174D', tier: 'Brand Zone', tag: 'Logo design for founders' },
    { key: 'markwatch', name: 'Markwatch', color: '#047857', tier: 'Brand Zone', tag: 'Alerts when similar names are filed' }
  ],
  apps: [
    { name: 'Class Finder', color: '#312E81', desc: 'Which trade mark classes might cover what you sell?', key: 'class-finder', url: 'apps/class-finder.html',
      dev: 'Brightmark IP', rating: '4.8', users: '420K', perms: ['profile', 'feed'],
      tagline: 'Find your classes, then ask an attorney.',
      about: 'Trade marks are registered in classes: 45 groups of goods and services. Class Finder suggests the classes that might cover what you sell, with plain-English examples. It’s a starting point, not legal advice: speak to a qualified trade mark attorney, and see the UK IPO for official guidance.',
      features: ['Search by what you sell', 'Plain-English examples', 'Save your shortlist', 'Speak to an attorney'],
      shots: ['apps/class-finder/shot-1.jpg', 'apps/class-finder/shot-2.jpg', 'apps/class-finder/shot-3.jpg'],
      version: '2.1', size: '9 KB',
      updates: [ { v: '2.1', ago: 2, notes: 'Shortlist.' }, { v: '1.7', ago: 66, notes: 'Services classes.' }, { v: '1.2', ago: 200, notes: 'Signed in with GENEXXO.' } ],
      reviews: [ { who: '@candle_founder_maya', stars: 5, ago: 1, text: 'I had no idea candles and soap were different classes.' }, { who: '@priya_shah_ip', stars: 5, ago: 18, text: 'A sensible starting point for clients.' }, { who: '@cafe_owner_dan', stars: 4, ago: 40, text: 'Clear.' } ] },
    { name: 'Filing Steps', color: '#A16207', desc: 'The trade mark journey, one step at a time', key: 'filing-steps', url: 'apps/filing-steps.html',
      dev: 'Namecraft Studio', rating: '4.8', users: '310K', perms: ['profile', 'feed'],
      tagline: 'Search, check, file, wait, register.',
      about: 'Filing Steps walks through the usual UK journey: choosing a distinctive name, searching, picking classes, applying, examination and publication. Tick off each step. It explains the process only and never predicts an outcome. Speak to a qualified trade mark attorney.',
      features: ['Seven steps explained', 'Your progress', 'What happens next', 'Speak to an attorney'],
      shots: ['apps/filing-steps/shot-1.jpg', 'apps/filing-steps/shot-2.jpg', 'apps/filing-steps/shot-3.jpg'],
      version: '1.6', size: '9 KB',
      updates: [ { v: '1.6', ago: 3, notes: 'Publication explained.' }, { v: '1.3', ago: 70, notes: 'Your progress.' }, { v: '1.0', ago: 190, notes: 'Signed in with GENEXXO.' } ],
      reviews: [ { who: '@cafe_owner_dan', stars: 5, ago: 2, text: 'Took the fear out of it.' }, { who: '@candle_founder_maya', stars: 5, ago: 24, text: 'Exactly what I needed.' }, { who: '@tom_reed_brands', stars: 4, ago: 48, text: 'Good overview.' } ] },
    { name: 'Renewal Tracker', color: '#047857', desc: 'Never miss a trade mark renewal date', key: 'renewal-tracker', url: 'apps/renewal-tracker.html',
      dev: 'Markwatch', rating: '4.9', users: '240K', perms: ['profile', 'feed'],
      tagline: 'Ten years goes quickly.',
      about: 'A UK trade mark lasts ten years from filing and can be renewed. Renewal Tracker keeps your marks and their dates in one place and shows what’s coming up. Check official dates with the UK IPO, and speak to a qualified trade mark attorney.',
      features: ['Your marks in one place', 'Renewal countdowns', 'Reminders', 'Share a milestone'],
      shots: ['apps/renewal-tracker/shot-1.jpg', 'apps/renewal-tracker/shot-2.jpg', 'apps/renewal-tracker/shot-3.jpg'],
      version: '1.4', size: '8 KB',
      updates: [ { v: '1.4', ago: 1, notes: 'Reminders.' }, { v: '1.2', ago: 60, notes: 'Countdowns.' }, { v: '1.0', ago: 180, notes: 'Signed in with GENEXXO.' } ],
      reviews: [ { who: '@tom_reed_brands', stars: 5, ago: 3, text: 'All my clients’ dates in one view.' }, { who: '@cafe_owner_dan', stars: 5, ago: 26, text: 'Peace of mind.' }, { who: '@priya_shah_ip', stars: 4, ago: 52, text: 'Neat.' } ] }
  ],
  pros: [
    { key: 'priya-shah-ip', name: 'Priya Shah, Trade Mark Attorney', color: '#312E81', tag: 'Chartered trade mark attorney for small businesses', role: 'Trade mark attorney',
      img: U('1533469513-03bfed91f496', 800, 800), base: 'Manchester, UK · and online', langs: 'English, Gujarati', years: 13, rating: '4.9', reviewsN: 162, cur: '£',
      creds: ['Chartered trade mark attorney', 'Thirteen years in practice', 'Runs free founder clinics'],
      about: 'Priya helps small businesses protect their names and logos: searches, classes, filing and what to do if someone objects. Every situation is different, so a short first call comes before any advice.',
      services: [ { id: 'call', name: 'First call', dur: '20 minutes', price: 20, desc: 'A quick chat about what you need.' },
                  { id: 'search', name: 'Clearance search and advice', dur: 'Written report', price: 250, desc: 'Is the name likely to be available?' },
                  { id: 'file', name: 'UK filing, one class', dur: 'Fixed fee', price: 450, desc: 'Plus the official UK IPO fee.' } ],
      avail: { days: [1, 2, 4], times: ['09:30', '13:00', '16:30'] },
      reviews: [ { who: '@candle_founder_maya', stars: 5, ago: 2, text: 'Clear about the risks, no jargon.' }, { who: '@cafe_owner_dan', stars: 5, ago: 30, text: 'Saved me from a costly mistake.' }, { who: '@tom_reed_brands', stars: 5, ago: 60, text: 'I send all my clients to Priya.' } ],
      posts: [ { ago: 1, text: 'The most common mistake I see: falling in love with a name before anyone has searched it. Search first, then design the logo.' } ],
      tier: 'Pro Zone', verified: true },
    { key: 'tom-reed-brands', name: 'Tom Reed Brand Design', color: '#9D174D', tag: 'Names and logos that are distinctive by design', role: 'Brand designer',
      img: U('1568604032475-10f1a56527c9', 800, 800), base: 'Bristol, UK · and online', langs: 'English', years: 10, rating: '4.9', reviewsN: 118, cur: '£',
      creds: ['Brand designer for ten years', 'Works alongside trade mark attorneys', 'Teaches naming workshops'],
      about: 'Tom designs names and logos for new businesses, aiming for distinctive rather than descriptive, which tends to be easier to protect. He always suggests founders speak to an attorney before launching.',
      services: [ { id: 'name', name: 'Naming workshop', dur: 'Half day', price: 350, desc: 'Twenty names, five shortlisted.' },
                  { id: 'logo', name: 'Logo design', dur: 'Three weeks', price: 900, desc: 'Three routes, one refined.' },
                  { id: 'review', name: 'Brand review', dur: '1 hour', price: 90, desc: 'Fresh eyes on your name and logo.' } ],
      avail: { days: [2, 3, 5], times: ['10:00', '14:00'] },
      reviews: [ { who: '@candle_founder_maya', stars: 5, ago: 3, text: 'Our name is ours and we love it.' }, { who: '@priya_shah_ip', stars: 5, ago: 32, text: 'Designs with protection in mind.' }, { who: '@cafe_owner_dan', stars: 5, ago: 62, text: 'Great to work with.' } ],
      posts: [ { ago: 2, text: '“Best Bakery” describes. “Crumbfellow” distinguishes. Descriptive names are usually harder to protect, so aim for a name that’s yours.' } ],
      tier: 'Pro Zone', verified: true },
    { key: 'cafe-founder-coach', name: 'Leo Grant Startup Advice', color: '#047857', tag: 'Practical advice for first-time founders', role: 'Small business adviser',
      img: U('1605229502508-eca97448236e', 800, 800), base: 'Leeds, UK · and online', langs: 'English', years: 7, rating: '4.8', reviewsN: 86, cur: '£',
      creds: ['Founded and sold two small businesses', 'Business adviser at an enterprise hub', 'Not a lawyer: refers on for legal advice'],
      about: 'Leo helps first-time founders with the practical side: a plan, money, a name and when to bring in professionals. For anything legal, including trade marks, he points you to a qualified attorney.',
      services: [ { id: 'start', name: 'Founder session', dur: '1 hour', price: 50, desc: 'Your next ninety days.' },
                  { id: 'month', name: 'Monthly check-in', dur: 'Four calls', price: 160, desc: 'Accountability and advice.' },
                  { id: 'q', name: 'Quick question call', dur: '20 minutes', price: 15, desc: 'One question, answered.' } ],
      avail: { days: [1, 3, 5], times: ['08:30', '12:30', '18:00'] },
      reviews: [ { who: '@cafe_owner_dan', stars: 5, ago: 4, text: 'Kept me on track.' }, { who: '@candle_founder_maya', stars: 5, ago: 34, text: 'Honest and practical.' }, { who: '@tom_reed_brands', stars: 5, ago: 64, text: 'Knows when to refer on.' } ],
      posts: [ { ago: 3, text: 'Before you print a thousand menus, spend twenty minutes searching your name. Your future self will thank you.' } ],
      tier: 'Pro Zone', verified: true }
  ],
  communities: [
    { key: 'small-brands-big-names', name: 'Small Brands, Big Names', domain: 'founders.trademarkxx.com', color: '#312E81', img: U('1764173039051-987d1639b9d5', 900, 500),
      scope: 'Global', where: 'Wherever you’re building', members: 124000, online: 1380, tagline: 'Naming, logos and protecting what you build.',
      about: 'Founders and makers sharing what they learned about naming, logos and trade marks. Share experiences, not legal advice: for your situation, speak to a qualified trade mark attorney, and see the UK IPO for official guidance. Never post other people’s marks to criticise them. This is a demo community.',
      rules: ['Experiences, not legal advice', 'No naming-and-shaming other brands', 'Be generous with feedback'],
      mods: ['@tom_reed_brands', '@candle_founder_maya'],
      threads: [ { t: 'How did you choose your business name?', by: '@candle_founder_maya', tag: 'NAMING', replies: 1120, ago: 0, votes: 2460 }, { t: 'Descriptive vs distinctive: examples', by: '@tom_reed_brands', tag: 'NAMING', replies: 860, ago: 1, votes: 1980 }, { t: 'What I wish I’d known before filing', by: '@cafe_owner_dan', tag: 'FILING', replies: 640, ago: 2, votes: 1560 }, { t: 'Logo first or name first?', by: '@tom_reed_brands', tag: 'LOGOS', replies: 480, ago: 3, votes: 1180 } ],
      events: [ { title: 'Live: “Can I trademark my business name?”', day: 4, time: '12:30', where: 'Online' }, { title: 'Naming workshop for founders', day: 11, time: '18:30', where: 'Online' } ] },
    { key: 'manchester-makers-founders', name: 'Manchester Makers & Founders', domain: 'manchester.trademarkxx.com', color: '#A16207', img: U('1508766917616-d22f3f1eea14', 900, 500),
      scope: 'Local', where: 'Manchester', members: 680, online: 18, tagline: 'Coffee, shop talk and honest feedback.',
      about: 'Makers and small-business founders around Manchester who meet monthly for coffee and feedback on names, logos and launches.',
      rules: ['Honest, kind feedback', 'No selling at meet-ups', 'Everyone welcome'],
      mods: ['@priya_shah_ip', '@candle_founder_maya'],
      threads: [ { t: 'December meet-up: name feedback night', by: '@candle_founder_maya', tag: 'MEETUP', replies: 28, ago: 0, votes: 62 }, { t: 'Pop-up market stall to share?', by: '@cafe_owner_dan', tag: 'MARKETS', replies: 18, ago: 1, votes: 40 }, { t: 'Thanks for the logo feedback!', by: '@candle_founder_maya', tag: 'THANKS', replies: 12, ago: 2, votes: 34 } ],
      events: [ { title: 'December meet-up: name feedback night', day: 6, time: '18:30', where: 'Manchester' }, { title: 'New year founders’ breakfast', day: 40, time: '08:00', where: 'Manchester' } ] }
  ],
  feed: [
    { av: 'TX', avBg: INK, author: 'TrademarkXX Editorial', sub: 'Featured · Just now', badge: '★ FEATURED',
      text: 'Protecting a brand name, explained: naming, searches, classes, filing and renewals. This is general information, not legal advice: for your situation, speak to a qualified trade mark attorney. Official guidance is on the UK IPO website.',
      img: U('1713616147761-c126f8009c6f', 800, 600), eng: '♡ 12.4K · 💬 1.1K · ↗ 2.2K' },
    { av: 'BI', avBg: INK, author: 'Brightmark IP', sub: 'Founding Partner · Brand Zone', badge: 'BRAND ZONE',
      text: 'Live now: “Can I trademark my business name?” Our attorneys answer founders’ questions about searches, classes and what makes a name distinctive. General information only. Follow <b>Brightmark IP</b>.',
      img: U('1758518731462-d091b0b4ed0d', 800, 600), eng: '♡ 10.8K · 💬 1.6K · ↗ 1.9K' },
    { av: 'CM', avBg: ROSE, author: '@candle_founder_maya', sub: 'Naming · Just now', badge: 'COMMUNITY',
      text: 'Three names, three searches, two dead ends. The third one was clear, and an attorney agreed it was worth filing. Today the logo went on the first jar.',
      img: U('1773146916231-e6aeae932080', 800, 600), eng: '♡ 7.2K · 💬 860 · ↗ 580' },
    { av: 'LB', avBg: ROSE, author: 'Logobench', sub: 'Brand Zone · 1h ago', badge: 'BRAND ZONE',
      text: 'From pencil to screen: a bold, simple mark for a new outdoor brand. <b>Logo Starter</b> gives you three original routes.',
      img: U('1748326650737-33500fdfda30', 800, 600), eng: '♡ 4.6K · 💬 300 · ↗ 420' },
    { av: 'TR', avBg: GOLD, author: 'Tom Reed Brand Design', sub: 'Naming · 2h ago', badge: 'PRO ZONE',
      text: 'Colour swatches, card stock and three names on the wall. Naming day for a new homeware shop. The shortlist goes to their attorney tomorrow.',
      img: U('1716471330463-f475b00f0506', 800, 600), eng: '♡ 5.4K · 💬 420 · ↗ 640' },
    { av: 'NS', avBg: GOLD, author: 'Namecraft Studio', sub: 'Brand Zone · 4h ago', badge: 'BRAND ZONE',
      text: 'A new name over the door of a lamp shop in York, searched, cleared and filed before the sign went up. <b>Name Sprint</b>, two weeks.',
      img: U('1528698827591-e19ccd7bc23d', 800, 600), eng: '♡ 3.8K · 💬 240 · ↗ 340' },
    { av: 'PS', avBg: INK, author: 'Priya Shah, Trade Mark Attorney', sub: 'After Registration · 6h ago', badge: 'PRO ZONE',
      text: 'A UK trade mark lasts ten years, then needs renewing. Put the date in your calendar the day it registers.',
      img: U('1690228254548-31ef53e40cd1', 800, 600), eng: '♡ 4.2K · 💬 260 · ↗ 480' }
  ],
  prompts: ['Can I trademark my business name?', 'What are trade mark classes?', 'What’s the difference between ™ and ®?', 'How long does a trade mark last?'],
  businesses: ['startline-business-hub', 'clearsearch-records']
};

/* the four Brand Zones and two Business Zones */
const brand = (o) => Object.assign({ kind: 'brand', gw: 'trademark', verified: true }, o);
Object.assign(ZONES, {
  'brightmark-ip': brand({ key: 'brightmark-ip', name: 'Brightmark IP', color: '#312E81', gradient: INK, tier: 'Founding Partner',
    tagline: 'Trade mark attorneys for small businesses', stats: { followers: '96.8K', content: '320', products: '6' },
    ad: { badge: 'Featured', img: U('1497366754035-f200968a6e72', 760, 760), hl: 'Your name, protected.', sub: 'Chartered trade mark attorneys, fixed fees.', meta: 'From £250' },
    products: [
      { name: 'Founder Clinic', price: '£20', tag: 'FLAGSHIP', emoji: '💬', rating: 4.9, reviews: 1860, cat: 'advice', special: true, desc: 'Twenty minutes with an attorney about your name.', features: ['Online'], review: { who: 'Maya K.', text: 'Calm, clear and kind.' } },
      { name: 'Clearance Search', price: 'From £250', tag: 'BESTSELLER', emoji: '🔎', rating: 4.8, reviews: 1240, cat: 'advice', desc: 'A written report on the risks of using a name.', features: ['Five working days'], review: { who: 'Dan O.', text: 'Worth every penny.' } },
      { name: 'UK Filing, One Class', price: 'From £450', emoji: '📝', rating: 4.8, reviews: 960, cat: 'filing', desc: 'Prepared and filed by an attorney, plus the official fee.', features: ['Fixed fee'], review: { who: 'Tom R.', text: 'Smooth process.' } },
      { name: 'Renewal Service', price: 'From £150', tag: 'SPECIAL', emoji: '🔁', rating: 4.9, reviews: 420, cat: 'filing', special: true, desc: 'We track and renew your mark.', features: ['Reminders included'], review: { who: 'Priya S.', text: 'Never miss a date.' } }
    ],
    shopCats: [ { key: 'advice', label: 'Advice', icon: '💬' }, { key: 'filing', label: 'Filing & renewals', icon: '📝' } ],
    feed: [
      { type: 'post', sub: 'Brand post · 2h', text: 'Twenty founders, one long table, every question answered. Book a <b>Founder Clinic</b>.', img: U('1755551636128-2385f552d7ec', 800, 440), eng: '♡ 10.8K · 💬 1.6K · ↗ 1.9K', product: 0 },
      { type: 'community', who: 'Dan O.', whoBg: INK, sub: 'Community · 1d', text: 'Will my café name definitely be registered?', eng: '♡ 520 · 💬 160', reply: 'Hi Dan. Nobody can promise that, and you should be wary of anyone who does. A clearance search shows the risks, and an attorney can advise on your situation. Book a Founder Clinic to talk it through. ®️' }
    ],
    events: [ { zoneEvent: true, tag: 'LIVE', title: 'Brightmark Live · can I trademark my business name?', when: 'Live now', desc: 'Founders’ questions answered. General information only.', registered: 5240, capacity: 12000 } ],
    about: { founded: 'Manchester · 2012', story: 'Trade mark attorneys who wanted small businesses to get clear, fixed-fee help. We joined TrademarkXX as Founding Partner because good information saves founders from costly surprises.', milestones: [['2012', 'Founded'], ['2019', 'Founder clinics'], ['2026', 'Founding Partner on TrademarkXX']], values: ['Plain English', 'Fixed fees', 'No false promises'] } }),

  'namecraft-studio': brand({ key: 'namecraft-studio', name: 'Namecraft Studio', color: '#A16207', gradient: GOLD, tier: 'Brand Zone',
    tagline: 'Naming new businesses and products', stats: { followers: '54.2K', content: '170', products: '8' },
    ad: { badge: 'New', img: U('1768180316485-2c7306ab38ff', 760, 760), hl: 'A name worth protecting.', sub: 'Distinctive names, searched early.', meta: 'From £350' },
    products: [
      { name: 'Name Sprint', price: 'From £1,200', tag: 'FLAGSHIP', emoji: '⚡', rating: 4.9, reviews: 620, cat: 'naming', special: true, desc: 'Two weeks: research, fifty names, five shortlisted.', features: ['Early searches included'], review: { who: 'Maya K.', text: 'We found our name in week one.' } },
      { name: 'Naming Workshop', price: '£350', tag: 'BESTSELLER', emoji: '🧠', rating: 4.8, reviews: 480, cat: 'naming', desc: 'Half a day with your team.', features: ['Online or in person'], review: { who: 'Dan O.', text: 'Fun and productive.' } },
      { name: 'Name Check', price: '£90', emoji: '✅', rating: 4.7, reviews: 360, cat: 'checks', desc: 'Pronunciation, meaning and domain checks for one name.', features: ['Two days'], review: { who: 'Tom R.', text: 'Catches the embarrassing ones.' } },
      { name: 'Product Line Names', price: 'From £600', tag: 'SPECIAL', emoji: '🏷️', rating: 4.8, reviews: 180, cat: 'checks', special: true, desc: 'Names for a range of products.', features: ['Up to six products'], review: { who: 'Leo G.', text: 'A coherent family of names.' } }
    ],
    shopCats: [ { key: 'naming', label: 'Naming', icon: '⚡' }, { key: 'checks', label: 'Checks', icon: '✅' } ],
    feed: [ { type: 'post', sub: 'Brand post · 1d', text: 'A shop corner and a name still to find. A <b>Naming Workshop</b> starts with what makes you different.', img: U('1573612665222-8112c04e17c6', 800, 440), eng: '♡ 3.8K · 💬 240', product: 1 } ],
    events: [ { zoneEvent: true, tag: 'EVENT', title: 'Naming workshop for founders', when: 'Dec 9 · 18:30', desc: 'Live online, two hours.', registered: 420, capacity: 1000 } ],
    about: { founded: 'York · 2016', story: 'Writers and researchers who think a good name should be both memorable and protectable.', milestones: [['2016', 'First name'], ['2022', 'Name Sprint'], ['2026', 'Brand Zone on TrademarkXX']], values: ['Distinctive first', 'Search early', 'Honest shortlists'] } }),

  'logobench': brand({ key: 'logobench', name: 'Logobench', color: '#9D174D', gradient: ROSE, tier: 'Brand Zone',
    tagline: 'Logo design for founders', stats: { followers: '62.6K', content: '210', products: '10' },
    ad: { badge: 'Featured', img: U('1792830047526-e692ed52a905', 760, 760), hl: 'Original, from the first sketch.', sub: 'Logos designed from scratch, never templates.', meta: 'From £450' },
    products: [
      { name: 'Logo Starter', price: '£450', tag: 'FLAGSHIP', emoji: '✏️', rating: 4.8, reviews: 980, cat: 'logos', special: true, desc: 'Three original routes, one refined.', features: ['All file formats'], review: { who: 'Maya K.', text: 'Exactly us.' } },
      { name: 'Full Identity', price: 'From £1,500', tag: 'BESTSELLER', emoji: '🎨', rating: 4.9, reviews: 420, cat: 'logos', desc: 'Logo, colours, type and a simple brand guide.', features: ['Four weeks'], review: { who: 'Dan O.', text: 'Our café finally looks the part.' } },
      { name: 'Logo Refresh', price: '£300', emoji: '🔄', rating: 4.7, reviews: 360, cat: 'refresh', desc: 'Tidy and modernise an existing logo.', features: ['Two routes'], review: { who: 'Leo G.', text: 'Subtle and better.' } },
      { name: 'Originality Check', price: '£60', tag: 'SPECIAL', emoji: '🔍', rating: 4.8, reviews: 180, cat: 'refresh', special: true, desc: 'A design-side look for similar logos (not a legal search).', features: ['Two days'], review: { who: 'Priya S.', text: 'A useful first look.' } }
    ],
    shopCats: [ { key: 'logos', label: 'Logos', icon: '✏️' }, { key: 'refresh', label: 'Refresh & checks', icon: '🔄' } ],
    feed: [ { type: 'post', sub: 'Brand post · 3h', text: 'A new mark, tested on the screen. <b>Logo Starter</b>, three original routes.', img: U('1776278806688-64ef6a7e2cc5', 800, 440), eng: '♡ 3.4K · 💬 200', product: 0 } ],
    events: [ { zoneEvent: true, tag: 'SALE', title: 'New-year launch: Logo Starter 15% off', when: 'Dec 3 · All week', desc: 'For businesses launching in January.', registered: 360, capacity: 1000 } ],
    about: { founded: 'Bristol · 2018', story: 'Designers who only make original marks, and work alongside attorneys so founders don’t get caught out.', milestones: [['2018', 'First logo'], ['2023', 'Full Identity'], ['2026', 'Brand Zone on TrademarkXX']], values: ['Original work', 'Clear files', 'Protect early'] } }),

  'markwatch': brand({ key: 'markwatch', name: 'Markwatch', color: '#047857', gradient: MINT, tier: 'Brand Zone',
    tagline: 'Alerts when similar names are filed', stats: { followers: '38.4K', content: '120', products: '6' },
    ad: { badge: 'New', img: U('1749648329134-75ed14f7dae5', 760, 760), hl: 'We watch. You build.', sub: 'Alerts when similar names are filed.', meta: 'From £15 a month' },
    products: [
      { name: 'Watch, One Mark', price: '£15 a month', tag: 'FLAGSHIP', emoji: '👀', rating: 4.8, reviews: 760, cat: 'watch', special: true, desc: 'Monthly alerts for similar new filings.', features: ['UK'], review: { who: 'Maya K.', text: 'Peace of mind.' } },
      { name: 'Watch, Five Marks', price: '£55 a month', tag: 'BESTSELLER', emoji: '🗂️', rating: 4.8, reviews: 420, cat: 'watch', desc: 'For businesses with several brands.', features: ['UK'], review: { who: 'Tom R.', text: 'Good value for clients.' } },
      { name: 'Renewal Reminders', price: '£3 a month', emoji: '⏰', rating: 4.7, reviews: 340, cat: 'reminders', desc: 'Email reminders before renewal dates.', features: ['Any number of marks'], review: { who: 'Dan O.', text: 'Simple.' } },
      { name: 'Alert Review Call', price: 'From £40', tag: 'SPECIAL', emoji: '📞', rating: 4.8, reviews: 160, cat: 'reminders', special: true, desc: 'Talk through an alert with an attorney partner.', features: ['Thirty minutes'], review: { who: 'Priya S.', text: 'The right next step.' } }
    ],
    shopCats: [ { key: 'watch', label: 'Watching', icon: '👀' }, { key: 'reminders', label: 'Reminders', icon: '⏰' } ],
    feed: [ { type: 'post', sub: 'Brand post · 5h', text: 'An old shop front, a name used for a hundred years. <b>Watch, One Mark</b> helps keep yours.', img: U('1636668150626-e5ddfcb5c3c3', 800, 440), eng: '♡ 2.8K · 💬 160', product: 0 } ],
    events: [ { zoneEvent: true, tag: 'EVENT', title: 'What to do when an alert arrives', when: 'Dec 10 · 12:30', desc: 'A short live session.', registered: 240, capacity: 800 } ],
    about: { founded: 'London · 2020', story: 'Engineers and attorneys building simple watching tools for small businesses.', milestones: [['2020', 'First alert'], ['2024', 'Renewal reminders'], ['2026', 'Brand Zone on TrademarkXX']], values: ['Simple alerts', 'Fair prices', 'Refer to attorneys'] } }),

  'startline-business-hub': { key: 'startline-business-hub', kind: 'business', gw: 'trademark', name: 'Startline Business Hub', color: '#A16207', gradient: GOLD, img: U('1787532378729-fe4241197405', 900, 500),
    tier: 'Verified', category: 'Support for new businesses', tagline: 'Desks, advice and a community for founders.',
    about: { founded: 'Leeds · 2015', story: 'A business hub with desks, workshops and advisers for new founders, including free monthly sessions with volunteer trade mark attorneys.' },
    stats: { years: 11, staff: 20, clients: '1,800 founders supported' },
    caps: [ { name: 'Founder desks', detail: 'Flexible, by the month.' }, { name: 'Workshops', detail: 'Money, marketing and protecting your name.' }, { name: 'Adviser sessions', detail: 'One-to-one.' } ],
    specs: { moq: 'One founder', lead: 'Same week', regions: 'Leeds and online', certs: ['Volunteer attorney clinics', 'Not legal advice', 'Low-cost desks'] },
    supplies: [ { kind: 'brand', key: 'brightmark-ip', what: 'Monthly founder clinics' } ],
    cases: [ { title: 'Protected before launch', text: 'A clinic helped a new bakery spot a clash before it printed its packaging.' } ],
    feed: [ { sub: 'Team · 3d', text: 'January founders’ cohort: applications open.' } ],
    contact: { person: 'Sophie Hall, Membership', response: 'Replies within one working day' } },

  'clearsearch-records': { key: 'clearsearch-records', kind: 'business', gw: 'trademark', name: 'Clearsearch Records', color: '#312E81', gradient: INK, img: U('1505664194779-8beaceb93744', 900, 500),
    tier: 'Verified', category: 'Search reports for attorneys', tagline: 'Thorough searches, behind the scenes.',
    about: { founded: 'Cambridge · 2009', story: 'Researchers who prepare detailed search reports for trade mark attorneys. We don’t advise the public: your attorney interprets the results.' },
    stats: { years: 17, staff: 26, clients: '320 attorney firms' },
    caps: [ { name: 'Word mark searches', detail: 'UK and international.' }, { name: 'Logo searches', detail: 'By design features.' }, { name: 'Company name checks', detail: 'Business registers.' } ],
    specs: { moq: 'One search', lead: '2 to 5 days', regions: 'UK and international', certs: ['For attorneys only', 'Confidential', 'Fixed turnaround'] },
    supplies: [ { kind: 'brand', key: 'brightmark-ip', what: 'Clearance search reports' } ],
    cases: [ { title: 'A clash found in time', text: 'A logo search spotted a similar mark in a neighbouring class.' } ],
    feed: [ { sub: 'Team · 5d', text: 'Holiday turnaround times now published.' } ],
    contact: { person: 'Ian Moss, Attorney Services', response: 'Replies within one working day' } }
});

/* events in the Events tab */
gxEvents('trademark', [
  { gw: 'trademark', zone: 'brightmark-ip', type: 'Live', icon: '🔴', live: true, time: 'Live Now', title: 'Brightmark Live · can I trademark my business name?', desc: 'Founders’ questions answered. General information only.' },
  { gw: 'trademark', type: 'Event', icon: '🙋', time: 'Dec 2', title: 'Live: “Can I trademark my business name?”', desc: 'Small Brands, Big Names. Experiences, not advice.' },
  { gw: 'trademark', zone: 'logobench', type: 'Sale', icon: '✏️', time: 'Dec 3', title: 'New-year launch: Logo Starter 15% off', desc: 'For businesses launching in January.' },
  { gw: 'trademark', type: 'Event', icon: '☕', time: 'Dec 4', title: 'Manchester Makers: name feedback night', desc: 'Coffee and honest feedback.' },
  { gw: 'trademark', type: 'Event', icon: '🔎', time: 'Dec 8', title: 'Search before you design, with Priya Shah', desc: 'Why the name comes before the logo.' },
  { gw: 'trademark', zone: 'namecraft-studio', type: 'Event', icon: '🧠', time: 'Dec 9', title: 'Naming workshop for founders', desc: 'Live online, two hours.' },
  { gw: 'trademark', zone: 'markwatch', type: 'Event', icon: '👀', time: 'Dec 10', title: 'What to do when an alert arrives', desc: 'A short live session.' },
  { gw: 'trademark', type: 'Event', icon: '🚀', time: 'Dec 11', title: 'Founder session with Leo Grant', desc: 'Plan your next ninety days.' }
]);
})();
/* ═════════ /TRADEMARKXX ═════════ */
