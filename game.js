const choiceButtons = document.querySelectorAll('div.choice-buttons > button');
const resultsText = document.querySelector('div.results > p');
const scoreText = document.getElementsByClassName('score');

const resetButton = document.getElementById('reset');
resetButton.addEventListener('click', () => {location.reload()});


function computerChoice() {
    const options = ["rock", "paper", "scissors"];
    return options[Math.floor(Math.random()*options.length)];
}


function playRound(playerSelection, computerSelection) {

    let selectionCombo = `${playerSelection}${computerSelection}`;

    if ((selectionCombo==="rockpaper") ||
        (selectionCombo==="paperscissors") ||
        (selectionCombo==="scissorsrock")) {
        console.log(`You lose! ${computerSelection} beats ${playerSelection}.`);
        return 'computer';
    } else if (playerSelection===computerSelection) {
        console.log(`It's a draw! You both chose ${playerSelection}.`);
        return 'draw';
    } else {
        console.log(`You win! ${playerSelection} beats ${computerSelection}.`);
        return 'player';
    }
}

function getPoints(winner, playerPoints, computerPoints) {
    if (winner === 'computer') {
        return [playerPoints, computerPoints += 1];
    } else if (winner === 'player') {
        return [playerPoints += 1, computerPoints];
    } else {
        return [playerPoints, computerPoints];
    }
}

function scoreboard(playerPoints, computerPoints) {
    scoreText[0].textContent = playerPoints;
    scoreText[1].textContent = computerPoints;
}

function toggleGlowboard(boardID, remove=false) {
    if (remove) {
        document.getElementById(boardID).classList.remove('scoreboard-neon');
    } else {
        document.getElementById(boardID).classList.add('scoreboard-neon');
    }
}

function displayHistory(playerSelection, computerSelection, winner) {
    
    let playerText = document.createElement("p");
    let computerText = document.createElement("p");

    playerText.textContent += `${playerSelection}`;
    computerText.textContent += `${computerSelection}`;

    if (winner === 'computer') {
        computerText.classList.add('winner-history');
        playerText.classList.add('lose-history');
        toggleGlowboard('scoreboard2');
    } else if (winner === 'player') {
        playerText.classList.add('winner-history');
        computerText.classList.add('lose-history');
        toggleGlowboard('scoreboard1');
    } else {
        playerText.classList.add('lose-history');
        computerText.classList.add('lose-history');
    }

    const playerDisplay = document.getElementById('player-history');
    const computerDisplay = document.getElementById('computer-history');
    playerDisplay.insertBefore(playerText, playerDisplay.firstChild)
    computerDisplay.insertBefore(computerText, computerDisplay.firstChild)
}

function displayRound(round) {
    const outputRound = document.querySelector('header > p');
    outputRound.textContent = `Round ${round}`;
}


function endGame(playerPoints, computerPoints) {
    choiceButtons.forEach(button => button.disabled = true);
    document.getElementById('messageText').innerText = '';
    document.getElementById('reset').innerText = 'Play again?';

    const output = document.getElementById('final-result');

    if (playerPoints>computerPoints) {
        output.textContent += "You win!";
    } else if (playerPoints<computerPoints) {
        output.textContent += "You lose!";
    } else {
        output.textContent += "It's a draw!";
    }
}


let playerPoints = 0;
let computerPoints = 0;
let round = 0;


// Runs one round when a button is clicked
choiceButtons.forEach((button) => {
    button.addEventListener('click', () => {
        toggleGlowboard('scoreboard1', remove=true);
        toggleGlowboard('scoreboard2', remove=true);

        let playerSelection = button.value;
        let computerSelection = computerChoice();

        displayRound(round += 1);

        let winner = playRound(playerSelection, computerSelection);
        displayHistory(playerSelection, computerSelection, winner);

        [playerPoints, computerPoints] = getPoints(winner, playerPoints, computerPoints);
        scoreboard(playerPoints, computerPoints);

        if (playerPoints>=5 || computerPoints>=5) {
            endGame(playerPoints, computerPoints, resultsText);
        }
    });
});

