/* ═════════ COMICXX — a Books demo gateway (2026-11-21, Sean; build -89) ═════════
   Built with the _tools/README.md recipe. Palette (light): newsprint cream, pop red, ink blue, a halftone feel.
   Home sector: Books. Every brand, title, character and creator here is fictional: no real comics, publishers or
   characters are named or pictured (photos are of artists drawing, sketchbooks, presses and unbranded pages).
   Places are real. */
(function(){
const U = (id, w, h) => `https://images.unsplash.com/photo-${id}?w=${w}&h=${h}&fit=crop&q=75`;
const POP = 'linear-gradient(135deg,#F0434F,#A3121D)', INK = 'linear-gradient(135deg,#3B6FE0,#16337D)', SUNNY = 'linear-gradient(135deg,#F7C844,#C9851A)', PAPER = 'linear-gradient(135deg,#E8DFC9,#A89A78)';

GATEWAYS.comic = {
  name: 'ComicXX', domain: 'comicxx.com', emoji: '💥', sector: 'books', live: true,
  tagline: 'The Comics Universe',
  theme: {
    bg: '#FFFCF3', text: '#1D1B24', cardBg: '#FFFFFF', cardBorder: 'rgba(29,27,36,.12)',
    headerBg: 'linear-gradient(180deg,#FDF0DA,#FFFCF3)', accent: '#E11D2E', accentAlt: '#2453C9', dark: false
  },
  gradient: 'linear-gradient(135deg,#16337D,#E11D2E,#F7C844)',
  stats: { members: '5.4M', brands: '3,200+', agents: '57' },
  spaces: ['All Feed', 'New This Week', 'Graphic Novels', 'Making Comics', 'Manga & More', 'Zines'],
  trending: ['#NewComicDay', '#Inktober', '#ZineFair'],
  brandZones: [
    { key: 'panel-gutter', name: 'Panel & Gutter Press', color: '#E11D2E', tier: 'Founding Partner', tag: 'Independent graphic novels, published in Bristol' },
    { key: 'nib-brush', name: 'Nib & Brush', color: '#2453C9', tier: 'Brand Zone', tag: 'Inks, pens and paper for comic artists' },
    { key: 'halftone-comics', name: 'Halftone Comics', color: '#C9851A', tier: 'Brand Zone', tag: 'Comic shops in Leeds, York and online' },
    { key: 'panelvault', name: 'Panelvault', color: '#7C3AED', tier: 'Brand Zone', tag: 'Indie comics to read on your phone' }
  ],
  apps: [
    { name: 'Panel Planner', color: '#E11D2E', desc: 'Plan your comic page, panel by panel', key: 'panel-planner', url: 'apps/panel-planner.html',
      dev: 'Nib & Brush', rating: '4.8', users: '640K', perms: ['profile', 'feed'],
      tagline: 'Thumbnail it before you ink it.',
      about: 'Panel Planner gives you page layouts (the classic six-panel grid, a big splash, wide cinematic strips) to thumbnail your pages before you draw. Write what happens in each panel, see the page count and pace of your story, and print a template.',
      features: ['Eight page layouts', 'Notes for every panel', 'Page-by-page pacing view', 'Share a page plan to ComicXX'],
      shots: ['apps/panel-planner/shot-1.jpg', 'apps/panel-planner/shot-2.jpg', 'apps/panel-planner/shot-3.jpg'],
      version: '2.6', size: '10 KB',
      updates: [ { v: '2.6', ago: 3, notes: 'Pacing view.' }, { v: '2.2', ago: 70, notes: 'Splash and widescreen layouts.' }, { v: '1.8', ago: 210, notes: 'Signed in with GENEXXO.' } ],
      reviews: [ { who: '@first_zine_zara', stars: 5, ago: 1, text: 'Planned my whole 24-page zine on the bus.' }, { who: '@inky_ike', stars: 5, ago: 9, text: 'The pacing view is genius.' }, { who: '@webcomic_wil', stars: 4, ago: 20, text: 'Want a vertical-scroll layout.' } ] },
    { name: 'Pull List', color: '#2453C9', desc: 'Your comics each week, and what you’ve read', key: 'pull-list', url: 'apps/pull-list.html',
      dev: 'Halftone Comics', rating: '4.7', users: '980K', perms: ['profile', 'feed'],
      tagline: 'Never miss an issue.',
      about: 'Pull List keeps track of the series you follow: what’s out this week, what you’ve read, and what’s waiting on the pile. Reserve your issues at your local shop with one tap.',
      features: ['This week’s releases for your series', 'Read and unread piles', 'Reserve at your shop', 'Reading streaks'],
      shots: ['apps/pull-list/shot-1.jpg', 'apps/pull-list/shot-2.jpg', 'apps/pull-list/shot-3.jpg'],
      version: '3.4', size: '9 KB',
      updates: [ { v: '3.4', ago: 5, notes: 'Reserve at your local shop.' }, { v: '3.0', ago: 80, notes: 'Unread pile.' }, { v: '2.5', ago: 230, notes: 'Signed in with GENEXXO.' } ],
      reviews: [ { who: '@wednesday_wes', stars: 5, ago: 2, text: 'My Wednesday ritual, organised.' }, { who: '@inky_ike', stars: 4, ago: 12, text: 'The unread pile is a little judgemental.' }, { who: '@grad_novel_gwen', stars: 5, ago: 31, text: 'Lovely and clear.' } ] },
    { name: 'Balloon Check', color: '#C9851A', desc: 'Is your lettering easy to read? Check every balloon', key: 'balloon-check', url: 'apps/balloon-check.html',
      dev: 'Bubble Font Foundry', rating: '4.8', users: '310K', perms: ['profile', 'feed'],
      tagline: 'Fewer words. Better comics.',
      about: 'Balloon Check reads your script and counts the words in each balloon and panel. Most letterers keep a balloon under about 25 words and a panel under about 50, so it flags the crowded ones and suggests where to split.',
      features: ['Word counts per balloon and panel', 'Crowded panels flagged', 'Split suggestions', 'Works with any script format'],
      shots: ['apps/balloon-check/shot-1.jpg', 'apps/balloon-check/shot-2.jpg', 'apps/balloon-check/shot-3.jpg'],
      version: '1.6', size: '9 KB',
      updates: [ { v: '1.6', ago: 4, notes: 'Split suggestions.' }, { v: '1.3', ago: 80, notes: 'Panel totals.' }, { v: '1.0', ago: 220, notes: 'Signed in with GENEXXO.' } ],
      reviews: [ { who: '@script_sam', stars: 5, ago: 3, text: 'Cut my word count by a third. The pages breathe now.' }, { who: '@first_zine_zara', stars: 4, ago: 15, text: 'Ouch, but useful.' }, { who: '@inky_ike', stars: 5, ago: 33, text: 'My letterer thanks you.' } ] }
  ],
  pros: [
    { key: 'kai-morgan-comic-art', name: 'Kai Morgan Comic Art', color: '#E11D2E', tag: 'Comic art, covers and portfolio reviews · commissions open', role: 'Comic artist',
      img: U('1569154076682-4c0466623ec2', 800, 800), base: 'Bristol, UK', langs: 'English, Welsh', years: 13, rating: '4.9', reviewsN: 342, cur: '£',
      creds: ['Artist on four published graphic novels', 'Illustration degree', 'Teaches comics at a Bristol art school'],
      about: 'Kai draws comics, covers and the odd wedding invitation shaped like a comic. He also reviews portfolios for artists trying to break in, with notes you can actually act on.',
      services: [ { id: 'review', name: 'Portfolio review', dur: '45 minutes online', price: 60, desc: 'Ten pages, honest notes, what to draw next.' },
                  { id: 'cover', name: 'Cover commission', dur: '3 weeks', price: 450, desc: 'A full-colour cover for your comic or zine.' },
                  { id: 'class', name: 'Comics class', dur: '3 hours', price: 40, desc: 'Panels, pacing and page turns, in Bristol.' } ],
      avail: { days: [2, 3, 4, 6], times: ['10:00', '14:00', '18:00'] },
      reviews: [ { who: '@inky_ike', stars: 5, ago: 4, text: 'His portfolio review got me my first paid job.' }, { who: '@first_zine_zara', stars: 5, ago: 15, text: 'The class changed how I lay out pages.' }, { who: '@grad_novel_gwen', stars: 5, ago: 40, text: 'Stunning cover for our anthology.' } ],
      posts: [ { ago: 1, text: 'Put your page turns to work: end every right-hand page on a question, so the reader has to turn.' }, { ago: 6, text: 'Two cover slots left before Christmas.' } ],
      tier: 'Pro Zone', verified: true },
    { key: 'ana-sousa-lettering', name: 'Ana Sousa Lettering', color: '#2453C9', tag: 'Comic lettering and logo design · indie and small press', role: 'Letterer',
      img: U('1767611033966-f5f7b9b348d7', 800, 800), base: 'Glasgow, UK', langs: 'English, Portuguese', years: 9, rating: '4.9', reviewsN: 268, cur: '£',
      creds: ['Lettered 60 published issues', 'Font designer', 'Speaks at UK comics festivals'],
      about: 'Ana letters comics so you don’t notice the lettering, only the story. Balloons that lead the eye, sound effects that sing, and logos that look good tiny on a phone.',
      services: [ { id: 'page', name: 'Lettering (per page)', dur: 'About a week per issue', price: 25, desc: 'Balloons, captions and SFX.' },
                  { id: 'logo', name: 'Comic logo', dur: '2 weeks', price: 280, desc: 'Three ideas, two rounds of changes.' },
                  { id: 'script', name: 'Script read-through', dur: '30 minutes', price: 35, desc: 'Where your words will crowd the art.' } ],
      avail: { days: [1, 2, 3, 4], times: ['10:00', '15:00'] },
      reviews: [ { who: '@script_sam', stars: 5, ago: 6, text: 'Made my overwritten script look effortless.' }, { who: '@grad_novel_gwen', stars: 5, ago: 18, text: 'Our logo is perfect.' }, { who: '@inky_ike', stars: 5, ago: 44, text: 'A true craftsperson.' } ],
      posts: [ { ago: 2, text: 'Readers follow balloons left to right, top to bottom. Place the first speaker on the left.' } ],
      tier: 'Pro Zone', verified: true },
    { key: 'helen-cho-editing', name: 'Helen Cho Story Editing', color: '#C9851A', tag: 'Editing graphic novels and webcomics · story, pacing, scripts', role: 'Comics editor',
      img: U('1506863530036-1efeddceb993', 800, 800), base: 'London, UK · and online', langs: 'English, Korean', years: 15, rating: '4.8', reviewsN: 196, cur: '£',
      creds: ['Former editor at a UK graphic novel publisher', 'Edited 40 published books', 'Runs a webcomics mentoring scheme'],
      about: 'Helen edits comics the way publishers do: is the story clear, is it paced, does every page earn its place? She works with first-time creators preparing a pitch as much as with old hands.',
      services: [ { id: 'call', name: 'Pitch review', dur: '45 minutes', price: 65, desc: 'Your pitch, synopsis and sample pages.' },
                  { id: 'edit', name: 'Script edit', dur: '2 weeks', price: 320, desc: 'A full story edit of a script up to 120 pages.' },
                  { id: 'mentor', name: 'Three-month mentoring', dur: 'Monthly calls', price: 240, desc: 'For webcomic creators building a readership.' } ],
      avail: { days: [1, 3, 5], times: ['10:00', '14:00'] },
      reviews: [ { who: '@grad_novel_gwen', stars: 5, ago: 8, text: 'Her edit is why our book got picked up.' }, { who: '@webcomic_wil', stars: 5, ago: 22, text: 'Doubled my readers in three months.' }, { who: '@script_sam', stars: 4, ago: 50, text: 'Tough love, all of it fair.' } ],
      posts: [ { ago: 3, text: 'Write the one-line pitch first. If you can’t say what it’s about in a sentence, nor can a publisher.' } ],
      tier: 'Pro Zone', verified: true }
  ],
  communities: [
    { key: 'panel-talk', name: 'Panel Talk', domain: 'paneltalk.comicxx.com', color: '#E11D2E', img: U('1765547586679-b16ee179e653', 900, 500),
      scope: 'Global', where: 'Every sketchbook', members: 286000, online: 4920, tagline: 'Read them, make them, talk about them.',
      about: 'Readers and makers of comics: weekly recommendations, process posts, critique threads and the monthly zine swap. All styles, all levels, no gatekeeping.',
      rules: ['Credit the artist', 'Critique the work, not the person', 'Spoiler tags for anything new'],
      mods: ['@inky_ike', '@grad_novel_gwen'],
      threads: [ { t: 'Show us your first ever comic page', by: '@first_zine_zara', tag: 'PROCESS', replies: 1460, ago: 0, votes: 3820 }, { t: 'Graphic novels that made you cry', by: '@grad_novel_gwen', tag: 'RECS', replies: 924, ago: 1, votes: 1680 }, { t: 'Inking with a brush vs a pen', by: '@inky_ike', tag: 'TOOLS', replies: 412, ago: 2, votes: 760 }, { t: 'December zine swap: sign-up', by: '@zine_zack', tag: 'ZINES', replies: 348, ago: 3, votes: 620 } ],
      events: [ { title: 'Live draw-along', day: 4, time: '19:30', where: 'Online' }, { title: 'December zine swap posts', day: 12, time: '09:00', where: 'Online' } ] },
    { key: 'leeds-comics-collective', name: 'Leeds Comics Collective', domain: 'leeds.comicxx.com', color: '#2453C9', img: U('1495232416988-d26458b7a5fb', 900, 500),
      scope: 'Local', where: 'Leeds', members: 2400, online: 52, tagline: 'Drink and draw, every second Thursday.',
      about: 'Comic makers in Leeds: a drink-and-draw night, a small-press table at local fairs, shared risograph runs and a crit night for works in progress.',
      rules: ['Everyone draws, any level', 'Share the riso costs fairly', 'Kind crits only'],
      mods: ['@leeds_lizzie', '@inky_ike'],
      threads: [ { t: 'Drink and draw: this Thursday', by: '@leeds_lizzie', tag: 'MEET-UP', replies: 42, ago: 0, votes: 96 }, { t: 'Shared riso run for Christmas zines', by: '@zine_zack', tag: 'PRINT', replies: 36, ago: 1, votes: 70 }, { t: 'Small-press fair table: who’s in?', by: '@leeds_lizzie', tag: 'FAIR', replies: 30, ago: 2, votes: 58 } ],
      events: [ { title: 'Drink and draw', day: 5, time: '19:00', where: 'Leeds city centre' }, { title: 'Small-press Christmas fair', day: 14, time: '11:00', where: 'Chapel Allerton, Leeds' } ] }
  ],
  feed: [
    { av: 'CX', avBg: POP, author: 'ComicXX Editorial', sub: 'Featured · Just now', badge: '★ FEATURED',
      text: 'Thumbnails to finished pages. Graphic novels, new issues, manga, zines, webcomics and the artists, letterers and editors who make them. Comics, all in one place.',
      img: U('1635183783375-98e857771351', 800, 600), eng: '♡ 54.2K · 💬 4.8K · ↗ 6.2K' },
    { av: 'WW', avBg: INK, author: '@wednesday_wes', sub: 'New This Week · Just now', badge: 'COMMUNITY',
      text: 'New comic day. Kettle on, phone off, three issues and a graphic novel I’ve waited a year for 📚',
      img: U('1531501410720-c8d437636169', 800, 600), eng: '♡ 16.8K · 💬 1.9K · ↗ 520' },
    { av: 'PG', avBg: POP, author: 'Panel & Gutter Press', sub: 'Founding Partner · Brand Zone', badge: 'BRAND ZONE',
      text: '<b>The Lighthouse Keeper’s Daughter</b> is out now: 240 pages of storm, salt and secrets, drawn over four years in a Cornish attic and printed this month in Bristol.',
      img: U('1503694978374-8a2fa686963a', 800, 600), eng: '♡ 12.4K · 💬 980 · ↗ 1.6K' },
    { av: 'NB', avBg: INK, author: 'Nib & Brush', sub: 'Brand Zone · 1h ago', badge: 'BRAND ZONE',
      text: 'Fineliners, brush pens and a sketchbook that takes ink without bleeding: the <b>Inker’s Kit</b> is back for Christmas.',
      img: U('1498729277079-9aa24f85d92d', 800, 600), eng: '♡ 6.6K · 💬 480 · ↗ 560' },
    { av: 'ZA', avBg: SUNNY, author: '@first_zine_zara', sub: 'Zines · 2h ago', badge: 'COMMUNITY',
      text: 'A blank notebook, a sharp pen and twenty-four pages to fill. My first zine is about my nan’s allotment, and it goes to the riso printer in two weeks 🌱',
      img: U('1501618669935-18b6ecb13d6d', 800, 600), eng: '♡ 9.4K · 💬 820 · ↗ 360' },
    { av: 'HC', avBg: SUNNY, author: 'Halftone Comics', sub: 'Brand Zone · 4h ago', badge: 'BRAND ZONE',
      text: 'Doors open at 10 for new comic day. Pull lists ready at the counter, and the kettle’s on.',
      img: U('1697588501368-039d39ef3880', 800, 600), eng: '♡ 4.8K · 💬 360 · ↗ 420' },
    { av: 'KM', avBg: POP, author: 'Kai Morgan Comic Art', sub: 'Making Comics · 6h ago', badge: 'PRO ZONE',
      text: 'Warm-up sketch before the real pages: one face, ten expressions, five minutes. Every artist should do this every morning.',
      img: U('1569309338532-a0c01062acc8', 800, 600), eng: '♡ 4.2K · 💬 290 · ↗ 740' }
  ],
  prompts: ['Recommend a graphic novel for someone who doesn’t read comics', 'How do I start making my own comic?', 'Find a drink-and-draw night in Leeds', 'How many words should go in a speech balloon?'],
  businesses: ['riso-riot', 'bubble-font-foundry']
};

/* the four Brand Zones and two Business Zones */
const brand = (o) => Object.assign({ kind: 'brand', gw: 'comic', verified: true }, o);
Object.assign(ZONES, {
  'panel-gutter': brand({ key: 'panel-gutter', name: 'Panel & Gutter Press', color: '#E11D2E', gradient: POP, tier: 'Founding Partner',
    tagline: 'Independent graphic novels, published in Bristol', stats: { followers: '164K', content: '820', products: '58' },
    ad: { badge: 'Featured', img: U('1581079289196-67865ea83118', 760, 760), hl: 'Out now: The Lighthouse Keeper’s Daughter.', sub: '240 pages of storm, salt and secrets.', meta: 'From £8' },
    products: [
      { name: 'The Lighthouse Keeper’s Daughter', price: '£22', tag: 'FLAGSHIP', emoji: '🌊', rating: 4.9, reviews: 2460, cat: 'graphic-novels', special: true, desc: 'A Cornish ghost story about grief and the sea, painted in watercolour over four years.', features: ['240 pages', 'Hardback', 'Signed bookplate while stocks last'], review: { who: 'Gwen L.', text: 'I read it twice in one weekend.' } },
      { name: 'Small Hours (Vol. 1)', price: '£14', tag: 'BESTSELLER', emoji: '🌙', rating: 4.8, reviews: 3120, cat: 'graphic-novels', desc: 'Night-shift workers in Manchester, one night, six stories.', features: ['Paperback'], review: { who: 'Wes B.', text: 'Funny and heartbreaking.' } },
      { name: 'Anthology: New Voices 2026', price: '£16', emoji: '📖', rating: 4.7, reviews: 860, cat: 'anthologies', desc: 'Twelve short comics by first-time creators.', features: ['Creators paid royalties'], review: { who: 'Zara P.', text: 'So many new favourites.' } },
      { name: 'Comics Club Subscription', price: '£18', tag: 'SPECIAL', emoji: '📦', rating: 4.9, reviews: 1240, cat: 'subscriptions', special: true, desc: 'Every new Panel & Gutter book, posted on release day, with a print.', features: ['Six books a year'], review: { who: 'Ike O.', text: 'Christmas every two months.' } }
    ],
    shopCats: [ { key: 'graphic-novels', label: 'Graphic novels', icon: '📚' }, { key: 'anthologies', label: 'Anthologies', icon: '📖' }, { key: 'subscriptions', label: 'Comics Club', icon: '📦' } ],
    feed: [
      { type: 'post', sub: 'Brand post · 2h', text: 'Fresh off the press: the first printing of <b>The Lighthouse Keeper’s Daughter</b>.', img: U('1503694978374-8a2fa686963a', 800, 440), eng: '♡ 12.4K · 💬 980 · ↗ 1.6K', product: 0 },
      { type: 'post', sub: 'Behind the books · Yesterday', text: 'We pay creators an advance and royalties on every copy. Comics are work, and work gets paid.', img: U('1581833971358-2c8b550f87b3', 800, 440), eng: '♡ 5.6K · 💬 420' },
      { type: 'community', who: 'Zara P.', whoBg: SUNNY, sub: 'Community · 1d', text: 'Do you take submissions from first-time creators?', eng: '♡ 380 · 💬 96', reply: 'Hi Zara! Yes: our New Voices anthology is open every spring, and we read every pitch. Send a one-line pitch, a one-page synopsis and five finished pages. Helen Cho’s pitch reviews here on ComicXX are a great way to get ready. 📖' }
    ],
    events: [ { zoneEvent: true, tag: 'LIVE', title: 'Panel & Gutter Live · Draw-along with the artist', when: 'Live now', desc: 'The artist of The Lighthouse Keeper’s Daughter paints a page live and answers questions.', registered: 3640, capacity: 8000 } ],
    about: { founded: 'Bristol · 2014', story: 'Two booksellers who couldn’t find the comics they wanted to sell, so they published them. We joined ComicXX as Founding Partner because readers and makers are already here.', milestones: [['2014', 'The first book'], ['2021', 'The New Voices anthology'], ['2026', 'Founding Partner on ComicXX']], values: ['Creators paid fairly', 'Stories for everyone', 'Printed in Britain'] } }),

  'nib-brush': brand({ key: 'nib-brush', name: 'Nib & Brush', color: '#2453C9', gradient: INK, tier: 'Brand Zone',
    tagline: 'Inks, pens and paper for comic artists', stats: { followers: '88.6K', content: '420', products: '120' },
    ad: { badge: 'New', img: U('1498729277079-9aa24f85d92d', 760, 760), hl: 'The Inker’s Kit.', sub: 'Fineliners, brush pens and paper that takes ink.', meta: 'From £4' },
    products: [
      { name: 'Inker’s Kit', price: '£36', tag: 'FLAGSHIP', emoji: '🖋️', rating: 4.9, reviews: 2180, cat: 'kits', special: true, desc: 'Six fineliners, two brush pens, a white-out pen and a bristol-board pad.', features: ['Waterproof, fade-proof ink'], review: { who: 'Ike O.', text: 'Everything I ink with, in one box.' } },
      { name: 'Comic Page Pad (A3)', price: '£14', tag: 'BESTSELLER', emoji: '📄', rating: 4.8, reviews: 3260, cat: 'paper', desc: 'Smooth bristol with printed blue-line guides for borders and bleed.', features: ['20 sheets'], review: { who: 'Zara P.', text: 'The blue lines make it so easy.' } },
      { name: 'Brush Pen', price: '£6', emoji: '🖌️', rating: 4.8, reviews: 2860, cat: 'pens', desc: 'A real-hair brush tip with black ink cartridges.', features: ['Refillable'], review: { who: 'Wil T.', text: 'Gorgeous thick-to-thin lines.' } },
      { name: 'Sketchbook (A5)', price: '£12', tag: 'SPECIAL', emoji: '📓', rating: 4.8, reviews: 1460, cat: 'paper', special: true, desc: 'Heavy paper that takes ink, markers and a little watercolour.', features: ['Lay-flat binding'], review: { who: 'Gwen L.', text: 'My daily sketchbook.' } }
    ],
    shopCats: [ { key: 'kits', label: 'Kits', icon: '🖋️' }, { key: 'paper', label: 'Paper', icon: '📄' }, { key: 'pens', label: 'Pens', icon: '🖌️' } ],
    feed: [ { type: 'post', sub: 'Brand post · 1h', text: 'Pencils first, ink later: our <b>Comic Page Pad</b> has blue lines that disappear on scanning.', img: U('1530103540420-3f5fce164e66', 800, 440), eng: '♡ 6.6K · 💬 480', product: 1 } ],
    events: [ { zoneEvent: true, tag: 'SALE', title: 'Black Friday: a quarter off kits', when: 'Nov 27 · All day', desc: 'A quarter off every kit, for one day.', registered: 2860, capacity: 7000 } ],
    about: { founded: 'Sheffield · 2015', story: 'An inker who couldn’t find blue-line pads in Britain and started printing her own.', milestones: [['2015', 'The first page pad'], ['2022', 'The Inker’s Kit'], ['2026', 'Brand Zone on ComicXX']], values: ['Made for comics', 'Refillable where possible', 'Tested by working artists'] } }),

  'halftone-comics': brand({ key: 'halftone-comics', name: 'Halftone Comics', color: '#C9851A', gradient: SUNNY, tier: 'Brand Zone',
    tagline: 'Comic shops in Leeds, York and online', stats: { followers: '62.4K', content: '520', products: '30' },
    ad: { badge: 'Featured', img: U('1697588501368-039d39ef3880', 760, 760), hl: 'Doors open at 10.', sub: 'New comic day, every week, in Leeds and York.', meta: 'From £3' },
    products: [
      { name: 'Pull List Membership', price: '£5', tag: 'FLAGSHIP', emoji: '🗂️', rating: 4.8, reviews: 1840, cat: 'membership', special: true, desc: 'We keep your series aside every week and give you a tenth off them.', features: ['Collect or post'], review: { who: 'Wes B.', text: 'Never missed an issue since.' } },
      { name: 'Staff Pick Bundle', price: '£25', tag: 'BESTSELLER', emoji: '🎁', rating: 4.9, reviews: 960, cat: 'bundles', desc: 'Three graphic novels our staff love, chosen for you.', features: ['Tell us what you like'], review: { who: 'Gwen L.', text: 'Every pick a winner.' } },
      { name: 'Backing Boards and Bags (50)', price: '£12', emoji: '🛡️', rating: 4.7, reviews: 1120, cat: 'supplies', desc: 'Acid-free boards and bags for keeping issues flat and safe.', features: ['Standard size'], review: { who: 'Ike O.', text: 'Keeps the collection pristine.' } },
      { name: 'Gift Card', price: '£15', tag: 'SPECIAL', emoji: '💳', rating: 4.9, reviews: 760, cat: 'bundles', special: true, desc: 'For the comic reader in your life.', features: ['Use in shop or online'], review: { who: 'Zara P.', text: 'Perfect stocking filler.' } }
    ],
    shopCats: [ { key: 'membership', label: 'Pull list', icon: '🗂️' }, { key: 'bundles', label: 'Bundles & gifts', icon: '🎁' }, { key: 'supplies', label: 'Supplies', icon: '🛡️' } ],
    feed: [ { type: 'post', sub: 'Brand post · 4h', text: 'The window at our Leeds shop, drawn by the Leeds Comics Collective.', img: U('1788808912956-c4b04b764a61', 800, 440), eng: '♡ 4.8K · 💬 360', product: 1 } ],
    events: [ { zoneEvent: true, tag: 'EVENT', title: 'Late-night Christmas shopping', when: 'Dec 10 · 18:00', desc: 'Open till 10pm with mince pies and a signing table.', registered: 420, capacity: 600 } ],
    about: { founded: 'Leeds · 1994', story: 'A comic shop in Leeds for thirty years, now with a second in York and a busy online store.', milestones: [['1994', 'The Leeds shop opens'], ['2016', 'The York shop'], ['2026', 'Brand Zone on ComicXX']], values: ['Everyone welcome', 'Staff who read everything', 'Local creators on the front table'] } }),

  'panelvault': brand({ key: 'panelvault', name: 'Panelvault', color: '#7C3AED', gradient: 'linear-gradient(135deg,#A78BFA,#5B21B6)', tier: 'Brand Zone',
    tagline: 'Indie comics to read on your phone', stats: { followers: '118K', content: '2.4K', products: '6' },
    ad: { badge: 'Gift', img: U('1515222410484-613a51c43721', 760, 760), hl: 'Three thousand indie comics.', sub: 'Read on your phone, panel by panel.', meta: 'From £4' },
    products: [
      { name: 'Panelvault Monthly', price: '£6', tag: 'FLAGSHIP', emoji: '📱', rating: 4.7, reviews: 4260, cat: 'subscription', special: true, desc: 'Unlimited reading of 3,000 independent comics, with creators paid per page read.', features: ['Panel-by-panel view', 'Offline reading'], review: { who: 'Wil T.', text: 'Found so many indie gems.' } },
      { name: 'Panelvault Yearly', price: '£60', tag: 'BESTSELLER', emoji: '📅', rating: 4.8, reviews: 1860, cat: 'subscription', desc: 'Twelve months for the price of ten.', features: ['Gift option'], review: { who: 'Wes B.', text: 'My commute reading sorted.' } },
      { name: 'Gift: Three Months', price: '£16', emoji: '🎁', rating: 4.8, reviews: 640, cat: 'gifts', desc: 'Three months of reading, as a gift.', features: ['Choose the start date'], review: { who: 'Gwen L.', text: 'Turned my brother into a comics reader.' } },
      { name: 'Creator Plan', price: '£4', tag: 'SPECIAL', emoji: '✏️', rating: 4.6, reviews: 420, cat: 'creators', special: true, desc: 'Publish your own comic on Panelvault and earn per page read.', features: ['Keep your rights'], review: { who: 'Zara P.', text: 'My zine found 2,000 readers.' } }
    ],
    shopCats: [ { key: 'subscription', label: 'Subscriptions', icon: '📱' }, { key: 'gifts', label: 'Gifts', icon: '🎁' }, { key: 'creators', label: 'For creators', icon: '✏️' } ],
    feed: [ { type: 'post', sub: 'Brand post · 1d', text: 'Drawn straight on the tablet, published the same day: creators on our <b>Creator Plan</b> keep their rights.', img: U('1599252441131-5aafffcf7740', 800, 440), eng: '♡ 3.2K · 💬 240', product: 3 } ],
    events: [ { zoneEvent: true, tag: 'DEADLINE', title: 'Last day for gift subscriptions', when: 'Dec 23 · 23:59', desc: 'Buy a gift subscription by 23 December and it arrives by email on Christmas morning.', registered: 560, capacity: 2000 } ],
    about: { founded: 'Manchester · 2019', story: 'A webcomic artist and a developer who wanted indie comics to be easy to read on a phone, and creators to get paid properly.', milestones: [['2019', 'Launch with 100 comics'], ['2024', 'Pay per page read'], ['2026', 'Brand Zone on ComicXX']], values: ['Creators keep their rights', 'Pay per page read', 'Built for phones'] } }),

  'riso-riot': { key: 'riso-riot', kind: 'business', gw: 'comic', name: 'Riso Riot Printers', color: '#E11D2E', gradient: POP, img: U('1562155695-fb6e1f95fcfd', 900, 500),
    tier: 'Verified', category: 'Small-press printing', tagline: 'Risograph and short-run printing for zines and comics.',
    about: { founded: 'Glasgow · 2012', story: 'We print zines, comics and art books for small presses and self-publishers: risograph from 50 copies, digital and offset for bigger runs.' },
    stats: { years: 14, staff: 18, clients: '1,200 creators & presses' },
    caps: [ { name: 'Risograph', detail: 'Bright spot colours, runs from 50 copies.' }, { name: 'Short-run comics', detail: 'Saddle-stitched or perfect bound, 100 to 2,000 copies.' }, { name: 'Shared runs', detail: 'Group runs that split the costs for collectives.' } ],
    specs: { moq: '50 copies', lead: '5 to 10 working days', regions: 'UK', certs: ['FSC paper', 'Soy-based inks', 'Living Wage employer'] },
    supplies: [ { kind: 'brand', key: 'panel-gutter', what: 'Signed bookplates and launch prints' } ],
    cases: [ { title: 'A collective’s Christmas zines', text: 'Eight zines in one shared riso run, at a third of the cost each.' } ],
    feed: [ { sub: 'Studio · 3d', text: 'New colour in: fluorescent pink. It glows.' }, { sub: 'Notice · 1w', text: 'Christmas: last artwork by 12 December.' } ],
    contact: { person: 'Mhairi Ross, Print jobs', response: 'Replies within 24 hours' } },

  'bubble-font-foundry': { key: 'bubble-font-foundry', kind: 'business', gw: 'comic', name: 'Bubble Font Foundry', color: '#2453C9', gradient: INK, img: U('1498075702571-ecb018f3752d', 900, 500),
    tier: 'Verified', category: 'Lettering fonts', tagline: 'Comic lettering fonts, drawn by hand and digitised.',
    about: { founded: 'Brighton · 2010', story: 'We draw lettering fonts for comics, from classic all-caps to sound effects, and license them to publishers, letterers and indie creators.' },
    stats: { years: 16, staff: 9, clients: '3,400 letterers & publishers' },
    caps: [ { name: 'Lettering fonts', detail: 'Dialogue, captions and SFX fonts, each with alternates.' }, { name: 'Custom fonts', detail: 'A font made from an artist’s own handwriting.' }, { name: 'Indie licences', detail: 'Low-cost licences for self-publishers.' } ],
    specs: { moq: 'One licence', lead: 'Instant download', regions: 'Worldwide', certs: ['OpenType', 'Accessibility-tested', 'Fair licensing'] },
    supplies: [ { kind: 'brand', key: 'panelvault', what: 'Fonts licensed to every Panelvault creator' } ],
    cases: [ { title: 'An artist’s handwriting font', text: 'Turned an artist’s own lettering into a font for a 300-page series.' } ],
    feed: [ { sub: 'New font · 5d', text: 'Out now: a sound-effects font with 40 hand-drawn CRASHes.' } ],
    contact: { person: 'Joel Price, Licensing', response: 'Replies within one working day' } }
});

/* events in the Events tab */
gxEvents('comic', [
  { gw: 'comic', zone: 'panel-gutter', type: 'Live', icon: '🔴', live: true, time: 'Live Now', title: 'Panel & Gutter Live · Draw-along with the artist', desc: 'A page of The Lighthouse Keeper’s Daughter painted live, with your questions answered.' },
  { gw: 'comic', type: 'Event', icon: '✏️', time: 'Dec 2', title: 'Live draw-along', desc: 'Panel Talk: one prompt, one hour, everyone draws.' },
  { gw: 'comic', type: 'Event', icon: '🍺', time: 'Nov 26', title: 'Drink and draw, Leeds', desc: 'Leeds Comics Collective: bring a sketchbook, any level.' },
  { gw: 'comic', zone: 'nib-brush', type: 'Sale', icon: '🖋️', time: 'Nov 27', title: 'Nib & Brush Black Friday', desc: 'A quarter off every kit, for one day.' },
  { gw: 'comic', type: 'Event', icon: '📮', time: 'Dec 3', title: 'December zine swap: posting day', desc: 'Panel Talk: post your zine to your swap partner.' },
  { gw: 'comic', type: 'Event', icon: '🎄', time: 'Dec 5', title: 'Small-press Christmas fair, Leeds', desc: 'Zines, comics and prints from northern makers in Chapel Allerton.' },
  { gw: 'comic', zone: 'halftone-comics', type: 'Event', icon: '🌙', time: 'Dec 10', title: 'Late-night Christmas shopping, Halftone Comics', desc: 'Open till 10pm in Leeds, with mince pies and a signing table.' },
  { gw: 'comic', zone: 'panelvault', type: 'Deadline', icon: '🎁', time: 'Dec 23', title: 'Last day for gift subscriptions', desc: 'Panelvault: buy by midnight, delivered by email on Christmas morning.' }
]);
})();
/* ═════════ /COMICXX ═════════ */
