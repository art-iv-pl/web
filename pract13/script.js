let timerInterval;
let gameActive = false;

document.getElementById('startButton').addEventListener('click', startGame);

function startGame() {
    const startPage = document.getElementById('startPage');
    const gamePage = document.getElementById('gamePage');
    const blockColor = document.getElementById('color').value;
    const difficulty = document.getElementById('difficulty').value;

    if (!blockColor || !difficulty) {
        alert("Please choose block color and difficulty");
        return;
    }

    startPage.style.display = 'none';
    gamePage.style.display = 'block';

    document.getElementById('block').classList.add(blockColor);

    let specifiedTime, blockSize, marginSize;

    switch (difficulty) {
        case 'easy':
            specifiedTime = 3;
            blockSize = 50;
            marginSize = 10;
            break;
        case 'normal':
            specifiedTime = 2;
            blockSize = 40;
            marginSize = 20;
            break;
        case 'hard':
            specifiedTime = 1;
            blockSize = 30;
            marginSize = 30;
            break;
        default:
            specifiedTime = 4;
            blockSize = 50;
            marginSize = 10;
    }

    const block = document.getElementById('block');
    block.style.width = blockSize + 'px';
    block.style.height = blockSize + 'px';
    block.style.margin = marginSize + 'px';

    startTimer(specifiedTime);
    moveBlock(difficulty);
    gameActive = true;
}

function startTimer(specifiedTime) {
    const timerElement = document.getElementById('timer');
    let remainingTime = specifiedTime;

    timerInterval = setInterval(function() {
        if (gameActive) {
            timerElement.textContent = 'Time left for click: ' + remainingTime + 's';
            if (remainingTime <= 0) {
                clearInterval(timerInterval);
                const finalScore = document.getElementById('score').textContent;
                alert(`Time's up! Your final score is: ${finalScore}. Congratulations! To start a new game, please refresh the page.`);
                gameActive = false;
            }
            remainingTime--;
        }
    }, 1000);
}

function moveBlock(difficulty) {
    const block = document.getElementById('block');

    const screenWidth = window.innerWidth - 2 * parseInt(getComputedStyle(block).margin) - block.offsetWidth;
    const screenHeight = window.innerHeight - 2 * parseInt(getComputedStyle(block).margin) - block.offsetHeight;

    let randomX, randomY;

    switch (difficulty) {
        case 'easy':
            randomX = Math.floor(Math.random() * (screenWidth - 100));
            randomY = Math.floor(Math.random() * (screenHeight - 100));
            break;
        case 'normal':
            randomX = Math.floor(Math.random() * (screenWidth - 50));
            randomY = Math.floor(Math.random() * (screenHeight - 50));
            break;
        case 'hard':
            randomX = Math.floor(Math.random() * (screenWidth - 20));
            randomY = Math.floor(Math.random() * (screenHeight - 20));
            break;
        default:
            randomX = Math.floor(Math.random() * screenWidth);
            randomY = Math.floor(Math.random() * screenHeight);
    }

    block.style.left = randomX + 'px';
    block.style.top = randomY + 'px';

    block.onclick = function() {
        if (gameActive) {
            let currentScore = parseInt(document.getElementById('score').textContent.split(": ")[1]);
            currentScore++;
            document.getElementById('score').textContent = 'Score: ' + currentScore;
            clearInterval(timerInterval);
            startGame();
        }
    };
}
