/* ═════════ JIGSAWXX — a Games demo gateway (2026-11-21, Sean; build -91) ═════════
   Built with the _tools/README.md recipe. Palette (light): warm cream, teal, mustard. Home sector: Games.
   Every puzzle maker, artist and competition here is fictional; places are real. No branded puzzle boxes in photos. */
(function(){
const U = (id, w, h) => `https://images.unsplash.com/photo-${id}?w=${w}&h=${h}&fit=crop&q=75`;
const TEAL = 'linear-gradient(135deg,#2BB3A3,#11706A)', MUSTARD = 'linear-gradient(135deg,#F2C14E,#B9851A)', CORAL = 'linear-gradient(135deg,#F58B6C,#B9472B)', PLUM = 'linear-gradient(135deg,#A879D6,#5B3A8A)';

GATEWAYS.jigsaw = {
  name: 'JigsawXX', domain: 'jigsawxx.com', emoji: '🧩', sector: 'games', live: true,
  tagline: 'The Jigsaw Universe',
  theme: {
    bg: '#FBF7EF', text: '#23302E', cardBg: '#FFFFFF', cardBorder: 'rgba(17,112,106,.12)',
    headerBg: 'linear-gradient(180deg,#F1EBDD,#FBF7EF)', accent: '#138A80', accentAlt: '#D99A1E', dark: false
  },
  gradient: 'linear-gradient(135deg,#11706A,#2BB3A3,#F2C14E)',
  stats: { members: '2.9M', brands: '1,100+', agents: '33' },
  spaces: ['All Feed', '1000 Pieces', 'Wooden Puzzles', 'Speed Puzzling', 'Swaps', 'Puzzle Kit'],
  trending: ['#PuzzleOfTheWeek', '#SpeedPuzzling', '#ChristmasJigsaw'],
  brandZones: [
    { key: 'haverly-puzzles', name: 'Haverly Puzzles', color: '#138A80', tier: 'Founding Partner', tag: 'Jigsaws made in Sussex since 1962' },
    { key: 'piece-together', name: 'Piece Together', color: '#D99A1E', tier: 'Brand Zone', tag: 'A jigsaw library by post' },
    { key: 'board-sort', name: 'Board & Sort', color: '#B9472B', tier: 'Brand Zone', tag: 'Puzzle boards, mats and sorting trays' },
    { key: 'puzzle-post', name: 'Puzzle Post', color: '#7A52AE', tier: 'Brand Zone', tag: 'A mystery puzzle by an independent artist, every month' }
  ],
  apps: [
    { name: 'Piece Timer', color: '#138A80', desc: 'Time your puzzles and see your pieces per minute', key: 'piece-timer', url: 'apps/piece-timer.html',
      dev: 'Haverly Puzzles', rating: '4.8', users: '420K', perms: ['profile', 'feed'],
      tagline: 'Relaxed or racing, know your pace.',
      about: 'Piece Timer runs while you puzzle, pauses when you take a break and works out your pieces per minute when you finish. Keep a log of every puzzle and your personal bests by size.',
      features: ['Start, pause and finish', 'Pieces per minute', 'Personal bests by size', 'A log of every puzzle'],
      shots: ['apps/piece-timer/shot-1.jpg', 'apps/piece-timer/shot-2.jpg', 'apps/piece-timer/shot-3.jpg'],
      version: '2.0', size: '8 KB',
      updates: [ { v: '2.0', ago: 3, notes: 'Personal bests by size.' }, { v: '1.6', ago: 80, notes: 'Pause for tea.' }, { v: '1.2', ago: 220, notes: 'Signed in with GENEXXO.' } ],
      reviews: [ { who: '@thousandpieces', stars: 5, ago: 1, text: 'Turns out I do 9 pieces a minute. Who knew?' }, { who: '@speedy_sasha', stars: 5, ago: 10, text: 'Essential for competition training.' }, { who: '@sunday_puzzler', stars: 4, ago: 27, text: 'I just like seeing the log grow.' } ] },
    { name: 'Puzzle Swap', color: '#D99A1E', desc: 'Swap finished jigsaws with puzzlers near you', key: 'puzzle-swap', url: 'apps/puzzle-swap.html',
      dev: 'Piece Together', rating: '4.7', users: '310K', perms: ['profile', 'feed'],
      tagline: 'Finished it? Swap it.',
      about: 'Puzzle Swap lists the jigsaws you’ve finished and shows what puzzlers nearby are offering. Ask for a swap, agree a meeting point, and log whether all the pieces were there.',
      features: ['Your shelf of finished puzzles', 'Puzzles offered nearby', 'Request and agree swaps', 'Piece-count honesty badge'],
      shots: ['apps/puzzle-swap/shot-1.jpg', 'apps/puzzle-swap/shot-2.jpg', 'apps/puzzle-swap/shot-3.jpg'],
      version: '1.7', size: '9 KB',
      updates: [ { v: '1.7', ago: 4, notes: 'Honesty badge.' }, { v: '1.4', ago: 100, notes: 'Meeting points.' }, { v: '1.0', ago: 240, notes: 'Signed in with GENEXXO.' } ],
      reviews: [ { who: '@bath_bryony', stars: 5, ago: 2, text: 'Twenty swaps this year and I haven’t bought one.' }, { who: '@sunday_puzzler', stars: 4, ago: 15, text: 'Great idea, works well.' }, { who: '@thousandpieces', stars: 5, ago: 31, text: 'Every piece there, every time.' } ] },
    { name: 'Table Fit', color: '#B9472B', desc: 'Will that puzzle fit on your table?', key: 'table-fit', url: 'apps/table-fit.html',
      dev: 'Board & Sort', rating: '4.8', users: '220K', perms: ['profile', 'feed'],
      tagline: 'Measure before you tip it out.',
      about: 'Enter your table or board size and Table Fit shows which puzzle sizes fit, finished, with room for sorting the pieces around the edge. Drawn to scale.',
      features: ['Typical finished sizes, 300 to 3,000 pieces', 'Room left for sorting', 'Drawn to scale', 'Save your boards'],
      shots: ['apps/table-fit/shot-1.jpg', 'apps/table-fit/shot-2.jpg', 'apps/table-fit/shot-3.jpg'],
      version: '1.3', size: '8 KB',
      updates: [ { v: '1.3', ago: 5, notes: 'Room for sorting.' }, { v: '1.1', ago: 110, notes: 'Saved boards.' }, { v: '1.0', ago: 250, notes: 'Signed in with GENEXXO.' } ],
      reviews: [ { who: '@sunday_puzzler', stars: 5, ago: 3, text: 'Saved me from a 2,000-piece disaster.' }, { who: '@bath_bryony', stars: 4, ago: 18, text: 'Simple and useful.' }, { who: '@speedy_sasha', stars: 5, ago: 40, text: 'Drawn to scale is lovely.' } ] }
  ],
  pros: [
    { key: 'maya-fernandes-art', name: 'Maya Fernandes Puzzle Art', color: '#7A52AE', tag: 'Illustrations for jigsaws · commissions and personalised puzzles', role: 'Jigsaw illustrator',
      img: U('1758600434473-b8694347de49', 800, 800), base: 'Brighton, UK', langs: 'English, Portuguese', years: 12, rating: '4.9', reviewsN: 214, cur: '£',
      creds: ['Illustrated 60 published jigsaws', 'Licensed to three puzzle makers', 'Teaches illustration'],
      about: 'Maya paints busy, joyful scenes made for puzzling: every corner has something to find. She takes commissions for personalised puzzles of your street, family or pets.',
      services: [ { id: 'personal', name: 'Personalised puzzle illustration', dur: '4 to 6 weeks', price: 320, desc: 'Your home, family or town, printed as a 1,000-piece puzzle.' },
                  { id: 'pet', name: 'Pet portrait puzzle', dur: '3 weeks', price: 140, desc: 'A 500-piece puzzle of your pet.' },
                  { id: 'licence', name: 'Licensing enquiry', dur: '30 minutes', price: 25, desc: 'For puzzle makers and publishers.' } ],
      avail: { days: [1, 2, 3, 4], times: ['10:00', '14:00'] },
      reviews: [ { who: '@sunday_puzzler', stars: 5, ago: 5, text: 'Our street as a puzzle. Mum cried.' }, { who: '@bath_bryony', stars: 5, ago: 22, text: 'So much detail to find.' }, { who: '@thousandpieces', stars: 5, ago: 50, text: 'Her puzzles are my favourite.' } ],
      posts: [ { ago: 1, text: 'A good puzzle picture has no big empty sky. Give every area something to find.' }, { ago: 7, text: 'Christmas commissions are now closed. Thank you!' } ],
      tier: 'Pro Zone', verified: true },
    { key: 'lottie-byrne-speed', name: 'Lottie Byrne Speed Puzzling', color: '#138A80', tag: 'Speed puzzling coaching · techniques for 500 and 1,000 pieces', role: 'Speed puzzling coach',
      img: U('1438761681033-6461ffad8d80', 800, 800), base: 'Bath, UK · and online', langs: 'English', years: 6, rating: '4.9', reviewsN: 168, cur: '£',
      creds: ['British speed puzzling champion (pairs)', 'Coaches teams and individuals', 'Judges at competitions'],
      about: 'Lottie teaches the techniques that take a 500-piece puzzle from three hours to under one: sorting by shape and colour, building in islands and knowing when to switch.',
      services: [ { id: 'online', name: 'Online coaching session', dur: '60 minutes', price: 35, desc: 'Watch you puzzle, then improve your method.' },
                  { id: 'team', name: 'Team training', dur: '2 hours', price: 90, desc: 'For pairs and teams of four.' },
                  { id: 'workshop', name: 'Speed puzzling workshop', dur: '3 hours', price: 30, desc: 'In Bath, puzzles provided.' } ],
      avail: { days: [2, 4, 6, 0], times: ['10:00', '14:00', '19:00'] },
      reviews: [ { who: '@speedy_sasha', stars: 5, ago: 4, text: 'Took 40 minutes off my 500 time.' }, { who: '@thousandpieces', stars: 5, ago: 19, text: 'Her sorting method changed everything.' }, { who: '@bath_bryony', stars: 4, ago: 43, text: 'Fun, even if you never compete.' } ],
      posts: [ { ago: 2, text: 'Sort by shape as well as colour. In a big sky, the shape of the knobs is your friend.' } ],
      tier: 'Pro Zone', verified: true },
    { key: 'joe-marsh-framing', name: 'Joe Marsh Puzzle Framing', color: '#B9472B', tag: 'Glueing, mounting and framing finished jigsaws', role: 'Picture framer',
      img: U('1615851947829-3641ababa187', 800, 800), base: 'Bristol, UK · and by post', langs: 'English, Spanish', years: 19, rating: '4.9', reviewsN: 342, cur: '£',
      creds: ['Guild-trained picture framer', '3,000 puzzles framed', 'Conservation framing'],
      about: 'Joe turns finished puzzles into pictures for the wall: carefully glued, mounted on board and framed. He also replaces missing pieces with hand-cut ones that you have to look hard to spot.',
      services: [ { id: 'frame', name: 'Glue, mount and frame (1,000 pieces)', dur: '2 weeks', price: 75, desc: 'Oak, black or white frame, glass or acrylic.' },
                  { id: 'mount', name: 'Glue and mount only', dur: '1 week', price: 30, desc: 'Ready for your own frame.' },
                  { id: 'piece', name: 'Missing piece replaced', dur: '1 week', price: 15, desc: 'Hand-cut and painted to match.' } ],
      avail: { days: [1, 2, 3, 5], times: ['09:30', '13:30'] },
      reviews: [ { who: '@sunday_puzzler', stars: 5, ago: 6, text: 'You can’t see where the missing piece was.' }, { who: '@thousandpieces', stars: 5, ago: 21, text: 'Beautiful framing.' }, { who: '@bath_bryony', stars: 5, ago: 47, text: 'Careful and quick.' } ],
      posts: [ { ago: 3, text: 'Slide a sheet of baking paper under a puzzle before you glue it, or it’ll be stuck to your table for good.' } ],
      tier: 'Pro Zone', verified: true }
  ],
  communities: [
    { key: 'thousand-piece-club', name: 'The Thousand Piece Club', domain: 'club.jigsawxx.com', color: '#138A80', img: U('1663625318127-bd35dd2e6f75', 900, 500),
      scope: 'Global', where: 'Every dining table', members: 264000, online: 3420, tagline: 'One piece at a time.',
      about: 'Jigsaw puzzlers of every pace: finished puzzle photos, missing-piece stories, recommendations, a puzzle of the week and a very supportive response to people who lost the last piece.',
      rules: ['Show the finished puzzle', 'Missing pieces are a shared grief', 'No spoilers for mystery puzzles'],
      mods: ['@thousandpieces', '@sunday_puzzler'],
      threads: [ { t: 'Puzzle of the week: show your finished picture', by: '@thousandpieces', tag: 'WEEKLY', replies: 1680, ago: 0, votes: 4240 }, { t: 'Christmas jigsaw traditions', by: '@sunday_puzzler', tag: 'CHRISTMAS', replies: 860, ago: 1, votes: 1920 }, { t: 'Your cat on your puzzle: post them', by: '@bath_bryony', tag: 'CATS', replies: 1240, ago: 2, votes: 3010 }, { t: 'Best way to start a 2,000?', by: '@new_puzzler_nora', tag: 'Q&A', replies: 214, ago: 3, votes: 380 } ],
      events: [ { title: 'Online speed puzzling heat', day: 7, time: '19:00', where: 'Online' }, { title: 'Christmas puzzle-along', day: 33, time: '14:00', where: 'Online' } ] },
    { key: 'bath-puzzle-swap', name: 'Bath Puzzle Swap', domain: 'bath.jigsawxx.com', color: '#D99A1E', img: U('1595110045856-a6addbdbcd8b', 900, 500),
      scope: 'Local', where: 'Bath', members: 860, online: 18, tagline: 'Bring one, take one.',
      about: 'A monthly puzzle swap in a Bath church hall, with tea and cake. Bring a finished puzzle (all pieces present, please), take one home.',
      rules: ['All pieces present, or say so', 'One in, one out', 'Cake is optional but encouraged'],
      mods: ['@bath_bryony', '@sunday_puzzler'],
      threads: [ { t: 'December swap: Christmas puzzles only?', by: '@bath_bryony', tag: 'SWAP', replies: 24, ago: 0, votes: 58 }, { t: 'Lost a piece from the lighthouse one, sorry!', by: '@sunday_puzzler', tag: 'CONFESSION', replies: 18, ago: 1, votes: 42 }, { t: 'Tables for the speed puzzling night', by: '@speedy_sasha', tag: 'EVENT', replies: 12, ago: 2, votes: 20 } ],
      events: [ { title: 'Monthly puzzle swap', day: 7, time: '10:30', where: 'Widcombe, Bath' }, { title: 'Speed puzzling night', day: 19, time: '19:00', where: 'Widcombe, Bath' } ] }
  ],
  feed: [
    { av: 'JX', avBg: TEAL, author: 'JigsawXX Editorial', sub: 'Featured · Just now', badge: '★ FEATURED',
      text: 'From a rainy-day 500 to a 3,000-piece Christmas marathon. Puzzles, makers, swaps, speed puzzling and the joy of the last piece. Jigsaws, all in one place.',
      img: U('1590146758445-40be7019507d', 800, 600), eng: '♡ 38.6K · 💬 3.2K · ↗ 4.1K' },
    { av: 'BB', avBg: MUSTARD, author: '@bath_bryony', sub: '1000 Pieces · Just now', badge: 'COMMUNITY',
      text: 'Four hours of careful sky. Left the room for one cup of tea. Came back to this. He’s not even sorry 🐈',
      img: U('1653769236634-d48d7ae28ff0', 800, 600), eng: '♡ 24.8K · 💬 3.6K · ↗ 1.4K' },
    { av: 'HP', avBg: TEAL, author: 'Haverly Puzzles', sub: 'Founding Partner · Brand Zone', badge: 'BRAND ZONE',
      text: 'Our <b>Winter Harbour</b> 1,000-piece is the jigsaw of the season: cut in Sussex on thick, recycled board, every piece a slightly different shape.',
      img: U('1617638958704-fe022ebe178f', 800, 600), eng: '♡ 12.4K · 💬 980 · ↗ 1.6K' },
    { av: 'BS', avBg: CORAL, author: 'Board & Sort', sub: 'Brand Zone · 1h ago', badge: 'BRAND ZONE',
      text: 'Six drawers, one board, and your dining table back for dinner. The <b>Puzzle Desk</b> slides under the sofa.',
      img: U('1635750585247-ad8478151ffc', 800, 600), eng: '♡ 5.6K · 💬 420 · ↗ 540' },
    { av: 'SP', avBg: PLUM, author: '@sunday_puzzler', sub: 'Swaps · 2h ago', badge: 'COMMUNITY',
      text: 'My son finished his first 100-piece puzzle all by himself today and then immediately tipped it back into the box to do again.',
      img: U('1650420600515-7b5dd9e6e83d', 800, 600), eng: '♡ 10.2K · 💬 860 · ↗ 280' },
    { av: 'PP', avBg: PLUM, author: 'Puzzle Post', sub: 'Brand Zone · 4h ago', badge: 'BRAND ZONE',
      text: 'December’s mystery puzzle ships next week. No picture on the box. You’ll find out what it is one piece at a time.',
      img: U('1756920681451-3103b5ca092d', 800, 600), eng: '♡ 4.8K · 💬 360 · ↗ 420' },
    { av: 'LB', avBg: TEAL, author: 'Lottie Byrne Speed Puzzling', sub: 'Speed Puzzling · 6h ago', badge: 'PRO ZONE',
      text: 'Edges first is a habit, not a rule. In a speed round, the strongest colour area often goes in faster.',
      img: U('1663625318127-bd35dd2e6f75', 800, 600), eng: '♡ 3.4K · 💬 240 · ↗ 460' }
  ],
  prompts: ['Find a puzzle swap near Bath', 'Which jigsaw should I give for Christmas?', 'How do I get faster at jigsaws?', 'How do I glue and frame a finished puzzle?'],
  businesses: ['fernleigh-board-mill', 'precision-die-works']
};

/* the four Brand Zones and two Business Zones */
const brand = (o) => Object.assign({ kind: 'brand', gw: 'jigsaw', verified: true }, o);
Object.assign(ZONES, {
  'haverly-puzzles': brand({ key: 'haverly-puzzles', name: 'Haverly Puzzles', color: '#138A80', gradient: TEAL, tier: 'Founding Partner',
    tagline: 'Jigsaws made in Sussex since 1962', stats: { followers: '142K', content: '520', products: '260' },
    ad: { badge: 'Featured', img: U('1592866393088-2e040de62d4d', 760, 760), hl: 'Winter Harbour, 1,000 pieces.', sub: 'Cut in Sussex on thick recycled board.', meta: 'From £14' },
    products: [
      { name: 'Winter Harbour (1,000 pieces)', price: '£22', tag: 'FLAGSHIP', emoji: '⚓', rating: 4.9, reviews: 3240, cat: 'puzzles', special: true, desc: 'A snowy harbour at dusk, full of boats, lights and people to find. Thick board, every piece a slightly different shape.', features: ['68 × 48 cm finished', 'Poster included', 'Missing piece promise'], review: { who: 'Bryony T.', text: 'The best fitting pieces I’ve ever had.' } },
      { name: 'The Christmas Market (500 pieces)', price: '£16', tag: 'BESTSELLER', emoji: '🎄', rating: 4.8, reviews: 2460, cat: 'puzzles', desc: 'Stalls, lights and a choir, in big friendly pieces.', features: ['49 × 36 cm finished'], review: { who: 'Nora P.', text: 'Perfect for Christmas Eve.' } },
      { name: 'Wooden Robin (250 pieces)', price: '£38', emoji: '🐦', rating: 4.9, reviews: 860, cat: 'wooden', desc: 'A laser-cut wooden puzzle with twenty shaped pieces: a holly leaf, a star, a tiny robin.', features: ['Comes in a cotton bag'], review: { who: 'Sasha L.', text: 'Finding the robin-shaped piece made my day.' } },
      { name: 'Large Piece Lighthouse (300 pieces)', price: '£14', tag: 'SPECIAL', emoji: '🗼', rating: 4.9, reviews: 1240, cat: 'puzzles', special: true, desc: 'Big, easy-to-hold pieces on the same thick board. Good for small hands and stiff ones.', features: ['Pieces twice the usual size', 'Missing piece promise'], review: { who: 'Tom H.', text: 'They really did send the one I lost.' } }
    ],
    shopCats: [ { key: 'puzzles', label: 'Puzzles', icon: '🧩' }, { key: 'wooden', label: 'Wooden', icon: '🪵' } ],
    feed: [
      { type: 'post', sub: 'Brand post · 2h', text: '<b>Winter Harbour</b>, nearly there. The sky is always last.', img: U('1590146757941-486a0c8385ec', 800, 440), eng: '♡ 12.4K · 💬 980 · ↗ 1.6K', product: 0 },
      { type: 'post', sub: 'In the factory · Yesterday', text: 'Every Haverly puzzle is checked by hand before the box is sealed.', img: U('1612611741189-a9b9eb01d515', 800, 440), eng: '♡ 4.2K · 💬 290' },
      { type: 'community', who: 'Nora P.', whoBg: MUSTARD, sub: 'Community · 1d', text: 'Is a 1,000-piece too much for my dad? He has arthritis in his hands.', eng: '♡ 380 · 💬 74', reply: 'Hi Nora! Try our Large Piece range: 300 or 500 pieces, each about twice the usual size and easier to pick up, on the same thick board so they lock together firmly. A puzzle board with a raised edge helps too. 🧩' }
    ],
    events: [ { zoneEvent: true, tag: 'LIVE', title: 'Haverly Live · Speed puzzling, 500 pieces against the clock', when: 'Live now', desc: 'Four of Britain’s fastest puzzlers race the same 500-piece Haverly puzzle live, with commentary.', registered: 3640, capacity: 9000 } ],
    about: { founded: 'Sussex · 1962', story: 'A family firm that has cut jigsaws in the same Sussex workshop for over sixty years. We joined JigsawXX as Founding Partner because the puzzlers are here.', milestones: [['1962', 'The first jigsaw'], ['2010', 'Recycled board only'], ['2026', 'Founding Partner on JigsawXX']], values: ['Missing piece promise', 'Recycled board', 'Artists paid royalties'] } }),

  'piece-together': brand({ key: 'piece-together', name: 'Piece Together', color: '#D99A1E', gradient: MUSTARD, tier: 'Brand Zone',
    tagline: 'A jigsaw library by post', stats: { followers: '58.4K', content: '240', products: '6' },
    ad: { badge: 'New', img: U('1494059980473-813e73ee784b', 760, 760), hl: 'A new jigsaw every fortnight.', sub: 'Borrow, puzzle, post it back.', meta: 'From £9' },
    products: [
      { name: 'Library Membership', price: '£12', tag: 'FLAGSHIP', emoji: '📦', rating: 4.8, reviews: 2140, cat: 'membership', special: true, desc: 'Two puzzles a month from a library of 4,000, posted to you and back for free. Every one is counted before it goes out.', features: ['Pause any time', 'Every piece counted'], review: { who: 'Bryony T.', text: 'Endless puzzles, no clutter.' } },
      { name: 'Light Membership', price: '£9', tag: 'BESTSELLER', emoji: '🧩', rating: 4.7, reviews: 1460, cat: 'membership', desc: 'One puzzle a month.', features: ['500 or 1,000 pieces'], review: { who: 'Tom H.', text: 'Just right for me.' } },
      { name: 'Donate Your Puzzles', price: '£1', emoji: '💚', rating: 4.9, reviews: 420, cat: 'donate', desc: 'Send us finished puzzles and get a month free for every five.', features: ['Free postage label'], review: { who: 'Nora P.', text: 'Cleared my shelves.' } },
      { name: 'Gift: Three Months', price: '£34', tag: 'SPECIAL', emoji: '🎁', rating: 4.9, reviews: 360, cat: 'membership', special: true, desc: 'Three months of puzzles, as a gift.', features: ['Choose a start date'], review: { who: 'Sasha L.', text: 'Gran loves it.' } }
    ],
    shopCats: [ { key: 'membership', label: 'Membership', icon: '📦' }, { key: 'donate', label: 'Donate', icon: '💚' } ],
    feed: [ { type: 'post', sub: 'Brand post · 3h', text: 'Counted, bagged and ready to post: this week’s 1,200 library puzzles.', img: U('1777261904975-0c12df7bdcdb', 800, 440), eng: '♡ 3.4K · 💬 240', product: 0 } ],
    events: [ { zoneEvent: true, tag: 'DEADLINE', title: 'Order by 16 Dec for Christmas puzzles', when: 'Dec 16 · 23:59', desc: 'Your Christmas puzzles arrive before the 24th.', registered: 820, capacity: 3000 } ],
    about: { founded: 'Norwich · 2020', story: 'Started during lockdown with 200 puzzles on a spare-room shelf. Now 4,000 puzzles and 9,000 members.', milestones: [['2020', 'The first 200 puzzles'], ['2023', '4,000 puzzles'], ['2026', 'Brand Zone on JigsawXX']], values: ['Every piece counted', 'Reuse over buying new', 'Free postage both ways'] } }),

  'board-sort': brand({ key: 'board-sort', name: 'Board & Sort', color: '#B9472B', gradient: CORAL, tier: 'Brand Zone',
    tagline: 'Puzzle boards, mats and sorting trays', stats: { followers: '46.2K', content: '180', products: '28' },
    ad: { badge: 'Featured', img: U('1635750585247-ad8478151ffc', 760, 760), hl: 'Your dining table back.', sub: 'The Puzzle Desk: six drawers, one board, slides under the sofa.', meta: 'From £12' },
    products: [
      { name: 'Puzzle Desk (1,000 pieces)', price: '£79', tag: 'FLAGSHIP', emoji: '🗄️', rating: 4.8, reviews: 1840, cat: 'boards', special: true, desc: 'A wooden board with a cover and six sliding sorting drawers.', features: ['Fits 1,000 pieces', 'Birch plywood'], review: { who: 'Bryony T.', text: 'Changed my puzzling life.' } },
      { name: 'Roll-Up Puzzle Mat', price: '£18', tag: 'BESTSELLER', emoji: '🌀', rating: 4.6, reviews: 2860, cat: 'mats', desc: 'Roll up a puzzle in progress and put it away.', features: ['Up to 2,000 pieces'], review: { who: 'Tom H.', text: 'Works, mostly!' } },
      { name: 'Sorting Trays (set of 6)', price: '£12', emoji: '🟦', rating: 4.8, reviews: 1460, cat: 'trays', desc: 'Stackable trays for edges, colours and shapes.', features: ['Recycled plastic'], review: { who: 'Sasha L.', text: 'My speed went up straight away.' } },
      { name: 'Puzzle Lamp', price: '£42', tag: 'SPECIAL', emoji: '💡', rating: 4.7, reviews: 520, cat: 'boards', special: true, desc: 'A daylight lamp that clips to the board.', features: ['Dimmable'], review: { who: 'Nora P.', text: 'Dad can see the colours properly now.' } }
    ],
    shopCats: [ { key: 'boards', label: 'Boards', icon: '🗄️' }, { key: 'mats', label: 'Mats', icon: '🌀' }, { key: 'trays', label: 'Trays', icon: '🟦' } ],
    feed: [ { type: 'post', sub: 'Brand post · 1h', text: 'Edges in one tray, sky in another: the <b>Sorting Trays</b>, stacked.', img: U('1684773585761-fde68b4ece42', 800, 440), eng: '♡ 5.6K · 💬 420', product: 2 } ],
    events: [ { zoneEvent: true, tag: 'SALE', title: 'Christmas sale: a quarter off boards', when: 'Dec 4 · All day', desc: 'A quarter off every board and desk, for one day.', registered: 1240, capacity: 3500 } ],
    about: { founded: 'Sheffield · 2018', story: 'A carpenter who built a puzzle board for his mum and got 400 orders from her friends.', milestones: [['2018', 'The first board'], ['2022', 'The Puzzle Desk'], ['2026', 'Brand Zone on JigsawXX']], values: ['Made in Sheffield', 'FSC timber', 'Repairs for life'] } }),

  'puzzle-post': brand({ key: 'puzzle-post', name: 'Puzzle Post', color: '#7A52AE', gradient: PLUM, tier: 'Brand Zone',
    tagline: 'A mystery puzzle by an independent artist, every month', stats: { followers: '38.6K', content: '210', products: '5' },
    ad: { badge: 'Gift', img: U('1756920681451-3103b5ca092d', 760, 760), hl: 'No picture on the box.', sub: 'A mystery 1,000-piece by an independent artist, monthly.', meta: 'From £19' },
    products: [
      { name: 'Monthly Mystery Puzzle', price: '£19', tag: 'FLAGSHIP', emoji: '❓', rating: 4.8, reviews: 1240, cat: 'subscription', special: true, desc: 'A 1,000-piece puzzle by an independent artist, with no picture on the box. A riddle tells you a little.', features: ['The artist is paid royalties', 'Skip any month'], review: { who: 'Sasha L.', text: 'The surprise is the best bit.' } },
      { name: 'Three-Month Gift', price: '£54', tag: 'BESTSELLER', emoji: '🎁', rating: 4.9, reviews: 640, cat: 'subscription', desc: 'Three mystery puzzles, as a gift.', features: ['Gift message'], review: { who: 'Bryony T.', text: 'My sister’s favourite present.' } },
      { name: 'Back Issue: The Lighthouse', price: '£19', emoji: '🗼', rating: 4.8, reviews: 320, cat: 'back-issues', desc: 'Last winter’s most-loved mystery.', features: ['1,000 pieces'], review: { who: 'Tom H.', text: 'Gorgeous.' } },
      { name: 'Artist Print', price: '£15', tag: 'SPECIAL', emoji: '🖼️', rating: 4.7, reviews: 180, cat: 'back-issues', special: true, desc: 'The finished picture as a signed print.', features: ['A3'], review: { who: 'Nora P.', text: 'Now it’s on the wall.' } }
    ],
    shopCats: [ { key: 'subscription', label: 'Subscribe', icon: '❓' }, { key: 'back-issues', label: 'Back issues', icon: '🗼' } ],
    feed: [ { type: 'post', sub: 'Brand post · 1d', text: 'December’s riddle: “I’m quiet, I’m cold, and I’m full of light.”', img: U('1730804518415-75297e8d2a41', 800, 440), eng: '♡ 2.8K · 💬 410', product: 0 } ],
    events: [ { zoneEvent: true, tag: 'EVENT', title: 'December mystery puzzle ships', when: 'Dec 1 · 09:00', desc: 'December’s mystery puzzle goes out to every subscriber.', registered: 4200, capacity: 9000 } ],
    about: { founded: 'Cardiff · 2021', story: 'A puzzler and an illustrator who wanted independent artists on more puzzle boxes, and no pictures on any of them.', milestones: [['2021', 'The first mystery'], ['2024', '50 artists'], ['2026', 'Brand Zone on JigsawXX']], values: ['Artists paid royalties', 'Recycled board', 'No spoilers'] } }),

  'fernleigh-board-mill': { key: 'fernleigh-board-mill', kind: 'business', gw: 'jigsaw', name: 'Fernleigh Board Mill', color: '#138A80', gradient: TEAL, img: U('1612385763901-68857dd4c43c', 900, 500),
    tier: 'Verified', category: 'Puzzle board', tagline: 'Recycled greyboard for jigsaw makers.',
    about: { founded: 'Kent · 1948', story: 'A board mill making thick, recycled greyboard for jigsaws, games and book covers.' },
    stats: { years: 78, staff: 120, clients: '60 puzzle and game makers' },
    caps: [ { name: 'Puzzle greyboard', detail: '1.8 to 2.5 mm, 100% recycled.' }, { name: 'Lined board', detail: 'Pre-lined with print paper.' }, { name: 'Cut to size', detail: 'Sheets cut for your press.' } ],
    specs: { moq: 'One pallet', lead: '2 to 4 weeks', regions: 'UK & Europe', certs: ['FSC Recycled', 'ISO 14001', 'Fully insured'] },
    supplies: [ { kind: 'brand', key: 'haverly-puzzles', what: '2.2 mm greyboard for every puzzle' } ],
    cases: [ { title: 'A thicker puzzle', text: 'A new 2.5 mm board that made pieces lock better.' } ],
    feed: [ { sub: 'Mill · 3d', text: 'Forty tonnes of recycled board out to puzzle makers this week.' } ],
    contact: { person: 'Ruth Calder, Sales', response: 'Replies within 24 hours' } },

  'precision-die-works': { key: 'precision-die-works', kind: 'business', gw: 'jigsaw', name: 'Precision Die Works', color: '#B9472B', gradient: CORAL, img: U('1611329857570-f02f340e7378', 900, 500),
    tier: 'Verified', category: 'Cutting dies', tagline: 'Steel-rule cutting dies for jigsaws and games.',
    about: { founded: 'Leicester · 1985', story: 'We make the steel cutting dies that shape every piece, from classic grids to whimsy-shaped pieces.' },
    stats: { years: 41, staff: 34, clients: '120 makers' },
    caps: [ { name: 'Jigsaw dies', detail: 'Classic, random and whimsy cuts.' }, { name: 'Laser dies', detail: 'For wooden puzzles.' }, { name: 'Re-rules', detail: 'Sharpening and repair.' } ],
    specs: { moq: 'One die', lead: '3 to 6 weeks', regions: 'UK & Europe', certs: ['ISO 9001', 'Fully insured', 'Made in Leicester'] },
    supplies: [ { kind: 'brand', key: 'haverly-puzzles', what: 'The Winter Harbour die, with 40 whimsy pieces' } ],
    cases: [ { title: 'Whimsy pieces', text: 'Twenty shaped pieces in a 1,000-piece die.' } ],
    feed: [ { sub: 'Workshop · 5d', text: 'Bending steel rule into a robin, one curve at a time.' } ],
    contact: { person: 'Amir Shah, Projects', response: 'Replies within one working day' } }
});

/* events in the Events tab */
gxEvents('jigsaw', [
  { gw: 'jigsaw', zone: 'haverly-puzzles', type: 'Live', icon: '🔴', live: true, time: 'Live Now', title: 'Haverly Live · Speed puzzling, 500 pieces against the clock', desc: 'Four of Britain’s fastest puzzlers race the same puzzle live, with commentary.' },
  { gw: 'jigsaw', zone: 'board-sort', type: 'Sale', icon: '🗄️', time: 'Dec 4', title: 'Board & Sort Christmas sale', desc: 'A quarter off every board and desk, for one day.' },
  { gw: 'jigsaw', type: 'Event', icon: '⏱️', time: 'Nov 28', title: 'Online speed puzzling heat', desc: 'The Thousand Piece Club: same puzzle, same start, 90 minutes.' },
  { gw: 'jigsaw', type: 'Event', icon: '🔄', time: 'Nov 28', title: 'Monthly puzzle swap, Bath', desc: 'Bath Puzzle Swap: bring one, take one, have cake.' },
  { gw: 'jigsaw', zone: 'puzzle-post', type: 'Event', icon: '❓', time: 'Dec 1', title: 'December mystery puzzle ships', desc: 'Puzzle Post’s December mystery goes out.' },
  { gw: 'jigsaw', type: 'Event', icon: '🏁', time: 'Dec 10', title: 'Speed puzzling night, Bath', desc: 'Bath Puzzle Swap: pairs race a 500 in a church hall.' },
  { gw: 'jigsaw', zone: 'piece-together', type: 'Deadline', icon: '📦', time: 'Dec 16', title: 'Order by 16 Dec for Christmas puzzles', desc: 'Piece Together: your Christmas puzzles arrive before the 24th.' },
  { gw: 'jigsaw', type: 'Event', icon: '🎄', time: 'Dec 24', title: 'Christmas puzzle-along', desc: 'The Thousand Piece Club: everyone starts the same puzzle on Christmas Eve.' }
]);
})();
/* ═════════ /JIGSAWXX ═════════ */
