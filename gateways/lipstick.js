/* ═════════ LIPSTICKXX — a Beauty demo gateway (2026-11-20, Sean; build -88) ═════════
   Built like SushiXX: theme, feed, 4 Brand Zones, 2 Business Zones, 3 Pros, 2 communities, 3 apps, events.
   Palette (light): blush, crimson, nude. Home sector: Beauty. Tone: for every skin tone and every face; patch-test
   advice and ingredients shown, no medical claims. Brands, pros and communities are fictional; places are real. */
(function(){
const U = (id, w, h) => `https://images.unsplash.com/photo-${id}?w=${w}&h=${h}&fit=crop&q=75`;
const CRIMSON = 'linear-gradient(135deg,#F43F5E,#9F1239)', NUDE = 'linear-gradient(135deg,#E2B49A,#A0674B)', BERRY = 'linear-gradient(135deg,#C2417A,#6D1A47)', BLUSH = 'linear-gradient(135deg,#F9C6CF,#D9798A)';

GATEWAYS.lipstick = {
  name: 'LipstickXX', domain: 'lipstickxx.com', emoji: '💄', sector: 'beauty', live: true,
  tagline: 'The Lipstick Universe',
  theme: {
    bg: '#FDF6F7', text: '#2A1A20', cardBg: '#FFFFFF', cardBorder: 'rgba(159,18,57,.12)',
    headerBg: 'linear-gradient(180deg,#FBE4E8,#FDF6F7)', accent: '#E11D48', accentAlt: '#A0674B', dark: false
  },
  gradient: 'linear-gradient(135deg,#9F1239,#F43F5E,#E2B49A)',
  stats: { members: '6.8M', brands: '5,400+', agents: '72' },
  spaces: ['All Feed', 'Shades', 'Swatches', 'Makeup Artists', 'Clean Beauty', 'Refills'],
  trending: ['#PartyRed', '#SwatchSunday', '#RefillNotLandfill'],
  brandZones: [
    { key: 'rouge-atelier', name: 'Rouge Atelier', color: '#E11D48', tier: 'Founding Partner', tag: 'Lipstick made in London since 1962' },
    { key: 'velvet-pout', name: 'Velvet Pout', color: '#C2417A', tier: 'Brand Zone', tag: 'Glosses, balms and lip care' },
    { key: 'shade-lab', name: 'Shade Lab', color: '#A0674B', tier: 'Brand Zone', tag: 'Your shade, mixed to order' },
    { key: 'refill-rose', name: 'Refill & Rose', color: '#D9798A', tier: 'Brand Zone', tag: 'Refillable cases, refills by post' }
  ],
  apps: [
    { name: 'Shade Finder', color: '#E11D48', desc: 'Find lip shades that suit your undertone', key: 'shade-finder', url: 'apps/shade-finder.html',
      dev: 'Shade Lab', rating: '4.8', users: '2.4M', perms: ['profile', 'feed'],
      tagline: 'Your red is out there.',
      about: 'Shade Finder asks three quick questions about your skin (how deep it is, your undertone, and how bold you like to go) and suggests a nude, a pink, a red and a berry that tend to flatter, with how each one wears. Save your favourites to show at a counter.',
      features: ['Three-question undertone guide', 'A nude, pink, red and berry for you', 'Finish and wear notes', 'Save to show at a counter'],
      shots: ['apps/shade-finder/shot-1.jpg', 'apps/shade-finder/shot-2.jpg', 'apps/shade-finder/shot-3.jpg'],
      version: '4.6', size: '10 KB',
      updates: [ { v: '4.6', ago: 2, notes: 'Party shades for December.' }, { v: '4.2', ago: 80, notes: 'Wear notes on every shade.' }, { v: '3.8', ago: 220, notes: 'Signed in with GENEXXO.' } ],
      reviews: [ { who: '@red_lip_rosa', stars: 5, ago: 1, text: 'Found a red that doesn’t make me look tired. A miracle.' }, { who: '@deep_tone_dee', stars: 5, ago: 9, text: 'Finally an app that has shades for deep skin.' }, { who: '@nude_ned', stars: 4, ago: 20, text: 'The nude it picked is perfect.' } ] },
    { name: 'Swatch Book', color: '#C2417A', desc: 'Every lipstick you own, swatched and sorted', key: 'swatch-book', url: 'apps/swatch-book.html',
      dev: 'Rouge Atelier', rating: '4.7', users: '920K', perms: ['profile', 'feed'],
      tagline: 'Your collection at a glance.',
      about: 'Swatch Book keeps your lipsticks in one place, sorted by colour family, with the finish and how much you love each one. Compare two side by side before you buy a third that looks the same.',
      features: ['Your collection by colour', 'Finishes and favourites', 'Compare two shades', 'Spot near-duplicates before you buy'],
      shots: ['apps/swatch-book/shot-1.jpg', 'apps/swatch-book/shot-2.jpg', 'apps/swatch-book/shot-3.jpg'],
      version: '2.5', size: '9 KB',
      updates: [ { v: '2.5', ago: 5, notes: 'Near-duplicate warning.' }, { v: '2.2', ago: 90, notes: 'Side-by-side compare.' }, { v: '1.8', ago: 230, notes: 'Signed in with GENEXXO.' } ],
      reviews: [ { who: '@swatch_sam', stars: 5, ago: 3, text: 'Told me I already own that pink. Three times.' }, { who: '@red_lip_rosa', stars: 5, ago: 13, text: 'Lovely to see the whole collection.' }, { who: '@mua_mel', stars: 4, ago: 29, text: 'Great for my kit too.' } ] },
    { name: 'Shelf Life', color: '#A0674B', desc: 'Know when your makeup is past its best', key: 'shelf-life', url: 'apps/shelf-life.html',
      dev: 'Refill & Rose', rating: '4.7', users: '640K', perms: ['profile', 'feed'],
      tagline: 'Fresh makeup, every time.',
      about: 'Shelf Life tracks when you opened each product and how long it keeps once open (the little open-jar symbol on the pack, such as 12M for twelve months). It reminds you before something is past its best, and tells you which bin or refill scheme it goes in.',
      features: ['Opened dates for everything', 'Reminders before it expires', 'The open-jar symbol explained', 'Recycling and refill notes'],
      shots: ['apps/shelf-life/shot-1.jpg', 'apps/shelf-life/shot-2.jpg', 'apps/shelf-life/shot-3.jpg'],
      version: '1.9', size: '9 KB',
      updates: [ { v: '1.9', ago: 4, notes: 'Recycling notes.' }, { v: '1.6', ago: 80, notes: 'Reminders.' }, { v: '1.2', ago: 220, notes: 'Signed in with GENEXXO.' } ],
      reviews: [ { who: '@nude_ned', stars: 5, ago: 2, text: 'My mascara was two years old. Oops.' }, { who: '@swatch_sam', stars: 4, ago: 14, text: 'Handy and quick.' }, { who: '@clean_cleo', stars: 5, ago: 33, text: 'The recycling notes are brilliant.' } ] }
  ],
  pros: [
    { key: 'chloe-martin-mua', name: 'Chloé Martin Makeup', color: '#E11D48', tag: 'Editorial and event makeup · lessons, parties, red carpet', role: 'Makeup artist',
      img: U('1581841064838-a470c740e8ee', 800, 800), base: 'London, UK', langs: 'English, French', years: 14, rating: '4.9', reviewsN: 506, cur: '£',
      creds: ['Makeup artist for London fashion weeks', 'Trained in Paris', 'Works with every skin tone'],
      about: 'Chloé has painted faces for catwalks, magazines and a few famous red carpets. Her lessons are about you: the three products you actually need and the red that makes you feel like yourself, only more so.',
      services: [ { id: 'lesson', name: 'Personal makeup lesson', dur: '90 minutes', price: 120, desc: 'Your face, your kit. Leave with a routine and a shopping list.' },
                  { id: 'event', name: 'Event makeup', dur: '60 minutes', price: 95, desc: 'Parties, awards, big nights. At home or in the studio.' },
                  { id: 'red', name: 'Find your red', dur: '30 minutes', price: 40, desc: 'Ten reds on, one red found.' } ],
      avail: { days: [2, 3, 4, 5, 6], times: ['10:00', '14:00', '17:00'] },
      reviews: [ { who: '@red_lip_rosa', stars: 5, ago: 4, text: 'She found my red in eight minutes.' }, { who: '@deep_tone_dee', stars: 5, ago: 15, text: 'Knew exactly what to do with deep skin.' }, { who: '@nude_ned', stars: 5, ago: 38, text: 'My wedding makeup lasted until 2am.' } ],
      posts: [ { ago: 1, text: 'For a red that lasts: line the whole lip, apply, blot, apply again. The blot is the secret.' }, { ago: 6, text: 'Christmas party bookings are open.' } ],
      tier: 'Pro Zone', verified: true },
    { key: 'daniel-tran-formulation', name: 'Daniel Tran Cosmetic Formulation', color: '#C2417A', tag: 'Formulation for indie beauty brands · lips, balms, colour', role: 'Cosmetic chemist',
      img: U('1558222218-b7b54eede3f3', 800, 800), base: 'Leeds, UK', langs: 'English, Vietnamese', years: 12, rating: '4.8', reviewsN: 184, cur: '£',
      creds: ['MSc cosmetic science', 'Former formulator at a major cosmetics house', 'UK cosmetics regulation trained'],
      about: 'Daniel develops lipsticks, glosses and balms for independent brands: from the first sample to a formula a factory can make, with the safety paperwork UK and EU rules require.',
      services: [ { id: 'call', name: 'Formulation call', dur: '45 minutes', price: 90, desc: 'Talk through your idea, budget and timeline.' },
                  { id: 'brief', name: 'Lip formula development', dur: '8 to 12 weeks', price: 2400, desc: 'Three rounds of samples to a final formula.' },
                  { id: 'safety', name: 'Safety assessment support', dur: 'Per product', price: 650, desc: 'Paperwork ready for a qualified safety assessor.' } ],
      avail: { days: [1, 2, 3, 4], times: ['09:30', '13:30'] },
      reviews: [ { who: '@indie_ines', stars: 5, ago: 9, text: 'Took my balm from kitchen to shelf.' }, { who: '@clean_cleo', stars: 5, ago: 26, text: 'Explains the science without the jargon.' }, { who: '@brand_bea', stars: 4, ago: 60, text: 'Thorough and patient.' } ],
      posts: [ { ago: 2, text: 'Patch test new lip products on your inner arm for 48 hours, especially if you react to fragrance or lanolin.' } ],
      tier: 'Pro Zone', verified: true },
    { key: 'sophie-ward-bridal', name: 'Sophie Ward Bridal Makeup', color: '#A0674B', tag: 'Wedding makeup · brides, bridal parties, trials', role: 'Bridal makeup artist',
      img: U('1780733059130-fd07a8bc5256', 800, 800), base: 'Bath, UK', langs: 'English', years: 10, rating: '4.9', reviewsN: 342, cur: '£',
      creds: ['Over 600 weddings', 'Long-wear and photography specialist', 'Fully insured'],
      about: 'Sophie does wedding makeup that looks like you on your best day, lasts through the tears and photographs beautifully. She travels across the South West with a kit for every skin tone.',
      services: [ { id: 'trial', name: 'Bridal trial', dur: '90 minutes', price: 85, desc: 'Try two looks and choose your lip.' },
                  { id: 'day', name: 'Wedding day: bride', dur: 'On the morning', price: 220, desc: 'Makeup, lashes and a touch-up kit.' },
                  { id: 'party', name: 'Bridal party (per person)', dur: '45 minutes', price: 65, desc: 'Bridesmaids, mothers, anyone.' } ],
      avail: { days: [1, 3, 4, 5, 6], times: ['09:00', '13:00'] },
      reviews: [ { who: '@bride_bella', stars: 5, ago: 7, text: 'My lipstick survived the whole day. And the kissing.' }, { who: '@nude_ned', stars: 5, ago: 22, text: 'Made my mum cry, in a good way.' }, { who: '@mua_mel', stars: 5, ago: 50, text: 'Calm in the chaos.' } ],
      posts: [ { ago: 3, text: 'Wedding lip tip: choose a shade one step deeper than your everyday. Camera flash washes colour out.' } ],
      tier: 'Pro Zone', verified: true }
  ],
  communities: [
    { key: 'swatch-club', name: 'Swatch Club', domain: 'swatch.lipstickxx.com', color: '#E11D48', img: U('1764333746348-1df13b3a4aae', 900, 500),
      scope: 'Global', where: 'Every vanity', members: 412000, online: 7340, tagline: 'Swatches on every skin tone. That’s the point.',
      about: 'Swatches, dupes, reviews and shade advice, with a rule that every new launch gets swatched on at least five skin tones. Honest, kind and very pink.',
      rules: ['Say your skin tone and undertone', 'Natural light swatches please', 'No body talk, only lip talk'],
      mods: ['@swatch_sam', '@deep_tone_dee'],
      threads: [ { t: 'Party reds swatched on 12 skin tones', by: '@swatch_sam', tag: 'SWATCHES', replies: 2140, ago: 0, votes: 5120 }, { t: 'Best long-wear nude for olive skin?', by: '@nude_ned', tag: 'Q&A', replies: 486, ago: 1, votes: 820 }, { t: 'Refillable lipsticks: worth it?', by: '@clean_cleo', tag: 'REFILLS', replies: 342, ago: 2, votes: 610 }, { t: 'Deep skin, finally a berry that works', by: '@deep_tone_dee', tag: 'FINDS', replies: 296, ago: 3, votes: 940 } ],
      events: [ { title: 'Swatch Sunday live', day: 3, time: '18:00', where: 'Online' }, { title: 'Party reds vote', day: 9, time: '20:00', where: 'Online' } ] },
    { key: 'glasgow-beauty-collective', name: 'Glasgow Beauty Collective', domain: 'glasgow.lipstickxx.com', color: '#A0674B', img: U('1551723454-7565a1f5b161', 900, 500),
      scope: 'Local', where: 'Glasgow', members: 5200, online: 96, tagline: 'Makeup artists, students and lipstick lovers in Glasgow.',
      about: 'Monthly meet-ups, kit swaps, a student mentoring scheme and a big Christmas makeover night for charity.',
      rules: ['Hygiene first at every meet-up', 'Credit the artist', 'Mentors give their time free'],
      mods: ['@mua_mel', '@glasgow_gem'],
      threads: [ { t: 'Christmas makeover night: volunteers needed', by: '@glasgow_gem', tag: 'EVENT', replies: 48, ago: 0, votes: 102 }, { t: 'Kit swap list', by: '@mua_mel', tag: 'SWAP', replies: 36, ago: 1, votes: 58 }, { t: 'Students: portfolio night', by: '@mua_mel', tag: 'STUDENTS', replies: 22, ago: 2, votes: 44 } ],
      events: [ { title: 'Kit swap meet-up', day: 5, time: '18:30', where: 'Merchant City, Glasgow' }, { title: 'Christmas makeover night', day: 21, time: '18:00', where: 'Finnieston, Glasgow' } ] }
  ],
  feed: [
    { av: 'LX', avBg: CRIMSON, author: 'LipstickXX Editorial', sub: 'Featured · Just now', badge: '★ FEATURED',
      text: 'Reds, nudes, glosses, balms, refills and the artists who know which one is yours. Every shade, every skin tone: lipstick, all in one place.',
      img: U('1631214499500-2e34edcaccfe', 800, 600), eng: '♡ 62.4K · 💬 5.6K · ↗ 7.2K' },
    { av: 'NA', avBg: BERRY, author: '@nude_nadia', sub: 'Shades · Just now', badge: 'COMMUNITY',
      text: 'Shade Finder picked a soft rose nude and a blue-red for me. Wore the nude to work and three people asked what it was 🤎',
      img: U('1594465919760-441fe5908ab0', 800, 600), eng: '♡ 21.8K · 💬 2.6K · ↗ 780' },
    { av: 'RA', avBg: CRIMSON, author: 'Rouge Atelier', sub: 'Founding Partner · Brand Zone', badge: 'BRAND ZONE',
      text: 'The <b>Party Red</b> is back for December: a blue-red satin that flatters almost everyone, made in our Bermondsey workshop since 1962.',
      img: U('1626895872564-b691b6877b83', 800, 600), eng: '♡ 14.2K · 💬 1.1K · ↗ 1.8K' },
    { av: 'VP', avBg: BERRY, author: 'Velvet Pout', sub: 'Brand Zone · 1h ago', badge: 'BRAND ZONE',
      text: 'Sparkle without the stickiness. The <b>Frost Gloss</b> is our party-season gloss, with shea to keep lips soft.',
      img: U('1758605456769-7f3d0939f623', 800, 600), eng: '♡ 6.4K · 💬 480 · ↗ 520' },
    { av: 'MM', avBg: NUDE, author: '@mua_mel', sub: 'Makeup Artists · 2h ago', badge: 'COMMUNITY',
      text: 'Bridal trial this morning: soft rose cheeks, a nude with a little warmth, and a lip that’ll survive the kiss. Glasgow, you’re gorgeous ✨',
      img: U('1773688189414-7637b9b138e1', 800, 600), eng: '♡ 7.8K · 💬 620 · ↗ 240' },
    { av: 'SL', avBg: NUDE, author: 'Shade Lab', sub: 'Brand Zone · 4h ago', badge: 'BRAND ZONE',
      text: 'Can’t find your perfect shade? We’ll <b>mix it for you</b>: send a photo or a swatch, and we’ll match it in a week.',
      img: U('1773372238338-f26460145162', 800, 600), eng: '♡ 5.2K · 💬 410 · ↗ 620' },
    { av: 'CM', avBg: CRIMSON, author: 'Chloé Martin Makeup', sub: 'Makeup Artists · 6h ago', badge: 'PRO ZONE',
      text: 'Line the whole lip, not just the edge. It makes the colour last twice as long and stops it bleeding at the corners.',
      img: U('1709477542170-f11ee7d471a0', 800, 600), eng: '♡ 4.2K · 💬 290 · ↗ 680' }
  ],
  prompts: ['Which red lipstick suits warm undertones?', 'How do I make lipstick last all night?', 'What does 12M on my lipstick mean?', 'Find a bridal makeup artist near Bath'],
  businesses: ['pigment-north', 'bloom-packaging']
};

/* the four Brand Zones and two Business Zones */
const brand = (o) => Object.assign({ kind: 'brand', gw: 'lipstick', verified: true }, o);
Object.assign(ZONES, {
  'rouge-atelier': brand({ key: 'rouge-atelier', name: 'Rouge Atelier', color: '#E11D48', gradient: CRIMSON, tier: 'Founding Partner',
    tagline: 'Lipstick made in London since 1962', stats: { followers: '286K', content: '1.3K', products: '64' },
    ad: { badge: 'Featured', img: U('1626895872564-b691b6877b83', 760, 760), hl: 'The Party Red.', sub: 'A blue-red satin, made in Bermondsey since 1962.', meta: 'From £14' },
    products: [
      { name: 'Party Red Lipstick', price: '£26', tag: 'FLAGSHIP', emoji: '💄', rating: 4.9, reviews: 6420, cat: 'lipstick', special: true, desc: 'A blue-red satin with eight hours of wear, in a refillable brass case.', features: ['Vegan', 'Refillable', 'Fragrance-free'], review: { who: 'Rosa M.', text: 'The only red I own now.' } },
      { name: 'Satin Lipstick', price: '£24', tag: 'BESTSELLER', emoji: '🌹', rating: 4.8, reviews: 8140, cat: 'lipstick', desc: 'Our classic finish in 36 shades, from bare nudes to deep plums.', features: ['36 shades', 'Refillable'], review: { who: 'Dee A.', text: 'Shades for deep skin that actually show up.' } },
      { name: 'Lip Liner', price: '£14', emoji: '✏️', rating: 4.7, reviews: 3260, cat: 'liner', desc: 'A creamy liner that matches every lipstick shade.', features: ['36 shades'], review: { who: 'Ned P.', text: 'Stops the bleed completely.' } },
      { name: 'Lipstick Refill', price: '£16', tag: 'SPECIAL', emoji: '♻️', rating: 4.8, reviews: 2180, cat: 'refills', special: true, desc: 'A refill bullet for any Rouge Atelier case.', features: ['All shades'], review: { who: 'Cleo F.', text: 'Same lipstick, less waste.' } },
      { name: 'The Red Edit (3 minis)', price: '£32', emoji: '🎁', rating: 4.9, reviews: 1460, cat: 'gifts', desc: 'Three mini reds: blue-red, orange-red and brick.', features: ['Gift boxed'], review: { who: 'Sam K.', text: 'The perfect present.' } }
    ],
    shopCats: [ { key: 'lipstick', label: 'Lipstick', icon: '💄' }, { key: 'liner', label: 'Liner', icon: '✏️' }, { key: 'refills', label: 'Refills', icon: '♻️' }, { key: 'gifts', label: 'Gifts', icon: '🎁' } ],
    feed: [
      { type: 'post', sub: 'Brand post · 2h', text: 'The <b>Party Red</b>, poured by hand in Bermondsey.', img: U('1619352520578-8fefbfa2f904', 800, 440), eng: '♡ 14.2K · 💬 1.1K · ↗ 1.8K', product: 0 },
      { type: 'post', sub: 'In the workshop · Yesterday', text: 'Every bullet is flamed for a second to give it that glassy finish. We still do it by hand.', img: U('1625093742435-6fa192b6fb10', 800, 440), eng: '♡ 5.6K · 💬 380' },
      { type: 'community', who: 'Dee A.', whoBg: BERRY, sub: 'Community · 1d', text: 'Is the Party Red OK on very deep skin?', eng: '♡ 420 · 💬 96', reply: 'Hi Dee! Yes: blue-reds tend to look beautiful on deep skin. If you’d like a little more warmth, try Cherrywood, our deep red with a brown base. Pop into Shade Finder for a side-by-side, or book a free shade chat with our team. 💄' }
    ],
    events: [ { zoneEvent: true, tag: 'LIVE', title: 'Rouge Atelier Live · Party shades', when: 'Live now', desc: 'Our artists try six party reds on six skin tones, live, and answer your questions.', registered: 4680, capacity: 10000 } ],
    about: { founded: 'Bermondsey · 1962', story: 'A small London lipstick house that has poured its reds by hand for more than sixty years. We joined LipstickXX as Founding Partner because our customers are already here.', milestones: [['1962', 'The first Party Red'], ['2019', 'Refillable brass cases'], ['2026', 'Founding Partner on LipstickXX']], values: ['Made in London', 'Refill, don’t replace', 'Shades for every skin tone'] } }),

  'velvet-pout': brand({ key: 'velvet-pout', name: 'Velvet Pout', color: '#C2417A', gradient: BERRY, tier: 'Brand Zone',
    tagline: 'Glosses, balms and lip care', stats: { followers: '118K', content: '560', products: '38' },
    ad: { badge: 'New', img: U('1758605456769-7f3d0939f623', 760, 760), hl: 'Sparkle, not sticky.', sub: 'The Frost Gloss, with shea butter.', meta: 'From £8' },
    products: [
      { name: 'Frost Gloss', price: '£16', tag: 'FLAGSHIP', emoji: '✨', rating: 4.8, reviews: 3820, cat: 'gloss', special: true, desc: 'A sparkly, non-sticky gloss with shea butter, in six shades.', features: ['Vegan', 'Non-sticky'], review: { who: 'Sam K.', text: 'Sparkly without the hair-stuck-to-lips problem.' } },
      { name: 'Overnight Lip Mask', price: '£14', tag: 'BESTSELLER', emoji: '🌙', rating: 4.8, reviews: 5240, cat: 'care', desc: 'A thick balm for sleeping in. Wake up with soft lips.', features: ['Fragrance-free'], review: { who: 'Ned P.', text: 'My winter lips are saved.' } },
      { name: 'Tinted Balm', price: '£10', emoji: '💋', rating: 4.7, reviews: 2860, cat: 'care', desc: 'A sheer wash of colour with SPF 15.', features: ['SPF 15'], review: { who: 'Cleo F.', text: 'My everyday.' } },
      { name: 'Liquid Lip (velvet)', price: '£18', tag: 'SPECIAL', emoji: '🍷', rating: 4.7, reviews: 1460, cat: 'gloss', special: true, desc: 'Velvet matte that doesn’t dry your lips out.', features: ['12 shades'], review: { who: 'Rosa M.', text: 'Comfortable all day.' } }
    ],
    shopCats: [ { key: 'gloss', label: 'Gloss & liquid', icon: '✨' }, { key: 'care', label: 'Lip care', icon: '🌙' } ],
    feed: [ { type: 'post', sub: 'Brand post · 1h', text: 'Velvet matte that feels like nothing: <b>Liquid Lip</b> in twelve shades.', img: U('1760860992755-c432351d47e9', 800, 440), eng: '♡ 6.4K · 💬 480', product: 3 } ],
    events: [ { zoneEvent: true, tag: 'SALE', title: 'Black Friday: a third off lip care', when: 'Nov 27 · All day', desc: 'A third off every balm and mask, for one day.', registered: 3240, capacity: 8000 } ],
    about: { founded: 'Brighton · 2016', story: 'Started at a market stall with one lip balm. Now we make glosses and lip care that feel lovely to wear.', milestones: [['2016', 'The first balm'], ['2022', 'The Frost Gloss'], ['2026', 'Brand Zone on LipstickXX']], values: ['Comfort first', 'Vegan', 'Kind to sensitive lips'] } }),

  'shade-lab': brand({ key: 'shade-lab', name: 'Shade Lab', color: '#A0674B', gradient: NUDE, tier: 'Brand Zone',
    tagline: 'Your shade, mixed to order', stats: { followers: '64.8K', content: '320', products: '12' },
    ad: { badge: 'Featured', img: U('1773372238338-f26460145162', 760, 760), hl: 'Your shade. Exactly.', sub: 'We mix a lipstick to match a photo or a swatch.', meta: 'From £20' },
    products: [
      { name: 'Custom-Mixed Lipstick', price: '£34', tag: 'FLAGSHIP', emoji: '🧪', rating: 4.8, reviews: 1860, cat: 'custom', special: true, desc: 'Send a photo or swatch; we mix your exact shade in the finish you choose.', features: ['Ready in a week', 'Re-order any time'], review: { who: 'Ned P.', text: 'Matched a discontinued nude I loved for ten years.' } },
      { name: 'Shade Match Kit', price: '£20', tag: 'BESTSELLER', emoji: '🎨', rating: 4.7, reviews: 1240, cat: 'custom', desc: 'Twelve sample shades to try at home before we mix.', features: ['Fee off your lipstick'], review: { who: 'Dee A.', text: 'Fun and useful.' } },
      { name: 'Mix It Yourself Workshop', price: '£65', emoji: '👩‍🔬', rating: 4.9, reviews: 420, cat: 'workshops', desc: 'Two hours in our Leeds studio, mixing your own shade.', features: ['Take home two lipsticks'], review: { who: 'Sam K.', text: 'Best birthday afternoon.' } },
      { name: 'Gift Voucher', price: '£34', tag: 'SPECIAL', emoji: '🎁', rating: 4.9, reviews: 680, cat: 'custom', special: true, desc: 'A custom lipstick for someone special.', features: ['Valid 12 months'], review: { who: 'Rosa M.', text: 'My sister loved designing her own.' } }
    ],
    shopCats: [ { key: 'custom', label: 'Custom', icon: '🧪' }, { key: 'workshops', label: 'Workshops', icon: '👩‍🔬' } ],
    feed: [ { type: 'post', sub: 'Brand post · 4h', text: 'From a photo to a lipstick: a custom coral, mixed in our studio this morning.', img: U('1773372238316-5f080152bcf1', 800, 440), eng: '♡ 5.2K · 💬 410', product: 0 } ],
    events: [ { zoneEvent: true, tag: 'EVENT', title: 'Mix your own: Christmas workshop', when: 'Dec 6 · 14:00', desc: 'Two hours in the Leeds studio mixing a party shade.', registered: 64, capacity: 80 } ],
    about: { founded: 'Leeds · 2020', story: 'A cosmetic chemist who kept being asked to remake people’s favourite discontinued shades. So she made it a business.', milestones: [['2020', 'The first custom shade'], ['2024', '20,000 shades mixed'], ['2026', 'Brand Zone on LipstickXX']], values: ['Every shade possible', 'Small batches', 'Made in Leeds'] } }),

  'refill-rose': brand({ key: 'refill-rose', name: 'Refill & Rose', color: '#D9798A', gradient: BLUSH, tier: 'Brand Zone',
    tagline: 'Refillable cases, refills by post', stats: { followers: '52.4K', content: '260', products: '30' },
    ad: { badge: 'Gift', img: U('1583209814683-c023dd293cc6', 760, 760), hl: 'One case. Forever.', sub: 'Refillable makeup, refills by post.', meta: 'From £9' },
    products: [
      { name: 'Refillable Lipstick Case', price: '£22', tag: 'FLAGSHIP', emoji: '🌹', rating: 4.8, reviews: 1640, cat: 'cases', special: true, desc: 'A rose-gold case that takes our refills and most standard bullets.', features: ['Engraving available'], review: { who: 'Cleo F.', text: 'Mine has my initials on. Love it.' } },
      { name: 'Refill Subscription', price: '£9', tag: 'BESTSELLER', emoji: '📦', rating: 4.8, reviews: 2120, cat: 'refills', desc: 'A lipstick refill every two months, in the shade you choose.', features: ['Skip any time'], review: { who: 'Sam K.', text: 'Never run out.' } },
      { name: 'Empties Return Envelope', price: '£0.50', emoji: '♻️', rating: 4.9, reviews: 980, cat: 'refills', desc: 'Send back any brand’s empty lipsticks for proper recycling.', features: ['Any brand'], review: { who: 'Ned P.', text: 'Cleared out my drawer.' } },
      { name: 'Compact Mirror Case', price: '£28', tag: 'SPECIAL', emoji: '🪞', rating: 4.7, reviews: 520, cat: 'cases', special: true, desc: 'A case with a mirror on the lid for touch-ups.', features: ['Rose gold'], review: { who: 'Rosa M.', text: 'So pretty in my bag.' } }
    ],
    shopCats: [ { key: 'cases', label: 'Cases', icon: '🌹' }, { key: 'refills', label: 'Refills', icon: '📦' } ],
    feed: [ { type: 'post', sub: 'Brand post · 1d', text: 'Our <b>empties envelope</b> takes any brand. 120,000 lipsticks recycled so far.', img: U('1596462502278-27bfdc403348', 800, 440), eng: '♡ 3.2K · 💬 240', product: 2 } ],
    events: [ { zoneEvent: true, tag: 'DEADLINE', title: 'Last order for engraved gifts', when: 'Dec 15 · 23:59', desc: 'Order engraved cases by 15 December for delivery before Christmas.', registered: 640, capacity: 2000 } ],
    about: { founded: 'Cardiff · 2021', story: 'Two friends who added up how many lipstick cases they had thrown away. We make one case to keep.', milestones: [['2021', 'The first case'], ['2024', 'Any-brand recycling'], ['2026', 'Brand Zone on LipstickXX']], values: ['Refill, never landfill', 'Any brand recycled', 'Beautiful to keep'] } }),

  'pigment-north': { key: 'pigment-north', kind: 'business', gw: 'lipstick', name: 'Pigment North', color: '#E11D48', gradient: CRIMSON, img: U('1761864293811-d6e937225df4', 900, 500),
    tier: 'Verified', category: 'Cosmetic ingredients', tagline: 'Pigments, waxes and oils for cosmetics makers.',
    about: { founded: 'Huddersfield · 1988', story: 'We supply cosmetic-grade pigments, waxes and oils to lipstick and makeup makers, with the paperwork every ingredient needs for UK and EU rules.' },
    stats: { years: 38, staff: 64, clients: '520 cosmetics makers' },
    caps: [ { name: 'Cosmetic pigments', detail: 'Iron oxides, micas and lakes, every batch tested.' }, { name: 'Waxes and oils', detail: 'Candelilla, carnauba and plant oils, vegan options.' }, { name: 'Regulatory paperwork', detail: 'Specifications and safety data for every ingredient.' } ],
    specs: { moq: '1kg', lead: '3 to 5 days', regions: 'UK & Europe', certs: ['Cosmetic GMP', 'ISO 9001', 'Vegan-certified range'] },
    supplies: [ { kind: 'brand', key: 'rouge-atelier', what: 'Pigments for every Rouge Atelier red' }, { kind: 'brand', key: 'shade-lab', what: 'The custom-mix pigment library' } ],
    cases: [ { title: 'A vegan lipstick launch', text: 'Replaced beeswax and carmine across a 24-shade range.' } ],
    feed: [ { sub: 'Product · 3d', text: 'New: a plant-based red lake for vegan reds.' }, { sub: 'Notice · 1w', text: 'Christmas: last orders 17 December.' } ],
    contact: { person: 'Rachel Moss, Technical sales', response: 'Replies within 24 hours' } },

  'bloom-packaging': { key: 'bloom-packaging', kind: 'business', gw: 'lipstick', name: 'Bloom Packaging', color: '#D9798A', gradient: BLUSH, img: U('1758188753373-5b01a0fc6d9d', 900, 500),
    tier: 'Verified', category: 'Cosmetics packaging', tagline: 'Refillable cases and recyclable packaging for beauty brands.',
    about: { founded: 'Telford · 2003', story: 'We design and make lipstick cases, compacts and boxes, with a focus on refillable metal and recyclable card.' },
    stats: { years: 23, staff: 140, clients: '310 beauty brands' },
    caps: [ { name: 'Refillable cases', detail: 'Brass and aluminium cases that last for years.' }, { name: 'Recyclable boxes', detail: 'Plastic-free card with plant-based inks.' }, { name: 'Engraving and finishing', detail: 'Logos, initials and colours.' } ],
    specs: { moq: '2,000 units', lead: '6 to 10 weeks', regions: 'UK & Europe', certs: ['ISO 9001', 'FSC card', 'Living Wage employer'] },
    supplies: [ { kind: 'brand', key: 'refill-rose', what: 'Every Refill & Rose case' }, { kind: 'brand', key: 'rouge-atelier', what: 'The brass Party Red case' } ],
    cases: [ { title: 'An indie brand’s first refillable', text: 'From sketch to 5,000 cases in nine weeks.' } ],
    feed: [ { sub: 'Projects · 5d', text: 'A new refill mechanism that fits most standard bullets.' } ],
    contact: { person: 'Neil Carter, New brands', response: 'Replies within one working day' } }
});

/* events in the Events tab */
gxEvents('lipstick', [
  { gw: 'lipstick', zone: 'rouge-atelier', type: 'Live', icon: '🔴', live: true, time: 'Live Now', title: 'Rouge Atelier Live · Party shades', desc: 'Six party reds on six skin tones, live, with your questions answered.' },
  { gw: 'lipstick', type: 'Event', icon: '💄', time: 'Nov 23', title: 'Swatch Sunday live', desc: 'Swatch Club swatches this week’s launches on every skin tone.' },
  { gw: 'lipstick', zone: 'velvet-pout', type: 'Sale', icon: '🌙', time: 'Nov 27', title: 'Velvet Pout Black Friday', desc: 'A third off every balm and mask, for one day.' },
  { gw: 'lipstick', type: 'Event', icon: '🗳️', time: 'Nov 29', title: 'Party reds: the community vote', desc: 'Swatch Club picks the red of the season.' },
  { gw: 'lipstick', zone: 'shade-lab', type: 'Event', icon: '🧪', time: 'Dec 6', title: 'Mix your own: Christmas workshop, Leeds', desc: 'Shade Lab: two hours mixing your own party shade.' },
  { gw: 'lipstick', type: 'Event', icon: '✨', time: 'Dec 11', title: 'Christmas makeover night, Glasgow', desc: 'Glasgow Beauty Collective: makeovers for a local charity.' },
  { gw: 'lipstick', type: 'Event', icon: '👰', time: 'Dec 3', title: 'Wedding makeup Q&A', desc: 'Sophie Ward on long-wear lips, trials and the morning of.' },
  { gw: 'lipstick', zone: 'refill-rose', type: 'Deadline', icon: '🎁', time: 'Dec 15', title: 'Last order for engraved gifts', desc: 'Refill & Rose: engraved cases by midnight for Christmas.' }
]);
})();
/* ═════════ /LIPSTICKXX ═════════ */
