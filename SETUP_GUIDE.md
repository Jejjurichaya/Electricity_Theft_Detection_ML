# ⚙️ Setup Guide - HTML/CSS/JS Web App

## Step-by-Step Installation & Running

### ✅ Step 1: Install Python Packages
```bash
pip install -r requirements.txt
```

This will install:
- `numpy` - For numerical operations
- `scikit-learn` - For the ML model
- `Flask` - Web framework for backend API
- `Flask-CORS` - For cross-origin requests

---

### ✅ Step 2: Start the Backend Server

**Option A: Using Windows PowerShell/Command Prompt**
```bash
python app_backend.py
```

**Option B: Using Terminal**
```bash
python3 app_backend.py
```

**Expected Output:**
```
Starting Electricity Theft Detection API Server...
Server running on http://localhost:5000
API Documentation:
  - Home: GET http://localhost:5000/
  - Predict: POST http://localhost:5000/predict
  - Health: GET http://localhost:5000/health
```

**Keep this terminal window open!** The server must keep running while you use the app.

---

### ✅ Step 3: Open the Frontend in Browser

#### **Option A: Double-click index.html**
Simply find and double-click `index.html` in your file explorer. It will open in your default browser.

#### **Option B: Using Local Web Server (Recommended)**

**Python Built-in Server:**
```bash
# Open a NEW terminal window (keep the backend running in the first one)
python -m http.server 8000
```
Then visit: `http://localhost:8000`

**Using VS Code Live Server:**
1. Install "Live Server" extension in VS Code
2. Right-click on `index.html`
3. Select "Open with Live Server"

#### **Option C: Access from Mobile**
If running local server, get your computer's IP address:
- Windows: Type `ipconfig` in cmd, look for IPv4 address
- Mac/Linux: Type `ifconfig` in terminal
- Then access from mobile: `http://<YOUR_IP>:8000`

---

### 🚀 Success!

You should now see:
1. **Backend running** on `http://localhost:5000` (in terminal)
2. **Frontend loaded** in your browser showing the form
3. **Fill the form** and click "Predict"
4. **Get results** showing prediction and confidence

---

## 📋 File Structure After Setup

```
Electricity_Theft_Detection/
├── index.html                          # Frontend (OPEN THIS IN BROWSER)
├── style.css                           # Styling
├── script.js                           # Frontend logic
├── app_backend.py                      # Backend API (RUN THIS)
├── theft_prediction_pipeline.pkl       # ML Model (required)
├── electricity_new.csv                 # Dataset
├── Electricity_Theft_Detection.ipynb   # Original notebook
├── theft_detect_app.py                 # Original Streamlit version
├── requirements.txt                    # Dependencies
├── README.md                           # Original readme
└── README_HTML_VERSION.md              # This guide
```

---

## 🔍 Verify Everything Works

### Check 1: Backend is Running
```
Terminal Output:
"Server running on http://localhost:5000" ✅
```

### Check 2: Frontend Loaded
```
Browser shows form with all fields ✅
```

### Check 3: API Connection Works
1. Fill in a few fields
2. Click "Predict"
3. Should see result (not error) ✅

---

## ❌ Troubleshooting

### Problem: "Connection Refused" or "Unable to connect to server"
**Cause**: Backend is not running  
**Solution**:
1. Open new terminal
2. Navigate to project folder
3. Run `python app_backend.py`
4. Refresh browser (Ctrl+R or Cmd+R)

---

### Problem: "ModuleNotFoundError: No module named 'flask'"
**Cause**: Flask not installed  
**Solution**:
```bash
pip install Flask Flask-CORS
```

---

### Problem: "FileNotFoundError: theft_prediction_pipeline.pkl"
**Cause**: Model file missing  
**Solution**:
1. Ensure you have the model file in the project directory
2. If missing, train the model using `Electricity_Theft_Detection.ipynb`

---

### Problem: "Port 5000 already in use"
**Cause**: Another app is using port 5000  
**Solution A**: Stop the other app using port 5000  
**Solution B**: Change port in both files:
- `app_backend.py`: Change `port=5000` to `port=5001`
- `script.js`: Change URL from `localhost:5000` to `localhost:5001`

---

### Problem: CORS Error in Browser Console
**Cause**: Flask-CORS not installed  
**Solution**:
```bash
pip install Flask-CORS
```

---

### Problem: Form shows but clicking Predict does nothing
**Solution**:
1. Open Browser DevTools (F12)
2. Check Console tab for errors
3. Check that backend is running
4. Refresh the page

---

## 📱 Using on Mobile Devices

### For LAN Access:
1. **Get Computer IP**:
   - Windows: `ipconfig` → look for IPv4
   - Mac: `ifconfig` → look for inet
   - Linux: `hostname -I`

2. **Example**: If your IP is `192.168.1.5`:
   - Backend API: `http://192.168.1.5:5000`
   - Frontend: `http://192.168.1.5:8000`

3. **Both devices must be on same WiFi network**

### Update script.js for Network:
Replace `localhost` with your IP in `script.js`:
```javascript
// Change this:
fetch('http://localhost:5000/predict')

// To this (example):
fetch('http://192.168.1.5:5000/predict')
```

---

## 🎯 Next Steps

✅ **Completed Setup?**
1. Try different predictions to test the model
2. Modify styling in `style.css`
3. Add more features as needed
4. Deploy to web server for production use

---

**Questions?** Check the browser console (F12) for detailed error messages.
