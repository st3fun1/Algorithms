


Array.prototype.square = function(){
   return this.map((x)=>Math.pow(x,2));
}

Array.prototype.cube = function(){
   return this.map((x)=>Math.pow(x,3));
}

Array.prototype.average = function(){
   var arrLen = this.length;
   if( arrLen == 0) return NaN;
   else return this.reduce((a,b)=> a+b,0)/arrLen;
}

Array.prototype.sum = function(){
   return this.reduce((a,b)=>a+b,0);
}

Array.prototype.even = function(){
   return this.filter((x)=>x%2 == 0);
}

Array.prototype.odd = function(){
   return this.filter((x)=>x%2 == 1);
}
