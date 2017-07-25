var room = {
     cds : ["U2", "Fiona Apple", "Death Grips", "Nine Inch Nails", "Deafheaven"],
     fanOn : true,
     age: 9000,
     addresses : [
           {
             address : "3750 e via palomita",
             city : "Tucson",
             apt : 21102,
             zip : 85718,
           }
           ],
     
    favoriteCd : function (){
     var favorite = this.cds.slice(2,3);
         console.log (favorite);
        },
      birthday : function(){
         this.age++;
      }   ,
    isAlive : true,
}

//accessing data within an array that is nested in an object, addresses is an object nested within the object room, but we have made into an array.  since the object is the only item within the array, you index it at [0]
console.log(room.addresses[0].city);

//altering the var "age" that is nested in the object
console.log(room.age);
room.birthday();
console.log(room.age);
    
var computer = {
    glasses : "sunglasses",
    candles : 1,
    power : false,
    sunglassesSplit : function (glasses){
        console.log (this.glasses.split(""));
    
}
}

var guitar = {
    color : "red",
    badass : true,
    strings : [1,2,3,4,5,6];
    missingString : function(){
     var brokenString = this.strings.splice(5,1);
        return brokenString;
    
}
    
}

