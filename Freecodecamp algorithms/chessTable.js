//tabla de sah
var size = promt();
var str = "";
for(var i=1;i<=size;i++){
  for(var j=1;j<=size;j++){
    var sum = 0;
    sum += i+j;
    if(sum%2===0){
     str +="#";
    }else{
     str +=" ";
    }
 }
     str += "\n";
}
