// verifica un sir target cu alt sir
function end(str, target) {
    return str.substr(str.length-target.length, str.length) === target.substr(0,target.length);
}

end("Bastian", "n");


function end(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
    
  // First Attempt
  /*
  strFound = true;
  if ( target.length > str.length) {
    return strFound;
  }
  steps = target.length;
  for (i=str.length-1, j=target.length-1; 
        j >= 0; i--, j--) {
    if ( str[i] != target[j]) {
      strFound = false;
    }
  }
  
    return strFound;
  */
  
  // Second Attempt
  // use target.length in substring to str to determine if target is within str
  /*
  if (str.substr(-target.length) === target ) {
    return true;
  }
  return false;
  */
  
  // Third Attempt
  return str.endsWith(target);
}
