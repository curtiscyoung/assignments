const chai = require("chai");
const repeated = require("../app.js");
const assert = chai.assert;

let tests = {
    noRepeats: "this string has no repeats",
    allRepeats : "string string string string string",
    mixed: "this this is an example example"
    
}

describe("Test for repeats", () => {
    it("return an empty array", () => {
      assert.deepEqual(repeated(tests.noRepeats), [])  
    });
    it ("return an array with one item", () => {
      assert.deepEqual(repeated(tests.allRepeats), ["string"])
    });
    it("should return an array with two items", () => {
       assert.deepEqual(repeated(tests.mixed), ["this", "example"]) 
    });
});