document.addEventListener('DOMContentLoaded', function() {
    const addButton = document.getElementById('add-button');
    const subButton = document.getElementById('sub-button');
    const mulButton = document.getElementById('mul-button');
    const divButton = document.getElementById('div-button');
    const logButton = document.getElementById('log-button');
    const sinButton = document.getElementById('sin-button');
    const tanButton = document.getElementById('tan-button');

    addButton.addEventListener('click', calculate);
    subButton.addEventListener('click', calculate);
    mulButton.addEventListener('click', calculate);
    divButton.addEventListener('click', calculate);
    logButton.addEventListener('click', calculateTrig);
    sinButton.addEventListener('click', calculateTrig);
    tanButton.addEventListener('click', calculateTrig);

    function calculate() {
        const op1 = parseFloat(document.getElementById('op1').value);
        const op2 = parseFloat(document.getElementById('op2').value);
        const operator = this.textContent;

        let result;
        switch (operator) {
            case 'Add':
                result = op1 + op2;
                break;
            case 'Subtract':
                result = op1 - op2;
                break;
            case 'Multiply':
                result = op1 * op2;
                break;
            case 'Divide':
                if (op2 === 0) {
                    result = 'Error: Division by zero';
                } else {
                    result = op1 / op2;
                }
                break;
        }

        document.getElementById('result').textContent = `Result: ${result}`;
    }

    function calculateTrig() {
        const op1 = parseFloat(document.getElementById('op1').value);
        const operator = this.textContent;

        fetch(`/help/${operator.toLowerCase()}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                document.getElementById('info').innerHTML = `
                    <h4>${data.name}</h4>
                    <p>${data.description}</p>
                    <img src="${data.image_name}" alt="${data.name}">
                `;
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });

        switch (operator) {
            case 'Logarithm':
                document.getElementById('result').textContent = `Result: ${Math.log(op1)}`;
                break;
            case 'Sine':
                document.getElementById('result').textContent = `Result: ${Math.sin(op1 * Math.PI / 180)}`;
                break;
            case 'Tangent':
                document.getElementById('result').textContent = `Result: ${Math.tan(op1 * Math.PI / 180)}`;
                break;
        }
    }
});
