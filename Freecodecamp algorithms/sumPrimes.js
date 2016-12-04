
function sumPrimes(num) {
  var sum = 0;
  
   for(var i=2;i<=num;i++){
     
     if(isPrime(i) === true){
       sum += i;
     }
   }
  
   return sum;
}

sumPrimes(10);
