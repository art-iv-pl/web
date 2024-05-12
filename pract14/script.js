let currentGameIndex = 0;
let currentSteps = 0;
let games = [];
let startTime;
let timer;
let initialGameStates = [];

const fetching = async () => {
    try {
        const response = await fetch('gameLightOut.json');
        const data = await response.json();
        games = data;
        initialGameStates = games.map(game => JSON.parse(JSON.stringify(game.initial_state)));
        setupGame(currentGameIndex);
    } catch (error) {
        console.error('Failed to fetch game data:', error);
    }
};

const startGame = (game) => {
    clearInterval(timer);
    startTime = Date.now();
    timer = setInterval(updateTime, 1000);

    currentSteps = 0;
    updateSteps();

    document.getElementById('minSteps').textContent = game.minimum_steps_to_win;

    const board = document.getElementById('gameBoard');
    board.innerHTML = '';

    game.initial_state.forEach((row, r) => {
        const tr = board.insertRow();
        row.forEach((cell, c) => {
            const td = tr.insertCell();
            td.className = cell === 1 ? 'lightOn' : '';
            td.onclick = () => toggleLights(r, c, game.initial_state);
        });
    });
};

const toggleLights = (r, c, grid) => {
    const toggle = (r, c) => {
        if (r >= 0 && r < 5 && c >= 0 && c < 5) {
            grid[r][c] = 1 - grid[r][c];
            const cell = document.getElementById('gameBoard').rows[r].cells[c];
            cell.className = grid[r][c] === 1 ? 'lightOn' : '';
        }
    };

    toggle(r, c);
    toggle(r - 1, c);
    toggle(r + 1, c);
    toggle(r, c - 1);
    toggle(r, c + 1);

    currentSteps++;
    updateSteps();

    if (checkWin(grid)) {
        clearInterval(timer);
        setTimeout(() => {
            alert("Вітаю! Ви завершили гру!");
            restart();
        }, 1000);
    }
};

const checkWin = (grid) => grid.every(row => row.every(cell => cell === 0)));

const changeCombination = () => {
    currentGameIndex = (currentGameIndex + 1) % games.length;
    setupGame(currentGameIndex);
};

const restart = () => {
    currentSteps = 0;
    resetToInitialState();
};

const updateSteps = () => {
    document.getElementById('currentSteps').textContent = currentSteps;
};

const updateTime = () => {
    const elapsed = Math.floor((Date.now() - startTime) / 1000);
    document.getElementById('gameTime').textContent = elapsed;
};

window.onload = fetching;

const savedGameIndex = localStorage.getItem('currentGameIndex');
if (savedGameIndex !== null) {
    currentGameIndex = parseInt(savedGameIndex);
}

const setupGame = (index) => {
    const game = games[index];
    startGame(game);
};

const resetSteps = () => {
    currentSteps = 0;
    updateSteps();
};

const resetToInitialState = () => {
    games[currentGameIndex].initial_state = JSON.parse(JSON.stringify(initialGameStates[currentGameIndex]));
    startGame(games[currentGameIndex]);
};

document.getElementById('newGameButton').addEventListener('click', restart);
