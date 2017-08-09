

var pizza = {
    ingredients: ["cheese", "pepperoni", "tomato sauce", "bread"],
    cost: 5.50,
    delicious: true,
    addTopping: function () {
        this.ingredients.push("sausage");
    },

};


var burger = {
    ingredients: ["meat", "cheesse", "lettuce", "tomatoes", "mayo", "mustard"];
    
    
}



var favoriteFoods = [pizza];

console.log(favoriteFoods);
