var twistemSum = function(N){
   var sum = 0;
   var num;
   for(var i=1;i<=N;i++){
     num = i.toString();
     for(var j=0;j<num.length;j++){
         console.log('j',j);
         sum += parseInt(num.charAt(j));
         console.log('parse',num.charAt(i));
     }
   }
  return sum;
}
