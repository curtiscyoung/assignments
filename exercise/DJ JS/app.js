var div = document.getElementById("box");


function doubleClick() {
    div.style.background = "green";

}

function hover() {
    div.style.backgroundColor = "blue";
}

function click() {
    div.style.backgroundColor = "red";
}

function scroll() {
    div.style.backgroundColor = "orange";

}

function down() {
    div.style.backgroundColor = "yellow";

}

function up() {
    div.style.backgroundColor = "purple";

}

div.addEventListener("click", click);
div.addEventListener("dblclick", doubleClick);
div.addEventListener("mouseover", hover);
div.addEventListener("wheel", scroll)
div.addEventListener("mousedown", down);
div.addEventListener("mouseup", up);
//ondblclick="doubleClick()" onmouseover="hover()"
