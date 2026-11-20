/* ═════════ BITCOINXX — demo gateway (moved out of genexxo-data.js in -86, 2026-11-20) ═════════
   Generated once from the live data; this file is now the source. Edit it here, then run: node build_gateways.js
   Its events stay in genexxo-data.js (EVENTS_FEED), as before. */
(function(){
GATEWAYS.bitcoin = {
 "name": "BitcoinXX",
 "domain": "bitcoinxx.com",
 "emoji": "₿",
 "sector": "crypto",
 "live": true,
 "tagline": "The Bitcoin & Digital Asset Universe",
 "theme": {
  "bg": "#0D0A00",
  "text": "#F0E8D0",
  "cardBg": "rgba(255,255,255,.03)",
  "cardBorder": "rgba(255,255,255,.06)",
  "headerBg": "linear-gradient(180deg,#1A1400,#0D0A00)",
  "accent": "#F59E0B",
  "accentAlt": "#FBBF24",
  "dark": true
 },
 "gradient": "linear-gradient(135deg,#0D0A00,#92400E,#F59E0B)",
 "stats": {
  "members": "680K",
  "brands": "1,200+",
  "agents": "134"
 },
 "spaces": [
  "All Feed",
  "Bitcoin",
  "Ethereum & L2",
  "DeFi",
  "On-Chain Analysis",
  "Regulation & Macro"
 ],
 "trending": [
  "#OnChain",
  "#BitcoinETF",
  "#DeFiSummer"
 ],
 "brandZones": [
  {
   "key": "coinhub",
   "name": "Coinhub",
   "color": "#F59E0B",
   "tier": "Founding Partner",
   "tag": "The most trusted exchange"
  },
  {
   "key": "vaultkey",
   "name": "Vaultkey",
   "color": "#1A1A1A",
   "tier": "Brand Zone",
   "tag": "Hardware self-custody"
  }
 ],
 "apps": [
  {
   "name": "Portfolio Tracker",
   "color": "#F59E0B",
   "desc": "Every chain, one view"
  },
  {
   "name": "On-Chain Alerts",
   "color": "#4ADE80",
   "desc": "Whale moves in real time"
  }
 ],
 "feed": [
  {
   "av": "BX",
   "avBg": "linear-gradient(135deg,#1a1a2e,#F59E0B)",
   "author": "BitcoinXX Editorial",
   "sub": "Featured · Just now",
   "badge": "★ FEATURED",
   "text": "BitcoinXX — the chain does not lie. On-chain intelligence, protocols and the community building what comes next.",
   "video": "genexxo-videos/cryptoxx.mp4",
   "eng": "♡ 18.6K · 💬 2.2K · ↗ 1.4K"
  },
  {
   "av": "OO",
   "avBg": "linear-gradient(135deg,#F59E0B,#D97706)",
   "author": "@onchain_ollie",
   "sub": "Bitcoin · 45m ago",
   "badge": "COMMUNITY",
   "text": "Long-term holder supply just hit an all-time high. Entities holding BTC 155+ days now control 78% of circulating supply — the tightest squeeze since 2017. ETF bids are hitting a shrinking float.",
   "img": "https://images.unsplash.com/photo-1622630998477-20aa696ecb05?w=800&h=440&fit=crop&q=80",
   "eng": "♡ 12.8K · 💬 1.8K · ↗ 934"
  },
  {
   "av": "Co",
   "avBg": "linear-gradient(135deg,#F59E0B,#D97706)",
   "author": "Coinhub",
   "sub": "Founding Partner · Brand Zone",
   "badge": "BRAND ZONE",
   "text": "Bitcoin ETF inflows hit $2.1B this week — we custody 8 of the 11 approved spot ETFs. 110M verified users, publicly listed, SOC 2 Type II certified. Trust is the foundation of crypto.",
   "img": "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?w=800&h=440&fit=crop&q=80",
   "eng": "♡ 18.4K · 💬 2.4K · ↗ 1.2K"
  },
  {
   "av": "DD",
   "avBg": "linear-gradient(135deg,#627EEA,#4F63B8)",
   "author": "@defi_diana",
   "sub": "DeFi · 2h ago",
   "badge": "COMMUNITY",
   "text": "Aave v4 on Base is doing $400M daily volume at 0.01% fees. Lending rates 3x better than any bank. DeFi on L2 is finally what we promised in 2020 — fast, cheap, actually usable.",
   "eng": "♡ 8.4K · 💬 1.2K · ↗ 567"
  }
 ],
 "prompts": [
  "What are the on-chain signals saying?",
  "Explain Bitcoin ETF flows simply"
 ]
};
Object.assign(ZONES, {
 "coinhub": {
  "key": "coinhub",
  "kind": "brand",
  "gw": "bitcoin",
  "name": "Coinhub",
  "color": "#F59E0B",
  "gradient": "linear-gradient(135deg,#92400E,#F59E0B)",
  "tier": "Founding Partner",
  "verified": true,
  "tagline": "The most trusted crypto exchange",
  "stats": {
   "followers": "4.8M",
   "content": "11,200",
   "products": "240+ assets"
  },
  "event": {
   "live": true,
   "tag": "LIVE DESK",
   "title": "ETF Flows — Live Trading Desk",
   "now": "Live now · Daily inflow print",
   "subtitle": "We break down today’s spot Bitcoin ETF flows the moment they hit the tape — which issuers are bidding, what it means for the float and how the desk is positioned.",
   "viewers": "9,410",
   "poster": "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?w=800&h=460&fit=crop&q=80"
  },
  "products": [
   {
    "name": "Coinhub Exchange",
    "price": "0.1% fee",
    "tag": "POPULAR",
    "emoji": "₿",
    "rating": 4.7,
    "reviews": "34.2K",
    "desc": "Buy, sell and stake 240+ assets on the exchange that custodies 8 of the 11 approved spot ETFs. Publicly listed, SOC 2 Type II certified.",
    "features": [
     "240+ assets",
     "0.1% maker/taker",
     "Insured custody",
     "SOC 2 Type II certified"
    ],
    "review": {
     "who": "hodl_harry",
     "text": "The only exchange I trust with size. Publicly listed, audited, and withdrawals clear in minutes."
    }
   }
  ],
  "feed": [
   {
    "type": "post",
    "sub": "Founding Partner · Just now",
    "text": "<b>Bitcoin ETF inflows hit $2.1B this week</b> — we custody 8 of the 11 approved spot ETFs. 110M verified users, publicly listed, SOC 2 Type II certified. Trust is the foundation of crypto.",
    "img": "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?w=800&h=440&fit=crop&q=80",
    "eng": "♡ 18.4K · 💬 2.4K · ↗ 1.2K",
    "product": 0
   },
   {
    "type": "post",
    "sub": "Live Desk · 20m ago",
    "text": "The trading desk is live for today’s ETF flow print. On-chain data, issuer bids and desk positioning — all in the open. The chain doesn’t lie, and neither do we.",
    "img": "https://images.unsplash.com/photo-1622630998477-20aa696ecb05?w=800&h=440&fit=crop&q=80",
    "eng": "♡ 12.2K · 💬 1.7K · ↗ 823"
   },
   {
    "type": "community",
    "who": "safe_stacker_sam",
    "whoBg": "linear-gradient(135deg,#F59E0B,#D97706)",
    "sub": "Community · 5h ago",
    "text": "After the exchange collapses of the last cycle I only keep coins somewhere publicly listed and audited. Coinhub’s proof-of-reserves page is the reason I moved back on-exchange for trading.",
    "eng": "♡ 6.4K · 💬 712",
    "reply": "That’s exactly the standard the industry needed, Sam. Proof-of-reserves is published continuously, not once a year. Keep your long-term stack in cold storage — we’ll always tell you that too. ₿"
   }
  ],
  "about": {
   "founded": "San Francisco · 2012",
   "story": "Coinhub set out to make crypto trustworthy — the first major exchange to go public, publish proof-of-reserves and achieve SOC 2 certification. Founding Partner on BitcoinXX, custodying the majority of approved spot ETFs.",
   "milestones": [
    [
     "2012",
     "Founded to make crypto safe"
    ],
    [
     "2021",
     "First major exchange to list publicly"
    ],
    [
     "2024",
     "Custodies 8 of 11 spot BTC ETFs"
    ],
    [
     "2026",
     "Founding Partner on BitcoinXX"
    ]
   ],
   "values": [
    "Trust is the product",
    "Proof over promises",
    "Regulated, audited, listed"
   ]
  }
 },
 "vaultkey": {
  "key": "vaultkey",
  "kind": "brand",
  "gw": "bitcoin",
  "name": "Vaultkey",
  "color": "#111827",
  "gradient": "linear-gradient(135deg,#000000,#374151)",
  "tier": "Brand Zone",
  "verified": true,
  "tagline": "Hardware self-custody",
  "stats": {
   "followers": "980K",
   "content": "2,900",
   "products": "Hardware wallets"
  },
  "event": {
   "zoneEvent": true,
   "tag": "WORKSHOP",
   "when": "Sat 8 Feb · 15:00 GMT",
   "title": "Self-Custody 101: Your Keys, Your Coins",
   "desc": "A live setup walkthrough — seed-phrase security, passphrase wallets and how to inherit crypto safely. Bring your device and follow along.",
   "registered": 1980,
   "capacity": 3000
  },
  "products": [
   {
    "name": "Vaultkey Pro",
    "price": "£129",
    "tag": "FLAGSHIP",
    "emoji": "🔐",
    "rating": 4.9,
    "reviews": "18.7K",
    "desc": "A secure-element hardware wallet with a colour touchscreen, supporting 5,000+ assets fully offline. Your keys never touch an internet-connected device.",
    "features": [
     "EAL6+ secure element",
     "5,000+ assets",
     "Air-gapped signing",
     "Open-source firmware"
    ],
    "review": {
     "who": "cold_storage_carl",
     "text": "Setup took ten minutes and the touchscreen makes verifying addresses foolproof. This is how you hold serious size."
    }
   },
   {
    "name": "Vaultkey Mini",
    "price": "£59",
    "emoji": "🔑",
    "rating": 4.7,
    "reviews": "11.2K",
    "desc": "A compact, keychain-sized hardware wallet for everyday self-custody — same secure element, lower price.",
    "features": [
     "EAL6+ secure element",
     "USB-C",
     "1,500+ assets",
     "Keychain form factor"
    ],
    "review": {
     "who": "first_wallet_wendy",
     "text": "My first hardware wallet. The app walked me through everything. No more coins on an exchange."
    }
   }
  ],
  "feed": [
   {
    "type": "post",
    "sub": "Brand Zone · Just now",
    "text": "<b>Not your keys, not your coins.</b> The Vaultkey Pro keeps your private keys on an EAL6+ secure element that never touches the internet. 5,000+ assets, air-gapped signing, open-source firmware you can audit yourself.",
    "img": "https://images.unsplash.com/photo-1622630998477-20aa696ecb05?w=800&h=440&fit=crop&q=80",
    "eng": "♡ 9.8K · 💬 1.3K · ↗ 678",
    "product": 0
   },
   {
    "type": "post",
    "sub": "Security · 6h ago",
    "text": "Every line of our firmware is open source. Don’t trust us — verify us. That’s the whole point of self-custody, and it’s why 980K holders keep their keys with Vaultkey.",
    "img": "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?w=800&h=440&fit=crop&q=80",
    "eng": "♡ 7.2K · 💬 890 · ↗ 445"
   },
   {
    "type": "community",
    "who": "seed_phrase_sana",
    "whoBg": "linear-gradient(135deg,#374151,#111827)",
    "sub": "Community · 8h ago",
    "text": "Moved everything off exchanges after the workshop last month. The passphrase feature means even if someone finds my seed, they still can’t get in. Sleeping better already.",
    "eng": "♡ 4.1K · 💬 356",
    "reply": "That’s the goal, Sana — the passphrase (25th word) adds a layer nobody can find on the device itself. Just never store it with the seed. See you at Saturday’s inheritance workshop. 🔐"
   }
  ],
  "about": {
   "founded": "Zug · 2015",
   "story": "Vaultkey builds hardware wallets on the principle that trust should be verifiable — open-source firmware, certified secure elements and a relentless focus on self-custody education. Brand Zone on BitcoinXX.",
   "milestones": [
    [
     "2015",
     "Founded in Crypto Valley"
    ],
    [
     "2019",
     "Open-sourced its firmware"
    ],
    [
     "2023",
     "EAL6+ secure element"
    ],
    [
     "2026",
     "Brand Zone on BitcoinXX"
    ]
   ],
   "values": [
    "Your keys, your coins",
    "Verify, don’t trust",
    "Security you can audit"
   ]
  }
 }
});
})();
