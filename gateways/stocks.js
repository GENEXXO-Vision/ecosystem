/* ═════════ STOCKSXX — demo gateway (moved out of genexxo-data.js in -86, 2026-11-20) ═════════
   Generated once from the live data; this file is now the source. Edit it here, then run: node build_gateways.js
   Its events stay in genexxo-data.js (EVENTS_FEED), as before. */
(function(){
GATEWAYS.stocks = {
 "name": "StocksXX",
 "domain": "stocksxx.com",
 "emoji": "📈",
 "sector": "finance",
 "live": true,
 "tagline": "The Equities Universe",
 "theme": {
  "bg": "#0C0E14",
  "text": "#E0E4EA",
  "cardBg": "rgba(255,255,255,.03)",
  "cardBorder": "rgba(255,255,255,.06)",
  "headerBg": "linear-gradient(180deg,#12151E,#0C0E14)",
  "accent": "#4ADE80",
  "accentAlt": "#22C55E",
  "dark": true
 },
 "gradient": "linear-gradient(135deg,#0F172A,#1E3A5F,#22C55E)",
 "stats": {
  "members": "520K",
  "brands": "1,400+",
  "agents": "156"
 },
 "spaces": [
  "All Feed",
  "Earnings Watch",
  "Macro & Reserve",
  "Tech & AI",
  "Portfolio Talk",
  "Beginner Q&A"
 ],
 "trending": [
  "#EarningsSeason",
  "#FedWatch",
  "#AIStocks"
 ],
 "brandZones": [
  {
   "key": "inteq",
   "name": "Inteq",
   "color": "#EF4444",
   "tier": "Founding Partner",
   "tag": "CFDs, spread betting & shares"
  },
  {
   "key": "charterly",
   "name": "Charterly",
   "color": "#2563EB",
   "tier": "Brand Zone",
   "tag": "Charts, community & Pine Script"
  }
 ],
 "apps": [
  {
   "name": "Watchlist",
   "color": "#4ADE80",
   "desc": "Track your positions live"
  },
  {
   "name": "Earnings Calendar",
   "color": "#60A5FA",
   "desc": "Never miss a report"
  }
 ],
 "feed": [
  {
   "av": "SX",
   "avBg": "linear-gradient(135deg,#4ADE80,#16A34A)",
   "author": "StocksXX Editorial",
   "sub": "Trading Education · Just now",
   "badge": "MASTERCLASS",
   "text": "Trading Masterclass: reading the tape in volatile markets — how to spot institutional order flow before the move happens. 47 minutes, no fluff.",
   "video": "genexxo-videos/trade1.mp4",
   "eng": "♡ 9.2K · 💬 1.4K · ↗ 876"
  },
  {
   "av": "MM",
   "avBg": "linear-gradient(135deg,#4ADE80,#16A34A)",
   "author": "@macro_mike",
   "sub": "Macro & Reserve · 45m ago",
   "badge": "COMMUNITY",
   "text": "Powell’s language shifted materially. “Sufficiently restrictive” is gone from the statement. This is the setup for a June cut — bond market now pricing 82%. Long duration here.",
   "img": "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=440&fit=crop&q=80",
   "eng": "♡ 3.2K · 💬 445 · ↗ 89"
  },
  {
   "av": "In",
   "avBg": "linear-gradient(135deg,#EF4444,#B91C1C)",
   "author": "Inteq",
   "sub": "Founding Partner · Brand Zone",
   "badge": "BRAND ZONE",
   "text": "Zero commission on US equities is live. Apple, Nvidia, Tesla, Amazon — trade the world’s biggest companies with no dealing fees. 50 years of trust, FRC regulated, £360bn in client assets.",
   "img": "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=800&h=440&fit=crop&q=80",
   "eng": "♡ 8.4K · 💬 1.1K · ↗ 523"
  },
  {
   "av": "Ch",
   "avBg": "linear-gradient(135deg,#2563EB,#1D4ED8)",
   "author": "Charterly",
   "sub": "Brand Zone · 6h ago",
   "badge": "BRAND ZONE",
   "text": "AI Pattern Recognition is now in public beta — our neural net scans every chart for head-and-shoulders, wedges and 23 other patterns in real time. Backtested against 10 years of data, accuracy published transparently.",
   "img": "https://images.unsplash.com/photo-1642790106117-e829e14a795f?w=800&h=440&fit=crop&q=80",
   "eng": "♡ 14.2K · 💬 1.8K · ↗ 890"
  }
 ],
 "prompts": [
  "Explain the Fed decision in plain English",
  "What moved the GMI 500 today?"
 ]
};
Object.assign(ZONES, {
 "inteq": {
  "key": "inteq",
  "kind": "brand",
  "gw": "stocks",
  "name": "Inteq",
  "color": "#EF4444",
  "gradient": "linear-gradient(135deg,#7F1D1D,#EF4444)",
  "tier": "Founding Partner",
  "verified": true,
  "tagline": "CFDs, spread betting & shares since 1974",
  "stats": {
   "followers": "2.4M",
   "content": "6,800",
   "products": "18,000+ markets"
  },
  "event": {
   "live": true,
   "tag": "LIVE DESK",
   "title": "US Market Open — Live Trading Desk",
   "now": "Live now · Wall Street bell",
   "subtitle": "Our analysts trade the open in real time — pre-market movers, opening gaps and the levels that matter for the first hour.",
   "viewers": "7,240",
   "poster": "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=460&fit=crop&q=80"
  },
  "products": [
   {
    "name": "Zero-Commission Shares",
    "price": "£0 commission",
    "tag": "POPULAR",
    "emoji": "📊",
    "rating": 4.8,
    "reviews": "12.4K",
    "desc": "Trade 18,000+ US, UK and European shares with no dealing commission and fractional investing from £1.",
    "features": [
     "18,000+ global markets",
     "No dealing commission",
     "Fractional shares from £1",
     "FRC regulated"
    ],
    "review": {
     "who": "day_trader_dan",
     "text": "Zero commission actually means zero — no spread games. Been with them 8 years, platform never drops on the open."
    }
   },
   {
    "name": "Pro CFD Account",
    "price": "0.6 pt spreads",
    "emoji": "⚡",
    "rating": 4.7,
    "reviews": "8.1K",
    "desc": "Institutional-grade CFD trading with tight spreads, guaranteed stops and 200ms execution.",
    "features": [
     "0.6pt EUR/USD spread",
     "Guaranteed stop-loss",
     "200ms execution",
     "Negative-balance protection"
    ],
    "review": {
     "who": "scalper_sara",
     "text": "Execution is genuinely fast. Guaranteed stops saved me on the last CPI print."
    }
   }
  ],
  "feed": [
   {
    "type": "post",
    "sub": "Founding Partner · Just now",
    "text": "<b>Zero commission on US equities is live.</b> Apple, Nvidia, Tesla, Amazon — trade the world’s biggest companies with no dealing fees. 50 years of trust, FRC regulated, £360bn in client assets.",
    "img": "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=800&h=440&fit=crop&q=80",
    "eng": "♡ 8.4K · 💬 1.1K · ↗ 523",
    "product": 0
   },
   {
    "type": "post",
    "sub": "Education · 4h ago",
    "text": "The live trading desk is open through every US session. Watch our analysts work the tape — no signals to sell you, just transparent decision-making you can learn from.",
    "img": "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=440&fit=crop&q=80",
    "eng": "♡ 5.2K · 💬 640 · ↗ 289"
   },
   {
    "type": "community",
    "who": "first_year_fran",
    "whoBg": "linear-gradient(135deg,#EF4444,#B91C1C)",
    "sub": "Community · 6h ago",
    "text": "Came from a bank broker charging £11.95 a trade. Moved my ISA over, zero commission, and the app is night and day. Wish I’d switched two years ago.",
    "eng": "♡ 1.8K · 💬 156",
    "reply": "Welcome across, Fran. That £11.95 a trade compounds into real money over a year — glad the ISA transfer went smoothly. Shout if you want a walkthrough of the fractional feature. 📊"
   }
  ],
  "about": {
   "founded": "London · 1974",
   "story": "Inteq pioneered spread betting in the 1970s and has grown into a global multi-asset broker trusted with £360bn in client assets. Founding Partner on StocksXX, bringing zero-commission investing and a transparent live trading desk to the community.",
   "milestones": [
    [
     "1974",
     "Founded — pioneered spread betting"
    ],
    [
     "1999",
     "First online trading platform"
    ],
    [
     "2016",
     "Zero-commission investing launched"
    ],
    [
     "2026",
     "Founding Partner on StocksXX"
    ]
   ],
   "values": [
    "Transparency over signals",
    "Trust earned over 50 years",
    "Education, not hype"
   ]
  }
 },
 "charterly": {
  "key": "charterly",
  "kind": "brand",
  "gw": "stocks",
  "name": "Charterly",
  "color": "#2563EB",
  "gradient": "linear-gradient(135deg,#1E3A8A,#2563EB)",
  "tier": "Brand Zone",
  "verified": true,
  "tagline": "Charts, community & Pine Script",
  "stats": {
   "followers": "1.6M",
   "content": "9,400",
   "products": "Charts + screeners"
  },
  "event": {
   "zoneEvent": true,
   "tag": "MASTERCLASS",
   "when": "Thu 6 Feb · 18:00 GMT",
   "title": "Charting Masterclass: Pine Script from Scratch",
   "desc": "Build your first custom indicator live — from a moving-average crossover to a full backtested strategy. No coding experience needed.",
   "registered": 4820,
   "capacity": 6000
  },
  "products": [
   {
    "name": "Charterly Pro",
    "price": "£12/mo",
    "tag": "POPULAR",
    "emoji": "📈",
    "rating": 4.9,
    "reviews": "22.6K",
    "desc": "Real-time data, unlimited indicators, multi-chart layouts and cloud-synced alerts across every device.",
    "features": [
     "Real-time data",
     "Unlimited indicators",
     "100+ alert conditions",
     "Multi-chart layouts"
    ],
    "review": {
     "who": "chart_wizard_will",
     "text": "The alert engine alone is worth it. I sleep and it watches 40 tickers for me."
    }
   }
  ],
  "feed": [
   {
    "type": "post",
    "sub": "Brand Zone · Just now",
    "text": "<b>AI Pattern Recognition is now in public beta.</b> Our neural net scans every chart for head-and-shoulders, wedges and 23 other patterns in real time. Backtested against 10 years of data, accuracy published transparently.",
    "img": "https://images.unsplash.com/photo-1642790106117-e829e14a795f?w=800&h=440&fit=crop&q=80",
    "eng": "♡ 14.2K · 💬 1.8K · ↗ 890",
    "product": 0
   },
   {
    "type": "post",
    "sub": "Community Spotlight · 5h ago",
    "text": "12 million traders now share ideas on Charterly. Every chart you publish is a lesson for someone else. This is what open charting was meant to be.",
    "img": "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=440&fit=crop&q=80",
    "eng": "♡ 9.6K · 💬 1.2K · ↗ 445"
   },
   {
    "type": "community",
    "who": "pine_script_pete",
    "whoBg": "linear-gradient(135deg,#2563EB,#1D4ED8)",
    "sub": "Community · 7h ago",
    "text": "Wrote my first Pine Script indicator following the masterclass thread. It actually works and backtests green over 3 years. Never thought I could code anything.",
    "eng": "♡ 3.4K · 💬 289",
    "reply": "That’s the whole point, Pete — Pine Script is deliberately approachable. Green over 3 years is a great start; just remember to forward-test before you size up. See you at Thursday’s live session. 📈"
   }
  ],
  "about": {
   "founded": "Remote · 2011",
   "story": "Charterly turned charting into a social experience — 12 million traders publishing ideas, indicators and strategies in the open. Brand Zone on StocksXX, where the community reads the market together.",
   "milestones": [
    [
     "2011",
     "Founded as a browser-first charting tool"
    ],
    [
     "2018",
     "Pine Script community launched"
    ],
    [
     "2024",
     "AI pattern recognition"
    ],
    [
     "2026",
     "Brand Zone on StocksXX"
    ]
   ],
   "values": [
    "Charting in the open",
    "Community over black boxes",
    "Publish your accuracy"
   ]
  }
 }
});
})();
