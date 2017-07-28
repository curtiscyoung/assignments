var room = {
    cds: ["U2", "Fiona Apple", "Death Grips", "Nine Inch Nails", "Deafheaven"],
    fanOn: true,
    age: 9000,
    addresses: [
        {
            address: "3750 e via palomita",
            city: "Tucson",
            apt: 21102,
            zip: 85718,
           }
           ],

    favoriteCd: function () {
        var favorite = this.cds.slice(2, 3);
        console.log(favorite);
    },
    birthday: function () {
        this.age++;
    },
    isAlive: true,
}

//accessing data within an array that is nested in an object, addresses is an object nested within the object room, but we have made into an array.  since the object is the only item within the array, you index it at [0]
console.log(room.addresses[0].city);

//altering the var "age" that is nested in the object
console.log(room.age);
room.birthday();
console.log(room.age);

var computer = {
    glasses: "sunglasses",
    candles: 1,
    power: false,
    sunglassesSplit: function (glasses) {
        console.log(this.glasses.split(""));

    }
}

var guitar = {
    color: "red",
    badass: true,
    strings: [1, 2, 3, 4, 5, 6],
    missingString: function () {
        var brokenString = this.strings.splice(5, 1);
        return brokenString;

    }

}

var bookshelf = {
    color: "red",
    amountOfBooks: 50,
    goodBooks: true,
    favoriteBooks: ["Blood Meridian", "Fahrenheit 451", "The Shining", "Crime and Punishment", "1984"],
    newBook: function () {
        var mostFavorite = this.favoriteBooks.pop();
        return mostFavorite;


    }

};

var backpack = {
    fullOfJunk: true,
    colors: ["red", "black", "white"],
    items: ["assorted bull", "pens?", "a book I'll never read but should"],
    completeBackpack: function(){
    var completed = this.colors.concat(this.items);
    return completed;
    }

}

var stereo = {
    loud : true,
    components : ["tuner", "turn table", "cd changer", "receiver"],
    bass : "d-d-d-d-d-drop da bass",
    myStereo : function (){
        var system = this.components.join(","),
        return system;
    }
    
}

var painting = {
    colors : ["blue", "peach", "white", "black"],
    shape : "rectangular",
    beautiful : true,
    paintingBackground : function(){
        var background = this.colors.shift();
        return background;
        
    }
    
}

var oldAcoustic = {
    colors: ["sunburst", "brown"],
    broken : true,
    depressing : true,
    amountofColors : function(){
        var beautiful = this.colors.length;
        return beautiful;
    }
    
    
};

var newAcoustic = {
    brand : "Fender",
    broken : false,
    strings : ["E", "A", "D", "G", "B", "e"],
    dropDTuning : function(){
        var dropD = this.strings.splice(0,1,"D");
        return dropD;
        
    }
    
}

var tubeTv = {
    old : true,
    hookedUp : ["VCR", "Super Nintendo", "Sega Genesis"],
    movies : ["Citizen Kane", "Dogma", "Star Wars: The Empire Strikes Back",],
    vcrPlayer : function(){
        var player = this.hookedUp.shift();
        var movie = this.movies[2];
        console.log ("The " + player + "is now playing " + movie);
    }
    
}