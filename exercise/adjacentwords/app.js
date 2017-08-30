let adjacent = function(arr){
    let start = arr[0].length + arr[1].length + arr[2].length
    console.log(start); 
    for (var i = 0; i < arr.length; i++){
        let test = arr[i] + arr[i+1] + arr[i+2];
        let highest = test.length;
        console.log(highest);
    }

}

module.exports = adjacent;

adjacent(["a", "bc", "cde", "efgh"]);

