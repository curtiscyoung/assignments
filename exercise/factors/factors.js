function factors(n){
    var factors = []
    var counter = 0;
    for (var i = 1; i <= n/2; i++){
      if (n % i === 0){
        counter++;
        factors.push(i);
      }
    }
    
    if (counter === 0){
      return 1;
    } 
    
    if (counter === 1){
      return "prime";
    } 
    console.log(factors);
    return counter + 1;
    
  }
  
  
  factors(2000);