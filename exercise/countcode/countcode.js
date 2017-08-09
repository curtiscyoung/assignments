function countCode(str){
  var counter = "";
    for (var i = 0; i < str.length; i++){
    if (str.charAt(i) === "c" && str.charAt(i + 1) === "o" || str.charAt(i+3) === "e" ){
       counter++;
    }

  }
return counter;    
}


countCode("corefjdkls;af")