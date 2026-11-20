/* ═════════ CURRENCYXX — demo gateway (moved out of genexxo-data.js in -86, 2026-11-20) ═════════
   Generated once from the live data; this file is now the source. Edit it here, then run: node build_gateways.js
   Its events stay in genexxo-data.js (EVENTS_FEED), as before. */
(function(){
GATEWAYS.currency = {
 "name": "CurrencyXX",
 "domain": "currencyxx.com",
 "emoji": "💱",
 "sector": "finance",
 "live": true,
 "tagline": "The FX Universe",
 "theme": {
  "bg": "#0A0D1A",
  "text": "#D0D8EC",
  "cardBg": "rgba(255,255,255,.03)",
  "cardBorder": "rgba(255,255,255,.06)",
  "headerBg": "linear-gradient(180deg,#101530,#0A0D1A)",
  "accent": "#3B82F6",
  "accentAlt": "#60A5FA",
  "dark": true
 },
 "gradient": "linear-gradient(135deg,#0F172A,#1E3A8A,#3B82F6)",
 "stats": {
  "members": "310K",
  "brands": "800+",
  "agents": "98"
 },
 "spaces": [
  "All Feed",
  "Majors",
  "Emerging Markets",
  "Central Banks",
  "Carry Trade",
  "Macro Analysis"
 ],
 "trending": [
  "#CentralBanks",
  "#CarryTrade",
  "#DollarWatch"
 ],
 "brandZones": [
  {
   "key": "sygma-fx",
   "name": "Sygma FX",
   "color": "#16A34A",
   "tier": "Founding Partner",
   "tag": "FX & CFD trading since 1996"
  },
  {
   "key": "soren-bank",
   "name": "Soren Bank",
   "color": "#0055A4",
   "tier": "Brand Zone",
   "tag": "Multi-asset · 185 FX pairs"
  }
 ],
 "apps": [
  {
   "name": "Rate Alerts",
   "color": "#3B82F6",
   "desc": "Every pair, every move"
  },
  {
   "name": "Currency Converter",
   "color": "#60A5FA",
   "desc": "190+ currencies, live"
  }
 ],
 "feed": [
  {
   "av": "CX",
   "avBg": "linear-gradient(135deg,#3B82F6,#1D4ED8)",
   "author": "CurrencyXX Editorial",
   "sub": "Featured · Just now",
   "badge": "★ FEATURED",
   "text": "CurrencyXX — where the world’s money moves. FX intelligence, analysis and the community behind the pairs.",
   "video": "genexxo-videos/currencyxx.mp4",
   "eng": "♡ 11.4K · 💬 1.3K · ↗ 760"
  },
  {
   "av": "CX",
   "avBg": "linear-gradient(135deg,#3B82F6,#1D4ED8)",
   "author": "CurrencyXX Editorial",
   "sub": "Global FX · Just now",
   "badge": "⚡ FX BRIEFING",
   "text": "Global rate snapshot — EUR/USD holds 1.08 as the EUB signals caution, USD/JPY breaks 150 on CBJ pivot fears, GBP/USD rallies on a UK CPI beat. The dollar story of 2026 is just getting started.",
   "video": "genexxo-videos/fx1.mp4",
   "eng": "♡ 8.4K · 💬 1.1K · ↗ 567"
  },
  {
   "av": "FF",
   "avBg": "linear-gradient(135deg,#3B82F6,#1E40AF)",
   "author": "@fx_fiona",
   "sub": "Majors · 20m ago",
   "badge": "COMMUNITY",
   "text": "CBJ finally showing teeth. If they hike in April, the carry-trade unwind could be brutal. Short USD/JPY below 150 looks compelling — risk-reward is exceptional here.",
   "img": "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=800&h=440&fit=crop&q=80",
   "eng": "♡ 1.8K · 💬 234 · ↗ 56"
  },
  {
   "av": "Sy",
   "avBg": "linear-gradient(135deg,#16A34A,#15803D)",
   "author": "Sygma FX",
   "sub": "Founding Partner · Brand Zone",
   "badge": "BRAND ZONE",
   "text": "Tight spreads on JPY pairs through CBJ volatility. While other brokers widen in fast markets, we hold competitive pricing. 71 pairs, average EUR/USD spread 0.6 pips, regulated across 8 jurisdictions.",
   "img": "https://images.unsplash.com/photo-1642790106117-e829e14a795f?w=800&h=440&fit=crop&q=80",
   "eng": "♡ 5.4K · 💬 678 · ↗ 312"
  }
 ],
 "prompts": [
  "Why is the yen strengthening?",
  "Explain the carry trade in one paragraph"
 ]
};
Object.assign(ZONES, {
 "sygma-fx": {
  "key": "sygma-fx",
  "kind": "brand",
  "gw": "currency",
  "name": "Sygma FX",
  "color": "#16A34A",
  "gradient": "linear-gradient(135deg,#14532D,#16A34A)",
  "tier": "Founding Partner",
  "verified": true,
  "tagline": "FX & CFD trading since 1996",
  "stats": {
   "followers": "1.9M",
   "content": "5,200",
   "products": "71 FX pairs"
  },
  "event": {
   "live": true,
   "tag": "LIVE DESK",
   "title": "CBJ Decision — Live FX Desk",
   "now": "Live now · Rate statement in 12 min",
   "subtitle": "Our FX desk covers the Central Bank of Japan decision tick-by-tick — USD/JPY positioning, the carry-trade unwind risk and where the levels break.",
   "viewers": "3,880",
   "poster": "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=800&h=460&fit=crop&q=80"
  },
  "products": [
   {
    "name": "Raw Spread Account",
    "price": "0.0 pip + £3",
    "tag": "POPULAR",
    "emoji": "💱",
    "rating": 4.8,
    "reviews": "9.7K",
    "desc": "Institutional raw spreads from 0.0 pips with a flat commission — built for scalpers and high-frequency FX traders.",
    "features": [
     "Raw spreads from 0.0",
     "Flat £3 round-turn",
     "Regulated in 8 jurisdictions",
     "MT4, MT5 & web"
    ],
    "review": {
     "who": "fx_scalper_finn",
     "text": "Held pricing tight straight through the last NFP while two other brokers widened to 4 pips. That’s why I stay."
    }
   }
  ],
  "feed": [
   {
    "type": "post",
    "sub": "Founding Partner · Just now",
    "text": "<b>Tight spreads on JPY pairs through CBJ volatility.</b> While other brokers widen in fast markets, we hold competitive pricing. 71 pairs, average EUR/USD spread 0.6 pips, regulated across 8 jurisdictions.",
    "img": "https://images.unsplash.com/photo-1642790106117-e829e14a795f?w=800&h=440&fit=crop&q=80",
    "eng": "♡ 5.4K · 💬 678 · ↗ 312",
    "product": 0
   },
   {
    "type": "post",
    "sub": "Live Desk · 30m ago",
    "text": "FX desk is live for the CBJ decision. We don’t sell signals — we show our positioning and our reasoning in real time. Come watch how a professional desk manages an event risk.",
    "img": "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=800&h=440&fit=crop&q=80",
    "eng": "♡ 3.8K · 💬 512 · ↗ 234"
   },
   {
    "type": "community",
    "who": "carry_trade_cora",
    "whoBg": "linear-gradient(135deg,#16A34A,#15803D)",
    "sub": "Community · 4h ago",
    "text": "Moved my FX book here for the raw spreads. The difference on a 20-lot day is genuinely hundreds of pounds saved. Execution has been flawless through three NFPs now.",
    "eng": "♡ 2.1K · 💬 187",
    "reply": "Appreciate you, Cora. Raw spread + flat commission is built exactly for the size you’re trading — the savings compound fast at 20 lots a day. Enjoy the CBJ desk this afternoon. 💱"
   }
  ],
  "about": {
   "founded": "Sydney · 1996",
   "story": "Sygma FX built a reputation on execution — raw spreads, deep liquidity and pricing that holds through the events that matter. Founding Partner on CurrencyXX, running a transparent live FX desk for the community.",
   "milestones": [
    [
     "1996",
     "Founded as an FX broker"
    ],
    [
     "2010",
     "Raw spread ECN launched"
    ],
    [
     "2021",
     "Regulated across 8 jurisdictions"
    ],
    [
     "2026",
     "Founding Partner on CurrencyXX"
    ]
   ],
   "values": [
    "Execution above all",
    "Transparent positioning",
    "Pricing that holds"
   ]
  }
 },
 "soren-bank": {
  "key": "soren-bank",
  "kind": "brand",
  "gw": "currency",
  "name": "Soren Bank",
  "color": "#0055A4",
  "gradient": "linear-gradient(135deg,#01274A,#0055A4)",
  "tier": "Brand Zone",
  "verified": true,
  "tagline": "Multi-asset investing · 185 FX pairs",
  "stats": {
   "followers": "1.2M",
   "content": "4,100",
   "products": "185 FX pairs"
  },
  "event": {
   "zoneEvent": true,
   "tag": "WEBINAR",
   "when": "Wed 5 Feb · 13:00 GMT",
   "title": "Central Bank Super-Week: What to Trade",
   "desc": "Three rate decisions in five days. Our macro strategists map the EUB, CBJ and BoE meetings and the FX pairs most exposed to each.",
   "registered": 2640,
   "capacity": 4000
  },
  "products": [
   {
    "name": "Multi-Currency Account",
    "price": "£0/mo",
    "emoji": "🏦",
    "rating": 4.6,
    "reviews": "6.3K",
    "desc": "Hold and convert 27 currencies at interbank rates, with a debit card that spends in the local currency wherever you are.",
    "features": [
     "27 currencies held",
     "Interbank conversion",
     "Local-currency debit card",
     "185 FX pairs to trade"
    ],
    "review": {
     "who": "nomad_nadia",
     "text": "I invoice in USD, pay rent in EUR and travel on GBP. One account, real rates, no nonsense."
    }
   }
  ],
  "feed": [
   {
    "type": "post",
    "sub": "Brand Zone · Just now",
    "text": "<b>185 FX pairs, one regulated home.</b> From EUR/USD to the exotics, trade the broadest currency range on the platform — and hold 27 of them at interbank rates in your account.",
    "img": "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=800&h=440&fit=crop&q=80",
    "eng": "♡ 4.2K · 💬 534 · ↗ 267",
    "product": 0
   },
   {
    "type": "post",
    "sub": "Macro · 6h ago",
    "text": "Central bank super-week is here — EUB, CBJ and BoE all decide within five days. Our strategists publish the full playbook Wednesday. This is where FX volatility is made.",
    "img": "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=440&fit=crop&q=80",
    "eng": "♡ 3.1K · 💬 401 · ↗ 178"
   },
   {
    "type": "community",
    "who": "emerging_mkt_evan",
    "whoBg": "linear-gradient(135deg,#0055A4,#003D7A)",
    "sub": "Community · 9h ago",
    "text": "The exotic pair coverage here is unmatched. Trading TRY and ZAR crosses that no one else offers retail, at spreads that don’t punish you. Rare to find.",
    "eng": "♡ 1.6K · 💬 143",
    "reply": "Exotics are a deliberate focus for us, Evan — deep EM liquidity is hard to source, so we’re glad it shows in the spreads. The super-week playbook covers a couple of EM crosses too. 🏦"
   }
  ],
  "about": {
   "founded": "Copenhagen · 1992",
   "story": "Soren Bank grew from a Nordic FX specialist into a multi-asset investment bank serving a million retail clients. Brand Zone on CurrencyXX, offering the widest currency range and true multi-currency banking.",
   "milestones": [
    [
     "1992",
     "Founded as a Nordic FX house"
    ],
    [
     "2007",
     "Retail multi-asset platform"
    ],
    [
     "2020",
     "Multi-currency banking launched"
    ],
    [
     "2026",
     "Brand Zone on CurrencyXX"
    ]
   ],
   "values": [
    "Breadth of markets",
    "Interbank fairness",
    "Global by default"
   ]
  }
 }
});
})();
