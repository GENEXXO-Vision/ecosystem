/* ═════════ COURIERXX — a Logistics demo gateway (2026-11-24, Sean; build -95) ═════════
   Built with the _tools/README.md recipe. Palette (light): parcel kraft, route green, hi-vis orange.
   Home sector: Logistics (key `transportation`). Every carrier, maker, pro and product is fictional; cities are real.
   Prices, rates and delivery times are illustrative. */
(function(){
const U = (id, w, h) => `https://images.unsplash.com/photo-${id}?w=${w}&h=${h}&fit=crop&q=75`;
const ROUTE = 'linear-gradient(135deg,#22C55E,#14532D)', VIS = 'linear-gradient(135deg,#FB923C,#C2410C)', KRAFT = 'linear-gradient(135deg,#D6B48A,#8A6239)', SLATE = 'linear-gradient(135deg,#64748B,#1E293B)';

GATEWAYS.courier = {
  name: 'CourierXX', domain: 'courierxx.com', emoji: '📦', sector: 'transportation', live: true,
  tagline: 'The Courier Universe',
  theme: {
    bg: '#F7F8F5', text: '#16201A', cardBg: '#FFFFFF', cardBorder: 'rgba(22,32,26,.09)',
    headerBg: 'linear-gradient(180deg,#FFFFFF,#F7F8F5)', accent: '#15803D', accentAlt: '#EA580C', dark: false
  },
  gradient: 'linear-gradient(135deg,#14532D,#15803D,#EA580C)',
  stats: { members: '1.9M', brands: '1,300+', agents: '30' },
  spaces: ['All Feed', 'On the Road', 'Cargo Bikes', 'Peak Season', 'Sending', 'Small Shops'],
  trending: ['#PeakSeason', '#CargoBike', '#LastMile'],
  brandZones: [
    { key: 'parcelwise', name: 'Parcelwise', color: '#15803D', tier: 'Founding Partner', tag: 'Parcels collected, tracked and delivered' },
    { key: 'pedalfreight', name: 'Pedalfreight Cargo Bikes', color: '#EA580C', tier: 'Brand Zone', tag: 'Electric cargo bikes for city deliveries' },
    { key: 'boxwell', name: 'Boxwell Packaging', color: '#A16207', tier: 'Brand Zone', tag: 'Recycled boxes and mailers' },
    { key: 'tailwind-kit', name: 'Tailwind Courier Kit', color: '#475569', tier: 'Brand Zone', tag: 'Bags, waterproofs and lights for riders' }
  ],
  apps: [
    { name: 'Drop Route', color: '#15803D', desc: 'Put today’s drops in a sensible order', key: 'drop-route', url: 'apps/drop-route.html',
      dev: 'Parcelwise', rating: '4.8', users: '540K', perms: ['profile', 'feed'],
      tagline: 'Fewer miles, same drops.',
      about: 'Drop Route takes your list of drops and puts them in a sensible order from the depot, so you drive or ride fewer miles. Tick them off as you go and see what’s left. A planning aid: use your judgement on the road.',
      features: ['Order drops in one tap', 'Tick off as you go', 'Miles saved', 'Timed drops first'],
      shots: ['apps/drop-route/shot-1.jpg', 'apps/drop-route/shot-2.jpg', 'apps/drop-route/shot-3.jpg'],
      version: '3.4', size: '10 KB',
      updates: [ { v: '3.4', ago: 2, notes: 'Timed drops first.' }, { v: '2.9', ago: 70, notes: 'Miles saved.' }, { v: '2.1', ago: 210, notes: 'Signed in with GENEXXO.' } ],
      reviews: [ { who: '@van_life_vik', stars: 5, ago: 1, text: 'Home an hour earlier most days.' }, { who: '@pedal_parcels_pia', stars: 5, ago: 15, text: 'Works for the bike too.' }, { who: '@last_mile_lou', stars: 4, ago: 36, text: 'Simple. Does what it says.' } ] },
    { name: 'Parcel Tracker', color: '#EA580C', desc: 'Everything you’re sending and expecting', key: 'parcel-tracker', url: 'apps/parcel-tracker.html',
      dev: 'Boxwell Packaging', rating: '4.7', users: '2.3M', perms: ['profile', 'feed'],
      tagline: 'Where’s my parcel? Right here.',
      about: 'Parcel Tracker keeps every parcel you’re sending or expecting in one list, with each step from collection to doorstep. Peak season? See what’s arriving this week at a glance.',
      features: ['All your parcels in one list', 'Every step, timestamped', 'Arriving this week', 'Share a delivery'],
      shots: ['apps/parcel-tracker/shot-1.jpg', 'apps/parcel-tracker/shot-2.jpg', 'apps/parcel-tracker/shot-3.jpg'],
      version: '2.8', size: '9 KB',
      updates: [ { v: '2.8', ago: 3, notes: 'Arriving this week.' }, { v: '2.2', ago: 90, notes: 'Sending as well as receiving.' }, { v: '1.6', ago: 230, notes: 'Signed in with GENEXXO.' } ],
      reviews: [ { who: '@etsy_free_erin', stars: 5, ago: 2, text: 'I run my little shop’s parcels from it.' }, { who: '@van_life_vik', stars: 4, ago: 18, text: 'Customers stop ringing me.' }, { who: '@lucia_ferreira_shipping', stars: 5, ago: 40, text: 'Recommend it to every shop I help.' } ] },
    { name: 'Cargo Bike Check', color: '#475569', desc: 'A daily safety check and service log', key: 'bike-check', url: 'apps/bike-check.html',
      dev: 'Pedalfreight Cargo Bikes', rating: '4.9', users: '180K', perms: ['profile', 'feed'],
      tagline: 'Two minutes before you ride.',
      about: 'Cargo Bike Check walks you through a quick check before every shift: brakes, tyres, lights, battery and the load box. Log services and repairs, and see when the next one’s due.',
      features: ['Two-minute daily check', 'Service log', 'Next service due', 'Share your mileage'],
      shots: ['apps/bike-check/shot-1.jpg', 'apps/bike-check/shot-2.jpg', 'apps/bike-check/shot-3.jpg'],
      version: '2.2', size: '9 KB',
      updates: [ { v: '2.2', ago: 4, notes: 'Next service due.' }, { v: '1.8', ago: 80, notes: 'Battery health.' }, { v: '1.2', ago: 200, notes: 'Signed in with GENEXXO.' } ],
      reviews: [ { who: '@pedal_parcels_pia', stars: 5, ago: 1, text: 'Caught a worn brake pad before it mattered.' }, { who: '@sami_haddad_cargo', stars: 5, ago: 20, text: 'My customers’ bikes come in in better shape.' }, { who: '@last_mile_lou', stars: 5, ago: 42, text: 'Habit-forming, in a good way.' } ] }
  ],
  pros: [
    { key: 'sami-haddad-cargo', name: 'Sami Haddad Cargo Bike Workshop', color: '#EA580C', tag: 'Servicing and repairs for cargo bikes and e-bikes · Leeds', role: 'Cargo bike mechanic',
      img: U('1600968566723-9fcdf6fca8d8', 800, 800), base: 'Leeds, UK', langs: 'English, Arabic', years: 10, rating: '4.9', reviewsN: 312, cur: '£',
      creds: ['Qualified cycle mechanic', 'E-bike motor and battery trained', 'Services three courier fleets'],
      about: 'Sami keeps cargo bikes on the road: brakes, gears, motors and batteries. Same-day fixes for working riders, and fleet servicing so nobody misses a shift.',
      services: [ { id: 'check', name: 'Safety check', dur: '30 minutes', price: 25, desc: 'Brakes, tyres, lights and frame.' },
                  { id: 'service', name: 'Full service', dur: 'Same day', price: 95, desc: 'Strip, clean, adjust and replace worn parts.' },
                  { id: 'fleet', name: 'Fleet visit', dur: 'Half day', price: 240, desc: 'Up to eight bikes serviced at your depot.' } ],
      avail: { days: [1, 2, 3, 4, 5, 6], times: ['08:00', '12:00', '15:30'] },
      reviews: [ { who: '@pedal_parcels_pia', stars: 5, ago: 3, text: 'Fixed my motor while I had lunch.' }, { who: '@last_mile_lou', stars: 5, ago: 22, text: 'Honest about what needs doing.' }, { who: '@van_life_vik', stars: 5, ago: 47, text: 'Looks after our whole fleet.' } ],
      posts: [ { ago: 1, text: 'Cargo bikes eat brake pads in winter. Check yours every Monday: if you can see metal, it’s too late.' } ],
      tier: 'Pro Zone', verified: true },
    { key: 'lucia-ferreira-shipping', name: 'Lucia Ferreira Shipping Help', color: '#15803D', tag: 'Shipping and returns advice for small online shops', role: 'E-commerce shipping adviser',
      img: U('1616002411355-49593fd89721', 800, 800), base: 'Bristol, UK · and online', langs: 'English, Portuguese', years: 9, rating: '4.9', reviewsN: 224, cur: '£',
      creds: ['Ran logistics for an online retailer', 'Helped 300 small shops', 'Independent: no carrier commission'],
      about: 'Lucia helps small online shops ship well: the right boxes, the right carrier for each parcel, sensible delivery prices and a returns policy that doesn’t sink you.',
      services: [ { id: 'call', name: 'Shipping health check', dur: '60 minutes', price: 85, desc: 'Your costs, carriers and packaging reviewed.' },
                  { id: 'peak', name: 'Peak season plan', dur: '1 week', price: 260, desc: 'Cut-off dates, stock and customer messages.' },
                  { id: 'returns', name: 'Returns policy rewrite', dur: '3 days', price: 140, desc: 'Fair to customers, kind to your margins.' } ],
      avail: { days: [1, 2, 3, 4], times: ['09:30', '13:00', '16:00'] },
      reviews: [ { who: '@etsy_free_erin', stars: 5, ago: 4, text: 'Cut my postage costs by a third.' }, { who: '@van_life_vik', stars: 5, ago: 25, text: 'Helped my sister’s shop through peak.' }, { who: '@pedal_parcels_pia', stars: 4, ago: 51, text: 'Very practical.' } ],
      posts: [ { ago: 2, text: 'Publish your Christmas cut-off dates now, not on the 18th. Customers forgive “too late” if you told them early.' } ],
      tier: 'Pro Zone', verified: true },
    { key: 'josh-pemberton-rider-tax', name: 'Josh Pemberton Rider Tax', color: '#475569', tag: 'Tax returns for self-employed couriers and riders', role: 'Tax adviser for couriers',
      img: U('1583264277168-58ceba4b84e7', 800, 800), base: 'Manchester, UK · and online', langs: 'English', years: 7, rating: '4.8', reviewsN: 410, cur: '£',
      creds: ['Chartered tax adviser', 'Former courier himself', 'Fixed fees for riders'],
      about: 'Josh rode for three years while studying tax. Now he does riders’ and drivers’ tax returns: mileage, kit, phone and bike costs, all claimed properly.',
      services: [ { id: 'return', name: 'Rider tax return', dur: 'Two weeks', price: 120, desc: 'Your self assessment, done and filed.' },
                  { id: 'mileage', name: 'Mileage and costs check', dur: '30 minutes', price: 35, desc: 'What you can claim, explained.' },
                  { id: 'start', name: 'Going self-employed call', dur: '45 minutes', price: 45, desc: 'Registering and keeping records.' } ],
      avail: { days: [2, 3, 4, 6], times: ['10:00', '17:30', '19:00'] },
      reviews: [ { who: '@last_mile_lou', stars: 5, ago: 2, text: 'He actually understands the job.' }, { who: '@pedal_parcels_pia', stars: 5, ago: 17, text: 'Claimed things I didn’t know I could.' }, { who: '@van_life_vik', stars: 5, ago: 39, text: 'Quick and cheap.' } ],
      posts: [ { ago: 3, text: 'January’s coming. Download your platform statements now, while you can still find them.' } ],
      tier: 'Pro Zone', verified: true }
  ],
  communities: [
    { key: 'couriers-united', name: 'Couriers United', domain: 'united.courierxx.com', color: '#15803D', img: U('1737221273086-403e3dbf1f01', 900, 500),
      scope: 'Global', where: 'Every route', members: 228000, online: 3120, tagline: 'Every drop counts.',
      about: 'Couriers, van drivers and riders: routes, kit, pay, peak season and the doorsteps you’ll never forget.',
      rules: ['Riders and drivers welcome', 'No customer addresses or photos of doors', 'Be kind in peak season'],
      mods: ['@last_mile_lou', '@van_life_vik'],
      threads: [ { t: 'Peak season: how many drops today?', by: '@van_life_vik', tag: 'PEAK', replies: 1820, ago: 0, votes: 3260 }, { t: 'Best waterproofs for a wet winter', by: '@pedal_parcels_pia', tag: 'KIT', replies: 640, ago: 1, votes: 1280 }, { t: 'Your kindest customer story', by: '@last_mile_lou', tag: 'STORIES', replies: 920, ago: 2, votes: 1960 }, { t: 'Cargo bike or van in the city?', by: '@pedal_parcels_pia', tag: 'DEBATE', replies: 480, ago: 3, votes: 840 } ],
      events: [ { title: 'Peak season survival: live Q&A', day: 2, time: '20:00', where: 'Online' }, { title: 'Riders’ Christmas quiz', day: 22, time: '20:30', where: 'Online' } ] },
    { key: 'leeds-cargo-riders', name: 'Leeds Cargo Riders', domain: 'leeds.courierxx.com', color: '#EA580C', img: U('1602838989393-a056c13183c6', 900, 500),
      scope: 'Local', where: 'Leeds', members: 640, online: 18, tagline: 'Pedal-powered parcels.',
      about: 'Cargo bike couriers around Leeds: routes, workshops, group rides and a warm café for the wettest days.',
      rules: ['Leeds riders and the curious', 'Share routes, not addresses', 'Lights on, always'],
      mods: ['@pedal_parcels_pia', '@sami_haddad_cargo'],
      threads: [ { t: 'Roadworks on the Headrow: best way round', by: '@pedal_parcels_pia', tag: 'ROUTES', replies: 34, ago: 0, votes: 70 }, { t: 'Winter workshop night: brakes', by: '@sami_haddad_cargo', tag: 'WORKSHOP', replies: 22, ago: 1, votes: 48 }, { t: 'Christmas lights ride', by: '@pedal_parcels_pia', tag: 'RIDE', replies: 40, ago: 2, votes: 76 } ],
      events: [ { title: 'Workshop night: winter brakes', day: 7, time: '18:30', where: 'Leeds' }, { title: 'Christmas lights ride', day: 18, time: '18:00', where: 'Leeds' } ] }
  ],
  feed: [
    { av: 'CX', avBg: ROUTE, author: 'CourierXX Editorial', sub: 'Featured · Just now', badge: '★ FEATURED',
      text: 'The riders, the vans, the depots and every doorstep between. Peak season, cargo bikes, sending your first parcel or running a small shop. Couriers, all in one place.',
      img: U('1566576721346-d4a3b4eaeb55', 800, 600), eng: '♡ 28.4K · 💬 2.2K · ↗ 2.9K' },
    { av: 'LL', avBg: VIS, author: '@last_mile_lou', sub: 'On the Road · Just now', badge: 'COMMUNITY',
      text: 'No vans down this lane, so it’s the trolley and the cobbles. Forty-two drops left and the rain’s holding off 🤞📦',
      img: U('1764696745397-42701a7efd3f', 800, 600), eng: '♡ 11.6K · 💬 1.3K · ↗ 720' },
    { av: 'PW', avBg: ROUTE, author: 'Parcelwise', sub: 'Founding Partner · Brand Zone', badge: 'BRAND ZONE',
      text: 'Live from the hub tonight: peak season begins. A million parcels through one building before breakfast, and the people who make it happen.',
      img: U('1586528116022-aeda1613c63d', 800, 600), eng: '♡ 19.8K · 💬 2.4K · ↗ 3.1K' },
    { av: 'PF', avBg: VIS, author: 'Pedalfreight Cargo Bikes', sub: 'Brand Zone · 1h ago', badge: 'BRAND ZONE',
      text: 'Parked up between drops. The <b>Pedalfreight Hauler</b> carries 200 kilos and fits down any cycle lane.',
      img: U('1648278292821-030e18884bc3', 800, 600), eng: '♡ 7.4K · 💬 540 · ↗ 680' },
    { av: 'EF', avBg: KRAFT, author: '@etsy_free_erin', sub: 'Small Shops · 2h ago', badge: 'COMMUNITY',
      text: 'Signed for and smiling. My first ever wholesale order, delivered to a shop in York this morning. Packed every box myself 🥹',
      img: U('1758523670564-d1d6a734dc0b', 800, 600), eng: '♡ 9.6K · 💬 1.1K · ↗ 340' },
    { av: 'BW', avBg: KRAFT, author: 'Boxwell Packaging', sub: 'Brand Zone · 4h ago', badge: 'BRAND ZONE',
      text: 'Flat-packed and ready for peak. <b>Recycled Shipping Boxes</b>, made from old boxes, ready to be made into new ones.',
      img: U('1700165644892-3dd6b67b25bc', 800, 600), eng: '♡ 4.8K · 💬 290 · ↗ 360' },
    { av: 'LF', avBg: ROUTE, author: 'Lucia Ferreira Shipping Help', sub: 'Sending · 6h ago', badge: 'PRO ZONE',
      text: 'Checking a client’s orders before the Black Friday rush. Right-size your boxes and you can save more than you think on postage.',
      img: U('1770013413878-2530e2c3d82b', 800, 600), eng: '♡ 3.6K · 💬 210 · ↗ 380' }
  ],
  prompts: ['What are this year’s Christmas posting dates?', 'Is a cargo bike better than a van in a city?', 'How do I start as a self-employed courier?', 'Cheapest way to send a parcel to Spain'],
  businesses: ['sortline-automation', 'greenmile-vans']
};

/* the four Brand Zones and two Business Zones */
const brand = (o) => Object.assign({ kind: 'brand', gw: 'courier', verified: true }, o);
Object.assign(ZONES, {
  'parcelwise': brand({ key: 'parcelwise', name: 'Parcelwise', color: '#15803D', gradient: ROUTE, tier: 'Founding Partner',
    tagline: 'Parcels collected, tracked and delivered', stats: { followers: '286K', content: '980', products: '16' },
    ad: { badge: 'Featured', img: U('1620455800201-7f00aeef12ed', 760, 760), hl: 'Sent today. There tomorrow.', sub: 'Collection from your door, tracked all the way.', meta: 'From £3.20' },
    products: [
      { name: 'Next-Day Parcel, up to 2kg', price: '£4.60', tag: 'FLAGSHIP', emoji: '📦', rating: 4.7, reviews: 18400, cat: 'send', special: true, desc: 'Collected from your door, delivered the next working day.', features: ['Tracked', 'Photo on delivery'], review: { who: 'Erin W.', text: 'My shop runs on these.' } },
      { name: 'Drop-Off Parcel, up to 2kg', price: '£3.20', tag: 'BESTSELLER', emoji: '🏪', rating: 4.6, reviews: 24600, cat: 'send', desc: 'Drop at any of 8,000 shops and lockers.', features: ['Two to three days'], review: { who: 'Lou M.', text: 'Cheapest tracked option going.' } },
      { name: 'Small Shop Account', price: 'Billed monthly', emoji: '🛍️', rating: 4.8, reviews: 2140, cat: 'business', desc: 'Daily collections and lower prices for small shops.', features: ['Labels from your shop'], review: { who: 'Lucia F.', text: 'The first account I recommend.' } },
      { name: 'Europe Parcel, up to 5kg', price: '£14.90', tag: 'SPECIAL', emoji: '🌍', rating: 4.6, reviews: 3260, cat: 'send', special: true, desc: 'Tracked to 28 countries, customs forms done for you.', features: ['Three to five days'], review: { who: 'Vik S.', text: 'Customs form was painless.' } }
    ],
    shopCats: [ { key: 'send', label: 'Send', icon: '📦' }, { key: 'business', label: 'Business', icon: '🛍️' } ],
    feed: [
      { type: 'post', sub: 'Brand post · 2h', text: 'Peak season starts here: a million parcels a night through the hub. Send yours <b>next day</b>.', img: U('1766040923580-16ad32fae8b4', 800, 440), eng: '♡ 19.8K · 💬 2.4K · ↗ 3.1K', product: 0 },
      { type: 'post', sub: 'In the hub · Yesterday', text: 'Racked, sorted and on a van by 5am. Drop off at any of 8,000 shops for <b>£3.20</b>.', img: U('1587293852726-70cdb56c2866', 800, 440), eng: '♡ 6.2K · 💬 410', product: 1 },
      { type: 'community', who: 'Erin W.', whoBg: KRAFT, sub: 'Community · 1d', text: 'What’s the last day I can send for Christmas delivery?', eng: '♡ 640 · 💬 210', reply: 'Hi Erin! Next-day parcels sent by Tuesday 22 December arrive by Christmas Eve, and drop-off parcels need to go by Saturday 19th. Send earlier if you can: peak is busy! 🎄' }
    ],
    events: [ { zoneEvent: true, tag: 'LIVE', title: 'Parcelwise Live · peak night in the hub', when: 'Live now', desc: 'A million parcels before breakfast: inside the sorting hub on the first night of peak.', registered: 6420, capacity: 15000 } ],
    about: { founded: 'Northampton · 2006', story: 'Two van drivers and one depot. Now twelve hubs and four thousand couriers, more of them on cargo bikes every year. We joined CourierXX as Founding Partner because the people who deliver deserve a place of their own.', milestones: [['2006', 'Two vans'], ['2018', 'Cargo bikes in five cities'], ['2026', 'Founding Partner on CourierXX']], values: ['Fair pay per drop', 'Electric by 2030', 'A photo on every delivery'] } }),

  'pedalfreight': brand({ key: 'pedalfreight', name: 'Pedalfreight Cargo Bikes', color: '#EA580C', gradient: VIS, tier: 'Brand Zone',
    tagline: 'Electric cargo bikes for city deliveries', stats: { followers: '64.2K', content: '310', products: '12' },
    ad: { badge: 'New', img: U('1745407863651-e7c49ef1c8df', 760, 760), hl: 'Two hundred kilos. No van.', sub: 'Electric cargo bikes for couriers and shops.', meta: 'From £89 / month' },
    products: [
      { name: 'Pedalfreight Hauler', price: 'From £6,400', tag: 'FLAGSHIP', emoji: '🚲', rating: 4.9, reviews: 640, cat: 'bikes', special: true, desc: 'An electric cargo bike with a 200kg load box and a 90km range.', features: ['Lockable box', 'Two batteries'], review: { who: 'Pia K.', text: 'Replaced our van in the city centre.' } },
      { name: 'Hauler Lease', price: '£89 / month', tag: 'BESTSELLER', emoji: '📝', rating: 4.8, reviews: 1240, cat: 'lease', desc: 'The Hauler with servicing and insurance, monthly.', features: ['Servicing included'], review: { who: 'Sami H.', text: 'The way most riders should start.' } },
      { name: 'Rain Canopy', price: '£149', emoji: '☔', rating: 4.7, reviews: 520, cat: 'parts', desc: 'Keeps parcels dry in the worst weather.', features: ['Fits all Haulers'], review: { who: 'Lou M.', text: 'Leeds-proof.' } },
      { name: 'Spare Battery', price: '£520', tag: 'SPECIAL', emoji: '🔋', rating: 4.8, reviews: 410, cat: 'parts', special: true, desc: 'A second battery for a full day of drops.', features: ['Charges in four hours'], review: { who: 'Pia K.', text: 'Never run out mid-round now.' } }
    ],
    shopCats: [ { key: 'bikes', label: 'Bikes', icon: '🚲' }, { key: 'lease', label: 'Lease', icon: '📝' }, { key: 'parts', label: 'Parts', icon: '🔋' } ],
    feed: [ { type: 'post', sub: 'Brand post · 1h', text: 'Loaded to the top and parked by the steps for the last drops. The <b>Hauler</b> carries more than you’d think.', img: U('1768385957618-fc3fa6c80768', 800, 440), eng: '♡ 7.4K · 💬 540', product: 0 } ],
    events: [ { zoneEvent: true, tag: 'EVENT', title: 'Cargo bike test ride day', when: 'Dec 5 · 10:00', desc: 'Ride a loaded Hauler round a city course.', registered: 380, capacity: 800 } ],
    about: { founded: 'Cambridge · 2016', story: 'A bike builder and a courier who were sure a bike could do a van’s job in town.', milestones: [['2016', 'The first Hauler'], ['2023', '5,000 on the road'], ['2026', 'Brand Zone on CourierXX']], values: ['Built to be repaired', 'Tested by couriers', 'Cleaner city air'] } }),

  'boxwell': brand({ key: 'boxwell', name: 'Boxwell Packaging', color: '#A16207', gradient: KRAFT, tier: 'Brand Zone',
    tagline: 'Recycled boxes and mailers', stats: { followers: '41.8K', content: '240', products: '80' },
    ad: { badge: 'Featured', img: U('1782405183431-893f08e24b1a', 760, 760), hl: 'Boxes made from boxes.', sub: 'Recycled packaging for small shops.', meta: 'From £9' },
    products: [
      { name: 'Recycled Shipping Boxes, 50 Pack', price: '£34', tag: 'FLAGSHIP', emoji: '📦', rating: 4.8, reviews: 4260, cat: 'boxes', special: true, desc: 'Strong, recycled and recyclable, in six sizes.', features: ['Flat-packed', 'Plastic-free tape'], review: { who: 'Erin W.', text: 'My customers notice.' } },
      { name: 'Paper Mailers, 100 Pack', price: '£22', tag: 'BESTSELLER', emoji: '✉️', rating: 4.7, reviews: 3120, cat: 'mailers', desc: 'Padded paper mailers for clothes and books.', features: ['Peel and seal'], review: { who: 'Lucia F.', text: 'The best plastic-free mailer I’ve found.' } },
      { name: 'Paper Tape, 6 Rolls', price: '£12', emoji: '🧻', rating: 4.6, reviews: 1460, cat: 'tape', desc: 'Strong paper tape that recycles with the box.', features: ['Hand-tearable'], review: { who: 'Vik S.', text: 'Sticks first time.' } },
      { name: 'Starter Packing Kit', price: '£9', tag: 'SPECIAL', emoji: '🎁', rating: 4.8, reviews: 860, cat: 'boxes', special: true, desc: 'Ten boxes, ten mailers and a roll of tape to try.', features: ['Free delivery'], review: { who: 'Erin W.', text: 'Perfect for a new shop.' } }
    ],
    shopCats: [ { key: 'boxes', label: 'Boxes', icon: '📦' }, { key: 'mailers', label: 'Mailers', icon: '✉️' }, { key: 'tape', label: 'Tape', icon: '🧻' } ],
    feed: [ { type: 'post', sub: 'Brand post · 4h', text: 'Packed and ready to go out the door. <b>Paper mailers</b> and boxes for the Black Friday rush.', img: U('1769355104335-acef3aa4c9b6', 800, 440), eng: '♡ 4.8K · 💬 290', product: 1 } ],
    events: [ { zoneEvent: true, tag: 'SALE', title: 'Black Friday: 30% off packaging', when: 'Nov 27 · All day', desc: 'Boxes, mailers and tape, a third off, one day only.', registered: 1840, capacity: 5000 } ],
    about: { founded: 'Kent · 2012', story: 'A family box-maker that switched to recycled board and never looked back.', milestones: [['2012', 'The first recycled box'], ['2020', 'Plastic-free across the range'], ['2026', 'Brand Zone on CourierXX']], values: ['Made from old boxes', 'Plastic-free', 'Small-shop prices'] } }),

  'tailwind-kit': brand({ key: 'tailwind-kit', name: 'Tailwind Courier Kit', color: '#475569', gradient: SLATE, tier: 'Brand Zone',
    tagline: 'Bags, waterproofs and lights for riders', stats: { followers: '38.6K', content: '190', products: '50' },
    ad: { badge: 'Gift', img: U('1621972750749-0fbb1abb7736', 760, 760), hl: 'Seen. Dry. Done.', sub: 'Kit for riders who work in every weather.', meta: 'From £18' },
    products: [
      { name: 'Tailwind Thermal Bag', price: '£64', tag: 'FLAGSHIP', emoji: '🎒', rating: 4.8, reviews: 2860, cat: 'bags', special: true, desc: 'An insulated, waterproof backpack that keeps hot food hot.', features: ['Reflective panels', 'Wipe clean'], review: { who: 'Lou M.', text: 'Three winters and still going.' } },
      { name: 'Storm Jacket, Hi-Vis', price: '£89', tag: 'BESTSELLER', emoji: '🧥', rating: 4.8, reviews: 1960, cat: 'clothing', desc: 'Fully waterproof, bright orange and breathable.', features: ['Pit zips'], review: { who: 'Pia K.', text: 'Dry after four hours of rain.' } },
      { name: 'Bright Lights Set', price: '£42', emoji: '🔦', rating: 4.7, reviews: 1240, cat: 'lights', desc: 'A front and rear set, USB-charged, 20 hours.', features: ['Visible at 1km'], review: { who: 'Sami H.', text: 'The set I fit to customers’ bikes.' } },
      { name: 'Waterproof Gloves', price: '£18', tag: 'SPECIAL', emoji: '🧤', rating: 4.6, reviews: 980, cat: 'clothing', special: true, desc: 'Touchscreen fingertips, so you can sign off a drop.', features: ['Fleece lined'], review: { who: 'Vik S.', text: 'No more wet hands on the phone.' } }
    ],
    shopCats: [ { key: 'bags', label: 'Bags', icon: '🎒' }, { key: 'clothing', label: 'Clothing', icon: '🧥' }, { key: 'lights', label: 'Lights', icon: '🔦' } ],
    feed: [ { type: 'post', sub: 'Brand post · 1d', text: 'Last drop of the night, box on the back, <b>Storm Jacket</b> keeping the rain out.', img: U('1617347454431-f49d7ff5c3b1', 800, 440), eng: '♡ 3.2K · 💬 180', product: 1 } ],
    events: [ { zoneEvent: true, tag: 'SALE', title: 'Black Friday: 25% off winter kit', when: 'Nov 27 · All day', desc: 'A quarter off jackets, gloves and lights.', registered: 860, capacity: 3000 } ],
    about: { founded: 'Glasgow · 2014', story: 'A courier who got tired of soggy bags and started sewing better ones.', milestones: [['2014', 'The first bag'], ['2021', 'The Storm Jacket'], ['2026', 'Brand Zone on CourierXX']], values: ['Tested in Glasgow rain', 'Repairs for life', 'Be seen'] } }),

  'sortline-automation': { key: 'sortline-automation', kind: 'business', gw: 'courier', name: 'Sortline Automation', color: '#15803D', gradient: ROUTE, img: U('1689942010216-dc412bb1e7a9', 900, 500),
    tier: 'Verified', category: 'Parcel sorting systems', tagline: 'Sorting systems and racking for parcel hubs.',
    about: { founded: 'Sheffield · 1999', story: 'Engineers who design, build and look after parcel sorting systems and warehouse racking.' },
    stats: { years: 27, staff: 380, clients: '70 hubs' },
    caps: [ { name: 'Sorters', detail: 'From 2,000 to 40,000 parcels an hour.' }, { name: 'Racking', detail: 'Designed, fitted and inspected.' }, { name: 'Peak support', detail: 'Engineers on site through December.' } ],
    specs: { moq: 'One hub', lead: '3 to 12 months', regions: 'UK & Europe', certs: ['Machinery safety approved', 'Fully insured', 'Engineers on call all night'] },
    supplies: [ { kind: 'brand', key: 'parcelwise', what: 'Sorters in Parcelwise hubs' } ],
    cases: [ { title: 'Peak without a hitch', text: 'A hub sorted a record night’s parcels with no stoppages.' } ],
    feed: [ { sub: 'Peak · 3d', text: 'Engineers on site in twelve hubs for peak season.' } ],
    contact: { person: 'Daniel Price, Projects', response: 'Replies within one working day' } },

  'greenmile-vans': { key: 'greenmile-vans', kind: 'business', gw: 'courier', name: 'Greenmile Van Leasing', color: '#EA580C', gradient: VIS, img: U('1647702504702-6b3dc40eafe5', 900, 500),
    tier: 'Verified', category: 'Electric van leasing', tagline: 'Electric vans for couriers and fleets.',
    about: { founded: 'Milton Keynes · 2017', story: 'We lease electric vans to self-employed couriers and fleets, with charging and servicing included.' },
    stats: { years: 9, staff: 120, clients: '6,000 vans' },
    caps: [ { name: 'Single vans', detail: 'For self-employed couriers.' }, { name: 'Fleets', detail: 'From ten vans up.' }, { name: 'Charging', detail: 'Home and depot chargers fitted.' } ],
    specs: { moq: 'One van', lead: '2 to 8 weeks', regions: 'UK', certs: ['Authorised lender', 'Fully insured', 'Breakdown cover included'] },
    supplies: [ { kind: 'brand', key: 'parcelwise', what: 'Electric vans for Parcelwise couriers' } ],
    cases: [ { title: 'A fleet goes electric', text: 'A courier firm swapped forty diesel vans for electric in a year.' } ],
    feed: [ { sub: 'Fleet · 5d', text: 'Two hundred more electric vans on the road for peak.' } ],
    contact: { person: 'Amira Khan, Couriers', response: 'Replies within two working days' } }
});

/* events in the Events tab */
gxEvents('courier', [
  { gw: 'courier', zone: 'parcelwise', type: 'Live', icon: '🔴', live: true, time: 'Live Now', title: 'Parcelwise Live · peak night in the hub', desc: 'A million parcels before breakfast: inside the sorting hub on the first night of peak.' },
  { gw: 'courier', type: 'Event', icon: '🎙️', time: 'Nov 26', title: 'Peak season survival: live Q&A', desc: 'Couriers United: experienced drivers and riders answer questions.' },
  { gw: 'courier', zone: 'boxwell', type: 'Sale', icon: '📦', time: 'Nov 27', title: 'Boxwell Black Friday', desc: '30% off boxes, mailers and tape, one day only.' },
  { gw: 'courier', zone: 'tailwind-kit', type: 'Sale', icon: '🧥', time: 'Nov 27', title: 'Tailwind Black Friday', desc: '25% off winter jackets, gloves and lights.' },
  { gw: 'courier', type: 'Event', icon: '🔧', time: 'Dec 1', title: 'Workshop night: winter brakes, Leeds', desc: 'Leeds Cargo Riders learn to check and swap brake pads.' },
  { gw: 'courier', zone: 'pedalfreight', type: 'Event', icon: '🚲', time: 'Dec 5', title: 'Cargo bike test ride day', desc: 'Ride a loaded Pedalfreight Hauler round a city course.' },
  { gw: 'courier', type: 'Event', icon: '🎄', time: 'Dec 12', title: 'Christmas lights ride, Leeds', desc: 'Leeds Cargo Riders ride the city’s lights together.' },
  { gw: 'courier', type: 'Event', icon: '❓', time: 'Dec 16', title: 'Riders’ Christmas quiz', desc: 'Couriers United’s online quiz, after the last drop.' }
]);
})();
/* ═════════ /COURIERXX ═════════ */
