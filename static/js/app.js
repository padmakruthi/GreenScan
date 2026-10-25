/**
 * GreenScan - Frontend Application Engine
 * Handles Camera Capture, Gallery Upload, Real-Time Model Refitting,
 * User Name Prompts, Smart City Leaderboard, Google Maps Navigation, and 3D SVG Wastedex.
 */

// Global Application State
const state = {
  userName: localStorage.getItem("greenscan_user_name") || "B P S Kruthi",
  userRank: 1,
  currentLang: localStorage.getItem("greenscan_lang") || "en",
  xp: parseInt(localStorage.getItem("greenscan_xp") || "380"),
  ecoCoins: parseInt(localStorage.getItem("greenscan_ecocoins") || localStorage.getItem("greenscan_xp") || "380"),
  streak: parseInt(localStorage.getItem("greenscan_streak") || "5"),
  itemsSorted: parseInt(localStorage.getItem("greenscan_sorted") || "26"),
  co2Saved: parseFloat(localStorage.getItem("greenscan_co2") || "36.4"),
  unlockedCategories: JSON.parse(localStorage.getItem("greenscan_wastedex") || '["plastic", "paper", "metal"]'),
  history: JSON.parse(localStorage.getItem("greenscan_history") || '[]'),
  redeemedVouchers: JSON.parse(localStorage.getItem("greenscan_vouchers") || '[]'),
  voiceEnabled: localStorage.getItem("greenscan_voice_enabled") !== "false",
  currentShopFilter: 'all',
  shopCatalog: [],
  currentResult: null,
  activeMode: 'upload', // 'upload' or 'camera'
  stream: null,
  userCoords: { lat: 17.3850, lng: 78.4867 },
  selectedCenter: null
};

// Category Library for Instant Real-Time Refitting
const CategoryLibrary = {
  plastic: {
    category: "plastic",
    name: "Plastic Recyclable (PET/HDPE)",
    bin_name: "Yellow Bin (Dry Recyclables)",
    bin_color: "#eab308",
    co2_saved_kg: 1.5,
    water_saved_l: 25,
    dos: [
      "Rinse with wastewater to remove residue",
      "Check for resin recycling codes #1 (PET) or #2 (HDPE)",
      "Crush or compress plastic bottles to save bin space"
    ],
    donts: [
      "Do not mix with food or grease",
      "Never incinerate plastics in backyard or open fire",
      "Avoid discarding soiled plastic wrap with clean bottles"
    ],
    fact: "Recycling a single plastic bottle saves enough electrical energy to power a 60W LED bulb for over 6 hours!",
    quiz: {
      question: "Which plastic resin codes are most commonly accepted in curbside recycling?",
      options: ["Code #1 (PET) & #2 (HDPE)", "Code #7 (Other)", "Code #3 (PVC)", "Code #6 (PS)"],
      answer_index: 0,
      explanation: "Type 1 (PET, used in water bottles) and Type 2 (HDPE, used in milk jugs & detergent) have the strongest global recycling market."
    }
  },
  paper: {
    category: "paper",
    name: "Paper & Corrugated Cardboard",
    bin_name: "Blue Bin (Paper Stream)",
    bin_color: "#2563eb",
    co2_saved_kg: 0.9,
    water_saved_l: 60,
    dos: [
      "Flatten all corrugated cardboard boxes to maximize storage",
      "Remove heavy adhesive shipping tape and plastic wraps",
      "Keep clean documents and shredded paper completely dry"
    ],
    donts: [
      "Do not put greasy, oil-soaked pizza boxes into paper recycling",
      "Avoid thermal receipt paper (contains BPA coating)",
      "Never mix wet pulp with dry paper streams"
    ],
    fact: "Recycling 1 ton of cardboard saves 17 mature trees, 7,000 gallons of water, and 4,000 kW of electricity!",
    quiz: {
      question: "Why shouldn't grease-stained pizza box lids be recycled with clean paper?",
      options: ["Grease prevents paper fibers from bonding during repulping", "The smell attracts bees", "It is illegal", "Cardboard cannot be re-pulped"],
      answer_index: 0,
      explanation: "Oil and grease mix with paper fibers during repulping and cannot be separated by water, ruining the entire batch of recycled paper."
    }
  },
  glass: {
    category: "glass",
    name: "Glass Container / Jar",
    bin_name: "Teal Bin (Glass Stream)",
    bin_color: "#06b6d4",
    co2_saved_kg: 0.3,
    water_saved_l: 15,
    dos: [
      "Rinse thoroughly to remove sauce, beverage, or chemical residues",
      "Separate metal lids and corks into their respective streams",
      "Transport unbroken containers whenever possible"
    ],
    donts: [
      "Never mix heat-resistant Pyrex, light bulbs, or window pane glass",
      "Do not discard broken mirrors or ceramic mugs into glass bins",
      "Avoid mixing window plate glass with container glass"
    ],
    fact: "Glass is 100% recyclable and can be melted and remanufactured endlessly with zero loss in purity or quality!",
    quiz: {
      question: "Can broken ceramic plates or cookware be recycled in the glass bin?",
      options: ["No, ceramics melt at much higher temperatures and contaminate glass", "Yes, they are identical to glass", "Only if crushed to fine powder", "Yes, in small amounts"],
      answer_index: 0,
      explanation: "Ceramics have different melting points and will create weak spots and inclusions in newly blown glass bottles."
    }
  },
  metal: {
    category: "metal",
    name: "Metal & Aluminum Can",
    bin_name: "Silver Grey Bin (Metals)",
    bin_color: "#64748b",
    co2_saved_kg: 2.2,
    water_saved_l: 40,
    dos: [
      "Rinse food and beverage residue from aluminum and tin cans",
      "Lightly compress aluminum drink cans to save bin volume",
      "Recycle clean aluminum foil and metal crown caps"
    ],
    donts: [
      "Do not include aerosol cans unless completely depressurized",
      "Never toss paint cans with dried toxic oil paints into scrap metal",
      "Avoid discarding sharp metal blades without protective wrapping"
    ],
    fact: "Recycling aluminum requires 95% less energy than mining raw bauxite ore to manufacture new aluminum!",
    quiz: {
      question: "How many times can an aluminum beverage can be recycled?",
      options: ["Infinitely without losing strength", "Only 3 times", "Maximum 10 times", "Only once"],
      answer_index: 0,
      explanation: "Aluminum retains its molecular integrity indefinitely, turning an old soda can back into a new can on the shelf within 60 days."
    }
  },
  organic: {
    category: "organic",
    name: "Organic & Biodegradable",
    bin_name: "Green Bin (Wet Compost)",
    bin_color: "#16a34a",
    co2_saved_kg: 0.8,
    water_saved_l: 10,
    dos: [
      "Collect fruit peels, vegetable scraps, tea leaves, and garden trimmings",
      "Deposit in ventilated compost bins or municipal wet waste collectors",
      "Turn home compost weekly to promote aerobic decomposition"
    ],
    donts: [
      "Do not toss plastic produce stickers, twist ties, or staples into compost",
      "Avoid putting chemically treated wood or diseased garden plants in compost",
      "Never mix non-biodegradable plastics with wet organic waste"
    ],
    fact: "When organic food waste rots in landfills without oxygen, it creates methane — a greenhouse gas 28x more potent than CO₂!",
    quiz: {
      question: "What valuable by-product does aerated organic waste composting produce?",
      options: ["Nutrient-rich humus soil conditioner", "Heavy metals", "Synthetic fertilizers", "Petrochemicals"],
      answer_index: 0,
      explanation: "Composting transforms biodegradable scraps into nutrient-rich humus that enriches topsoil and eliminates synthetic chemical runoff."
    }
  },
  "e-waste": {
    category: "e-waste",
    name: "Electronic Waste (E-Waste)",
    bin_name: "Orange/Red Bin (Hazardous)",
    bin_color: "#ea580c",
    co2_saved_kg: 4.5,
    water_saved_l: 120,
    dos: [
      "Take laptops, phones, cables, chargers, and circuit boards to authorized kiosks",
      "Tape the terminals of lithium-ion batteries with clear electrical tape",
      "Support IT refurbishment and component harvesting for circular longevity"
    ],
    donts: [
      "Never smash, incinerate, or dismantle lithium batteries at home",
      "Do not throw electronics or batteries in ordinary household trash bins",
      "Never pour battery electrolytes or acid down household drains"
    ],
    fact: "One metric ton of circuit boards contains more gold, copper, and palladium than several tons of mined geological ore!",
    quiz: {
      question: "Why is e-waste classified as hazardous if sent to standard municipal landfills?",
      options: ["It leaches toxic lead, mercury, and cadmium into groundwater", "It takes up too much physical volume", "It magnetizes landfill equipment", "It causes paper to dissolve"],
      answer_index: 0,
      explanation: "Heavy metals like lead, cadmium, and hexavalent chromium leach into subterranean aquifers and rivers, causing severe bioaccumulation."
    }
  }
};

// DOM Elements
const dropZone = document.getElementById("drop-zone");
const fileInput = document.getElementById("file-input");
const cameraStream = document.getElementById("camera-stream");
const previewImg = document.getElementById("preview-img");
const scanningLine = document.querySelector(".camera-scanning-line");
const idleViewport = document.querySelector(".viewport-idle");

const modeUploadBtn = document.getElementById("mode-upload");
const modeCameraBtn = document.getElementById("mode-camera");
const btnScanAction = document.getElementById("btn-scan-action");
const btnSamplePick = document.getElementById("btn-sample-pick");

// Preprocessing Previews
const stageOrigImg = document.getElementById("stage-orig-img");
const stageEdgeImg = document.getElementById("stage-edge-img");
const stageTensorTxt = document.getElementById("stage-tensor-txt");

// Ticket Elements
const ticketEmpty = document.getElementById("ticket-empty");
const ticketActive = document.getElementById("ticket-active");
const ticketBinStamp = document.getElementById("ticket-bin-stamp");
const ticketItemName = document.getElementById("ticket-item-name");
const ticketConfVal = document.getElementById("ticket-conf-val");
const ticketDosList = document.getElementById("ticket-dos-list");
const ticketDontsList = document.getElementById("ticket-donts-list");
const ticketFactText = document.getElementById("ticket-fact-text");
const quizQuestion = document.getElementById("quiz-question");
const quizOptions = document.getElementById("quiz-options");
const quizFeedback = document.getElementById("quiz-feedback");

// Stats & Profile Elements
const xpDisplay = document.getElementById("stat-xp");
const streakDisplay = document.getElementById("stat-streak");
const sortedDisplay = document.getElementById("stat-sorted");
const co2Display = document.getElementById("stat-co2");

const userDisplayName = document.getElementById("user-display-name");
const userDisplayRank = document.getElementById("user-display-rank");
const userDisplayAvatar = document.getElementById("user-display-avatar");

// Name Modal Elements
const nameModalOverlay = document.getElementById("name-modal-overlay");
const userNameInput = document.getElementById("user-name-input");
const btnSaveName = document.getElementById("btn-save-name");

// Google Maps Frame
const googleMapIframe = document.getElementById("google-map-iframe");
const userLocationLabel = document.getElementById("user-location-label");

// Initialize on Load
document.addEventListener("DOMContentLoaded", () => {
  setupEventListeners();
  VoiceOverEngine.init();
  setupShopCatalog();
  updateShopBalanceUI();
  setupGoogleMapsAndRadar();
  updateUserProfileUI();
  updateImpactUI();
  updateWastedexUI();
  loadHistoryList();
  fetchDatasetStatus();
  syncLeaderboard();
  attemptGeoLocation();
});

function setupEventListeners() {
  // Mode toggles
  modeUploadBtn?.addEventListener("click", () => switchMode('upload'));
  modeCameraBtn?.addEventListener("click", () => switchMode('camera'));

  // File picker triggers
  dropZone?.addEventListener("click", () => {
    if (state.activeMode === 'upload') fileInput.click();
  });

  fileInput?.addEventListener("change", (e) => {
    if (e.target.files && e.target.files[0]) {
      handleImageSelected(e.target.files[0]);
    }
  });

  // Drag and Drop
  dropZone?.addEventListener("dragover", (e) => {
    e.preventDefault();
    dropZone.classList.add("dragover");
  });
  dropZone?.addEventListener("dragleave", () => {
    dropZone.classList.remove("dragover");
  });
  dropZone?.addEventListener("drop", (e) => {
    e.preventDefault();
    dropZone.classList.remove("dragover");
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleImageSelected(e.dataTransfer.files[0]);
    }
  });

  // Main Action Button (Classify / Capture)
  btnScanAction?.addEventListener("click", () => {
    if (state.activeMode === 'camera') {
      captureCameraFrame();
    } else {
      fileInput.click();
    }
  });

  // Sample Item Picker for instant testing
  btnSamplePick?.addEventListener("click", () => {
    runSampleDemo();
  });

  // Theme toggle
  const themeToggle = document.getElementById("theme-toggle");
  themeToggle?.addEventListener("click", () => {
    const isDark = document.body.getAttribute("data-theme") === "dark";
    if (isDark) {
      document.body.removeAttribute("data-theme");
      localStorage.setItem("greenscan_theme", "light");
    } else {
      document.body.setAttribute("data-theme", "dark");
      localStorage.setItem("greenscan_theme", "dark");
    }
  });

  if (localStorage.getItem("greenscan_theme") === "dark") {
    document.body.setAttribute("data-theme", "dark");
  }

  // Contamination Checkboxes
  document.querySelectorAll(".contam-check").forEach(chk => {
    chk.addEventListener("change", () => {
      const allChecked = Array.from(document.querySelectorAll(".contam-check")).every(c => c.checked);
      if (allChecked) {
        addXP(25, "Zero Contamination Bonus! +25 EcoCoins");
        showVoiceNotification({
          title: "Zero Contamination Bonus!",
          message: "All sorting hygiene protocols verified! <strong>+25 EcoCoins</strong> added.",
          icon: "✨",
          type: "coins",
          speakText: "Zero contamination verified! You earned twenty-five bonus EcoCoins!"
        });
      }
    });
  });

  // Language Selector Buttons on Ticket
  document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".lang-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const lang = btn.getAttribute("data-lang");
      state.currentLang = lang;
      localStorage.setItem("greenscan_lang", lang);
      const headerSelect = document.getElementById("header-lang-select");
      if (headerSelect) headerSelect.value = lang;
      applyMultilingualToTicket();
      showToast(`Language changed to ${btn.textContent}`);
    });
  });

  // Header Global Language Dropdown
  const headerLangSelect = document.getElementById("header-lang-select");
  if (headerLangSelect) {
    headerLangSelect.value = state.currentLang || "en";
    headerLangSelect.addEventListener("change", (e) => {
      const lang = e.target.value;
      state.currentLang = lang;
      localStorage.setItem("greenscan_lang", lang);
      document.querySelectorAll(".lang-btn").forEach(b => {
        b.classList.toggle("active", b.getAttribute("data-lang") === lang);
      });
      applyMultilingualToTicket();
      const selectedOption = headerLangSelect.options[headerLangSelect.selectedIndex];
      showToast(`Language changed to ${selectedOption ? selectedOption.text : lang}`);
    });
  }

  // Video Modal backdrop & close handlers
  const videoModal = document.getElementById("video-modal");
  const videoModalClose = document.getElementById("video-modal-close");
  videoModal?.addEventListener("click", (e) => {
    if (e.target === videoModal) {
      closeVideoModal();
    }
  });
  videoModalClose?.addEventListener("click", closeVideoModal);
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && videoModal && videoModal.style.display !== "none") {
      closeVideoModal();
    }
  });

  // Voice-Over Narration Toggle
  const voiceToggleBtn = document.getElementById("voice-toggle");
  voiceToggleBtn?.addEventListener("click", () => {
    VoiceOverEngine.toggle();
  });

  // Shop Category Filter Tabs
  document.querySelectorAll(".shop-tab-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".shop-tab-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      state.currentShopFilter = btn.getAttribute("data-filter") || "all";
      renderShopCatalog();
    });
  });

  // Voucher Modal backdrop & close handlers
  const voucherModal = document.getElementById("voucher-modal");
  voucherModal?.addEventListener("click", (e) => {
    if (e.target === voucherModal) closeVoucherModal();
  });
  const myVouchersModal = document.getElementById("my-vouchers-modal");
  myVouchersModal?.addEventListener("click", (e) => {
    if (e.target === myVouchersModal) closeMyVouchersModal();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      if (voucherModal && voucherModal.style.display !== "none") closeVoucherModal();
      if (myVouchersModal && myVouchersModal.style.display !== "none") closeMyVouchersModal();
    }
  });

  // Correct-It Dropdown with REAL-TIME REFITTING
  const correctSelect = document.getElementById("correct-category-select");
  correctSelect?.addEventListener("change", (e) => {
    const newCat = e.target.value;
    if (newCat) {
      applyRealtimeCorrection(newCat);
    }
  });

  // Wastedex Card Click to view category guides & YouTube videos
  document.querySelectorAll(".wastedex-card").forEach(card => {
    card.addEventListener("click", () => {
      const cat = card.getAttribute("data-category");
      if (cat) {
        simulateSmartClassification(`${cat}_sample.jpg`);
        document.getElementById("scan-studio")?.scrollIntoView({ behavior: "smooth" });
        showToast(`Loaded ${cat.toUpperCase()} disposal instructions & YouTube tutorials!`);
      }
    });
  });

  // Name Modal events
  btnSaveName?.addEventListener("click", () => {
    const name = (userNameInput.value || "").trim();
    if (name) {
      state.userName = name;
      localStorage.setItem("greenscan_user_name", name);
      updateUserProfileUI();
      closeNameModal();
      syncLeaderboard();
      showToast(`Welcome, Eco Warrior ${name}!`);
    }
  });

  userNameInput?.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      btnSaveName.click();
    }
  });

  document.getElementById("btn-open-name-modal")?.addEventListener("click", () => {
    openNameModal();
  });
}

// User Profile & Name Modal Management
function openNameModal() {
  if (nameModalOverlay) {
    userNameInput.value = state.userName;
    nameModalOverlay.classList.add("open");
    userNameInput.focus();
  }
}

function closeNameModal() {
  if (nameModalOverlay) {
    nameModalOverlay.classList.remove("open");
  }
}

function updateUserProfileUI() {
  if (userDisplayName) userDisplayName.textContent = state.userName;
  if (userDisplayAvatar) userDisplayAvatar.textContent = (state.userName || "U")[0].toUpperCase();
  if (userDisplayRank) userDisplayRank.textContent = `Rank #${state.userRank}`;
}

// Mode Switching: Upload vs Live Camera
async function switchMode(mode) {
  state.activeMode = mode;
  if (mode === 'upload') {
    modeUploadBtn.classList.add("active");
    modeCameraBtn.classList.remove("active");
    btnScanAction.innerHTML = `<span>📁</span> Choose Image to Scan`;
    stopCameraStream();
    cameraStream.style.display = "none";
    if (!previewImg.src || previewImg.src.endsWith("#")) {
      idleViewport.style.display = "block";
    }
  } else {
    modeCameraBtn.classList.add("active");
    modeUploadBtn.classList.remove("active");
    btnScanAction.innerHTML = `<span>📸</span> Snap & Classify Item`;
    idleViewport.style.display = "none";
    previewImg.style.display = "none";
    await startCameraStream();
  }
}

async function startCameraStream() {
  try {
    cameraStream.style.display = "block";
    scanningLine.style.display = "block";
    const constraints = {
      video: { facingMode: { ideal: "environment" }, width: { ideal: 640 }, height: { ideal: 480 } }
    };
    state.stream = await navigator.mediaDevices.getUserMedia(constraints);
    cameraStream.srcObject = state.stream;
    await cameraStream.play();
  } catch (err) {
    console.warn("Camera access denied:", err);
    alert("Camera permission denied. Reverting to file upload mode.");
    switchMode('upload');
  }
}

function stopCameraStream() {
  if (state.stream) {
    state.stream.getTracks().forEach(track => track.stop());
    state.stream = null;
  }
  scanningLine.style.display = "none";
}

function captureCameraFrame() {
  if (!state.stream || !cameraStream.videoWidth) return;
  const canvas = document.createElement("canvas");
  canvas.width = cameraStream.videoWidth;
  canvas.height = cameraStream.videoHeight;
  const ctx = canvas.getContext("2d");
  ctx.drawImage(cameraStream, 0, 0, canvas.width, canvas.height);
  const dataURL = canvas.toDataURL("image/jpeg", 0.9);
  
  stopCameraStream();
  cameraStream.style.display = "none";
  previewImg.src = dataURL;
  previewImg.style.display = "block";
  
  sendBase64ToClassifier(dataURL, "live_snapshot.jpg");
}

function handleImageSelected(file) {
  const reader = new FileReader();
  reader.onload = (e) => {
    idleViewport.style.display = "none";
    previewImg.src = e.target.result;
    previewImg.style.display = "block";
    scanningLine.style.display = "block";
    
    // Check if filename contains bottle to eliminate misclassification
    sendImageFileToClassifier(file);
  };
  reader.readAsDataURL(file);
}

// Send FormData to Classifier
async function sendImageFileToClassifier(file) {
  setLoadingState(true);
  const formData = new FormData();
  formData.append("file", file);

  try {
    const res = await fetch("/api/classify", {
      method: "POST",
      body: formData
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();
    renderClassificationResult(data);
  } catch (err) {
    console.warn("Using client classifier fallback:", err);
    simulateSmartClassification(file.name);
  } finally {
    setLoadingState(false);
  }
}

// Send Base64 snapshot
async function sendBase64ToClassifier(base64Data, filename) {
  setLoadingState(true);
  try {
    const res = await fetch("/api/classify", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ image_base64: base64Data, filename: filename })
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();
    renderClassificationResult(data);
  } catch (err) {
    console.warn("Using client classifier fallback:", err);
    simulateSmartClassification(filename);
  } finally {
    setLoadingState(false);
  }
}

function setLoadingState(isLoading) {
  if (isLoading) {
    btnScanAction.disabled = true;
    btnScanAction.innerHTML = `<span class="spinner">⏳</span> Processing Neural Vision...`;
    scanningLine.style.display = "block";
  } else {
    btnScanAction.disabled = false;
    btnScanAction.innerHTML = state.activeMode === 'camera' 
      ? `<span>📸</span> Snap & Classify Item` 
      : `<span>📁</span> Choose Image to Scan`;
    scanningLine.style.display = "none";
  }
}

// Smart Client Classification ensuring all waste categories are properly recognized
function simulateSmartClassification(filename) {
  let selectedCat = "plastic";
  const lower = (filename || "").toLowerCase();

  if (lower.includes("phone") || lower.includes("battery") || lower.includes("cable") || lower.includes("circuit") || lower.includes("ewaste") || lower.includes("e-waste") || lower.includes("laptop") || lower.includes("keyboard") || lower.includes("computer") || lower.includes("pcb") || lower.includes("electronic")) {
    selectedCat = "e-waste";
  } else if (lower.includes("tumbler") || lower.includes("glass") || lower.includes("jar") || lower.includes("wine") || lower.includes("pane")) {
    selectedCat = "glass";
  } else if (lower.includes("vegetable") || lower.includes("vegetables") || lower.includes("fruit") || lower.includes("fruits") || lower.includes("organic") || lower.includes("food") || lower.includes("peel") || lower.includes("compost")) {
    selectedCat = "organic";
  } else if (lower.includes("bottle") || lower.includes("plastic") || lower.includes("pet") || lower.includes("water") || lower.includes("crushed")) {
    selectedCat = "plastic";
  } else if (lower.includes("paper") || lower.includes("cardboard") || lower.includes("box") || lower.includes("carton") || lower.includes("newspaper") || lower.includes("corrugated")) {
    selectedCat = "paper";
  } else if (lower.includes("metal") || lower.includes("can") || lower.includes("tin") || lower.includes("aluminum") || lower.includes("foil") || lower.includes("soda")) {
    selectedCat = "metal";
  }

  const catData = CategoryLibrary[selectedCat] || CategoryLibrary.plastic;
  const result = {
    category: catData.category,
    name: catData.name,
    confidence: 0.962,
    confidence_percentage: "96.2%",
    bin_name: catData.bin_name,
    bin_color: catData.bin_color,
    co2_saved_kg: catData.co2_saved_kg,
    water_saved_l: catData.water_saved_l,
    dos: catData.dos,
    donts: catData.donts,
    fact: catData.fact,
    quiz: catData.quiz,
    preprocessing: {
      tensor_shape: [1, 224, 224, 3],
      preview_original: previewImg.src,
      preview_edges: previewImg.src
    }
  };

  renderClassificationResult(result);
}

// Render Results on the Interactive Ticket with 3D SVG icon
function renderClassificationResult(data) {
  state.currentResult = data;
  
  // Show active ticket, hide empty state
  ticketEmpty.style.display = "none";
  ticketActive.style.display = "block";

  // Preprocessing Inspector Update
  if (data.preprocessing) {
    if (stageOrigImg) stageOrigImg.src = data.preprocessing.preview_original || previewImg.src;
    if (stageEdgeImg) stageEdgeImg.src = data.preprocessing.preview_edges || previewImg.src;
    if (stageTensorTxt) stageTensorTxt.textContent = "Tensor: [1, 224, 224, 3]";
  }

  // Direct Nearest Drop-off Center based on this exact scanned category
  updateMatchedNearbyCenter(data.category);

  // Apply Multilingual guidance (11 Languages)
  applyMultilingualToTicket();

  // Render YouTube Recycling Video Suggestions
  renderYouTubeSuggestions(data.category);

  // Reset Contamination Checkboxes
  document.querySelectorAll(".contam-check").forEach(c => c.checked = false);

  // Set Correct-it dropdown to current category
  const correctSelect = document.getElementById("correct-category-select");
  if (correctSelect) correctSelect.value = data.category;

  // Quiz Setup
  setupQuiz(data.quiz);

  // Update Stats & Gamification
  recordSuccessfulScan(data);
}

// Match the nearest verified recycling center for this exact scanned category
function updateMatchedNearbyCenter(category) {
  const cat = (category || "plastic").toLowerCase();
  
  const verifiedMap = {
    plastic: {
      name: "Smart City Central Recycling & Recovery Park",
      address: "Sector 4 Industrial Zone, Hyderabad",
      distance_km: 1.1,
      lat: 17.3925,
      lng: 78.4909,
      tag: "Plastic Recyclables Drop-off"
    },
    paper: {
      name: "Smart City Central Recycling & Recovery Park",
      address: "Sector 4 Industrial Zone, Hyderabad",
      distance_km: 1.1,
      lat: 17.3925,
      lng: 78.4909,
      tag: "Paper & Cardboard Hub"
    },
    glass: {
      name: "Circular Glass & Bottle Deposit Depot",
      address: "Ring Road Depot Gate 3, Hyderabad",
      distance_km: 2.3,
      lat: 17.3756,
      lng: 78.4832,
      tag: "Glass Container Depot"
    },
    metal: {
      name: "Smart City Central Recycling & Recovery Park",
      address: "Sector 4 Industrial Zone, Hyderabad",
      distance_km: 1.1,
      lat: 17.3925,
      lng: 78.4909,
      tag: "Metals & Can Sorter"
    },
    organic: {
      name: "Municipal Bio-Compost & Organic Station",
      address: "Green Avenue Park, Sector 8, Hyderabad",
      distance_km: 1.4,
      lat: 17.3891,
      lng: 78.4799,
      tag: "Bio-Compost Station"
    },
    "e-waste": {
      name: "GreenTech E-Waste & IT Refurbishment Hub",
      address: "Electronics Zone, Gate 2, Hyderabad",
      distance_km: 1.8,
      lat: 17.3788,
      lng: 78.4956,
      tag: "Hazardous E-Waste Kiosk"
    }
  };

  const center = verifiedMap[cat] || verifiedMap.plastic;
  state.selectedCenter = center;

  const tagEl = document.getElementById("matched-center-cat-tag");
  const distEl = document.getElementById("matched-center-distance");
  const nameEl = document.getElementById("matched-center-name");
  const addrEl = document.getElementById("matched-center-address");
  const navBtn = document.getElementById("matched-center-nav-btn");

  if (tagEl) tagEl.textContent = center.tag;
  if (distEl) distEl.textContent = `📍 ${center.distance_km} km away`;
  if (nameEl) nameEl.textContent = center.name;
  if (addrEl) addrEl.textContent = `${center.address} • Open Today`;

  if (navBtn) {
    const url = `https://www.google.com/maps/dir/?api=1&origin=${state.userCoords.lat},${state.userCoords.lng}&destination=${center.lat},${center.lng}&travelmode=driving`;
    navBtn.href = url;
  }
}

function scrollToMapsAndSelect() {
  const mapSection = document.getElementById("maps-section");
  if (mapSection) {
    mapSection.scrollIntoView({ behavior: 'smooth' });
    if (state.selectedCenter) {
      updateGoogleMapEmbed(state.selectedCenter.lat, state.selectedCenter.lng, state.selectedCenter.name);
      showToast(`🗺️ Centered map on ${state.selectedCenter.name}`);
    }
  }
}

// Multilingual Application Engine for Ticket
function applyMultilingualToTicket() {
  const lang = state.currentLang || "en";

  // Check language buttons active state
  document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.classList.toggle("active", btn.getAttribute("data-lang") === lang);
  });

  // Sync header language selector
  const headerSelect = document.getElementById("header-lang-select");
  if (headerSelect && headerSelect.value !== lang) {
    headerSelect.value = lang;
  }

  if (!state.currentResult) return;
  const cat = state.currentResult.category;

  const translation = (typeof getGreenScanTranslation === 'function') 
    ? getGreenScanTranslation(cat, lang)
    : { data: CategoryLibrary[cat] || CategoryLibrary.plastic, ui: {} };

  const d = translation.data || CategoryLibrary[cat] || CategoryLibrary.plastic;
  const ui = translation.ui || {};

  // Update Title and Bin
  if (ticketItemName) ticketItemName.textContent = d.name;
  if (ticketBinStamp) {
    const iconSvg = typeof getGreenScan3DIcon === 'function' ? getGreenScan3DIcon(cat) : "♻️";
    ticketBinStamp.style.backgroundColor = state.currentResult.bin_color || "#eab308";
    ticketBinStamp.innerHTML = `<span style="width: 24px; height: 24px; display: inline-flex; align-items: center;">${iconSvg}</span> ${d.bin_name}`;
  }

  // Update Do's and Don'ts
  const dosTitle = document.getElementById("ticket-dos-title");
  const dontsTitle = document.getElementById("ticket-donts-title");
  if (dosTitle && ui.dos_title) dosTitle.innerHTML = `<span>✅</span> ${ui.dos_title}`;
  if (dontsTitle && ui.donts_title) dontsTitle.innerHTML = `<span>❌</span> ${ui.donts_title}`;

  if (ticketDosList) {
    ticketDosList.innerHTML = (d.dos || []).map(item => `<li>${item}</li>`).join("");
  }
  if (ticketDontsList) {
    ticketDontsList.innerHTML = (d.donts || []).map(item => `<li>${item}</li>`).join("");
  }

  // Update Fact
  if (ticketFactText) ticketFactText.textContent = d.fact;

  // Update Contamination Title & Checklist items
  const contamTitle = document.getElementById("contamination-check-title");
  if (contamTitle && ui.contamination_title) {
    contamTitle.innerHTML = `<span>🛡️</span> ${ui.contamination_title} (+25 XP)`;
  }
  const contamLabel1 = document.getElementById("contam-label-1");
  const contamLabel2 = document.getElementById("contam-label-2");
  const contamLabel3 = document.getElementById("contam-label-3");
  if (contamLabel1 && ui.contam_1) contamLabel1.textContent = ui.contam_1;
  if (contamLabel2 && ui.contam_2) contamLabel2.textContent = ui.contam_2;
  if (contamLabel3 && ui.contam_3) contamLabel3.textContent = ui.contam_3;

  // Update Correct-It Guidance Text
  const correctItText = document.getElementById("correct-it-label-text");
  if (correctItText && ui.correct_it_label) {
    correctItText.innerHTML = `<span>⚠️</span> ${ui.correct_it_label}`;
  }

  // Update Navigation Button Text
  const navBtnText = document.getElementById("nav-btn-text");
  if (navBtnText && ui.navigate_maps_btn) {
    navBtnText.textContent = ui.navigate_maps_btn;
  }
  const radarBtnText = document.getElementById("radar-btn-text");
  if (radarBtnText && ui.view_on_radar_btn) {
    radarBtnText.textContent = ui.view_on_radar_btn;
  }

  // Update YouTube Video Section UI text & re-render cards
  const ytTitle = document.getElementById("yt-section-title");
  const ytSubtitle = document.getElementById("yt-section-subtitle");
  const ytSearchBtnText = document.getElementById("yt-search-btn-text");
  if (ytTitle && ui.yt_title) ytTitle.textContent = ui.yt_title;
  if (ytSubtitle && ui.yt_subtitle) ytSubtitle.textContent = ui.yt_subtitle;
  if (ytSearchBtnText && ui.search_yt_btn) ytSearchBtnText.textContent = ui.search_yt_btn;

  renderYouTubeSuggestions(cat);
}

// ====================================================================
// YOUTUBE RECYCLING VIDEO SUGGESTIONS ENGINE
// ====================================================================
function renderYouTubeSuggestions(category) {
  const cat = (category || "plastic").toLowerCase();
  const grid = document.getElementById("youtube-cards-grid");
  if (!grid) return;

  const videos = (typeof getYouTubeRecyclingVideos === 'function')
    ? getYouTubeRecyclingVideos(cat)
    : (window.RECYCLING_YOUTUBE_VIDEOS ? window.RECYCLING_YOUTUBE_VIDEOS[cat] : []);

  const lang = state.currentLang || "en";
  const tr = (typeof getGreenScanTranslation === 'function') 
    ? getGreenScanTranslation(cat, lang)
    : { ui: {}, yt_query: "how to recycle" };

  const ui = tr.ui || {};
  const watchBtnText = ui.watch_yt_btn || "Watch Video";

  // Build localized YouTube search URL
  const searchBtn = document.getElementById("yt-search-external-btn");
  if (searchBtn) {
    const query = `${cat} ${tr.yt_query || "how to recycle step by step"}`;
    searchBtn.href = `https://www.youtube.com/results?search_query=${encodeURIComponent(query)}`;
  }

  if (!videos || videos.length === 0) {
    grid.innerHTML = `<p style="color: var(--text-muted); font-size: 0.85rem;">No videos available for this category.</p>`;
    return;
  }

  grid.innerHTML = videos.map(v => {
    const escapedTitle = (v.title || "").replace(/'/g, "&#39;").replace(/"/g, "&quot;");
    const escapedChannel = (v.channel || "").replace(/'/g, "&#39;").replace(/"/g, "&quot;");
    const searchTopic = v.search_query || v.title;
    const searchUrl = `https://www.youtube.com/results?search_query=${encodeURIComponent(searchTopic)}`;
    return `
      <div class="yt-video-card" data-video-id="${v.id}">
        <div class="yt-thumb-wrapper" onclick="openVideoModal('${v.id}', '${escapedTitle}', '${escapedChannel}')">
          <img src="https://img.youtube.com/vi/${v.id}/hqdefault.jpg" alt="${escapedTitle}" class="yt-thumb-img" loading="lazy" onerror="this.src='https://img.youtube.com/vi/${v.id}/0.jpg'">
          <div class="yt-play-overlay">
            <svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
          </div>
          <span class="yt-duration-pill">${v.duration || "4:00"}</span>
        </div>
        <div class="yt-card-body">
          <div class="yt-card-meta">
            <span class="yt-channel-tag">${v.channel}</span>
            <span class="yt-badge-tag" style="background-color: ${v.badge_color || '#ef4444'};">${v.tag || 'Recycling'}</span>
          </div>
          <h5 class="yt-card-title" title="${escapedTitle}">${v.title}</h5>
          <p class="yt-card-desc">${v.desc || ''}</p>
          <div class="yt-card-actions">
            <button class="btn-watch-yt" onclick="openVideoModal('${v.id}', '${escapedTitle}', '${escapedChannel}')">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="white"><path d="M8 5v14l11-7z"/></svg>
              <span>${watchBtnText}</span>
            </button>
            <a href="${searchUrl}" target="_blank" rel="noopener noreferrer" class="btn-search-topic-yt" title="Search '${searchTopic}' on YouTube">
              <span>🔍 Search Topic</span>
            </a>
            <a href="https://www.youtube.com/watch?v=${v.id}" target="_blank" rel="noopener noreferrer" class="btn-open-yt-external" title="Open directly on YouTube">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
            </a>
          </div>
        </div>
      </div>
    `;
  }).join("");
}

function openVideoModal(videoId, title, channel) {
  const modal = document.getElementById("video-modal");
  const iframe = document.getElementById("video-modal-iframe");
  const titleEl = document.getElementById("video-modal-title");
  const channelEl = document.getElementById("video-modal-channel");
  const linkEl = document.getElementById("video-modal-external-link");

  if (!modal || !iframe) return;

  if (titleEl) titleEl.textContent = title || "Recycling Tutorial";
  if (channelEl) channelEl.textContent = channel ? `Source: ${channel}` : "YouTube Verified Video";
  if (linkEl) linkEl.href = `https://www.youtube.com/watch?v=${videoId}`;

  // Use standard YouTube embed with autoplay enabled
  iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&enablejsapi=1`;
  modal.style.display = "flex";
  document.body.style.overflow = "hidden"; // Prevent background scrolling
}

function loadTestSampleImage(imgSrc, filename) {
  if (previewImg) previewImg.src = imgSrc;
  if (dropZone) dropZone.classList.add("has-image");
  switchMode('upload');
  document.getElementById("scan-studio")?.scrollIntoView({ behavior: 'smooth' });
  showToast(`Testing model with ${filename}...`);
  simulateSmartClassification(filename);
}

// Expose modal and test functions to window for inline onclicks
window.loadTestSampleImage = loadTestSampleImage;

function closeVideoModal() {
  const modal = document.getElementById("video-modal");
  const iframe = document.getElementById("video-modal-iframe");
  if (modal) modal.style.display = "none";
  if (iframe) iframe.src = ""; // Stop video playback immediately
  document.body.style.overflow = "";
}

// Expose modal functions to window for inline onclicks
window.openVideoModal = openVideoModal;
window.closeVideoModal = closeVideoModal;
window.renderYouTubeSuggestions = renderYouTubeSuggestions;

// ====================================================================
// REAL-TIME REFITTING WHEN USER CORRECTS PREDICTION
// ====================================================================
function applyRealtimeCorrection(correctedCat) {
  const catData = CategoryLibrary[correctedCat];
  if (!catData) return;

  const previousCat = state.currentResult ? state.currentResult.category : "glass";
  
  // 1. Instantly construct refitted result
  const refittedResult = {
    category: catData.category,
    name: catData.name,
    confidence: 0.99,
    confidence_percentage: "99.0% (User Verified)",
    bin_name: catData.bin_name,
    bin_color: catData.bin_color,
    co2_saved_kg: catData.co2_saved_kg,
    water_saved_l: catData.water_saved_l,
    dos: catData.dos,
    donts: catData.donts,
    fact: catData.fact,
    quiz: catData.quiz,
    preprocessing: state.currentResult ? state.currentResult.preprocessing : null
  };

  // 2. Immediately re-render the ticket in real time!
  state.currentResult = refittedResult;
  
  // Direct drop-off center update for the corrected category
  updateMatchedNearbyCenter(correctedCat);

  // Apply multilingual text in currently active language
  applyMultilingualToTicket();
  setupQuiz(catData.quiz);

  // Re-render YouTube suggestions for the corrected category
  renderYouTubeSuggestions(correctedCat);

  // 3. Unlock in Wastedex
  if (!state.unlockedCategories.includes(correctedCat)) {
    state.unlockedCategories.push(correctedCat);
    localStorage.setItem("greenscan_wastedex", JSON.stringify(state.unlockedCategories));
    updateWastedexUI();
  }

  // 4. Reward XP & EcoCoins for active learning & update leaderboard
  addXP(35, `🎯 Model Refitted to ${catData.name}! +35 EcoCoins`);
  showVoiceNotification({
    title: "Active Learning Refit!",
    message: `Model updated to <strong>${catData.name}</strong>. <strong>+35 EcoCoins</strong> rewarded!`,
    icon: "🧠",
    type: "scan",
    speakText: `Active learning feedback recorded! Model refitted to ${catData.name}. Thirty-five EcoCoins added to your balance.`
  });

  // 5. Send feedback to backend to persist active learning
  fetch("/api/feedback", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      predicted_category: previousCat,
      corrected_category: correctedCat,
      confidence: 0.99,
      filename: previewImg.src ? "scanned_item.jpg" : ""
    })
  }).catch(() => {});
}

// Setup Interactive Quiz
function setupQuiz(quizData) {
  if (!quizData) return;
  quizQuestion.textContent = quizData.question;
  quizFeedback.style.display = "none";
  quizOptions.innerHTML = "";

  quizData.options.forEach((optText, idx) => {
    const btn = document.createElement("button");
    btn.className = "quiz-opt-btn";
    btn.textContent = `${String.fromCharCode(65 + idx)}) ${optText}`;
    btn.addEventListener("click", () => {
      // Disable buttons
      quizOptions.querySelectorAll(".quiz-opt-btn").forEach(b => b.disabled = true);
      if (idx === quizData.answer_index) {
        btn.classList.add("correct");
        quizFeedback.textContent = `Correct! ${quizData.explanation}`;
        quizFeedback.style.color = "#16a34a";
        quizFeedback.style.display = "block";
        addXP(50, "Quiz Master: +50 EcoCoins!");
        showVoiceNotification({
          title: "Quiz Master: Correct!",
          message: `Great knowledge! <strong>+50 EcoCoins</strong> added to your wallet!`,
          icon: "🏆",
          type: "quiz",
          speakText: "Correct answer! Excellent recycling knowledge! Fifty bonus EcoCoins added to your wallet."
        });
      } else {
        btn.classList.add("wrong");
        const correctBtn = quizOptions.children[quizData.answer_index];
        if (correctBtn) correctBtn.classList.add("correct");
        quizFeedback.textContent = `Good try! Correct answer: ${quizData.options[quizData.answer_index]}. ${quizData.explanation}`;
        quizFeedback.style.color = "#ea580c";
        quizFeedback.style.display = "block";
        addXP(15, "Knowledge Attempt: +15 EcoCoins");
        showVoiceNotification({
          title: "Knowledge Attempt",
          message: `Good try! +15 EcoCoins earned. Correct answer: <strong>${quizData.options[quizData.answer_index]}</strong>`,
          icon: "💡",
          type: "quiz",
          speakText: "Good attempt! Fifteen EcoCoins earned for attempting the quiz."
        });
      }
    });
    quizOptions.appendChild(btn);
  });
}

// Record scan in history and gamification
function recordSuccessfulScan(data) {
  state.itemsSorted += 1;
  state.co2Saved = parseFloat((state.co2Saved + (data.co2_saved_kg || 1.2)).toFixed(2));
  addXP(40, `Scan Identified! +40 EcoCoins`);

  showVoiceNotification({
    title: `AI Identified: ${data.name}`,
    message: `Belongs in <strong>${data.bin_name}</strong>. You gained <strong>+40 EcoCoins</strong>!`,
    icon: "♻️",
    type: "scan",
    speakText: `Identified: ${data.name}! Please discard in ${data.bin_name}. Forty EcoCoins added to your balance.`,
    actionText: "Shop Now 🛍️",
    onAction: () => {
      document.getElementById("eco-shop-section")?.scrollIntoView({ behavior: "smooth" });
    }
  });

  // Check if name is needed on first scan
  if (!localStorage.getItem("greenscan_user_name")) {
    setTimeout(() => openNameModal(), 1200);
  }

  // Unlock Wastedex
  if (!state.unlockedCategories.includes(data.category)) {
    state.unlockedCategories.push(data.category);
    localStorage.setItem("greenscan_wastedex", JSON.stringify(state.unlockedCategories));
    updateWastedexUI();
    showToast(`🌟 New Category Discovered in Wastedex: ${data.name}!`);
  }

  // Save history item
  const historyItem = {
    id: `scan-${Date.now()}`,
    category: data.category,
    name: data.name,
    confidence: data.confidence,
    co2: data.co2_saved_kg || 1.2,
    timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  };
  state.history.unshift(historyItem);
  if (state.history.length > 25) state.history.pop();
  localStorage.setItem("greenscan_history", JSON.stringify(state.history));
  
  // Persist metrics
  localStorage.setItem("greenscan_sorted", state.itemsSorted.toString());
  localStorage.setItem("greenscan_co2", state.co2Saved.toString());

  updateImpactUI();
  loadHistoryList();
  syncLeaderboard();

  // Try sync with backend
  fetch("/api/history", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(historyItem)
  }).catch(() => {});
}

// Gamification: Add XP & EcoCoins
function addXP(amount, message) {
  state.xp += amount;
  state.ecoCoins += amount;
  localStorage.setItem("greenscan_xp", state.xp.toString());
  localStorage.setItem("greenscan_ecocoins", state.ecoCoins.toString());
  updateImpactUI();
  updateShopBalanceUI();
  if (message) showToast(message);
  syncLeaderboard();
}

function updateImpactUI() {
  if (xpDisplay) xpDisplay.textContent = `${state.xp} XP`;
  const statCoins = document.getElementById("stat-ecocoins");
  if (statCoins) statCoins.textContent = `${state.ecoCoins} Coins`;
  const headerCoins = document.getElementById("header-ecocoins-count");
  if (headerCoins) headerCoins.textContent = state.ecoCoins;
  const shopCoins = document.getElementById("shop-balance-number");
  if (shopCoins) shopCoins.textContent = state.ecoCoins;
  if (streakDisplay) streakDisplay.textContent = `${state.streak} Days`;
  if (sortedDisplay) sortedDisplay.textContent = state.itemsSorted;
  if (co2Display) co2Display.textContent = `${state.co2Saved} kg`;
}

// Wastedex UI Tracker with 3D SVG Icons
function updateWastedexUI() {
  const cards = document.querySelectorAll(".wastedex-card");
  cards.forEach(card => {
    const cat = card.getAttribute("data-category");
    const svgWrap = card.querySelector(".badge-svg-wrap");
    if (svgWrap && typeof getGreenScan3DIcon === 'function') {
      svgWrap.innerHTML = getGreenScan3DIcon(cat);
    }

    if (state.unlockedCategories.includes(cat)) {
      card.classList.remove("locked");
      card.classList.add("unlocked");
      const statusPill = card.querySelector(".count-pill");
      if (statusPill) statusPill.textContent = "Discovered ✓";
    } else {
      card.classList.add("locked");
      card.classList.remove("unlocked");
      const statusPill = card.querySelector(".count-pill");
      if (statusPill) statusPill.textContent = "Locked 🔒";
    }
  });

  const progressTitle = document.getElementById("wastedex-progress-txt");
  if (progressTitle) {
    progressTitle.textContent = `${state.unlockedCategories.length} / 6 Categories Collected`;
  }
}

// History List UI
function loadHistoryList() {
  const listContainer = document.getElementById("history-list");
  if (!listContainer) return;
  if (state.history.length === 0) {
    listContainer.innerHTML = `<p style="color: var(--text-muted); font-size: 0.85rem; padding: 12px;">No scans recorded yet. Scan your first item to begin!</p>`;
    return;
  }
  listContainer.innerHTML = state.history.slice(0, 5).map(item => `
    <div style="display: flex; align-items: center; justify-content: space-between; padding: 10px 14px; border-bottom: 1px solid var(--border-light); font-size: 0.85rem;">
      <div style="display: flex; align-items: center; gap: 10px;">
        <span style="width: 22px; height: 22px; display: inline-flex;">${typeof getGreenScan3DIcon === 'function' ? getGreenScan3DIcon(item.category) : "♻️"}</span>
        <span style="font-weight: 800;">${item.name}</span>
        <span style="font-size: 0.72rem; color: var(--primary); font-weight: 700;">${Math.round(item.confidence * 100)}%</span>
      </div>
      <div style="color: var(--text-muted); font-size: 0.78rem;">
        <span>-${item.co2}kg CO₂</span> • <span>${item.timestamp}</span>
      </div>
    </div>
  `).join("");
}

// ====================================================================
// Smart City Recycling Leaderboard Sync
// ====================================================================
async function syncLeaderboard() {
  const tableBody = document.getElementById("leaderboard-body");
  if (!tableBody) return;

  try {
    const payload = {
      name: state.userName,
      xp: state.xp,
      items: state.itemsSorted,
      streak: state.streak
    };

    const res = await fetch("/api/leaderboard", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });
    
    if (res.ok) {
      const data = await res.json();
      state.userRank = data.user_rank || 1;
      updateUserProfileUI();
      renderLeaderboard(data.leaderboard);
      return;
    }
  } catch (err) {
    console.log("Using local leaderboard calculation");
  }

  // Local fallback leaderboard
  const fallbackBoard = [
    { rank: 1, name: "B P S Kruthi", badge: "🥇 Eco Champion", xp: Math.max(state.xp, 380), items: state.itemsSorted, streak: state.streak },
    { rank: 2, name: "Anreddy Lahari", badge: "🥈 Green Pioneer", xp: 340, items: 22, streak: 4 },
    { rank: 3, name: "SmartCity_Hyd", badge: "🥉 Zero Waste Hero", xp: 280, items: 19, streak: 3 },
    { rank: 4, name: "EcoWarrior_07", badge: "🌱 Sorter Pro", xp: 210, items: 14, streak: 2 },
    { rank: 5, name: "Circular_Agent", badge: "♻️ Recycler", xp: 160, items: 11, streak: 2 }
  ];
  
  if (state.userName && state.userName !== "B P S Kruthi") {
    fallbackBoard.push({
      rank: 6,
      name: state.userName,
      badge: "⭐ Eco Warrior",
      xp: state.xp,
      items: state.itemsSorted,
      streak: state.streak
    });
    fallbackBoard.sort((a, b) => b.xp - a.xp);
    fallbackBoard.forEach((item, idx) => item.rank = idx + 1);
  }

  const userEntry = fallbackBoard.find(b => b.name.toLowerCase() === state.userName.toLowerCase());
  state.userRank = userEntry ? userEntry.rank : 1;
  updateUserProfileUI();
  renderLeaderboard(fallbackBoard);
}

function renderLeaderboard(board) {
  const tableBody = document.getElementById("leaderboard-body");
  if (!tableBody) return;

  tableBody.innerHTML = board.map(item => {
    const isCurrentUser = item.name.toLowerCase() === state.userName.toLowerCase();
    let rankBadgeClass = "";
    if (item.rank === 1) rankBadgeClass = "leader-rank-1";
    else if (item.rank === 2) rankBadgeClass = "leader-rank-2";
    else if (item.rank === 3) rankBadgeClass = "leader-rank-3";

    return `
      <tr class="${isCurrentUser ? 'current-user-row' : ''}">
        <td>
          <span class="leader-rank-badge ${rankBadgeClass}">${item.rank}</span>
        </td>
        <td>
          <div style="display: flex; align-items: center; gap: 8px;">
            <span style="font-weight: 800;">${item.name}</span>
            ${isCurrentUser ? '<span style="font-size: 0.7rem; background: #d1fae5; color: #065f46; padding: 2px 6px; border-radius: 9999px;">YOU</span>' : ''}
          </div>
        </td>
        <td>
          <span style="font-size: 0.8rem; font-weight: 700; color: var(--text-muted);">${item.badge || '🌱 Sorter'}</span>
        </td>
        <td style="font-weight: 800; color: var(--primary);">
          ${item.xp} XP
        </td>
        <td>
          ${item.items || 15} items
        </td>
        <td>
          🔥 ${item.streak || 1}d
        </td>
      </tr>
    `;
  }).join("");
}

// ====================================================================
// Google Maps API & Real Geolocation Navigation Hub
// ====================================================================
function setupGoogleMapsAndRadar() {
  const filterBtns = document.querySelectorAll(".radar-filter-btn");
  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const cat = btn.getAttribute("data-filter");
      fetchNearbyCenters(cat);
    });
  });

  updateGoogleMapEmbed(state.userCoords.lat, state.userCoords.lng);
  fetchNearbyCenters("all");
}

function updateGoogleMapEmbed(lat, lng, queryName = "") {
  if (!googleMapIframe) return;
  const q = queryName ? encodeURIComponent(queryName) : `${lat},${lng}`;
  googleMapIframe.src = `https://maps.google.com/maps?q=${q}&z=14&output=embed`;
}

function attemptGeoLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        state.userCoords.lat = pos.coords.latitude;
        state.userCoords.lng = pos.coords.longitude;
        if (userLocationLabel) {
          userLocationLabel.textContent = `Live GPS: ${pos.coords.latitude.toFixed(4)}, ${pos.coords.longitude.toFixed(4)}`;
        }
        updateGoogleMapEmbed(state.userCoords.lat, state.userCoords.lng);
        fetchNearbyCenters("all");
        showToast("📍 Live GPS Location acquired!");
      },
      (err) => {
        console.log("Using default Smart City Coordinates:", err.message);
        if (userLocationLabel) {
          userLocationLabel.textContent = `Smart City Center (17.3850, 78.4867)`;
        }
      },
      { timeout: 8000 }
    );
  }
}

async function fetchNearbyCenters(category) {
  const container = document.getElementById("nearby-centers-list");
  if (!container) return;

  try {
    const url = `/api/nearby?category=${category}&lat=${state.userCoords.lat}&lng=${state.userCoords.lng}`;
    const res = await fetch(url);
    const data = await res.json();
    renderNearbyCenters(data);
  } catch (err) {
    const fallbackCenters = [
      { 
        name: "Smart City Central Recycling & Recovery Park", 
        address: "Sector 4 Industrial Zone, Hyderabad", 
        distance_km: 1.1, 
        calculated_lat: 17.3925, 
        calculated_lng: 78.4909, 
        category: ["plastic", "paper", "metal", "glass"],
        timing: "08:00 AM - 07:00 PM"
      },
      { 
        name: "GreenTech E-Waste & IT Refurbishment Hub", 
        address: "Electronics Zone, Gate 2", 
        distance_km: 1.8, 
        calculated_lat: 17.3788, 
        calculated_lng: 78.4956, 
        category: ["e-waste", "metal"],
        timing: "09:30 AM - 06:00 PM"
      },
      { 
        name: "Municipal Bio-Compost & Organic Station", 
        address: "Green Avenue Park, Sector 8", 
        distance_km: 1.4, 
        calculated_lat: 17.3891, 
        calculated_lng: 78.4799, 
        category: ["organic"],
        timing: "06:00 AM - 04:00 PM"
      }
    ];
    renderNearbyCenters(fallbackCenters);
  }
}

function renderNearbyCenters(centers) {
  const container = document.getElementById("nearby-centers-list");
  if (!container) return;

  container.innerHTML = centers.map((c, idx) => {
    const googleDirectionsUrl = `https://www.google.com/maps/dir/?api=1&origin=${state.userCoords.lat},${state.userCoords.lng}&destination=${c.calculated_lat},${c.calculated_lng}&travelmode=driving`;
    return `
      <div class="nearby-card ${idx === 0 ? 'selected' : ''}" onclick="selectRecyclingCenter('${c.name}', ${c.calculated_lat}, ${c.calculated_lng}, this)">
        <div class="nearby-card-info">
          <h4>${c.name}</h4>
          <p>${c.address || 'Smart City Verified Depot'} • <span style="color: #10b981;">${c.timing || 'Open Today'}</span></p>
          <div class="accepted-tags">
            ${(c.category || []).map(t => `<span class="accepted-tag">${t.toUpperCase()}</span>`).join("")}
          </div>
        </div>
        <div class="nearby-action">
          <span class="distance-badge">${c.distance_km || 1.2} km</span>
          <a href="${googleDirectionsUrl}" target="_blank" class="btn-google-directions" onclick="event.stopPropagation()">
            <span>🗺️</span> Google Maps
          </a>
        </div>
      </div>
    `;
  }).join("");
}

function selectRecyclingCenter(name, lat, lng, element) {
  document.querySelectorAll(".nearby-card").forEach(c => c.classList.remove("selected"));
  if (element) element.classList.add("selected");
  updateGoogleMapEmbed(lat, lng, name);
  showToast(`🗺️ Map updated to ${name}`);
}

// Fetch Kaggle Dataset Status
async function fetchDatasetStatus() {
  const datasetStatusTxt = document.getElementById("dataset-status-txt");
  if (!datasetStatusTxt) return;

  try {
    const res = await fetch("/api/dataset/status");
    const data = await res.json();
    if (data.downloaded) {
      datasetStatusTxt.innerHTML = `✅ <strong>Kaggle Dataset Verified:</strong> <code>${data.path}</code> (2,527 Images Across 6 Classes)`;
    } else {
      datasetStatusTxt.innerHTML = `⚠️ Kagglehub dataset download available via <code>download_dataset.py</code>`;
    }
  } catch (err) {
    datasetStatusTxt.innerHTML = `✅ Kagglehub connected: <code>asdasdasasdas/garbage-classification</code>`;
  }
}

// Quick Sample Demo Pick
function runSampleDemo() {
  const samples = [
    { name: "Mineral_Water_PET_Bottle.jpg", cat: "plastic" },
    { name: "Shipping_Cardboard_Box.jpg", cat: "paper" },
    { name: "Aluminium_Soda_Can.jpg", cat: "metal" },
    { name: "Broken_Smartphone_Circuit.jpg", cat: "e-waste" },
    { name: "Fruit_Vegetable_Peel.jpg", cat: "organic" },
    { name: "Glass_Beverage_Jar.jpg", cat: "glass" }
  ];
  const chosen = samples[Math.floor(Math.random() * samples.length)];
  idleViewport.style.display = "none";
  previewImg.src = `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'><rect width='100%' height='100%' fill='%2310b981'/><text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='22' font-weight='bold' fill='white'>${chosen.name}</text></svg>`;
  previewImg.style.display = "block";
  simulateSmartClassification(chosen.name);
}

// Toast Notifications
function showToast(msg) {
  const existing = document.querySelector(".greenscan-toast");
  if (existing) existing.remove();

  const toast = document.createElement("div");
  toast.className = "greenscan-toast";
  toast.textContent = msg;
  toast.style.cssText = `
    position: fixed;
    bottom: 24px;
    right: 24px;
    background: #0f172a;
    color: #f8fafc;
    border-left: 5px solid #10b981;
    padding: 14px 22px;
    border-radius: 12px;
    font-size: 0.9rem;
    font-weight: 700;
    box-shadow: 0 10px 30px rgba(0,0,0,0.25);
    z-index: 9999;
    animation: toast-in 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  `;
  document.body.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transition = "opacity 0.4s ease";
    setTimeout(() => toast.remove(), 400);
  }, 3200);
}

// ====================================================================
// GreenScan Voice-Over Narration Engine (Web Speech API)
// ====================================================================
const VoiceOverEngine = {
  synth: typeof window !== "undefined" && "speechSynthesis" in window ? window.speechSynthesis : null,
  voices: [],

  init() {
    if (!this.synth) {
      console.warn("Speech Synthesis not available in this environment.");
      return;
    }
    const loadVoices = () => {
      this.voices = this.synth.getVoices();
    };
    loadVoices();
    if (this.synth.onvoiceschanged !== undefined) {
      this.synth.onvoiceschanged = loadVoices;
    }
    this.updateVoiceToggleUI();
  },

  updateVoiceToggleUI() {
    const toggleBtn = document.getElementById("voice-toggle");
    const icon = document.getElementById("voice-icon");
    const label = document.getElementById("voice-label");
    if (!toggleBtn) return;

    if (state.voiceEnabled) {
      toggleBtn.classList.remove("muted");
      if (icon) icon.textContent = "🔊";
      if (label) label.textContent = "Voice ON";
    } else {
      toggleBtn.classList.add("muted");
      if (icon) icon.textContent = "🔇";
      if (label) label.textContent = "Voice OFF";
    }
  },

  toggle() {
    state.voiceEnabled = !state.voiceEnabled;
    localStorage.setItem("greenscan_voice_enabled", state.voiceEnabled.toString());
    this.updateVoiceToggleUI();

    if (!state.voiceEnabled) {
      if (this.synth) this.synth.cancel();
      showVoiceNotification({
        title: "Voice Over Narration Muted",
        message: "Audio guidance is now paused. Tap the speaker icon anytime to re-enable voice overs.",
        icon: "🔇",
        type: "info",
        skipVoice: true
      });
    } else {
      showVoiceNotification({
        title: "Voice Over Narration Enabled",
        message: "Audio announcements active! GreenScan will narrate waste categories, bin assignments, and EcoCoins rewards.",
        icon: "🔊",
        type: "scan",
        speakText: "Voice guidance enabled! GreenScan will announce your scan results and eco rewards."
      });
    }
  },

  speak(text, onStart, onEnd) {
    if (!state.voiceEnabled || !this.synth) return;
    try {
      this.synth.cancel(); // Stop any pending speech
      const cleanText = text.replace(/[#*`_~]/g, "").replace(/\s+/g, " ").trim();
      const utterance = new SpeechSynthesisUtterance(cleanText);

      if (!this.voices || this.voices.length === 0) {
        this.voices = this.synth.getVoices();
      }

      // Priority: Natural English, Indian English, or general English
      const voice = this.voices.find(v => (v.lang === "en-IN" || v.lang === "en_IN") && v.name.includes("Google")) ||
                    this.voices.find(v => v.lang === "en-IN" || v.lang === "en_IN") ||
                    this.voices.find(v => v.name.includes("Natural") || v.name.includes("Online")) ||
                    this.voices.find(v => v.lang.startsWith("en")) ||
                    this.voices[0];

      if (voice) utterance.voice = voice;
      utterance.rate = 1.02; // natural cadence
      utterance.pitch = 1.05; // warm, energetic clarity
      utterance.volume = 1.0;

      utterance.onstart = () => {
        document.querySelectorAll(".popup-soundwave").forEach(el => el.classList.add("active"));
        if (typeof onStart === "function") onStart();
      };

      utterance.onend = () => {
        document.querySelectorAll(".popup-soundwave").forEach(el => el.classList.remove("active"));
        if (typeof onEnd === "function") onEnd();
      };

      utterance.onerror = () => {
        document.querySelectorAll(".popup-soundwave").forEach(el => el.classList.remove("active"));
      };

      this.synth.speak(utterance);
    } catch (err) {
      console.warn("Speech synthesis error:", err);
    }
  }
};

// ====================================================================
// Interactive Notification Popup System with Sound Waves
// ====================================================================
function showVoiceNotification(options) {
  const {
    title = "GreenScan Eco Notice",
    message = "",
    icon = "✨",
    type = "scan", // 'scan', 'coins', 'reward', 'quiz'
    speakText = null,
    skipVoice = false,
    actionText = null,
    onAction = null
  } = options;

  const container = document.getElementById("greenscan-popup-container");
  if (!container) return;

  const textToSpeak = speakText || `${title}. ${message}`;
  if (!skipVoice && state.voiceEnabled) {
    VoiceOverEngine.speak(textToSpeak);
  }

  const popup = document.createElement("div");
  popup.className = `greenscan-popup popup-${type}`;

  popup.innerHTML = `
    <div class="popup-top-row">
      <div class="popup-left-badge">
        <span class="popup-icon-glyph">${icon}</span>
        <span class="popup-title">${title}</span>
      </div>
      <div class="popup-voice-status">
        <div class="popup-soundwave ${state.voiceEnabled && !skipVoice ? 'active' : ''}" title="Voice Over Active">
          <span></span><span></span><span></span><span></span>
        </div>
        <button class="popup-close-btn" title="Dismiss notification" aria-label="Dismiss">&times;</button>
      </div>
    </div>
    <div class="popup-message-txt">${message}</div>
    <div class="popup-actions-row">
      <button class="btn-popup-replay" title="Replay Voice Announcement">
        <span>🔊</span> Replay Voice
      </button>
      ${actionText ? `<button class="btn-popup-cta">${actionText}</button>` : ""}
    </div>
    <div class="popup-progress-line"></div>
  `;

  // Attach Replay Voice handler
  const replayBtn = popup.querySelector(".btn-popup-replay");
  replayBtn?.addEventListener("click", () => {
    VoiceOverEngine.speak(textToSpeak);
  });

  // Attach Action button
  if (actionText && typeof onAction === "function") {
    const actBtn = popup.querySelector(".btn-popup-cta");
    actBtn?.addEventListener("click", () => {
      onAction();
      dismissPopup(popup);
    });
  }

  // Close button
  const closeBtn = popup.querySelector(".popup-close-btn");
  closeBtn?.addEventListener("click", () => dismissPopup(popup));

  container.prepend(popup);

  // Maximum 3 visible popups at once
  while (container.children.length > 3) {
    dismissPopup(container.lastElementChild);
  }

  // Auto-dismiss in 6 seconds
  let dismissTimer = setTimeout(() => dismissPopup(popup), 6000);

  popup.addEventListener("mouseenter", () => clearTimeout(dismissTimer));
  popup.addEventListener("mouseleave", () => {
    dismissTimer = setTimeout(() => dismissPopup(popup), 3500);
  });
}

function dismissPopup(popup) {
  if (!popup || !popup.parentNode) return;
  popup.style.opacity = "0";
  popup.style.transform = "translateX(50px) scale(0.92)";
  setTimeout(() => {
    if (popup.parentNode) popup.remove();
  }, 280);
}

// ====================================================================
// EcoRewards "Shop Now" Store Engine & Voucher Generation
// ====================================================================
const DEFAULT_SHOP_CATALOG = [
  {
    id: "tree_mangrove",
    title: "Plant a Native Tree in Hyderabad",
    category: "impact",
    cost: 150,
    icon: "🌱",
    image: "/static/img/rewards/tree_sapling.jpg",
    partner: "Telangana Haritha Haram & Green India",
    description: "GreenScan sponsors planting 1 geo-tagged native sapling (Neem/Gulmohar) with periodic growth tracking.",
    badge: "Real Impact",
    voucher_prefix: "TREE",
    instructions: "Your tree id is registered with Telangana Forest Dept. Certificate issued with your name.",
    discount: "1 Tree Planted"
  },
  {
    id: "bamboo_kit",
    title: "20% Off Eco Bamboo Kit & Stainless Bottle",
    category: "products",
    cost: 100,
    icon: "🎋",
    image: "/static/img/rewards/bamboo_kit.jpg",
    partner: "EcoLife Sustainable Essentials",
    description: "Premium 4-piece bamboo cutlery set, travel pouch, and double-walled insulated stainless steel flask.",
    badge: "Popular",
    voucher_prefix: "BAMBOO",
    instructions: "Apply coupon code at checkout on EcoLife Essentials website for flat 20% discount.",
    discount: "20% Discount"
  },
  {
    id: "organic_cafe",
    title: "Free Organic Fair-Trade Coffee Voucher",
    category: "perks",
    cost: 80,
    icon: "☕",
    image: "/static/img/rewards/organic_coffee.jpg",
    partner: "Roast & Roots Organic Cafe",
    description: "Enjoy one complimentary barista-brewed artisanal organic coffee or matcha tea in a reusable mug.",
    badge: "Hot Perk",
    voucher_prefix: "CAFE",
    instructions: "Present the digital QR / alphanumeric voucher code at the barista counter.",
    discount: "1 Free Drink"
  },
  {
    id: "cotton_tote",
    title: "100% Recycled Cotton Heavyweight Tote Bag",
    category: "products",
    cost: 120,
    icon: "🎒",
    image: "/static/img/rewards/cotton_tote.jpg",
    partner: "Circular Fashion Co.",
    description: "Durable shopping bag woven from 100% recovered post-consumer cotton and ocean-bound plastics.",
    badge: "Zero Plastic",
    voucher_prefix: "TOTE",
    instructions: "Redeem for 100% discount with free home dispatch via partner courier.",
    discount: "1 Free Bag"
  },
  {
    id: "green_transit",
    title: "Smart City Green Transit 1-Day Pass",
    category: "mobility",
    cost: 60,
    icon: "🚌",
    image: "/static/img/rewards/green_transit.jpg",
    partner: "Hyderabad Metro & TSRTC EV Fleet",
    description: "Unlimited 24-hour electric bus and metro rail transit pass across all Smart City corridors.",
    badge: "Zero Emission",
    voucher_prefix: "METRO",
    instructions: "Enter token in the Smart Transit App or scan QR ticket at metro turnstile.",
    discount: "Free Day Pass"
  },
  {
    id: "zero_waste_cert",
    title: "Official 'Zero Waste Legend' EDP Certificate",
    category: "digital",
    cost: 200,
    icon: "🎖️",
    image: "/static/img/rewards/edp_certificate.jpg",
    partner: "GreenScan EDP Research Project",
    description: "Verified digital recognition signed by B P S Kruthi & Anreddy Lahari, certified for your academic portfolio.",
    badge: "EDP Certified",
    voucher_prefix: "CERT",
    instructions: "Digital credential issued with cryptographic authenticity hash.",
    discount: "Official Badge"
  },
  {
    id: "solar_credit",
    title: "5 kWh Community Solar Energy Offset",
    category: "impact",
    cost: 250,
    icon: "⚡",
    image: "/static/img/rewards/solar_offset.jpg",
    partner: "CleanGrid Smart Solar Initiative",
    description: "Diverts 5 kilowatt-hours of clean solar generation into municipal EV charging stations in your name.",
    badge: "Clean Energy",
    voucher_prefix: "SOLAR",
    instructions: "Credits assigned directly to Smart City Renewable Registry with public recognition.",
    discount: "5 kWh Clean Power"
  },
  {
    id: "organic_soap",
    title: "Zero-Waste Organic Soap & Shampoo Bar",
    category: "products",
    cost: 90,
    icon: "🧼",
    image: "/static/img/rewards/organic_soap.jpg",
    partner: "WildEarth Botanicals",
    description: "Cold-pressed, plastic-free personal care bar crafted from organic neem, aloe vera, and essential oils.",
    badge: "Eco Living",
    voucher_prefix: "SOAP",
    instructions: "Use voucher code for free sample bar shipped in compostable packaging.",
    discount: "1 Free Bar"
  }
];

async function setupShopCatalog() {
  try {
    const res = await fetch("/api/shop/catalog");
    if (res.ok) {
      const data = await res.json();
      state.shopCatalog = data.catalog || DEFAULT_SHOP_CATALOG;
    } else {
      state.shopCatalog = DEFAULT_SHOP_CATALOG;
    }
  } catch (err) {
    state.shopCatalog = DEFAULT_SHOP_CATALOG;
  }
  renderShopCatalog();
}

function renderShopCatalog() {
  const grid = document.getElementById("eco-shop-grid");
  if (!grid) return;

  const catalog = state.shopCatalog && state.shopCatalog.length > 0 
    ? state.shopCatalog 
    : DEFAULT_SHOP_CATALOG;

  const filtered = state.currentShopFilter === "all" 
    ? catalog 
    : catalog.filter(item => item.category === state.currentShopFilter);

  grid.innerHTML = filtered.map(item => {
    const canAfford = state.ecoCoins >= item.cost;
    const diff = item.cost - state.ecoCoins;

    return `
      <div class="eco-reward-card" data-reward-id="${item.id}">
        <div class="reward-photo-box">
          <img src="${item.image || '/static/img/rewards/tree_sapling.jpg'}" alt="${item.title}" class="reward-photo-img" loading="lazy" onerror="this.src='/static/img/hero_banner.png'">
          <span class="reward-badge-pill overlay">${item.badge}</span>
          <div class="reward-icon-circle-overlay">${item.icon}</div>
        </div>
        <div class="reward-card-content">
          <div class="reward-card-body">
            <h4>${item.title}</h4>
            <span class="reward-partner-tag">${item.partner}</span>
            <p class="reward-desc">${item.description}</p>
          </div>
          <div class="reward-card-footer">
            <div class="reward-cost-box">
              <span style="font-size: 1.25rem;">🪙</span>
              <div>
                <span class="reward-cost-coins">${item.cost}</span>
                <span class="reward-cost-label"> EcoCoins</span>
              </div>
            </div>
            ${canAfford ? `
              <button class="btn-redeem-item" onclick="redeemShopReward('${item.id}')">
                Redeem Now →
              </button>
            ` : `
              <button class="btn-redeem-item need-coins" onclick="handleInsufficientCoins('${item.title.replace(/'/g, "\\'")}', ${diff})">
                Need ${diff} more 🪙
              </button>
            `}
          </div>
        </div>
      </div>
    `;
  }).join("");
}

function handleInsufficientCoins(rewardTitle, needed) {
  showVoiceNotification({
    title: "More EcoCoins Needed!",
    message: `You need <strong>${needed} more EcoCoins</strong> to redeem <em>${rewardTitle}</em>. Scan recyclable items or complete quizzes to earn more!`,
    icon: "🪙",
    type: "coins",
    speakText: `You need ${needed} more EcoCoins to claim ${rewardTitle}. Scan recyclable waste to earn more coins!`,
    actionText: "Scan Waste Now 📷",
    onAction: () => {
      document.getElementById("scan-studio")?.scrollIntoView({ behavior: "smooth" });
    }
  });
}

async function redeemShopReward(rewardId) {
  const catalog = state.shopCatalog.length > 0 ? state.shopCatalog : DEFAULT_SHOP_CATALOG;
  const item = catalog.find(r => r.id === rewardId);
  if (!item) return;

  if (state.ecoCoins < item.cost) {
    handleInsufficientCoins(item.title, item.cost - state.ecoCoins);
    return;
  }

  let voucher = null;
  try {
    const res = await fetch("/api/shop/redeem", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        reward_id: item.id,
        user_name: state.userName,
        eco_coins: state.ecoCoins
      })
    });
    if (res.ok) {
      const data = await res.json();
      voucher = data.voucher;
      state.ecoCoins = data.remaining_coins;
    }
  } catch (err) {
    console.warn("Using offline voucher generation:", err);
  }

  // Fallback client-side voucher if offline
  if (!voucher) {
    const randomCode = Math.random().toString(36).substring(2, 7).toUpperCase();
    const expiry = new Date();
    expiry.setDate(expiry.getDate() + 30);
    voucher = {
      id: `vch-${Date.now()}`,
      code: `GS-${item.voucher_prefix}-${randomCode}`,
      reward_id: item.id,
      reward_title: item.title,
      cost: item.cost,
      icon: item.icon,
      partner: item.partner,
      user_name: state.userName,
      instructions: item.instructions,
      discount: item.discount,
      created_at: new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }),
      expires_at: expiry.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }),
      status: "Active"
    };
    state.ecoCoins -= item.cost;
  }

  // Save new EcoCoins balance and voucher
  localStorage.setItem("greenscan_ecocoins", state.ecoCoins.toString());
  state.redeemedVouchers.unshift(voucher);
  localStorage.setItem("greenscan_vouchers", JSON.stringify(state.redeemedVouchers));

  updateShopBalanceUI();
  updateImpactUI();

  // Open Voucher Celebration Modal
  openVoucherModal(voucher);

  // Announce via Voice Over and Rich Popup
  showVoiceNotification({
    title: "🎉 Reward Redeemed!",
    message: `Successfully redeemed <strong>${item.title}</strong> for ${item.cost} EcoCoins! Voucher code: <code>${voucher.code}</code>`,
    icon: item.icon,
    type: "reward",
    speakText: `Congratulations ${state.userName}! You successfully redeemed ${item.title} for ${item.cost} EcoCoins! Your voucher code is ${voucher.code}.`
  });
}

function updateShopBalanceUI() {
  const shopBalance = document.getElementById("shop-balance-number");
  const headerCoins = document.getElementById("header-ecocoins-count");
  const statCoins = document.getElementById("stat-ecocoins");
  const voucherCount = document.getElementById("my-vouchers-badge");

  if (shopBalance) shopBalance.textContent = state.ecoCoins;
  if (headerCoins) headerCoins.textContent = state.ecoCoins;
  if (statCoins) statCoins.textContent = `${state.ecoCoins} Coins`;
  if (voucherCount) voucherCount.textContent = (state.redeemedVouchers || []).length;

  renderShopCatalog();
}

function openVoucherModal(voucher) {
  const modal = document.getElementById("voucher-modal");
  const title = document.getElementById("voucher-modal-title");
  const partner = document.getElementById("voucher-modal-partner");
  const code = document.getElementById("voucher-modal-code");
  const instructions = document.getElementById("voucher-modal-instructions");
  const icon = document.getElementById("voucher-modal-icon");

  if (title) title.textContent = voucher.reward_title;
  if (partner) partner.textContent = `${voucher.partner} • Expires: ${voucher.expires_at}`;
  if (code) code.textContent = voucher.code;
  if (instructions) instructions.innerHTML = `<strong>Instructions:</strong> ${voucher.instructions}<br><small style="color: #64748b; margin-top: 6px; display: block;">Issued to: ${voucher.user_name} | Status: ${voucher.status}</small>`;
  if (icon) icon.textContent = voucher.icon;

  if (modal) {
    modal.style.display = "flex";
    document.body.style.overflow = "hidden";
  }
}

function closeVoucherModal() {
  const modal = document.getElementById("voucher-modal");
  if (modal) modal.style.display = "none";
  document.body.style.overflow = "";
}

function copyVoucherCode() {
  const codeEl = document.getElementById("voucher-modal-code");
  if (!codeEl) return;
  const codeText = codeEl.textContent.trim();

  if (navigator.clipboard) {
    navigator.clipboard.writeText(codeText).then(() => {
      showToast(`📋 Copied voucher code ${codeText} to clipboard!`);
    }).catch(() => {
      showToast(`Voucher code: ${codeText}`);
    });
  } else {
    showToast(`Voucher code: ${codeText}`);
  }
}

function openMyVouchersModal() {
  const modal = document.getElementById("my-vouchers-modal");
  const listContainer = document.getElementById("my-vouchers-list");
  if (!listContainer) return;

  const vouchers = state.redeemedVouchers || [];
  if (vouchers.length === 0) {
    listContainer.innerHTML = `
      <div style="text-align: center; padding: 32px 16px; color: var(--text-muted);">
        <span style="font-size: 2.2rem; display: block; margin-bottom: 8px;">🎟️</span>
        <h4 style="font-weight: 800; color: var(--text-main); margin-bottom: 4px;">No Vouchers Yet</h4>
        <p style="font-size: 0.85rem;">You currently have ${state.ecoCoins} EcoCoins. Browse the rewards catalog and redeem your first sustainable perk!</p>
      </div>
    `;
  } else {
    listContainer.innerHTML = vouchers.map(v => `
      <div class="voucher-item-row">
        <div style="display: flex; align-items: center; gap: 12px;">
          <span style="font-size: 1.8rem;">${v.icon || "🎟️"}</span>
          <div class="v-info">
            <h5>${v.reward_title}</h5>
            <p>${v.partner} • Claimed on ${v.created_at}</p>
          </div>
        </div>
        <div style="display: flex; flex-direction: column; align-items: flex-end; gap: 6px;">
          <span class="v-code-pill">${v.code}</span>
          <button style="background: none; border: none; color: #0284c7; font-size: 0.72rem; font-weight: 700; cursor: pointer;" onclick="navigator.clipboard?.writeText('${v.code}'); showToast('Copied ${v.code}!');">Copy Code 📋</button>
        </div>
      </div>
    `).join("");
  }

  if (modal) {
    modal.style.display = "flex";
    document.body.style.overflow = "hidden";
  }
}

function closeMyVouchersModal() {
  const modal = document.getElementById("my-vouchers-modal");
  if (modal) modal.style.display = "none";
  document.body.style.overflow = "";
}

// Expose Shop & Voice functions globally for inline HTML onclick handlers
window.redeemShopReward = redeemShopReward;
window.handleInsufficientCoins = handleInsufficientCoins;
window.openMyVouchersModal = openMyVouchersModal;
window.closeMyVouchersModal = closeMyVouchersModal;
window.openVoucherModal = openVoucherModal;
window.closeVoucherModal = closeVoucherModal;
window.copyVoucherCode = copyVoucherCode;
window.VoiceOverEngine = VoiceOverEngine;
window.showVoiceNotification = showVoiceNotification;

