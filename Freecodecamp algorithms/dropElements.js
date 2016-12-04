function dropElements(arr, func) {
  // Drop them elements.
  
   var new_arr = [];
   for(var i=0;i<arr.length;i++){
     if(func(arr[i])){
       new_arr = arr.slice(i);
       break;
     }else{
        arr.slice(i,1);
     }
   }
   return new_arr;
}

dropElements([1, 2, 3, 4], function(n) {return n > 5;});
