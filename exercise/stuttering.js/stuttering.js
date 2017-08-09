//write a for loop that loops through a string (ex: "code") and gives back one letter incrementally after another and returns a new string. 
//if we were to enter in "code", then the new string would be "ccocodcode", which is giving back "c", then "co", then "cod", and "code", and puts them all in the same string. 

function stuttering(str) {
    var spititout = "";
    var what = [];
    for (var i = 0; i < str.length; i++) {
        spititout += str[i];
        what.push(temp);
    }
    return what.join("");
}

function replicate(str) {
    var newString = "";
    for (var i = 0)
        newString += str.slice(0, i) {

        }
    return newString
}
