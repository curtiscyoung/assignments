function valid (str){
    var arr = str.split(".");
        if (arr.length < 4 || arr.length > 4){
            return false;
        }
    for (var i = 0; i < arr.length; i++){
        if (arr[i] < 0 || arr[i] > 255){
            return false;
        }

    }
    return true;
}

console.log(valid("143.256.79.56"));