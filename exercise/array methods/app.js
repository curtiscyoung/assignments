var arr = [1, 2, 3, 4, 5];

var otherArr=[6, 7, 8, 9, 10];

var thirdArr = [ "A", "B", "C"]

var num = true

var bigArr = arr.concat(otherArr,thirdArr, num);

console.log(bigArr);

var word = "jupiter is a cool planet dude";

console.log(word.split("a"));

var arr= (word.split(" "));

console.log(arr);

console.log(arr.join(" "));

var fruits = ["banana", "pear", "dragonfruit", "peaches", "oranges", "grapes", "grapefruit"];

console.log(fruits.slice(3));

console.log(fruits.slice(0));

console.log(fruits.slice(0,1));

var favoriteFruits = fruits.slice(0,3);

console.log(favoriteFruits);

console.log (fruits);

fruits.splice(0,3);

console.log(fruits);

var num = [1,67,10,5,45,76];

num.sort(function(a,b){ return a-b
  })

var fruits = ["banana", "pear", "dragonfruit", "peaches", "oranges", "grapes", "grapefruit"];

function isSmallEnough(value){
  return value.length<=6;
}

var filter = fruits.filter(isSmallEnough);

console.log(filter);

function isSmallEnough(value){
  return value + " is a fruit";
}

var filter = fruits.map(isSmallEnough);

console.log(filter);