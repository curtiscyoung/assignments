var goombaCost = 5;
var bobombCost = 7;
var cheepcheepCost = 11;


var goombaAmount = 12;
var bobombAmount = 8;
var cheepcheepAmount = 5;

function grandTotal() {
    var total = (goombaCost * goombaAmount) + (bobombCost * bobombAmount) + (cheepcheepCost * cheepcheepAmount);
    console.log (total);
    document.getElementById("totalCost").innerHTML = ("<h1>" + total + "</h1>")


}

document.getElementById("button").addEventListener("click", grandTotal);

addEventListener("input", function) {
    parseInt(document.getElementById"goombainput")
}