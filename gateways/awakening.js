/* ═════════ AWAKENINGXX — a Spirituality demo gateway (2026-11-27, Sean; build -99) ═════════
   Built with the _tools/README.md recipe. Palette (dark): dusk brown, candle gold, moss green.
   Home sector: Spirituality (listed only there). Every company, maker, pro and product is fictional; places are real.
   Tone: quiet, open and grounded: stillness, nature, reflection, kindness. Not tied to any one religion.
   Handled with health-style care: no health or healing claims, no gurus, no promises. Signposts GP and Samaritans 116 123. */
(function(){
const U = (id, w, h) => `https://images.unsplash.com/photo-${id}?w=${w}&h=${h}&fit=crop&q=75`;
const GOLD = 'linear-gradient(135deg,#FDE68A,#CA8A04)', EMBER = 'linear-gradient(135deg,#FDBA74,#9A3412)', MOSS = 'linear-gradient(135deg,#86EFAC,#166534)', DUSK = 'linear-gradient(135deg,#A8A29E,#44403C)';

GATEWAYS.awakening = {
  name: 'AwakeningXX', domain: 'awakeningxx.com', emoji: '🌅', sector: 'spirituality', live: true,
  tagline: 'The Awakening Universe',
  theme: {
    bg: '#14110C', text: '#F5EEDF', cardBg: 'rgba(255,248,230,.05)', cardBorder: 'rgba(255,248,230,.09)',
    headerBg: 'linear-gradient(180deg,#1E1A12,#14110C)', accent: '#EAB308', accentAlt: '#86EFAC', dark: true
  },
  gradient: 'linear-gradient(135deg,#FDE68A,#CA8A04,#166534)',
  stats: { members: '2.2M', brands: '480+', agents: '24' },
  spaces: ['All Feed', 'Stillness', 'Nature', 'Reflection', 'Retreats', 'Kindness'],
  trending: ['#SunriseSitting', '#EveningPages', '#SlowWalk'],
  brandZones: [
    { key: 'stillwater', name: 'Stillwater', color: '#CA8A04', tier: 'Founding Partner', tag: 'Quiet retreats by the lakes and the sea' },
    { key: 'inkwell', name: 'Inkwell', color: '#9A3412', tier: 'Brand Zone', tag: 'Journals and pens for slowing down' },
    { key: 'hearthlight', name: 'Hearthlight', color: '#44403C', tier: 'Brand Zone', tag: 'Hand-poured candles from Cumbria' },
    { key: 'wayfarer', name: 'Wayfarer', color: '#166534', tier: 'Brand Zone', tag: 'Guided slow walks and old pilgrim paths' }
  ],
  apps: [
    { name: 'Sitting Timer', color: '#CA8A04', desc: 'A gentle timer with a bell for quiet sitting', key: 'sitting-timer', url: 'apps/sitting-timer.html',
      dev: 'Stillwater', rating: '4.9', users: '1.6M', perms: ['profile', 'feed'],
      tagline: 'Sit. Breathe. A bell when it’s time.',
      about: 'Sitting Timer gives you a soft bell at the start and end of a quiet sit, from three minutes to half an hour. Your sits are logged so you can see the habit grow. No streak pressure.',
      features: ['Soft bells', 'Three to thirty minutes', 'A gentle log', 'Share your week'],
      shots: ['apps/sitting-timer/shot-1.jpg', 'apps/sitting-timer/shot-2.jpg', 'apps/sitting-timer/shot-3.jpg'],
      version: '3.0', size: '9 KB',
      updates: [ { v: '3.0', ago: 2, notes: 'Softer bell.' }, { v: '2.4', ago: 68, notes: 'Weekly log.' }, { v: '1.8', ago: 210, notes: 'Signed in with GENEXXO.' } ],
      reviews: [ { who: '@quiet_morning_mo', stars: 5, ago: 1, text: 'Ten minutes before the kids wake. Lovely.' }, { who: '@anne_whitlow_sitting', stars: 5, ago: 14, text: 'The bell I recommend to every class.' }, { who: '@slow_walker_sian', stars: 4, ago: 40, text: 'Simple and calm.' } ] },
    { name: 'Evening Pages', color: '#9A3412', desc: 'Three gentle questions at the end of the day', key: 'evening-pages', url: 'apps/evening-pages.html',
      dev: 'Inkwell', rating: '4.8', users: '980K', perms: ['profile', 'feed'],
      tagline: 'Close the day kindly.',
      about: 'Evening Pages asks three questions at the end of each day: what went well, what you noticed and what you can let go of. Your answers stay on your phone.',
      features: ['Three questions a night', 'Your pages, kept private', 'Different prompts each week', 'Share a moment, not your pages'],
      shots: ['apps/evening-pages/shot-1.jpg', 'apps/evening-pages/shot-2.jpg', 'apps/evening-pages/shot-3.jpg'],
      version: '2.2', size: '9 KB',
      updates: [ { v: '2.2', ago: 3, notes: 'Weekly prompts.' }, { v: '1.7', ago: 74, notes: 'Past pages.' }, { v: '1.2', ago: 200, notes: 'Signed in with GENEXXO.' } ],
      reviews: [ { who: '@slow_walker_sian', stars: 5, ago: 2, text: 'I sleep with a clearer head.' }, { who: '@maya_collins_writes', stars: 5, ago: 20, text: 'Exactly the right three questions.' }, { who: '@quiet_morning_mo', stars: 4, ago: 46, text: 'Gentle.' } ] },
    { name: 'Walk Cards', color: '#166534', desc: 'One question to carry on today’s walk', key: 'walk-cards', url: 'apps/walk-cards.html',
      dev: 'Wayfarer', rating: '4.8', users: '640K', perms: ['profile', 'feed'],
      tagline: 'Walk slowly. Think freely.',
      about: 'Walk Cards gives you one card each day with a question to carry on a walk, like “What am I grateful for that I usually walk past?” Save the cards you love.',
      features: ['A card each day', 'Forty cards to explore', 'Save your favourites', 'Share today’s card'],
      shots: ['apps/walk-cards/shot-1.jpg', 'apps/walk-cards/shot-2.jpg', 'apps/walk-cards/shot-3.jpg'],
      version: '1.6', size: '9 KB',
      updates: [ { v: '1.6', ago: 1, notes: 'Winter cards.' }, { v: '1.2', ago: 62, notes: 'Favourites.' }, { v: '1.0', ago: 170, notes: 'Signed in with GENEXXO.' } ],
      reviews: [ { who: '@slow_walker_sian', stars: 5, ago: 3, text: 'My lunchtime walk has changed.' }, { who: '@owen_carter_walks', stars: 5, ago: 24, text: 'I use them on every guided walk.' }, { who: '@quiet_morning_mo', stars: 4, ago: 52, text: 'Lovely questions.' } ] }
  ],
  pros: [
    { key: 'anne-whitlow-sitting', name: 'Anne Whitlow Quiet Sitting', color: '#CA8A04', tag: 'Gentle sitting groups for beginners', role: 'Meditation teacher',
      img: U('1758686253896-e6c76b6f7aa1', 800, 800), base: 'Kendal, UK · and online', langs: 'English', years: 24, rating: '5.0', reviewsN: 228, cur: '£',
      creds: ['Has led sitting groups for over twenty years', 'Trained in several traditions', 'Runs a weekly group in Kendal'],
      about: 'Anne teaches simple, quiet sitting for anyone, whatever they believe. Her sessions are calm, warm and free of jargon. She doesn’t make health claims, and if you’re struggling she’ll gently suggest you also talk to your GP.',
      services: [ { id: 'group', name: 'Weekly sitting group', dur: '1 hour', price: 8, desc: 'In Kendal or online.' },
                  { id: 'one', name: 'One-to-one introduction', dur: '45 minutes', price: 35, desc: 'Learn to sit at your own pace.' },
                  { id: 'day', name: 'Quiet day', dur: 'A full day', price: 60, desc: 'Sitting, walking and a shared lunch.' } ],
      avail: { days: [1, 3, 6], times: ['07:30', '19:00'] },
      reviews: [ { who: '@quiet_morning_mo', stars: 5, ago: 2, text: 'No pressure, just kindness.' }, { who: '@slow_walker_sian', stars: 5, ago: 22, text: 'A calm, steady teacher.' }, { who: '@maya_collins_writes', stars: 5, ago: 48, text: 'Everyone should meet Anne.' } ],
      posts: [ { ago: 1, text: 'You can’t do sitting wrong. If your mind wanders a hundred times, you’ve come back a hundred times. That’s the practice.' } ],
      tier: 'Pro Zone', verified: true },
    { key: 'owen-carter-walks', name: 'Owen Carter Slow Walks', color: '#166534', tag: 'Guided slow walks in woods and on old paths', role: 'Walk leader',
      img: U('1592234789031-94bf65f630ed', 800, 800), base: 'York, UK', langs: 'English', years: 9, rating: '4.9', reviewsN: 176, cur: '£',
      creds: ['Qualified walking-group leader', 'Leads walks on the old pilgrim paths of Yorkshire', 'First-aid trained'],
      about: 'Owen leads slow, quiet walks through woods and along old paths, with pauses to notice, listen and reflect. No fitness needed, just comfortable boots.',
      services: [ { id: 'walk', name: 'Slow woodland walk', dur: '3 hours', price: 20, desc: 'Near York, small groups.' },
                  { id: 'day', name: 'Pilgrim path day', dur: 'A full day', price: 45, desc: 'Eight miles on an old route.' },
                  { id: 'private', name: 'Private walk', dur: '3 hours', price: 90, desc: 'For you and up to five friends.' } ],
      avail: { days: [5, 6, 0], times: ['09:30'] },
      reviews: [ { who: '@slow_walker_sian', stars: 5, ago: 4, text: 'I heard birds I’d never noticed.' }, { who: '@quiet_morning_mo', stars: 5, ago: 28, text: 'Restful and kind.' }, { who: '@anne_whitlow_sitting', stars: 5, ago: 56, text: 'A born guide.' } ],
      posts: [ { ago: 2, text: 'Today we walked a mile in an hour and stopped eleven times. Nobody asked how far it was.' } ],
      tier: 'Pro Zone', verified: true },
    { key: 'maya-collins-writes', name: 'Maya Collins Reflective Writing', color: '#9A3412', tag: 'Journalling workshops for a quieter mind', role: 'Writing teacher',
      img: U('1607503873903-c5e95f80d7b9', 800, 800), base: 'Bristol, UK · and online', langs: 'English', years: 12, rating: '4.9', reviewsN: 194, cur: '£',
      creds: ['Published poet', 'Runs writing workshops in libraries and retreats', 'Writes the Evening Pages prompts'],
      about: 'Maya teaches reflective writing: simple prompts, a pen and ten minutes of honesty. Her workshops are gentle and you never have to read your writing aloud.',
      services: [ { id: 'workshop', name: 'Evening workshop', dur: '2 hours', price: 25, desc: 'In Bristol or online.' },
                  { id: 'course', name: 'Six-week course', dur: 'Six evenings', price: 120, desc: 'A new kind of prompt each week.' },
                  { id: 'retreat', name: 'Writing day', dur: 'A full day', price: 70, desc: 'Writing, walking and lunch.' } ],
      avail: { days: [2, 4], times: ['18:30'] },
      reviews: [ { who: '@quiet_morning_mo', stars: 5, ago: 3, text: 'I didn’t know I had so much to say.' }, { who: '@slow_walker_sian', stars: 5, ago: 30, text: 'Safe and gentle.' }, { who: '@owen_carter_walks', stars: 5, ago: 60, text: 'Beautiful prompts.' } ],
      posts: [ { ago: 3, text: 'Tonight’s prompt: write about a small thing you saw today that nobody else noticed.' } ],
      tier: 'Pro Zone', verified: true }
  ],
  communities: [
    { key: 'everyday-awakening', name: 'Everyday Awakening', domain: 'everyday.awakeningxx.com', color: '#CA8A04', img: U('1522075782449-e45a34f1ddfb', 900, 500),
      scope: 'Global', where: 'Wherever you are', members: 342000, online: 3860, tagline: 'Curious, open and kind. Every path welcome.',
      about: 'People of every faith and none, sharing quiet practices, good questions and the small moments that matter. This is a demo community, not a substitute for professional help: if you’re struggling, talk to your GP or call Samaritans on 116 123.',
      rules: ['Respect every path, including none', 'No selling, no gurus, no health claims', 'Be gentle with each other'],
      mods: ['@quiet_morning_mo', '@slow_walker_sian'],
      threads: [ { t: 'What does “awakening” mean to you?', by: '@quiet_morning_mo', tag: 'QUESTIONS', replies: 2860, ago: 0, votes: 4620 }, { t: 'Ten minutes of quiet before work: a month in', by: '@slow_walker_sian', tag: 'STILLNESS', replies: 1420, ago: 1, votes: 3080 }, { t: 'Books that changed how you see things', by: '@quiet_morning_mo', tag: 'BOOKS', replies: 1980, ago: 2, votes: 3460 }, { t: 'Small kindnesses this week', by: '@slow_walker_sian', tag: 'KINDNESS', replies: 1160, ago: 3, votes: 2540 } ],
      events: [ { title: 'Live: a twenty-minute sit together', day: 2, time: '07:30', where: 'Online' }, { title: 'Winter solstice: a quiet evening', day: 24, time: '19:00', where: 'Online' } ] },
    { key: 'york-quiet-walks', name: 'York Quiet Walks', domain: 'york.awakeningxx.com', color: '#166534', img: U('1776530800932-ded25568d21e', 900, 500),
      scope: 'Local', where: 'York', members: 860, online: 19, tagline: 'Slow walks, few words, good company.',
      about: 'A friendly group who walk slowly and mostly quietly in the woods and lanes around York, finishing with tea. All ages and abilities welcome.',
      rules: ['Walk at the pace of the slowest', 'Phones on silent', 'Tea is compulsory'],
      mods: ['@owen_carter_walks', '@slow_walker_sian'],
      threads: [ { t: 'December walk: frost on the Ouse', by: '@owen_carter_walks', tag: 'WALK', replies: 30, ago: 0, votes: 76 }, { t: 'Boots or wellies this time of year?', by: '@slow_walker_sian', tag: 'KIT', replies: 22, ago: 1, votes: 48 }, { t: 'Photos from November’s walk', by: '@owen_carter_walks', tag: 'PHOTOS', replies: 18, ago: 2, votes: 54 } ],
      events: [ { title: 'December walk: frost on the Ouse', day: 9, time: '09:30', where: 'York' }, { title: 'New Year’s Day walk', day: 35, time: '10:30', where: 'York' } ] }
  ],
  feed: [
    { av: 'AX', avBg: GOLD, author: 'AwakeningXX Editorial', sub: 'Featured · Just now', badge: '★ FEATURED',
      text: 'Stillness, nature, reflection and kindness, for people of every faith and none. No gurus and no promises, just quiet practices to try. If you’re struggling, please talk to your GP or call Samaritans on 116 123.',
      img: U('1524863479829-916d8e77f114', 800, 600), eng: '♡ 24.6K · 💬 2.0K · ↗ 3.4K' },
    { av: 'QM', avBg: GOLD, author: '@quiet_morning_mo', sub: 'Stillness · Just now', badge: 'COMMUNITY',
      text: 'Thirty mornings in a row, ten minutes on the bench at the end of the garden before anyone else is up. Nothing dramatic. I just notice more, and snap less.',
      img: U('1461468611824-46457c0e11fd', 800, 600), eng: '♡ 10.8K · 💬 1.2K · ↗ 860' },
    { av: 'SW', avBg: GOLD, author: 'Stillwater', sub: 'Founding Partner · Brand Zone', badge: 'BRAND ZONE',
      text: 'Live now: a sunrise sitting on the shore of Derwentwater. Twenty minutes of quiet, the water and the fells. Join from wherever you are. Follow <b>Stillwater</b>.',
      img: U('1526779259212-939e64788e3c', 800, 600), eng: '♡ 14.6K · 💬 1.8K · ↗ 2.2K' },
    { av: 'WF', avBg: MOSS, author: 'Wayfarer', sub: 'Brand Zone · 1h ago', badge: 'BRAND ZONE',
      text: 'Light through the pines, nobody talking, every step slow. A <b>Wayfarer</b> woodland day: no summit, no stopwatch, just the walk.',
      img: U('1758438919146-f3f59a6d2544', 800, 600), eng: '♡ 7.2K · 💬 480 · ↗ 680' },
    { av: 'SS', avBg: MOSS, author: '@slow_walker_sian', sub: 'Nature · 2h ago', badge: 'COMMUNITY',
      text: 'Took today’s Walk Card to the park: “What do I walk past every day without seeing?” It was a holly tree, full of berries, right by my front gate.',
      img: U('1780540771752-b4435e425e53', 800, 600), eng: '♡ 6.6K · 💬 520 · ↗ 440' },
    { av: 'IW', avBg: EMBER, author: 'Inkwell', sub: 'Brand Zone · 4h ago', badge: 'BRAND ZONE',
      text: 'A blank page, a candle and ten minutes. The <b>Inkwell Evening Journal</b> has a gentle question at the top of every page.',
      img: U('1773262726194-7f2ad2fb0152', 800, 600), eng: '♡ 4.8K · 💬 290 · ↗ 420' },
    { av: 'MC', avBg: EMBER, author: 'Maya Collins Reflective Writing', sub: 'Reflection · 6h ago', badge: 'PRO ZONE',
      text: 'Last night’s workshop: twelve strangers, one prompt, forty minutes of pens on paper. Nobody had to read aloud, and three people chose to.',
      img: U('1517971129774-8a2b38fa128e', 800, 600), eng: '♡ 4.2K · 💬 260 · ↗ 340' }
  ],
  prompts: ['How do I start sitting quietly?', 'What is a slow walk?', 'What should I write in a reflective journal?', 'What does “spiritual but not religious” mean?'],
  businesses: ['quiet-hours-retreat', 'open-circle-talks']
};

/* the four Brand Zones and two Business Zones */
const brand = (o) => Object.assign({ kind: 'brand', gw: 'awakening', verified: true }, o);
Object.assign(ZONES, {
  'stillwater': brand({ key: 'stillwater', name: 'Stillwater', color: '#CA8A04', gradient: GOLD, tier: 'Founding Partner',
    tagline: 'Quiet retreats by the lakes and the sea', stats: { followers: '298K', content: '540', products: '12' },
    ad: { badge: 'Featured', img: U('1600618528240-fb9fc964b853', 760, 760), hl: 'A weekend of quiet.', sub: 'Small, simple retreats by the lakes and the sea.', meta: 'From £180' },
    products: [
      { name: 'Lakeside Weekend', price: 'From £280', tag: 'FLAGSHIP', emoji: '🏞️', rating: 4.9, reviews: 1860, cat: 'retreats', special: true, desc: 'Two nights by Derwentwater: sitting, walking and simple food.', features: ['Twelve guests', 'All meals included'], review: { who: 'Mo A.', text: 'I came home quieter.' } },
      { name: 'Coast Retreat', price: 'From £340', tag: 'BESTSELLER', emoji: '🌊', rating: 4.8, reviews: 1120, cat: 'retreats', desc: 'Three nights on the Northumberland coast.', features: ['Silent mornings'], review: { who: 'Sian P.', text: 'The sea did the rest.' } },
      { name: 'Quiet Day', price: '£65', emoji: '☀️', rating: 4.9, reviews: 960, cat: 'days', desc: 'A single day of sitting, walking and lunch.', features: ['Kendal'], review: { who: 'Anne W.', text: 'A perfect first step.' } },
      { name: 'Gift Voucher', price: '£50', tag: 'SPECIAL', emoji: '🎁', rating: 4.9, reviews: 420, cat: 'days', special: true, desc: 'Towards any day or retreat.', features: ['Valid two years'], review: { who: 'Maya C.', text: 'The kindest present.' } }
    ],
    shopCats: [ { key: 'retreats', label: 'Retreats', icon: '🏞️' }, { key: 'days', label: 'Days & gifts', icon: '☀️' } ],
    feed: [
      { type: 'post', sub: 'Brand post · 2h', text: 'First light, before breakfast and before words. A morning on the <b>Lakeside Weekend</b>.', img: U('1576005391034-242dd8f40823', 800, 440), eng: '♡ 14.6K · 💬 1.8K · ↗ 2.2K', product: 0 },
      { type: 'community', who: 'Mo A.', whoBg: GOLD, sub: 'Community · 1d', text: 'I’ve never been on a retreat. Will I have to be silent the whole time?', eng: '♡ 680 · 💬 190', reply: 'Hi Mo! Not at all. Mornings are quiet, but meals and afternoons are relaxed and chatty. Everything is optional, and you can always just walk by the lake. 🏞️' }
    ],
    events: [ { zoneEvent: true, tag: 'LIVE', title: 'Stillwater Live · a sunrise sitting by Derwentwater', when: 'Live now', desc: 'Twenty quiet minutes on the shore, live.', registered: 8640, capacity: 20000 } ],
    about: { founded: 'Keswick · 2012', story: 'A former nurse and a fell guide who wanted to share the quiet of the lakes. We joined AwakeningXX as Founding Partner because stillness should be simple and open to everyone.', milestones: [['2012', 'The first weekend'], ['2019', 'Coast retreats'], ['2026', 'Founding Partner on AwakeningXX']], values: ['Simple and open', 'No promises, just quiet', 'Every path welcome'] } }),

  'inkwell': brand({ key: 'inkwell', name: 'Inkwell', color: '#9A3412', gradient: EMBER, tier: 'Brand Zone',
    tagline: 'Journals and pens for slowing down', stats: { followers: '118K', content: '300', products: '36' },
    ad: { badge: 'New', img: U('1579017308347-e53e0d2fc5e9', 760, 760), hl: 'Ten minutes, one page.', sub: 'Journals with a gentle question on every page.', meta: 'From £6' },
    products: [
      { name: 'Inkwell Evening Journal', price: '£18', tag: 'FLAGSHIP', emoji: '📔', rating: 4.9, reviews: 3460, cat: 'journals', special: true, desc: 'A year of evenings, each page with a gentle question.', features: ['Lay-flat binding', 'Recycled paper'], review: { who: 'Sian P.', text: 'My favourite ten minutes.' } },
      { name: 'Pocket Notebook Trio', price: '£12', tag: 'BESTSELLER', emoji: '📒', rating: 4.8, reviews: 2140, cat: 'journals', desc: 'Three small notebooks for walks and trains.', features: ['Dotted pages'], review: { who: 'Owen C.', text: 'One lives in my coat.' } },
      { name: 'Smooth Ink Pen', price: '£6', emoji: '🖋️', rating: 4.7, reviews: 1640, cat: 'pens', desc: 'A refillable pen that glides.', features: ['Refills £2'], review: { who: 'Maya C.', text: 'The pen I teach with.' } },
      { name: 'Winter Gift Set', price: '£26', tag: 'SPECIAL', emoji: '🎁', rating: 4.9, reviews: 620, cat: 'pens', special: true, desc: 'Evening Journal, pen and a Hearthlight candle.', features: ['Gift boxed'], review: { who: 'Anne W.', text: 'Beautifully made.' } }
    ],
    shopCats: [ { key: 'journals', label: 'Journals', icon: '📔' }, { key: 'pens', label: 'Pens & gifts', icon: '🖋️' } ],
    feed: [ { type: 'post', sub: 'Brand post · 1d', text: 'A chair by the window and the day written down. The <b>Inkwell Evening Journal</b>.', img: U('1772588627400-3cfb94322e5e', 800, 440), eng: '♡ 4.8K · 💬 290', product: 0 } ],
    events: [ { zoneEvent: true, tag: 'EVENT', title: 'Write-along: closing the year on paper', when: 'Dec 4 · 19:30', desc: 'Forty quiet minutes of writing, together online.', registered: 1340, capacity: 4000 } ],
    about: { founded: 'Bristol · 2016', story: 'A bookbinder and a poet making journals that invite you to slow down.', milestones: [['2016', 'The first journal'], ['2022', 'Evening Journal'], ['2026', 'Brand Zone on AwakeningXX']], values: ['Recycled paper', 'Made in Britain', 'Gentle questions'] } }),

  'hearthlight': brand({ key: 'hearthlight', name: 'Hearthlight', color: '#44403C', gradient: DUSK, tier: 'Brand Zone',
    tagline: 'Hand-poured candles from Cumbria', stats: { followers: '84.2K', content: '220', products: '28' },
    ad: { badge: 'Christmas', img: U('1772588627483-d01d6cca2034', 760, 760), hl: 'Light one. Slow down.', sub: 'Soy candles, hand-poured in Cumbria.', meta: 'From £9' },
    products: [
      { name: 'Fellside Candle', price: '£22', tag: 'FLAGSHIP', emoji: '🕯️', rating: 4.8, reviews: 2860, cat: 'candles', special: true, desc: 'Pine, moss and woodsmoke. Fifty hours.', features: ['Soy wax', 'Cotton wick'], review: { who: 'Mo A.', text: 'Smells like a walk in the woods.' } },
      { name: 'Plain Beeswax Pillar', price: '£14', tag: 'BESTSELLER', emoji: '🐝', rating: 4.8, reviews: 1960, cat: 'candles', desc: 'Unscented, from Cumbrian beekeepers.', features: ['Forty hours'], review: { who: 'Anne W.', text: 'Perfect for sitting.' } },
      { name: 'Tealight Tin', price: '£9', emoji: '✨', rating: 4.7, reviews: 1240, cat: 'small', desc: 'Twenty-four unscented tealights.', features: ['Plastic-free'], review: { who: 'Sian P.', text: 'Always in the drawer.' } },
      { name: 'Advent Candle', price: '£16', tag: 'SPECIAL', emoji: '🎄', rating: 4.9, reviews: 540, cat: 'small', special: true, desc: 'Burn a little each December evening.', features: ['Christmas only'], review: { who: 'Maya C.', text: 'Our new tradition.' } }
    ],
    shopCats: [ { key: 'candles', label: 'Candles', icon: '🕯️' }, { key: 'small', label: 'Tealights & gifts', icon: '✨' } ],
    feed: [ { type: 'post', sub: 'Brand post · 3h', text: 'Sunset, a slow breath, the day settling. Then home, and a <b>Fellside Candle</b> on the table.', img: U('1732107195798-4cb9db201131', 800, 440), eng: '♡ 3.8K · 💬 210', product: 0 } ],
    events: [ { zoneEvent: true, tag: 'SALE', title: 'Advent week: candles 20% off', when: 'Dec 1 · All week', desc: 'Advent and Fellside candles, 20% off.', registered: 1860, capacity: 5000 } ],
    about: { founded: 'Ulverston · 2014', story: 'A beekeeper’s daughter pouring candles in an old forge.', milestones: [['2014', 'The forge'], ['2020', 'Beekeeper partnership'], ['2026', 'Brand Zone on AwakeningXX']], values: ['Natural wax', 'Local beekeepers', 'Plastic-free'] } }),

  'wayfarer': brand({ key: 'wayfarer', name: 'Wayfarer', color: '#166534', gradient: MOSS, tier: 'Brand Zone',
    tagline: 'Guided slow walks and old pilgrim paths', stats: { followers: '142K', content: '380', products: '18' },
    ad: { badge: 'Featured', img: U('1766988460209-7fe0bc3833f1', 760, 760), hl: 'Walk slower. See more.', sub: 'Guided slow walks on woodland and pilgrim paths.', meta: 'From £20' },
    products: [
      { name: 'Woodland Slow Walk', price: '£20', tag: 'FLAGSHIP', emoji: '🌲', rating: 4.9, reviews: 2240, cat: 'walks', special: true, desc: 'Three hours, a few miles, many pauses.', features: ['Small groups', 'Tea included'], review: { who: 'Sian P.', text: 'Everyone should try this.' } },
      { name: 'Pilgrim Path Weekend', price: 'From £240', tag: 'BESTSELLER', emoji: '🥾', rating: 4.8, reviews: 860, cat: 'walks', desc: 'Two days on an old route, staying in simple inns.', features: ['Bags carried'], review: { who: 'Owen C.', text: 'Old paths, new eyes.' } },
      { name: 'Walk Cards Deck', price: '£12', emoji: '🃏', rating: 4.8, reviews: 1460, cat: 'kit', desc: 'Forty printed cards with questions for walks.', features: ['Waterproof'], review: { who: 'Mo A.', text: 'One in my pocket every day.' } },
      { name: 'Walking Journal', price: '£10', tag: 'SPECIAL', emoji: '📓', rating: 4.7, reviews: 520, cat: 'kit', special: true, desc: 'A pocket journal for notes on the way.', features: ['Pencil included'], review: { who: 'Maya C.', text: 'Lovely little book.' } }
    ],
    shopCats: [ { key: 'walks', label: 'Walks', icon: '🌲' }, { key: 'kit', label: 'Cards & kit', icon: '🃏' } ],
    feed: [ { type: 'post', sub: 'Brand post · 5h', text: 'A sunlit path and nobody in a hurry. A <b>Woodland Slow Walk</b> near York.', img: U('1762933551337-39f67911b19e', 800, 440), eng: '♡ 4.6K · 💬 280', product: 0 } ],
    events: [ { zoneEvent: true, tag: 'EVENT', title: 'Solstice dawn walk', when: 'Dec 21 · 07:45', desc: 'Walk to watch the sun rise on the shortest day.', registered: 980, capacity: 2400 } ],
    about: { founded: 'Hexham · 2015', story: 'Walk leaders who noticed that the slowest walkers saw the most.', milestones: [['2015', 'The first slow walk'], ['2021', 'Pilgrim paths'], ['2026', 'Brand Zone on AwakeningXX']], values: ['No rush', 'Small groups', 'Leave no trace'] } }),

  'quiet-hours-retreat': { key: 'quiet-hours-retreat', kind: 'business', gw: 'awakening', name: 'Quiet Hours Retreat House', color: '#CA8A04', gradient: GOLD, img: U('1478555718543-a87aa261dbc4', 900, 500),
    tier: 'Verified', category: 'Retreat house', tagline: 'A simple house in the woods for quiet days and weekends.',
    about: { founded: 'Northumberland · 2008', story: 'An old farmhouse in the woods, run by a small team. Groups and individuals come for quiet days, retreats and time to think. All faiths and none welcome.' },
    stats: { years: 18, staff: 12, clients: '4,000 guests a year' },
    caps: [ { name: 'Group retreats', detail: 'Rooms for up to twenty.' }, { name: 'Quiet days', detail: 'Come for a day of space and soup.' }, { name: 'Solo stays', detail: 'A room and the woods to yourself.' } ],
    specs: { moq: 'One night', lead: '1 to 8 weeks', regions: 'Northumberland', certs: ['Accessible ground-floor rooms', 'Vegetarian kitchen', 'Charity-run'] },
    supplies: [ { kind: 'brand', key: 'hearthlight', what: 'Candles for the quiet room' } ],
    cases: [ { title: 'A hospice team’s day off', text: 'A team of nurses spent a quiet day in the woods together.' } ],
    feed: [ { sub: 'House · 3d', text: 'The woodstove is lit and the winter rooms are ready.' } ],
    contact: { person: 'Helen Forster, Bookings', response: 'Replies within two working days' } },

  'open-circle-talks': { key: 'open-circle-talks', kind: 'business', gw: 'awakening', name: 'Open Circle', color: '#166534', gradient: MOSS, img: U('1495395226200-8fbf6b720b8c', 900, 500),
    tier: 'Verified', category: 'Talks and gatherings venue', tagline: 'Talks, circles and quiet evenings in Bath.',
    about: { founded: 'Bath · 2017', story: 'A small community venue hosting talks, reading circles and quiet evenings on philosophy, nature and the big questions. Open to every faith and none, and always affordable.' },
    stats: { years: 9, staff: 6, clients: '300 events a year' },
    caps: [ { name: 'Talks', detail: 'Writers, walkers and thinkers.' }, { name: 'Reading circles', detail: 'One book a month, together.' }, { name: 'Room hire', detail: 'For quiet groups and classes.' } ],
    specs: { moq: 'One evening', lead: '2 to 6 weeks', regions: 'Bath', certs: ['Step-free access', 'Pay-what-you-can tickets', 'Community interest company'] },
    supplies: [ { kind: 'brand', key: 'inkwell', what: 'Journals for writing evenings' } ],
    cases: [ { title: 'A year of reading circles', text: 'Twelve books, two hundred readers and a lot of tea.' } ],
    feed: [ { sub: 'Venue · 5d', text: 'December’s talk: “Why we need winter.” Tickets pay-what-you-can.' } ],
    contact: { person: 'Ravi Mehta, Programme', response: 'Replies within two working days' } }
});

/* events in the Events tab */
gxEvents('awakening', [
  { gw: 'awakening', zone: 'stillwater', type: 'Live', icon: '🔴', live: true, time: 'Live Now', title: 'Stillwater Live · a sunrise sitting by Derwentwater', desc: 'Twenty quiet minutes on the shore, live.' },
  { gw: 'awakening', type: 'Event', icon: '🧘', time: 'Nov 29', title: 'Live: a twenty-minute sit together', desc: 'Everyday Awakening sits together, online.' },
  { gw: 'awakening', zone: 'hearthlight', type: 'Sale', icon: '🕯️', time: 'Dec 1', title: 'Advent week: candles 20% off', desc: 'Advent and Fellside candles.' },
  { gw: 'awakening', zone: 'inkwell', type: 'Event', icon: '📔', time: 'Dec 4', title: 'Write-along: closing the year on paper', desc: 'Forty quiet minutes of writing together.' },
  { gw: 'awakening', type: 'Event', icon: '🌲', time: 'Dec 6', title: 'York Quiet Walks: frost on the Ouse', desc: 'A slow walk, then tea, in York.' },
  { gw: 'awakening', type: 'Event', icon: '✍️', time: 'Dec 8', title: 'Reflective writing evening with Maya Collins', desc: 'Gentle prompts, no reading aloud.' },
  { gw: 'awakening', zone: 'wayfarer', type: 'Event', icon: '🌄', time: 'Dec 21', title: 'Solstice dawn walk', desc: 'Watch the sun rise on the shortest day.' },
  { gw: 'awakening', type: 'Event', icon: '🌙', time: 'Dec 21', title: 'Winter solstice: a quiet evening', desc: 'Everyday Awakening, online.' }
]);
})();
/* ═════════ /AWAKENINGXX ═════════ */
