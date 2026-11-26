/* ═════════ HORRORXX — a Genre demo gateway (2026-11-21, Sean; build -91) ═════════
   Built with the _tools/README.md recipe. Palette (dark): soot black, fog grey, candle amber, blood red.
   Home sector: Genre (GW_HOME.horror = 'genre'); also listed in Books and Gaming, but HOME_ONLY keeps it in Genre's band.
   Tone: the British winter ghost story, not gore. Every author, book, film and legend here is fictional; streets are real. */
(function(){
const U = (id, w, h) => `https://images.unsplash.com/photo-${id}?w=${w}&h=${h}&fit=crop&q=75`;
const BLOOD = 'linear-gradient(135deg,#C0262D,#5E0F13)', FOG = 'linear-gradient(135deg,#9CA3AF,#3F4450)', CANDLE = 'linear-gradient(135deg,#F2B15A,#8A4B12)', SOOT = 'linear-gradient(135deg,#3A3438,#0E0C0C)';

GATEWAYS.horror = {
  name: 'HorrorXX', domain: 'horrorxx.com', emoji: '🕯️', sector: 'genre', live: true,
  tagline: 'The Horror Universe',
  theme: {
    bg: '#0E0C0C', text: '#EEE7E2', cardBg: 'rgba(255,255,255,.04)', cardBorder: 'rgba(238,231,226,.09)',
    headerBg: 'linear-gradient(180deg,#1D1717,#0E0C0C)', accent: '#D8343B', accentAlt: '#F2B15A', dark: true
  },
  gradient: 'linear-gradient(135deg,#0E0C0C,#5E0F13,#F2B15A)',
  stats: { members: '4.8M', brands: '2,100+', agents: '44' },
  spaces: ['All Feed', 'Ghost Stories', 'Books', 'Films', 'Write Horror', 'Haunted Places'],
  trending: ['#GhostStoryForChristmas', '#CosyHorror', '#HauntedYork'],
  brandZones: [
    { key: 'blackthorn-press', name: 'Blackthorn Press', color: '#D8343B', tier: 'Founding Partner', tag: 'Ghost stories and horror, published in Whitby' },
    { key: 'candle-crypt', name: 'Candle & Crypt', color: '#F2B15A', tier: 'Brand Zone', tag: 'Ghost walks in York and Edinburgh' },
    { key: 'midnight-matinee', name: 'Midnight Matinee', color: '#9CA3AF', tier: 'Brand Zone', tag: 'Horror films, streamed after dark' },
    { key: 'gravegoods', name: 'Gravegoods', color: '#7C3AED', tier: 'Brand Zone', tag: 'Gifts for people who love a good scare' }
  ],
  apps: [
    { name: 'Fright Meter', color: '#D8343B', desc: 'Pick tonight’s scare, from cosy chill to sleep-with-the-light-on', key: 'fright-meter', url: 'apps/fright-meter.html',
      dev: 'Midnight Matinee', rating: '4.8', users: '1.3M', perms: ['profile', 'feed'],
      tagline: 'Exactly as scared as you want to be.',
      about: 'Fright Meter rates stories and films from 1 (a cosy chill) to 5 (lights on), with plain content notes, so you can choose something that suits your mood and who you’re watching with.',
      features: ['Scare level 1 to 5', 'Content notes, no spoilers', 'Book or film, short or long', 'Rate what you’ve finished'],
      shots: ['apps/fright-meter/shot-1.jpg', 'apps/fright-meter/shot-2.jpg', 'apps/fright-meter/shot-3.jpg'],
      version: '2.2', size: '9 KB',
      updates: [ { v: '2.2', ago: 3, notes: 'Content notes on every title.' }, { v: '2.0', ago: 70, notes: 'Books as well as films.' }, { v: '1.4', ago: 220, notes: 'Signed in with GENEXXO.' } ],
      reviews: [ { who: '@cosy_creeps_cass', stars: 5, ago: 1, text: 'Level 2 is my happy place. Finally I can find more of it.' }, { who: '@nightshift_nate', stars: 5, ago: 9, text: 'The content notes are so useful for family nights.' }, { who: '@whitby_wanda', stars: 4, ago: 25, text: 'Wants more short stories, please.' } ] },
    { name: 'Story Sprint', color: '#F2B15A', desc: 'A ghost story prompt and a fifteen-minute writing sprint', key: 'story-sprint', url: 'apps/story-sprint.html',
      dev: 'Blackthorn Press', rating: '4.8', users: '410K', perms: ['profile', 'feed'],
      tagline: 'Fifteen minutes. One candle. Write.',
      about: 'Story Sprint deals you a setting, a thing that shouldn’t be there and a last line, then times a fifteen-minute sprint while you write. Drafts are saved, with a word count, and you can share your best opening line.',
      features: ['Setting, object and last-line prompts', '15-minute sprint timer', 'Drafts with word counts', 'Share an opening line'],
      shots: ['apps/story-sprint/shot-1.jpg', 'apps/story-sprint/shot-2.jpg', 'apps/story-sprint/shot-3.jpg'],
      version: '1.6', size: '9 KB',
      updates: [ { v: '1.6', ago: 4, notes: 'Last-line prompts.' }, { v: '1.3', ago: 90, notes: 'Drafts.' }, { v: '1.0', ago: 240, notes: 'Signed in with GENEXXO.' } ],
      reviews: [ { who: '@quill_and_dread', stars: 5, ago: 2, text: 'Wrote my Christmas ghost story in four sprints.' }, { who: '@cosy_creeps_cass', stars: 4, ago: 14, text: 'The prompts are deliciously odd.' }, { who: '@nightshift_nate', stars: 5, ago: 33, text: 'Great for writer’s block.' } ] },
    { name: 'Ghost Walk', color: '#9CA3AF', desc: 'A self-guided ghost walk through York’s old streets', key: 'ghost-walk', url: 'apps/ghost-walk.html',
      dev: 'Candle & Crypt', rating: '4.9', users: '260K', perms: ['profile', 'feed'],
      tagline: 'Eight stops. One long shadow.',
      about: 'Ghost Walk takes you on an hour’s route through York’s snickelways and streets, with a story at each of eight stops. Tick them off as you go, then share your walk. The stories are ours; the streets are real.',
      features: ['Eight stops, about 1.5 km', 'A story at each stop', 'Step-free route option', 'Tick off and share'],
      shots: ['apps/ghost-walk/shot-1.jpg', 'apps/ghost-walk/shot-2.jpg', 'apps/ghost-walk/shot-3.jpg'],
      version: '1.9', size: '10 KB',
      updates: [ { v: '1.9', ago: 5, notes: 'Step-free route.' }, { v: '1.5', ago: 100, notes: 'Two new stops.' }, { v: '1.0', ago: 250, notes: 'Signed in with GENEXXO.' } ],
      reviews: [ { who: '@whitby_wanda', stars: 5, ago: 3, text: 'Did it at dusk in the fog. Perfect.' }, { who: '@york_yasmin', stars: 5, ago: 16, text: 'I live here and learned so much.' }, { who: '@nightshift_nate', stars: 4, ago: 38, text: 'Wear good shoes for the cobbles.' } ] }
  ],
  pros: [
    { key: 'freya-lund-writing', name: 'Freya Lund Horror Writing', color: '#F2B15A', tag: 'Horror and ghost story writing · courses, mentoring, manuscript feedback', role: 'Author and writing tutor',
      img: U('1772989665252-7cb41ae759cc', 800, 800), base: 'Whitby, UK · and online', langs: 'English, Norwegian', years: 14, rating: '4.9', reviewsN: 268, cur: '£',
      creds: ['Six published ghost story collections', 'Tutor on a creative writing MA', 'Judge of a short-story prize'],
      about: 'Freya writes quiet, creeping ghost stories and teaches others to do the same. Her courses are about atmosphere, restraint and the line that makes the reader look over their shoulder.',
      services: [ { id: 'course', name: 'Six-week ghost story course', dur: '6 × 90 minutes', price: 180, desc: 'Online, small group, a finished story at the end.' },
                  { id: 'feedback', name: 'Story feedback', dur: 'Up to 6,000 words', price: 85, desc: 'Written notes and a 30-minute call.' },
                  { id: 'mentor', name: 'Mentoring session', dur: '60 minutes', price: 60, desc: 'Plot, pacing or getting published.' } ],
      avail: { days: [1, 2, 4, 6], times: ['10:00', '14:00', '19:00'] },
      reviews: [ { who: '@quill_and_dread', stars: 5, ago: 5, text: 'My story was shortlisted after her course.' }, { who: '@cosy_creeps_cass', stars: 5, ago: 18, text: 'Generous and very sharp.' }, { who: '@whitby_wanda', stars: 5, ago: 44, text: 'Changed how I write endings.' } ],
      posts: [ { ago: 1, text: 'What you don’t show is scarier than what you do. Cut the description of the ghost and see what happens.' }, { ago: 6, text: 'January course: a few places left.' } ],
      tier: 'Pro Zone', verified: true },
    { key: 'nia-okafor-sfx', name: 'Nia Okafor SFX Makeup', color: '#D8343B', tag: 'Special effects makeup for film, theatre and events · classes too', role: 'SFX makeup artist',
      img: U('1632765854612-9b02b6ec2b15', 800, 800), base: 'Leeds, UK', langs: 'English, Igbo', years: 10, rating: '4.9', reviewsN: 214, cur: '£',
      creds: ['Prosthetics for feature films and TV', 'Trained in skin-safe materials', 'Teaches SFX at a film school'],
      about: 'Nia makes the impossible look real: aged faces, ghostly pallor, creature prosthetics. Her workshops teach skin-safe techniques, with a patch test first, every time.',
      services: [ { id: 'workshop', name: 'SFX makeup workshop', dur: '4 hours', price: 95, desc: 'Ghostly pallor, ageing and wounds. Kit included.' },
                  { id: 'event', name: 'Event makeup', dur: 'Per person', price: 45, desc: 'For immersive nights and parties.' },
                  { id: 'film', name: 'Short film day rate', dur: '10 hours', price: 380, desc: 'Design and application on set.' } ],
      avail: { days: [2, 3, 5, 6], times: ['10:00', '14:00'] },
      reviews: [ { who: '@nightshift_nate', stars: 5, ago: 4, text: 'My short film’s ghost looked terrifyingly real.' }, { who: '@york_yasmin', stars: 5, ago: 20, text: 'The workshop was brilliant fun.' }, { who: '@quill_and_dread', stars: 5, ago: 46, text: 'Careful, kind and so skilled.' } ],
      posts: [ { ago: 2, text: 'Always patch test new products 24 hours before. A great look isn’t worth a skin reaction.' } ],
      tier: 'Pro Zone', verified: true },
    { key: 'edmund-grey-ghost-walks', name: 'Edmund Grey Ghost Walks', color: '#9CA3AF', tag: 'Evening ghost walks and private tours · York’s history after dark', role: 'Ghost walk guide and historian',
      img: U('1777390329674-09285b035781', 800, 800), base: 'York, UK', langs: 'English', years: 22, rating: '4.9', reviewsN: 1240, cur: '£',
      creds: ['Blue Badge-trained guide', 'Local historian and author', 'Performer for 22 years'],
      about: 'Edmund leads York’s best-loved ghost walk: ninety minutes of history, storytelling and one or two moments that make the whole group jump. Private tours for schools and groups too.',
      services: [ { id: 'walk', name: 'Evening ghost walk', dur: '90 minutes', price: 12, desc: 'Every night at 7.30pm from the Minster.' },
                  { id: 'private', name: 'Private group tour', dur: '90 minutes', price: 140, desc: 'Up to 25 people, any evening.' },
                  { id: 'schools', name: 'Schools history walk', dur: '60 minutes', price: 90, desc: 'Daytime, age-appropriate, all history.' } ],
      avail: { days: [0, 1, 2, 3, 4, 5, 6], times: ['19:30', '21:00'] },
      reviews: [ { who: '@york_yasmin', stars: 5, ago: 2, text: 'Theatrical, funny and genuinely spooky.' }, { who: '@whitby_wanda', stars: 5, ago: 12, text: 'Knows every snickelway.' }, { who: '@cosy_creeps_cass', stars: 5, ago: 29, text: 'My kids still talk about it.' } ],
      posts: [ { ago: 3, text: 'December ghost walks end with mulled wine at a fire-lit pub. Book early.' } ],
      tier: 'Pro Zone', verified: true }
  ],
  communities: [
    { key: 'the-night-shift', name: 'The Night Shift', domain: 'nightshift.horrorxx.com', color: '#D8343B', img: U('1783945733752-53c02b16434a', 900, 500),
      scope: 'Global', where: 'Wherever the lights are off', members: 324000, online: 4860, tagline: 'Horror fans, wide awake.',
      about: 'Horror readers, watchers, players and writers. Recommendations by scare level, spoiler-tagged discussions, a monthly read-along and a lot of people who love being frightened.',
      rules: ['Tag spoilers and content notes', 'Every kind of horror is welcome', 'No real-life gore'],
      mods: ['@nightshift_nate', '@cosy_creeps_cass'],
      threads: [ { t: 'Your favourite Christmas ghost story (no spoilers)', by: '@cosy_creeps_cass', tag: 'CHRISTMAS', replies: 1460, ago: 0, votes: 3820 }, { t: 'December read-along: The Salt House', by: '@nightshift_nate', tag: 'READ-ALONG', replies: 612, ago: 1, votes: 1340 }, { t: 'Scariest sound in a horror film?', by: '@quill_and_dread', tag: 'FILMS', replies: 488, ago: 2, votes: 960 }, { t: 'Cosy horror for someone who scares easily?', by: '@new_to_dread', tag: 'Q&A', replies: 324, ago: 3, votes: 610 } ],
      events: [ { title: 'Read-along: The Salt House, part one', day: 5, time: '20:00', where: 'Online' }, { title: 'Ghost stories by the fire (online)', day: 24, time: '21:00', where: 'Online' } ] },
    { key: 'york-ghost-story-club', name: 'York Ghost Story Club', domain: 'york.horrorxx.com', color: '#F2B15A', img: U('1640085461451-e3dc47415dd1', 900, 500),
      scope: 'Local', where: 'York', members: 1100, online: 22, tagline: 'Stories read aloud by firelight.',
      about: 'Once a month, in the back room of a York pub with a real fire, members read ghost stories aloud: classics, new ones and their own. Candles only.',
      rules: ['Candles only, no phones', 'Ten minutes per reader', 'Your own stories are very welcome'],
      mods: ['@york_yasmin', '@whitby_wanda'],
      threads: [ { t: 'December reading list', by: '@york_yasmin', tag: 'READINGS', replies: 36, ago: 0, votes: 82 }, { t: 'Who’s reading their own story this month?', by: '@quill_and_dread', tag: 'WRITE', replies: 18, ago: 1, votes: 40 }, { t: 'New members: what to expect', by: '@whitby_wanda', tag: 'WELCOME', replies: 12, ago: 3, votes: 22 } ],
      events: [ { title: 'Fireside ghost stories', day: 4, time: '20:00', where: 'Stonegate, York' }, { title: 'Christmas Eve Eve readings', day: 32, time: '20:00', where: 'Stonegate, York' } ] }
  ],
  feed: [
    { av: 'HX', avBg: BLOOD, author: 'HorrorXX Editorial', sub: 'Featured · Just now', badge: '★ FEATURED',
      text: 'From a ghost story by the fire to a film that keeps you up all night. Books, films, writing, haunted places and the people who love a good scare. Horror, all in one place.',
      img: U('1758995403519-df2ed7a2c8b1', 800, 600), eng: '♡ 52.8K · 💬 4.2K · ↗ 6.4K' },
    { av: 'CC', avBg: CANDLE, author: '@cosy_creeps_cass', sub: 'Ghost Stories · Just now', badge: 'COMMUNITY',
      text: 'The Christmas ghost story tradition is the best tradition. Lights off, one candle, one story, then everyone pretends they weren’t scared 🕯️',
      img: U('1637870793159-53329ad6b958', 800, 600), eng: '♡ 18.2K · 💬 2.4K · ↗ 860' },
    { av: 'BP', avBg: BLOOD, author: 'Blackthorn Press', sub: 'Founding Partner · Brand Zone', badge: 'BRAND ZONE',
      text: '<b>Twelve Winter Ghosts</b> is out: twelve new ghost stories by twelve writers, one for each night of Christmas. Read one a night, if you dare.',
      img: U('1534289855405-ab820a118fc1', 800, 600), eng: '♡ 14.6K · 💬 1.2K · ↗ 2.2K' },
    { av: 'C&', avBg: CANDLE, author: 'Candle & Crypt', sub: 'Brand Zone · 1h ago', badge: 'BRAND ZONE',
      text: 'Fog over the Shambles tonight. Our <b>Midwinter Ghost Walk</b> leaves the Minster at 7.30. Wrap up warm.',
      img: U('1707051772724-d976e49c785b', 800, 600), eng: '♡ 6.4K · 💬 480 · ↗ 620' },
    { av: 'QD', avBg: SOOT, author: '@quill_and_dread', sub: 'Write Horror · 2h ago', badge: 'COMMUNITY',
      text: 'Finished my first ghost story at 2am. Then heard a noise downstairs. It was the cat. It was definitely the cat.',
      img: U('1758483225022-e4284ef9b3ff', 800, 600), eng: '♡ 9.6K · 💬 1.1K · ↗ 340' },
    { av: 'MM', avBg: FOG, author: 'Midnight Matinee', sub: 'Brand Zone · 4h ago', badge: 'BRAND ZONE',
      text: 'Our <b>Winter Chills</b> season: 24 films for the long nights, each with a Fright Meter score so you know what you’re in for.',
      img: U('1494376877685-d3d2559d4f82', 800, 600), eng: '♡ 5.8K · 💬 420 · ↗ 510' },
    { av: 'EG', avBg: FOG, author: 'Edmund Grey Ghost Walks', sub: 'Haunted Places · 6h ago', badge: 'PRO ZONE',
      text: 'Every old graveyard has a story. Most of them are sad, not scary. Tell them kindly.',
      img: U('1782134775198-1c9e9cfd7ff2', 800, 600), eng: '♡ 3.8K · 💬 260 · ↗ 480' }
  ],
  prompts: ['Find a ghost walk in York this weekend', 'Recommend a cosy ghost story for Christmas', 'How do I start writing horror?', 'Which horror films are scary but not gory?'],
  businesses: ['ironwood-sfx', 'hushwood-audio']
};

/* the four Brand Zones and two Business Zones */
const brand = (o) => Object.assign({ kind: 'brand', gw: 'horror', verified: true }, o);
Object.assign(ZONES, {
  'blackthorn-press': brand({ key: 'blackthorn-press', name: 'Blackthorn Press', color: '#D8343B', gradient: BLOOD, tier: 'Founding Partner',
    tagline: 'Ghost stories and horror, published in Whitby', stats: { followers: '186K', content: '740', products: '42' },
    ad: { badge: 'Featured', img: U('1776090147372-d7019a1176ae', 760, 760), hl: 'Twelve Winter Ghosts.', sub: 'One new ghost story for each night of Christmas.', meta: 'From £9' },
    products: [
      { name: 'Twelve Winter Ghosts (hardback)', price: '£20', tag: 'FLAGSHIP', emoji: '📕', rating: 4.9, reviews: 2860, cat: 'books', special: true, desc: 'Twelve new ghost stories by twelve writers, cloth-bound with a ribbon marker.', features: ['Signed edition while stocks last', 'Scare level 2 to 4'], review: { who: 'Cass M.', text: 'One a night. I’ve broken that rule already.' } },
      { name: 'The Salt House (paperback)', price: '£10', tag: 'BESTSELLER', emoji: '🏚️', rating: 4.8, reviews: 4120, cat: 'books', desc: 'A novel about a fishing family, a house on the cliff and the tide that keeps coming back.', features: ['The Night Shift’s December read-along'], review: { who: 'Nate R.', text: 'Slow, sad and properly frightening.' } },
      { name: 'Audiobook: Twelve Winter Ghosts', price: '£9', emoji: '🎧', rating: 4.8, reviews: 1240, cat: 'audio', desc: 'Read by twelve actors, with sound design.', features: ['Six hours'], review: { who: 'Wanda B.', text: 'Do not listen to it alone in the dark.' } },
      { name: 'Ghost Story Subscription', price: '£48', tag: 'SPECIAL', emoji: '✉️', rating: 4.9, reviews: 680, cat: 'subscription', special: true, desc: 'A new chapbook ghost story by post, every month for a year.', features: ['Gift option'], review: { who: 'Yasmin K.', text: 'The best post of the month.' } }
    ],
    shopCats: [ { key: 'books', label: 'Books', icon: '📕' }, { key: 'audio', label: 'Audio', icon: '🎧' }, { key: 'subscription', label: 'Subscription', icon: '✉️' } ],
    feed: [
      { type: 'post', sub: 'Brand post · 2h', text: 'Bound, boxed and ready: <b>Twelve Winter Ghosts</b>, signed by all twelve writers.', img: U('1785707087518-0466dee85e51', 800, 440), eng: '♡ 14.6K · 💬 1.2K · ↗ 2.2K', product: 0 },
      { type: 'post', sub: 'In the office · Yesterday', text: 'Every Blackthorn book starts on this typewriter. Mostly after midnight.', img: U('1779447178676-69f733bbccb9', 800, 440), eng: '♡ 4.8K · 💬 320' },
      { type: 'community', who: 'Cass M.', whoBg: CANDLE, sub: 'Community · 1d', text: 'Is Twelve Winter Ghosts OK for a 13-year-old who loves spooky stories?', eng: '♡ 410 · 💬 92', reply: 'Hi Cass! Most of the twelve are a 2 or 3 on the Fright Meter: eerie, not gory. Two stories (nights 7 and 11) are darker, and we’ve marked them with content notes on the contents page, so you can skip those or read them together. 🕯️' }
    ],
    events: [ { zoneEvent: true, tag: 'LIVE', title: 'Blackthorn Live · Ghost stories by candlelight', when: 'Live now', desc: 'Three of our authors read new ghost stories live from a candlelit room in Whitby. Lights off recommended.', registered: 4860, capacity: 12000 } ],
    about: { founded: 'Whitby · 2009', story: 'A tiny press in a harbour town famous for its ghosts, publishing new ghost stories and forgotten ones. We joined HorrorXX as Founding Partner because horror readers are here.', milestones: [['2009', 'The first chapbook'], ['2018', 'Twelve Winter Ghosts begins'], ['2026', 'Founding Partner on HorrorXX']], values: ['New voices every year', 'Content notes on every book', 'Printed in Yorkshire'] } }),

  'candle-crypt': brand({ key: 'candle-crypt', name: 'Candle & Crypt', color: '#F2B15A', gradient: CANDLE, tier: 'Brand Zone',
    tagline: 'Ghost walks in York and Edinburgh', stats: { followers: '92.4K', content: '360', products: '12' },
    ad: { badge: 'New', img: U('1781887870482-d5c3351acfe2', 760, 760), hl: 'Midwinter Ghost Walk.', sub: 'Ninety minutes through York’s old streets after dark.', meta: 'From £8' },
    products: [
      { name: 'Midwinter Ghost Walk, York', price: '£14', tag: 'FLAGSHIP', emoji: '🕯️', rating: 4.9, reviews: 5240, cat: 'walks', special: true, desc: 'Ninety minutes from the Minster through the snickelways, ending with mulled wine by a fire.', features: ['Nightly at 7.30pm', 'Step-free route on request'], review: { who: 'Yasmin K.', text: 'Spooky, funny and full of history.' } },
      { name: 'Old Town Ghost Walk, Edinburgh', price: '£14', tag: 'BESTSELLER', emoji: '🏰', rating: 4.8, reviews: 3860, cat: 'walks', desc: 'Closes and wynds below the Royal Mile.', features: ['Nightly at 8pm'], review: { who: 'Nate R.', text: 'The close at the end got me.' } },
      { name: 'Family Ghost Walk', price: '£8', emoji: '👻', rating: 4.8, reviews: 1460, cat: 'walks', desc: 'Not too scary, for ages 6 and up.', features: ['Weekends at 4.30pm'], review: { who: 'Wanda B.', text: 'Pitched perfectly for kids.' } },
      { name: 'Gift Voucher', price: '£28', tag: 'SPECIAL', emoji: '🎁', rating: 4.9, reviews: 620, cat: 'gifts', special: true, desc: 'Two tickets for any walk, valid a year.', features: ['Printed or by email'], review: { who: 'Cass M.', text: 'My dad loved it.' } }
    ],
    shopCats: [ { key: 'walks', label: 'Walks', icon: '🕯️' }, { key: 'gifts', label: 'Gifts', icon: '🎁' } ],
    feed: [ { type: 'post', sub: 'Brand post · 1h', text: 'Tonight’s <b>Midwinter Ghost Walk</b> sold out. Two more added tomorrow.', img: U('1762507102419-1584afe96ec1', 800, 440), eng: '♡ 6.4K · 💬 480', product: 0 } ],
    events: [ { zoneEvent: true, tag: 'EVENT', title: 'Winter solstice ghost walk', when: 'Dec 21 · 19:30', desc: 'The longest night, the longest walk: two hours, two extra stops.', registered: 180, capacity: 200 } ],
    about: { founded: 'York · 2004', story: 'Two actors who started telling ghost stories to tourists outside the Minster. Now forty guides in two cities.', milestones: [['2004', 'The first walk'], ['2016', 'Edinburgh'], ['2026', 'Brand Zone on HorrorXX']], values: ['History first', 'Step-free routes', 'Guides paid fairly'] } }),

  'midnight-matinee': brand({ key: 'midnight-matinee', name: 'Midnight Matinee', color: '#9CA3AF', gradient: FOG, tier: 'Brand Zone',
    tagline: 'Horror films, streamed after dark', stats: { followers: '148K', content: '1.8K', products: '5' },
    ad: { badge: 'Featured', img: U('1494376877685-d3d2559d4f82', 760, 760), hl: 'Winter Chills.', sub: '24 films for the long nights, each with a Fright Meter score.', meta: 'From £3.99' },
    products: [
      { name: 'Monthly Membership', price: '£5.99', tag: 'FLAGSHIP', emoji: '🎬', rating: 4.8, reviews: 6420, cat: 'membership', special: true, desc: '900 horror films, from cosy chillers to the truly terrifying, with content notes on every one.', features: ['No adverts', 'Scare-level filter'], review: { who: 'Nate R.', text: 'The filter is genius.' } },
      { name: 'Rent: The Lantern in the Marsh', price: '£3.99', tag: 'BESTSELLER', emoji: '🏮', rating: 4.8, reviews: 2140, cat: 'rentals', desc: 'This year’s festival favourite. Fright Meter: 4.', features: ['48 hours to watch'], review: { who: 'Cass M.', text: 'I watched it through my fingers.' } },
      { name: 'Classic Ghosts Collection', price: '£12', emoji: '👻', rating: 4.9, reviews: 860, cat: 'rentals', desc: 'Six restored black-and-white ghost films to keep.', features: ['Fright Meter 2 to 3'], review: { who: 'Wanda B.', text: 'Beautifully restored.' } },
      { name: 'Gift: Six Months', price: '£30', tag: 'SPECIAL', emoji: '🎁', rating: 4.9, reviews: 410, cat: 'membership', special: true, desc: 'Six months of horror, as a gift.', features: ['Choose a start date'], review: { who: 'Yasmin K.', text: 'Perfect for my brother.' } }
    ],
    shopCats: [ { key: 'membership', label: 'Membership', icon: '🎬' }, { key: 'rentals', label: 'Rentals', icon: '🏮' } ],
    feed: [ { type: 'post', sub: 'Brand post · 4h', text: 'Night one of <b>Winter Chills</b>: a 1950s ghost film, Fright Meter 2. Perfect with cocoa.', img: U('1765863136960-79de58ae5780', 800, 440), eng: '♡ 5.8K · 💬 420', product: 0 } ],
    events: [ { zoneEvent: true, tag: 'EVENT', title: 'Winter Chills begins', when: 'Dec 1 · 20:00', desc: 'A new horror film every night until Christmas Eve.', registered: 6240, capacity: 15000 } ],
    about: { founded: 'Bristol · 2018', story: 'Horror fans who wanted a streaming service that tells you what you’re getting into.', milestones: [['2018', 'The first 100 films'], ['2023', 'Content notes on everything'], ['2026', 'Brand Zone on HorrorXX']], values: ['Content notes always', 'Indie filmmakers paid fairly', 'No adverts'] } }),

  'gravegoods': brand({ key: 'gravegoods', name: 'Gravegoods', color: '#7C3AED', gradient: SOOT, tier: 'Brand Zone',
    tagline: 'Gifts for people who love a good scare', stats: { followers: '64.2K', content: '310', products: '180' },
    ad: { badge: 'Gift', img: U('1476900164809-ff19b8ae5968', 760, 760), hl: 'Gifts with a shiver.', sub: 'Candles, prints and books for horror lovers.', meta: 'From £6' },
    products: [
      { name: 'Haunted Library Candle', price: '£24', tag: 'FLAGSHIP', emoji: '🕯️', rating: 4.8, reviews: 1840, cat: 'candles', special: true, desc: 'Old paper, leather and a hint of woodsmoke. Hand-poured soy wax.', features: ['50-hour burn'], review: { who: 'Cass M.', text: 'Smells exactly like a haunted library should.' } },
      { name: 'Ghost Story Advent Calendar', price: '£32', tag: 'BESTSELLER', emoji: '📚', rating: 4.9, reviews: 1240, cat: 'books', desc: '24 tiny printed ghost stories, one behind each door.', features: ['Ships by 28 November'], review: { who: 'Wanda B.', text: 'The best advent calendar I own.' } },
      { name: 'Haunted House Print', price: '£18', emoji: '🖼️', rating: 4.7, reviews: 520, cat: 'prints', desc: 'A linocut print, signed, A4.', features: ['Edition of 100'], review: { who: 'Nate R.', text: 'Looks great above the fire.' } },
      { name: 'Ghostly Enamel Pin', price: '£6', tag: 'SPECIAL', emoji: '📌', rating: 4.7, reviews: 860, cat: 'prints', special: true, desc: 'A small ghost with a candle.', features: ['Glows in the dark'], review: { who: 'Yasmin K.', text: 'Cute and spooky.' } }
    ],
    shopCats: [ { key: 'candles', label: 'Candles', icon: '🕯️' }, { key: 'books', label: 'Books', icon: '📚' }, { key: 'prints', label: 'Prints', icon: '🖼️' } ],
    feed: [ { type: 'post', sub: 'Brand post · 1d', text: 'The <b>Haunted Library Candle</b>, lit for the long nights.', img: U('1619378352777-1742dc62b564', 800, 440), eng: '♡ 3.2K · 💬 210', product: 0 } ],
    events: [ { zoneEvent: true, tag: 'SALE', title: 'Black Friday: a quarter off candles', when: 'Nov 27 · All day', desc: 'A quarter off every candle, for one day.', registered: 1460, capacity: 4000 } ],
    about: { founded: 'Manchester · 2019', story: 'A horror fan who couldn’t find gifts that were spooky but beautiful.', milestones: [['2019', 'The first candle'], ['2024', 'The advent calendar'], ['2026', 'Brand Zone on HorrorXX']], values: ['Made in the UK', 'Independent artists', 'Plastic-free packaging'] } }),

  'ironwood-sfx': { key: 'ironwood-sfx', kind: 'business', gw: 'horror', name: 'Ironwood SFX', color: '#D8343B', gradient: BLOOD, img: U('1768151240764-9df5e3bcefdd', 900, 500),
    tier: 'Verified', category: 'Prosthetics and effects', tagline: 'Prosthetics, creatures and effects for film, TV and theatre.',
    about: { founded: 'Leeds · 2011', story: 'A workshop making prosthetics, creature suits and practical effects for screen and stage.' },
    stats: { years: 15, staff: 28, clients: '240 productions' },
    caps: [ { name: 'Prosthetics', detail: 'Silicone pieces, sculpted and painted by hand.' }, { name: 'Creature effects', detail: 'Suits, puppets and animatronics.' }, { name: 'Training', detail: 'Courses in skin-safe materials.' } ],
    specs: { moq: 'One piece', lead: '2 to 10 weeks', regions: 'UK & Europe', certs: ['Skin-safe materials', 'Fully insured', 'Studio-approved supplier'] },
    supplies: [ { kind: 'brand', key: 'candle-crypt', what: 'Costume pieces for the guides' } ],
    cases: [ { title: 'A short film’s ghost', text: 'A full prosthetic face in two weeks, on a tiny budget.' } ],
    feed: [ { sub: 'Workshop · 3d', text: 'A creature head in silicone, painted one vein at a time.' } ],
    contact: { person: 'Mo Hart, Projects', response: 'Replies within 24 hours' } },

  'hushwood-audio': { key: 'hushwood-audio', kind: 'business', gw: 'horror', name: 'Hushwood Audio', color: '#9CA3AF', gradient: FOG, img: U('1486707471592-8e7eb7e36f78', 900, 500),
    tier: 'Verified', category: 'Sound design', tagline: 'Sound design and production for audio drama, audiobooks and film.',
    about: { founded: 'Bristol · 2015', story: 'A studio that makes the creaks, whispers and silences that make horror work, for audiobooks, podcasts and films.' },
    stats: { years: 11, staff: 14, clients: '160 productions' },
    caps: [ { name: 'Audio drama', detail: 'Casting, recording and full sound design.' }, { name: 'Audiobooks', detail: 'Narration with atmosphere.' }, { name: 'Foley', detail: 'Footsteps, doors and things that go bump.' } ],
    specs: { moq: 'One episode', lead: '2 to 8 weeks', regions: 'UK', certs: ['Fully insured', 'Accessible studio', 'Living Wage employer'] },
    supplies: [ { kind: 'brand', key: 'blackthorn-press', what: 'The Twelve Winter Ghosts audiobook' } ],
    cases: [ { title: 'A ghost story podcast', text: 'Ten episodes, a million downloads.' } ],
    feed: [ { sub: 'Studio · 5d', text: 'Recording a door that creaks in exactly the right way.' } ],
    contact: { person: 'Lara Penn, Studio', response: 'Replies within one working day' } }
});

/* events in the Events tab */
gxEvents('horror', [
  { gw: 'horror', zone: 'blackthorn-press', type: 'Live', icon: '🔴', live: true, time: 'Live Now', title: 'Blackthorn Live · Ghost stories by candlelight', desc: 'Three authors read new ghost stories live from Whitby. Lights off recommended.' },
  { gw: 'horror', type: 'Event', icon: '🔥', time: 'Dec 2', title: 'Fireside ghost stories, York', desc: 'York Ghost Story Club: stories read aloud by candlelight.' },
  { gw: 'horror', type: 'Event', icon: '📖', time: 'Nov 26', title: 'Read-along: The Salt House, part one', desc: 'The Night Shift reads together online.' },
  { gw: 'horror', zone: 'gravegoods', type: 'Sale', icon: '🕯️', time: 'Nov 27', title: 'Gravegoods Black Friday', desc: 'A quarter off every candle, for one day.' },
  { gw: 'horror', zone: 'midnight-matinee', type: 'Event', icon: '🎬', time: 'Dec 1', title: 'Winter Chills begins', desc: 'Midnight Matinee: a new horror film every night until Christmas Eve.' },
  { gw: 'horror', zone: 'candle-crypt', type: 'Event', icon: '🌑', time: 'Dec 21', title: 'Winter solstice ghost walk, York', desc: 'Candle & Crypt: the longest night, two extra stops.' },
  { gw: 'horror', type: 'Event', icon: '🎄', time: 'Dec 23', title: 'Christmas Eve Eve readings, York', desc: 'York Ghost Story Club’s Christmas readings by the fire.' },
  { gw: 'horror', type: 'Event', icon: '👻', time: 'Dec 15', title: 'Ghost stories by the fire (online)', desc: 'The Night Shift: members read their own stories live.' }
]);
})();
/* ═════════ /HORRORXX ═════════ */
