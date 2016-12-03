var eBall = ["Definitely", "Possibly", "Sorry", "Luck is on your side"];
var kBall = ["For sure", "Not looking good", "Can't tell", "There's a slight chance", "It's out of your hands"];
var sBall = ["LOL", "As if...", "Yep", "How the heck should I know?"];

var eight = document.getElementById("eightReply");
var kick = document.getElementById("kickReply");
var space = document.getElementById("spaceReply");

var askQuestion = function() {
    resetReplies();
    setReplies();
};
var setReplies = function() {
    var q = document.getElementById("question").value;
    console.log("question is " + q);
    if (q === "" || q === undefined || q === "Enter question...") {
        alert("Oops, you forgot to enter a question!");
    } else {
        var e = Math.floor(Math.random() * 4);
        var k = Math.floor(Math.random() * 4);
        var s = Math.floor(Math.random() * 4);

        console.log("eReply = " + e);
        console.log("kReply = " + k);
        console.log("sReply = " + s);

        var tEight1 = Math.floor(Math.random() * 2 + 1);
        var tEight2 = Math.floor(Math.random() * 2 + 1);

        var tKick1 = Math.floor(Math.random() * 2 + 1);
        var tKick2 = Math.floor(Math.random() * 2 + 1);

        var tSpace1 = Math.floor(Math.random() * 2 + 1);
        var tSpace2 = Math.floor(Math.random() * 2 + 1);

        console.log("tEight1 =" + tEight1);
        console.log("tEight2 =" + tEight2);
        console.log("tKick1 =" + tKick1);
        console.log("tKick2 =" + tKick2);
        console.log("tSpace1 =" + tSpace1);
        console.log("tSpace2 =" + tSpace2);

        eight.style.transition = "opacity " + tEight1 + "s";
        eight.style.opacity = ".5";
        eight.innerHTML = eBall[e];

        kick.innerHTML = kBall[k];
        kick.style.transition = "opacity " + tKick1 + "s";
        kick.style.opacity = ".5";

        space.innerHTML = sBall[s];
        space.style.transition = "opacity " + tSpace1 + "s";
        space.style.opacity = ".5";
    };
    dim(eight);
    fadeIn(eight, tEight2);

    dim(kick);
    fadeIn(kick, tKick2);

    dim(space);
    fadeIn(space, tSpace2);
};

var dim = function(element) {
    setTimeout(function() {
        element.style.transition = "opacity 2s";
        element.style.opacity = "0";
    }, 1000);
};
var fadeIn = function(element, time) {
    setTimeout(function() {
        element.style.transition = "opacity " + time + "s";
        element.style.opacity = "1";
    }, 2000);
};
var resetReplies = function() {
    eight.innerHTML = "";
    kick.innerHTML = "";
    space.innerHTML = "";

    eight.style.opacity = "0";
    kick.style.opacity = "0";
    space.style.opacity = "0";
};
