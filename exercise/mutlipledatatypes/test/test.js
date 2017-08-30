const chai = require("chai");
const assert = chai.assert;
const check = require("../app.js");

let test = {
    test1 : [[1], [2], [4,5], [67]]

}



describe ("checking arrays", () => {
    it ("should return true if all data types within individual arrays are the same", () => {
        assert.deepEqual(check(test.test1), true);

    })

})

