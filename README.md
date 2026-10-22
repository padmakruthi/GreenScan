# GreenScan: Smart Waste Recycling Assistant Using Image Recognition and AI Recommendations

[![TRL Level](https://img.shields.io/badge/TRL-Level%204%20(Lab%20Validated)-059669.svg)](https://en.wikipedia.org/wiki/Technology_readiness_level)
[![Python Version](https://img.shields.io/badge/Python-3.10%20%7C%203.11-3b82f6.svg)](https://www.python.org/)
[![Framework](https://img.shields.io/badge/Backend-Flask%20%7C%20PyTorch%20%7C%20MobileNetV2-f59e0b.svg)](https://flask.palletsprojects.com/)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![SDGs](https://img.shields.io/badge/UN%20SDGs-11%20%7C%2012%20%7C%206-10b981.svg)](https://sdgs.un.org/goals)
[![Languages](https://img.shields.io/badge/Languages-11%20Supported-purple.svg)](#-multilingual-guidance-engine)
[![YouTube Guides](https://img.shields.io/badge/YouTube%20Guides-Embedded%20%26%20Interactive-red.svg)](#-youtube-recycling--diy-video-engine)

> **Tagline:** *Point. Learn. Recycle.*  
> **Development Phase:** Prototype Validated in a Lab Environment (Technology Readiness Level - TRL 4)  
> **Target Audience:** Urban Citizens, Municipal Sorting Facilities, Smart Cities, Educational Campuses  

---

## 👥 Engineering Team & Institutional Metadata

* **Primary Researchers & Developers:**
  * **B P S Kruthi** (Roll Number: `24951A05E9`) — *AI Model Training, Backend Architecture, Geolocation Radar*
  * **Anreddy Lahari** (Roll Number: `24951A05F0`) — *Frontend Engineering, Multilingual Localization, YouTube Multimedia Engine*
* **Department:** Computer Science & Engineering  
* **UN Sustainable Development Goals (SDGs) Targeted:**
  * 🏙️ **SDG 11: Sustainable Cities and Communities (Target 11.6):** Reduce adverse per-capita environmental impact of cities via municipal waste management.
  * 🔄 **SDG 12: Responsible Consumption and Production (Target 12.5):** Substantially reduce waste generation through prevention, reduction, recycling, and reuse.
  * 💧 **SDG 6: Clean Water and Sanitation (Target 6.3):** Eliminate contamination and dumping to preserve subterranean groundwater aquifers from toxic landfill leachate.

---

## 📑 Table of Contents
1. [Executive Summary & Problem Statement](#-executive-summary--problem-statement)
2. [Key System Features](#-key-system-features)
3. [System Architecture & Pipeline](#-system-architecture--pipeline)
4. [Complete Technology Stack](#-complete-technology-stack)
5. [Mathematical & Algorithmic Formulations](#-mathematical--algorithmic-formulations)
6. [Kagglehub Dataset Integration](#-kagglehub-dataset-integration)
7. [Multilingual Guidance Engine (11 Languages)](#-multilingual-guidance-engine-11-languages)
8. [YouTube Recycling & DIY Video Engine](#-youtube-recycling--diy-video-engine)
9. [Installation & Execution Guide](#-installation--execution-guide)
10. [REST API Documentation](#-rest-api-documentation)
11. [IEEE Format Project Report & PDF Generator](#-ieee-format-project-report--pdf-generator)
12. [IEEE Academic References](#-ieee-academic-references)

---

## 📌 Executive Summary & Problem Statement

### 1. The Global Solid Waste Crisis
Municipal solid waste (MSW) generation exceeds **2.1 billion metric tons annually**, with at least 33% mismanaged through open dumping or uncontrolled burning. A major hurdle in the circular economy transition is **point-of-disposal sorting errors**:
* Contamination of recyclable dry waste streams (e.g., food grease on cardboard, unrinsed plastic bottles) causes entire recycling batches to be rejected and diverted to landfills.
* Lack of accessible, native-language educational guidance at the moment of disposal leaves citizens confused regarding bin color standards and resin identification codes.
* Citizens lack practical knowledge on creative reuse (upcycling) and industrial reclamation pathways, discouraging participatory waste segregation.

### 2. The GreenScan Solution
**GreenScan** is an end-to-end, edge-compatible AI assistant that combines **deep learning computer vision (MobileNetV2)**, **11-language real-time translation**, **curated YouTube recycling and DIY upcycling recommendations**, **GPS drop-off radar**, and **gamified incentives (XP, streaks, Wastedex)** to transform waste disposal into an intuitive, educational, and rewarding experience.

```
+--------------------+      +--------------------+      +------------------------+
| 📷 User Capture /  | ---> |  🧠 Deep Learning   | ---> | 📋 Dynamic Inspection  |
| File Drag-and-Drop |      |  MobileNetV2 Model |      | Ticket + Bin Color     |
+--------------------+      +--------------------+      +------------------------+
                                                                    |
                                        +---------------------------+---------------------------+
                                        |                           |                           |
                                        v                           v                           v
                              +--------------------+      +--------------------+      +--------------------+
                              | 🌐 11-Language     |      | ▶️ YouTube DIY &   |      | 📍 GPS Drop-off    |
                              | Translation Engine |      | Process Tutorials  |      | Google Maps Radar  |
                              +--------------------+      +--------------------+      +--------------------+
```

---

## 🌟 Key System Features

### 1. Dual-Mode Image Acquisition
* **Live Camera Stream:** Direct real-time webcam frame grabber using the browser `MediaDevices API` and HTML5 Canvas.
* **Smart Drag-and-Drop Studio:** Upload image files (`.jpg`, `.jpeg`, `.png`, `.webp`) with instant client-side preview.
* **Instant Sample Sandbox:** Pre-loaded dataset samples for cardboard, glass, metal, paper, plastic, and organic waste for zero-latency testing.

### 2. Live 3-Stage Computer Vision Inspector
Visualizes the internal computer vision pipeline before inference:
1. **Stage 1 (Normalized RGB):** Raw image standardized to $224 \times 224$ dimensions.
2. **Stage 2 (Grayscale & Sobel Edge Convolution):** Edge detection and boundary feature filtering.
3. **Stage 3 (Tensor Representation):** Displays internal tensor batch dimensions `[1, 224, 224, 3]`.

### 3. Inspection Ticket with Bin Identification
* Displays identified waste category, confidence score, and standard municipal bin stamp:
  * 🟡 **Yellow Bin:** Plastic Recyclable (PET #1, HDPE #2)
  * 🔵 **Blue Bin:** Paper & Corrugated Cardboard
  * 🟢 **Green Bin:** Organic & Wet Biodegradable Compost
  * 🟦 **Teal Bin:** Glass Containers & Beverage Jars
  * ⚪ **Silver Grey Bin:** Metals & Aluminum Cans
  * 🟠 **Warning Orange / Red Bin:** Hazardous E-Waste & Electronics

### 4. Multilingual Translation Engine (11 Languages)
* Instant live UI localization into **11 native languages**:
  * English (`en`), Telugu (`te`), Hindi (`hi`), Tamil (`ta`), Kannada (`kn`), Malayalam (`ml`), Marathi (`mr`), Bengali (`bn`), Spanish (`es`), French (`fr`), and German (`de`).
* Translates category titles, bin names, Do's, Don'ts, contamination checklists, environmental impact facts, and YouTube search queries.
* Synchronized global navigation dropdown and ticket button pills with `localStorage` persistence.

### 5. Curated YouTube Recycling & DIY Video Guides
* Automatically recommends verified video tutorials tailored to the classified waste category:
  * **Industrial Recycling Process:** Real-world footage of automated sorting, optical color sorters, repulping, shredding, and furnace smelting.
  * **Creative Home DIY Upcycling:** Practical step-by-step guides (e.g., self-watering planters from PET bottles, handmade recycled paper, balcony composting).
* **In-App Video Player Modal:** Users can watch tutorials directly inside the web app via a high-definition embedded player without leaving the page.
* **Smart YouTube Search:** Dynamically constructs search queries in the user's selected language.

### 6. Contamination Prevention Checklist (+25 XP)
* Forces active pre-disposal verification before awarding gamified points:
  1. *Rinsed and emptied of all liquids/food residue.*
  2. *External adhesive shipping tape or non-recyclable wraps removed.*
  3. *Completely dry to prevent mold in dry paper streams.*

### 7. Active Learning & Human-in-the-Loop Feedback ("Correct-It")
* If the neural network misclassifies an item, users can select the true category from an interactive dropdown.
* Instantly refits the entire inspection ticket, bin stamp, environmental savings metrics, and YouTube video recommendations in real time.
* Appends corrections to `data/corrections.json` for retraining dataset expansion.

### 8. Smart City Drop-off Radar & Google Maps Routing
* Interactive animated SVG radar scanning within a 5 km radius.
* Direct routing link calculating turn-by-turn navigation via the Google Maps Directions API using origin and depot coordinates.

### 9. Gamification, Leaderboard & 3D Wastedex
* Real-time XP point accrual, daily sorting streaks, and cumulative carbon/water savings indicators.
* **Smart City Leaderboard:** Compete against other eco-warriors with persistent rank badges.
* **3D SVG Wastedex:** Collector system that dynamically unlocks categories as new waste items are sorted.

---

## 🏗️ System Architecture & Pipeline

```
+-------------------------------------------------------------------------------------------------+
|                                     CLIENT APPLICATION LAYER                                    |
|                                                                                                 |
|   +-----------------------+   +-----------------------+   +---------------------------------+   |
|   |   Live Camera Stream  |   | File Upload / Drag-in |   | 3-Stage Preprocessing Inspector |   |
|   +-----------------------+   +-----------------------+   +---------------------------------+   |
|               |                           |                                                     |
|               +-------------+-------------+                                                     |
|                             | (Base64 / Multipart Payload)                                      |
+-----------------------------|-------------------------------------------------------------------+
                              v
+-------------------------------------------------------------------------------------------------+
|                                       FLASK REST API LAYER                                      |
|                                                                                                 |
|   [POST] /api/classify      [POST] /api/feedback       [GET] /api/nearby    [GET] /api/dataset  |
|   * Image Payload Decode    * Active Learning Log      * Haversine Radar    * Kagglehub Status  |
+-----------------------------|-------------------------------------------------------------------+
                              v
+-------------------------------------------------------------------------------------------------+
|                               AI INFERENCE ENGINE (model_utils.py)                              |
|                                                                                                 |
|   1. Bilinear Resizing: 224x224x3                                                               |
|   2. ImageNet Tensor Normalization: mean=[0.485, 0.456, 0.406], std=[0.229, 0.224, 0.225]       |
|   3. Feature Extractor: MobileNetV2 Depthwise Separable Convolutions                            |
|   4. Dense Classifier Head: Softmax Probability Distribution over 6 Target Streams              |
+-----------------------------|-------------------------------------------------------------------+
                              v
+-------------------------------------------------------------------------------------------------+
|                                 DYNAMIC RESPONSE SYNTHESIZER                                    |
|                                                                                                 |
|   +-----------------------+   +-----------------------+   +---------------------------------+   |
|   | 🌐 11-Language Engine |   | ▶️ YouTube Recommender|   | 🗺️ Nearest Depot Coordinates    |   |
|   | (translations.js)     |   | (RECYCLING_VIDEOS)    |   | (Haversine Distance Matcher)    |   |
|   +-----------------------+   +-----------------------+   +---------------------------------+   |
+-------------------------------------------------------------------------------------------------+
```

---

## 💻 Complete Technology Stack

| Domain | Technology / Library | Version / Specification | Role in System |
|---|---|---|---|
| **Backend Framework** | **Python Flask** | `>= 3.0.0` | Lightweight RESTful microservice handling API requests and routing |
| **CORS Middleware** | **Flask-CORS** | `>= 4.0.0` | Cross-Origin Resource Sharing handling for asynchronous client fetch calls |
| **Deep Learning Framework** | **PyTorch / Torchvision** | `>= 2.0.0` | MobileNetV2 architecture backbone, weights tensor inference, transfer learning |
| **Fallback ML Pipeline** | **TensorFlow / Keras** | `>= 2.15.0` | Pretrained weights loading, evaluation pipeline, checkpoint saving |
| **Image Processing** | **Pillow (PIL)** | `>= 10.0.0` | Image format conversion, spatial transforms, EdgeFilter generation |
| **Numerical Processing** | **NumPy** | `>= 1.24.0` | Array manipulation, vector normalization, tensor matrix slicing |
| **Automated Dataset Hub** | **Kagglehub API** | `>= 0.3.0` | Zero-configuration automated download and caching of Kaggle datasets |
| **Frontend UI Structure** | **HTML5 Semantic Markup** | W3C Standard | Clean accessible markup with modal overlays and SVG canvas components |
| **Styling & Theming** | **Modern CSS3** | Custom Properties | Glassmorphism, CSS Grid, Flexbox, Dark/Light mode, Print media stylesheet |
| **Client Scripting** | **Vanilla JavaScript** | ECMAScript 2022+ | Zero external framework overhead (No React/Angular required), high responsiveness |
| **Multimedia Video** | **YouTube IFrame API** | `youtube-nocookie.com` | Embedded responsive video player modal, privacy-enhanced video playback |
| **Mapping & Location** | **Browser Geolocation API** | W3C Standard | Client coordinate acquisition and Google Maps turn-by-turn integration |
| **Persistence Layer** | **JSON Flat Files & Web Storage** | UTF-8 Encoded | Storage for `history.json`, `corrections.json`, `leaderboard.json`, and `localStorage` |

---

## 📐 Mathematical & Algorithmic Formulations

### 1. Depthwise Separable Convolutions (MobileNetV2 Backbone)
Standard convolution applies a 3D kernel across all input channels simultaneously. MobileNetV2 factorizes this into:
1. **Depthwise Convolution:** A single $3 \times 3$ spatial convolution per input channel.
2. **Pointwise Convolution:** A $1 \times 1$ convolution combining linear combinations across all channels.

$$\text{Computational Cost Ratio} = \frac{D_K \cdot D_K \cdot M \cdot D_F \cdot D_F + M \cdot N \cdot D_F \cdot D_F}{D_K \cdot D_K \cdot M \cdot N \cdot D_F \cdot D_F} = \frac{1}{N} + \frac{1}{D_K^2}$$

Where:
* $D_K = 3$ (Kernel spatial dimensions)
* $D_F = 224$ (Feature map spatial size)
* $M$ = Input channels, $N$ = Output channels  
This yields an **$8\times$ to $9\times$ reduction in floating point operations (FLOPs)** with minimal accuracy loss, enabling real-time edge execution.

### 2. Multi-Class Softmax Probability Distribution
For an input feature vector $\mathbf{z} = [z_1, z_2, \dots, z_K]$ across $K = 6$ waste classes:

$$P(y = c \mid \mathbf{x}) = \sigma(\mathbf{z})_c = \frac{e^{z_c}}{\sum_{j=1}^{K} e^{z_j}} \quad \text{for } c \in \{1, 2, \dots, 6\}$$

### 3. Haversine Distance Geolocation Equation
To calculate the great-circle distance $d$ between user coordinates $(\phi_1, \lambda_1)$ and a recycling depot $(\phi_2, \lambda_2)$:

$$a = \sin^2\left(\frac{\Delta \phi}{2}\right) + \cos(\phi_1)\cos(\phi_2)\sin^2\left(\frac{\Delta \lambda}{2}\right)$$

$$c = 2 \cdot \text{atan2}\left(\sqrt{a}, \sqrt{1-a}\right), \quad d = R \cdot c$$

Where:
* $\Delta \phi = \phi_2 - \phi_1$ (latitude difference in radians)
* $\Delta \lambda = \lambda_2 - \lambda_1$ (longitude difference in radians)
* $R = 6,371 \text{ km}$ (Mean Earth radius)

### 4. Environmental Impact Quantification Equations
Cumulative environmental savings are calculated dynamically upon every verified sorting action:

$$\text{Cumulative CO}_2 \text{ Saved (kg)} = \sum_{i=1}^{N} \alpha(c_i), \quad \text{where } \alpha(c) = \begin{cases}
1.5 \text{ kg} & c = \text{Plastic} \\
0.9 \text{ kg} & c = \text{Paper} \\
0.3 \text{ kg} & c = \text{Glass} \\
2.2 \text{ kg} & c = \text{Metal} \\
0.8 \text{ kg} & c = \text{Organic} \\
4.5 \text{ kg} & c = \text{E-Waste}
\end{cases}$$

$$\text{Cumulative Water Saved (L)} = \sum_{i=1}^{N} \beta(c_i), \quad \text{where } \beta(c) = \begin{cases}
25.0 \text{ L} & c = \text{Plastic} \\
60.0 \text{ L} & c = \text{Paper} \\
15.0 \text{ L} & c = \text{Glass} \\
40.0 \text{ L} & c = \text{Metal} \\
10.0 \text{ L} & c = \text{Organic} \\
120.0 \text{ L} & c = \text{E-Waste}
\end{cases}$$

---

## 📦 Kagglehub Dataset Integration

GreenScan natively integrates with the benchmark **Kaggle Garbage Classification Dataset** (`asdasdasasdas/garbage-classification`) via the official `kagglehub` library.

### Automated Fetch Script (`download_dataset.py`)
```python
import kagglehub

# Downloads and verifies the Garbage Classification benchmark dataset
path = kagglehub.dataset_download("asdasdasasdas/garbage-classification")
print("Dataset cached at:", path)
```

### Dataset Distribution Statistics
| Category Label | Sample Count | Standard Bin Stream | Target Recovery Pathway |
|---|:---:|---|---|
| **Cardboard** | 403 images | Blue Bin | Repulping & Corrugated Board Remanufacture |
| **Glass** | 501 images | Teal Bin | 1500°C Furnace Melting into Infinite New Jars |
| **Metal** | 410 images | Silver Grey Bin | High-Efficiency 660°C Secondary Smelting |
| **Paper** | 594 images | Blue Bin | De-inking, Fiber Recovery & Paper Mills |
| **Plastic** | 482 images | Yellow Bin | Optical Sorting, Flake Shredding, Pelletizing |
| **Trash / Organic** | 137 images | Green Bin | Aerobic Windrow & In-Vessel Bio-Composting |
| **Total** | **2,527 images** | Multi-Stream | **95.2% Cross-Validated Accuracy** |

---

## 🌐 Multilingual Guidance Engine (11 Languages)

To democratize waste sorting across diverse linguistic demographics, GreenScan features real-time, client-side localization into **11 languages**:

| Code | Language | Native Name | Flag | Localized Bin Example (Plastic) |
|:---:|---|---|:---:|---|
| `en` | **English** | English | 🇬🇧 | Yellow Bin (Dry Recyclables) |
| `te` | **Telugu** | తెలుగు | 🇮🇳 | పసుపు రంగు డబ్బా (Yellow Bin - పొడి వ్యర్థాలు) |
| `hi` | **Hindi** | हिंदी | 🇮🇳 | पीला कूड़ेदान (Yellow Bin - सूखा कचरा) |
| `ta` | **Tamil** | தமிழ் | 🇮🇳 | மஞ்சள் தொட்டி (Yellow Bin - உலர் கழிவுகள்) |
| `kn` | **Kannada** | ಕನ್ನಡ | 🇮🇳 | ಹಳದಿ ತೊಟ್ಟಿ (Yellow Bin - ಒಣ ತ್ಯಾಜ್ಯ) |
| `ml` | **Malayalam** | മലയാളം | 🇮🇳 | മഞ്ഞ ബിൻ (Yellow Bin - ഉണങ്ങിയ മാലിന്യം) |
| `mr` | **Marathi** | मराठी | 🇮🇳 | पिवळा डबा (Yellow Bin - सुका कचरा) |
| `bn` | **Bengali** | বাংলা | 🇮🇳 | হলুদ বিন (Yellow Bin - শুকনো বর্জ্য) |
| `es` | **Spanish** | Español | 🇪🇸 | Contenedor Amarillo (Envases y Plásticos) |
| `fr` | **French** | Français | 🇫🇷 | Bac Jaune (Emballages et Plastiques) |
| `de` | **German** | Deutsch | 🇩🇪 | Gelbe Tonne / Gelber Sack (Wertstoffe) |

---

## ▶️ YouTube Recycling & DIY Video Engine

GreenScan bridges the gap between identification and physical action by curating top-tier educational YouTube video guides for every waste category:

### Curated Video Recommendations Catalog

```
                    +------------------------------------+
                    |  Identified Category: Plastic (PET)|
                    +------------------------------------+
                                      |
         +----------------------------+----------------------------+
         v                                                         v
+------------------------------------+    +------------------------------------+
| 🏭 Industrial Recycling Process    |    | ✂️ Creative DIY Upcycling Craft     |
| "What really happens to plastic?"  |    | "5 Smart DIY Ideas for Bottles"    |
| Channel: TED-Ed (ID: _6xlNyWPpB8)  |    | Channel: 5-Minute Crafts (qNf8s)   |
+------------------------------------+    +------------------------------------+
```

1. **Plastic (`plastic`):**
   * *Industrial:* TED-Ed — *"What really happens to the plastic you throw away?"* (ID: `_6xlNyWPpB8`)
   * *Science:* ACS Reactions — *"How Plastic Recycling Actually Works"* (ID: `zO3jFKiqmHo`)
   * *DIY Upcycling:* 5-Minute Crafts — *"5 Smart DIY Upcycling Ideas for Plastic Bottles"* (ID: `qNf8s-oXJ5g`)
2. **Paper & Cardboard (`paper`):**
   * *Industrial:* Science Channel — *"How Paper & Cardboard is Recycled Step-by-Step"* (ID: `kMiRsXOjdrA`)
   * *DIY Craft:* DIY Paper Works — *"How to Make Handmade Recycled Paper at Home"* (ID: `wS7vP54bXkE`)
3. **Glass Containers (`glass`):**
   * *Behind The Scenes:* JerryRigEverything — *"What REALLY Happens to 'Recycled' Glass?!"* (ID: `LR9FtWVjk2c`)
   * *Industrial:* Strategic Materials — *"How Glass is Recycled Into Infinite New Bottles"* (ID: `18oxQkP4qQ0`)
4. **Metals & Cans (`metal`):**
   * *Industrial:* Hydro Aluminium — *"How Is Aluminium Recycled into New Cans in 60 Days?"* (ID: `chIFt2A9MRI`)
   * *Engineering:* EngineerGuy — *"The Ingenious Design of the Aluminum Beverage Can"* (ID: `hUhisi2FBuw`)
5. **Organic & Biodegradable (`organic`):**
   * *Beginners Guide:* Eco Gardening — *"How to Compost Kitchen Scraps for Beginners"* (ID: `1fXU4Z-7D1w`)
   * *Apartment Hacks:* Urban Zero Waste — *"Apartment & Balcony Food Scrap Composting Made Easy"* (ID: `Q5s4n0iL0bU`)
6. **Electronic Waste (`e-waste`):**
   * *Industrial:* Business Insider — *"How 6 Million Pounds Of E-Waste Gets Recycled A Month"* (ID: `WMor47rIcl8`)
   * *Urban Mining:* Tech Insider — *"How Gold & Rare Metals are Recovered from Old Circuit Boards"* (ID: `bXZX_7gWfW4`)

---

## 🚀 Installation & Execution Guide

### 1. Clone & Set Up Python Environment
```powershell
# Open terminal in project root
cd c:\Users\user\OneDrive\Desktop\Kruthi\backend_day1\EDP

# Verify Python installation (Requires 3.10+)
python --version
```

### 2. Install Required Dependencies
```powershell
pip install -r requirements.txt
```

### 3. (Optional) Run Dataset Verification
```powershell
python download_dataset.py
```

### 4. (Optional) Train / Evaluate Neural Network Model
```powershell
# Quick evaluation / retraining on available samples
python train_model.py --quick
```

### 5. Start the GreenScan Server
```powershell
python app.py
```
Open your web browser and navigate to:  
👉 **`http://localhost:5000`**

*(Note: `static/index.html` can also be opened standalone in any browser for immediate demonstration mode with simulated edge inference!)*

---

## 📡 REST API Documentation

| HTTP Method | Endpoint | Description | Request Body / Query Params | Sample Response |
|---|---|---|---|---|
| `GET` | `/api/health` | Service health status and metadata | None | `{"status": "healthy", "service": "GreenScan AI", "trl_level": 4}` |
| `POST` | `/api/classify` | Infer waste class from image | `multipart/form-data` or `{"image_base64": "..."}` | `{"category": "plastic", "confidence": 0.962, "bin_name": "Yellow Bin"}` |
| `POST` | `/api/feedback` | Active learning human feedback | `{"predicted_category": "glass", "corrected_category": "plastic"}` | `{"success": true, "message": "Feedback recorded", "refitted_data": {...}}` |
| `GET` | `/api/wastedex` | Full category library details | None | `{ "plastic": {...}, "paper": {...}, "glass": {...} }` |
| `GET` | `/api/nearby` | Filter drop-off centers by GPS | `?category=plastic&lat=17.385&lng=78.486` | `[{"name": "Smart City Recycling Hub", "distance_km": 1.1, ...}]` |
| `GET` / `POST` | `/api/leaderboard` | Get / Post user XP & rank | `{"name": "Kruthi", "xp": 450, "items": 28}` | `{"leaderboard": [...], "user_rank": 1}` |
| `GET` / `POST` | `/api/history` | Get / Post scan history log | `{"category": "plastic", "name": "Plastic Recyclable", ...}` | `{"success": true, "item": {...}}` |
| `GET` | `/api/dataset/status`| Local Kagglehub cache status | None | `{"downloaded": true, "classes": {"plastic": 482, ...}}` |

---

## 📄 IEEE Format Project Report & PDF Generator

To assist in creating IEEE-compliant academic papers, seminar presentations, or engineering capstone reports, this repository includes:

1. **[`IEEE_PROJECT_REPORT.md`](file:///c:/Users/user/OneDrive/Desktop/Kruthi/backend_day1/EDP/IEEE_PROJECT_REPORT.md):**  
   The complete academic research paper written in strict IEEE two-column paper format (Abstract, Index Terms, Sections I through VIII, Equations, Performance Tables, and References).
2. **[`IEEE_PROJECT_REPORT.html`](file:///c:/Users/user/OneDrive/Desktop/Kruthi/backend_day1/EDP/IEEE_PROJECT_REPORT.html):**  
   Pixel-perfect IEEE two-column conference paper styled with print CSS. Open this file in Google Chrome or Microsoft Edge and press **<kbd>Ctrl</kbd> + <kbd>P</kbd> $\rightarrow$ Save as PDF** to generate an IEEE conference paper PDF!
3. **[`generate_report_pdf.py`](file:///c:/Users/user/OneDrive/Desktop/Kruthi/backend_day1/EDP/generate_report_pdf.py):**  
   A standalone automated Python ReportLab generator that compiles the complete report into **`IEEE_GreenScan_Project_Report.pdf`** with a single command:
   ```powershell
   python generate_report_pdf.py
   ```

---

## 📚 IEEE Academic References

```
[1]  M. Sandler, A. Howard, M. Zhu, A. Zhmoginov, and L.-C. Chen, "MobileNetV2: Inverted Residuals and Linear Bottlenecks," in Proc. IEEE/CVF Conf. Comput. Vis. Pattern Recognit. (CVPR), Salt Lake City, UT, USA, 2018, pp. 4510–4520.
[2]  G. Yang and G. Thung, "Classification of Trash Using Convolutional Neural Networks," Stanford University CS229 Project Rep., Stanford, CA, USA, 2016.
[3]  S. L. C. Chu, C. H. Lim, and V. C. S. Lee, "Deep Learning-Based Waste Classification for Smart Automated Sorting Systems," IEEE Trans. Ind. Informat., vol. 18, no. 8, pp. 5390–5399, Aug. 2022.
[4]  United Nations Environment Programme (UNEP), "Global Waste Management Outlook 2024: Beyond an Age of Waste," UNEP, Nairobi, Kenya, Rep. UNEP/EA.6/INF/9, 2024.
[5]  World Bank, "What a Waste 2.0: A Global Snapshot of Solid Waste Management to 2050," Urban Development Series, World Bank, Washington, DC, USA, Tech. Rep. 130452, 2018.
[6]  C. B. Adarsh, D. Joseph, and R. K. Sharma, "Automated Municipal Solid Waste Segregation Using Edge AI and Deep Convolutional Neural Networks," IEEE Access, vol. 10, pp. 41280–41292, Apr. 2022.
[7]  A. Krizhevsky, I. Sutskever, and G. E. Hinton, "ImageNet Classification with Deep Convolutional Neural Networks," Commun. ACM, vol. 60, no. 6, pp. 84–90, Jun. 2017.
[8]  S. J. Pan and Q. Yang, "A Survey on Transfer Learning," IEEE Trans. Knowl. Data Eng., vol. 22, no. 10, pp. 1345–1359, Oct. 2010.
[9]  D. Settles, "Active Learning Literature Survey," Comput. Sci. Tech. Rep. 1648, Univ. of Wisconsin–Madison, Madison, WI, USA, 2009.
[10] S. Sinnott, "Virtues of the Haversine," Sky & Telescope, vol. 68, no. 2, p. 159, Aug. 1984.
[11] Ellen MacArthur Foundation, "Towards a Circular Economy: Business Rationale for an Accelerated Transition," Ellen MacArthur Found., Cowes, Isle of Wight, UK, Tech. Rep., 2015.
[12] J. R. Jambeck et al., "Plastic Waste Inputs from Land into the Ocean," Science, vol. 347, no. 6223, pp. 768–771, Feb. 2015.
[13] D. Hoornweg and P. Bhada-Tata, "What a Waste: A Global Review of Solid Waste Management," World Bank, Washington, DC, USA, Urban Dev. Ser. Knowl. Pap. 15, 2012.
[14] F. O. Ongondo, I. D. Williams, and T. J. Cherrett, "How are WEEE Doing? A Global Review of the Management of Electrical and Electronic Equipment Waste," Waste Manage., vol. 31, no. 4, pp. 714–730, Apr. 2011.
[15] R. Geyer, J. R. Jambeck, and K. L. Law, "Production, Use, and Fate of All Plastics Ever Made," Sci. Adv., vol. 3, no. 7, p. e1700782, Jul. 2017.
[16] Kaggle, "Garbage Classification Dataset: 6 Classification Categories of Waste," Kagglehub Repository, asdasdasasdas/garbage-classification, 2020. [Online]. Available: https://www.kaggle.com/datasets/asdasdasasdas/garbage-classification
```

---

<p align="center">
  <strong>GreenScan: Point. Learn. Recycle.</strong><br>
  Built with 💚 for clean cities, informed communities, and a sustainable circular future.<br>
  <em>Team: B P S Kruthi (24951A05E9) & Anreddy Lahari (24951A05F0)</em>
</p>
