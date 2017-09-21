function queryTransform (url, object){
    url += "?"
    for(let prop in object){
         url += (prop + "=" + object[prop] + "&");
    }
   return url
  
}