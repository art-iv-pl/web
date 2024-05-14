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

    const operationButtons = document.querySelectorAll('.operation-button');
    operationButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            const operation = this.getAttribute('data-operation');
            const op1 = parseFloat(op1Input.value);
            const op2 = parseFloat(op2Input.value);
            let result;

            switch (operation) {
                case 'add':
                    result = op1 + op2;
                    break;
                case 'sub':
                    result = op1 - op2;
                    break;
                case 'mul':
                    result = op1 * op2;
                    break;
                case 'div':
                    if (op2 === 0 || isNaN(op2)) {
                        displayError('Cannot be divided by 0!');
                        return;
                    } else {
                        result = op1 / op2;
                    }
                    break;
            }

            displayResult(result);
        });
    });

    const trigButtons = document.querySelectorAll('.trig-button');
    trigButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            const operation = this.getAttribute('data-operation');
            const op1 = parseFloat(op1Input.value);
            let result;

            if (isNaN(op1)) {
                displayError('Invalid input');
                return;
            }

            switch (operation) {
                case 'log':
                    if (op1 <= 0) {
                        displayError('Operand 1 is less or equal to 0');
                        return;
                    }
                    result = Math.log(op1);
                    break;
                case 'sin':
                    result = Math.sin(op1 * Math.PI / 180);
                    break;
                case 'tan':
                    result = Math.tan(op1 * Math.PI / 180);
                    break;
            }

            displayResult(result);
            fetch(`${operation}.json`)
                .then(response => response.json())
                .then(data => {
                    infoDiv.innerHTML = `<h3>${data.name}</h3><p>${data.description}</p><img src="${data.image_name}" alt="${data.name}">`;
                })
                .catch(error => console.error(`Error fetching ${operation} info:`, error));
        });
    });
});
