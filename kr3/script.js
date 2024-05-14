document.addEventListener('DOMContentLoaded', function() {
    const op1Input = document.getElementById('op1');
    const op2Input = document.getElementById('op2');
    const resultOutput = document.getElementById('result');
    const infoDiv = document.getElementById('info');

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

    function calculate(operation, calculateFunc) {
        const operand1 = parseFloat(op1Input.value);
        const operand2 = parseFloat(op2Input.value);
        
        if (isNaN(operand1) || isNaN(operand2)) {
            displayError('Invalid input');
            return;
        }

        const result = calculateFunc(operand1, operand2);
        displayResult(result);
    }

    document.getElementById('add-button').addEventListener('click', function() {
        calculate('addition', (x, y) => x + y);
    });

    document.getElementById('sub-button').addEventListener('click', function() {
        calculate('subtraction', (x, y) => x - y);
    });

    document.getElementById('mul-button').addEventListener('click', function() {
        calculate('multiplication', (x, y) => x * y);
    });

    document.getElementById('div-button').addEventListener('click', function() {
        const divisor = parseFloat(op2Input.value);
        if (divisor === 0 || isNaN(divisor)) {
            displayError('Cannot be divided by 0!');
        } else {
            calculate('division', (x, y) => x / y);
        }
    });

    function calculateUnary(operationName, calculateFunc) {
        const operand = parseFloat(op1Input.value);
        if (isNaN(operand)) {
            displayError('Invalid input');
            return;
        }

        const result = calculateFunc(operand);
        displayResult(result);
        loadInfo(operationName + '.json');
    }

    document.getElementById('log-button').addEventListener('click', function() {
        calculateUnary('logarithm', Math.log);
    });

    function calculateTrigonometric(operationName, calculateFunc) {
        const operand = parseFloat(op1Input.value);
        if (isNaN(operand)) {
            displayError('Invalid input');
            return;
        }

        const radians = operand * Math.PI / 180;
        const result = calculateFunc(radians);
        displayResult(result);
        loadInfo(operationName + '.json');
    }

    document.getElementById('sin-button').addEventListener('click', function() {
        calculateTrigonometric('sine', Math.sin);
    });

    document.getElementById('tan-button').addEventListener('click', function() {
        calculateTrigonometric('tangent', Math.tan);
    });

    function loadInfo(fileName) {
        fetch(fileName)
            .then(response => response.json())
            .then(data => {
                infoDiv.innerHTML = `<h3>${data.name}</h3><p>${data.description}</p><img src="${data.image_name}" alt="${data.name}">`;
            })
            .catch(error => console.error('Error fetching info:', error));
    }
});
