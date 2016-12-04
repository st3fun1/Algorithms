//suma tuturor numerelor intr-un interval

function sumAll(arr) {
  var newArr = [];
  for(var i=Math.min.apply(Math, arr);i<=Math.max.apply(Math, arr);i++){
    newArr.push(i);
  }
  return newArr.reduce(function(a,b){
    return a+b;
  });
}

sumAll([1, 4]);
