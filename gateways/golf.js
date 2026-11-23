/* ═════════ GOLFXX — a Sports demo gateway (2026-11-14, Sean) ═════════
   Built like ClimbXX and ChristmasXX: theme, feed, 4 Brand Zones, 2 Business Zones, 3 Pros, 2 communities, 3 apps, events.
   Palette (light): clubhouse cream, fairway green, links gold, heather. Pinned in PINNED_GWS with BaseballXX and PadelXX.
   Brands, pros and communities are fictional; places are real. Source of truth: _lab/sports/golfxx-block.js. */
(function(){
const U = (id, w, h) => `https://images.unsplash.com/photo-${id}?w=${w}&h=${h}&fit=crop&q=75`;
const FAIRWAY = 'linear-gradient(135deg,#2E8B57,#0F3B26)', GOLD = 'linear-gradient(135deg,#D9B45A,#9C7A2A)', NAVY = 'linear-gradient(135deg,#2B4C7E,#132544)', HEATHER = 'linear-gradient(135deg,#8E6BB8,#4E3473)';

GATEWAYS.golf = {
  name: 'GolfXX', domain: 'golfxx.com', emoji: '⛳', sector: 'sports', live: true,
  tagline: 'The Golf Universe',
  theme: {
    bg: '#F5F3EA', text: '#10261C', cardBg: '#FFFDF6', cardBorder: 'rgba(16,38,28,.08)',
    headerBg: 'linear-gradient(180deg,#E1EADB,#F5F3EA)', accent: '#1F6B3F', accentAlt: '#B8912F', dark: false
  },
  gradient: 'linear-gradient(135deg,#0F3B26,#1F6B3F,#D9B45A)',
  stats: { members: '4.6M', brands: '2,800+', agents: '81' },
  spaces: ['All Feed', 'Courses & Tee Times', 'Coaching', 'Gear', 'Golf Travel', 'The Majors'],
  trending: ['#WinterGolf', '#LinksLife', '#FirstBirdie'],
  brandZones: [
    { key: 'linksmith-clubs', name: 'Linksmith Clubs', color: '#2B4C7E', tier: 'Founding Partner', tag: 'Forged irons and custom fitting, from Fife' },
    { key: 'heather-gorse', name: 'Heather & Gorse', color: '#6B4E9B', tier: 'Brand Zone', tag: 'Golf knitwear and waterproofs for four seasons in one round' },
    { key: 'pinseeker-balls', name: 'Pinseeker Balls', color: '#B8912F', tier: 'Brand Zone', tag: 'Tour-quality balls, personalised' },
    { key: 'caddieline', name: 'Caddieline', color: '#1F6B3F', tier: 'Brand Zone', tag: 'Electric trolleys and carry bags' }
  ],
  apps: [
    { name: 'Scorecard', color: '#1F6B3F', desc: 'Stableford and stroke play, hole by hole', key: 'scorecard', url: 'apps/scorecard.html',
      dev: 'Fairway Software', rating: '4.9', users: '326K', perms: ['profile', 'feed'],
      tagline: 'Your scorecard, your points, worked out as you walk.',
      about: 'Scorecard keeps your score hole by hole and works out Stableford points with your handicap strokes applied to the right holes. No pencil, no maths in the bar afterwards. When you finish, share your round to the GolfXX feed in one tap.',
      features: ['Strokes and Stableford points hole by hole', 'Handicap strokes applied by stroke index', 'Front nine, back nine and totals', 'Share your round to GolfXX'],
      shots: ['apps/scorecard/shot-1.jpg', 'apps/scorecard/shot-2.jpg', 'apps/scorecard/shot-3.jpg'],
      version: '7.0', size: '11 KB',
      updates: [ { v: '7.0', ago: 5, notes: 'New card layout with front and back nine side by side.' }, { v: '6.8', ago: 100, notes: 'Stableford points shown as you go.' }, { v: '6.5', ago: 220, notes: 'Signed in with GENEXXO.' } ],
      reviews: [ { who: '@sunday_hacker_steve', stars: 5, ago: 2, text: 'No more adding up in the clubhouse. 36 points and it told me before I did.' }, { who: '@fourball_fiona', stars: 5, ago: 6, text: 'Simple, quick, and big enough to read in the sun.' }, { who: '@bunker_bill', stars: 4, ago: 15, text: 'Would love a match-play mode.' } ] },
    { name: 'Yardage', color: '#B8912F', desc: 'Distances to the green, and the club', key: 'yardage', url: 'apps/yardage.html',
      dev: 'Linksmith Clubs', rating: '4.8', users: '148K', perms: ['profile', 'feed'],
      tagline: 'Front, middle and back. And which club to hit.',
      about: 'Yardage shows the distance to the front, middle and back of every green, with the hazards in between, and suggests a club from your own distances. Set up your bag once and it knows you hit a 7-iron 150. This demo carries a sample links course.',
      features: ['Front, middle and back of the green', 'Hazards on every hole', 'Club suggestion from your own distances', 'Your bag, set up once'],
      shots: ['apps/yardage/shot-1.jpg', 'apps/yardage/shot-2.jpg', 'apps/yardage/shot-3.jpg'],
      version: '4.2', size: '10 KB',
      updates: [ { v: '4.2', ago: 3, notes: 'Wind adjustment: plays a club more into the breeze.' }, { v: '4.0', ago: 140, notes: 'Your bag: set your own club distances.' }, { v: '3.6', ago: 260, notes: 'Signed in with GENEXXO.' } ],
      reviews: [ { who: '@links_lover_lachlan', stars: 5, ago: 3, text: 'The wind adjustment is spot on for links golf.' }, { who: '@fourball_fiona', stars: 5, ago: 10, text: 'Replaced my rangefinder for casual rounds.' }, { who: '@par3_paddy', stars: 4, ago: 21, text: 'Great. More courses please!' } ] },
    { name: 'Handicap Tracker', color: '#2B4C7E', desc: 'Your handicap index, round by round', key: 'handicap-tracker', url: 'apps/handicap-tracker.html',
      dev: 'Nineteenth Hole Labs', rating: '4.7', users: '89.5K', perms: ['profile', 'feed'],
      tagline: 'Every round counts. See your handicap move.',
      about: 'Handicap Tracker logs your rounds and works out a handicap index the way the World Handicap System does: the best 8 score differentials from your last 20 rounds. Add a round with the course rating and slope, and watch the number come down.',
      features: ['Add a round in seconds', 'Score differentials worked out for you', 'Best 8 of your last 20', 'Share a new low to GolfXX'],
      shots: ['apps/handicap-tracker/shot-1.jpg', 'apps/handicap-tracker/shot-2.jpg', 'apps/handicap-tracker/shot-3.jpg'],
      version: '3.1', size: '9 KB',
      updates: [ { v: '3.1', ago: 7, notes: 'Counting rounds highlighted in your history.' }, { v: '3.0', ago: 160, notes: 'Trend chart across your last 20 rounds.' }, { v: '2.7', ago: 280, notes: 'Signed in with GENEXXO.' } ],
      reviews: [ { who: '@sunday_hacker_steve', stars: 5, ago: 4, text: 'Watched myself go from 22.4 to 18.1 this year. Addictive.' }, { who: '@new_golfer_nadia', stars: 5, ago: 12, text: 'Explains what the numbers mean, which nobody at my club did.' }, { who: '@bunker_bill', stars: 4, ago: 25, text: 'Shows me exactly which bad rounds still count.' } ] }
  ],
  pros: [
    { key: 'emma-blake-golf', name: 'Emma Blake Golf', color: '#1F6B3F', tag: 'PGA Professional · lessons, playing lessons, juniors', role: 'Golf coach',
      img: U('1697448524689-8dfd3d11071e', 800, 800), base: 'Surrey, UK', langs: 'English', years: 15, rating: '4.9', reviewsN: 538, cur: '£',
      creds: ['PGA Professional', 'TPI certified fitness instructor', 'England Golf safeguarding trained'],
      about: 'Emma coaches golfers of every level from a heathland club in Surrey. Lessons use launch-monitor data and video, but the plan is always simple: one change at a time, practised until it holds on the course.',
      services: [ { id: 'lesson', name: 'Full swing lesson', dur: '45 minutes', price: 65, desc: 'Video and launch monitor, a clear fix and the drills to make it stick.' },
                  { id: 'playing', name: 'Nine-hole playing lesson', dur: '2 hours', price: 140, desc: 'Course management, club choice and the shots that cost you most.' },
                  { id: 'short', name: 'Short-game package (3 lessons)', dur: '3 × 45 min', price: 170, desc: 'Chipping, pitching, bunkers and putting: where the shots really are.' } ],
      avail: { days: [2, 3, 4, 5, 6, 0], times: ['08:30', '12:00', '15:30'] },
      reviews: [ { who: '@new_golfer_nadia', stars: 5, ago: 3, text: 'Three lessons and I broke 100 for the first time.' }, { who: '@sunday_hacker_steve', stars: 5, ago: 11, text: 'The playing lesson saved me five shots a round.' }, { who: '@fourball_fiona', stars: 5, ago: 26, text: 'Patient, clear, and funny too.' } ],
      posts: [ { ago: 1, text: 'Winter is when swings get built. Book a block of lessons now and play your best golf in April.' }, { ago: 7, text: 'Most amateurs leave putts short. Aim to finish 18 inches past the hole.' } ],
      tier: 'Pro Zone', verified: true },
    { key: 'callum-reid-fitting', name: 'Callum Reid Club Fitting', color: '#2B4C7E', tag: 'Custom club fitting · irons, driver, putter', role: 'Club fitter',
      img: U('1530028828-25e8270793c5', 800, 800), base: 'St Andrews, Scotland', langs: 'English', years: 18, rating: '4.9', reviewsN: 402, cur: '£',
      creds: ['Master club fitter', 'Former PGA assistant professional', 'Launch-monitor certified'],
      about: 'Callum has fitted clubs in St Andrews for eighteen years. Every fitting is brand-neutral: you hit the heads and shafts that suit your swing, outdoors on a real range, and leave with the numbers to prove it.',
      services: [ { id: 'irons', name: 'Iron fitting', dur: '90 minutes', price: 95, desc: 'Head, shaft, length and lie, fitted outdoors. Fee refunded against a set.' },
                  { id: 'driver', name: 'Driver fitting', dur: '60 minutes', price: 75, desc: 'More carry, less spin, tighter dispersion.' },
                  { id: 'bag', name: 'Full bag fitting', dur: '3 hours', price: 225, desc: 'Driver to putter, with gapping so every club has a job.' } ],
      avail: { days: [1, 2, 3, 4, 5, 6], times: ['09:00', '11:30', '14:30'] },
      reviews: [ { who: '@links_lover_lachlan', stars: 5, ago: 5, text: 'Gained 18 yards with the driver. Unreal.' }, { who: '@par3_paddy', stars: 5, ago: 14, text: 'Honest: told me to keep my old putter.' }, { who: '@bunker_bill', stars: 4, ago: 30, text: 'Worth the trip to St Andrews.' } ],
      posts: [ { ago: 2, text: 'Winter fittings come with indoor launch-monitor bays. No excuses.' } ],
      tier: 'Pro Zone', verified: true },
    { key: 'fairway-escapes', name: 'Fairway Escapes', color: '#B8912F', tag: 'Hosted golf trips · Algarve, Scotland, Ireland', role: 'Golf travel host',
      img: U('1646204221936-35451c74e3de', 800, 800), base: 'Algarve, Portugal', langs: 'English, Portuguese', years: 12, rating: '4.8', reviewsN: 316, cur: '£',
      creds: ['ATOL protected', 'ABTA member', 'Hosted 900+ golf groups'],
      about: 'We host small-group golf trips: the tee times, the transfers, the hotel near the first tee and a host who handles everything else. Winter sun in the Algarve, links weeks in Scotland and Ireland in the summer.',
      services: [ { id: 'algarve', name: 'Algarve winter sun (4 rounds)', dur: '5 nights', price: 895, desc: 'Four rounds on Algarve courses, hotel, transfers and a hosted dinner.' },
                  { id: 'links', name: 'Scottish links week (5 rounds)', dur: '7 nights', price: 1890, desc: 'Fife and East Lothian links, with a day for the St Andrews ballot.' },
                  { id: 'society', name: 'Golf society trip planning', dur: 'Call + itinerary', price: 95, desc: 'A tailored trip for groups of 8 or more. Fee refunded when you book.' } ],
      avail: { days: [1, 2, 3, 4, 5], times: ['10:00', '14:00'] },
      reviews: [ { who: '@fourball_fiona', stars: 5, ago: 9, text: 'Algarve in February, 20 degrees, four rounds. Bliss.' }, { who: '@golf_society_gary', stars: 5, ago: 20, text: 'Planned our 16-man society trip perfectly.' }, { who: '@links_lover_lachlan', stars: 4, ago: 45, text: 'Links week was a dream. Bring waterproofs!' } ],
      posts: [ { ago: 1, text: 'February Algarve weeks are filling. Escape the frost.' }, { ago: 8, text: 'Links week 2027 dates are live: June and September.' } ],
      tier: 'Pro Zone', verified: true }
  ],
  communities: [
    { key: 'old-course-ballot-club', name: 'The Old Course Ballot Club', domain: 'ballot.golfxx.com', color: '#B8912F', img: U('1672871582992-1b30b19878f5', 900, 500),
      scope: 'Global', where: 'St Andrews and everywhere', members: 21600, online: 340, tagline: 'Everyone who has tried the ballot. Some of us got lucky.',
      about: 'Golfers from all over the world who dream of the Old Course at St Andrews. We share ballot tips, celebrate the lucky ones, swap tee-time stories and organise meet-ups for anyone travelling to the Home of Golf.',
      rules: ['Celebrate every ballot win', 'No tee-time reselling', 'Respect the Old Course'],
      mods: ['@links_lover_lachlan', '@swilcan_sue'],
      threads: [ { t: 'Got in! Old Course tomorrow at 8:40 🎉', by: '@par3_paddy', tag: 'BALLOT', replies: 186, ago: 0, votes: 512 }, { t: 'Best time of year to try the ballot?', by: '@first_timer_finn', tag: 'Q&A', replies: 74, ago: 1, votes: 133 }, { t: 'Winter links: the Old Course in November', by: '@swilcan_sue', tag: 'COURSES', replies: 48, ago: 2, votes: 97 }, { t: 'Meet-up at the Swilcan Bridge, December', by: '@links_lover_lachlan', tag: 'MEET', replies: 29, ago: 4, votes: 66 } ],
      events: [ { title: 'Swilcan Bridge photo meet-up', day: 6, time: '10:00', where: 'St Andrews, Fife' }, { title: 'Online ballot tips session', day: 3, time: '19:00', where: 'Online' } ] },
    { key: 'sunday-hackers-leeds', name: 'Sunday Hackers, Leeds', domain: 'leeds.golfxx.com', color: '#1F6B3F', img: U('1757874905852-ea4596dd221a', 900, 500),
      scope: 'Local', where: 'Leeds', members: 1860, online: 46, tagline: 'High handicaps, low stress, good company.',
      about: 'A friendly society for golfers who love the game more than it loves them. Sunday rounds at municipal and member courses around Leeds, a winter league, and a monthly prize for the best story from the course.',
      rules: ['Every handicap welcome', 'Repair your pitch marks', 'The best story wins, not the best score'],
      mods: ['@sunday_hacker_steve', '@new_golfer_nadia'],
      threads: [ { t: 'Winter league draw: who is in group B?', by: '@sunday_hacker_steve', tag: 'LEAGUE', replies: 44, ago: 0, votes: 81 }, { t: 'Lost 9 balls on Sunday. Ask me anything.', by: '@bunker_bill', tag: 'STORIES', replies: 67, ago: 1, votes: 158 }, { t: 'Any courses with winter greens that are still decent?', by: '@new_golfer_nadia', tag: 'Q&A', replies: 31, ago: 3, votes: 52 } ],
      events: [ { title: 'Sunday society round', day: 0, time: '09:30', where: 'Roundhay, Leeds' }, { title: 'Christmas Texas Scramble', day: 6, time: '10:00', where: 'Leeds' } ] }
  ],
  feed: [
    { av: 'GX', avBg: FAIRWAY, author: 'GolfXX Editorial', sub: 'Featured · Just now', badge: '★ FEATURED',
      text: 'Tee times, coaching, the clubs that suit your swing and the trips worth taking. From your first birdie to the Old Course ballot: golf, all in one place.',
      img: U('1646204221936-35451c74e3de', 800, 600), eng: '♡ 52.7K · 💬 6.4K · ↗ 4.8K' },
    { av: 'PP', avBg: GOLD, author: '@par3_paddy', sub: 'Courses & Tee Times · Just now', badge: 'COMMUNITY',
      text: 'Fourteen years of entering the ballot. Tomorrow at 8:40, I play the Old Course. I might not sleep tonight ⛳',
      img: U('1672871583062-7613925d0734', 800, 600), eng: '♡ 14.3K · 💬 1.9K · ↗ 820' },
    { av: 'LS', avBg: NAVY, author: 'Linksmith Clubs', sub: 'Founding Partner · Brand Zone', badge: 'BRAND ZONE',
      text: 'The <b>Kingdom Forged irons</b>: one-piece forged in carbon steel, ground by hand in Fife, fitted to your swing before they leave the workshop.',
      img: U('1530028828-25e8270793c5', 800, 600), eng: '♡ 10.8K · 💬 960 · ↗ 1.3K' },
    { av: 'HG', avBg: HEATHER, author: 'Heather & Gorse', sub: 'Brand Zone · 1h ago', badge: 'BRAND ZONE',
      text: 'Four seasons in one round? Meet <b>The Haar</b>: a fully waterproof jacket quiet enough to swing in, light enough to forget you are wearing it.',
      img: U('1592919505780-303950717480', 800, 600), eng: '♡ 4.6K · 💬 318 · ↗ 402' },
    { av: 'NA', avBg: FAIRWAY, author: '@new_golfer_nadia', sub: 'Coaching · 2h ago', badge: 'COMMUNITY',
      text: 'Broke 100 for the first time today! Three lessons with Emma Blake and a lot of practice on the putting green 🏌️‍♀️',
      img: U('1587174486073-ae5e5cff23aa', 800, 600), eng: '♡ 5.2K · 💬 640 · ↗ 210' },
    { av: 'CL', avBg: FAIRWAY, author: 'Caddieline', sub: 'Brand Zone · 4h ago', badge: 'BRAND ZONE',
      text: 'The <b>Caddieline Follow</b> electric trolley walks the course with you, hands-free. 36 holes on one charge, and it folds into any boot.',
      img: U('1593282153762-a41e3cceb06c', 800, 600), eng: '♡ 3.7K · 💬 290 · ↗ 380' },
    { av: 'FE', avBg: GOLD, author: 'Fairway Escapes', sub: 'Golf Travel · 6h ago', badge: 'PRO ZONE',
      text: 'February in the Algarve: blue skies, 19 degrees and four rounds on the coast. Two rooms left in our hosted week.',
      img: U('1635328800844-0e68e80ab258', 800, 600), eng: '♡ 2.8K · 💬 176 · ↗ 245' }
  ],
  prompts: ['Book me a tee time near Leeds this Sunday morning', 'How do I enter the Old Course ballot at St Andrews?', 'Plan a 4-round golf trip to the Algarve in February', 'What handicap would I get from these three scores?'],
  businesses: ['greenkeeper-supply-co', 'clubhouse-fleet']
};

/* the four Brand Zones and two Business Zones */
const brand = (o) => Object.assign({ kind: 'brand', gw: 'golf', verified: true }, o);
Object.assign(ZONES, {
  'linksmith-clubs': brand({ key: 'linksmith-clubs', name: 'Linksmith Clubs', color: '#2B4C7E', gradient: NAVY, tier: 'Founding Partner',
    tagline: 'Forged and fitted in Fife since 1898', stats: { followers: '104K', content: '720', products: '64' },
    ad: { badge: 'Featured', img: U('1530028828-25e8270793c5', 760, 760), hl: 'The Kingdom Forged irons.', sub: 'One-piece forged, ground by hand, fitted to your swing.', meta: 'From £149' },
    products: [
      { name: 'Kingdom Forged Irons (4–PW)', price: '£1,095', tag: 'FLAGSHIP', emoji: '🏌️', rating: 4.9, reviews: 1480, cat: 'irons', special: true, desc: 'One-piece forged carbon-steel blades with a touch of cavity for forgiveness.', features: ['Forged 1025 carbon steel', 'Hand-ground soles', 'Custom fitting included'], review: { who: 'Lachlan M.', text: 'The feel off the face is like nothing I have hit. Worth every penny.' } },
      { name: 'Kingdom Game-Improvement Irons', price: '£795', tag: 'BESTSELLER', emoji: '⛳', rating: 4.8, reviews: 2210, cat: 'irons', desc: 'Hollow-body irons that launch high and forgive the thin ones.', features: ['Hollow body', 'Wide sole', 'Fitted lie and length'], review: { who: 'Steve H.', text: 'My 7-iron finally gets off the ground.' } },
      { name: 'East Neuk Driver', price: '£449', emoji: '🚀', rating: 4.7, reviews: 960, cat: 'woods', desc: 'Adjustable 460cc driver with low spin and a forgiving face.', features: ['460cc titanium head', 'Adjustable loft', 'Fitted shaft'], review: { who: 'Bill T.', text: 'Fifteen yards longer and in the fairway more.' } },
      { name: 'Tom’s Wedge', price: '£149', emoji: '🪓', rating: 4.9, reviews: 1320, cat: 'wedges', special: true, desc: 'A forged wedge with a sole grind for tight links lies.', features: ['50° to 60°', 'Three sole grinds', 'Raw finish that rusts beautifully'], review: { who: 'Fiona K.', text: 'Bump-and-runs like a dream.' } },
      { name: 'Swilcan Putter', price: '£295', tag: 'HANDMADE', emoji: '🎯', rating: 4.9, reviews: 680, cat: 'putters', desc: 'Milled from a single block of steel in our Fife workshop.', features: ['CNC milled', 'Fitted length and lie', 'Personalised stamping'], review: { who: 'Paddy O.', text: 'Holed everything from six feet for a month.' } },
      { name: 'Regrip & Loft-Lie Check', price: '£45', tag: 'SERVICE', emoji: '🔧', rating: 4.9, reviews: 540, cat: 'service', desc: 'Every club regripped and bent back to spec. Any brand.', features: ['Up to 14 clubs', 'Back in 5 days'], review: { who: 'Nadia S.', text: 'My old set feels new.' } }
    ],
    shopCats: [ { key: 'irons', label: 'Irons', icon: '🏌️' }, { key: 'woods', label: 'Woods', icon: '🚀' }, { key: 'wedges', label: 'Wedges', icon: '🪓' }, { key: 'putters', label: 'Putters', icon: '🎯' }, { key: 'service', label: 'Service', icon: '🔧' } ],
    feed: [
      { type: 'post', sub: 'Brand post · 3h', text: 'The <b>Kingdom Forged irons</b>: forged, ground by hand, fitted to you.', img: U('1530028828-25e8270793c5', 800, 440), eng: '♡ 10.8K · 💬 960 · ↗ 1.3K', product: 0 },
      { type: 'post', sub: 'Workshop · Yesterday', text: 'Every Swilcan putter is milled, then finished by hand by one of four people in our Fife workshop.', img: U('1765198955329-54f2ece22c52', 800, 440), eng: '♡ 5.6K · 💬 340' },
      { type: 'community', who: 'Nadia S.', whoBg: FAIRWAY, sub: 'Community · 1d', text: 'I’m a 28 handicap. Are forged irons too much for me?', eng: '♡ 212 · 💬 58', reply: 'Good question, Nadia. At 28, our Kingdom Game-Improvement irons will help more: a hollow body that launches high and forgives off-centre hits. Come in for a fitting and we will show you the numbers. ⛳' }
    ],
    events: [ { zoneEvent: true, tag: 'EVENT', title: 'Workshop open day: forge to fitting', when: 'Dec 5 · St Andrews + livestream', desc: 'See an iron ground by hand, then hit the range on a launch monitor.', registered: 480, capacity: 700 } ],
    about: { founded: 'St Andrews, Fife · 1898', story: 'A clubmaker’s workshop a mile from the Old Course, making clubs by hand for more than a century. We joined GENEXXO as GolfXX’s Founding Partner because this is where golfers who care about their game gather.', milestones: [['1898', 'The first hickory clubs made in Fife'], ['1985', 'The Kingdom Forged line begins'], ['2026', 'Founding Partner on GolfXX']], values: ['Forged and fitted', 'Made by hand', 'Repair before replace'] } }),

  'heather-gorse': brand({ key: 'heather-gorse', name: 'Heather & Gorse', color: '#6B4E9B', gradient: HEATHER, tier: 'Brand Zone',
    tagline: 'Four seasons, one round', stats: { followers: '47.1K', content: '360', products: '82' },
    ad: { badge: 'New', img: U('1592919505780-303950717480', 760, 760), hl: 'The Haar jacket.', sub: 'Fully waterproof, silent when you swing, light enough to forget.', meta: 'From £45' },
    products: [
      { name: 'The Haar Waterproof Jacket', price: '£189', tag: 'NEW', emoji: '🧥', rating: 4.9, reviews: 1120, cat: 'waterproofs', special: true, desc: 'A three-layer waterproof that does not rustle at the top of your swing.', features: ['20,000 mm waterproof', 'Silent stretch fabric', 'Packs into its pocket'], review: { who: 'Lachlan M.', text: 'Played Carnoustie in a gale and stayed dry.' } },
      { name: 'Lambswool V-neck', price: '£95', tag: 'BESTSELLER', emoji: '🧶', rating: 4.8, reviews: 1860, cat: 'knitwear', desc: 'Scottish lambswool in heather, navy and bottle green.', features: ['Scottish lambswool', 'Knitted in the Borders'], review: { who: 'Fiona K.', text: 'Warm, smart, and lasts for years.' } },
      { name: 'Thermal Base Layer', price: '£45', emoji: '🌡️', rating: 4.7, reviews: 940, cat: 'layers', desc: 'Merino base layer for frosty winter rounds.', features: ['Merino blend', 'Flat seams'], review: { who: 'Steve H.', text: 'Winter golf without the shivering.' } },
      { name: 'Waterproof Trousers', price: '£110', emoji: '👖', rating: 4.8, reviews: 760, cat: 'waterproofs', desc: 'Stretch waterproof trousers with ankle zips over your shoes.', features: ['Full waterproof', 'Ankle zips'], review: { who: 'Bill T.', text: 'Comfortable enough to wear all round.' } },
      { name: 'Winter Mitts (pair)', price: '£28', tag: 'WINTER', emoji: '🧤', rating: 4.7, reviews: 1320, cat: 'layers', special: true, desc: 'Fleece-lined cart mitts to keep your hands warm between shots.', features: ['Fleece lined', 'Slip on and off'], review: { who: 'Nadia S.', text: 'December golf essential.' } },
      { name: 'Repair & Re-proof', price: '£25', tag: 'SERVICE', emoji: '🪡', rating: 4.9, reviews: 310, cat: 'service', desc: 'Seams re-taped and waterproofing renewed. Any brand.', features: ['Re-tape and re-proof', '10-day turnaround'], review: { who: 'Gary P.', text: 'My eight-year-old jacket is waterproof again.' } }
    ],
    shopCats: [ { key: 'waterproofs', label: 'Waterproofs', icon: '🧥' }, { key: 'knitwear', label: 'Knitwear', icon: '🧶' }, { key: 'layers', label: 'Layers & mitts', icon: '🌡️' }, { key: 'service', label: 'Repair', icon: '🪡' } ],
    feed: [ { type: 'post', sub: 'Brand post · 1h', text: 'Meet <b>The Haar</b>: fully waterproof and silent at the top of your swing.', img: U('1592919505780-303950717480', 800, 440), eng: '♡ 4.6K · 💬 318', product: 0 } ],
    events: [ { zoneEvent: true, tag: 'DEADLINE', title: 'Last order for Christmas delivery', when: 'Dec 17 · 23:59', desc: 'Order by midnight on 17 December for delivery before Christmas.', registered: 1260, capacity: 4000 } ],
    about: { founded: 'North Berwick, East Lothian · 2005', story: 'We started making golf clothes for the weather on the East Lothian links: wind, rain, sun and haar, sometimes in one round.', milestones: [['2005', 'First waterproofs sold in a North Berwick pro shop'], ['2018', 'Knitwear made in the Scottish Borders'], ['2026', 'Brand Zone on GolfXX']], values: ['Made for real weather', 'Knitted in Scotland', 'Repair and re-proof'] } }),

  'pinseeker-balls': brand({ key: 'pinseeker-balls', name: 'Pinseeker Balls', color: '#B8912F', gradient: GOLD, tier: 'Brand Zone',
    tagline: 'Tour quality, without the tour price', stats: { followers: '36.4K', content: '220', products: '18' },
    ad: { badge: 'Featured', img: U('1562204320-31975a5e09ce', 760, 760), hl: 'Pinseeker Tour, personalised.', sub: 'A urethane tour ball with your name, initials or a message.', meta: 'From £24 a dozen' },
    products: [
      { name: 'Pinseeker Tour (dozen)', price: '£39', tag: 'BESTSELLER', emoji: '⚪', rating: 4.8, reviews: 3640, cat: 'balls', special: true, desc: 'Four-piece urethane ball with tour spin around the greens.', features: ['Urethane cover', 'Four-piece', 'White or yellow'], review: { who: 'Fiona K.', text: 'Same spin as the big brands at half the price.' } },
      { name: 'Pinseeker Soft (dozen)', price: '£24', emoji: '🟡', rating: 4.7, reviews: 2120, cat: 'balls', desc: 'Low compression for slower swing speeds. Long and soft.', features: ['Low compression', 'Ionomer cover'], review: { who: 'Steve H.', text: 'Perfect for my swing speed.' } },
      { name: 'Personalised Dozen', price: '£45', tag: 'PERSONALISED', emoji: '✍️', rating: 4.9, reviews: 1460, cat: 'gifts', special: true, desc: 'Up to three lines of text or a logo on every ball.', features: ['Up to 3 lines', 'Order by 12 December for Christmas'], review: { who: 'Gary P.', text: 'Our society balls look brilliant.' } },
      { name: 'Hole-in-One Gift Box', price: '£29', tag: 'GIFT', emoji: '🎁', rating: 4.8, reviews: 620, cat: 'gifts', desc: 'A display box for that once-in-a-lifetime ball, engraved with the date and hole.', features: ['Oak display case', 'Engraved plaque'], review: { who: 'Paddy O.', text: 'Hole 7, 2026. Forever.' } },
      { name: 'Ball Fitting', price: 'Free', tag: 'SERVICE', emoji: '🎯', rating: 4.9, reviews: 380, cat: 'service', desc: 'Answer six questions about your game and we match you to a ball.', features: ['Free online', 'Sample sleeve'], review: { who: 'Nadia S.', text: 'Didn’t know it mattered until I tried.' } }
    ],
    shopCats: [ { key: 'balls', label: 'Balls', icon: '⚪' }, { key: 'gifts', label: 'Personalised & gifts', icon: '🎁' }, { key: 'service', label: 'Ball fitting', icon: '🎯' } ],
    feed: [ { type: 'post', sub: 'Brand post · 6h', text: 'Christmas: order <b>personalised Pinseeker Tour</b> balls by 12 December.', img: U('1562204320-31975a5e09ce', 800, 440), eng: '♡ 2.8K · 💬 190', product: 2 } ],
    events: [ { zoneEvent: true, tag: 'DEADLINE', title: 'Personalised orders for Christmas', when: 'Dec 12 · 23:59', desc: 'Personalised balls ordered by 12 December arrive before Christmas.', registered: 2040, capacity: 6000 } ],
    about: { founded: 'Birmingham · 2015', story: 'Three golfers who thought a tour ball should not cost £60 a dozen. We sell direct, so you get tour quality for less.', milestones: [['2015', 'Pinseeker Tour launches online'], ['2021', 'Personalisation launches'], ['2026', 'Brand Zone on GolfXX']], values: ['Tour quality, fair price', 'Direct to golfers', 'Recycled packaging'] } }),

  'caddieline': brand({ key: 'caddieline', name: 'Caddieline', color: '#1F6B3F', gradient: FAIRWAY, tier: 'Brand Zone',
    tagline: 'Walk the course. Carry nothing.', stats: { followers: '29.8K', content: '180', products: '22' },
    ad: { badge: 'Featured', img: U('1593282153762-a41e3cceb06c', 760, 760), hl: 'Caddieline Follow.', sub: 'An electric trolley that walks with you, hands-free, for 36 holes.', meta: 'From £159' },
    products: [
      { name: 'Caddieline Follow', price: '£1,295', tag: 'FLAGSHIP', emoji: '🛒', rating: 4.8, reviews: 860, cat: 'trolleys', special: true, desc: 'Follows you hands-free on the course, or use the remote.', features: ['Follow mode and remote', '36 holes per charge', 'Folds in one move'], review: { who: 'Gary P.', text: 'My back thanks me every Sunday.' } },
      { name: 'Caddieline Classic Electric', price: '£549', tag: 'BESTSELLER', emoji: '🔋', rating: 4.8, reviews: 1940, cat: 'trolleys', desc: 'A simple, tough electric trolley with a lithium battery.', features: ['27 holes per charge', 'Distance timer'], review: { who: 'Bill T.', text: 'Bulletproof. Five years and counting.' } },
      { name: 'Links Carry Bag', price: '£159', emoji: '🎒', rating: 4.7, reviews: 1120, cat: 'bags', desc: 'Light stand bag with a waterproof hood and dual straps.', features: ['1.9 kg', 'Waterproof', '14-way top'], review: { who: 'Lachlan M.', text: 'Perfect for links walking.' } },
      { name: 'Winter Wheel Kit', price: '£49', tag: 'WINTER', emoji: '❄️', rating: 4.6, reviews: 410, cat: 'accessories', desc: 'Wide winter wheels that do not damage soft fairways.', features: ['Course-approved', 'Fits all Caddieline trolleys'], review: { who: 'Steve H.', text: 'Our club allows trolleys all winter with these.' } },
      { name: 'Battery Health Check', price: '£20', tag: 'SERVICE', emoji: '🔧', rating: 4.9, reviews: 290, cat: 'accessories', desc: 'Send your battery in; we test, balance and return it in 5 days.', features: ['Any lithium golf battery', '5-day turnaround'], review: { who: 'Fiona K.', text: 'Like new for £20.' } }
    ],
    shopCats: [ { key: 'trolleys', label: 'Trolleys', icon: '🛒' }, { key: 'bags', label: 'Bags', icon: '🎒' }, { key: 'accessories', label: 'Winter & service', icon: '❄️' } ],
    feed: [ { type: 'post', sub: 'Brand post · 4h', text: 'The <b>Caddieline Follow</b> walks the course with you, hands-free.', img: U('1593282153762-a41e3cceb06c', 800, 440), eng: '♡ 3.7K · 💬 290', product: 0 } ],
    events: [ { zoneEvent: true, tag: 'DEMO DAY', title: 'Try the Follow on the course', when: 'Dec 6 · Roundhay, Leeds', desc: 'Walk nine holes with a Caddieline Follow at the Sunday Hackers’ round.', registered: 36, capacity: 60 } ],
    about: { founded: 'Nottingham · 2012', story: 'Engineers who love walking golf courses. We build trolleys that last, and we repair them rather than sell you a new one.', milestones: [['2012', 'The first Classic Electric'], ['2025', 'The Follow launches'], ['2026', 'Brand Zone on GolfXX']], values: ['Built to last', 'Kind to the course', 'Repair first'] } }),

  'greenkeeper-supply-co': { key: 'greenkeeper-supply-co', kind: 'business', gw: 'golf', name: 'Greenkeeper Supply Co', color: '#1F6B3F', gradient: FAIRWAY, img: U('1605144884374-ecbb643615f6', 900, 500),
    tier: 'Verified', category: 'Turf & course maintenance', tagline: 'Seed, sand, feed and machinery for golf courses.',
    about: { founded: 'York · 1974', story: 'We supply greenkeepers: fine fescue and bentgrass seed, top-dressing sand, feeds and the machines that keep greens rolling true. From nine-hole village courses to championship links.' },
    stats: { years: 52, staff: 180, clients: '1,400+ golf courses' },
    caps: [ { name: 'Seed & top-dressing', detail: 'Fescue, bentgrass and rye blends; top-dressing sands to spec.' }, { name: 'Feeds & turf health', detail: 'Seasonal programmes built with your course manager.' }, { name: 'Machinery', detail: 'Greens mowers, aerators and rollers, sold or leased with servicing.' } ],
    specs: { moq: '1 pallet', lead: '3–5 days; machinery 2–6 weeks', regions: 'UK & Ireland', certs: ['BIGGA trade partner', 'Amenity Assured', 'ISO 14001'] },
    supplies: [ { kind: 'brand', key: 'caddieline', what: 'Course-approved winter wheels tested on member courses' } ],
    cases: [ { title: 'Links greens renovation, Fife', text: 'Eighteen greens overseeded with fine fescue in the autumn and rolling true by spring.' } ],
    feed: [ { sub: 'Season · 3d', text: 'Autumn aeration season is in full swing. Book hollow-tining equipment now.' }, { sub: 'Tips · 1w', text: 'Frosty mornings: keep members off the greens until the frost lifts.' } ],
    contact: { person: 'Helen Ward, Course accounts', response: 'Replies within 24 hours' } },

  'clubhouse-fleet': { key: 'clubhouse-fleet', kind: 'business', gw: 'golf', name: 'Clubhouse Fleet', color: '#B8912F', gradient: GOLD, img: U('1758190153146-a1507e2e000d', 900, 500),
    tier: 'Verified', category: 'Golf buggies & fleet', tagline: 'Electric golf buggies for clubs, leased and serviced.',
    about: { founded: 'Coventry · 2003', story: 'We lease, service and manage electric buggy fleets for golf clubs and resorts, with GPS fleet tracking and geofencing to keep buggies off the greens.' },
    stats: { years: 23, staff: 95, clients: '420 clubs & resorts' },
    caps: [ { name: 'Fleet leasing', detail: 'Lithium electric buggies on 3- or 5-year leases, servicing included.' }, { name: 'GPS & geofencing', detail: 'Live fleet map, course-condition lockouts and pace-of-play reports.' }, { name: 'Servicing', detail: 'Mobile engineers and a 48-hour repair promise.' } ],
    specs: { moq: '10 buggies', lead: '4–8 weeks', regions: 'UK, Ireland & Portugal', certs: ['ISO 9001', 'Lithium battery safety certified', 'Fleet emissions: zero at point of use'] },
    supplies: [ { kind: 'brand', key: 'linksmith-clubs', what: 'Buggies for Linksmith’s on-course fitting days' } ],
    cases: [ { title: 'Algarve resort fleet', text: '80 lithium buggies with GPS across two resort courses.' } ],
    feed: [ { sub: 'News · 5d', text: 'Winter fleet checks: free battery health tests for every leased buggy in December.' } ],
    contact: { person: 'Ollie Grant, Club partnerships', response: 'Replies within one working day' } }
});

/* events in the Events tab */
gxEvents('golf', [
  { gw: 'golf', zone: 'linksmith-clubs', type: 'Live', icon: '🔴', live: true, time: 'Live Now', title: 'Linksmith Live · Forge Cam, St Andrews', desc: 'Watch a Kingdom Forged iron ground by hand in the Fife workshop, and ask the fitter anything.' },
  { gw: 'golf', type: 'Event', icon: '🌉', time: 'Nov 28', title: 'Swilcan Bridge meet-up, St Andrews', desc: 'The Old Course Ballot Club meets at the bridge for a photo and a coffee. Everyone welcome.' },
  { gw: 'golf', zone: 'linksmith-clubs', type: 'Event', icon: '🏌️', time: 'Dec 5', title: 'Linksmith workshop open day', desc: 'See an iron ground by hand in St Andrews, then hit the range on a launch monitor.' },
  { gw: 'golf', zone: 'caddieline', type: 'Event', icon: '🛒', time: 'Dec 6', title: 'Caddieline Follow demo, Leeds', desc: 'Walk nine holes with the hands-free trolley at the Sunday Hackers’ round.' },
  { gw: 'golf', zone: 'pinseeker-balls', type: 'Deadline', icon: '⚪', time: 'Dec 12', title: 'Personalised balls for Christmas', desc: 'Order personalised Pinseeker balls by midnight to arrive before Christmas.' },
  { gw: 'golf', type: 'Event', icon: '🎄', time: 'Dec 13', title: 'Christmas Texas Scramble, Leeds', desc: 'Sunday Hackers’ festive scramble: teams of four, fancy dress optional, mince pies at the turn.' },
  { gw: 'golf', zone: 'heather-gorse', type: 'Deadline', icon: '🧥', time: 'Dec 17', title: 'Last order for Christmas delivery', desc: 'Heather & Gorse: order by midnight for delivery before Christmas.' },
  { gw: 'golf', type: 'Event', icon: '☀️', time: 'Feb 8', title: 'Algarve winter sun week', desc: 'Fairway Escapes’ hosted February week: five nights and four rounds on the coast.' }
]);
})();
/* ═════════ /GOLFXX ═════════ */
