/* ═════════ STEELXX — a Materials demo gateway (2026-11-24, Sean; build -96) ═════════
   Built with the _tools/README.md recipe. Palette (dark): forge black, stone grey, molten orange.
   Home sector: Materials (GW_HOME already says so; listed only there). Every steelmaker, maker, pro and product is
   fictional; places, metallurgy and the maths are real. Prices and figures are illustrative. */
(function(){
const U = (id, w, h) => `https://images.unsplash.com/photo-${id}?w=${w}&h=${h}&fit=crop&q=75`;
const MOLTEN = 'linear-gradient(135deg,#FB923C,#B91C1C)', STONE = 'linear-gradient(135deg,#A8A29E,#44403C)', ARC = 'linear-gradient(135deg,#60A5FA,#1E3A8A)', IRON = 'linear-gradient(135deg,#57534E,#0C0A09)';

GATEWAYS.steel = {
  name: 'SteelXX', domain: 'steelxx.com', emoji: '🔩', sector: 'materials', live: true,
  tagline: 'The Steel Universe',
  theme: {
    bg: '#0F0D0C', text: '#EEE9E4', cardBg: 'rgba(255,255,255,.045)', cardBorder: 'rgba(238,233,228,.09)',
    headerBg: 'linear-gradient(180deg,#292524,#0F0D0C)', accent: '#F97316', accentAlt: '#A8A29E', dark: true
  },
  gradient: 'linear-gradient(135deg,#0F0D0C,#78716C,#F97316)',
  stats: { members: '1.3M', brands: '640+', agents: '26' },
  spaces: ['All Feed', 'Green Steel', 'Welding', 'Blacksmithing', 'Knives & Pans', 'Careers'],
  trending: ['#GreenSteel', '#WeldOfTheDay', '#ForgedNotBought'],
  brandZones: [
    { key: 'northforge-steel', name: 'Northforge Steel', color: '#F97316', tier: 'Founding Partner', tag: 'Low-carbon steel from electric furnaces' },
    { key: 'hallam-blades', name: 'Hallam Blades', color: '#A8A29E', tier: 'Brand Zone', tag: 'Kitchen knives forged in Sheffield' },
    { key: 'ironleaf-cookware', name: 'Ironleaf Cookware', color: '#B91C1C', tier: 'Brand Zone', tag: 'Carbon-steel pans that last a lifetime' },
    { key: 'arcwright-welding', name: 'Arcwright Welding', color: '#60A5FA', tier: 'Brand Zone', tag: 'Welders and kit for home workshops' }
  ],
  apps: [
    { name: 'Steel Weight', color: '#F97316', desc: 'Weigh any plate, bar or tube before you lift it', key: 'steel-weight', url: 'apps/steel-weight.html',
      dev: 'Northforge Steel', rating: '4.9', users: '920K', perms: ['profile', 'feed'],
      tagline: '7,850 kilograms a cubic metre.',
      about: 'Steel Weight works out what a piece of steel weighs from its shape and size: plate, round bar, square bar or tube. It uses steel’s real density, 7,850 kilograms per cubic metre.',
      features: ['Plate, bar and tube', 'Weight per metre', 'A cutting list', 'Share a list'],
      shots: ['apps/steel-weight/shot-1.jpg', 'apps/steel-weight/shot-2.jpg', 'apps/steel-weight/shot-3.jpg'],
      version: '3.6', size: '8 KB',
      updates: [ { v: '3.6', ago: 2, notes: 'A cutting list.' }, { v: '3.0', ago: 80, notes: 'Tubes.' }, { v: '2.2', ago: 210, notes: 'Signed in with GENEXXO.' } ],
      reviews: [ { who: '@gareth_rowley_welds', stars: 5, ago: 1, text: 'On every apprentice’s phone.' }, { who: '@forge_shed_fran', stars: 5, ago: 15, text: 'Ordered exactly the right bar stock.' }, { who: '@pan_seasoner_pete', stars: 4, ago: 36, text: 'Handy and fast.' } ] },
    { name: 'Weld Settings', color: '#60A5FA', desc: 'A starting point for every weld', key: 'weld-settings', url: 'apps/weld-settings.html',
      dev: 'Arcwright Welding', rating: '4.8', users: '640K', perms: ['profile', 'feed'],
      tagline: 'Dial it in, then fine-tune.',
      about: 'Weld Settings suggests a starting current, wire speed and rod size for the steel you’re welding and how thick it is. Then log what worked, so next time you start closer.',
      features: ['Stick and MIG', 'By thickness', 'Your own notes', 'Share a setting'],
      shots: ['apps/weld-settings/shot-1.jpg', 'apps/weld-settings/shot-2.jpg', 'apps/weld-settings/shot-3.jpg'],
      version: '2.9', size: '8 KB',
      updates: [ { v: '2.9', ago: 3, notes: 'Your own notes.' }, { v: '2.3', ago: 90, notes: 'MIG settings.' }, { v: '1.6', ago: 240, notes: 'Signed in with GENEXXO.' } ],
      reviews: [ { who: '@gareth_rowley_welds', stars: 5, ago: 2, text: 'Good starting numbers. Then listen to the arc.' }, { who: '@forge_shed_fran', stars: 5, ago: 21, text: 'My first gate welded with it.' }, { who: '@pan_seasoner_pete', stars: 4, ago: 43, text: 'Clear for beginners.' } ] },
    { name: 'Edge Keeper', color: '#A8A29E', desc: 'Look after your knives and pans', key: 'edge-keeper', url: 'apps/edge-keeper.html',
      dev: 'Hallam Blades', rating: '4.8', users: '410K', perms: ['profile', 'feed'],
      tagline: 'Sharp knives, seasoned pans.',
      about: 'Edge Keeper reminds you when each knife is due a hone or a sharpen and when a pan needs re-seasoning, with short guides for each and a log of your kit.',
      features: ['Reminders for every knife', 'Seasoning guide', 'Your kit list', 'Share your rack'],
      shots: ['apps/edge-keeper/shot-1.jpg', 'apps/edge-keeper/shot-2.jpg', 'apps/edge-keeper/shot-3.jpg'],
      version: '2.1', size: '8 KB',
      updates: [ { v: '2.1', ago: 4, notes: 'Seasoning guide.' }, { v: '1.7', ago: 70, notes: 'Reminders.' }, { v: '1.2', ago: 200, notes: 'Signed in with GENEXXO.' } ],
      reviews: [ { who: '@pan_seasoner_pete', stars: 5, ago: 1, text: 'My carbon pan has never been happier.' }, { who: '@amara_osei_materials', stars: 5, ago: 17, text: 'Even explains why steel rusts.' }, { who: '@forge_shed_fran', stars: 4, ago: 40, text: 'Lovely little app.' } ] }
  ],
  pros: [
    { key: 'gareth-rowley-welds', name: 'Gareth Rowley Welding School', color: '#60A5FA', tag: 'Welding courses for beginners and pros', role: 'Welding instructor',
      img: U('1579580033453-2327e067baa9', 800, 800), base: 'Port Talbot, Wales', langs: 'English, Welsh', years: 26, rating: '4.9', reviewsN: 384, cur: '£',
      creds: ['Coded welder for 20 years', 'Qualified welding inspector', 'Trains apprentices for local firms'],
      about: 'Gareth spent twenty years welding pipework and steel frames before he started teaching. His courses take you from your first bead to a coded test.',
      services: [ { id: 'taster', name: 'Welding taster day', dur: 'One day', price: 140, desc: 'Stick and MIG, all kit provided.' },
                  { id: 'course', name: 'Five-day MIG course', dur: 'Five days', price: 620, desc: 'Flat to overhead.' },
                  { id: 'coded', name: 'Coded test preparation', dur: 'Three days', price: 480, desc: 'Practice and a mock test.' } ],
      avail: { days: [1, 2, 3, 4, 6], times: ['08:30', '13:00'] },
      reviews: [ { who: '@forge_shed_fran', stars: 5, ago: 3, text: 'Went from scared of the arc to welding a trailer.' }, { who: '@pan_seasoner_pete', stars: 5, ago: 24, text: 'Patient and brilliant.' }, { who: '@amara_osei_materials', stars: 5, ago: 51, text: 'I send all my students on his taster.' } ],
      posts: [ { ago: 1, text: 'A good weld sounds like bacon frying. If it crackles and pops, check your settings and your stick-out.' } ],
      tier: 'Pro Zone', verified: true },
    { key: 'winston-adeyemi-forge', name: 'Winston Adeyemi Forge', color: '#F97316', tag: 'Blacksmithing courses and commissions', role: 'Blacksmith',
      img: U('1564541558234-ef406c118d0c', 800, 800), base: 'Stroud, UK', langs: 'English, Yoruba', years: 40, rating: '5.0', reviewsN: 312, cur: '£',
      creds: ['Forty years at the anvil', 'Gates and railings for churches and parks', 'Teaches in his own forge'],
      about: 'Winston has forged gates, railings and garden tools for forty years. In his forge you make your own piece in a day: a hook, a knife or a fire poker to take home.',
      services: [ { id: 'day', name: 'Forge your own day', dur: 'One day', price: 160, desc: 'Make a piece to take home.' },
                  { id: 'knife', name: 'Knife-making weekend', dur: 'Two days', price: 340, desc: 'Forge, harden and handle a blade.' },
                  { id: 'commission', name: 'Commission a gate', dur: 'From six weeks', price: 1200, desc: 'Designed and forged for you.' } ],
      avail: { days: [3, 4, 5, 6], times: ['09:00'] },
      reviews: [ { who: '@forge_shed_fran', stars: 5, ago: 2, text: 'He made my wedding rings’ display stand. Then taught me to forge.' }, { who: '@pan_seasoner_pete', stars: 5, ago: 28, text: 'Best birthday present ever.' }, { who: '@gareth_rowley_welds', stars: 5, ago: 55, text: 'A master.' } ],
      posts: [ { ago: 2, text: 'Watch the colour, not the clock. Straw, then bronze, then blue: that’s how a smith tempers steel.' } ],
      tier: 'Pro Zone', verified: true },
    { key: 'amara-osei-materials', name: 'Dr Amara Osei Materials Tutoring', color: '#A8A29E', tag: 'Materials science and engineering tutoring', role: 'Materials tutor',
      img: U('1573496528816-a104a722b3db', 800, 800), base: 'Sheffield, UK · and online', langs: 'English, Twi', years: 14, rating: '4.9', reviewsN: 276, cur: '£',
      creds: ['PhD in metallurgy', 'Former steel plant research engineer', 'Teaches A-level to master’s'],
      about: 'Amara worked on new steels in a research lab before she started tutoring. She makes phase diagrams, heat treatment and corrosion make sense, for students and engineers alike.',
      services: [ { id: 'lesson', name: 'Tutoring session', dur: '60 minutes', price: 55, desc: 'Any materials topic, online.' },
                  { id: 'exam', name: 'Exam revision block', dur: 'Five sessions', price: 250, desc: 'Past papers and worked answers.' },
                  { id: 'cpd', name: 'Steel basics for engineers', dur: 'Half a day', price: 180, desc: 'For teams, in person or online.' } ],
      avail: { days: [1, 2, 3, 4], times: ['16:00', '17:30', '19:00'] },
      reviews: [ { who: '@forge_shed_fran', stars: 5, ago: 4, text: 'Finally understand why quenching works.' }, { who: '@gareth_rowley_welds', stars: 5, ago: 30, text: 'Ran a superb session for my apprentices.' }, { who: '@pan_seasoner_pete', stars: 5, ago: 57, text: 'Clear and patient.' } ],
      posts: [ { ago: 3, text: 'Steel is iron with a pinch of carbon, under 2%. That pinch is the difference between a nail and a knife.' } ],
      tier: 'Pro Zone', verified: true }
  ],
  communities: [
    { key: 'metalworkers-bench', name: 'Metalworkers’ Bench', domain: 'bench.steelxx.com', color: '#F97316', img: U('1759411364558-38a9e2b04f76', 900, 500),
      scope: 'Global', where: 'In every workshop', members: 264000, online: 3180, tagline: 'Show us your welds.',
      about: 'Welders, smiths and home fabricators sharing their work, their mistakes and their cleverest jigs.',
      rules: ['Safety first, always', 'Constructive criticism only', 'Beginners’ questions welcome'],
      mods: ['@forge_shed_fran', '@gareth_rowley_welds'],
      threads: [ { t: 'Rate my first welds (be gentle)', by: '@forge_shed_fran', tag: 'CRITIQUE', replies: 1460, ago: 0, votes: 2840 }, { t: 'Stick or MIG for a beginner?', by: '@gareth_rowley_welds', tag: 'DEBATE', replies: 980, ago: 1, votes: 1720 }, { t: 'Your best workshop jig', by: '@forge_shed_fran', tag: 'JIGS', replies: 520, ago: 2, votes: 1040 }, { t: 'Projects for Christmas presents', by: '@gareth_rowley_welds', tag: 'PROJECTS', replies: 760, ago: 3, votes: 1560 } ],
      events: [ { title: 'Live demo: welding thin sheet', day: 6, time: '19:00', where: 'Online' }, { title: 'Christmas build-off', day: 20, time: 'All day', where: 'Online' } ] },
    { key: 'sheffield-steel-city', name: 'Sheffield Steel City', domain: 'sheffield.steelxx.com', color: '#A8A29E', img: U('1604154315861-e1803bfcaf30', 900, 500),
      scope: 'Local', where: 'Sheffield', members: 1840, online: 40, tagline: 'Where stainless was born.',
      about: 'Makers, engineers, cutlers and history fans in the city that gave the world stainless steel. Works visits, talks and a pint after.',
      rules: ['Everyone welcome', 'No company secrets', 'Be kind to newcomers'],
      mods: ['@amara_osei_materials', '@pan_seasoner_pete'],
      threads: [ { t: 'December talk: the story of stainless', by: '@amara_osei_materials', tag: 'TALK', replies: 54, ago: 0, votes: 120 }, { t: 'Little mesters’ workshops still open?', by: '@pan_seasoner_pete', tag: 'HISTORY', replies: 42, ago: 1, votes: 86 }, { t: 'Christmas makers’ market stalls', by: '@amara_osei_materials', tag: 'MARKET', replies: 26, ago: 2, votes: 58 } ],
      events: [ { title: 'Talk: the story of stainless', day: 8, time: '19:00', where: 'Sheffield' }, { title: 'Christmas makers’ market', day: 18, time: '10:00', where: 'Sheffield' } ] }
  ],
  feed: [
    { av: 'SX', avBg: MOLTEN, author: 'SteelXX Editorial', sub: 'Featured · Just now', badge: '★ FEATURED',
      text: 'The metal in every bridge, blade, car and kitchen. Watch it made, learn to weld and forge it, and meet the people making it cleaner. Steel, all in one place.',
      img: U('1697281679290-ad7be1b10682', 800, 600), eng: '♡ 33.6K · 💬 2.8K · ↗ 4.1K' },
    { av: 'FF', avBg: IRON, author: '@forge_shed_fran', sub: 'Welding · Just now', badge: 'COMMUNITY',
      text: 'Garden gate, day three. The sparks still make me jump, but the welds are getting neater. Two more hinges and it’s done 🔥',
      img: U('1455165814004-1126a7199f9b', 800, 600), eng: '♡ 11.4K · 💬 1.2K · ↗ 640' },
    { av: 'NF', avBg: MOLTEN, author: 'Northforge Steel', sub: 'Founding Partner · Brand Zone', badge: 'BRAND ZONE',
      text: 'Live now: the first pour from our new electric arc furnace, melting scrap with renewable power. <b>Northforge Green Plate</b>, made with a fraction of the old carbon.',
      img: U('1761414500570-0b835cdcf3c8', 800, 600), eng: '♡ 22.8K · 💬 2.6K · ↗ 3.2K' },
    { av: 'HB', avBg: STONE, author: 'Hallam Blades', sub: 'Brand Zone · 1h ago', badge: 'BRAND ZONE',
      text: 'Every blade ground by hand, the way Sheffield has done it for centuries. The <b>Hallam Chef’s Knife</b>, ready for Christmas.',
      img: U('1522322512347-a0e57fd1744c', 800, 600), eng: '♡ 8.6K · 💬 610 · ↗ 720' },
    { av: 'PP', avBg: STONE, author: '@pan_seasoner_pete', sub: 'Knives & Pans · 2h ago', badge: 'COMMUNITY',
      text: 'Took the family to see the old steelworks where Grandad worked. Rust, sky and a lot of stories on the drive home.',
      img: U('1787285724892-38c3cb5fbbdb', 800, 600), eng: '♡ 9.2K · 💬 840 · ↗ 380' },
    { av: 'AW', avBg: ARC, author: 'Arcwright Welding', sub: 'Brand Zone · 4h ago', badge: 'BRAND ZONE',
      text: 'Blue light, steady hands. The <b>Arcwright Home MIG</b> runs off a normal plug.',
      img: U('1784442201403-9bee7050144c', 800, 600), eng: '♡ 5.4K · 💬 380 · ↗ 420' },
    { av: 'WA', avBg: MOLTEN, author: 'Winston Adeyemi Forge', sub: 'Blacksmithing · 6h ago', badge: 'PRO ZONE',
      text: 'Saturday’s class: eight people, eight fire pokers, one very warm forge. Two places left before Christmas.',
      img: U('1705875021755-88ba2c835524', 800, 600), eng: '♡ 3.6K · 💬 240 · ↗ 300' }
  ],
  prompts: ['What is green steel?', 'How do I start welding at home?', 'How do I look after a carbon-steel pan?', 'Why doesn’t stainless steel rust?'],
  businesses: ['don-valley-fabrication', 'ferrocycle']
};

/* the four Brand Zones and two Business Zones */
const brand = (o) => Object.assign({ kind: 'brand', gw: 'steel', verified: true }, o);
Object.assign(ZONES, {
  'northforge-steel': brand({ key: 'northforge-steel', name: 'Northforge Steel', color: '#F97316', gradient: MOLTEN, tier: 'Founding Partner',
    tagline: 'Low-carbon steel from electric furnaces', stats: { followers: '318K', content: '740', products: '18' },
    ad: { badge: 'Featured', img: U('1760378105099-968c06b9b4bd', 760, 760), hl: 'Steel, made cleaner.', sub: 'Recycled scrap, melted with renewable power.', meta: 'From £780 / tonne' },
    products: [
      { name: 'Northforge Green Plate', price: 'From £780 / tonne', tag: 'FLAGSHIP', emoji: '🟧', rating: 4.8, reviews: 1240, cat: 'plate', special: true, desc: 'Structural plate from recycled scrap, with a carbon certificate for every batch.', features: ['Certified low carbon', 'Cut to size'], review: { who: 'Fran D.', text: 'Our fabricator asked for it by name.' } },
      { name: 'Green Rebar', price: 'From £690 / tonne', tag: 'BESTSELLER', emoji: '🏗️', rating: 4.7, reviews: 860, cat: 'long', desc: 'Reinforcing bar for concrete, from 100% scrap.', features: ['All standard sizes'], review: { who: 'Gareth R.', text: 'Same strength, a fraction of the carbon.' } },
      { name: 'Hollow Sections', price: 'From £920 / tonne', emoji: '⬜', rating: 4.7, reviews: 540, cat: 'long', desc: 'Square and round tubes for frames.', features: ['Next-day delivery'], review: { who: 'Pete S.', text: 'Clean, square and straight.' } },
      { name: 'Workshop Offcut Box', price: '£45', tag: 'SPECIAL', emoji: '📦', rating: 4.9, reviews: 1860, cat: 'offcuts', special: true, desc: '25 kg of mixed offcuts for home makers.', features: ['Plate, bar and tube'], review: { who: 'Winston A.', text: 'Perfect for my students.' } }
    ],
    shopCats: [ { key: 'plate', label: 'Plate', icon: '🟧' }, { key: 'long', label: 'Bar & tube', icon: '🏗️' }, { key: 'offcuts', label: 'Offcuts', icon: '📦' } ],
    feed: [
      { type: 'post', sub: 'Brand post · 2h', text: 'The furnace hall at sunset. Inside, scrap becomes <b>Green Plate</b> using renewable power instead of coal.', img: U('1765810542186-c6becc0687b1', 800, 440), eng: '♡ 22.8K · 💬 2.6K · ↗ 3.2K', product: 0 },
      { type: 'post', sub: 'Mill · Yesterday', text: 'Offcuts that used to go back to the furnace now go to makers. The <b>Workshop Offcut Box</b> is back.', img: U('1598302936625-6075fbd98dd7', 800, 440), eng: '♡ 6.4K · 💬 410', product: 3 },
      { type: 'community', who: 'Fran D.', whoBg: IRON, sub: 'Community · 1d', text: 'Is recycled steel as strong as new steel?', eng: '♡ 480 · 💬 120', reply: 'Hi Fran! Yes: steel can be recycled again and again without losing strength. Every batch of Green Plate is tested to the same standards as steel made from iron ore. 🔩' }
    ],
    events: [ { zoneEvent: true, tag: 'LIVE', title: 'Northforge Live · first pour from the new furnace', when: 'Live now', desc: 'Watch the first melt from our electric arc furnace, powered by renewables.', registered: 8640, capacity: 20000 } ],
    about: { founded: 'Rotherham · 1962', story: 'A family steelworks that switched from coal to electric furnaces and recycled scrap. We joined SteelXX as Founding Partner because the people who use steel deserve to see how it’s made.', milestones: [['1962', 'Founded'], ['2024', 'Electric arc furnace'], ['2026', 'Founding Partner on SteelXX']], values: ['Lower carbon every year', 'Recycled first', 'Apprentices every year'] } }),

  'hallam-blades': brand({ key: 'hallam-blades', name: 'Hallam Blades', color: '#A8A29E', gradient: STONE, tier: 'Brand Zone',
    tagline: 'Kitchen knives forged in Sheffield', stats: { followers: '124K', content: '480', products: '22' },
    ad: { badge: 'Gift', img: U('1564182998523-6923112e7d6b', 760, 760), hl: 'Sharp for a lifetime.', sub: 'Hand-ground knives from Sheffield.', meta: 'From £35' },
    products: [
      { name: 'Hallam Chef’s Knife', price: '£129', tag: 'FLAGSHIP', emoji: '🔪', rating: 4.9, reviews: 3420, cat: 'knives', special: true, desc: 'A 20 cm chef’s knife, ground and finished by hand.', features: ['Lifetime sharpening', 'Oak handle'], review: { who: 'Pete S.', text: 'The best thing in my kitchen.' } },
      { name: 'Three-Knife Set', price: '£249', tag: 'BESTSELLER', emoji: '🎁', rating: 4.9, reviews: 1860, cat: 'knives', desc: 'Chef’s, utility and paring knives in a gift box.', features: ['Engraving included'], review: { who: 'Amara O.', text: 'A wedding present that will outlast us.' } },
      { name: 'Honing Steel', price: '£35', emoji: '🪒', rating: 4.8, reviews: 1240, cat: 'care', desc: 'Keeps the edge straight between sharpenings.', features: ['25 cm'], review: { who: 'Winston A.', text: 'Proper steel.' } },
      { name: 'Whetstone Pair', price: '£59', tag: 'SPECIAL', emoji: '🪨', rating: 4.8, reviews: 960, cat: 'care', special: true, desc: 'Coarse and fine stones with a guide.', features: ['Non-slip base'], review: { who: 'Fran D.', text: 'Learned to sharpen in an evening.' } }
    ],
    shopCats: [ { key: 'knives', label: 'Knives', icon: '🔪' }, { key: 'care', label: 'Care', icon: '🪨' } ],
    feed: [ { type: 'post', sub: 'Brand post · 1h', text: 'Sparks from the grinding wheel, the way every <b>Hallam Chef’s Knife</b> starts.', img: U('1526634140919-468dc3ae3870', 800, 440), eng: '♡ 8.6K · 💬 610', product: 0 } ],
    events: [ { zoneEvent: true, tag: 'SALE', title: 'Black Friday: free engraving', when: 'Nov 27 · All day', desc: 'Free engraving on every knife and set, one day only.', registered: 1620, capacity: 4000 } ],
    about: { founded: 'Sheffield · 1921', story: 'Four generations of cutlers in the same workshop off the Moor.', milestones: [['1921', 'The first workshop'], ['1998', 'The chef’s knife'], ['2026', 'Brand Zone on SteelXX']], values: ['Made in Sheffield', 'Sharpened free for life', 'Apprentices trained in-house'] } }),

  'ironleaf-cookware': brand({ key: 'ironleaf-cookware', name: 'Ironleaf Cookware', color: '#B91C1C', gradient: MOLTEN, tier: 'Brand Zone',
    tagline: 'Carbon-steel pans that last a lifetime', stats: { followers: '86.2K', content: '320', products: '16' },
    ad: { badge: 'New', img: U('1571590946238-a0ba990d12a9', 760, 760), hl: 'One pan. Forever.', sub: 'Carbon-steel pans, spun in Britain.', meta: 'From £39' },
    products: [
      { name: 'Ironleaf Frying Pan 28', price: '£69', tag: 'FLAGSHIP', emoji: '🍳', rating: 4.8, reviews: 2860, cat: 'pans', special: true, desc: 'A carbon-steel frying pan that gets better with every use.', features: ['Pre-seasoned', 'Oven-safe'], review: { who: 'Pete S.', text: 'Non-stick after a month, no coating.' } },
      { name: 'Wok 32', price: '£79', tag: 'BESTSELLER', emoji: '🥘', rating: 4.8, reviews: 1460, cat: 'pans', desc: 'Light, fast and very hot.', features: ['Works on induction'], review: { who: 'Amara O.', text: 'Proper wok hei at home.' } },
      { name: 'Crêpe Pan', price: '£39', emoji: '🥞', rating: 4.7, reviews: 860, cat: 'pans', desc: 'Low sides, perfect pancakes.', features: ['24 cm'], review: { who: 'Fran D.', text: 'Pancake day sorted.' } },
      { name: 'Seasoning Kit', price: '£19', tag: 'SPECIAL', emoji: '🧴', rating: 4.7, reviews: 640, cat: 'care', special: true, desc: 'Oil, a scrubber and a guide.', features: ['Lasts a year'], review: { who: 'Winston A.', text: 'Revived an old pan.' } }
    ],
    shopCats: [ { key: 'pans', label: 'Pans', icon: '🍳' }, { key: 'care', label: 'Care', icon: '🧴' } ],
    feed: [ { type: 'post', sub: 'Brand post · 1d', text: 'Every pan starts as molten metal. Ours are spun, riveted and seasoned in Walsall: the <b>Frying Pan 28</b>.', img: U('1684259499227-e9844ab79747', 800, 440), eng: '♡ 4.4K · 💬 280', product: 0 } ],
    events: [ { zoneEvent: true, tag: 'SALE', title: 'Black Friday: 25% off pans', when: 'Nov 27 · All day', desc: 'A quarter off every pan, one day only.', registered: 1080, capacity: 3000 } ],
    about: { founded: 'Walsall · 2016', story: 'A metal spinner and a chef who wanted pans you never throw away.', milestones: [['2016', 'The first pan'], ['2022', 'The wok'], ['2026', 'Brand Zone on SteelXX']], values: ['No coatings', 'Made in the Black Country', 'Repaired, not replaced'] } }),

  'arcwright-welding': brand({ key: 'arcwright-welding', name: 'Arcwright Welding', color: '#60A5FA', gradient: ARC, tier: 'Brand Zone',
    tagline: 'Welders and kit for home workshops', stats: { followers: '72.6K', content: '290', products: '34' },
    ad: { badge: 'Featured', img: U('1507497806295-753c4108560c', 760, 760), hl: 'Your first weld, tonight.', sub: 'Welders that run off a normal plug.', meta: 'From £29' },
    products: [
      { name: 'Arcwright Home MIG', price: '£389', tag: 'FLAGSHIP', emoji: '⚡', rating: 4.8, reviews: 2240, cat: 'welders', special: true, desc: 'A MIG welder for home workshops, from a 13-amp plug.', features: ['Gasless or gas', 'Settings guide on the lid'], review: { who: 'Fran D.', text: 'Welded my first gate with it.' } },
      { name: 'Auto-Dark Helmet', price: '£79', tag: 'BESTSELLER', emoji: '🪖', rating: 4.8, reviews: 3120, cat: 'safety', desc: 'Darkens in a split second when the arc strikes.', features: ['Big clear view'], review: { who: 'Gareth R.', text: 'What I tell every student to buy.' } },
      { name: 'Stick Welder 160', price: '£189', emoji: '🔥', rating: 4.7, reviews: 1240, cat: 'welders', desc: 'Simple, tough and good outdoors.', features: ['Carry strap'], review: { who: 'Winston A.', text: 'Fixes anything on the farm.' } },
      { name: 'Gloves and Apron Set', price: '£29', tag: 'SPECIAL', emoji: '🧤', rating: 4.7, reviews: 1860, cat: 'safety', special: true, desc: 'Leather gloves and apron for welding.', features: ['Three sizes'], review: { who: 'Pete S.', text: 'Saved my favourite jumper.' } }
    ],
    shopCats: [ { key: 'welders', label: 'Welders', icon: '⚡' }, { key: 'safety', label: 'Safety', icon: '🪖' } ],
    feed: [ { type: 'post', sub: 'Brand post · 4h', text: 'A clean bead, a quiet evening, the <b>Home MIG</b> doing its thing.', img: U('1698664683348-f9f35b809821', 800, 440), eng: '♡ 5.4K · 💬 380', product: 0 } ],
    events: [ { zoneEvent: true, tag: 'EVENT', title: 'Beginners’ welding night', when: 'Dec 2 · 19:00', desc: 'Set up, strike an arc and run a bead, live with Q&A.', registered: 720, capacity: 2000 } ],
    about: { founded: 'Wrexham · 2010', story: 'Farm welders who wanted home kit that was simple and tough.', milestones: [['2010', 'The stick welder'], ['2019', 'Home MIG'], ['2026', 'Brand Zone on SteelXX']], values: ['Safety first', 'Spares for ten years', 'Help by phone, from welders'] } }),

  'don-valley-fabrication': { key: 'don-valley-fabrication', kind: 'business', gw: 'steel', name: 'Don Valley Fabrication', color: '#F97316', gradient: MOLTEN, img: U('1504328345606-18bbc8c9d7d1', 900, 500),
    tier: 'Verified', category: 'Structural steel fabrication', tagline: 'Steel frames for buildings and bridges.',
    about: { founded: 'Sheffield · 1988', story: 'We cut, drill, weld and paint steel frames for schools, warehouses, footbridges and homes.' },
    stats: { years: 38, staff: 210, clients: '2,400 projects' },
    caps: [ { name: 'Fabrication', detail: 'Beams, columns and trusses.' }, { name: 'Welding', detail: 'Coded welders for every job.' }, { name: 'Erection', detail: 'Our own crews on site.' } ],
    specs: { moq: 'One beam', lead: '2 to 12 weeks', regions: 'UK', certs: ['Structural steel quality certified', 'Fully insured', 'Apprenticeship scheme'] },
    supplies: [ { kind: 'brand', key: 'northforge-steel', what: 'Fabricates Northforge Green Plate into frames' } ],
    cases: [ { title: 'A low-carbon school', text: 'A whole school frame in recycled steel.' } ],
    feed: [ { sub: 'Shop floor · 3d', text: 'A footbridge truss, welded and ready for paint.' } ],
    contact: { person: 'Helen Barker, Estimating', response: 'Replies within two working days' } },

  'ferrocycle': { key: 'ferrocycle', kind: 'business', gw: 'steel', name: 'Ferrocycle', color: '#A8A29E', gradient: STONE, img: U('1781359502905-22bcd2353ab2', 900, 500),
    tier: 'Verified', category: 'Scrap metal recycling', tagline: 'Every scrap of steel, back into steel.',
    about: { founded: 'Scunthorpe · 2004', story: 'We collect, sort and shred scrap steel from cars, buildings and factories, ready to be melted into new steel.' },
    stats: { years: 22, staff: 160, clients: '900,000 tonnes a year' },
    caps: [ { name: 'Collection', detail: 'Skips, bins and demolition sites.' }, { name: 'Sorting', detail: 'Magnets, sensors and people.' }, { name: 'Supply', detail: 'Graded scrap for electric furnaces.' } ],
    specs: { moq: 'One skip', lead: '1 to 5 days', regions: 'North of England', certs: ['Licensed waste site', 'Independently audited', 'Fully insured'] },
    supplies: [ { kind: 'brand', key: 'northforge-steel', what: 'Graded scrap for Northforge’s electric furnace' } ],
    cases: [ { title: 'A power station recycled', text: 'Forty thousand tonnes of steel from a demolished power station.' } ],
    feed: [ { sub: 'Yard · 5d', text: 'A new sorting line that spots copper before it reaches the furnace.' } ],
    contact: { person: 'Darren Holt, Collections', response: 'Replies within one working day' } }
});

/* events in the Events tab */
gxEvents('steel', [
  { gw: 'steel', zone: 'northforge-steel', type: 'Live', icon: '🔴', live: true, time: 'Live Now', title: 'Northforge Live · first pour from the new furnace', desc: 'Watch the first melt from an electric arc furnace, powered by renewables.' },
  { gw: 'steel', zone: 'hallam-blades', type: 'Sale', icon: '🔪', time: 'Nov 27', title: 'Hallam Blades Black Friday', desc: 'Free engraving on every knife and set.' },
  { gw: 'steel', zone: 'ironleaf-cookware', type: 'Sale', icon: '🍳', time: 'Nov 27', title: 'Ironleaf Black Friday', desc: '25% off every pan.' },
  { gw: 'steel', type: 'Event', icon: '⚡', time: 'Nov 30', title: 'Live demo: welding thin sheet', desc: 'Metalworkers’ Bench shows how to weld thin steel without blowing holes.' },
  { gw: 'steel', zone: 'arcwright-welding', type: 'Event', icon: '🪖', time: 'Dec 2', title: 'Beginners’ welding night', desc: 'Set up, strike an arc and run a bead, live with Arcwright.' },
  { gw: 'steel', type: 'Event', icon: '🎤', time: 'Dec 2', title: 'Talk: the story of stainless, Sheffield', desc: 'Sheffield Steel City on the city’s most famous invention.' },
  { gw: 'steel', type: 'Event', icon: '🎄', time: 'Dec 12', title: 'Christmas makers’ market, Sheffield', desc: 'Knives, pans and forged gifts from local makers.' },
  { gw: 'steel', type: 'Event', icon: '🏆', time: 'Dec 14', title: 'Christmas build-off', desc: 'Metalworkers’ Bench shares its best Christmas projects.' }
]);
})();
/* ═════════ /STEELXX ═════════ */
