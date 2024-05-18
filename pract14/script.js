let gameData = []; 
let currentGameIndex = 0;
let steps = 0; 
let startTime;


function loadGameData() {
  fetch('gameLightOut.json')
    .then(response => response.json())
    .then(data => {
      gameData = data;
      renderGame();
    })
    .catch(error => console.error('Error loading game data:', error));
}

function renderGame() {
  const container = document.getElementById('game-container');
  container.innerHTML = ''; 

  const currentGame = gameData[currentGameIndex];
  const gameState = currentGame.gameState;
  const minSteps = currentGame.minStepsToWin;

  document.getElementById('minSteps').textContent = minSteps;
  document.getElementById('currentSteps').textContent = steps;


  startTime = Date.now();

  for (let i = 0; i < gameState.length; i++) {
    for (let j = 0; j < gameState[i].length; j++) {
      const cell = document.createElement('div');
      cell.className = gameState[i][j] === 1 ? 'on' : '';
      cell.onclick = () => {
        toggleCellState(i, j);
        steps++;
        document.getElementById('currentSteps').textContent = steps;
      };
      container.appendChild(cell);
    }
  }
  steps = 0; /
}

function toggleCellState(row, col) {
  const currentGame = gameData[currentGameIndex];
  const gameState = currentGame.gameState;

  gameState[row][col] = 1 - gameState[row][col]; // Зміна стану клітинки (0 -> 1, 1 -> 0)


  if (row > 0) gameState[row - 1][col] = 1 - gameState[row - 1][col];
  if (row < 4) gameState[row + 1][col] = 1 - gameState[row + 1][col];
  if (col > 0) gameState[row][col - 1] = 1 - gameState[row][col - 1];
  if (col < 4) gameState[row][col + 1] = 1 - gameState[row][col + 1];

  renderGame();
}


function newGame() {
  currentGameIndex = Math.floor(Math.random() * gameData.length); 
  renderGame();
}

function restartGame() {
  renderGame();
}


function updateTimer() {
  const currentTime = Math.floor((Date.now() - startTime) / 1000); 
  document.getElementById('gameTime').textContent = currentTime;
}

window.onload = function () {
  loadGameData();
  setInterval(updateTimer, 1000);
};
