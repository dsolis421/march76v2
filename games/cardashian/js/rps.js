var playerOne;
var playerTwo;
var winner;

function setPlayerOne(player) {
    console.log("clicked picture " + player);
    document.getElementById("result").innerHTML = "";
    document.getElementById("p2name").innerHTML = "";
    document.getElementById("player2").src = "img/placeholder.png";
    if (player === "cim") {
        document.getElementById("player1").src = "img/svgCim.png";
        document.getElementById("p1name").innerHTML = "Cim";
    } else if (player === "chloe") {
        document.getElementById("player1").src = "img/svgChloe.png";
        document.getElementById("p1name").innerHTML = "Chloe";
    } else {
        document.getElementById("player1").src = "img/svgCourtney.png";
        document.getElementById("p1name").innerHTML = "Courtney";
    };
    playerOne = player;
    console.log("you picked " + playerOne);
    setPlayerTwo();
}

function setPlayerTwo() {
    console.log("picking player2");
    setTimeout(function() {
        var card = ["cim", "chloe", "courtney"];
        var c = Math.floor(Math.random() * card.length);
        playerTwo = card[c];
        console.log("computer picked " + playerTwo);
        if (card[c] === "cim") {
            document.getElementById("player2").src = "img/svgCim.png";
            document.getElementById("p2name").innerHTML = "Cim";
        } else if (card[c] === "chloe") {
            document.getElementById("player2").src = "img/svgChloe.png";
            document.getElementById("p2name").innerHTML = "Chloe";
        } else {
            document.getElementById("player2").src = "img/svgCourtney.png";
            document.getElementById("p2name").innerHTML = "Courtney";
        };
        getWinner();
    }, 3000);
}

function getWinner() {
    if (playerOne === playerTwo) {
        showTie();
    } else {
        if (playerOne === "cim") {
            if (playerTwo === "chloe") {
                winner = playerTwo;
            } else {
                winner = playerOne;
            };
        } else if (playerOne === "chloe") {
            if (playerTwo === "courtney") {
                winner = playerTwo;
            } else {
                winner = playerOne;
            };
        } else if (playerOne === "courtney") {
            if (playerTwo === "cim") {
                winner = playerTwo;
            } else {
                winner = playerOne;
            };
        };
        showWinner();
    };
}

function showWinner() {
    document.getElementById("result").innerHTML = winner + " Wins!";

}

function showTie() {
    document.getElementById("result").innerHTML = "It's a tie!";
}
