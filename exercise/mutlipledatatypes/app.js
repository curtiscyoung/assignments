let check = (arr) => {
     for (let i = 0; i < arr.length; i++){
        for (let j = 0; j < arr[i].length; j++){
            let type = typeof (arr[i][0]);
            if (typeof arr[i][j] !== type)
                return false;
        }

     }
    return true;
}


test = [[12,"3321",32], [true, false, true]]

console.log(check(test));

module.exports = (check);

