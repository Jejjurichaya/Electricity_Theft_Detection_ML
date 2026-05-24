# 🚨 Electricity Theft Detection - HTML/CSS/JS Web App

This is a web-based version of the Electricity Theft Prediction System with a modern, responsive HTML/CSS/JavaScript frontend and a Flask backend API.

## 📁 Project Files

### Frontend Files
- **index.html** - Main HTML file with form structure
- **style.css** - Styling and responsive design
- **script.js** - Frontend logic and API communication

### Backend Files
- **app_backend.py** - Flask API server that serves the ML model
- **theft_prediction_pipeline.pkl** - Pre-trained machine learning model

### Supporting Files
- **electricity_new.csv** - Dataset
- **Electricity_Theft_Detection.ipynb** - Original Jupyter notebook
- **theft_detect_app.py** - Original Streamlit version

---

## 🚀 Quick Start

### Prerequisites
- Python 3.7+
- pip or conda

### Step 1: Install Dependencies
```bash
pip install -r requirements.txt
```

The `requirements.txt` includes:
- numpy
- scikit-learn
- Flask
- Flask-CORS
- streamlit (optional, if you want to use the Streamlit version)

### Step 2: Start the Backend Server
Open a terminal and run:
```bash
python app_backend.py
```

You should see:
```
Starting Electricity Theft Detection API Server...
Server running on http://localhost:5000
```

### Step 3: Open the Frontend
Simply open **index.html** in your web browser (double-click the file) or use a local web server:

**Option A: Using Python's built-in server**
```bash
python -m http.server 8000
```
Then open: `http://localhost:8000/index.html`

**Option B: Using Visual Studio Code Live Server**
- Install the "Live Server" extension in VS Code
- Right-click on `index.html` and select "Open with Live Server"

---

## 📝 How to Use

1. **Enter the required inputs** in the form:
   - Usage (kWh)
   - Time of Day
   - Voltage Fluctuations
   - Number of Residents
   - Appliance Count
   - Industrial Area Nearby
   - Previous Theft History
   - Average Daily Usage
   - Bill Payment Delay (days)
   - Unusual Usage Spike

2. **Click the "Predict" button**

3. **View the prediction result**:
   - 🟢 **No Theft**: Electricity usage appears normal
   - 🔴 **Theft Detected**: Alert with K Electric contact numbers

---

## 🔄 Comparison: Streamlit vs HTML/CSS/JS

### Using the Original Streamlit Version
```bash
streamlit run theft_detect_app.py
```

### Using the New HTML/CSS/JS Version
1. Start backend: `python app_backend.py`
2. Open frontend: `index.html` in browser

### Advantages of HTML/CSS/JS Version
✅ Better UI/UX with modern design  
✅ Responsive design (works on mobile)  
✅ Separate frontend/backend architecture  
✅ Easy to deploy on web servers  
✅ Can be hosted on any web hosting service  
✅ Faster load times  
✅ Better offline form filling  

---

## 🌐 Deployment Options

### Option 1: Local Testing
- Backend: Run `app_backend.py` on your machine
- Frontend: Open `index.html` in your browser

### Option 2: Web Server Deployment
1. Deploy Flask backend on Heroku, AWS, or your VPS
2. Update the API URL in `script.js` (line with `fetch('http://localhost:5000/predict')`)
3. Host HTML/CSS/JS files on any web server

### Option 3: Docker (Optional)
Create a `Dockerfile` for containerized deployment:
```dockerfile
FROM python:3.9
WORKDIR /app
COPY requirements.txt .
RUN pip install -r requirements.txt
COPY . .
CMD ["python", "app_backend.py"]
```

---

## 🔧 Troubleshooting

### Issue: "Unable to connect to the server"
**Solution**: Make sure `app_backend.py` is running on http://localhost:5000

### Issue: Model not found error
**Solution**: Ensure `theft_prediction_pipeline.pkl` is in the same directory as `app_backend.py`

### Issue: CORS errors in browser console
**Solution**: Make sure Flask-CORS is installed (`pip install Flask-CORS`)

### Issue: Form data not saving
**Solution**: Check browser console for JavaScript errors. The app uses localStorage to auto-save data.

---

## 📊 Input Features Explanation

| Feature | Type | Range | Description |
|---------|------|-------|-------------|
| Usage (kWh) | Number | 0+ | Monthly electricity consumption |
| Time of Day | Select | Morning/Afternoon/Evening/Night | Peak usage times |
| Voltage Fluctuations | Number | 0+ | Electrical instability |
| Number of Residents | Number | 0+ | Household size |
| Appliance Count | Number | 0+ | Number of electrical appliances |
| Industrial Area Nearby | Yes/No | - | Location type indicator |
| Previous Theft History | Yes/No | - | Past suspicious activity |
| Average Daily Usage | Number | 0+ | Daily consumption pattern |
| Bill Payment Delay | Number | 0+ | Days delayed in payment |
| Unusual Usage Spike | Yes/No | - | Sudden consumption increase |

---

## 🎨 Customization

### Change Colors
Edit the CSS in `style.css`. Key colors:
- Primary: `#667eea` (purple)
- Secondary: `#764ba2` (dark purple)
- Theft Alert: `#ff4b4b` (red)
- Success: `#52c41a` (green)

### Add More Features
1. Add input field in `index.html`
2. Update form handling in `script.js`
3. Add feature to model input in `app_backend.py`

### Change API Port
Update in both files:
- `app_backend.py`: Change `port=5000`
- `script.js`: Change `fetch('http://localhost:5000/predict')`

---

## 📞 Contact

For electricity theft reporting:
- **K Electric Hotline**: 118
- **Toll-Free**: 99000

---

## 📄 License

This project is licensed under the terms specified in the LICENSE file.

---

**Last Updated**: May 2024  
**Version**: 1.0
