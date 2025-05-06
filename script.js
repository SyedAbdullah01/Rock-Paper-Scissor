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