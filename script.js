function getComputerChoice() {
    let val = Math.floor(Math.random() * (4 - 1)) + 1;
    let play = "none";
    if (val === 1) {
        play = "rock";
    }
    else if (val === 2) {
        play = "paper";
    }
    else {
        play = "scissors";
    }
    return play;
}