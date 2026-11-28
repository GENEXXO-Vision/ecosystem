/* ═════════ CASINOXX — a Gambling demo gateway (2026-11-28, Sean; build -101) ═════════
   Built with the _tools/README.md recipe. Palette (dark): evening felt green, brass and deep red.
   Home sector: Gambling (listed only there). Every company, maker, pro and product is fictional; places are real.
   CARE (_tools/CARE-BRIEFS.md): casino culture, games explained, resort and entertainment, staying in control.
   18+ on everything. Never real-money flows, bonuses, anything aimed at under-18s or “win big” language.
   Signposts: National Gambling Helpline 0808 8020 133 (free, 24/7); self-exclusion information. */
(function(){
const U = (id, w, h) => `https://images.unsplash.com/photo-${id}?w=${w}&h=${h}&fit=crop&q=75`;
const FELT = 'linear-gradient(135deg,#34D399,#065F46)', BRASS = 'linear-gradient(135deg,#FCD34D,#B45309)', RUBY = 'linear-gradient(135deg,#FCA5A5,#B91C1C)', NIGHT = 'linear-gradient(135deg,#A5B4FC,#3730A3)';

GATEWAYS.casino = {
  name: 'CasinoXX', domain: 'casinoxx.com', emoji: '🎰', sector: 'gambling', live: true,
  tagline: 'The Casino Culture Universe',
  theme: {
    bg: '#0B1411', text: '#F1F5F2', cardBg: '#13201B', cardBorder: 'rgba(241,245,242,.09)',
    headerBg: 'linear-gradient(180deg,#13201B,#0B1411)', accent: '#D4A73A', accentAlt: '#34D399', dark: true
  },
  gradient: 'linear-gradient(135deg,#065F46,#0B1411,#B45309)',
  stats: { members: '2.4M', brands: '380+', agents: '22' },
  spaces: ['All Feed', 'Games Explained', 'Resorts & Shows', 'Staying in Control', 'Behind the Tables', 'History'],
  trending: ['#KnowTheOdds', '#SetALimit', '#18Plus'],
  brandZones: [
    { key: 'harbour-lights-resort', name: 'Harbour Lights Resort', color: '#D4A73A', tier: 'Founding Partner', tag: 'A seaside resort with shows, dining and the odds explained' },
    { key: 'velvet-room-shows', name: 'Velvet Room Shows', color: '#B91C1C', tier: 'Brand Zone', tag: 'Live jazz, cabaret and magic, 18+' },
    { key: 'felt-and-fold', name: 'Felt & Fold', color: '#059669', tier: 'Brand Zone', tag: 'Card tables and games-night sets, for play, not money' },
    { key: 'copper-coupe', name: 'Copper Coupe', color: '#6366F1', tier: 'Brand Zone', tag: 'A cocktail bar with a soft-drinks list as good as the rest' }
  ],
  apps: [
    { name: 'Odds Explainer', color: '#D4A73A', desc: 'See the house edge on every game, in plain numbers', key: 'odds-explainer', url: 'apps/odds-explainer.html',
      dev: 'Harbour Lights Resort', rating: '4.9', users: '640K', perms: ['profile', 'feed'],
      tagline: 'How the odds really work.',
      about: 'Odds Explainer shows how each casino game is built so the house comes out ahead over time. Pick a game and a bet to see the real chance of winning, the payout and what an average £10 stake returns. There is no betting here and no money changes hands. 18+.',
      features: ['Roulette, blackjack, dice and slots', 'Real chance against payout', 'What £10 returns on average', 'Share what you learned'],
      shots: ['apps/odds-explainer/shot-1.jpg', 'apps/odds-explainer/shot-2.jpg', 'apps/odds-explainer/shot-3.jpg'],
      version: '2.4', size: '9 KB',
      updates: [ { v: '2.4', ago: 2, notes: 'Slots explained.' }, { v: '2.0', ago: 64, notes: 'Average return per £10.' }, { v: '1.5', ago: 190, notes: 'Signed in with GENEXXO.' } ],
      reviews: [ { who: '@nights_out_nadia', stars: 5, ago: 1, text: 'I had no idea how thin the margins were for players.' }, { who: '@tomasz_dealer_school', stars: 5, ago: 18, text: 'I show it to every trainee.' }, { who: '@quiet_maths_mo', stars: 4, ago: 40, text: 'Clear and honest.' } ] },
    { name: 'Limit Setter', color: '#34D399', desc: 'Set a spend and time limit before a night out', key: 'limit-setter', url: 'apps/limit-setter.html',
      dev: 'Felt & Fold', rating: '4.8', users: '410K', perms: ['profile', 'feed'],
      tagline: 'Decide before you go.',
      about: 'Limit Setter helps you decide, before you go, how much you can afford to spend on entertainment and how long you’ll stay. It never handles money. If gambling stops being fun, the National Gambling Helpline is free on 0808 8020 133. 18+.',
      features: ['A spend limit you choose', 'A time limit', 'A “why I set it” note', 'Help is one tap away'],
      shots: ['apps/limit-setter/shot-1.jpg', 'apps/limit-setter/shot-2.jpg', 'apps/limit-setter/shot-3.jpg'],
      version: '1.8', size: '8 KB',
      updates: [ { v: '1.8', ago: 3, notes: 'Your own note.' }, { v: '1.4', ago: 70, notes: 'Time limits.' }, { v: '1.0', ago: 200, notes: 'Signed in with GENEXXO.' } ],
      reviews: [ { who: '@nights_out_nadia', stars: 5, ago: 2, text: 'Simple. I set it in the taxi.' }, { who: '@aisha_cole_support', stars: 5, ago: 22, text: 'Good habits, gently.' }, { who: '@quiet_maths_mo', stars: 4, ago: 48, text: 'Does one thing well.' } ] },
    { name: 'Take a Break', color: '#B91C1C', desc: 'A timer that reminds you to step away', key: 'break-timer', url: 'apps/break-timer.html',
      dev: 'Copper Coupe', rating: '4.8', users: '320K', perms: ['profile', 'feed'],
      tagline: 'Step outside. Breathe. Decide.',
      about: 'Take a Break reminds you to step away every so often, check the time and decide whether to carry on. It suggests something else to do for ten minutes, and keeps help one tap away. 18+.',
      features: ['Reminders every 20 to 60 minutes', 'A ten-minute break idea', 'Time out tonight', 'Help one tap away'],
      shots: ['apps/break-timer/shot-1.jpg', 'apps/break-timer/shot-2.jpg', 'apps/break-timer/shot-3.jpg'],
      version: '1.3', size: '8 KB',
      updates: [ { v: '1.3', ago: 1, notes: 'Break ideas.' }, { v: '1.1', ago: 58, notes: 'Time out tonight.' }, { v: '1.0', ago: 160, notes: 'Signed in with GENEXXO.' } ],
      reviews: [ { who: '@aisha_cole_support', stars: 5, ago: 3, text: 'A kind nudge at the right time.' }, { who: '@nights_out_nadia', stars: 5, ago: 26, text: 'Nice to have.' }, { who: '@tomasz_dealer_school', stars: 4, ago: 52, text: 'Useful.' } ] }
  ],
  pros: [
    { key: 'tomasz-dealer-school', name: 'Tomasz Nowak Dealer School', color: '#D4A73A', tag: 'Croupier training and “how the games work” talks', role: 'Croupier trainer',
      img: U('1718209881007-c0ecdfc00f9d', 800, 800), base: 'Liverpool, UK · and online', langs: 'English, Polish', years: 19, rating: '4.9', reviewsN: 186, cur: '£',
      creds: ['Croupier for twelve years', 'Licensed-style dealer trainer', 'Runs “know the odds” talks for adults'],
      about: 'Tomasz trains croupiers and gives talks that show how the games really work: why the house edge exists and what it means for players. Talks are for adults (18+) only and never involve real betting.',
      services: [ { id: 'talk', name: 'How the odds work (group talk)', dur: '1 hour', price: 180, desc: 'For clubs, workplaces and colleges (18+).' },
                  { id: 'course', name: 'Dealer foundation course', dur: 'Five days', price: 650, desc: 'Card and wheel handling, for a career in hospitality.' },
                  { id: 'demo', name: 'Table-craft demo', dur: '45 minutes', price: 90, desc: 'Shuffles, pitches and chip cuts, with practice chips.' } ],
      avail: { days: [2, 3, 4], times: ['11:00', '15:00', '19:00'] },
      reviews: [ { who: '@nights_out_nadia', stars: 5, ago: 2, text: 'An eye-opening hour.' }, { who: '@quiet_maths_mo', stars: 5, ago: 30, text: 'Shows the maths without the hype.' }, { who: '@aisha_cole_support', stars: 5, ago: 60, text: 'Responsible and engaging.' } ],
      posts: [ { ago: 1, text: 'Twelve years on the tables taught me one thing: the wheel has no memory. Red five times in a row tells you nothing about the next spin.' } ],
      tier: 'Pro Zone', verified: true },
    { key: 'quiet-maths-mo', name: 'Maureen Hale, Probability Tutor', color: '#34D399', tag: 'Probability made clear, for curious adults', role: 'Maths tutor',
      img: U('1701096374092-bb70915fdc5c', 800, 800), base: 'Leeds, UK · and online', langs: 'English', years: 14, rating: '5.0', reviewsN: 142, cur: '£',
      creds: ['Maths teacher for ten years', 'Writes plain-English probability guides', 'Adult education tutor'],
      about: 'Maureen explains probability for adults, using games, coin flips and dice. Her “gambler’s fallacy” session is the most popular: why streaks feel meaningful and aren’t.',
      services: [ { id: 'one', name: 'One-to-one session', dur: '1 hour', price: 40, desc: 'Probability, at your pace.' },
                  { id: 'group', name: 'Gambler’s fallacy workshop', dur: '90 minutes', price: 120, desc: 'For groups of adults.' },
                  { id: 'q', name: 'Quick question call', dur: '20 minutes', price: 15, desc: 'One puzzle, explained.' } ],
      avail: { days: [1, 3, 5], times: ['10:00', '18:30'] },
      reviews: [ { who: '@nights_out_nadia', stars: 5, ago: 4, text: 'Finally understood expected value.' }, { who: '@tomasz_dealer_school', stars: 5, ago: 28, text: 'A brilliant explainer.' }, { who: '@aisha_cole_support', stars: 5, ago: 56, text: 'Warm and very clear.' } ],
      posts: [ { ago: 2, text: 'A coin doesn’t know it landed heads last time. Neither does a wheel, a die or a slot machine.' } ],
      tier: 'Pro Zone', verified: true },
    { key: 'aisha-cole-support', name: 'Aisha Cole Counselling', color: '#B91C1C', tag: 'Support when gambling stops being fun', role: 'Counsellor',
      img: U('1609436132311-e4b0c9370469', 800, 800), base: 'Manchester, UK · and online', langs: 'English', years: 11, rating: '4.9', reviewsN: 118, cur: '£',
      creds: ['Registered counsellor', 'Specialist in gambling harms', 'Supports families too'],
      about: 'Aisha supports adults, and their families, when gambling has started to cause harm. For free help any time, call the National Gambling Helpline on 0808 8020 133. You can also ask about self-exclusion from venues and websites.',
      services: [ { id: 'first', name: 'First conversation', dur: '30 minutes', price: 20, desc: 'Talk through what’s happening, in confidence.' },
                  { id: 'session', name: 'Counselling session', dur: '50 minutes', price: 55, desc: 'Weekly, online or in Manchester.' },
                  { id: 'family', name: 'Family session', dur: '1 hour', price: 70, desc: 'For partners and family members.' } ],
      avail: { days: [1, 2, 4], times: ['09:30', '13:00', '18:00'] },
      reviews: [ { who: '@nights_out_nadia', stars: 5, ago: 3, text: 'Kind, never judgemental.' }, { who: '@quiet_maths_mo', stars: 5, ago: 34, text: 'I send people her way.' }, { who: '@tomasz_dealer_school', stars: 5, ago: 64, text: 'Brilliant support.' } ],
      posts: [ { ago: 3, text: 'If you’re hiding how much you spend, that’s a good moment to talk to someone. The National Gambling Helpline is free on 0808 8020 133.' } ],
      tier: 'Pro Zone', verified: true }
  ],
  communities: [
    { key: 'know-the-odds', name: 'Know the Odds', domain: 'odds.casinoxx.com', color: '#D4A73A', img: U('1552749412-091909ed9f82', 900, 500),
      scope: 'Global', where: 'Wherever you are', members: 214000, online: 2180, tagline: 'The maths, the history and the craft. 18+.',
      about: 'Adults who like understanding how casino games work: the maths, the history and the craft of the tables. No tips, no systems, no betting links and nothing for under-18s. If gambling stops being fun, the National Gambling Helpline is free on 0808 8020 133. This is a demo community.',
      rules: ['18+ only', 'No systems, tips or betting links', 'Be kind to anyone asking for help'],
      mods: ['@quiet_maths_mo', '@tomasz_dealer_school'],
      threads: [ { t: 'Why the green zero changes everything', by: '@quiet_maths_mo', tag: 'MATHS', replies: 1240, ago: 0, votes: 2860 }, { t: 'Old card rooms of the 1920s', by: '@tomasz_dealer_school', tag: 'HISTORY', replies: 640, ago: 1, votes: 1480 }, { t: 'How I set my limits for a night out', by: '@nights_out_nadia', tag: 'CONTROL', replies: 920, ago: 2, votes: 2140 }, { t: 'The gambler’s fallacy, in one picture', by: '@quiet_maths_mo', tag: 'MATHS', replies: 760, ago: 3, votes: 1720 } ],
      events: [ { title: 'Live: the maths of roulette', day: 4, time: '19:30', where: 'Online' }, { title: 'History of the card room', day: 13, time: '19:00', where: 'Online' } ] },
    { key: 'liverpool-games-night', name: 'Liverpool Games Night', domain: 'liverpool.casinoxx.com', color: '#34D399', img: U('1765624408968-f50eaac94e2f', 900, 500),
      scope: 'Local', where: 'Liverpool', members: 640, online: 16, tagline: 'Cards, dice and company. No stakes, ever.',
      about: 'Adults around Liverpool who meet to play card and dice games for fun, with practice chips that have no value. 18+, no money on the table and soft drinks always on.',
      rules: ['18+', 'No money on the table, ever', 'Teach newcomers kindly'],
      mods: ['@tomasz_dealer_school', '@nights_out_nadia'],
      threads: [ { t: 'December games night: who’s in?', by: '@nights_out_nadia', tag: 'MEETUP', replies: 28, ago: 0, votes: 64 }, { t: 'Learning blackjack basics, no stakes', by: '@tomasz_dealer_school', tag: 'LEARN', replies: 22, ago: 1, votes: 48 }, { t: 'Thank you for a great first night', by: '@nights_out_nadia', tag: 'THANKS', replies: 14, ago: 2, votes: 40 } ],
      events: [ { title: 'December games night', day: 6, time: '19:00', where: 'Liverpool' }, { title: 'New year games night', day: 41, time: '19:00', where: 'Liverpool' } ] }
  ],
  feed: [
    { av: 'CX', avBg: BRASS, author: 'CasinoXX Editorial', sub: 'Featured · Just now', badge: '★ FEATURED',
      text: 'Casino culture, explained: how the games work, the resorts and shows, the people behind the tables, and how to stay in control. 18+ only. No betting happens here. If gambling stops being fun, call the National Gambling Helpline free on 0808 8020 133.',
      img: U('1517232115160-ff93364542dd', 800, 600), eng: '♡ 16.2K · 💬 1.4K · ↗ 2.2K' },
    { av: 'HL', avBg: BRASS, author: 'Harbour Lights Resort', sub: 'Founding Partner · Brand Zone', badge: 'BRAND ZONE',
      text: 'Live now: “How the odds really work.” Our senior croupier spins the wheel, deals the cards and shows, game by game, why the house always has the edge. 18+. Follow <b>Harbour Lights Resort</b>.',
      img: U('1773335638484-297f95ef33a9', 800, 600), eng: '♡ 12.8K · 💬 1.9K · ↗ 2.1K' },
    { av: 'MH', avBg: FELT, author: 'Maureen Hale, Probability Tutor', sub: 'Games Explained · Just now', badge: 'PRO ZONE',
      text: 'There are 37 numbers on a European wheel but a single number pays 35 to 1. That gap is the house edge: about 2.7p of every pound, every spin, forever.',
      img: U('1653609848250-0de9437393f4', 800, 600), eng: '♡ 8.6K · 💬 980 · ↗ 1.1K' },
    { av: 'VR', avBg: RUBY, author: 'Velvet Room Shows', sub: 'Brand Zone · 1h ago', badge: 'BRAND ZONE',
      text: 'A trumpet on the stage and a late-night set. <b>Velvet Room Jazz Nights</b> are back for December, 18+.',
      img: U('1749157140517-cb25f63cc551', 800, 600), eng: '♡ 5.4K · 💬 380 · ↗ 520' },
    { av: 'NN', avBg: NIGHT, author: '@nights_out_nadia', sub: 'Staying in Control · 2h ago', badge: 'COMMUNITY',
      text: 'My rule for a night out: a set amount for fun, decided at home, and the bank card stays in the hotel safe. The show and the dinner were the best bits anyway.',
      img: U('1641957993107-5337fecc75fa', 800, 600), eng: '♡ 7.2K · 💬 860 · ↗ 540' },
    { av: 'FF', avBg: FELT, author: 'Felt & Fold', sub: 'Brand Zone · 4h ago', badge: 'BRAND ZONE',
      text: 'Practice chips with no cash value, a fold-out felt and a rule book. The <b>Games Night Set</b>: learn the games at home, for fun.',
      img: U('1542145272-597f274b38ab', 800, 600), eng: '♡ 4.2K · 💬 260 · ↗ 380' },
    { av: 'TN', avBg: BRASS, author: 'Tomasz Nowak Dealer School', sub: 'Behind the Tables · 6h ago', badge: 'PRO ZONE',
      text: 'A croupier’s first lesson is the chip cut: twenty chips, split into even stacks by feel. My trainees practise it for weeks before they ever deal a hand.',
      img: U('1714865212999-a9817814b080', 800, 600), eng: '♡ 4.8K · 💬 320 · ↗ 410' }
  ],
  prompts: ['How does the house edge work?', 'How do I set a spend limit?', 'What is self-exclusion?', 'What does a croupier actually do?'],
  businesses: ['fairplay-academy', 'safer-play-partners']
};

/* the four Brand Zones and two Business Zones */
const brand = (o) => Object.assign({ kind: 'brand', gw: 'casino', verified: true }, o);
Object.assign(ZONES, {
  'harbour-lights-resort': brand({ key: 'harbour-lights-resort', name: 'Harbour Lights Resort', color: '#D4A73A', gradient: BRASS, tier: 'Founding Partner',
    tagline: 'A seaside resort with shows, dining and the odds explained', stats: { followers: '204K', content: '480', products: '12' },
    ad: { badge: 'Featured', img: U('1785910723802-99967d4fa265', 760, 760), hl: 'An evening by the sea.', sub: 'Shows, dining and a spa. Adults 18+ on the gaming floor.', meta: 'From £140 a night' },
    products: [
      { name: 'Seaview Room', price: 'From £140 a night', tag: 'FLAGSHIP', emoji: '🌊', rating: 4.8, reviews: 3240, cat: 'stay', special: true, desc: 'A room with a sea view and breakfast.', features: ['Breakfast included', 'Late checkout'], review: { who: 'Nadia K.', text: 'We spent most of the stay at the spa.' } },
      { name: 'Dinner & Show', price: '£68 per person', tag: 'BESTSELLER', emoji: '🎭', rating: 4.8, reviews: 2160, cat: 'evenings', desc: 'Three courses, then a seat for the evening show.', features: ['18+ evenings'], review: { who: 'Mo H.', text: 'A lovely night out.' } },
      { name: 'Spa Afternoon', price: '£45', emoji: '🧖', rating: 4.7, reviews: 1180, cat: 'stay', desc: 'Pool, sauna and a twenty-minute treatment.', features: ['Robe and towels'], review: { who: 'Aisha C.', text: 'So relaxing.' } },
      { name: 'Odds Explained Tour', price: '£12', tag: 'SPECIAL', emoji: '🎓', rating: 4.9, reviews: 640, cat: 'evenings', special: true, desc: 'A croupier shows how each game works. No betting.', features: ['18+', 'Practice chips only'], review: { who: 'Tomasz N.', text: 'The most honest hour in hospitality.' } }
    ],
    shopCats: [ { key: 'stay', label: 'Stay', icon: '🌊' }, { key: 'evenings', label: 'Evenings', icon: '🎭' } ],
    feed: [
      { type: 'post', sub: 'Brand post · 2h', text: 'The pool lights come on at dusk. A <b>Seaview Room</b> with breakfast.', img: U('1560200353-ce0a76b1d438', 800, 440), eng: '♡ 12.8K · 💬 1.9K · ↗ 2.1K', product: 0 },
      { type: 'community', who: 'Nadia K.', whoBg: BRASS, sub: 'Community · 1d', text: 'Do you have help if someone wants to stop?', eng: '♡ 620 · 💬 180', reply: 'Hi Nadia. Yes: any guest can set limits or ask to self-exclude at reception, no questions asked, and our team can share the National Gambling Helpline (free, 0808 8020 133). 💛' }
    ],
    events: [ { zoneEvent: true, tag: 'LIVE', title: 'Harbour Lights Live · how the odds really work', when: 'Live now', desc: 'A croupier shows, game by game, why the house has the edge. 18+.', registered: 6840, capacity: 16000 } ],
    about: { founded: 'Liverpool · 2009', story: 'A seaside resort that believes guests should understand the games before they play. We joined CasinoXX as Founding Partner to explain the odds honestly, and to keep help easy to find.', milestones: [['2009', 'Opened'], ['2018', 'Odds Explained Tours'], ['2026', 'Founding Partner on CasinoXX']], values: ['Honest odds', 'Adults only', 'Help easy to find'] } }),

  'velvet-room-shows': brand({ key: 'velvet-room-shows', name: 'Velvet Room Shows', color: '#B91C1C', gradient: RUBY, tier: 'Brand Zone',
    tagline: 'Live jazz, cabaret and magic, 18+', stats: { followers: '96.4K', content: '260', products: '18' },
    ad: { badge: 'December', img: U('1575444758702-4a6b9222336e', 760, 760), hl: 'Late shows, warm lights.', sub: 'Jazz, cabaret and close-up magic.', meta: 'From £22' },
    products: [
      { name: 'Jazz Night Ticket', price: '£28', tag: 'FLAGSHIP', emoji: '🎺', rating: 4.9, reviews: 1460, cat: 'shows', special: true, desc: 'A late-night set with a five-piece band.', features: ['18+', 'Table seating'], review: { who: 'Mo H.', text: 'Superb band.' } },
      { name: 'Cabaret Evening', price: '£34', tag: 'BESTSELLER', emoji: '🎭', rating: 4.8, reviews: 1080, cat: 'shows', desc: 'Song, comedy and a little sparkle.', features: ['18+'], review: { who: 'Nadia K.', text: 'Laughed all night.' } },
      { name: 'Close-up Magic', price: '£22', emoji: '🃏', rating: 4.8, reviews: 760, cat: 'magic', desc: 'Card magic at your table.', features: ['Forty-five minutes'], review: { who: 'Tomasz N.', text: 'Even I was fooled.' } },
      { name: 'Gift Voucher', price: '£30', tag: 'SPECIAL', emoji: '🎁', rating: 4.9, reviews: 420, cat: 'magic', special: true, desc: 'Any show, any night.', features: ['Valid twelve months'], review: { who: 'Aisha C.', text: 'A lovely present.' } }
    ],
    shopCats: [ { key: 'shows', label: 'Shows', icon: '🎺' }, { key: 'magic', label: 'Magic & gifts', icon: '🃏' } ],
    feed: [ { type: 'post', sub: 'Brand post · 1d', text: 'A packed bar before the first set. <b>Jazz Night</b> starts at nine.', img: U('1578911489158-334e5cd2a051', 800, 440), eng: '♡ 5.4K · 💬 380', product: 0 } ],
    events: [ { zoneEvent: true, tag: 'EVENT', title: 'Velvet Room Jazz Nights return', when: 'Dec 4 · 21:00', desc: 'A five-piece band, late. 18+.', registered: 1240, capacity: 3000 } ],
    about: { founded: 'Manchester · 2014', story: 'Musicians and magicians who wanted a proper stage for late-night shows.', milestones: [['2014', 'The first show'], ['2022', 'Cabaret'], ['2026', 'Brand Zone on CasinoXX']], values: ['Live music', 'Fair prices', 'A great night'] } }),

  'felt-and-fold': brand({ key: 'felt-and-fold', name: 'Felt & Fold', color: '#059669', gradient: FELT, tier: 'Brand Zone',
    tagline: 'Card tables and games-night sets, for play, not money', stats: { followers: '72.6K', content: '180', products: '28' },
    ad: { badge: 'New', img: U('1774660980275-3a2e7100a1fa', 760, 760), hl: 'Games night, at home.', sub: 'Practice chips with no cash value. 18+.', meta: 'From £18' },
    products: [
      { name: 'Games Night Set', price: '£45', tag: 'FLAGSHIP', emoji: '🎲', rating: 4.8, reviews: 1640, cat: 'sets', special: true, desc: 'Practice chips, a fold-out felt, two decks and a rule book.', features: ['No cash value', '18+'], review: { who: 'Nadia K.', text: 'Our new Friday ritual.' } },
      { name: 'Fold-out Felt', price: '£28', tag: 'BESTSELLER', emoji: '🟩', rating: 4.7, reviews: 980, cat: 'tables', desc: 'A green felt that fits any dining table.', features: ['Washable'], review: { who: 'Tomasz N.', text: 'Proper feel.' } },
      { name: 'Dice Set', price: '£18', emoji: '🎲', rating: 4.7, reviews: 640, cat: 'sets', desc: 'Weighted dice and a felt tray.', features: ['Five dice'], review: { who: 'Mo H.', text: 'Great for probability lessons.' } },
      { name: 'Folding Card Table', price: '£120', tag: 'SPECIAL', emoji: '🪑', rating: 4.8, reviews: 420, cat: 'tables', special: true, desc: 'An oak table with a green top that folds away.', features: ['Seats six'], review: { who: 'Aisha C.', text: 'Beautiful made.' } }
    ],
    shopCats: [ { key: 'sets', label: 'Sets', icon: '🎲' }, { key: 'tables', label: 'Tables', icon: '🟩' } ],
    feed: [ { type: 'post', sub: 'Brand post · 3h', text: 'A hand of cards and a pile of practice chips. The <b>Games Night Set</b>: all the fun, none of the stakes.', img: U('1596451190630-186aff535bf2', 800, 440), eng: '♡ 4.2K · 💬 260', product: 0 } ],
    events: [ { zoneEvent: true, tag: 'EVENT', title: 'Learn the games, live online', when: 'Dec 7 · 19:30', desc: 'Rules explained with practice chips. 18+.', registered: 720, capacity: 2000 } ],
    about: { founded: 'Sheffield · 2016', story: 'Two furniture makers who loved games nights and wanted kit that keeps money off the table.', milestones: [['2016', 'The first table'], ['2021', 'Games Night Set'], ['2026', 'Brand Zone on CasinoXX']], values: ['Play, not money', 'Made to last', 'Adults only'] } }),

  'copper-coupe': brand({ key: 'copper-coupe', name: 'Copper Coupe', color: '#6366F1', gradient: NIGHT, tier: 'Brand Zone',
    tagline: 'A cocktail bar with a soft-drinks list as good as the rest', stats: { followers: '58.2K', content: '160', products: '24' },
    ad: { badge: 'Featured', img: U('1605270012917-bf157c5a9541', 760, 760), hl: 'Mixed with care.', sub: 'Cocktails and alcohol-free drinks, made properly.', meta: 'From £6' },
    products: [
      { name: 'House Coupe', price: '£11', tag: 'FLAGSHIP', emoji: '🍸', rating: 4.8, reviews: 1240, cat: 'drinks', special: true, desc: 'Our signature, served cold in a copper-rimmed glass.', features: ['18+'], review: { who: 'Nadia K.', text: 'Perfect start to the evening.' } },
      { name: 'Alcohol-free Spritz', price: '£6', tag: 'BESTSELLER', emoji: '🍹', rating: 4.9, reviews: 980, cat: 'free', desc: 'Bitter orange, soda and rosemary.', features: ['0%'], review: { who: 'Aisha C.', text: 'Better than most cocktails.' } },
      { name: 'Cocktail Class', price: '£38', emoji: '🧑‍🍳', rating: 4.8, reviews: 540, cat: 'drinks', desc: 'Make three drinks with our bartenders.', features: ['18+', 'Ninety minutes'], review: { who: 'Mo H.', text: 'Great fun.' } },
      { name: 'Zero-proof Flight', price: '£14', tag: 'SPECIAL', emoji: '🥂', rating: 4.8, reviews: 360, cat: 'free', special: true, desc: 'Three alcohol-free drinks to try.', features: ['0%'], review: { who: 'Tomasz N.', text: 'Clever and delicious.' } }
    ],
    shopCats: [ { key: 'drinks', label: 'Cocktails', icon: '🍸' }, { key: 'free', label: 'Alcohol-free', icon: '🍹' } ],
    feed: [ { type: 'post', sub: 'Brand post · 5h', text: 'A slow pour under the purple lights. The <b>House Coupe</b>.', img: U('1566417713940-fe7c737a9ef2', 800, 440), eng: '♡ 3.6K · 💬 210', product: 0 } ],
    events: [ { zoneEvent: true, tag: 'EVENT', title: 'Zero-proof Thursdays', when: 'Dec 10 · 18:00', desc: 'Alcohol-free cocktails, half price.', registered: 540, capacity: 1400 } ],
    about: { founded: 'Liverpool · 2019', story: 'Bartenders who believe the alcohol-free list deserves the same care as the rest.', milestones: [['2019', 'Opened'], ['2023', 'Zero-proof menu'], ['2026', 'Brand Zone on CasinoXX']], values: ['Care in every glass', 'Drink responsibly', 'Everyone welcome'] } }),

  'fairplay-academy': { key: 'fairplay-academy', kind: 'business', gw: 'casino', name: 'Fairplay Academy', color: '#D4A73A', gradient: BRASS, img: U('1592398191853-bfc54477c4d0', 900, 500),
    tier: 'Verified', category: 'Croupier and hospitality training', tagline: 'Training dealers who explain the games honestly.',
    about: { founded: 'Liverpool · 2012', story: 'A training school for croupiers and casino hospitality staff, with responsible-gambling training built into every course. Courses are for adults (18+).' },
    stats: { years: 14, staff: 22, clients: '3,400 trainees' },
    caps: [ { name: 'Dealer courses', detail: 'Cards and wheel, five days.' }, { name: 'Responsible-gambling training', detail: 'Spotting harm and offering help.' }, { name: 'Venue training', detail: 'On-site for resorts and clubs.' } ],
    specs: { moq: 'One trainee', lead: '2 to 4 weeks', regions: 'UK', certs: ['18+ only', 'Practice chips only', 'Safer-gambling module in every course'] },
    supplies: [ { kind: 'brand', key: 'harbour-lights-resort', what: 'Dealer and floor-staff training' } ],
    cases: [ { title: 'Help, offered kindly', text: 'Every Harbour Lights dealer now knows how to share the National Gambling Helpline.' } ],
    feed: [ { sub: 'Team · 3d', text: 'January dealer course: places open.' } ],
    contact: { person: 'Grace Okafor, Courses', response: 'Replies within one working day' } },

  'safer-play-partners': { key: 'safer-play-partners', kind: 'business', gw: 'casino', name: 'Safer Play Partners', color: '#34D399', gradient: FELT, img: U('1542145177-4dc9b8029711', 900, 500),
    tier: 'Verified', category: 'Safer-gambling consultancy', tagline: 'Helping venues keep help easy to find.',
    about: { founded: 'Manchester · 2015', story: 'We help venues design safer-gambling policies, train staff and make self-exclusion simple. If you need help yourself, call the National Gambling Helpline free on 0808 8020 133.' },
    stats: { years: 11, staff: 16, clients: '220 venues supported' },
    caps: [ { name: 'Policy reviews', detail: 'Limits, breaks and self-exclusion.' }, { name: 'Staff training', detail: 'Conversations that help.' }, { name: 'Signage', detail: 'Clear help signs and 18+ checks.' } ],
    specs: { moq: 'One venue', lead: '2 to 6 weeks', regions: 'UK', certs: ['Independent', 'No gambling marketing', 'Signposting to free help'] },
    supplies: [ { kind: 'brand', key: 'harbour-lights-resort', what: 'Safer-gambling policy and signage' } ],
    cases: [ { title: 'Breaks that work', text: 'A seaside venue added break reminders and saw longer, calmer visits.' } ],
    feed: [ { sub: 'Team · 5d', text: 'Our new guide to self-exclusion is free to download.' } ],
    contact: { person: 'Daniel Price, Venues', response: 'Replies within two working days' } }
});

/* events in the Events tab */
gxEvents('casino', [
  { gw: 'casino', zone: 'harbour-lights-resort', type: 'Live', icon: '🔴', live: true, time: 'Live Now', title: 'Harbour Lights Live · how the odds really work', desc: 'A croupier shows why the house has the edge. 18+.' },
  { gw: 'casino', type: 'Event', icon: '🎡', time: 'Dec 2', title: 'Live: the maths of roulette', desc: 'Know the Odds explains the green zero. 18+.' },
  { gw: 'casino', zone: 'velvet-room-shows', type: 'Event', icon: '🎺', time: 'Dec 4', title: 'Velvet Room Jazz Nights return', desc: 'A five-piece band, late. 18+.' },
  { gw: 'casino', type: 'Event', icon: '🃏', time: 'Dec 4', title: 'Liverpool Games Night: December', desc: 'Cards and dice for fun. No stakes, 18+.' },
  { gw: 'casino', zone: 'felt-and-fold', type: 'Event', icon: '🎲', time: 'Dec 7', title: 'Learn the games, live online', desc: 'Rules explained with practice chips. 18+.' },
  { gw: 'casino', type: 'Event', icon: '🧮', time: 'Dec 8', title: 'The gambler’s fallacy, with Maureen Hale', desc: 'Why streaks feel meaningful and aren’t.' },
  { gw: 'casino', zone: 'copper-coupe', type: 'Event', icon: '🍹', time: 'Dec 10', title: 'Zero-proof Thursdays', desc: 'Alcohol-free cocktails, half price.' },
  { gw: 'casino', type: 'Event', icon: '💬', time: 'Dec 11', title: 'Staying in control: a conversation', desc: 'Aisha Cole on limits, breaks and getting help.' }
]);
})();
/* ═════════ /CASINOXX ═════════ */
