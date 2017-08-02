//create a function that prints out every character in a given string and prints that to the console with the frequency of each letter
function frequency(str) {
    var freq = {};
    //create a for loop to loop through the given string
        //tell the loop to count the amount of times a character in the string appears
        
    for (var i = 0; i < str.length; i++) {
        var character = str.charAt(i);
        //push the results of the for loop to an empty object
        if (freq[character]){
            freq[character]++
        } else {
            freq[character] = 1;
        }
        // remove the duplicates from the object
        if (freq[character] > 1) {
            freq[character]--
        }
        //sort the str by each characters frequency
        //freq[character].sort(function(a,b)){
                 //return a-b
                  }
    
    
    console.log(freq);
}


frequency("slimy smelly solution");    
