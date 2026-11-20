/* ═════════ PENSIONXX — demo gateway (moved out of genexxo-data.js in -86, 2026-11-20) ═════════
   Generated once from the live data; this file is now the source. Edit it here, then run: node build_gateways.js
   Its events stay in genexxo-data.js (EVENTS_FEED), as before. */
(function(){
GATEWAYS.pension = {
 "name": "PensionXX",
 "domain": "pensionxx.com",
 "emoji": "🏦",
 "sector": "finance",
 "live": true,
 "tagline": "The Pension & Retirement Universe",
 "theme": {
  "bg": "#F0F9F5",
  "text": "#042F2E",
  "cardBg": "#F7FDFB",
  "cardBorder": "rgba(4,47,46,.07)",
  "headerBg": "linear-gradient(180deg,#DCEFE8,#F0F9F5)",
  "accent": "#14B8A6",
  "accentAlt": "#0F766E",
  "dark": false
 },
 "gradient": "linear-gradient(135deg,#042F2E,#0F766E,#14B8A6)",
 "stats": {
  "members": "345K",
  "brands": "560+",
  "agents": "78"
 },
 "spaces": [
  "All Feed",
  "Workplace Pensions",
  "SIPP & Self-Invested",
  "Drawdown & Retirement",
  "Tax & Allowances",
  "Beginner Q&A"
 ],
 "trending": [
  "#CompoundInterest",
  "#FIRE",
  "#PensionFreedom"
 ],
 "brandZones": [
  {
   "key": "vanstead-pension",
   "name": "Vanstead",
   "color": "#0F766E",
   "tier": "Founding Partner",
   "tag": "Low-cost index investing"
  },
  {
   "key": "pensionhive",
   "name": "PensionHive",
   "color": "#F59E0B",
   "tier": "Brand Zone",
   "tag": "Combine your old pensions"
  }
 ],
 "apps": [
  {
   "name": "Pension Tracker",
   "color": "#14B8A6",
   "desc": "All your pots in one view"
  },
  {
   "name": "Retirement Calc",
   "color": "#0F766E",
   "desc": "Model your number"
  }
 ],
 "feed": [
  {
   "av": "PX",
   "avBg": "linear-gradient(135deg,#0F766E,#14B8A6)",
   "author": "PensionXX Editorial",
   "sub": "Retirement Planning · Just now",
   "badge": "ANALYSIS",
   "text": "The compound-interest gap: starting a pension at 25 vs 35 means 40% more at retirement on the same monthly contribution. £300/month from 25 → £487K at 65. From 35 → £278K. Ten years of delay costs £209K. The maths does not negotiate.",
   "img": "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&h=440&fit=crop&q=80",
   "eng": "♡ 28.4K · 💬 4.8K · ↗ 2.8K"
  },
  {
   "av": "PX",
   "avBg": "linear-gradient(135deg,#0F766E,#14B8A6)",
   "author": "PensionXX Editorial",
   "sub": "Spotlight · Just now",
   "badge": "★ SPOTLIGHT",
   "text": "Your future self, funded — a minute inside the pension universe, where compound interest quietly does the heavy lifting. Press play.",
   "video": "genexxo-videos/pensionxx.mp4",
   "eng": "♡ 20.4K · 💬 3.1K · ↗ 1.9K"
  },
  {
   "av": "FF",
   "avBg": "linear-gradient(135deg,#EF4444,#DC2626)",
   "author": "@fire_movement_frank",
   "sub": "SIPP & Self-Invested · 2h ago",
   "badge": "COMMUNITY",
   "text": "FIRE at 52. SIPP £680K in Vanstead Global Total Cap, ISA bridge £240K to cover the gap until 57, total annual spend £28K, 4% withdrawal. The spreadsheet said it works. Two months in — it actually works.",
   "img": "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=440&fit=crop&q=80",
   "eng": "♡ 34.2K · 💬 5.6K · ↗ 3.2K"
  },
  {
   "av": "Va",
   "avBg": "linear-gradient(135deg,#0F766E,#042F2E)",
   "author": "Vanstead",
   "sub": "Founding Partner · Brand Zone",
   "badge": "BRAND ZONE",
   "text": "Vanstead Global Total Cap: 6,000+ stocks, 49 countries, 0.23% annual charge — the community’s most popular pension fund, and the maths explains why.",
   "img": "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&h=440&fit=crop&q=80",
   "eng": "♡ 18.6K · 💬 2.8K · ↗ 1.4K"
  },
  {
   "av": "TT",
   "avBg": "linear-gradient(135deg,#A78BFA,#7C3AED)",
   "author": "@tax_efficient_tina",
   "sub": "Tax & Allowances · 5h ago",
   "badge": "COMMUNITY",
   "text": "Higher-rate pension hack: a £40K contribution = £16K tax relief. That’s a 40% instant return before any growth. If your employer matches 5%, you’re at 45% on day one. No other vehicle offers this. Use your allowance.",
   "eng": "♡ 22.4K · 💬 3.2K · ↗ 1.8K"
  }
 ],
 "prompts": [
  "How much should I be saving for retirement?",
  "Explain the higher-rate pension tax relief"
 ]
};
Object.assign(ZONES, {
 "vanstead-pension": {
  "key": "vanstead-pension",
  "kind": "brand",
  "gw": "pension",
  "name": "Vanstead",
  "color": "#0F766E",
  "gradient": "linear-gradient(135deg,#042F2E,#0F766E)",
  "tier": "Founding Partner",
  "verified": true,
  "tagline": "Low-cost index investing",
  "stats": {
   "followers": "2.6M",
   "content": "5,900",
   "products": "Funds & SIPP"
  },
  "event": {
   "zoneEvent": true,
   "tag": "MASTERCLASS",
   "when": "Thu 6 Feb · 13:00 GMT",
   "title": "The Only Pension Talk You Need",
   "desc": "Index funds, fees, compounding and the 4% rule — our education team distils 30 years of evidence into one session. No products pitched, just the maths.",
   "registered": 7420,
   "capacity": 9000
  },
  "products": [
   {
    "name": "Vanstead SIPP",
    "price": "0.15% platform",
    "tag": "POPULAR",
    "emoji": "🏦",
    "rating": 4.9,
    "reviews": "31.6K",
    "desc": "A self-invested personal pension with our full range of low-cost index funds. 0.15% platform fee, capped annually — the fee that lets compounding do its work.",
    "features": [
     "0.15% platform fee (capped)",
     "Full index fund range",
     "Tax relief handled automatically",
     "Retirement drawdown built in"
    ],
    "review": {
     "who": "index_investor_ian",
     "text": "Moved three old pensions in. Low fees, one login, and the compounding projection is genuinely motivating. Wish I’d done it a decade ago."
    }
   },
   {
    "name": "Global Total Cap Fund",
    "price": "0.23% OCF",
    "emoji": "🌍",
    "rating": 4.9,
    "reviews": "22.4K",
    "desc": "6,000+ stocks across 49 countries in a single fund — the community’s most popular pension holding, at an all-in cost of 0.23%.",
    "features": [
     "6,000+ holdings",
     "49 countries",
     "0.23% ongoing charge",
     "Fully accumulating"
    ],
    "review": {
     "who": "set_forget_sophie",
     "text": "One fund, whole world, 0.23%. I check it twice a year. This is the entire strategy and it works."
    }
   }
  ],
  "feed": [
   {
    "type": "post",
    "sub": "Founding Partner · Just now",
    "text": "<b>Vanstead Global Total Cap: 6,000+ stocks, 49 countries, 0.23% annual charge</b> — the community’s most popular pension fund, and the maths explains why. Low fees aren’t a nice-to-have; over 40 years they’re most of your return.",
    "img": "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&h=440&fit=crop&q=80",
    "eng": "♡ 18.6K · 💬 2.8K · ↗ 1.4K",
    "product": 1
   },
   {
    "type": "post",
    "sub": "Education · 5h ago",
    "text": "A 1% fee sounds tiny. Over a 40-year pension it can eat a third of your final pot. This is the single most important number most people never check. Our masterclass Thursday shows you why.",
    "img": "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=440&fit=crop&q=80",
    "eng": "♡ 14.2K · 💬 2.1K · ↗ 1.1K"
   },
   {
    "type": "community",
    "who": "compound_clara",
    "whoBg": "linear-gradient(135deg,#0F766E,#042F2E)",
    "sub": "Community · 9h ago",
    "text": "Consolidated four workplace pensions into a Vanstead SIPP. Went from an average 0.9% fee to 0.23%. That switch alone is projected to add £71K to my pot by 67. Fees are everything.",
    "eng": "♡ 8.6K · 💬 1.1K",
    "reply": "That £71K is compounding working in your favour instead of against you, Clara. Four pots into one also means you’ll actually watch it now — which matters more than people think. Own less, own the world. 🏦"
   }
  ],
  "about": {
   "founded": "Valley Forge · 1975",
   "story": "Vanstead pioneered the low-cost index fund on the radical idea that costs, not stock-picking, decide most long-term returns. Owned by its own funds, it answers to investors alone. Founding Partner on PensionXX.",
   "milestones": [
    [
     "1975",
     "Launched the first index fund for individuals"
    ],
    [
     "2000",
     "Passed £1tn under management"
    ],
    [
     "2019",
     "Zero-commission platform"
    ],
    [
     "2026",
     "Founding Partner on PensionXX"
    ]
   ],
   "values": [
    "Costs decide returns",
    "Own the whole market",
    "Investor-owned, always"
   ]
  }
 },
 "pensionhive": {
  "key": "pensionhive",
  "kind": "brand",
  "gw": "pension",
  "name": "PensionHive",
  "color": "#F59E0B",
  "gradient": "linear-gradient(135deg,#B45309,#F59E0B)",
  "tier": "Brand Zone",
  "verified": true,
  "tagline": "Combine your old pensions",
  "stats": {
   "followers": "1.1M",
   "content": "2,700",
   "products": "Pension consolidation"
  },
  "event": {
   "zoneEvent": true,
   "tag": "CLINIC",
   "when": "Wed 5 Feb · 18:30 GMT",
   "title": "Find & Combine Your Lost Pensions",
   "desc": "The average worker has 11 jobs and loses track of pots along the way. Live clinic on tracing old pensions, checking exit fees and combining them the right way.",
   "registered": 3860,
   "capacity": 5000
  },
  "products": [
   {
    "name": "Pension Finder & Combine",
    "price": "£0 to find",
    "tag": "POPULAR",
    "emoji": "🐝",
    "rating": 4.8,
    "reviews": "15.3K",
    "desc": "We trace your old workplace pensions, check for exit fees and valuable guarantees, then combine the right ones into a single low-cost plan you can actually see.",
    "features": [
     "Free pension tracing",
     "Exit-fee & guarantee check",
     "One combined plan",
     "Low ongoing charge"
    ],
    "review": {
     "who": "lost_pots_leo",
     "text": "They found two pensions I’d completely forgotten from jobs in my twenties. £14K I didn’t know I had, now in one place. Unreal."
    }
   }
  ],
  "feed": [
   {
    "type": "post",
    "sub": "Brand Zone · Just now",
    "text": "<b>The average worker has 11 jobs — and loses track of pensions along the way.</b> PensionHive finds your old pots for free, checks for exit fees and guarantees, then combines the right ones into one plan you can finally see.",
    "img": "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&h=440&fit=crop&q=80",
    "eng": "♡ 9.2K · 💬 1.2K · ↗ 634",
    "product": 0
   },
   {
    "type": "post",
    "sub": "Guidance · 6h ago",
    "text": "One warning we make loudly: some old pensions carry guaranteed annuity rates worth keeping. We check every pot before we combine — combining blindly can cost you. Our clinic Wednesday explains what to watch for.",
    "img": "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=440&fit=crop&q=80",
    "eng": "♡ 6.4K · 💬 812 · ↗ 389"
   },
   {
    "type": "community",
    "who": "tidied_up_tara",
    "whoBg": "linear-gradient(135deg,#F59E0B,#B45309)",
    "sub": "Community · 8h ago",
    "text": "Had five tiny pots from agency work, none over £3K, all with different logins I’d lost. PensionHive traced the lot and combined four (kept one with a guarantee). First time I’ve seen my whole pension in one number.",
    "eng": "♡ 4.6K · 💬 523",
    "reply": "That’s the dream, Tara — one number instead of five forgotten logins. And well spotted keeping the pot with the guarantee; that’s exactly the check people miss. Enjoy the clarity. 🐝"
   }
  ],
  "about": {
   "founded": "Bristol · 2018",
   "story": "PensionHive tackles the £27bn of lost UK pensions — tracing old workplace pots, checking them for hidden value and combining the right ones into a single, visible plan. Brand Zone on PensionXX.",
   "milestones": [
    [
     "2018",
     "Founded to fix lost pensions"
    ],
    [
     "2021",
     "Automated pension tracing launched"
    ],
    [
     "2024",
     "£2bn consolidated for members"
    ],
    [
     "2026",
     "Brand Zone on PensionXX"
    ]
   ],
   "values": [
    "Find what’s yours",
    "Check before combining",
    "One pension, one view"
   ]
  }
 }
});
})();
