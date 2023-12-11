let playerScore = 0;
let computerScore = 0;
let playCount = 0;
let victor = "";

function getComputerChoice() {
    //random number between 1 and 3
    const randomNumber = Math.floor(Math.random() * 3) + 1;
    console.log("randomNumber is: " + randomNumber);
    if (randomNumber === 3) {
        return "rock";
    } else if (randomNumber === 2) {
        return "paper";
    }
    return "scissors";
}

console.log("Testing... Computer's choice is: " + getComputerChoice());

function checkHands(playerSelection, computerSelection) {
    if (playerSelection === "rock") {

        if (computerSelection === "rock") return 1;
        if (computerSelection === "paper") return 2;
        if (computerSelection === "scissors") return 3;

    } else if (playerSelection === "paper") {

        if (computerSelection === "rock") return 4;
        if (computerSelection === "paper") return 5;
        if (computerSelection === "scissors") return 6;

    } else if (playerSelection === "scissors") {
        if (computerSelection === "rock") return 7;
        if (computerSelection === "paper") return 8;
        if (computerSelection === "scissors") return 9;
    }
    //catches invalid input
    return false;
}

function startRound(playerSelection, checkWinner) {
    let computerSelection = getComputerChoice();
    const roundResult = checkHands(playerSelection, computerSelection);

    if (roundResult) {
        switch (roundResult) {
            case 1:
                console.log("Tie! Rock and Rock!");
                break;

            case 2:
                console.log("You lose! Paper beats Rock!");
                computerScore += 1;
                break;

            case 3:
                console.log("You win! Rock beats Scissors!");
                playerScore += 1;
                break;

            case 4:
                console.log("You win! Paper beats Rock!");
                playerScore += 1;
                break;

            case 5:
                console.log("Tie! Paper and Paper!");
                break;

            case 6:
                console.log("You lose! Scissors beats Paper!");
                computerScore += 1;
                break;

            case 7:
                console.log("You lose! Rock beats Scissors!");
                computerScore += 1;
                break;

            case 8:
                console.log("You win! Scissors beats Paper!");
                playerScore += 1;
                break;

            case 9:
                console.log("Tie! Scissors and Scissors!");
                break;
        }
        playCount += 1;
    } else {
        alert("That's not one of the selections! Try again.");
    }
    console.log("CURRENT SCORE: ");
    console.log("Player Score: " + playerScore);
    console.log("Computer Score: " + computerScore);

    //check to see if any player has reached 5 points
    if (playerScore >= 5 || computerScore >= 5) {
        checkWinner();
    }
}

//determine winner
function checkWinner() {
    if (playerScore > computerScore) {
        victor = "Player";
    } else {
        victor = "Computer";
    }
    alert("Alright, " + playCount + " rounds later: " + victor + " wins!");
}