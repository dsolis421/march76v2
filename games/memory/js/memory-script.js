$(document).ready(function() {

    var $deck = ['heartfill', 'heartfill', 'arrowout', 'arrowout', 'heartout',
        'heartout', 'chevronout', 'chevronout', 'notcharrow', 'notcharrow',
        'diamondfill', 'diamondfill', 'exout', 'exout', 'exfill',
        'exfill', 'heartout', 'heartout', 'checkfill', 'checkfill',
        'checkout', 'checkout', 'cogfill', 'cogfill', 'cogout',
        'cogout', 'calloutout', 'calloutout', 'calloutfill', 'calloutfill',
        'exfill', 'exfill', 'baseout', 'baseout', 'basefill',
        'basefill', 'baseleftfill', 'baseleftfill', 'chevronfill', 'chevronfill'
    ];

    var $pickOne = '';
    var $pickTwo = '';
    var $score = 0;
    var $matches = 0;
    var $multiplier = 1;
    var $ready = true;
    var $moves = 0;
    var $memoryindex = 0;

    $("#play").click(function() {
        if ($matches === 0) {
            deal();
        } else {
            location.reload(true);
        }
    })

    $(".card").click(function() {
        if ($ready && $(this).attr("clickable") === "true") {
            //selection = $(this).attr("value");
            selection = $(this);
            $(this).children(".cover").css("opacity", "0");
            $(this).attr("clickable", "false");
            setPick(selection);
        }
    })

    function deal() {
        $ready = false;
        $score = 0;
        $(".cover").css("opacity", "0");
        shuffleDeck();
        for (i = 0; i < $deck.length; i++) {
            $(".card").eq(i).css("background-image", "url('img/" + $deck[i] + ".png')");
            $(".card").eq(i).attr("clickable", "true");
            $(".card").eq(i).attr("value", $deck[i]);
            $value = $(".card").eq(i).attr("value");
            console.log($value);
        }
        setTimeout(function() {
            $(".cover").css("opacity", "1");
            $ready = true;
        }, 5000)
    }


    function shuffleDeck() {
        $deck.sort(function(a, b) {
            return .05 - Math.random();
        });
    }

    function setPick(pick) {
        if ($pickOne === '') {
            $pickOne = pick;
            return;
        } else {
            $pickTwo = pick;
            $ready = false;
            $moves++;
            console.log("Moves: " + $moves);
            if (checkMatch($pickOne, $pickTwo)) {
                $score += 25 * $multiplier;
                $multiplier++;
                $matches++;
                $("#match").css({
                    "color": "green",
                    "font-size": "40px"
                });
                $("#match").html("MATCH!");
                $("#score").html("Score: " + $score);
                if ($matches === 20) {
                    gameOver();
                } else {
                    setTimeout(function() {
                        $pickOne.children(".cover").css({
                            "opacity": ".5",
                            "background-color": "green"
                        });
                        $pickTwo.children(".cover").css({
                            "opacity": ".5",
                            "background-color": "green"
                        });
                        $pickOne.css("background-image", "none");
                        $pickTwo.css("background-image", "none");
                        $pickOne.children(".cover").animate({
                            opacity: "0"
                        }, "slow", "swing");
                        $pickTwo.children(".cover").animate({
                            opacity: "0"
                        }, "slow", "swing");
                        $pickOne = '';
                        $pickTwo = '';
                        $ready = true;
                        $("#match").html("");
                    }, 1500);
                }
            } else {
                $multiplier = 1;
                $("#match").css({
                    "color": "black",
                    "font-size": "30px"
                });
                $("#match").html("Not a Match");
                setTimeout(function() {
                    $pickOne.children(".cover").css("opacity", "1");
                    $pickTwo.children(".cover").css("opacity", "1");
                    $pickOne.attr("clickable", "true");
                    $pickTwo.attr("clickable", "true");
                    $pickOne = '';
                    $pickTwo = '';
                    $("#match").html("");
                    $ready = true;
                }, 1500);
            }
        }
    }

    function checkMatch(pickA, pickB) {
        if (pickA.attr("value") === pickB.attr("value")) {
            return true;
        }
    }

    function gameOver() {
        $memoryindex = $score / $moves;
        $("#tier-one, #tier-two").empty();
        $(".cover").css({
            "opacity": "1",
            "background-color": "black"
        });
        $("#tier-one").html("<h1>Complete!</h1>");
        $("#tier-two").html("<h1>Moves: " + $moves + "</h1><h1>Memory Index: " + $memoryindex.toFixed(2) + "</h1>");
    }

})
