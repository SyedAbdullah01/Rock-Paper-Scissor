
I developed this Rock Paper Scissors game using plain JavaScript, focusing on basic logic without any UI.

1. **User & Computer Choices**:  
   I created two functions – `getHumanChoice()` for user input via `prompt()` and `getComputerChoice()` which randomly selects `rock`, `paper`, or `scissors`.

2. **Game Logic**:  
   Inside the `playRound()` function, I compared the player's and computer's choices using conditional statements to determine the winner of each round.

3. **Game Loop**:  
   I wrapped the round logic inside a `playGame()` function that runs the game for 5 rounds using a `for` loop, keeps track of scores, and announces the final winner.


This project is simple and made without any GUI for now.