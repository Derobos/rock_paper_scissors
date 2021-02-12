//Set playfield and buttons
const container = document.querySelector('.playField');
const controls = document.createElement('div');
controls.classList.add('controls');
container.appendChild(controls);


const btn1 = document.getElementById('#ROCK');

const btn2 = document.getElementById('#PAPER');

const btn3 = document.getElementById('#SCISSORS');




//create the game components and explain the game
const btns = document.querySelectorAll('.btns');
const items = ["ROCK", "PAPER", "SCISSORS"];
var userScore = 0;
var compScore = 0;
document.getElementById("score").innerHTML = "Rock beats Scissors<br> Scissors beats Paper<br> Paper beats rock<br> First to 5 points wins<br> Choose one to begin!";


// sets computers choice
function computerPlay() {
    return items[Math.floor(Math.random() * items.length)];
};

// player selection starts the game and records a score for each round played.

btns.forEach((button) => button.addEventListener('click', function play() {


    var userPlay = button.id;
    var compPlay = computerPlay();


    console.log("Computer chose " + compPlay);
    if (userPlay == compPlay) {
        console.log("Tie");
        document.getElementById("score").innerHTML = "You chose: " + userPlay + "<br>Computer chose: " + compPlay + "<br><h1>It's a tie!</h1>";


    } else if (
        (userPlay == "ROCK" && compPlay == "PAPER") ||
        (userPlay == "PAPER" && compPlay == "SCISSORS") ||
        (userPlay == "SCISSORS" && compPlay == "ROCK")
    ) {

        console.log("Computer Wins!");
        document.getElementById("score").innerHTML = "You chose: " + userPlay + "<br>Computer chose: " + compPlay + "<br><br><h1>Computer wins!</h1>";
        compScore++;
    } else {

        console.log("You Win!");
        document.getElementById("score").innerHTML = "You chose: " + userPlay + "<br>Computer chose: " + compPlay + "<br><br><h1>You win!</br>";
        userScore++;
    }
    var score = ("Your Score " + userScore + "  " + "Computer Score " + compScore);
    game();

    const uSc = document.querySelector('#uSc');
    document.getElementById("uSc").innerHTML = "You: " + userScore;
    const cSc = document.querySelector('cSc');
    document.getElementById("cSc").innerHTML = "Computer: " + compScore;
    console.log(score);

}));

/*Write a NEW function called game(). Use the previous function inside of this one to play a 5 round game that keeps score and reports a winner or loser at the end.*/

function game() {

    if (userScore == 5) {
        alert("You win the game! " + userScore + " - " + compScore + " Try again?");
        userScore = 0;
        compScore = 0;
    } else if (compScore == 5) {
        alert("You Lose the game! " + compScore + " - " + userScore + " Try again?");
        userScore = 0;
        compScore = 0;
    } else console.log("First to 5 points wins!");
};