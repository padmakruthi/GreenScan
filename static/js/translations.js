/**
 * GreenScan - Multilingual Waste Recycling Guidance System
 * Supports: English (en), Telugu (te - తెలుగు), Hindi (hi - हिंदी)
 */

const GreenScanTranslations = {
  en: {
    lang_name: "English",
    ui: {
      bin_label: "Bin Stream",
      dos_title: "Proper Do's",
      donts_title: "Critical Don'ts",
      contamination_title: "Contamination Prevention Check",
      nearest_hub_title: "Nearest Drop-off Center for This Item",
      navigate_maps_btn: "Open in Google Maps (Turn-by-turn Directions)",
      view_on_radar_btn: "View on Radar Below",
      correct_it_label: "Wrong prediction? Correct it to train the model:",
      eco_fact_title: "Eco Fact",
      confidence_label: "Confidence Score"
    },
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

  te: {
    lang_name: "తెలుగు (Telugu)",
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
      confidence_label: "ఖచ్చితత్వ శాతం"
    },
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

  hi: {
    lang_name: "हिंदी (Hindi)",
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
      confidence_label: "सटीकता प्रतिशत"
    },
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
  }
};

function getGreenScanTranslation(category, lang = "en") {
  const l = GreenScanTranslations[lang] || GreenScanTranslations.en;
  const cat = (category || "plastic").toLowerCase();
  return {
    ui: l.ui,
    data: (l.categories && l.categories[cat]) ? l.categories[cat] : GreenScanTranslations.en.categories[cat]
  };
}
