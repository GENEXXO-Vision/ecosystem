/* ═════════ ESPORTSXX — a Gaming demo gateway (2026-11-21, Sean; build -91) ═════════
   Built with the _tools/README.md recipe. Palette (dark): midnight, electric cyan, violet. Home sector: Gaming.
   Every game, team, league, player and brand here is fictional (the game is "Skyline Tactics", a 5v5 strategy game);
   venues' cities are real. Photos show no real game titles, logos or peripherals brands. Wellbeing: breaks, sleep, age ratings. */
(function(){
const U = (id, w, h) => `https://images.unsplash.com/photo-${id}?w=${w}&h=${h}&fit=crop&q=75`;
const CYAN = 'linear-gradient(135deg,#22D3EE,#0E7490)', VIOLET = 'linear-gradient(135deg,#A855F7,#581C87)', LIME = 'linear-gradient(135deg,#A3E635,#3F6212)', NIGHT = 'linear-gradient(135deg,#1E2340,#0A0B14)';

GATEWAYS.esports = {
  name: 'EsportsXX', domain: 'esportsxx.com', emoji: '🎮', sector: 'gaming', live: true,
  tagline: 'The Esports Universe',
  theme: {
    bg: '#0A0B14', text: '#EAF2FF', cardBg: 'rgba(255,255,255,.045)', cardBorder: 'rgba(34,211,238,.14)',
    headerBg: 'linear-gradient(180deg,#151935,#0A0B14)', accent: '#22D3EE', accentAlt: '#A855F7', dark: true
  },
  gradient: 'linear-gradient(135deg,#0A0B14,#581C87,#22D3EE)',
  stats: { members: '11.4M', brands: '3,800+', agents: '68' },
  spaces: ['All Feed', 'Northern Circuit', 'Teams', 'Grassroots', 'Kit', 'Play Well'],
  trending: ['#NorthernCircuit', '#GrandFinal', '#PlayWell'],
  brandZones: [
    { key: 'volt-arena', name: 'Volt Arena', color: '#22D3EE', tier: 'Founding Partner', tag: 'The home of the Northern Circuit, Manchester' },
    { key: 'kinetic-gear', name: 'Kinetic Gear', color: '#A855F7', tier: 'Brand Zone', tag: 'Headsets, mice and keyboards built for competition' },
    { key: 'ready-up', name: 'Ready Up', color: '#A3E635', tier: 'Brand Zone', tag: 'Chairs and desks that look after your back' },
    { key: 'level-up-academy', name: 'Level Up Academy', color: '#F472B6', tier: 'Brand Zone', tag: 'Safe, coached esports clubs for 13 to 18-year-olds' }
  ],
  apps: [
    { name: 'Reaction Test', color: '#22D3EE', desc: 'How fast are your reactions? Test, track and warm up', key: 'reaction-test', url: 'apps/reaction-test.html',
      dev: 'Kinetic Gear', rating: '4.7', users: '3.2M', perms: ['profile', 'feed'],
      tagline: 'Wait for green. Go.',
      about: 'Reaction Test times how quickly you tap when the screen turns green, in milliseconds, over five rounds. Track your average over time and see how sleep and warm-ups change it.',
      features: ['Five-round tests', 'Average and best in ms', 'History over time', 'Tags for sleep and warm-up'],
      shots: ['apps/reaction-test/shot-1.jpg', 'apps/reaction-test/shot-2.jpg', 'apps/reaction-test/shot-3.jpg'],
      version: '3.1', size: '8 KB',
      updates: [ { v: '3.1', ago: 2, notes: 'Sleep and warm-up tags.' }, { v: '3.0', ago: 60, notes: 'Five-round tests.' }, { v: '2.2', ago: 210, notes: 'Signed in with GENEXXO.' } ],
      reviews: [ { who: '@kestrel_kai', stars: 5, ago: 1, text: 'My reactions are 30 ms faster after 8 hours’ sleep. Science.' }, { who: '@lan_lena', stars: 4, ago: 11, text: 'Addictive warm-up.' }, { who: '@caster_cass', stars: 5, ago: 28, text: 'We use it on stream between matches.' } ] },
    { name: 'Scrim Planner', color: '#F472B6', desc: 'Plan your team’s practice week, with rest built in', key: 'scrim-planner', url: 'apps/scrim-planner.html',
      dev: 'Level Up Academy', rating: '4.8', users: '640K', perms: ['profile', 'feed'],
      tagline: 'Practise smart, not all night.',
      about: 'Scrim Planner lays out your team’s week: scrims, review sessions, solo practice and rest days. It warns when a day goes over your hours limit or runs past bedtime, and everyone can tick off what they did.',
      features: ['A week of sessions', 'Hours limit and bedtime warnings', 'Who’s available', 'Tick off and review'],
      shots: ['apps/scrim-planner/shot-1.jpg', 'apps/scrim-planner/shot-2.jpg', 'apps/scrim-planner/shot-3.jpg'],
      version: '2.0', size: '9 KB',
      updates: [ { v: '2.0', ago: 4, notes: 'Bedtime warnings.' }, { v: '1.7', ago: 90, notes: 'Availability.' }, { v: '1.2', ago: 230, notes: 'Signed in with GENEXXO.' } ],
      reviews: [ { who: '@coach_danny', stars: 5, ago: 2, text: 'My under-18s team finally have rest days.' }, { who: '@kestrel_kai', stars: 5, ago: 13, text: 'Scrims actually start on time now.' }, { who: '@parent_pat', stars: 5, ago: 35, text: 'I can see exactly when he’s playing.' } ] },
    { name: 'Screen Break', color: '#A3E635', desc: 'Play-time, breaks and stretches for gamers', key: 'screen-break', url: 'apps/screen-break.html',
      dev: 'Ready Up', rating: '4.8', users: '1.1M', perms: ['profile', 'feed'],
      tagline: 'Every hour, look up.',
      about: 'Screen Break runs while you play and nudges you every hour to stand, stretch your wrists and look at something far away. It keeps a week of play-time so you can see your habits.',
      features: ['Hourly break nudges', 'Five wrist and neck stretches', 'Play-time this week', 'A daily limit you choose'],
      shots: ['apps/screen-break/shot-1.jpg', 'apps/screen-break/shot-2.jpg', 'apps/screen-break/shot-3.jpg'],
      version: '1.8', size: '8 KB',
      updates: [ { v: '1.8', ago: 3, notes: 'Daily limit.' }, { v: '1.5', ago: 80, notes: 'Neck stretches.' }, { v: '1.0', ago: 240, notes: 'Signed in with GENEXXO.' } ],
      reviews: [ { who: '@lan_lena', stars: 5, ago: 4, text: 'My wrist pain has gone since I started the stretches.' }, { who: '@parent_pat', stars: 5, ago: 17, text: 'We agreed the limit together.' }, { who: '@kestrel_kai', stars: 4, ago: 40, text: 'Annoying in a good way.' } ] }
  ],
  pros: [
    { key: 'danny-cho-coaching', name: 'Danny Cho Esports Coaching', color: '#22D3EE', tag: 'Team and individual coaching for Skyline Tactics · grassroots to pro', role: 'Esports coach',
      img: U('1770510067230-1059f0776b3a', 800, 800), base: 'Manchester, UK · and online', langs: 'English, Korean', years: 8, rating: '4.9', reviewsN: 312, cur: '£',
      creds: ['Head coach of a Northern Circuit team', 'DBS-checked youth coach', 'Former semi-pro player'],
      about: 'Danny coaches teams to communicate, review and improve, not just grind. He works with pro teams and with youth clubs, where rest days and school come first.',
      services: [ { id: 'vod', name: 'Replay review', dur: '60 minutes', price: 40, desc: 'Go through one of your matches together.' },
                  { id: 'team', name: 'Team coaching session', dur: '2 hours', price: 120, desc: 'Strategy, calls and a practice plan.' },
                  { id: 'youth', name: 'Youth club block', dur: '6 weekly sessions', price: 180, desc: 'For schools and clubs, safeguarding in place.' } ],
      avail: { days: [1, 2, 3, 4, 6], times: ['16:30', '18:00', '19:30'] },
      reviews: [ { who: '@kestrel_kai', stars: 5, ago: 4, text: 'Our team talk is completely different now.' }, { who: '@coach_danny_fan', stars: 5, ago: 18, text: 'Calm, clear and very smart.' }, { who: '@parent_pat', stars: 5, ago: 41, text: 'He put homework before scrims. Respect.' } ],
      posts: [ { ago: 1, text: 'Review one loss properly rather than playing five more. You’ll learn more and sleep better.' }, { ago: 6, text: 'January youth club blocks open for schools.' } ],
      tier: 'Pro Zone', verified: true },
    { key: 'elena-voss-physio', name: 'Dr Elena Voss Gaming Physiotherapy', color: '#A3E635', tag: 'Wrists, necks and backs for gamers · assessment and rehab', role: 'Physiotherapist',
      img: U('1534528741775-53994a69daeb', 800, 800), base: 'London, UK · and online', langs: 'English, German', years: 11, rating: '4.9', reviewsN: 228, cur: '£',
      creds: ['HCPC-registered physiotherapist', 'Physio to two esports teams', 'Researches repetitive strain'],
      about: 'Elena treats gamers’ wrists, necks and backs, and sets up desks and posture so the problem doesn’t come back. Numbness or pain that wakes you at night means see someone soon, not more stretches.',
      services: [ { id: 'assess', name: 'Assessment and treatment', dur: '50 minutes', price: 70, desc: 'In person or by video.' },
                  { id: 'setup', name: 'Desk and posture set-up', dur: '45 minutes', price: 55, desc: 'By video, using your own room.' },
                  { id: 'team', name: 'Team workshop', dur: '90 minutes', price: 180, desc: 'Warm-ups, stretches and breaks for the whole team.' } ],
      avail: { days: [1, 2, 4, 5], times: ['09:00', '13:00', '17:30'] },
      reviews: [ { who: '@lan_lena', stars: 5, ago: 6, text: 'Fixed my wrist and my chair height.' }, { who: '@kestrel_kai', stars: 5, ago: 21, text: 'Our whole team does her warm-up.' }, { who: '@caster_cass', stars: 5, ago: 47, text: 'My neck thanks her daily.' } ],
      posts: [ { ago: 2, text: 'Elbows at 90 degrees, screen at eye level, feet flat. Then get up every hour anyway.' } ],
      tier: 'Pro Zone', verified: true },
    { key: 'ravi-desai-casting', name: 'Ravi Desai Casting', color: '#A855F7', tag: 'Esports commentary, hosting and casting coaching', role: 'Shoutcaster and host',
      img: U('1759346617240-b45ed956868e', 800, 800), base: 'Birmingham, UK', langs: 'English, Gujarati', years: 9, rating: '4.9', reviewsN: 186, cur: '£',
      creds: ['Lead caster for the Northern Circuit', 'Hosted 400 live broadcasts', 'Trains new casters'],
      about: 'Ravi is the voice of the Northern Circuit. He also coaches new casters and hosts: how to read a game out loud, work with a partner and stay calm when the stream breaks.',
      services: [ { id: 'coach', name: 'Casting coaching', dur: '60 minutes', price: 50, desc: 'Review your commentary and practise live.' },
                  { id: 'host', name: 'Event hosting', dur: 'Per day', price: 450, desc: 'Tournaments, launches and LAN finals.' },
                  { id: 'school', name: 'Schools tournament host', dur: 'Half a day', price: 150, desc: 'Brings the big-event feel to a school final.' } ],
      avail: { days: [1, 3, 5, 6], times: ['11:00', '15:00', '19:00'] },
      reviews: [ { who: '@caster_cass', stars: 5, ago: 5, text: 'Got my first paid casting job after his sessions.' }, { who: '@lan_lena', stars: 5, ago: 19, text: 'Made our LAN final feel like a world final.' }, { who: '@coach_danny', stars: 5, ago: 44, text: 'The best in the business.' } ],
      posts: [ { ago: 3, text: 'Say what the viewer can’t see. They can see the fight; tell them why it happened.' } ],
      tier: 'Pro Zone', verified: true }
  ],
  communities: [
    { key: 'ready-check', name: 'Ready Check', domain: 'ready.esportsxx.com', color: '#22D3EE', img: U('1761774805261-f6174d599dcc', 900, 500),
      scope: 'Global', where: 'Every server', members: 612000, online: 14200, tagline: 'Find a team. Play fair. Play well.',
      about: 'Players looking for teams, teams looking for players, match threads for the Northern Circuit and a Play Well space for sleep, breaks and keeping gaming fun.',
      rules: ['No toxicity, ever', 'Respect age ratings', 'Spoiler-tag match results'],
      mods: ['@kestrel_kai', '@caster_cass'],
      threads: [ { t: 'Grand final match thread: Mersey Wolves vs Clyde Kestrels', by: '@caster_cass', tag: 'MATCH', replies: 4860, ago: 0, votes: 9240 }, { t: 'LFT: support player, UK evenings', by: '@lan_lena', tag: 'LFT', replies: 86, ago: 1, votes: 120 }, { t: 'How many hours do you really practise?', by: '@coach_danny', tag: 'PLAY WELL', replies: 640, ago: 2, votes: 1420 }, { t: 'First LAN tips?', by: '@new_to_lan_leo', tag: 'Q&A', replies: 212, ago: 3, votes: 380 } ],
      events: [ { title: 'Community cup qualifiers', day: 7, time: '18:00', where: 'Online' }, { title: 'Community cup final', day: 21, time: '19:00', where: 'Online' } ] },
    { key: 'manchester-lan-club', name: 'Manchester LAN Club', domain: 'manchester.esportsxx.com', color: '#A855F7', img: U('1558008258-7ff8888b42b0', 900, 500),
      scope: 'Local', where: 'Manchester', members: 2400, online: 64, tagline: 'Bring your rig. Meet your team.',
      about: 'A monthly LAN in a Northern Quarter hall: bring your own computer, play the Skyline Tactics community bracket, eat pizza and meet the people you’ve been playing with online.',
      rules: ['Over-16s, or with a parent', 'Label your cables', 'Lights out at midnight'],
      mods: ['@lan_lena', '@kestrel_kai'],
      threads: [ { t: 'December LAN: sign-ups open', by: '@lan_lena', tag: 'LAN', replies: 58, ago: 0, votes: 140 }, { t: 'Watch party for the grand final at Volt Arena', by: '@kestrel_kai', tag: 'WATCH PARTY', replies: 44, ago: 1, votes: 96 }, { t: 'Spare monitors to lend?', by: '@new_to_lan_leo', tag: 'KIT', replies: 16, ago: 2, votes: 24 } ],
      events: [ { title: 'December LAN', day: 14, time: '12:00', where: 'Northern Quarter, Manchester' }, { title: 'New players’ night', day: 4, time: '18:30', where: 'Northern Quarter, Manchester' } ] }
  ],
  feed: [
    { av: 'EX', avBg: CYAN, author: 'EsportsXX Editorial', sub: 'Featured · Just now', badge: '★ FEATURED',
      text: 'From your first ranked match to a sold-out arena final. Teams, tournaments, kit, coaching and playing well. Esports, all in one place.',
      img: U('1780766382547-a0ffa16bd32d', 800, 600), eng: '♡ 112K · 💬 9.4K · ↗ 14.2K' },
    { av: 'KK', avBg: NIGHT, author: '@kestrel_kai', sub: 'Northern Circuit · Just now', badge: 'COMMUNITY',
      text: 'Grand final day. Eight thousand people, one stage, and my team in the blue corner. Whatever happens, we got here 🎮',
      img: U('1612287230202-1ff1d85d1bdf', 800, 600), eng: '♡ 28.6K · 💬 3.8K · ↗ 1.6K' },
    { av: 'VA', avBg: CYAN, author: 'Volt Arena', sub: 'Founding Partner · Brand Zone', badge: 'BRAND ZONE',
      text: 'The <b>Northern Circuit Grand Final</b> is live from Manchester: Mersey Wolves against Clyde Kestrels, best of five, in front of a full house.',
      img: U('1783979384797-7a5d2ad23fc8', 800, 600), eng: '♡ 24.2K · 💬 2.6K · ↗ 3.8K' },
    { av: 'KG', avBg: VIOLET, author: 'Kinetic Gear', sub: 'Brand Zone · 1h ago', badge: 'BRAND ZONE',
      text: 'The <b>Pulse Pro</b> headset: 48 hours of battery, a mic your team can actually hear, and comfy for a five-game final.',
      img: U('1636036769389-343bb250f013', 800, 600), eng: '♡ 8.4K · 💬 640 · ↗ 720' },
    { av: 'LL', avBg: VIOLET, author: '@lan_lena', sub: 'Grassroots · 2h ago', badge: 'COMMUNITY',
      text: 'Forty people, forty computers, one very hot church hall. Manchester LAN Club’s November bracket is done. Same time next month?',
      img: U('1633545495735-25df17fb9f31', 800, 600), eng: '♡ 7.2K · 💬 520 · ↗ 260' },
    { av: 'RU', avBg: LIME, author: 'Ready Up', sub: 'Brand Zone · 4h ago', badge: 'BRAND ZONE',
      text: 'Your back will thank you after a long session. The <b>Ready Up Pro Chair</b>: lumbar support, 4D arms, made to be repaired.',
      img: U('1616588589676-62b3bd4ff6d2', 800, 600), eng: '♡ 5.6K · 💬 380 · ↗ 410' },
    { av: 'DC', avBg: CYAN, author: 'Danny Cho Esports Coaching', sub: 'Play Well · 6h ago', badge: 'PRO ZONE',
      text: 'Pros sleep eight hours on match week. If your reactions matter, so does your bedtime.',
      img: U('1586182987320-4f376d39d787', 800, 600), eng: '♡ 6.8K · 💬 540 · ↗ 980' }
  ],
  prompts: ['Find a LAN event in Manchester', 'Where can I watch the Northern Circuit final?', 'How do I join an esports team?', 'How can I stop my wrists hurting when I game?'],
  businesses: ['pixelstream-broadcast', 'coldbox-servers']
};

/* the four Brand Zones and two Business Zones */
const brand = (o) => Object.assign({ kind: 'brand', gw: 'esports', verified: true }, o);
Object.assign(ZONES, {
  'volt-arena': brand({ key: 'volt-arena', name: 'Volt Arena', color: '#22D3EE', gradient: CYAN, tier: 'Founding Partner',
    tagline: 'The home of the Northern Circuit, Manchester', stats: { followers: '486K', content: '2.4K', products: '14' },
    ad: { badge: 'Featured', img: U('1780766382547-a0ffa16bd32d', 760, 760), hl: 'Eight thousand seats. One stage.', sub: 'The Northern Circuit Grand Final, live in Manchester.', meta: 'From £12' },
    products: [
      { name: 'Grand Final Ticket', price: '£35', tag: 'FLAGSHIP', emoji: '🏆', rating: 4.9, reviews: 6240, cat: 'tickets', special: true, desc: 'A seat for the Northern Circuit Grand Final, with a free drink and a lanyard.', features: ['Best of five', 'Under-16s with an adult', 'Quiet room available'], review: { who: 'Kai M.', text: 'The noise when the final round ended!' } },
      { name: 'Season Pass 2027', price: '£120', tag: 'BESTSELLER', emoji: '🎟️', rating: 4.8, reviews: 1840, cat: 'tickets', desc: 'Every Northern Circuit match day at Volt Arena next season.', features: ['Twelve match days'], review: { who: 'Lena S.', text: 'Never missing a match again.' } },
      { name: 'Arena Tour and Stage Visit', price: '£12', emoji: '🎤', rating: 4.8, reviews: 960, cat: 'experiences', desc: 'See the stage, the player booths and the broadcast gallery.', features: ['Weekends'], review: { who: 'Pat D.', text: 'My son sat in a pro’s chair.' } },
      { name: 'Team Jersey', price: '£45', tag: 'SPECIAL', emoji: '👕', rating: 4.7, reviews: 1460, cat: 'merch', special: true, desc: 'Official jerseys for all eight Northern Circuit teams.', features: ['Name printing free'], review: { who: 'Cass R.', text: 'Wore it to the final.' } }
    ],
    shopCats: [ { key: 'tickets', label: 'Tickets', icon: '🎟️' }, { key: 'experiences', label: 'Tours', icon: '🎤' }, { key: 'merch', label: 'Merch', icon: '👕' } ],
    feed: [
      { type: 'post', sub: 'Brand post · 1h', text: 'The stage is lit for the <b>Grand Final</b>. Doors at 4pm.', img: U('1783979384797-7a5d2ad23fc8', 800, 440), eng: '♡ 24.2K · 💬 2.6K · ↗ 3.8K', product: 0 },
      { type: 'post', sub: 'Backstage · Yesterday', text: 'Player booths checked, re-checked and checked again.', img: U('1636036824578-d0d300a4effb', 800, 440), eng: '♡ 6.8K · 💬 410' },
      { type: 'community', who: 'Pat D.', whoBg: NIGHT, sub: 'Community · 1d', text: 'Is the final OK for my 12-year-old? He’s autistic and loud crowds can be a lot.', eng: '♡ 520 · 💬 140', reply: 'Hi Pat! Yes, and we’d love to have you both. Skyline Tactics is rated 12, and there’s a quiet room with the stream on a big screen, free ear defenders at the door and an early-entry slot so you can find your seats before the crowd. Book the Grand Final ticket and tick “quiet room” at checkout. 🎮' }
    ],
    events: [ { zoneEvent: true, tag: 'LIVE', title: 'Volt Arena Live · Northern Circuit Grand Final', when: 'Live now', desc: 'Mersey Wolves vs Clyde Kestrels, best of five, live from Manchester with Ravi Desai on commentary.', registered: 48600, capacity: 120000 } ],
    about: { founded: 'Manchester · 2019', story: 'A former cinema turned into the UK’s first purpose-built esports arena. We joined EsportsXX as Founding Partner because the players and fans are here.', milestones: [['2019', 'The first LAN final'], ['2023', 'Home of the Northern Circuit'], ['2026', 'Founding Partner on EsportsXX']], values: ['A quiet room at every event', 'Age ratings respected', 'Grassroots nights every month'] } }),

  'kinetic-gear': brand({ key: 'kinetic-gear', name: 'Kinetic Gear', color: '#A855F7', gradient: VIOLET, tier: 'Brand Zone',
    tagline: 'Headsets, mice and keyboards built for competition', stats: { followers: '264K', content: '980', products: '48' },
    ad: { badge: 'New', img: U('1636036769389-343bb250f013', 760, 760), hl: 'The Pulse Pro headset.', sub: '48 hours of battery. A mic your team can hear.', meta: 'From £29' },
    products: [
      { name: 'Pulse Pro Headset', price: '£129', tag: 'FLAGSHIP', emoji: '🎧', rating: 4.8, reviews: 4860, cat: 'audio', special: true, desc: 'Wireless, 48-hour battery, a clear detachable mic and memory-foam cushions.', features: ['Two-year guarantee', 'Replaceable cushions'], review: { who: 'Kai M.', text: 'Wore it for a five-game final. No ache.' } },
      { name: 'Glide Mouse', price: '£59', tag: 'BESTSELLER', emoji: '🖱️', rating: 4.8, reviews: 6240, cat: 'mice', desc: 'Light, accurate and shaped for a relaxed grip.', features: ['58 grams'], review: { who: 'Lena S.', text: 'Light as anything.' } },
      { name: 'Compact Keyboard', price: '£89', emoji: '⌨️', rating: 4.7, reviews: 2140, cat: 'keyboards', desc: 'A small keyboard, so your mouse arm sits closer to your body.', features: ['Hot-swap switches'], review: { who: 'Leo P.', text: 'My shoulder feels better.' } },
      { name: 'Wrist Rest', price: '£29', tag: 'SPECIAL', emoji: '🤲', rating: 4.6, reviews: 980, cat: 'keyboards', special: true, desc: 'Gel wrist rest for keyboard and mouse.', features: ['Washable cover'], review: { who: 'Cass R.', text: 'Simple and comfy.' } }
    ],
    shopCats: [ { key: 'audio', label: 'Audio', icon: '🎧' }, { key: 'mice', label: 'Mice', icon: '🖱️' }, { key: 'keyboards', label: 'Keyboards', icon: '⌨️' } ],
    feed: [ { type: 'post', sub: 'Brand post · 1h', text: 'The <b>Pulse Pro</b>, tested for 48 hours straight by our engineers (not by players).', img: U('1636036824578-d0d300a4effb', 800, 440), eng: '♡ 8.4K · 💬 640', product: 0 } ],
    events: [ { zoneEvent: true, tag: 'SALE', title: 'Black Friday: a quarter off headsets', when: 'Nov 27 · All day', desc: 'A quarter off every headset, for one day.', registered: 4860, capacity: 12000 } ],
    about: { founded: 'Cambridge · 2015', story: 'Engineers who played competitively and wanted kit that lasts.', milestones: [['2015', 'The first mouse'], ['2022', 'Official kit of the Northern Circuit'], ['2026', 'Brand Zone on EsportsXX']], values: ['Repairable', 'Two-year guarantee', 'Recycled packaging'] } }),

  'ready-up': brand({ key: 'ready-up', name: 'Ready Up', color: '#A3E635', gradient: LIME, tier: 'Brand Zone',
    tagline: 'Chairs and desks that look after your back', stats: { followers: '118K', content: '420', products: '22' },
    ad: { badge: 'Featured', img: U('1616588589676-62b3bd4ff6d2', 760, 760), hl: 'Your back after a long session.', sub: 'The Ready Up Pro Chair, made to be repaired.', meta: 'From £89' },
    products: [
      { name: 'Ready Up Pro Chair', price: '£329', tag: 'FLAGSHIP', emoji: '🪑', rating: 4.8, reviews: 3240, cat: 'chairs', special: true, desc: 'Adjustable lumbar support, 4D arms and a seat that fits most bodies. Every part replaceable.', features: ['Ten-year frame guarantee', 'Fits 150–200 cm'], review: { who: 'Lena S.', text: 'My back pain has gone.' } },
      { name: 'Sit-Stand Desk', price: '£399', tag: 'BESTSELLER', emoji: '🗄️', rating: 4.8, reviews: 1840, cat: 'desks', desc: 'Electric height, four presets, room for two screens.', features: ['160 × 75 cm'], review: { who: 'Kai M.', text: 'Stand for the warm-up, sit for the match.' } },
      { name: 'Monitor Arm', price: '£89', emoji: '🖥️', rating: 4.7, reviews: 1460, cat: 'desks', desc: 'Get your screen to eye level.', features: ['Single or double'], review: { who: 'Cass R.', text: 'No more neck ache.' } },
      { name: 'Footrest', price: '£34', tag: 'SPECIAL', emoji: '🦶', rating: 4.6, reviews: 640, cat: 'chairs', special: true, desc: 'For anyone whose feet don’t sit flat.', features: ['Tilting'], review: { who: 'Pat D.', text: 'Perfect for my teenager.' } }
    ],
    shopCats: [ { key: 'chairs', label: 'Chairs', icon: '🪑' }, { key: 'desks', label: 'Desks', icon: '🗄️' } ],
    feed: [ { type: 'post', sub: 'Brand post · 4h', text: 'Set up right: screen at eye level, elbows at 90, feet flat. Our <b>Sit-Stand Desk</b> helps.', img: U('1636489953081-c4ebbd50fa3a', 800, 440), eng: '♡ 5.6K · 💬 380', product: 1 } ],
    events: [ { zoneEvent: true, tag: 'EVENT', title: 'Free posture check day', when: 'Dec 5 · 10:00', desc: 'Dr Elena Voss checks your set-up by video, free, all day.', registered: 620, capacity: 800 } ],
    about: { founded: 'Nottingham · 2017', story: 'An office-chair maker whose son got back pain from a gaming chair that looked good and fitted no one.', milestones: [['2017', 'The first chair'], ['2023', 'The sit-stand desk'], ['2026', 'Brand Zone on EsportsXX']], values: ['Every part replaceable', 'Physio-designed', 'Made in Nottingham'] } }),

  'level-up-academy': brand({ key: 'level-up-academy', name: 'Level Up Academy', color: '#F472B6', gradient: VIOLET, tier: 'Brand Zone',
    tagline: 'Safe, coached esports clubs for 13 to 18-year-olds', stats: { followers: '72.6K', content: '640', products: '6' },
    ad: { badge: 'Gift', img: U('1758410473735-c76baff30a79', 760, 760), hl: 'Teamwork, coached properly.', sub: 'After-school esports clubs, with safeguarding and rest days.', meta: 'From £8' },
    products: [
      { name: 'Weekly Club Membership', price: '£24', tag: 'FLAGSHIP', emoji: '🎓', rating: 4.9, reviews: 1460, cat: 'clubs', special: true, desc: 'Two coached sessions a week, a team, a league and a coach who checks in on school too.', features: ['DBS-checked coaches', 'Age-rated games only', 'Parents’ dashboard'], review: { who: 'Pat D.', text: 'He’s made real friends and his grades went up.' } },
      { name: 'Holiday Camp', price: '£95', tag: 'BESTSELLER', emoji: '🏕️', rating: 4.8, reviews: 640, cat: 'camps', desc: 'Three days of esports, outdoor games and a tournament.', features: ['Ages 13–18'], review: { who: 'Leo P.', text: 'Best week of my holidays.' } },
      { name: 'Taster Session', price: '£8', emoji: '🎮', rating: 4.8, reviews: 420, cat: 'clubs', desc: 'Try a club session before joining.', features: ['Bring a parent'], review: { who: 'Kai M.', text: 'Easy start.' } },
      { name: 'School Club Package', price: '£480', tag: 'SPECIAL', emoji: '🏫', rating: 4.9, reviews: 120, cat: 'schools', special: true, desc: 'A coached term-time club in your school.', features: ['Twelve weeks'], review: { who: 'Ms Rees', text: 'Our quietest students now lead teams.' } }
    ],
    shopCats: [ { key: 'clubs', label: 'Clubs', icon: '🎓' }, { key: 'camps', label: 'Camps', icon: '🏕️' }, { key: 'schools', label: 'Schools', icon: '🏫' } ],
    feed: [ { type: 'post', sub: 'Brand post · 1d', text: 'Club night in Salford: two teams, one coach, and a twenty-minute break for pizza and stretches.', img: U('1558008258-7ff8888b42b0', 800, 440), eng: '♡ 3.2K · 💬 240', product: 0 } ],
    events: [ { zoneEvent: true, tag: 'DEADLINE', title: 'January clubs: last day to sign up', when: 'Dec 14 · 23:59', desc: 'Sign up by 14 December for January clubs.', registered: 340, capacity: 600 } ],
    about: { founded: 'Salford · 2020', story: 'A youth worker and a pro coach who wanted young gamers to get the same coaching, care and teamwork as any sports club.', milestones: [['2020', 'The first club'], ['2024', '60 clubs'], ['2026', 'Brand Zone on EsportsXX']], values: ['Safeguarding first', 'Rest days built in', 'School comes first'] } }),

  'pixelstream-broadcast': { key: 'pixelstream-broadcast', kind: 'business', gw: 'esports', name: 'Pixelstream Broadcast', color: '#22D3EE', gradient: NIGHT, img: U('1783979384797-7a5d2ad23fc8', 900, 500),
    tier: 'Verified', category: 'Broadcast production', tagline: 'Live production for esports tournaments and events.',
    about: { founded: 'Manchester · 2016', story: 'We produce live esports broadcasts: cameras, replays, graphics and the stream, from LAN finals to arena shows.' },
    stats: { years: 10, staff: 48, clients: '300 events' },
    caps: [ { name: 'Live production', detail: 'Multi-camera, replays and observer feeds.' }, { name: 'Graphics', detail: 'Live stats and overlays.' }, { name: 'Streaming', detail: 'To every major platform at once.' } ],
    specs: { moq: 'One event', lead: '2 to 8 weeks', regions: 'UK & Europe', certs: ['Fully insured', 'Accessible captions', 'Albert-certified'] },
    supplies: [ { kind: 'brand', key: 'volt-arena', what: 'The Grand Final broadcast' } ],
    cases: [ { title: 'A school final', text: 'A proper broadcast for a schools tournament, on a small budget.' } ],
    feed: [ { sub: 'Gallery · 3d', text: 'Fourteen cameras rigged for the Grand Final.' } ],
    contact: { person: 'Sam Okoye, Producer', response: 'Replies within 24 hours' } },

  'coldbox-servers': { key: 'coldbox-servers', kind: 'business', gw: 'esports', name: 'Coldbox Servers', color: '#A855F7', gradient: VIOLET, img: U('1636036824578-d0d300a4effb', 900, 500),
    tier: 'Verified', category: 'Game servers', tagline: 'Low-latency game servers for tournaments and clubs.',
    about: { founded: 'London · 2014', story: 'We host tournament servers across the UK and Europe, with the low latency competitive play needs.' },
    stats: { years: 12, staff: 26, clients: '1,400 leagues & clubs' },
    caps: [ { name: 'Tournament servers', detail: 'Spun up for a match, gone after.' }, { name: 'Anti-cheat support', detail: 'Logs and replays for referees.' }, { name: 'Club hosting', detail: 'A server for your club, all year.' } ],
    specs: { moq: 'One server', lead: 'Same day', regions: 'UK & Europe', certs: ['ISO 27001', 'Renewable power', '99.9% uptime'] },
    supplies: [ { kind: 'brand', key: 'level-up-academy', what: 'Servers for 60 youth clubs' } ],
    cases: [ { title: 'A national schools league', text: '400 matches in a weekend, no lag complaints.' } ],
    feed: [ { sub: 'Network · 5d', text: 'Grand Final servers on standby, three of everything.' } ],
    contact: { person: 'Nina Holt, Partnerships', response: 'Replies within two hours' } }
});

/* events in the Events tab */
gxEvents('esports', [
  { gw: 'esports', zone: 'volt-arena', type: 'Live', icon: '🔴', live: true, time: 'Live Now', title: 'Volt Arena Live · Northern Circuit Grand Final', desc: 'Mersey Wolves vs Clyde Kestrels, best of five, live from Manchester.' },
  { gw: 'esports', type: 'Event', icon: '👋', time: 'Dec 2', title: 'New players’ night, Manchester', desc: 'Manchester LAN Club: bring your rig, meet a team.' },
  { gw: 'esports', zone: 'kinetic-gear', type: 'Sale', icon: '🎧', time: 'Nov 27', title: 'Kinetic Gear Black Friday', desc: 'A quarter off every headset, for one day.' },
  { gw: 'esports', type: 'Event', icon: '🏆', time: 'Nov 28', title: 'Community cup qualifiers', desc: 'Ready Check: open qualifiers, online.' },
  { gw: 'esports', zone: 'ready-up', type: 'Event', icon: '🪑', time: 'Dec 5', title: 'Free posture check day', desc: 'Ready Up and Dr Elena Voss check your set-up by video.' },
  { gw: 'esports', type: 'Event', icon: '🖥️', time: 'Dec 5', title: 'December LAN, Manchester', desc: 'Manchester LAN Club’s monthly bracket in the Northern Quarter.' },
  { gw: 'esports', zone: 'level-up-academy', type: 'Deadline', icon: '🎓', time: 'Dec 14', title: 'January clubs: last day to sign up', desc: 'Level Up Academy: coached clubs for 13 to 18-year-olds.' },
  { gw: 'esports', type: 'Event', icon: '🥇', time: 'Dec 12', title: 'Community cup final', desc: 'Ready Check: the final, cast live.' }
]);
})();
/* ═════════ /ESPORTSXX ═════════ */
