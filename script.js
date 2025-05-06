function getComputerChoice() {
    let val = Math.floor(Math.random() * 3) + 1;

    if (val === 1) {
        return "rock";
    }

    else if (val === 2) {
        return "paper";
    }

    else {
        return "scissors";
    }
}
function getHumanChoice() {
    let choice = prompt("Enter your choice (rock, paper, or scissors):").toLowerCase();
    if (choice === "rock" || choice === "paper" || choice === "scissors") {
        return choice;
    }
}
function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound() {
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();


        if (humanChoice === computerChoice) {
            console.log("It's a tie!");
        } else if (
            (humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "scissors" && computerChoice === "paper") ||
            (humanChoice === "paper" && computerChoice === "rock")
        ) {
            console.log("You win this round!");
            humanScore++;
        } else {
            console.log("Computer wins this round!");
            computerScore++;
        }

        console.log("Your Score:", humanScore, "Computer's Score:", computerScore);
    }

    for (let i = 0; i < 5; i++) {
        playRound();
    }

    if (humanScore > computerScore) {
        console.log("Congratulations! You won the game!");
    } else if (computerScore > humanScore) {
        console.log("Computer wins the game.");
    } else {
        console.log("The game is a tie!");
    }
}