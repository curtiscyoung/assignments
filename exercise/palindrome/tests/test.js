var chai = require("chai");

var assert = chai.assert;

var sum = require("../js/app.js").sum

describe("function that adds two numbers", function (){
    it("should return the sum of two numbers", function(){
        assert.equal(sum(3, 4), 7);
    })
});              
    