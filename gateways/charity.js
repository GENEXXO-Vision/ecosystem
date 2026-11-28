/* ═════════ CHARITYXX — a Nonprofit demo gateway (2026-11-28, Sean; build -102) ═════════
   Built with the _tools/README.md recipe. Palette (light): warm coral, sunshine and a fresh teal.
   Home sector: Nonprofit (listed only there). Every charity, company, pro and product is fictional; places are real.
   CARE (_tools/CARE-BRIEFS.md): volunteering, fundraising events, how charities work. Never real donation flows,
   real charities’ names or guilt-led images of people in need. Signpost: the Charity Commission register,
   to check a charity is real before giving. */
(function(){
const U = (id, w, h) => `https://images.unsplash.com/photo-${id}?w=${w}&h=${h}&fit=crop&q=75`;
const CORAL = 'linear-gradient(135deg,#FDA4AF,#E11D48)', SUN = 'linear-gradient(135deg,#FDE68A,#D97706)', TEAL = 'linear-gradient(135deg,#5EEAD4,#0F766E)', BLUE = 'linear-gradient(135deg,#93C5FD,#1D4ED8)';

GATEWAYS.charity = {
  name: 'CharityXX', domain: 'charityxx.com', emoji: '🤝', sector: 'nonprofit', live: true,
  tagline: 'The Doing Good Universe',
  theme: {
    bg: '#FFF8F6', text: '#2B1418', cardBg: '#FFFFFF', cardBorder: 'rgba(43,20,24,.08)',
    headerBg: 'linear-gradient(180deg,#FFFFFF,#FFF8F6)', accent: '#E11D48', accentAlt: '#0F766E', dark: false
  },
  gradient: 'linear-gradient(135deg,#FDA4AF,#E11D48,#FDE68A)',
  stats: { members: '2.1M', brands: '480+', agents: '24' },
  spaces: ['All Feed', 'Volunteering', 'Fundraising', 'Charity Shops', 'How Charities Work', 'Giving Safely'],
  trending: ['#VolunteerHour', '#FunRun', '#CheckTheRegister'],
  brandZones: [
    { key: 'handsup-volunteering', name: 'Handsup Volunteering', color: '#E11D48', tier: 'Founding Partner', tag: 'Find a volunteering role near you, in minutes' },
    { key: 'stride-for-good', name: 'Stride for Good', color: '#D97706', tier: 'Brand Zone', tag: 'Fun runs and walks that raise money for local causes' },
    { key: 'second-chapter-shops', name: 'Second Chapter Shops', color: '#0F766E', tier: 'Brand Zone', tag: 'Charity shops run by volunteers' },
    { key: 'kindkit', name: 'Kindkit', color: '#1D4ED8', tier: 'Brand Zone', tag: 'Kit for litter picks, food drives and bake sales' }
  ],
  apps: [
    { name: 'Volunteer Hours', color: '#E11D48', desc: 'Log your volunteering and see what it adds up to', key: 'volunteer-hours', url: 'apps/volunteer-hours.html',
      dev: 'Handsup Volunteering', rating: '4.9', users: '610K', perms: ['profile', 'feed'],
      tagline: 'Every hour counts.',
      about: 'Volunteer Hours logs the time you give, by role and by month, so you can see what it adds up to over a year. Useful for your CV, for Duke of Edinburgh-style awards and for a little pride.',
      features: ['Log hours by role', 'Month and year totals', 'Your roles', 'Share a milestone'],
      shots: ['apps/volunteer-hours/shot-1.jpg', 'apps/volunteer-hours/shot-2.jpg', 'apps/volunteer-hours/shot-3.jpg'],
      version: '2.4', size: '9 KB',
      updates: [ { v: '2.4', ago: 2, notes: 'Year totals.' }, { v: '2.0', ago: 66, notes: 'Roles.' }, { v: '1.5', ago: 200, notes: 'Signed in with GENEXXO.' } ],
      reviews: [ { who: '@saturday_shop_sue', stars: 5, ago: 1, text: '212 hours this year. Who knew?' }, { who: '@liam_okafor_volunteers', stars: 5, ago: 18, text: 'Our volunteers love seeing their totals.' }, { who: '@first_5k_jas', stars: 4, ago: 40, text: 'Handy for my CV.' } ] },
    { name: 'Fundraising Page Builder', color: '#D97706', desc: 'Plan a fundraising page before you go live (demo)', key: 'fundraise-page', url: 'apps/fundraise-page.html',
      dev: 'Stride for Good', rating: '4.8', users: '380K', perms: ['profile', 'feed'],
      tagline: 'Tell your story. Set a target.',
      about: 'Fundraising Page Builder helps you plan a page for a challenge: your story, a photo idea, a target and thank-you messages. It’s a demo: it never takes money. When you’re ready, use a recognised fundraising platform, and check your charity on the Charity Commission register.',
      features: ['Your story, step by step', 'A sensible target', 'Thank-you messages', 'Never takes money'],
      shots: ['apps/fundraise-page/shot-1.jpg', 'apps/fundraise-page/shot-2.jpg', 'apps/fundraise-page/shot-3.jpg'],
      version: '1.5', size: '9 KB',
      updates: [ { v: '1.5', ago: 3, notes: 'Thank-you messages.' }, { v: '1.2', ago: 70, notes: 'Target helper.' }, { v: '1.0', ago: 190, notes: 'Signed in with GENEXXO.' } ],
      reviews: [ { who: '@first_5k_jas', stars: 5, ago: 2, text: 'Made my page so much better.' }, { who: '@ruth_mills_fundraising', stars: 5, ago: 24, text: 'Good advice built in.' }, { who: '@saturday_shop_sue', stars: 4, ago: 48, text: 'Simple.' } ] },
    { name: 'Where £10 Goes', color: '#0F766E', desc: 'How an example charity spends a donation, explained', key: 'where-ten-goes', url: 'apps/where-ten-goes.html',
      dev: 'Second Chapter Shops', rating: '4.8', users: '290K', perms: ['profile', 'feed'],
      tagline: 'How charities really work.',
      about: 'Where £10 Goes shows how an example, made-up charity might spend £10: the work itself, the staff who run it, raising the next pound and keeping the lights on. It explains why running costs matter, and how to look up any real charity’s accounts on the Charity Commission register.',
      features: ['An example £10, split up', 'Why running costs matter', 'Questions to ask', 'Check the register'],
      shots: ['apps/where-ten-goes/shot-1.jpg', 'apps/where-ten-goes/shot-2.jpg', 'apps/where-ten-goes/shot-3.jpg'],
      version: '1.3', size: '9 KB',
      updates: [ { v: '1.3', ago: 1, notes: 'Questions to ask.' }, { v: '1.1', ago: 60, notes: 'Running costs explained.' }, { v: '1.0', ago: 180, notes: 'Signed in with GENEXXO.' } ],
      reviews: [ { who: '@ben_hart_trustees', stars: 5, ago: 3, text: 'Finally, a fair explanation of overheads.' }, { who: '@saturday_shop_sue', stars: 5, ago: 26, text: 'I send it to doubters.' }, { who: '@first_5k_jas', stars: 4, ago: 52, text: 'Eye-opening.' } ] }
  ],
  pros: [
    { key: 'liam-okafor-volunteers', name: 'Liam Okafor Volunteer Training', color: '#E11D48', tag: 'Helping charities welcome and keep volunteers', role: 'Volunteer management trainer',
      img: U('1566492031773-4f4e44671857', 800, 800), base: 'Bristol, UK · and online', langs: 'English', years: 11, rating: '4.9', reviewsN: 152, cur: '£',
      creds: ['Volunteer manager for ten years', 'Trains small charities', 'Started as a volunteer himself'],
      about: 'Liam helps small charities recruit, welcome and thank volunteers so they stay. His “first shift” checklist is used by food banks, shops and sports clubs.',
      services: [ { id: 'work', name: 'Volunteer welcome workshop', dur: '2 hours', price: 150, desc: 'For a charity team.' },
                  { id: 'review', name: 'Volunteer journey review', dur: '1 hour', price: 80, desc: 'From first enquiry to thank-you.' },
                  { id: 'q', name: 'Quick question call', dur: '20 minutes', price: 15, desc: 'One volunteering question.' } ],
      avail: { days: [1, 2, 4], times: ['10:00', '14:00'] },
      reviews: [ { who: '@saturday_shop_sue', stars: 5, ago: 2, text: 'Our shop rota is full now.' }, { who: '@ben_hart_trustees', stars: 5, ago: 30, text: 'Practical and warm.' }, { who: '@ruth_mills_fundraising', stars: 5, ago: 60, text: 'Brilliant trainer.' } ],
      posts: [ { ago: 1, text: 'The best thing you can do for a new volunteer is be ready for them: a name badge, a cup of tea and one person who knows they’re coming.' } ],
      tier: 'Pro Zone', verified: true },
    { key: 'ruth-mills-fundraising', name: 'Ruth Mills Fundraising Coaching', color: '#D97706', tag: 'Coaching for first-time fundraisers and small charities', role: 'Fundraising coach',
      img: U('1590649880765-91b1956b8276', 800, 800), base: 'Leeds, UK · and online', langs: 'English', years: 15, rating: '4.9', reviewsN: 136, cur: '£',
      creds: ['Fifteen years in charity fundraising', 'Works to the Fundraising Code', 'Mentors community groups'],
      about: 'Ruth coaches people taking on their first challenge, and small charities building their first fundraising plan. Honest, never pushy: she believes donors should always feel good about giving.',
      services: [ { id: 'plan', name: 'Fundraising plan session', dur: '90 minutes', price: 120, desc: 'For small charities.' },
                  { id: 'page', name: 'Challenge page review', dur: '30 minutes', price: 25, desc: 'Your story and target, checked.' },
                  { id: 'group', name: 'Community group workshop', dur: '2 hours', price: 140, desc: 'Events, raffles and thank-yous.' } ],
      avail: { days: [2, 3, 5], times: ['09:30', '13:00', '18:30'] },
      reviews: [ { who: '@first_5k_jas', stars: 5, ago: 3, text: 'Doubled my target, without being pushy.' }, { who: '@ben_hart_trustees', stars: 5, ago: 32, text: 'Clear and ethical.' }, { who: '@liam_okafor_volunteers', stars: 5, ago: 62, text: 'Always generous with advice.' } ],
      posts: [ { ago: 2, text: 'Say thank you within a day, by name. People remember how giving felt far longer than how much they gave.' } ],
      tier: 'Pro Zone', verified: true },
    { key: 'ben-hart-trustees', name: 'Ben Hart Trustee Mentoring', color: '#0F766E', tag: 'Support for new charity trustees', role: 'Trustee mentor',
      img: U('1758600432473-2b33715a2755', 800, 800), base: 'Birmingham, UK · and online', langs: 'English', years: 20, rating: '4.9', reviewsN: 94, cur: '£',
      creds: ['Chair of trustees at two small charities', 'Former charity finance director', 'Volunteers on a local grants panel'],
      about: 'Ben mentors new trustees: what the role involves, reading charity accounts and asking good questions. He’ll always point you to the Charity Commission’s own guidance.',
      services: [ { id: 'new', name: 'New trustee session', dur: '1 hour', price: 60, desc: 'Your role, explained.' },
                  { id: 'acc', name: 'Reading the accounts', dur: '90 minutes', price: 90, desc: 'For boards and treasurers.' },
                  { id: 'board', name: 'Board away-day', dur: 'Half day', price: 280, desc: 'Facilitated planning.' } ],
      avail: { days: [1, 3, 4], times: ['11:00', '18:00'] },
      reviews: [ { who: '@ruth_mills_fundraising', stars: 5, ago: 4, text: 'Made the accounts make sense.' }, { who: '@saturday_shop_sue', stars: 5, ago: 34, text: 'Patient and clear.' }, { who: '@liam_okafor_volunteers', stars: 5, ago: 64, text: 'Every new board should meet him.' } ],
      posts: [ { ago: 3, text: 'A charity with no running costs isn’t lean, it’s fragile. Ask what the money achieves, not just how little the office costs.' } ],
      tier: 'Pro Zone', verified: true }
  ],
  communities: [
    { key: 'volunteers-together', name: 'Volunteers Together', domain: 'volunteers.charityxx.com', color: '#E11D48', img: U('1628717341663-0007b0ee2597', 900, 500),
      scope: 'Global', where: 'Wherever you give your time', members: 236000, online: 2480, tagline: 'Give an hour. Share what you learned.',
      about: 'Volunteers sharing roles they love, tips for getting started and the small wins. No asking for donations here, and no real charity appeals: check any charity on the Charity Commission register before you give. This is a demo community.',
      rules: ['No fundraising appeals', 'Respect the people charities support', 'Celebrate every volunteer'],
      mods: ['@liam_okafor_volunteers', '@saturday_shop_sue'],
      threads: [ { t: 'Your first volunteering shift: what helped?', by: '@saturday_shop_sue', tag: 'START', replies: 1340, ago: 0, votes: 2860 }, { t: 'Volunteering with a full-time job', by: '@first_5k_jas', tag: 'TIME', replies: 920, ago: 1, votes: 2040 }, { t: 'Christmas volunteering ideas', by: '@liam_okafor_volunteers', tag: 'CHRISTMAS', replies: 760, ago: 2, votes: 1760 }, { t: 'How to check a charity is real', by: '@ben_hart_trustees', tag: 'GIVING SAFELY', replies: 540, ago: 3, votes: 1420 } ],
      events: [ { title: 'Live: find your volunteering role', day: 3, time: '19:00', where: 'Online' }, { title: 'New trustees: ask anything', day: 12, time: '19:30', where: 'Online' } ] },
    { key: 'bristol-volunteers', name: 'Bristol Volunteers', domain: 'bristol.charityxx.com', color: '#0F766E', img: U('1652971876875-05db98fab376', 900, 500),
      scope: 'Local', where: 'Bristol', members: 820, online: 22, tagline: 'Litter picks, food drives and a cuppa after.',
      about: 'People around Bristol who meet for litter picks, river clean-ups and food drives, then a cup of tea. Turn up when you can.',
      rules: ['Turn up when you can', 'Gloves on, safety first', 'Everyone welcome'],
      mods: ['@liam_okafor_volunteers', '@saturday_shop_sue'],
      threads: [ { t: 'River clean-up this Saturday', by: '@liam_okafor_volunteers', tag: 'MEETUP', replies: 34, ago: 0, votes: 74 }, { t: 'Christmas food drive collection points', by: '@saturday_shop_sue', tag: 'FOOD DRIVE', replies: 26, ago: 1, votes: 58 }, { t: 'Thank you, Harbourside team', by: '@first_5k_jas', tag: 'THANKS', replies: 14, ago: 2, votes: 40 } ],
      events: [ { title: 'River clean-up', day: 7, time: '10:00', where: 'Bristol' }, { title: 'New year litter pick', day: 36, time: '10:00', where: 'Bristol' } ] }
  ],
  feed: [
    { av: 'CX', avBg: CORAL, author: 'CharityXX Editorial', sub: 'Featured · Just now', badge: '★ FEATURED',
      text: 'Doing good, well: volunteering, fundraising events, charity shops and how charities really work. Everything here is a demo, and no money changes hands. Before you give to any charity, check it on the Charity Commission register.',
      img: U('1777788613992-5f2655a97e72', 800, 600), eng: '♡ 16.8K · 💬 1.4K · ↗ 2.6K' },
    { av: 'HV', avBg: CORAL, author: 'Handsup Volunteering', sub: 'Founding Partner · Brand Zone', badge: 'BRAND ZONE',
      text: 'Live now: the start line of the Bristol Harbourside 5K. Two thousand runners, walkers and wheelers, and two hundred volunteers who made it happen. Follow <b>Handsup Volunteering</b>.',
      img: U('1783216509054-c69ca71b8f01', 800, 600), eng: '♡ 12.6K · 💬 1.8K · ↗ 2.2K' },
    { av: 'JS', avBg: SUN, author: '@first_5k_jas', sub: 'Fundraising · Just now', badge: 'COMMUNITY',
      text: 'Never run further than the bus stop. Twelve weeks later, here I am on the start line of my first 5K. Thank you to everyone who sponsored me, and to the marshals in the rain.',
      img: U('1760315972424-1637530daead', 800, 600), eng: '♡ 8.6K · 💬 940 · ↗ 680' },
    { av: 'SC', avBg: TEAL, author: 'Second Chapter Shops', sub: 'Brand Zone · 1h ago', badge: 'BRAND ZONE',
      text: 'Rails full of winter coats, sorted by our Saturday team. <b>Christmas Jumper Week</b> starts Monday in every shop.',
      img: U('1778512408867-f657b926cc4f', 800, 600), eng: '♡ 5.2K · 💬 340 · ↗ 460' },
    { av: 'SS', avBg: TEAL, author: '@saturday_shop_sue', sub: 'Charity Shops · 2h ago', badge: 'COMMUNITY',
      text: 'Eleven years of Saturdays at the shop. My favourite bit is still the sorting room: you never know what’s in the next bag.',
      img: U('1764173039977-9da55b1bf806', 800, 600), eng: '♡ 7.4K · 💬 820 · ↗ 540' },
    { av: 'KK', avBg: BLUE, author: 'Kindkit', sub: 'Brand Zone · 4h ago', badge: 'BRAND ZONE',
      text: 'Tins sorted, labels on, bags packed. The <b>Food Drive Kit</b> has everything a school or office needs to run a collection.',
      img: U('1599059813005-11265ba4b4ce', 800, 600), eng: '♡ 4.2K · 💬 260 · ↗ 380' },
    { av: 'BH', avBg: TEAL, author: 'Ben Hart Trustee Mentoring', sub: 'How Charities Work · 6h ago', badge: 'PRO ZONE',
      text: 'Every registered charity in England and Wales is on the Charity Commission register, with its accounts. Two minutes there tells you more than any advert.',
      img: U('1769596722510-b92780d03424', 800, 600), eng: '♡ 4.6K · 💬 300 · ↗ 520' }
  ],
  prompts: ['How do I find a volunteering role?', 'How do I check a charity is real?', 'How do I plan a fundraising challenge?', 'Why do charities have running costs?'],
  businesses: ['clearbook-accounting', 'goodcause-design']
};

/* the four Brand Zones and two Business Zones */
const brand = (o) => Object.assign({ kind: 'brand', gw: 'charity', verified: true }, o);
Object.assign(ZONES, {
  'handsup-volunteering': brand({ key: 'handsup-volunteering', name: 'Handsup Volunteering', color: '#E11D48', gradient: CORAL, tier: 'Founding Partner',
    tagline: 'Find a volunteering role near you, in minutes', stats: { followers: '212K', content: '520', products: '6' },
    ad: { badge: 'Featured', img: U('1593113616828-6f22bca04804', 760, 760), hl: 'Give an hour.', sub: 'Thousands of volunteering roles near you.', meta: 'Free to volunteers' },
    products: [
      { name: 'Volunteer Starter Session', price: '£5', tag: 'FLAGSHIP', emoji: '🙋', rating: 4.9, reviews: 2860, cat: 'volunteers', special: true, desc: 'An hour online: roles, safety and finding your fit.', features: ['Live online'], review: { who: 'Jas P.', text: 'Found my role the same week.' } },
      { name: 'Team Volunteering Day', price: '£450', tag: 'BESTSELLER', emoji: '👥', rating: 4.8, reviews: 1240, cat: 'teams', desc: 'A day of volunteering for a workplace team.', features: ['Up to twenty people'], review: { who: 'Liam O.', text: 'Well organised.' } },
      { name: 'Charity Listing', price: '£12 a month', emoji: '📋', rating: 4.8, reviews: 960, cat: 'teams', desc: 'List your volunteering roles for small charities.', features: ['Unlimited roles'], review: { who: 'Ben H.', text: 'Brings in great people.' } },
      { name: 'Young Volunteers Pack', price: '£8', tag: 'SPECIAL', emoji: '🎒', rating: 4.9, reviews: 420, cat: 'volunteers', special: true, desc: 'A guide for volunteers aged 16 to 18.', features: ['With a parent’s guide'], review: { who: 'Sue M.', text: 'Our teens loved it.' } }
    ],
    shopCats: [ { key: 'volunteers', label: 'Volunteers', icon: '🙋' }, { key: 'teams', label: 'Teams & charities', icon: '👥' } ],
    feed: [
      { type: 'post', sub: 'Brand post · 2h', text: 'Bags packed for Saturday’s food drive. A <b>Team Volunteering Day</b> brought twenty extra pairs of hands.', img: U('1608686207856-001b95cf60ca', 800, 440), eng: '♡ 12.6K · 💬 1.8K · ↗ 2.2K', product: 1 },
      { type: 'community', who: 'Jas P.', whoBg: CORAL, sub: 'Community · 1d', text: 'Can I donate through Handsup?', eng: '♡ 480 · 💬 140', reply: 'Hi Jas! We don’t take donations: we help you give time. If you’d like to give money, go directly to the charity, and check it first on the Charity Commission register. 💛' }
    ],
    events: [ { zoneEvent: true, tag: 'LIVE', title: 'Handsup Live · the Harbourside 5K start line', when: 'Live now', desc: 'Runners, walkers, wheelers and two hundred volunteers.', registered: 7480, capacity: 18000 } ],
    about: { founded: 'Bristol · 2013', story: 'Built by volunteer managers who wanted finding a role to take minutes, not weeks. We joined CharityXX as Founding Partner because volunteering changes both sides.', milestones: [['2013', 'Founded'], ['2020', 'Team days'], ['2026', 'Founding Partner on CharityXX']], values: ['Time is a gift', 'Safety first', 'Thank every volunteer'] } }),

  'stride-for-good': brand({ key: 'stride-for-good', name: 'Stride for Good', color: '#D97706', gradient: SUN, tier: 'Brand Zone',
    tagline: 'Fun runs and walks that raise money for local causes', stats: { followers: '96.2K', content: '260', products: '14' },
    ad: { badge: 'Spring entries', img: U('1452626038306-9aae5e071dd3', 760, 760), hl: 'Run, walk, wheel.', sub: 'Fun runs for local causes.', meta: 'Entry from £12' },
    products: [
      { name: 'Harbourside 5K Entry', price: '£15', tag: 'FLAGSHIP', emoji: '🏃', rating: 4.9, reviews: 2140, cat: 'events', special: true, desc: 'A flat, friendly 5K. Run, walk or wheel.', features: ['Medal', 'All ages'], review: { who: 'Jas P.', text: 'Best morning of my year.' } },
      { name: 'Family Fun Mile', price: '£12', tag: 'BESTSELLER', emoji: '👨‍👩‍👧', rating: 4.8, reviews: 1180, cat: 'events', desc: 'One mile, buggies and dogs welcome.', features: ['Under-fives free to join'], review: { who: 'Sue M.', text: 'The grandkids loved it.' } },
      { name: 'Training Plan', price: '£6', emoji: '📋', rating: 4.7, reviews: 640, cat: 'training', desc: 'Couch to 5K in nine weeks.', features: ['Printable'], review: { who: 'Liam O.', text: 'Sensible plan.' } },
      { name: 'Event Tee', price: '£14', tag: 'SPECIAL', emoji: '👕', rating: 4.8, reviews: 420, cat: 'training', special: true, desc: 'Organic cotton, made in the UK.', features: ['All sizes'], review: { who: 'Ruth M.', text: 'Soft and well made.' } }
    ],
    shopCats: [ { key: 'events', label: 'Events', icon: '🏃' }, { key: 'training', label: 'Training & kit', icon: '📋' } ],
    feed: [ { type: 'post', sub: 'Brand post · 1d', text: 'Down the tree-lined avenue, two kilometres to go. <b>Harbourside 5K</b> spring entries are open.', img: U('1761064039797-837fc97e5c86', 800, 440), eng: '♡ 5.6K · 💬 380', product: 0 } ],
    events: [ { zoneEvent: true, tag: 'EVENT', title: 'Christmas Fun Mile', when: 'Dec 13 · 10:00', desc: 'Festive jumpers, Bristol.', registered: 1360, capacity: 3000 } ],
    about: { founded: 'Bristol · 2011', story: 'A running club that started organising races so local causes could raise money.', milestones: [['2011', 'First 5K'], ['2019', 'Family Fun Mile'], ['2026', 'Brand Zone on CharityXX']], values: ['Everyone welcome', 'Local causes', 'Volunteers first'] } }),

  'second-chapter-shops': brand({ key: 'second-chapter-shops', name: 'Second Chapter Shops', color: '#0F766E', gradient: TEAL, tier: 'Brand Zone',
    tagline: 'Charity shops run by volunteers', stats: { followers: '72.4K', content: '200', products: '18' },
    ad: { badge: 'Christmas', img: U('1759630814559-f9fffe187384', 760, 760), hl: 'Something good, second time.', sub: 'Preloved clothes, books and homeware.', meta: 'From £2' },
    products: [
      { name: 'Christmas Jumper', price: '£6', tag: 'FLAGSHIP', emoji: '🧶', rating: 4.8, reviews: 1460, cat: 'clothes', special: true, desc: 'A preloved festive jumper.', features: ['All sizes'], review: { who: 'Sue M.', text: 'We sold out by noon.' } },
      { name: 'Winter Coat', price: '£15', tag: 'BESTSELLER', emoji: '🧥', rating: 4.8, reviews: 980, cat: 'clothes', desc: 'Warm coats, checked and steamed.', features: ['Quality checked'], review: { who: 'Jas P.', text: 'Barely worn.' } },
      { name: 'Book Bundle', price: '£5', emoji: '📚', rating: 4.7, reviews: 760, cat: 'home', desc: 'Five paperbacks, your choice.', features: ['Any genre'], review: { who: 'Ben H.', text: 'Endless reading.' } },
      { name: 'Volunteer Shift', price: '£2', tag: 'SPECIAL', emoji: '🙋', rating: 4.9, reviews: 320, cat: 'home', special: true, desc: 'Book a shop shift; the £2 covers your welcome pack.', features: ['Training included'], review: { who: 'Liam O.', text: 'Such a friendly team.' } }
    ],
    shopCats: [ { key: 'clothes', label: 'Clothes', icon: '🧥' }, { key: 'home', label: 'Books & home', icon: '📚' } ],
    feed: [ { type: 'post', sub: 'Brand post · 3h', text: 'A chat over the counter at the Clifton shop. Our <b>Volunteer Shifts</b> are open for January.', img: U('1764173039296-d4eab4cdb4fa', 800, 440), eng: '♡ 3.8K · 💬 220', product: 3 } ],
    events: [ { zoneEvent: true, tag: 'SALE', title: 'Christmas Jumper Week', when: 'Dec 7 · All week', desc: 'Preloved festive jumpers in every shop.', registered: 860, capacity: 2400 } ],
    about: { founded: 'Bristol · 2008', story: 'A small chain of charity shops run almost entirely by volunteers, funding local projects.', milestones: [['2008', 'First shop'], ['2018', 'Six shops'], ['2026', 'Brand Zone on CharityXX']], values: ['Reuse first', 'Volunteers welcome', 'Local good'] } }),

  'kindkit': brand({ key: 'kindkit', name: 'Kindkit', color: '#1D4ED8', gradient: BLUE, tier: 'Brand Zone',
    tagline: 'Kit for litter picks, food drives and bake sales', stats: { followers: '48.6K', content: '140', products: '22' },
    ad: { badge: 'New', img: U('1780291117617-303993196379', 760, 760), hl: 'Everything for a good day.', sub: 'Kits for community groups.', meta: 'From £10' },
    products: [
      { name: 'Food Drive Kit', price: '£24', tag: 'FLAGSHIP', emoji: '🥫', rating: 4.8, reviews: 860, cat: 'kits', special: true, desc: 'Collection boxes, posters, labels and a checklist.', features: ['For schools and offices'], review: { who: 'Sue M.', text: 'Made it so easy.' } },
      { name: 'Litter Pick Kit', price: '£35', tag: 'BESTSELLER', emoji: '🧤', rating: 4.8, reviews: 740, cat: 'kits', desc: 'Pickers, gloves, bags and hi-vis for six.', features: ['Reusable'], review: { who: 'Liam O.', text: 'Sturdy pickers.' } },
      { name: 'Bake Sale Kit', price: '£10', emoji: '🧁', rating: 4.7, reviews: 520, cat: 'events', desc: 'Price tags, bunting and a cash-free sign.', features: ['Food hygiene tips'], review: { who: 'Jas P.', text: 'Cute and practical.' } },
      { name: 'Event Gazebo', price: '£120', tag: 'SPECIAL', emoji: '⛺', rating: 4.8, reviews: 240, cat: 'events', special: true, desc: 'A three-metre gazebo for stalls.', features: ['Weighted feet'], review: { who: 'Ruth M.', text: 'Survived a windy fete.' } }
    ],
    shopCats: [ { key: 'kits', label: 'Kits', icon: '🧤' }, { key: 'events', label: 'Events', icon: '🧁' } ],
    feed: [ { type: 'post', sub: 'Brand post · 5h', text: 'A heart made of tins at the school food drive. Run your own with the <b>Food Drive Kit</b>.', img: U('1782423996504-b7d58b8f2440', 800, 440), eng: '♡ 3.6K · 💬 200', product: 0 } ],
    events: [ { zoneEvent: true, tag: 'SALE', title: 'Winter kits: 15% off', when: 'Dec 3 · All week', desc: 'Food drive and litter pick kits.', registered: 420, capacity: 1200 } ],
    about: { founded: 'Nottingham · 2017', story: 'A community organiser who kept buying the same supplies and decided to make kits.', milestones: [['2017', 'First kit'], ['2022', 'Gazebos'], ['2026', 'Brand Zone on CharityXX']], values: ['Practical', 'Reusable', 'Community first'] } }),

  'clearbook-accounting': { key: 'clearbook-accounting', kind: 'business', gw: 'charity', name: 'Clearbook Accounting', color: '#0F766E', gradient: TEAL, img: U('1738618141234-1ee52c6475a7', 900, 500),
    tier: 'Verified', category: 'Accountants for small charities', tagline: 'Clear accounts, filed on time.',
    about: { founded: 'Birmingham · 2010', story: 'Accountants who specialise in small charities and community groups: bookkeeping, independent examination and filing with the Charity Commission.' },
    stats: { years: 16, staff: 24, clients: '480 charities' },
    caps: [ { name: 'Bookkeeping', detail: 'Monthly, simple.' }, { name: 'Independent examination', detail: 'For smaller charities.' }, { name: 'Annual return help', detail: 'Filed on time.' } ],
    specs: { moq: 'One charity', lead: '1 to 3 weeks', regions: 'England and Wales', certs: ['Qualified accountants', 'Charity specialists', 'Fixed fees'] },
    supplies: [ { kind: 'brand', key: 'second-chapter-shops', what: 'Bookkeeping for six shops' } ],
    cases: [ { title: 'Accounts that tell a story', text: 'A food bank’s trustees now read a one-page summary each month.' } ],
    feed: [ { sub: 'Team · 3d', text: 'Year-end deadlines: our free checklist.' } ],
    contact: { person: 'Amira Khan, Charities', response: 'Replies within one working day' } },

  'goodcause-design': { key: 'goodcause-design', kind: 'business', gw: 'charity', name: 'Goodcause Design', color: '#E11D48', gradient: CORAL, img: U('1578357078586-491adf1aa5ba', 900, 500),
    tier: 'Verified', category: 'Design for charities', tagline: 'Dignified, honest design for good causes.',
    about: { founded: 'Manchester · 2014', story: 'A design studio for charities that never uses guilt-led images. We show people as they want to be seen.' },
    stats: { years: 12, staff: 14, clients: '210 charities' },
    caps: [ { name: 'Annual reports', detail: 'Clear and readable.' }, { name: 'Event branding', detail: 'Runs, walks and fetes.' }, { name: 'Photo guidelines', detail: 'Consent and dignity first.' } ],
    specs: { moq: 'One project', lead: '3 to 6 weeks', regions: 'UK', certs: ['Consent-first photography', 'Accessible design', 'Charity rates'] },
    supplies: [ { kind: 'brand', key: 'stride-for-good', what: 'Event branding and medals' } ],
    cases: [ { title: 'Photos people chose', text: 'A charity’s new report used only photos the people in them picked.' } ],
    feed: [ { sub: 'Team · 5d', text: 'Our dignity-first photo guide is free to download.' } ],
    contact: { person: 'Tom Price, Studio', response: 'Replies within two working days' } }
});

/* events in the Events tab */
gxEvents('charity', [
  { gw: 'charity', zone: 'handsup-volunteering', type: 'Live', icon: '🔴', live: true, time: 'Live Now', title: 'Handsup Live · the Harbourside 5K start line', desc: 'Runners, walkers, wheelers and two hundred volunteers.' },
  { gw: 'charity', type: 'Event', icon: '🙋', time: 'Dec 1', title: 'Live: find your volunteering role', desc: 'Volunteers Together, online.' },
  { gw: 'charity', zone: 'kindkit', type: 'Sale', icon: '🧤', time: 'Dec 3', title: 'Winter kits: 15% off', desc: 'Food drive and litter pick kits.' },
  { gw: 'charity', type: 'Event', icon: '🌊', time: 'Dec 5', title: 'Bristol Volunteers: river clean-up', desc: 'Gloves on, then a cuppa.' },
  { gw: 'charity', zone: 'second-chapter-shops', type: 'Sale', icon: '🧶', time: 'Dec 7', title: 'Christmas Jumper Week', desc: 'Preloved festive jumpers in every shop.' },
  { gw: 'charity', type: 'Event', icon: '💬', time: 'Dec 8', title: 'Say thank you well, with Ruth Mills', desc: 'Fundraising that leaves donors feeling good.' },
  { gw: 'charity', type: 'Event', icon: '📊', time: 'Dec 10', title: 'New trustees: ask anything', desc: 'Ben Hart on the role and the accounts.' },
  { gw: 'charity', zone: 'stride-for-good', type: 'Event', icon: '🏃', time: 'Dec 13', title: 'Christmas Fun Mile', desc: 'Festive jumpers, Bristol.' }
]);
})();
/* ═════════ /CHARITYXX ═════════ */
