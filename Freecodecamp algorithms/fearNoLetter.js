function fearNotLetter(str) {
  var charCodes = str.split('');
  for(var i=0;i<charCodes.length;i++){
      var diff = str.charCodeAt(i+1) - str.charCodeAt(i);
      if(diff > 1){
        return String.fromCharCode(str.charCodeAt(i)+1);
      }
  }
  
  return undefined;
     
}

fearNotLetter("abce");
