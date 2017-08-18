function palindrome(str) {
    var splitStr = str.split("");
    var checkedStr = check(splitStr);
    var fixedStr = checkedStr.join("");
    var revStr = checkedStr.reverse();
    var joinedRevStr = revStr.join("");
    if (fixedStr === joinedRevStr) {
        return true;
    } else {
        return false;
    }
}

function sum(a, b) {
    return a + b;

}

function check(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === "a" || arr[i] === "b" || arr[i] === "c" || arr[i] === "d" || arr[i] === "e" || arr[i] === "f" || arr[i] === "g" || arr[i] === "h" || arr[i] === "i" || arr[i] === "j" || arr[i] === "k" || arr[i] === "l" || arr[i] === "m" || arr[i] === "n" || arr[i] === "o" || arr[i] === "p" || arr[i] === "q" || arr[i] === "r" || arr[i] === "s" || arr[i] === "t" || arr[i] === "u" || arr[i] === "v" || arr[i] === "w" || arr[i] === "x" || arr[i] === "y" || arr[i] === "z") {
            continue;
        } else {
            arr.splice(i, 1);
            i--;
        }
    }
    return arr;
}

module.exports = {
    sum
}


console.log(palindrome("shit"));
