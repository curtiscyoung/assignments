//let Couch = function (name, color, type) {
//    this.name = name;
//    this.color = color;
//    this.type = type;
//    this.massage = () => {
//        console.log("vibration sounds")
//
//    }
//
//}

class Couch {
    constructor(name, color, type) {
        this.name = name;
        this.color = color;
        this.type = type;

    }
    massage() {
        console.log("vibration sounds")

    }
}

class Dining {
    constructor(wood, chairs, tableLength, painted) {
        this.wood = wood;
        this.chairs = chairs;
        this.tableLength = tableLength;
        this.painted = painted || "none";
    }
    leaf() {
        tableLength = tableLength + 5;
    }
    paint() {
        this.painted = "red";
    }
    viewInfo() {
        console.log('This is a ${this.wood} table with ${this.chairs} the length of the table is ${this.tableLength} and it is painted ${this.painted} ')

    }
}

class Animal {
    constructor() {
        this.multicellular = true;
        this.heterotrophic = true;

    }
}

class Feline extends Animal {
    constructor() {
        super();
        this.nocturnal = true;
        this.solitary = true;

    }

}

class Canine extends Animal {
    constructor() {
        super();
        this.hasFangs = true;
        this.hasSnout = true;

    }
}

let Bobcat = new Feline();


let myCouch = new Couch("Couchy-Couch", "red", "Hide-a-bed");

console.log(myCouch);

var arr = [1, 2, 3, 5, 6, 4, 4343, 2, 41, 232, 432];
var arr2 = [32315, 43432, 0432000, 6000];

var together = [...arr,"FUUUUUUUCKKKKK",...arr2];

console.log(together);


//let oakSet = new Dining("oak", 4, 15);
//
//console.log(oakSet);
//
//oakSet.paint();
//
//console.log(oakSet);
//
//oakSet.viewInfo();

console.log(Bobcat);

let query = {
    color: "red"
    
}

let query2 = {
    size: 32
}

let query3 = {
    type: "corderoy"
}


console.log(Object.assign({}, query, query2, query3 ));