var chai = require("chai");
var repeat = require("../norepeat.js");
var assert = chai.assert;

let tests = {
    test = "abbbbbcccda",
    test2 = "aaaaaabcccccc",
    test3 = ""

}


describe("Loook for non-repeating char", () => {
    it("should return a", () => {
        assert.equal(repeat(test.test), "a");
    })
    it("it should return b", () => {
        assert.equal(repeat(test.test2), "b");
    })
    it("it should throw an error", () => {
        assert.throw( () => {
            
        }

    })

})