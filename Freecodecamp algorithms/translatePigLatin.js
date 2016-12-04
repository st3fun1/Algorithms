function translatePigLatin(str) {
  var pigLatin = '';
  var vowels = /[aeiouy]/i;
  var arr = str.split('');
  function findFirstVowel(item){
  
  return item.match(vowels);
    
  }
   //1)if-first letter is vowel
   //2)elseif-first letter isn't vowel
   //3)else-the word is made fully of consonants
   if(arr.findIndex(findFirstVowel) === 0){
     pigLatin = str + 'way';
   }else if(arr.findIndex(findFirstVowel) > 0){
     pigLatin = str.substr(arr.findIndex(findFirstVowel)) +   str.substr(0,arr.findIndex(findFirstVowel)) + 'ay';
   }else{
     pigLatin = str + 'ay';
   }
   return pigLatin;
}

translatePigLatin("sssesdsfvfg");
