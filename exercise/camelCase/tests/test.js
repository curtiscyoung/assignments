const chai = require("chai");
const camelCase = require("../app.js");
const assert = chai.assert;

let tests = {
    spaces : "curtis young",
    underscores : "curtis_young",
    dashs: "curtis-young",
    multiple: "curtis_clark_young"
}

describe("camel case spaces", () => {
    it("should return the given string with the spaces removed and the string in camelCase", () => {
        assert.equal(camelCase(tests.spaces), "curtisYoung")
    });
    it("should return the given string with the underscores removed and the string", ()=> {
        assert.equal(camelCase(tests.underscores), "curtisYoung");
    });
    it("should return the given string with the dashs removed and the string in camelCase", () => {
        assert.equal(camelCase(tests.dashs), "curtisYoung");
        
    });
    it("should return the given string with the multiple special characters removed and the str in camelCase", () => {
        assert.equal(camelCase(tests.multiple), "curtisClarkYoung");
    });                    
    
});


    
                        
