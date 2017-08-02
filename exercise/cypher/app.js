var readline = require('readline-sync');
var input = readline.question('What phrase would you like to encrypt? ').toLowerCase();
var shift = parseInt(readline.question('How many letters would you like to shift? '));

var result = "";

var alphabet = "abcdefghijklmnopqrstuvwxyz";
var Capsalphabet = alphabet.toUpperCase();

for (var i = 0; i < input.length; i++) {
    if (alphabet.indexOf(input[i]) > -1); {
        var newIndex = alphabet.indexOf(input[i]) + shift
        if (newIndex >= 25) {
            newIndex -= 26
        }
        result += alphabet[newIndex];

    } else if (Capsalphabet.indexOf(input[i]) > -1) {
        var newIndex = Capsalphabet.indexOf(input[i]) + shift;
        if (newIndex >= 25) {
            newIndex -= 26
        }
        result += Capsalphabet[newIndex];
    } else {
        result += input[i];

    }


}

console.log(result);
