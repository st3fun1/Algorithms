function eatCandies(n,k){
  while(n!==0){
  if(n < k) k = n;
    else { n=n-k; console.log(k);}
  }
}


fscanf(STDIN, "%d",
    $N
);
$inputs = fgets(STDIN);
$inputs = explode(" ",$inputs);
$a = [];
for ($i = 0; $i < $N; $i++)
{
    $sampleValue = intval($inputs[$i]);
    array_push($a,$sampleValue);
}
    $counts = array_count_values($a);
    for($j=1;$j<=9;$j++){
        echo("$j:" . str_repeat('*',$counts[$j]).PHP_EOL);
    }

echo($N%2 == 0 ? $N*(floor($N/2))+floor($N/2):$N*(floor($N/2))+$N);


var a = [];
var count = 0;
for(var i=0;i<=N.length;i++){
    if(N.charAt(i) === '0' ){count++;}
    else{
        a.push(count);
        count = 0;
    }
}
a.sort((a,b) => b-a);

print(a[0]);



print(ip.split('.').map(function(a){
    
    if(parseInt(a).toString(16).length<2) return '0' + parseInt(a,10).toString(16).toUpperCase();
    else if(parseInt(a).toString(16) === '0') return '0' + parseInt(a,10).toString(16).toUpperCase();
    else return parseInt(a,10).toString(16).toUpperCase();
}).join(''));


print(message.split(' ').join('').split('').filter((a) => /[A-Z]/gi.test(a)).length);

//ACGT
var o = {'A':0,'C':0,'G':0,'T':0};
for(var i=0;i<str.length;i++){
    str[i] == 'A'? o['A']++ : 0;
    str[i] == 'C'? o['C']++ : 0;
    str[i] == 'G'? o['G']++ : 0;
    str[i] == 'T'? o['T']++ : 0;
}


var round = 0;
while(HP1>0 && HP2>0 ){
    HP1 = HP1 - D2;
    HP2 = HP2 - D1;
    round ++;
}

    if(HP1 > 0 && HP2<1) print("1 " + round);
    else print("2 " + round);
    

var N = parseInt(readline());
var o =  [];
for (var i = 0; i < N; i++) {
    var inputs = readline().split(' ');
    var item = inputs[0];
    var distance = parseFloat(inputs[1]);
    o.push(distance + item);
}
print(o.sort((a,b)=> parseFloat(b)-parseFloat(a)).map((a)=>a.replace(/[^A-Za-z]/g,'')).join(' '));


print(S.split('').map(function(x){
   if(x.toLowerCase() === x) return x.toUpperCase();
   else return x.toLowerCase();

}).join(''));


print(hair.repeat(5));
print(cheek + eye + " " + eye + cheek);
print(cheek +" "+ nose + " "+cheek);
print(cheek + " " + mouth + " " + cheek);
if(chin.length<4 && chin.length>2) print(" " + chin);
else if(chin.length<2) print("  "+chin)
else print(chin);


var L = readline();
print(L.split('').map(function(x,i,a){
    if(/[A-Z]/gi.test(x) && /[A-Z]/gi.test(a[i+1])) return x+" ";
    else return x;
}).join('').trim());


var H = 0;
var C = 0;
var N = parseInt(readline());
for (var i = 0; i < N; i++) {
    var line = readline();
    H+=(line.match(/[H]/g)||[]).length;
    C+=(line.match(/[C]/g)||[]).length;
}
if(C+H == 5 ) print('methane');
else if(C+H == 8 ) print('ethane');
else if(C+H == 11 ) print('propane');
else if(C+H == 14 ) print('butane');
else if(C+H == 17 ) print('pentane');
else print('NONE');
