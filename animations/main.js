function endFunction() {
    location.reload();
}

function addEvent() {
    var p = document.getElementById("pikachu");
    p.addEventListener("animationend", endFunction);
}

function play() {
    var p = document.getElementById("pikachu");
    var g = document.getElementById("golem");
    p.style.animationPlayState = "running";
    g.style.animationPlayState = "running";
}

function pause() {
    var p = document.getElementById("pikachu");
    var g = document.getElementById("golem");
    p.style.animationPlayState = "paused";
    g.style.animationPlayState = "paused";
}

function reverse() {
    var p = document.getElementById("pikachu");
    var g = document.getElementById("golem");
    p.style.animationDirection = "reverse";
    g.style.animationDirection = "reverse";
}

function forward() {
    var p = document.getElementById("pikachu");
    var g = document.getElementById("golem");
    p.style.animationDirection = "normal";
    g.style.animationDirection = "normal";
}

function halfSpeed() {
    var p = document.getElementById("pikachu");
    var g = document.getElementById("golem");
    p.style.animationDuration = "4s";
    g.style.animationDuration = "4s";
}

function normalSpeed() {
    var p = document.getElementById("pikachu");
    var g = document.getElementById("golem");
    p.style.animationDuration = "2s";
    g.style.animationDuration = "2s";
}

function fastSpeed() {
    var p = document.getElementById("pikachu");
    var g = document.getElementById("golem");
    p.style.animationDuration = "1s";
    g.style.animationDuration = "1s";
}

function loop() {
    var p = document.getElementById("pikachu");
    var g = document.getElementById("golem");
    if (p.style.animationIterationCount == "1" || g.style.animationIterationCount == "1" ||
        p.style.animationIterationCount == "" || g.style.animationIterationCount == "") {
        p.style.animationIterationCount = "infinite";
        g.style.animationIterationCount = "infinite";
        document.getElementById("loop").style.border = "solid red 2px";
    }
    else {
        p.style.animationIterationCount = "1";
        g.style.animationIterationCount = "1";
        document.getElementById("loop").style.borderWidth = "2px";
        document.getElementById("loop").style.borderStyle = "outset";
        document.getElementById("loop").style.borderColor = "buttonface";
        document.getElementById("loop").style.borderImage = "initial";
    }
}

function swap() {
    var p = document.getElementById("pikachu");
    var g = document.getElementById("golem");
    if (p.style.animationName != "golem" || g.style.animationName != "pikachu"){
        p.style.animationName = "golem";
        g.style.animationName = "pikachu";
        document.getElementById("swap").style.border = "solid red 2px";
    }
    else {
        p.style.animationName = "pikachu";
        g.style.animationName = "golem";
        document.getElementById("swap").style.borderWidth = "2px";
        document.getElementById("swap").style.borderStyle = "outset";
        document.getElementById("swap").style.borderColor = "buttonface";
        document.getElementById("swap").style.borderImage = "initial";
    }
}