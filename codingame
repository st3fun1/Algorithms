a.filter((x,i,ar)=>{
   if(ar.slice(0,i).indexOf(x) == -1 && a.slice(i+1).indexOf(x) == -1) return x;
});



var S = readline();

print(S.split('').map((x,i,a) => {
  if(i%2 === 0 ) return S.charAt(i+1) + x;
}).join(''));
