//break camelCase

// complete the function
function solution(string) {
   return  string.replace(/([a-z])([A-Z])/g,'$1 $2');  
}
