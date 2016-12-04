function uniteUnique(arr) {
  var b = [];
  for(var i=0;i<arguments.length;i++){
    b.push(arguments[i]);
  }
  var flattened = b.reduce(function(a,b){return a.concat(b);},[]);
  return flattened.filter(function(x,i,arr){
      return i == arr.indexOf(x);
  });
}

uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]);
