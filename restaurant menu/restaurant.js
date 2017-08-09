var menu = [
    {name:"Chicken Nuggets", price: 5.50, calories: 500  },
    {name:"Quesadilla", price: 10, calories: 800 },
    {name: "French Fries", price: 15, calories: 600},
    
];

function MenuItem (name, price, calories){
    this.name = name;
    this.price = price;
    this.calories = calories;
    
}
    
var pizza = new MenuItem("Pizza", 10, 500);

var soda = new MenuItem("Soda", 10, 700);

var soup = new MenuItem("Soup", 12, 650);
    
    
menu.push(pizza, soda, soup);

console.log(menu);

console.log(menu[0]);


//add a description to the objects
    //figure out a way to use a for loop to display items instead of 
document.getElementById("javamenu1").innerHTML = "<h3>" + menu[0].name + "</h3>" + "<p> Price: " + menu[0].price + " calories: " + menu[0].calories + "</p>";

document.getElementById("javamenu2").innerHTML = "<h3>" + menu[1].name + "</h3>" + "<p> Price: " + menu[1].price + " calories: " + menu[1].calories + "</p>";

document.getElementById("javamenu3").innerHTML = "<h3>" + menu[2].name + "</h3>" + "<p> Price: " + menu[2].price + " calories: " + menu[2].calories + "</p>";

document.getElementById("javamenu4").innerHTML = "<h3>" + menu[3].name + "</h3>" + "<p> Price: " + menu[3].price + " calories: " + menu[3].calories + "</p>";

document.getElementById("javamenu5").innerHTML = "<h3>" + menu[4].name + "</h3>" + "<p> Price: " + menu[4].price + " calories: " + menu[4].calories + "</p>";

document.getElementById("javamenu6").innerHTML = "<h3>" + menu[5].name + "</h3>" + "<p> Price: " + menu[5].price + " calories: " + menu[5].calories + "</p>";