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

    displayHistory(playerSelection, computerSelection);

    let selectionCombo = `${playerSelection}${computerSelection}`;

    if ((selectionCombo==="rockpaper") ||
        (selectionCombo==="paperscissors") ||
        (selectionCombo==="scissorsrock")) {
        console.log(`You lose! ${computerSelection} beats ${playerSelection}.`);
        return [0,1];
    } else if (playerSelection===computerSelection) {
        console.log(`It's a draw! You both chose ${playerSelection}.`);
        return [0,0];
    } else {
        console.log(`You win! ${playerSelection} beats ${computerSelection}.`);
        return [1,0];
    }
}

function scoreboard(playerPoints, computerPoints) {
    scoreText[0].textContent = playerPoints;
    scoreText[1].textContent = computerPoints;
}

function displayHistory(playerSelection, computerSelection) {
    const playerDisplay = document.getElementById('player-history');
    const computerDisplay = document.getElementById('computer-history');
    playerDisplay.innerHTML += `${playerSelection}`;
    computerDisplay.innerHTML += `${computerSelection}`;
}

function displayRound(round) {
    const outputRound = document.querySelector('header > p');
    outputRound.textContent = `Round ${round}`;
}


function endGame(playerPoints, computerPoints) {
    choiceButtons.forEach(button => button.disabled = true);

    const outputElement = document.querySelector('div.results > p');
    outputElement.textContent = `You have ${playerPoints} points. The computer has ${computerPoints} points.`;

    if (playerPoints>computerPoints) {
        outputElement.textContent += "You win!";
    } else if (playerPoints<computerPoints) {
        outputElement.textContent += "You lose!";
    } else {
        outputElement.textContent += "It's a draw!";
    }

    playerPoints = 0;
    computerPoints = 0;
}


let playerPoints = 0;
let playerHistory = Array();
let computerPoints = 0;
let computerHistory = Array();
let round = 0;


// Runs one round when a button is clicked
choiceButtons.forEach((button) => {
    button.addEventListener('click', () => {

        points = playRound(button.value, computerChoice());
        displayRound(round += 1);

        playerPoints += points[0];
        computerPoints += points[1];

        scoreboard(playerPoints, computerPoints);

        if (playerPoints>=5 || computerPoints>=5) {
            endGame(playerPoints, computerPoints, resultsText);
        }
    });
});

