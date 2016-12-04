function findLongestWord(str) {
  var highestLength = "";
  var array = [];
  array = str.split(" ");
  for(var i = 0 ;i < array.length;i++){
      if(array[i].length > highestLength.length){
        highestLength = array[i];
      }
  }
  str = highestLength;
  return str.length;
}

findLongestWord("The quick brown fox jumped over the lazy dog");
