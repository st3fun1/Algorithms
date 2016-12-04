function sumFibs(num) {
  
  var f1=1, f2=1,temp=null,sum=0;
  while(f1<=num){
    
    if(f1%2==1){
      sum += f1;
    }
    temp = f2;
    f2 = temp+f1;
    f1 = temp;
    
  }
  return sum;
}

sumFibs(1000);
