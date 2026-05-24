// Get form and result elements
const form = document.getElementById('theftForm');
const resultContainer = document.getElementById('resultContainer');
const resultBox = document.getElementById('resultBox');
const loadingSpinner = document.getElementById('loadingSpinner');
const errorMessage = document.getElementById('errorMessage');
const submitBtn = form.querySelector('.submit-btn');

// Handle form submission
form.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Clear previous results and errors
    resultContainer.classList.add('hidden');
    errorMessage.classList.add('hidden');

    // Show loading spinner
    loadingSpinner.classList.remove('hidden');
    submitBtn.disabled = true;

    // Collect form data
    const formData = {
        usage: parseFloat(document.getElementById('usage').value),
        timeOfDay: document.getElementById('timeOfDay').value,
        fluctuation: parseFloat(document.getElementById('fluctuation').value),
        residents: parseInt(document.getElementById('residents').value),
        appliances: parseInt(document.getElementById('appliances').value),
        industrialArea: document.getElementById('industrialArea').value,
        theftHistory: document.getElementById('theftHistory').value,
        dailyUsage: parseFloat(document.getElementById('dailyUsage').value),
        paymentDelay: parseInt(document.getElementById('paymentDelay').value),
        usageSpike: document.getElementById('usageSpike').value
    };

    try {
        // Send request to backend API
        const response = await fetch('http://localhost:5000/predict', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        // Hide loading spinner
        loadingSpinner.classList.add('hidden');

        // Display result
        displayResult(data);

    } catch (error) {
        console.error('Error:', error);
        loadingSpinner.classList.add('hidden');
        submitBtn.disabled = false;

        // Show error message
        errorMessage.classList.remove('hidden');
        errorMessage.innerHTML = `
            <strong>Error:</strong> 
            Unable to connect to the server. Make sure the backend is running on http://localhost:5000
        `;
    }
});

// Function to display result
function displayResult(data) {
    resultContainer.classList.remove('hidden');
    submitBtn.disabled = false;

    const prediction = data.prediction;
    const confidence = data.confidence;

    if (prediction === 'Theft') {
        resultBox.className = 'result-box theft';
        resultBox.innerHTML = `
            <h2>⚠️ Prediction: THEFT DETECTED</h2>
            <p>Confidence: <strong>${(confidence * 100).toFixed(2)}%</strong></p>
            <p style="margin-top: 15px;">Please contact <b>K Electric</b> immediately:</p>
            <p><strong>☎️ Hotline: 118</strong></p>
            <p><strong>📱 Toll-Free: 99000</strong></p>
            <p style="margin-top: 10px; font-size: 0.9em;">Report this suspicious activity right away.</p>
        `;
    } else {
        resultBox.className = 'result-box no-theft';
        resultBox.innerHTML = `
            <h2>✅ Prediction: NO THEFT</h2>
            <p>Confidence: <strong>${(confidence * 100).toFixed(2)}%</strong></p>
            <p style="margin-top: 15px;">Electricity usage appears to be normal.</p>
        `;
    }
}

// Validate form on input changes
const formInputs = form.querySelectorAll('input, select');
formInputs.forEach(input => {
    input.addEventListener('change', () => {
        // Clear previous results when form changes
        if (!resultContainer.classList.contains('hidden')) {
            resultContainer.classList.add('hidden');
        }
    });
});

// Optional: Load saved form data from localStorage
document.addEventListener('DOMContentLoaded', () => {
    // Restore form data if available
    const savedData = localStorage.getItem('theftFormData');
    if (savedData) {
        const data = JSON.parse(savedData);
        document.getElementById('usage').value = data.usage || 0;
        document.getElementById('timeOfDay').value = data.timeOfDay || '';
        document.getElementById('fluctuation').value = data.fluctuation || 0;
        document.getElementById('residents').value = data.residents || 1;
        document.getElementById('appliances').value = data.appliances || 1;
        document.getElementById('industrialArea').value = data.industrialArea || '';
        document.getElementById('theftHistory').value = data.theftHistory || '';
        document.getElementById('dailyUsage').value = data.dailyUsage || 0;
        document.getElementById('paymentDelay').value = data.paymentDelay || 0;
        document.getElementById('usageSpike').value = data.usageSpike || '';
    }

    // Auto-save form data to localStorage
    formInputs.forEach(input => {
        input.addEventListener('change', () => {
            const formData = {
                usage: document.getElementById('usage').value,
                timeOfDay: document.getElementById('timeOfDay').value,
                fluctuation: document.getElementById('fluctuation').value,
                residents: document.getElementById('residents').value,
                appliances: document.getElementById('appliances').value,
                industrialArea: document.getElementById('industrialArea').value,
                theftHistory: document.getElementById('theftHistory').value,
                dailyUsage: document.getElementById('dailyUsage').value,
                paymentDelay: document.getElementById('paymentDelay').value,
                usageSpike: document.getElementById('usageSpike').value
            };
            localStorage.setItem('theftFormData', JSON.stringify(formData));
        });
    });
});
