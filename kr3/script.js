document.addEventListener('DOMContentLoaded', function() {
    const op1Input = document.getElementById('op1');
    const op2Input = document.getElementById('op2');
    const resultOutput = document.getElementById('result');
    const infoDiv = document.getElementById('info');

    const operations = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
        '*': (a, b) => a * b,
        '/': (a, b) => a / b
    };

    const trigFunctions = {
        'log': Math.log,
        'sin': degrees => Math.sin(degrees * Math.PI / 180),
        'tan': degrees => Math.tan(degrees * Math.PI / 180)
    };

    function performOperation(operator) {
        const op1 = parseFloat(op1Input.value);
        const op2 = parseFloat(op2Input.value);
        if (isNaN(op1) || isNaN(op2)) {
            displayError('Invalid input');
            return;
        }
        if (operator === '/' && op2 === 0) {
            displayError('Cannot be divided by 0!');
            return;
        }
        const result = operations[operator](op1, op2);
        return result;
    }

    function calculateTrigFunction(funcName) {
        const op1 = parseFloat(op1Input.value);
        if (isNaN(op1)) {
            displayError('Invalid input');
            return;
        }
        if (op1 <= 0 && funcName === 'log') {
            displayError('Operand 1 is less or equal to 0');
            return;
        }
        const result = trigFunctions[funcName](op1);
        return result;
    }

    function displayResult(resultValue) {
        resultOutput.textContent = 'Result: ' + resultValue;
        infoDiv.innerHTML = '';
    }

    function displayError(errorMessage) {
        resultOutput.textContent = 'Error: ' + errorMessage;
        infoDiv.innerHTML = '';
    
        setTimeout(function() {
            resultOutput.textContent = '';
        }, 3000);
    }

    document.getElementById('add-button').addEventListener('click', () => {
        const result = performOperation('+');
        if (result !== undefined) {
            displayResult(result);
        }
    });
    document.getElementById('sub-button').addEventListener('click', () => {
        const result = performOperation('-');
        if (result !== undefined) {
            displayResult(result);
        }
    });
    document.getElementById('mul-button').addEventListener('click', () => {
        const result = performOperation('*');
        if (result !== undefined) {
            displayResult(result);
        }
    });
    document.getElementById('div-button').addEventListener('click', () => {
        const result = performOperation('/');
        if (result !== undefined) {
            displayResult(result);
        }
    });
    document.getElementById('log-button').addEventListener('click', () => {
        const result = calculateTrigFunction('log');
        if (result !== undefined) {
            displayResult(result);
            fetch('log.json')
                .then(response => response.json())
                .then(data => {
                    infoDiv.innerHTML = `<h3>${data.name}</h3><p>${data.description}</p><img src="${data.image_name}" alt="${data.name}">`;
                })
                .catch(error => console.error('Error fetching logarithm info:', error));
        }
    });
    document.getElementById('sin-button').addEventListener('click', () => {
        const result = calculateTrigFunction('sin');
        if (result !== undefined) {
            displayResult(result);
            fetch('sin.json')
                .then(response => response.json())
                .then(data => {
                    infoDiv.innerHTML = `<h3>${data.name}</h3><p>${data.description}</p><img src="${data.image_name}" alt="${data.name}">`;
                })
                .catch(error => console.error('Error fetching sine info:', error));
        }
    });
    document.getElementById('tan-button').addEventListener('click', () => {
        const result = calculateTrigFunction('tan');
        if (result !== undefined) {
            displayResult(result);
            fetch('tan.json')
                .then(response => response.json())
                .then(data => {
                    infoDiv.innerHTML = `<h3>${data.name}</h3><p>${data.description}</p><img src="${data.image_name}" alt="${data.name}">`;
                })
                .catch(error => console.error('Error fetching tangent info:', error));
        }
    });
});
