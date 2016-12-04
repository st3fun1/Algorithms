function myReplace(str, before, after) {
  if(before.charAt(0) == before.charAt(0).toUpperCase()){
    after = after.charAt(0).toUpperCase() + after.slice(1);
  }
  if(before.charAt(0) == before.charAt(0).toLowerCase()){
    after = after.charAt(0).toLowerCase() + after.slice(1);
  }
  return str.replace(before,after);
}

myReplace("His name is Tom", "Tom", "john");
