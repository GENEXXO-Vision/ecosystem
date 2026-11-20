/* ═════════ MORTGAGEXX — demo gateway (moved out of genexxo-data.js in -86, 2026-11-20) ═════════
   Generated once from the live data; this file is now the source. Edit it here, then run: node build_gateways.js
   Its events stay in genexxo-data.js (EVENTS_FEED), as before. */
(function(){
GATEWAYS.mortgage = {
 "name": "MortgageXX",
 "domain": "mortgagexx.com",
 "emoji": "🏠",
 "sector": "finance",
 "live": true,
 "tagline": "The Mortgage & Property Finance Universe",
 "theme": {
  "bg": "#F5F7FA",
  "text": "#0D1B2A",
  "cardBg": "#FAFBFD",
  "cardBorder": "rgba(13,27,42,.07)",
  "headerBg": "linear-gradient(180deg,#E4EAF2,#F5F7FA)",
  "accent": "#2563EB",
  "accentAlt": "#1E3A5F",
  "dark": false
 },
 "gradient": "linear-gradient(135deg,#0D1B2A,#1E3A5F,#2563EB)",
 "stats": {
  "members": "420K",
  "brands": "890+",
  "agents": "67"
 },
 "spaces": [
  "All Feed",
  "Rate Watch",
  "First-Time Buyers",
  "Remortgage",
  "Buy-to-Let",
  "Market Analysis"
 ],
 "trending": [
  "#RateWatch",
  "#FirstTimeBuyer",
  "#Remortgage"
 ],
 "brandZones": [
  {
   "key": "habitnow",
   "name": "Habitnow",
   "color": "#2563EB",
   "tier": "Founding Partner",
   "tag": "Online mortgage broker"
  },
  {
   "key": "northwide-mortgage",
   "name": "Northwide",
   "color": "#1E3A5F",
   "tier": "Brand Zone",
   "tag": "World’s largest building society"
  }
 ],
 "apps": [
  {
   "name": "Rate Tracker",
   "color": "#2563EB",
   "desc": "20,000+ products, live"
  },
  {
   "name": "Affordability Calc",
   "color": "#4ADE80",
   "desc": "What you can borrow"
  }
 ],
 "feed": [
  {
   "av": "MX",
   "avBg": "linear-gradient(135deg,#1E3A5F,#2563EB)",
   "author": "MortgageXX Editorial",
   "sub": "Rate Watch · Just now",
   "badge": "RATE ALERT",
   "text": "Average 2-year fixed falls below 4% for the first time since 2023. Swap rates pricing two more BoE cuts. Community consensus: lock now if you’re remortgaging within six months. The cycle has turned.",
   "img": "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=440&fit=crop&q=80",
   "eng": "♡ 18.4K · 💬 3.2K · ↗ 1.8K"
  },
  {
   "av": "MX",
   "avBg": "linear-gradient(135deg,#1E3A5F,#2563EB)",
   "author": "MortgageXX Editorial",
   "sub": "Spotlight · Just now",
   "badge": "★ SPOTLIGHT",
   "text": "The property-finance landscape in sixty seconds — rates, deposits, the buyers and the deals that move the market. Press play.",
   "video": "genexxo-videos/mortgagexx.mp4",
   "eng": "♡ 16.8K · 💬 2.6K · ↗ 1.5K"
  },
  {
   "av": "FF",
   "avBg": "linear-gradient(135deg,#4ADE80,#16A34A)",
   "author": "@first_home_fiona",
   "sub": "First-Time Buyers · 2h ago",
   "badge": "COMMUNITY",
   "text": "We did it. Completion day. 18 months of saving, 3 applications, 2 surveys, 1 collapsed chain. Final rate 3.89% 5-year fixed with Northwide, 15% deposit, zero stamp duty. For everyone still trying — it’s possible.",
   "img": "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&h=440&fit=crop&q=80",
   "eng": "♡ 24.6K · 💬 3.8K · ↗ 2.1K"
  },
  {
   "av": "Ha",
   "avBg": "linear-gradient(135deg,#2563EB,#1E3A5F)",
   "author": "Habitnow",
   "sub": "Founding Partner · Brand Zone",
   "badge": "BRAND ZONE",
   "text": "Habitnow searches 20,000+ mortgage products in seconds. AI matches you to the best rate for your circumstances. No broker fees, no hidden costs. Average saving £1,200 over the fixed term.",
   "img": "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=440&fit=crop&q=80",
   "eng": "♡ 12.4K · 💬 1.8K · ↗ 934"
  },
  {
   "av": "BB",
   "avBg": "linear-gradient(135deg,#F59E0B,#D97706)",
   "author": "@broker_ben",
   "sub": "Remortgage · 3h ago",
   "badge": "COMMUNITY",
   "text": "Mortgage broker here. If your fixed expires within six months you can lock a new rate now with no commitment — most lenders hold it for six months. Rates drop, you rebook; rates rise, you’re protected. No downside to locking early.",
   "eng": "♡ 14.2K · 💬 2.4K · ↗ 1.2K"
  }
 ],
 "prompts": [
  "Should I lock my remortgage rate now?",
  "How much deposit do I actually need?"
 ]
};
Object.assign(ZONES, {
 "habitnow": {
  "key": "habitnow",
  "kind": "brand",
  "gw": "mortgage",
  "name": "Habitnow",
  "color": "#2563EB",
  "gradient": "linear-gradient(135deg,#1E3A5F,#2563EB)",
  "tier": "Founding Partner",
  "verified": true,
  "tagline": "Online mortgage broker",
  "stats": {
   "followers": "1.4M",
   "content": "3,600",
   "products": "20,000+ products"
  },
  "event": {
   "zoneEvent": true,
   "tag": "CLINIC",
   "when": "Tue 4 Feb · 19:00 GMT",
   "title": "Remortgage Clinic: Beat Your Renewal",
   "desc": "Fixed rate expiring in 2026? Our advisers run a live clinic on locking early, product transfers vs full remortgage, and the paperwork that trips people up.",
   "registered": 5240,
   "capacity": 7000
  },
  "products": [
   {
    "name": "Fee-Free Mortgage Search",
    "price": "£0 broker fee",
    "tag": "POPULAR",
    "emoji": "🏠",
    "rating": 4.9,
    "reviews": "26.4K",
    "desc": "We search 20,000+ mortgage products in seconds and handle the whole application. No broker fee, ever — we’re paid by the lender.",
    "features": [
     "20,000+ products",
     "No broker fee",
     "Whole-of-market",
     "Fully online application"
    ],
    "review": {
     "who": "ftb_freya",
     "text": "Approved in 4 days for a rate I couldn’t find anywhere myself. And it cost me nothing. Genuinely felt too good to be true."
    }
   }
  ],
  "feed": [
   {
    "type": "post",
    "sub": "Founding Partner · Just now",
    "text": "<b>Habitnow searches 20,000+ mortgage products in seconds.</b> AI matches you to the best rate for your circumstances. No broker fees, no hidden costs. Average saving £1,200 over the fixed term.",
    "img": "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=440&fit=crop&q=80",
    "eng": "♡ 12.4K · 💬 1.8K · ↗ 934",
    "product": 0
   },
   {
    "type": "post",
    "sub": "Rate Watch · 5h ago",
    "text": "Average 2-year fixed has fallen below 4%. If your deal expires within six months, you can lock a new rate now with no commitment. Our remortgage clinic Tuesday walks through exactly how.",
    "img": "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&h=440&fit=crop&q=80",
    "eng": "♡ 8.6K · 💬 1.1K · ↗ 512"
   },
   {
    "type": "community",
    "who": "remortgage_raj",
    "whoBg": "linear-gradient(135deg,#2563EB,#1E3A5F)",
    "sub": "Community · 7h ago",
    "text": "Locked a 3.79% five-year fix through Habitnow six months before my current deal ended. Rates ticked up since — I’m now saving £180 a month versus if I’d waited. Lock early, people.",
    "eng": "♡ 5.2K · 💬 634",
    "reply": "Textbook move, Raj — locking early with no downside is the single most underrated trick in mortgages. £180/month is £10,800 over the fix. Glad the timing worked out. 🏠"
   }
  ],
  "about": {
   "founded": "Manchester · 2016",
   "story": "Habitnow rebuilt the mortgage broker for the internet — whole-of-market search across 20,000+ products, a fully online application and zero broker fees. Founding Partner on MortgageXX.",
   "milestones": [
    [
     "2016",
     "Founded as an online broker"
    ],
    [
     "2020",
     "AI product matching launched"
    ],
    [
     "2024",
     "£10bn in mortgages arranged"
    ],
    [
     "2026",
     "Founding Partner on MortgageXX"
    ]
   ],
   "values": [
    "No broker fees, ever",
    "Whole-of-market or nothing",
    "Speed without the paperwork"
   ]
  }
 },
 "northwide-mortgage": {
  "key": "northwide-mortgage",
  "kind": "brand",
  "gw": "mortgage",
  "name": "Northwide",
  "color": "#1E3A5F",
  "gradient": "linear-gradient(135deg,#0D1B2A,#1E3A5F)",
  "tier": "Brand Zone",
  "verified": true,
  "tagline": "The world’s largest building society",
  "stats": {
   "followers": "2.1M",
   "content": "4,800",
   "products": "Mortgages & savings"
  },
  "event": {
   "zoneEvent": true,
   "tag": "GUIDE",
   "when": "Mon 3 Feb · 12:00 GMT",
   "title": "First-Time Buyer Live Q&A",
   "desc": "Everything on deposits, Help-to-Buy successor schemes, agreements in principle and what lenders actually check. Bring your questions — nothing too basic.",
   "registered": 6180,
   "capacity": 8000
  },
  "products": [
   {
    "name": "5% Deposit Mortgage",
    "price": "From 4.19%",
    "tag": "FTB",
    "emoji": "🔑",
    "rating": 4.7,
    "reviews": "19.8K",
    "desc": "Get on the ladder with just a 5% deposit. Fee-free options, free valuation and a dedicated first-time-buyer adviser from application to completion.",
    "features": [
     "5% minimum deposit",
     "Free standard valuation",
     "No product fee options",
     "Dedicated FTB adviser"
    ],
    "review": {
     "who": "ladder_luke",
     "text": "5% deposit and they held my hand through the whole thing. As a first-time buyer that support was worth more than a slightly lower rate."
    }
   }
  ],
  "feed": [
   {
    "type": "post",
    "sub": "Brand Zone · Just now",
    "text": "<b>Owned by our members, not shareholders.</b> That’s why we can offer 5% deposit mortgages, free valuations and a dedicated adviser to every first-time buyer. 175 years, £250bn in mortgages, mutual since day one.",
    "img": "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=440&fit=crop&q=80",
    "eng": "♡ 10.2K · 💬 1.4K · ↗ 723",
    "product": 0
   },
   {
    "type": "post",
    "sub": "First-Time Buyers · 6h ago",
    "text": "Our first-time-buyer Q&A is live Monday. Agreements in principle, deposit schemes, what actually gets checked — no question too basic. The ladder is closer than you think.",
    "img": "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&h=440&fit=crop&q=80",
    "eng": "♡ 7.8K · 💬 980 · ↗ 401"
   },
   {
    "type": "community",
    "who": "first_home_fiona",
    "whoBg": "linear-gradient(135deg,#4ADE80,#16A34A)",
    "sub": "Community · 8h ago",
    "text": "Completed with Northwide on a 3.89% five-year fix, 15% deposit. The FTB adviser answered my panicked texts on a Sunday. That’s the difference a mutual makes. Keys are in my hand.",
    "eng": "♡ 9.4K · 💬 1.2K",
    "reply": "Congratulations, Fiona — nothing beats keys-in-hand. Our advisers are members serving members, so those Sunday texts are exactly the point. Wishing you every happiness in the new home. 🔑"
   }
  ],
  "about": {
   "founded": "Northampton · 1849",
   "story": "Northwide has been owned by its members since 1849 — the world’s largest building society, returning value to savers and borrowers instead of shareholders. Brand Zone on MortgageXX, with a focus on first-time buyers.",
   "milestones": [
    [
     "1849",
     "Founded as a mutual society"
    ],
    [
     "1990",
     "Became the largest building society"
    ],
    [
     "2015",
     "Digital mortgage journey launched"
    ],
    [
     "2026",
     "Brand Zone on MortgageXX"
    ]
   ],
   "values": [
    "Members before shareholders",
    "The ladder for everyone",
    "175 years of trust"
   ]
  }
 }
});
})();
