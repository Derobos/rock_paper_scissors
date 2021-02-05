Javascript assignment from Theodinproject.com

 var items = ["ROCK", "PAPER", "SCISSORS"];
        var userScore = 0;
        var compScore = 0;


        function computerPlay() {
            return items[Math.floor(Math.random() * items.length)];
        }



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

        function game() {

            var turn;
            for (turn = 0; turn < 5; turn++) {
                round();
            }
            if (userScore > compScore) {
                Console.log("You win the game!");
            } else {
                console.log("You Lose the game!");
            }
        }