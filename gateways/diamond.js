/* ═════════ DIAMONDXX — a Jewelry demo gateway (2026-11-20, Sean; build -88) ═════════
   Built like SushiXX: theme, feed, 4 Brand Zones, 2 Business Zones, 3 Pros, 2 communities, 3 apps, events.
   Palette (dark): midnight, ice blue, rose. Home sector: Jewelry (key jewellery). Tone: honest about natural vs
   lab-grown, prices labelled illustrative, provenance first. Brands, pros and communities are fictional; places are real. */
(function(){
const U = (id, w, h) => `https://images.unsplash.com/photo-${id}?w=${w}&h=${h}&fit=crop&q=75`;
const ICE = 'linear-gradient(135deg,#A5D8FF,#3B6E9E)', ROSE = 'linear-gradient(135deg,#F472B6,#9D174D)', PLAT = 'linear-gradient(135deg,#D1D5DB,#6B7280)', GOLD = 'linear-gradient(135deg,#E7C46A,#9C7A2B)';

GATEWAYS.diamond = {
  name: 'DiamondXX', domain: 'diamondxx.com', emoji: '💎', sector: 'jewellery', live: true,
  tagline: 'The Diamond Universe',
  theme: {
    bg: '#0C0E14', text: '#F1F3F8', cardBg: 'rgba(255,255,255,.045)', cardBorder: 'rgba(165,216,255,.16)',
    headerBg: 'linear-gradient(180deg,#1A2030,#0C0E14)', accent: '#A5D8FF', accentAlt: '#F472B6', dark: true
  },
  gradient: 'linear-gradient(135deg,#0C0E14,#3B6E9E,#F472B6)',
  stats: { members: '3.9M', brands: '4,100+', agents: '66' },
  spaces: ['All Feed', 'Engagement', 'Lab-Grown', 'The 4Cs', 'Bespoke', 'Heirlooms'],
  trending: ['#Proposal', '#LabGrown', '#HattonGarden'],
  brandZones: [
    { key: 'hatton-stone', name: 'Hatton & Stone', color: '#A5D8FF', tier: 'Founding Partner', tag: 'Diamond jewellers in Hatton Garden since 1931' },
    { key: 'lumen-lab', name: 'Lumen Lab Diamonds', color: '#F472B6', tier: 'Brand Zone', tag: 'Lab-grown diamonds, made with renewable power' },
    { key: 'facet-co', name: 'Facet & Co.', color: '#D1D5DB', tier: 'Brand Zone', tag: 'Engagement rings, designed online, made in Birmingham' },
    { key: 'clarity-care', name: 'Clarity Care', color: '#E7C46A', tier: 'Brand Zone', tag: 'Cleaning, checks and cover for the jewellery you love' }
  ],
  apps: [
    { name: '4Cs Guide', color: '#A5D8FF', desc: 'Cut, colour, clarity and carat, made simple', key: 'four-cs', url: 'apps/four-cs.html',
      dev: 'Hatton & Stone', rating: '4.8', users: '1.6M', perms: ['profile', 'feed'],
      tagline: 'Know what you’re looking at.',
      about: '4Cs Guide explains how a diamond is graded and what each grade means to the eye. Move the sliders for cut, colour, clarity and carat to see where the money goes, with an illustrative price range for natural and lab-grown stones.',
      features: ['Each C explained in plain English', 'Sliders with what you’d actually see', 'Illustrative natural vs lab-grown prices', 'Save a shortlist'],
      shots: ['apps/four-cs/shot-1.jpg', 'apps/four-cs/shot-2.jpg', 'apps/four-cs/shot-3.jpg'],
      version: '3.3', size: '10 KB',
      updates: [ { v: '3.3', ago: 3, notes: 'Natural vs lab-grown side by side.' }, { v: '3.0', ago: 80, notes: 'Shortlists.' }, { v: '2.4', ago: 220, notes: 'Signed in with GENEXXO.' } ],
      reviews: [ { who: '@proposing_paul', stars: 5, ago: 1, text: 'Walked into Hatton Garden knowing what I was talking about.' }, { who: '@ring_hunter_rae', stars: 5, ago: 8, text: 'Learned I don’t need D colour. Saved a fortune.' }, { who: '@heirloom_hal', stars: 4, ago: 21, text: 'Clear and fair.' } ] },
    { name: 'Ring Sizer', color: '#F472B6', desc: 'Find a ring size from a string or an old ring', key: 'ring-sizer', url: 'apps/ring-sizer.html',
      dev: 'Facet & Co.', rating: '4.7', users: '1.1M', perms: ['profile', 'feed'],
      tagline: 'The right size, secretly.',
      about: 'Ring Sizer turns a measurement into a ring size: wrap a strip of paper round a finger, or measure across a ring they already wear, and it gives UK, US and EU sizes. Tips for measuring someone without them knowing included.',
      features: ['From finger circumference or ring diameter', 'UK, US and EU sizes', 'Secret-sizing tips', 'Saved sizes for the people you buy for'],
      shots: ['apps/ring-sizer/shot-1.jpg', 'apps/ring-sizer/shot-2.jpg', 'apps/ring-sizer/shot-3.jpg'],
      version: '2.1', size: '9 KB',
      updates: [ { v: '2.1', ago: 5, notes: 'From a ring they already wear.' }, { v: '1.8', ago: 90, notes: 'EU sizes.' }, { v: '1.4', ago: 230, notes: 'Signed in with GENEXXO.' } ],
      reviews: [ { who: '@proposing_paul', stars: 5, ago: 2, text: 'Measured her ring while she slept. Perfect fit.' }, { who: '@ring_hunter_rae', stars: 4, ago: 12, text: 'Handy for gifts.' }, { who: '@jq_jess', stars: 5, ago: 30, text: 'I recommend it to customers.' } ] },
    { name: 'Carat Size', color: '#D1D5DB', desc: 'See how big a carat really looks', key: 'carat-size', url: 'apps/carat-size.html',
      dev: 'Lumen Lab Diamonds', rating: '4.7', users: '720K', perms: ['profile', 'feed'],
      tagline: 'One carat, on your hand.',
      about: 'Carat Size draws diamonds of different weights and shapes at their real size on your screen, so you can see the difference between 0.5 and 1.5 carats before you shop. Compare shapes too: an oval looks bigger than a round of the same weight.',
      features: ['Real-size diamonds on screen', 'Round, oval, emerald, pear and more', 'Millimetre sizes for each carat', 'Compare two side by side'],
      shots: ['apps/carat-size/shot-1.jpg', 'apps/carat-size/shot-2.jpg', 'apps/carat-size/shot-3.jpg'],
      version: '1.7', size: '9 KB',
      updates: [ { v: '1.7', ago: 4, notes: 'Pear and marquise.' }, { v: '1.5', ago: 80, notes: 'Side-by-side compare.' }, { v: '1.0', ago: 220, notes: 'Signed in with GENEXXO.' } ],
      reviews: [ { who: '@ring_hunter_rae', stars: 5, ago: 3, text: 'An oval 1ct looked as big as a round 1.2. Sold.' }, { who: '@heirloom_hal', stars: 4, ago: 15, text: 'Clever and simple.' }, { who: '@proposing_paul', stars: 5, ago: 33, text: 'Helped me pick the size.' } ] }
  ],
  pros: [
    { key: 'margaret-hale-gemmology', name: 'Margaret Hale Gemmology', color: '#A5D8FF', tag: 'Independent diamond grading, valuations and buying advice', role: 'Gemmologist',
      img: U('1760543998147-117ae5649c5c', 800, 800), base: 'London, UK', langs: 'English', years: 24, rating: '4.9', reviewsN: 438, cur: '£',
      creds: ['Gemmologist (FGA) and diamond diploma (DGA)', 'Registered valuer', 'Twenty years in Hatton Garden'],
      about: 'Margaret is independent: she doesn’t sell diamonds, she checks them. She’ll look at a stone before you buy, value the ring you have, or tell you honestly whether that heirloom is a diamond at all.',
      services: [ { id: 'buy', name: 'Buying consultation', dur: '60 minutes', price: 120, desc: 'Look at shortlisted stones with you, with no commission from anyone.' },
                  { id: 'value', name: 'Insurance valuation', dur: 'Report in 5 days', price: 95, desc: 'A written valuation for one item, with photographs.' },
                  { id: 'id', name: 'Is it a diamond?', dur: '20 minutes', price: 35, desc: 'Quick identification of a stone you’re unsure about.' } ],
      avail: { days: [1, 2, 3, 4, 5], times: ['10:00', '13:00', '15:30'] },
      reviews: [ { who: '@proposing_paul', stars: 5, ago: 5, text: 'Talked me out of a stone with a hidden flaw. Worth every penny.' }, { who: '@heirloom_hal', stars: 5, ago: 17, text: 'Grandma’s ring was real. And worth more than we thought.' }, { who: '@ring_hunter_rae', stars: 5, ago: 42, text: 'Honest and kind.' } ],
      posts: [ { ago: 1, text: 'Ask for the grading report and check the number laser-inscribed on the stone’s edge matches it. Every time.' }, { ago: 6, text: 'Christmas proposal season: book consultations early.' } ],
      tier: 'Pro Zone', verified: true },
    { key: 'kenji-mori-bespoke', name: 'Kenji Mori Bespoke Rings', color: '#F472B6', tag: 'Bespoke engagement and wedding rings · design to finish', role: 'Ring designer',
      img: U('1543132220-3ec99c6094dc', 800, 800), base: 'London, UK', langs: 'English, Japanese', years: 15, rating: '4.9', reviewsN: 312, cur: '£',
      creds: ['Trained at a London jewellery school', 'Bench jeweller for ten years', 'Uses recycled platinum and gold'],
      about: 'Kenji designs rings that tell your story: a sketch, a wax model you can try on, then the finished ring made at his bench in Clerkenwell. He works with natural, lab-grown or your own family stones.',
      services: [ { id: 'design', name: 'Design consultation', dur: '60 minutes', price: 0, desc: 'Free. Bring ideas, photos, heirlooms.' },
                  { id: 'ring', name: 'Bespoke engagement ring (making)', dur: '6 to 8 weeks', price: 1400, desc: 'Design, wax, making and setting. Stone extra.' },
                  { id: 'remodel', name: 'Heirloom remodel', dur: '4 to 6 weeks', price: 650, desc: 'A family stone in a new setting.' } ],
      avail: { days: [2, 3, 4, 6], times: ['11:00', '14:00', '17:00'] },
      reviews: [ { who: '@proposing_paul', stars: 5, ago: 7, text: 'She said yes. Mostly to the ring, I suspect.' }, { who: '@heirloom_hal', stars: 5, ago: 20, text: 'Mum’s diamond in a ring my wife loves.' }, { who: '@ring_hunter_rae', stars: 5, ago: 48, text: 'The wax model was magic.' } ],
      posts: [ { ago: 2, text: 'A lower setting catches less on jumpers and gloves. Worth thinking about if you knit, climb or garden.' } ],
      tier: 'Pro Zone', verified: true },
    { key: 'ellie-hart-goldsmith', name: 'Ellie Hart Goldsmith', color: '#E7C46A', tag: 'Resizing, repairs, setting and restoration · Jewellery Quarter', role: 'Goldsmith',
      img: U('1772442125299-dc4d557ec273', 800, 800), base: 'Birmingham, UK', langs: 'English', years: 9, rating: '4.9', reviewsN: 264, cur: '£',
      creds: ['Jewellery Quarter workshop', 'Diamond setting specialist', 'Hallmarking registered'],
      about: 'Ellie runs a small workshop in Birmingham’s Jewellery Quarter: resizing, re-tipping worn claws, resetting stones and bringing tired rings back to life. Most jobs are done in a week.',
      services: [ { id: 'resize', name: 'Ring resize', dur: 'About 1 week', price: 45, desc: 'Up or down, in gold or platinum.' },
                  { id: 'claws', name: 'Re-tip claws', dur: 'About 1 week', price: 60, desc: 'Worn claws rebuilt so the stone stays put.' },
                  { id: 'restore', name: 'Full restoration', dur: 'About 2 weeks', price: 120, desc: 'Clean, polish, check, repair and replate if needed.' } ],
      avail: { days: [1, 2, 3, 4, 5], times: ['09:30', '13:00', '16:00'] },
      reviews: [ { who: '@jq_jess', stars: 5, ago: 4, text: 'Saved a loose diamond before it fell out.' }, { who: '@heirloom_hal', stars: 5, ago: 16, text: 'Grandma’s ring looks new again.' }, { who: '@ring_hunter_rae', stars: 4, ago: 37, text: 'Quick and friendly.' } ],
      posts: [ { ago: 3, text: 'Hold your ring to your ear and tap it gently. If the stone rattles, bring it in now.' } ],
      tier: 'Pro Zone', verified: true }
  ],
  communities: [
    { key: 'ring-talk', name: 'Ring Talk', domain: 'ringtalk.diamondxx.com', color: '#A5D8FF', img: U('1518370265276-f22b706aeac8', 900, 500),
      scope: 'Global', where: 'Everywhere people are about to ask', members: 226000, online: 3920, tagline: 'Proposals, rings and honest advice.',
      about: 'Ring shopping, proposal stories, natural vs lab-grown debates and photos of very shiny hands. No sales talk, just people who’ve been there.',
      rules: ['No selling', 'Say your budget if you want advice', 'Every budget is a good budget'],
      mods: ['@ring_hunter_rae', '@proposing_paul'],
      threads: [ { t: 'Proposal stories: Christmas edition', by: '@proposing_paul', tag: 'STORIES', replies: 1860, ago: 0, votes: 4620 }, { t: 'Natural or lab-grown? Your reasons', by: '@ring_hunter_rae', tag: 'DEBATE', replies: 1120, ago: 1, votes: 2240 }, { t: 'Is a 1ct worth it over a 0.9ct?', by: '@heirloom_hal', tag: 'Q&A', replies: 386, ago: 2, votes: 620 }, { t: 'Rings under £1,000 that look amazing', by: '@budget_bex', tag: 'FINDS', replies: 448, ago: 3, votes: 980 } ],
      events: [ { title: 'Ask a gemmologist live', day: 5, time: '19:00', where: 'Online' }, { title: 'Proposal stories night', day: 13, time: '20:00', where: 'Online' } ] },
    { key: 'jq-makers', name: 'Jewellery Quarter Makers', domain: 'jq.diamondxx.com', color: '#E7C46A', img: U('1772442125263-c9dd28bbd938', 900, 500),
      scope: 'Local', where: 'Birmingham', members: 1900, online: 42, tagline: 'The workshops of the Jewellery Quarter, together.',
      about: 'Jewellers, setters, polishers and students in Birmingham’s Jewellery Quarter: tool swaps, open studios and a Christmas trail.',
      rules: ['Share tools and tips', 'Credit the maker', 'Students welcome'],
      mods: ['@jq_jess', '@ellie_hart'],
      threads: [ { t: 'Christmas open studios trail', by: '@jq_jess', tag: 'EVENT', replies: 52, ago: 0, votes: 118 }, { t: 'Second-hand rolling mill for sale', by: '@setter_sid', tag: 'TOOLS', replies: 14, ago: 1, votes: 22 }, { t: 'Apprenticeships 2027', by: '@ellie_hart', tag: 'CAREERS', replies: 30, ago: 2, votes: 64 } ],
      events: [ { title: 'Christmas open studios trail', day: 15, time: '11:00', where: 'Jewellery Quarter, Birmingham' }, { title: 'Makers’ drinks', day: 6, time: '18:00', where: 'Jewellery Quarter, Birmingham' } ] }
  ],
  feed: [
    { av: 'DX', avBg: ICE, author: 'DiamondXX Editorial', sub: 'Featured · Just now', badge: '★ FEATURED',
      text: 'Engagement rings, natural and lab-grown stones, the 4Cs, bespoke design and the craftspeople of Hatton Garden and the Jewellery Quarter. Diamonds, all in one place.',
      img: U('1768423685978-42fe24ec39a0', 800, 600), eng: '♡ 48.6K · 💬 4.4K · ↗ 5.8K' },
    { av: 'PP', avBg: ROSE, author: '@proposing_paul', sub: 'Engagement · Just now', badge: 'COMMUNITY',
      text: 'Sunset on the beach at Holkham, ring in my pocket for three hours, and I still nearly dropped it. She said yes 💍',
      img: U('1763129636638-615f11f1ad80', 800, 600), eng: '♡ 31.2K · 💬 4.8K · ↗ 1.6K' },
    { av: 'HS', avBg: ICE, author: 'Hatton & Stone', sub: 'Founding Partner · Brand Zone', badge: 'BRAND ZONE',
      text: 'The <b>Hatton Pear</b>: a pear-cut diamond in a halo of smaller stones, set by hand in our workshop on Hatton Garden. Natural or lab-grown, your choice.',
      img: U('1605100804567-1ffe942b5cd6', 800, 600), eng: '♡ 13.4K · 💬 1.1K · ↗ 1.6K' },
    { av: 'LL', avBg: ROSE, author: 'Lumen Lab Diamonds', sub: 'Brand Zone · 1h ago', badge: 'BRAND ZONE',
      text: 'Grown in eight weeks, chemically identical to a mined diamond, made with renewable power. Every <b>Lumen</b> stone comes with its own grading report.',
      img: U('1772047678485-a5743aefa7e6', 800, 600), eng: '♡ 6.8K · 💬 920 · ↗ 680' },
    { av: 'RR', avBg: PLAT, author: '@ring_hunter_rae', sub: 'The 4Cs · 2h ago', badge: 'COMMUNITY',
      text: 'Went for an emerald cut, G colour, VS2. Nobody can see the difference from a D, and we put the savings towards the honeymoon ✨',
      img: U('1780250784120-c83d1bbbebe8', 800, 600), eng: '♡ 9.6K · 💬 1.2K · ↗ 420' },
    { av: 'FC', avBg: PLAT, author: 'Facet & Co.', sub: 'Brand Zone · 4h ago', badge: 'BRAND ZONE',
      text: 'Three solitaires, three settings. Design yours online and we’ll make it in Birmingham in four weeks.',
      img: U('1719924998065-0c60e329ef58', 800, 600), eng: '♡ 5.2K · 💬 410 · ↗ 560' },
    { av: 'EH', avBg: GOLD, author: 'Ellie Hart Goldsmith', sub: 'Heirlooms · 6h ago', badge: 'PRO ZONE',
      text: 'Setting a 1920s diamond into a new band this morning. Old stones were cut by hand, by eye, and you can see it in the light.',
      img: U('1715374033196-0ff662284a7e', 800, 600), eng: '♡ 3.8K · 💬 260 · ↗ 520' }
  ],
  prompts: ['What’s the difference between natural and lab-grown diamonds?', 'How much should I spend on an engagement ring?', 'How do I find out her ring size secretly?', 'Find a jeweller in the Jewellery Quarter to resize a ring'],
  businesses: ['schelde-cutting', 'vault-valuations']
};

/* the four Brand Zones and two Business Zones */
const brand = (o) => Object.assign({ kind: 'brand', gw: 'diamond', verified: true }, o);
Object.assign(ZONES, {
  'hatton-stone': brand({ key: 'hatton-stone', name: 'Hatton & Stone', color: '#A5D8FF', gradient: ICE, tier: 'Founding Partner',
    tagline: 'Diamond jewellers in Hatton Garden since 1931', stats: { followers: '214K', content: '1.0K', products: '220' },
    ad: { badge: 'Featured', img: U('1605100804567-1ffe942b5cd6', 760, 760), hl: 'The Hatton Pear.', sub: 'Hand-set in our Hatton Garden workshop.', meta: 'From £650' },
    products: [
      { name: 'Hatton Pear Halo Ring', price: '£4,800', tag: 'FLAGSHIP', emoji: '💍', rating: 4.9, reviews: 1460, cat: 'engagement', special: true, desc: 'A 1ct pear-cut diamond in a halo of 22 smaller stones, platinum band. Natural (G/VS2) or lab-grown (from £2,100).', features: ['Grading report included', 'Recycled platinum', 'Free resizing for a year'], review: { who: 'Paul D.', text: 'Even better in person.' } },
      { name: 'Classic Solitaire (0.5ct)', price: '£2,200', tag: 'BESTSELLER', emoji: '💎', rating: 4.9, reviews: 2840, cat: 'engagement', desc: 'A round brilliant in a four-claw setting, platinum or 18ct gold.', features: ['Natural or lab-grown'], review: { who: 'Rae N.', text: 'Timeless. Exactly what she wanted.' } },
      { name: 'Diamond Eternity Band', price: '£1,650', emoji: '⭕', rating: 4.8, reviews: 960, cat: 'bands', desc: 'Fifteen diamonds set all the way round.', features: ['Made to your size'], review: { who: 'Hal B.', text: 'A tenth-anniversary hit.' } },
      { name: 'Diamond Stud Earrings', price: '£650', tag: 'SPECIAL', emoji: '✨', rating: 4.9, reviews: 1820, cat: 'earrings', special: true, desc: '0.25ct each, in 18ct white gold.', features: ['Screw backs'], review: { who: 'Bex T.', text: 'My mum hasn’t taken them off.' } },
      { name: 'Ring Consultation', price: '£50', emoji: '🗝️', rating: 4.9, reviews: 3120, cat: 'services', desc: 'An hour with a jeweller in the Hatton Garden showroom. The £50 comes off any ring.', features: ['Book in the app', 'Refunded on any ring'], review: { who: 'Paul D.', text: 'Learned so much.' } }
    ],
    shopCats: [ { key: 'engagement', label: 'Engagement', icon: '💍' }, { key: 'bands', label: 'Bands', icon: '⭕' }, { key: 'earrings', label: 'Earrings', icon: '✨' }, { key: 'services', label: 'Consultations', icon: '🗝️' } ],
    feed: [
      { type: 'post', sub: 'Brand post · 2h', text: 'In the workshop: setting the 22 stones of a <b>Hatton Pear</b> halo.', img: U('1772442125267-7640b4b5f2fe', 800, 440), eng: '♡ 13.4K · 💬 1.1K · ↗ 1.6K', product: 0 },
      { type: 'post', sub: 'Showroom · Yesterday', text: 'Ninety-five years on Hatton Garden. Pop in for a coffee and a look through the loupe.', img: U('1775021723698-b9afeaa084d1', 800, 440), eng: '♡ 4.8K · 💬 320' },
      { type: 'community', who: 'Rae N.', whoBg: ROSE, sub: 'Community · 1d', text: 'Natural or lab-grown: which would you choose?', eng: '♡ 620 · 💬 214', reply: 'Hi Rae! Both are real diamonds and look the same to the eye. Natural stones are rarer and hold their value better; lab-grown ones cost much less for the same size and grade. We sell both, every stone with a grading report, so choose what matters to you. Come and see them side by side. 💎' }
    ],
    events: [ { zoneEvent: true, tag: 'LIVE', title: 'Hatton & Stone Live · Design a ring with us', when: 'Live now', desc: 'Our designers sketch rings from viewers’ ideas, live from the Hatton Garden workshop.', registered: 3860, capacity: 9000 } ],
    about: { founded: 'Hatton Garden · 1931', story: 'Four generations of diamond jewellers on London’s Hatton Garden. We joined DiamondXX as Founding Partner because people researching rings are already here.', milestones: [['1931', 'The first shop on Hatton Garden'], ['2021', 'Lab-grown stones alongside natural'], ['2026', 'Founding Partner on DiamondXX']], values: ['Every stone graded', 'Recycled metals', 'Honest advice, no pressure'] } }),

  'lumen-lab': brand({ key: 'lumen-lab', name: 'Lumen Lab Diamonds', color: '#F472B6', gradient: ROSE, tier: 'Brand Zone',
    tagline: 'Lab-grown diamonds, made with renewable power', stats: { followers: '102K', content: '480', products: '160' },
    ad: { badge: 'New', img: U('1772047678485-a5743aefa7e6', 760, 760), hl: 'Grown, not mined.', sub: 'Lab-grown diamonds with their own grading report.', meta: 'From £350' },
    products: [
      { name: 'Lab-Grown Oval (1.5ct)', price: '£2,400', tag: 'FLAGSHIP', emoji: '🥚', rating: 4.8, reviews: 1260, cat: 'stones', special: true, desc: 'An F colour, VS1 oval, graded independently, ready to set.', features: ['Grading report', 'Renewable power'], review: { who: 'Rae N.', text: 'Huge sparkle for the price.' } },
      { name: 'Lab-Grown Round (1ct)', price: '£1,350', tag: 'BESTSELLER', emoji: '💎', rating: 4.8, reviews: 2140, cat: 'stones', desc: 'An excellent-cut G/VS2 round brilliant.', features: ['Grading report'], review: { who: 'Bex T.', text: 'Can’t tell it from natural.' } },
      { name: 'Tennis Bracelet', price: '£1,800', emoji: '✨', rating: 4.7, reviews: 640, cat: 'jewellery', desc: 'Forty-two lab-grown diamonds in white gold.', features: ['Safety clasp'], review: { who: 'Hal B.', text: 'A showstopper.' } },
      { name: 'Pendant (0.5ct)', price: '£480', tag: 'SPECIAL', emoji: '📿', rating: 4.8, reviews: 920, cat: 'jewellery', special: true, desc: 'A single round diamond on a fine chain.', features: ['18ct white or yellow gold'], review: { who: 'Paul D.', text: 'Perfect Christmas present.' } }
    ],
    shopCats: [ { key: 'stones', label: 'Loose stones', icon: '💎' }, { key: 'jewellery', label: 'Jewellery', icon: '✨' } ],
    feed: [ { type: 'post', sub: 'Brand post · 1h', text: 'Graded, inscribed and ready to set: this week’s <b>lab-grown rounds</b>.', img: U('1599707367072-cd6ada2bc375', 800, 440), eng: '♡ 6.8K · 💬 920', product: 1 } ],
    events: [ { zoneEvent: true, tag: 'EVENT', title: 'Natural vs lab-grown: live Q&A', when: 'Nov 26 · 19:00', desc: 'Our gemmologist answers the big question honestly.', registered: 2140, capacity: 5000 } ],
    about: { founded: 'London · 2019', story: 'We grow diamonds in partner labs powered by renewable energy, and grade every one independently.', milestones: [['2019', 'The first stones'], ['2024', '100% renewable power'], ['2026', 'Brand Zone on DiamondXX']], values: ['Graded independently', 'Renewable power', 'Clear about what they are'] } }),

  'facet-co': brand({ key: 'facet-co', name: 'Facet & Co.', color: '#D1D5DB', gradient: PLAT, tier: 'Brand Zone',
    tagline: 'Engagement rings, designed online, made in Birmingham', stats: { followers: '86.2K', content: '410', products: '90' },
    ad: { badge: 'Featured', img: U('1719924998065-0c60e329ef58', 760, 760), hl: 'Design it. We’ll make it.', sub: 'Choose a shape, a setting and a metal online.', meta: 'From £900' },
    products: [
      { name: 'Design-Your-Own Solitaire', price: '£1,900', tag: 'FLAGSHIP', emoji: '💍', rating: 4.8, reviews: 1680, cat: 'rings', special: true, desc: 'Choose the stone, shape, setting and metal online; made in our Jewellery Quarter workshop in four weeks.', features: ['3D preview', 'Natural or lab-grown'], review: { who: 'Paul D.', text: 'The 3D preview was exactly what arrived.' } },
      { name: 'Trilogy Ring', price: '£2,600', tag: 'BESTSELLER', emoji: '💎', rating: 4.8, reviews: 860, cat: 'rings', desc: 'Three stones for past, present and future.', features: ['Platinum or gold'], review: { who: 'Hal B.', text: 'Our 25th anniversary ring.' } },
      { name: 'Matching Wedding Band', price: '£450', emoji: '⭕', rating: 4.8, reviews: 1120, cat: 'bands', desc: 'Shaped to sit flush against your engagement ring.', features: ['Made to match'], review: { who: 'Rae N.', text: 'Sits perfectly.' } },
      { name: 'Replica Ring to Try', price: '£25', tag: 'SPECIAL', emoji: '🎁', rating: 4.9, reviews: 2240, cat: 'services', special: true, desc: 'A silver replica of your design to try before we make it. The £25 comes off your ring.', features: ['Posted free', 'Refunded on your ring'], review: { who: 'Bex T.', text: 'Wore it for a week. Changed the band width. So glad.' } }
    ],
    shopCats: [ { key: 'rings', label: 'Rings', icon: '💍' }, { key: 'bands', label: 'Bands', icon: '⭕' }, { key: 'services', label: 'Try first', icon: '🎁' } ],
    feed: [ { type: 'post', sub: 'Brand post · 4h', text: 'A <b>halo solitaire</b> on its way to a proposal in the Lake District.', img: U('1613945407943-59cd755fd69e', 800, 440), eng: '♡ 5.2K · 💬 410', product: 0 } ],
    events: [ { zoneEvent: true, tag: 'DEADLINE', title: 'Last order for Christmas proposals', when: 'Dec 1 · 23:59', desc: 'Design by 1 December and we’ll make it in time for Christmas.', registered: 1460, capacity: 3000 } ],
    about: { founded: 'Birmingham · 2016', story: 'Jewellers in the Jewellery Quarter who wanted to let people design their own ring from the sofa.', milestones: [['2016', 'The online designer'], ['2023', 'Replica rings to try'], ['2026', 'Brand Zone on DiamondXX']], values: ['Made in the Jewellery Quarter', 'Try before we make', 'Recycled metals'] } }),

  'clarity-care': brand({ key: 'clarity-care', name: 'Clarity Care', color: '#E7C46A', gradient: GOLD, tier: 'Brand Zone',
    tagline: 'Cleaning, checks and cover for the jewellery you love', stats: { followers: '38.6K', content: '180', products: '14' },
    ad: { badge: 'Gift', img: U('1702149001693-67ca09997ecc', 760, 760), hl: 'Keep it sparkling.', sub: 'Cleaning kits, checks and cover.', meta: 'From £12' },
    products: [
      { name: 'Ring Care Plan (yearly)', price: '£49', tag: 'FLAGSHIP', emoji: '🛡️', rating: 4.7, reviews: 1240, cat: 'plans', special: true, desc: 'Two professional cleans and claw checks a year, plus loss and damage cover up to £5,000.', features: ['At 200 partner jewellers'], review: { who: 'Hal B.', text: 'They spotted a worn claw. Saved the stone.' } },
      { name: 'Diamond Cleaning Kit', price: '£18', tag: 'BESTSELLER', emoji: '🧼', rating: 4.8, reviews: 3260, cat: 'kits', desc: 'A gentle solution, a soft brush and a polishing cloth.', features: ['Safe for diamonds and platinum'], review: { who: 'Rae N.', text: 'Like new in five minutes.' } },
      { name: 'Travel Ring Box', price: '£24', emoji: '📦', rating: 4.7, reviews: 860, cat: 'kits', desc: 'A small padded box for the gym, the beach and the washing-up.', features: ['Leather'], review: { who: 'Bex T.', text: 'My ring lives in it at the gym.' } },
      { name: 'Ultrasonic Cleaner', price: '£45', tag: 'SPECIAL', emoji: '〰️', rating: 4.6, reviews: 540, cat: 'kits', special: true, desc: 'Home ultrasonic cleaning for diamonds in solid settings. Not for fragile or treated stones.', features: ['Read the guide first'], review: { who: 'Paul D.', text: 'Brilliant, literally.' } }
    ],
    shopCats: [ { key: 'plans', label: 'Care plans', icon: '🛡️' }, { key: 'kits', label: 'Kits', icon: '🧼' } ],
    feed: [ { type: 'post', sub: 'Brand post · 1d', text: 'Hand cream and soap dull a diamond fast. A five-minute clean every month brings it back.', img: U('1762505464756-adda1bd2a343', 800, 440), eng: '♡ 2.4K · 💬 160', product: 1 } ],
    events: [ { zoneEvent: true, tag: 'EVENT', title: 'Free ring checks, Hatton Garden', when: 'Dec 6 · 10:00', desc: 'Bring your ring for a free clean and claw check.', registered: 420, capacity: 600 } ],
    about: { founded: 'Manchester · 2018', story: 'A jeweller and an insurer who kept seeing diamonds lost to worn claws. We make care easy.', milestones: [['2018', 'The first care plans'], ['2023', '200 partner jewellers'], ['2026', 'Brand Zone on DiamondXX']], values: ['Prevention first', 'Clear cover, no small print surprises', 'Partner jewellers everywhere'] } }),

  'schelde-cutting': { key: 'schelde-cutting', kind: 'business', gw: 'diamond', name: 'Schelde Cutting Works', color: '#A5D8FF', gradient: ICE, img: U('1780432036547-39f627240c13', 900, 500),
    tier: 'Verified', category: 'Diamond cutting', tagline: 'Cutting and polishing for jewellers, in Antwerp.',
    about: { founded: 'Antwerp · 1958', story: 'A family cutting works in Antwerp’s diamond district, cutting and re-cutting natural and lab-grown stones for jewellers across Europe.' },
    stats: { years: 68, staff: 46, clients: '310 jewellers' },
    caps: [ { name: 'Cutting and polishing', detail: 'Rough to finished stone, every shape.' }, { name: 'Re-cutting', detail: 'Old and chipped stones brought back to life.' }, { name: 'Provenance records', detail: 'Origin documents from rough to polished.' } ],
    specs: { moq: 'One stone', lead: '2 to 6 weeks', regions: 'Europe & UK', certs: ['Kimberley Process compliant', 'Responsible jewellery standard', 'ISO 9001'] },
    supplies: [ { kind: 'brand', key: 'hatton-stone', what: 'Natural stones for the Hatton Pear' } ],
    cases: [ { title: 'A 1920s heirloom', text: 'Re-cut a chipped old-mine stone, losing only 6% of its weight.' } ],
    feed: [ { sub: 'Workshop · 3d', text: 'A record month for pear cuts. Thank you, Hatton Garden.' }, { sub: 'News · 1w', text: 'Christmas: last stones accepted 5 December.' } ],
    contact: { person: 'Pieter Janssens, Trade', response: 'Replies within 24 hours' } },

  'vault-valuations': { key: 'vault-valuations', kind: 'business', gw: 'diamond', name: 'Vault Valuations', color: '#E7C46A', gradient: GOLD, img: U('1721919850259-2a15f09caeb2', 900, 500),
    tier: 'Verified', category: 'Jewellery valuation', tagline: 'Independent valuations for insurers and jewellers.',
    about: { founded: 'London · 2001', story: 'Registered valuers producing insurance and probate valuations for jewellers, insurers and families, independent of any seller.' },
    stats: { years: 25, staff: 30, clients: '140 jewellers & insurers' },
    caps: [ { name: 'Insurance valuations', detail: 'Written, photographed and updated every three years.' }, { name: 'Probate valuations', detail: 'For estates, sensitively done.' }, { name: 'Bulk valuations', detail: 'For jewellers valuing new stock.' } ],
    specs: { moq: 'One item', lead: '5 working days', regions: 'UK', certs: ['Registered valuers', 'Professional indemnity insured', 'Data protection registered'] },
    supplies: [ { kind: 'brand', key: 'clarity-care', what: 'Valuations for every Ring Care Plan' } ],
    cases: [ { title: 'An estate of 200 pieces', text: 'Valued for probate in three weeks.' } ],
    feed: [ { sub: 'Advice · 5d', text: 'Gold prices have moved a lot. If your valuation is over three years old, it’s probably out of date.' } ],
    contact: { person: 'Alison Grey, Valuations', response: 'Replies within one working day' } }
});

/* events in the Events tab */
gxEvents('diamond', [
  { gw: 'diamond', zone: 'hatton-stone', type: 'Live', icon: '🔴', live: true, time: 'Live Now', title: 'Hatton & Stone Live · Design a ring with us', desc: 'Designers sketch rings from viewers’ ideas, live from Hatton Garden.' },
  { gw: 'diamond', type: 'Event', icon: '💎', time: 'Nov 25', title: 'Ask a gemmologist live', desc: 'Ring Talk with Margaret Hale: your diamond questions, answered independently.' },
  { gw: 'diamond', zone: 'lumen-lab', type: 'Event', icon: '🧪', time: 'Nov 26', title: 'Natural vs lab-grown: live Q&A', desc: 'Lumen Lab’s gemmologist answers the big question honestly.' },
  { gw: 'diamond', zone: 'facet-co', type: 'Deadline', icon: '💍', time: 'Dec 1', title: 'Last order for Christmas proposals', desc: 'Facet & Co.: design by midnight and it’s made in time.' },
  { gw: 'diamond', zone: 'clarity-care', type: 'Event', icon: '🧼', time: 'Dec 6', title: 'Free ring checks, Hatton Garden', desc: 'Clarity Care: a free clean and claw check while you wait.' },
  { gw: 'diamond', type: 'Event', icon: '🥂', time: 'Dec 3', title: 'Proposal stories night', desc: 'Ring Talk shares the best proposals of the year.' },
  { gw: 'diamond', type: 'Event', icon: '🎄', time: 'Dec 5', title: 'Jewellery Quarter Christmas open studios', desc: 'Jewellery Quarter Makers open their workshops for a festive trail.' },
  { gw: 'diamond', type: 'Event', icon: '🛠️', time: 'Dec 10', title: 'Ring care masterclass, Birmingham', desc: 'Ellie Hart on claws, cleaning and when to bring a ring in.' }
]);
})();
/* ═════════ /DIAMONDXX ═════════ */
