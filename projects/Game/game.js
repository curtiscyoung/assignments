var readline = require("readline-sync");
var name = readline.question("Good evening.  I have been sent to work in your service.  Might I confirm thy name? ");

while (name === "") {
    name = readline.question("I must confirm thy name, m'lord Or art thou nameless? Regardless, adopt a name    ");
}

var lastname = readline.question("Surname?  ")

while (lastname === "") {
    lastname = readline.question("But how shall I say thy official title?  Please, your surname    ");
}

var gender = readline.question("Is thou art a man or woman?  ").toLowerCase();

while (gender != "boy" && gender != "girl" && gender != "man" && gender != "woman" && gender != "tranny") {
    gender = readline.question("Aye, quit fookin around Laddy tell me what ya got down there   ");
}

// false || false ==> false
// false || true ==> true
// true || false ==> true
// true || true ==> true

// false && false ==> false
// false && true ==> false
// true && false ==> false
// true && true ==> true


if (gender === "boy" || gender === "man") {
    console.log("Thank you, Lord " + lastname);
} else if (gender === "girl" || gender === "woman") {
    console.log("Thank you, Lady " + lastname);
} else if (gender === "tranny") {
    console.log("Oh...well...we're respectful of all kinds of people here i really didn't mean to offend please forgive me everyone has  a right to choose what they do with their bodies this seems a little longwinded I'm talking too much aren't I oh well thank you errrr WhateverTheFuckYouAre " + lastname);
}

//give each class an ability they can use with a function within the object
//we can figure out what each function can do and how the game operates later
//idea: how fighting enemies works: we make each enemie it's own object, and give them the same values as the "build" objects have.  When the player encounters an enemy, perhaps a big enemie with a lot of strength, it does math.random for each your character's str from 1 to (character's current str) and the enemie's str from 1 to (whatever that particular enemie's str is) and compares the two.  Let's say that you have 15 str and the enemie has 20 str.  Even though the enemie has more str than you, you still have a chance to win!  But whoever has higher str has the better chance of winning.  

//idea on how items work: maybe we can make it random whether an enemie drops an item and then run a function that runs through an object of items that have their own functions.  Example: a sword that increases your str by 5.  ideas how that will actually work later.  


var warrior = {
    type: "WARRIOR",
    str: 15,
    int: 4,
    luk: 6,
    hp: 150
}

var wizard = {
    type: "WIZARD",
    str: 4,
    int: 15,
    luk: 8,
    hp: 80

}
var thief = {
    type: "THIEF",
    str: 9,
    int: 8,
    luk: 15,
    hp: 100

}

console.log("Choose your build:  ")

console.log(warrior);

console.log(wizard);

console.log(thief);

var build = readline.question("What kind of fighter will you be?     ").toLowerCase()

while (build != "warrior" && build != "wizard" && build != "thief") {
    build = readline.question("QUIT BEIN A FOOKIN CUNT AND CHOOSE UR CLASS YA FOOK!!!!   ")
}
if (build === "warrior") {
    var character = warrior;
} else if (build === "wizard") {
    var character = wizard;
} else if (build === "thief") {
    var character = thief;
};



console.log(name + " " + lastname + " : ");

console.log(character);

console.log("You emerge from the void.  You are placed at a crossroads, a road stretches out in all four directions.")

var death = false;

function suicide(){
    console.log("GOODBYE CRUEL WORLD");
    character.hp = 0;
    checkHp();
}

function dead() {
    console.log("YOU ARE DEAD.  GAME OVER")
    var death = true;
    
}
while (death === true) {
    readline.question("the game is over. Exit the game to restart.")
}

function checkHp() {
    console.log(character.hp);
    if (character.hp <= 0) {
        dead();
    } else {
        question();
    }
}

function question() {
    console.log("Actions : WALK   REST  INVENTORY  STATS");
    var action = readline.question("What will you do?  ").toLowerCase();
    if (action === "walk") {
        walk();
    } else if (action === "rest") {
        rest();
    } else if (action === "stats") {
        console.log(character);
        question();
    } else if (action === "suicide"){
        suicide();
    } else {
        question();
    }
}

function walk() {
    var encounter = [1, 2, 3];
    var chance = encounter[Math.floor(Math.random() * encounter.length)];
    if (chance === 1) {
        console.log("an enemy appears!!!");
    } else {
        console.log("you continue safely");
    }
    question();
}

function rest() {
    var event = [1, 2, 3, 4, 5, 6];
    var chance = event[Math.floor(Math.random() * event.length)];
    console.log("you settle in for the night");
    if (chance === 1) {
        console.log("You get a good nights sleep.  You got lucky")
        character.hp += 10;
        checkHp();
        
    } else if (chance === 2) {
        console.log("A band of enemies attack your campsite.  You barely escape alive");
        character.hp = 0;
        checkHp();
        

    } else if (chance === 3) {
        console.log("you have a successful hunt.  You get some food in your belly and feel refreshed.  You get a good nights sleep")
        character.hp += 50;
        checkHp();
        
    } else if (chance === 4) {
        console.log("you have bad night's sleep.  You don't catch any food.  You feel worse than you did before");
        character.hp -= 10;
        checkHp();
        
    } else if (chance === 5) {
        console.log("Your hunt doesn't go well, but you find some berries you can eat.  You get a good night's rest.")
        character.hp += 25;
        checkHp();
        
    } else {
        console.log("Your hunt does not yield any game, you find some berries but they are poisonous.  You feel much worse than you did before");
        character.hp -= 25;
        checkHp();
        
    }

}
question();
