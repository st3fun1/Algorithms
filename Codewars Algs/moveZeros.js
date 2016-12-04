var moveZeros = function (arr) {
  // TODO: Program me
  var new_arr = arr.filter((x)=> String(x) != '0' );
  for(var i=0;i<arr.length;i++){
     if(String(arr[i]) == '0') new_arr.push(arr[i]);
  }
  return new_arr;
}
