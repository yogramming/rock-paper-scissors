const btnR = document.querySelector("#btnR");
const btnP = document.querySelector("#btnP");
const btnS = document.querySelector("#btnS");

let yourScore = 0;
let computerScore = 0;
let round = 0;

btnR.addEventListener("click", () => clickTheButton("Rock"));
btnP.addEventListener("click", () => clickTheButton("Paper"));
btnS.addEventListener("click", () => clickTheButton("Scissors"));

function clickTheButton(playersCall) {
    round++;
    if (round > 5) {
        return;
    }

    const computersCall = getComputersCall();
    const result = playRound(playersCall,computersCall);

    if (result === "You won!") yourScore++;
    else if (result === "You lost!") computerScore++;

    const roundPrint = document.querySelector("#round");
    const scorePrint = document.querySelector("#scores");
    const resultPrint = document.querySelector("#result");
    const finalScorePrint = document.querySelector("#finalScore");

    roundPrint.innerHTML = `Round: <strong>${round}</strong>`;
    scorePrint.innerHTML = `You: ${yourScore} Computer: ${computerScore}`;
    resultPrint.innerHTML = `You: ${playersCall}<br> Computer: ${computersCall}<br> ${result}`;

    if (round === 5) {
        if (yourScore > computerScore) {
            finalScorePrint.textContent = `YOU  WIN!`;
        } else if (yourScore < computerScore) {
            finalScorePrint.textContent = `YOU  LOSE!`;
        } else {
            finalScorePrint.textContent = `MATCH DRAW!`;
        }
    }
}

function getComputersCall() {
    let arr = ["Rock", "Paper", "Scissors"];
    let index = Math.floor(Math.random() * arr.length);
    return arr[index];
}

function playRound(playersCall, computersCall) {

    if (playersCall === computersCall) {
        return "Match tie!";
    }
    else if (
        (playersCall === "Rock" && computersCall === "Scissors") ||
        (playersCall === "Paper" && computersCall === "Rock") ||
        (playersCall === "Scissors" && computersCall === "Paper")
    ) {
        return "You won!";
    }
    else {
        return "You lost!";
    }
}