//repeta un string un anumit numar de ori(num)
function repeat(str, num) {
  // repeat after me
  if(num <0){
    return "";
  }else{
    return str.repeat(num);
  }
}

repeat("abc", 3);
