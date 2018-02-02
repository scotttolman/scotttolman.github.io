var war = 0; // global index for warrior object array
var warrior = []; // global array of warriors

// hides and displays proper elements
function hideExtras() {
    if (warrior[war] == undefined) {
        document.getElementById("create").style.display = "inline"
        document.getElementById("delete").style.display = "none" 
        document.getElementById("displayWarrior").style.display = "none"
        document.getElementById("extraButton").style.display = "none"
        document.getElementById("extraDisplay").style.display = "none"
        document.getElementById("extras").style.display = "none"     
    }
    else {
        document.getElementById("create").style.display = "none"
        document.getElementById("delete").style.display = "inline" 
        document.getElementById("displayWarrior").style.display = "inline"
    }
    if (war < 1)
        document.getElementById("prev").style.display = "none"
    else
        document.getElementById("prev").style.display = "inline"
}

// sets warrior array slot using an object constructor; changes element visibility
function newWar(name, gender, level, health, strength) {
    warrior[war] = new Warrior(name, gender, level, health, strength);
    hideExtras();
}

// object constructor
function Warrior(name, gender, level, health, strength) {
    this.name = name;    
    this.gender = getRadioVal(gender);
    this.level = level;
    this.health = health;
    this.strength = strength;
}

// returns the value of a selected radio button from group
function getRadioVal(radName) {
    var radioSet = document.getElementsByName(radName);
    for (var i = 0; i < radioSet.length; ++i) {
        if (radioSet[i].checked == true)
            return radioSet[i].value;
    }
}

// changes element to display warrior information
function displayWarrior() {
    if (warrior[war] != undefined) {
        document.getElementById("extraButton").style.display = "inline";
        document.getElementById("warriorDisplay").style.display = "inline";
        document.getElementById("warriorDisplay").innerHTML =
        "Name: " + warrior[war].name + "<br>" +
        "Gender: " + warrior[war].gender + "<br>" +
        "Level: " + warrior[war].level + "<br>" +
        "Health: " + warrior[war].health + "<br>" +
        "Strength: " + warrior[war].strength + "<br>"
    }
}

// unhides button "Add properties and methods"
function showExtras() {
    document.getElementById("extras").style.display = "inline";
}

// sets variables based on user's selection calls prototype constructor
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
        case "Group Damage":
            a = 'alert("Your warrior just wiped out the enemy!")';
            break;
    }
    addAttributes(w, p, a);
}

// prototype constructor; adds additional properties and method;
// displays additional info; creates button to execute method
function addAttributes(Weapon, Pet, Ability) {
    Warrior.prototype.weapon = undefined; //try setting prototypes to undefined, then define them as regular attributes
    Warrior.prototype.pet = undefined;
    Warrior.prototype.ability = undefined;
    warrior[war].weapon = Weapon;
    warrior[war].pet = Pet;
    warrior[war].ability = Ability;
    document.getElementById("extraDisplay").innerHTML =
    "Weapon: " + warrior[war].weapon + "<br>" +
    "Pet: " + warrior[war].pet + "<br>" +
    "<button onclick=\'" + warrior[war].ability + "\'>Execute ability</button>";
    hideExtras();
    document.getElementById("extraDisplay").style.display = "inline"
}

// increments warrior array to add additional warriors;
// shows/hides appropriate elements
function next() {
    ++war;
    hideExtras()
    document.getElementById("save").innerHTML = "Save slot " + (war + 1);
    document.getElementById("warriorDisplay").style.display = "none"
}

// decrements warrior array; modifies buttons shown
function prev() {
    if (war > 0)
    --war;
    hideExtras()
    document.getElementById("save").innerHTML = "Save slot " + (war + 1);
    document.getElementById("warriorDisplay").style.display = "none"
}

// deletes warrior slot from array; modifies buttons shown
function deleteWar() {
    warrior[war] = undefined;
    document.getElementById("delete").style.display = "none";
    document.getElementById("create").style.display = "inline";
}