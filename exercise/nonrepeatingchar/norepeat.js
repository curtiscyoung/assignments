var repeat = function(str){
    var first = str.charAt(0);
    for (var i = 0; i < str.length; i++){
        if (str.charAt(i) !== first && str.charAt(i) !== str.charAt(i+1) && str.charAt(i) !== str.charAt(i-1)){
            return str.charAt(i);
        }

    }

};


module.exports = repeat;