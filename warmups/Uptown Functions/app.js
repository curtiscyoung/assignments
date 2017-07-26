var lyrics = ["This", "hit", "that", "ice", "cold",
              "Michelle", "Pfeiffer", "that", "white",
              "gold", "This", "one", "for", "them",
              "hood", "girls", "Them", "good", "girls",
              "straight", "masterpieces", "Stylin'",
              "whilen'", "livin'", "it", "up", "in",
              "the", "city", "Got", "Chucks", "on",
              "with", "Saint", "Laurent", "Gotta", "kiss",
              "myself", "I'm", "so", "pretty"];

function uptownFunction(lyrics) {
    console.log(lyrics);

};

function uptownFunctionRev() {
    var uptownRev = lyrics.reverse();
    console.log(uptownRev);
};

for (i = 0; i < lyrics.length; i++) {
    if ((i % 2) === 0) {
        console.log(i);
    }

}
