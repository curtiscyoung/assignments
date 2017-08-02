//create a string that has no duplicate letters
//create another string with all of the removed duplicates

let input = "bookkeeper larry";
let misfits = [];

//loop through the string for the first letter and count the instances of that letter
//loop through for the next letter and count the instances of that letter etc. etc.
//if the letter count is greater than 1 splice all instances except for one to a new array


function countLetters(string) {
    let duplicates = string.split("");

    let nonDuplicates = duplicates.filter(function(item, index, inputArray) {
        if ((inputArray.indexOf(item) === index) === false) {misfits.push(item)}
        return inputArray.indexOf(item) === index;
    });
    return nonDuplicates.join("");
}


console.log(countLetters(input));

// let misfitsString = misfits.join("");
// console.log(misfitsString);

function noDupes(str) {
    var uniques = "";
    var dupes = "";
    
    for (var i = 0; i < str.length; i++) {
        if (uniques.indexOf(str[i]) >= 0) {
            dupes += str[i];
        } else {
            uniques += str[i];
        }   
    }
    
    return {
        uniques: uniques,
        dupes: dupes
    }
}
var resultsObj = noDupes("bookkeeper larry")

console.log(resultsObj.uniques);
console.log(resultsObj.dupes);