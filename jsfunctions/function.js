var movies = [];
var nameAge = {};


function calcPower(base, exp) {
    var pwr = base;
    for (var i = 1; i < exp; i++) {
        pwr *= base;
    }
    document.getElementById("loopAnswer").innerHTML = "Answer: " + pwr;
}

function eyes(color) {
    document.getElementById("JS").style.color = color;
}

function selectGender() {
    if (document.getElementById("male").checked && document.getElementById("female").checked)
        document.getElementById("genderReveal").innerHTML = "Try again...<br>Gender is an essential characteristic of individual premortal, mortal, and eternal identity and purpose.";
    else if (document.getElementById("male").checked)
        document.getElementById("genderReveal").innerHTML = "You are a boy!";
    else if (document.getElementById("female").checked)
        document.getElementById("genderReveal").innerHTML = "You are a girl!";
    else
    document.getElementById("genderReveal").innerHTML = "Select an option";
}

function addMovie(mov) {
    movies.push(mov);
    document.getElementById("movie").value = "";
}

function showMovies() {
    var x = "<h4>Your favorite movies are:</h4>";
    for (var i = 0; i < movies.length; i++) {
        x = x + movies[i];
        if (i < movies.length - 1) {
            x = x + ", "
        }
    }
    document.getElementById("collection").innerHTML = x;
}

function addEntry() {
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    nameAge[name] = age;
    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
}

function getAge() {
    var key = document.getElementById("nameKey").value;
    var val = nameAge[key];
    document.getElementById("showAge").innerHTML = "Age = " + val;
}