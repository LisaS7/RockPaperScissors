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


function playerChoice() {
    let playerInput = prompt("Please enter your choice:").toLowerCase()
    let checkChoice = (playerInput==="rock" || playerInput==="paper" || playerInput==="scissors");

    if (checkChoice) {
        return playerInput;
    } else {
        console.log('Invalid input!');
        return playerChoice();
    }
}


function results(playerPoints, computerPoints) {
    console.log(`You have ${playerPoints} points. The computer has ${computerPoints} points.`)

    if (playerPoints>computerPoints) {
        return "You win!";
    } else if (playerPoints<computerPoints) {
        return "You lose!";
    } else {
        return "It's a draw!";
    }
}


const buttons = document.querySelectorAll('div.choice-buttons > button');
buttons.forEach((button) => {
    button.addEventListener('click', playRound(button.value, 'rock'));
});

function game() {

    let points;
    let playerPoints = 0;
    let computerPoints = 0;

    for (let i=0; i < 5; i++) {

        let computerSelection = computerChoice();
        let playerSelection = playerChoice();

        points = playRound(playerSelection, computerSelection);
        playerPoints += points[0];
        computerPoints += points[1];
    };

    console.log(results(playerPoints,computerPoints));
       
}

//game();

