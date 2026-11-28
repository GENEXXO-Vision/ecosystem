/* ═════════ YACHTXX — a Boating demo gateway (2026-11-23, Sean; build -94) ═════════
   Built with the _tools/README.md recipe. Palette (light): deep teal, sea glass, sand and brass.
   (SailXX already wears navy and gold, so YachtXX keeps to teal and sand.)
   Home sector: Boating. Every charter firm, yard, broker, pro and product is fictional; harbours, islands and coasts are real.
   Prices, distances and passage times are illustrative. */
(function(){
const U = (id, w, h) => `https://images.unsplash.com/photo-${id}?w=${w}&h=${h}&fit=crop&q=75`;
const TEAL = 'linear-gradient(135deg,#14B8A6,#0F4C5C)', SAND = 'linear-gradient(135deg,#E9D5A8,#B08850)', DEEP = 'linear-gradient(135deg,#1E5F74,#0B2A36)', GLASS = 'linear-gradient(135deg,#A7E3DA,#3E8E86)';

GATEWAYS.yacht = {
  name: 'YachtXX', domain: 'yachtxx.com', emoji: '🛥️', sector: 'boating', live: true,
  tagline: 'The Yacht Universe',
  theme: {
    bg: '#F4F8F7', text: '#0B2A36', cardBg: '#FFFFFF', cardBorder: 'rgba(15,76,92,.12)',
    headerBg: 'linear-gradient(180deg,#DCEDEA,#F4F8F7)', accent: '#0F6E7A', accentAlt: '#B08850', dark: false
  },
  gradient: 'linear-gradient(135deg,#0B2A36,#0F6E7A,#E9D5A8)',
  stats: { members: '1.9M', brands: '1,400+', agents: '32' },
  spaces: ['All Feed', 'Charter', 'Motor Yachts', 'Catamarans', 'Ownership', 'Crew & Skippers'],
  trending: ['#CharterSeason', '#AnchorView', '#CatLife'],
  brandZones: [
    { key: 'aurelia-charter', name: 'Aurelia Yacht Charter', color: '#0F6E7A', tier: 'Founding Partner', tag: 'Crewed and bareboat charters in the Med' },
    { key: 'corvina-yachts', name: 'Corvina Yachts', color: '#0B2A36', tier: 'Brand Zone', tag: 'Motor yachts from 48 to 82 feet' },
    { key: 'fairwind-share', name: 'Fairwind Share', color: '#B08850', tier: 'Brand Zone', tag: 'Own a share of a yacht, use it for weeks' },
    { key: 'weatherdeck', name: 'Weatherdeck', color: '#3E8E86', tier: 'Brand Zone', tag: 'Deck shoes, crew wear and yacht kit' }
  ],
  apps: [
    { name: 'Knot Guide', color: '#0F6E7A', desc: 'The knots every crew member needs', key: 'knot-guide', url: 'apps/knot-guide.html',
      dev: 'Aurelia Yacht Charter', rating: '4.9', users: '1.3M', perms: ['profile', 'feed'],
      tagline: 'Bowline first. The rest will follow.',
      about: 'Knot Guide has the eight knots you’ll use on a yacht, step by step, with what each one is for. Practise them, mark the ones you’ve mastered and test yourself before your charter.',
      features: ['Eight essential knots', 'Step-by-step', 'What each knot is for', 'Quiz yourself'],
      shots: ['apps/knot-guide/shot-1.jpg', 'apps/knot-guide/shot-2.jpg', 'apps/knot-guide/shot-3.jpg'],
      version: '3.4', size: '10 KB',
      updates: [ { v: '3.4', ago: 2, notes: 'Quiz mode.' }, { v: '3.0', ago: 70, notes: 'Sheet bend.' }, { v: '2.4', ago: 200, notes: 'Signed in with GENEXXO.' } ],
      reviews: [ { who: '@bluewater_bea', stars: 5, ago: 1, text: 'Finally tied a bowline without looking.' }, { who: '@marina_mike', stars: 5, ago: 10, text: 'The whole crew used it before our trip.' }, { who: '@first_charter_fran', stars: 4, ago: 27, text: 'More knots please!' } ] },
    { name: 'Passage Planner', color: '#B08850', desc: 'How long between anchorages?', key: 'passage-planner', url: 'apps/passage-planner.html',
      dev: 'Corvina Yachts', rating: '4.8', users: '560K', perms: ['profile', 'feed'],
      tagline: 'Miles, speed, arrival time.',
      about: 'Passage Planner works out how long each hop takes at your speed and when you’ll drop anchor. Build a week of island hops, see the time at sea each day and share your plan with the crew. A planning aid, not a chart.',
      features: ['Hop by hop', 'Arrival times', 'Time at sea each day', 'Planning aid, not a chart'],
      shots: ['apps/passage-planner/shot-1.jpg', 'apps/passage-planner/shot-2.jpg', 'apps/passage-planner/shot-3.jpg'],
      version: '2.2', size: '9 KB',
      updates: [ { v: '2.2', ago: 3, notes: 'Time at sea each day.' }, { v: '1.8', ago: 80, notes: 'Saved plans.' }, { v: '1.2', ago: 230, notes: 'Signed in with GENEXXO.' } ],
      reviews: [ { who: '@marina_mike', stars: 5, ago: 2, text: 'Planned our whole week in ten minutes.' }, { who: '@bluewater_bea', stars: 5, ago: 13, text: 'Simple and useful.' }, { who: '@skipper_tom', stars: 4, ago: 35, text: 'Good for planning. Still check the weather!' } ] },
    { name: 'Charter Kit', color: '#3E8E86', desc: 'Packing and crew list for your charter', key: 'charter-kit', url: 'apps/charter-kit.html',
      dev: 'Weatherdeck', rating: '4.7', users: '420K', perms: ['profile', 'feed'],
      tagline: 'Soft bags, soft shoes, sun cream.',
      about: 'Charter Kit makes your packing list for a week on a yacht, from soft bags to seasickness bands, and keeps the crew list with who’s bringing what. Tick things off and count down to departure.',
      features: ['Packing list by category', 'Crew list', 'Who brings what', 'Countdown to departure'],
      shots: ['apps/charter-kit/shot-1.jpg', 'apps/charter-kit/shot-2.jpg', 'apps/charter-kit/shot-3.jpg'],
      version: '1.8', size: '9 KB',
      updates: [ { v: '1.8', ago: 4, notes: 'Who brings what.' }, { v: '1.4', ago: 90, notes: 'Countdown.' }, { v: '1.0', ago: 240, notes: 'Signed in with GENEXXO.' } ],
      reviews: [ { who: '@first_charter_fran', stars: 5, ago: 3, text: 'I didn’t know about soft bags. Saved me!' }, { who: '@marina_mike', stars: 5, ago: 17, text: 'No more two hairdryers and no torch.' }, { who: '@bluewater_bea', stars: 4, ago: 38, text: 'Handy for groups.' } ] }
  ],
  pros: [
    { key: 'tom-hargreaves-skipper', name: 'Tom Hargreaves Skipper & Instructor', color: '#0F6E7A', tag: 'Hire skipper and powerboat and yacht instructor · Solent and the Med', role: 'Yacht skipper and instructor',
      img: U('1533101585792-27f81a845550', 800, 800), base: 'Southampton, UK', langs: 'English, French', years: 31, rating: '4.9', reviewsN: 612, cur: '£',
      creds: ['Commercially endorsed yachtmaster', 'Sailing and powerboat instructor', 'Thirty seasons skippering in the Med'],
      about: 'Tom skippers charters for people who want the yacht without the worry, and teaches those who want to learn. Calm, funny and very good at finding a quiet anchorage.',
      services: [ { id: 'skip', name: 'Hire skipper', dur: 'Per day', price: 220, desc: 'For your charter or your own boat.' },
                  { id: 'coach', name: 'Own-boat coaching', dur: '1 day', price: 280, desc: 'Berthing, anchoring and confidence.' },
                  { id: 'intro', name: 'Taster day on the Solent', dur: '1 day', price: 140, desc: 'For complete beginners.' } ],
      avail: { days: [1, 2, 3, 4, 5, 6], times: ['08:30', '13:00'] },
      reviews: [ { who: '@first_charter_fran', stars: 5, ago: 3, text: 'Made our first charter so relaxed.' }, { who: '@marina_mike', stars: 5, ago: 18, text: 'Berthing finally makes sense.' }, { who: '@bluewater_bea', stars: 5, ago: 42, text: 'Knows every cove in Croatia.' } ],
      posts: [ { ago: 1, text: 'Anchoring tip: let out at least four times the depth in chain, then reverse gently to dig it in.' } ],
      tier: 'Pro Zone', verified: true },
    { key: 'elena-marsh-broker', name: 'Elena Marsh Yacht Broker', color: '#B08850', tag: 'Buying and selling motor yachts and catamarans', role: 'Yacht broker',
      img: U('1585240975858-7264fd020798', 800, 800), base: 'Palma, Mallorca · and Lymington, UK', langs: 'English, Spanish', years: 16, rating: '4.9', reviewsN: 184, cur: '£',
      creds: ['Member of a professional yacht brokers’ association', 'Former charter skipper', 'Sells new and used yachts'],
      about: 'Elena helps people buy the right yacht, not the biggest one they can afford. She finds boats, arranges surveys and sea trials and handles the sale from offer to handover.',
      services: [ { id: 'call', name: 'Buying consultation', dur: '60 minutes', price: 60, desc: 'Refunded if you go on to a yacht search.' },
                  { id: 'search', name: 'Yacht search', dur: 'Up to 3 months', price: 950, desc: 'Shortlist, viewings and sea trials.' },
                  { id: 'value', name: 'Valuation', dur: '1 day', price: 380, desc: 'For owners thinking of selling.' } ],
      avail: { days: [1, 2, 3, 4, 5], times: ['10:00', '14:00', '17:00'] },
      reviews: [ { who: '@marina_mike', stars: 5, ago: 4, text: 'Talked us out of the wrong boat. Then found the right one.' }, { who: '@skipper_tom', stars: 5, ago: 22, text: 'Honest broker. Rare.' }, { who: '@bluewater_bea', stars: 5, ago: 47, text: 'Smooth from offer to handover.' } ],
      posts: [ { ago: 2, text: 'Before you buy, charter the same model for a week. You’ll learn more than from any brochure.' } ],
      tier: 'Pro Zone', verified: true },
    { key: 'rob-mcallister-engineer', name: 'Rob McAllister Marine Engineering', color: '#0B2A36', tag: 'Engines, generators and refits for motor yachts', role: 'Marine engineer',
      img: U('1648817976768-a2fdcba20f9a', 800, 800), base: 'Plymouth, UK', langs: 'English', years: 27, rating: '4.9', reviewsN: 296, cur: '£',
      creds: ['Qualified marine engineer', 'Former superyacht chief engineer', 'Hybrid and electric drive trained'],
      about: 'Rob looks after the bits of a yacht nobody sees: engines, generators, watermakers and wiring. Winter servicing, pre-season checks and help when something stops in the middle of a passage.',
      services: [ { id: 'winter', name: 'Winter engine service', dur: '1 day', price: 480, desc: 'Twin engines, parts extra.' },
                  { id: 'survey', name: 'Engine survey for buyers', dur: 'Half a day', price: 350, desc: 'Before you buy, with a written report.' },
                  { id: 'call', name: 'Remote troubleshooting', dur: '30 minutes', price: 45, desc: 'Video call from wherever you are.' } ],
      avail: { days: [1, 2, 3, 4, 5], times: ['08:00', '12:00'] },
      reviews: [ { who: '@marina_mike', stars: 5, ago: 2, text: 'Fixed the generator over video from Corsica.' }, { who: '@skipper_tom', stars: 5, ago: 15, text: 'The engineer I trust.' }, { who: '@bluewater_bea', stars: 5, ago: 34, text: 'Explained everything.' } ],
      posts: [ { ago: 3, text: 'Winter tip: change the oil before laying up, not after. Old oil sits on the engine all winter otherwise.' } ],
      tier: 'Pro Zone', verified: true }
  ],
  communities: [
    { key: 'yacht-life', name: 'Yacht Life', domain: 'life.yachtxx.com', color: '#0F6E7A', img: U('1541777594744-addc2de9d110', 900, 500),
      scope: 'Global', where: 'Every sea', members: 264000, online: 3120, tagline: 'Anchor down. Kettle on.',
      about: 'Owners, charterers, crew and dreamers: anchorage tips, charter reviews, boat questions and a lot of sunset photos.',
      rules: ['Share anchorages kindly', 'No charter touts', 'Safety questions always welcome'],
      mods: ['@bluewater_bea', '@marina_mike'],
      threads: [ { t: 'Your best anchorage of 2026', by: '@bluewater_bea', tag: 'PLACES', replies: 1860, ago: 0, votes: 3640 }, { t: 'First charter: skippered or bareboat?', by: '@first_charter_fran', tag: 'Q&A', replies: 940, ago: 1, votes: 1420 }, { t: 'Catamaran or monohull for a family?', by: '@marina_mike', tag: 'DEBATE', replies: 1240, ago: 2, votes: 2060 }, { t: 'Show us your sunset from the deck', by: '@bluewater_bea', tag: 'PHOTOS', replies: 820, ago: 3, votes: 1960 } ],
      events: [ { title: 'Live Q&A: planning a 2027 charter', day: 2, time: '19:00', where: 'Online' }, { title: 'Winter boat talk', day: 16, time: '19:00', where: 'Online' } ] },
    { key: 'southampton-weekend-sailors', name: 'Southampton Weekend Boaters', domain: 'southampton.yachtxx.com', color: '#B08850', img: U('1763151426912-92383702ab3f', 900, 500),
      scope: 'Local', where: 'Southampton', members: 1900, online: 38, tagline: 'Out on the Solent, back for the pub.',
      about: 'Yacht owners and crew around Southampton who share trips across the Solent, crew spaces and winter talks.',
      rules: ['Crew spaces offered free', 'Every boat welcome', 'Safety first, always'],
      mods: ['@skipper_tom', '@marina_mike'],
      threads: [ { t: 'Crew wanted: Christmas day sail to Cowes', by: '@marina_mike', tag: 'CREW', replies: 32, ago: 0, votes: 70 }, { t: 'Winter berth prices this year', by: '@skipper_tom', tag: 'Q&A', replies: 44, ago: 1, votes: 62 }, { t: 'December talk: anchoring in the Med', by: '@bluewater_bea', tag: 'EVENT', replies: 18, ago: 2, votes: 40 } ],
      events: [ { title: 'Winter talk: anchoring in the Med', day: 10, time: '19:30', where: 'Southampton' }, { title: 'Christmas sail and mince pies', day: 20, time: '10:00', where: 'Southampton' } ] }
  ],
  feed: [
    { av: 'YX', avBg: TEAL, author: 'YachtXX Editorial', sub: 'Featured · Just now', badge: '★ FEATURED',
      text: 'Turquoise anchorages, island hops, motor yachts, catamarans and the crews who sail them. Charter, buy, share or just dream. Yachts, all in one place.',
      img: U('1762353853326-20cc0b74e952', 800, 600), eng: '♡ 38.4K · 💬 2.8K · ↗ 4.2K' },
    { av: 'BB', avBg: SAND, author: '@bluewater_bea', sub: 'Charter · Just now', badge: 'COMMUNITY',
      text: 'Last night of the season. Anchor down, sails away, the sun dropping behind the island. Already planning next year ⛵',
      img: U('1773434537544-c1c77fbd1891', 800, 600), eng: '♡ 14.8K · 💬 1.6K · ↗ 960' },
    { av: 'AC', avBg: TEAL, author: 'Aurelia Yacht Charter', sub: 'Founding Partner · Brand Zone', badge: 'BRAND ZONE',
      text: 'Sunset off Hvar, live tonight from our catamaran <b>Aurelia Sol</b>: the crew, the anchorage and dinner on deck. Ask the skipper anything.',
      img: U('1773593893090-27d17a880a07', 800, 600), eng: '♡ 18.6K · 💬 1.4K · ↗ 2.6K' },
    { av: 'CV', avBg: DEEP, author: 'Corvina Yachts', sub: 'Brand Zone · 1h ago', badge: 'BRAND ZONE',
      text: 'Sea trials for the new <b>Corvina 58</b>: 30 knots flat out, 18 at a comfortable cruise, and a flybridge built for long lunches.',
      img: U('1605281317010-fe5ffe798166', 800, 600), eng: '♡ 9.2K · 💬 640 · ↗ 820' },
    { av: 'MM', avBg: GLASS, author: '@marina_mike', sub: 'Ownership · 2h ago', badge: 'COMMUNITY',
      text: 'Winter in the marina. Covers on, engines serviced, mountains doing their thing. Counting down to April.',
      img: U('1773387494714-f03e14fc4375', 800, 600), eng: '♡ 7.4K · 💬 860 · ↗ 280' },
    { av: 'FS', avBg: SAND, author: 'Fairwind Share', sub: 'Brand Zone · 4h ago', badge: 'BRAND ZONE',
      text: 'Most yachts are used three weeks a year. Share one with seven others and use it for six. <b>Fairwind Share</b> looks after the rest.',
      img: U('1567899378494-47b22a2ae96a', 800, 600), eng: '♡ 6.2K · 💬 520 · ↗ 440' },
    { av: 'TH', avBg: TEAL, author: 'Tom Hargreaves Skipper & Instructor', sub: 'Crew & Skippers · 6h ago', badge: 'PRO ZONE',
      text: 'Heading for the islands at first light. The best passages start before breakfast and end before the afternoon wind.',
      img: U('1786510970095-ddae7795f86a', 800, 600), eng: '♡ 3.6K · 💬 220 · ↗ 380' }
  ],
  prompts: ['Plan a week’s yacht charter in Croatia', 'Skippered or bareboat: which is right for me?', 'Catamaran or monohull for a family?', 'What does it cost to own a yacht?'],
  businesses: ['bluewater-survey', 'keelson-refit']
};

/* the four Brand Zones and two Business Zones */
const brand = (o) => Object.assign({ kind: 'brand', gw: 'yacht', verified: true }, o);
Object.assign(ZONES, {
  'aurelia-charter': brand({ key: 'aurelia-charter', name: 'Aurelia Yacht Charter', color: '#0F6E7A', gradient: TEAL, tier: 'Founding Partner',
    tagline: 'Crewed and bareboat charters in the Med', stats: { followers: '224K', content: '860', products: '40' },
    ad: { badge: 'Featured', img: U('1761653434271-aef6b35cb3c1', 760, 760), hl: 'Your own island, a week at a time.', sub: 'Catamarans and yachts in Croatia, Greece and the Balearics.', meta: 'From €3,900 a week' },
    products: [
      { name: 'Crewed Catamaran Week, Croatia', price: 'From €14,500 / week', tag: 'FLAGSHIP', emoji: '⛵', rating: 4.9, reviews: 1860, cat: 'charter', special: true, desc: 'A 45-foot catamaran with skipper and cook for up to eight, from Split.', features: ['Skipper and cook', 'Four cabins', 'Split to Hvar, Vis and Korčula'], review: { who: 'Bea L.', text: 'The best week of our lives.' } },
      { name: 'Bareboat Yacht Week, Greece', price: 'From €3,900 / week', tag: 'BESTSELLER', emoji: '🧭', rating: 4.8, reviews: 2640, cat: 'charter', desc: 'A 42-foot yacht for qualified skippers, from Lefkada.', features: ['Three cabins', 'Qualification required'], review: { who: 'Mike S.', text: 'Perfect boat, perfect islands.' } },
      { name: 'Skipper for a Week', price: '€1,400', emoji: '👨‍✈️', rating: 4.9, reviews: 1240, cat: 'extras', desc: 'Add a local skipper to any bareboat charter.', features: ['Knows every anchorage'], review: { who: 'Fran K.', text: 'Worth every euro on our first trip.' } },
      { name: 'Provisioning Pack', price: '€380', tag: 'SPECIAL', emoji: '🧺', rating: 4.8, reviews: 860, cat: 'extras', special: true, desc: 'The galley stocked before you arrive, for six people.', features: ['Local produce'], review: { who: 'Tom H.', text: 'Straight to the anchorage, no supermarket.' } }
    ],
    shopCats: [ { key: 'charter', label: 'Charters', icon: '⛵' }, { key: 'extras', label: 'Extras', icon: '🧺' } ],
    feed: [
      { type: 'post', sub: 'Brand post · 2h', text: 'Turquoise water and nobody else in the bay: day three of a <b>Crewed Catamaran Week</b>.', img: U('1781901360575-c93c5104c8f2', 800, 440), eng: '♡ 18.6K · 💬 1.4K · ↗ 2.6K', product: 0 },
      { type: 'post', sub: 'In the islands · Yesterday', text: 'Rocky coves on the Greek side. <b>Bareboat weeks</b> for 2027 are open.', img: U('1780567497860-454f0bb61727', 800, 440), eng: '♡ 6.6K · 💬 420', product: 1 },
      { type: 'community', who: 'Fran K.', whoBg: SAND, sub: 'Community · 1d', text: 'We’ve never sailed. Can we still charter a yacht?', eng: '♡ 540 · 💬 132', reply: 'Hi Fran! Yes: choose a crewed charter or add a skipper to a bareboat week. You don’t need any experience, and your skipper will happily teach you as you go. Many guests come back a few years later with their own qualifications. ⛵' }
    ],
    events: [ { zoneEvent: true, tag: 'LIVE', title: 'Aurelia Live · Sunset off Hvar', when: 'Live now', desc: 'Live from the catamaran Aurelia Sol: the crew, the anchorage and dinner on deck.', registered: 6420, capacity: 15000 } ],
    about: { founded: 'Split · 2006', story: 'A Croatian skipper and a British sailor with two yachts and a lot of islands. Now forty boats in three countries. We joined YachtXX as Founding Partner because the people planning their next week at sea are here.', milestones: [['2006', 'Two yachts in Split'], ['2018', 'Greece and the Balearics'], ['2026', 'Founding Partner on YachtXX']], values: ['Local skippers', 'Well-kept boats', 'Respect the anchorage'] } }),

  'corvina-yachts': brand({ key: 'corvina-yachts', name: 'Corvina Yachts', color: '#0B2A36', gradient: DEEP, tier: 'Brand Zone',
    tagline: 'Motor yachts from 48 to 82 feet', stats: { followers: '146K', content: '420', products: '6' },
    ad: { badge: 'New', img: U('1528154291023-a6525fabe5b4', 760, 760), hl: 'The new Corvina 58.', sub: 'Thirty knots, a flybridge and room for eight.', meta: 'From £1.4M' },
    products: [
      { name: 'Corvina 58', price: 'From £1,450,000', tag: 'FLAGSHIP', emoji: '🛥️', rating: 4.9, reviews: 86, cat: 'yachts', special: true, desc: 'A 58-foot flybridge yacht with three cabins and a crew cabin.', features: ['Up to 30 knots', 'Three cabins'], review: { who: 'Mike S.', text: 'Sea trial sold it in an hour.' } },
      { name: 'Corvina 48', price: 'From £890,000', tag: 'BESTSELLER', emoji: '⚓', rating: 4.8, reviews: 140, cat: 'yachts', desc: 'The owner-driver yacht: two cabins, easy to handle.', features: ['Joystick docking'], review: { who: 'Bea L.', text: 'We take it out ourselves every weekend.' } },
      { name: 'Corvina Hybrid 82', price: 'Price on request', emoji: '🔋', rating: 4.9, reviews: 22, cat: 'yachts', desc: 'Our largest yacht, with silent electric running at anchor.', features: ['Four cabins plus crew'], review: { who: 'Tom H.', text: 'Silent at anchor. Magic.' } },
      { name: 'Sea Trial Day', price: '£450', tag: 'SPECIAL', emoji: '🗓️', rating: 4.9, reviews: 320, cat: 'trials', special: true, desc: 'A day on the Solent aboard a Corvina, refunded if you buy.', features: ['Lunch on board'], review: { who: 'Fran K.', text: 'A dream day out.' } }
    ],
    shopCats: [ { key: 'yachts', label: 'Yachts', icon: '🛥️' }, { key: 'trials', label: 'Sea trials', icon: '🗓️' } ],
    feed: [ { type: 'post', sub: 'Brand post · 1h', text: 'Three decks of the <b>Corvina Hybrid 82</b>, our largest yacht, seen from the crane on launch day.', img: U('1559385301-0187cb6eff46', 800, 440), eng: '♡ 9.2K · 💬 640', product: 2 } ],
    events: [ { zoneEvent: true, tag: 'EVENT', title: 'Corvina 58 virtual tour', when: 'Dec 2 · 19:00', desc: 'A live walk-through of the new 58 with the designer.', registered: 1460, capacity: 4000 } ],
    about: { founded: 'Poole · 1979', story: 'A family boatyard in Poole that has built motor yachts for three generations.', milestones: [['1979', 'The first Corvina'], ['2023', 'The Hybrid 82'], ['2026', 'Brand Zone on YachtXX']], values: ['Built in Poole', 'Designed for owner-drivers', 'Hybrid options'] } }),

  'fairwind-share': brand({ key: 'fairwind-share', name: 'Fairwind Share', color: '#B08850', gradient: SAND, tier: 'Brand Zone',
    tagline: 'Own a share of a yacht, use it for weeks', stats: { followers: '68.4K', content: '240', products: '12' },
    ad: { badge: 'Featured', img: U('1614350391736-ed8619d63c06', 760, 760), hl: 'Own an eighth. Use it all summer.', sub: 'Shared yacht ownership, fully managed.', meta: 'Shares from £48,000' },
    products: [
      { name: 'One-Eighth Share, 52ft Yacht', price: 'From £68,000', tag: 'FLAGSHIP', emoji: '🔑', rating: 4.8, reviews: 240, cat: 'shares', special: true, desc: 'An eighth share of a 52-foot motor yacht in Mallorca: six weeks a year, crew on request.', features: ['Six weeks a year', 'Fully managed'], review: { who: 'Mike S.', text: 'All the fun, an eighth of the bills.' } },
      { name: 'One-Sixth Share, Catamaran', price: 'From £48,000', tag: 'BESTSELLER', emoji: '⛵', rating: 4.8, reviews: 180, cat: 'shares', desc: 'A sixth share of a 45-foot catamaran in Croatia.', features: ['Eight weeks a year'], review: { who: 'Bea L.', text: 'Best decision we made.' } },
      { name: 'Try-Before-You-Buy Week', price: '£2,400', emoji: '🗓️', rating: 4.9, reviews: 320, cat: 'try', desc: 'A week on a shared yacht, taken off the share price if you buy.', features: ['Any Fairwind yacht'], review: { who: 'Fran K.', text: 'Convinced us in two days.' } },
      { name: 'Ownership Guide', price: '£19', tag: 'SPECIAL', emoji: '📘', rating: 4.7, reviews: 640, cat: 'try', special: true, desc: 'What shared ownership costs, honestly, with real running costs.', features: ['Printed and digital'], review: { who: 'Tom H.', text: 'Clear and honest.' } }
    ],
    shopCats: [ { key: 'shares', label: 'Shares', icon: '🔑' }, { key: 'try', label: 'Try it', icon: '🗓️' } ],
    feed: [ { type: 'post', sub: 'Brand post · 4h', text: 'A shared 52-footer off Mallorca’s north coast. Six weeks a year, an eighth of the cost.', img: U('1535024966840-e7424dc2635b', 800, 440), eng: '♡ 6.2K · 💬 520', product: 0 } ],
    events: [ { zoneEvent: true, tag: 'EVENT', title: 'Shared ownership explained', when: 'Dec 9 · 19:00', desc: 'Live Q&A: what it costs and how the weeks are shared.', registered: 860, capacity: 3000 } ],
    about: { founded: 'Lymington · 2015', story: 'Two owners who realised they each used their yachts for three weeks a year.', milestones: [['2015', 'The first shared yacht'], ['2024', 'Forty yachts'], ['2026', 'Brand Zone on YachtXX']], values: ['Honest running costs', 'Fair calendar', 'Fully managed'] } }),

  'weatherdeck': brand({ key: 'weatherdeck', name: 'Weatherdeck', color: '#3E8E86', gradient: GLASS, tier: 'Brand Zone',
    tagline: 'Deck shoes, crew wear and yacht kit', stats: { followers: '54.6K', content: '210', products: '160' },
    ad: { badge: 'Crew', img: U('1795097757496-2c39a076b4cf', 760, 760), hl: 'Dressed for the dock.', sub: 'Crew uniforms, deck shoes and soft bags.', meta: 'From £18' },
    products: [
      { name: 'Non-Marking Deck Shoes', price: '£79', tag: 'FLAGSHIP', emoji: '👟', rating: 4.8, reviews: 2860, cat: 'shoes', special: true, desc: 'White soles that grip wet decks and leave no marks.', features: ['Sizes 3 to 13', 'Machine washable'], review: { who: 'Bea L.', text: 'The skipper approved.' } },
      { name: 'Soft Duffel Bag, 60L', price: '£54', tag: 'BESTSELLER', emoji: '👜', rating: 4.8, reviews: 1960, cat: 'bags', desc: 'Folds flat in a locker, because yachts don’t do suitcases.', features: ['Waterproof base'], review: { who: 'Fran K.', text: 'Why didn’t anyone tell me sooner?' } },
      { name: 'Crew Polo, Embroidered', price: '£32', emoji: '👕', rating: 4.7, reviews: 860, cat: 'crew', desc: 'Your yacht’s name stitched on the chest.', features: ['Minimum six'], review: { who: 'Tom H.', text: 'Smart crew, happy owner.' } },
      { name: 'Coiled Line Gift Set', price: '£18', tag: 'SPECIAL', emoji: '🪢', rating: 4.8, reviews: 420, cat: 'gifts', special: true, desc: 'Practice ropes and a knot card for new crew.', features: ['Eight knots'], review: { who: 'Mike S.', text: 'Christmas sorted.' } }
    ],
    shopCats: [ { key: 'shoes', label: 'Shoes', icon: '👟' }, { key: 'bags', label: 'Bags', icon: '👜' }, { key: 'crew', label: 'Crew', icon: '👕' }, { key: 'gifts', label: 'Gifts', icon: '🪢' } ],
    feed: [ { type: 'post', sub: 'Brand post · 1d', text: 'Every crew member should know their knots. The <b>Coiled Line Gift Set</b> is a good place to start.', img: U('1744290382098-141bbc2f1733', 800, 440), eng: '♡ 3.2K · 💬 180', product: 3 } ],
    events: [ { zoneEvent: true, tag: 'SALE', title: 'Christmas sale: 30% off deck shoes', when: 'Dec 4 · All day', desc: 'Thirty per cent off deck shoes, one day only.', registered: 1180, capacity: 4000 } ],
    about: { founded: 'Cowes · 2011', story: 'A former superyacht stewardess who couldn’t find crew kit that lasted a season.', milestones: [['2011', 'The first crew polo'], ['2020', 'Deck shoes'], ['2026', 'Brand Zone on YachtXX']], values: ['Made for a season at sea', 'Recycled fabrics', 'Free name embroidery'] } }),

  'bluewater-survey': { key: 'bluewater-survey', kind: 'business', gw: 'yacht', name: 'Bluewater Marine Survey', color: '#0F6E7A', gradient: TEAL, img: U('1785013045447-92e088e00fa1', 900, 500),
    tier: 'Verified', category: 'Yacht surveys', tagline: 'Independent surveys before you buy or insure.',
    about: { founded: 'Lymington · 2002', story: 'Independent surveyors who check hulls, engines and rigging for buyers, owners and insurers.' },
    stats: { years: 24, staff: 18, clients: '700 surveys a year' },
    caps: [ { name: 'Pre-purchase surveys', detail: 'Hull, deck and systems.' }, { name: 'Insurance surveys', detail: 'Condition and valuation.' }, { name: 'Damage reports', detail: 'After a knock or a storm.' } ],
    specs: { moq: 'One yacht', lead: '3 to 14 days', regions: 'UK & the Mediterranean', certs: ['Accredited marine surveyors', 'Fully insured', 'Independent of brokers'] },
    supplies: [ { kind: 'brand', key: 'fairwind-share', what: 'Annual surveys of the shared fleet' } ],
    cases: [ { title: 'A hidden problem', text: 'Damp in a rudder found before purchase, saving the buyer a five-figure repair.' } ],
    feed: [ { sub: 'Surveys · 3d', text: 'Three surveys in Palma this week, ahead of the spring season.' } ],
    contact: { person: 'Neil Ward, Surveys', response: 'Replies within one working day' } },

  'keelson-refit': { key: 'keelson-refit', kind: 'business', gw: 'yacht', name: 'Keelson Refit Yard', color: '#B08850', gradient: SAND, img: U('1562281302-809108fd533c', 900, 500),
    tier: 'Verified', category: 'Yacht refit and repair', tagline: 'Winter refits, paint and interiors.',
    about: { founded: 'Falmouth · 1988', story: 'A yard that refits yachts from 40 to 120 feet: paint, teak, engines and interiors, with covered sheds for winter work.' },
    stats: { years: 38, staff: 96, clients: '160 refits a year' },
    caps: [ { name: 'Paint and antifouling', detail: 'In heated sheds.' }, { name: 'Teak decks', detail: 'Repair and replacement.' }, { name: 'Interiors', detail: 'Joinery and upholstery.' } ],
    specs: { moq: 'One yacht', lead: '2 to 26 weeks', regions: 'UK', certs: ['Accredited boatyard', 'Fully insured', 'Low-impact antifouling options'] },
    supplies: [ { kind: 'brand', key: 'aurelia-charter', what: 'Winter refits for the charter fleet' } ],
    cases: [ { title: 'A new deck', text: 'A 70-foot yacht re-decked in sustainable teak over one winter.' } ],
    feed: [ { sub: 'In the shed · 5d', text: 'Four yachts in for winter paint. The sheds are warm, the coffee is not.' } ],
    contact: { person: 'Jenna Rowe, Yard', response: 'Replies within one working day' } }
});

/* events in the Events tab */
gxEvents('yacht', [
  { gw: 'yacht', zone: 'aurelia-charter', type: 'Live', icon: '🔴', live: true, time: 'Live Now', title: 'Aurelia Live · Sunset off Hvar', desc: 'Live from the catamaran Aurelia Sol, with the skipper answering questions.' },
  { gw: 'yacht', type: 'Event', icon: '❓', time: 'Dec 2', title: 'Live Q&A: planning a 2027 charter', desc: 'Yacht Life skippers answer your questions.' },
  { gw: 'yacht', zone: 'weatherdeck', type: 'Sale', icon: '👟', time: 'Dec 4', title: 'Weatherdeck Christmas sale', desc: '30% off deck shoes, one day only.' },
  { gw: 'yacht', zone: 'corvina-yachts', type: 'Event', icon: '🛥️', time: 'Dec 2', title: 'Corvina 58 virtual tour', desc: 'A live walk-through with the designer.' },
  { gw: 'yacht', type: 'Event', icon: '⚓', time: 'Dec 3', title: 'Winter talk: anchoring in the Med, Southampton', desc: 'Southampton Weekend Boaters’ December talk.' },
  { gw: 'yacht', zone: 'fairwind-share', type: 'Event', icon: '🔑', time: 'Dec 9', title: 'Shared ownership explained', desc: 'Fairwind Share’s live Q&A on costs and calendars.' },
  { gw: 'yacht', type: 'Event', icon: '💬', time: 'Dec 9', title: 'Winter boat talk', desc: 'Yacht Life’s online evening of boat questions.' },
  { gw: 'yacht', type: 'Event', icon: '🎄', time: 'Dec 13', title: 'Christmas sail and mince pies, Southampton', desc: 'Southampton Weekend Boaters out on the Solent.' }
]);
})();
/* ═════════ /YACHTXX ═════════ */
