function getPlayersCall() {
    let playersCall = prompt("Choose one out of Rock, Paper or Scissors: ");
    return playersCall;
}
function getComputersCall() {
    let arr = ["Rock", "Paper", "Scissors"];
    let index = Math.floor(Math.random() * arr.length);
    return arr[index];
}

function playRound(playersCall, computersCall) {
    playersCall = playersCall.trim().toLowerCase();
    computersCall = computersCall.trim().toLowerCase();
    let result;

    if (playersCall === computersCall) {
        result = "Match tie!";
    }
    else if (
        (playersCall === "rock" && computersCall === "scissors") ||
        (playersCall === "paper" && computersCall === "rock") ||
        (playersCall === "scissors" && computersCall === "paper")
    ) {
        result = "You won!";
    }
    else {
        result = "You lost!";
    }
    return result;
}
function playGame() {
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        const playersChoice = getPlayersCall();
        const computersChoice = getComputersCall();

        console.log("Player chose: " + playersChoice);
        console.log("Computer chose: " + computersChoice);

        let result = playRound(playersChoice, computersChoice);
        console.log(result);

        if (result === "You won!") {
            playerScore++;
        } else if (result === "You lost!") {
            computerScore++;
        }
    }

    console.log("\nFinal scores:");
    console.log("Player: " + playerScore);
    console.log("Computer: " + computerScore);

    if (playerScore > computerScore) {
        console.log("Winner! You played excellent");
    } else if (playerScore === computerScore) {
        console.log("Match draw! You tried well");
    } else {
        console.log("Lost! Better luck next time");
    }
}

// Start the game
playGame();