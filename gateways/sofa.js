/* ═════════ SOFAXX — a Home demo gateway (2026-11-19, Sean) ═════════
   Built like HotelXX: theme, feed, 4 Brand Zones, 2 Business Zones, 3 Pros, 2 communities, 3 apps, events.
   Palette (light): oat linen, terracotta, sage. Home sector: Home (living).
   Brands, pros and communities are fictional; places are real. Source of truth: _lab/home85/sofaxx-block.js. */
(function(){
const U = (id, w, h) => `https://images.unsplash.com/photo-${id}?w=${w}&h=${h}&fit=crop&q=75`;
const TERRA = 'linear-gradient(135deg,#D9805F,#A3432A)', SAGE = 'linear-gradient(135deg,#9DB59A,#5C7A59)', OAT = 'linear-gradient(135deg,#D8C3A5,#A0845C)', PLUM = 'linear-gradient(135deg,#B48AA8,#6E4565)';

GATEWAYS.sofa = {
  name: 'SofaXX', domain: 'sofaxx.com', emoji: '🛋️', sector: 'living', live: true,
  tagline: 'The Sofa Universe',
  theme: {
    bg: '#FAF6F0', text: '#2B2420', cardBg: '#FFFFFF', cardBorder: 'rgba(163,67,42,.12)',
    headerBg: 'linear-gradient(180deg,#F1E6D8,#FAF6F0)', accent: '#C2593A', accentAlt: '#5C7A59', dark: false
  },
  gradient: 'linear-gradient(135deg,#A3432A,#D9805F,#D8C3A5)',
  stats: { members: '3.8M', brands: '5,200+', agents: '64' },
  spaces: ['All Feed', 'Sofa Shopping', 'Small Spaces', 'Fabrics & Care', 'Reupholstery', 'Living Rooms'],
  trending: ['#WillItFit', '#Reupholstered', '#CosySeason'],
  brandZones: [
    { key: 'hearth-hollow', name: 'Hearth & Hollow', color: '#C2593A', tier: 'Founding Partner', tag: 'Sofas made by hand in High Wycombe' },
    { key: 'cushionry', name: 'Cushionry', color: '#B48AA8', tier: 'Brand Zone', tag: 'Cushions and covers, made to fit' },
    { key: 'woolpack', name: 'Woolpack Throws', color: '#A0845C', tier: 'Brand Zone', tag: 'Wool throws from a Halifax mill' },
    { key: 'settle-down', name: 'Settle Down', color: '#5C7A59', tier: 'Brand Zone', tag: 'Sofa beds and sofas for small rooms' }
  ],
  apps: [
    { name: 'Fit Check', color: '#C2593A', desc: 'Will the sofa get through the door? Find out first', key: 'fit-check', url: 'apps/fit-check.html',
      dev: 'Doorway Labs', rating: '4.9', users: '1.4M', perms: ['profile', 'feed'],
      tagline: 'Measure twice. Order once.',
      about: 'Fit Check tells you whether a sofa will get through your front door, along the hall and into the room, before you buy it. Enter the sofa’s width, depth and height and your narrowest doorway, and it checks upright, on its back and the diagonal tilt that delivery teams use.',
      features: ['Upright, on-its-back and tilted checks', 'Saves your doorways once', 'Compare sofas side by side', 'Share a fit to SofaXX'],
      shots: ['apps/fit-check/shot-1.jpg', 'apps/fit-check/shot-2.jpg', 'apps/fit-check/shot-3.jpg'],
      version: '3.6', size: '9 KB',
      updates: [ { v: '3.6', ago: 2, notes: 'The diagonal tilt check.' }, { v: '3.2', ago: 70, notes: 'Compare up to four sofas.' }, { v: '2.8', ago: 220, notes: 'Signed in with GENEXXO.' } ],
      reviews: [ { who: '@flat4_fran', stars: 5, ago: 1, text: 'Told me the corner sofa would not make it up our stairs. It would not have.' }, { who: '@newbuild_nate', stars: 5, ago: 8, text: 'Saved me a £90 return fee.' }, { who: '@cosy_kez', stars: 4, ago: 20, text: 'Would love a stairs-turn check too.' } ] },
    { name: 'Fabric Finder', color: '#5C7A59', desc: 'Pick a sofa fabric that suits your home, pets and children', key: 'fabric-finder', url: 'apps/fabric-finder.html',
      dev: 'Cushionry', rating: '4.7', users: '520K', perms: ['profile', 'feed'],
      tagline: 'The right fabric for real life.',
      about: 'Fabric Finder asks about your home (dogs, cats, children, sunny windows) and suggests fabrics that will last, with their rub count, how to clean them and how they feel. Order free swatches straight from the app.',
      features: ['Fabrics matched to your home', 'Rub counts in plain English', 'How to clean each one', 'Order swatches in one tap'],
      shots: ['apps/fabric-finder/shot-1.jpg', 'apps/fabric-finder/shot-2.jpg', 'apps/fabric-finder/shot-3.jpg'],
      version: '2.2', size: '9 KB',
      updates: [ { v: '2.2', ago: 4, notes: 'Cleaning codes explained.' }, { v: '2.0', ago: 80, notes: 'Swatch ordering.' }, { v: '1.5', ago: 200, notes: 'Signed in with GENEXXO.' } ],
      reviews: [ { who: '@twodogs_tash', stars: 5, ago: 3, text: 'Two spaniels, one cream sofa, zero regrets. Thank you.' }, { who: '@cosy_kez', stars: 5, ago: 12, text: 'Finally understand what a rub count is.' }, { who: '@flat4_fran', stars: 4, ago: 28, text: 'Want more velvet options.' } ] },
    { name: 'Room Planner', color: '#A0845C', desc: 'Lay out your living room before you buy', key: 'room-planner', url: 'apps/room-planner.html',
      dev: 'Hearth & Hollow', rating: '4.6', users: '690K', perms: ['profile', 'feed'],
      tagline: 'See the room before the van comes.',
      about: 'Room Planner draws your living room to scale and lets you try sofas, a chair and a coffee table in different spots. It warns you when a walkway is too narrow and shows how far the sofa sits from the television.',
      features: ['Your room, drawn to scale', 'Try layouts in seconds', 'Walkway warnings', 'Sofa-to-TV distance'],
      shots: ['apps/room-planner/shot-1.jpg', 'apps/room-planner/shot-2.jpg', 'apps/room-planner/shot-3.jpg'],
      version: '1.9', size: '10 KB',
      updates: [ { v: '1.9', ago: 6, notes: 'Walkway warnings.' }, { v: '1.6', ago: 90, notes: 'Three ready-made layouts.' }, { v: '1.2', ago: 240, notes: 'Signed in with GENEXXO.' } ],
      reviews: [ { who: '@newbuild_nate', stars: 5, ago: 4, text: 'Our new-build living room is tiny. This made it work.' }, { who: '@renter_ro', stars: 4, ago: 15, text: 'Simple and quick.' }, { who: '@twodogs_tash', stars: 4, ago: 33, text: 'Needs a dog bed piece!' } ] }
  ],
  pros: [
    { key: 'nell-hartley-upholstery', name: 'Nell Hartley Upholstery', color: '#C2593A', tag: 'Reupholstery, re-springing and new covers · traditional and modern', role: 'Upholsterer',
      img: U('1592275772614-ec71b19e326f', 800, 800), base: 'Bristol, UK', langs: 'English', years: 18, rating: '4.9', reviewsN: 486, cur: '£',
      creds: ['Trained in traditional upholstery', 'Member of a UK upholsterers’ guild', 'Fire-safety compliant fabrics only'],
      about: 'Nell brings good old sofas back to life: new springs, new webbing, new filling and a fabric you choose. A well-made frame can outlast three covers, and reupholstering is often cheaper than you think.',
      services: [ { id: 'quote', name: 'Home visit and quote', dur: '45 minutes', price: 0, desc: 'Free within ten miles of Bristol.' },
                  { id: 'chair', name: 'Armchair reupholstery', dur: 'About 3 weeks', price: 420, desc: 'Strip, re-web, refill and recover. Fabric extra.' },
                  { id: 'sofa', name: 'Three-seat sofa reupholstery', dur: 'About 5 weeks', price: 980, desc: 'The full job, collected and delivered. Fabric extra.' } ],
      avail: { days: [1, 2, 3, 4, 5], times: ['09:00', '13:00', '16:00'] },
      reviews: [ { who: '@cosy_kez', stars: 5, ago: 5, text: 'My gran’s sofa, better than new. I sobbed.' }, { who: '@renter_ro', stars: 5, ago: 17, text: 'Honest about what was worth doing and what was not.' }, { who: '@flat4_fran', stars: 5, ago: 42, text: 'Beautiful work and on time.' } ],
      posts: [ { ago: 1, text: 'Lift the sofa at one end. If it twists or creaks, it is a weak frame. A good one lifts like a plank.' }, { ago: 6, text: 'Booking for February now.' } ],
      tier: 'Pro Zone', verified: true },
    { key: 'marcus-bell-interiors', name: 'Marcus Bell Interiors', color: '#5C7A59', tag: 'Living rooms for real life · small spaces, rentals, families', role: 'Interior designer',
      img: U('1629425733761-caae3b5f2e50', 800, 800), base: 'London, UK · and online', langs: 'English, French', years: 12, rating: '4.8', reviewsN: 302, cur: '£',
      creds: ['Interior design diploma', 'Former head of design at a furniture retailer', 'Member of a UK interior design society'],
      about: 'Marcus designs living rooms that work hard: rentals you cannot paint, flats with one window, and family rooms where the sofa is also a trampoline. He starts with the sofa, because everything else follows it.',
      services: [ { id: 'call', name: 'Living room video call', dur: '45 minutes', price: 65, desc: 'Show Marcus the room; leave with a plan and a shopping list.' },
                  { id: 'plan', name: 'Room design plan', dur: 'Delivered in 10 days', price: 340, desc: 'A scaled layout, a colour scheme and three sofa picks.' },
                  { id: 'rental', name: 'Rental refresh', dur: 'Delivered in 7 days', price: 220, desc: 'Changes you can take with you when you move.' } ],
      avail: { days: [1, 3, 4, 5], times: ['10:00', '14:00', '19:00'] },
      reviews: [ { who: '@renter_ro', stars: 5, ago: 7, text: 'Our rental finally feels like ours.' }, { who: '@newbuild_nate', stars: 5, ago: 19, text: 'The plan said “smaller sofa, bigger rug”. He was right.' }, { who: '@twodogs_tash', stars: 4, ago: 44, text: 'Great ideas, very practical.' } ],
      posts: [ { ago: 2, text: 'Leave at least 45cm between the sofa and the coffee table, and 90cm for any walkway.' } ],
      tier: 'Pro Zone', verified: true },
    { key: 'aisha-karim-cleaning', name: 'Aisha Karim Sofa Care', color: '#A0845C', tag: 'Sofa and fabric cleaning · stains, pets, end of tenancy', role: 'Upholstery cleaner',
      img: U('1758600587839-56ba05596c69', 800, 800), base: 'Leeds, UK', langs: 'English, Urdu', years: 9, rating: '4.9', reviewsN: 628, cur: '£',
      creds: ['Trained fabric-care technician', 'Pet-safe and low-chemical products', 'Fully insured'],
      about: 'Aisha cleans sofas, chairs and rugs in your home across West Yorkshire. She reads the cleaning code on the label first, tests a hidden patch, and tells you honestly which stains will move and which will not.',
      services: [ { id: 'sofa', name: 'Sofa deep clean', dur: '2 hours', price: 95, desc: 'Up to a three-seat sofa and its cushions.' },
                  { id: 'stain', name: 'Stain call-out', dur: '1 hour', price: 55, desc: 'Wine, coffee, crayon, pets. The sooner the better.' },
                  { id: 'guard', name: 'Fabric protector', dur: '30 minutes', price: 40, desc: 'Added after a clean, to slow the next spill.' } ],
      avail: { days: [1, 2, 4, 5, 6], times: ['09:00', '12:00', '15:00'] },
      reviews: [ { who: '@twodogs_tash', stars: 5, ago: 3, text: 'Two spaniels and a cream sofa. She is a miracle worker.' }, { who: '@renter_ro', stars: 5, ago: 14, text: 'Got our whole deposit back.' }, { who: '@cosy_kez', stars: 5, ago: 30, text: 'Red wine, gone.' } ],
      posts: [ { ago: 3, text: 'Spill? Blot, never rub. Cold water only. Then call me.' } ],
      tier: 'Pro Zone', verified: true }
  ],
  communities: [
    { key: 'sofa-shoppers', name: 'Sofa Shoppers', domain: 'shoppers.sofaxx.com', color: '#C2593A', img: U('1616047006789-b7af5afb8c20', 900, 500),
      scope: 'Global', where: 'Every living room', members: 168000, online: 2140, tagline: 'Honest sofa advice from people who sit on them.',
      about: 'Buying a sofa is a big decision and a long wait. Share what you bought, how it has lasted, how long delivery really took, and whether it got through the door.',
      rules: ['Say what you paid and when', 'Photos of your own sofa only', 'No brand-bashing without details'],
      mods: ['@flat4_fran', '@cosy_kez'],
      threads: [ { t: 'Sofas that still look good after five years', by: '@cosy_kez', tag: 'LONG-TERM', replies: 924, ago: 0, votes: 2140 }, { t: 'Did not fit through the door: your stories', by: '@flat4_fran', tag: 'WILL IT FIT', replies: 412, ago: 1, votes: 860 }, { t: 'Velvet with a dog: madness or fine?', by: '@twodogs_tash', tag: 'Q&A', replies: 288, ago: 2, votes: 540 }, { t: 'Sofa beds you can actually sleep on', by: '@renter_ro', tag: 'SMALL SPACES', replies: 196, ago: 3, votes: 420 } ],
      events: [ { title: 'Ask an upholsterer: live Q&A', day: 3, time: '19:00', where: 'Online' }, { title: 'Will it fit? Measuring masterclass', day: 8, time: '12:30', where: 'Online' } ] },
    { key: 'bristol-upholstery-circle', name: 'Bristol Upholstery Circle', domain: 'bristol.sofaxx.com', color: '#5C7A59', img: U('1517858818796-d31fc694c92a', 900, 500),
      scope: 'Local', where: 'Bristol', members: 3200, online: 64, tagline: 'Saving good chairs, one stool at a time.',
      about: 'Beginners and old hands who rescue chairs and sofas around Bristol: workshop evenings, tool swaps, fabric off-cuts and a skip-find of the week.',
      rules: ['Share tools, share tips', 'Fire-safe fabrics only', 'Credit the maker'],
      mods: ['@nell_hartley', '@stool_sam'],
      threads: [ { t: 'Skip find of the week: a 1950s armchair', by: '@stool_sam', tag: 'FINDS', replies: 48, ago: 0, votes: 132 }, { t: 'Where to buy webbing in Bristol?', by: '@first_chair_fi', tag: 'Q&A', replies: 22, ago: 1, votes: 40 }, { t: 'December workshop: drop-in stools', by: '@nell_hartley', tag: 'WORKSHOP', replies: 31, ago: 2, votes: 76 } ],
      events: [ { title: 'Drop-in stool workshop', day: 4, time: '18:30', where: 'Stokes Croft, Bristol' }, { title: 'Fabric off-cut swap', day: 10, time: '11:00', where: 'Bedminster, Bristol' } ] }
  ],
  feed: [
    { av: 'SX', avBg: TERRA, author: 'SofaXX Editorial', sub: 'Featured · Just now', badge: '★ FEATURED',
      text: 'The most-used thing in your home. Shopping, fabrics, small spaces, reupholstery and the people who make and mend them. Sofas, all in one place.',
      img: U('1771924648531-94af2b79dc96', 800, 600), eng: '♡ 41.2K · 💬 3.2K · ↗ 4.6K' },
    { av: 'KZ', avBg: PLUM, author: '@cosy_kez', sub: 'Living Rooms · Just now', badge: 'COMMUNITY',
      text: 'Ten weeks of waiting and she is finally here. Rust velvet, deep seats, and the cat claimed her in four minutes 🧡',
      img: U('1763827513396-5917fc6c84f3', 800, 600), eng: '♡ 14.8K · 💬 1.6K · ↗ 420' },
    { av: 'HH', avBg: TERRA, author: 'Hearth & Hollow', sub: 'Founding Partner · Brand Zone', badge: 'BRAND ZONE',
      text: 'The <b>Hollow Three-Seater</b>: a beech frame with a 25-year guarantee, deep feather-wrapped seats, and 60 fabrics. Made by hand in High Wycombe.',
      img: U('1590251024078-8a6d9f90b02d', 800, 600), eng: '♡ 9.6K · 💬 820 · ↗ 1.1K' },
    { av: 'CY', avBg: PLUM, author: 'Cushionry', sub: 'Brand Zone · 1h ago', badge: 'BRAND ZONE',
      text: 'Old sofa, new cushions. Our <b>made-to-measure covers</b> fit any seat cushion, from any brand, in four weeks.',
      img: U('1781888693414-ab97da521f2c', 800, 600), eng: '♡ 5.2K · 💬 410 · ↗ 380' },
    { av: 'NH', avBg: TERRA, author: 'Nell Hartley Upholstery', sub: 'Reupholstery · 2h ago', badge: 'PRO ZONE',
      text: 'Before and after: a 1960s sofa from a house clearance, re-sprung and recovered in green wool. The frame will easily do another sixty years.',
      img: U('1769142218868-a7c6d52c197e', 800, 600), eng: '♡ 8.4K · 💬 720 · ↗ 960' },
    { av: 'TS', avBg: SAGE, author: '@twodogs_tash', sub: 'Fabrics & Care · 4h ago', badge: 'COMMUNITY',
      text: 'Fabric Finder said tight-weave performance fabric for two spaniels. Eight months in and not a single pull. Recommend 🐕',
      img: U('1686178827149-6d55c72d81df', 800, 600), eng: '♡ 4.2K · 💬 380 · ↗ 190' },
    { av: 'MB', avBg: SAGE, author: 'Marcus Bell Interiors', sub: 'Small Spaces · 6h ago', badge: 'PRO ZONE',
      text: 'Small living room? Choose a sofa with legs you can see under. More floor showing makes the room feel bigger.',
      img: U('1583847268964-b28dc8f51f92', 800, 600), eng: '♡ 3.6K · 💬 240 · ↗ 520' }
  ],
  prompts: ['Will a 220cm sofa fit through a 76cm door?', 'Which sofa fabric is best with a dog?', 'Is it worth reupholstering my old sofa?', 'Find a sofa bed for a small spare room under £900'],
  businesses: ['pennine-foam', 'careful-carry']
};

/* the four Brand Zones and two Business Zones */
const brand = (o) => Object.assign({ kind: 'brand', gw: 'sofa', verified: true }, o);
Object.assign(ZONES, {
  'hearth-hollow': brand({ key: 'hearth-hollow', name: 'Hearth & Hollow', color: '#C2593A', gradient: TERRA, tier: 'Founding Partner',
    tagline: 'Sofas made by hand in High Wycombe', stats: { followers: '186K', content: '940', products: '38' },
    ad: { badge: 'Featured', img: U('1590251024078-8a6d9f90b02d', 760, 760), hl: 'The Hollow Three-Seater.', sub: 'Beech frame, 25-year guarantee, 60 fabrics.', meta: 'From £95' },
    products: [
      { name: 'Hollow Three-Seater', price: '£1,690', tag: 'FLAGSHIP', emoji: '🛋️', rating: 4.9, reviews: 2840, cat: 'sofas', special: true, desc: 'A solid beech frame, hand-tied springs and deep feather-wrapped seats, in 60 fabrics.', features: ['W 214 · D 96 · H 84 cm', '25-year frame guarantee', 'Made to order in 8 weeks'], review: { who: 'Kez M.', text: 'Sat on it in the showroom and did not want to get up.' } },
      { name: 'Hollow Snuggler', price: '£1,190', tag: 'BESTSELLER', emoji: '🪑', rating: 4.8, reviews: 1960, cat: 'chairs', desc: 'Bigger than a chair, smaller than a sofa. Room for one and a dog, or two who like each other.', features: ['W 140 · D 96 · H 84 cm'], review: { who: 'Tash B.', text: 'The dog’s favourite place in the house.' } },
      { name: 'Corner Sofa (left or right)', price: '£2,480', emoji: '📐', rating: 4.8, reviews: 1120, cat: 'sofas', desc: 'Our three-seater with a chaise, comes in two pieces to get through tight doors.', features: ['Arrives in two pieces', 'Made to order'], review: { who: 'Nate O.', text: 'Two pieces made all the difference on our stairs.' } },
      { name: 'Fabric Swatch Pack', price: '£3', tag: 'SPECIAL', emoji: '🧵', rating: 4.9, reviews: 5400, cat: 'swatches', special: true, desc: 'Up to eight fabric samples, posted to your door. The £3 comes off your sofa.', features: ['Refunded on any sofa order'], review: { who: 'Fran L.', text: 'Lived with them for a week. Glad I did.' } },
      { name: 'Footstool', price: '£320', emoji: '🟫', rating: 4.7, reviews: 860, cat: 'chairs', desc: 'Matches any of our sofas. Lid lifts for blankets.', features: ['Storage inside'], review: { who: 'Ro P.', text: 'Where all the blankets live now.' } }
    ],
    shopCats: [ { key: 'sofas', label: 'Sofas', icon: '🛋️' }, { key: 'chairs', label: 'Chairs & stools', icon: '🪑' }, { key: 'swatches', label: 'Swatches', icon: '🧵' } ],
    feed: [
      { type: 'post', sub: 'Brand post · 2h', text: 'The <b>Hollow Three-Seater</b> in moss wool, just finished in the workshop.', img: U('1775029676739-86443af4010d', 800, 440), eng: '♡ 9.6K · 💬 820 · ↗ 1.1K', product: 0 },
      { type: 'post', sub: 'In the workshop · Yesterday', text: 'Every frame is signed by the person who built it. Lift the bottom cloth on yours and say hello to Dev.', img: U('1759722667832-48e555120458', 800, 440), eng: '♡ 4.4K · 💬 310' },
      { type: 'community', who: 'Fran L.', whoBg: SAGE, sub: 'Community · 1d', text: 'Our doorway is 74cm. Will the Hollow Three-Seater get in?', eng: '♡ 210 · 💬 46', reply: 'Hi Fran! With its feet off the Hollow is 74cm high, so a 74cm door is right on the limit. Pop your hall and stair measurements into Fit Check and send us the result: if it is too tight, we can build it with removable arms at no extra cost. 📐' }
    ],
    events: [ { zoneEvent: true, tag: 'DEADLINE', title: 'Last order for Christmas delivery', when: 'Nov 30 · 23:59', desc: 'In-stock sofas ordered by 30 November arrive before Christmas.', registered: 1840, capacity: 4000 } ],
    about: { founded: 'High Wycombe · 1962', story: 'Three generations of chair-makers in the town that built Britain’s furniture. We still make every frame by hand, and we joined SofaXX as Founding Partner because this is where people talk about sofas honestly.', milestones: [['1962', 'The first workshop on Desborough Road'], ['2015', 'Selling direct, made to order'], ['2026', 'Founding Partner on SofaXX']], values: ['Made by hand in Britain', 'Frames for a lifetime', 'Repair before replace'] } }),

  'cushionry': brand({ key: 'cushionry', name: 'Cushionry', color: '#B48AA8', gradient: PLUM, tier: 'Brand Zone',
    tagline: 'Cushions and covers, made to fit', stats: { followers: '92.6K', content: '410', products: '120' },
    ad: { badge: 'New', img: U('1781888693414-ab97da521f2c', 760, 760), hl: 'Old sofa, new look.', sub: 'Made-to-measure covers for any seat cushion.', meta: 'From £22' },
    products: [
      { name: 'Made-to-Measure Seat Covers (set of 3)', price: '£180', tag: 'FLAGSHIP', emoji: '📏', rating: 4.8, reviews: 2180, cat: 'covers', special: true, desc: 'New covers for any seat cushions, any brand, cut to your measurements.', features: ['80 fabrics', 'Zipped and washable', 'Ready in 4 weeks'], review: { who: 'Ro P.', text: 'The sofa looks brand new for a fraction of the price.' } },
      { name: 'Velvet Scatter Cushion', price: '£32', tag: 'BESTSELLER', emoji: '🟧', rating: 4.8, reviews: 4320, cat: 'cushions', desc: 'Feather-filled, 50cm, in 24 velvets.', features: ['Feather or recycled fill'], review: { who: 'Kez M.', text: 'Plump and heavy, like a proper cushion.' } },
      { name: 'Seat Cushion Refill', price: '£45', emoji: '🪶', rating: 4.7, reviews: 1240, cat: 'refills', desc: 'New foam and fibre wrap for a seat cushion that has gone flat.', features: ['Cut to size'], review: { who: 'Fran L.', text: 'No more sinking.' } },
      { name: 'Cushion Bundle (4)', price: '£99', tag: 'SPECIAL', emoji: '🎁', rating: 4.9, reviews: 960, cat: 'cushions', special: true, desc: 'Four cushions in a palette our designers put together.', features: ['Six palettes'], review: { who: 'Nate O.', text: 'No more guessing what goes with what.' } }
    ],
    shopCats: [ { key: 'covers', label: 'Covers', icon: '📏' }, { key: 'cushions', label: 'Cushions', icon: '🟧' }, { key: 'refills', label: 'Refills', icon: '🪶' } ],
    feed: [ { type: 'post', sub: 'Brand post · 1h', text: 'Twenty-four velvets. Pick four and we will tell you if they work together.', img: U('1553114552-c4ece3a33c93', 800, 440), eng: '♡ 5.2K · 💬 410', product: 1 } ],
    events: [ { zoneEvent: true, tag: 'SALE', title: 'Black Friday cushion sale', when: 'Nov 27 · All day', desc: 'A third off every scatter cushion for one day.', registered: 3620, capacity: 9000 } ],
    about: { founded: 'Nottingham · 2017', story: 'A family of curtain-makers who started cutting covers for people’s tired sofas. Now we do it for 30,000 homes a year.', milestones: [['2017', 'The first made-to-measure cover'], ['2023', 'Any brand, any cushion'], ['2026', 'Brand Zone on SofaXX']], values: ['Refresh, don’t replace', 'Cut in Nottingham', 'Washable, always'] } }),

  'woolpack': brand({ key: 'woolpack', name: 'Woolpack Throws', color: '#A0845C', gradient: OAT, tier: 'Brand Zone',
    tagline: 'Wool throws from a Halifax mill', stats: { followers: '54.8K', content: '260', products: '44' },
    ad: { badge: 'Featured', img: U('1762803840978-e521a04013f2', 760, 760), hl: 'Cosy season.', sub: 'Pure wool throws, woven in Halifax.', meta: 'From £28' },
    products: [
      { name: 'Pennine Wool Throw', price: '£89', tag: 'FLAGSHIP', emoji: '🧶', rating: 4.9, reviews: 2640, cat: 'throws', special: true, desc: 'Pure British wool, woven on our looms in Halifax, in twelve heathery colours.', features: ['130 × 180 cm', 'British wool'], review: { who: 'Kez M.', text: 'Heavy, warm and it does not shed.' } },
      { name: 'Herringbone Blanket', price: '£120', tag: 'BESTSELLER', emoji: '🟫', rating: 4.8, reviews: 1380, cat: 'throws', desc: 'Big enough for two on the sofa.', features: ['180 × 230 cm'], review: { who: 'Tash B.', text: 'The dogs fight us for it.' } },
      { name: 'Lap Blanket', price: '£28', emoji: '🧣', rating: 4.7, reviews: 980, cat: 'small', desc: 'For one, for the cold end of the sofa.', features: ['70 × 100 cm'], review: { who: 'Ro P.', text: 'Bought one for my mum and one for me.' } },
      { name: 'Mill Seconds Throw', price: '£45', tag: 'SPECIAL', emoji: '♻️', rating: 4.8, reviews: 1760, cat: 'throws', special: true, desc: 'A tiny weaving slip, half the price, just as warm.', features: ['While stocks last'], review: { who: 'Fran L.', text: 'Could not find the flaw if I tried.' } }
    ],
    shopCats: [ { key: 'throws', label: 'Throws', icon: '🧶' }, { key: 'small', label: 'Lap blankets', icon: '🧣' } ],
    feed: [ { type: 'post', sub: 'Brand post · 5h', text: 'The looms are running seven days for Christmas. <b>Pennine Wool Throws</b> in twelve colours.', img: U('1698936061086-2bf99c7b9fc5', 800, 440), eng: '♡ 3.1K · 💬 190', product: 0 } ],
    events: [ { zoneEvent: true, tag: 'EVENT', title: 'Mill open day, Halifax', when: 'Dec 5 · 10:00', desc: 'See the looms running, then buy seconds in the mill shop.', registered: 640, capacity: 1200 } ],
    about: { founded: 'Halifax · 1891', story: 'A Calder Valley mill that has woven wool for 135 years. We still buy fleece from Yorkshire and Lancashire farms.', milestones: [['1891', 'The mill opens'], ['2019', 'Selling direct'], ['2026', 'Brand Zone on SofaXX']], values: ['British wool only', 'Woven, not printed', 'Seconds, never wasted'] } }),

  'settle-down': brand({ key: 'settle-down', name: 'Settle Down', color: '#5C7A59', gradient: SAGE, tier: 'Brand Zone',
    tagline: 'Sofa beds and sofas for small rooms', stats: { followers: '77.3K', content: '480', products: '26' },
    ad: { badge: 'Live', img: U('1768946131549-f03cafef7bc1', 760, 760), hl: 'Sofa by day. Bed by night.', sub: 'A real mattress, in a sofa 180cm wide.', meta: 'From £649' },
    products: [
      { name: 'The Spare Room Sofa Bed', price: '£1,090', tag: 'FLAGSHIP', emoji: '🛏️', rating: 4.8, reviews: 1980, cat: 'sofabeds', special: true, desc: 'A 14cm pocket-sprung mattress that unfolds in one pull. A sofa first, a proper bed second.', features: ['W 182 · D 92 cm', 'Double mattress', 'Fits through a 70cm door'], review: { who: 'Ro P.', text: 'Guests say it is better than their bed at home.' } },
      { name: 'Studio Two-Seater', price: '£649', tag: 'BESTSELLER', emoji: '🛋️', rating: 4.7, reviews: 2460, cat: 'sofas', desc: 'A full-depth seat in 150cm, for flats and box rooms.', features: ['W 150 · D 86 cm', 'Legs unscrew'], review: { who: 'Fran L.', text: 'Up three floors with no trouble.' } },
      { name: 'Chair Bed', price: '£590', emoji: '💤', rating: 4.6, reviews: 720, cat: 'sofabeds', desc: 'A single bed hiding in an armchair.', features: ['Single mattress'], review: { who: 'Nate O.', text: 'The kids fight over it at sleepovers.' } },
      { name: 'Black Friday Sofa Bed Bundle', price: '£990', tag: 'SPECIAL', emoji: '🏷️', rating: 4.8, reviews: 410, cat: 'sofabeds', special: true, desc: 'The Spare Room Sofa Bed with a mattress topper and two pillows.', features: ['This week only'], review: { who: 'Kez M.', text: 'The topper makes it hotel-good.' } }
    ],
    shopCats: [ { key: 'sofabeds', label: 'Sofa beds', icon: '🛏️' }, { key: 'sofas', label: 'Small sofas', icon: '🛋️' } ],
    feed: [ { type: 'post', sub: 'Brand post · 3h', text: 'Christmas guests coming? The <b>Spare Room Sofa Bed</b> arrives in five days.', img: U('1605774337664-7a846e9cdf17', 800, 440), eng: '♡ 2.8K · 💬 260', product: 0 } ],
    events: [ { zoneEvent: true, tag: 'LIVE', title: 'Settle Down Live · Black Friday sofa beds', when: 'Live now', desc: 'Watch every sofa bed unfold, and ask how it sleeps, live.', registered: 2960, capacity: 7000 } ],
    about: { founded: 'Manchester · 2019', story: 'Made for people who live in flats: sofas that fit up the stairs and beds that hide in sofas.', milestones: [['2019', 'The Studio Two-Seater'], ['2024', 'The Spare Room Sofa Bed'], ['2026', 'Brand Zone on SofaXX']], values: ['Fits through the door', 'Real mattresses only', 'Small rooms, big comfort'] } }),

  'pennine-foam': { key: 'pennine-foam', kind: 'business', gw: 'sofa', name: 'Pennine Foam & Fibre', color: '#A0845C', gradient: OAT, img: U('1762803841519-25bb12e01579', 900, 500),
    tier: 'Verified', category: 'Upholstery materials', tagline: 'Foam, fibre and feathers for British sofa makers.',
    about: { founded: 'Rochdale · 1978', story: 'We cut seat foams, blow fibre wraps and supply feathers to sofa makers and upholsterers across the UK, from one-person workshops to big factories.' },
    stats: { years: 48, staff: 210, clients: '1,100 makers & upholsterers' },
    caps: [ { name: 'Cut-to-size foam', detail: 'Any shape, any density, fire-safe to UK rules.' }, { name: 'Fibre and feather wraps', detail: 'The soft layer that makes a seat feel expensive.' }, { name: 'Recycled foam', detail: 'Off-cuts bonded into firm bases and cushion cores.' } ],
    specs: { moq: 'One cushion', lead: 'Cut within 5 days', regions: 'UK-wide', certs: ['UK furniture fire-safety compliant', 'ISO 9001', 'ISO 14001'] },
    supplies: [ { kind: 'brand', key: 'hearth-hollow', what: 'Every seat foam and feather wrap since 1998' }, { kind: 'brand', key: 'cushionry', what: 'Seat cushion refills' } ],
    cases: [ { title: 'A Lancashire sofa factory', text: 'Moved to recycled-foam bases and cut foam waste by 40%.' } ],
    feed: [ { sub: 'Product · 4d', text: 'New: a recycled-core seat foam that keeps its height for ten years in our tests.' }, { sub: 'Notice · 1w', text: 'Christmas: last foam orders 16 December.' } ],
    contact: { person: 'Gary Holt, Trade accounts', response: 'Replies within 24 hours' } },

  'careful-carry': { key: 'careful-carry', kind: 'business', gw: 'sofa', name: 'Careful Carry Delivery', color: '#C2593A', gradient: TERRA, img: U('1550581190-9c1c48d21d6c', 900, 500),
    tier: 'Verified', category: 'Furniture delivery', tagline: 'Two-person delivery, into the room of your choice.',
    about: { founded: 'Birmingham · 2008', story: 'We deliver sofas for furniture makers across England and Wales: two people, into the room, packaging taken away. If it will not fit, we know before we arrive.' },
    stats: { years: 18, staff: 340, clients: '260 furniture brands' },
    caps: [ { name: 'Room-of-choice delivery', detail: 'Up the stairs, through the door, placed and unwrapped.' }, { name: 'Pre-delivery fit check', detail: 'We check your measurements a week before.' }, { name: 'Old sofa removal', detail: 'Taken away for reuse or recycling.' } ],
    specs: { moq: '10 deliveries a month', lead: 'Start within 2 weeks', regions: 'England & Wales', certs: ['Fully insured', 'Waste carrier licence', 'Living Wage employer'] },
    supplies: [ { kind: 'brand', key: 'hearth-hollow', what: 'All deliveries in the Midlands and the North' }, { kind: 'brand', key: 'settle-down', what: 'Nationwide sofa-bed delivery' } ],
    cases: [ { title: 'A sofa brand with a 6% return rate', text: 'Our fit checks brought “did not fit” returns down to under 1%.' } ],
    feed: [ { sub: 'News · 2d', text: 'Christmas slots are filling. Last deliveries 23 December.' } ],
    contact: { person: 'Leon Marsh, Brand partnerships', response: 'Replies within one working day' } }
});

/* events in the Events tab */
gxEvents('sofa', [
  { gw: 'sofa', zone: 'settle-down', type: 'Live', icon: '🔴', live: true, time: 'Live Now', title: 'Settle Down Live · Black Friday sofa beds', desc: 'Every sofa bed unfolded on camera, and your questions answered.' },
  { gw: 'sofa', type: 'Event', icon: '🪑', time: 'Nov 29', title: 'Ask an upholsterer: live Q&A', desc: 'Sofa Shoppers with Nell Hartley: is your old sofa worth saving?' },
  { gw: 'sofa', zone: 'cushionry', type: 'Sale', icon: '🟧', time: 'Nov 27', title: 'Cushionry Black Friday sale', desc: 'A third off every scatter cushion for one day.' },
  { gw: 'sofa', zone: 'hearth-hollow', type: 'Deadline', icon: '🛋️', time: 'Nov 30', title: 'Last order for Christmas delivery', desc: 'Hearth & Hollow: in-stock sofas ordered by midnight arrive before Christmas.' },
  { gw: 'sofa', type: 'Event', icon: '🔨', time: 'Dec 3', title: 'Drop-in stool workshop, Bristol', desc: 'Bristol Upholstery Circle: re-web and recover a stool in an evening. Tools provided.' },
  { gw: 'sofa', zone: 'woolpack', type: 'Event', icon: '🧶', time: 'Dec 5', title: 'Woolpack mill open day, Halifax', desc: 'Watch the looms, then shop seconds in the mill shop.' },
  { gw: 'sofa', type: 'Event', icon: '📐', time: 'Dec 9', title: 'Small living rooms: free webinar', desc: 'Marcus Bell on sofa size, rugs and walkways in rooms under 12 square metres.' },
  { gw: 'sofa', zone: 'woolpack', type: 'Deadline', icon: '🎄', time: 'Dec 18', title: 'Woolpack Christmas order deadline', desc: 'Woolpack Throws: order by midnight for delivery before Christmas.' }
]);
})();
/* ═════════ /SOFAXX ═════════ */
