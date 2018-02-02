var war = 0; //global index for warrior object array
var warrior = []; //global array of warriors

function newWar(name, gender, level, health, strength) {
    warrior[war] = new Warrior(name, gender, level, health, strength)
    document.getElementById("create").style.display = "none";
    document.getElementById("delete").style.display = "inline";
}

function Warrior(name, gender, level, health, strength) {
    this.name = name;    
    this.gender = getRadioVal(gender);
    this.level = level;
    this.health = health;
    this.strength = strength;
}

function getRadioVal(radName) {
    var radioSet = document.getElementsByName(radName);
    var val;
    for (var i = 0; i < radioSet.length; ++i) {
        if (radioSet[i].checked == true)
            return radioSet[i].value;
    }
}

function displayWarrior() {
    document.getElementById("extraButton").style.display = "inline";
    document.getElementById("warriorDisplay").innerHTML =
    "Name: " + warrior[war].name + "<br>" +
    "Gender: " + warrior[war].gender + "<br>" +
    "Level: " + warrior[war].level + "<br>" +
    "Health: " + warrior[war].health + "<br>" +
    "Strength: " + warrior[war].strength + "<br>"
}

function hideExtras() {
    document.getElementById("extraButton").style.display = "none"
    document.getElementById("extras").style.display = "none"
    document.getElementById("delete").style.display = "none"
    document.getElementById("prev").style.display = "none"
}

function showExtras() {
    document.getElementById("extras").style.display = "inline";
}

function setAttributes(weapon, pet, ability) {
    var w = getRadioVal(weapon);
    var p = getRadioVal(pet);
    var a = getRadioVal(ability);
    switch (a) {
        case "Run":
            a = 'alert("Your warrior just ran really fast!")';
            break;
        case "Heal":
            a = 'alert("Your warrior just healed!")';
            break;
        case "Group":
            a = 'alert("Your warrior just wiped out the enemy!")';
            break;
    }
    addAttributes(w, p, a);
}

function addAttributes(Weapon, Pet, Ability) {
    Warrior.prototype.weapon = Weapon;
    Warrior.prototype.pet = Pet;
    Warrior.prototype.ability = Ability;
    document.getElementById("warriorDisplay").innerHTML =
    "Weapon: " + warrior[war].weapon + "<br>" +
    "Pet: " + warrior[war].pet + "<br>" +
    "<button onclick=\'" + warrior[war].ability + "\'>Ability</button>";
}

function prev() {
    if (war > 0)
    --war;
    if (!warrior[war])
        document.getElementById("create").style.display = "inline";
    else
        document.getElementById("delete").style.display = "inline";
    if (war < 1)
    document.getElementById("prev").style.display = "none";
    document.getElementById("save").innerHTML = "Save slot " + (war + 1);
}

function next() {
    document.getElementById("prev").style.display = "inline";
    if (warrior[war])
        document.getElementById("delete").style.display = "none";
    else
        document.getElementById("delete").style.display = "inline";
    ++war;
    if (!warrior[war])
        document.getElementById("create").style.display = "inline";
    else
        document.getElementById("prev").style.display = "inline";
    document.getElementById("save").innerHTML = "Save slot " + (war + 1);

}

function deleteWar() {
    warrior[war] = null;
    document.getElementById("delete").style.display = "none";
    document.getElementById("create").style.display = "inline";
}