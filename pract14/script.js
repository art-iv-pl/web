class LightsOutGame {
    constructor() {
        this.currentGameIndex = 0;
        this.currentSteps = 0;
        this.games = [];
        this.startTime;
        this.timer;
        this.initialGameStates = [];
        this.fetchGame();
    }

    async fetchGame() {
        try {
            const response = await fetch('gameLightOut.json');
            const data = await response.json();
            this.games = data;
            this.initialGameStates = this.games.map(game => JSON.parse(JSON.stringify(game.initial_state)));
            this.setupGame(this.currentGameIndex);
        } catch (error) {
            console.error('Failed to fetch game data:', error);
        }
    }

    startGame(game) {
        clearInterval(this.timer);
        this.startTime = Date.now();
        this.timer = setInterval(this.updateTime.bind(this), 1000);

        this.currentSteps = 0;
        this.updateSteps();

        document.getElementById('minSteps').textContent = game.minimum_steps_to_win;

        const board = document.getElementById('gameBoard');
        board.innerHTML = '';

        game.initial_state.forEach(function(row, r) {
            const tr = board.insertRow();
            row.forEach(function(cell, c) {
                const td = tr.insertCell();
                td.className = cell === 1 ? 'lightOn' : '';
                td.onclick = () => {
                    this.toggleLights(r, c, game.initial_state);
                };
            });
        }, this);
    }

    toggleLights(r, c, grid) {
        function toggle(r, c) {
            if (r >= 0 && r < 5 && c >= 0 && c < 5) {
                grid[r][c] = 1 - grid[r][c];
                const cell = document.getElementById('gameBoard').rows[r].cells[c];
                cell.className = grid[r][c] === 1 ? 'lightOn' : '';
            }
        }

        toggle(r, c);
        toggle(r - 1, c);
        toggle(r + 1, c);
        toggle(r, c - 1);
        toggle(r, c + 1);

        this.currentSteps++;
        this.updateSteps();

        if (this.checkWin(grid)) {
            clearInterval(this.timer);
            setTimeout(() => {
                alert("Congratulations! You have completed the game!");
                this.restart();
            }, 1000);
        }
    }

    checkWin(grid) {
        return grid.every(row => row.every(cell => cell === 0));
    }

    changeCombination() {
        this.currentGameIndex = (this.currentGameIndex + 1) % this.games.length;
        this.setupGame(this.currentGameIndex);
    }

    restart() {
        this.currentSteps = 0;
        this.resetToInitialState();
    }

    updateSteps() {
        document.getElementById('currentSteps').textContent = this.currentSteps;
    }

    updateTime() {
        const elapsed = Math.floor((Date.now() - this.startTime) / 1000);
        document.getElementById('gameTime').textContent = elapsed;
    }

    setupGame(index) {
        const game = this.games[index];
        this.startGame(game);
    }

    resetSteps() {
        this.currentSteps = 0;
        this.updateSteps();
    }

    resetToInitialState() {
        this.games[this.currentGameIndex].initial_state = JSON.parse(JSON.stringify(this.initialGameStates[this.currentGameIndex]));
        this.startGame(this.games[this.currentGameIndex]);
    }
}

const lightsOutGame = new LightsOutGame();

document.getElementById('newGameButton').addEventListener('click', () => {
    lightsOutGame.restart();
});
