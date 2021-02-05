/*begin with a function called computerPlay that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’. We’ll use this function in the game to make the computer’s play.*/
var items = ["ROCK", "PAPER", "SCISSORS"];
var userScore = 0;
var compScore = 0;


function computerPlay() {
    return items[Math.floor(Math.random() * items.length)];
}


/*The function should take two parameters - the playerSelection and computerSelection - and then return a string that declares the winner of the round, Make your function case insensitive*/



function round(userPlay, compPlay) {

    var userPlay = prompt("please choose ROCK, PAPER, or SCISSORS!", "ROCK").toUpperCase();
    var compPlay = computerPlay().toUpperCase();
    console.log("Computer chose " + compPlay);
    if (userPlay == compPlay) {
        console.log("Tie");

    } else if (
        (userPlay == "ROCK" && compPlay == "PAPER") ||
        (userPlay == "PAPER" && compPlay == "SCISSORS") ||
        (userPlay == "SCISSORS" && compPlay == "ROCK")
    ) {
        compScore++;
        console.log("Computer Wins!");
    } else {
        userScore++;
        console.log("You Win!");
    }
    var score = ("Your Score " + userScore + "  " + "Computer Score " + compScore);
    console.log(score);
}

/*Write a NEW function called game(). Use the previous function inside of this one to play a 5 round game that keeps score and reports a winner or loser at the end.*/

function game() {

    var turn;
    for (turn = 0; turn < 5; turn++) {
        round();
    }
    if (userScore > compScore) {
        console.log("You win the game!");
    } else {
        console.log("You Lose the game!");
    }
}