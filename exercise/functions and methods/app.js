var fruits = ["banana", "pear", "dragonfruit", "peaches", "oranges", "grapes", "grapefruit"];


function cut(a,b){
return (fruits.slice(a,b));
}

cut(0,4);



function slash(a,b){
  return (fruits.splice(a,b));
}

slash(2,5);