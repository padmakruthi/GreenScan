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
    print("=" * 60)
    print("GreenScan: Starting Flask Server on http://localhost:5000")
    print("Tagline: Point. Learn. Recycle.")
    print("Team: B P S Kruthi (24951A05E9), Anreddy Lahari (24951A05F0)")
    print("=" * 60)
    load_trained_model()
    app.run(host="0.0.0.0", port=5000, debug=True)
