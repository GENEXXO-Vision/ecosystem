/* ═════════ PADELXX — a Sports demo gateway (2026-11-14, Sean) ═════════
   Built like ClimbXX and ChristmasXX: theme, feed, 4 Brand Zones, 2 Business Zones, 3 Pros, 2 communities, 3 apps, events.
   Palette: court blue, deep navy, ball lime. Pinned in PINNED_GWS with BaseballXX and GolfXX.
   Brands, pros and communities are fictional; places are real. Source of truth: _lab/sports/padelxx-block.js. */
(function(){
const U = (id, w, h) => `https://images.unsplash.com/photo-${id}?w=${w}&h=${h}&fit=crop&q=75`;
const BLUE = 'linear-gradient(135deg,#2F6FED,#123A7A)', LIME = 'linear-gradient(135deg,#C6F432,#6E9A0C)', TEAL = 'linear-gradient(135deg,#14B8A6,#0B6B63)', SUN = 'linear-gradient(135deg,#F5B935,#C2751A)';

GATEWAYS.padel = {
  name: 'PadelXX', domain: 'padelxx.com', emoji: '🎾', sector: 'sports', live: true,
  tagline: 'The Padel Universe',
  theme: {
    bg: '#08162E', text: '#EEF3FF', cardBg: 'rgba(255,255,255,.045)', cardBorder: 'rgba(198,244,50,.13)',
    headerBg: 'linear-gradient(180deg,#123A7A,#08162E)', accent: '#C6F432', accentAlt: '#2F8CFF', dark: true
  },
  gradient: 'linear-gradient(135deg,#123A7A,#2F8CFF,#C6F432)',
  stats: { members: '2.1M', brands: '1,300+', agents: '58' },
  spaces: ['All Feed', 'Find a Game', 'Clubs & Courts', 'Coaching', 'Gear', 'Pro Tour'],
  trending: ['#FindAFourth', '#BandejaClinic', '#PadelHoliday'],
  brandZones: [
    { key: 'solera-padel', name: 'Solera Padel', color: '#2F6FED', tier: 'Founding Partner', tag: 'Carbon rackets, designed in Valencia' },
    { key: 'pared-balls', name: 'Pared Balls', color: '#C2751A', tier: 'Brand Zone', tag: 'Tour-grade balls, delivered fresh every month' },
    { key: 'lima-court-wear', name: 'Lima Court Wear', color: '#6E9A0C', tier: 'Brand Zone', tag: 'Padel shoes and kit, built for the glass' },
    { key: 'glasshouse-padel', name: 'The Glasshouse Padel Clubs', color: '#14B8A6', tier: 'Brand Zone', tag: 'Indoor padel clubs, open 6am to 11pm' }
  ],
  apps: [
    { name: 'Match Finder', color: '#C6F432', desc: 'Find a fourth at your level', key: 'match-finder', url: 'apps/match-finder.html',
      dev: 'Cuarto Labs', rating: '4.9', users: '184K', perms: ['profile', 'feed'],
      tagline: 'Three players looking for a fourth. That could be you.',
      about: 'Match Finder fixes padel’s oldest problem: finding the fourth player. See open games near you at your level, join in one tap, or post your own and let the right players find you. Levels run from 1.0 for beginners to 7.0 for pros, so every game is a good game.',
      features: ['Open games near you, filtered by level', 'Join in one tap', 'Post your own game in seconds', 'Share a game to the PadelXX feed'],
      shots: ['apps/match-finder/shot-1.jpg', 'apps/match-finder/shot-2.jpg', 'apps/match-finder/shot-3.jpg'],
      version: '6.1', size: '10 KB',
      updates: [ { v: '6.1', ago: 3, notes: 'Mixed and women’s games now filter separately.' }, { v: '6.0', ago: 90, notes: 'Level matching: games show whether they are right for you.' }, { v: '5.6', ago: 200, notes: 'Signed in with GENEXXO.' } ],
      reviews: [ { who: '@bandeja_bella', stars: 5, ago: 1, text: 'Moved to Manchester knowing nobody. Played four times in my first week.' }, { who: '@golden_point_gus', stars: 5, ago: 7, text: 'Level filter is spot on. No more lopsided games.' }, { who: '@lefty_lola', stars: 4, ago: 13, text: 'Would love to see which side people play.' } ] },
    { name: 'Padel Score', color: '#2F8CFF', desc: 'Keep score, golden point and all', key: 'padel-score', url: 'apps/padel-score.html',
      dev: 'Punto de Oro', rating: '4.8', users: '92.7K', perms: ['profile', 'feed'],
      tagline: 'Never argue about the score again.',
      about: 'Padel Score keeps the score for you: points, games and sets, with golden point or advantage, and tie-breaks at six-all. Big buttons you can tap between points, and a clear call of who serves next. Share the final to PadelXX when you shake hands at the net.',
      features: ['Points, games and sets in two big buttons', 'Golden point or advantage, your choice', 'Tie-break at six-all', 'Shows who serves next'],
      shots: ['apps/padel-score/shot-1.jpg', 'apps/padel-score/shot-2.jpg', 'apps/padel-score/shot-3.jpg'],
      version: '3.3', size: '10 KB',
      updates: [ { v: '3.3', ago: 4, notes: 'Undo the last point with one tap.' }, { v: '3.1', ago: 110, notes: 'Golden point is now the default, like the tour.' }, { v: '3.0', ago: 230, notes: 'Signed in with GENEXXO.' } ],
      reviews: [ { who: '@golden_point_gus', stars: 5, ago: 2, text: 'Ended a two-year argument about the score in our Thursday game.' }, { who: '@por_tres_pete', stars: 5, ago: 9, text: 'Undo button saved a friendship.' }, { who: '@vibora_vic', stars: 4, ago: 16, text: 'Great. A watch version would be perfect.' } ] },
    { name: 'Level Tracker', color: '#14B8A6', desc: 'Your padel level, match by match', key: 'level-tracker', url: 'apps/level-tracker.html',
      dev: 'Nivel Analytics', rating: '4.7', users: '61.3K', perms: ['profile', 'feed'],
      tagline: 'Log your matches. Watch your level climb.',
      about: 'Level Tracker turns your results into a level from 1.0 to 7.0. Log who you played and the score, and your level moves up or down depending on how strong the other pair was. See your trend over the season and the matches that moved it most.',
      features: ['Log a match in seconds', 'Your level on the 1.0–7.0 scale', 'Season trend chart', 'Share a new personal best to PadelXX'],
      shots: ['apps/level-tracker/shot-1.jpg', 'apps/level-tracker/shot-2.jpg', 'apps/level-tracker/shot-3.jpg'],
      version: '2.4', size: '10 KB',
      updates: [ { v: '2.4', ago: 6, notes: 'Biggest wins highlighted in your history.' }, { v: '2.2', ago: 130, notes: 'Trend chart across the season.' }, { v: '2.0', ago: 250, notes: 'Signed in with GENEXXO.' } ],
      reviews: [ { who: '@bandeja_bella', stars: 5, ago: 3, text: 'From 2.8 to 3.6 since summer. Seeing it is so motivating.' }, { who: '@club_captain_kim', stars: 5, ago: 11, text: 'We use it to balance our club ladder.' }, { who: '@smash_sam', stars: 4, ago: 19, text: 'Honest. Sometimes too honest.' } ] }
  ],
  pros: [
    { key: 'carla-ruiz-padel', name: 'Carla Ruiz Padel Academy', color: '#2F6FED', tag: 'Padel coaching holidays · beginners to advanced', role: 'Padel coach',
      img: U('1646649852046-b758d2d573f3', 800, 800), base: 'Marbella, Spain', langs: 'Spanish, English', years: 13, rating: '4.9', reviewsN: 704, cur: '€',
      creds: ['Former World Padel Tour qualifier', 'Spanish Padel Federation coach, Level 3', 'First-aid certified'],
      about: 'Carla played the pro tour for six years and now runs coaching holidays on the Costa del Sol. Mornings on court, afternoons by the sea, and a level-up you can feel by Friday. Small groups, matched by level.',
      services: [ { id: 'week', name: 'Padel holiday week', dur: '5 days, 15 hours on court', price: 495, desc: 'Daily coaching, match play and video review. Hotel packages available.' },
                  { id: 'private', name: 'Private lesson', dur: '1 hour', price: 60, desc: 'One-to-one or bring your partner. Technique, tactics or both.' },
                  { id: 'clinic', name: 'Bandeja & víbora clinic', dur: '2 hours', price: 45, desc: 'The overheads that win points, broken down and drilled.' } ],
      avail: { days: [1, 2, 3, 4, 5, 6], times: ['09:00', '11:00', '18:00'] },
      reviews: [ { who: '@bandeja_bella', stars: 5, ago: 5, text: 'Best holiday I’ve ever had. My bandeja is finally a weapon.' }, { who: '@uk_padel_dad', stars: 5, ago: 14, text: 'Took my teenage son. He came home a different player.' }, { who: '@lefty_lola', stars: 5, ago: 28, text: 'Carla explains everything simply. Worth every euro.' } ],
      posts: [ { ago: 1, text: 'Winter sun weeks are open: 20 degrees and blue skies in Marbella through February.' }, { ago: 6, text: 'The bandeja is not a smash. Keep it low, keep it deep, keep the net.' } ],
      tier: 'Pro Zone', verified: true },
    { key: 'tom-hale-coaching', name: 'Tom Hale Padel Coaching', color: '#C6F432', tag: 'Padel coaching in London · first lesson to league', role: 'Padel coach',
      img: U('1767128890439-1af9ca2ff1ac', 800, 800), base: 'London, UK', langs: 'English', years: 7, rating: '4.9', reviewsN: 389, cur: '£',
      creds: ['LTA Padel coach accreditation', 'Former county tennis player', 'DBS checked'],
      about: 'Tom switched from tennis to padel seven years ago and never looked back. He coaches beginners through to league players across London, with a gift for unlearning tennis habits: the walls are your friend.',
      services: [ { id: 'intro', name: 'Padel for tennis players', dur: '1 hour', price: 55, desc: 'Grip, the walls and the serve. The fastest way to switch.' },
                  { id: 'group', name: 'Group session (4 players)', dur: '90 minutes', price: 25, desc: 'Per person. Drills and coached match play, matched by level.' },
                  { id: 'private', name: 'Private lesson', dur: '1 hour', price: 70, desc: 'One-to-one or with your partner.' } ],
      avail: { days: [1, 2, 3, 4, 5, 6, 0], times: ['07:00', '12:30', '19:00'] },
      reviews: [ { who: '@ex_tennis_ed', stars: 5, ago: 4, text: 'Thirty years of tennis undone in an hour. Brilliant.' }, { who: '@club_captain_kim', stars: 5, ago: 12, text: 'Our whole club books Tom’s group sessions.' }, { who: '@smash_sam', stars: 4, ago: 22, text: 'Great coach. 7am sessions are brutal.' } ],
      posts: [ { ago: 2, text: 'Group sessions now at The Glasshouse in Canary Wharf, Tuesday and Thursday evenings.' }, { ago: 8, text: 'Let it come off the back glass. Patience wins more points than power.' } ],
      tier: 'Pro Zone', verified: true },
    { key: 'net-physio', name: 'Net Physio', color: '#14B8A6', tag: 'Sports physio for racket players · shoulder, elbow, calf', role: 'Sports physiotherapist',
      img: U('1767128890609-227bdfdb7f5c', 800, 800), base: 'Manchester, UK', langs: 'English', years: 11, rating: '4.8', reviewsN: 276, cur: '£',
      creds: ['HCPC registered physiotherapist', 'MSc Sports Physiotherapy', 'Member of the CSP'],
      about: 'Padel elbow, calf strains and sore shoulders: we see them every week. Net Physio treats racket-sport injuries and gets you back on court with a plan to stop them coming back.',
      services: [ { id: 'assess', name: 'Injury assessment & treatment', dur: '45 minutes', price: 65, desc: 'Diagnosis, hands-on treatment and a rehab plan.' },
                  { id: 'follow', name: 'Follow-up session', dur: '30 minutes', price: 48, desc: 'Treatment and progressing your rehab.' },
                  { id: 'screen', name: 'Padel movement screen', dur: '60 minutes', price: 75, desc: 'Find the weak links before they become injuries.' } ],
      avail: { days: [1, 2, 3, 4, 5], times: ['08:00', '12:00', '17:30'] },
      reviews: [ { who: '@golden_point_gus', stars: 5, ago: 6, text: 'Padel elbow sorted in four sessions. Back playing twice a week.' }, { who: '@vibora_vic', stars: 5, ago: 18, text: 'The movement screen found a hip issue nobody else spotted.' }, { who: '@smash_sam', stars: 4, ago: 35, text: 'Clear and practical.' } ],
      posts: [ { ago: 3, text: 'Calf strains spike when it gets cold. Warm up for ten minutes before you play.' } ],
      tier: 'Pro Zone', verified: true }
  ],
  communities: [
    { key: 'manchester-fourth', name: 'Manchester Find-a-Fourth', domain: 'manchester.padelxx.com', color: '#C6F432', img: U('1767128890948-0e3f70016b8f', 900, 500),
      scope: 'Local', where: 'Manchester', members: 6240, online: 188, tagline: 'Never short of a fourth again.',
      about: 'Padel players across Greater Manchester who post games, fill gaps and meet new partners. Every level, every club, every day of the week. Started in 2021 with twelve people and one WhatsApp group.',
      rules: ['Post your level honestly', 'If you join, turn up', 'Share the court cost fairly'],
      mods: ['@bandeja_bella', '@club_captain_kim'],
      threads: [ { t: 'Need a 3.0–3.5 for Thursday 7pm, Trafford', by: '@golden_point_gus', tag: 'GAME', replies: 12, ago: 0, votes: 28 }, { t: 'Winter league sign-ups are open', by: '@club_captain_kim', tag: 'LEAGUE', replies: 64, ago: 1, votes: 133 }, { t: 'Best indoor courts for cold nights?', by: '@new_padeller', tag: 'Q&A', replies: 41, ago: 2, votes: 59 }, { t: 'Social Americano this Saturday, 16 spots', by: '@bandeja_bella', tag: 'SOCIAL', replies: 33, ago: 3, votes: 87 } ],
      events: [ { title: 'Saturday social Americano', day: 6, time: '10:00', where: 'Trafford, Manchester' }, { title: 'Winter league launch night', day: 3, time: '19:30', where: 'Ancoats, Manchester' } ] },
    { key: 'liga-amateur-madrid', name: 'Liga Amateur Madrid', domain: 'madrid.padelxx.com', color: '#2F8CFF', img: U('1770230901556-4e1c0bacfb09', 900, 500),
      scope: 'Local', where: 'Madrid', members: 14800, online: 402, tagline: 'La liga de todos. Five divisions, every level.',
      about: 'Madrid’s biggest amateur padel league: five divisions, 600 pairs and a season that runs all year. Results, fixtures, banter and the occasional heated debate about whether that ball touched the wire.',
      rules: ['Results posted within 24 hours', 'Respect the referee’s call (there isn’t one)', 'Cañas after the final'],
      mods: ['@vibora_vic', '@por_tres_pete'],
      threads: [ { t: 'Division 2 results, week 9', by: '@por_tres_pete', tag: 'RESULTS', replies: 88, ago: 0, votes: 156 }, { t: 'Did the ball touch the wire? Video inside', by: '@lefty_lola', tag: 'DEBATE', replies: 214, ago: 1, votes: 402 }, { t: 'Christmas tournament draw is out', by: '@vibora_vic', tag: 'TOURNAMENT', replies: 57, ago: 2, votes: 120 } ],
      events: [ { title: 'Christmas tournament, finals day', day: 0, time: '10:00', where: 'Chamartín, Madrid' }, { title: 'Division 1 match night', day: 4, time: '20:00', where: 'Alcobendas, Madrid' } ] }
  ],
  feed: [
    { av: 'PX', avBg: BLUE, author: 'PadelXX Editorial', sub: 'Featured · Just now', badge: '★ FEATURED',
      text: 'The fastest-growing sport in the world, all in one place: find a fourth, book a court, level up with a coach and follow the pro tour.',
      img: U('1770230901556-4e1c0bacfb09', 800, 600), eng: '♡ 33.8K · 💬 4.2K · ↗ 3.1K' },
    { av: 'BB', avBg: LIME, author: '@bandeja_bella', sub: 'Find a Game · Just now', badge: 'COMMUNITY',
      text: 'One year ago I didn’t know what a bandeja was. Today I won my first league match 🎾 Thank you to everyone who ever played as my fourth.',
      img: U('1767128890583-b3f8dc30bdbc', 800, 600), eng: '♡ 7.9K · 💬 812 · ↗ 344' },
    { av: 'SP', avBg: BLUE, author: 'Solera Padel', sub: 'Founding Partner · Brand Zone', badge: 'BRAND ZONE',
      text: 'The new <b>Solera Diamante Carbon</b>: a diamond shape for power, an 18K carbon face for control, and a soft EVA core that saves your elbow.',
      img: U('1787768647981-dab3d52f8f04', 800, 600), eng: '♡ 11.6K · 💬 1.2K · ↗ 1.4K' },
    { av: 'PB', avBg: SUN, author: 'Pared Balls', sub: 'Brand Zone · 1h ago', badge: 'BRAND ZONE',
      text: 'Flat balls ruin good games. <b>Pared Fresh</b> sends tour-grade balls to your door every month, so you always open a new tube.',
      img: U('1646649853517-e2f75cde1908', 800, 600), eng: '♡ 3.6K · 💬 270 · ↗ 312' },
    { av: 'CR', avBg: BLUE, author: 'Carla Ruiz Padel Academy', sub: 'Coaching · 2h ago', badge: 'PRO ZONE',
      text: 'Winter sun padel weeks in Marbella: 20 degrees, blue skies and a coach on every court. Two spaces left in the January group.',
      img: U('1646649851780-d9701b7c3c04', 800, 600), eng: '♡ 2.9K · 💬 205 · ↗ 188' },
    { av: 'GH', avBg: TEAL, author: 'The Glasshouse Padel Clubs', sub: 'Brand Zone · 4h ago', badge: 'BRAND ZONE',
      text: 'Our <b>Leeds</b> club opens on 6 December: eight panoramic indoor courts, a café and a coached session for every new member.',
      img: U('1767128890954-20ce481be8f0', 800, 600), eng: '♡ 4.4K · 💬 380 · ↗ 520' },
    { av: 'LM', avBg: 'linear-gradient(135deg,#2F8CFF,#123A7A)', author: 'Liga Amateur Madrid', sub: 'Pro Tour · 6h ago', badge: 'COMMUNITY',
      text: 'The Christmas tournament draw is out: 128 pairs, five divisions, finals on Sunday 13 December. ¡Suerte a todos!',
      img: U('1646651105426-e8c8ee9badde', 800, 600), eng: '♡ 2.4K · 💬 196 · ↗ 140' }
  ],
  prompts: ['Find me a 3.0–3.5 game near Manchester this week', 'Best padel racket for a tennis player switching over', 'Plan a padel holiday in Spain in February', 'How do I stop getting padel elbow?'],
  businesses: ['panorama-court-systems', 'turfline-surfaces']
};

/* the four Brand Zones and two Business Zones */
const brand = (o) => Object.assign({ kind: 'brand', gw: 'padel', verified: true }, o);
Object.assign(ZONES, {
  'solera-padel': brand({ key: 'solera-padel', name: 'Solera Padel', color: '#2F6FED', gradient: BLUE, tier: 'Founding Partner',
    tagline: 'Carbon rackets, designed and tested in Valencia', stats: { followers: '92.4K', content: '580', products: '44' },
    ad: { badge: 'New', img: U('1787768647981-dab3d52f8f04', 760, 760), hl: 'The Diamante Carbon.', sub: 'Diamond shape for power, 18K carbon for control, a soft core for your elbow.', meta: 'From £89' },
    products: [
      { name: 'Diamante Carbon 18K', price: '£229', tag: 'NEW', emoji: '💎', rating: 4.9, reviews: 1640, cat: 'rackets', special: true, desc: 'Our most powerful racket: diamond shape, high balance, 18K carbon face.', features: ['18K carbon face', 'Soft EVA core', '365 g, high balance'], review: { who: 'Vic M.', text: 'My víbora has never had this much bite.' } },
      { name: 'Redonda Control', price: '£169', tag: 'BESTSELLER', emoji: '⭕', rating: 4.8, reviews: 2380, cat: 'rackets', desc: 'A round shape with a big sweet spot. Our most forgiving racket.', features: ['Round shape', 'Low balance', '355 g'], review: { who: 'Bella R.', text: 'Bought it as a beginner and I still love it two years on.' } },
      { name: 'Lágrima Hybrid', price: '£189', emoji: '💧', rating: 4.8, reviews: 1120, cat: 'rackets', desc: 'A teardrop shape: the balance between power and control.', features: ['Teardrop shape', 'Mid balance', '360 g'], review: { who: 'Gus P.', text: 'Does everything well. My all-rounder.' } },
      { name: 'Starter Racket & Balls', price: '£89', tag: 'BEGINNER', emoji: '🎾', rating: 4.7, reviews: 1860, cat: 'rackets', special: true, desc: 'A light, round racket with a tube of balls and a cover.', features: ['Round, 345 g', 'Tube of 3 balls', 'Cover included'], review: { who: 'Ed T.', text: 'Perfect first racket. Light and easy to hit.' } },
      { name: 'Thermo Racket Bag', price: '£75', emoji: '🎒', rating: 4.8, reviews: 920, cat: 'bags', desc: 'Holds three rackets in a thermal pocket that protects carbon from the heat and cold.', features: ['Thermal racket pocket', 'Shoe compartment', 'Backpack straps'], review: { who: 'Kim L.', text: 'Every club bag I have seen this winter is one of these.' } },
      { name: 'Racket Protector & Grip Pack', price: '£15', emoji: '🛡️', rating: 4.6, reviews: 1420, cat: 'care', desc: 'Frame protector tape and three overgrips.', features: ['Frame protector', '3 overgrips'], review: { who: 'Sam H.', text: 'Saved my racket from the glass more than once.' } },
      { name: 'Trade-in Programme', price: 'Up to £60 off', tag: 'SERVICE', emoji: '♻️', rating: 4.9, reviews: 380, cat: 'care', desc: 'Trade in your old racket for credit. We refurbish them for junior clubs.', features: ['Any brand accepted', 'Rackets go to junior clubs'], review: { who: 'Lola F.', text: 'Love that my old racket went to a kids’ club.' } }
    ],
    shopCats: [ { key: 'rackets', label: 'Rackets', icon: '🎾' }, { key: 'bags', label: 'Bags', icon: '🎒' }, { key: 'care', label: 'Grips & trade-in', icon: '🛡️' } ],
    feed: [
      { type: 'post', sub: 'Brand post · 3h', text: 'The new <b>Diamante Carbon 18K</b>: power, control and an elbow-friendly core.', img: U('1787768647981-dab3d52f8f04', 800, 440), eng: '♡ 11.6K · 💬 1.2K · ↗ 1.4K', product: 0 },
      { type: 'post', sub: 'Testing · Yesterday', text: 'Every new Solera face is tested by club players in Valencia before it goes into production.', img: U('1646649853703-7645147474ba', 800, 440), eng: '♡ 5.0K · 💬 312' },
      { type: 'community', who: 'Ed T.', whoBg: LIME, sub: 'Community · 1d', text: 'I’m switching from tennis. Round, teardrop or diamond?', eng: '♡ 198 · 💬 74', reply: 'Welcome to padel, Ed! Start with a round racket like the Redonda Control: the big sweet spot forgives tennis timing. Move to a teardrop when you start attacking more. 🎾' }
    ],
    events: [ { zoneEvent: true, tag: 'DEMO DAY', title: 'Try the whole range', when: 'Dec 5 · The Glasshouse, Canary Wharf', desc: 'Every Solera racket on court to try, with Tom Hale running free mini-clinics.', registered: 210, capacity: 300 } ],
    about: { founded: 'Valencia, Spain · 2011', story: 'Two club players and an engineer who thought rackets should be tested by the people who play with them. Every Solera racket is designed and tested in Valencia. We joined GENEXXO as PadelXX’s Founding Partner because this is where padel players gather.', milestones: [['2011', 'First racket built in a Valencia workshop'], ['2019', 'The Redonda Control becomes our bestseller'], ['2026', 'Founding Partner on PadelXX']], values: ['Tested by players', 'Elbow-friendly by design', 'Old rackets to junior clubs'] } }),

  'pared-balls': brand({ key: 'pared-balls', name: 'Pared Balls', color: '#C2751A', gradient: SUN, tier: 'Brand Zone',
    tagline: 'Always a fresh tube', stats: { followers: '28.7K', content: '190', products: '12' },
    ad: { badge: 'Featured', img: U('1646649853517-e2f75cde1908', 760, 760), hl: 'Pared Fresh.', sub: 'Tour-grade balls delivered every month. Pause or cancel anytime.', meta: 'From £9/month' },
    products: [
      { name: 'Pared Tour (3 balls)', price: '£6', tag: 'BESTSELLER', emoji: '🎾', rating: 4.8, reviews: 4210, cat: 'balls', desc: 'Pressurised tour-grade balls with a lively, consistent bounce.', features: ['Tour grade', 'Pressurised tube', 'Box of 24 available'], review: { who: 'Gus P.', text: 'Bounce stays true for longer than anything I have tried.' } },
      { name: 'Pared Fresh subscription', price: '£9/mo', tag: 'SUBSCRIPTION', emoji: '📦', rating: 4.9, reviews: 1830, cat: 'subscription', special: true, desc: 'Two tubes delivered every month to your door or your club.', features: ['2 tubes a month', 'Pause anytime', 'Free delivery'], review: { who: 'Kim L.', text: 'Never turn up with dead balls again.' } },
      { name: 'Club Box (72 balls)', price: '£110', tag: 'CLUBS', emoji: '🏢', rating: 4.8, reviews: 540, cat: 'balls', desc: '24 tubes for clubs, academies and leagues.', features: ['24 tubes', 'Volume pricing'], review: { who: 'Carla R.', text: 'What we use at the academy.' } },
      { name: 'Ball Pressuriser', price: '£25', emoji: '🔋', rating: 4.5, reviews: 620, cat: 'accessories', special: true, desc: 'Keeps open balls at pressure between games.', features: ['Holds 4 balls', 'Pump-action'], review: { who: 'Pete D.', text: 'Doubles the life of a tube.' } },
      { name: 'Recycle Your Tubes', price: 'Free', tag: 'SERVICE', emoji: '♻️', rating: 4.9, reviews: 290, cat: 'accessories', desc: 'Send old balls and tubes back; we recycle them into court underlay.', features: ['Free returns bag', 'Any brand'], review: { who: 'Lola F.', text: 'Our club sends a bag every month.' } }
    ],
    shopCats: [ { key: 'balls', label: 'Balls', icon: '🎾' }, { key: 'subscription', label: 'Subscription', icon: '📦' }, { key: 'accessories', label: 'Accessories', icon: '🔋' } ],
    feed: [ { type: 'post', sub: 'Brand post · 1h', text: '<b>Pared Fresh</b>: tour-grade balls every month, so you always open a new tube.', img: U('1646649853517-e2f75cde1908', 800, 440), eng: '♡ 3.6K · 💬 270', product: 1 } ],
    events: [ { zoneEvent: true, tag: 'OFFER', title: 'Clubs: first Club Box half price', when: 'Until Nov 30', desc: 'Clubs and academies get their first 72-ball Club Box at half price.', registered: 140, capacity: 400 } ],
    about: { founded: 'Barcelona, Spain · 2018', story: 'Pared means wall: the thing that makes padel, padel. We make one ball and make it well, and we take the old ones back.', milestones: [['2018', 'First Pared Tour tubes'], ['2022', 'Pared Fresh subscription launches'], ['2026', 'Brand Zone on PadelXX']], values: ['One ball, made well', 'Fresh every month', 'Every tube recycled'] } }),

  'lima-court-wear': brand({ key: 'lima-court-wear', name: 'Lima Court Wear', color: '#6E9A0C', gradient: LIME, tier: 'Brand Zone',
    tagline: 'Grip on the grass, comfort at the glass', stats: { followers: '41.9K', content: '310', products: '68' },
    ad: { badge: 'Featured', img: U('1613870930431-a09c7139eb33', 760, 760), hl: 'The Espiga Court Shoe.', sub: 'A herringbone sole made for sand-filled turf. Stop where you mean to.', meta: 'From £35' },
    products: [
      { name: 'Espiga Court Shoe', price: '£110', tag: 'BESTSELLER', emoji: '👟', rating: 4.9, reviews: 2620, cat: 'shoes', special: true, desc: 'Full herringbone outsole for sand-filled artificial grass, with a reinforced toe for drag shots.', features: ['Herringbone outsole', 'Reinforced toe', 'Cushioned heel'], review: { who: 'Bella R.', text: 'No more slipping on the sand. Game changer.' } },
      { name: 'Espiga Lite', price: '£85', emoji: '👟', rating: 4.7, reviews: 1180, cat: 'shoes', desc: 'Lighter, for indoor courts and quick feet.', features: ['Lightweight mesh', 'Omni sole'], review: { who: 'Tom H.', text: 'What I wear for coaching all day.' } },
      { name: 'Court Polo', price: '£35', emoji: '👕', rating: 4.7, reviews: 860, cat: 'apparel', desc: 'Quick-dry polo with a stretch back panel.', features: ['Recycled polyester', 'Stretch panel'], review: { who: 'Gus P.', text: 'Stays dry through a three-setter.' } },
      { name: 'Skort with Ball Pocket', price: '£42', tag: 'NEW', emoji: '🩳', rating: 4.8, reviews: 640, cat: 'apparel', desc: 'Built-in shorts and a pocket that actually holds a padel ball.', features: ['Ball pocket', 'Built-in shorts'], review: { who: 'Lola F.', text: 'Finally a pocket that fits a ball!' } },
      { name: 'Winter Court Layer', price: '£55', emoji: '🧥', rating: 4.8, reviews: 410, cat: 'apparel', special: true, desc: 'A light thermal half-zip for cold outdoor courts.', features: ['Thermal fleece back', 'Thumb loops'], review: { who: 'Kim L.', text: 'Outdoor winter league essential.' } }
    ],
    shopCats: [ { key: 'shoes', label: 'Shoes', icon: '👟' }, { key: 'apparel', label: 'Apparel', icon: '👕' } ],
    feed: [ { type: 'post', sub: 'Brand post · 5h', text: 'The <b>Espiga Court Shoe</b>: a herringbone sole made for padel turf.', img: U('1613870930431-a09c7139eb33', 800, 440), eng: '♡ 3.1K · 💬 240', product: 0 } ],
    events: [ { zoneEvent: true, tag: 'EVENT', title: 'Shoe fitting night', when: 'Nov 27 · Manchester', desc: 'Try every Espiga on court with a gait check, at the Find-a-Fourth Thursday social.', registered: 72, capacity: 120 } ],
    about: { founded: 'Lisbon, Portugal · 2016', story: 'A padel shoe company first. We started because tennis shoes do not grip sand-filled turf, and we still test every sole on real courts.', milestones: [['2016', 'The first Espiga sole'], ['2023', 'Apparel launches'], ['2026', 'Brand Zone on PadelXX']], values: ['Made for padel', 'Tested on court', 'Recycled materials'] } }),

  'glasshouse-padel': brand({ key: 'glasshouse-padel', name: 'The Glasshouse Padel Clubs', color: '#14B8A6', gradient: TEAL, tier: 'Brand Zone',
    tagline: 'Indoor padel, 6am to 11pm, all year', stats: { followers: '58.3K', content: '420', products: '10' },
    ad: { badge: 'Opening', img: U('1767128890954-20ce481be8f0', 760, 760), hl: 'Leeds opens 6 December.', sub: 'Eight panoramic indoor courts, a café and a coached first session.', meta: 'Courts from £28' },
    products: [
      { name: 'Court booking, peak (90 min)', price: '£48', tag: 'BOOK', emoji: '🏟️', rating: 4.8, reviews: 3820, cat: 'courts', special: true, desc: 'A panoramic indoor court for four, 5pm to 10pm weekdays and weekends.', features: ['Panoramic glass court', 'Racket hire available', 'Split payment between four'], review: { who: 'Kim L.', text: 'Book, split, play. Never easier.' } },
      { name: 'Court booking, off-peak (90 min)', price: '£28', emoji: '🌅', rating: 4.8, reviews: 2140, cat: 'courts', desc: 'Weekdays before 5pm.', features: ['Same courts, lower price', 'Split payment'], review: { who: 'Pete D.', text: 'Lunchtime padel is the best part of my week.' } },
      { name: 'Membership', price: '£39/mo', tag: 'BESTSELLER', emoji: '🔑', rating: 4.9, reviews: 1560, cat: 'membership', special: true, desc: 'Book 14 days ahead, 20% off courts and free socials.', features: ['14-day booking window', '20% off courts', 'All Glasshouse clubs'], review: { who: 'Bella R.', text: 'Pays for itself in three bookings.' } },
      { name: 'Beginner Course (4 weeks)', price: '£80', tag: 'BEGINNER', emoji: '🎓', rating: 4.9, reviews: 980, cat: 'coaching', desc: 'Four coached sessions, rackets included.', features: ['Small groups', 'Rackets and balls included'], review: { who: 'Ed T.', text: 'Went from zero to league in six months.' } },
      { name: 'Friday Social Americano', price: '£15', emoji: '🍹', rating: 4.8, reviews: 740, cat: 'coaching', desc: 'Rotate partners every game, then drinks in the café.', features: ['16 players', 'All levels'], review: { who: 'Lola F.', text: 'Best way to meet new players.' } }
    ],
    shopCats: [ { key: 'courts', label: 'Courts', icon: '🏟️' }, { key: 'membership', label: 'Membership', icon: '🔑' }, { key: 'coaching', label: 'Courses & socials', icon: '🎓' } ],
    feed: [ { type: 'post', sub: 'Brand post · 4h', text: 'Our <b>Leeds</b> club opens on 6 December: eight panoramic indoor courts.', img: U('1767128890954-20ce481be8f0', 800, 440), eng: '♡ 4.4K · 💬 380', product: 2 },
            { type: 'post', sub: 'Club life · 2d', text: 'Friday Americano at Canary Wharf: 16 players, 7 rounds, one very loud café afterwards.', img: U('1767128890948-0e3f70016b8f', 800, 440), eng: '♡ 1.9K · 💬 133' } ],
    events: [ { zoneEvent: true, tag: 'OPENING', title: 'Glasshouse Leeds opening day', when: 'Dec 6 · Leeds', desc: 'Free taster sessions every hour, exhibition match at 6pm.', registered: 520, capacity: 800 } ],
    about: { founded: 'London · 2020', story: 'We opened our first four indoor courts in a Canary Wharf warehouse in 2020. Today the Glasshouse runs six clubs across the UK, all indoor, so the weather never cancels a game.', milestones: [['2020', 'Canary Wharf opens with four courts'], ['2024', 'Manchester and Bristol open'], ['2026', 'Brand Zone on PadelXX']], values: ['Indoor, all year', 'Every level welcome', 'Community first'] } }),

  'panorama-court-systems': { key: 'panorama-court-systems', kind: 'business', gw: 'padel', name: 'Panorama Court Systems', color: '#2F6FED', gradient: BLUE, img: U('1689942963385-f5bd03f3b270', 900, 500),
    tier: 'Verified', category: 'Court construction', tagline: 'Panoramic padel courts, designed, built and installed.',
    about: { founded: 'Seville, Spain · 2007', story: 'We design and build padel courts: panoramic glass, steel frames, LED lighting and roofs for outdoor clubs. Over 4,000 courts installed in 30 countries, from hotel rooftops to 20-court clubs.' },
    stats: { years: 19, staff: 260, clients: '4,000+ courts installed' },
    caps: [ { name: 'Panoramic courts', detail: 'Frameless glass walls on every side, competition specification.' }, { name: 'Covered courts', detail: 'Steel canopies and full buildings so outdoor clubs play all year.' }, { name: 'Lighting & booking tech', detail: 'LED lighting and door access tied to the booking system.' } ],
    specs: { moq: '1 court', lead: '8–12 weeks per court', regions: 'Europe, UK, Middle East', certs: ['FIP court specification', 'EN 12150 tempered glass', 'ISO 9001 & 14001'] },
    supplies: [ { kind: 'brand', key: 'glasshouse-padel', what: 'All 48 courts across the six Glasshouse clubs' } ],
    cases: [ { title: 'The Glasshouse, Leeds', text: 'Eight panoramic indoor courts installed in a former mill in nine weeks.' }, { title: 'Rooftop court, Dubai', text: 'A single panoramic court 40 floors up, lifted in by crane.' } ],
    feed: [ { sub: 'Project · 2d', text: 'Leeds handed over: eight courts, nine weeks, ready for opening day.' }, { sub: 'News · 1w', text: 'Booking slots for spring 2027 installs are now open.' } ],
    contact: { person: 'Javier Morales, Club projects', response: 'Replies within 24 hours' } },

  'turfline-surfaces': { key: 'turfline-surfaces', kind: 'business', gw: 'padel', name: 'Turfline Surfaces', color: '#6E9A0C', gradient: LIME, img: U('1658491830143-72808ca237e3', 900, 500),
    tier: 'Verified', category: 'Sports surfaces', tagline: 'Padel turf supplied, laid and resurfaced.',
    about: { founded: 'Manchester, UK · 2012', story: 'We make and lay artificial grass for padel: texturised and monofilament turf, sand infill and a resurfacing service that brings a tired court back in a day.' },
    stats: { years: 14, staff: 85, clients: '900+ courts surfaced' },
    caps: [ { name: 'Padel turf', detail: 'Texturised and monofilament turf in blue, green and terracotta.' }, { name: 'Resurfacing', detail: 'Lift, replace and re-sand a court in one day.' }, { name: 'Maintenance', detail: 'Brushing, re-sanding and line repairs on a schedule.' } ],
    specs: { moq: '1 court (200 m²)', lead: '2–3 weeks', regions: 'UK & Ireland', certs: ['FIP-tested turf', 'ISO 9001', 'SAPCA member'] },
    supplies: [ { kind: 'brand', key: 'glasshouse-padel', what: 'Turf and monthly maintenance for every Glasshouse court' } ],
    cases: [ { title: 'Glasshouse Canary Wharf', text: 'Four courts resurfaced overnight between Friday and Saturday sessions.' } ],
    feed: [ { sub: 'Tips · 4d', text: 'Re-sand every six weeks. A dry, bare court is a slippery court.' } ],
    contact: { person: 'Priya Shah, Club accounts', response: 'Replies within one working day' } }
});

/* events in the Events tab */
gxEvents('padel', [
  { gw: 'padel', zone: 'glasshouse-padel', type: 'Live', icon: '🔴', live: true, time: 'Live Now', title: 'Glasshouse Live · Canary Wharf Exhibition', desc: 'Exhibition doubles on Court 1 at The Glasshouse, Canary Wharf, with commentary from coach Tom Hale.' },
  { gw: 'padel', zone: 'lima-court-wear', type: 'Event', icon: '👟', time: 'Nov 27', title: 'Shoe fitting night, Manchester', desc: 'Try every Lima Espiga on court with a gait check at the Find-a-Fourth social.' },
  { gw: 'padel', zone: 'pared-balls', type: 'Offer', icon: '🎾', time: 'Nov 30', title: 'Club Box half price ends', desc: 'Clubs and academies: first 72-ball Pared Club Box at half price, until 30 November.' },
  { gw: 'padel', type: 'Event', icon: '🏆', time: 'Dec 2', title: 'Manchester winter league launch', desc: 'Find-a-Fourth’s winter league starts. Five divisions, all levels.' },
  { gw: 'padel', zone: 'solera-padel', type: 'Event', icon: '💎', time: 'Dec 5', title: 'Solera demo day, Canary Wharf', desc: 'Try the whole Solera range at The Glasshouse, with free mini-clinics from Tom Hale.' },
  { gw: 'padel', zone: 'glasshouse-padel', type: 'Event', icon: '🏟️', time: 'Dec 6', title: 'Glasshouse Leeds opening day', desc: 'Eight new indoor courts. Free tasters every hour and an exhibition match at 6pm.' },
  { gw: 'padel', type: 'Event', icon: '🎄', time: 'Dec 13', title: 'Liga Amateur Madrid Christmas finals', desc: '128 pairs, five divisions, finals day in Chamartín.' },
  { gw: 'padel', type: 'Event', icon: '☀️', time: 'Jan 11', title: 'Winter sun padel week, Marbella', desc: 'Carla Ruiz Padel Academy’s January week: five days, fifteen hours on court.' }
]);
})();
/* ═════════ /PADELXX ═════════ */
