var button = $("#button"); 


var goombaCost = 5;
var bobombCost = 7;
var cheepcheepCost = 11;


var goombaAmount = 12;
var bobombAmount = 8;
var cheepcheepAmount = 5;

function grandTotal() {
    var total = (goombaCost * goombaAmount) + (bobombCost * bobombAmount) + (cheepcheepCost * cheepcheepAmount);
    console.log (total);
    var cost = $("#totalCost");
    var h1 = document.createElement("h1");
    cost.append(h1);
    h1.innerHTML = total;


}

button.click(grandTotal);



