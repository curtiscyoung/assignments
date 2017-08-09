var chai = require("chai");

var assert = chai.assert;

describe("object: ", function() {
    it("objects should be the same", function(){
        var character = {
            str: 15,
            int: 4,
            luk: 2,
            hp: 50
        }
        var thief = {
            str: "really strong dude",
            int: "yeah, he's like, fuckin' smart",
            luk: "luckiest bitch i know",
            hp: "he lacks stamina"
        }
        
        thief = character;
        assert.equal(thief, character);
    });
});

