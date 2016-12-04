function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins
  var regex = /([a-z])(?=[A-Z])|\s|\_/g;
  return str.replace(regex,'$1-').toLowerCase();
 
}

spinalCase('AllThe-small Things');
