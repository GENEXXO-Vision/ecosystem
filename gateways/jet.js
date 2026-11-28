/* ═════════ JETXX — an Aviation demo gateway (2026-11-23, Sean; build -94) ═════════
   Built with the _tools/README.md recipe. Palette (dark): night sky, cockpit blue, champagne.
   Home sector: Aviation. Every charter operator, school, terminal, pro and product is fictional; airports and cities are
   real. Prices, flight times and jet-lag tips are illustrative (general guidance, not medical advice). */
(function(){
const U = (id, w, h) => `https://images.unsplash.com/photo-${id}?w=${w}&h=${h}&fit=crop&q=75`;
const SKY = 'linear-gradient(135deg,#38BDF8,#1E3A8A)', CHAMP = 'linear-gradient(135deg,#F1DCA7,#A8873C)', NIGHT = 'linear-gradient(135deg,#334155,#0A0E1A)', DUSK = 'linear-gradient(135deg,#FB923C,#7C2D12)';

GATEWAYS.jet = {
  name: 'JetXX', domain: 'jetxx.com', emoji: '✈️', sector: 'aviation', live: true,
  tagline: 'The Jet Universe',
  theme: {
    bg: '#0A0E1A', text: '#E7ECF5', cardBg: 'rgba(255,255,255,.045)', cardBorder: 'rgba(231,236,245,.09)',
    headerBg: 'linear-gradient(180deg,#141C33,#0A0E1A)', accent: '#38BDF8', accentAlt: '#E2C275', dark: true
  },
  gradient: 'linear-gradient(135deg,#0A0E1A,#1E3A8A,#E2C275)',
  stats: { members: '2.4M', brands: '1,600+', agents: '38' },
  spaces: ['All Feed', 'Private Jets', 'Learn to Fly', 'Cockpit', 'Spotting', 'Travel Tips'],
  trending: ['#EmptyLeg', '#CockpitView', '#FirstSolo'],
  brandZones: [
    { key: 'altair-jets', name: 'Altair Jets', color: '#38BDF8', tier: 'Founding Partner', tag: 'Private jet charter, by the seat or the jet' },
    { key: 'contrail-academy', name: 'Contrail Aviation Academy', color: '#FB923C', tier: 'Brand Zone', tag: 'Learn to fly, from trial lesson to licence' },
    { key: 'northgate-terminal', name: 'Northgate Private Terminal', color: '#E2C275', tier: 'Brand Zone', tag: 'Private terminals at three UK airports' },
    { key: 'clearsky-headsets', name: 'Clearsky Headsets', color: '#94A3B8', tier: 'Brand Zone', tag: 'Pilot headsets and flight bags' }
  ],
  apps: [
    { name: 'Pilot Logbook', color: '#38BDF8', desc: 'Log every flight and watch the hours add up', key: 'pilot-logbook', url: 'apps/pilot-logbook.html',
      dev: 'Contrail Aviation Academy', rating: '4.9', users: '460K', perms: ['profile', 'feed'],
      tagline: 'Every hour counts. Count them.',
      about: 'Pilot Logbook keeps your flights: date, aircraft, route and time, solo or with an instructor. See your totals against the hours a private licence needs, and share your milestones. Keep your official logbook too.',
      features: ['Log a flight in seconds', 'Totals: solo, dual, cross-country', 'Progress to your licence', 'Share milestones'],
      shots: ['apps/pilot-logbook/shot-1.jpg', 'apps/pilot-logbook/shot-2.jpg', 'apps/pilot-logbook/shot-3.jpg'],
      version: '3.6', size: '10 KB',
      updates: [ { v: '3.6', ago: 2, notes: 'Progress to your licence.' }, { v: '3.1', ago: 70, notes: 'Cross-country totals.' }, { v: '2.5', ago: 210, notes: 'Signed in with GENEXXO.' } ],
      reviews: [ { who: '@student_pilot_ruby', stars: 5, ago: 1, text: 'Watching the hours tick towards 45 is so motivating.' }, { who: '@leo_grant_cfi', stars: 5, ago: 12, text: 'I ask all my students to use it.' }, { who: '@spotter_priya', stars: 4, ago: 29, text: 'Clean and simple.' } ] },
    { name: 'Empty Legs', color: '#E2C275', desc: 'Private jet seats on one-way flights', key: 'empty-legs', url: 'apps/empty-legs.html',
      dev: 'Altair Jets', rating: '4.7', users: '820K', perms: ['profile', 'feed'],
      tagline: 'The jet’s going anyway.',
      about: 'When a private jet flies empty to pick up its next passengers, its seats are sold cheaply. Empty Legs lists this week’s flights by route and date. Set alerts for your routes and hold a seat.',
      features: ['This week’s empty legs', 'Filter by route', 'Route alerts', 'Hold a seat'],
      shots: ['apps/empty-legs/shot-1.jpg', 'apps/empty-legs/shot-2.jpg', 'apps/empty-legs/shot-3.jpg'],
      version: '2.4', size: '9 KB',
      updates: [ { v: '2.4', ago: 3, notes: 'Hold a seat.' }, { v: '2.0', ago: 80, notes: 'Route alerts.' }, { v: '1.4', ago: 230, notes: 'Signed in with GENEXXO.' } ],
      reviews: [ { who: '@window_seat_will', stars: 5, ago: 2, text: 'Flew to Geneva on a jet for less than a train ticket. Once.' }, { who: '@spotter_priya', stars: 4, ago: 16, text: 'Fun to browse even if you don’t book.' }, { who: '@ski_trip_tasha', stars: 5, ago: 34, text: 'Set an alert for ski season.' } ] },
    { name: 'Jet Lag Planner', color: '#FB923C', desc: 'Shift your body clock before you fly', key: 'jetlag-plan', url: 'apps/jetlag-plan.html',
      dev: 'Northgate Private Terminal', rating: '4.8', users: '1.1M', perms: ['profile', 'feed'],
      tagline: 'Land ready, not wrecked.',
      about: 'Jet Lag Planner makes a day-by-day plan for your trip: when to seek light, when to avoid it and when to sleep, starting before you fly. General tips for healthy adults: ask your GP if you have a health condition.',
      features: ['Plans for east or west', 'Light and sleep times', 'Starts before you fly', 'General tips, not medical advice'],
      shots: ['apps/jetlag-plan/shot-1.jpg', 'apps/jetlag-plan/shot-2.jpg', 'apps/jetlag-plan/shot-3.jpg'],
      version: '2.8', size: '9 KB',
      updates: [ { v: '2.8', ago: 4, notes: 'Starts before you fly.' }, { v: '2.3', ago: 90, notes: 'Westbound plans.' }, { v: '1.7', ago: 240, notes: 'Signed in with GENEXXO.' } ],
      reviews: [ { who: '@window_seat_will', stars: 5, ago: 3, text: 'First trip to Tokyo with no 3am wake-ups.' }, { who: '@cabin_crew_cara', stars: 5, ago: 17, text: 'Simple and sensible.' }, { who: '@ski_trip_tasha', stars: 4, ago: 38, text: 'Works best if you actually follow it!' } ] }
  ],
  pros: [
    { key: 'leo-grant-flying', name: 'Leo Grant Flight Training', color: '#38BDF8', tag: 'Flying lessons for the private pilot licence · Bristol', role: 'Flight instructor',
      img: U('1698223532694-2020d939dbd3', 800, 800), base: 'Bristol, UK', langs: 'English, Italian', years: 11, rating: '4.9', reviewsN: 392, cur: '£',
      creds: ['Qualified flight instructor', '4,000 hours flown', 'Former airline first officer'],
      about: 'Leo teaches people to fly small aircraft, from a first trial lesson to the day you pass your private licence. Patient in the air and very good at explaining crosswinds on the ground.',
      services: [ { id: 'trial', name: 'Trial lesson', dur: '60 minutes', price: 189, desc: 'You take the controls on your first flight.' },
                  { id: 'lesson', name: 'Flying lesson', dur: '60 minutes', price: 245, desc: 'Aircraft and instructor included.' },
                  { id: 'ground', name: 'Ground school session', dur: '2 hours', price: 60, desc: 'Navigation, weather or air law.' } ],
      avail: { days: [2, 3, 4, 5, 6, 0], times: ['08:30', '11:00', '14:00'] },
      reviews: [ { who: '@student_pilot_ruby', stars: 5, ago: 3, text: 'First solo last week. Couldn’t have done it without Leo.' }, { who: '@window_seat_will', stars: 5, ago: 19, text: 'The trial lesson was unforgettable.' }, { who: '@spotter_priya', stars: 5, ago: 43, text: 'Explains everything twice, kindly.' } ],
      posts: [ { ago: 1, text: 'Crosswind landings: wing down into the wind, opposite rudder to keep straight. Then practise it fifty times.' } ],
      tier: 'Pro Zone', verified: true },
    { key: 'hannah-cole-aviation', name: 'Hannah Cole Aviation Advisory', color: '#E2C275', tag: 'Independent help buying, leasing or sharing a private jet', role: 'Aircraft acquisition consultant',
      img: U('1580643735948-c52d25d9c07d', 800, 800), base: 'London, UK · and Geneva', langs: 'English, French, German', years: 17, rating: '4.9', reviewsN: 126, cur: '£',
      creds: ['Former charter operations director', 'Aircraft valuation trained', 'Independent: no commission from sellers'],
      about: 'Hannah helps people decide whether to charter, buy a jet card, share or own, then finds the right aircraft and checks it properly. Independent advice, paid by you.',
      services: [ { id: 'call', name: 'Charter, card or own? call', dur: '60 minutes', price: 250, desc: 'Which option suits how you fly.' },
                  { id: 'search', name: 'Aircraft search', dur: 'Up to 4 months', price: 6500, desc: 'Shortlist, inspections and handover.' },
                  { id: 'review', name: 'Jet card review', dur: '1 week', price: 950, desc: 'Card terms compared, in plain English.' } ],
      avail: { days: [1, 2, 3, 4, 5], times: ['09:00', '13:00', '16:00'] },
      reviews: [ { who: '@window_seat_will', stars: 5, ago: 5, text: 'Saved us from a jet card that didn’t fit.' }, { who: '@ski_trip_tasha', stars: 5, ago: 24, text: 'Clear, honest numbers.' }, { who: '@spotter_priya', stars: 5, ago: 49, text: 'Knows the industry inside out.' } ],
      posts: [ { ago: 2, text: 'Fewer than about 50 hours a year? Charter or a jet card nearly always beats ownership. Do the sums first.' } ],
      tier: 'Pro Zone', verified: true },
    { key: 'amara-osei-cabin-crew', name: 'Amara Osei Cabin Crew Coaching', color: '#FB923C', tag: 'Interview coaching for cabin crew careers', role: 'Cabin crew career coach',
      img: U('1623717217554-72ca676de535', 800, 800), base: 'Manchester, UK · and online', langs: 'English, Twi', years: 9, rating: '4.9', reviewsN: 418, cur: '£',
      creds: ['Twelve years as cabin crew and a cabin manager', 'Ran airline assessment days', 'Coaches career changers'],
      about: 'Amara knows what airlines look for on assessment days, because she ran them. She helps you with your application, the group tasks and the interview, so you walk in calm.',
      services: [ { id: 'cv', name: 'Application and CV review', dur: '45 minutes', price: 45, desc: 'Your application, polished.' },
                  { id: 'mock', name: 'Mock assessment day', dur: '3 hours', price: 120, desc: 'Group tasks and interview, online.' },
                  { id: 'one', name: 'One-to-one coaching', dur: '60 minutes', price: 60, desc: 'Whatever you need.' } ],
      avail: { days: [1, 2, 4, 6], times: ['10:00', '18:00', '19:30'] },
      reviews: [ { who: '@cabin_crew_cara', stars: 5, ago: 2, text: 'Got the job at my first assessment day!' }, { who: '@student_pilot_ruby', stars: 5, ago: 18, text: 'So encouraging.' }, { who: '@window_seat_will', stars: 5, ago: 40, text: 'My sister flies now, thanks to Amara.' } ],
      posts: [ { ago: 3, text: 'Assessment days are about how you treat the other candidates. Help them shine and you shine.' } ],
      tier: 'Pro Zone', verified: true }
  ],
  communities: [
    { key: 'jet-spotters', name: 'Jet Spotters', domain: 'spotters.jetxx.com', color: '#38BDF8', img: U('1721592873149-9823d9dc6b40', 900, 500),
      scope: 'Global', where: 'Every airport fence', members: 286000, online: 3460, tagline: 'Eyes up.',
      about: 'Plane spotters and aviation fans: landing photos, rare visitors, airport viewing spots and long threads about engines.',
      rules: ['Respect airport fences and rules', 'Credit your photos', 'Be kind to beginners'],
      mods: ['@spotter_priya', '@window_seat_will'],
      threads: [ { t: 'Best viewing spots in the UK', by: '@spotter_priya', tag: 'SPOTS', replies: 1640, ago: 0, votes: 3260 }, { t: 'Your landing shot of the year', by: '@spotter_priya', tag: 'PHOTOS', replies: 2280, ago: 1, votes: 4120 }, { t: 'Supersonic travel: will it come back?', by: '@window_seat_will', tag: 'DEBATE', replies: 980, ago: 2, votes: 1760 }, { t: 'Night shoots: settings that work', by: '@student_pilot_ruby', tag: 'HOW-TO', replies: 420, ago: 3, votes: 860 } ],
      events: [ { title: 'Photo of the year: live vote', day: 4, time: '19:00', where: 'Online' }, { title: 'Winter spotting day', day: 20, time: '09:00', where: 'Manchester Airport viewing park' } ] },
    { key: 'bristol-flying-club', name: 'Bristol Flying Club', domain: 'bristol.jetxx.com', color: '#FB923C', img: U('1759753463512-ad0664fd89e5', 900, 500),
      scope: 'Local', where: 'Bristol', members: 860, online: 22, tagline: 'Fly, then talk about it.',
      about: 'Student and qualified pilots around Bristol: shared flights, ground school nights, fly-outs for lunch and a friendly bar.',
      rules: ['Students welcome', 'Share flights fairly', 'Safety culture: talk about mistakes'],
      mods: ['@leo_grant_cfi', '@student_pilot_ruby'],
      threads: [ { t: 'Fly-out for lunch, weather permitting', by: '@leo_grant_cfi', tag: 'FLY-OUT', replies: 26, ago: 0, votes: 58 }, { t: 'Ground school: navigation night', by: '@student_pilot_ruby', tag: 'LEARN', replies: 18, ago: 1, votes: 40 }, { t: 'Who’s doing the Christmas flight?', by: '@leo_grant_cfi', tag: 'EVENT', replies: 34, ago: 2, votes: 66 } ],
      events: [ { title: 'Ground school night: navigation', day: 8, time: '19:00', where: 'Bristol' }, { title: 'Christmas fly-out', day: 19, time: '10:00', where: 'Bristol' } ] }
  ],
  feed: [
    { av: 'JX', avBg: SKY, author: 'JetXX Editorial', sub: 'Featured · Just now', badge: '★ FEATURED',
      text: 'Private jets, cockpits, first solos and window seats. Charter, learn to fly, spot rare visitors or just plan a better trip. Jets, all in one place.',
      img: U('1474302770737-173ee21bab63', 800, 600), eng: '♡ 46.2K · 💬 3.4K · ↗ 5.2K' },
    { av: 'WW', avBg: DUSK, author: '@window_seat_will', sub: 'Travel Tips · Just now', badge: 'COMMUNITY',
      text: 'Always the window seat. Sunset above the clouds on the way home, and for twenty minutes nobody on the plane looked at their phone 🌅',
      img: U('1545132147-d037e6c54cfd', 800, 600), eng: '♡ 15.6K · 💬 1.8K · ↗ 1.1K' },
    { av: 'AJ', avBg: SKY, author: 'Altair Jets', sub: 'Founding Partner · Brand Zone', badge: 'BRAND ZONE',
      text: 'Live from the cockpit tonight: London to Geneva on an <b>Altair</b> jet, with the captain talking you through take-off, cruise and the Alps at dusk.',
      img: U('1761813409957-681c1e4376ec', 800, 600), eng: '♡ 21.4K · 💬 2.2K · ↗ 3.4K' },
    { av: 'CA', avBg: DUSK, author: 'Contrail Aviation Academy', sub: 'Brand Zone · 1h ago', badge: 'BRAND ZONE',
      text: 'Your hands on the controls, your first flight. A <b>Trial Lesson</b> is an hour with an instructor in the seat beside you.',
      img: U('1493673155827-a7617e74a0ca', 800, 600), eng: '♡ 8.6K · 💬 620 · ↗ 740' },
    { av: 'PR', avBg: NIGHT, author: '@spotter_priya', sub: 'Spotting · 2h ago', badge: 'COMMUNITY',
      text: 'Landing lights on, gear down, right over the fence at dusk. Three hours in the cold for this one. Worth it.',
      img: U('1782542549365-545809c39691', 800, 600), eng: '♡ 10.8K · 💬 1.2K · ↗ 420' },
    { av: 'NT', avBg: CHAMP, author: 'Northgate Private Terminal', sub: 'Brand Zone · 4h ago', badge: 'BRAND ZONE',
      text: 'Car to aircraft in under ten minutes. Our terminals are small on purpose: no queues, no crowds, just your jet waiting.',
      img: U('1684838200815-36eef38f353c', 800, 600), eng: '♡ 5.4K · 💬 320 · ↗ 380' },
    { av: 'LG', avBg: SKY, author: 'Leo Grant Flight Training', sub: 'Learn to Fly · 6h ago', badge: 'PRO ZONE',
      text: 'A student’s view on this morning’s lesson, out over the water. The day you stop looking at the instruments and start looking outside is the day you start flying.',
      img: U('1511140276483-30c1217ca449', 800, 600), eng: '♡ 4.2K · 💬 280 · ↗ 460' }
  ],
  prompts: ['How much does it cost to charter a private jet?', 'What is an empty-leg flight?', 'How do I start learning to fly?', 'Help me beat jet lag on a trip to Tokyo'],
  businesses: ['northstar-mro', 'skyfuel-saf']
};

/* the four Brand Zones and two Business Zones */
const brand = (o) => Object.assign({ kind: 'brand', gw: 'jet', verified: true }, o);
Object.assign(ZONES, {
  'altair-jets': brand({ key: 'altair-jets', name: 'Altair Jets', color: '#38BDF8', gradient: SKY, tier: 'Founding Partner',
    tagline: 'Private jet charter, by the seat or the jet', stats: { followers: '268K', content: '940', products: '30' },
    ad: { badge: 'Featured', img: U('1770334618960-d246fc142297', 760, 760), hl: 'Your jet is ready when you are.', sub: 'Private charter from twelve UK airports.', meta: 'Seats from £590' },
    products: [
      { name: 'Empty-Leg Seat, London to Geneva', price: '£690', tag: 'FLAGSHIP', emoji: '💺', rating: 4.8, reviews: 2140, cat: 'seats', special: true, desc: 'A seat on a private jet repositioning to Geneva. Dates move with the aircraft.', features: ['One bag and skis', 'Private terminal'], review: { who: 'Will B.', text: 'Felt like a film star for £690.' } },
      { name: 'Whole Jet, London to Nice', price: 'From £14,800', tag: 'BESTSELLER', emoji: '🛩️', rating: 4.9, reviews: 860, cat: 'charter', desc: 'A light jet for up to seven, one way, on your schedule.', features: ['Up to seven passengers', 'Catering included'], review: { who: 'Tasha M.', text: 'Seamless from door to door.' } },
      { name: 'Jet Card, 25 Hours', price: 'From £168,000', emoji: '💳', rating: 4.8, reviews: 240, cat: 'cards', desc: 'Twenty-five hours of flying at a fixed hourly rate.', features: ['Guaranteed availability'], review: { who: 'Hannah C.', text: 'Clear terms. Rare in this business.' } },
      { name: 'Cockpit Experience Gift', price: '£390', tag: 'SPECIAL', emoji: '🎁', rating: 4.9, reviews: 640, cat: 'gifts', special: true, desc: 'A morning with an Altair crew: the jet, the simulator and the jump seat on a short positioning flight.', features: ['Ages 16 and up'], review: { who: 'Priya S.', text: 'Best birthday present ever.' } }
    ],
    shopCats: [ { key: 'seats', label: 'Seats', icon: '💺' }, { key: 'charter', label: 'Charter', icon: '🛩️' }, { key: 'cards', label: 'Jet cards', icon: '💳' }, { key: 'gifts', label: 'Gifts', icon: '🎁' } ],
    feed: [
      { type: 'post', sub: 'Brand post · 2h', text: 'Cream leather and nobody else on board: tonight’s <b>empty leg</b> to Geneva still has two seats.', img: U('1768346564233-d71f37bd19b6', 800, 440), eng: '♡ 21.4K · 💬 2.2K · ↗ 3.4K', product: 0 },
      { type: 'post', sub: 'On the ramp · Yesterday', text: 'Engines warming at sunset before a <b>whole-jet</b> charter to Nice.', img: U('1566212775038-532d06eda485', 800, 440), eng: '♡ 6.8K · 💬 460', product: 1 },
      { type: 'community', who: 'Will B.', whoBg: DUSK, sub: 'Community · 1d', text: 'What happens to my empty-leg seat if the main charter changes its time?', eng: '♡ 460 · 💬 128', reply: 'Hi Will! Empty legs move when the main charter moves, so we tell you the moment it changes, and you can switch to the new time or take a full refund. For tight plans, a whole-jet charter is the one with a fixed time. ✈️' }
    ],
    events: [ { zoneEvent: true, tag: 'LIVE', title: 'Altair Live · London to Geneva from the cockpit', when: 'Live now', desc: 'Take-off, cruise and the Alps at dusk, with the captain answering questions.', registered: 7260, capacity: 20000 } ],
    about: { founded: 'Farnborough · 2009', story: 'Two former airline pilots with one light jet. Now thirty aircraft and a seat-by-seat service for empty legs. We joined JetXX as Founding Partner because the people who love flying are here.', milestones: [['2009', 'One light jet'], ['2020', 'Empty-leg seats'], ['2026', 'Founding Partner on JetXX']], values: ['Two pilots on every flight', 'Fair, clear pricing', 'Sustainable fuel on request'] } }),

  'contrail-academy': brand({ key: 'contrail-academy', name: 'Contrail Aviation Academy', color: '#FB923C', gradient: DUSK, tier: 'Brand Zone',
    tagline: 'Learn to fly, from trial lesson to licence', stats: { followers: '96.4K', content: '360', products: '14' },
    ad: { badge: 'New', img: U('1764547168632-2d1d9c7519a3', 760, 760), hl: 'Your first flight starts here.', sub: 'Trial lessons and private pilot courses.', meta: 'From £189' },
    products: [
      { name: 'Trial Lesson', price: '£189', tag: 'FLAGSHIP', emoji: '🛫', rating: 4.9, reviews: 5240, cat: 'lessons', special: true, desc: 'An hour in a two-seat aircraft. You fly it, your instructor helps.', features: ['No experience needed', 'Counts towards a licence'], review: { who: 'Ruby A.', text: 'I booked the full course that afternoon.' } },
      { name: 'Private Pilot Course', price: 'From £11,900', tag: 'BESTSELLER', emoji: '🎓', rating: 4.9, reviews: 860, cat: 'courses', desc: 'Forty-five hours of flying and ground school, to your private licence.', features: ['Pay as you go available'], review: { who: 'Leo G.', text: 'Well-run school.' } },
      { name: 'Ground School Pack', price: '£395', emoji: '📚', rating: 4.8, reviews: 1460, cat: 'courses', desc: 'Nine theory subjects, online lessons and practice exams.', features: ['Twelve months access'], review: { who: 'Priya S.', text: 'Passed all nine.' } },
      { name: 'Trial Lesson Gift Voucher', price: '£189', tag: 'SPECIAL', emoji: '🎁', rating: 4.9, reviews: 1960, cat: 'gifts', special: true, desc: 'A trial lesson, as a gift, valid for a year.', features: ['Printed or digital'], review: { who: 'Will B.', text: 'My dad cried. Happy tears.' } }
    ],
    shopCats: [ { key: 'lessons', label: 'Lessons', icon: '🛫' }, { key: 'courses', label: 'Courses', icon: '🎓' }, { key: 'gifts', label: 'Gifts', icon: '🎁' } ],
    feed: [ { type: 'post', sub: 'Brand post · 1h', text: 'Ready on the apron for this afternoon’s <b>Trial Lessons</b>.', img: U('1791672190175-509266d32c44', 800, 440), eng: '♡ 8.6K · 💬 620', product: 0 } ],
    events: [ { zoneEvent: true, tag: 'EVENT', title: 'Open day: learn to fly', when: 'Dec 5 · 10:00', desc: 'Meet the instructors, sit in the aircraft and ask anything.', registered: 640, capacity: 1500 } ],
    about: { founded: 'Gloucestershire · 2001', story: 'A flying school at a small airfield, run by instructors who still love a Tuesday morning lesson.', milestones: [['2001', 'The first student'], ['2018', '1,000 licences'], ['2026', 'Brand Zone on JetXX']], values: ['Patient instructors', 'Well-maintained aircraft', 'Pay as you go'] } }),

  'northgate-terminal': brand({ key: 'northgate-terminal', name: 'Northgate Private Terminal', color: '#E2C275', gradient: CHAMP, tier: 'Brand Zone',
    tagline: 'Private terminals at three UK airports', stats: { followers: '58.2K', content: '220', products: '10' },
    ad: { badge: 'Featured', img: U('1783098269685-49990ec0f9c9', 760, 760), hl: 'Car to aircraft in ten minutes.', sub: 'Private terminals, no queues.', meta: 'From £95' },
    products: [
      { name: 'Terminal Lounge Pass', price: '£95', tag: 'FLAGSHIP', emoji: '🛋️', rating: 4.8, reviews: 1460, cat: 'lounge', special: true, desc: 'The lounge before your flight: food, drinks and quiet.', features: ['Up to three hours'], review: { who: 'Tasha M.', text: 'Calm before the ski trip.' } },
      { name: 'Fast-Track Arrival', price: '£240', tag: 'BESTSELLER', emoji: '🚘', rating: 4.8, reviews: 860, cat: 'services', desc: 'Met at the aircraft, through the terminal, to your car.', features: ['Bags handled'], review: { who: 'Will B.', text: 'Off the plane and home in twenty minutes.' } },
      { name: 'Pet Travel Concierge', price: '£180', emoji: '🐕', rating: 4.9, reviews: 420, cat: 'services', desc: 'Paperwork checks and a calm space for travelling pets.', features: ['Ask your vet first'], review: { who: 'Hannah C.', text: 'Our dog flew happy.' } },
      { name: 'Chauffeur Transfer', price: '£160', tag: 'SPECIAL', emoji: '🚗', rating: 4.8, reviews: 320, cat: 'services', special: true, desc: 'From central London to the terminal.', features: ['Electric cars'], review: { who: 'Priya S.', text: 'Smooth and on time.' } }
    ],
    shopCats: [ { key: 'lounge', label: 'Lounge', icon: '🛋️' }, { key: 'services', label: 'Services', icon: '🚘' } ],
    feed: [ { type: 'post', sub: 'Brand post · 4h', text: 'Boarding in ten minutes from the <b>Terminal Lounge</b>. Your seat is waiting.', img: U('1768346564210-f382cdf18375', 800, 440), eng: '♡ 5.4K · 💬 320', product: 0 } ],
    events: [ { zoneEvent: true, tag: 'EVENT', title: 'Ski season departures open', when: 'Dec 1 · All day', desc: 'Lounge and fast-track bookings for ski flights to the Alps.', registered: 860, capacity: 3000 } ],
    about: { founded: 'London · 2014', story: 'A former airport manager who thought private travel should start calmly, not in a crowded hangar.', milestones: [['2014', 'The first terminal'], ['2022', 'The third'], ['2026', 'Brand Zone on JetXX']], values: ['Ten minutes, car to aircraft', 'Quiet spaces', 'Electric transfers'] } }),

  'clearsky-headsets': brand({ key: 'clearsky-headsets', name: 'Clearsky Headsets', color: '#94A3B8', gradient: NIGHT, tier: 'Brand Zone',
    tagline: 'Pilot headsets and flight bags', stats: { followers: '46.2K', content: '190', products: '60' },
    ad: { badge: 'Gift', img: U('1552773346-ca6976a5d4ca', 760, 760), hl: 'Hear the radio. Not the engine.', sub: 'Noise-cancelling headsets for pilots.', meta: 'From £39' },
    products: [
      { name: 'Clearsky ANR Headset', price: '£649', tag: 'FLAGSHIP', emoji: '🎧', rating: 4.9, reviews: 1240, cat: 'headsets', special: true, desc: 'Active noise cancelling, Bluetooth and a light, comfy fit for long flights.', features: ['40-hour battery', 'Five-year warranty'], review: { who: 'Leo G.', text: 'My ears thank me.' } },
      { name: 'Student Headset', price: '£189', tag: 'BESTSELLER', emoji: '🎓', rating: 4.7, reviews: 2140, cat: 'headsets', desc: 'A tough, comfortable headset for training.', features: ['Gel seals'], review: { who: 'Ruby A.', text: 'Perfect for my first 45 hours.' } },
      { name: 'Flight Bag', price: '£79', emoji: '🎒', rating: 4.8, reviews: 860, cat: 'bags', desc: 'Pockets for headset, charts, tablet and snacks.', features: ['Padded headset pocket'], review: { who: 'Priya S.', text: 'Everything in its place.' } },
      { name: 'Kneeboard', price: '£39', tag: 'SPECIAL', emoji: '📋', rating: 4.7, reviews: 640, cat: 'bags', special: true, desc: 'Holds a tablet or paper on your knee in the cockpit.', features: ['Fits most tablets'], review: { who: 'Will B.', text: 'Simple and solid.' } }
    ],
    shopCats: [ { key: 'headsets', label: 'Headsets', icon: '🎧' }, { key: 'bags', label: 'Bags', icon: '🎒' } ],
    feed: [ { type: 'post', sub: 'Brand post · 1d', text: 'Night flight, cockpit lights low, the <b>ANR Headset</b> keeping the cabin quiet.', img: U('1587408811730-1a978e6c407d', 800, 440), eng: '♡ 3.4K · 💬 190', product: 0 } ],
    events: [ { zoneEvent: true, tag: 'SALE', title: 'Christmas sale: 20% off headsets', when: 'Dec 4 · All day', desc: 'A fifth off every headset, one day only.', registered: 960, capacity: 3000 } ],
    about: { founded: 'Bristol · 2012', story: 'An audio engineer and a pilot who wanted a headset that didn’t squeeze.', milestones: [['2012', 'The first headset'], ['2021', 'Bluetooth'], ['2026', 'Brand Zone on JetXX']], values: ['Light and comfy', 'Five-year warranty', 'Repairs, not replacements'] } }),

  'northstar-mro': { key: 'northstar-mro', kind: 'business', gw: 'jet', name: 'Northstar Aircraft Maintenance', color: '#38BDF8', gradient: SKY, img: U('1585916788784-64aa099fec1f', 900, 500),
    tier: 'Verified', category: 'Aircraft maintenance', tagline: 'Maintenance and inspections for business jets.',
    about: { founded: 'Oxfordshire · 1996', story: 'Engineers who look after business jets: scheduled checks, repairs and cabin refurbishment in our hangars.' },
    stats: { years: 30, staff: 260, clients: '140 aircraft' },
    caps: [ { name: 'Scheduled checks', detail: 'From small inspections to major checks.' }, { name: 'Repairs', detail: 'Structures and avionics.' }, { name: 'Cabins', detail: 'Seats, leather and lighting.' } ],
    specs: { moq: 'One aircraft', lead: '1 day to 12 weeks', regions: 'UK & Europe', certs: ['Approved maintenance organisation', 'Fully insured', 'Engineers on call all night'] },
    supplies: [ { kind: 'brand', key: 'altair-jets', what: 'Maintenance for the Altair fleet' } ],
    cases: [ { title: 'Back in service early', text: 'A major check finished two days early, before the ski season.' } ],
    feed: [ { sub: 'Hangar · 3d', text: 'Three jets in for winter checks this week.' } ],
    contact: { person: 'Martin Shaw, Customers', response: 'Replies within one working day' } },

  'skyfuel-saf': { key: 'skyfuel-saf', kind: 'business', gw: 'jet', name: 'Skyfuel Sustainable Fuels', color: '#E2C275', gradient: CHAMP, img: U('1648285522744-2f34faba5d73', 900, 500),
    tier: 'Verified', category: 'Sustainable aviation fuel', tagline: 'Lower-carbon jet fuel, supplied to UK airports.',
    about: { founded: 'Teesside · 2018', story: 'We make sustainable aviation fuel from waste oils and supply it to operators and airports across the UK.' },
    stats: { years: 8, staff: 140, clients: '60 operators' },
    caps: [ { name: 'Fuel supply', detail: 'Blended fuel at UK airports.' }, { name: 'Book and claim', detail: 'Claim the carbon saving where supply is short.' }, { name: 'Reporting', detail: 'Audited carbon reports.' } ],
    specs: { moq: 'One flight', lead: '1 to 4 weeks', regions: 'UK', certs: ['Certified sustainable fuel', 'Independently audited', 'Fully insured'] },
    supplies: [ { kind: 'brand', key: 'altair-jets', what: 'Sustainable fuel on request for Altair flights' } ],
    cases: [ { title: 'A greener ski season', text: 'An operator’s winter Alps flights blended with sustainable fuel.' } ],
    feed: [ { sub: 'Supply · 5d', text: 'A second airport now has our fuel on tap.' } ],
    contact: { person: 'Aisha Rahman, Partnerships', response: 'Replies within two working days' } }
});

/* events in the Events tab */
gxEvents('jet', [
  { gw: 'jet', zone: 'altair-jets', type: 'Live', icon: '🔴', live: true, time: 'Live Now', title: 'Altair Live · London to Geneva from the cockpit', desc: 'Take-off, cruise and the Alps at dusk, with the captain answering questions.' },
  { gw: 'jet', type: 'Event', icon: '📸', time: 'Dec 4', title: 'Photo of the year: live vote', desc: 'Jet Spotters pick 2026’s best aviation photo.' },
  { gw: 'jet', zone: 'clearsky-headsets', type: 'Sale', icon: '🎧', time: 'Dec 4', title: 'Clearsky Christmas sale', desc: '20% off every headset, one day only.' },
  { gw: 'jet', zone: 'northgate-terminal', type: 'Event', icon: '🎿', time: 'Dec 1', title: 'Ski season departures open', desc: 'Northgate lounge and fast-track bookings for Alps flights.' },
  { gw: 'jet', type: 'Event', icon: '🧭', time: 'Dec 1', title: 'Ground school night, Bristol', desc: 'Bristol Flying Club: navigation for students.' },
  { gw: 'jet', zone: 'contrail-academy', type: 'Event', icon: '🛫', time: 'Dec 5', title: 'Contrail open day: learn to fly', desc: 'Meet the instructors and sit in the aircraft.' },
  { gw: 'jet', type: 'Event', icon: '🎄', time: 'Dec 12', title: 'Christmas fly-out, Bristol', desc: 'Bristol Flying Club flies out for lunch, weather permitting.' },
  { gw: 'jet', type: 'Event', icon: '✈️', time: 'Dec 13', title: 'Winter spotting day, Manchester', desc: 'Jet Spotters meet at the airport viewing park.' }
]);
})();
/* ═════════ /JETXX ═════════ */
