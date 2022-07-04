const buttons = document.querySelectorAll('div.choice-buttons > button');
const resultsPara = document.querySelector('div.results > p');


function computerChoice() {
    const options = ["rock", "paper", "scissors"];
    return options[Math.floor(Math.random()*options.length)];
}


function playRound(playerSelection, computerSelection) {

    let selectionCombo = `${playerSelection}${computerSelection}`

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

function scoreboard(points) {
    
}


function results(playerPoints, computerPoints) {
    outputElement = document.querySelector('div.results > p');
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
let computerPoints = 0;


// Runs one round when a button is clicked
buttons.forEach((button) => {
    button.addEventListener('click', () => {

        points = playRound(button.value, computerChoice());
        playerPoints += points[0];
        computerPoints += points[1];

        if (playerPoints>=5 || computerPoints>=5) {
            results(playerPoints, computerPoints, resultsPara);
        }
    });
});


function game() {

    // let points;
    // let playerPoints = 0;
    // let computerPoints = 0;

    // for (let i=0; i < 5; i++) {

    //     let computerSelection = computerChoice();
    //     let playerSelection = playerChoice();

    //     points = playRound(playerSelection, computerSelection);
    //     playerPoints += points[0];
    //     computerPoints += points[1];
    // };

    // console.log(results(playerPoints,computerPoints));
       
}



