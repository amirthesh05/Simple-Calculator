function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function deleteLast() {
    let display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

function calculateResult() {
    try {
        let expression = document.getElementById('display').value;
        expression = expression.replace(/%/g, '/100'); 
        
        
        if (expression.includes('/0')) {
            throw new Error("Math Error: Division by zero");
        }

        let result = eval(expression);
        
        if (!isFinite(result)) {
            throw new Error("Math Error");
        }

        document.getElementById('display').value = result;
    } catch (error) {
        document.getElementById('display').value = "Error";
        
    }
}
