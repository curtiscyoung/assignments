var readline = require("readline-sync");
var num1 = parseInt(readline.question("what is your first number?"));
var num2 = parseInt(readline.question("what is your second number"));
var operation = readline.question("what kind of operation are you doing? ('add', 'subtract', 'multiply', 'divide'): ")

console.log(num1);
console.log(num2);
console.log(operation);

function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

if (operation === "add") {
    console.log("the result is", add(num1, num2));
} else if (operation === "subtract") {
    console.log("the result is", subtract(num1, num2));
} else if (operation === "multiply") {
    console.log("the result is", multiply(num1, num2));
} else if (operation === "divide") {
    console.log("the result is", divide(num1, num2));
} else {
    console.log("dude wtf is your problem choose an operation")
}
