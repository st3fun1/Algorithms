var isPP = function(n){

  for(var i=1;i<=n;i++){
        for(var j=2;j<=n;j++){
          if(Math.pow(i,j) == n){
            return [i,j];
          }
     }
  }
  return null;
 
}
