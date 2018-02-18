window.addEventListener("load", store);

function store() {
    var mem = document.getElementsByClassName("memory");
    for (var i = 0; i < mem.length; i++) {
        mem[i].addEventListener("blur", storage);
    }
    for (var i = 0; i < mem.length; i++) {
        mem[i].addEventListener("focus", restore);
    }
}

function addToList(item) {
    var parent = document.getElementById("list");
    var elem = document.createElement("li");
    elem.id = item.value;
    var up = document.createElement("button");
    up.id = item.value + "up";
    up.innerHTML = "up";
    up.addEventListener("click", moveUp);
    var rm = document.createElement("button");
    rm.id = item.value + "rm";
    rm.innerHTML = "remove";
    rm.addEventListener("click", remove)
    var txt = document.createTextNode(item.value);
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

// local storage to save form as typing to prevent losing work done typing

function storage() {
    var el = document.getElementById(event.target.id);
    localStorage.setItem(el.id, el.value);
}

function restore() {
    var mem = document.getElementById("memForm");
    for (var i = 0; i < mem.length; i++) {
        if (localStorage.getItem(mem[i].id) != ""){
            document.getElementById(mem[i].id).value = localStorage.getItem(mem[i].id);
        }
    }
}

var gList = {slot:[]};
function storeList() {
    var list = document.getElementById("list");
    for (var i = 1; i <= list.childElementCount; i++) {
        gList.slot.push(list.childNodes[i].childNodes[1].nodeValue);
    }
    var mem = document.getElementsByClassName("memory");
    for (var i = 0; i < mem.length; i++) {
        gList[mem[i].id] = mem[i].value;
    }
    var jList = JSON.stringify(gList);
    document.getElementById("jHide").value = jList;
    document.getElementById("hiddenJSON").addEventListener("submit", ajaxSend)
    document.getElementById("hiddenJSON").submit();
}
    
    // Use AJAX to send data
function ajaxSend() {
    event.preventDefault();
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'ajax.php', true);
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          document.getElementById("alert").innerHTML = "Form Saved";
        }
      };
    xhr.send(jList);
}