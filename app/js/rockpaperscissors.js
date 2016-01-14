/////////////////Users/admin/fundamentals/wdi-fundamentals-rps/app/js/rockpaperscissors.js////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.");
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    return move || getInput();
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    return move || randomPlay();
}

function getWinner(playerMove,computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    if (playerMove == "rock" && computerMove == "scissors"){
        winner = "player";
    }
    else if (playerMove == "rock" && computerMove == "paper"){
        winner = "computer";
    }
    else if (playerMove == "rock" && computerMove == "rock"){
        winner = "tie";
    }
    else if (playerMove == "paper" && computerMove == "scissors") {
        winner = "computer";
    }
    else if (playerMove == "paper" && computerMove == "paper") {
        winner = "tie";
    }
    else if (playerMove == "paper" && computerMove == "rock") {
        winner = "player";
    }
    else if (playerMove == "scissors" && computerMove == "scissors") {
        winner = "tie";
    }
    else if (playerMove == "scissors" && computerMove == "paper") {
        winner = "player";
    }
    else if (playerMove == "scissors" && computerMove == "rock") {
        winner = "computer";
    }
    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors! The first to win five rounds wins the game.");
    var playerWins = 0;
    var computerWins = 0;
    var currentWinner;
    var currentWinnerText;
    var gameWinner;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    while (playerWins < 5 && computerWins < 5) {
        playerMove = getPlayerMove();
        computerMove = getComputerMove();
        currentWinner = getWinner(playerMove, computerMove);
        if (currentWinner == "player") {
            playerWins += 1;
            currentWinnerText = "Player wins this round! Good job!";
        }
        else if (currentWinner == "computer") {
            computerWins +=1;
            currentWinnerText = "Computer wins this round! Better luck next time.";
        }
        else if (currentWinner == "tie") {
            currentWinnerText = "This round is a tie.";
        }
        else {
            currentWinnerText = "Please enter a valid selection.";
        }
        console.log('Player chose ' + playerMove + ' while Computer chose ' + computerMove);
        console.log(currentWinnerText);
        console.log('The score is currently Player: ' + playerWins + ' to Computer: ' + computerWins + '\n');
    }
    if (playerWins > computerWins) {
        gameWinner = "Congratulations! You have won the game!";
    }
    else {
        gameWinner = "Sorry, but the Computer won the game. Try again!";
    }
    return "The final score was Player: " + playerWins + " to Computer: " + computerWins + ". " + gameWinner;
}

function playToNum(num) {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    var currentWinner;
    var currentWinnerText;
    var gameWinner;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    while (playerWins < num && computerWins < num) {
        playerMove = getPlayerMove();
        computerMove = getComputerMove();
        currentWinner = getWinner(playerMove, computerMove);
        if (currentWinner == "player") {
            playerWins += 1;
            currentWinnerText = "Player wins this round! Good job!";
        }
        else if (currentWinner == "computer") {
            computerWins +=1;
            currentWinnerText = "Computer wins this round! Better luck next time.";
        }
        else if (currentWinner == "tie") {
            currentWinnerText = "This round is a tie.";
        }
        else {
            currentWinnerText = "Please enter a valid selection.";
        }
        console.log('Player chose ' + playerMove + ' while Computer chose ' + computerMove);
        console.log(currentWinnerText);
        console.log('The score is currently Player: ' + playerWins + ' to Computer: ' + computerWins + '\n');
    }
    if (playerWins > computerWins) {
        gameWinner = "Congratulations! You have won the game!";
    }
    else {
        gameWinner = "Sorry, but the Computer won the game. Try again!";
    }
    return "The final score was Player: " + playerWins + " to Computer: " + computerWins + ". " + gameWinner;
}