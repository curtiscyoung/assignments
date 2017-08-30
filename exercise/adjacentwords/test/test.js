const adjacent = "../app.js";
const chai = require("chai");
const assert = chai.assert;


let tests = {
    test1:  ["this", "is", "an", "array"],
    test2: ["Curtis", "fucking", "sucks", "man"]

}

describe("Adjacent Words Test", () => { 
    it("should return the last three items of the array", ()=>{
        assert.equal(adjacent(tests.test1), ["is", "an", "array"])
    })
    it("should return the first three items of an array", () => {
        assert.equal(adjacent(tests.test2), ["Curtis", "fucking", "sucks"])
    })

})