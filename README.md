# GreenScan: Smart Waste Recycling Assistant Using Image Recognition and AI Recommendations

> **Tagline:** *Point. Learn. Recycle.*  
> **Stage:** Prototype Validated in a Lab Environment (TRL 4)  
> **Team:**  
> - **B P S Kruthi** (Roll: `24951A05E9`)  
> - **Anreddy Lahari** (Roll: `24951A05F0`)  
>  
> **UN Sustainable Development Goals (SDGs):**  
> - 🏙️ **SDG 11:** Sustainable Cities and Communities  
> - 🔄 **SDG 12:** Responsible Consumption and Production  
> - 💧 **SDG 6 (Secondary):** Clean Water and Sanitation (preventing leachate contamination)

---

## 📌 Problem Statement
Recyclables frequently get contaminated or mixed with municipal solid waste because citizens lack immediate, reliable sorting knowledge at the moment of disposal. This increases sorting facility costs, drives up landfill volume, and generates harmful greenhouse gases (e.g., methane from anaerobic decomposition) and toxic aquifer leachate.

---

## 🎯 Key Objectives
1. **6-Stream Classification:** Accurately categorize waste into **Plastic, Paper & Cardboard, Glass, Metal, Organic, and E-Waste**.
2. **Instant Guidance:** Render actionable disposal instructions, designated bin color stamp, and pre-sorting steps (rinse, drain, remove adhesive).
3. **Interactive Web App:** High-aesthetic mobile-first UI with live webcam video capture and gallery drag-and-drop.
4. **Contamination Prevention:** Interactive pre-disposal checklist ensuring items are clean and dry before rewarding points.
5. **Active Learning (Correct-It):** Enables users to provide feedback on classifications, contributing to dataset expansion.
6. **Smart City Drop-off Radar:** Geolocation-powered SVG radar with haversine distance calculation and one-click Google Maps navigation.
7. **Public Awareness & Gamification:** Educational environmental facts, interactive post-scan quizzes, XP progression, daily streaks, and the **Wastedex** collector badge system.

---

## 🏗️ Architecture & Technology Stack

| Layer | Technologies & Libraries | Function |
|---|---|---|
| **Frontend UI** | HTML5, CSS3 (Glassmorphism & CSS Grid), JavaScript (ES6+), Canvas API, SVG | Responsive modern UI matching industrial eco-tech aesthetics |
| **Image Input** | MediaDevices API (`getUserMedia`), FileReader API, Canvas frame grabber | Dual input support (Live camera feed & file upload) |
| **AI / ML Pipeline** | TensorFlow / Keras, Transfer Learning (`MobileNetV2`), PIL, NumPy | Computer vision feature extraction, preprocessing, and classification |
| **Kaggle Integration** | `kagglehub` package (`asdasdasasdas/garbage-classification`) | Direct automated dataset download and caching |
| **Backend API** | Python Flask, Flask-CORS | REST endpoints for inference, active learning feedback, history, and radar |
| **Location Services** | Browser Geolocation API, Haversine Distance Offset, SVG Radar Engine | Nearby recycling depot locator with category filtering |
| **Persistence** | LocalStorage + JSON file storage (`data/history.json`, `data/corrections.json`) | Persistent XP, streak, badges, scan history, and retraining feedback |

---

## 📦 Kaggle Dataset Integration

The system natively integrates with Kaggle's Garbage Classification dataset via `kagglehub`:

```python
import kagglehub

# Download latest version
path = kagglehub.dataset_download("asdasdasasdas/garbage-classification")
print("Path to dataset files:", path)
```

- **Cached Dataset Location:** `~/.cache/kagglehub/datasets/asdasdasasdas/garbage-classification/versions/2`
- **Class Breakdown:**
  - Cardboard: 403 images
  - Glass: 501 images
  - Metal: 410 images
  - Paper: 594 images
  - Plastic: 482 images
  - Trash / Organic: 137 images
  - *Total:* 2,527 high-resolution waste images

---

## 🚀 Quick Start Guide

### 1. Prerequisites
Ensure Python 3.10+ is installed on your system.

### 2. Install Dependencies
```powershell
pip install -r requirements.txt
```

### 3. (Optional) Re-download / Inspect Dataset
```powershell
python download_dataset.py
```

### 4. (Optional) Run Transfer Learning Model Training
```powershell
python train_model.py --quick
```

### 5. Launch the GreenScan Web Application
```powershell
python app.py
```
Open your browser and navigate to:  
👉 **`http://localhost:5000`**

*(Alternatively, you can open `static/index.html` directly in any web browser for standalone client mode!)*

---

## 🌟 Key Application Features

1. **AI Waste Classifier:**
   - Real-time video frame snapshot or gallery drag-and-drop.
   - Live 3-stage computer vision preprocessing inspector (Normalized RGB $\rightarrow$ Grayscale Edge Filter $\rightarrow$ $224 \times 224$ Tensor).
2. **Inspection Ticket:**
   - Designated bin color stamp (Yellow: Plastic, Blue: Paper, Green: Organic, Teal: Glass, Silver: Metal, Orange: E-Waste).
   - Confidence percentage meter.
   - Tailored Do's and Don'ts disposal guidelines.
3. **Contamination Check (+25 XP):**
   - Verified checklist: "Rinsed & drained?", "Tape removed?", "Completely dry?".
4. **Correct-It Active Learning Loop:**
   - Allows user to submit corrections if the model errs, logging feedback into `data/corrections.json` to fuel active retraining.
5. **Eco Fact & Interactive Quiz (+50 XP):**
   - Generates contextual environmental trivia and multiple-choice quizzes after each scan.
6. **Wastedex Collector:**
   - Badges for all 6 primary waste streams that unlock dynamically as items are classified.
7. **Smart City Geo-Radar:**
   - Animated SVG radar beam scanning within a 5 km perimeter.
   - Filter by waste type (All, E-Waste, Plastic, Metal, Organic).
   - One-click Google Maps directions.
8. **Gamification & Impact Dashboard:**
   - Live tracking of XP points, daily scan streaks, total items sorted, and estimated cumulative $\text{CO}_2$ emissions prevented (kg).
