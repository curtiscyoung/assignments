//var repeated = function (str) {
//    var duplicates = [];
//    var newArr = str.split(" ");
//    newArr.sort();
//    for (var i = 0; i < newArr.length; i++){
//        if (newArr[i] === newArr[i+1]){
//            duplicates.push(newArr[i]);
//        }
//    }
//   return duplicates;
//}




////BENS SOLUTION///////
var repeated = function (str) {
    let graph = {};
    let output = [];
    let arr = str.split(" ");
    for (let i = 0; i < arr.length; i++) {
        if (!graph[arr[i]]) {
            graph[arr[i]] = arr[i];
        } else {
            if (!output.includes(arr[i]))
                output.push(arr[i]);
        }
    }
    return output;
}

console.log(repeated("this is is an example example"));



module.exports = repeated;
