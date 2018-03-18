function init() {
    document.getElementById("lego").addEventListener("ended", movieOver);
    makeCouch();
}

function movieOver() {
    document.getElementById("lego").load();
}

function makeCouch() {
    var couch = document.getElementById("couch");
    var cushion = couch.getContext("2d");
    cushion.fillStyle = "#AAAAAA"
    cushion.fillRect(0, 0, 800, 400);
    cushion.moveTo(100, 100);
    cushion.lineTo(100, 300);
    cushion.moveTo(100, 300);
    cushion.lineTo(700, 300);
    cushion.moveTo(700, 300);
    cushion.lineTo(700, 100);
    cushion.moveTo(700, 100);
    cushion.lineTo(100, 100);
    cushion.stroke();
    cushion.fillStyle = "#333333"
    cushion.font = "50px Arial"
    cushion.fillText("Double Decker Couch", 150, 210)
}