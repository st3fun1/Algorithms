Your order, please


function order(words){
  // ...
   var a = words.split(' ');
   var l = a.length;
   var m = '';
   var val;
   var b = [];
   for(var i=1;i<=l;i++){
      val = a.find((x) => {
        if(parseInt(x.replace(/[^0-9]/g,'')) == i) return x;
      });
      b.push(val);
   }
  return b.join(' ');
}
