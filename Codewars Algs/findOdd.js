//Find the odd int

function findOdd(A) {
  var b = {};
  var len = A.length;
  for(var i=0;i<len;i++){
    if(b.hasOwnProperty(A[i].toString())) b[A[i].toString()]++;
    else b[A[i].toString()] = 1;
  }
  for(var key in b){
    if(b[key]%2 == 1){
      return Number(key);
    }
  }
}
