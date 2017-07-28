function sum(a,b){
    var solution = a+b;
    return solution;
}

function biggest(a,b,c){
  if (a>b && a>c){
    return (a + " is the biggest!!");
  } else if 
    (b>a && b>c) {
      return (b + " is the biggest!!")
    }
    else {
      return (c + " is the biggest!!")
    }
  
  
}



function evenOdd(number){
     if (number % 2 === 0) {
         return "Even"} 
    else {
        return "Odd";
    }
     
    
}

function together(string){
  if (string.length<=20){
    return string + string
  } else {
    var halfString = (string.length/2);
    return string.substring(0, halfString);
  }
  
}

