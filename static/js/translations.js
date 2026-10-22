/**
 * GreenScan - Multilingual Waste Recycling Guidance System & YouTube Knowledge Engine
 * Supports 11 Languages:
 *   1. English (en)
 *   2. Telugu (te - తెలుగు)
 *   3. Hindi (hi - हिंदी)
 *   4. Tamil (ta - தமிழ்)
 *   5. Kannada (kn - ಕನ್ನಡ)
 *   6. Malayalam (ml - മലയാളം)
 *   7. Marathi (mr - मराठी)
 *   8. Bengali (bn - বাংলা)
 *   9. Spanish (es - Español)
 *  10. French (fr - Français)
 *  11. German (de - Deutsch)
 */

const RECYCLING_YOUTUBE_VIDEOS = {
  plastic: [
    {
      id: "_6xlNyWPpB8",
      title: "What really happens to the plastic you throw away?",
      channel: "TED-Ed",
      duration: "4:07",
      tag: "Life Cycle & Impact",
      badge_color: "#ef4444",
      desc: "Follow the journeys of three plastic bottles and uncover why proper sorting and recycling are essential.",
      search_query: "how plastic bottles are recycled process"
    },
    {
      id: "zO3jFKiqmHo",
      title: "How Plastic Recycling Actually Works",
      channel: "Reactions (ACS)",
      duration: "5:23",
      tag: "Recycling Process",
      badge_color: "#eab308",
      desc: "Step inside modern optical sorting, pellet shredding, decontamination, and repolymerization.",
      search_query: "plastic recycling and upcycling ideas DIY"
    }
  ],
  paper: [
    {
      id: "kMiRsXOjdrA",
      title: "How Paper & Cardboard is Recycled Step-by-Step",
      channel: "Science Channel",
      duration: "4:50",
      tag: "Pulping & Pressing",
      badge_color: "#2563eb",
      desc: "Watch compressed cardboard boxes get de-inked, repulped with water, and rolled into new packaging paper.",
      search_query: "how paper cardboard recycling works process"
    },
    {
      id: "kMiRsXOjdrA",
      title: "Handmade Paper Recycling & Crafting at Home",
      channel: "Science & DIY",
      duration: "5:15",
      tag: "Home DIY Craft",
      badge_color: "#10b981",
      desc: "Discover how used scrap paper, newspapers, and notebooks are repurposed into high-grade greeting cards.",
      search_query: "how to make handmade paper from scrap at home DIY"
    }
  ],
  glass: [
    {
      id: "LR9FtWVjk2c",
      title: "What REALLY Happens to 'Recycled' Glass?!",
      channel: "JerryRigEverything",
      duration: "9:42",
      tag: "Laser Sorting & Melting",
      badge_color: "#06b6d4",
      desc: "An exclusive behind-the-scenes look at laser color-separation, cullet crushing, and 1500°C furnace melting.",
      search_query: "what really happens to recycled glass bottle process"
    },
    {
      id: "18oxQkP4qQ0",
      title: "How Glass is Recycled Into Infinite New Bottles",
      channel: "Strategic Materials",
      duration: "3:35",
      tag: "Zero-Loss Loop",
      badge_color: "#0284c7",
      desc: "Discover why glass is one of the only materials that can be remelted infinitely with zero loss in quality.",
      search_query: "glass bottle recycling and upcycling ideas"
    }
  ],
  metal: [
    {
      id: "chIFt2A9MRI",
      title: "How Is Aluminium Recycled into New Cans in 60 Days?",
      channel: "Hydro Aluminium",
      duration: "3:58",
      tag: "High-Efficiency Smelting",
      badge_color: "#64748b",
      desc: "Watch used beverage cans shredded, stripped of coatings, melted at 660°C, and cast into fresh sheet rolls.",
      search_query: "how aluminum beverage cans are recycled process"
    },
    {
      id: "hUhisi2FBuw",
      title: "The Ingenious Design of the Aluminum Beverage Can",
      channel: "engineerguy",
      duration: "11:38",
      tag: "Engineering Marvel",
      badge_color: "#f59e0b",
      desc: "Why the modern aluminum beverage can is the most engineered and sustainable packaging object ever created.",
      search_query: "scrap metal recycling and smelting furnace"
    }
  ],
  organic: [
    {
      id: "Xd3lKD50ey8",
      title: "How to Compost at Home | Full Beginner's Course",
      channel: "Gardening & Composting",
      duration: "8:10",
      tag: "Aerobic Composting",
      badge_color: "#16a34a",
      desc: "Master the greens-to-browns ratio, aerating methods, and moisture control to turn food scraps into rich humus.",
      search_query: "how to compost kitchen waste at home beginners"
    },
    {
      id: "_K25WjjCBuw",
      title: "How To Make Compost - Fast and Easy",
      channel: "Eco Sustainability",
      duration: "6:24",
      tag: "Fast Compost Setup",
      badge_color: "#059669",
      desc: "How to compost in small spaces with zero foul smell and zero fruit flies using aerated bin hacks.",
      search_query: "apartment balcony composting kitchen food scraps"
    }
  ],
  "e-waste": [
    {
      id: "A_upLRbjfyE",
      title: "Inside a High-Tech Electronic Waste Recycling Plant",
      channel: "CBS News",
      duration: "7:45",
      tag: "Industrial E-Waste Plant",
      badge_color: "#ea580c",
      desc: "Inside an advanced e-waste dismantling facility recovering lithium, precious metals, and circuit components.",
      search_query: "how electronic e waste is recycled plant"
    },
    {
      id: "GXJ60PwpMDA",
      title: "Learn What Really Happens to Your E-Waste",
      channel: "Tech & Science",
      duration: "6:30",
      tag: "Urban Mining",
      badge_color: "#d97706",
      desc: "See how modern recycling extracts pure 24K gold, copper, and silver from scrap motherboards and phones.",
      search_query: "extracting gold and copper from electronics ewaste"
    }
  ]
};

const GreenScanTranslations = {
  // 1. ENGLISH
  en: {
    lang_name: "English",
    flag: "🇬🇧",
    ui: {
      bin_label: "Bin Stream",
      dos_title: "Proper Do's",
      donts_title: "Critical Don'ts",
      contamination_title: "Contamination Prevention Check",
      nearest_hub_title: "Nearest Drop-off Center for This Item",
      navigate_maps_btn: "Open in Google Maps (Turn-by-turn Directions)",
      view_on_radar_btn: "View on Map Below",
      correct_it_label: "Wrong prediction? Correct it to train the model:",
      eco_fact_title: "Eco Fact",
      confidence_label: "Confidence Score",
      yt_title: "YouTube Recycling & DIY Guides",
      yt_subtitle: "Watch verified step-by-step recycling processes and creative upcycling tutorials for this item",
      watch_yt_btn: "Watch Video",
      search_yt_btn: "Search More on YouTube",
      yt_badge: "YouTube Guides",
      contam_1: "Rinsed and emptied of all liquids/food residue",
      contam_2: "External adhesive tape or non-recyclable wraps removed",
      contam_3: "Completely dry to prevent mold in paper/dry bins"
    },
    yt_query: "how to recycle waste DIY process step by step",
    categories: {
      plastic: {
        name: "Plastic Recyclable (PET/HDPE)",
        bin_name: "Yellow Bin (Dry Recyclables)",
        dos: [
          "Rinse with wastewater to remove sugary or oily residue",
          "Check for resin identification code #1 (PET) or #2 (HDPE)",
          "Crush or compress plastic bottles to save bin space",
          "Keep bottle caps screwed on to prevent sorting jams"
        ],
        donts: [
          "Do not mix with wet kitchen or food waste",
          "Never incinerate plastics in backyard or open trash piles",
          "Avoid putting multi-layer pouches or chip packets in rigid bins"
        ],
        fact: "Recycling a single plastic bottle saves enough electrical energy to power a 60W LED bulb for over 6 hours!"
      },
      paper: {
        name: "Paper & Corrugated Cardboard",
        bin_name: "Blue Bin (Paper Stream)",
        dos: [
          "Flatten all corrugated cardboard boxes to maximize storage",
          "Remove heavy plastic shipping tape and adhesive strips",
          "Stack newspapers, magazines, notebooks, and office paper neatly",
          "Keep clean paper completely dry at all times"
        ],
        donts: [
          "Do not put greasy, oil-soaked pizza boxes into paper recycling",
          "Avoid thermal receipt paper (contains chemical BPA coating)",
          "Never mix soggy or wet paper with dry paper streams"
        ],
        fact: "Recycling 1 ton of cardboard saves 17 mature trees, 7,000 gallons of water, and 4,000 kW of electricity!"
      },
      glass: {
        name: "Glass Container / Jar",
        bin_name: "Teal Bin (Glass Stream)",
        dos: [
          "Rinse thoroughly to remove sauce, wine, or chemical residues",
          "Separate metal lids and corks into their respective streams",
          "Recycle beverage bottles, condiment jars, and cosmetics glass",
          "Transport unbroken containers carefully to prevent injuries"
        ],
        donts: [
          "Never mix heat-resistant Pyrex cookware, light bulbs, or window panes",
          "Do not discard broken mirrors or ceramic mugs into glass bins",
          "Avoid discarding loose shattered glass into curbside bins"
        ],
        fact: "Glass is 100% recyclable and can be melted and remanufactured endlessly with zero loss in purity or quality!"
      },
      metal: {
        name: "Metal & Aluminum Can",
        bin_name: "Silver Grey Bin (Metals & Alloys)",
        dos: [
          "Rinse food and beverage residue from soup and drink cans",
          "Lightly compress aluminum drink cans to save space",
          "Recycle clean aluminum foil, tin cans, and metal crown caps",
          "Keep dry to prevent oxidation and surface rusting"
        ],
        donts: [
          "Do not include aerosol cans unless completely depressurized",
          "Never toss paint cans with dried toxic oil paints into scrap metal",
          "Avoid discarding sharp metal blades without protective wrapping"
        ],
        fact: "Recycling aluminum requires 95% less energy than mining raw bauxite ore to manufacture new aluminum!"
      },
      organic: {
        name: "Organic & Biodegradable",
        bin_name: "Green Bin (Wet Compostable)",
        dos: [
          "Collect fruit peels, vegetable scraps, tea leaves, and garden trimmings",
          "Deposit in ventilated compost bins or municipal wet collectors",
          "Turn home compost weekly to promote aerobic decomposition",
          "Keep separate from all dry packaging and plastics"
        ],
        donts: [
          "Do not toss plastic produce stickers, twist ties, or staples into compost",
          "Avoid putting chemically treated wood or diseased garden plants",
          "Never mix non-biodegradable synthetic liners with compost"
        ],
        fact: "When organic food waste rots in landfills without oxygen, it creates methane — a greenhouse gas 28x more potent than CO₂!"
      },
      "e-waste": {
        name: "Electronic Waste (E-Waste)",
        bin_name: "Orange/Red Bin (Hazardous E-Waste Kiosk)",
        dos: [
          "Take laptops, phones, cables, chargers, and circuit boards to authorized kiosks",
          "Tape the terminals of lithium-ion batteries with clear electrical tape",
          "Perform factory reset and remove data/memory cards from phones and computers",
          "Support IT refurbishment and component harvesting for circular longevity"
        ],
        donts: [
          "Never smash, incinerate, or dismantle lithium batteries at home",
          "Do not throw electronics or batteries in ordinary household trash bins",
          "Never pour battery electrolytes or acids down household drains"
        ],
        fact: "One metric ton of circuit boards contains more gold, copper, and palladium than several tons of mined geological ore!"
      }
    }
  },

  // 2. TELUGU
  te: {
    lang_name: "తెలుగు (Telugu)",
    flag: "🇮🇳",
    ui: {
      bin_label: "డబ్బా రంగు",
      dos_title: "చేయవలసినవి (Proper Do's)",
      donts_title: "చేయకూడనివి (Critical Don'ts)",
      contamination_title: "కాలుష్య నివారణ తనిఖీ",
      nearest_hub_title: "ఈ వ్యర్థం కోసం సమీప రీసైక్లింగ్ కేంద్రం",
      navigate_maps_btn: "గూగుల్ మ్యాప్స్ లో రూట్ చూడండి (Turn-by-turn Navigation)",
      view_on_radar_btn: "కింద ఉన్న మ్యాప్‌లో చూడండి",
      correct_it_label: "తప్పు వర్గీకరణ జరిగిందా? సరిదిద్ది మోడల్‌కు శిక్షణ ఇవ్వండి:",
      eco_fact_title: "పర్యావరణ వాస్తవం",
      confidence_label: "ఖచ్చితత్వ శాతం",
      yt_title: "యూట్యూబ్‌లో రీసైక్లింగ్ & DIY వీడియోలు",
      yt_subtitle: "ఈ వ్యర్థాన్ని ఎలా పునర్వినియోగించాలో మరియు ఇంట్లోనే చేసే సృజనాత్మక ప్రాజెక్టులను చూడండి",
      watch_yt_btn: "వీడియో చూడండి",
      search_yt_btn: "యూట్యూబ్‌లో మరిన్ని శోధించండి",
      yt_badge: "యూట్యూబ్ గైడ్స్",
      contam_1: "ద్రవాలు లేదా ఆహారపు అవశేషాలు లేకుండా శుభ్రంగా కడగాలి",
      contam_2: "బయటి ప్లాస్టిక్ టేప్ లేదా స్టిక్కర్లను తొలగించాలి",
      contam_3: "బూజు పట్టకుండా పొడిగా ఉంచాలి"
    },
    yt_query: "రీసైక్లింగ్ విధానం step by step",
    categories: {
      plastic: {
        name: "ప్లాస్టిక్ పునర్వినియోగ వ్యర్థం (PET/HDPE)",
        bin_name: "పసుపు రంగు డబ్బా (Yellow Bin - పొడి వ్యర్థాలు)",
        dos: [
          "బాటిల్ లేదా కంటైనర్‌లో మిగిలిన ద్రవాలను నీటితో శుభ్రం చేయండి",
          "PET #1 లేదా HDPE #2 రీసైక్లింగ్ కోడ్‌లను తనిఖీ చేయండి",
          "స్థలాన్ని ఆదా చేయడానికి బాటిళ్లను చేత్తో నొక్కండి (క్రష్ చేయండి)",
          "బాటిల్ మూతలను గట్టిగా బిగించి వేయండి"
        ],
        donts: [
          "తడి వంటగది వ్యర్థాలతో లేదా ఆహారంతో కలపవద్దు",
          "ప్లాస్టిక్‌ను ఎప్పుడూ బహిరంగ ప్రదేశాల్లో కాల్చవద్దు",
          "నూనె లేదా ఆహారపు మరకలు ఉన్న కవర్లను సాధారణ ప్లాస్టిక్ డబ్బాలో వేయవద్దు"
        ],
        fact: "ఒక్క ప్లాస్టిక్ బాటిల్‌ను రీసైకిల్ చేయడం వల్ల 60W LED బల్బును 6 గంటల పాటు వెలిగించేంత విద్యుత్ ఆదా అవుతుంది!"
      },
      paper: {
        name: "కాగితం మరియు కార్డ్‌బోర్డ్ (Paper & Cardboard)",
        bin_name: "నీలం రంగు డబ్బా (Blue Bin - పేపర్ స్ట్రీమ్)",
        dos: [
          "కార్డ్‌బోర్డ్ బాక్సులను చదునుగా మడతపెట్టి ఉంచండి",
          "ప్లాస్టిక్ షిప్పింగ్ టేపులు మరియు స్టిక్కర్లను తొలగించండి",
          "వార్తాపత్రికలు, పుస్తకాలు మరియు నోట్‌బుక్‌లను శుభ్రంగా అమర్చండి",
          "కాగితం ఎప్పుడూ తడవకుండా పూర్తిగా పొడిగా ఉంచండి"
        ],
        donts: [
          "నూనె లేదా చీజ్ మరకలు ఉన్న పిజ్జా బాక్సులను కాగితపు డబ్బాలో వేయవద్దు",
          "రసాయన పూత ఉన్న ఏటీఎం/షాపింగ్ రసీదు కాగితాలను వేయవద్దు",
          "తడిసిన లేదా పాడైపోయిన కాగితపు ముద్దలను వేయవద్దు"
        ],
        fact: "1 టన్ను కార్డ్‌బోర్డ్‌ను రీసైకిల్ చేయడం ద్వారా 17 పెద్ద చెట్లు, 7,000 గ్యాలన్ల నీరు మరియు 4,000 కిలోవాట్ల విద్యుత్ ఆదా అవుతాయి!"
      },
      glass: {
        name: "గాజు పాత్రలు / సీసాలు (Glass Containers)",
        bin_name: "టీల్ / సియాన్ రంగు డబ్బా (Teal Bin - గ్లాస్ స్ట్రీమ్)",
        dos: [
          "సీసా లోపల ఉన్న ఆహార లేదా ద్రవ అవశేషాలను శుభ్రంగా కడగండి",
          "మెటల్ మూతలు మరియు కార్క్‌లను వేరు చేసి వేయండి",
          "సాస్ సీసాలు, జామ్ బాటిళ్లు మరియు గాజు పాత్రలను వేయండి",
          "గాయాలు కాకుండా పగలకుండా జాగ్రత్తగా తరలించండి"
        ],
        donts: [
          "పైరెక్స్ వంట పాత్రలు, బల్బులు లేదా కిటికీ గాజులను కలపవద్దు",
          "పగిలిన అద్దాలు లేదా పింగాణీ కప్పులను గాజు డబ్బాలో వేయవద్దు",
          "పగిలిన గాజు ముక్కలను సాధారణ డబ్బాలో వదులుగా వేయవద్దు"
        ],
        fact: "గాజు నాణ్యత ఏమాత్రం తగ్గకుండా ఎన్ని వేల సార్లైనా పూర్తిగా రీసైకిల్ చేయగల ఏకైక అద్భుత పదార్థం!"
      },
      metal: {
        name: "లోహం మరియు అల్యూమినియం క్యాన్లు (Metal & Cans)",
        bin_name: "వెండి / గ్రే రంగు డబ్బా (Silver Grey Bin - లోహాలు)",
        dos: [
          "టిన్ డబ్బాలు మరియు కూల్ డ్రింక్ క్యాన్లను నీటితో కడగండి",
          "అల్యూమినియం డ్రింక్ క్యాన్లను కొద్దిగా నొక్కి పరిమాణం తగ్గించండి",
          "శుభ్రమైన అల్యూమినియం ఫాయిల్ మరియు మెటల్ బాటిల్ క్యాప్‌లను వేయండి",
          "తుప్పు పట్టకుండా లోహ వ్యర్థాలను పొడిగా ఉంచండి"
        ],
        donts: [
          "ఒత్తిడితో కూడిన గ్యాస్ స్ప్రే (ఏరోసోల్) క్యాన్లను వేయవద్దు",
          "విషపూరిత రసాయన లేదా పెయింట్ డబ్బాలను నేరుగా వేయవద్దు",
          "రక్షణ తొడుగు లేకుండా పదునైన బ్లేడ్లను బహిరంగంగా వేయవద్దు"
        ],
        fact: "కొత్త అల్యూమినియం తయారు చేయడం కంటే పాత డబ్బాలను రీసైకిల్ చేయడం వల్ల 95% తక్కువ శక్తి ఖర్చవుతుంది!"
      },
      organic: {
        name: "సేంద్రీయ మరియు తడి వ్యర్థాలు (Organic Compostable)",
        bin_name: "ఆకుపచ్చ రంగు డబ్బా (Green Bin - తడి వ్యర్థాలు)",
        dos: [
          "పండ్ల తొక్కలు, కూరగాయల వ్యర్థాలు, టీ పొడి మరియు ఆకులను వేయండి",
          "గాలి ఆడే కంపోస్ట్ డబ్బాలలో వేసి సేంద్రీయ ఎరువుగా మార్చండి",
          "కంపోస్ట్ త్వరగా తయారవ్వడానికి వారానికి ఒకసారి కలపండి",
          "పొడి వ్యర్థాలతో కలపకుండా వేరుగా ఉంచండి"
        ],
        donts: [
          "ప్లాస్టిక్ స్టిక్కర్లు, రబ్బర్ బ్యాండ్లు లేదా పిన్నులను కంపోస్ట్‌లో వేయవద్దు",
          "రసాయనాలతో కూడిన కలప లేదా పురుగుల మందుల వ్యర్థాలను వేయవద్దు",
          "ప్లాస్టిక్ కవర్లను తడి వ్యర్థాలతో కలిపి పారేయవద్దు"
        ],
        fact: "తడి వ్యర్థాలు గాలి లేకుండా కుళ్ళిపోయినప్పుడు మీథేన్ వాయువు విడుదలవుతుంది, ఇది కార్బన్ డయాక్సైడ్ కంటే 28 రెట్లు ప్రమాదకరమైనది!"
      },
      "e-waste": {
        name: "ఎలక్ట్రానిక్ వ్యర్థాలు (Electronic Waste / E-Waste)",
        bin_name: "ఎరుపు / ఆరెంజ్ రంగు డబ్బా (Hazardous E-Waste Kiosk)",
        dos: [
          "పాత మొబైల్ ఫోన్లు, ఛార్జర్లు, కేబుల్స్, లాప్‌టాప్‌లను అధికారిక కేంద్రాల్లో ఇవ్వండి",
          "లిథియం అయాన్ బ్యాటరీల రెండు చివర్లలో ప్లాస్టిక్ టేప్ అతికించండి",
          "ఫోన్లు, కంప్యూటర్ల నుంచి మీ వ్యక్తిగత డేటాను ఫ్యాక్టరీ రీసెట్ చేసి తొలగించండి",
          "ఎలక్ట్రానిక్స్ విడిభాగాల పునర్వినియోగానికి మద్దతు ఇవ్వండి"
        ],
        donts: [
          "లిథియం బ్యాటరీలను ఎప్పుడూ పగలగొట్టవద్దు లేదా కాల్చవద్దు",
          "సాధారణ ఇళ్ల చెత్తబుట్టల్లో ఎలక్ట్రానిక్స్ లేదా బ్యాటరీలను వేయవద్దు",
          "బ్యాటరీ యాసిడ్ లేదా రసాయనాలను డ్రైనేజీల్లో పోయవద్దు"
        ],
        fact: "ఒక టన్ను పాత సర్క్యూట్ బోర్డుల నుండి భూమిలో గనుల నుంచి తీసే రాతి కంటే ఎక్కువ బంగారం, రాగి మరియు వెండి లభిస్తాయి!"
      }
    }
  },

  // 3. HINDI
  hi: {
    lang_name: "हिंदी (Hindi)",
    flag: "🇮🇳",
    ui: {
      bin_label: "कूड़ेदान का प्रकार",
      dos_title: "क्या करें (Proper Do's)",
      donts_title: "क्या न करें (Critical Don'ts)",
      contamination_title: "प्रदूषण रोकथाम जांच",
      nearest_hub_title: "इस कचरे के लिए निकटतम रीसाइक्लिंग केंद्र",
      navigate_maps_btn: "गूगल मैप्स पर रास्ता देखें (Turn-by-turn Navigation)",
      view_on_radar_btn: "नीचे मैप पर देखें",
      correct_it_label: "गलत पहचान? इसे सही करें और मॉडल को सिखाएं:",
      eco_fact_title: "पर्यावरण तथ्य",
      confidence_label: "सटीकता प्रतिशत",
      yt_title: "यूट्यूब पर रीसाइक्लिंग और DIY वीडियो",
      yt_subtitle: "देखें कि इस कचरे को कैसे रीसायकल किया जाता है और घर पर creative upcycling कैसे करें",
      watch_yt_btn: "वीडियो देखें",
      search_yt_btn: "यूट्यूब पर और खोजें",
      yt_badge: "यूट्यूब गाइड",
      contam_1: "पानी से धोकर अंदर का तरल या खाना साफ करें",
      contam_2: "बाहरी प्लास्टिक टेप या गैर-पुनर्चक्रणीय रैपर हटा दें",
      contam_3: "फफूंद से बचाने के लिए पूरी तरह सूखा रखें"
    },
    yt_query: "कचरा रीसाइक्लिंग कैसे करें step by step",
    categories: {
      plastic: {
        name: "प्लास्टिक पुनर्चक्रण योग्य (PET/HDPE)",
        bin_name: "पीला कूड़ेदान (Yellow Bin - सूखा कचरा)",
        dos: [
          "बोतल या डिब्बे को पानी से अच्छी तरह धोकर सुखा लें",
          "रीसाइक्लिंग कोड #1 (PET) या #2 (HDPE) की जांच करें",
          "कचरे के डिब्बे में जगह बचाने के लिए बोतल को दबाकर पिचकाएं",
          "बोतल के ढक्कन को कसकर बंद रखें ताकि छंटाई में आसानी हो"
        ],
        donts: [
          "गीले कचरे या भोजन के अवशेषों के साथ न मिलाएं",
          "प्लास्टिक को कभी भी खुले में आग में न जलाएं",
          "तेल लगे चिप्स के पाउच को सख्त प्लास्टिक डिब्बे में न डालें"
        ],
        fact: "एक प्लास्टिक की बोतल रीसायकल करने से 60W LED बल्ब को 6 घंटे जलाने जितनी बिजली बचती है!"
      },
      paper: {
        name: "कागज और कार्डबोर्ड (Paper & Cardboard)",
        bin_name: "नीला कूड़ेदान (Blue Bin - कागज धारा)",
        dos: [
          "कार्डबोर्ड के डिब्बों को मोड़कर चपटा करें",
          "प्लास्टिक टेप और भारी स्टिकर हटा दें",
          "अखबार, किताबें और साफ कागज व्यवस्थित रूप से रखें",
          "कागज को हमेशा बारिश या पानी से बचाकर सूखा रखें"
        ],
        donts: [
          "तेल या ग्रीस से सने पिज्जा बॉक्स कागज के डिब्बे में न डालें",
          "थर्मल एटीएम/बिल रसीद (जिसमें BPA केमिकल होता है) न डालें",
          "गीला या गला हुआ कागज रीसायकल बिन में न डालें"
        ],
        fact: "1 टन कार्डबोर्ड रीसायकल करने से 17 पेड़, 7,000 गैलन पानी और 4,000 किलोवाट बिजली की बचत होती है!"
      },
      glass: {
        name: "कांच के कंटेनर और बोतलें (Glass Jars)",
        bin_name: "टील / नीला-हरा कूड़ेदान (Teal Bin)",
        dos: [
          "कांच के जार और बोतलों को पानी से अच्छी तरह धो लें",
          "धातु के ढक्कन और कॉर्क को अलग डिब्बे में डालें",
          "सॉस, जैम और पेय पदार्थों की कांच की बोतलें रीसायकल करें",
          "टूटे बिना सुरक्षित रूप से सावधानी से ले जाएं"
        ],
        donts: [
          "ओवन के बर्तन (पायरेक्स), कांच के बल्ब या खिड़की का शीशा न मिलाएं",
          "टूटा हुआ आईना या चीनी मिट्टी के कप कांच के डिब्बे में न डालें",
          "टूटे हुए कांच के टुकड़ों को खुले डिब्बे में न फेंकें"
        ],
        fact: "कांच को बिना किसी गुणवत्ता की कमी के अनंत बार पूरी तरह से रीसायकल किया जा सकता है!"
      },
      metal: {
        name: "धातु और एल्युमिनियम कैन (Metal & Cans)",
        bin_name: "सिल्वर / ग्रे कूड़ेदान (Silver Grey Bin)",
        dos: [
          "सूप या कोल्ड ड्रिंक के कैन को पानी से धो लें",
          "डिब्बे में जगह बचाने के लिए एल्युमिनियम कैन को हल्का दबाएं",
          "साफ एल्युमिनियम फॉयल और बोतल के धातु के ढक्कन शामिल करें",
          "जंग से बचाने के लिए धातु के कचरे को सूखा रखें"
        ],
        donts: [
          "दबाव वाले एरोसोल स्प्रे कैन को जब तक पूरी तरह खाली न हो, न डालें",
          "जहरीले पेंट या तेल के डिब्बों को धातु के डिब्बे में न डालें",
          "बिना कवर के तेज धार वाले ब्लेड खुले में न फेंकें"
        ],
        fact: "एल्युमिनियम रीसायकल करने में कच्चे अयस्क से नया एल्युमिनियम बनाने की तुलना में 95% कम ऊर्जा लगती है!"
      },
      organic: {
        name: "जैविक और गीला कचरा (Organic / Wet Waste)",
        bin_name: "हरा कूड़ेदान (Green Bin - गीला कचरा)",
        dos: [
          "फलों-सब्जियों के छिलके, बची चाय पत्ती और पत्तियां इकट्ठा करें",
          "हवादार कंपोस्ट डिब्बे में डालकर प्राकृतिक खाद बनाएं",
          "खाद को जल्दी तैयार करने के लिए हफ्ते में एक बार पलटें",
          "सूखे कचरे और प्लास्टिक से पूरी तरह अलग रखें"
        ],
        donts: [
          "प्लास्टिक स्टिकर, रबर बैंड या स्टेपलर पिन कंपोस्ट में न डालें",
          "केमिकल युक्त लकड़ी या कीटनाशक वाली पत्तियां न मिलाएं",
          "प्लास्टिक की पन्नी को गीले कचरे के साथ न फेंकें"
        ],
        fact: "जब गीला कचरा लैंडफिल में बिना ऑक्सीजन के सड़ता है, तो मीथेन गैस बनती है जो CO₂ से 28 गुना अधिक हानिकारक है!"
      },
      "e-waste": {
        name: "इलेक्ट्रॉनिक कचरा (E-Waste / ई-कचरा)",
        bin_name: "लाल / नारंगी कूड़ेदान (Hazardous E-Waste Kiosk)",
        dos: [
          "पुराने फोन, चार्जर, केबल और सर्किट बोर्ड अधिकृत ई-कचरा केंद्र पर जमा करें",
          "लिथियम बैटरी के सिरों पर सेलोटेप चिपका दें ताकि शॉर्ट सर्किट न हो",
          "फोन या लैपटॉप से अपना निजी डेटा फ़ैक्टरी रीसेट करके हटा लें",
          "इलेक्ट्रॉनिक्स के पुर्जों के पुनर्चक्रण और मरम्मत को बढ़ावा दें"
        ],
        donts: [
          "लिथियम बैटरी को कभी भी हथौड़े से न तोड़ें या आग में न डालें",
          "घरेलू सामान्य कचरे के डिब्बे में कभी भी इलेक्ट्रॉनिक्स न डालें",
          "बैटरी का एसिड या तरल पदार्थ कभी भी नाली में न बहाएं"
        ],
        fact: "एक टन पुराने सर्किट बोर्ड में खदान से निकलने वाले अयस्क की तुलना में अधिक सोना, तांबा और चांदी होता है!"
      }
    }
  },

  // 4. TAMIL
  ta: {
    lang_name: "தமிழ் (Tamil)",
    flag: "🇮🇳",
    ui: {
      bin_label: "தொட்டி வகை",
      dos_title: "செய்ய வேண்டியவை (Proper Do's)",
      donts_title: "செய்யக்கூடாதவை (Critical Don'ts)",
      contamination_title: "மாசு தடுப்பு சரிபார்ப்பு",
      nearest_hub_title: "இதற்கான அருகிலுள்ள மறுசுழற்சி மையம்",
      navigate_maps_btn: "கூகிள் மேப்ஸில் வழியைக் காண்க",
      view_on_radar_btn: "கீழே உள்ள வரைபடத்தில் காண்க",
      correct_it_label: "தவறான கணிப்பா? திருத்தி மாடலுக்குப் பயிற்றுவிக்கவும்:",
      eco_fact_title: "சுற்றுச்சூழல் உண்மை",
      confidence_label: "துல்லியத்தன்மை",
      yt_title: "யூடியூப் மறுசுழற்சி மற்றும் DIY வீடியோக்கள்",
      yt_subtitle: "இந்த கழிவை எவ்வாறு மறுசுழற்சி செய்வது என்பதை விளக்கும் சிறந்த வீடியோக்கள்",
      watch_yt_btn: "வீடியோ பார்க்க",
      search_yt_btn: "யூடியூப்பில் மேலும் தேட",
      yt_badge: "யூடியூப் வழிகாட்டி",
      contam_1: "நீரினால் கழுவி திரவங்களை முழுமையாக அகற்றவும்",
      contam_2: "வெளிப்புற பிளாஸ்டிக் டேப் அல்லது ஸ்டிக்கர்களை அகற்றவும்",
      contam_3: "ஈரப்பதம் இல்லாமல் உலர்ந்த நிலையில் வைக்கவும்"
    },
    yt_query: "பிளாஸ்டிக் மறுசுழற்சி முறைகள்",
    categories: {
      plastic: {
        name: "மறுசுழற்சி பிளாஸ்டிக் (PET/HDPE)",
        bin_name: "மஞ்சள் தொட்டி (Yellow Bin - உலர் கழிவுகள்)",
        dos: [
          "பாட்டிலில் உள்ள திரவங்களை தண்ணீரில் கழுவி சுத்தப்படுத்தவும்",
          "மறுசுழற்சி குறியீடு #1 (PET) அல்லது #2 (HDPE) சரிபார்க்கவும்",
          "இடத்தை சேமிக்க பிளாஸ்டிக் பாட்டில்களை அமுக்கி சுருக்கவும்",
          "பாட்டில் மூடிகளை இறுக்கமாக மூடி வைக்கவும்"
        ],
        donts: [
          "ஈரமான உணவு அல்லது சமையலறை கழிவுகளுடன் கலக்காதீர்கள்",
          "பிளாஸ்டிக்கை ஒருபோதும் திறந்த வெளியில் எரிக்காதீர்கள்",
          "எண்ணெய் படிந்த சிப்ஸ் பாக்கெட்டுகளை இதில் போடாதீர்கள்"
        ],
        fact: "ஒரே ஒரு பிளாஸ்டிக் பாட்டிலை மறுசுழற்சி செய்தால், 60W LED பல்பை 6 மணி நேரம் எரிய வைக்க முடியும்!"
      },
      paper: {
        name: "காகிதம் மற்றும் அட்டைப்பெட்டி",
        bin_name: "நீல தொட்டி (Blue Bin - காகித கழிவுகள்)",
        dos: [
          "அட்டைப் பெட்டிகளை தட்டையாக மடித்து வைக்கவும்",
          "பிளாஸ்டிக் டேப் மற்றும் ஒட்டும் தாள்களை அகற்றவும்",
          "செய்தித்தாள்கள் மற்றும் நோட்டுப் புத்தகங்களை சுத்தமாக அடுக்கவும்",
          "காகிதத்தை எப்போதும் நனையாமல் உலர்வாக வைத்திருக்கவும்"
        ],
        donts: [
          "எண்ணெய் படிந்த பீட்சா பெட்டிகளை இதில் போடாதீர்கள்",
          "ஏடிஎம் ரசீது காகிதங்களை இதில் போடாதீர்கள் (BPA ரசாயனம் கொண்டது)",
          "ஈரமான காகிதக் கூழை உலர் காகிதத்துடன் கலக்காதீர்கள்"
        ],
        fact: "1 டன் அட்டைப்பெட்டியை மறுசுழற்சி செய்வதன் மூலம் 17 மரங்கள் மற்றும் 7,000 கேலன் தண்ணீர் மிச்சமாகும்!"
      },
      glass: {
        name: "கண்ணாடி பாட்டில்கள் / குடுவைகள்",
        bin_name: "டீல் தொட்டி (Teal Bin - கண்ணாடி கழிவுகள்)",
        dos: [
          "கண்ணாடி பாட்டில்களை தண்ணீரில் நன்கு கழுவவும்",
          "உலோக மூடிகளை தனியாகப் பிரித்து போடவும்",
          "சாஸ் பாட்டில்கள் மற்றும் ஜாம் பாட்டில்களை மறுசுழற்சி செய்யவும்",
          "காயங்கள் ஏற்படாமல் உடையாமல் கவனமாக கையாளவும்"
        ],
        donts: [
          "பைரெக்ஸ் ஓவன் கண்ணாடி அல்லது பல்பு கண்ணாடிகளை கலக்காதீர்கள்",
          "உடைந்த முகம் பார்க்கும் கண்ணாடி அல்லது பீங்கான் கோப்பைகளை போடாதீர்கள்",
          "உடைந்த கண்ணாடி துண்டுகளை சாதாரணமாக எறியாதீர்கள்"
        ],
        fact: "கண்ணாடி தனது தரத்தை துளியும் இழக்காமல் எத்தனை முறை வேண்டுமானாலும் மறுசுழற்சி செய்யக்கூடியது!"
      },
      metal: {
        name: "உலோகம் மற்றும் அலுமினிய கேன்கள்",
        bin_name: "சாம்பல் நிற தொட்டி (Silver Grey Bin)",
        dos: [
          "குளிர்பான கேன்களை நீரினால் சுத்தம் செய்யவும்",
          "இடத்தை சேமிக்க அலுமினிய கேன்களை லேசாக அமுக்கவும்",
          "சுத்தமான அலுமினிய ஃபாயில் மற்றும் உலோக மூடிகளை போடவும்",
          "துருப்பிடிக்காமல் இருக்க உலர்வாக வைக்கவும்"
        ],
        donts: [
          "முழுமையாக காலியாகாத ஸ்ப்ரே கேன்களை போடாதீர்கள்",
          "நச்சு பெயிண்ட் அல்லது ஆயில் டப்பாக்களை இதில் போடாதீர்கள்",
          "கூர்மையான பிளேடுகளை பாதுகாப்பின்றி போடாதீர்கள்"
        ],
        fact: "அலுமினியத்தை மறுசுழற்சி செய்வது புதிய அலுமினியத்தை விட 95% குறைவான ஆற்றலையே பயன்படுத்துகிறது!"
      },
      organic: {
        name: "இயற்கை மக்கும் கழிவுகள் (Organic)",
        bin_name: "பச்சை தொட்டி (Green Bin - மக்கும் கழிவுகள்)",
        dos: [
          "பழத்தோல், காய்கறி கழிவுகள், தேயிலை கழிவுகளை சேர்க்கவும்",
          "காற்றோட்டமான உரத்தொட்டியில் போட்டு இயற்கை உரமாக மாற்றவும்",
          "உரம் விரைவாக மாற வாரத்திற்கு ஒருமுறை கிளறி விடவும்",
          "உலர் கழிவுகளுடன் கலக்காமல் தனியாக வைக்கவும்"
        ],
        donts: [
          "பிளாஸ்டிக் ஸ்டிக்கர்கள் அல்லது ரப்பர் பேண்டுகளை உரத்தொட்டியில் போடாதீர்கள்",
          "ரசாயனம் தெளிக்கப்பட்ட மரங்கள் அல்லது விஷ இலைகளை சேர்க்காதீர்கள்",
          "பிளாஸ்டிக் பைகளை ஈரக்கழிவுகளுடன் கலக்காதீர்கள்"
        ],
        fact: "ஈரக்கழிவுகள் காற்றில்லாமல் அழுகும்போது மீத்தேன் வாயு உருவாகிறது, இது CO₂-ஐ விட 28 மடங்கு ஆபத்தானது!"
      },
      "e-waste": {
        name: "மின்னணு கழிவுகள் (E-Waste)",
        bin_name: "ஆரஞ்சு/சிவப்பு தொட்டி (Hazardous E-Waste Kiosk)",
        dos: [
          "பழைய போன்கள், சார்ஜர்கள், மடிக்கணினிகளை அங்கீகரிக்கப்பட்ட மையத்தில் ஒப்படைக்கவும்",
          "லித்தியம் பேட்டரிகளின் இரு முனைகளிலும் பிளாஸ்டிக் டேப் ஒட்டவும்",
          "போன் மற்றும் கணினியிலுள்ள தனிப்பட்ட தகவல்களை பேக்டரி ரீசெட் செய்து அழிக்கவும்",
          "மின்னணு பாகங்களின் மறுபயன்பாட்டுக்கு ஆதரவளிக்கவும்"
        ],
        donts: [
          "லித்தியம் பேட்டரிகளை ஒருபோதும் உடைக்கவோ தீயில் போடவோ கூடாது",
          "வீட்டு குப்பை தொட்டியில் எலக்ட்ரானிக் பொருட்களை போடாதீர்கள்",
          "பேட்டரி திரவங்களை கழிவுநீரில் ஊற்றாதீர்கள்"
        ],
        fact: "ஒரு டன் சர்க்யூட் போர்டில், தங்கச் சுரங்கத்தில் தோண்டப்படும் பாறையை விட அதிக தங்கம் மற்றும் வெள்ளி உள்ளது!"
      }
    }
  },

  // 5. KANNADA
  kn: {
    lang_name: "ಕನ್ನಡ (Kannada)",
    flag: "🇮🇳",
    ui: {
      bin_label: "ಕಸದ ತೊಟ್ಟಿ",
      dos_title: "ಮಾಡಬೇಕಾದವು (Proper Do's)",
      donts_title: "ಮಾಡಬಾರದವು (Critical Don'ts)",
      contamination_title: "ಮಾಲಿನ್ಯ ತಡೆ ಪರಿಶೀಲನೆ",
      nearest_hub_title: "ಇದಕ್ಕಾಗಿ ಹತ್ತಿರದ ಮರುಬಳಕೆ ಕೇಂದ್ರ",
      navigate_maps_btn: "ಗೂಗಲ್ ಮ್ಯಾಪ್ಸ್‌ನಲ್ಲಿ ದಾರಿ ನೋಡಿ",
      view_on_radar_btn: "ಕೆಳಗಿನ ನಕ್ಷೆಯಲ್ಲಿ ನೋಡಿ",
      correct_it_label: "ತಪ್ಪು ವರ್ಗೀಕರಣವೇ? ಸರಿಪಡಿಸಿ ಮಾಡೆಲ್‌ಗೆ ತರಬೇತಿ ನೀಡಿ:",
      eco_fact_title: "ಪರಿಸರ ಸತ್ಯ",
      confidence_label: "ಖಚಿತತೆಯ ಶೇಕಡಾವಾರು",
      yt_title: "ಯೂಟ್ಯೂಬ್ ಮರುಬಳಕೆ ಮತ್ತು DIY ವೀಡಿಯೊಗಳು",
      yt_subtitle: "ಈ ತ್ಯಾಜ್ಯವನ್ನು ಹೇಗೆ ಮರುಬಳಕೆ ಮಾಡಬೇಕೆಂದು ತಿಳಿಯಲು ಹಂತ-ಹಂತದ ವೀಡಿಯೊಗಳನ್ನು ವೀಕ್ಷಿಸಿ",
      watch_yt_btn: "ವೀಡಿಯೊ ವೀಕ್ಷಿಸಿ",
      search_yt_btn: "ಯೂಟ್ಯೂಬ್‌ನಲ್ಲಿ ಇನ್ನಷ್ಟು ಹುಡುಕಿ",
      yt_badge: "ಯೂಟ್ಯೂಬ್ ಗೈಡ್ಸ್",
      contam_1: "ನೀರಿನಿಂದ ತೊಳೆದು ದ್ರವ ಅಥವಾ ಆಹಾರದ ಕಣಗಳನ್ನು ತೆಗೆಯಿರಿ",
      contam_2: "ಹೊರಗಿನ ಪ್ಲಾಸ್ಟಿಕ್ ಟೇಪ್ ಅಥವಾ ಸ್ಟಿಕ್ಕರ್‌ಗಳನ್ನು ತೆಗೆಯಿರಿ",
      contam_3: "ಬೂಷ್ಟು ಬರದಂತೆ ಸಂಪೂರ್ಣವಾಗಿ ಒಣಗಿಸಿಡಿ"
    },
    yt_query: "ಪ್ಲಾಸ್ಟಿಕ್ ಮರುಬಳಕೆ ವಿಧಾನ ಕನ್ನಡ",
    categories: {
      plastic: {
        name: "ಪ್ಲಾಸ್ಟಿಕ್ ಮರುಬಳಕೆ ತ್ಯಾಜ್ಯ (PET/HDPE)",
        bin_name: "ಹಳದಿ ತೊಟ್ಟಿ (Yellow Bin - ಒಣ ತ್ಯಾಜ್ಯ)",
        dos: [
          "ಬಾಟಲಿಯಲ್ಲಿ ಉಳಿದ ದ್ರವಗಳನ್ನು ನೀರಿನಿಂದ ಸ್ವಚ್ಛಗೊಳಿಸಿ",
          "PET #1 ಅಥವಾ HDPE #2 ಮರುಬಳಕೆ ಕೋಡ್ ಪರಿಶೀಲಿಸಿ",
          "ಸ್ಥಳ ಉಳಿಸಲು ಬಾಟಲಿಗಳನ್ನು ಕೈಯಿಂದ ಅದುಮಿ",
          "ಬಾಟಲಿ ಮುಚ್ಚಳಗಳನ್ನು ಬಿಗಿಯಾಗಿ ಮುಚ್ಚಿ ತೊಟ್ಟಿಗೆ ಹಾಕಿ"
        ],
        donts: [
          "ಹಸಿ ಅಡುಗೆ ಮನೆಯ ತ್ಯಾಜ್ಯದೊಂದಿಗೆ ಮಿಶ್ರಣ ಮಾಡಬೇಡಿ",
          "ಪ್ಲಾಸ್ಟಿಕ್ ಅನ್ನು ಎಂದಿಗೂ ಬಯಲಿನಲ್ಲಿ ಸುಡಬೇಡಿ",
          "ಎಣ್ಣೆ ಕಲೆಗಳಿರುವ ಚಿಪ್ಸ್ ಪ್ಯಾಕೆಟ್‌ಗಳನ್ನು ಇದರಲ್ಲಿ ಹಾಕಬೇಡಿ"
        ],
        fact: "ಒಂದೇ ಒಂದು ಪ್ಲಾಸ್ಟಿಕ್ ಬಾಟಲಿ ಮರುಬಳಕೆ ಮಾಡುವುದರಿಂದ 60W LED ಬಲ್ಬ್ ಅನ್ನು 6 ಗಂಟೆ ಬೆಳಗಿಸುವಷ್ಟು ವಿದ್ಯುತ್ ಉಳಿತಾಯವಾಗುತ್ತದೆ!"
      },
      paper: {
        name: "ಕಾಗದ ಮತ್ತು ಕಾರ್ಡ್‌ಬೋರ್ಡ್",
        bin_name: "ನೀಲಿ ತೊಟ್ಟಿ (Blue Bin - ಕಾಗದ ತ್ಯಾಜ್ಯ)",
        dos: [
          "ಕಾರ್ಡ್‌ಬೋರ್ಡ್ ಪೆಟ್ಟಿಗೆಗಳನ್ನು ಚಪ್ಪಟೆಯಾಗಿ ಮಡಚಿ",
          "ಪ್ಲಾಸ್ಟಿಕ್ ಟೇಪ್ ಮತ್ತು ಜಿಗುಟಾದ ಪಟ್ಟಿಗಳನ್ನು ತೆಗೆಯಿರಿ",
          "ದಿನಪತ್ರಿಕೆಗಳು ಮತ್ತು ಪುಸ್ತಕಗಳನ್ನು ಅಚ್ಚುಕಟ್ಟಾಗಿ ಜೋಡಿಸಿ",
          "ಕಾಗದ ಯಾವಾಗಲೂ ತೇವವಾಗದಂತೆ ಒಣಗಿಸಿಡಿ"
        ],
        donts: [
          "ಎಣ್ಣೆ ಅಥವಾ ಚೀಸ್ ಕಲೆಗಳಿರುವ ಪಿಜ್ಜಾ ಪೆಟ್ಟಿಗೆಗಳನ್ನು ಹಾಕಬೇಡಿ",
          "ರಾಸಾಯನಿಕ ಲೇಪನವಿರುವ ಎಟಿಎಂ ರಶೀದಿ ಕಾಗದಗಳನ್ನು ಹಾಕಬೇಡಿ",
          "ತೇವವಾದ ಕಾಗದದ ಮುದ್ದೆಗಳನ್ನು ಹಾಕಬೇಡಿ"
        ],
        fact: "1 ಟನ್ ಕಾರ್ಡ್‌ಬೋರ್ಡ್ ಮರುಬಳಕೆಯಿಂದ 17 ಮರಗಳು ಮತ್ತು 7,000 ಗ್ಯಾಲನ್ ನೀರು ಉಳಿತಾಯವಾಗುತ್ತದೆ!"
      },
      glass: {
        name: "ಗಾಜಿನ ಬಾಟಲಿಗಳು / ಪಾತ್ರೆಗಳು",
        bin_name: "ಟೀಲ್ ತೊಟ್ಟಿ (Teal Bin - ಗಾಜು ತ್ಯಾಜ್ಯ)",
        dos: [
          "ಗಾಜಿನ ಬಾಟಲಿಗಳನ್ನು ನೀರಿನಿಂದ ಚೆನ್ನಾಗಿ ತೊಳೆಯಿರಿ",
          "ಲೋಹದ ಮುಚ್ಚಳಗಳನ್ನು ಪ್ರತ್ಯೇಕಿಸಿ ಹಾಕಿ",
          "ಸಾಸ್ ಮತ್ತು ಜಾಮ್ ಬಾಟಲಿಗಳನ್ನು ಮರುಬಳಕೆ ಮಾಡಿ",
          "ಒಡೆಯದಂತೆ ಜಾಗರೂಕತೆಯಿಂದ ಸಾಗಿಸಿ"
        ],
        donts: [
          "ಓವನ್ ಗಾಜು (ಪೈರೆಕ್ಸ್) ಅಥವಾ ಬಲ್ಬ್ ಗಾಜುಗಳನ್ನು ಮಿಶ್ರಣ ಮಾಡಬೇಡಿ",
          "ಒಡೆದ ಕನ್ನಡಿ ಅಥವಾ ಪಿಂಗಾಣಿ ಕಪ್‌ಗಳನ್ನು ಗಾಜಿನ ತೊಟ್ಟಿಗೆ ಹಾಕಬೇಡಿ",
          "ಚೂರು ಗಾಜನ್ನು ತೆರೆದ ತೊಟ್ಟಿಯಲ್ಲಿ ಎಸೆಯಬೇಡಿ"
        ],
        fact: "ಗಾಜನ್ನು ಅದರ ಗುಣಮಟ್ಟ ಕುಂದದಂತೆ ನೂರಾರು ಬಾರಿ ಸಂಪೂರ್ಣವಾಗಿ ಮರುಬಳಕೆ ಮಾಡಬಹುದು!"
      },
      metal: {
        name: "ಲೋಹ ಮತ್ತು ಅಲ್ಯೂಮಿನಿಯಂ ಕ್ಯಾನ್",
        bin_name: "ಬೆಳ್ಳಿ / ಬೂದು ತೊಟ್ಟಿ (Silver Grey Bin)",
        dos: [
          "ಜ್ಯೂಸ್ ಮತ್ತು ಕೋಲ್ಡ್ ಡ್ರಿಂಕ್ ಕ್ಯಾನ್‌ಗಳನ್ನು ತೊಳೆದು ಒಣಗಿಸಿ",
          "ಜಾಗ ಉಳಿಸಲು ಅಲ್ಯೂಮಿನಿಯಂ ಕ್ಯಾನ್ ಅನ್ನು ಸ್ವಲ್ಪ ಅದುಮಿ",
          "ಶುದ್ಧ ಅಲ್ಯೂಮಿನಿಯಂ ಫಾಯಿಲ್ ಮತ್ತು ಬಾಟಲ್ ಮುಚ್ಚಳಗಳನ್ನು ಹಾಕಿ",
          "ತುಕ್ಕು ಹಿಡಿಯದಂತೆ ಒಣಗಿಸಿಡಿ"
        ],
        donts: [
          "ಒತ್ತಡವಿರುವ ಗ್ಯಾಸ್ ಸ್ಪ್ರೇ ಕ್ಯಾನ್‌ಗಳನ್ನು ಹಾಕಬೇಡಿ",
          "ವಿಷಕಾರಿ ಬಣ್ಣದ ಅಥವಾ ಎಣ್ಣೆಯ ಡಬ್ಬಿಗಳನ್ನು ಹಾಕಬೇಡಿ",
          "ರಕ್ಷಣೆ ಇಲ್ಲದೆ ಚೂಪಾದ ಬ್ಲೇಡ್‌ಗಳನ್ನು ಹಾಕಬೇಡಿ"
        ],
        fact: "ಹೊಸ ಅಲ್ಯೂಮಿನಿಯಂ ತಯಾರಿಸುವುದಕ್ಕಿಂತ ಹಳೆಯ ಕ್ಯಾನ್ ಮರುಬಳಕೆಯಿಂದ 95% ಕಡಿಮೆ ಶಕ್ತಿ ಬಳಕೆಯಾಗುತ್ತದೆ!"
      },
      organic: {
        name: "ಸಾವಯವ ಹಸಿ ಕಸ (Organic Waste)",
        bin_name: "ಹಸಿರು ತೊಟ್ಟಿ (Green Bin - ಹಸಿ ಕಸ)",
        dos: [
          "ಹಣ್ಣಿನ ಸಿಪ್ಪೆ, ತರಕಾರಿ ತ್ಯಾಜ್ಯ, ಚಹಾ ಪುಡಿ ಮತ್ತು ಒಣ ಎಲೆಗಳನ್ನು ಹಾಕಿ",
          "ಗಾಳಿಯಾಡುವ ಕಾಂಪೋಸ್ಟ್ ಬುಟ್ಟಿಯಲ್ಲಿ ಹಾಕಿ ಸಾವಯವ ಗೊಬ್ಬರ ತಯಾರಿಸಿ",
          "ಬೇಗ ಕೊಳೆಯಲು ವಾರಕ್ಕೊಮ್ಮೆ ತಿರುವಿ ಹಾಕಿ",
          "ಒಣ ತ್ಯಾಜ್ಯ ಮತ್ತು ಪ್ಲಾಸ್ಟಿಕ್‌ನಿಂದ ಬೇರ್ಪಡಿಸಿಡಿ"
        ],
        donts: [
          "ಪ್ಲಾಸ್ಟಿಕ್ ಸ್ಟಿಕ್ಕರ್‌ಗಳು, ರಬ್ಬರ್ ಬ್ಯಾಂಡ್‌ಗಳನ್ನು ಕಾಂಪೋಸ್ಟ್‌ಗೆ ಹಾಕಬೇಡಿ",
          "ರಾಸಾಯನಿಕವಿರುವ ಮರ ಅಥವಾ ಕ್ರಿಮಿನಾಶಕ ಸಿಂಪಡಿಸಿದ ಎಲೆಗಳನ್ನು ಹಾಕಬೇಡಿ",
          "ಪ್ಲಾಸ್ಟಿಕ್ ಚೀಲಗಳನ್ನು ಹಸಿ ಕಸದೊಂದಿಗೆ ಎಸೆಯಬೇಡಿ"
        ],
        fact: "ಹಸಿ ಕಸ ಆಮ್ಲಜನಕವಿಲ್ಲದೆ ಕೊಳೆತಾಗ ಮೀಥೇನ್ ಅನಿಲ ಉಂಟಾಗುತ್ತದೆ, ಇದು CO₂ ಗಿಂತ 28 ಪಟ್ಟು ಅಪಾಯಕಾರಿ!"
      },
      "e-waste": {
        name: "ವಿದ್ಯುನ್ಮಾನ ತ್ಯಾಜ್ಯ (E-Waste)",
        bin_name: "ಕಿತ್ತಳೆ / ಕೆಂಪು ತೊಟ್ಟಿ (Hazardous E-Waste Kiosk)",
        dos: [
          "ಹಳೆಯ ಫೋನ್‌ಗಳು, ಚಾರ್ಜರ್‌ಗಳು, ಲ್ಯಾಪ್‌ಟಾಪ್‌ಗಳನ್ನು ಅಧಿಕೃತ ಕೇಂದ್ರದಲ್ಲಿ ನೀಡಿ",
          "ಲಿಥಿಯಂ ಬ್ಯಾಟರಿಗಳ ತುದಿಗೆ ಸೆಲೋಟೇಪ್ ಅಂಟಿಸಿ",
          "ಫೋನ್ ಅಥವಾ ಕಂಪ್ಯೂಟರ್‌ನಿಂದ ವೈಯಕ್ತಿಕ ಡೇಟಾವನ್ನು ಫ್ಯಾಕ್ಟರಿ ರಿಸೆಟ್ ಮಾಡಿ",
          "ಉಪಕರಣಗಳ ಮರುಬಳಕೆಗೆ ಬೆಂಬಲ ನೀಡಿ"
        ],
        donts: [
          "ಲಿಥಿಯಂ ಬ್ಯಾಟರಿಗಳನ್ನು ಎಂದಿಗೂ ಒಡೆಯಬೇಡಿ ಅಥವಾ ಬೆಂಕಿಗೆ ಹಾಕಬೇಡಿ",
          "ಸಾಮಾನ್ಯ ಕಸದ ಬುಟ್ಟಿಯಲ್ಲಿ ಎಲೆಕ್ಟ್ರಾನಿಕ್ಸ್ ವಸ್ತುಗಳನ್ನು ಎಸೆಯಬೇಡಿ",
          "ಬ್ಯಾಟರಿ ಆಮ್ಲವನ್ನು ಚರಂಡಿಗಳಲ್ಲಿ ಸುರಿಯಬೇಡಿ"
        ],
        fact: "ಒಂದು ಟನ್ ಸರ್ಕ್ಯೂಟ್ ಬೋರ್ಡ್‌ನಲ್ಲಿ ಭೂಮಿಯ ಗಣಿಯಿಂದ ಸಿಗುವ ಅದಿರಿನಗಿಂತ ಹೆಚ್ಚು ಚಿನ್ನ ಮತ್ತು ಬೆಳ್ಳಿ ಇರುತ್ತದೆ!"
      }
    }
  },

  // 6. MALAYALAM
  ml: {
    lang_name: "മലയാളം (Malayalam)",
    flag: "🇮🇳",
    ui: {
      bin_label: "വേസ്റ്റ് ബിൻ",
      dos_title: "ചെയ്യേണ്ട കാര്യങ്ങൾ (Proper Do's)",
      donts_title: "ചെയ്യാൻ പാടില്ലാത്തവ (Critical Don'ts)",
      contamination_title: "മാലിന്യ നിയന്ത്രണ പരിശോധന",
      nearest_hub_title: "ഇതിനുള്ള അടുത്തുള്ള പുനരുപയോഗ കേന്ദ്രം",
      navigate_maps_btn: "ഗൂഗിൾ മാപ്പിൽ റൂട്ട് കാണുക",
      view_on_radar_btn: "താഴെയുള്ള മാപ്പിൽ കാണുക",
      correct_it_label: "തെറ്റായ പ്രവചനമാണോ? ശരിയാക്കി മോഡലിനെ പരിശീലിപ്പിക്കുക:",
      eco_fact_title: "പരിസ്ഥിതി വസ്തുത",
      confidence_label: "കൃത്യത ശതമാനം",
      yt_title: "യൂട്യൂബിലെ പുനരുപയോഗ വീഡിയോകൾ",
      yt_subtitle: "ഈ മാലിന്യം എങ്ങനെ റീസൈക്കിൾ ചെയ്യുന്നുവെന്ന് കാണിക്കുന്ന മികച്ച വീഡിയോകൾ",
      watch_yt_btn: "വീഡിയോ കാണുക",
      search_yt_btn: "യൂട്യൂബിൽ കൂടുതൽ തിരയുക",
      yt_badge: "യൂട്യൂബ് ഗൈഡ്",
      contam_1: "വെള്ളം ഉപയോഗിച്ച് കഴുകി അവശിഷ്ടങ്ങൾ കളയുക",
      contam_2: "പുറത്തെ പ്ലാസ്റ്റിക് ടേപ്പുകൾ നീക്കം ചെയ്യുക",
      contam_3: "പൂപ്പൽ വരാതിരിക്കാൻ ഉണക്കി സൂക്ഷിക്കുക"
    },
    yt_query: "മാലിന്യ പുനരുപയോഗം മലയാളം",
    categories: {
      plastic: {
        name: "പ്ലാസ്റ്റിക് പുനരുപയോഗ മാലിന്യം (PET/HDPE)",
        bin_name: "മഞ്ഞ ബിൻ (Yellow Bin - ഉണങ്ങിയ മാലിന്യം)",
        dos: [
          "കുപ്പികൾ വെള്ളം ഒഴിച്ച് കഴുകി വൃത്തിയാക്കുക",
          "റീസൈക്ലിംഗ് കോഡ് #1 അല്ലെങ്കിൽ #2 പരിശോധിക്കുക",
          "സ്ഥലം ലാഭിക്കാൻ കുപ്പികൾ അമർത്തി ചതക്കുക",
          "അടപ്പുകൾ മുറുക്കി അടച്ച് ബിന്നിൽ ഇടുക"
        ],
        donts: [
          "അടുക്കളയിലെ നനഞ്ഞ മാലിന്യവുമായി കലർത്തരുത്",
          "പ്ലാസ്റ്റിക് ഒരിക്കലും തുറസ്സായ സ്ഥലത്ത് കത്തിക്കരുത്",
          "എണ്ണമയമുള്ള കവറുകൾ ഇതിൽ ഇടരുത്"
        ],
        fact: "ഒരു പ്ലാസ്റ്റിക് കുപ്പി പുനരുപയോഗിച്ചാൽ ഒരു 60W LED ബൾബ് 6 മണിക്കൂർ കത്തിക്കാനുള്ള വൈദ്യുതി ലാഭിക്കാം!"
      },
      paper: {
        name: "പേപ്പറും കാർഡ്ബോർഡും",
        bin_name: "നീല ബിൻ (Blue Bin - പേപ്പർ സ്ട്രീം)",
        dos: [
          "കാർഡ്ബോർഡ് പെട്ടികൾ പരത്തി മടക്കി സൂക്ഷിക്കുക",
          "പ്ലാസ്റ്റിക് ടേപ്പുകളും സ്റ്റിക്കറുകളും മാറ്റുക",
          "പത്രങ്ങളും പുസ്തകങ്ങളും ഭംഗിയായി അടുക്കി വയ്ക്കുക",
          "പേപ്പർ എപ്പോഴും നനയാതെ ഉണങ്ങി സൂക്ഷിക്കുക"
        ],
        donts: [
          "എണ്ണയോ ചീസോ പുരണ്ട പിസ്സ ബോക്സുകൾ ഇതിൽ ഇടരുത്",
          "കെമിക്കൽ കോട്ടിംഗ് ഉള്ള എടിഎം രസീതുകൾ ഇടരുത്",
          "നനഞ്ഞ പേപ്പർ മറ്റ് പേപ്പറുകളുമായി ചേർക്കരുത്"
        ],
        fact: "1 ടൺ കാർഡ്ബോർഡ് പുനരുപയോഗിച്ചാൽ 17 മരങ്ങളും 7,000 ഗാലൻ വെള്ളവും ലാഭിക്കാം!"
      },
      glass: {
        name: "ഗ്ലാസ് കുപ്പികൾ / പാത്രങ്ങൾ",
        bin_name: "ടീൽ ബിൻ (Teal Bin - ഗ്ലാസ് സ്ട്രീം)",
        dos: [
          "ഗ്ലാസ് കുപ്പികൾ വെള്ളത്തിൽ നന്നായി കഴുകുക",
          "മെറ്റൽ അടപ്പുകൾ വേർതിരിച്ചു വയ്ക്കുക",
          "സോസ്, ജാം കുപ്പികൾ പുനരുപയോഗിക്കുക",
          "പൊട്ടാതെ സുരക്ഷിതമായി കൊണ്ടുപോവുക"
        ],
        donts: [
          "ഓവൻ ഗ്ലാസ് അല്ലെങ്കിൽ ബൾബുകൾ ഇതിൽ ഇടരുത്",
          "പൊട്ടിയ കണ്ണാടിയോ കപ്പുകളോ ഇതിൽ ഇടരുത്",
          "ചില്ലുകഷ്ണങ്ങൾ തുറന്ന നിലയിൽ ഉപേക്ഷിക്കരുത്"
        ],
        fact: "ഗുണനിലവാരം കുറയാതെ എത്ര തവണ വേണമെങ്കിലും റീസൈക്കിൾ ചെയ്യാവുന്ന ഒന്നാണ് ഗ്ലാസ്!"
      },
      metal: {
        name: "ലോഹങ്ങളും അലുമിനിയം ക്യാനുകളും",
        bin_name: "ഗ്രേ ബിൻ (Silver Grey Bin)",
        dos: [
          "ശീതളപാനീയ ക്യാനുകൾ കഴുകി വൃത്തിയാക്കുക",
          "സ്ഥലം ലാഭിക്കാൻ അലുമിനിയം ക്യാൻ ചെറുതായി അമർത്തുക",
          "ശുദ്ധമായ അലുമിനിയം ഫോയിൽ അടപ്പുകൾ ഇടുക",
          "തുരുമ്പെടുക്കാതെ ഉണക്കി സൂക്ഷിക്കുക"
        ],
        donts: [
          "തീരെ കാലിയാകാത്ത സ്പ്രേ ക്യാനുകൾ ഇടരുത്",
          "വിഷലിപ്തമായ പെയിന്റ് പാട്ടകൾ ഇതിൽ ഇടരുത്",
          "കൂർത്ത ബ്ലേഡുകൾ മൂടിയില്ലാതെ എറിയരുത്"
        ],
        fact: "പുതിയ അലുമിനിയം ഉണ്ടാക്കുന്നതിനേക്കാൾ 95% കുറവ് ഊർജ്ജം മതി പഴയ ക്യാൻ റീസൈക്കിൾ ചെയ്യാൻ!"
      },
      organic: {
        name: "ജൈവ പച്ചക്കറി മാലിന്യം (Organic)",
        bin_name: "പച്ച ബിൻ (Green Bin - ജൈവ മാലിന്യം)",
        dos: [
          "പഴത്തൊലി, പച്ചക്കറി അവശിഷ്ടങ്ങൾ, ചായപ്പൊടി എന്നിവ ഇടുക",
          "വായുസഞ്ചാരമുള്ള കമ്പോസ്റ്റ് ബിന്നിൽ ഇട്ട് വളമാക്കുക",
          "വേഗം ജീർണ്ണിക്കാൻ ആഴ്ചയിലൊരിക്കൽ ഇളക്കി കൊടുക്കുക",
          "പ്ലാസ്റ്റിക്കുമായി ചേർക്കാതെ വെവ്വേറെ സൂക്ഷിക്കുക"
        ],
        donts: [
          "പ്ലാസ്റ്റിക് സ്റ്റിക്കറുകൾ, റബ്ബർ ബാൻഡുകൾ എന്നിവ കമ്പോസ്റ്റിൽ ഇടരുത്",
          "കീടനാശിനി അടിച്ച ഇലകൾ ഇതിൽ ചേർക്കരുത്",
          "പ്ലാസ്റ്റിക് കവറുകൾ നനഞ്ഞ മാലിന്യത്തിൽ ഇടരുത്"
        ],
        fact: "ഭക്ഷണാവശിഷ്ടങ്ങൾ വായുവില്ലാതെ ചീയുമ്പോൾ മീഥെയ്ൻ വാതകം ഉണ്ടാകുന്നു, ഇത് CO₂ നേക്കാൾ 28 മടങ്ങ് അപകടകരമാണ്!"
      },
      "e-waste": {
        name: "ഇ-മാലിന്യം (E-Waste)",
        bin_name: "ഓറഞ്ച് / ചുവപ്പ് ബിൻ (Hazardous E-Waste Kiosk)",
        dos: [
          "പഴയ ഫോണുകൾ, ചാർജറുകൾ അംഗീകൃത കേന്ദ്രത്തിൽ ഏൽപ്പിക്കുക",
          "ലിഥിയം ബാറ്ററിയുടെ രണ്ടറ്റത്തും പ്ലാസ്റ്റിക് ടേപ്പ് ഒട്ടിക്കുക",
          "ഫോണിൽ നിന്നും കമ്പ്യൂട്ടറിൽ നിന്നും സ്വകാര്യ ഡാറ്റ ഫാക്ടറി റീസെറ്റ് ചെയ്യുക",
          "ഇലക്ട്രോണിക്സ് പാർട്സ് പുനരുപയോഗിക്കാൻ പ്രോത്സാഹിപ്പിക്കുക"
        ],
        donts: [
          "ലിഥിയം ബാറ്ററികൾ തല്ലിപ്പൊട്ടിക്കുകയോ കത്തിക്കുകയോ ചെയ്യരുത്",
          "സാധാരണ വേസ്റ്റ് ബിന്നുകളിൽ ഇലക്ട്രോണിക്സ് ഇടരുത്",
          "ബാറ്ററി ആസിഡ് ഓടകളിൽ ഒഴിക്കരുത്"
        ],
        fact: "ഒരു ടൺ സർക്യൂട്ട് ബോർഡിൽ നിന്ന് സ്വർണ്ണ ഖനിയിൽ നിന്ന് കിട്ടുന്നതിനേക്കാൾ കൂടുതൽ സ്വർണ്ണവും വെള്ളിയും ലഭിക്കും!"
      }
    }
  },

  // 7. MARATHI
  mr: {
    lang_name: "मराठी (Marathi)",
    flag: "🇮🇳",
    ui: {
      bin_label: "कचरा कुंडीचा प्रकार",
      dos_title: "काय करावे (Proper Do's)",
      donts_title: "काय करू नये (Critical Don'ts)",
      contamination_title: "प्रदूषण नियंत्रण तपासणी",
      nearest_hub_title: "या कचऱ्यासाठी जवळचे पुनर्वापर केंद्र",
      navigate_maps_btn: "गुगल मॅप्सवर रस्ता पहा",
      view_on_radar_btn: "खाली मॅपवर पहा",
      correct_it_label: "चुकीचे वर्गीकरण झाले का? दुरुस्त करून मॉडेलला शिकवा:",
      eco_fact_title: "पर्यावरण सत्य",
      confidence_label: "अचूकता टक्केवारी",
      yt_title: "युट्यूबवर पुनर्वापर आणि DIY व्हिडिओ",
      yt_subtitle: "हा कचरा कसा पुनर्वापर केला जातो आणि घरी क्राफ्ट कसे करावे हे पहा",
      watch_yt_btn: "व्हिडिओ पहा",
      search_yt_btn: "युट्यूबवर अधिक शोधा",
      yt_badge: "युट्यूब गाईड",
      contam_1: "पाण्याने धुवून आतील अन्न किंवा द्रव साफ करा",
      contam_2: "बाहेरील प्लास्टिक टेप किंवा स्टिकर्स काढून टाका",
      contam_3: "बुरशी टाळण्यासाठी पूर्णपणे कोरडे ठेवा"
    },
    yt_query: "कचरा पुनर्वापर पद्धती मराठी",
    categories: {
      plastic: {
        name: "प्लॅस्टिक पुनर्वापर कचरा (PET/HDPE)",
        bin_name: "पिवळा डबा (Yellow Bin - सुका कचरा)",
        dos: [
          "बाटलीतील पाणी किंवा द्रव स्वच्छ धुवून घ्या",
          "रीसायकलिंग कोड #1 किंवा #2 तपासा",
          "जागा वाचवण्यासाठी बाटल्या हाताने चपट्या करा",
          "बाटलीची झाकणे घट्ट लावून टाका"
        ],
        donts: [
          "ओल्या कचऱ्यामध्ये किंवा अन्नात मिसळू नका",
          "प्लॅस्टिक कधीही उघड्यावर जाळू नका",
          "तेलाचे चिप्स पाकीट यात टाकू नका"
        ],
        fact: "एक प्लास्टिक बाटली रीसायकल केल्याने 60W चा LED दिवा 6 तास चालवण्याइतकी वीज वाचते!"
      },
      paper: {
        name: "कागद आणि पुठ्ठा (Paper & Cardboard)",
        bin_name: "निळा डबा (Blue Bin - कागदी कचरा)",
        dos: [
          "पुठ्ठ्याचे बॉक्स चपटे करून घडी करा",
          "प्लॅस्टिक टेप आणि चिकट पट्ट्या काढून टाका",
          "वर्तमानपत्रे आणि वह्या नीट रचून ठेवा",
          "कागद नेहमी पावसापासून वाचवून कोरडा ठेवा"
        ],
        donts: [
          "तेलकट पिझ्झा बॉक्स कागदाच्या डब्यात टाकू नका",
          "केमिकल कोटिंग असलेले एटीएम बिल टाकू नका",
          "ओला झालेला कागद कोरड्या कागदात मिसळू नका"
        ],
        fact: "1 टन पुठ्ठा रीसायकल केल्याने 17 मोठी झाडे आणि 7,000 गॅलन पाणी वाचते!"
      },
      glass: {
        name: "काचेच्या बाटल्या / बरण्या",
        bin_name: "टील डबा (Teal Bin - काच कचरा)",
        dos: [
          "काचेच्या बाटल्या पाण्याने स्वच्छ धुवा",
          "धातूची झाकणे वेगळी करून टाका",
          "सॉस आणि जॅमच्या बाटल्या रीसायकल करा",
          "इजा टाळण्यासाठी न फुटता सुरक्षितपणे न्या"
        ],
        donts: [
          "ओव्हनची काच (पायरेक्स) किंवा बल्ब काच मिसळू नका",
          "फुटलेला आरसा किंवा चिनी मातीचे कप यात टाकू नका",
          "काचेचे तुकडे उघड्या डब्यात फेकू नका"
        ],
        fact: "काच गुणवत्तेत कोणताही तोटा न होता अनंत वेळा पूर्णपणे रीसायकल केली जाऊ शकते!"
      },
      metal: {
        name: "धातू आणि ॲल्युमिनियम कॅन",
        bin_name: "राखाडी डबा (Silver Grey Bin)",
        dos: [
          "कोल्डड्रिंक कॅन पाण्याने धुवून घ्या",
          "जागा वाचवण्यासाठी कॅन हलका दाबा",
          "स्वच्छ ॲल्युमिनियम फॉइल आणि झाकणे टाका",
          "गंज लागू नये म्हणून कोरडे ठेवा"
        ],
        donts: [
          "दबावाखालील स्प्रे कॅन जोपर्यंत रिकामे होत नाहीत तोपर्यंत टाकू नका",
          "विषारी रंगाचे डबे धातूच्या डब्यात टाकू नका",
          "धारदार ब्लेड उघड्यावर फेकू नका"
        ],
        fact: "नवीन ॲल्युमिनियम बनवण्यापेक्षा जुने कॅन रीसायकल केल्याने 95% कमी ऊर्जा लागते!"
      },
      organic: {
        name: "सेंद्रिय व ओला कचरा (Organic)",
        bin_name: "हिरवा डबा (Green Bin - ओला कचरा)",
        dos: [
          "फळांची साले, भाजीपाल्याचा कचरा, चहा पावडर टाका",
          "हवेशीर खत कुंडीत टाकून नैसर्गिक खत बनवा",
          "खत लवकर तयार होण्यासाठी आठवड्यातून एकदा हलवा",
          "सुख्या कचऱ्यापासून पूर्णपणे वेगळे ठेवा"
        ],
        donts: [
          "प्लॅस्टिक स्टिकर्स किंवा रबर बँड खतात टाकू नका",
          "कीटकनाशक फवारलेली पाने यात टाकू नका",
          "प्लॅस्टिक पिशव्या ओल्या कचऱ्यात टाकू नका"
        ],
        fact: "ओला कचरा ऑक्सिजनशिवाय सडतो तेव्हा मिथेन वायू तयार होतो, जो CO₂ पेक्षा 28 पट अधिक हानिकारक असतो!"
      },
      "e-waste": {
        name: "इलेक्ट्रॉनिक कचरा (E-Waste)",
        bin_name: "नारंगी / लाल डबा (Hazardous E-Waste Kiosk)",
        dos: [
          "जुने फोन, चार्जर, लॅपटॉप अधिकृत केंद्रात जमा करा",
          "लिथियम बॅटरीच्या टोकांवर सेलोटेप लावा",
          "फोन किंवा कॉम्प्युटरमधून वैयक्तिक डेटा फॅक्टरी रीसेट करा",
          "इलेक्ट्रॉनिक्सच्या पुनर्वापराला प्रोत्साहन द्या"
        ],
        donts: [
          "लिथियम बॅटरी कधीही तोडू नका किंवा आगीत टाकू नका",
          "घरातील साध्या कचऱ्यात इलेक्ट्रॉनिक्स टाकू नका",
          "बॅटरीचे ॲसिड गटारात वाहू देऊ नका"
        ],
        fact: "एक टन जुन्या सर्किट बोर्डमध्ये खाणीतून निघणाऱ्या दगडापेक्षा जास्त सोने आणि चांदी असते!"
      }
    }
  },

  // 8. BENGALI
  bn: {
    lang_name: "বাংলা (Bengali)",
    flag: "🇮🇳",
    ui: {
      bin_label: "ডাস্টবিনের ধরন",
      dos_title: "করণীয় (Proper Do's)",
      donts_title: "বর্জনীয় (Critical Don'ts)",
      contamination_title: "দূষণ প্রতিরোধ যাচাই",
      nearest_hub_title: "এই বর্জ্যের জন্য নিকটতম পুনর্ব্যবহার কেন্দ্র",
      navigate_maps_btn: "গুগল ম্যাপে দিকনির্দেশ দেখুন",
      view_on_radar_btn: "নিচের ম্যাপে দেখুন",
      correct_it_label: "ভুল শনাক্তকরণ? সংশোধন করে মডেলকে প্রশিক্ষণ দিন:",
      eco_fact_title: "পরিবেশগত তথ্য",
      confidence_label: "নির্ভুলতার হার",
      yt_title: "ইউটিউবে রিসাইক্লিং ও DIY ভিডিও",
      yt_subtitle: "এই বর্জ্য কীভাবে রিসাইকেল করা হয় এবং ঘরে কীভাবে ক্রাফট তৈরি করবেন তা দেখুন",
      watch_yt_btn: "ভিডিও দেখুন",
      search_yt_btn: "ইউটিউবে আরও খুঁজুন",
      yt_badge: "ইউটিউব গাইড",
      contam_1: "জল দিয়ে ধুয়ে খাবার বা তরল পরিষ্কার করুন",
      contam_2: "বাইরের প্লাস্টিক টেপ বা স্টিকার সরান",
      contam_3: "ছাতা বা ছত্রাক রোধে সম্পূর্ণ শুকনো রাখুন"
    },
    yt_query: "বর্জ্য পুনর্ব্যবহার পদ্ধতি বাংলা",
    categories: {
      plastic: {
        name: "প্লাস্টিক পুনর্ব্যবহারযোগ্য বর্জ্য (PET/HDPE)",
        bin_name: "হলুদ বিন (Yellow Bin - শুকনো বর্জ্য)",
        dos: [
          "বোতলের অবশিষ্ট তরল জল দিয়ে ধুয়ে ফেলুন",
          "রিসাইক্লিং কোড #1 বা #2 পরীক্ষা করুন",
          "জায়গা বাঁচাতে বোতলগুলি হাত দিয়ে চ্যাপ্টা করুন",
          "বোতলের ক্যাপ ভালো করে আটকে বিনে ফেলুন"
        ],
        donts: [
          "রান্নাঘরের ভেজা বর্জ্য বা খাবারের সাথে মেশাবেন না",
          "প্লাস্টিক কখনোই খোলা জায়গায় আগুনে পোড়াবেন না",
          "তেলযুক্ত চিপসের প্যাকেট শক্ত প্লাস্টিক বিনে ফেলবেন না"
        ],
        fact: "একটি প্লাস্টিকের বোতল রিসাইকেল করলে একটি 60W LED বাল্ব 6 ঘণ্টার বেশি জ্বালানোর মতো বিদ্যুৎ বাঁচে!"
      },
      paper: {
        name: "কাগজ এবং কার্ডবোর্ড (Paper & Cardboard)",
        bin_name: "নীল বিন (Blue Bin - কাগজের ধারা)",
        dos: [
          "কার্ডবোর্ডের বাক্সগুলি ভাঁজ করে চ্যাপ্টা করুন",
          "প্লাস্টিকের টেপ এবং আঠালো অংশ খুলে ফেলুন",
          "সংবাদপত্র ও খাতাগুলি পরিষ্কার করে সাজিয়ে রাখুন",
          "কাগজ সবসময় বৃষ্টি থেকে বাঁচিয়ে শুকনো রাখুন"
        ],
        donts: [
          "তেলমাখা পিৎজা বক্স কাগজের বিনে ফেলবেন না",
          "কেমিক্যাল দেওয়া এটিএম রসিদ ফেলবেন না",
          "ভেজা কাগজ শুকনো কাগজের সাথে মেশাবেন না"
        ],
        fact: "১ টন কার্ডবোর্ড রিসাইকেল করলে ১৭টি গাছ এবং ৭,০০০ গ্যালন জল বাঁচে!"
      },
      glass: {
        name: "কাচের বোতল ও পাত্র (Glass Containers)",
        bin_name: "টিল বিন (Teal Bin - কাচ বর্জ্য)",
        dos: [
          "কাচের পাত্রগুলি জল দিয়ে পরিষ্কার করে ধুয়ে নিন",
          "ধাতব ঢাকনা আলাদা বিনে ফেলুন",
          "সস ও জ্যামের কাচের বোতল পুনর্ব্যবহার করুন",
          "না ভেঙে সাবধানে নির্ধারিত স্থানে নিয়ে যান"
        ],
        donts: [
          "ওভেনের কাচ বা বাল্বের কাচ সাধারণ কাচে মেশাবেন না",
          "ভাঙা আয়না বা চিনামাটির কাপ কাচের বিনে ফেলবেন না",
          "কাচের টুকরো খোলা বিনে ফেলবেন না"
        ],
        fact: "কাচ কোনো গুণগত মান না হারিয়ে অগণিত বার সম্পূর্ণ পুনর্ব্যবহারযোগ্য!"
      },
      metal: {
        name: "ধাতু এবং অ্যালুমিনিয়াম ক্যান",
        bin_name: "ধূসর বিন (Silver Grey Bin)",
        dos: [
          "কোল্ড ড্রিঙ্কসের ক্যান জল দিয়ে ধুয়ে নিন",
          "জায়গা বাঁচাতে অ্যালুমিনিয়াম ক্যান হালকা চাপ দিয়ে ছোট করুন",
          "পরিষ্কার অ্যালুমিনিয়াম ফয়েল ও ধাতব ক্যাপ ফেলুন",
          "মরিচা রোধ করতে শুকনো রাখুন"
        ],
        donts: [
          "পুরোপুরি খালি না হওয়া পর্যন্ত স্প্রে ক্যান ফেলবেন না",
          "বিষাক্ত রঙের ক্যান সাধারণ ধাতব বিনে ফেলবেন না",
          "ধারালো ব্লেড কভার ছাড়া ফেলবেন না"
        ],
        fact: "নতুন অ্যালুমিনিয়াম তৈরির চেয়ে পুরোনো ক্যান রিসাইকেল করতে ৯৫% কম শক্তি লাগে!"
      },
      organic: {
        name: "জৈব ও পচনশীল বর্জ্য (Organic)",
        bin_name: "সবুজ বিন (Green Bin - ভেজা বর্জ্য)",
        dos: [
          "ফল-সবজির খোসা, ব্যবহৃত চা পাতা ও পাতা জমা করুন",
          "হাওয়া চলাচল করে এমন কম্পোস্ট পাত্রে রেখে সার তৈরি করুন",
          "সার দ্রুত তৈরি করতে সপ্তাহে একবার নেড়ে দিন",
          "শুকনো প্লাস্টিক ও প্যাকেজিং থেকে আলাদা রাখুন"
        ],
        donts: [
          "প্লাস্টিক স্টিকার বা রাবার ব্যান্ড কম্পোস্টে ফেলবেন না",
          "কীটনাশক দেওয়া পাতা এতে মেশাবেন না",
          "প্লাস্টিক ব্যাগ ভেজা বর্জ্যের সাথে ফেলবেন না"
        ],
        fact: "ভেজা বর্জ্য বাতাস ছাড়া পচলে মিথেন গ্যাস তৈরি হয়, যা CO₂-এর চেয়ে ২৮ গুণ বেশি ক্ষতিকর!"
      },
      "e-waste": {
        name: "ইলেকট্রনিক বর্জ্য (E-Waste)",
        bin_name: "কমলা / লাল বিন (Hazardous E-Waste Kiosk)",
        dos: [
          "পুরোনো ফোন, চার্জার, ল্যাপটপ অনুমোদিত ই-বর্জ্য কেন্দ্রে জমা দিন",
          "লিথিয়াম ব্যাটারির দুই প্রান্তে সেলোটেপ লাগিয়ে দিন",
          "ফোন বা কম্পিউটার থেকে ব্যক্তিগত তথ্য ফ্যাক্টরি রিসেট করে মুছুন",
          "ইলেকট্রনিক যন্ত্রাংশের পুনর্ব্যবহারে সহায়তা করুন"
        ],
        donts: [
          "লিথিয়াম ব্যাটারি কখনোই ভাঙবেন না বা আগুনে ফেলবেন না",
          "বাড়ির সাধারণ ডাস্টবিনে ইলেকট্রনিক্স ফেলবেন না",
          "ব্যাটারির অ্যাসিড বা রাসায়নিক নর্দমায় ঢালবেন না"
        ],
        fact: "এক টন পুরোনো সার্কিট বোর্ডে খনি থেকে উত্তোলিত পাথরের চেয়েও বেশি সোনা ও রূপা থাকে!"
      }
    }
  },

  // 9. SPANISH
  es: {
    lang_name: "Español (Spanish)",
    flag: "🇪🇸",
    ui: {
      bin_label: "Contenedor",
      dos_title: "Qué Hacer (Proper Do's)",
      donts_title: "Qué Evitar (Critical Don'ts)",
      contamination_title: "Control de Prevención de Contaminación",
      nearest_hub_title: "Punto Limpio / Centro Más Cercano",
      navigate_maps_btn: "Abrir en Google Maps (Ruta paso a paso)",
      view_on_radar_btn: "Ver en el mapa de abajo",
      correct_it_label: "¿Predicción incorrecta? Corrígela para entrenar la IA:",
      eco_fact_title: "Dato Ecológico",
      confidence_label: "Nivel de Confianza",
      yt_title: "Guías de Reciclaje y Tutoriales DIY en YouTube",
      yt_subtitle: "Descubre cómo se procesa este material y tutoriales creativos de suprarreciclaje",
      watch_yt_btn: "Ver Video",
      search_yt_btn: "Buscar más en YouTube",
      yt_badge: "Guías YouTube",
      contam_1: "Enjuagar y vaciar completamente de residuos líquidos o comida",
      contam_2: "Quitar cintas adhesivas exteriores o envoltorios plásticos",
      contam_3: "Mantener completamente seco para evitar moho en el papel"
    },
    yt_query: "como reciclar botellas plastico manualidades paso a paso",
    categories: {
      plastic: {
        name: "Plástico Reciclable (PET/HDPE)",
        bin_name: "Contenedor Amarillo (Envases y Plásticos)",
        dos: [
          "Enjuagar con agua para retirar restos azucarados o grasos",
          "Verificar códigos de resina #1 (PET) o #2 (HDPE)",
          "Aplastar o comprimir botellas para optimizar espacio",
          "Dejar los tapones enroscados en las botellas"
        ],
        donts: [
          "No mezclar con basura orgánica o restos de cocina húmedos",
          "Nunca quemar plásticos al aire libre",
          "Evitar bolsas multicapa de patatas fritas en contenedores rígidos"
        ],
        fact: "¡Reciclar una sola botella de plástico ahorra energía para iluminar una bombilla LED de 60W durante más de 6 horas!"
      },
      paper: {
        name: "Papel y Cartón Ondulado",
        bin_name: "Contenedor Azul (Papel y Cartón)",
        dos: [
          "Plegar y aplanar todas las cajas de cartón para ahorrar volumen",
          "Retirar cintas de embalar plásticas y grapas metálicas gruesas",
          "Apilar periódicos, revistas y folios de oficina limpios",
          "Mantener el papel siempre seco y resguardado de la lluvia"
        ],
        donts: [
          "No tirar cajas de pizza grasientas o manchadas de aceite",
          "Evitar tickets térmicos de compra (contienen revestimiento de BPA)",
          "Nunca mezclar papel mojado o enmohecido con papel limpio"
        ],
        fact: "¡Reciclar 1 tonelada de cartón salva 17 árboles maduros, 7.000 galones de agua y 4.000 kW de electricidad!"
      },
      glass: {
        name: "Envases y Tarros de Vidrio",
        bin_name: "Contenedor Verde / Turquesa (Vidrio)",
        dos: [
          "Enjuagar para retirar restos de salsas, vino o alimentos",
          "Separar las tapas metálicas y tapones de corcho",
          "Reciclar botellas de bebidas, frascos de conserva y cosméticos",
          "Transportar envases enteros para evitar lesiones"
        ],
        donts: [
          "Nunca mezclar platos Pyrex, bombillas ni cristales de ventanas",
          "No tirar espejos rotos ni tazas de cerámica en el contenedor de vidrio",
          "Evitar arrojar cristales rotos sin protección"
        ],
        fact: "¡El vidrio es 100% reciclable y puede fundirse infinitas veces sin perder pureza ni calidad!"
      },
      metal: {
        name: "Metales y Latas de Aluminio",
        bin_name: "Contenedor Amarillo / Gris (Metales)",
        dos: [
          "Enjuagar las latas de refrescos y conservas con agua",
          "Comprimir ligeramente las latas de aluminio para ahorrar espacio",
          "Reciclar papel de aluminio limpio y chapas metálicas",
          "Mantener seco para evitar la oxidación prematura"
        ],
        donts: [
          "No incluir aerosoles a menos que estén completamente vacíos",
          "Nunca tirar latas con pintura o restos tóxicos al desecho común",
          "Evitar desechar cuchillas afiladas sin envoltorio protector"
        ],
        fact: "¡Reciclar aluminio consume un 95% menos de energía que extraer bauxita para fabricar aluminio nuevo!"
      },
      organic: {
        name: "Residuos Orgánicos y Compostables",
        bin_name: "Contenedor Marrón (Orgánica / Compost)",
        dos: [
          "Depositar cáscaras de frutas, restos de verduras y posos de café",
          "Utilizar composteras aireadas para obtener abono natural",
          "Remover el compost periódicamente para favorecer la descomposición",
          "Mantener separado de envases y plásticos secos"
        ],
        donts: [
          "No tirar pegatinas de frutas, gomas elásticas ni grapas al compost",
          "Evitar maderas tratadas químicamente o plantas enfermas",
          "Nunca mezclar bolsas plásticas no biodegradables"
        ],
        fact: "¡Cuando la comida se descompone en vertederos sin oxígeno produce metano, un gas 28 veces más contaminante que el CO₂!"
      },
      "e-waste": {
        name: "Residuos Electrónicos (RAEE)",
        bin_name: "Punto Limpio / Contenedor Naranja (RAEE)",
        dos: [
          "Llevar móviles, cargadores, cables y ordenadores a puntos limpios",
          "Tapar los polos de las baterías de litio con cinta aislante",
          "Restablecer de fábrica los dispositivos antes de entregarlos",
          "Fomentar la reutilización de componentes y la economía circular"
        ],
        donts: [
          "Nunca golpear, perforar ni quemar baterías de litio",
          "No tirar aparatos electrónicos a la basura doméstica general",
          "Nunca verter ácidos o electrolitos por el desagüe"
        ],
        fact: "¡Una tonelada de placas de circuito contiene más oro, cobre y paladio que varias toneladas de mineral extraído en minas!"
      }
    }
  },

  // 10. FRENCH
  fr: {
    lang_name: "Français (French)",
    flag: "🇫🇷",
    ui: {
      bin_label: "Bac de Tri",
      dos_title: "Bonnes Pratiques (Proper Do's)",
      donts_title: "Erreurs à Éviter (Critical Don'ts)",
      contamination_title: "Contrôle Anti-Contamination",
      nearest_hub_title: "Point d'Apport / Déchetterie la Plus Proche",
      navigate_maps_btn: "Ouvrir dans Google Maps (Itinéraire)",
      view_on_radar_btn: "Voir sur la carte ci-dessous",
      correct_it_label: "Erreur de prédiction ? Corrigez pour entraîner le modèle :",
      eco_fact_title: "Fait Écologique",
      confidence_label: "Indice de Confiance",
      yt_title: "Guides et Tutoriels Recyclage & DIY sur YouTube",
      yt_subtitle: "Découvrez le procédé industriel de recyclage et des idées créatives de surcyclage",
      watch_yt_btn: "Regarder la Vidéo",
      search_yt_btn: "Rechercher sur YouTube",
      yt_badge: "Guides YouTube",
      contam_1: "Rincer et vider de tout résidu liquide ou alimentaire",
      contam_2: "Retirer les rubans adhésifs et emballages plastiques",
      contam_3: "Conserver bien sec pour éviter la moisissure du papier"
    },
    yt_query: "comment recycler le plastique tutoriel DIY",
    categories: {
      plastic: {
        name: "Plastique Recyclable (PET/HDPE)",
        bin_name: "Bac Jaune (Emballages et Plastiques)",
        dos: [
          "Bien vider et rincer sommairement les bouteilles",
          "Vérifier les logos de résine #1 (PET) ou #2 (HDPE)",
          "Compresser les bouteilles pour économiser de la place",
          "Laisser les bouchons vissés sur les bouteilles"
        ],
        donts: [
          "Ne pas mélanger avec les déchets de cuisine humides",
          "Ne jamais incinérer de plastique à l'air libre",
          "Éviter les sachets multicouches de chips dans le bac rigide"
        ],
        fact: "Recycler une seule bouteille en plastique permet d'économiser l'énergie nécessaire pour allumer une ampoule LED de 60W pendant 6 heures !"
      },
      paper: {
        name: "Papier et Carton Ondulé",
        bin_name: "Bac Bleu / Jaune (Papiers et Cartons)",
        dos: [
          "Aplatir les cartons d'emballage pour optimiser l'espace",
          "Retirer les gros rubans adhésifs en plastique",
          "Empiler proprement journaux, revues et cahiers",
          "Garder le papier propre et parfaitement sec"
        ],
        donts: [
          "Ne pas jeter de boîtes à pizza souillées de graisse ou de fromage",
          "Éviter les tickets de caisse thermiques (contenant du BPA)",
          "Ne jamais mettre de papier mouillé ou moisi"
        ],
        fact: "Recycler 1 tonne de carton permet d'épargner 17 arbres adultes, 26 000 litres d'eau et 4 000 kW d'électricité !"
      },
      glass: {
        name: "Bouteilles et Bocaux en Verre",
        bin_name: "Conteneur à Verre (Bac Vert / Sarcelle)",
        dos: [
          "Bien rincer pour retirer les sauces et résidus",
          "Séparer les couvercles en métal et bouchons en liège",
          "Recycler bouteilles de vin, pots de confiture et flacons",
          "Transporter les contenants intacts pour éviter les coupures"
        ],
        donts: [
          "Ne jamais mélanger la vaisselle en Pyrex, ampoules ou vitres",
          "Ne pas jeter de miroirs brisés ou de tasses en céramique",
          "Éviter de jeter du verre brisé en vrac"
        ],
        fact: "Le verre est 100 % recyclable et peut être refondu à l'infini sans aucune altération de qualité !"
      },
      metal: {
        name: "Métaux et Canettes Aluminium",
        bin_name: "Bac Jaune / Gris (Métaux)",
        dos: [
          "Rincer les boîtes de conserve et canettes de boisson",
          "Écraser légèrement les canettes d'aluminium pour gagner de la place",
          "Recycler feuilles d'aluminium propres et capsules métalliques",
          "Garder au sec pour empêcher l'oxydation prématurée"
        ],
        donts: [
          "Ne pas jeter d'aérosols non vidés de leur gaz",
          "Ne jamais mettre de pots de peinture toxique dans les métaux",
          "Éviter les lames tranchantes sans emballage de protection"
        ],
        fact: "Recycler l'aluminium nécessite 95 % d'énergie en moins que l'extraction de minerai de bauxite vierge !"
      },
      organic: {
        name: "Déchets Organiques et Compostables",
        bin_name: "Bac Marron / Vert (Biodéchets & Compost)",
        dos: [
          "Collecter épluchures, marc de café et restes végétaux",
          "Placer dans un composteur aéré pour fabriquer du terreau",
          "Aérer et mélanger le compost une fois par semaine",
          "Séparer rigoureusement des plastiques et emballages"
        ],
        donts: [
          "Ne pas mettre d'étiquettes de fruits, élastiques ou agrafes",
          "Éviter les bois traités chimiquement ou les végétaux malades",
          "Ne jamais mélanger de sacs plastiques non certifiés compostables"
        ],
        fact: "Lorsque les biodéchets pourrissent sans oxygène, ils produisent du méthane, un gaz 28 fois plus puissant que le CO₂ !"
      },
      "e-waste": {
        name: "Déchets Électroniques (DEEE)",
        bin_name: "Point d'Apport Spécifique / Bac Orange (DEEE)",
        dos: [
          "Déposer vieux téléphones, chargeurs et ordinateurs en déchetterie",
          "Protéger les bornes des batteries au lithium avec du ruban adhésif",
          "Effectuer une réinitialisation d'usine pour effacer vos données",
          "Encourager la réparation et le réemploi solidaire des composants"
        ],
        donts: [
          "Ne jamais percer, écraser ou brûler une batterie au lithium",
          "Ne jamais jeter d'électronique dans la poubelle ménagère",
          "Ne jamais déverser d'électrolytes ou d'acides dans les canalisations"
        ],
        fact: "Une tonne de cartes électroniques renferme plus d'or, d'argent et de cuivre que plusieurs tonnes de minerai extrait en carrière !"
      }
    }
  },

  // 11. GERMAN
  de: {
    lang_name: "Deutsch (German)",
    flag: "🇩🇪",
    ui: {
      bin_label: "Abfalltonne",
      dos_title: "Richtig Trennen (Proper Do's)",
      donts_title: "Wichtige Verbote (Critical Don'ts)",
      contamination_title: "Anti-Kontaminations-Prüfung",
      nearest_hub_title: "Nächster Wertstoffhof / Abgabestelle",
      navigate_maps_btn: "In Google Maps öffnen (Routenführung)",
      view_on_radar_btn: "Unten auf der Karte anzeigen",
      correct_it_label: "Falsche Erkennung? Korrigieren und KI trainieren:",
      eco_fact_title: "Öko-Fakt",
      confidence_label: "Konfidenzwert",
      yt_title: "YouTube Recycling- & DIY-Anleitungen",
      yt_subtitle: "Sehen Sie, wie dieses Material industriell aufbereitet wird und kreative Upcycling-Ideen",
      watch_yt_btn: "Video ansehen",
      search_yt_btn: "Mehr auf YouTube suchen",
      yt_badge: "YouTube Guides",
      contam_1: "Restlos entleert und grob von Speiseresten befreit",
      contam_2: "Klebebänder und nicht recycelbare Folien entfernt",
      contam_3: "Vollständig trocken halten, um Schimmelbildung zu vermeiden"
    },
    yt_query: "plastik recycling anleitung upcycling deutsch",
    categories: {
      plastic: {
        name: "Wertstoff / Plastik Recycelbar (PET/HDPE)",
        bin_name: "Gelbe Tonne / Gelber Sack (Wertstoffe)",
        dos: [
          "Flaschen und Behälter löffelrein entleeren und kurz ausspülen",
          "Auf Recycling-Codes #1 (PET) oder #2 (HDPE) achten",
          "Flaschen zusammendrücken, um Platz im Sammelbehälter zu sparen",
          "Schraubverschlüsse auf den Flaschen lassen"
        ],
        donts: [
          "Niemals mit feuchtem Küchenabfall vermischen",
          "Plastikabfälle niemals im Freien verbrennen",
          "Stark fettige Chipstüten nicht in die sortenreine Wertstofftonne werfen"
        ],
        fact: "Das Recycling einer einzigen Plastikflasche spart genug Energie, um eine 60W LED-Lampe über 6 Stunden lang zu betreiben!"
      },
      paper: {
        name: "Altpapier und Wellpappe",
        bin_name: "Blaue Tonne (Altpapier)",
        dos: [
          "Pappkartons vor dem Einwurf flach zusammenfalten",
          "Große Plastikklebebänder und Luftpolsterfolien entfernen",
          "Zeitungen, Zeitschriften und Notizhefte sauber stapeln",
          "Papier stets trocken vor Regen geschützt lagern"
        ],
        donts: [
          "Fettige Pizzakartons mit Käseresten gehören in den Restmüll",
          "Kassenbons aus Thermopapier (enthalten BPA) nicht ins Altpapier",
          "Nasses oder verschimmeltes Papier niemals untermischen"
        ],
        fact: "Das Recycling von 1 Tonne Pappe rettet 17 ausgewachsene Bäume, 26.000 Liter Wasser und 4.000 kW Strom!"
      },
      glass: {
        name: "Behälterglas und Gläser",
        bin_name: "Altglascontainer (Grün/Teal)",
        dos: [
          "Gläser gründlich von Saucen- und Weinresten befreien",
          "Schraubdeckel aus Metall separat in die Wertstofftonne geben",
          "Flaschen nach Farben trennen (Weiß-, Braun- und Grünglas)",
          "Ganze Flaschen vorsichtig transportieren, um Verletzungen zu vermeiden"
        ],
        donts: [
          "Niemals hitzebeständiges Pyrex-Geschirr, Glühbirnen oder Fensterglas einwerfen",
          "Keine zerbrochenen Spiegel oder Keramiktassen in den Glascontainer",
          "Keine Scherben lose in die Straßentonnen werfen"
        ],
        fact: "Glas ist zu 100 % recycelbar und kann unendlich oft ohne jeden Qualitätsverlust neu eingeschmolzen werden!"
      },
      metal: {
        name: "Metalle und Aluminiumdosen",
        bin_name: "Gelbe Tonne / Wertstofftonne (Metalle)",
        dos: [
          "Getränkedosen und Konserven kurz mit Spülwasser auswaschen",
          "Aludosen leicht zusammendrücken, um Behältervolumen zu sparen",
          "Saubere Alufolien und Kronkorken sammeln",
          "Trocken halten, um Rostbildung zu verhindern"
        ],
        donts: [
          "Keine Spraydosen einwerfen, solange sie unter Druck stehen",
          "Dosen mit getrockneten giftigen Lacken gehören zum Sondermüll",
          "Scharfe Klingen niemals ohne Schutzverpackung entsorgen"
        ],
        fact: "Aluminium-Recycling benötigt 95 % weniger Energie als die Gewinnung von Primäraluminium aus Bauxiterz!"
      },
      organic: {
        name: "Organische Bioabfälle (Kompost)",
        bin_name: "Braune / Grüne Tonne (Biotonne)",
        dos: [
          "Obstschalen, Gemüsereste, Kaffeesatz und Laub sammeln",
          "In belüfteten Kompostern zu natürlichem Humus zersetzen",
          "Den Kompost wöchentlich umschichten, um Luft zuzuführen",
          "Stets getrennt von Plastik und Verpackungen halten"
        ],
        donts: [
          "Keine Plastikaufkleber von Obst oder Drahtverschlüsse einwerfen",
          "Kein chemisch behandeltes Holz oder kranke Gartenpflanzen",
          "Niemals herkömmliche Plastiktüten in die Biotonne werfen"
        ],
        fact: "Wenn Bioabfälle auf Deponien ohne Sauerstoff verfaulen, entsteht Methan – 28-mal klimaschädlicher als CO₂!"
      },
      "e-waste": {
        name: "Elektronikschrott (E-Schrott)",
        bin_name: "Wertstoffhof / E-Schrott-Container",
        dos: [
          "Altgeräte, Handys, Ladekabel und Netzteile zum Wertstoffhof bringen",
          "Pole von Lithium-Ionen-Akkus mit Klebeband isolieren",
          "Vor der Abgabe private Daten durch Werksreset löschen",
          "Reparatur und Weiterverwendung funktionstüchtiger Bauteile fördern"
        ],
        donts: [
          "Lithium-Akkus niemals beschädigen, öffnen oder ins Feuer werfen",
          "Elektrogeräte keinesfalls in den normalen Hausmüll werfen",
          "Batteriesäuren oder Elektrolyte niemals in den Abfluss gießen"
        ],
        fact: "Eine Tonne alter Leiterplatten enthält mehr Gold, Kupfer und Palladium als mehrere Tonnen abgebautes Gesteinserz!"
      }
    }
  }
};

/**
 * Helper to fetch translation data for a given category and language.
 */
function getGreenScanTranslation(category, lang = "en") {
  const l = GreenScanTranslations[lang] || GreenScanTranslations.en;
  const cat = (category || "plastic").toLowerCase();
  const categoryData = (l.categories && l.categories[cat]) 
    ? l.categories[cat] 
    : GreenScanTranslations.en.categories[cat];

  return {
    ui: l.ui || GreenScanTranslations.en.ui,
    data: categoryData,
    yt_query: l.yt_query || GreenScanTranslations.en.yt_query,
    flag: l.flag || "🌐",
    lang_name: l.lang_name || "English"
  };
}

/**
 * Returns curated YouTube video recommendations for a waste category.
 */
function getYouTubeRecyclingVideos(category) {
  const cat = (category || "plastic").toLowerCase();
  return RECYCLING_YOUTUBE_VIDEOS[cat] || RECYCLING_YOUTUBE_VIDEOS.plastic;
}
