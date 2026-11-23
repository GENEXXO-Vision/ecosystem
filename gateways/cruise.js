/* ═════════ CRUISEXX — a Travel demo gateway (2026-11-17, Sean) ═════════
   Built like DoctorXX and GolfXX: theme, feed, 4 Brand Zones, 2 Business Zones, 3 Pros, 2 communities, 3 apps, events.
   Palette (dark): deep-sea navy, lagoon turquoise, sunset coral. Home sector: Travel (tourism).
   Brands, ships, pros and communities are fictional; ports and places are real. Source of truth: _lab/travel/cruisexx-block.js. */
(function(){
const U = (id, w, h) => `https://images.unsplash.com/photo-${id}?w=${w}&h=${h}&fit=crop&q=75`;
const SEA = 'linear-gradient(135deg,#2EC4D6,#0E6F8C)', SUNSET = 'linear-gradient(135deg,#FF9F6B,#D9534F)', NAVY = 'linear-gradient(135deg,#3A6EA5,#14325A)', SAND = 'linear-gradient(135deg,#E9C98B,#B08A43)';

GATEWAYS.cruise = {
  name: 'CruiseXX', domain: 'cruisexx.com', emoji: '🛳️', sector: 'tourism', live: true,
  tagline: 'The Cruise Universe',
  theme: {
    bg: '#06192B', text: '#E8F4FA', cardBg: 'rgba(255,255,255,.045)', cardBorder: 'rgba(46,196,214,.16)',
    headerBg: 'linear-gradient(180deg,#0C3150,#06192B)', accent: '#2EC4D6', accentAlt: '#FF8A5B', dark: true
  },
  gradient: 'linear-gradient(135deg,#0C3150,#2EC4D6,#FF8A5B)',
  stats: { members: '3.7M', brands: '2,400+', agents: '76' },
  spaces: ['All Feed', 'First Cruise', 'Ports & Excursions', 'Life on Board', 'Fjords & Cold Water', 'Deals'],
  trending: ['#FirstCruise', '#Fjords2027', '#SeaDay'],
  brandZones: [
    { key: 'azure-wake', name: 'Azure Wake Cruises', color: '#2EC4D6', tier: 'Founding Partner', tag: 'Mid-size ships, slow itineraries, long days in port' },
    { key: 'port-starboard', name: 'Port & Starboard Excursions', color: '#FF8A5B', tier: 'Brand Zone', tag: 'Small-group shore days, back before all aboard' },
    { key: 'deckhand-outfitters', name: 'Deckhand Outfitters', color: '#3A6EA5', tier: 'Brand Zone', tag: 'From deck shoes to formal night' },
    { key: 'sealegs-travel', name: 'Sealegs Travel Goods', color: '#E9C98B', tier: 'Brand Zone', tag: 'The small things that make a cabin work' }
  ],
  apps: [
    { name: 'Port Days', color: '#2EC4D6', desc: 'Your itinerary, port by port, with all-aboard times', key: 'port-days', url: 'apps/port-days.html',
      dev: 'Wake Digital', rating: '4.8', users: '640K', perms: ['profile', 'feed'],
      tagline: 'Never miss all aboard.',
      about: 'Port Days lays out your cruise one day at a time: which port, when you arrive, when you sail and the all-aboard time to be back by. Sea days are marked, a countdown runs on port days, and you can note your plans for each stop. This demo carries a Norwegian fjords sailing from Southampton.',
      features: ['Every port and sea day', 'All-aboard countdown on port days', 'Notes and plans for each stop', 'Share your trip to CruiseXX'],
      shots: ['apps/port-days/shot-1.jpg', 'apps/port-days/shot-2.jpg', 'apps/port-days/shot-3.jpg'],
      version: '3.6', size: '10 KB',
      updates: [ { v: '3.6', ago: 2, notes: 'All-aboard countdown on port days.' }, { v: '3.2', ago: 90, notes: 'Notes for every stop.' }, { v: '3.0', ago: 210, notes: 'Signed in with GENEXXO.' } ],
      reviews: [ { who: '@firsttimer_flo', stars: 5, ago: 1, text: 'The all-aboard countdown saved us in Bergen.' }, { who: '@cruisedad_colin', stars: 5, ago: 8, text: 'Whole family has it on their phones.' }, { who: '@fjordfan_freya', stars: 4, ago: 19, text: 'Would love tender times too.' } ] },
    { name: 'On Board Today', color: '#FF8A5B', desc: 'Build your day from the ship’s programme', key: 'onboard-day', url: 'apps/onboard-day.html',
      dev: 'Azure Wake Cruises', rating: '4.7', users: '298K', perms: ['profile', 'feed'],
      tagline: 'Tonight’s show, tomorrow’s talk, your table at eight.',
      about: 'On Board Today puts the ship’s daily programme on your phone: talks, classes, shows, dining and the spa. Star what you want to do and it builds your day, warns you when two things clash, and reminds you of the dress code for dinner.',
      features: ['The whole daily programme', 'Star events to build your day', 'Clash warnings', 'Dress code for every evening'],
      shots: ['apps/onboard-day/shot-1.jpg', 'apps/onboard-day/shot-2.jpg', 'apps/onboard-day/shot-3.jpg'],
      version: '2.4', size: '10 KB',
      updates: [ { v: '2.4', ago: 4, notes: 'Clash warnings when two starred events overlap.' }, { v: '2.0', ago: 110, notes: 'Dress code on the evening view.' }, { v: '1.8', ago: 230, notes: 'Signed in with GENEXXO.' } ],
      reviews: [ { who: '@sea_day_sue', stars: 5, ago: 2, text: 'Better than the paper programme under the door.' }, { who: '@firsttimer_flo', stars: 5, ago: 11, text: 'Told me the comedy show clashed with dinner. Moved dinner.' }, { who: '@cruisedad_colin', stars: 4, ago: 25, text: 'Kids’ club times next please.' } ] },
    { name: 'Cruise Packing', color: '#E9C98B', desc: 'A packing list that knows your itinerary', key: 'cruise-packing', url: 'apps/cruise-packing.html',
      dev: 'Sealegs Travel Goods', rating: '4.6', users: '410K', perms: ['profile', 'feed'],
      tagline: 'Formal night, fjord walks and a lanyard.',
      about: 'Cruise Packing builds a list from your trip: how many nights, warm or cold, how many formal nights, and whether you are going ashore on foot. Tick items off as they go in the case and see what is left at a glance.',
      features: ['Lists for warm and cold cruises', 'Formal nights counted', 'Tick as you pack', 'Progress at a glance'],
      shots: ['apps/cruise-packing/shot-1.jpg', 'apps/cruise-packing/shot-2.jpg', 'apps/cruise-packing/shot-3.jpg'],
      version: '2.1', size: '9 KB',
      updates: [ { v: '2.1', ago: 6, notes: 'Cold-water list for fjords and Iceland.' }, { v: '2.0', ago: 60, notes: 'Formal-night counting.' }, { v: '1.5', ago: 190, notes: 'Signed in with GENEXXO.' } ],
      reviews: [ { who: '@fjordfan_freya', stars: 5, ago: 3, text: 'Reminded me about the waterproof trousers. Needed them.' }, { who: '@sea_day_sue', stars: 5, ago: 12, text: 'First time I have not overpacked.' }, { who: '@cruisedad_colin', stars: 4, ago: 30, text: 'Add a kids list and it is perfect.' } ] }
  ],
  pros: [
    { key: 'helen-marsh-cruise', name: 'Helen Marsh Cruise Planning', color: '#2EC4D6', tag: 'Independent cruise specialist · first cruises, fjords, river and expedition', role: 'Cruise specialist',
      img: U('1781888681811-332968760c2a', 800, 800), base: 'Southampton, UK', langs: 'English, French', years: 18, rating: '4.9', reviewsN: 702, cur: '£',
      creds: ['Sailed on 64 ships', 'Former cruise line shore-excursions manager', 'Member of a travel trade body'],
      about: 'Helen spent eight years at sea running shore excursions before coming ashore to plan cruises for other people. She finds the right ship and the right cabin, and she will tell you honestly if a cruise is not for you.',
      services: [ { id: 'first', name: 'First cruise consultation', dur: '45 minutes', price: 40, desc: 'Which line, which ship, which cabin, and what it will really cost.' },
                  { id: 'plan', name: 'Cruise plan and booking', dur: 'Delivered in 5 days', price: 120, desc: 'Ship, cabin, flights or trains to port, and excursions, booked with you.' },
                  { id: 'cabin', name: 'Cabin check', dur: '20 minutes', price: 25, desc: 'Send your cabin number; Helen tells you about noise, motion and the view.' } ],
      avail: { days: [1, 2, 3, 4, 5, 6], times: ['10:00', '14:00', '19:00'] },
      reviews: [ { who: '@firsttimer_flo', stars: 5, ago: 3, text: 'Talked us out of the wrong ship and into the perfect one.' }, { who: '@sea_day_sue', stars: 5, ago: 16, text: 'Her cabin check moved us away from the theatre. Silent nights.' }, { who: '@cruisedad_colin', stars: 5, ago: 41, text: 'Planned a three-generation cruise without a single row.' } ],
      posts: [ { ago: 1, text: 'Prone to seasickness? Book a mid-ship cabin on a low deck. It moves least.' }, { ago: 8, text: 'Fjords 2027 itineraries are out. The May sailings have the most waterfalls.' } ],
      tier: 'Pro Zone', verified: true },
    { key: 'lucia-romano-tours', name: 'Lucia Romano Private Tours', color: '#FF8A5B', tag: 'Licensed guide in Rome · private shore days from Civitavecchia', role: 'Tour guide',
      img: U('1765005204227-bf58bcdd4449', 800, 800), base: 'Rome, Italy', langs: 'Italian, English, Spanish', years: 14, rating: '4.9', reviewsN: 1260, cur: '€',
      creds: ['Licensed Rome tour guide', 'Art history degree, Sapienza', 'Ship-safe timing guarantee'],
      about: 'Lucia meets you at the ship in Civitavecchia and has you in Rome in ninety minutes, then shows you the Colosseum, the Pantheon and the Trevi Fountain at a pace that leaves room for gelato. Back at the ship two hours before all aboard, every time.',
      services: [ { id: 'rome', name: 'Rome in a day from the ship', dur: '9 hours', price: 520, desc: 'Private driver and guide for up to four people, door of the ship to door of the ship.' },
                  { id: 'vatican', name: 'Vatican and St Peter’s', dur: '8 hours', price: 560, desc: 'Skip-the-line Vatican Museums, the Sistine Chapel and St Peter’s.' },
                  { id: 'tarquinia', name: 'Tarquinia and wine lunch', dur: '6 hours', price: 380, desc: 'Etruscan tombs near the port and a long lunch at a family winery.' } ],
      avail: { days: [0, 1, 2, 3, 4, 5, 6], times: ['07:30', '08:00'] },
      reviews: [ { who: '@cruisedad_colin', stars: 5, ago: 5, text: 'Saw everything, ate well, back with hours to spare.' }, { who: '@sea_day_sue', stars: 5, ago: 20, text: 'Lucia made the Sistine Chapel make sense.' }, { who: '@firsttimer_flo', stars: 5, ago: 48, text: 'The best day of the whole cruise.' } ],
      posts: [ { ago: 2, text: 'Rome from the ship in a day is possible. Leave the port by 8, skip the queues, and be back by 4.' } ],
      tier: 'Pro Zone', verified: true },
    { key: 'erik-solberg-fjords', name: 'Erik Solberg Fjord Guiding', color: '#3A6EA5', tag: 'Hiking and kayak days from Geiranger and Flåm cruise piers', role: 'Mountain and kayak guide',
      img: U('1500648767791-00dcc994a43e', 800, 800), base: 'Geiranger, Norway', langs: 'Norwegian, English, German', years: 11, rating: '4.9', reviewsN: 488, cur: '€',
      creds: ['Certified mountain leader (Norway)', 'Sea kayak instructor', 'Wilderness first aid'],
      about: 'Erik grew up above the Geirangerfjord. He meets cruise guests at the pier for small-group kayak trips under the waterfalls, or a hike to the abandoned farms on the cliffs, and has you back long before the ship sails.',
      services: [ { id: 'kayak', name: 'Kayak under the Seven Sisters', dur: '3 hours', price: 95, desc: 'Paddle to the foot of the waterfalls. No experience needed.' },
                  { id: 'hike', name: 'Skageflå farm hike', dur: '5 hours', price: 120, desc: 'Boat across the fjord and a steep hike to the cliff-top farm.' },
                  { id: 'private', name: 'Private fjord day', dur: '6 hours', price: 480, desc: 'Your group, your pace: kayak, hike or both.' } ],
      avail: { days: [1, 2, 3, 4, 5, 6], times: ['09:00', '13:00'] },
      reviews: [ { who: '@fjordfan_freya', stars: 5, ago: 4, text: 'Kayaking under the waterfalls was unreal.' }, { who: '@hikinghenry', stars: 5, ago: 17, text: 'The farm hike is steep and worth every step.' }, { who: '@sea_day_sue', stars: 4, ago: 38, text: 'Bring proper boots. Erik will check.' } ],
      posts: [ { ago: 3, text: 'May and June: the waterfalls are at their fullest and the snow is still on the tops.' } ],
      tier: 'Pro Zone', verified: true }
  ],
  communities: [
    { key: 'first-cruise-club', name: 'First Cruise Club', domain: 'first.cruisexx.com', color: '#2EC4D6', img: U('1779315498403-e5c5a6d4a1cd', 900, 500),
      scope: 'Global', where: 'Every ocean', members: 96400, online: 1840, tagline: 'Every question you were too shy to ask.',
      about: 'For anyone booking their first cruise, or their first in years. Ask anything: tipping, formal nights, seasickness, which deck, what is actually included. Old hands answer, kindly.',
      rules: ['No question is silly', 'Say which line and ship', 'No booking links for commission'],
      mods: ['@sea_day_sue', '@cruisedad_colin'],
      threads: [ { t: 'What does “all aboard” actually mean, and what if I miss it?', by: '@firsttimer_flo', tag: 'Q&A', replies: 412, ago: 0, votes: 980 }, { t: 'Inside cabin or balcony for a first cruise?', by: '@newbie_nadia', tag: 'CABINS', replies: 286, ago: 1, votes: 520 }, { t: 'How dressy is formal night really?', by: '@firsttimer_flo', tag: 'DRESS', replies: 198, ago: 2, votes: 340 }, { t: 'My first sunrise at sea', by: '@newbie_nadia', tag: 'STORIES', replies: 120, ago: 3, votes: 610 } ],
      events: [ { title: 'First cruise Q&A (online)', day: 3, time: '19:00', where: 'Online' }, { title: 'Ship visit for first-timers', day: 12, time: '11:00', where: 'Ocean Terminal, Southampton' } ] },
    { key: 'southampton-cruisers', name: 'Southampton Cruisers', domain: 'southampton.cruisexx.com', color: '#FF8A5B', img: U('1554254648-2d58a1bc3fd5', 900, 500),
      scope: 'Local', where: 'Southampton', members: 8600, online: 220, tagline: 'Britain’s cruise port, from the people who live by it.',
      about: 'Locals and regulars who sail from Southampton: parking and trains, hotels the night before, the best spot on Mayflower Park to watch the ships leave, and a sail-away drink when the big ones go.',
      rules: ['Share port tips freely', 'Be kind to first-timers', 'No ticket touting'],
      mods: ['@cruisedad_colin', '@solent_sam'],
      threads: [ { t: 'Cheapest parking for the Ocean Terminal?', by: '@newbie_nadia', tag: 'PORT', replies: 88, ago: 0, votes: 130 }, { t: 'Watching the Christmas sail-aways from Mayflower Park', by: '@solent_sam', tag: 'MEET-UP', replies: 46, ago: 1, votes: 92 }, { t: 'Hotel the night before: which one?', by: '@firsttimer_flo', tag: 'HOTELS', replies: 64, ago: 2, votes: 101 } ],
      events: [ { title: 'Sail-away watch, Mayflower Park', day: 5, time: '16:30', where: 'Mayflower Park, Southampton' }, { title: 'Cruisers’ Christmas lunch', day: 14, time: '12:30', where: 'Oxford Street, Southampton' } ] }
  ],
  feed: [
    { av: 'CX', avBg: SEA, author: 'CruiseXX Editorial', sub: 'Featured · Just now', badge: '★ FEATURED',
      text: 'Ships, cabins, ports, fjords and the people who sail them. From your first sail-away to your fiftieth sea day: cruising, all in one place.',
      img: U('1780294560264-54fbaf3cd179', 800, 600), eng: '♡ 41.2K · 💬 3.8K · ↗ 4.4K' },
    { av: 'FF', avBg: SUNSET, author: '@fjordfan_freya', sub: 'Fjords & Cold Water · Just now', badge: 'COMMUNITY',
      text: 'Woke up in the Geirangerfjord with the Seven Sisters falls outside the balcony. Kayaked under them by lunch. Best morning of my life 🌊',
      img: U('1705512604302-3dc9d171832c', 800, 600), eng: '♡ 16.4K · 💬 1.9K · ↗ 820' },
    { av: 'AW', avBg: SEA, author: 'Azure Wake Cruises', sub: 'Founding Partner · Brand Zone', badge: 'BRAND ZONE',
      text: '<b>Fjords 2027</b> is open: twelve nights from Southampton on the Azure Meridian, with overnight stays in Bergen and long days in Geiranger and Flåm.',
      img: U('1761349319492-16ac128d7e13', 800, 600), eng: '♡ 12.8K · 💬 1.1K · ↗ 1.6K' },
    { av: 'PS', avBg: SUNSET, author: 'Port & Starboard Excursions', sub: 'Brand Zone · 1h ago', badge: 'BRAND ZONE',
      text: 'Rome from Civitavecchia in a small group of twelve, with the Trevi Fountain before the crowds. Back two hours before all aboard, guaranteed.',
      img: U('1529154036614-a60975f5c760', 800, 600), eng: '♡ 5.6K · 💬 420 · ↗ 480' },
    { av: 'FL', avBg: NAVY, author: '@firsttimer_flo', sub: 'First Cruise · 2h ago', badge: 'COMMUNITY',
      text: 'First cruise booked! Helen Marsh talked us into a mid-ship balcony on deck 7 and I have already built my packing list. 63 days to go 🛳️',
      img: U('1768270181731-b4234ef5c673', 800, 600), eng: '♡ 6.1K · 💬 840 · ↗ 210' },
    { av: 'DO', avBg: NAVY, author: 'Deckhand Outfitters', sub: 'Brand Zone · 4h ago', badge: 'BRAND ZONE',
      text: 'Formal night, sorted. The <b>Captain’s Table</b> dinner jacket packs into a cabin wardrobe without a crease.',
      img: U('1766832255363-c9f060ade8b0', 800, 600), eng: '♡ 3.2K · 💬 240 · ↗ 190' },
    { av: 'ES', avBg: NAVY, author: 'Erik Solberg Fjord Guiding', sub: 'Ports & Excursions · 6h ago', badge: 'PRO ZONE',
      text: 'Booking a fjords cruise for 2027? May and June have the fullest waterfalls. My kayak dates for those sailings are open now.',
      img: U('1779991830181-f3493f08be2f', 800, 600), eng: '♡ 2.4K · 💬 170 · ↗ 260' }
  ],
  prompts: ['Which cruise suits a first-timer who gets seasick?', 'Plan a day in Rome from Civitavecchia and back by all aboard', 'What should I pack for a Norwegian fjords cruise?', 'Inside cabin or balcony: is it worth the money?'],
  businesses: ['solent-ship-supplies', 'bluewater-port-agency']
};

/* the four Brand Zones and two Business Zones */
const brand = (o) => Object.assign({ kind: 'brand', gw: 'cruise', verified: true }, o);
Object.assign(ZONES, {
  'azure-wake': brand({ key: 'azure-wake', name: 'Azure Wake Cruises', color: '#2EC4D6', gradient: SEA, tier: 'Founding Partner',
    tagline: 'Mid-size ships, slow itineraries, long days in port', stats: { followers: '312K', content: '1.4K', products: '12' },
    ad: { badge: 'Featured', img: U('1761349319492-16ac128d7e13', 760, 760), hl: 'Fjords 2027.', sub: 'Twelve nights from Southampton, overnight in Bergen.', meta: 'From £35' },
    products: [
      { name: 'Fjords 2027 · 12 nights, balcony', price: '£2,890', tag: 'FLAGSHIP', emoji: '🛳️', rating: 4.9, reviews: 2140, cat: 'cruises', special: true, desc: 'Southampton to Bergen, Geiranger, Flåm and Stavanger and back, with an overnight in Bergen. Per person, two sharing.', features: ['Overnight in Bergen', 'All meals and drinks package', 'Balcony cabin'], review: { who: 'Freya N.', text: 'Every port better than the last.' } },
      { name: 'Canary Islands Winter Sun · 14 nights', price: '£1,690', tag: 'BESTSELLER', emoji: '☀️', rating: 4.8, reviews: 3260, cat: 'cruises', desc: 'Southampton to Lisbon, Madeira, Tenerife, La Palma and Lanzarote. Per person, inside cabin.', features: ['Four islands', 'Departs January'], review: { who: 'Sue W.', text: 'Swapped January in Hull for Madeira. No regrets.' } },
      { name: 'Mediterranean Highlights · 7 nights', price: '£1,240', emoji: '🏛️', rating: 4.8, reviews: 2580, cat: 'cruises', desc: 'Barcelona, Marseille, Civitavecchia for Rome, Naples and back. Per person, ocean-view cabin.', features: ['Fly-cruise from Barcelona'], review: { who: 'Colin B.', text: 'Rome, Pompeii and a sunset in Marseille.' } },
      { name: 'Drinks Package (per day)', price: '£45', emoji: '🍹', rating: 4.5, reviews: 1840, cat: 'extras', desc: 'Wine, beer, cocktails, soft drinks and coffee all day.', features: ['Buy before you sail'], review: { who: 'Nadia K.', text: 'Worth it if you like a coffee and a cocktail.' } },
      { name: 'Speciality Dining Night', price: '£35', tag: 'SPECIAL', emoji: '🍽️', rating: 4.9, reviews: 1260, cat: 'extras', special: true, desc: 'Seven courses in the Compass Room, with the chef’s table on request.', features: ['Book before you sail'], review: { who: 'Flo T.', text: 'Our anniversary dinner. Perfect.' } }
    ],
    shopCats: [ { key: 'cruises', label: 'Cruises', icon: '🛳️' }, { key: 'extras', label: 'On-board extras', icon: '🍹' } ],
    feed: [
      { type: 'post', sub: 'Brand post · 3h', text: '<b>Fjords 2027</b> is open, with an overnight in Bergen.', img: U('1544085311-11a028465b03', 800, 440), eng: '♡ 12.8K · 💬 1.1K · ↗ 1.6K', product: 0 },
      { type: 'post', sub: 'Life on board · Yesterday', text: 'The pool deck on the Azure Meridian, between Madeira and Tenerife.', img: U('1700597312989-435871dce1fd', 800, 440), eng: '♡ 6.4K · 💬 380' },
      { type: 'community', who: 'Nadia K.', whoBg: NAVY, sub: 'Community · 1d', text: 'First cruise and I get seasick on ferries. Is Fjords 2027 a good idea?', eng: '♡ 302 · 💬 74', reply: 'Good choice, Nadia! The fjords are some of the calmest water we sail: much of the route is sheltered. Pick a mid-ship cabin on a lower deck, and talk to your pharmacist about seasickness remedies before you go. 🌊' }
    ],
    events: [ { zoneEvent: true, tag: 'LIVE', title: 'Azure Wake Live · Fjords 2027 launch', when: 'Live now', desc: 'A walk round the ship and the itinerary, with the captain answering questions.', registered: 5260, capacity: 12000 } ],
    about: { founded: 'Southampton · 2004', story: 'Three mid-size ships that stay longer in port and never carry more than 1,400 guests. We joined GENEXXO as CruiseXX’s Founding Partner because this is where cruisers plan.', milestones: [['2004', 'The first ship sails from Southampton'], ['2019', 'The Azure Meridian launches'], ['2026', 'Founding Partner on CruiseXX']], values: ['Longer in port', 'Smaller ships', 'Shore power where ports have it'] } }),

  'port-starboard': brand({ key: 'port-starboard', name: 'Port & Starboard Excursions', color: '#FF8A5B', gradient: SUNSET, tier: 'Brand Zone',
    tagline: 'Small-group shore days, back before all aboard', stats: { followers: '84.6K', content: '640', products: '210' },
    ad: { badge: 'New', img: U('1529154036614-a60975f5c760', 760, 760), hl: 'Rome before the crowds.', sub: 'Small groups of twelve, back two hours before all aboard.', meta: 'From £49' },
    products: [
      { name: 'Rome Highlights from Civitavecchia', price: '£139', tag: 'FLAGSHIP', emoji: '🏛️', rating: 4.9, reviews: 4820, cat: 'med', special: true, desc: 'Colosseum, Pantheon and Trevi Fountain with a licensed guide, in a group of twelve.', features: ['Back-to-ship guarantee', 'Skip-the-line Colosseum'], review: { who: 'Colin B.', text: 'Saw it all and still had time for gelato.' } },
      { name: 'Bergen Funicular and Fish Market', price: '£59', tag: 'BESTSELLER', emoji: '🐟', rating: 4.8, reviews: 2140, cat: 'north', desc: 'Up Mount Fløyen by funicular, down through Bryggen to the fish market.', features: ['Walks from the pier'], review: { who: 'Freya N.', text: 'The view from the top is worth the trip alone.' } },
      { name: 'Madeira Toboggan and Gardens', price: '£69', emoji: '🌺', rating: 4.8, reviews: 1860, cat: 'atlantic', desc: 'Cable car to Monte, the wicker toboggan down, and the botanical gardens.', features: ['Half day'], review: { who: 'Sue W.', text: 'Laughed the whole way down.' } },
      { name: 'Flåm Railway', price: '£99', tag: 'SPECIAL', emoji: '🚂', rating: 4.9, reviews: 1420, cat: 'north', special: true, desc: 'One of the steepest railways in the world, from the fjord to the mountains and back.', features: ['Reserved seats'], review: { who: 'Henry L.', text: 'Waterfalls out of both windows.' } },
      { name: 'Pompeii from Naples', price: '£89', emoji: '🌋', rating: 4.8, reviews: 2380, cat: 'med', desc: 'An archaeologist guide through Pompeii, with Vesuvius behind.', features: ['Half day'], review: { who: 'Nadia K.', text: 'Our guide made it come alive.' } }
    ],
    shopCats: [ { key: 'med', label: 'Mediterranean', icon: '🏛️' }, { key: 'north', label: 'Norway & North', icon: '🐟' }, { key: 'atlantic', label: 'Atlantic islands', icon: '🌺' } ],
    feed: [ { type: 'post', sub: 'Brand post · 1h', text: 'Bryggen in the morning, before the second ship docks.', img: U('1544085311-11a028465b03', 800, 440), eng: '♡ 5.6K · 💬 420', product: 1 } ],
    events: [ { zoneEvent: true, tag: 'SALE', title: '2027 excursions early-booking sale', when: 'Nov 28 · All weekend', desc: 'A fifth off every 2027 excursion booked this weekend.', registered: 3260, capacity: 8000 } ],
    about: { founded: 'Lisbon · 2013', story: 'Two former ship guides who thought shore days should be smaller, slower and never late back. We guarantee it: if a tour makes you miss the ship, we get you to the next port.', milestones: [['2013', 'The first tours in Lisbon'], ['2021', '120 ports'], ['2026', 'Brand Zone on CruiseXX']], values: ['Groups of twelve', 'Back-to-ship guarantee', 'Local licensed guides'] } }),

  'deckhand-outfitters': brand({ key: 'deckhand-outfitters', name: 'Deckhand Outfitters', color: '#3A6EA5', gradient: NAVY, tier: 'Brand Zone',
    tagline: 'From deck shoes to formal night', stats: { followers: '46.2K', content: '290', products: '88' },
    ad: { badge: 'Featured', img: U('1676407118683-f0060c12b94f', 760, 760), hl: 'Formal night, sorted.', sub: 'Crease-free tailoring for a cabin wardrobe.', meta: 'From £24' },
    products: [
      { name: 'Captain’s Table Dinner Jacket', price: '£189', tag: 'FLAGSHIP', emoji: '🤵', rating: 4.8, reviews: 960, cat: 'formal', special: true, desc: 'A travel-weave dinner jacket that hangs out creases overnight.', features: ['Crease-resistant', 'Packs into its own bag'], review: { who: 'Colin B.', text: 'Out of the case and straight to dinner.' } },
      { name: 'Formal Night Dress', price: '£129', tag: 'BESTSELLER', emoji: '👗', rating: 4.8, reviews: 1320, cat: 'formal', desc: 'A jersey maxi dress that rolls into a corner of the case.', features: ['Six colours', 'Sizes 6–24'], review: { who: 'Sue W.', text: 'Wore it twice and got compliments both times.' } },
      { name: 'Non-Slip Deck Shoes', price: '£75', emoji: '👟', rating: 4.7, reviews: 1840, cat: 'deck', desc: 'Grippy soles for wet decks and cobbled ports.', features: ['Washable'], review: { who: 'Flo T.', text: 'Never slipped once.' } },
      { name: 'Packable Rain Shell', price: '£65', tag: 'SPECIAL', emoji: '🧥', rating: 4.8, reviews: 1460, cat: 'deck', special: true, desc: 'Fully waterproof and folds into its own pocket. Made for fjord days.', features: ['Taped seams', 'Packs to fist size'], review: { who: 'Freya N.', text: 'Bergen rain: no match for it.' } },
      { name: 'Sun Hat with Chin Strap', price: '£24', emoji: '👒', rating: 4.6, reviews: 880, cat: 'deck', desc: 'Stays on in a sea breeze.', features: ['UPF 50'], review: { who: 'Nadia K.', text: 'Did not lose it overboard. Win.' } }
    ],
    shopCats: [ { key: 'formal', label: 'Formal night', icon: '🤵' }, { key: 'deck', label: 'Deck & shore', icon: '👟' } ],
    feed: [ { type: 'post', sub: 'Brand post · 4h', text: 'The <b>Captain’s Table</b> dinner jacket: out of the case and straight to dinner.', img: U('1774989423979-6a7bf5add3f0', 800, 440), eng: '♡ 3.2K · 💬 240', product: 0 } ],
    events: [ { zoneEvent: true, tag: 'EVENT', title: 'Formal-night fitting day', when: 'Dec 4 · Southampton', desc: 'Try on the formal range and get it altered before you sail.', registered: 340, capacity: 600 } ],
    about: { founded: 'Portsmouth · 2010', story: 'A naval tailor’s family business that started making clothes for cruise passengers when the ships came to Portsmouth.', milestones: [['2010', 'The first dinner jacket'], ['2020', 'The deck range'], ['2026', 'Brand Zone on CruiseXX']], values: ['Made to travel', 'Free alterations', 'Repairs for life'] } }),

  'sealegs-travel': brand({ key: 'sealegs-travel', name: 'Sealegs Travel Goods', color: '#E9C98B', gradient: SAND, tier: 'Brand Zone',
    tagline: 'The small things that make a cabin work', stats: { followers: '38.7K', content: '210', products: '46' },
    ad: { badge: 'Featured', img: U('1761861339414-222fe69eb7c4', 760, 760), hl: 'Make the cabin work.', sub: 'Hooks, organisers, lanyards and a cabin night-light.', meta: 'From £8' },
    products: [
      { name: 'Cabin Kit', price: '£39', tag: 'FLAGSHIP', emoji: '🧰', rating: 4.8, reviews: 2260, cat: 'cabin', special: true, desc: 'Magnetic hooks, an over-door organiser and a night-light, the three things every cabin lacks.', features: ['Magnetic hooks for steel walls', 'Twelve-pocket organiser'], review: { who: 'Flo T.', text: 'Our tiny cabin felt twice the size.' } },
      { name: 'Magnetic Hooks (8)', price: '£12', tag: 'BESTSELLER', emoji: '🧲', rating: 4.8, reviews: 3840, cat: 'cabin', desc: 'Strong hooks for the steel walls of most cabins.', features: ['Hold 5kg each'], review: { who: 'Sue W.', text: 'Every cruiser should have these.' } },
      { name: 'Cruise Card Lanyard', price: '£8', emoji: '🪪', rating: 4.6, reviews: 1980, cat: 'shore', desc: 'A lanyard with a card holder that never needs a hole punched.', features: ['Four colours'], review: { who: 'Colin B.', text: 'The kids stopped losing their cards.' } },
      { name: 'Acupressure Wristbands (2)', price: '£10', emoji: '🌊', rating: 4.3, reviews: 1460, cat: 'shore', desc: 'Drug-free wristbands that many travellers find help on rough days.', features: ['Washable'], review: { who: 'Nadia K.', text: 'I wore them all week and felt fine.' } },
      { name: 'Dry Bag (10L)', price: '£18', tag: 'SPECIAL', emoji: '🎒', rating: 4.7, reviews: 1120, cat: 'shore', special: true, desc: 'For kayak days, tenders and beach stops.', features: ['Roll-top', 'Shoulder strap'], review: { who: 'Freya N.', text: 'Phone stayed dry under the waterfalls.' } }
    ],
    shopCats: [ { key: 'cabin', label: 'Cabin', icon: '🧰' }, { key: 'shore', label: 'Shore & deck', icon: '🎒' } ],
    feed: [ { type: 'post', sub: 'Brand post · 2h', text: 'The <b>Cabin Kit</b>: hooks, organiser and a night-light.', img: U('1579467299657-4f609d450684', 800, 440), eng: '♡ 2.1K · 💬 160', product: 0 } ],
    events: [ { zoneEvent: true, tag: 'DEADLINE', title: 'Last order for Christmas delivery', when: 'Dec 18 · 23:59', desc: 'Order by midnight on 18 December for delivery before Christmas.', registered: 780, capacity: 3000 } ],
    about: { founded: 'Southampton · 2016', story: 'A cruise-ship housekeeper who knew what passengers kept asking for. We make the small things.', milestones: [['2016', 'The first magnetic hooks'], ['2022', 'The Cabin Kit'], ['2026', 'Brand Zone on CruiseXX']], values: ['Small things, done well', 'Recycled packaging', 'Tested at sea'] } }),

  'solent-ship-supplies': { key: 'solent-ship-supplies', kind: 'business', gw: 'cruise', name: 'Solent Ship Supplies', color: '#2EC4D6', gradient: SEA, img: U('1548574505-5e239809ee19', 900, 500),
    tier: 'Verified', category: 'Ship chandler', tagline: 'Food, stores and spares to ships in Southampton.',
    about: { founded: 'Southampton · 1979', story: 'We supply cruise ships calling at Southampton with fresh food, hotel stores and engineering spares, loaded overnight on turnaround day.' },
    stats: { years: 47, staff: 260, clients: '38 ships a week in season' },
    caps: [ { name: 'Provisioning', detail: 'Fresh, frozen and dry food for a full sailing, loaded on turnaround day.' }, { name: 'Hotel stores', detail: 'Linen, amenities and cleaning supplies by the pallet.' }, { name: 'Technical spares', detail: 'Engine and hotel spares sourced and delivered alongside.' } ],
    specs: { moq: '1 pallet', lead: '48 hours; fresh food 24 hours', regions: 'Southampton, Portsmouth & Dover', certs: ['ISO 22000', 'Authorised Economic Operator', 'BRCGS Storage'] },
    supplies: [ { kind: 'brand', key: 'azure-wake', what: 'Fresh food for every Southampton turnaround' } ],
    cases: [ { title: 'Winter turnaround, Southampton', text: 'Three ships provisioned in one night with no delay to embarkation.' } ],
    feed: [ { sub: 'Local sourcing · 4d', text: 'Every ship we supply now gets Hampshire watercress and Isle of Wight tomatoes in season.' }, { sub: 'News · 2w', text: 'New cold store at the Western Docks.' } ],
    contact: { person: 'Paul Kerr, Ship accounts', response: 'Replies within 4 hours' } },

  'bluewater-port-agency': { key: 'bluewater-port-agency', kind: 'business', gw: 'cruise', name: 'Bluewater Port Agency', color: '#FF8A5B', gradient: SUNSET, img: U('1685101260406-5c7ad28ca00b', 900, 500),
    tier: 'Verified', category: 'Port agency', tagline: 'Port calls arranged for cruise ships in Norway and Scotland.',
    about: { founded: 'Bergen · 1998', story: 'We arrange everything a cruise ship needs to call at a port: berths, pilots, tenders, buses for excursions, and the paperwork.' },
    stats: { years: 28, staff: 90, clients: '1,100 port calls a year' },
    caps: [ { name: 'Port calls', detail: 'Berths, pilots and harbour paperwork for every call.' }, { name: 'Tender operations', detail: 'Tenders and landing stages where ships anchor.' }, { name: 'Shore transport', detail: 'Coaches and guides for excursions, timed to the ship.' } ],
    specs: { moq: '1 call', lead: 'Booked a season ahead', regions: 'Norway, Scotland & Iceland', certs: ['ISO 9001', 'ISO 14001', 'Green port partner'] },
    supplies: [ { kind: 'brand', key: 'port-starboard', what: 'Coaches and timings for Bergen and Flåm excursions' } ],
    cases: [ { title: 'Geiranger season', text: 'Four hundred tender trips a summer with no guest left ashore.' } ],
    feed: [ { sub: 'Season · 1w', text: '2027 fjord bookings are already ahead of this year.' } ],
    contact: { person: 'Ingrid Dahl, Cruise calls', response: 'Replies within one working day' } }
});

/* events in the Events tab */
gxEvents('cruise', [
  { gw: 'cruise', zone: 'azure-wake', type: 'Live', icon: '🔴', live: true, time: 'Live Now', title: 'Azure Wake Live · Fjords 2027 launch', desc: 'A walk round the Azure Meridian and the new itinerary, with the captain taking questions in the chat.' },
  { gw: 'cruise', type: 'Event', icon: '❓', time: 'Dec 1', title: 'First Cruise Club Q&A', desc: 'Old hands answer first-timers’ questions live: tipping, cabins, formal nights and seasickness.' },
  { gw: 'cruise', type: 'Event', icon: '⚓', time: 'Nov 29', title: 'Sail-away watch, Mayflower Park', desc: 'Southampton Cruisers: wave off the evening ships with a flask of something warm.' },
  { gw: 'cruise', zone: 'port-starboard', type: 'Sale', icon: '🏛️', time: 'Nov 28', title: '2027 excursions early-booking sale', desc: 'Port & Starboard: a fifth off every 2027 shore day booked this weekend.' },
  { gw: 'cruise', zone: 'deckhand-outfitters', type: 'Event', icon: '🤵', time: 'Dec 4', title: 'Formal-night fitting day, Southampton', desc: 'Deckhand Outfitters: try the formal range and get it altered before you sail.' },
  { gw: 'cruise', type: 'Event', icon: '🛳️', time: 'Dec 9', title: 'Ship visit for first-timers', desc: 'First Cruise Club: a guided look round a ship at the Ocean Terminal, Southampton.' },
  { gw: 'cruise', type: 'Event', icon: '🎄', time: 'Dec 13', title: 'Cruisers’ Christmas lunch', desc: 'Southampton Cruisers’ end-of-year lunch, with the 2027 plans swapped over pudding.' },
  { gw: 'cruise', zone: 'sealegs-travel', type: 'Deadline', icon: '🧰', time: 'Dec 18', title: 'Last order for Christmas delivery', desc: 'Sealegs Travel Goods: order by midnight for delivery before Christmas.' }
]);
})();
/* ═════════ /CRUISEXX ═════════ */
