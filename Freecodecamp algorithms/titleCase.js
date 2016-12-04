// schimba prima litera de la fiecare cuvant din string in litera mare
function titleCase(str) {
  var array = str.toLowerCase().split(" ");
  for(var i = 0; i<array.length;i++){
     array[i] = array[i].charAt(0).toUpperCase() + array[i].substr(1);     
  }
      return (str = array.join(" "));   
}

titleCase("I'm a little tea pot");
