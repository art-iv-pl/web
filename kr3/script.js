function fetchData(operation) {
    fetch(`${operation}.json`)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            let helpContent;
            if (operation === 'log' || operation === 'sin' || operation === 'tan') {
                helpContent = `
                    <h3>${data.name}</h3>
                    <img src="${data.image_name}" alt="${data.name}">
                    <p>${data.description}</p>
                `;
                document.getElementById('content').style.display = 'block';
            } else {
                helpContent = `<h2>${data.name}</h2><p>${data.description}</p>`;
            }
            document.getElementById('content').innerHTML = helpContent;
        })
        .catch(function(error) {
            console.error('Error fetching data:', error);
        });
}

function calculate(operation) {
    const op1 = parseFloat(document.getElementById('op1').value);
    const op2 = parseFloat(document.getElementById('op2').value);
    let result;
    switch(operation) {
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
            if(op2 !== 0) {
                result = op1 / op2;
            } else {
                document.getElementById('res').innerText = 'Division by 0!';
                return;
            }
            break;
        case 'log':
            if (op1 <= 0) {
                document.getElementById('res').innerText = 'Operand 1 is less or equal to 0';
                return;
            }
            result = Math.log(op1);
            fetchData('log');
            document.getElementById('content').style.display = 'block'; 
            break;
        case 'sin':
            result = Math.sin(op1);
            fetchData('sin');
            document.getElementById('content').style.display = 'block'; 
            break;
        case 'tan':
            result = Math.tan(op1);
            fetchData('tan');
            document.getElementById('content').style.display = 'block'; 
            break;
        default:
            result = 'Invalid operation';
    }
    if (operation !== 'log' && operation !== 'sin' && operation !== 'tan') {
        document.getElementById('content').style.display = 'none';
    }
    document.getElementById('res').innerText = `Result: ${result}`;
}

document.getElementById('add-button').addEventListener('click', function() {
    calculate('add');
});

document.getElementById('sub-button').addEventListener('click', function() {
    calculate('sub');
});

document.getElementById('mul-button').addEventListener('click', function() {
    calculate('mul');
});

document.getElementById('div-button').addEventListener('click', function() {
    calculate('div');
});

document.getElementById('log-button').addEventListener('click', function() {
    calculate('log');
});

document.getElementById('sin-button').addEventListener('click', function() {
    calculate('sin');
});

document.getElementById('tan-button').addEventListener('click', function() {
    calculate('tan');
});

document.addEventListener("DOMContentLoaded", function () {
    const contentElement = document.getElementById('content');
    contentElement.style.display = 'none'; 

    contentElement.style.border = '2px solid #ccc';
    contentElement.style.padding = '10px';
    contentElement.style.marginTop = '10px';

    document.getElementById("log-button").addEventListener("click", function () {
        const op1 = parseFloat(document.getElementById("op1").value);
        fetchData("log");
    });

    document.getElementById("sin-button").addEventListener("click", function () {
        const op1 = parseFloat(document.getElementById("op1").value);
        fetchData("sin");
    });

    document.getElementById("tan-button").addEventListener("click", function () {
        const op1 = parseFloat(document.getElementById("op1").value);
        fetchData("tan");
    });
});
