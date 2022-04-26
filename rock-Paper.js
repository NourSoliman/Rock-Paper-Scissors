
const myArray = ["Paper", "Scissors", "Rock"];
function computerPlay() {
    return myArray[~~(Math.random() * myArray.length)];
}

function playRound(playerSelection, computerSelection) {

    if (computerSelection.toLowerCase() == playerSelection.toLowerCase()) {
        document.write("t3adol")
    } else if (
        (computerSelection.toLowerCase() == "Rock" && playerSelection.toLowerCase() == "Scissors")
            (computerSelection == "Scissors" && playerSelection == "Paper")
            (computerSelection == "Paper" && playerSelection == "Rock")
    ) {
        computerScore++
        console.log("You lose")
    }
    if (playerSelection.toLowerCase() == computerSelection.toLowerCase()) {
        document.write("t3adol")
    } else if ((playerSelection == "Rock" && computerSelection == "Scissors")
        (playerSelection == "Scissors" && computerSelection == "Paper")
        (playerSelection == "Paper" && computerSelection == "Rock")) {
        userScore++
        console.log("you win")
    };
}

let computerScore = parseInt(0);
let userScore = parseInt(0);


for (let i = 0; i < 5; i++) {
    let playerSelection = prompt("Pick amove!");
    let computerSelection = computerPlay();
    console.log(playRound(playerSelection, computerSelection));
    console.log("Your score " + userScore);
    console.log("computer score" + computerScore);
}