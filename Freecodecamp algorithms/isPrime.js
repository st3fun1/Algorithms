//suma tuturor numerelor prime
function isPrime(num){
  var numIsPrime = true;
  
  for( var j=2;j<=Math.sqrt(num);j++){
    
      if(num%j === 0 ){
        numIsPrime = false;
      }
   }
  
  return numIsPrime;
}
