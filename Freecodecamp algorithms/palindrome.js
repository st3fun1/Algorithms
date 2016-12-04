function palindrome(str) {
  // Good luck!
  str = str.toLowerCase().replace(/[^a-zA-Z0-9]/g,'');
  var array = [];
  array = str.split('');
  var newStr = array.reverse().join('');
  return str === newStr;
}

palindrome("eye");


function palindrome(str) {
  // Good luck!
  var array  = [];
  array = str.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi,"").toLowerCase().split("");
  var newStr = array.reverse().join("");
  if(str === newStr){
    return true;
  }else{
    return false;
  }
  
}

palindrome("eye");
