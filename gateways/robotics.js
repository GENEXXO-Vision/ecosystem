/* ═════════ ROBOTICSXX — an AI demo gateway (2026-11-27, Sean; build -98) ═════════
   Built with the _tools/README.md recipe. Palette (dark): workshop night, circuit cyan, servo yellow.
   Home sector: AI (Sean’s list). It is also listed in Tech and Industrial, so GW_HOME is set below and 'ai' is in
   HOME_ONLY: it leads the AI band only. Every maker, firm, pro and product is fictional; places and the engineering are real.
   Care: safety first around moving machines and batteries; prosthetic and medical questions go to a clinician. */
(function(){
const U = (id, w, h) => `https://images.unsplash.com/photo-${id}?w=${w}&h=${h}&fit=crop&q=75`;
GW_HOME.robotics = 'ai';
const CYAN = 'linear-gradient(135deg,#67E8F9,#0E7490)', SERVO = 'linear-gradient(135deg,#FDE047,#CA8A04)', STEELG = 'linear-gradient(135deg,#94A3B8,#1E293B)', CORAL = 'linear-gradient(135deg,#FDA4AF,#E11D48)';

GATEWAYS.robotics = {
  name: 'RoboticsXX', domain: 'roboticsxx.com', emoji: '🤖', sector: 'ai', live: true,
  tagline: 'The Robotics Universe',
  theme: {
    bg: '#071015', text: '#E2F3F7', cardBg: 'rgba(255,255,255,.05)', cardBorder: 'rgba(255,255,255,.09)',
    headerBg: 'linear-gradient(180deg,#0D1B22,#071015)', accent: '#22D3EE', accentAlt: '#FACC15', dark: true
  },
  gradient: 'linear-gradient(135deg,#22D3EE,#0E7490,#CA8A04)',
  stats: { members: '2.6M', brands: '1.0K+', agents: '36' },
  spaces: ['All Feed', 'Build', 'Industry', 'Learn', 'Research', 'Careers'],
  trending: ['#BuildNight', '#RobotFootball', '#CobotsAtWork'],
  brandZones: [
    { key: 'tinkerbot', name: 'Tinkerbot', color: '#22D3EE', tier: 'Founding Partner', tag: 'Robot kits for schools, clubs and kitchen tables' },
    { key: 'servoline', name: 'Servoline', color: '#FACC15', tier: 'Brand Zone', tag: 'Motors, sensors and parts for builders' },
    { key: 'cobotic', name: 'Cobotic', color: '#94A3B8', tier: 'Brand Zone', tag: 'Robot arms that work safely beside people' },
    { key: 'printbay', name: 'Printbay', color: '#FB7185', tier: 'Brand Zone', tag: '3D printers for makers and classrooms' }
  ],
  apps: [
    { name: 'Gear Ratio', color: '#FACC15', desc: 'Pick gears and see the speed and torque you’ll get', key: 'gear-ratio', url: 'apps/gear-ratio.html',
      dev: 'Servoline', rating: '4.8', users: '720K', perms: ['profile', 'feed'],
      tagline: 'Fast or strong? Choose your gears.',
      about: 'Gear Ratio takes your motor’s speed and the teeth on each gear, then shows the output speed, the torque multiplier and how fast your wheels will roll. Save the set-ups that work.',
      features: ['Two-stage gear trains', 'Speed, torque and wheel speed', 'Saved set-ups', 'Share a set-up'],
      shots: ['apps/gear-ratio/shot-1.jpg', 'apps/gear-ratio/shot-2.jpg', 'apps/gear-ratio/shot-3.jpg'],
      version: '2.8', size: '9 KB',
      updates: [ { v: '2.8', ago: 2, notes: 'Two-stage trains.' }, { v: '2.2', ago: 70, notes: 'Wheel speed.' }, { v: '1.6', ago: 210, notes: 'Signed in with GENEXXO.' } ],
      reviews: [ { who: '@build_night_bea', stars: 5, ago: 1, text: 'Finally understood why my robot was so slow.' }, { who: '@ravi_mehta_robots', stars: 5, ago: 15, text: 'I use it to teach torque.' }, { who: '@freya_lund_stem', stars: 4, ago: 40, text: 'Great for Year 9.' } ] },
    { name: 'Build Log', color: '#22D3EE', desc: 'Track your robot build, step by step', key: 'build-log', url: 'apps/build-log.html',
      dev: 'Tinkerbot', rating: '4.9', users: '1.1M', perms: ['profile', 'feed'],
      tagline: 'Every build tells a story.',
      about: 'Build Log keeps your robot projects in one place: the parts list, each step done, hours spent and what you learned. Tick off parts as they arrive and steps as you finish them.',
      features: ['Parts list with ticks', 'Steps and progress', 'Hours and notes', 'Share your build'],
      shots: ['apps/build-log/shot-1.jpg', 'apps/build-log/shot-2.jpg', 'apps/build-log/shot-3.jpg'],
      version: '3.2', size: '9 KB',
      updates: [ { v: '3.2', ago: 3, notes: 'Hours and notes.' }, { v: '2.6', ago: 76, notes: 'Parts list.' }, { v: '2.0', ago: 220, notes: 'Signed in with GENEXXO.' } ],
      reviews: [ { who: '@freya_lund_stem', stars: 5, ago: 2, text: 'My whole club logs their builds here.' }, { who: '@build_night_bea', stars: 5, ago: 19, text: 'Love looking back at old builds.' }, { who: '@bill_harper_automation', stars: 4, ago: 43, text: 'Good habits start young.' } ] },
    { name: 'Robot Quiz', color: '#FB7185', desc: 'Ten questions a day on how robots work', key: 'robot-quiz', url: 'apps/robot-quiz.html',
      dev: 'Cobotic', rating: '4.8', users: '940K', perms: ['profile', 'feed'],
      tagline: 'Sensors, motors and brains.',
      about: 'Robot Quiz asks ten questions a day on how robots sense, think and move: servos, sensors, degrees of freedom, safety and the history of robots. Every answer comes with a short explanation.',
      features: ['Ten questions a day', 'Explanations', 'Your best score', 'Share your score'],
      shots: ['apps/robot-quiz/shot-1.jpg', 'apps/robot-quiz/shot-2.jpg', 'apps/robot-quiz/shot-3.jpg'],
      version: '2.0', size: '9 KB',
      updates: [ { v: '2.0', ago: 1, notes: 'Safety questions.' }, { v: '1.6', ago: 62, notes: 'Explanations.' }, { v: '1.2', ago: 190, notes: 'Signed in with GENEXXO.' } ],
      reviews: [ { who: '@bill_harper_automation', stars: 5, ago: 3, text: 'Accurate, and the history questions are fun.' }, { who: '@build_night_bea', stars: 5, ago: 22, text: 'Daily habit now.' }, { who: '@ravi_mehta_robots', stars: 4, ago: 46, text: 'Nicely pitched.' } ] }
  ],
  pros: [
    { key: 'ravi-mehta-robots', name: 'Ravi Mehta Robotics Engineering', color: '#22D3EE', tag: 'Robot design help for start-ups and makers', role: 'Robotics engineer',
      img: U('1570470836811-78ef04bb23d3', 800, 800), base: 'Cambridge, UK · and online', langs: 'English, Hindi', years: 9, rating: '4.9', reviewsN: 186, cur: '£',
      creds: ['Master’s in robotics', 'Designed grippers for warehouse robots', 'Mentors student robot teams'],
      about: 'Ravi helps start-ups and makers turn a robot idea into something that works: the right motors, sensors and controller, and testing that finds problems early.',
      services: [ { id: 'review', name: 'Design review call', dur: '60 minutes', price: 95, desc: 'Your robot design, checked and improved.' },
                  { id: 'proto', name: 'Prototype sprint', dur: '2 weeks', price: 1800, desc: 'From sketch to a working prototype.' },
                  { id: 'mentor', name: 'Student team mentoring', dur: 'Four sessions', price: 120, desc: 'For school and university teams.' } ],
      avail: { days: [1, 2, 3, 4], times: ['10:00', '14:00', '18:00'] },
      reviews: [ { who: '@build_night_bea', stars: 5, ago: 2, text: 'Fixed my gripper design in one call.' }, { who: '@freya_lund_stem', stars: 5, ago: 23, text: 'My students adore him.' }, { who: '@bill_harper_automation', stars: 5, ago: 48, text: 'A bright engineer.' } ],
      posts: [ { ago: 1, text: 'Picking up a sock is still harder for a robot than playing chess. Hands are the hard part of robotics.' } ],
      tier: 'Pro Zone', verified: true },
    { key: 'bill-harper-automation', name: 'Bill Harper Automation Safety', color: '#FACC15', tag: 'Safe robot cells for factories and workshops', role: 'Automation safety engineer',
      img: U('1715515012774-501892dcabe4', 800, 800), base: 'Coventry, UK', langs: 'English', years: 40, rating: '5.0', reviewsN: 248, cur: '£',
      creds: ['Forty years in factory automation', 'Machinery safety specialist', 'Trains engineers in risk assessment'],
      about: 'Bill helps factories and workshops put robots to work safely: guarding, sensors, risk assessments and making sure people and machines can share a space.',
      services: [ { id: 'audit', name: 'Robot cell safety check', dur: 'One day', price: 680, desc: 'Visit, check and written report.' },
                  { id: 'cobot', name: 'Cobot readiness call', dur: '60 minutes', price: 90, desc: 'Is a collaborative arm right for you?' },
                  { id: 'course', name: 'Risk assessment course', dur: 'Two days', price: 540, desc: 'For engineers and supervisors.' } ],
      avail: { days: [1, 2, 4], times: ['08:30', '13:00'] },
      reviews: [ { who: '@ravi_mehta_robots', stars: 5, ago: 4, text: 'Bill taught me to think about the person, not the robot.' }, { who: '@build_night_bea', stars: 5, ago: 30, text: 'Calm, thorough and funny.' }, { who: '@freya_lund_stem', stars: 5, ago: 56, text: 'A gem.' } ],
      posts: [ { ago: 3, text: 'Before you power up any robot, ask one question: where is everyone’s hand going to be? Then plan the stop button.' } ],
      tier: 'Pro Zone', verified: true },
    { key: 'freya-lund-stem', name: 'Freya Lund Robot Club Coaching', color: '#FB7185', tag: 'Robot clubs and lessons for schools', role: 'Robotics teacher',
      img: U('1544507888-56d73eb6046e', 800, 800), base: 'Coventry, UK · and online', langs: 'English, Swedish', years: 12, rating: '4.9', reviewsN: 228, cur: '£',
      creds: ['Qualified science teacher', 'Runs an award-winning school robot club', 'Trains teachers to start clubs'],
      about: 'Freya helps schools start robot clubs and teaches lessons where children build, code and test real robots, and learn that failing is part of it.',
      services: [ { id: 'start', name: 'Start a robot club', dur: 'Half a day', price: 220, desc: 'Training for teachers, kit list included.' },
                  { id: 'lesson', name: 'Guest robot lesson', dur: '90 minutes', price: 140, desc: 'For a class of up to 30.' },
                  { id: 'call', name: 'Teacher help call', dur: '30 minutes', price: 30, desc: 'Stuck on a lesson? Ask Freya.' } ],
      avail: { days: [1, 3, 5], times: ['15:30', '18:30'] },
      reviews: [ { who: '@build_night_bea', stars: 5, ago: 3, text: 'My daughter’s club is the best thing at her school.' }, { who: '@ravi_mehta_robots', stars: 5, ago: 26, text: 'A brilliant teacher.' }, { who: '@bill_harper_automation', stars: 5, ago: 51, text: 'The future is in good hands.' } ],
      posts: [ { ago: 2, text: 'A robot that blows bubbles taught my Year 4s more about sensors in an hour than a worksheet ever could.' } ],
      tier: 'Pro Zone', verified: true }
  ],
  communities: [
    { key: 'robot-builders', name: 'Robot Builders', domain: 'builders.roboticsxx.com', color: '#22D3EE', img: U('1768323102290-3b6ad7d1c5b4', 900, 500),
      scope: 'Global', where: 'Workshops and kitchen tables everywhere', members: 368000, online: 4120, tagline: 'Build it, break it, fix it, share it.',
      about: 'Makers, students and engineers sharing robot builds, asking for help and celebrating the first time it moves. Beginners are especially welcome.',
      rules: ['Safety first: batteries and moving parts', 'Share your code and parts lists', 'No question is too basic'],
      mods: ['@build_night_bea', '@ravi_mehta_robots'],
      threads: [ { t: 'Show us your first robot', by: '@build_night_bea', tag: 'BUILDS', replies: 2480, ago: 0, votes: 4860 }, { t: 'Why does my robot drift left?', by: '@build_night_bea', tag: 'HELP', replies: 1240, ago: 1, votes: 2160 }, { t: 'Best first robot kit for a ten-year-old?', by: '@ravi_mehta_robots', tag: 'KITS', replies: 1680, ago: 2, votes: 2840 }, { t: 'Battery safety: what everyone should know', by: '@ravi_mehta_robots', tag: 'SAFETY', replies: 860, ago: 3, votes: 2420 } ],
      events: [ { title: 'Build Night: line followers', day: 5, time: '19:00', where: 'Online' }, { title: 'Show and tell: winter builds', day: 19, time: '19:00', where: 'Online' } ] },
    { key: 'coventry-robot-club', name: 'Coventry Robot Club', domain: 'coventry.roboticsxx.com', color: '#FACC15', img: U('1786542715448-f47cf2dbcca0', 900, 500),
      scope: 'Local', where: 'Coventry', members: 940, online: 22, tagline: 'Robots, pizza and good company.',
      about: 'Builders of all ages from around Coventry meeting twice a month to build, fix and race robots. Families welcome; tools and spare parts on the shelf.',
      rules: ['Children with an adult', 'Safety glasses on at the bench', 'Tidy up together'],
      mods: ['@freya_lund_stem', '@bill_harper_automation'],
      threads: [ { t: 'December meet: robot football', by: '@freya_lund_stem', tag: 'MEETUP', replies: 46, ago: 0, votes: 108 }, { t: 'Spare servos on the shelf: help yourself', by: '@bill_harper_automation', tag: 'PARTS', replies: 22, ago: 1, votes: 54 }, { t: 'Lift to the workshop from Kenilworth?', by: '@freya_lund_stem', tag: 'TRAVEL', replies: 14, ago: 2, votes: 30 } ],
      events: [ { title: 'Robot football night', day: 9, time: '18:00', where: 'Coventry' }, { title: 'Christmas build: light-up robots', day: 23, time: '10:00', where: 'Coventry' } ] }
  ],
  feed: [
    { av: 'RX', avBg: CYAN, author: 'RoboticsXX Editorial', sub: 'Featured · Just now', badge: '★ FEATURED',
      text: 'Kits on the kitchen table, arms on the factory floor, hands in the lab. The people who build robots, how they work and where they’re going.',
      img: U('1680783954745-3249be59e527', 800, 600), eng: '♡ 34.2K · 💬 2.8K · ↗ 4.6K' },
    { av: 'BB', avBg: SERVO, author: '@build_night_bea', sub: 'Build · Just now', badge: 'COMMUNITY',
      text: 'Three evenings, one soldering iron, and it finally drives in a straight line. Next job: teach it to stop before the cat.',
      img: U('1775519686045-cfd36ca0accc', 800, 600), eng: '♡ 11.8K · 💬 1.4K · ↗ 960' },
    { av: 'TB', avBg: CYAN, author: 'Tinkerbot', sub: 'Founding Partner · Brand Zone', badge: 'BRAND ZONE',
      text: 'Live now: a Year 7 class meets its new robot, then builds a line follower of its own. Questions from the class answered live. Follow <b>Tinkerbot</b>.',
      img: U('1743677077216-00a458eff9e0', 800, 600), eng: '♡ 17.4K · 💬 2.2K · ↗ 2.6K' },
    { av: 'CB', avBg: STEELG, author: 'Cobotic', sub: 'Brand Zone · 1h ago', badge: 'BRAND ZONE',
      text: 'Slow, steady and stops the moment you touch it. The <b>Cobotic Arm 5</b> is built to work beside people.',
      img: U('1784821856280-401b76b03266', 800, 600), eng: '♡ 7.6K · 💬 540 · ↗ 820' },
    { av: 'PB', avBg: CORAL, author: 'Printbay', sub: 'Brand Zone · 2h ago', badge: 'BRAND ZONE',
      text: 'Six faces, one printer, and a robot chassis appearing layer by layer. The <b>Printbay Class</b> is built for schools.',
      img: U('1585980243496-fe29a36bd382', 800, 600), eng: '♡ 6.4K · 💬 460 · ↗ 580' },
    { av: 'RM', avBg: CYAN, author: 'Ravi Mehta Robotics Engineering', sub: 'Research · 4h ago', badge: 'PRO ZONE',
      text: 'Twenty joints in a hand, and every one needs a motor or a tendon. This is why robot hands are still the hardest part.',
      img: U('1786539861520-6e91dc64a958', 800, 600), eng: '♡ 5.2K · 💬 360 · ↗ 440' },
    { av: 'FL', avBg: CORAL, author: 'Freya Lund Robot Club Coaching', sub: 'Learn · 6h ago', badge: 'PRO ZONE',
      text: 'Bubbles everywhere and a room full of giggling scientists. Today’s lesson: sensors.',
      img: U('1767966773527-43fa6ae611c9', 800, 600), eng: '♡ 4.4K · 💬 300 · ↗ 380' }
  ],
  prompts: ['What’s a good first robot kit?', 'What is a servo motor?', 'How do robots work safely beside people?', 'Why are robot hands so hard to build?'],
  businesses: ['axis-automation', 'kinetic-limbs']
};

/* the four Brand Zones and two Business Zones */
const brand = (o) => Object.assign({ kind: 'brand', gw: 'robotics', verified: true }, o);
Object.assign(ZONES, {
  'tinkerbot': brand({ key: 'tinkerbot', name: 'Tinkerbot', color: '#22D3EE', gradient: CYAN, tier: 'Founding Partner',
    tagline: 'Robot kits for schools, clubs and kitchen tables', stats: { followers: '318K', content: '680', products: '24' },
    ad: { badge: 'Featured', img: U('1767954561407-7014cb8fb16c', 760, 760), hl: 'Build your first robot this weekend.', sub: 'Kits with everything in the box, and lessons to match.', meta: 'From £39' },
    products: [
      { name: 'Tinkerbot Rover Kit', price: '£59', tag: 'FLAGSHIP', emoji: '🚙', rating: 4.9, reviews: 4860, cat: 'kits', special: true, desc: 'A two-wheeled robot with line and distance sensors.', features: ['No soldering', 'Ages 9 and up'], review: { who: 'Bea K.', text: 'Built it with my son in an afternoon.' } },
      { name: 'Classroom Pack', price: '£480', tag: 'BESTSELLER', emoji: '🏫', rating: 4.9, reviews: 960, cat: 'schools', desc: 'Ten rovers, spare parts and twelve lesson plans.', features: ['Teacher training video'], review: { who: 'Freya L.', text: 'Our club runs on these.' } },
      { name: 'Tracked Explorer', price: '£89', emoji: '🛞', rating: 4.8, reviews: 1460, cat: 'kits', desc: 'A tracked robot that climbs over books and rugs.', features: ['Camera add-on'], review: { who: 'Ravi M.', text: 'Brilliant for older kids.' } },
      { name: 'Starter Kit', price: '£39', tag: 'SPECIAL', emoji: '🔋', rating: 4.8, reviews: 2140, cat: 'kits', special: true, desc: 'A small robot that blinks, beeps and follows your hand.', features: ['Ages 7 and up'], review: { who: 'Bill H.', text: 'Perfect first robot.' } }
    ],
    shopCats: [ { key: 'kits', label: 'Kits', icon: '🚙' }, { key: 'schools', label: 'Schools', icon: '🏫' } ],
    feed: [
      { type: 'post', sub: 'Brand post · 2h', text: 'Tracks on, sensors up. The <b>Tracked Explorer</b> is ready to climb.', img: U('1558137623-ce933996c730', 800, 440), eng: '♡ 17.4K · 💬 2.2K · ↗ 2.6K', product: 2 },
      { type: 'community', who: 'Bea K.', whoBg: SERVO, sub: 'Community · 1d', text: 'Is the Rover Kit OK for a nine-year-old with no experience?', eng: '♡ 880 · 💬 230', reply: 'Hi Bea! Yes, it needs no soldering, and the first lesson gets it moving in about an hour. Build it together the first time, and keep small parts away from little ones. 🚙' }
    ],
    events: [ { zoneEvent: true, tag: 'LIVE', title: 'Tinkerbot Live · a class builds its first robot', when: 'Live now', desc: 'A Year 7 class meets its robot and builds a line follower.', registered: 9260, capacity: 24000 } ],
    about: { founded: 'Coventry · 2014', story: 'Two teachers and an engineer who wanted every child to build a robot. We joined RoboticsXX as Founding Partner because robots are the best way to learn how things work.', milestones: [['2014', 'Founded'], ['2021', 'In 3,000 schools'], ['2026', 'Founding Partner on RoboticsXX']], values: ['Everything in the box', 'Safe by design', 'Spare parts for years'] } }),

  'servoline': brand({ key: 'servoline', name: 'Servoline', color: '#FACC15', gradient: SERVO, tier: 'Brand Zone',
    tagline: 'Motors, sensors and parts for builders', stats: { followers: '142K', content: '380', products: '600' },
    ad: { badge: 'New', img: U('1517077304055-6e89abbf09b0', 760, 760), hl: 'The right part, tomorrow.', sub: 'Motors, sensors and boards with next-day delivery.', meta: 'From £3' },
    products: [
      { name: 'Servoline Smart Servo', price: '£14', tag: 'FLAGSHIP', emoji: '⚙️', rating: 4.8, reviews: 3860, cat: 'motors', special: true, desc: 'A metal-gear servo that reports its position.', features: ['Daisy-chain wiring'], review: { who: 'Ravi M.', text: 'Precise and tough.' } },
      { name: 'Gear Motor Pair', price: '£12', tag: 'BESTSELLER', emoji: '🔩', rating: 4.7, reviews: 2460, cat: 'motors', desc: 'Two geared motors with wheels.', features: ['Three ratios'], review: { who: 'Bea K.', text: 'My robot finally has torque.' } },
      { name: 'Sensor Pack', price: '£24', emoji: '📡', rating: 4.8, reviews: 1640, cat: 'sensors', desc: 'Distance, line, light and touch sensors.', features: ['Labelled leads'], review: { who: 'Freya L.', text: 'Great for clubs.' } },
      { name: 'Soldering Starter Set', price: '£29', tag: 'SPECIAL', emoji: '🔥', rating: 4.7, reviews: 860, cat: 'sensors', special: true, desc: 'Iron, stand, lead-free solder and safety glasses.', features: ['Beginner’s guide'], review: { who: 'Bill H.', text: 'Safety glasses included. Good.' } }
    ],
    shopCats: [ { key: 'motors', label: 'Motors', icon: '⚙️' }, { key: 'sensors', label: 'Sensors & tools', icon: '📡' } ],
    feed: [ { type: 'post', sub: 'Brand post · 1d', text: 'Steady hands, lead-free solder, glasses on. The <b>Soldering Starter Set</b>.', img: U('1581090465980-58ea88b43443', 800, 440), eng: '♡ 5.6K · 💬 380', product: 3 } ],
    events: [ { zoneEvent: true, tag: 'SALE', title: 'Black Friday: 25% off sensor packs', when: 'Nov 27 · All day', desc: 'A quarter off every sensor pack, today only.', registered: 1620, capacity: 4500 } ],
    about: { founded: 'Sheffield · 2009', story: 'An electronics shop that grew up with the maker movement.', milestones: [['2009', 'The first shop'], ['2018', 'Smart servos'], ['2026', 'Brand Zone on RoboticsXX']], values: ['Next-day parts', 'Clear datasheets', 'Help from engineers'] } }),

  'cobotic': brand({ key: 'cobotic', name: 'Cobotic', color: '#94A3B8', gradient: STEELG, tier: 'Brand Zone',
    tagline: 'Robot arms that work safely beside people', stats: { followers: '96.2K', content: '260', products: '8' },
    ad: { badge: 'Featured', img: U('1531746790731-6c087fecd65a', 760, 760), hl: 'A helping hand for small factories.', sub: 'Collaborative arms that stop when you touch them.', meta: 'From £14,500' },
    products: [
      { name: 'Cobotic Arm 5', price: '£18,900', tag: 'FLAGSHIP', emoji: '🦾', rating: 4.8, reviews: 420, cat: 'arms', special: true, desc: 'A six-axis arm that lifts 5 kg and stops on contact.', features: ['Teach by moving it', 'Force sensing'], review: { who: 'Bill H.', text: 'The safest cobot I’ve fitted.' } },
      { name: 'Cobotic Arm 3', price: '£14,500', tag: 'BESTSELLER', emoji: '🤖', rating: 4.7, reviews: 360, cat: 'arms', desc: 'A smaller arm for benches and labs.', features: ['Plugs into the mains'], review: { who: 'Ravi M.', text: 'Perfect for our lab.' } },
      { name: 'Soft Gripper', price: '£1,200', emoji: '✋', rating: 4.8, reviews: 240, cat: 'tools', desc: 'Gentle fingers for fruit, glass and odd shapes.', features: ['Swap in seconds'], review: { who: 'Freya L.', text: 'Picked up an egg on the first try.' } },
      { name: 'Safety Assessment', price: '£650', tag: 'SPECIAL', emoji: '🛡️', rating: 4.9, reviews: 180, cat: 'tools', special: true, desc: 'Our engineers check your set-up before switch-on.', features: ['Written report'], review: { who: 'Bill H.', text: 'Exactly what should happen.' } }
    ],
    shopCats: [ { key: 'arms', label: 'Arms', icon: '🦾' }, { key: 'tools', label: 'Grippers & safety', icon: '✋' } ],
    feed: [ { type: 'post', sub: 'Brand post · 3h', text: 'White room, quiet hum, careful moves. A <b>Cobotic Arm 5</b> on show in our test lab.', img: U('1655393001768-d946c97d6fd1', 800, 440), eng: '♡ 7.6K · 💬 540', product: 0 } ],
    events: [ { zoneEvent: true, tag: 'EVENT', title: 'Open day: try a cobot', when: 'Dec 4 · 10:00', desc: 'Teach an arm a task by hand, at our Coventry lab.', registered: 640, capacity: 1600 } ],
    about: { founded: 'Coventry · 2017', story: 'Automation engineers who wanted small factories to have robots too.', milestones: [['2017', 'The first arm'], ['2023', 'Soft grippers'], ['2026', 'Brand Zone on RoboticsXX']], values: ['Safety first', 'Easy to teach', 'Built to last'] } }),

  'printbay': brand({ key: 'printbay', name: 'Printbay', color: '#FB7185', gradient: CORAL, tier: 'Brand Zone',
    tagline: '3D printers for makers and classrooms', stats: { followers: '118K', content: '340', products: '20' },
    ad: { badge: 'Christmas', img: U('1786539861533-860fea17321f', 760, 760), hl: 'Print the parts you can’t buy.', sub: 'Reliable 3D printers for home and school.', meta: 'From £249' },
    products: [
      { name: 'Printbay Class', price: '£649', tag: 'FLAGSHIP', emoji: '🖨️', rating: 4.8, reviews: 1460, cat: 'printers', special: true, desc: 'A closed 3D printer with a filter, made for classrooms.', features: ['Door lock', 'Quiet'], review: { who: 'Freya L.', text: 'Safe and reliable all term.' } },
      { name: 'Printbay Home', price: '£249', tag: 'BESTSELLER', emoji: '🏠', rating: 4.7, reviews: 2860, cat: 'printers', desc: 'A compact printer for makers.', features: ['Auto levelling'], review: { who: 'Bea K.', text: 'My robot parts print perfectly.' } },
      { name: 'Plant-Based Filament', price: '£18', emoji: '🧵', rating: 4.7, reviews: 1860, cat: 'materials', desc: 'A 1 kg spool of PLA in twelve colours.', features: ['Cardboard spool'], review: { who: 'Ravi M.', text: 'Clean and consistent.' } },
      { name: 'Robot Parts Library', price: '£15', tag: 'SPECIAL', emoji: '📚', rating: 4.8, reviews: 640, cat: 'materials', special: true, desc: 'Two hundred printable robot parts.', features: ['Lifetime updates'], review: { who: 'Bill H.', text: 'Saves hours of design.' } }
    ],
    shopCats: [ { key: 'printers', label: 'Printers', icon: '🖨️' }, { key: 'materials', label: 'Filament & files', icon: '🧵' } ],
    feed: [ { type: 'post', sub: 'Brand post · 5h', text: 'Late night in the workshop, wires everywhere, brackets fresh off the <b>Printbay Home</b>.', img: U('1777153184385-cff867582a1c', 800, 440), eng: '♡ 3.6K · 💬 240', product: 1 } ],
    events: [ { zoneEvent: true, tag: 'EVENT', title: 'Print a robot hand, live', when: 'Dec 9 · 19:00', desc: 'Print and assemble a simple robot hand together.', registered: 820, capacity: 2400 } ],
    about: { founded: 'Bristol · 2015', story: 'Makers who wanted a 3D printer that just works.', milestones: [['2015', 'The first printer'], ['2022', 'Printbay Class'], ['2026', 'Brand Zone on RoboticsXX']], values: ['Reliable', 'Safe for classrooms', 'Repairable'] } }),

  'axis-automation': { key: 'axis-automation', kind: 'business', gw: 'robotics', name: 'Axis Automation', color: '#22D3EE', gradient: CYAN, img: U('1535378273068-9bb67d5beacd', 900, 500),
    tier: 'Verified', category: 'Robot integrator', tagline: 'Robots for small and medium factories, fitted safely.',
    about: { founded: 'Wolverhampton · 2008', story: 'We design and fit robot cells for packing, welding and loading machines, so people do the skilled work and robots do the heavy, repetitive jobs.' },
    stats: { years: 18, staff: 70, clients: '520 robot cells fitted' },
    caps: [ { name: 'Robot cells', detail: 'Packing, welding and machine loading.' }, { name: 'Safety', detail: 'Guarding, sensors and risk assessment.' }, { name: 'Training', detail: 'Your team runs it with confidence.' } ],
    specs: { moq: 'One cell', lead: '8 to 20 weeks', regions: 'UK', certs: ['Machinery safety trained', 'Fully insured', 'Support for ten years'] },
    supplies: [ { kind: 'brand', key: 'cobotic', what: 'Collaborative arms for small lines' } ],
    cases: [ { title: 'No more heavy lifting', text: 'A bakery’s robot now stacks 20 kg trays; staff moved to decorating.' } ],
    feed: [ { sub: 'Factory · 3d', text: 'Switched on a palletising cell in Telford. Smooth as anything.' } ],
    contact: { person: 'Kiran Bassi, Projects', response: 'Replies within one working day' } },

  'kinetic-limbs': { key: 'kinetic-limbs', kind: 'business', gw: 'robotics', name: 'Kinetic Limbs', color: '#FB7185', gradient: CORAL, img: U('1581090464777-f3220bbe1b8b', 900, 500),
    tier: 'Verified', category: 'Robotic prosthetic hands', tagline: 'Light, strong bionic hands, fitted with your clinic.',
    about: { founded: 'Edinburgh · 2016', story: 'We design robotic prosthetic hands that read the muscles in the arm. Every hand is fitted with the wearer’s own clinical team.' },
    stats: { years: 10, staff: 45, clients: '1,900 hands fitted' },
    caps: [ { name: 'Bionic hands', detail: 'Multiple grips, light and strong.' }, { name: 'Children’s hands', detail: 'Bright colours, sized to grow.' }, { name: 'Support', detail: 'Repairs and upgrades.' } ],
    specs: { moq: 'One hand', lead: 'With your clinic', regions: 'UK and Europe', certs: ['Medical device approved', 'Fitted with clinicians', 'Fully insured'] },
    supplies: [ { kind: 'brand', key: 'servoline', what: 'Tiny motors for finger joints' } ],
    cases: [ { title: 'Holding a cup again', text: 'A new grip mode lets wearers hold a mug of tea without thinking.' } ],
    feed: [ { sub: 'Lab · 5d', text: 'A new children’s hand in teal, by popular demand.' } ],
    contact: { person: 'Morag Fraser, Clinics', response: 'Replies within two working days' } }
});

/* events in the Events tab */
gxEvents('robotics', [
  { gw: 'robotics', zone: 'tinkerbot', type: 'Live', icon: '🔴', live: true, time: 'Live Now', title: 'Tinkerbot Live · a class builds its first robot', desc: 'A Year 7 class meets its robot and builds a line follower.' },
  { gw: 'robotics', zone: 'servoline', type: 'Sale', icon: '📡', time: 'Nov 27', title: 'Servoline Black Friday', desc: '25% off every sensor pack.' },
  { gw: 'robotics', type: 'Event', icon: '🛤️', time: 'Dec 2', title: 'Build Night: line followers', desc: 'Robot Builders build together, online.' },
  { gw: 'robotics', zone: 'cobotic', type: 'Event', icon: '🦾', time: 'Dec 4', title: 'Open day: try a cobot', desc: 'Teach an arm a task by hand in Coventry.' },
  { gw: 'robotics', type: 'Event', icon: '⚽', time: 'Dec 6', title: 'Robot football night, Coventry', desc: 'Coventry Robot Club plays robot football.' },
  { gw: 'robotics', zone: 'printbay', type: 'Event', icon: '✋', time: 'Dec 9', title: 'Print a robot hand, live', desc: 'Print and assemble a simple hand together.' },
  { gw: 'robotics', type: 'Event', icon: '🎄', time: 'Dec 16', title: 'Show and tell: winter builds', desc: 'Robot Builders share their latest robots.' },
  { gw: 'robotics', type: 'Event', icon: '💡', time: 'Dec 20', title: 'Christmas build: light-up robots', desc: 'Coventry Robot Club, families welcome.' }
]);
})();
/* ═════════ /ROBOTICSXX ═════════ */
