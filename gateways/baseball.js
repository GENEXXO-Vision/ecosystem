/* ═════════ BASEBALLXX — a Sports demo gateway (2026-11-14, Sean) ═════════
   Built like ClimbXX and ChristmasXX: theme, feed, 4 Brand Zones, 2 Business Zones, 3 Pros, 2 communities, 3 apps, events.
   Palette: night-game navy, stitch red, infield clay, chalk. Pinned in PINNED_GWS with PadelXX and GolfXX.
   Brands, pros and communities are fictional; places are real. Source of truth: _lab/sports/baseballxx-block.js. */
(function(){
const U = (id, w, h) => `https://images.unsplash.com/photo-${id}?w=${w}&h=${h}&fit=crop&q=75`;
const NAVY = 'linear-gradient(135deg,#1C3A6B,#0B1424)', RED = 'linear-gradient(135deg,#D62839,#7E1420)', CLAY = 'linear-gradient(135deg,#E0A458,#A8642A)', GRASS = 'linear-gradient(135deg,#2E8B57,#145A32)';

GATEWAYS.baseball = {
  name: 'BaseballXX', domain: 'baseballxx.com', emoji: '⚾', sector: 'sports', live: true,
  tagline: 'The Baseball Universe',
  theme: {
    bg: '#0B1424', text: '#F2EEE6', cardBg: 'rgba(255,255,255,.045)', cardBorder: 'rgba(224,164,88,.14)',
    headerBg: 'linear-gradient(180deg,#1C3A6B,#0B1424)', accent: '#D62839', accentAlt: '#E0A458', dark: true
  },
  gradient: 'linear-gradient(135deg,#1C3A6B,#2E8B57,#D62839)',
  stats: { members: '3.4M', brands: '1,900+', agents: '72' },
  spaces: ['All Feed', 'Scores & Stats', 'Gear', 'Coaching', 'Ballparks', 'Cards & Collecting'],
  trending: ['#HotStove', '#WinterBall', '#BallparkRoadTrip'],
  brandZones: [
    { key: 'ironwood-bat-co', name: 'Ironwood Bat Co', color: '#7A4A22', tier: 'Founding Partner', tag: 'Hand-turned maple and ash bats' },
    { key: 'rawhide-lace', name: 'Rawhide & Lace', color: '#B5562B', tier: 'Brand Zone', tag: 'Hand-laced leather gloves, broken in for you' },
    { key: 'seventh-inning-supply', name: 'Seventh Inning Supply', color: '#1C3A6B', tier: 'Brand Zone', tag: 'Caps, jackets and ballpark-day kit' },
    { key: 'bullpen-lab', name: 'Bullpen Lab', color: '#2E8B57', tier: 'Brand Zone', tag: 'Smart balls, sensors and training tech' }
  ],
  apps: [
    { name: 'Scorebook', color: '#D62839', desc: 'Keep score, inning by inning', key: 'scorebook', url: 'apps/scorebook.html',
      dev: 'Dugout Digital', rating: '4.9', users: '212K', perms: ['profile', 'feed'],
      tagline: 'The scorebook in your pocket, for every game you watch or play.',
      about: 'Scorebook keeps the score the way fans always have, without the pencil. Tap in the count, the outs and the runs, and it builds the line score inning by inning. Use it at the ballpark, in the stands at Little League, or on the sofa. When the last out is made, share the final to the BaseballXX feed in one tap.',
      features: ['Balls, strikes and outs in one tap each', 'The line score built inning by inning', 'Extra innings handled for you', 'One-tap share of the final to BaseballXX'],
      shots: ['apps/scorebook/shot-1.jpg', 'apps/scorebook/shot-2.jpg', 'apps/scorebook/shot-3.jpg'],
      version: '5.2', size: '10 KB',
      updates: [ { v: '5.2', ago: 6, notes: 'Walk-off finals now say so when you share them.' }, { v: '5.0', ago: 120, notes: 'New line-score view with hits and errors.' }, { v: '4.8', ago: 210, notes: 'Signed in with GENEXXO. Your games follow you between devices.' } ],
      reviews: [ { who: '@bleacher_bea', stars: 5, ago: 2, text: 'My grandad taught me to keep score with a pencil. This is the first app that feels like that.' }, { who: '@littleleague_luis', stars: 5, ago: 9, text: 'Every parent on our team uses it now. No more arguing about the count.' }, { who: '@stat_nerd_sam', stars: 4, ago: 14, text: 'Love it. Pitch-by-pitch mode next, please!' } ] },
    { name: 'Pitch Count', color: '#E0A458', desc: 'Pitches thrown and rest days owed', key: 'pitch-count', url: 'apps/pitch-count.html',
      dev: 'Arm Care Labs', rating: '4.8', users: '96.4K', perms: ['profile', 'feed'],
      tagline: 'Count every pitch. Know how much rest they need.',
      about: 'Pitch Count is for coaches and parents of young pitchers. Count the pitches in the game, and it shows how close each pitcher is to the limit for their age and how many days of rest they need before they throw again. A guide based on widely used youth pitch-count guidelines: always follow your own league’s rules.',
      features: ['A big tap button for every pitch', 'Daily limits by age group', 'Rest days worked out for you', 'The whole staff on one screen'],
      shots: ['apps/pitch-count/shot-1.jpg', 'apps/pitch-count/shot-2.jpg', 'apps/pitch-count/shot-3.jpg'],
      version: '3.4', size: '9 KB',
      updates: [ { v: '3.4', ago: 11, notes: 'Next-available date shown under every pitcher.' }, { v: '3.2', ago: 95, notes: 'Age groups up to 18.' }, { v: '3.0', ago: 240, notes: 'Signed in with GENEXXO.' } ],
      reviews: [ { who: '@coach_dee', stars: 5, ago: 3, text: 'This should be mandatory for every youth coach. Simple, clear, keeps arms safe.' }, { who: '@dugout_dad', stars: 5, ago: 8, text: 'I finally know when my son can pitch again without asking three people.' }, { who: '@pony_league_pat', stars: 4, ago: 20, text: 'Would love a printout for the umpire.' } ] },
    { name: 'Swing Stats', color: '#4ADE80', desc: 'Your batting line, game by game', key: 'swing-stats', url: 'apps/swing-stats.html',
      dev: 'Diamond Data Co', rating: '4.7', users: '58.9K', perms: ['profile', 'feed'],
      tagline: 'Log your at-bats. See your slash line grow.',
      about: 'Swing Stats turns your games into a proper batting line. Log each game’s at-bats, hits, walks and extra-base hits, and it works out your average, on-base and slugging the way the pros do, with a trend across the season. Made for rec leagues, high school and anyone who wants to see the numbers move.',
      features: ['Log a game in under ten seconds', 'AVG, OBP, SLG and OPS worked out for you', 'Season trend at a glance', 'Share your line to BaseballXX'],
      shots: ['apps/swing-stats/shot-1.jpg', 'apps/swing-stats/shot-2.jpg', 'apps/swing-stats/shot-3.jpg'],
      version: '2.6', size: '9 KB',
      updates: [ { v: '2.6', ago: 5, notes: 'OPS added, and a season-best badge.' }, { v: '2.4', ago: 150, notes: 'Doubles, triples and home runs tracked separately.' }, { v: '2.2', ago: 260, notes: 'Signed in with GENEXXO.' } ],
      reviews: [ { who: '@sunday_slugger', stars: 5, ago: 4, text: 'Seeing my OBP climb all summer kept me going to the cages.' }, { who: '@rec_league_rita', stars: 5, ago: 10, text: 'Our whole team shares their lines after games now. Healthy competition.' }, { who: '@benchwarmer_ben', stars: 4, ago: 18, text: 'Brutally honest app. Five stars when I hit .300.' } ] }
  ],
  pros: [
    { key: 'ray-alvarez-hitting', name: 'Ray Alvarez Hitting', color: '#D62839', tag: 'Hitting coach · swing building, video analysis', role: 'Hitting coach',
      img: U('1654094706120-be054b9ef237', 800, 800), base: 'Phoenix, Arizona', langs: 'English, Spanish', years: 16, rating: '4.9', reviewsN: 612, cur: '$',
      creds: ['Former minor-league outfielder (8 seasons)', 'ABCA member coach', 'SafeSport trained'],
      about: 'Ray played eight seasons of minor-league ball and has spent sixteen years since teaching hitters from eight to college age. His sessions start with video, end with a plan, and stay simple: a short, repeatable swing that holds up against good pitching.',
      services: [ { id: 'lesson', name: 'One-on-one hitting lesson', dur: '1 hour', price: 85, desc: 'Cage work, high-speed video and a written plan to take home.' },
                  { id: 'video', name: 'Remote swing review', dur: '48-hour turnaround', price: 45, desc: 'Send two angles of your swing and get a voice-over breakdown and three drills.' },
                  { id: 'camp', name: 'Winter hitting camp (4 sessions)', dur: '4 × 90 min', price: 290, desc: 'Small groups, December to February, ages 12 to 18.' } ],
      avail: { days: [1, 2, 3, 4, 6], times: ['15:30', '17:00', '18:30'] },
      reviews: [ { who: '@littleleague_luis', stars: 5, ago: 4, text: 'My daughter stopped dropping her hands after one session. Ray just sees it.' }, { who: '@juco_jay', stars: 5, ago: 12, text: 'The remote review was worth ten times the price.' }, { who: '@dugout_dad', stars: 5, ago: 25, text: 'Patient, clear and the kids love him.' } ],
      posts: [ { ago: 1, text: 'Winter camp groups are filling. Two spots left in the Saturday 14–16 group.' }, { ago: 5, text: 'Off-season tip: 50 quality swings beat 300 tired ones. Film five of them.' } ],
      tier: 'Pro Zone', verified: true },
    { key: 'mara-lindqvist-pitching', name: 'Mara Lindqvist Pitching Lab', color: '#2E8B57', tag: 'Pitching coach · mechanics, velocity, arm care', role: 'Pitching coach',
      img: U('1776184046370-1b38b855040c', 800, 800), base: 'Tampa, Florida', langs: 'English, Swedish', years: 12, rating: '4.9', reviewsN: 438, cur: '$',
      creds: ['MSc Biomechanics', 'Certified pitching coordinator', 'Certified strength & conditioning specialist'],
      about: 'Mara runs a small pitching lab in Tampa: motion capture, radar and a long-toss lawn. She builds velocity the slow way, with mechanics and arm care first, and every pitcher leaves with a throwing programme matched to their season.',
      services: [ { id: 'assess', name: 'Pitching assessment', dur: '90 minutes', price: 140, desc: 'Motion capture, radar and a mobility screen, with a full report.' },
                  { id: 'lesson', name: 'Bullpen lesson', dur: '1 hour', price: 90, desc: 'One bullpen, filmed and broken down, with a plan for the week.' },
                  { id: 'program', name: '12-week throwing programme', dur: 'Online + 3 check-ins', price: 360, desc: 'An off-season plan built around your arm, with video check-ins.' } ],
      avail: { days: [1, 2, 4, 5, 6], times: ['09:00', '14:00', '16:30'] },
      reviews: [ { who: '@coach_dee', stars: 5, ago: 6, text: 'Our ace gained 4 mph and, more importantly, no sore elbow all season.' }, { who: '@lefty_lou', stars: 5, ago: 15, text: 'The assessment report alone changed how I train.' }, { who: '@pony_league_pat', stars: 4, ago: 30, text: 'Brilliant coach. Book early for the off-season.' } ],
      posts: [ { ago: 2, text: 'November is for rest and mobility, not velocity. Throwing programmes start in December.' }, { ago: 9, text: 'New: the 12-week programme now includes a long-toss video library.' } ],
      tier: 'Pro Zone', verified: true },
    { key: 'seventh-heaven-tours', name: 'Seventh Heaven Ballpark Tours', color: '#E0A458', tag: 'Ballpark road trips · tickets, hotels, behind-the-scenes', role: 'Travel host',
      img: U('1464701116432-f476204d6c45', 800, 800), base: 'Chicago, Illinois', langs: 'English', years: 10, rating: '4.8', reviewsN: 357, cur: '$',
      creds: ['Licensed tour operator', 'Visited all 30 major-league ballparks (four times)', 'Bonded and insured'],
      about: 'We plan the baseball trip you have always talked about: five ballparks in eight days, good seats, hotels near the park, and the stadium tours most fans never see. Small groups, a host who loves the game, and every detail sorted before you land.',
      services: [ { id: 'midwest', name: 'Midwest Classic (5 parks, 8 days)', dur: '8 days', price: 2450, desc: 'Chicago, Milwaukee, Minneapolis, Kansas City and St. Louis. Tickets, hotels and coach travel.' },
                  { id: 'spring', name: 'Spring Training week, Arizona', dur: '6 days', price: 1650, desc: 'Six Cactus League games, practice-field mornings, and a resort near Scottsdale.' },
                  { id: 'custom', name: 'Plan my own trip', dur: '1-hour call + itinerary', price: 120, desc: 'Tell us your parks and dates; we build the route, tickets and hotels.' } ],
      avail: { days: [1, 2, 3, 4, 5], times: ['10:00', '13:00', '16:00'] },
      reviews: [ { who: '@bleacher_bea', stars: 5, ago: 8, text: 'Five parks, zero stress. Behind the scenes at Wrigley was the best morning of my life.' }, { who: '@uk_cubs_fan', stars: 5, ago: 22, text: 'Flew in from London and everything just worked.' }, { who: '@road_trip_rob', stars: 4, ago: 40, text: 'Long days but worth every mile.' } ],
      posts: [ { ago: 1, text: 'Spring Training 2027 dates are live. The Arizona week sold out last year by Christmas.' }, { ago: 10, text: 'Ballpark food ranking from this season’s groups, coming Friday. Brace yourselves.' } ],
      tier: 'Pro Zone', verified: true }
  ],
  communities: [
    { key: 'wrigley-bleacher-crew', name: 'Wrigley Bleacher Crew', domain: 'bleachers.baseballxx.com', color: '#1C3A6B', img: U('1475440197469-e367ec8eeb19', 900, 500),
      scope: 'Local', where: 'Chicago', members: 18400, online: 312, tagline: 'Sun on your face, ivy on the wall, friends on the bench.',
      about: 'Fans who live for the bleachers at Wrigley Field. We share ticket tips, meet before games on Sheffield Avenue, and keep the old traditions going. In the off-season we talk trades, plan watch parties and count the days to Opening Day.',
      rules: ['Be good to each other, even after a loss', 'No ticket touting, face value only', 'Throw it back (you know the one)'],
      mods: ['@bleacher_bea', '@sheffield_sal'],
      threads: [ { t: 'Hot stove: who are we signing this winter?', by: '@sheffield_sal', tag: 'HOT STOVE', replies: 214, ago: 0, votes: 388 }, { t: 'Opening Day 2027 ticket plan, who is in?', by: '@bleacher_bea', tag: 'TICKETS', replies: 96, ago: 1, votes: 241 }, { t: 'Best pre-game hot dog near the park', by: '@relish_rick', tag: 'FOOD', replies: 133, ago: 2, votes: 177 }, { t: 'Winter watch party for the Caribbean Series?', by: '@winter_ball_wes', tag: 'MEET', replies: 41, ago: 4, votes: 82 } ],
      events: [ { title: 'Hot Stove night at the bar', day: 4, time: '19:00', where: 'Sheffield Ave, Chicago' }, { title: 'Bleacher Crew holiday toy drive', day: 6, time: '11:00', where: 'Wrigleyville, Chicago' } ] },
    { key: 'london-baseball-social', name: 'London Baseball Social', domain: 'london.baseballxx.com', color: '#D62839', img: U('1582650448629-3c854f356544', 900, 500),
      scope: 'Local', where: 'London', members: 2140, online: 64, tagline: 'Catch, hit and talk baseball, this side of the Atlantic.',
      about: 'Americans abroad, curious Brits and lifelong fans who play catch on Sundays and stay up for the late games. Beginners welcome: we bring spare gloves. In winter we move to an indoor cage and the pub.',
      rules: ['Everyone gets a turn at bat', 'Spare gloves for newcomers', 'Late-game spoilers in the spoiler thread only'],
      mods: ['@uk_cubs_fan', '@regents_park_rae'],
      threads: [ { t: 'Sunday catch in Regent’s Park, still on in November?', by: '@regents_park_rae', tag: 'MEET', replies: 38, ago: 0, votes: 71 }, { t: 'Indoor cage sessions from December', by: '@uk_cubs_fan', tag: 'TRAINING', replies: 22, ago: 1, votes: 54 }, { t: 'Which UK league should a beginner join?', by: '@new_to_ball', tag: 'Q&A', replies: 29, ago: 3, votes: 47 } ],
      events: [ { title: 'Sunday catch & hitting', day: 0, time: '11:00', where: 'Regent’s Park, London' }, { title: 'Indoor cage night', day: 3, time: '19:30', where: 'Hackney Wick, London' } ] }
  ],
  feed: [
    { av: 'BX', avBg: NAVY, author: 'BaseballXX Editorial', sub: 'Featured · Just now', badge: '★ FEATURED',
      text: 'Hot stove season is here. Trades, winter ball, the best gear of the year and the coaches who will get you ready for spring. Baseball, all in one place.',
      img: U('1475440197469-e367ec8eeb19', 800, 600), eng: '♡ 41.2K · 💬 5.8K · ↗ 3.9K' },
    { av: 'BB', avBg: RED, author: '@bleacher_bea', sub: 'Ballparks · Just now', badge: 'COMMUNITY',
      text: 'Already counting down to Opening Day. Who else keeps last season’s ticket stubs on the fridge until the new schedule comes out? ⚾',
      img: U('1785018197523-86e437579323', 800, 600), eng: '♡ 8.7K · 💬 941 · ↗ 402' },
    { av: 'IB', avBg: 'linear-gradient(135deg,#7A4A22,#3E220C)', author: 'Ironwood Bat Co', sub: 'Founding Partner · Brand Zone', badge: 'BRAND ZONE',
      text: 'The <b>Heartwood Pro Maple</b> is back: hand-turned in our Pennsylvania shop from wood we split and dry ourselves. Built for the season ahead.',
      img: U('1620740527696-4867da637855', 800, 600), eng: '♡ 12.4K · 💬 1.1K · ↗ 1.6K' },
    { av: 'RL', avBg: CLAY, author: 'Rawhide & Lace', sub: 'Brand Zone · 1h ago', badge: 'BRAND ZONE',
      text: 'Hate breaking in a new glove? Our <b>Game-Ready</b> service steams, shapes and pockets it by hand. It arrives ready for the first catch.',
      img: U('1620740528428-59fb523a484a', 800, 600), eng: '♡ 5.3K · 💬 466 · ↗ 380' },
    { av: 'LL', avBg: GRASS, author: '@littleleague_luis', sub: 'Coaching · 2h ago', badge: 'COMMUNITY',
      text: 'End-of-season party for the Tigers. Eleven kids, one trophy each, and a coach who cried more than the parents 😂',
      img: U('1578432014316-48b448d79d57', 800, 600), eng: '♡ 3.1K · 💬 228 · ↗ 96' },
    { av: 'BL', avBg: GRASS, author: 'Bullpen Lab', sub: 'Brand Zone · 4h ago', badge: 'BRAND ZONE',
      text: 'Meet the <b>SpinCore ball</b>: a regulation baseball with a sensor inside. Spin rate, axis and speed on your phone, pitch by pitch.',
      img: U('1554591203-d6433caa8495', 800, 600), eng: '♡ 4.8K · 💬 512 · ↗ 610' },
    { av: 'WB', avBg: NAVY, author: 'Wrigley Bleacher Crew', sub: 'Ballparks · 6h ago', badge: 'COMMUNITY',
      text: 'Hot Stove night this Thursday on Sheffield Avenue. Bring your trade ideas and your worst takes. Toy drive collection on the door 🎁',
      img: U('1563299796-b729d0af54a5', 800, 600), eng: '♡ 2.2K · 💬 187 · ↗ 154' }
  ],
  prompts: ['Plan a 5-ballpark road trip next June', 'How many rest days after 60 pitches at age 12?', 'Find a hitting coach near me for winter', 'Best glove for a 10-year-old infielder under $80'],
  businesses: ['diamond-turf-works', 'stitchline-ball-co']
};

/* the four Brand Zones and two Business Zones */
const brand = (o) => Object.assign({ kind: 'brand', gw: 'baseball', verified: true }, o);
Object.assign(ZONES, {
  'ironwood-bat-co': brand({ key: 'ironwood-bat-co', name: 'Ironwood Bat Co', color: '#7A4A22', gradient: 'linear-gradient(135deg,#7A4A22,#3E220C)', tier: 'Founding Partner',
    tagline: 'Hand-turned in Pennsylvania since 1961', stats: { followers: '86.3K', content: '640', products: '72' },
    ad: { badge: 'Featured', img: U('1620740527696-4867da637855', 760, 760), hl: 'The Heartwood Pro Maple.', sub: 'Split, dried and hand-turned in our shop. Ink-dot tested on every billet.', meta: 'From $119' },
    products: [
      { name: 'Heartwood Pro Maple', price: '$189', tag: 'FLAGSHIP', emoji: '🏏', rating: 4.9, reviews: 2860, cat: 'bats', special: true, desc: 'Our pro-grade maple: dense, hard, with a big barrel and a balanced feel.', features: ['Ink-dot tested maple', 'Hand-turned and hand-finished', '30 to 34 inches'], review: { who: 'Jay R.', text: 'Swung one in the cage and bought it on the spot. The sound is everything.' } },
      { name: 'Classic Ash 271', price: '$119', tag: 'BESTSELLER', emoji: '🪵', rating: 4.8, reviews: 1940, cat: 'bats', desc: 'Flexible northern white ash in our most popular turning, the 271.', features: ['Northern white ash', 'Light and whippy', 'Natural finish'], review: { who: 'Rita M.', text: 'Light enough for a rec-leaguer like me, still feels like a real bat.' } },
      { name: 'Youth Birch 28"', price: '$79', tag: 'YOUTH', emoji: '👦', rating: 4.8, reviews: 860, cat: 'bats', desc: 'A forgiving birch bat sized for young players moving to wood.', features: ['Birch, end-loaded light', '26 to 30 inches', 'Youth-league approved'], review: { who: 'Luis (coach)', text: 'Teaches kids to square the ball up. Our whole team has one now.' } },
      { name: 'Personalised Engraved Bat', price: '$149', tag: 'PERSONALISED', emoji: '✍️', rating: 4.9, reviews: 1210, cat: 'personal', special: true, desc: 'Laser-engraved name, number and date on the barrel. A gift that hits.', features: ['Engraving up to 3 lines', 'Order by 10 December for Christmas', 'Display stand included'], review: { who: 'Hannah W.', text: 'Bought one for my dad’s 70th. He has not stopped showing people.' } },
      { name: 'Fungo 35"', price: '$95', emoji: '🎯', rating: 4.7, reviews: 520, cat: 'bats', desc: 'A long, light fungo for coaches who hit a thousand ground balls a week.', features: ['Ash, 35 inches', 'Thin handle, light barrel'], review: { who: 'Coach Dee', text: 'Saves my shoulder at every practice.' } },
      { name: 'Pine Tar & Grip Kit', price: '$24', emoji: '🧴', rating: 4.6, reviews: 740, cat: 'care', desc: 'Pine tar stick, grip spray and a cloth, in a tin that fits the bat bag.', features: ['Pine tar stick', 'Grip spray', 'Cleaning cloth'], review: { who: 'Ben K.', text: 'Exactly what I needed and nothing I didn’t.' } },
      { name: 'Bat Bone & Re-finish', price: '$35', tag: 'SERVICE', emoji: '🔧', rating: 4.9, reviews: 310, cat: 'care', special: true, desc: 'Send your bat back for boning, a fresh finish and a hardness check.', features: ['Barrel boned by hand', 'New finish', 'Back in 10 days'], review: { who: 'Sam T.', text: 'My gamer came back better than new.' } }
    ],
    shopCats: [ { key: 'bats', label: 'Bats', icon: '🏏' }, { key: 'personal', label: 'Personalised', icon: '✍️' }, { key: 'care', label: 'Grip & care', icon: '🔧' } ],
    feed: [
      { type: 'post', sub: 'Brand post · 3h', text: 'The <b>Heartwood Pro Maple</b> is back, hand-turned in our Pennsylvania shop.', img: U('1620740527696-4867da637855', 800, 440), eng: '♡ 12.4K · 💬 1.1K · ↗ 1.6K', product: 0 },
      { type: 'post', sub: 'In the shop · Yesterday', text: 'Every billet is ink-dot tested before it touches the lathe. About one in four does not make the cut.', img: U('1785437017448-46bfdee37f7d', 800, 440), eng: '♡ 6.2K · 💬 388' },
      { type: 'community', who: 'Jay R.', whoBg: RED, sub: 'Community · 1d', text: 'Maple or ash for a high-school hitter moving to wood?', eng: '♡ 241 · 💬 63', reply: 'Great question, Jay. Most young hitters start with ash or birch: more forgiving off the end. Move to the Heartwood maple once you square the ball up regularly. 🏏' }
    ],
    events: [ { zoneEvent: true, tag: 'EVENT', title: 'Open shop day: watch a bat being turned', when: 'Dec 5 · Williamsport, PA + livestream', desc: 'Watch a bat turned from a billet, then engrave your own at the shop.', registered: 640, capacity: 900 } ],
    about: { founded: 'Williamsport, Pennsylvania · 1961', story: 'A family bat shop that started with one lathe in a barn. Three generations later we still split, dry and turn every billet ourselves. We joined GENEXXO as BaseballXX’s Founding Partner because this is where players who care about their bat come together.', milestones: [['1961', 'The first bat turned in a barn in Williamsport'], ['1994', 'Heartwood maple becomes our signature'], ['2026', 'Founding Partner on BaseballXX']], values: ['Hand-turned', 'Every billet tested', 'Repair, then replace'] } }),

  'rawhide-lace': brand({ key: 'rawhide-lace', name: 'Rawhide & Lace', color: '#B5562B', gradient: CLAY, tier: 'Brand Zone',
    tagline: 'Hand-laced in Texas. Broken in for you.', stats: { followers: '54.8K', content: '410', products: '58' },
    ad: { badge: 'Featured', img: U('1620740528428-59fb523a484a', 760, 760), hl: 'Game-Ready, out of the box.', sub: 'Every glove steamed, shaped and pocketed by hand before it ships.', meta: 'From $89' },
    products: [
      { name: 'Infield Pro 11.5"', price: '$219', tag: 'BESTSELLER', emoji: '🧤', rating: 4.9, reviews: 2140, cat: 'gloves', special: true, desc: 'A shallow-pocket I-web for quick transfers at short and second.', features: ['Steer-hide leather', 'Hand-laced', 'Game-Ready break-in included'], review: { who: 'Marco D.', text: 'Played a doubleheader the day it arrived. Unreal.' } },
      { name: 'Outfield Pro 12.75"', price: '$229', emoji: '🧤', rating: 4.8, reviews: 1380, cat: 'gloves', desc: 'A deep trap-web pocket that swallows fly balls.', features: ['Steer-hide leather', 'Trap web', 'Open back'], review: { who: 'Wes P.', text: 'Every fly ball sticks. Love it.' } },
      { name: 'Catcher’s Mitt 33.5"', price: '$249', tag: 'CATCHER', emoji: '🥎', rating: 4.9, reviews: 760, cat: 'gloves', desc: 'A firm, deep catcher’s mitt with extra palm padding.', features: ['Double palm padding', 'Hand-laced', 'Break-in included'], review: { who: 'Pat G.', text: 'Saves my hand on every fastball.' } },
      { name: 'Youth First Glove 10"', price: '$89', tag: 'YOUTH', emoji: '👧', rating: 4.8, reviews: 1620, cat: 'gloves', special: true, desc: 'Soft, light leather that closes easily for small hands.', features: ['Ages 5 to 9', 'Soft kip leather', 'Ready to play'], review: { who: 'Lucy (parent)', text: 'My daughter caught her first ball with it on day one.' } },
      { name: 'Glove Oil & Conditioner', price: '$18', emoji: '🧴', rating: 4.7, reviews: 980, cat: 'care', desc: 'Our own lanolin conditioner. A little goes a long way.', features: ['4 oz tin', 'Lanolin based'], review: { who: 'Rick S.', text: 'My 15-year-old glove looks better than ever.' } },
      { name: 'Relace & Restore', price: '$55', tag: 'SERVICE', emoji: '🪡', rating: 4.9, reviews: 540, cat: 'care', desc: 'New laces, cleaned and conditioned, pocket reshaped. Any brand.', features: ['Any brand of glove', '14-day turnaround'], review: { who: 'Ellie M.', text: 'My grandad’s glove from 1979, back in the game.' } }
    ],
    shopCats: [ { key: 'gloves', label: 'Gloves & mitts', icon: '🧤' }, { key: 'care', label: 'Care & relace', icon: '🪡' } ],
    feed: [ { type: 'post', sub: 'Brand post · 1h', text: 'Our <b>Game-Ready</b> service steams, shapes and pockets your glove by hand.', img: U('1620740528428-59fb523a484a', 800, 440), eng: '♡ 5.3K · 💬 466', product: 0 },
            { type: 'post', sub: 'Workshop · 2d', text: 'One glove, 18 feet of lace, about four hours of hands.', img: U('1749559995884-a3731177edf7', 800, 440), eng: '♡ 2.4K · 💬 140' } ],
    events: [ { zoneEvent: true, tag: 'WORKSHOP', title: 'Relace your own glove', when: 'Dec 7 · Austin, TX', desc: 'Bring any glove; we teach you to relace and recondition it in an afternoon.', registered: 38, capacity: 50 } ],
    about: { founded: 'Austin, Texas · 2008', story: 'A former college catcher who got tired of month-long break-ins started hand-lacing gloves in his garage. Today every Rawhide & Lace glove ships ready to play.', milestones: [['2008', 'The first glove laced in a garage'], ['2017', 'Game-Ready break-in launches'], ['2026', 'Brand Zone on BaseballXX']], values: ['Hand-laced', 'Ready to play', 'Restore, do not replace'] } }),

  'seventh-inning-supply': brand({ key: 'seventh-inning-supply', name: 'Seventh Inning Supply', color: '#1C3A6B', gradient: NAVY, tier: 'Brand Zone',
    tagline: 'Ballpark-day kit, made to last more than one season', stats: { followers: '71.5K', content: '520', products: '96' },
    ad: { badge: 'New', img: U('1617052145671-c6f7ff89f4e9', 760, 760), hl: 'The Night Game Jacket.', sub: 'Satin-shell bomber, quilted lining. For the cold innings in April and October.', meta: 'From $34' },
    products: [
      { name: 'Night Game Jacket', price: '$149', tag: 'NEW', emoji: '🧥', rating: 4.8, reviews: 860, cat: 'apparel', special: true, desc: 'A satin-shell bomber with a quilted lining and a hidden ticket pocket.', features: ['Water-resistant shell', 'Quilted lining', 'Ticket pocket'], review: { who: 'Bea L.', text: 'Wore it to a freezing October game. Didn’t feel a thing.' } },
      { name: 'Wool Ballpark Cap', price: '$42', tag: 'BESTSELLER', emoji: '🧢', rating: 4.9, reviews: 3120, cat: 'caps', desc: 'Classic six-panel wool cap with a curved brim, made in the USA.', features: ['Wool blend', 'Fitted sizes', 'Made in the USA'], review: { who: 'Sal R.', text: 'Fits like the old caps did. Finally.' } },
      { name: 'Scorer’s Notebook', price: '$18', emoji: '📓', rating: 4.7, reviews: 640, cat: 'gear', desc: 'A proper paper scorebook for 40 games, with a pencil that fits the spine.', features: ['40 games', 'Pencil included'], review: { who: 'Sam T.', text: 'Pairs with the Scorebook app when the battery dies.' } },
      { name: 'Stadium Seat Cushion', price: '$34', emoji: '🪑', rating: 4.6, reviews: 520, cat: 'gear', desc: 'Folding cushion with back support for bleacher days.', features: ['Folds flat', 'Back support'], review: { who: 'Rick S.', text: 'Nine innings and my back is fine.' } },
      { name: 'Retro Pennant Set', price: '$39', tag: 'GIFT', emoji: '🚩', rating: 4.8, reviews: 410, cat: 'gear', desc: 'Three felt pennants in vintage ballpark styles for the den.', features: ['Wool felt', 'Set of three'], review: { who: 'Hannah W.', text: 'The perfect gift for my brother’s man cave.' } }
    ],
    shopCats: [ { key: 'apparel', label: 'Jackets & tops', icon: '🧥' }, { key: 'caps', label: 'Caps', icon: '🧢' }, { key: 'gear', label: 'Ballpark gear', icon: '🎒' } ],
    feed: [ { type: 'post', sub: 'Brand post · 5h', text: 'The <b>Night Game Jacket</b> is here for the cold innings.', img: U('1617052145671-c6f7ff89f4e9', 800, 440), eng: '♡ 3.9K · 💬 310', product: 0 } ],
    events: [ { zoneEvent: true, tag: 'DEADLINE', title: 'Last order for Christmas delivery', when: 'Dec 16 · 23:59', desc: 'Order by midnight on 16 December for delivery before Christmas.', registered: 1840, capacity: 5000 } ],
    about: { founded: 'Chicago, Illinois · 2014', story: 'Two friends who met in the bleachers wanted ballpark kit that lasted longer than one season. Seventh Inning Supply makes it in small runs, mostly in the USA.', milestones: [['2014', 'First caps sold outside the ballpark'], ['2021', 'Night Game Jacket launches'], ['2026', 'Brand Zone on BaseballXX']], values: ['Made to last', 'Made in small runs', 'Fans first'] } }),

  'bullpen-lab': brand({ key: 'bullpen-lab', name: 'Bullpen Lab', color: '#2E8B57', gradient: GRASS, tier: 'Brand Zone',
    tagline: 'The numbers behind every pitch and swing', stats: { followers: '39.2K', content: '280', products: '24' },
    ad: { badge: 'Featured', img: U('1554591203-d6433caa8495', 760, 760), hl: 'The SpinCore ball.', sub: 'A regulation baseball with a sensor inside: spin, axis and speed on your phone.', meta: 'From $59' },
    products: [
      { name: 'SpinCore Smart Ball', price: '$149', tag: 'FLAGSHIP', emoji: '⚾', rating: 4.8, reviews: 1460, cat: 'sensors', special: true, desc: 'Regulation weight and seams, with a sensor that reads spin rate, axis and speed.', features: ['Regulation 5 oz', 'Spin, axis, speed', 'App included'], review: { who: 'Lou K.', text: 'Finally know why my curveball hangs. Spin axis was way off.' } },
      { name: 'SwingTag Bat Sensor', price: '$99', tag: 'BESTSELLER', emoji: '📡', rating: 4.7, reviews: 1980, cat: 'sensors', desc: 'Clips to the knob of any bat. Bat speed, attack angle and time to contact.', features: ['Fits any bat', 'Bat speed and attack angle', '20-hour battery'], review: { who: 'Ray A. (coach)', text: 'I use it with every hitter I coach.' } },
      { name: 'Pocket Radar Gun', price: '$249', emoji: '📟', rating: 4.8, reviews: 720, cat: 'radar', desc: 'Pocket-sized radar for pitch and exit speed.', features: ['±1 mph', 'Fits in a pocket'], review: { who: 'Mara L.', text: 'Accurate and tiny. In every bag I own.' } },
      { name: 'Net & Target Frame', price: '$179', emoji: '🥅', rating: 4.6, reviews: 430, cat: 'training', desc: 'A 7 × 7 ft net with a strike-zone target for backyard bullpens.', features: ['Sets up in 2 minutes', 'Adjustable strike zone'], review: { who: 'Dee P.', text: 'Backyard bullpen sorted.' } },
      { name: 'Lab Membership', price: '$12/mo', tag: 'SUBSCRIPTION', emoji: '📈', rating: 4.8, reviews: 860, cat: 'training', special: true, desc: 'Training plans, video tools and your sensor history in one place.', features: ['Plans from pro coaches', 'Unlimited history', 'Cancel anytime'], review: { who: 'Jay R.', text: 'The plans are the real value.' } }
    ],
    shopCats: [ { key: 'sensors', label: 'Sensors', icon: '📡' }, { key: 'radar', label: 'Radar', icon: '📟' }, { key: 'training', label: 'Training', icon: '🥅' } ],
    feed: [ { type: 'post', sub: 'Brand post · 4h', text: 'Meet the <b>SpinCore ball</b>: spin rate, axis and speed on your phone.', img: U('1554591203-d6433caa8495', 800, 440), eng: '♡ 4.8K · 💬 512', product: 0 },
            { type: 'post', sub: 'Lab notes · 3d', text: 'What 40,000 tracked curveballs taught us about grip pressure.', img: U('1643225753232-ad7d041ed0f7', 800, 440), eng: '♡ 2.1K · 💬 166' } ],
    events: [ { zoneEvent: true, tag: 'WEBINAR', title: 'Off-season pitching with data', when: 'Dec 2 · 19:00 ET · online', desc: 'Mara Lindqvist and the Bullpen Lab team on building velocity safely this winter.', registered: 1280, capacity: 3000 } ],
    about: { founded: 'Boston, Massachusetts · 2019', story: 'Engineers and former college players building the tools they wished they had. Bullpen Lab puts pro-level numbers in reach of every player and coach.', milestones: [['2019', 'First SpinCore prototype'], ['2023', 'SwingTag bat sensor launches'], ['2026', 'Brand Zone on BaseballXX']], values: ['Data that helps, not overwhelms', 'Arm health first', 'Built with coaches'] } }),

  'diamond-turf-works': { key: 'diamond-turf-works', kind: 'business', gw: 'baseball', name: 'Diamond Turf Works', color: '#2E8B57', gradient: GRASS, img: U('1464701116432-f476204d6c45', 900, 500),
    tier: 'Verified', category: 'Fields & groundskeeping', tagline: 'Infield clay, mound bricks and field builds for every level.',
    about: { founded: 'Atlanta, Georgia · 1988', story: 'We build and look after baseball fields: from Little League diamonds to college stadiums. Infield mixes, mound clay, turf and the groundskeeping know-how that keeps a field playing true all season.' },
    stats: { years: 38, staff: 140, clients: '1,200+ fields' },
    caps: [ { name: 'Infield & mound clay', detail: 'Graded infield mixes, packing clay and mound bricks, delivered by the pallet or the truckload.' }, { name: 'Field builds', detail: 'Design, laser grading, drainage and turf for new and renovated diamonds.' }, { name: 'Groundskeeping programmes', detail: 'Season-long maintenance plans and training for volunteer crews.' } ],
    specs: { moq: '1 pallet (40 bags)', lead: '5–10 days; builds 8–14 weeks', regions: 'USA & Canada', certs: ['Sports Field Management Association member', 'Certified Sports Field Manager on staff', 'ISO 9001'] },
    supplies: [ { kind: 'brand', key: 'bullpen-lab', what: 'Training-mound clay for the Bullpen Lab facility' } ],
    cases: [ { title: 'Westside Little League, Phoenix', text: 'Four diamonds regraded and re-claid in the off-season, ready for Opening Day.' }, { title: 'Volunteer crew training', text: '300 volunteer groundskeepers trained across Georgia last year.' } ],
    feed: [ { sub: 'Off-season · 3d', text: 'Off-season renovation slots for January and February are almost full. Book your field now.' }, { sub: 'Tips · 1w', text: 'Drag the infield in a spiral, not a circle. Your second baseman will thank you.' } ],
    contact: { person: 'Marcus Reed, Field projects', response: 'Replies within 24 hours' } },

  'stitchline-ball-co': { key: 'stitchline-ball-co', kind: 'business', gw: 'baseball', name: 'Stitchline Ball Co', color: '#D62839', gradient: RED, img: U('1578432014316-48b448d79d57', 900, 500),
    tier: 'Verified', category: 'Equipment manufacturing', tagline: 'Game and practice baseballs for leagues, schools and clubs.',
    about: { founded: 'St. Louis, Missouri · 1979', story: 'We make baseballs and softballs for leagues, high schools and colleges: cushioned cork centres, wool winding and 108 double stitches. Own-label available for leagues and clubs.' },
    stats: { years: 47, staff: 210, clients: '3,500+ leagues & schools' },
    caps: [ { name: 'Game balls', detail: 'NFHS and NCAA spec, raised or flat seams, by the dozen or the case.' }, { name: 'Practice & training balls', detail: 'Pitching-machine balls, weighted balls and soft-core youth balls.' }, { name: 'Own-label', detail: 'Your league’s logo stamped on game balls, from 50 dozen.' } ],
    specs: { moq: '10 dozen (own-label 50 dozen)', lead: '2–3 weeks; own-label 6 weeks', regions: 'North America, UK & Europe', certs: ['NFHS approved', 'NOCSAE stamp', 'ISO 9001'] },
    supplies: [ { kind: 'brand', key: 'bullpen-lab', what: 'The regulation shell around every SpinCore smart ball' } ],
    cases: [ { title: 'Bullpen Lab SpinCore', text: 'A regulation ball built around a sensor: same weight, same seams, same feel.' } ],
    feed: [ { sub: 'Production · 5d', text: 'Spring league orders open: order by 31 January for March delivery.' } ],
    contact: { person: 'Dana Whitfield, League accounts', response: 'Replies within one working day' } }
});

/* events in the Events tab */
gxEvents('baseball', [
  { gw: 'baseball', zone: 'bullpen-lab', type: 'Live', icon: '🔴', live: true, time: 'Live Now', title: 'Bullpen Lab Live · Winter Velocity Clinic', desc: 'Pitching coach Mara Lindqvist breaks down three bullpens on SpinCore data, live from Tampa. Questions in the chat.' },
  { gw: 'baseball', type: 'Event', icon: '🔥', time: 'Dec 16', title: 'Hot Stove night, Wrigleyville', desc: 'The Wrigley Bleacher Crew talks trades and signings on Sheffield Avenue. Toy drive collection on the door.' },
  { gw: 'baseball', zone: 'bullpen-lab', type: 'Event', icon: '📈', time: 'Dec 2', title: 'Off-season pitching with data', desc: 'A free Bullpen Lab webinar with pitching coach Mara Lindqvist. RSVP inside the Bullpen Lab zone.' },
  { gw: 'baseball', type: 'Event', icon: '🧤', time: 'Dec 3', title: 'Indoor cage nights start, London', desc: 'London Baseball Social moves indoors for winter. Spare gloves for newcomers.' },
  { gw: 'baseball', zone: 'ironwood-bat-co', type: 'Event', icon: '🏏', time: 'Dec 5', title: 'Ironwood open shop day', desc: 'Watch a bat turned from a billet in Williamsport, PA, and engrave your own.' },
  { gw: 'baseball', zone: 'rawhide-lace', type: 'Event', icon: '🪡', time: 'Dec 7', title: 'Relace your own glove, Austin', desc: 'A hands-on afternoon with Rawhide & Lace. Bring any glove.' },
  { gw: 'baseball', type: 'Event', icon: '⚾', time: 'Dec 13', title: 'Winter hitting camp begins', desc: 'Ray Alvarez Hitting starts four-week winter camps in Phoenix for ages 12 to 18.' },
  { gw: 'baseball', zone: 'seventh-inning-supply', type: 'Deadline', icon: '🎁', time: 'Dec 16', title: 'Last order for Christmas delivery', desc: 'Seventh Inning Supply: order by midnight for delivery before Christmas.' }
]);
})();
/* ═════════ /BASEBALLXX ═════════ */
