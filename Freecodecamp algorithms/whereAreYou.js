function whereAreYou(collection, source) {
  // What's in a name?
  var arr = [];
  var sourceKeys = Object.keys(source);
  // Only change code below this line
  arr = collection.filter(function(obj){
     
     for(var i=0;i<sourceKeys.length;i++){
        
         if(!obj.hasOwnProperty(sourceKeys[i]) || source[sourceKeys[i]] !== obj[sourceKeys[i]]){
          return false;
        }
       
     }
    return true;
    
  });
  // Only change code above this line
  return arr;
}
//my result: { "a": 1, "b": 2 }, {"a":1}, { "a": 1, "b": 2, "c": 2 }
//{ "a": 1, "b": 2 }, { "a": 1, "b": 2, "c": 2 }
whereAreYou([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "c": 2 });

