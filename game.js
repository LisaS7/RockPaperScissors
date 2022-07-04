function computerPlay() {

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


function playerInput() {
    let playerChoice = prompt("Please enter your choice:").toLowerCase()
    let checkChoice = (playerChoice==="rock" || playerChoice==="paper" || playerChoice==="scissors");

    if (checkChoice) {
        return playerChoice;
    } else {
        console.log('Invalid input!');
        return playerInput();
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


function game() {

    let points;
    let playerPoints = 0;
    let computerPoints = 0;

    for (let i=0; i < 5; i++) {

        let computerSelection = computerPlay();
        let playerSelection = playerInput();

        points = playRound(playerSelection, computerSelection);
        playerPoints += points[0];
        computerPoints += points[1];
    };

    console.log(results(playerPoints,computerPoints));
       
}

game();

