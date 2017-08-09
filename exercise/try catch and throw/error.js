var curtis = "Curtis"
var dork = curtis

var assert = function(actual, expected){
  if (actual != expected){
    try {
      throw "Error: The values do not match " + "actual= " + actual + " expected= " + expected
    } catch (err){
      console.log(err);
    }
  } else {
    console.log ("Success: The values match " + "actual = " + actual + " expected = " + expected)
  }
  
}


var describe = function(message, testFunc){
  try {
    testFunc();
  } catch (err){
      console.log("Error", err);
  }
}
describe("text message", function(){
  assert(curtis, "dork");
})
