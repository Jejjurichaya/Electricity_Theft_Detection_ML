from flask import Flask, request, jsonify
from flask_cors import CORS
import pickle
import numpy as np
import os

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Load the saved pipeline
model_path = 'theft_prediction_pipeline.pkl'

if not os.path.exists(model_path):
    print(f"Warning: Model file '{model_path}' not found!")
    print("Please ensure 'theft_prediction_pipeline.pkl' is in the same directory as this script.")
    model = None
else:
    with open(model_path, 'rb') as file:
        model = pickle.load(file)
    print("Model loaded successfully!")

@app.route('/')
def home():
    return jsonify({'message': 'Electricity Theft Detection API', 'status': 'running'})

@app.route('/predict', methods=['POST'])
def predict():
    """
    Make a prediction based on input features
    """
    try:
        if model is None:
            return jsonify({'error': 'Model not loaded'}), 500

        # Get JSON data from request
        data = request.get_json()

        # Define time of day mapping
        time_of_day_map = {
            "Morning": 0,
            "Afternoon": 1,
            "Evening": 2,
            "Night": 3
        }

        # Define yes/no mapping
        yes_no_map = {
            "No": 0,
            "Yes": 1
        }

        # Extract and convert inputs
        usage = float(data['usage'])
        time_of_day = time_of_day_map[data['timeOfDay']]
        fluctuation = float(data['fluctuation'])
        residents = int(data['residents'])
        appliances = int(data['appliances'])
        industrial_area = yes_no_map[data['industrialArea']]
        theft_history = yes_no_map[data['theftHistory']]
        daily_usage = float(data['dailyUsage'])
        payment_delay = int(data['paymentDelay'])
        usage_spike = yes_no_map[data['usageSpike']]

        # Create input array in the correct order
        inputs = np.array([[
            usage, time_of_day, fluctuation, residents, appliances,
            industrial_area, theft_history, daily_usage, payment_delay, usage_spike
        ]])

        # Make prediction
        prediction = model.predict(inputs)[0]
        
        # Get prediction probability if available
        try:
            probabilities = model.predict_proba(inputs)[0]
            confidence = max(probabilities)
        except:
            confidence = 0.5

        # Determine result
        result = "Theft" if prediction == 1 else "No Theft"

        return jsonify({
            'prediction': result,
            'confidence': float(confidence),
            'input_features': {
                'usage': usage,
                'time_of_day': data['timeOfDay'],
                'fluctuation': fluctuation,
                'residents': residents,
                'appliances': appliances,
                'industrial_area': data['industrialArea'],
                'theft_history': data['theftHistory'],
                'daily_usage': daily_usage,
                'payment_delay': payment_delay,
                'usage_spike': data['usageSpike']
            }
        }), 200

    except ValueError as e:
        return jsonify({'error': f'Invalid input data: {str(e)}'}), 400
    except KeyError as e:
        return jsonify({'error': f'Missing required field: {str(e)}'}), 400
    except Exception as e:
        return jsonify({'error': f'Prediction error: {str(e)}'}), 500

@app.route('/health', methods=['GET'])
def health():
    """
    Health check endpoint
    """
    return jsonify({
        'status': 'healthy',
        'model_loaded': model is not None
    }), 200

if __name__ == '__main__':
    print("Starting Electricity Theft Detection API Server...")
    print("Server running on http://localhost:5000")
    print("API Documentation:")
    print("  - Home: GET http://localhost:5000/")
    print("  - Predict: POST http://localhost:5000/predict")
    print("  - Health: GET http://localhost:5000/health")
    app.run(debug=True, host='localhost', port=5000)
