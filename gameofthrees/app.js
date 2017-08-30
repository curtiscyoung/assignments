var steps = 0

function gameOfThrees(n){
    if (n % 3 === 0){
            steps = steps + 1;
            n = n/3;
            console.log(n);
            if (n === 1) {
               return steps;
            } else {
                return gameOfThrees(n);
            }
    } else {
        let plus = n + 1;
        let minus = n - 1;
        if (plus % 3 === 0){
          return gameOfThrees(plus);
        } else if (minus % 3 === 0 ){
          return gameOfThrees(minus);
        }
    } 
     
}

gameOfThrees(4893089489089877);

console.log(6/3);

console.log(gameOfThrees(9));