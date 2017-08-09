function stringLoop(str) {
    var splitString = str.split("");
    for (var i = 0; i < splitString.length; i++) {
        console.log(splitString[i]);
    }
}


//write a loop that runs through your (string)
//make the loop print the first occurence of (char) in your (string)

function firstLetter(str, char) {
    for (var i = 0; i <= str.length; i++) {
        if (str.charAt(i) === char) {
            return str.charAt(i);
        } 
    }
    console.log("thats not in there");
}


var nums = [23, 42, 45, 56, 7, 8000, 456];

function numLoop(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === 56) {
            return 42;
        }

    }
    console.log("the number isn't in there dude")
}

numLoop(nums);
