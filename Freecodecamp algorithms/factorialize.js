function factorialize(num) {
  var factorial = 1;
  if(num === 0 ){
    return 1;
  }else{
    for(var i=1; i<=num;i++){
     factorial *= i;
    }
  }
  return factorial;
  
}

factorialize(5);
