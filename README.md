# 🚨 Electricity Theft Detection System

A modern web application that predicts electricity theft using machine learning, built with HTML/CSS/JavaScript frontend and Flask backend.

![Status](https://img.shields.io/badge/Status-Active-green)
![License](https://img.shields.io/badge/License-MIT-blue)
![Python](https://img.shields.io/badge/Python-3.7%2B-blue)

## 📌 Purpose

Electricity theft is a major issue in regions like Karachi, where unauthorized consumption of electricity leads to significant losses for utility companies. This project provides a solution for detecting electricity theft using machine learning models. By analyzing various factors such as electricity usage, voltage fluctuations, and historical data, the system predicts the likelihood of theft.

---

## 🤖 Model Overview

The machine learning model used in this project is a **Random Forest Classifier**. This model was chosen due to its ability to handle complex data with multiple features and its robustness in classification tasks.

### Key Techniques Used:
1. **SMOTE (Synthetic Minority Over-sampling Technique)**: Used to handle class imbalance in the dataset. It generates synthetic samples for the underrepresented class (theft) to improve model performance.
   
2. **Grid Search for Hyperparameter Tuning**: The model was fine-tuned using `GridSearchCV`, which optimizes the hyperparameters of the Random Forest classifier to find the best-performing configuration. Key hyperparameters tuned include:
   - `n_estimators`: The number of trees in the forest (100, 200, 300)
   - `max_depth`: The maximum depth of the trees (None, 10, 20)
   - `min_samples_split`: The minimum number of samples required to split (2, 5, 10)

### Model Pipeline:
- **Standard Scaling**: Normalizes input features
- **Random Forest Classifier**: Robust classification model for theft prediction

---

## 🚀 Quick Start

### Prerequisites
- Python 3.7 or higher
- pip package manager

### Installation

1. **Clone/Download the project**
   ```bash
   cd Electricity_Theft_Detection
   ```

2. **Install dependencies**
   ```bash
   pip install -r requirements.txt
   ```

3. **Start the backend (Terminal 1)**
   ```bash
   python app_backend.py
   ```
   You should see: `Server running on http://localhost:5000`

4. **Open the frontend (Terminal 2)**
   
   **Option A: Double-click `index.html`** (Easiest)
   
   **Option B: Start a web server**
   ```bash
   python -m http.server 8000
   ```
   Then visit: `http://localhost:8000`

---

## 📁 Project Structure

```
Electricity_Theft_Detection/
├── 📄 index.html                      # Main web page (OPEN THIS)
├── 🎨 style.css                       # Styling & responsive design
├── ⚙️ script.js                       # Frontend logic & API calls
├── 🔧 app_backend.py                  # Flask API server
├── 📊 electricity_new.csv             # Dataset
├── 📓 Electricity_Theft_Detection.ipynb # Model training notebook
├── 💾 theft_prediction_pipeline.pkl   # Trained ML model
├── 📋 requirements.txt                # Python dependencies
└── 📖 README.md                       # This file
```

---

## 🌐 How to Use

### Using the Web App

1. **Fill in the form** with electricity usage information:
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

2. **Click "Predict"** button

3. **View the result**:
   - 🟢 **No Theft**: Electricity usage appears normal
   - 🔴 **Theft Detected**: Alert with K Electric contact numbers

### Using the Original Streamlit Version

If you prefer the Streamlit interface:
```bash
streamlit run theft_detect_app.py
```
Then visit: `http://localhost:8501`

---

## ✨ Features

✅ **Modern, Responsive UI** - Works perfectly on desktop, tablet, and mobile  
✅ **Real-time Predictions** - Instant results with confidence scores  
✅ **Form Auto-save** - Your inputs are saved locally  
✅ **Error Handling** - Clear error messages when something goes wrong  
✅ **Production-Ready** - Easy to deploy on web servers  
✅ **Beautiful Design** - Modern gradient UI with smooth animations  
✅ **Separate Frontend/Backend** - Independent scaling and deployment  

---

## 🔧 Technology Stack

| Component | Technology |
|-----------|-----------|
| **Frontend** | HTML5, CSS3, Vanilla JavaScript |
| **Backend** | Python Flask |
| **ML Model** | scikit-learn (Random Forest) |
| **Server** | Flask + CORS |
| **Styling** | Modern CSS with Flexbox/Grid |

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

## 🛠️ Troubleshooting

### "Unable to connect to the server"
**Solution**: Make sure `app_backend.py` is running in a terminal

### "ModuleNotFoundError: No module named 'flask'"
**Solution**: 
```bash
pip install Flask Flask-CORS
```

### "FileNotFoundError: theft_prediction_pipeline.pkl"
**Solution**: Ensure the model file exists in the project directory

### Port 5000 already in use
**Solution A**: Stop the other application using port 5000  
**Solution B**: Change port in `app_backend.py` (line: `port=5000`)

### CORS Error in browser console
**Solution**:
```bash
pip install Flask-CORS
```

---

## 📱 Mobile Access

1. Get your computer's IP address:
   ```bash
   ipconfig
   ```
   Look for IPv4 address (e.g., 192.168.1.5)

2. Update `script.js` to use your IP instead of localhost:
   ```javascript
   fetch('http://192.168.1.5:5000/predict')
   ```

3. Access from mobile on the same network:
   ```
   http://192.168.1.5:8000
   ```

---

## ☁️ Deployment Options

### Option 1: Local Development
```bash
python app_backend.py          # Backend
python -m http.server 8000     # Frontend
```

### Option 2: Deploy to Heroku
```bash
# Deploy app_backend.py to Heroku
# Update API URL in script.js
# Host HTML/CSS/JS files separately
```

### Option 3: Docker Deployment
```bash
docker build -t theft-detection .
docker run -p 5000:5000 theft-detection
```

---

## 📞 Support & Contact

**For electricity theft reporting:**
- **K Electric Hotline**: 118
- **Toll-Free**: 99000

---

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

## 📚 Additional Resources

- [Flask Documentation](https://flask.palletsprojects.com/)
- [scikit-learn Documentation](https://scikit-learn.org/)
- [Python Official Docs](https://docs.python.org/3/)

---

## 👨‍💻 Version History

- **v1.0** (Current) - HTML/CSS/JS + Flask Backend
- **v0.9** - Streamlit Version (Original)

---

**Last Updated**: May 2024  
**Status**: Fully Functional ✅
