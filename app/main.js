var yPoke;
var oPoke;

function initialize() {
    document.getElementById("yAdvOpt").addEventListener("click", yExpand);
    document.getElementById("oAdvOpt").addEventListener("click", oExpand);
}

function yExpand() {
    var rows = document.getElementsByClassName("yAdv");
    for (var i = 0; i < rows.length; i++) {
        if (rows[i].style.display != "table-row") {
            rows[i].style.display = "table-row"
        }
        else {
            rows[i].style.display = "none"
        }
    }
}

function oExpand() {
    var rows = document.getElementsByClassName("oAdv");
    for (var i = 0; i < rows.length; i++) {
        if (rows[i].style.display != "table-row") {
            rows[i].style.display = "table-row"
        }
        else {
            rows[i].style.display = "none"
        }
    }
}

function getData(url, who, what) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.setRequestHeader('Content-type', 'application/json');
    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            handleJSON(JSON.parse(this.response));

        }
      };
    xhr.send();
}
2
function handleJSON(data) {
    if (data.power) {
        calcDamage(data);
    }
    else {
        calcStats(data)
    }
}

function calcStats(data) {
    var lvl = parseInt(document.getElementById("yLevel").value);

    var HP_Base = data.stats[5].base_stat;
    var Attack_Base = data.stats[4].base_stat;
    var Defense_Base = data.stats[3].base_stat;
    var S_Attack_Base = data.stats[2].base_stat;
    var S_Defense_Base = data.stats[1].base_stat;
    var Speed_Base = data.stats[0].base_stat;
    
    var HP_IV = parseInt(document.getElementById("yHPIV").value);
    var Attack_IV = parseInt(document.getElementById("yAttackIV").value);
    var Defense_IV = parseInt(document.getElementById("yDefenseIV").value);
    var S_Attack_IV = parseInt(document.getElementById("yS_AttackIV").value);
    var S_Defense_IV = parseInt(document.getElementById("yS_DefenseIV").value);
    var Speed_IV = parseInt(document.getElementById("ySpeedIV").value);
    
    var HP_EV = parseInt(document.getElementById("yHPEV").value);
    var Attack_EV = parseInt(document.getElementById("yAttackEV").value);
    var Defense_EV = parseInt(document.getElementById("yDefenseEV").value);
    var S_Attack_EV = parseInt(document.getElementById("yS_AttackEV").value);
    var S_Defense_EV = parseInt(document.getElementById("yS_DefenseEV").value);
    var Speed_EV = parseInt(document.getElementById("ySpeedEV").value);

    var HP = ((((2 * HP_Base) + HP_IV + (HP_EV / 4)) * lvl) / 100) + lvl + 10;
    var Attack = ((((2 * Attack_Base) + Attack_IV + (Attack_EV / 4)) * lvl) / 100) + 5;
    var Defense = ((((2 * Defense_Base) + Defense_IV + (Defense_EV / 4)) * lvl) / 100) + 5;
    var S_Attack = ((((2 * S_Attack_Base) + S_Attack_IV + (S_Attack_EV / 4)) * lvl) / 100) + 5;
    var S_Defense = ((((2 * S_Defense_Base) + S_Defense_IV + (S_Defense_EV / 4)) * lvl) / 100) + 5;
    var Speed = ((((2 * Speed_Base) + Speed_IV + (Speed_EV / 4)) * lvl) / 100) + 5;


    document.getElementById("yHPBar").innerHTML = Math.floor(HP);
    document.getElementById("yAttackBar").innerHTML = Math.floor(Attack);
    document.getElementById("yDefenseBar").innerHTML = Math.floor(Defense);
    document.getElementById("yS_AttackBar").innerHTML = Math.floor(S_Attack);
    document.getElementById("yS_DefenseBar").innerHTML = Math.floor(S_Defense);
    document.getElementById("ySpeedBar").innerHTML = Math.floor(Speed);
}

function calcDamage(data) {

}

function getURL(pick) {
    var url;
    var m = yPoke.moves;
    for (var i = 0; i < moves.length; i++) {
        if (m[i].move.name == pick) {
            url = m[i].move.url;
            break;
        }
    }
    if(url == undefined) {
        console.log("move not found");
    }
    getData(url, 'y', 'move')
}