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

    function performOperation(operation, op1, op2) {
        switch (operation) {
            case 'add':
                return op1 + op2;
            case 'sub':
                return op1 - op2;
            case 'mul':
                return op1 * op2;
            case 'div':
                return op1 / op2;
        }
    }

    function calculateTrigonometric(operation, op1) {
        switch (operation) {
            case 'log':
                if (op1 <= 0 || isNaN(op1)) {
                    displayError('Operand 1 is less or equal to 0');
                    return;
                }
                return Math.log(op1);
            case 'sin':
                return Math.sin(op1 * Math.PI / 180);
            case 'tan':
                return Math.tan(op1 * Math.PI / 180);
        }
    }

    function fetchAndDisplayInfo(operation) {
        fetch(`${operation}.json`)
            .then(response => response.json())
            .then(data => {
                infoDiv.innerHTML = `<h3>${data.name}</h3><p>${data.description}</p><img src="${data.image_name}" alt="${data.name}">`;
            })
            .catch(error => console.error(`Error fetching ${operation} info:`, error));
    }

    document.getElementById('add-button').addEventListener('click', function() {
        const result = performOperation('add', parseFloat(op1Input.value), parseFloat(op2Input.value));
        displayResult(result);
    });

    document.getElementById('sub-button').addEventListener('click', function() {
        const result = performOperation('sub', parseFloat(op1Input.value), parseFloat(op2Input.value));
        displayResult(result);
    });

    document.getElementById('mul-button').addEventListener('click', function() {
        const result = performOperation('mul', parseFloat(op1Input.value), parseFloat(op2Input.value));
        displayResult(result);
    });

    document.getElementById('div-button').addEventListener('click', function() {
        const op2 = parseFloat(op2Input.value);
        if (op2 === 0 || isNaN(op2)) {
            displayError('Cannot be divided by 0!');
        } else {
            const result = performOperation('div', parseFloat(op1Input.value), op2);
            displayResult(result);
        }
    });

    document.getElementById('log-button').addEventListener('click', function() {
        const result = calculateTrigonometric('log', parseFloat(op1Input.value));
        if (result !== undefined) {
            displayResult(result);
            fetchAndDisplayInfo('log');
        }
    });

    document.getElementById('sin-button').addEventListener('click', function() {
        const result = calculateTrigonometric('sin', parseFloat(op1Input.value));
        if (result !== undefined) {
            displayResult(result);
            fetchAndDisplayInfo('sin');
        }
    });

    document.getElementById('tan-button').addEventListener('click', function() {
        const result = calculateTrigonometric('tan', parseFloat(op1Input.value));
        if (result !== undefined) {
            displayResult(result);
            fetchAndDisplayInfo('tan');
        }
    });
});
