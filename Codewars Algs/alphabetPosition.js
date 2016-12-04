Replace With Alphabet Position
function alphabetPosition(text) {
 return text.replace(/[^A-Z]/gi,'').toUpperCase().split('').map((x)=>{
     return 26 - (90-x.charCodeAt(0));
 }).join(' ');
}
