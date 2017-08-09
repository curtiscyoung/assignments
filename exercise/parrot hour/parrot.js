function whosTalkin(hour, talking) {
    if ((hour <= 7 || hour >= 20) && (talking === true)) {
        return "we're in trouble..."
    }
    return "phew"

}


//write a function who's parameters are the current hour, running from 0..23, and the boolean "talking".  
//make this function return "we're in trouble..." if the hour <=7 || hour>20 && hour<23 and the "talking" boolean is true

var talking = true;


console.log(whosTalkin(15, true));
