function addToList(item) {
    var parent = document.getElementById("list");
    var elem = document.createElement("li");
    elem.id = item.value + "li";
    var up = document.createElement("button");
    up.id = item.value + "up";
    up.innerHTML = "up";
    up.addEventListener("click", moveUp);
    var rm = document.createElement("button");
    rm.id = item.value + "rm";
    rm.innerHTML = "remove";
    rm.addEventListener("click", remove)
    var txt = document.createTextNode("  " + item.value + "  ");
    elem.appendChild(up);
    elem.appendChild(txt);
    elem.appendChild(rm);
    parent.appendChild(elem);
}

function moveUp() {
    var parent = document.getElementById(event.target.id).parentNode;
    var BigBrother = parent.previousSibling;
    var Grandpa = parent.parentNode;
    Grandpa.insertBefore(parent, BigBrother);
}

function remove() {
    var parent = document.getElementById(event.target.id).parentNode.parentNode;
    var child = document.getElementById(event.target.id).parentNode;
    parent.removeChild(child);
}