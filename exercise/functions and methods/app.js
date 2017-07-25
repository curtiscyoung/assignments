var fruits = ["banana", "pear", "dragonfruit", "peaches", "oranges", "grapes", "grapefruit"];


function cut(a,b){
return (fruits.slice(a,b));
}

cut(0,4);



function slash(a,b){
  return (fruits.splice(a,b));
}

slash(2,5);

var nums = [34234, 4, 432, 15, 78, 1000, 10];

function checkNum(numbers){
   return numbers>100;}
   

function filterNum(){
    return nums.filter(checkNum);
    
  }
  
  filterNum(nums);