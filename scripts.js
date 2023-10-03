function getComputerChoice (){
    const choices = ['rock', 'paper', 'scissors'];
    //This line creates an array called choices containing three elements: 'rock', 'paper', and 'scissors'. 
    //These represent the three possible options in the rock-paper-scissors game.
    return choices[Math.floor(Math.random() * choices.length)];
    /*
    - Math.random() generates a random number between 0 (inclusive) and 1 (exclusive). This means it can produce a decimal number like 0.354 or 0.789.

    - choices.length returns the number of elements in the choices array, which is 3 in this case.

    - Math.random() * choices.length generates a random number between 0 and 3 (exclusive), effectively giving us a decimal number between 0 and 2.999.
        Question? : Is there a chance that number 0 will be picked as a random number?
        Answer: No, in the provided code, the expression Math.random() generates a random number between 0 (inclusive) and 1 (exclusive), which means it can produce any decimal number greater than or equal to 0, but less than 1.

                Since Math.random() is designed this way, it will never return exactly 0. However, it can generate extremely small decimal numbers very close to 0, but not 0 itself. These values are typically in the range of 5.0e-324 in JavaScript, which is the smallest positive number representable in the language.

                So, in practical terms, while it's theoretically possible to get an extremely small number close to 0, it is exceedingly rare and not something you need to worry about in most practical scenarios. For all intents and purposes, you can treat the result of Math.random() as a random number greater than 0 and less than 1.

    - Math.floor(...) rounds down this decimal number to the nearest whole number. So, if Math.random() produces, say, 2.345, Math.floor(2.345) would result in 2.

    - Finally, choices[Math.floor(Math.random() * choices.length)] retrieves an element from the choices array using the randomly generated index. This means it randomly selects one of the three elements ('rock', 'paper', or 'scissors').
    */
}

function playRound (playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if (playerSelection === computerSelection){
        return "It's a tie!";
    }else if (
        (playerSelection === 'rock' && computerSelection === 'scissors')||
        (playerSelection === 'paper' && computerSelection === 'rock')||
        (playerSelection === 'scissors' && computerSelection === 'paper')

    ){
        return `You win! ${playerSelection} beats ${computerSelection}.`;
    }
    else {
        return `You lose! ${computerSelection} beats ${playerSelection}`;
    }
}

// 1. `function playRound(playerSelection, computerSelection) {`
//    - This line defines a function called `playRound` that takes two inputs: `playerSelection` and `computerSelection`. These represent the choices made by the player and the computer in a single round of the rock-paper-scissors game.

// 2. `playerSelection = playerSelection.toLowerCase();`
//    - This line converts the `playerSelection` to lowercase. This is done to make the comparison case-insensitive. So, whether the player types "Rock", "rOcK", or "rock", it will all be treated the same.

// 3. `computerSelection = computerSelection.toLowerCase();`
//    - Similarly, this line converts the `computerSelection` to lowercase for the same reason.

// 4. `if (playerSelection === computerSelection) {`
//    - This line starts an "if" statement. It checks if the player's selection is equal to the computer's selection.

// 5. `return "It's a tie!";`
//    - If the player's choice is the same as the computer's choice, this line returns a message saying "It's a tie!".

// 6. `} else if (...) {`
//    - If the player's choice is not the same as the computer's choice, the program moves to this "else if" statement. Here, it checks various conditions to see who won the round based on the game rules.

// 7. The conditions inside the "else if" statement:
//    - `(playerSelection === 'rock' && computerSelection === 'scissors')`: If the player chose 'rock' and the computer chose 'scissors', the player wins.
//    - `(playerSelection === 'paper' && computerSelection === 'rock')`: If the player chose 'paper' and the computer chose 'rock', the player wins.
//    - `(playerSelection === 'scissors' && computerSelection === 'paper')`: If the player chose 'scissors' and the computer chose 'paper', the player wins.

// 8. `return `You win! ${playerSelection} beats ${computerSelection}.`;`
//    - If any of the conditions in the "else if" statement are true, this line returns a message stating that the player wins and specifies why based on their choices.

// 9. `} else {`
//    - If none of the above conditions are met, it means the computer won.

// 10. `return `You lose! ${computerSelection} beats ${playerSelection}.`;`
//     - This line returns a message stating that the player lost and explains why based on their choices.

// In summary, this function simulates a single round of the rock-paper-scissors game. It takes the choices of the player and the computer, compares them, and determines the winner, returning an appropriate message.


function game() {
    let playerWins = 0;
    let computerWins = 0;

    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt('Enter your choice (rock, paper, or scissors):');
        const computerSelection = computerPlay();
        const result = playRound(playerSelection, computerSelection);

        console.log(result);

        if (result.includes('win')) {
            playerWins++;
        } else if (result.includes('lose')) {
            computerWins++;
        }
    }

    if (playerWins > computerWins) {
        console.log(`You win the game! Score: ${playerWins}-${computerWins}`);
    } else if (playerWins < computerWins) {
        console.log(`You lose the game! Score: ${playerWins}-${computerWins}`);
    } else {
        console.log(`It's a tie! Score: ${playerWins}-${computerWins}`);
    }
}

game();


// 1. `function game() {`
//    - This line defines a function named `game`.

// 2. `let playerWins = 0;`
//    - This creates a variable named `playerWins` and sets it to 0. This variable will keep track of how many rounds the player wins.

// 3. `let computerWins = 0;`
//    - This creates a variable named `computerWins` and sets it to 0. This variable will keep track of how many rounds the computer wins.

// 4. `for (let i = 0; i < 5; i++) {`
//    - This line starts a loop that will run 5 times (representing 5 rounds of the game). `i` is a counter that starts at 0 and increases by 1 each time the loop runs.

// 5. `const playerSelection = prompt('Enter your choice (rock, paper, or scissors):');`
//    - This displays a message asking the player to input their choice (rock, paper, or scissors). The player's choice is stored in the `playerSelection` variable.

// 6. `const computerSelection = computerPlay();`
//    - This calls the `computerPlay()` function, which randomly selects the computer's choice (rock, paper, or scissors) and stores it in the `computerSelection` variable.

// 7. `const result = playRound(playerSelection, computerSelection);`
//    - This calls the `playRound` function to determine the outcome of the current round. It passes in the player's and computer's choices and stores the result in the `result` variable.

// 8. `console.log(result);`
//    - This line prints the result of the round to the console, so the player can see who won the round.

// 9. `if (result.includes('win')) {`
//    - This starts an "if" statement that checks if the result message contains the word 'win'. If it does, it means the player won the round.

// 10. `playerWins++;`
//     - If the player won, this line increments the `playerWins` counter by 1.

// 11. `} else if (result.includes('lose')) {`
//     - If the result message doesn't contain 'win', it checks if it contains 'lose'. If it does, it means the computer won the round.

// 12. `computerWins++;`
//     - If the computer won, this line increments the `computerWins` counter by 1.

// 13. `}`
//     - This marks the end of the loop. It will go back to the beginning and run the next round until it has completed 5 rounds.

// 14. After the loop, the function evaluates who won the overall game based on the number of rounds won by the player and the computer.

// 15. `if (playerWins > computerWins) {`
//     - If the player won more rounds than the computer, this line prints a message declaring the player as the winner along with the final score.

// 16. `} else if (playerWins < computerWins) {`
//     - If the computer won more rounds than the player, this line prints a message declaring the player as the loser along with the final score.

// 17. `} else {`
//     - If the number of rounds won by the player and the computer are equal, it means the game ended in a tie.

// 18. `console.log(`It's a tie! Score: ${playerWins}-${computerWins}`);`
//     - This line prints a message indicating that the game ended in a tie, along with the final score.

// 19. `}`
//     - This marks the end of the function `game()`.

// 20. `game();`
//     - Finally, this line calls the `game()` function to start the game.

// In summary, the `game()` function orchestrates a series of rock-paper-scissors rounds, keeps track of the wins for both the player and the computer, and ultimately determines the winner of the overall game.