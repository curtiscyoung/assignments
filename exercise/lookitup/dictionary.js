var dictionary = {};

function addWord(word, definition) {
    dictionary[word] = definition;
    console.log(dictionary);
    if (dictionary[word]) {
        console.log("that word already exists")
    } else {
        dictionary[word] = definition;
        console.log(dictionary);
    }
}

function searchWord(word) {
    dictionary[word];
    console.log(dictionary[word]);
}
addWord("Curtis", "a loser who lives in tucson");

addWord("Curtis", "a loser who lives in tucson");


searchWord("Curtis");
