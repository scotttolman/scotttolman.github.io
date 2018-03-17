function init() {
    document.getElementById("pikachu").addEventListener("transitionend", endTran)
}

function endTran() {
    document.getElementById("pikachu").style.transform = "rotate(0deg)";
}

function shrink() {
    document.getElementById("pikachu").style.width = "10em";
    document.getElementById("pikachu").style.height = "10em";
}

function nrml() {
    document.getElementById("pikachu").style.width = "20em";
    document.getElementById("pikachu").style.height = "20em";
}

function grow() {
    document.getElementById("pikachu").style.width = "30em";
    document.getElementById("pikachu").style.height = "30em";
}

function spinCW() {
    document.getElementById("pikachu").style.transform = "rotate(360deg)";
}

function spinCCW() {
    document.getElementById("pikachu").style.transform = "rotate(-360deg)";
}

function fadeOut() {
    document.getElementById("pikachu").style.opacity = 0;
}

function fadeIn() {
    document.getElementById("pikachu").style.opacity = 1;
}

function curve(curve) {
    document.getElementById("pikachu").style.transitionTimingFunction = curve;
}

function delay(dv) {
    document.getElementById("pikachu").style.transitionDelay = dv + "s";
}