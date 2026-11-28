/* ═════════ PRIDEXX — an Identity demo gateway (2026-11-19, Sean) ═════════
   Built like HotelXX: theme, feed, 4 Brand Zones, 2 Business Zones, 3 Pros, 2 communities, 3 apps, events.
   Palette (dark): deep violet night, hot pink, sky blue, with the rainbow kept for the tile. Home sector: Identity.
   Brands, pros and communities are fictional; places are real. Tone: warm, proud, safe. Nobody is ever outed;
   the counsellor is not a crisis service and says so (999, Samaritans 116 123). Source of truth: _lab/home85/pridexx-block.js. */
(function(){
const U = (id, w, h) => `https://images.unsplash.com/photo-${id}?w=${w}&h=${h}&fit=crop&q=75`;
const PINK = 'linear-gradient(135deg,#FF5DA2,#B0246A)', SKY = 'linear-gradient(135deg,#7DD3FC,#2563EB)', SUN = 'linear-gradient(135deg,#FFC94D,#E8590C)', VIO = 'linear-gradient(135deg,#A78BFA,#5B21B6)';

GATEWAYS.pride = {
  name: 'PrideXX', domain: 'pridexx.com', emoji: '🏳️‍🌈', sector: 'identity', live: true,
  tagline: 'The Pride Universe',
  theme: {
    bg: '#120E18', text: '#F6F0FA', cardBg: 'rgba(255,255,255,.045)', cardBorder: 'rgba(255,93,162,.16)',
    headerBg: 'linear-gradient(180deg,#2A1640,#120E18)', accent: '#FF5DA2', accentAlt: '#7DD3FC', dark: true
  },
  gradient: 'linear-gradient(135deg,#E40303,#FF8C00,#FFED00,#008026,#004DFF,#750787)',
  stats: { members: '8.9M', brands: '7,400+', agents: '96' },
  spaces: ['All Feed', 'Pride Events', 'Community', 'Love & Weddings', 'Travel', 'Work & Allies'],
  trending: ['#ProudAllYear', '#ChosenFamily', '#WinterPride'],
  brandZones: [
    { key: 'proud-threads', name: 'Proud Threads', color: '#FF5DA2', tier: 'Founding Partner', tag: 'LGBTQ+-owned clothing, made in Glasgow' },
    { key: 'spectrum-books', name: 'Spectrum Books', color: '#7DD3FC', tier: 'Brand Zone', tag: 'The queer bookshop, in Brighton and by post' },
    { key: 'out-and-away', name: 'Out & Away Travel', color: '#FFC94D', tier: 'Brand Zone', tag: 'Holidays planned by people who get it' },
    { key: 'kin-cards', name: 'Kin & Co. Cards', color: '#A78BFA', tier: 'Brand Zone', tag: 'Cards for every kind of family' }
  ],
  apps: [
    { name: 'Pride Planner', color: '#FF5DA2', desc: 'Every Pride, march and party near you, in one diary', key: 'pride-planner', url: 'apps/pride-planner.html',
      dev: 'Rainbow Row Labs', rating: '4.8', users: '1.6M', perms: ['profile', 'feed'],
      tagline: 'Never miss your Pride again.',
      about: 'Pride Planner gathers the events you care about: marches, winter Prides, club nights, book clubs, sober socials and vigils. Save the ones you are going to, see a countdown to the next, and pick the kind of night you want with filters for sober-friendly, family-friendly and step-free.',
      features: ['Events by city and by week', 'Sober, family and step-free filters', 'Countdown to your next event', 'Share your plans to PrideXX'],
      shots: ['apps/pride-planner/shot-1.jpg', 'apps/pride-planner/shot-2.jpg', 'apps/pride-planner/shot-3.jpg'],
      version: '5.2', size: '10 KB',
      updates: [ { v: '5.2', ago: 3, notes: 'Step-free filter for every venue.' }, { v: '5.0', ago: 60, notes: 'Winter events, not just summer Prides.' }, { v: '4.1', ago: 210, notes: 'Signed in with GENEXXO.' } ],
      reviews: [ { who: '@glitter_gabe', stars: 5, ago: 1, text: 'Found a sober Pride social in my own town. Life changing, honestly.' }, { who: '@two_mums_mo', stars: 5, ago: 7, text: 'The family filter means we can actually plan as a family.' }, { who: '@quietqueer_q', stars: 4, ago: 18, text: 'Would love quieter events marked too.' } ] },
    { name: 'Pronoun Card', color: '#7DD3FC', desc: 'A small card that says your name and pronouns for you', key: 'pronoun-card', url: 'apps/pronoun-card.html',
      dev: 'Spectrum Books', rating: '4.9', users: '820K', perms: ['profile', 'feed'],
      tagline: 'Say it once. Show it anywhere.',
      about: 'Pronoun Card makes a clear, friendly card with your name and pronouns to show at a desk, on a video call or at a new job. It also has a short guide for friends and colleagues: how to use pronouns, and what to do if you get them wrong (say sorry, correct yourself, move on).',
      features: ['Your name and pronouns, beautifully set', 'Five card styles', 'Big mode to show across a room', 'A kind guide for friends and allies'],
      shots: ['apps/pronoun-card/shot-1.jpg', 'apps/pronoun-card/shot-2.jpg', 'apps/pronoun-card/shot-3.jpg'],
      version: '2.4', size: '8 KB',
      updates: [ { v: '2.4', ago: 5, notes: 'Big mode for across-the-room.' }, { v: '2.0', ago: 90, notes: 'The ally guide.' }, { v: '1.6', ago: 230, notes: 'Signed in with GENEXXO.' } ],
      reviews: [ { who: '@river_they', stars: 5, ago: 2, text: 'Showed it on my first day. Nobody got it wrong.' }, { who: '@ally_alex', stars: 5, ago: 9, text: 'The guide is so simple. Sent it to my whole team.' }, { who: '@glitter_gabe', stars: 4, ago: 22, text: 'More colours please!' } ] },
    { name: 'Out Map', color: '#FFC94D', desc: 'Welcoming cafés, bars, bookshops and spaces near you', key: 'out-map', url: 'apps/out-map.html',
      dev: 'Out & Away Travel', rating: '4.7', users: '1.1M', perms: ['profile', 'feed'],
      tagline: 'Find your people, wherever you are.',
      about: 'Out Map lists LGBTQ+-owned and LGBTQ+-welcoming places, checked by the community: cafés, bars, bookshops, sober spaces and youth groups. Filter by what you want, save the ones you love, and tell the community when somewhere has changed.',
      features: ['Places checked by the community', 'Sober, step-free and under-18 filters', 'Save your favourites', 'Report a change in one tap'],
      shots: ['apps/out-map/shot-1.jpg', 'apps/out-map/shot-2.jpg', 'apps/out-map/shot-3.jpg'],
      version: '3.3', size: '10 KB',
      updates: [ { v: '3.3', ago: 4, notes: 'Under-18 spaces filter.' }, { v: '3.0', ago: 75, notes: 'Report a change.' }, { v: '2.5', ago: 190, notes: 'Signed in with GENEXXO.' } ],
      reviews: [ { who: '@newtotown_nia', stars: 5, ago: 3, text: 'Moved to Leeds alone. Out Map found me a book club in a week.' }, { who: '@sober_sol', stars: 5, ago: 11, text: 'The sober filter is everything.' }, { who: '@roam_rafa', stars: 4, ago: 25, text: 'Used it in Lisbon too. More cities please.' } ] }
  ],
  pros: [
    { key: 'sam-rivers-counselling', name: 'Sam Rivers Affirming Counselling', color: '#FF5DA2', tag: 'Counselling for LGBTQ+ people and couples · coming out, identity, relationships', role: 'Counsellor',
      img: U('1611695434369-a8f5d76ceb7b', 800, 800), base: 'Manchester, UK · and online', langs: 'English', years: 11, rating: '4.9', reviewsN: 412, cur: '£',
      creds: ['Diploma in therapeutic counselling', 'Specialist training in gender and sexuality diversity', 'Registered with a UK professional counselling body'],
      about: 'Sam (they/them) offers a calm, affirming room to talk: coming out at any age, questioning, family, faith, relationships and the weight of the news. Sam is not a crisis service: if you are in danger call 999, or Samaritans free on 116 123, any time.',
      services: [ { id: 'intro', name: 'Introductory call', dur: '20 minutes', price: 0, desc: 'Free. See if it feels right before you book.' },
                  { id: 'one', name: 'Counselling session', dur: '50 minutes', price: 60, desc: 'One-to-one, in Manchester or online.' },
                  { id: 'couple', name: 'Couples session', dur: '75 minutes', price: 85, desc: 'For couples and polycules, together.' } ],
      avail: { days: [1, 2, 3, 4], times: ['10:00', '14:00', '18:30'] },
      reviews: [ { who: '@quietqueer_q', stars: 5, ago: 5, text: 'Came out to my parents at 52. Sam helped me find the words.' }, { who: '@river_they', stars: 5, ago: 16, text: 'I never had to explain myself. That alone was healing.' }, { who: '@two_mums_mo', stars: 5, ago: 40, text: 'Helped us through a really hard year.' } ],
      posts: [ { ago: 1, text: 'Coming out is not one conversation. It is many, and you get to choose the order.' }, { ago: 6, text: 'Two evening spaces free from January.' } ],
      tier: 'Pro Zone', verified: true },
    { key: 'theo-marsh-celebrant', name: 'Theo Marsh Celebrant', color: '#7DD3FC', tag: 'Weddings, vow renewals and commitment ceremonies · written around you', role: 'Celebrant',
      img: U('1519085360753-af0119f7cbe7', 800, 800), base: 'London, UK', langs: 'English, Portuguese', years: 8, rating: '4.9', reviewsN: 268, cur: '£',
      creds: ['Trained independent celebrant', 'Over 300 ceremonies led', 'Member of a UK celebrant network'],
      about: 'Theo writes ceremonies that sound like you: your story, your vows, your people, anywhere you like. In England and Wales the legal part happens at the register office, so many couples do that quietly and celebrate with Theo the way they want.',
      services: [ { id: 'chat', name: 'Ceremony chat', dur: '30 minutes', price: 0, desc: 'Free. Tell Theo about you two.' },
                  { id: 'wedding', name: 'Wedding ceremony', dur: 'Written with you, led on the day', price: 650, desc: 'Two planning meetings, a rehearsal and the ceremony itself.' },
                  { id: 'vows', name: 'Vow renewal', dur: 'Led on the day', price: 380, desc: 'For anniversaries, or the wedding you could not have back then.' } ],
      avail: { days: [2, 3, 4, 6], times: ['11:00', '15:00', '19:00'] },
      reviews: [ { who: '@two_mums_mo', stars: 5, ago: 8, text: 'Our vow renewal after 30 years. Not a dry eye in the pub.' }, { who: '@grooms_jay', stars: 5, ago: 20, text: 'He made our families laugh and cry in the same minute.' }, { who: '@ally_alex', stars: 5, ago: 48, text: 'Led my brother’s wedding beautifully.' } ],
      posts: [ { ago: 2, text: 'Winter weddings are the best kept secret. Candles, coats and a lot less competition for venues.' } ],
      tier: 'Pro Zone', verified: true },
    { key: 'ruby-lux-makeup', name: 'Ruby Lux Makeup & Drag', color: '#FFC94D', tag: 'Makeup lessons, drag looks and hosting · first-timers welcome', role: 'Makeup artist & host',
      img: U('1780387477222-730504564368', 800, 800), base: 'Brighton, UK', langs: 'English', years: 13, rating: '4.8', reviewsN: 344, cur: '£',
      creds: ['Professional makeup artist', 'Host of a Brighton drag brunch', 'Makeup for stage and screen'],
      about: 'Ruby has painted faces for theatre, television and the best drag brunch on the south coast. Lessons are patient, private and fun, whether it is your first lipstick or your first time on stage.',
      services: [ { id: 'lesson', name: 'One-to-one makeup lesson', dur: '90 minutes', price: 70, desc: 'Your face, your kit, your look. No judgement.' },
                  { id: 'drag', name: 'First drag look', dur: '3 hours', price: 140, desc: 'Full transformation, photos included.' },
                  { id: 'host', name: 'Event hosting', dur: 'Up to 3 hours', price: 450, desc: 'Brunches, parties and office Pride events.' } ],
      avail: { days: [3, 4, 5, 6], times: ['11:00', '14:00', '17:00'] },
      reviews: [ { who: '@glitter_gabe', stars: 5, ago: 4, text: 'My first drag look and I cried happy tears.' }, { who: '@river_they', stars: 5, ago: 13, text: 'Taught me makeup that feels like me.' }, { who: '@hr_hannah', stars: 4, ago: 35, text: 'Hosted our office Pride lunch. People still talk about it.' } ],
      posts: [ { ago: 3, text: 'Winter skin: moisturise, wait five minutes, then foundation. Every time.' } ],
      tier: 'Pro Zone', verified: true }
  ],
  communities: [
    { key: 'out-and-about', name: 'Out & About', domain: 'outandabout.pridexx.com', color: '#FF5DA2', img: U('1566835770430-27dde2eb4367', 900, 500),
      scope: 'Global', where: 'Everywhere', members: 486000, online: 7240, tagline: 'Pride is every day. So is the group chat.',
      about: 'LGBTQ+ people and allies everywhere: coming-out stories, advice, books, travel tips, love and the small wins. Kind first, always.',
      rules: ['Never out anyone', 'Use people’s names and pronouns', 'Report, don’t pile on'],
      mods: ['@glitter_gabe', '@river_they'],
      threads: [ { t: 'Came out at work this week. Here is how it went', by: '@quietqueer_q', tag: 'STORIES', replies: 1240, ago: 0, votes: 3820 }, { t: 'Best queer books of 2026: your list', by: '@spectrum_sara', tag: 'BOOKS', replies: 642, ago: 1, votes: 1180 }, { t: 'Winter Pride events this year?', by: '@roam_rafa', tag: 'EVENTS', replies: 286, ago: 2, votes: 520 }, { t: 'Chosen family Christmas: who is hosting?', by: '@two_mums_mo', tag: 'COMMUNITY', replies: 418, ago: 3, votes: 960 } ],
      events: [ { title: 'Queer book club online', day: 4, time: '19:30', where: 'Online' }, { title: 'Chosen family Christmas dinner sign-up', day: 10, time: '18:00', where: 'Online' } ] },
    { key: 'manchester-queer-social', name: 'Manchester Queer Social', domain: 'manchester.pridexx.com', color: '#7DD3FC', img: U('1773659922558-2bf5da1f5d74', 900, 500),
      scope: 'Local', where: 'Manchester', members: 18400, online: 420, tagline: 'More than Canal Street. Sober nights too.',
      about: 'Walks, board games, choirs, sober socials and the odd big night on Canal Street. New to the city or new to being out? Come and say hello.',
      rules: ['Never out anyone', 'Sober events stay sober', 'Under-18s only at youth-group events'],
      mods: ['@sober_sol', '@newtotown_nia'],
      threads: [ { t: 'Sober Saturday board games: who is in?', by: '@sober_sol', tag: 'SOCIAL', replies: 84, ago: 0, votes: 196 }, { t: 'Trans+ winter social: who’s coming?', by: '@river_they', tag: 'EVENT', replies: 112, ago: 1, votes: 340 }, { t: 'Queer choirs taking new voices?', by: '@newtotown_nia', tag: 'Q&A', replies: 46, ago: 2, votes: 88 } ],
      events: [ { title: 'Sober board games night', day: 3, time: '18:30', where: 'Northern Quarter, Manchester' }, { title: 'Winter walk and hot chocolate', day: 9, time: '11:00', where: 'Heaton Park, Manchester' } ] }
  ],
  feed: [
    { av: 'PX', avBg: PINK, author: 'PrideXX Editorial', sub: 'Featured · Just now', badge: '★ FEATURED',
      text: 'Pride is not a weekend in June. Events, community, love, travel, work and the people who make every day a bit braver. All of it, all year, in one place.',
      img: U('1770223951390-5b55dc1b8804', 800, 600), eng: '♡ 94.2K · 💬 8.8K · ↗ 12.4K' },
    { av: 'GG', avBg: SUN, author: '@glitter_gabe', sub: 'Community · Just now', badge: 'COMMUNITY',
      text: 'First Pride with my girlfriend this year. She cried at the parade, and then I cried at her crying 🌈',
      img: U('1561982479-c36896dad276', 800, 600), eng: '♡ 38.6K · 💬 4.1K · ↗ 2.2K' },
    { av: 'PT', avBg: PINK, author: 'Proud Threads', sub: 'Founding Partner · Brand Zone', badge: 'BRAND ZONE',
      text: 'The <b>Winter Pride</b> collection is here: heavy knits and rainbow-cuff beanies, made in Glasgow. A tenth of every sale goes to LGBTQ+ youth charities.',
      img: U('1782581719965-4d88091ba6ce', 800, 600), eng: '♡ 16.4K · 💬 1.2K · ↗ 2.1K' },
    { av: 'BB', avBg: VIO, author: '@bi_and_bright', sub: 'Community · 1h ago', badge: 'COMMUNITY',
      text: 'Told my best friends I’m bi on our weekend away. They screamed, hugged me, then asked why I hadn’t told them sooner 💜',
      img: U('1679470628375-7eda1736e52e', 800, 600), eng: '♡ 24.8K · 💬 3.6K · ↗ 1.4K' },
    { av: 'OA', avBg: SUN, author: 'Out & Away Travel', sub: 'Brand Zone · 2h ago', badge: 'BRAND ZONE',
      text: 'Summer 2027 is open. <b>Pride trips to Madrid, Amsterdam and Sitges</b>, with hotels that put the flag up because they mean it.',
      img: U('1785682608192-300a8cbeda20', 800, 600), eng: '♡ 9.2K · 💬 640 · ↗ 1.1K' },
    { av: 'SR', avBg: PINK, author: 'Sam Rivers Affirming Counselling', sub: 'Community · 4h ago', badge: 'PRO ZONE',
      text: 'Christmas can be hard when family is complicated. Plan a way out, plan a call with a friend, and know that chosen family counts as family.',
      img: U('1573225063823-21ec7ba08e64', 800, 600), eng: '♡ 6.8K · 💬 520 · ↗ 1.6K' },
    { av: 'RL', avBg: SUN, author: 'Ruby Lux Makeup & Drag', sub: 'Pride Events · 6h ago', badge: 'PRO ZONE',
      text: 'Christmas drag brunch in Brighton on 12 December. Bottomless pancakes, carols with a twist and absolutely no dress code.',
      img: U('1779906923896-ee20b705fa70', 800, 600), eng: '♡ 5.4K · 💬 380 · ↗ 460' }
  ],
  prompts: ['What is on for LGBTQ+ people in Manchester this weekend?', 'How do I support a friend who has just come out?', 'Plan a Pride trip to Madrid next summer', 'Find a sober queer social near me'],
  businesses: ['carnival-works', 'open-door-inclusion']
};

/* the four Brand Zones and two Business Zones */
const brand = (o) => Object.assign({ kind: 'brand', gw: 'pride', verified: true }, o);
Object.assign(ZONES, {
  'proud-threads': brand({ key: 'proud-threads', name: 'Proud Threads', color: '#FF5DA2', gradient: PINK, tier: 'Founding Partner',
    tagline: 'LGBTQ+-owned clothing, made in Glasgow', stats: { followers: '312K', content: '1.4K', products: '46' },
    ad: { badge: 'Featured', img: U('1782581719965-4d88091ba6ce', 760, 760), hl: 'Winter Pride.', sub: 'Heavy knits, rainbow cuffs, made in Glasgow.', meta: 'From £18' },
    products: [
      { name: 'Winter Pride Knit', price: '£68', tag: 'FLAGSHIP', emoji: '🧶', rating: 4.9, reviews: 4120, cat: 'knits', special: true, desc: 'A heavy lambswool jumper with a rainbow stripe at the cuff, knitted in Glasgow.', features: ['Sizes XS to 4XL', 'Lambswool', '10% to LGBTQ+ youth charities'], review: { who: 'Gabe R.', text: 'Warmest, proudest thing I own.' } },
      { name: 'Rainbow Cuff Beanie', price: '£18', tag: 'BESTSELLER', emoji: '🧢', rating: 4.8, reviews: 6380, cat: 'accessories', desc: 'A ribbed beanie with a six-colour cuff.', features: ['One size', 'Recycled yarn'], review: { who: 'Nia O.', text: 'Bought three. Gave two away.' } },
      { name: 'Progress Scarf', price: '£32', tag: 'SPECIAL', emoji: '🧣', rating: 4.9, reviews: 1840, cat: 'accessories', special: true, desc: 'A long scarf in the Progress Pride colours.', features: ['180cm', 'Lambswool'], review: { who: 'River T.', text: 'Felt seen in a scarf. Who knew.' } },
      { name: 'Proud Since Tee', price: '£26', emoji: '👕', rating: 4.7, reviews: 2960, cat: 'tees', desc: 'Organic cotton tee. Add the year you came out, or not.', features: ['Personalised', 'Organic cotton'], review: { who: 'Q.', text: 'Mine says 2026. Feels good.' } },
      { name: 'Gift Card', price: '£25', emoji: '🎁', rating: 4.9, reviews: 1020, cat: 'gifts', desc: 'For anyone who should be dressed with pride.', features: ['Never expires'], review: { who: 'Mo A.', text: 'Perfect for my nephew.' } }
    ],
    shopCats: [ { key: 'knits', label: 'Knits', icon: '🧶' }, { key: 'accessories', label: 'Accessories', icon: '🧣' }, { key: 'tees', label: 'Tees', icon: '👕' }, { key: 'gifts', label: 'Gift cards', icon: '🎁' } ],
    feed: [
      { type: 'post', sub: 'Brand post · 2h', text: 'The <b>Winter Pride Knit</b> is back, in eight sizes.', img: U('1762372473479-3036448f35c5', 800, 440), eng: '♡ 16.4K · 💬 1.2K · ↗ 2.1K', product: 0 },
      { type: 'post', sub: 'Giving back · Yesterday', text: 'This year’s Pride collection raised £148,000 for LGBTQ+ youth charities. Thank you.', img: U('1637631531662-cea0fb4b1d97', 800, 440), eng: '♡ 9.8K · 💬 640' },
      { type: 'community', who: 'Nia O.', whoBg: SKY, sub: 'Community · 1d', text: 'Do you make the knit in bigger sizes? I am a 5XL.', eng: '♡ 380 · 💬 64', reply: 'Hi Nia! Yes: the Winter Pride Knit is made to order up to 6XL. Pick “Made to measure” on the product page and we will knit it for you in about two weeks. 🧶' }
    ],
    events: [ { zoneEvent: true, tag: 'SALE', title: 'Proud Friday', when: 'Dec 4 · All day', desc: 'A fifth off everything, and the youth-charity donation doubled for the day.', registered: 6240, capacity: 15000 } ],
    about: { founded: 'Glasgow · 2016', story: 'Two friends with one knitting machine and a stall at Glasgow Pride. Now we knit for the whole country, and a tenth of every Pride piece goes to LGBTQ+ youth charities. Founding Partner on PrideXX because this is where our people are.', milestones: [['2016', 'A stall at Glasgow Pride'], ['2021', 'Our own knitting mill in the East End'], ['2026', 'Founding Partner on PrideXX']], values: ['LGBTQ+-owned, LGBTQ+-staffed', 'Made in Scotland', 'Giving back, every sale'] } }),

  'spectrum-books': brand({ key: 'spectrum-books', name: 'Spectrum Books', color: '#7DD3FC', gradient: SKY, tier: 'Brand Zone',
    tagline: 'The queer bookshop, in Brighton and by post', stats: { followers: '124K', content: '860', products: '2.1K' },
    ad: { badge: 'New', img: U('1603912699214-92627f304eb6', 760, 760), hl: 'Read with pride.', sub: 'The Book Box: two queer books a month.', meta: 'From £12' },
    products: [
      { name: 'The Book Box (monthly)', price: '£24', tag: 'FLAGSHIP', emoji: '📚', rating: 4.9, reviews: 3820, cat: 'subscription', special: true, desc: 'Two new LGBTQ+ books a month, chosen by our booksellers, with a note on why.', features: ['Fiction, non-fiction or both', 'Skip any month'], review: { who: 'Sara M.', text: 'Every month is a little gift to myself.' } },
      { name: 'Coming Out Reading Pack', price: '£36', tag: 'BESTSELLER', emoji: '📖', rating: 4.9, reviews: 1460, cat: 'packs', desc: 'Three books for anyone coming out, or anyone loving someone who is.', features: ['Teen and adult editions'], review: { who: 'Mo A.', text: 'Gave it to my mum. It helped her more than I could.' } },
      { name: 'Queer History Tote', price: '£15', emoji: '👜', rating: 4.7, reviews: 2210, cat: 'gifts', desc: 'A heavy canvas tote printed with 50 years of Pride dates.', features: ['Organic cotton'], review: { who: 'Rafa D.', text: 'Strangers stop me to read it.' } },
      { name: 'Signed Book Club Pick', price: '£12', tag: 'SPECIAL', emoji: '✍️', rating: 4.8, reviews: 880, cat: 'packs', special: true, desc: 'This month’s book club pick, signed by the author.', features: ['While stocks last'], review: { who: 'River T.', text: 'My first signed book.' } }
    ],
    shopCats: [ { key: 'subscription', label: 'Book Box', icon: '📚' }, { key: 'packs', label: 'Reading packs', icon: '📖' }, { key: 'gifts', label: 'Gifts', icon: '👜' } ],
    feed: [ { type: 'post', sub: 'Brand post · 5h', text: 'December’s <b>Book Box</b> is packed: a winter romance and a history of queer Brighton.', img: U('1545231097-cbd796f1d95f', 800, 440), eng: '♡ 4.6K · 💬 320', product: 0 } ],
    events: [ { zoneEvent: true, tag: 'EVENT', title: 'Queer book club online', when: 'Nov 28 · 19:30', desc: 'This month’s pick, with the author joining for the last half hour.', registered: 1840, capacity: 3000 } ],
    about: { founded: 'Brighton · 2009', story: 'A tiny shop off St James’s Street that grew into the UK’s busiest LGBTQ+ bookshop, and a book box that goes to 40,000 doors.', milestones: [['2009', 'The shop opens in Kemptown'], ['2019', 'The Book Box begins'], ['2026', 'Brand Zone on PrideXX']], values: ['Every story deserves a shelf', 'Booksellers, not algorithms', 'Free books for youth groups'] } }),

  'out-and-away': brand({ key: 'out-and-away', name: 'Out & Away Travel', color: '#FFC94D', gradient: SUN, tier: 'Brand Zone',
    tagline: 'Holidays planned by people who get it', stats: { followers: '88.2K', content: '540', products: '64' },
    ad: { badge: 'Featured', img: U('1785682608192-300a8cbeda20', 760, 760), hl: 'Pride trips, summer 2027.', sub: 'Madrid, Amsterdam and Sitges, now open.', meta: 'From £390' },
    products: [
      { name: 'Madrid Pride Long Weekend', price: '£590', tag: 'FLAGSHIP', emoji: '🇪🇸', rating: 4.8, reviews: 1240, cat: 'pride', special: true, desc: 'Four nights in Chueca with flights, a welcome dinner and a spot on the parade route.', features: ['Early July 2027', 'Hotels checked by our team', 'Free changes to March'], review: { who: 'Rafa D.', text: 'Best weekend of my life, no exaggeration.' } },
      { name: 'Amsterdam Canal Pride Trip', price: '£520', tag: 'BESTSELLER', emoji: '🚤', rating: 4.8, reviews: 980, cat: 'pride', desc: 'Three nights by the canals with a boat for the Canal Parade.', features: ['Early August 2027'], review: { who: 'Jay K.', text: 'Watching from a boat. Unreal.' } },
      { name: 'Sitges Winter Sun', price: '£390', emoji: '☀️', rating: 4.7, reviews: 620, cat: 'breaks', desc: 'Five quiet nights by the sea, out of season.', features: ['January to March'], review: { who: 'Q.', text: 'Exactly the calm I needed.' } },
      { name: 'Honeymoon Planning', price: '£95', tag: 'SPECIAL', emoji: '💍', rating: 4.9, reviews: 410, cat: 'breaks', special: true, desc: 'A planner finds places where you can hold hands without thinking about it.', features: ['Fee taken off your booking'], review: { who: 'Mo A.', text: 'Every hotel knew and every hotel was lovely.' } }
    ],
    shopCats: [ { key: 'pride', label: 'Pride trips', icon: '🏳️‍🌈' }, { key: 'breaks', label: 'Breaks', icon: '☀️' } ],
    feed: [ { type: 'post', sub: 'Brand post · 2h', text: 'Summer 2027 Pride trips are open. Madrid sells out first, every year.', img: U('1785682575189-1ff35c032e5c', 800, 440), eng: '♡ 9.2K · 💬 640', product: 0 } ],
    events: [ { zoneEvent: true, tag: 'LIVE', title: 'Out & Away Live · Pride trips 2027', when: 'Live now', desc: 'Our planners walk through Madrid, Amsterdam and Sitges and answer your questions live.', registered: 4280, capacity: 9000 } ],
    about: { founded: 'London · 2014', story: 'Started by two travel agents who were tired of asking hotels “is that a problem?”. Every place we sell, we have stayed in.', milestones: [['2014', 'The first Pride trip, to Madrid'], ['2022', '20,000 travellers a year'], ['2026', 'Brand Zone on PrideXX']], values: ['We stay before we sell', 'Safety advice that is honest', 'Couples, families and solo, all welcome'] } }),

  'kin-cards': brand({ key: 'kin-cards', name: 'Kin & Co. Cards', color: '#A78BFA', gradient: VIO, tier: 'Brand Zone',
    tagline: 'Cards for every kind of family', stats: { followers: '61.4K', content: '320', products: '280' },
    ad: { badge: 'Christmas', img: U('1719780660401-32ea0de49649', 760, 760), hl: 'Merry Christmas, Dads.', sub: 'Cards for every kind of family, in time for Christmas.', meta: 'From £3.50' },
    products: [
      { name: 'Christmas Cards (pack of 10)', price: '£14', tag: 'FLAGSHIP', emoji: '🎄', rating: 4.9, reviews: 2860, cat: 'christmas', special: true, desc: 'Ten cards for two dads, two mums, chosen family and everyone between.', features: ['Recycled card', 'Mix or match designs'], review: { who: 'Mo A.', text: 'Finally a card with our family on it.' } },
      { name: 'Coming Out Congrats Card', price: '£3.50', tag: 'BESTSELLER', emoji: '💌', rating: 4.9, reviews: 3120, cat: 'cards', desc: '“So proud of you. Nothing changes, except I love you louder.”', features: ['Blank inside'], review: { who: 'Alex P.', text: 'My friend keeps it on her fridge.' } },
      { name: 'Two Grooms Wedding Card', price: '£3.50', emoji: '🤵', rating: 4.8, reviews: 1480, cat: 'cards', desc: 'Gold foil, two top hats, one big day.', features: ['With envelope'], review: { who: 'Jay K.', text: 'We framed ours.' } },
      { name: 'Name Day Card', price: '£4', tag: 'SPECIAL', emoji: '✨', rating: 4.9, reviews: 760, cat: 'cards', special: true, desc: 'For the day someone starts using their name. Write it big inside.', features: ['Personalised'], review: { who: 'River T.', text: 'Got one from my sister. I cried.' } }
    ],
    shopCats: [ { key: 'christmas', label: 'Christmas', icon: '🎄' }, { key: 'cards', label: 'Cards', icon: '💌' } ],
    feed: [ { type: 'post', sub: 'Brand post · 1d', text: 'Our <b>Christmas packs</b> are back, with six new designs for chosen family.', img: U('1516119555254-e3b36f4b6769', 800, 440), eng: '♡ 3.4K · 💬 210', product: 0 } ],
    events: [ { zoneEvent: true, tag: 'DEADLINE', title: 'Last order for Christmas delivery', when: 'Dec 18 · 23:59', desc: 'Order by midnight on 18 December for second-class delivery before Christmas.', registered: 1120, capacity: 4000 } ],
    about: { founded: 'Bristol · 2018', story: 'An illustrator who could not find a card for her two mums. Now we draw cards for every kind of family.', milestones: [['2018', 'The first ten designs'], ['2023', 'In 900 shops'], ['2026', 'Brand Zone on PrideXX']], values: ['Every family on a card', 'Recycled card, always', 'Drawn by queer illustrators'] } }),

  'carnival-works': { key: 'carnival-works', kind: 'business', gw: 'pride', name: 'Carnival Works', color: '#FF5DA2', gradient: PINK, img: U('1785682563963-df7952f27708', 900, 500),
    tier: 'Verified', category: 'Event production', tagline: 'Floats, stages and sound for Prides of every size.',
    about: { founded: 'Manchester · 2004', story: 'We build parade floats, small stages and sound systems for Prides, carnivals and community festivals, and we lend kit to small-town Prides at cost.' },
    stats: { years: 22, staff: 64, clients: '140 Prides & festivals' },
    caps: [ { name: 'Parade floats', detail: 'Designed, built, driven and taken away after.' }, { name: 'Stages and sound', detail: 'From a park bandstand to a 5,000-person field.' }, { name: 'Small Pride kit', detail: 'A van of staging and sound at cost for first-year Prides.' } ],
    specs: { moq: 'One float', lead: 'Book 8 weeks ahead', regions: 'UK & Ireland', certs: ['Event safety accredited', 'Public liability £10M', 'Living Wage employer'] },
    supplies: [ { kind: 'brand', key: 'proud-threads', what: 'The Proud Threads parade float, every year since 2019' } ],
    cases: [ { title: 'A first-year Pride in a market town', text: 'Stage, sound and a float for 3,000 people on a budget of £4,000.' } ],
    feed: [ { sub: 'News · 3d', text: '2027 float bookings are open. Small Prides get first pick of dates.' }, { sub: 'Workshop · 1w', text: 'Our winter project: a float that runs on batteries, no generator.' } ],
    contact: { person: 'Dee Okonjo, Bookings', response: 'Replies within 24 hours' } },

  'open-door-inclusion': { key: 'open-door-inclusion', kind: 'business', gw: 'pride', name: 'Open Door Workplace Inclusion', color: '#7DD3FC', gradient: SKY, img: U('1720423330656-614d6fe9021e', 900, 500),
    tier: 'Verified', category: 'Workplace training', tagline: 'Practical LGBTQ+ inclusion training for employers.',
    about: { founded: 'Leeds · 2015', story: 'We help employers make work a place people can be themselves: policies, manager training and staff networks, in plain English.' },
    stats: { years: 11, staff: 28, clients: '420 employers' },
    caps: [ { name: 'Manager training', detail: 'Half-day sessions on pronouns, coming out at work and handling mistakes.' }, { name: 'Policy review', detail: 'Leave, dress code and transition-at-work policies, rewritten clearly.' }, { name: 'Staff networks', detail: 'Setting up an LGBTQ+ network that lasts past June.' } ],
    specs: { moq: 'One session', lead: 'Start within 3 weeks', regions: 'UK-wide & online', certs: ['ISO 9001', 'Accredited trainers', 'Cyber Essentials'] },
    supplies: [ { kind: 'brand', key: 'out-and-away', what: 'Inclusion training for every Out & Away planner' } ],
    cases: [ { title: 'A 2,000-person retailer in Yorkshire', text: 'Trained 180 store managers and launched a staff network with 300 members.' } ],
    feed: [ { sub: 'Webinar · 2d', text: 'Free: “Getting pronouns right at work”, 3 December, 12:30.' } ],
    contact: { person: 'Priya Shah, Employer partnerships', response: 'Replies within one working day' } }
});

/* events in the Events tab */
gxEvents('pride', [
  { gw: 'pride', zone: 'out-and-away', type: 'Live', icon: '🔴', live: true, time: 'Live Now', title: 'Out & Away Live · Pride trips 2027', desc: 'Planners walk through Madrid, Amsterdam and Sitges and answer your questions in the chat.' },
  { gw: 'pride', type: 'Event', icon: '🧣', time: 'Dec 10', title: 'Trans+ winter social, Manchester', desc: 'Manchester Queer Social: hot drinks, games and good company in the Northern Quarter. All welcome.' },
  { gw: 'pride', zone: 'proud-threads', type: 'Sale', icon: '🧶', time: 'Dec 4', title: 'Proud Friday at Proud Threads', desc: 'A fifth off everything, and the youth-charity donation doubled.' },
  { gw: 'pride', zone: 'spectrum-books', type: 'Event', icon: '📚', time: 'Nov 28', title: 'Queer book club online', desc: 'Spectrum Books: this month’s pick, with the author for the last half hour.' },
  { gw: 'pride', type: 'Event', icon: '🎗️', time: 'Dec 1', title: 'World AIDS Day: red ribbon walk, London', desc: 'Out & About walks from King’s Cross to remember, and raises money for HIV charities.' },
  { gw: 'pride', type: 'Event', icon: '💼', time: 'Dec 3', title: 'Getting pronouns right at work: free webinar', desc: 'Open Door Workplace Inclusion, 12:30. For managers and colleagues.' },
  { gw: 'pride', type: 'Event', icon: '🥞', time: 'Dec 12', title: 'Christmas drag brunch, Brighton', desc: 'Hosted by Ruby Lux: pancakes, carols with a twist, no dress code.' },
  { gw: 'pride', zone: 'kin-cards', type: 'Deadline', icon: '🎄', time: 'Dec 18', title: 'Last order for Christmas cards', desc: 'Kin & Co. Cards: order by midnight for delivery before Christmas.' }
]);
})();
/* ═════════ /PRIDEXX ═════════ */
