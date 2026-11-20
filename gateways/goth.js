/* ═════════ GOTHXX — demo gateway (moved out of genexxo-data.js in -86, 2026-11-20) ═════════
   Generated once from the live data; this file is now the source. Edit it here, then run: node build_gateways.js
   Its events stay in genexxo-data.js (EVENTS_FEED), as before. */
(function(){
GATEWAYS.goth = {
 "name": "GothXX",
 "domain": "gothxx.com",
 "emoji": "🖤",
 "sector": "fashion",
 "live": true,
 "tagline": "The Alternative Fashion Universe",
 "theme": {
  "bg": "#120A1E",
  "text": "#E8E0F0",
  "cardBg": "rgba(255,255,255,.04)",
  "cardBorder": "rgba(255,255,255,.07)",
  "headerBg": "linear-gradient(180deg,#1E0F33,#120A1E)",
  "accent": "#9333EA",
  "accentAlt": "#C084FC",
  "dark": true
 },
 "gradient": "linear-gradient(135deg,#1a0a2e,#4C1D95,#9333EA)",
 "stats": {
  "members": "210K",
  "brands": "640+",
  "agents": "38"
 },
 "spaces": [
  "All Feed",
  "Goth & Alt",
  "Punk",
  "Avant-Garde",
  "Footwear"
 ],
 "trending": [
  "#DarkAcademia",
  "#HexCollection",
  "#PlatformSeason"
 ],
 "brandZones": [
  {
   "key": "kohlstar",
   "name": "Kohlstar",
   "color": "#9333EA",
   "tier": "Founding Partner",
   "tag": "Alternative fashion & footwear"
  },
  {
   "key": "roman-onyx",
   "name": "Roman Onyx",
   "color": "#666666",
   "tier": "Brand Zone",
   "tag": "Dark luxury & avant-garde"
  }
 ],
 "apps": [
  {
   "name": "Drop Alerts",
   "color": "#9333EA",
   "desc": "Never miss a limited capsule"
  },
  {
   "name": "Style Board",
   "color": "#C084FC",
   "desc": "Build & share dark looks"
  }
 ],
 "feed": [
  {
   "av": "GX",
   "avBg": "linear-gradient(135deg,#9333EA,#C084FC)",
   "author": "GothXX Editorial",
   "sub": "Featured · Just now",
   "badge": "★ FEATURED",
   "text": "Darkness is a state of mind. Alternative fashion, subculture and the community that lives after midnight — from goth to punk to avant-garde. Your gateway to the dark side.",
   "video": "genexxo-videos/gothxx.mp4",
   "eng": "♡ 12.4K · 💬 1.6K · ↗ 890"
  },
  {
   "av": "MM",
   "avBg": "linear-gradient(135deg,#6B21A8,#9333EA)",
   "author": "@midnight_moth",
   "sub": "Alt Fashion · Just now",
   "badge": "COMMUNITY",
   "text": "Full look for tonight — Hex Mesh maxi, 14-eye platforms, silver rings stacked to the knuckle. Three years of building this wardrobe piece by piece. The high street never had us, so we built it ourselves.",
   "video": "genexxo-videos/goth1.mp4",
   "eng": "♡ 8.9K · 💬 1.2K · ↗ 645"
  },
  {
   "av": "KS",
   "avBg": "linear-gradient(135deg,#9333EA,#6B21A8)",
   "author": "Kohlstar",
   "sub": "Founding Partner · Brand Zone",
   "badge": "BRAND ZONE",
   "text": "The Hex Collection just dropped. Mesh, moon phases and midnight rituals — floor-length dresses that move like shadows, platforms built for dancing until 4am. Every piece vegan and ethically made. Darkness doesn’t require cruelty.",
   "img": "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&h=440&fit=crop&q=80",
   "eng": "♡ 7.8K · 💬 890 · ↗ 445"
  },
  {
   "av": "RO",
   "avBg": "linear-gradient(135deg,#666666,#333333)",
   "author": "Roman Onyx",
   "sub": "Brand Zone · 12h ago",
   "badge": "BRAND ZONE",
   "text": "AW27: PORTVM. Brutal silhouettes, raw leather cut against the grain, models walking a concrete labyrinth in darkness. Fashion as architecture. Clothing as armour. Thirty years of unwavering vision — shown in full inside the zone.",
   "img": "https://images.unsplash.com/photo-1520975954732-35dd22299614?w=800&h=440&fit=crop&q=80",
   "eng": "♡ 18.4K · 💬 2.4K · ↗ 1.2K"
  }
 ],
 "prompts": [
  "Style a full goth look under £200",
  "Which platform boots last the longest?"
 ]
};
Object.assign(ZONES, {
 "kohlstar": {
  "key": "kohlstar",
  "kind": "brand",
  "gw": "goth",
  "name": "Kohlstar",
  "color": "#9333EA",
  "gradient": "linear-gradient(135deg,#9333EA,#6B21A8,#1A0A2E)",
  "tier": "Founding Partner",
  "verified": true,
  "tagline": "Alternative fashion & lifestyle — darkness is a state of mind",
  "stats": {
   "followers": "18.7K",
   "content": "560",
   "products": "342"
  },
  "event": {
   "live": true,
   "tag": "Kohlstar Live",
   "title": "Hex Collection Launch Party",
   "subtitle": "The Hex drop, live from the club — looks, DJs and the community after dark.",
   "now": "Live · Hex Mesh maxi on the floor now",
   "viewers": "4,120",
   "poster": "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&h=440&fit=crop&q=80"
  },
  "products": [
   {
    "name": "Hex Mesh Maxi Dress",
    "price": "£78",
    "tag": "HEX DROP",
    "emoji": "🖤",
    "rating": 4.8,
    "reviews": 420,
    "cat": "dresses",
    "special": true,
    "desc": "Sheer floor-length mesh with moon-phase embroidery that catches UV — a dress that moves like a shadow.",
    "sizes": [
     "XS",
     "S",
     "M",
     "L",
     "XL",
     "2XL"
    ],
    "features": [
     "Moon-phase embroidery (glows under UV)",
     "Floor-length sheer mesh",
     "Vegan & ethically made"
    ],
    "review": {
     "who": "midnight_moth",
     "text": "The moon-phase embroidery is stunning in person. Got compliments from strangers all night."
    }
   },
   {
    "name": "Bloodmoon Platform Boots",
    "price": "£115",
    "tag": "BESTSELLER",
    "emoji": "🥾",
    "rating": 4.7,
    "reviews": 680,
    "cat": "footwear",
    "special": true,
    "desc": "14-eye vegan-leather platforms with a chunky sole and triple buckle — built to survive a thousand goth nights.",
    "sizes": [
     "UK 3",
     "4",
     "5",
     "6",
     "7",
     "8",
     "9"
    ],
    "features": [
     "14-eye · triple buckle",
     "Chunky vegan-leather sole",
     "Broken-in comfort from day one"
    ],
    "review": {
     "who": "crypt_kid_cara",
     "text": "Danced until 4am, zero blisters. They look like they walked out of a Tim Burton film."
    }
   },
   {
    "name": "Coven Velvet Corset",
    "price": "£65",
    "emoji": "🖤",
    "rating": 4.6,
    "reviews": 390,
    "cat": "corsets",
    "desc": "Steel-boned purple velvet corset with lace trim and back lacing — the layering centrepiece.",
    "sizes": [
     "XS",
     "S",
     "M",
     "L",
     "XL",
     "2XL"
    ],
    "features": [
     "Steel-boned structure",
     "Lace trim · back lacing",
     "Deep purple crushed velvet"
    ],
    "review": {
     "who": "velvet_vex",
     "text": "Structured but comfortable. Layers over everything and instantly makes the look."
    }
   }
  ],
  "shopCats": [
   {
    "key": "dresses",
    "label": "Dresses",
    "icon": "🖤"
   },
   {
    "key": "footwear",
    "label": "Footwear",
    "icon": "🥾"
   },
   {
    "key": "corsets",
    "label": "Corsets & Tops",
    "icon": "🌙"
   }
  ],
  "feed": [
   {
    "type": "post",
    "sub": "Official · Just now",
    "text": "The <b>Hex Collection</b> just dropped. Mesh, moon phases and midnight rituals. Floor-length dresses that move like shadows. Platform boots built for dancing until 4am. Every piece vegan and ethically produced. Darkness doesn’t require cruelty.",
    "img": "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&h=440&fit=crop&q=80",
    "eng": "♡ 7.8K · 💬 890 · ↗ 445",
    "product": 0
   },
   {
    "type": "post",
    "sub": "Community · 1d ago",
    "text": "We started Kohlstar because we couldn’t find clothes that matched how we felt. Every mainstream brand offered us beige when we wanted black and purple. So we built it ourselves — for every kid who ever felt too dark for the high street.",
    "img": "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&h=440&fit=crop&q=80",
    "eng": "♡ 12.4K · 💬 1.6K · ↗ 789"
   },
   {
    "type": "community",
    "who": "midnight_moth",
    "whoBg": "linear-gradient(135deg,#9333EA,#6B21A8)",
    "sub": "Community · 3h ago",
    "text": "Hex Mesh Maxi arrived today. The moon-phase embroidery is stunning in person — photos don’t do it justice. Wore it to a club night and got compliments from strangers all evening. Finally a brand that gets us.",
    "eng": "♡ 1.9K · 💬 134",
    "reply": "The embroidery catches the light differently under UV — a little secret we designed in. The night is yours. 🌙"
   }
  ],
  "about": {
   "founded": "Manchester, England · 2014",
   "story": "Kohlstar was built by and for the people the high street never dressed — goth, alt and everyone who wanted black and purple when the shops only offered beige. Vegan, ethically made, and unapologetically dark, it’s alternative fashion made by the community it serves.",
   "milestones": [
    [
     "2014",
     "Founded in Manchester"
    ],
    [
     "2018",
     "Entire range goes vegan"
    ],
    [
     "2023",
     "Hex Collection becomes the signature line"
    ],
    [
     "2026",
     "Founding Partner on GothXX"
    ]
   ],
   "values": [
    "Vegan & cruelty-free",
    "For the misfits, by the misfits",
    "Darkness done ethically"
   ]
  }
 },
 "roman-onyx": {
  "key": "roman-onyx",
  "kind": "brand",
  "gw": "goth",
  "name": "Roman Onyx",
  "color": "#666666",
  "gradient": "linear-gradient(135deg,#666666,#333333,#0A0A0A)",
  "tier": "Claimed & Verified",
  "verified": true,
  "tagline": "Dark luxury — brutalist avant-garde since 1994",
  "stats": {
   "followers": "28.9K",
   "content": "440",
   "products": "87"
  },
  "event": {
   "zoneEvent": true,
   "tag": "RUNWAY",
   "title": "Roman Onyx AW27 · PORTVM Runway",
   "when": "Feb 26 · Concrete labyrinth, Paris",
   "desc": "The AW27 PORTVM show, streamed from a concrete labyrinth in darkness — brutal silhouettes, raw leather cut against the grain, Throbbing Vein on the soundtrack. RSVP for the digital front row.",
   "registered": 1800,
   "capacity": 3000
  },
  "products": [
   {
    "name": "Geobasket High-Top",
    "price": "£980",
    "tag": "ICON",
    "emoji": "🥾",
    "rating": 4.9,
    "reviews": 341,
    "cat": "footwear",
    "special": true,
    "desc": "Full-grain leather high-top on a hand-vulcanised shark sole — 23 construction stages, made in Tuscany, Milk/Black.",
    "sizes": [
     "EU 40",
     "41",
     "42",
     "43",
     "44",
     "45",
     "46"
    ],
    "features": [
     "Full-grain leather · shark sole",
     "Hand-vulcanised in Tuscany",
     "23 construction stages"
    ],
    "review": {
     "who": "concrete_cathedral",
     "text": "The leather quality is on another level. Makes everything else in my wardrobe look cheap."
    }
   },
   {
    "name": "Champion Bomber Jacket",
    "price": "£2,400",
    "tag": "STATEMENT",
    "emoji": "🧥",
    "rating": 4.8,
    "reviews": 96,
    "cat": "outerwear",
    "special": true,
    "desc": "Oversized waxed-cotton bomber with horn buttons and a draping hem — clothing as architecture.",
    "sizes": [
     "S",
     "M",
     "L",
     "XL"
    ],
    "features": [
     "Waxed cotton · oversized cut",
     "Horn buttons",
     "Draping architectural hem"
    ],
    "review": {
     "who": "severe_and_sensual",
     "text": "Reads like armour. The drape is unreal — nothing else in my closet moves like it."
    }
   },
   {
    "name": "Drkshdw Cargo Pod Shorts",
    "price": "£520",
    "emoji": "🖤",
    "rating": 4.7,
    "reviews": 140,
    "cat": "rtw",
    "desc": "Heavyweight garment-dyed jersey with a dropped crotch and pod pockets — the signature severe silhouette.",
    "sizes": [
     "XS",
     "S",
     "M",
     "L",
     "XL"
    ],
    "features": [
     "Heavyweight garment-dyed jersey",
     "Dropped crotch, pod pockets",
     "Severe, sculptural fit"
    ],
    "review": {
     "who": "shadow_form_sy",
     "text": "Sculptural without trying. Garment dye means every pair reads slightly different."
    }
   }
  ],
  "shopCats": [
   {
    "key": "footwear",
    "label": "Footwear",
    "icon": "🥾"
   },
   {
    "key": "outerwear",
    "label": "Outerwear",
    "icon": "🧥"
   },
   {
    "key": "rtw",
    "label": "Ready-to-Wear",
    "icon": "🖤"
   }
  ],
  "feed": [
   {
    "type": "post",
    "sub": "AW27 · Just now",
    "text": "<b>AW27: PORTVM.</b> Brutal silhouettes. Raw leather cut against the grain. Throbbing Vein on the soundtrack. Models walked a concrete labyrinth in darkness. Fashion as architecture. Clothing as armour.",
    "img": "https://images.unsplash.com/photo-1520975954732-35dd22299614?w=800&h=440&fit=crop&q=80",
    "eng": "♡ 18.4K · 💬 2.4K · ↗ 1.2K"
   },
   {
    "type": "post",
    "sub": "Craft · 12h ago",
    "text": "Every <b>Geobasket</b> is made in a family-owned factory in Tuscany. Full-grain leather. Shark-tooth sole vulcanised by hand. 23 separate construction stages. The same factory for 22 years. This is what loyalty to craft looks like.",
    "img": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&h=440&fit=crop&q=80",
    "eng": "♡ 12.8K · 💬 1.6K · ↗ 734",
    "product": 0
   },
   {
    "type": "community",
    "who": "concrete_cathedral",
    "whoBg": "linear-gradient(135deg,#666666,#333333)",
    "sub": "Community · 2h ago",
    "text": "Finally got Geobaskets after 3 years of wanting them. The leather quality is on another level — you can feel the Italian craftsmanship. They make everything else in my wardrobe look cheap.",
    "eng": "♡ 2.4K · 💬 178",
    "reply": "The leather will soften and mould to your foot over the first 50 wears — they become uniquely yours. Let them age. That’s the point. 🖤"
   }
  ],
  "about": {
   "founded": "Paris · 1994",
   "story": "Roman Onyx has spent three decades making dark luxury on its own terms — brutalist silhouettes, raw leather, hand-vulcanised soles from a single family factory in Tuscany. No fast-fashion collaborations, no compromise. Severe but sensual, glamour and restraint.",
   "milestones": [
    [
     "1994",
     "Founded in Paris"
    ],
    [
     "2001",
     "The Geobasket high-top debuts"
    ],
    [
     "2013",
     "Concrete-labyrinth runway becomes signature"
    ],
    [
     "2027",
     "AW27 PORTVM"
    ]
   ],
   "values": [
    "No compromise, ever",
    "Loyalty to craft",
    "Severe but sensual"
   ]
  }
 }
});
})();
