var div = document.getElementById("box");


function doubleClick() {
    div.style.background = "green";

};

function hover() {
    div.style.backgroundColor = "blue";
};

function click() {
    div.style.backgroundColor = "red";
};

div.addEventListener("click", click);
div.addEventListener("doubleclick", doubleClick);
div.addEventListener("hover", hover);
//ondblclick="doubleClick()" onmouseover="hover()"