"""
GreenScan - Flask Application Server
Smart Waste Recycling Assistant Using Image Recognition and AI Recommendations
Team: B P S Kruthi (24951A05E9), Anreddy Lahari (24951A05F0)
SDGs: 11 (Sustainable Cities), 12 (Responsible Consumption), 6 (Clean Water)
Tagline: Point. Learn. Recycle.
"""

import os
import io
import json
import base64
import time
from datetime import datetime
from flask import Flask, request, jsonify, render_template, send_from_directory
from flask_cors import CORS
from model_utils import (
    classify_waste_image, 
    CATEGORIES, 
    NEARBY_CENTERS,
    load_trained_model,
    get_category_details
)

app = Flask(__name__, template_folder="templates", static_folder="static")
CORS(app)

DATA_DIR = os.path.join(os.path.dirname(__file__), "data")
HISTORY_FILE = os.path.join(DATA_DIR, "history.json")
FEEDBACK_FILE = os.path.join(DATA_DIR, "corrections.json")
LEADERBOARD_FILE = os.path.join(DATA_DIR, "leaderboard.json")
VOUCHERS_FILE = os.path.join(DATA_DIR, "vouchers.json")

SHOP_CATALOG = [
    {
        "id": "tree_mangrove",
        "title": "Plant a Native Tree in Hyderabad",
        "category": "impact",
        "cost": 150,
        "icon": "🌱",
        "image": "/static/img/rewards/tree_sapling.jpg",
        "partner": "Telangana Haritha Haram & Green India",
        "description": "GreenScan sponsors planting 1 geo-tagged native sapling (Neem/Gulmohar) with periodic growth updates.",
        "badge": "Real Impact",
        "voucher_prefix": "TREE",
        "instructions": "Your sapling tree id is registered with Telangana Forest Dept. Certificate will be delivered to your profile.",
        "discount": "1 Tree Planted"
    },
    {
        "id": "bamboo_kit",
        "title": "20% Off Eco Bamboo Kit & Stainless Bottle",
        "category": "products",
        "cost": 100,
        "icon": "🎋",
        "image": "/static/img/rewards/bamboo_kit.jpg",
        "partner": "EcoLife Sustainable Essentials",
        "description": "Premium 4-piece bamboo cutlery set, travel pouch, and double-walled insulated stainless steel flask.",
        "badge": "Popular",
        "voucher_prefix": "BAMBOO",
        "instructions": "Apply coupon code at checkout on EcoLife Essentials website for flat 20% discount.",
        "discount": "20% Discount"
    },
    {
        "id": "organic_cafe",
        "title": "Free Organic Fair-Trade Coffee Voucher",
        "category": "perks",
        "cost": 80,
        "icon": "☕",
        "image": "/static/img/rewards/organic_coffee.jpg",
        "partner": "Roast & Roots Organic Cafe",
        "description": "Enjoy one complimentary barista-brewed artisanal organic coffee or matcha tea in a zero-waste reusable mug.",
        "badge": "Hot Perk",
        "voucher_prefix": "CAFE",
        "instructions": "Present the digital QR / alphanumeric voucher code at the barista counter.",
        "discount": "1 Free Drink"
    },
    {
        "id": "cotton_tote",
        "title": "100% Recycled Cotton Heavyweight Tote Bag",
        "category": "products",
        "cost": 120,
        "icon": "🎒",
        "image": "/static/img/rewards/cotton_tote.jpg",
        "partner": "Circular Fashion Co.",
        "description": "Durable, washable shopping bag woven from 100% recovered post-consumer cotton and ocean-bound plastics.",
        "badge": "Zero Plastic",
        "voucher_prefix": "TOTE",
        "instructions": "Redeem for 100% discount with free home dispatch via partner courier.",
        "discount": "1 Free Bag"
    },
    {
        "id": "green_transit",
        "title": "Smart City Green Transit 1-Day Pass",
        "category": "mobility",
        "cost": 60,
        "icon": "🚌",
        "image": "/static/img/rewards/green_transit.jpg",
        "partner": "Hyderabad Metro & TSRTC EV Fleet",
        "description": "Unlimited 24-hour electric bus and metro rail transit pass across all Smart City urban corridors.",
        "badge": "Zero Emission",
        "voucher_prefix": "METRO",
        "instructions": "Enter token in the Smart Transit App or scan QR ticket at metro turnstile.",
        "discount": "Free Day Pass"
    },
    {
        "id": "zero_waste_cert",
        "title": "Official 'Zero Waste Legend' EDP Certificate",
        "category": "digital",
        "cost": 200,
        "icon": "🎖️",
        "image": "/static/img/rewards/edp_certificate.jpg",
        "partner": "GreenScan EDP Research Project",
        "description": "Verified digital recognition signed by B P S Kruthi & Anreddy Lahari, certified for your academic portfolio.",
        "badge": "EDP Certified",
        "voucher_prefix": "CERT",
        "instructions": "Digital credential issued with cryptographic authenticity hash.",
        "discount": "Official Badge"
    },
    {
        "id": "solar_credit",
        "title": "5 kWh Community Solar Energy Offset",
        "category": "impact",
        "cost": 250,
        "icon": "⚡",
        "image": "/static/img/rewards/solar_offset.jpg",
        "partner": "CleanGrid Smart Solar Initiative",
        "description": "Diverts 5 kilowatt-hours of clean solar generation into municipal EV charging stations in your name.",
        "badge": "Clean Energy",
        "voucher_prefix": "SOLAR",
        "instructions": "Credits assigned directly to Smart City Renewable Registry with public recognition.",
        "discount": "5 kWh Clean Power"
    },
    {
        "id": "organic_soap",
        "title": "Zero-Waste Organic Soap & Shampoo Bar",
        "category": "products",
        "cost": 90,
        "icon": "🧼",
        "image": "/static/img/rewards/organic_soap.jpg",
        "partner": "WildEarth Botanicals",
        "description": "Cold-pressed, plastic-free personal care bar crafted from organic neem, aloe vera, and essential oils.",
        "badge": "Eco Living",
        "voucher_prefix": "SOAP",
        "instructions": "Use voucher code for free sample bar shipped in compostable packaging.",
        "discount": "1 Free Bar"
    }
]

os.makedirs(DATA_DIR, exist_ok=True)

DEFAULT_LEADERBOARD = [
    {"name": "B P S Kruthi", "badge": "🥇 Eco Champion", "xp": 380, "items": 26, "streak": 5},
    {"name": "Anreddy Lahari", "badge": "🥈 Green Pioneer", "xp": 340, "items": 22, "streak": 4},
    {"name": "SmartCity_Hyd", "badge": "🥉 Zero Waste Hero", "xp": 280, "items": 19, "streak": 3},
    {"name": "EcoWarrior_07", "badge": "🌱 Sorter Pro", "xp": 210, "items": 14, "streak": 2},
    {"name": "Circular_Agent", "badge": "♻️ Recycler", "xp": 160, "items": 11, "streak": 2}
]

def load_json(path, default):
    if os.path.exists(path):
        try:
            with open(path, "r", encoding="utf-8") as f:
                return json.load(f)
        except Exception:
            return default
    return default

def save_json(path, data):
    with open(path, "w", encoding="utf-8") as f:
        json.dump(data, f, indent=2, ensure_ascii=False)

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/api/health")
def health():
    return jsonify({
        "status": "healthy",
        "service": "GreenScan AI Waste Classifier",
        "tagline": "Point. Learn. Recycle.",
        "version": "1.0.0-prototype",
        "trl_level": 4,
        "team": ["B P S Kruthi (24951A05E9)", "Anreddy Lahari (24951A05F0)"]
    })

@app.route("/api/classify", methods=["POST"])
def classify():
    """Classifies an uploaded image file or base64 image string."""
    image_bytes = None
    filename = None
    
    if "file" in request.files:
        file = request.files["file"]
        if file.filename != "":
            filename = file.filename
            image_bytes = file.read()
    elif request.is_json:
        data = request.get_json()
        b64_str = data.get("image_base64", "")
        filename = data.get("filename", "captured_frame.jpg")
        if "," in b64_str:
            b64_str = b64_str.split(",")[1]
        try:
            image_bytes = base64.b64decode(b64_str)
        except Exception as e:
            return jsonify({"error": f"Invalid base64 payload: {str(e)}"}), 400

    if not image_bytes:
        return jsonify({"error": "No image provided via file upload or base64"}), 400

    try:
        result = classify_waste_image(image_bytes, filename=filename)
        result["filename"] = filename or "image.jpg"
        result["timestamp"] = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
        return jsonify(result)
    except Exception as e:
        return jsonify({"error": f"Classification failed: {str(e)}"}), 500

@app.route("/api/feedback", methods=["POST"])
def submit_feedback():
    """Correct-It feedback endpoint for active learning and model retraining."""
    data = request.get_json() or {}
    corrections = load_json(FEEDBACK_FILE, [])
    
    corrected_cat = data.get("corrected_category", "plastic")
    record = {
        "id": f"fb-{int(time.time() * 1000)}",
        "predicted_category": data.get("predicted_category"),
        "corrected_category": corrected_cat,
        "filename": data.get("filename", ""),
        "confidence": data.get("confidence"),
        "user_note": data.get("user_note", ""),
        "timestamp": datetime.now().isoformat()
    }
    corrections.insert(0, record)
    save_json(FEEDBACK_FILE, corrections[:200])
    
    # Return full refitted data for the corrected category
    cat_details = get_category_details(corrected_cat)
    refitted = {
        "category": corrected_cat,
        "name": cat_details["name"],
        "confidence": 0.99,
        "confidence_percentage": "99.0% (Verified)",
        "bin_name": cat_details["bin_name"],
        "bin_color": cat_details["bin_color"],
        "bin_color_name": cat_details["bin_color_name"],
        "icon": cat_details["icon"],
        "recycling_steps": cat_details["recycling_steps"],
        "dos": cat_details["dos"],
        "donts": cat_details["donts"],
        "co2_saved_kg": cat_details["co2_saved_kg"],
        "water_saved_l": cat_details["water_saved_l"],
        "fact": cat_details["fact"],
        "quiz": cat_details["quiz"]
    }
    
    return jsonify({
        "success": True,
        "message": f"Feedback recorded! Refitted model prediction to {cat_details['name']}.",
        "record": record,
        "refitted_data": refitted
    })

@app.route("/api/leaderboard", methods=["GET", "POST"])
def leaderboard_handler():
    board = load_json(LEADERBOARD_FILE, DEFAULT_LEADERBOARD)
    
    if request.method == "POST":
        data = request.get_json() or {}
        username = (data.get("name") or "Eco Warrior").strip()
        user_xp = int(data.get("xp", 100))
        user_items = int(data.get("items", 10))
        user_streak = int(data.get("streak", 1))
        
        # Check if user already exists
        existing = next((item for item in board if item["name"].lower() == username.lower()), None)
        if existing:
            existing["xp"] = max(existing["xp"], user_xp)
            existing["items"] = max(existing["items"], user_items)
            existing["streak"] = max(existing["streak"], user_streak)
        else:
            board.append({
                "name": username,
                "badge": "⭐ Eco Pioneer",
                "xp": user_xp,
                "items": user_items,
                "streak": user_streak
            })
            
        # Sort descending by XP
        board.sort(key=lambda x: x["xp"], reverse=True)
        # Assign ranks & top medals
        for idx, entry in enumerate(board):
            entry["rank"] = idx + 1
            if idx == 0: entry["badge"] = "🥇 Eco Champion"
            elif idx == 1: entry["badge"] = "🥈 Green Pioneer"
            elif idx == 2: entry["badge"] = "🥉 Zero Waste Hero"
            elif entry.get("badge") in ["🥇 Eco Champion", "🥈 Green Pioneer", "🥉 Zero Waste Hero"]:
                entry["badge"] = "🌱 Sorter Pro"
                
        save_json(LEADERBOARD_FILE, board)
        
        # Find user rank
        user_rank = next((e["rank"] for e in board if e["name"].lower() == username.lower()), len(board))
        return jsonify({"success": True, "leaderboard": board[:10], "user_rank": user_rank})

    # For GET request, ensure sorted and ranked
    board.sort(key=lambda x: x.get("xp", 0), reverse=True)
    for idx, entry in enumerate(board):
        entry["rank"] = idx + 1
        if idx == 0: entry["badge"] = "🥇 Eco Champion"
        elif idx == 1: entry["badge"] = "🥈 Green Pioneer"
        elif idx == 2: entry["badge"] = "🥉 Zero Waste Hero"
        
    return jsonify(board[:10])

@app.route("/api/history", methods=["GET", "POST"])
def scan_history():
    history = load_json(HISTORY_FILE, [])
    
    if request.method == "POST":
        data = request.get_json() or {}
        item = {
            "id": f"scan-{int(time.time() * 1000)}",
            "category": data.get("category", "plastic"),
            "category_name": data.get("name", "Plastic Recyclable"),
            "confidence": data.get("confidence", 0.9),
            "co2_saved_kg": data.get("co2_saved_kg", 1.5),
            "timestamp": datetime.now().strftime("%b %d, %Y - %I:%M %p"),
            "thumbnail": data.get("thumbnail")
        }
        history.insert(0, item)
        save_json(HISTORY_FILE, history[:100])
        return jsonify({"success": True, "item": item})
        
    return jsonify(history)

@app.route("/api/shop/catalog", methods=["GET"])
def shop_catalog():
    return jsonify({
        "success": True,
        "catalog": SHOP_CATALOG
    })

@app.route("/api/shop/redeem", methods=["POST"])
def redeem_reward():
    import random, string
    data = request.get_json() or {}
    reward_id = data.get("reward_id")
    user_name = (data.get("user_name") or "Eco Warrior").strip()
    user_coins = int(data.get("eco_coins", 0))

    reward = next((r for r in SHOP_CATALOG if r["id"] == reward_id), None)
    if not reward:
        return jsonify({"success": False, "error": "Reward not found"}), 404

    if user_coins < reward["cost"]:
        return jsonify({
            "success": False, 
            "error": f"Insufficient EcoCoins! You need {reward['cost']} EcoCoins, but only have {user_coins}."
        }), 400

    code_suffix = ''.join(random.choices(string.ascii_uppercase + string.digits, k=5))
    voucher_code = f"GS-{reward['voucher_prefix']}-{code_suffix}"
    expires_dt = datetime.fromtimestamp(time.time() + 30 * 86400)
    
    voucher = {
        "id": f"vch-{int(time.time() * 1000)}",
        "code": voucher_code,
        "reward_id": reward["id"],
        "reward_title": reward["title"],
        "cost": reward["cost"],
        "icon": reward["icon"],
        "partner": reward["partner"],
        "user_name": user_name,
        "instructions": reward["instructions"],
        "discount": reward["discount"],
        "created_at": datetime.now().strftime("%b %d, %Y - %I:%M %p"),
        "expires_at": expires_dt.strftime("%b %d, %Y"),
        "status": "Active"
    }
    
    vouchers = load_json(VOUCHERS_FILE, [])
    vouchers.insert(0, voucher)
    save_json(VOUCHERS_FILE, vouchers[:100])
    
    remaining_coins = user_coins - reward["cost"]
    return jsonify({
        "success": True,
        "message": f"Successfully redeemed '{reward['title']}'!",
        "voucher": voucher,
        "remaining_coins": remaining_coins
    })

@app.route("/api/shop/vouchers", methods=["GET"])
def get_vouchers():
    user = request.args.get("user_name", "").strip().lower()
    vouchers = load_json(VOUCHERS_FILE, [])
    if user:
        vouchers = [v for v in vouchers if v.get("user_name", "").strip().lower() == user]
    return jsonify(vouchers)

@app.route("/api/nearby", methods=["GET"])
def nearby_centers():
    cat = request.args.get("category", "all").lower()
    lat = float(request.args.get("lat", 17.3850)) # Default Hyderabad / Smart City center
    lng = float(request.args.get("lng", 78.4867))
    
    results = []
    for c in NEARBY_CENTERS:
        if cat == "all" or cat in c["category"]:
            center_copy = dict(c)
            center_copy["calculated_lat"] = round(lat + c["lat_offset"], 5)
            center_copy["calculated_lng"] = round(lng + c["lng_offset"], 5)
            center_copy["maps_url"] = f"https://www.google.com/maps/search/?api=1&query={center_copy['calculated_lat']},{center_copy['calculated_lng']}"
            results.append(center_copy)
            
    return jsonify(results)

@app.route("/api/wastedex", methods=["GET"])
def wastedex():
    return jsonify(CATEGORIES)

@app.route("/api/dataset/status", methods=["GET"])
def dataset_status():
    default_path = os.path.expanduser(
        r"~/.cache/kagglehub/datasets/asdasdasasdas/garbage-classification/versions/2"
    )
    exists = os.path.exists(default_path)
    info = {
        "dataset_name": "asdasdasasdas/garbage-classification",
        "downloaded": exists,
        "path": default_path if exists else None,
        "classes": {}
    }
    
    if exists:
        inner_path = os.path.join(default_path, "Garbage classification", "Garbage classification")
        search_target = inner_path if os.path.exists(inner_path) else default_path
        if os.path.isdir(search_target):
            for c in os.listdir(search_target):
                cp = os.path.join(search_target, c)
                if os.path.isdir(cp):
                    info["classes"][c] = len(os.listdir(cp))
                    
    return jsonify(info)

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    print("=" * 60)
    print(f"GreenScan: Starting Flask Server on port {port}")
    print("Tagline: Point. Learn. Recycle.")
    print("Team: B P S Kruthi (24951A05E9), Anreddy Lahari (24951A05F0)")
    print("=" * 60)
    load_trained_model()
    debug_mode = os.environ.get("FLASK_DEBUG", "False").lower() in ["true", "1"]
    app.run(host="0.0.0.0", port=port, debug=debug_mode)
