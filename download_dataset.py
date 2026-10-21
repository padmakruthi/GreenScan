"""
Dataset Downloader using kagglehub for GreenScan Project
Downloads the Garbage Classification dataset: asdasdasasdas/garbage-classification
"""

import sys
import os

def download_data():
    print("=" * 60)
    print("GreenScan: Downloading Kaggle Garbage Classification Dataset")
    print("=" * 60)
    try:
        import kagglehub
        print("[1/2] Connecting to Kagglehub repository...")
        path = kagglehub.dataset_download("asdasdasasdas/garbage-classification")
        print("\n[SUCCESS] Path to dataset files:", path)
        
        # Inspect contents
        if os.path.exists(path):
            items = os.listdir(path)
            print(f"[INFO] Found {len(items)} items/folders in dataset directory:")
            for item in items[:15]:
                item_path = os.path.join(path, item)
                if os.path.isdir(item_path):
                    count = len(os.listdir(item_path))
                    print(f"  - Directory: {item} ({count} files)")
                else:
                    print(f"  - File: {item}")
        return path
    except Exception as e:
        print(f"[ERROR] Failed to download via kagglehub: {e}", file=sys.stderr)
        print("[INFO] Note: If Kaggle credentials are required, ensure kaggle.json is placed in ~/.kaggle/ or KAGGLE_USERNAME and KAGGLE_KEY are set.")
        return None

if __name__ == "__main__":
    download_data()
