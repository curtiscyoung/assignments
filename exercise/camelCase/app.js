let camelCase = (str) => {
    var final = ""
    var newArr = str.split("");
    for (let i = 0; i < newArr.length; i++){
        if (newArr[i] === " " && newArr[i] === "_" && newArr[i] === "-") {
            newArr.splice(i, 1);
            newArr[i].toUpperCase();
            i++;
            var joined = newArr.join("");
        }
    }
    return joined;
}

console.log(camelCase("curtis young"))

module.exports = camelCase;