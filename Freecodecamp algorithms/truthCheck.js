function truthCheck(collection, pre) {
  // Is everyone being true?
  for(var i=0;i<collection.length;i++){
     if(Boolean(collection[i][pre]) === false) return false;
  }
  return true;
}
/*function checkIfFalsy(val){
   if(Number.isNaN(val) || 
      val === false || 
      val === 0 || 
      val === '' ||
      val === undefined ||
      val === null){
      return true;
   }
   return false;    
}*/

truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");


function truthCheck(collection, pre) {
  // Is everyone being true?
  for(var i=0;i<collection.length;i++){
     if(!(collection[i][pre])) return false;
  }
  return true;
}

