function getPlayersCall() {
    let playersCall = prompt("Choose one out of Rock, Paper or Scissors: ");
    return playersCall;
}
function getComputersCall() {
    let arr = ["Rock", "Paper", "Scissors"];
    let index = Math.floor(Math.random() * arr.length);
    return arr[index];
}
// Get player and computer choices
let playersCall = getPlayersCall();
let computersCall = getComputersCall();

console.log("Player chose: " + playersCall);
console.log("Computer chose: " + computersCall);

// Print the result of the game
let result;

if (playersCall === computersCall) {
    result = "Match tie!";
}
else if (
    (playersCall === "Rock" && computersCall === "Scissors") ||
    (playersCall === "Paper" && computersCall === "Rock") ||
    (playersCall === "Scissors" && computersCall === "Paper")
) {
    result = "You won!";
}
else {
    result = "You lost!";
}
console.log(result);