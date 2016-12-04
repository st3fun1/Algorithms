Greatest common divisor


var inputs = readline().split(' ');
var a = parseInt(inputs[0]);
var b = parseInt(inputs[1]);
var t;
 while(b!==0){
    t = b;
    b = a%t;
    a = t;
 }
print(t);
