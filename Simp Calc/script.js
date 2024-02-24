let displayValue = '0';

function clearDisplay() {
    displayValue = '0';
    updateDisplay();
}

function appendToDisplay(val) {
    if (displayValue === '0' && val !== '.') {
        displayValue = val;
    } else {
        displayValue += val;
    }
    updateDisplay();
}

function operate(operator) {
    displayValue += operator;
    updateDisplay();
}

function calculate() {
    try {
        displayValue = eval(displayValue);
        updateDisplay();
    } catch (error) {
        displayValue = 'Error';
        updateDisplay();
    }
}

function updateDisplay() {
    document.getElementById('display').innerText = displayValue;
}
