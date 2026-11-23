/* ═════════ WATERPARKXX — a Leisure demo gateway (2026-11-23, Sean; build -94) ═════════
   Built with the _tools/README.md recipe. Palette (light): pool aqua, slide orange, sun yellow.
   Home sector: Leisure. Every park, brand, school, pro and product is fictional; UK cities are real.
   Prices and opening times are illustrative. */
(function(){
const U = (id, w, h) => `https://images.unsplash.com/photo-${id}?w=${w}&h=${h}&fit=crop&q=75`;
const AQUA = 'linear-gradient(135deg,#38BDF8,#0369A1)', SUN = 'linear-gradient(135deg,#FBBF24,#EA580C)', LAGOON = 'linear-gradient(135deg,#2DD4BF,#0F766E)', CORAL = 'linear-gradient(135deg,#FB7185,#BE123C)';

GATEWAYS.waterpark = {
  name: 'WaterparkXX', domain: 'waterparkxx.com', emoji: '🌊', sector: 'leisure', live: true,
  tagline: 'The Waterpark Universe',
  theme: {
    bg: '#F2FAFE', text: '#0B2A3A', cardBg: '#FFFFFF', cardBorder: 'rgba(3,105,161,.12)',
    headerBg: 'linear-gradient(180deg,#D8F1FC,#F2FAFE)', accent: '#0284C7', accentAlt: '#EA580C', dark: false
  },
  gradient: 'linear-gradient(135deg,#0369A1,#0EA5E9,#FBBF24)',
  stats: { members: '3.8M', brands: '1,900+', agents: '36' },
  spaces: ['All Feed', 'Slides', 'Family Days', 'Wave Pools', 'Learn to Swim', 'Park Trips'],
  trending: ['#SlideOfTheYear', '#FirstSwim', '#WavePoolSurf'],
  brandZones: [
    { key: 'splashline-parks', name: 'Splashline Parks', color: '#0284C7', tier: 'Founding Partner', tag: 'Indoor waterparks, open all year' },
    { key: 'tidewell-swim', name: 'Tidewell Swim', color: '#0F766E', tier: 'Brand Zone', tag: 'Swimwear for kids and families, UPF 50+' },
    { key: 'floatabout', name: 'Floatabout', color: '#EA580C', tier: 'Brand Zone', tag: 'Rings, rafts and water toys' },
    { key: 'wavehouse-surf', name: 'Wavehouse Surf', color: '#BE123C', tier: 'Brand Zone', tag: 'Inland wave pool surfing' }
  ],
  apps: [
    { name: 'Slide Ranker', color: '#0284C7', desc: 'Rate every slide you ride', key: 'slide-ranker', url: 'apps/slide-ranker.html',
      dev: 'Splashline Parks', rating: '4.8', users: '1.1M', perms: ['profile', 'feed'],
      tagline: 'Which slide was the best? Settle it.',
      about: 'Slide Ranker keeps a list of every slide you’ve ridden, with a thrill score out of five and a note. See your top ten, tick off the slides still to ride, and share your favourite.',
      features: ['Thrill scores out of five', 'Your top ten', 'Slides still to ride', 'Share your favourite'],
      shots: ['apps/slide-ranker/shot-1.jpg', 'apps/slide-ranker/shot-2.jpg', 'apps/slide-ranker/shot-3.jpg'],
      version: '2.6', size: '9 KB',
      updates: [ { v: '2.6', ago: 2, notes: 'Still-to-ride list.' }, { v: '2.2', ago: 60, notes: 'Top ten.' }, { v: '1.8', ago: 200, notes: 'Signed in with GENEXXO.' } ],
      reviews: [ { who: '@slide_hunter_sam', stars: 5, ago: 1, text: '143 slides ranked. No regrets.' }, { who: '@splash_mum_jo', stars: 5, ago: 9, text: 'The kids argue about the scores. Brilliant.' }, { who: '@lazy_river_lou', stars: 4, ago: 24, text: 'Needs a category for lazy rivers.' } ] },
    { name: 'Park Day Planner', color: '#EA580C', desc: 'Plan a waterpark day around the kids', key: 'splash-planner', url: 'apps/splash-planner.html',
      dev: 'Floatabout', rating: '4.7', users: '640K', perms: ['profile', 'feed'],
      tagline: 'Slides, snacks and sun cream, in the right order.',
      about: 'Park Day Planner builds a day from the slides your family can ride, with breaks for food and sun cream. It counts down to the next wave session and makes a packing list.',
      features: ['Rides for every height', 'Breaks for food and sun cream', 'Wave session countdown', 'Packing list'],
      shots: ['apps/splash-planner/shot-1.jpg', 'apps/splash-planner/shot-2.jpg', 'apps/splash-planner/shot-3.jpg'],
      version: '1.9', size: '9 KB',
      updates: [ { v: '1.9', ago: 3, notes: 'Packing list.' }, { v: '1.5', ago: 75, notes: 'Wave countdown.' }, { v: '1.0', ago: 220, notes: 'Signed in with GENEXXO.' } ],
      reviews: [ { who: '@splash_mum_jo', stars: 5, ago: 2, text: 'No meltdowns. Well, fewer.' }, { who: '@dad_on_the_flume', stars: 5, ago: 14, text: 'Never forget the goggles again.' }, { who: '@slide_hunter_sam', stars: 4, ago: 31, text: 'Useful even without kids.' } ] },
    { name: 'Swim Badges', color: '#0F766E', desc: 'Track your child’s learn-to-swim stages', key: 'swim-badges', url: 'apps/swim-badges.html',
      dev: 'Tidewell Swim', rating: '4.9', users: '920K', perms: ['profile', 'feed'],
      tagline: 'From first splash to first length.',
      about: 'Swim Badges follows your child through seven learn-to-swim stages, from getting their face wet to swimming 25 metres. Tick off each skill as they learn it and celebrate every badge.',
      features: ['Seven stages, skill by skill', 'Tick off what they can do', 'Badges to celebrate', 'Notes for the swim teacher'],
      shots: ['apps/swim-badges/shot-1.jpg', 'apps/swim-badges/shot-2.jpg', 'apps/swim-badges/shot-3.jpg'],
      version: '3.1', size: '9 KB',
      updates: [ { v: '3.1', ago: 4, notes: 'Notes for the teacher.' }, { v: '2.7', ago: 90, notes: 'Stage 7.' }, { v: '2.0', ago: 240, notes: 'Signed in with GENEXXO.' } ],
      reviews: [ { who: '@splash_mum_jo', stars: 5, ago: 3, text: 'My daughter loves ticking things off.' }, { who: '@dad_on_the_flume', stars: 5, ago: 16, text: 'Finally know what stage he’s on.' }, { who: '@swim_coach_sophie', stars: 5, ago: 40, text: 'I recommend it to every parent.' } ] }
  ],
  pros: [
    { key: 'sophie-turner-swim', name: 'Sophie Turner Swim School', color: '#0F766E', tag: 'Baby, toddler and children’s swimming lessons · Manchester', role: 'Swimming teacher',
      img: U('1548382131-e0ebb1f0cdea', 800, 800), base: 'Manchester, UK', langs: 'English', years: 12, rating: '4.9', reviewsN: 684, cur: '£',
      creds: ['Qualified swimming teacher', 'Baby and pre-school specialist', 'Teaches nervous swimmers of any age'],
      about: 'Sophie teaches children to love the water first and to swim second. Small classes in a warm pool, with lots of songs for the babies and lots of praise for everyone.',
      services: [ { id: 'baby', name: 'Baby and me (term)', dur: '10 × 30 minutes', price: 120, desc: 'From 3 months, with a parent in the water.' },
                  { id: 'kids', name: 'Children’s group lessons (term)', dur: '10 × 30 minutes', price: 105, desc: 'Ages 4 to 11, groups of four.' },
                  { id: 'one', name: 'One-to-one lesson', dur: '30 minutes', price: 32, desc: 'For nervous swimmers of any age.' } ],
      avail: { days: [1, 2, 3, 4, 6], times: ['09:30', '16:00', '17:00'] },
      reviews: [ { who: '@splash_mum_jo', stars: 5, ago: 2, text: 'My son swam his first width this week!' }, { who: '@dad_on_the_flume', stars: 5, ago: 13, text: 'So patient with my daughter.' }, { who: '@lazy_river_lou', stars: 5, ago: 41, text: 'I learned at 34. Thank you, Sophie.' } ],
      posts: [ { ago: 1, text: 'Bath time is swim practice: let them pour water over their own head. It takes the fear out of it.' } ],
      tier: 'Pro Zone', verified: true },
    { key: 'dan-okafor-lifeguard', name: 'Dan Okafor Lifeguard Training', color: '#0284C7', tag: 'Pool lifeguard courses and water safety talks', role: 'Lifeguard trainer',
      img: U('1503505946976-e489ce29e0fd', 800, 800), base: 'Leeds, UK', langs: 'English', years: 15, rating: '4.9', reviewsN: 312, cur: '£',
      creds: ['Qualified lifeguard trainer and assessor', 'Former head lifeguard at a waterpark', 'First aid instructor'],
      about: 'Dan trains pool lifeguards and runs water safety sessions for schools and families. His courses are hands-on: rescues, first aid and how to spot a swimmer in trouble.',
      services: [ { id: 'course', name: 'Pool lifeguard course', dur: '5 days', price: 295, desc: 'Training and assessment, ages 16 and up.' },
                  { id: 'family', name: 'Family water safety session', dur: '90 minutes', price: 45, desc: 'For a family of up to five.' },
                  { id: 'school', name: 'School water safety talk', dur: '60 minutes', price: 120, desc: 'For a class or assembly.' } ],
      avail: { days: [1, 3, 5, 6], times: ['09:00', '13:00'] },
      reviews: [ { who: '@lazy_river_lou', stars: 5, ago: 4, text: 'Passed! Started at the park this summer.' }, { who: '@splash_mum_jo', stars: 5, ago: 20, text: 'The kids still talk about his session.' }, { who: '@slide_hunter_sam', stars: 5, ago: 44, text: 'Tough but fair.' } ],
      posts: [ { ago: 2, text: 'Drowning rarely looks like waving. Look for a swimmer upright in the water, head back, not moving forward.' } ],
      tier: 'Pro Zone', verified: true },
    { key: 'kai-moreno-surf', name: 'Kai Moreno Surf Coaching', color: '#BE123C', tag: 'Wave pool surf coaching, first wave to first turn', role: 'Surf coach',
      img: U('1781060284700-f4fc51a76b50', 800, 800), base: 'Bristol, UK', langs: 'English, Spanish', years: 9, rating: '4.8', reviewsN: 248, cur: '£',
      creds: ['Qualified surf coach', 'Wave pool specialist', 'Coaches adaptive surfers'],
      about: 'A wave pool gives you the same wave again and again, which is the fastest way to learn. Kai films every ride and talks you through it before the next one.',
      services: [ { id: 'first', name: 'First waves', dur: '60 minutes', price: 75, desc: 'Beginners, all kit included.' },
                  { id: 'video', name: 'Video coaching session', dur: '60 minutes', price: 95, desc: 'Every ride filmed and reviewed.' },
                  { id: 'kids', name: 'Groms club (ages 8 to 14)', dur: '90 minutes', price: 60, desc: 'Saturday mornings.' } ],
      avail: { days: [2, 4, 6, 0], times: ['08:00', '11:00', '15:00'] },
      reviews: [ { who: '@slide_hunter_sam', stars: 5, ago: 3, text: 'Stood up on my third wave.' }, { who: '@dad_on_the_flume', stars: 5, ago: 17, text: 'My son is hooked.' }, { who: '@lazy_river_lou', stars: 4, ago: 39, text: 'Great coach, cold water!' } ],
      posts: [ { ago: 3, text: 'Look where you want to go, not at your feet. The board follows your eyes.' } ],
      tier: 'Pro Zone', verified: true }
  ],
  communities: [
    { key: 'slide-hunters', name: 'Slide Hunters', domain: 'hunters.waterparkxx.com', color: '#0284C7', img: U('1642717841683-c0323214617c', 900, 500),
      scope: 'Global', where: 'Waterparks everywhere', members: 312000, online: 3860, tagline: 'Every slide. Ranked.',
      about: 'People who travel for slides: reviews, rankings, park trips, POV videos and endless arguments about which drop is the scariest.',
      rules: ['Rate the slide, not the people', 'Share POV videos, not strangers’ faces', 'Follow park safety rules, always'],
      mods: ['@slide_hunter_sam', '@lazy_river_lou'],
      threads: [ { t: 'Slide of the year 2026: nominations open', by: '@slide_hunter_sam', tag: 'VOTE', replies: 2140, ago: 0, votes: 4860 }, { t: 'Best indoor parks for a winter trip', by: '@lazy_river_lou', tag: 'TRIPS', replies: 860, ago: 1, votes: 1620 }, { t: 'Trapdoor slides: genius or evil?', by: '@dad_on_the_flume', tag: 'DEBATE', replies: 1460, ago: 2, votes: 2380 }, { t: 'Your POV of the scariest drop you’ve done', by: '@slide_hunter_sam', tag: 'VIDEO', replies: 640, ago: 3, votes: 1840 } ],
      events: [ { title: 'Slide of the year: live vote', day: 4, time: '19:00', where: 'Online' }, { title: 'Winter park meet-up', day: 19, time: '10:00', where: 'Splashline, Birmingham' } ] },
    { key: 'manchester-splash-families', name: 'Manchester Splash Families', domain: 'manchester.waterparkxx.com', color: '#0F766E', img: U('1779817279873-79674f788c41', 900, 500),
      scope: 'Local', where: 'Manchester', members: 4600, online: 96, tagline: 'Pools, parks and splash pads, with kids.',
      about: 'Parents in Greater Manchester sharing family-friendly pools, quiet times, swimming lessons and summer splash pads.',
      rules: ['Kind and practical', 'No photos of other people’s children', 'Tag quiet times and offers'],
      mods: ['@splash_mum_jo', '@swim_coach_sophie'],
      threads: [ { t: 'Quietest time at the indoor park this half term?', by: '@splash_mum_jo', tag: 'Q&A', replies: 48, ago: 0, votes: 92 }, { t: 'Swimming lessons with a waiting list under a month', by: '@dad_on_the_flume', tag: 'LESSONS', replies: 36, ago: 1, votes: 64 }, { t: 'Christmas swim with Santa: who’s going?', by: '@swim_coach_sophie', tag: 'EVENT', replies: 52, ago: 2, votes: 110 } ],
      events: [ { title: 'Family swim morning', day: 6, time: '09:30', where: 'Manchester' }, { title: 'Swim with Santa', day: 20, time: '10:00', where: 'Manchester' } ] }
  ],
  feed: [
    { av: 'WX', avBg: AQUA, author: 'WaterparkXX Editorial', sub: 'Featured · Just now', badge: '★ FEATURED',
      text: 'Slides, wave pools, lazy rivers and first swims. The parks, the gear, the teachers and the people who travel the world for a good drop. Waterparks, all in one place.',
      img: U('1781914745792-bb52a85fc3e2', 800, 600), eng: '♡ 54.2K · 💬 4.6K · ↗ 6.8K' },
    { av: 'SS', avBg: SUN, author: '@slide_hunter_sam', sub: 'Slides · Just now', badge: 'COMMUNITY',
      text: 'Slide number 143. A near-vertical start, then nothing but orange and the sound of my own screaming. Five out of five. Going again 🌊',
      img: U('1646207683942-971653b6f6c2', 800, 600), eng: '♡ 18.6K · 💬 2.4K · ↗ 1.6K' },
    { av: 'SP', avBg: AQUA, author: 'Splashline Parks', sub: 'Founding Partner · Brand Zone', badge: 'BRAND ZONE',
      text: '<b>The Plunge</b> opens this week at Splashline Birmingham: a 22-metre drop slide, a four-person raft ride and a brand-new tropical splash zone. Open all year, warm all year.',
      img: U('1563178024-0e18e1aa0415', 800, 600), eng: '♡ 22.4K · 💬 1.8K · ↗ 3.2K' },
    { av: 'WH', avBg: CORAL, author: 'Wavehouse Surf', sub: 'Brand Zone · 1h ago', badge: 'BRAND ZONE',
      text: 'Wave number 1,000 of the day. Same wave, every ninety seconds, from first-timers to rippers. <b>First Waves</b> sessions start at £45.',
      img: U('1781060364676-f5b31a3b1eb0', 800, 600), eng: '♡ 9.6K · 💬 720 · ↗ 880' },
    { av: 'JO', avBg: LAGOON, author: '@splash_mum_jo', sub: 'Family Days · 2h ago', badge: 'COMMUNITY',
      text: 'First swim, first ring, first giggle when the water tickled her toes. Ten months old and already in charge of the pool 💙',
      img: U('1776571661798-c33f6369df85', 800, 600), eng: '♡ 12.4K · 💬 1.1K · ↗ 380' },
    { av: 'TW', avBg: LAGOON, author: 'Tidewell Swim', sub: 'Brand Zone · 4h ago', badge: 'BRAND ZONE',
      text: 'Bright enough to spot across a busy pool, and UPF 50+ for summer. The <b>Spotted Swimsuit</b> comes in sizes 6 months to 12 years.',
      img: U('1626313680130-d18000ed7303', 800, 600), eng: '♡ 5.8K · 💬 340 · ↗ 420' },
    { av: 'ST', avBg: LAGOON, author: 'Sophie Turner Swim School', sub: 'Learn to Swim · 6h ago', badge: 'PRO ZONE',
      text: 'Babies can start lessons from three months. The first goal isn’t swimming: it’s being happy in the water with you.',
      img: U('1761523763930-81932b99b459', 800, 600), eng: '♡ 4.2K · 💬 260 · ↗ 510' }
  ],
  prompts: ['Find an indoor waterpark for a winter day out', 'What height do you need for the big slides?', 'When can my baby start swimming lessons?', 'Plan a waterpark day with a 5-year-old'],
  businesses: ['aquaform-slides', 'clearblue-water']
};

/* the four Brand Zones and two Business Zones */
const brand = (o) => Object.assign({ kind: 'brand', gw: 'waterpark', verified: true }, o);
Object.assign(ZONES, {
  'splashline-parks': brand({ key: 'splashline-parks', name: 'Splashline Parks', color: '#0284C7', gradient: AQUA, tier: 'Founding Partner',
    tagline: 'Indoor waterparks, open all year', stats: { followers: '286K', content: '1.2K', products: '14' },
    ad: { badge: 'Featured', img: U('1781735562676-46df9b3bbf59', 760, 760), hl: 'Summer, all year round.', sub: 'Thirty slides, a wave pool and 30°C inside.', meta: 'From £32' },
    products: [
      { name: 'Day Pass', price: '£32', tag: 'FLAGSHIP', emoji: '🎟️', rating: 4.8, reviews: 8420, cat: 'tickets', special: true, desc: 'All slides, the wave pool and the lazy river, all day. Under-3s go free.', features: ['All day', 'Lockers included', 'Book a date'], review: { who: 'Jo M.', text: 'Worth every penny on a rainy Saturday.' } },
      { name: 'Family Ticket', price: '£110', tag: 'BESTSELLER', emoji: '👨‍👩‍👧‍👦', rating: 4.8, reviews: 5240, cat: 'tickets', desc: 'Two adults and two children, all day.', features: ['All day', 'Free cabana upgrade on weekdays'], review: { who: 'Mark D.', text: 'Cheapest way in for four.' } },
      { name: 'Annual Splash Pass', price: '£149', emoji: '💳', rating: 4.9, reviews: 2140, cat: 'passes', desc: 'Unlimited visits for a year at every Splashline park.', features: ['All four parks', '10% off food'], review: { who: 'Sam R.', text: 'Paid for itself by March.' } },
      { name: 'Birthday Party', price: '£180', tag: 'SPECIAL', emoji: '🎂', rating: 4.8, reviews: 960, cat: 'parties', special: true, desc: 'Ten children, two hours on the slides, food and a party room.', features: ['Ages 5 and up', 'Party host included'], review: { who: 'Lou P.', text: 'Best party we’ve ever done. Zero clearing up.' } }
    ],
    shopCats: [ { key: 'tickets', label: 'Tickets', icon: '🎟️' }, { key: 'passes', label: 'Passes', icon: '💳' }, { key: 'parties', label: 'Parties', icon: '🎂' } ],
    feed: [
      { type: 'post', sub: 'Brand post · 2h', text: 'Tube, tunnel, splash. A test run on <b>The Plunge</b> this morning, before the doors open on Saturday.', img: U('1790699593264-9394fbe3832f', 800, 440), eng: '♡ 22.4K · 💬 1.8K · ↗ 3.2K', product: 0 },
      { type: 'post', sub: 'At the park · Yesterday', text: 'Life jackets on, wave pool next. Weekday mornings are the quietest time to visit.', img: U('1790699590999-883bd2a9f74e', 800, 440), eng: '♡ 6.2K · 💬 410', product: 1 },
      { type: 'community', who: 'Mark D.', whoBg: SUN, sub: 'Community · 1d', text: 'My son is 1.15 m. Which slides can he go on?', eng: '♡ 380 · 💬 96', reply: 'Hi Mark! At 1.15 m he can ride the family raft, the lazy river, the wave pool and three of our four tube slides. The Plunge and the trapdoor need 1.20 m, so next year! Every slide has a height post at the top of the stairs, and our lifeguards will measure him if you’re unsure. 🌊' }
    ],
    events: [ { zoneEvent: true, tag: 'LIVE', title: 'Splashline Live · First ride on The Plunge', when: 'Live now', desc: 'The first public riders on Birmingham’s new drop slide, live, with POV cameras.', registered: 7840, capacity: 20000 } ],
    about: { founded: 'Birmingham · 2011', story: 'One indoor park in an old exhibition hall, built so British families could have a summer day in February. Now four parks. We joined WaterparkXX as Founding Partner because the people who love slides are here.', milestones: [['2011', 'Birmingham opens'], ['2019', 'The fourth park'], ['2026', 'Founding Partner on WaterparkXX']], values: ['Open all year', 'Lifeguards on every slide', 'Under-3s go free'] } }),

  'tidewell-swim': brand({ key: 'tidewell-swim', name: 'Tidewell Swim', color: '#0F766E', gradient: LAGOON, tier: 'Brand Zone',
    tagline: 'Swimwear for kids and families, UPF 50+', stats: { followers: '118K', content: '540', products: '86' },
    ad: { badge: 'New', img: U('1706843540963-ae52d784de62', 760, 760), hl: 'Easy to spot. Hard to outgrow.', sub: 'Bright, UPF 50+ swimwear with room to grow.', meta: 'From £14' },
    products: [
      { name: 'Spotted Swimsuit', price: '£22', tag: 'FLAGSHIP', emoji: '👙', rating: 4.9, reviews: 3640, cat: 'kids', special: true, desc: 'Neon-bright and UPF 50+, so you can spot them across the pool. Made from recycled nylon.', features: ['6 months to 12 years', 'UPF 50+', 'Chlorine resistant'], review: { who: 'Jo M.', text: 'I can see her from the café!' } },
      { name: 'Sun Suit, Long Sleeve', price: '£26', tag: 'BESTSELLER', emoji: '☀️', rating: 4.8, reviews: 2860, cat: 'kids', desc: 'Covers arms and legs for summer days outside.', features: ['Front zip', 'UPF 50+'], review: { who: 'Mark D.', text: 'So easy to get on a wet toddler.' } },
      { name: 'Swim Nappy, Reusable', price: '£14', emoji: '👶', rating: 4.8, reviews: 1960, cat: 'baby', desc: 'Snug, reusable and accepted at every pool we know of.', features: ['Pack of two'], review: { who: 'Lou P.', text: 'No leaks, no landfill.' } },
      { name: 'Family Rash Vest Set', price: '£58', tag: 'SPECIAL', emoji: '👨‍👩‍👧', rating: 4.8, reviews: 420, cat: 'family', special: true, desc: 'Matching rash vests for two adults and two children.', features: ['Choose four sizes'], review: { who: 'Sam R.', text: 'Matching. Embarrassing. Love it.' } }
    ],
    shopCats: [ { key: 'kids', label: 'Kids', icon: '👙' }, { key: 'baby', label: 'Baby', icon: '👶' }, { key: 'family', label: 'Family', icon: '👨‍👩‍👧' } ],
    feed: [ { type: 'post', sub: 'Brand post · 4h', text: 'Down the slide in a <b>Spotted Swimsuit</b>: bright enough to see from the top of the stairs.', img: U('1706843540922-5682f3ad5b98', 800, 440), eng: '♡ 5.8K · 💬 340', product: 0 } ],
    events: [ { zoneEvent: true, tag: 'SALE', title: 'Black Friday: 30% off swimwear', when: 'Nov 27 · All day', desc: 'Thirty per cent off everything, one day only.', registered: 2860, capacity: 8000 } ],
    about: { founded: 'Cornwall · 2016', story: 'A swimming teacher who couldn’t spot children in dark swimsuits in a busy pool, and started making bright ones.', milestones: [['2016', 'The first swimsuit'], ['2022', 'Recycled fabrics'], ['2026', 'Brand Zone on WaterparkXX']], values: ['Bright for safety', 'UPF 50+', 'Recycled nylon'] } }),

  'floatabout': brand({ key: 'floatabout', name: 'Floatabout', color: '#EA580C', gradient: SUN, tier: 'Brand Zone',
    tagline: 'Rings, rafts and water toys', stats: { followers: '92.4K', content: '380', products: '120' },
    ad: { badge: 'Gift', img: U('1785769395773-90cc5378a253', 760, 760), hl: 'Make a splash.', sub: 'Rings, rafts and water toys for pools and parks.', meta: 'From £8' },
    products: [
      { name: 'Giant Doughnut Ring', price: '£24', tag: 'FLAGSHIP', emoji: '🍩', rating: 4.8, reviews: 2860, cat: 'rings', special: true, desc: 'A 1.2-metre doughnut with sprinkles, for lounging, not swimming.', features: ['Ages 8 and up', 'Repair kit included'], review: { who: 'Lou P.', text: 'Holiday photo gold.' } },
      { name: 'Two-Person Raft', price: '£38', tag: 'BESTSELLER', emoji: '🛶', rating: 4.7, reviews: 1460, cat: 'rafts', desc: 'A sturdy raft with handles for two.', features: ['Holds 160 kg'], review: { who: 'Mark D.', text: 'Survived three teenagers.' } },
      { name: 'Water Blaster Pack', price: '£16', emoji: '💦', rating: 4.7, reviews: 2140, cat: 'toys', desc: 'Four foam water blasters that soak from five metres.', features: ['Pack of four'], review: { who: 'Jo M.', text: 'Garden war declared.' } },
      { name: 'Baby Float Seat', price: '£19', tag: 'SPECIAL', emoji: '🐳', rating: 4.8, reviews: 960, cat: 'baby', special: true, desc: 'A whale seat with a canopy, for babies 6 to 24 months, always with an adult in arm’s reach.', features: ['Sun canopy'], review: { who: 'Sam R.', text: 'She loves the whale.' } }
    ],
    shopCats: [ { key: 'rings', label: 'Rings', icon: '🍩' }, { key: 'rafts', label: 'Rafts', icon: '🛶' }, { key: 'toys', label: 'Toys', icon: '💦' }, { key: 'baby', label: 'Baby', icon: '🐳' } ],
    feed: [ { type: 'post', sub: 'Brand post · 1d', text: 'Battle stations. The <b>Water Blaster Pack</b> soaks from five metres.', img: U('1785769396343-2afbc32c12e2', 800, 440), eng: '♡ 3.4K · 💬 220', product: 2 } ],
    events: [ { zoneEvent: true, tag: 'EVENT', title: 'Christmas gift guide live', when: 'Dec 3 · 19:00', desc: 'Water toys for every age, live, with questions answered.', registered: 960, capacity: 3000 } ],
    about: { founded: 'Brighton · 2014', story: 'Two friends who made a giant doughnut for a pool party, and sold the second one by lunchtime.', milestones: [['2014', 'The first doughnut'], ['2021', 'Repair kits in every box'], ['2026', 'Brand Zone on WaterparkXX']], values: ['Made to last a summer and more', 'Repair kits, always', 'Safety notes on every product'] } }),

  'wavehouse-surf': brand({ key: 'wavehouse-surf', name: 'Wavehouse Surf', color: '#BE123C', gradient: CORAL, tier: 'Brand Zone',
    tagline: 'Inland wave pool surfing', stats: { followers: '134K', content: '720', products: '10' },
    ad: { badge: 'Featured', img: U('1781060364641-46f8008a101b', 760, 760), hl: 'The same perfect wave. Again.', sub: 'Inland surfing, every ninety seconds.', meta: 'From £45' },
    products: [
      { name: 'First Waves Session', price: '£45', tag: 'FLAGSHIP', emoji: '🏄', rating: 4.9, reviews: 4280, cat: 'sessions', special: true, desc: 'An hour on the beginner waves with a coach. Wetsuit and board included.', features: ['Ages 8 and up', 'All kit included'], review: { who: 'Sam R.', text: 'Stood up first time.' } },
      { name: 'Intermediate Hour', price: '£65', tag: 'BESTSELLER', emoji: '🌊', rating: 4.8, reviews: 2140, cat: 'sessions', desc: 'Bigger waves for surfers who can turn.', features: ['Around 12 waves an hour'], review: { who: 'Kai M.', text: 'Best training I know.' } },
      { name: 'Wetsuit, 4/3 mm', price: '£140', emoji: '🩱', rating: 4.7, reviews: 640, cat: 'kit', desc: 'A warm winter wetsuit for the pool or the sea.', features: ['Chest zip'], review: { who: 'Lou P.', text: 'Toasty in December.' } },
      { name: 'Ten-Session Pass', price: '£390', tag: 'SPECIAL', emoji: '🎫', rating: 4.9, reviews: 420, cat: 'passes', special: true, desc: 'Ten sessions at any level, valid for a year.', features: ['Share with family'], review: { who: 'Mark D.', text: 'The whole family uses it.' } }
    ],
    shopCats: [ { key: 'sessions', label: 'Sessions', icon: '🏄' }, { key: 'kit', label: 'Kit', icon: '🩱' }, { key: 'passes', label: 'Passes', icon: '🎫' } ],
    feed: [ { type: 'post', sub: 'Brand post · 1h', text: 'Fourth wave of an <b>Intermediate Hour</b>: down the line and into the spray.', img: U('1781060284681-6670aafd3c47', 800, 440), eng: '♡ 9.6K · 💬 720', product: 1 } ],
    events: [ { zoneEvent: true, tag: 'EVENT', title: 'Night surf under the lights', when: 'Dec 12 · 18:00', desc: 'The pool lit up after dark, with music and hot chocolate.', registered: 860, capacity: 1200 } ],
    about: { founded: 'Bristol · 2019', story: 'A lagoon outside Bristol with a wave machine, built by surfers who were tired of waiting for swell.', milestones: [['2019', 'The first wave'], ['2024', 'Adaptive surf sessions'], ['2026', 'Brand Zone on WaterparkXX']], values: ['Waves for every level', 'Adaptive sessions weekly', 'Powered by renewable energy'] } }),

  'aquaform-slides': { key: 'aquaform-slides', kind: 'business', gw: 'waterpark', name: 'Aquaform Slide Engineering', color: '#0284C7', gradient: AQUA, img: U('1532531565-a7682232341d', 900, 500),
    tier: 'Verified', category: 'Slide design and manufacture', tagline: 'Waterslides designed, built and inspected.',
    about: { founded: 'Sheffield · 1998', story: 'Engineers who design, build and inspect waterslides for parks, leisure centres and hotels.' },
    stats: { years: 28, staff: 140, clients: '400 slides installed' },
    caps: [ { name: 'Slide design', detail: 'Ride paths modelled for speed and safety.' }, { name: 'Manufacture', detail: 'Fibreglass sections made in Sheffield.' }, { name: 'Inspection', detail: 'Annual safety inspections and repairs.' } ],
    specs: { moq: 'One slide', lead: '6 to 14 months', regions: 'UK & Europe', certs: ['Built to the European waterslide standard', 'Fully insured', 'Independent inspection'] },
    supplies: [ { kind: 'brand', key: 'splashline-parks', what: 'The Plunge drop slide' } ],
    cases: [ { title: 'A drop slide indoors', text: 'A 22-metre drop slide fitted inside an old exhibition hall.' } ],
    feed: [ { sub: 'On site · 3d', text: 'The last section of The Plunge lifted into place.' } ],
    contact: { person: 'Helen Price, Projects', response: 'Replies within two working days' } },

  'clearblue-water': { key: 'clearblue-water', kind: 'business', gw: 'waterpark', name: 'ClearBlue Water Care', color: '#0F766E', gradient: LAGOON, img: U('1790699593079-91eebca4299c', 900, 500),
    tier: 'Verified', category: 'Pool water treatment', tagline: 'Clean, clear and safe pool water.',
    about: { founded: 'Leeds · 2005', story: 'We design and look after the water treatment for pools, waterparks and spas: filters, testing and energy-saving pumps.' },
    stats: { years: 21, staff: 86, clients: '620 pools' },
    caps: [ { name: 'Water treatment', detail: 'Filtration and dosing systems.' }, { name: 'Testing', detail: 'Daily testing and monthly lab checks.' }, { name: 'Energy savings', detail: 'Heat recovery and efficient pumps.' } ],
    specs: { moq: 'One pool', lead: '2 to 20 weeks', regions: 'UK', certs: ['Pool water treatment qualified', 'Fully insured', 'Energy efficiency accredited'] },
    supplies: [ { kind: 'brand', key: 'wavehouse-surf', what: 'Water treatment for the wave lagoon' } ],
    cases: [ { title: 'A cheaper winter', text: 'Heat recovery cut a leisure pool’s heating bill by a third.' } ],
    feed: [ { sub: 'Testing · 5d', text: 'Ten pools tested before breakfast.' } ],
    contact: { person: 'Raj Patel, Sales', response: 'Replies within one working day' } }
});

/* events in the Events tab */
gxEvents('waterpark', [
  { gw: 'waterpark', zone: 'splashline-parks', type: 'Live', icon: '🔴', live: true, time: 'Live Now', title: 'Splashline Live · First ride on The Plunge', desc: 'The first public riders on Birmingham’s new drop slide, live, with POV cameras.' },
  { gw: 'waterpark', type: 'Event', icon: '🗳️', time: 'Nov 27', title: 'Slide of the year: live vote', desc: 'Slide Hunters pick 2026’s best slide, live online.' },
  { gw: 'waterpark', zone: 'tidewell-swim', type: 'Sale', icon: '👙', time: 'Nov 27', title: 'Tidewell Black Friday', desc: '30% off all swimwear, one day only.' },
  { gw: 'waterpark', type: 'Event', icon: '🏊', time: 'Nov 29', title: 'Family swim morning, Manchester', desc: 'Manchester Splash Families meet for a relaxed Sunday swim.' },
  { gw: 'waterpark', zone: 'floatabout', type: 'Event', icon: '🎁', time: 'Dec 3', title: 'Floatabout gift guide live', desc: 'Water toys for every age, with questions answered.' },
  { gw: 'waterpark', zone: 'wavehouse-surf', type: 'Event', icon: '🌙', time: 'Dec 12', title: 'Night surf under the lights', desc: 'Wavehouse Surf after dark, with music and hot chocolate.' },
  { gw: 'waterpark', type: 'Event', icon: '🎢', time: 'Dec 12', title: 'Winter park meet-up, Birmingham', desc: 'Slide Hunters ride The Plunge together.' },
  { gw: 'waterpark', type: 'Event', icon: '🎅', time: 'Dec 13', title: 'Swim with Santa, Manchester', desc: 'Manchester Splash Families’ Christmas swim.' }
]);
})();
/* ═════════ /WATERPARKXX ═════════ */
