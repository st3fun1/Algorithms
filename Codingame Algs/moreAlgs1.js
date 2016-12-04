print(sentence.split('').map(function(x){
    if(/[aeiou]/gi.test(x)) return x + "p" + x;
    else return x;
}).join(''));


/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

var n = parseInt(readline());
var a = [];
for (var i = 0; i < n; i++) {
    var test = readline();
    a.push((test.match(/[0-9]{2}|[0-9]{1}/g)||[]).length);
}

// Write an action using print()
// To debug: printErr('Debug messages...');

print(a.reduce((a,b)=>a+b));


/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

var n = parseInt(readline());

// Write an action using print()
// To debug: printErr('Debug messages...');
var s = '';
var t = '';
var diff = 0;
for(var i=n;i>0;i--){
    for(var j=1;j<=i;j++){
        t += j.toString();
    }
    diff = n-i;
    s = '+'.repeat(diff) + t;
    print(s);
    t = '';
    
}
var S = readline();
if(S.length>=8 && 
(S.match(/\d/g)||[]).length>=1 && (S.match(/[a-z]/g)||[]).length>=1
&& (S.match(/[A-Z]/g)||[]).length>=1) print(true);
else print(false);

The program:
Your program must create the lowest integer from the input with the choice of subtracting each digit from 9 or not.

For example, 17 can become 12 by replacing the digit 7 by 2 (because 9 - 7 = 2).


var N = readline();
var s = '';
while(N!==0){
    if(9-N%10 < N%10) s += 9-N%10;
    else s+= N%10;
    N = Math.floor(N/10);
}
print(s.split('').reverse().join(''));

var inputs = readline().split(' ');
var N = parseInt(inputs[0]);
var K = parseInt(inputs[1]);
var a = [];
while(N>0){
    if(N<K) a.push(N);
    else a.push(K);
    N = N-K;
}
print(a.join(' '));


/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

var valueCount = parseInt(readline());
var inputs = readline().split(' ');
var a = [];
for (var i = 0; i < valueCount; i++) {
    var value = inputs[i];
    a.push(value);
}

// Write an action using print()
// To debug: printErr('Debug messages...');

print(a.map((x)=>String.fromCharCode(parseInt(x,16))).join(''));

The program:
You are required to write a program that finds the number of vowels in each word of a sentence.

- Words are separated by a single space.
- The sentence may consist of letters, numbers and/or special characters. Specifically, it may contain any character in the range of characters having an ASCII value of 33 to 126 inclusive.

/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

var sentence = readline();

// Write an action using print()
// To debug: printErr('Debug messages...');
var a = sentence.split(' ');
print(a.map((x)=> (x.match(/[aeiou]/gi)||[]).length).join(' '));


Given a series of letters, your program must find the first one that is not correctly placed regarding the alphabetical order.
Input
Line 1: a series of letters, uppercase.
Output
Line 1: the first letter that does not respect the alphabetical order.
Constraints
There are always at least two letters and less than 26.
The series may start and end anywhere in the alphabet.
Some letters may be entirely missing, but the remaining ones will be in order - except one. There are no duplicate letters.
There is always one and only one incorrectly placed letter.

var w = readline();
var a = w.split('');
var s = 0;
print(w.split('').find((x,i)=>{
    s = i-1;
    if(s>=0 && x.charCodeAt(0)<a[i-1].charCodeAt(0)) return x;
}));


The Birds Language have only one rule : after each vowels(a,e,i,o,u,A,E,I,O,U) you should insert letter p and that vowels one more time. For a given String convert it to Birds Language.
Input
String A string which can contain any characters.

var sentence = readline();print(sentence.split('').map((x)=>{if(/[aeiou]/gi.test(x)) return x + "p" +x;else return x;
}).join(''));




/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

var ipv4 = readline();

// Write an action using print()
// To debug: printErr('Debug messages...');

var a = ipv4.split('.').map((x)=>{
    var n = parseInt(x).toString(2);
    var len = parseInt(x).toString(2).length;
    return '0'.repeat(8-len) + n;
});
var b = a.join('');
print(parseInt(b,2).toString());



/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

var ipv4 = readline();

// Write an action using print()
// To debug: printErr('Debug messages...');
var n = ipv4.split('.').map((x)=>{
    var len = parseInt(x).toString(2).length;
    var tr = parseInt(x).toString(2);
    return '0'.repeat(8-len) + tr;
}).reduce((a,b)=> a+b);
print(parseInt(n,2).toString(10));
