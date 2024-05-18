let grid = [];
let timerInterval;
let startTime;
let stepsCount = 0;
let targetSteps = 0;
let initialGrid;

const gridSize = 5;

document.addEventListener('DOMContentLoaded', () => {
    newGame();
});

function createGrid(gridData) {
    const gridElement = document.getElementById('grid');
    gridElement.innerHTML = '';
    grid = [];

    for (let row = 0; row < gridSize; row++) {
        const gridRow = [];
        for (let col = 0; col < gridSize; col++) {
            const cell = document.createElement('div');
            cell.className = 'cell' + (gridData[row][col] ? ' on' : '');
            cell.dataset.row = row;
            cell.dataset.col = col;
            cell.addEventListener('click', () => toggleLights(row, col));
            gridElement.appendChild(cell);
            gridRow.push(cell);
        }
        grid.push(gridRow);
    }
}

function toggleLights(row, col) {
    toggleCell(row, col);
    toggleCell(row - 1, col);
    toggleCell(row + 1, col);
    toggleCell(row, col - 1);
    toggleCell(row, col + 1);
    stepsCount++;
    document.getElementById('currentSteps').innerText = stepsCount;
    checkWin();
}

function toggleCell(row, col) {
    if (row >= 0 && row < gridSize && col >= 0 && col < gridSize) {
        const cell = grid[row][col];
        cell.classList.toggle('on');
    }
}

function checkWin() {
    const allOff = grid.every(row => row.every(cell => !cell.classList.contains('on')));
    if (allOff) {
        clearInterval(timerInterval);
        const status = document.getElementById('status');
        if (stepsCount <= targetSteps) {
            alert(`Congratulations! You solved it in ${stepsCount} steps.`);
        } else {
            alert(`Good job! You solved it in ${stepsCount} steps, but you can do better! Target steps: ${targetSteps}.`);
        }
    }
}

function newGame() {
    fetch('gameLightOut.json')
        .then(response => response.json())
        .then(data => {
            const randomGame = data.games[Math.floor(Math.random() * data.games.length)];
            initialGrid = randomGame.grid;
            targetSteps = randomGame.targetSteps;
            document.getElementById('minSteps').innerText = targetSteps;
            createGrid(initialGrid);
            resetTimer();
            stepsCount = 0;
            document.getElementById('currentSteps').innerText = stepsCount;
        });
}

function restartGame() {
    createGrid(initialGrid);
    resetTimer();
    stepsCount = 0;
    document.getElementById('currentSteps').innerText = stepsCount;
}

function resetTimer() {
    clearInterval(timerInterval);
    startTime = Date.now();
    document.getElementById('gameTime').innerText = 0;
    timerInterval = setInterval(() => {
        const elapsedTime = Math.floor((Date.now() - startTime) / 1000);
        document.getElementById('gameTime').innerText = elapsedTime;
    }, 1000);
}
