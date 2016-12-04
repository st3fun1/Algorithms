//Counting duplicates

function duplicateCount(text){
  //...
  var a = text.toLowerCase().split('');
  var count = 0;
  var b = [];
  for(var i=0;i<a.length;i++){
     for(var j=i+1;j<a.length;j++){
        if(b.indexOf(a[i]) > - 1) continue;
        if(a[i] == a[j]){
          b.push(a[i]);
          count++;
        }
     }
  }
  return count;
}

