/* ═════════ SALESXX — a Business demo gateway (2026-11-27, Sean; build -98) ═════════
   Built with the _tools/README.md recipe. Palette (light): clean office, deep navy, closing green.
   Home sector: Business (listed only there). Every company, maker, pro and product is fictional; places are real.
   Tone: honest selling: listening, solving real problems, no pressure tactics. Figures in apps are illustrative. */
(function(){
const U = (id, w, h) => `https://images.unsplash.com/photo-${id}?w=${w}&h=${h}&fit=crop&q=75`;
const NAVY = 'linear-gradient(135deg,#3B82F6,#1E3A8A)', GREEN = 'linear-gradient(135deg,#34D399,#047857)', AMBER = 'linear-gradient(135deg,#FCD34D,#B45309)', SLATE = 'linear-gradient(135deg,#94A3B8,#334155)';

GATEWAYS.sales = {
  name: 'SalesXX', domain: 'salesxx.com', emoji: '🤝', sector: 'business', live: true,
  tagline: 'The Sales Universe',
  theme: {
    bg: '#F5F7FB', text: '#0F1B33', cardBg: '#FFFFFF', cardBorder: 'rgba(15,27,51,.08)',
    headerBg: 'linear-gradient(180deg,#FFFFFF,#F5F7FB)', accent: '#047857', accentAlt: '#1E3A8A', dark: false
  },
  gradient: 'linear-gradient(135deg,#3B82F6,#1E3A8A,#047857)',
  stats: { members: '2.8M', brands: '1.1K+', agents: '34' },
  spaces: ['All Feed', 'B2B', 'Retail', 'Skills', 'Tools', 'Careers'],
  trending: ['#ListenFirst', '#FollowUpFriday', '#ShopFloorHeroes'],
  brandZones: [
    { key: 'pipewise', name: 'Pipewise', color: '#047857', tier: 'Founding Partner', tag: 'The simple sales pipeline for small teams' },
    { key: 'talktrack', name: 'Talktrack', color: '#1E3A8A', tier: 'Brand Zone', tag: 'Headsets and call tools for people who sell by phone' },
    { key: 'counterpoint', name: 'Counterpoint', color: '#B45309', tier: 'Brand Zone', tag: 'Card readers and tills for independent shops' },
    { key: 'firsthand', name: 'Firsthand', color: '#334155', tier: 'Brand Zone', tag: 'Sales books and courses written by people who sell' }
  ],
  apps: [
    { name: 'Pipeline Board', color: '#047857', desc: 'Your deals by stage, and what they’re really worth', key: 'pipeline-board', url: 'apps/pipeline-board.html',
      dev: 'Pipewise', rating: '4.8', users: '1.6M', perms: ['profile', 'feed'],
      tagline: 'Know where every deal stands.',
      about: 'Pipeline Board keeps your deals in stages, from first chat to won, and weights each one by how likely it is to close, so your forecast is honest. Move a deal on with one tap.',
      features: ['Deals by stage', 'Weighted forecast', 'Won and lost this month', 'Share a win'],
      shots: ['apps/pipeline-board/shot-1.jpg', 'apps/pipeline-board/shot-2.jpg', 'apps/pipeline-board/shot-3.jpg'],
      version: '5.2', size: '9 KB',
      updates: [ { v: '5.2', ago: 2, notes: 'Weighted forecast.' }, { v: '4.6', ago: 60, notes: 'Lost reasons.' }, { v: '3.8', ago: 200, notes: 'Signed in with GENEXXO.' } ],
      reviews: [ { who: '@closing_kate', stars: 5, ago: 1, text: 'My forecast finally matches what actually lands.' }, { who: '@josh_turner_sales', stars: 5, ago: 14, text: 'I make every client start here.' }, { who: '@shopfloor_sam', stars: 4, ago: 38, text: 'Simple and quick.' } ] },
    { name: 'Follow-Up List', color: '#1E3A8A', desc: 'Never forget to call back', key: 'follow-up-list', url: 'apps/follow-up-list.html',
      dev: 'Talktrack', rating: '4.9', users: '980K', perms: ['profile', 'feed'],
      tagline: 'The fortune is in the follow-up.',
      about: 'Follow-Up List keeps every promised call and email in one place, sorted by when it’s due. Tick it off, note what was said and set the next one.',
      features: ['Due today, overdue, this week', 'Notes on every call', 'Streak of days with nothing overdue', 'Share your streak'],
      shots: ['apps/follow-up-list/shot-1.jpg', 'apps/follow-up-list/shot-2.jpg', 'apps/follow-up-list/shot-3.jpg'],
      version: '3.4', size: '9 KB',
      updates: [ { v: '3.4', ago: 3, notes: 'Streaks.' }, { v: '2.8', ago: 75, notes: 'Notes on every call.' }, { v: '2.0', ago: 220, notes: 'Signed in with GENEXXO.' } ],
      reviews: [ { who: '@helen_ward_b2b', stars: 5, ago: 2, text: 'Most deals are lost by silence. This fixes that.' }, { who: '@closing_kate', stars: 5, ago: 19, text: 'Nothing overdue for 23 days!' }, { who: '@shopfloor_sam', stars: 4, ago: 41, text: 'Does one thing well.' } ] },
    { name: 'Pitch Practice', color: '#B45309', desc: 'Ten real sales moments a day: what would you say?', key: 'pitch-practice', url: 'apps/pitch-practice.html',
      dev: 'Firsthand', rating: '4.8', users: '1.2M', perms: ['profile', 'feed'],
      tagline: 'Practise the conversation before it happens.',
      about: 'Pitch Practice gives you ten everyday sales moments, from “it’s too expensive” to “just send me something”, and asks what you would say. Every answer explains why the best reply works.',
      features: ['Ten moments a day', 'Why each answer works', 'Your best score', 'Share your score'],
      shots: ['apps/pitch-practice/shot-1.jpg', 'apps/pitch-practice/shot-2.jpg', 'apps/pitch-practice/shot-3.jpg'],
      version: '2.6', size: '9 KB',
      updates: [ { v: '2.6', ago: 1, notes: 'Retail moments added.' }, { v: '2.0', ago: 66, notes: 'Why each answer works.' }, { v: '1.4', ago: 190, notes: 'Signed in with GENEXXO.' } ],
      reviews: [ { who: '@graham_lowe_retail', stars: 5, ago: 3, text: 'I use it with every new starter.' }, { who: '@closing_kate', stars: 5, ago: 22, text: 'The price questions are spot on.' }, { who: '@josh_turner_sales', stars: 4, ago: 45, text: 'Good daily habit.' } ] }
  ],
  pros: [
    { key: 'josh-turner-sales', name: 'Josh Turner Sales Coaching', color: '#047857', tag: 'Coaching for founders and small sales teams', role: 'Sales coach',
      img: U('1651684215020-f7a5b6610f23', 800, 800), base: 'Bristol, UK · and online', langs: 'English', years: 14, rating: '4.9', reviewsN: 284, cur: '£',
      creds: ['Ten years selling software to small businesses', 'Built two sales teams from scratch', 'Coaches founders who hate “selling”'],
      about: 'Josh helps founders and small teams sell without feeling pushy: ask good questions, listen properly, and only sell what really helps.',
      services: [ { id: 'call', name: 'Pipeline review call', dur: '60 minutes', price: 90, desc: 'Your deals, your process, three things to change.' },
                  { id: 'team', name: 'Team workshop', dur: 'Half a day', price: 650, desc: 'Discovery calls, role-played live.' },
                  { id: 'month', name: 'Monthly coaching', dur: 'Four calls', price: 320, desc: 'One call a week for a month.' } ],
      avail: { days: [1, 2, 3, 4], times: ['09:00', '13:00', '17:00'] },
      reviews: [ { who: '@closing_kate', stars: 5, ago: 2, text: 'I stopped pitching and started asking. Sales doubled.' }, { who: '@shopfloor_sam', stars: 5, ago: 21, text: 'Practical and kind.' }, { who: '@helen_ward_b2b', stars: 5, ago: 47, text: 'A natural teacher.' } ],
      posts: [ { ago: 1, text: 'Talk less than half the time on a first call. If you’re talking more, you’re guessing what they need.' } ],
      tier: 'Pro Zone', verified: true },
    { key: 'helen-ward-b2b', name: 'Helen Ward B2B Negotiation', color: '#1E3A8A', tag: 'Negotiation training for account managers', role: 'Negotiation trainer',
      img: U('1758691737587-7630b4d31d16', 800, 800), base: 'London, UK · and online', langs: 'English, French', years: 26, rating: '4.9', reviewsN: 342, cur: '£',
      creds: ['Twenty years in business-to-business sales', 'Former sales director', 'Trains teams across Europe'],
      about: 'Helen teaches account managers to negotiate calmly: prepare, know your walk-away, trade rather than give, and leave both sides happy enough to work together again.',
      services: [ { id: 'prep', name: 'Big deal prep session', dur: '90 minutes', price: 180, desc: 'Your next negotiation, planned together.' },
                  { id: 'course', name: 'Negotiation course', dur: 'Two days', price: 890, desc: 'For teams of up to twelve.' },
                  { id: 'qa', name: 'Ask Helen call', dur: '30 minutes', price: 60, desc: 'One tricky situation, sorted.' } ],
      avail: { days: [2, 3, 4, 5], times: ['10:00', '14:00'] },
      reviews: [ { who: '@closing_kate', stars: 5, ago: 4, text: 'I walked into a renewal with a plan for once.' }, { who: '@josh_turner_sales', stars: 5, ago: 28, text: 'The best negotiation trainer I know.' }, { who: '@shopfloor_sam', stars: 5, ago: 55, text: 'Calm and clear.' } ],
      posts: [ { ago: 2, text: 'Never give a discount for nothing. If the price moves, something else moves too: the term, the volume or the payment date.' } ],
      tier: 'Pro Zone', verified: true },
    { key: 'graham-lowe-retail', name: 'Graham Lowe Shop Floor Training', color: '#B45309', tag: 'Selling skills for independent shops', role: 'Retail trainer',
      img: U('1764173039192-2bbd508d5211', 800, 800), base: 'Manchester, UK', langs: 'English', years: 35, rating: '5.0', reviewsN: 216, cur: '£',
      creds: ['Thirty-five years on the shop floor', 'Ran his own menswear shop for twenty years', 'Trains staff in independent shops'],
      about: 'Graham teaches shop staff the old skills that still work: say hello, ask what it’s for, know your stock, and let people try things.',
      services: [ { id: 'visit', name: 'Shop visit and staff session', dur: 'Half a day', price: 280, desc: 'Graham watches, then trains your team on the floor.' },
                  { id: 'call', name: 'Shop owner call', dur: '45 minutes', price: 50, desc: 'Displays, staff and the till.' },
                  { id: 'course', name: 'New starter course', dur: 'One day', price: 120, desc: 'Per person, in Manchester.' } ],
      avail: { days: [1, 3, 5], times: ['09:00', '14:00'] },
      reviews: [ { who: '@shopfloor_sam', stars: 5, ago: 3, text: 'Our average sale went up and customers say we’re friendlier.' }, { who: '@closing_kate', stars: 5, ago: 30, text: 'A legend of the trade.' }, { who: '@josh_turner_sales', stars: 5, ago: 58, text: 'Pure common sense.' } ],
      posts: [ { ago: 3, text: 'The best question in retail: “What’s it for?” Then listen. The answer tells you what to show them.' } ],
      tier: 'Pro Zone', verified: true }
  ],
  communities: [
    { key: 'honest-selling', name: 'Honest Selling', domain: 'honest.salesxx.com', color: '#047857', img: U('1600880292089-90a7e086ee0c', 900, 500),
      scope: 'Global', where: 'Wherever people sell', members: 412000, online: 4860, tagline: 'Sell like you’d want to be sold to.',
      about: 'Salespeople, founders and shop staff swapping what works, what doesn’t and how to sell without being pushy. Newcomers very welcome.',
      rules: ['No spam or pitching members', 'Be kind to beginners', 'Share what worked and why'],
      mods: ['@closing_kate', '@shopfloor_sam'],
      threads: [ { t: 'The question that changed my discovery calls', by: '@closing_kate', tag: 'SKILLS', replies: 1860, ago: 0, votes: 3920 }, { t: 'How do you handle “it’s too expensive”?', by: '@shopfloor_sam', tag: 'PRICE', replies: 2240, ago: 1, votes: 3460 }, { t: 'First month in sales: ask us anything', by: '@closing_kate', tag: 'NEW', replies: 980, ago: 2, votes: 1840 }, { t: 'Follow-up emails that actually get replies', by: '@shopfloor_sam', tag: 'EMAIL', replies: 1420, ago: 3, votes: 2610 } ],
      events: [ { title: 'Live role-play: the price objection', day: 4, time: '12:30', where: 'Online' }, { title: 'New to sales: ask us anything', day: 11, time: '18:00', where: 'Online' } ] },
    { key: 'bristol-sales-breakfast', name: 'Bristol Sales Breakfast', domain: 'bristol.salesxx.com', color: '#B45309', img: U('1764173039506-c5cc7b8ec14b', 900, 500),
      scope: 'Local', where: 'Bristol', members: 1180, online: 26, tagline: 'Coffee, bacon rolls and honest talk.',
      about: 'Salespeople and shop owners from around Bristol who meet once a month for breakfast and swap what’s working. No pitching each other, ever.',
      rules: ['No pitching members', 'What’s said at breakfast stays there', 'Bring a newcomer'],
      mods: ['@josh_turner_sales', '@shopfloor_sam'],
      threads: [ { t: 'December breakfast: Christmas trading tips', by: '@josh_turner_sales', tag: 'MEETUP', replies: 42, ago: 0, votes: 96 }, { t: 'Who’s hiring in Bristol?', by: '@shopfloor_sam', tag: 'JOBS', replies: 30, ago: 1, votes: 64 }, { t: 'Best café for the January one?', by: '@josh_turner_sales', tag: 'MEETUP', replies: 22, ago: 2, votes: 40 } ],
      events: [ { title: 'December breakfast: Christmas trading', day: 6, time: '07:30', where: 'Bristol' }, { title: 'January breakfast: plans for the year', day: 41, time: '07:30', where: 'Bristol' } ] }
  ],
  feed: [
    { av: 'SX', avBg: NAVY, author: 'SalesXX Editorial', sub: 'Featured · Just now', badge: '★ FEATURED',
      text: 'From the shop floor to the boardroom: people who sell for a living, the skills that last and the tools that help. Selling, done honestly.',
      img: U('1758691736548-073bc97cdff4', 800, 600), eng: '♡ 32.4K · 💬 2.6K · ↗ 4.2K' },
    { av: 'CK', avBg: GREEN, author: '@closing_kate', sub: 'B2B · Just now', badge: 'COMMUNITY',
      text: 'Three months ago I talked for the whole call. Today I asked six questions and barely mentioned our product. Biggest deal of my year. Listening works.',
      img: U('1522071820081-009f0129c71c', 800, 600), eng: '♡ 14.6K · 💬 1.9K · ↗ 1.4K' },
    { av: 'PW', avBg: GREEN, author: 'Pipewise', sub: 'Founding Partner · Brand Zone', badge: 'BRAND ZONE',
      text: 'Live now: a real sales team runs its Monday pipeline review, start to finish. Which deals are real, which are wishful, and what happens next. Follow <b>Pipewise</b>.',
      img: U('1758691736407-02406d18df6c', 800, 600), eng: '♡ 18.2K · 💬 2.4K · ↗ 2.6K' },
    { av: 'CP', avBg: AMBER, author: 'Counterpoint', sub: 'Brand Zone · 1h ago', badge: 'BRAND ZONE',
      text: 'Christmas queues move faster when the card reader goes to the customer. The <b>Counterpoint Go</b> fits in an apron pocket.',
      img: U('1556740758-90de374c12ad', 800, 600), eng: '♡ 8.4K · 💬 620 · ↗ 940' },
    { av: 'SS', avBg: AMBER, author: '@shopfloor_sam', sub: 'Retail · 2h ago', badge: 'COMMUNITY',
      text: 'Opened up at eight, sold the last of the winter blend by ten. A regular told three friends about it. Best marketing there is.',
      img: U('1753351052363-53ce102830eb', 800, 600), eng: '♡ 7.2K · 💬 540 · ↗ 460' },
    { av: 'TT', avBg: NAVY, author: 'Talktrack', sub: 'Brand Zone · 4h ago', badge: 'BRAND ZONE',
      text: 'Hands free for notes, ears free from the office noise. The <b>Talktrack Duo</b> headset is built for long call days.',
      img: U('1517245386807-bb43f82c33c4', 800, 600), eng: '♡ 5.6K · 💬 380 · ↗ 620' },
    { av: 'GL', avBg: SLATE, author: 'Graham Lowe Shop Floor Training', sub: 'Retail · 6h ago', badge: 'PRO ZONE',
      text: 'Forty years serving his street and he still greets every customer by name. You can’t buy that. You can learn it.',
      img: U('1687422808191-93810cd07ab0', 800, 600), eng: '♡ 4.8K · 💬 290 · ↗ 380' }
  ],
  prompts: ['How do I handle “it’s too expensive”?', 'What makes a good discovery call?', 'How often should I follow up?', 'How do I sell without being pushy?'],
  businesses: ['northbound-outreach', 'shopfloor-academy']
};

/* the four Brand Zones and two Business Zones */
const brand = (o) => Object.assign({ kind: 'brand', gw: 'sales', verified: true }, o);
Object.assign(ZONES, {
  'pipewise': brand({ key: 'pipewise', name: 'Pipewise', color: '#047857', gradient: GREEN, tier: 'Founding Partner',
    tagline: 'The simple sales pipeline for small teams', stats: { followers: '386K', content: '720', products: '6' },
    ad: { badge: 'Featured', img: U('1542744173-8e7e53415bb0', 760, 760), hl: 'Every deal, one screen.', sub: 'A sales pipeline your whole team will actually use.', meta: 'From £12 a user a month' },
    products: [
      { name: 'Pipewise Team', price: '£12 a user a month', tag: 'FLAGSHIP', emoji: '📊', rating: 4.8, reviews: 4260, cat: 'software', special: true, desc: 'Deals by stage, follow-up reminders and an honest forecast.', features: ['Set up in an afternoon', 'Phone and laptop'], review: { who: 'Kate M.', text: 'The team finally updates it.' } },
      { name: 'Pipewise Solo', price: '£6 a month', tag: 'BESTSELLER', emoji: '🧑‍💼', rating: 4.8, reviews: 2860, cat: 'software', desc: 'Everything a one-person business needs.', features: ['Email reminders'], review: { who: 'Sam R.', text: 'Perfect for my little shop.' } },
      { name: 'Pipeline Set-Up Session', price: '£95', emoji: '🛠️', rating: 4.9, reviews: 860, cat: 'help', desc: 'An expert sets up your stages and imports your contacts.', features: ['Live video call'], review: { who: 'Josh T.', text: 'Saved a week.' } },
      { name: 'Forecast Course', price: '£40', tag: 'SPECIAL', emoji: '🎓', rating: 4.7, reviews: 640, cat: 'help', special: true, desc: 'How to forecast honestly, in four short videos.', features: ['Certificate'], review: { who: 'Helen W.', text: 'Clear and practical.' } }
    ],
    shopCats: [ { key: 'software', label: 'Software', icon: '📊' }, { key: 'help', label: 'Help & training', icon: '🛠️' } ],
    feed: [
      { type: 'post', sub: 'Brand post · 2h', text: 'Monday, nine o’clock, one board. That’s the whole review with <b>Pipewise Team</b>.', img: U('1557804506-669a67965ba0', 800, 440), eng: '♡ 18.2K · 💬 2.4K · ↗ 2.6K', product: 0 },
      { type: 'community', who: 'Kate M.', whoBg: GREEN, sub: 'Community · 1d', text: 'How do you stop people marking every deal 90% likely?', eng: '♡ 840 · 💬 260', reply: 'Hi Kate! Tie the chance to what has actually happened: a demo booked, a proposal sent, a budget confirmed. Pipewise sets the percentage by stage, so nobody has to guess. 📊' }
    ],
    events: [ { zoneEvent: true, tag: 'LIVE', title: 'Pipewise Live · a real Monday pipeline review', when: 'Live now', desc: 'A real sales team reviews its deals, start to finish.', registered: 9640, capacity: 24000 } ],
    about: { founded: 'Bristol · 2015', story: 'Three salespeople who were tired of software built for managers, not sellers. We joined SalesXX as Founding Partner because good selling starts with knowing where you stand.', milestones: [['2015', 'Founded'], ['2022', '50,000 teams'], ['2026', 'Founding Partner on SalesXX']], values: ['Simple beats clever', 'Honest forecasts', 'Built by sellers'] } }),

  'talktrack': brand({ key: 'talktrack', name: 'Talktrack', color: '#1E3A8A', gradient: NAVY, tier: 'Brand Zone',
    tagline: 'Headsets and call tools for people who sell by phone', stats: { followers: '142K', content: '410', products: '28' },
    ad: { badge: 'New', img: U('1556761175-b413da4baf72', 760, 760), hl: 'Sound like you’re in the room.', sub: 'Headsets built for long call days.', meta: 'From £49' },
    products: [
      { name: 'Talktrack Duo', price: '£119', tag: 'FLAGSHIP', emoji: '🎧', rating: 4.8, reviews: 2940, cat: 'headsets', special: true, desc: 'Two-ear wireless headset that cuts office noise.', features: ['30-hour battery', 'Mute button you can find'], review: { who: 'Kate M.', text: 'Clients say I sound clearer.' } },
      { name: 'Talktrack Solo', price: '£49', tag: 'BESTSELLER', emoji: '🎙️', rating: 4.7, reviews: 3260, cat: 'headsets', desc: 'Light single-ear headset.', features: ['USB and Bluetooth'], review: { who: 'Sam R.', text: 'Forget I’m wearing it.' } },
      { name: 'Call Notes Pad', price: '£8', emoji: '📝', rating: 4.6, reviews: 860, cat: 'desk', desc: 'A notepad laid out for calls: who, need, next step.', features: ['100 pages'], review: { who: 'Helen W.', text: 'Old-school and brilliant.' } },
      { name: 'Quiet Booth', price: '£2,400', tag: 'SPECIAL', emoji: '🚪', rating: 4.8, reviews: 140, cat: 'desk', special: true, desc: 'A one-person booth for calls in an open office.', features: ['Fitted in a day'], review: { who: 'Josh T.', text: 'The whole office is calmer.' } }
    ],
    shopCats: [ { key: 'headsets', label: 'Headsets', icon: '🎧' }, { key: 'desk', label: 'Desk', icon: '📝' } ],
    feed: [ { type: 'post', sub: 'Brand post · 1d', text: 'Pens out, ears on. Notes and clear calls all afternoon with the <b>Talktrack Solo</b>.', img: U('1517048676732-d65bc937f952', 800, 440), eng: '♡ 5.6K · 💬 380', product: 1 } ],
    events: [ { zoneEvent: true, tag: 'EVENT', title: 'Follow-Up Friday: an hour of calls, together', when: 'Dec 4 · 10:00', desc: 'Make your follow-up calls alongside hundreds of others, live.', registered: 1460, capacity: 4000 } ],
    about: { founded: 'Leeds · 2011', story: 'Audio engineers who sat next to a sales floor and heard the problem.', milestones: [['2011', 'The first headset'], ['2020', 'Quiet Booth'], ['2026', 'Brand Zone on SalesXX']], values: ['Clear sound', 'Two-year warranty', 'Repairable'] } }),

  'counterpoint': brand({ key: 'counterpoint', name: 'Counterpoint', color: '#B45309', gradient: AMBER, tier: 'Brand Zone',
    tagline: 'Card readers and tills for independent shops', stats: { followers: '118K', content: '300', products: '16' },
    ad: { badge: 'Christmas', img: U('1579005007697-75b2fe2c88e7', 760, 760), hl: 'Faster queues this Christmas.', sub: 'Card readers and tills made for small shops.', meta: 'From £29' },
    products: [
      { name: 'Counterpoint Go', price: '£29', tag: 'FLAGSHIP', emoji: '💳', rating: 4.8, reviews: 5120, cat: 'readers', special: true, desc: 'A pocket card reader that works with your phone.', features: ['Next-day payouts', 'Low flat fee'], review: { who: 'Sam R.', text: 'Took it to the Christmas market, sold out.' } },
      { name: 'Counterpoint Till', price: '£349', tag: 'BESTSELLER', emoji: '🖥️', rating: 4.7, reviews: 1860, cat: 'tills', desc: 'Touchscreen till with stock and staff built in.', features: ['Receipt printer'], review: { who: 'Graham L.', text: 'Knows what sells, and when.' } },
      { name: 'Stock Scanner', price: '£79', emoji: '🔍', rating: 4.6, reviews: 640, cat: 'tills', desc: 'Scan to count stock in minutes.', features: ['Works offline'], review: { who: 'Kate M.', text: 'Stocktake done before lunch.' } },
      { name: 'Gift Card Pack', price: '£25', tag: 'SPECIAL', emoji: '🎁', rating: 4.7, reviews: 520, cat: 'readers', special: true, desc: '100 printed gift cards with your shop’s name.', features: ['Works with the Till'], review: { who: 'Helen W.', text: 'Christmas sorted.' } }
    ],
    shopCats: [ { key: 'readers', label: 'Card readers', icon: '💳' }, { key: 'tills', label: 'Tills & stock', icon: '🖥️' } ],
    feed: [ { type: 'post', sub: 'Brand post · 3h', text: 'Keys to the shop, a reader in his pocket and the shutters up by eight. <b>Counterpoint Go</b>.', img: U('1762471712594-eadf362e7d0f', 800, 440), eng: '♡ 8.4K · 💬 620', product: 0 } ],
    events: [ { zoneEvent: true, tag: 'SALE', title: 'Small Business Saturday: readers half price', when: 'Dec 5 · All day', desc: 'Counterpoint Go at half price for independent shops.', registered: 2240, capacity: 6000 } ],
    about: { founded: 'Manchester · 2014', story: 'A market trader and a payments engineer who wanted small shops to pay fair fees.', milestones: [['2014', 'The first reader'], ['2021', 'The Till'], ['2026', 'Brand Zone on SalesXX']], values: ['Fair, flat fees', 'Help from real people', 'Independent shops first'] } }),

  'firsthand': brand({ key: 'firsthand', name: 'Firsthand', color: '#334155', gradient: SLATE, tier: 'Brand Zone',
    tagline: 'Sales books and courses written by people who sell', stats: { followers: '96.4K', content: '260', products: '40' },
    ad: { badge: 'Featured', img: U('1521737852567-6949f3f9f2b5', 760, 760), hl: 'Learn from people who’ve done it.', sub: 'Books and short courses on honest selling.', meta: 'From £9' },
    products: [
      { name: 'Ask, Don’t Tell', price: '£14', tag: 'FLAGSHIP', emoji: '📕', rating: 4.9, reviews: 3860, cat: 'books', special: true, desc: 'The book on discovery calls: questions that uncover what people really need.', features: ['Paperback and audio'], review: { who: 'Kate M.', text: 'Changed how I sell.' } },
      { name: 'The Shop Floor', price: '£12', tag: 'BESTSELLER', emoji: '🛍️', rating: 4.8, reviews: 1460, cat: 'books', desc: 'Retail selling, told through forty years of stories.', features: ['Foreword by Graham Lowe'], review: { who: 'Sam R.', text: 'Every shop should have one.' } },
      { name: 'First 90 Days in Sales', price: '£49', emoji: '🎓', rating: 4.8, reviews: 960, cat: 'courses', desc: 'A short online course for new salespeople.', features: ['Twelve lessons'], review: { who: 'Josh T.', text: 'I send every new hire here.' } },
      { name: 'Negotiation Cards', price: '£9', tag: 'SPECIAL', emoji: '🃏', rating: 4.7, reviews: 540, cat: 'courses', special: true, desc: 'Fifty cards of phrases to trade, not give.', features: ['Pocket size'], review: { who: 'Helen W.', text: 'I wish I’d written these.' } }
    ],
    shopCats: [ { key: 'books', label: 'Books', icon: '📕' }, { key: 'courses', label: 'Courses', icon: '🎓' } ],
    feed: [ { type: 'post', sub: 'Brand post · 5h', text: 'Heads together, questions ready. A team reading <b>Ask, Don’t Tell</b> together.', img: U('1538688423619-a81d3f23454b', 800, 440), eng: '♡ 3.6K · 💬 220', product: 0 } ],
    events: [ { zoneEvent: true, tag: 'EVENT', title: 'Author talk: Ask, Don’t Tell', when: 'Dec 9 · 18:30', desc: 'The author on discovery calls, live with Q&A.', registered: 980, capacity: 3000 } ],
    about: { founded: 'London · 2018', story: 'A publisher run by former salespeople, printing the books they wish they’d had.', milestones: [['2018', 'The first book'], ['2023', 'Online courses'], ['2026', 'Brand Zone on SalesXX']], values: ['Written by practitioners', 'No tricks', 'Short and useful'] } }),

  'northbound-outreach': { key: 'northbound-outreach', kind: 'business', gw: 'sales', name: 'Northbound Outreach', color: '#1E3A8A', gradient: NAVY, img: U('1780733066188-6586795a6da7', 900, 500),
    tier: 'Verified', category: 'Outsourced sales team', tagline: 'A friendly sales team you can hire by the month.',
    about: { founded: 'Newcastle · 2013', story: 'We make calls and book meetings for small businesses that can’t yet hire their own sales team. Every caller is trained, paid properly and works only on clients they believe in.' },
    stats: { years: 13, staff: 85, clients: '400 businesses helped' },
    caps: [ { name: 'Booking meetings', detail: 'Calls and emails to the right people.' }, { name: 'Market research calls', detail: 'What customers really think.' }, { name: 'Training', detail: 'Handing it all over to your own team.' } ],
    specs: { moq: 'Three months', lead: '2 weeks', regions: 'UK and Ireland', certs: ['Data protection trained', 'Calls only who’s allowed', 'Living wage employer'] },
    supplies: [ { kind: 'brand', key: 'talktrack', what: 'Headsets for the calling team' } ],
    cases: [ { title: 'From zero to forty meetings', text: 'A bakery supplier booked forty meetings in a quarter.' } ],
    feed: [ { sub: 'Team · 3d', text: 'Twelve new callers started this week. Welcome!' } ],
    contact: { person: 'Ruth Armstrong, Clients', response: 'Replies within one working day' } },

  'shopfloor-academy': { key: 'shopfloor-academy', kind: 'business', gw: 'sales', name: 'Shopfloor Academy', color: '#B45309', gradient: AMBER, img: U('1531058240690-006c446962d8', 900, 500),
    tier: 'Verified', category: 'Retail staff training', tagline: 'Friendly, skilled shop staff, trained in your shop.',
    about: { founded: 'Sheffield · 2010', story: 'We train staff in independent shops: greeting, product knowledge, the till and handling the busy days. Short sessions, on your own shop floor.' },
    stats: { years: 16, staff: 30, clients: '2,600 shops trained' },
    caps: [ { name: 'Customer service', detail: 'Greeting, listening, recommending.' }, { name: 'Product knowledge', detail: 'Know your stock, tell its story.' }, { name: 'Busy days', detail: 'Christmas and sale days, planned.' } ],
    specs: { moq: 'One session', lead: '1 to 3 weeks', regions: 'England and Wales', certs: ['Trainers with shop experience', 'Fully insured', 'DBS checked'] },
    supplies: [ { kind: 'brand', key: 'counterpoint', what: 'Till training for new staff' } ],
    cases: [ { title: 'A florist’s best December', text: 'After two sessions, a Sheffield florist’s average sale rose by a fifth.' } ],
    feed: [ { sub: 'Shop floor · 5d', text: 'Christmas sessions booked out: thank you, shopkeepers.' } ],
    contact: { person: 'Dev Patel, Bookings', response: 'Replies within two working days' } }
});

/* events in the Events tab */
gxEvents('sales', [
  { gw: 'sales', zone: 'pipewise', type: 'Live', icon: '🔴', live: true, time: 'Live Now', title: 'Pipewise Live · a real Monday pipeline review', desc: 'A real sales team reviews its deals, start to finish.' },
  { gw: 'sales', type: 'Event', icon: '🎭', time: 'Dec 1', title: 'Live role-play: the price objection', desc: 'Honest Selling members practise “it’s too expensive”.' },
  { gw: 'sales', zone: 'talktrack', type: 'Event', icon: '📞', time: 'Dec 4', title: 'Follow-Up Friday: an hour of calls', desc: 'Make your follow-ups alongside hundreds of others.' },
  { gw: 'sales', zone: 'counterpoint', type: 'Sale', icon: '💳', time: 'Dec 5', title: 'Small Business Saturday: readers half price', desc: 'Counterpoint Go at half price for independent shops.' },
  { gw: 'sales', type: 'Event', icon: '🥐', time: 'Dec 3', title: 'Bristol Sales Breakfast: Christmas trading', desc: 'Breakfast and honest talk in Bristol.' },
  { gw: 'sales', zone: 'firsthand', type: 'Event', icon: '📕', time: 'Dec 9', title: 'Author talk: Ask, Don’t Tell', desc: 'Discovery calls, live with Q&A.' },
  { gw: 'sales', type: 'Event', icon: '🙋', time: 'Dec 8', title: 'New to sales: ask us anything', desc: 'Honest Selling answers your first-month questions.' },
  { gw: 'sales', type: 'Event', icon: '🤝', time: 'Dec 15', title: 'Negotiation clinic with Helen Ward', desc: 'Bring a real deal, leave with a plan.' }
]);
})();
/* ═════════ /SALESXX ═════════ */
