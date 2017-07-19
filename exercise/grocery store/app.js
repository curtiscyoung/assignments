var shopper = {
    pearsGood: false,
    apples: 5,
    favoriteFood: 'taquitos',
    fruits: ["grapes", "oranges", "kiwi", "lemons"],

    taste: function () {
    if (shopper.pearsGood === false) {
        console.log("yup");
    } else {
        console.log("gross");
    }
}
}



console.log(shopper.favoriteFood);

console.log(shopper.fruits[0]);

console.log(shopper.apples);

console.log(shopper.taste());

console.log(shopper.fruits[0],shopper.fruits[2]);

