$(document).ready(function(){
    

    var randomNumber = Math.floor(Math.random() * (100 - 50) + 50);
    console.log(randomNumber);

    var crystal1 = Math.floor(Math.random() * (3 - 1) + 1);
    console.log(crystal1);

    var crystal2 = Math.floor(Math.random() * (6 - 3) + 3);
    console.log(crystal2);

    var crystal3 = Math.floor(Math.random() * (9 - 6) + 6);
    console.log(crystal3);

    var crystal4 = Math.floor(Math.random() * (12 - 9) + 9);
    console.log(crystal4);

    var playerNumber = 0;
    var wins = 0;
    var losses = 0;


    $("#your-number").text("THE Number: " + randomNumber);
    $("#wins").text("Wins: " + wins);
    $("#losses").text("Losses: " + losses);


    function gameOver() {
        randomNumber = Math.floor(Math.random() * (100 - 50) + 50);
        $("#your-number").text("THE Number: " + randomNumber);

        crystal1 = Math.floor(Math.random() * (3 - 1) + 1);
        crystal2 = Math.floor(Math.random() * (6 - 3) + 3);
        crystal3 = Math.floor(Math.random() * (9 - 6) + 6);
        crystal4 = Math.floor(Math.random() * (12 - 9) + 9);

        playerNumber = 0;
        $("#your-score").text("Your Number: " + playerNumber);
    }
    function score() {
        wins++;
        $("#game-state").text("You're a Winner BABY!")
        $("#wins").text("Wins: " + wins)
        gameOver();
    }
    function lose() {
        losses++;
        $("#game-state").text("You Lose... Guess diamonds aren't your best friends...")
        $("#losses").text("Losses: " + losses)
        gameOver(); 
    }


    $("#crystal1").on("click", function(){
        playerNumber = playerNumber + crystal1;
        $("#your-score").text("Your Number: " + playerNumber);
        console.log(playerNumber);

        if (playerNumber === randomNumber) {
            score();
        }
    
        else if (playerNumber > randomNumber) {
            lose();
        }
    })

    $("#crystal2").on("click", function(){
        playerNumber = playerNumber + crystal2;
        $("#your-score").text("Your Number: " + playerNumber);
        console.log(playerNumber);

        if (playerNumber === randomNumber) {
            score();
        }
    
        else if (playerNumber > randomNumber) {
            lose();
        }
    })

    $("#crystal3").on("click", function(){
        playerNumber = playerNumber + crystal3;
        $("#your-score").text("Your Number: " + playerNumber);
        console.log(playerNumber);

        if (playerNumber === randomNumber) {
            score();
        }
    
        else if (playerNumber > randomNumber) {
            lose();
        }
    })

    $("#crystal4").on("click", function(){
        playerNumber = playerNumber + crystal4;
        $("#your-score").text("Your Number: " + playerNumber);
        console.log(playerNumber);

        if (playerNumber === randomNumber) {
            score();
        }
    
        else if (playerNumber > randomNumber) {
            lose();
        }
    })

});
