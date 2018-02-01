function Warrior(name, gender, level, health, strength) {
    this.name = name;    
    this.gender = getRadioVal(gender);
    this.level = level;
    this.health = health;
    this.strength = strength;
}

function displayWarrior(location, warrior) {
    document.getElementById(location).innerHTML =
    "Name: " + warrior.name + "<br>" +
    "Gender: " + warrior.gender + "<br>" +
    "Level: " + warrior.level + "<br>" +
    "Health: " + warrior.health + "<br>" +
    "Strength: " + warrior.strength + "<br>"
}

function getRadioVal(radName) {
    var radioSet = document.getElementsByName(radName);
    var val;
    for (var i = 0; i < radioSet.length; ++i) {
        if (radioSet[i].checked == true)
            return radioSet[i].value;
    }
}