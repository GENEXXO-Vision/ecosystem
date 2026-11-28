/* ═════════ ELECTIONXX — a Government demo gateway (2026-11-28, Sean; build -101) ═════════
   Built with the _tools/README.md recipe. Palette (light): ballot-paper white, civic navy, polling-card purple.
   Home sector: Government (listed only there). Every company, maker, pro and product is fictional; places are real.
   CARE (_tools/CARE-BRIEFS.md): how voting works: registering, polling day, counts, local councils. Strictly non-partisan.
   Never real parties, candidates or policies; no persuasion; no predictions.
   Signposts: Gov.uk register to vote; the Electoral Commission as a neutral source. */
(function(){
const U = (id, w, h) => `https://images.unsplash.com/photo-${id}?w=${w}&h=${h}&fit=crop&q=75`;
const NAVY = 'linear-gradient(135deg,#93C5FD,#1E3A8A)', PLUM = 'linear-gradient(135deg,#D8B4FE,#6B21A8)', TEAL = 'linear-gradient(135deg,#5EEAD4,#0F766E)', STONE = 'linear-gradient(135deg,#E7E5E4,#57534E)';

GATEWAYS.election = {
  name: 'ElectionXX', domain: 'electionxx.com', emoji: '🗳️', sector: 'government', live: true,
  tagline: 'The How Voting Works Universe',
  theme: {
    bg: '#F6F7FB', text: '#0F172A', cardBg: '#FFFFFF', cardBorder: 'rgba(15,23,42,.08)',
    headerBg: 'linear-gradient(180deg,#FFFFFF,#F6F7FB)', accent: '#1E3A8A', accentAlt: '#6B21A8', dark: false
  },
  gradient: 'linear-gradient(135deg,#1E3A8A,#6B21A8,#93C5FD)',
  stats: { members: '1.6M', brands: '310+', agents: '20' },
  spaces: ['All Feed', 'Registering', 'Polling Day', 'The Count', 'Local Councils', 'Access'],
  trending: ['#RegisterToVote', '#PollingDay', '#HowTheCountWorks'],
  brandZones: [
    { key: 'ballot-bridge', name: 'Ballot Bridge', color: '#1E3A8A', tier: 'Founding Partner', tag: 'A non-partisan charity explaining how voting works' },
    { key: 'civic-kit', name: 'Civic Kit', color: '#6B21A8', tier: 'Brand Zone', tag: 'Mock-election kits for classrooms and youth groups' },
    { key: 'town-hall-tours', name: 'Town Hall Tours', color: '#57534E', tier: 'Brand Zone', tag: 'Behind the doors of Britain’s civic buildings' },
    { key: 'plainword-press', name: 'Plainword Press', color: '#0F766E', tier: 'Brand Zone', tag: 'Easy-read guides to how democracy works' }
  ],
  apps: [
    { name: 'Register Checklist', color: '#1E3A8A', desc: 'Are you registered? What you need, step by step', key: 'register-checklist', url: 'apps/register-checklist.html',
      dev: 'Ballot Bridge', rating: '4.9', users: '720K', perms: ['profile', 'feed'],
      tagline: 'Ready to vote in five minutes.',
      about: 'Register Checklist walks you through registering to vote: who can register, what you’ll need (like your National Insurance number) and the deadline before polling day. The real registration happens on Gov.uk; this app helps you get ready. Non-partisan.',
      features: ['Who can register', 'What you’ll need', 'Moved home? Students?', 'Share that you’re ready'],
      shots: ['apps/register-checklist/shot-1.jpg', 'apps/register-checklist/shot-2.jpg', 'apps/register-checklist/shot-3.jpg'],
      version: '2.2', size: '9 KB',
      updates: [ { v: '2.2', ago: 2, notes: 'Students and two addresses.' }, { v: '1.8', ago: 66, notes: 'Photo ID step.' }, { v: '1.2', ago: 200, notes: 'Signed in with GENEXXO.' } ],
      reviews: [ { who: '@first_vote_femi', stars: 5, ago: 1, text: 'Registered in five minutes after this.' }, { who: '@mr_doyle_civics', stars: 5, ago: 16, text: 'I use it with every sixth-form group.' }, { who: '@access_for_all_ruth', stars: 4, ago: 38, text: 'Clear and calm.' } ] },
    { name: 'Ballot Explainer', color: '#6B21A8', desc: 'What’s on my ballot paper, and how do I fill it in?', key: 'ballot-explainer', url: 'apps/ballot-explainer.html',
      dev: 'Plainword Press', rating: '4.8', users: '460K', perms: ['profile', 'feed'],
      tagline: 'One cross, or numbers? Know before you go.',
      about: 'Ballot Explainer shows the different kinds of election in the UK, what each ballot paper looks like and how to mark it so your vote counts. It uses made-up example candidates and never recommends anyone. For official information, see the Electoral Commission.',
      features: ['Election types explained', 'Practise on an example ballot', 'Spoilt ballots explained', 'Share what you learned'],
      shots: ['apps/ballot-explainer/shot-1.jpg', 'apps/ballot-explainer/shot-2.jpg', 'apps/ballot-explainer/shot-3.jpg'],
      version: '1.7', size: '9 KB',
      updates: [ { v: '1.7', ago: 3, notes: 'Practice ballot.' }, { v: '1.3', ago: 72, notes: 'Mayoral elections.' }, { v: '1.0', ago: 190, notes: 'Signed in with GENEXXO.' } ],
      reviews: [ { who: '@first_vote_femi', stars: 5, ago: 2, text: 'I was nervous about getting it wrong. Not now.' }, { who: '@access_for_all_ruth', stars: 5, ago: 22, text: 'Easy-read and fair.' }, { who: '@mr_doyle_civics', stars: 4, ago: 46, text: 'Good for lessons.' } ] },
    { name: 'Polling Day Planner', color: '#0F766E', desc: 'When, where, and what to bring on the day', key: 'polling-day-planner', url: 'apps/polling-day-planner.html',
      dev: 'Civic Kit', rating: '4.8', users: '380K', perms: ['profile', 'feed'],
      tagline: 'Polls open 7am to 10pm.',
      about: 'Polling Day Planner helps you plan the day: when you’ll go, how you’ll get there, the photo ID you’ll need and what help is available at the polling station. Your polling station is on your poll card. Non-partisan.',
      features: ['Pick a time to vote', 'Photo ID check', 'Help at the polling station', 'Share that you voted'],
      shots: ['apps/polling-day-planner/shot-1.jpg', 'apps/polling-day-planner/shot-2.jpg', 'apps/polling-day-planner/shot-3.jpg'],
      version: '1.5', size: '8 KB',
      updates: [ { v: '1.5', ago: 1, notes: 'Access help.' }, { v: '1.2', ago: 60, notes: 'Photo ID check.' }, { v: '1.0', ago: 170, notes: 'Signed in with GENEXXO.' } ],
      reviews: [ { who: '@access_for_all_ruth', stars: 5, ago: 3, text: 'Lists every kind of help. Brilliant.' }, { who: '@first_vote_femi', stars: 5, ago: 24, text: 'Simple.' }, { who: '@mr_doyle_civics', stars: 4, ago: 50, text: 'Useful reminder.' } ] }
  ],
  pros: [
    { key: 'mr-doyle-civics', name: 'Owen Doyle Citizenship Teaching', color: '#1E3A8A', tag: 'Citizenship lessons and mock elections for schools', role: 'Citizenship teacher',
      img: U('1676989880361-091e12efc056', 800, 800), base: 'Leeds, UK · and online', langs: 'English, Welsh', years: 16, rating: '4.9', reviewsN: 174, cur: '£',
      creds: ['Citizenship teacher for sixteen years', 'Runs school mock elections', 'Non-partisan in every lesson'],
      about: 'Owen helps schools and youth groups run mock elections and lessons on how voting works. He never discusses real parties or candidates: the lessons use invented ones so the focus stays on the process.',
      services: [ { id: 'lesson', name: 'How voting works lesson', dur: '1 hour', price: 90, desc: 'For a class of up to thirty.' },
                  { id: 'mock', name: 'Mock election day', dur: 'Half day', price: 240, desc: 'Ballot boxes, booths and a count.' },
                  { id: 'cpd', name: 'Teacher training', dur: '90 minutes', price: 150, desc: 'Teaching elections without taking sides.' } ],
      avail: { days: [1, 2, 4], times: ['09:00', '13:30', '16:00'] },
      reviews: [ { who: '@first_vote_femi', stars: 5, ago: 2, text: 'The mock count was the best day of sixth form.' }, { who: '@access_for_all_ruth', stars: 5, ago: 28, text: 'Fair, fun and clear.' }, { who: '@helen_park_counts', stars: 5, ago: 58, text: 'Students leave ready to vote.' } ],
      posts: [ { ago: 1, text: 'My Year 12s ran a full mock count today: verification first, then sorting, then counting in bundles of twenty-five. They were amazed how careful it is.' } ],
      tier: 'Pro Zone', verified: true },
    { key: 'helen-park-counts', name: 'Helen Park Election Training', color: '#6B21A8', tag: 'Training polling-station and count staff', role: 'Elections trainer',
      img: U('1582896911227-c966f6e7fb93', 800, 800), base: 'Birmingham, UK · and online', langs: 'English, Korean', years: 21, rating: '5.0', reviewsN: 136, cur: '£',
      creds: ['Twenty years in council electoral services', 'Trains presiding officers and count staff', 'Writes plain-English training guides'],
      about: 'Helen trains the people who run polling stations and counts: presiding officers, poll clerks and count assistants. Her public talks explain what happens to your ballot paper after the polls close.',
      services: [ { id: 'staff', name: 'Polling-station staff training', dur: '2 hours', price: 160, desc: 'For council teams.' },
                  { id: 'count', name: 'Count assistant training', dur: '2 hours', price: 160, desc: 'Verification and counting, step by step.' },
                  { id: 'talk', name: 'Public talk: after the polls close', dur: '1 hour', price: 80, desc: 'For community groups.' } ],
      avail: { days: [2, 3, 5], times: ['10:00', '14:00'] },
      reviews: [ { who: '@mr_doyle_civics', stars: 5, ago: 4, text: 'The clearest explanation of a count I’ve heard.' }, { who: '@first_vote_femi', stars: 5, ago: 30, text: 'Fascinating.' }, { who: '@access_for_all_ruth', stars: 5, ago: 60, text: 'Thorough and kind.' } ],
      posts: [ { ago: 2, text: 'Before a single vote is counted, every ballot box is opened in front of observers and its papers checked against the number issued. That step is called verification.' } ],
      tier: 'Pro Zone', verified: true },
    { key: 'access-for-all-ruth', name: 'Ruth Adeyemi Access Advice', color: '#0F766E', tag: 'Making voting accessible for everyone', role: 'Accessibility adviser',
      img: U('1652471943570-f3590a4e52ed', 800, 800), base: 'Bristol, UK · and online', langs: 'English, BSL', years: 12, rating: '4.9', reviewsN: 98, cur: '£',
      creds: ['Disability access consultant', 'BSL user', 'Advises councils on accessible polling'],
      about: 'Ruth advises councils and charities on making voting accessible: step-free polling stations, large-print ballots, tactile voting devices and helping people know the support they can ask for.',
      services: [ { id: 'audit', name: 'Polling station access check', dur: 'Half day', price: 220, desc: 'For councils, before polling day.' },
                  { id: 'talk', name: 'Your rights at the polling station', dur: '1 hour', price: 60, desc: 'For disability groups.' },
                  { id: 'q', name: 'Quick question call', dur: '20 minutes', price: 15, desc: 'One access question, answered.' } ],
      avail: { days: [1, 3, 4], times: ['11:00', '15:30'] },
      reviews: [ { who: '@first_vote_femi', stars: 5, ago: 3, text: 'My gran voted on her own for the first time.' }, { who: '@helen_park_counts', stars: 5, ago: 34, text: 'Every council should book Ruth.' }, { who: '@mr_doyle_civics', stars: 5, ago: 62, text: 'Practical and warm.' } ],
      posts: [ { ago: 3, text: 'You can ask polling-station staff for a large-print sample ballot, a tactile voting device or a chair. You can also bring someone to help you. Just ask.' } ],
      tier: 'Pro Zone', verified: true }
  ],
  communities: [
    { key: 'first-time-voters', name: 'First-Time Voters', domain: 'first.electionxx.com', color: '#1E3A8A', img: U('1540910419892-4a36d2c3266c', 900, 500),
      scope: 'Global', where: 'Wherever you are', members: 186000, online: 2040, tagline: 'Every question welcome. No sides, ever.',
      about: 'New voters asking how it all works: registering, polling day, postal votes and what happens at a count. No real parties, candidates or campaigning, and no predictions. To register, use Gov.uk; the Electoral Commission has neutral information on every election. This is a demo community.',
      rules: ['No party politics or campaigning', 'No predictions', 'Every question is a good one'],
      mods: ['@mr_doyle_civics', '@first_vote_femi'],
      threads: [ { t: 'What happens if I make a mistake on my ballot?', by: '@first_vote_femi', tag: 'POLLING DAY', replies: 1180, ago: 0, votes: 2640 }, { t: 'Registering at uni and at home: is that allowed?', by: '@first_vote_femi', tag: 'REGISTERING', replies: 860, ago: 1, votes: 1920 }, { t: 'Which photo ID counts?', by: '@access_for_all_ruth', tag: 'ID', replies: 740, ago: 2, votes: 1680 }, { t: 'Postal votes, explained simply', by: '@helen_park_counts', tag: 'POSTAL', replies: 520, ago: 3, votes: 1240 } ],
      events: [ { title: 'Live: ask anything about registering', day: 3, time: '19:00', where: 'Online' }, { title: 'How a count works, start to finish', day: 12, time: '19:30', where: 'Online' } ] },
    { key: 'leeds-civic-circle', name: 'Leeds Civic Circle', domain: 'leeds.electionxx.com', color: '#6B21A8', img: U('1681642048065-0c48ffa31e47', 900, 500),
      scope: 'Local', where: 'Leeds', members: 540, online: 14, tagline: 'Curious about how Leeds is run. Tea and no politics.',
      about: 'People around Leeds who want to understand how the council works: who decides what, how meetings run and how to have your say. Strictly non-partisan, with tea.',
      rules: ['No party politics', 'Questions, not campaigns', 'Everyone welcome'],
      mods: ['@mr_doyle_civics', '@helen_park_counts'],
      threads: [ { t: 'December meet-up: how a council meeting works', by: '@mr_doyle_civics', tag: 'MEETUP', replies: 26, ago: 0, votes: 58 }, { t: 'Can anyone watch a council meeting?', by: '@first_vote_femi', tag: 'QUESTION', replies: 20, ago: 1, votes: 44 }, { t: 'Thanks for the town hall tour', by: '@helen_park_counts', tag: 'THANKS', replies: 12, ago: 2, votes: 36 } ],
      events: [ { title: 'December meet-up: council meetings explained', day: 5, time: '18:30', where: 'Leeds' }, { title: 'New year town hall walk', day: 42, time: '11:00', where: 'Leeds' } ] }
  ],
  feed: [
    { av: 'EX', avBg: NAVY, author: 'ElectionXX Editorial', sub: 'Featured · Just now', badge: '★ FEATURED',
      text: 'How voting works in the UK: registering, polling day, the count and your local council, explained without taking sides. We never discuss real parties, candidates or policies. To register, go to Gov.uk; for neutral information on every election, see the Electoral Commission.',
      img: U('1720128401402-81c9dc339870', 800, 600), eng: '♡ 14.8K · 💬 1.2K · ↗ 2.6K' },
    { av: 'BB', avBg: NAVY, author: 'Ballot Bridge', sub: 'Founding Partner · Brand Zone', badge: 'BRAND ZONE',
      text: 'Live now: an election-night explainer from a practice count in Leeds. How ballot boxes are verified, how votes are sorted and counted, and who checks it all. No parties, no predictions. Follow <b>Ballot Bridge</b>.',
      img: U('1494172892981-ce47ca685eea', 800, 600), eng: '♡ 11.6K · 💬 1.6K · ↗ 2.4K' },
    { av: 'FF', avBg: PLUM, author: '@first_vote_femi', sub: 'Polling Day · Just now', badge: 'COMMUNITY',
      text: 'Turned eighteen in the summer and registered last night. It took four minutes. I didn’t know you need your National Insurance number, so have it handy.',
      img: U('1595126731003-755959b6baf8', 800, 600), eng: '♡ 8.2K · 💬 940 · ↗ 1.1K' },
    { av: 'CK', avBg: PLUM, author: 'Civic Kit', sub: 'Brand Zone · 1h ago', badge: 'BRAND ZONE',
      text: 'A ballot box, two booths and made-up candidates. The <b>Mock Election Kit</b> lets a class run polling day and the count, start to finish.',
      img: U('1730808822974-b21a29d64055', 800, 600), eng: '♡ 4.8K · 💬 320 · ↗ 480' },
    { av: 'HP', avBg: PLUM, author: 'Helen Park Election Training', sub: 'The Count · 2h ago', badge: 'PRO ZONE',
      text: 'Polling stations open at 7am and close at 10pm. If you’re in the queue at 10pm, you can still vote. That one surprises people every time.',
      img: U('1466780446965-2072a3de8a43', 800, 600), eng: '♡ 6.4K · 💬 620 · ↗ 880' },
    { av: 'TH', avBg: STONE, author: 'Town Hall Tours', sub: 'Brand Zone · 4h ago', badge: 'BRAND ZONE',
      text: 'A clock tower, a council chamber and a hundred and fifty years of local decisions. <b>Birmingham Civic Tour</b>, every Saturday.',
      img: U('1781200596688-4ce0e249eaa2', 800, 600), eng: '♡ 3.6K · 💬 220 · ↗ 340' },
    { av: 'RA', avBg: TEAL, author: 'Ruth Adeyemi Access Advice', sub: 'Access · 6h ago', badge: 'PRO ZONE',
      text: 'Every polling station must be accessible, and staff can help. If something isn’t right on the day, tell the presiding officer, then your council’s electoral services team.',
      img: U('1571609549239-bf07fb79f702', 800, 600), eng: '♡ 4.4K · 💬 280 · ↗ 420' }
  ],
  prompts: ['How do I register to vote?', 'What photo ID do I need?', 'What happens at an election count?', 'How do I fill in my ballot paper?'],
  businesses: ['tellerwise-events', 'clearballot-design']
};

/* the four Brand Zones and two Business Zones */
const brand = (o) => Object.assign({ kind: 'brand', gw: 'election', verified: true }, o);
Object.assign(ZONES, {
  'ballot-bridge': brand({ key: 'ballot-bridge', name: 'Ballot Bridge', color: '#1E3A8A', gradient: NAVY, tier: 'Founding Partner',
    tagline: 'A non-partisan charity explaining how voting works', stats: { followers: '168K', content: '420', products: '8' },
    ad: { badge: 'Featured', img: U('1720128401458-5e855a8dabb6', 760, 760), hl: 'Your vote, explained.', sub: 'Plain-English guides to registering and polling day.', meta: 'Free guides' },
    products: [
      { name: 'Polling Day Guide', price: '£3', tag: 'FLAGSHIP', emoji: '🗳️', rating: 4.9, reviews: 2840, cat: 'guides', special: true, desc: 'Everything about polling day in twelve pages.', features: ['Easy-read', 'Large print'], review: { who: 'Femi A.', text: 'Read it on the bus to vote.' } },
      { name: 'Community Talk', price: '£60', tag: 'BESTSELLER', emoji: '🎤', rating: 4.8, reviews: 1240, cat: 'talks', desc: 'A volunteer explains voting to your group.', features: ['One hour', 'Non-partisan'], review: { who: 'Ruth A.', text: 'Our group loved it.' } },
      { name: 'Registration Poster Pack', price: '£8', emoji: '🪧', rating: 4.8, reviews: 860, cat: 'guides', desc: 'Ten posters for libraries, colleges and cafés.', features: ['A3'], review: { who: 'Owen D.', text: 'Up in every corridor.' } },
      { name: 'Count-night Explainer Session', price: '£120', tag: 'SPECIAL', emoji: '📊', rating: 4.9, reviews: 420, cat: 'talks', special: true, desc: 'A live explainer of how votes are counted.', features: ['Online or in person'], review: { who: 'Helen P.', text: 'Accurate and engaging.' } }
    ],
    shopCats: [ { key: 'guides', label: 'Guides', icon: '🗳️' }, { key: 'talks', label: 'Talks', icon: '🎤' } ],
    feed: [
      { type: 'post', sub: 'Brand post · 2h', text: 'Follow the sign, bring your photo ID, take your time. Our <b>Polling Day Guide</b> explains the rest.', img: U('1778448063819-1a4ffbfd5239', 800, 440), eng: '♡ 11.6K · 💬 1.6K · ↗ 2.4K', product: 0 },
      { type: 'community', who: 'Femi A.', whoBg: NAVY, sub: 'Community · 1d', text: 'Who should I vote for?', eng: '♡ 540 · 💬 160', reply: 'Hi Femi. That’s yours to decide, and we never recommend anyone! Look at what each candidate says about the things that matter to you. The Electoral Commission lists who is standing in your area before each election. 🗳️' }
    ],
    events: [ { zoneEvent: true, tag: 'LIVE', title: 'Ballot Bridge Live · election night from a count', when: 'Live now', desc: 'How votes are verified and counted. No parties, no predictions.', registered: 6420, capacity: 15000 } ],
    about: { founded: 'Leeds · 2010', story: 'A non-partisan charity that helps people understand how voting works, so everyone who can vote knows how. We joined ElectionXX as Founding Partner to make that information easy to find.', milestones: [['2010', 'Founded'], ['2019', 'Easy-read guides'], ['2026', 'Founding Partner on ElectionXX']], values: ['Never take sides', 'Plain English', 'Everyone included'] } }),

  'civic-kit': brand({ key: 'civic-kit', name: 'Civic Kit', color: '#6B21A8', gradient: PLUM, tier: 'Brand Zone',
    tagline: 'Mock-election kits for classrooms and youth groups', stats: { followers: '64.2K', content: '190', products: '14' },
    ad: { badge: 'Schools', img: U('1777428411691-e4d5c3423ed0', 760, 760), hl: 'Run polling day in class.', sub: 'Booths, boxes and made-up candidates.', meta: 'From £15' },
    products: [
      { name: 'Mock Election Kit', price: '£85', tag: 'FLAGSHIP', emoji: '🗳️', rating: 4.9, reviews: 1460, cat: 'kits', special: true, desc: 'A ballot box, two booths, ballots and a count sheet.', features: ['Invented candidates', 'Thirty voters'], review: { who: 'Owen D.', text: 'Every school should have one.' } },
      { name: 'Fold-flat Voting Booth', price: '£35', tag: 'BESTSELLER', emoji: '📦', rating: 4.8, reviews: 920, cat: 'kits', desc: 'A cardboard booth that folds flat.', features: ['Reusable'], review: { who: 'Helen P.', text: 'Sturdy and realistic.' } },
      { name: 'Ballot Paper Pad', price: '£15', emoji: '📝', rating: 4.7, reviews: 640, cat: 'refills', desc: 'Two hundred practice ballots.', features: ['Three election types'], review: { who: 'Femi A.', text: 'We used these at school.' } },
      { name: 'Count Night Pack', price: '£25', tag: 'SPECIAL', emoji: '📊', rating: 4.8, reviews: 380, cat: 'refills', special: true, desc: 'Tally sheets, rosettes for counters and a results board.', features: ['Non-partisan colours'], review: { who: 'Ruth A.', text: 'Great fun.' } }
    ],
    shopCats: [ { key: 'kits', label: 'Kits', icon: '🗳️' }, { key: 'refills', label: 'Refills', icon: '📝' } ],
    feed: [ { type: 'post', sub: 'Brand post · 1d', text: 'Hands up for the count team! A class ran their own count with the <b>Count Night Pack</b>.', img: U('1477281765962-ef34e8bb0967', 800, 440), eng: '♡ 4.8K · 💬 320', product: 3 } ],
    events: [ { zoneEvent: true, tag: 'SALE', title: 'Schools term sale: kits 15% off', when: 'Dec 3 · All week', desc: 'Mock Election Kits, 15% off.', registered: 980, capacity: 2400 } ],
    about: { founded: 'Nottingham · 2015', story: 'Two teachers who wanted students to experience polling day before their first real vote.', milestones: [['2015', 'The first kit'], ['2021', 'Count Night Pack'], ['2026', 'Brand Zone on ElectionXX']], values: ['Learn by doing', 'Never take sides', 'Made to last'] } }),

  'town-hall-tours': brand({ key: 'town-hall-tours', name: 'Town Hall Tours', color: '#57534E', gradient: STONE, tier: 'Brand Zone',
    tagline: 'Behind the doors of Britain’s civic buildings', stats: { followers: '48.6K', content: '160', products: '10' },
    ad: { badge: 'Weekends', img: U('1677182058180-6f9e53cdebbd', 760, 760), hl: 'Where local decisions are made.', sub: 'Guided tours of council chambers and clock towers.', meta: 'From £9' },
    products: [
      { name: 'Birmingham Civic Tour', price: '£12', tag: 'FLAGSHIP', emoji: '🕰️', rating: 4.8, reviews: 1120, cat: 'tours', special: true, desc: 'The council chamber, the clock tower and the history.', features: ['Ninety minutes', 'Step-free route'], review: { who: 'Helen P.', text: 'Fascinating building.' } },
      { name: 'Leeds Town Hall Tour', price: '£12', tag: 'BESTSELLER', emoji: '🏛️', rating: 4.8, reviews: 860, cat: 'tours', desc: 'Victorian splendour and how the city is run.', features: ['Ninety minutes'], review: { who: 'Owen D.', text: 'Brilliant guide.' } },
      { name: 'School Group Tour', price: '£90', emoji: '🎒', rating: 4.9, reviews: 420, cat: 'groups', desc: 'For a class of up to thirty.', features: ['Activity sheets'], review: { who: 'Femi A.', text: 'We sat in the councillors’ seats!' } },
      { name: 'Tour Gift Card', price: '£20', tag: 'SPECIAL', emoji: '🎁', rating: 4.8, reviews: 240, cat: 'groups', special: true, desc: 'Any tour, any city.', features: ['Valid twelve months'], review: { who: 'Ruth A.', text: 'A thoughtful gift.' } }
    ],
    shopCats: [ { key: 'tours', label: 'Tours', icon: '🏛️' }, { key: 'groups', label: 'Groups & gifts', icon: '🎒' } ],
    feed: [ { type: 'post', sub: 'Brand post · 3h', text: 'The dome and the clock tower. The <b>Leeds Town Hall Tour</b> runs every Saturday.', img: U('1592990493652-7ac6eb3af901', 800, 440), eng: '♡ 3.6K · 💬 220', product: 1 } ],
    events: [ { zoneEvent: true, tag: 'EVENT', title: 'Christmas lights tour of the civic quarter', when: 'Dec 5 · 16:30', desc: 'Leeds, with mince pies.', registered: 420, capacity: 900 } ],
    about: { founded: 'York · 2017', story: 'Local historians who think town halls are the most interesting buildings nobody visits.', milestones: [['2017', 'The first tour'], ['2023', 'Five cities'], ['2026', 'Brand Zone on ElectionXX']], values: ['Open doors', 'Local history', 'Everyone welcome'] } }),

  'plainword-press': brand({ key: 'plainword-press', name: 'Plainword Press', color: '#0F766E', gradient: TEAL, tier: 'Brand Zone',
    tagline: 'Easy-read guides to how democracy works', stats: { followers: '42.8K', content: '140', products: '20' },
    ad: { badge: 'New', img: U('1777636949300-9cd5da612586', 760, 760), hl: 'How the vote was won.', sub: 'Easy-read history and how-to guides.', meta: 'From £5' },
    products: [
      { name: 'How Voting Works', price: '£6', tag: 'FLAGSHIP', emoji: '📘', rating: 4.9, reviews: 1340, cat: 'guides', special: true, desc: 'An easy-read guide with pictures.', features: ['Easy-read', 'Audio version'], review: { who: 'Ruth A.', text: 'Perfect for our members.' } },
      { name: 'Votes for Women', price: '£8', tag: 'BESTSELLER', emoji: '📗', rating: 4.8, reviews: 860, cat: 'history', desc: 'The story of the suffrage campaigns, for ages twelve and up.', features: ['Illustrated'], review: { who: 'Owen D.', text: 'Great for lessons.' } },
      { name: 'Your Council, Explained', price: '£5', emoji: '📙', rating: 4.7, reviews: 540, cat: 'guides', desc: 'Who decides what, and how to have your say.', features: ['Easy-read'], review: { who: 'Helen P.', text: 'Accurate and clear.' } },
      { name: 'Large Print Set', price: '£15', tag: 'SPECIAL', emoji: '🔍', rating: 4.9, reviews: 320, cat: 'history', special: true, desc: 'All three guides in large print.', features: ['24-point text'], review: { who: 'Femi A.', text: 'Bought it for my gran.' } }
    ],
    shopCats: [ { key: 'guides', label: 'Guides', icon: '📘' }, { key: 'history', label: 'History', icon: '📗' } ],
    feed: [ { type: 'post', sub: 'Brand post · 5h', text: 'One small sticker, a long history. <b>Votes for Women</b>, the story of how the vote was won.', img: U('1534293230397-c067fc201ab8', 800, 440), eng: '♡ 3.2K · 💬 180', product: 1 } ],
    events: [ { zoneEvent: true, tag: 'EVENT', title: 'Easy-read guides: live reading', when: 'Dec 9 · 14:00', desc: 'How Voting Works, read aloud with BSL.', registered: 380, capacity: 1000 } ],
    about: { founded: 'Bristol · 2018', story: 'An easy-read publisher founded with disability groups, so everyone can understand how decisions are made.', milestones: [['2018', 'How Voting Works'], ['2022', 'Audio versions'], ['2026', 'Brand Zone on ElectionXX']], values: ['Plain words', 'Made with readers', 'Never take sides'] } }),

  'tellerwise-events': { key: 'tellerwise-events', kind: 'business', gw: 'election', name: 'Tellerwise Events', color: '#1E3A8A', gradient: NAVY, img: U('1737399586992-a5c3567dd0c2', 900, 500),
    tier: 'Verified', category: 'Count venue set-up for councils', tagline: 'Tables, tallies and quiet efficiency on count night.',
    about: { founded: 'Birmingham · 2011', story: 'We set up count venues for councils: tables, barriers, lighting and results screens, so counting staff can focus on accuracy. Strictly non-partisan.' },
    stats: { years: 15, staff: 40, clients: '120 councils supported' },
    caps: [ { name: 'Count venue set-up', detail: 'Tables, barriers and lighting.' }, { name: 'Results screens', detail: 'Clear displays for the declaration.' }, { name: 'Accessible layouts', detail: 'Step-free routes for observers.' } ],
    specs: { moq: 'One count', lead: '4 to 8 weeks', regions: 'England and Wales', certs: ['Non-partisan', 'Security vetted staff', 'Step-free layouts'] },
    supplies: [ { kind: 'brand', key: 'ballot-bridge', what: 'A practice count venue for live explainers' } ],
    cases: [ { title: 'A calmer count', text: 'A new layout cut walking between tables by a third.' } ],
    feed: [ { sub: 'Team · 3d', text: 'Booking now for May count venues.' } ],
    contact: { person: 'Sam Green, Councils', response: 'Replies within one working day' } },

  'clearballot-design': { key: 'clearballot-design', kind: 'business', gw: 'election', name: 'Clearballot Design', color: '#6B21A8', gradient: PLUM, img: U('1720128401425-346f8b0c102c', 900, 500),
    tier: 'Verified', category: 'Accessible election design', tagline: 'Signs and forms anyone can read.',
    about: { founded: 'Manchester · 2016', story: 'A design studio that helps councils make poll cards, polling-station signs and voter guides clear and accessible. We work with disability groups and never with campaigns.' },
    stats: { years: 10, staff: 14, clients: '60 councils supported' },
    caps: [ { name: 'Poll card design', detail: 'Clear, tested with voters.' }, { name: 'Polling station signs', detail: 'Easy to spot from the street.' }, { name: 'Easy-read guides', detail: 'Written with readers.' } ],
    specs: { moq: 'One project', lead: '3 to 6 weeks', regions: 'UK', certs: ['Accessibility tested', 'Non-partisan', 'Plain English'] },
    supplies: [ { kind: 'brand', key: 'plainword-press', what: 'Design for easy-read guides' } ],
    cases: [ { title: 'A sign you can’t miss', text: 'New polling station signs were spotted twice as fast in testing.' } ],
    feed: [ { sub: 'Team · 5d', text: 'Our accessible sign templates are free for councils.' } ],
    contact: { person: 'Priya Shah, Studio', response: 'Replies within two working days' } }
});

/* events in the Events tab */
gxEvents('election', [
  { gw: 'election', zone: 'ballot-bridge', type: 'Live', icon: '🔴', live: true, time: 'Live Now', title: 'Ballot Bridge Live · election night from a count', desc: 'How votes are verified and counted. No parties, no predictions.' },
  { gw: 'election', type: 'Event', icon: '🙋', time: 'Dec 1', title: 'Live: ask anything about registering', desc: 'First-Time Voters answers your questions.' },
  { gw: 'election', zone: 'civic-kit', type: 'Sale', icon: '🗳️', time: 'Dec 3', title: 'Schools term sale: kits 15% off', desc: 'Mock Election Kits, 15% off.' },
  { gw: 'election', type: 'Event', icon: '🏛️', time: 'Dec 3', title: 'Leeds Civic Circle: council meetings explained', desc: 'Tea and no politics.' },
  { gw: 'election', zone: 'town-hall-tours', type: 'Event', icon: '🎄', time: 'Dec 5', title: 'Christmas lights tour of the civic quarter', desc: 'Leeds, with mince pies.' },
  { gw: 'election', type: 'Event', icon: '🗂️', time: 'Dec 8', title: 'After the polls close, with Helen Park', desc: 'What happens to your ballot paper.' },
  { gw: 'election', zone: 'plainword-press', type: 'Event', icon: '📘', time: 'Dec 9', title: 'Easy-read guides: live reading', desc: 'How Voting Works, read aloud with BSL.' },
  { gw: 'election', type: 'Event', icon: '📊', time: 'Dec 10', title: 'How a count works, start to finish', desc: 'Verification, sorting and the declaration.' }
]);
})();
/* ═════════ /ELECTIONXX — non-partisan: no real parties, candidates or predictions ═════════ */
