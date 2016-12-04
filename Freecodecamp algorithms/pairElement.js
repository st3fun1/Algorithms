function pairElement(str) {
  var arr =  str.split('').map(function(item){
      switch(item){
        case 'G':
          return [item,'C'];
        case 'C':
          return [item,'G'];
        case 'A':
          return [item,'T'];
        case 'T':
          return [item,'A'];
      }
  });
  return arr;
}

pairElement("GCG");
