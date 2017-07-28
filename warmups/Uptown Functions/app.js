var lyrics = ["This", "hit", "that", "ice", "cold",
              "Michelle", "Pfeiffer", "that", "white",
              "gold", "This", "one", "for", "them",
              "hood", "girls", "Them", "good", "girls",
              "straight", "masterpieces", "Stylin'",
              "whilen'", "livin'", "it", "up", "in",
              "the", "city", "Got", "Chucks", "on",
              "with", "Saint", "Laurent", "Gotta", "kiss",
              "myself", "I'm", "so", "pretty"];

function uptownFunction(array) {
    var joinedLyrics = array.join(" ");
    return joinedLyrics;

}

function uptownFunctionRev(array) {
    var uptownRev = array.reverse();
    var uptownJoin = uptownRev.join(" ");
    console.log(uptownJoin);
}

function uptownFunctionRev2(array){
   return array.reverse().join(" ");
}


function uptownLoop(array){
  var newArr = []
  for (i = 0; i < array.length; i++) {
    if ((i % 2) === 0) {
        newArr.push(array[i]);
    }
  
  }
  console.log (newArr.join(" "));
}

uptownLoop(lyrics);