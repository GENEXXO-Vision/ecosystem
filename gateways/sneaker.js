/* ═════════ SNEAKERXX — demo gateway (moved out of genexxo-data.js in -86, 2026-11-20) ═════════
   Generated once from the live data; this file is now the source. Edit it here, then run: node build_gateways.js
   Its events stay in genexxo-data.js (EVENTS_FEED), as before. */
(function(){
GATEWAYS.sneaker = {
 "name": "SneakerXX",
 "domain": "sneakerxx.com",
 "emoji": "👟",
 "sector": "fashion",
 "live": true,
 "tagline": "The Sneaker Culture Universe",
 "theme": {
  "bg": "#0D0D0D",
  "text": "#F0EDEA",
  "cardBg": "rgba(255,255,255,.04)",
  "cardBorder": "rgba(255,255,255,.07)",
  "headerBg": "linear-gradient(180deg,#1A0D0A,#0D0D0D)",
  "accent": "#E84D3A",
  "accentAlt": "#FF6B4A",
  "dark": true
 },
 "gradient": "linear-gradient(135deg,#0D0D0D,#E84D3A,#FF6B4A)",
 "stats": {
  "members": "820K",
  "brands": "1,900+",
  "agents": "94"
 },
 "spaces": [
  "All Feed",
  "Running",
  "Limited Drops",
  "Collabs",
  "Retro"
 ],
 "trending": [
  "#GR8Drop",
  "#MadeInUSA",
  "#GrailHunt"
 ],
 "brandZones": [
  {
   "key": "northbound",
   "name": "Northbound",
   "color": "#EF4444",
   "tier": "Founding Partner",
   "tag": "Made-in-USA/UK performance"
  },
  {
   "key": "flashpoint",
   "name": "Flashpoint",
   "color": "#E84D3A",
   "tier": "Brand Zone",
   "tag": "Limited performance drops"
  }
 ],
 "apps": [
  {
   "name": "Drop Calendar",
   "color": "#E84D3A",
   "desc": "Every release, one feed"
  },
  {
   "name": "Fit Finder",
   "color": "#FF6B4A",
   "desc": "True-to-size across brands"
  }
 ],
 "feed": [
  {
   "av": "SN",
   "avBg": "linear-gradient(135deg,#E84D3A,#FF6B4A)",
   "author": "SneakerXX Editorial",
   "sub": "Featured · Just now",
   "badge": "★ FEATURED",
   "text": "Every drop, every grail, every collab. Performance running to hyped limited editions — the culture, the craft and the community that queues at dawn. This is sneaker culture, connected.",
   "img": "https://images.unsplash.com/photo-1552346154-21d32810aba3?w=800&h=440&fit=crop&q=80",
   "eng": "♡ 16.8K · 💬 2.2K · ↗ 1.3K"
  },
  {
   "av": "SA",
   "avBg": "linear-gradient(135deg,#F59E0B,#D97706)",
   "author": "@sole_archive",
   "sub": "Collector · 2h ago",
   "badge": "COMMUNITY",
   "text": "770v6 Made in USA arrived. Box quality alone tells you something different is happening here — the suede is exceptional, the ENCAP firm but responsive, fit perfect out of the box. This is what a £249 sneaker should feel like.",
   "img": "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&h=440&fit=crop&q=80",
   "eng": "♡ 3.4K · 💬 289 · ↗ 156"
  },
  {
   "av": "NB",
   "avBg": "linear-gradient(135deg,#EF4444,#991B1B)",
   "author": "Northbound",
   "sub": "Founding Partner · Brand Zone",
   "badge": "BRAND ZONE",
   "text": "The 770v6. Six months of wear testing in New England, every upper panel refined, the ENCAP midsole updated for 2026. Made in our Flimby, UK and Lawrence, USA factories by craftspeople who have built these shoes for decades.",
   "img": "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&h=440&fit=crop&q=80",
   "eng": "♡ 18.4K · 💬 2.4K · ↗ 1.2K"
  },
  {
   "av": "FB",
   "avBg": "linear-gradient(135deg,#E84D3A,#8B1A0A)",
   "author": "Flashpoint",
   "sub": "Brand Zone · Drop",
   "badge": "BRAND ZONE",
   "text": "The 2026 Edition Trainer is live. Fourteen months of development, an aerospace-grade carbon plate, a recycled Primeknit upper built without waste and a hand-finished vulcanised sole. 2,000 pairs. No restocks. Ever.",
   "img": "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?w=800&h=440&fit=crop&q=80",
   "eng": "♡ 12.4K · 💬 1.8K · ↗ 945"
  }
 ],
 "prompts": [
  "What’s dropping this week?",
  "Best daily trainer under £150?"
 ]
};
Object.assign(ZONES, {
 "northbound": {
  "key": "northbound",
  "kind": "brand",
  "gw": "sneaker",
  "name": "Northbound",
  "color": "#EF4444",
  "gradient": "linear-gradient(135deg,#991B1B,#EF4444,#F87171)",
  "tier": "Founding Partner",
  "verified": true,
  "tagline": "Made in USA & UK since 1906",
  "stats": {
   "followers": "41.2K",
   "content": "1,800",
   "products": "234"
  },
  "event": {
   "zoneEvent": true,
   "tag": "FACTORY DAYS",
   "title": "Northbound Made-in-USA Factory Days",
   "when": "Dec 11–13 · Lawrence, MA",
   "desc": "Three days inside the Lawrence, Massachusetts factory — watch the 990 built by hand, meet the craftspeople, and get a first fitting of the 770v6 with the Northbound team.",
   "registered": 640,
   "capacity": 900
  },
  "products": [
   {
    "name": "770v6 Made in USA",
    "price": "£249",
    "tag": "FLAGSHIP",
    "emoji": "👟",
    "rating": 4.8,
    "reviews": 612,
    "cat": "usa",
    "special": true,
    "desc": "Premium USA construction, ENCAP midsole, pigskin suede — six months of wear testing in New England, every panel refined.",
    "sizes": [
     "UK 6",
     "7",
     "8",
     "9",
     "10",
     "11",
     "12"
    ],
    "features": [
     "Made in Lawrence, MA & Flimby, UK",
     "ENCAP midsole, updated for 2026",
     "Hand-selected pigskin suede"
    ],
    "review": {
     "who": "sole_archive",
     "text": "The suede is exceptional, the ENCAP firm but responsive, fit perfect out of the box. What a £249 sneaker should feel like."
    }
   },
   {
    "name": "990v6 Made in USA",
    "price": "£269",
    "tag": "ICON",
    "emoji": "👟",
    "rating": 4.9,
    "reviews": 834,
    "cat": "usa",
    "special": true,
    "desc": "The shoe made in Lawrence since 1982 — ENCAP support, hairy suede and mesh, built by hand to the same standard for 43 years.",
    "sizes": [
     "UK 6",
     "7",
     "8",
     "9",
     "10",
     "11",
     "12"
    ],
    "features": [
     "Made in Lawrence, MA since 1982",
     "ENCAP support midsole",
     "Hand-built, re-soleable"
    ],
    "review": {
     "who": "sole_archive",
     "text": "The benchmark. Forty-three years of refinement and it shows in every stitch."
    }
   },
   {
    "name": "2002R Protection Pack",
    "price": "£149",
    "emoji": "👟",
    "rating": 4.7,
    "reviews": 940,
    "cat": "everyday",
    "desc": "N2 foam and ABZORB cushioning under a weather-treated upper — the all-conditions daily.",
    "sizes": [
     "UK 6",
     "7",
     "8",
     "9",
     "10",
     "11",
     "12"
    ],
    "features": [
     "N2 foam + ABZORB cushioning",
     "Weather-treated upper",
     "All-day daily comfort"
    ],
    "review": {
     "who": "grey_days_gus",
     "text": "Rain or shine, these are the ones I grab. Broke in within a day."
    }
   },
   {
    "name": "1906R Sea Salt",
    "price": "£139",
    "emoji": "👟",
    "rating": 4.6,
    "reviews": 520,
    "cat": "archive",
    "desc": "Metallic upper over ABZORB SBS with reflective details — the archive runner, reissued.",
    "sizes": [
     "UK 6",
     "7",
     "8",
     "9",
     "10",
     "11",
     "12"
    ],
    "features": [
     "ABZORB SBS cushioning",
     "Reflective detailing",
     "Metallic archive upper"
    ],
    "review": {
     "who": "retro_runner_rae",
     "text": "Y2K looks, 2026 comfort. Get compliments every time I wear them."
    }
   }
  ],
  "shopCats": [
   {
    "key": "usa",
    "label": "Made in USA",
    "icon": "🇺🇸"
   },
   {
    "key": "everyday",
    "label": "Everyday",
    "icon": "👟"
   },
   {
    "key": "archive",
    "label": "Archive",
    "icon": "🗄️"
   }
  ],
  "feed": [
   {
    "type": "post",
    "sub": "Official · Just now",
    "text": "The <b>770v6</b>. Six months of wear testing in New England, every upper panel refined, the ENCAP midsole updated for 2026. Made in our Flimby, UK and Lawrence, USA factories by craftspeople who have built these shoes for decades.",
    "img": "https://images.unsplash.com/photo-1755194757953-a9301005114b?w=800&h=440&fit=crop&q=80",
    "eng": "♡ 18.4K · 💬 2.4K · ↗ 1.2K",
    "product": 0
   },
   {
    "type": "post",
    "sub": "Made in USA · 3h ago",
    "text": "Inside the Lawrence, Massachusetts factory. The 990 has been made in this building since 1982 — 43 years, same craftspeople, same standard. In an industry that offshored everything, we stayed. That is a values decision.",
    "img": "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&h=440&fit=crop&q=80",
    "eng": "♡ 24.6K · 💬 3.8K · ↗ 2.1K"
   },
   {
    "type": "community",
    "who": "sole_archive",
    "whoBg": "linear-gradient(135deg,#F59E0B,#D97706)",
    "sub": "Community · 3h ago",
    "text": "770v6 Made in USA arrived. Box quality alone tells you something different is happening here. The suede is exceptional, the ENCAP firm but responsive, fit perfect out of the box.",
    "eng": "♡ 3.4K · 💬 289",
    "reply": "The Flimby team will be glad to hear that — they spend weeks getting each season’s 990 right before a single pair ships. 👟"
   }
  ],
  "about": {
   "founded": "Boston, USA · 1906",
   "story": "Northbound has made performance footwear for 120 years, and still makes its flagship models by hand in Lawrence, Massachusetts and Flimby, UK. When the industry offshored everything, Northbound stayed — because how a shoe is made is part of what it is.",
   "milestones": [
    [
     "1906",
     "Founded in Boston"
    ],
    [
     "1982",
     "990 production begins in Lawrence, MA"
    ],
    [
     "2010",
     "Flimby, UK factory modernised"
    ],
    [
     "2026",
     "Founding Partner on SneakerXX"
    ]
   ],
   "values": [
    "Made in USA & UK",
    "Craft over offshoring",
    "Built to be re-soled"
   ]
  }
 },
 "flashpoint": {
  "key": "flashpoint",
  "kind": "brand",
  "gw": "sneaker",
  "name": "Flashpoint",
  "color": "#E84D3A",
  "gradient": "linear-gradient(135deg,#E84D3A,#C4371F,#8B1A0A)",
  "tier": "Brand Zone",
  "verified": true,
  "tagline": "Performance footwear for those who collect and compete",
  "stats": {
   "followers": "28.4K",
   "content": "156",
   "products": "12"
  },
  "event": {
   "live": true,
   "tag": "Flashpoint Drop",
   "title": "2026 Edition Trainer — Live Drop",
   "subtitle": "2,000 pairs, carbon plate, recycled Primeknit · no restocks, ever.",
   "now": "Live · 1,340 of 2,000 pairs remaining",
   "viewers": "6,210",
   "poster": "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?w=800&h=440&fit=crop&q=80"
  },
  "products": [
   {
    "name": "2026 Edition Trainer",
    "price": "£185",
    "tag": "LIMITED",
    "emoji": "👟",
    "rating": 4.9,
    "reviews": 420,
    "cat": "drops",
    "special": true,
    "desc": "Aerospace-grade carbon plate, recycled Primeknit upper, hand-finished vulcanised sole — fourteen months of development, 2,000 pairs, no restocks.",
    "sizes": [
     "UK 6",
     "7",
     "8",
     "9",
     "10",
     "11",
     "12"
    ],
    "features": [
     "Aerospace-grade carbon plate",
     "Recycled Primeknit, zero waste",
     "Limited to 2,000 pairs"
    ],
    "review": {
     "who": "sole_archive",
     "text": "Carbon plate is immediately noticeable on first wear — energy return unlike anything at this price point."
    }
   },
   {
    "name": "Heat 002 Drop",
    "price": "£165",
    "tag": "DROP",
    "emoji": "👟",
    "rating": 4.8,
    "reviews": 210,
    "cat": "drops",
    "special": true,
    "desc": "The second numbered drop — a translucent TPU upper over a speckled vulcanised sole, 1,500 pairs, gone in one release.",
    "sizes": [
     "UK 6",
     "7",
     "8",
     "9",
     "10",
     "11",
     "12"
    ],
    "features": [
     "Translucent TPU upper",
     "Speckled vulcanised sole",
     "Limited to 1,500 pairs"
    ],
    "review": {
     "who": "sole_archive",
     "text": "The translucent upper in person is unreal. Snagged a pair in the last minute of the drop."
    }
   },
   {
    "name": "Core Runner v3",
    "price": "£135",
    "tag": "BESTSELLER",
    "emoji": "👟",
    "rating": 4.7,
    "reviews": 1180,
    "cat": "everyday",
    "desc": "The daily performance trainer — responsive foam, wide-fit option, built for the miles between race days.",
    "sizes": [
     "UK 6",
     "7",
     "8",
     "9",
     "10",
     "11",
     "12",
     "13"
    ],
    "features": [
     "Responsive daily foam",
     "Wide fit available",
     "Everyday-to-tempo range"
    ],
    "review": {
     "who": "tempo_tom",
     "text": "50 miles a week in these. The foam holds up long after most dailies pack out."
    }
   },
   {
    "name": "Slide 001",
    "price": "£85",
    "emoji": "🩴",
    "rating": 4.6,
    "reviews": 640,
    "cat": "recovery",
    "desc": "Post-run recovery slide with a contoured footbed — the reward after the session.",
    "sizes": [
     "UK 6",
     "7",
     "8",
     "9",
     "10",
     "11",
     "12"
    ],
    "features": [
     "Contoured recovery footbed",
     "Two colourways",
     "Post-session comfort"
    ],
    "review": {
     "who": "recovery_ren",
     "text": "Feet thank me after long runs. Never take them off around the house."
    }
   }
  ],
  "shopCats": [
   {
    "key": "drops",
    "label": "Drops",
    "icon": "🔥"
   },
   {
    "key": "everyday",
    "label": "Everyday",
    "icon": "👟"
   },
   {
    "key": "recovery",
    "label": "Recovery",
    "icon": "🩴"
   }
  ],
  "feed": [
   {
    "type": "post",
    "sub": "Official · Just now",
    "text": "The <b>2026 Edition Trainer</b> is live. Fourteen months of development. A carbon-fibre plate for propulsion. Recycled Primeknit upper constructed without waste. Hand-finished vulcanised sole. 2,000 pairs. No restocks. Ever.",
    "img": "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&h=440&fit=crop&q=80",
    "eng": "♡ 12.4K · 💬 1.8K · ↗ 945",
    "product": 0
   },
   {
    "type": "post",
    "sub": "Design Story · 2h ago",
    "text": "The carbon-fibre plate is milled from aerospace-grade material. It took <b>11 prototypes</b> to get the flex profile right — it had to work for everyday wear, not just competition. Our lead designer talks through the process.",
    "img": "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=440&fit=crop&q=80",
    "eng": "♡ 5.6K · 💬 678 · ↗ 289"
   },
   {
    "type": "community",
    "who": "sole_archive",
    "whoBg": "linear-gradient(135deg,#F59E0B,#D97706)",
    "sub": "Community · 1h ago",
    "text": "Got my 2026 pair. Carbon plate is immediately noticeable on first wear — the energy return is unlike anything at this price point. These are the real deal.",
    "eng": "♡ 2.2K · 💬 156",
    "reply": "Glad you love them. The plate geometry took 11 prototypes to perfect. More colourways coming Q3. 🔥"
   }
  ],
  "about": {
   "founded": "Portland, USA · 2019",
   "story": "Flashpoint makes performance footwear for people who both collect and compete — small numbered runs, aerospace-grade materials and a no-restock rule that means every pair carries its moment. Fourteen months of development goes into a shoe that lasts one drop.",
   "milestones": [
    [
     "2019",
     "Founded in Portland"
    ],
    [
     "2022",
     "First carbon-plate limited run sells out in minutes"
    ],
    [
     "2025",
     "Recycled Primeknit programme launches"
    ],
    [
     "2026",
     "2026 Edition — 2,000 pairs, no restocks"
    ]
   ],
   "values": [
    "Limited, numbered, never restocked",
    "Aerospace-grade engineering",
    "Built to compete and to keep"
   ]
  }
 }
});
})();
