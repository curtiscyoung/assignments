var fruit = ["banana", "apple", "orange", "watermelon"];

var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

vegetables.pop();

fruit.shift();

var orangeIndex = fruit.indexOf("orange");

fruit.push(orangeIndex);

console.log(fruit)

console.log(vegetables.length);

var vegLength = vegetables.length;

vegetables.push(vegLength);

var food = fruit.concat(vegetables);

food.splice(4,2);

food.reverse();

console.log(food.join(""));




