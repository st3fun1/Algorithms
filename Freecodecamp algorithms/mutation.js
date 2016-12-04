// gaseste literele dintr-un string in altul
function mutation(arr) {
  var string1 = arr[0].toLowerCase().split('');
  var string2 = arr[1].toLowerCase().split('');
 for(var i=0;i<string1.length;i++){
   for(var j=0;j<string2.length;j++){
     if(string1.indexOf(string2[j]) < 0 ){
          return false;
     } 
   }
 }
  return true;
   
}

mutation(["floor", "for"]);
