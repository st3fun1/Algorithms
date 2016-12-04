function digital_root(n) {
  // ...
  var sum = 0;
  while(n!==0){
      sum += n%10;
      n = Math.floor(n/10);
  }
  n = sum;
  if(sum < 10) return sum;
  else return digital_root(n);

}

