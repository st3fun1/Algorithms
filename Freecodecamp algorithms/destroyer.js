function destroyer(arr) {
  // Remove all the values
  arr = arr.filter(removeArgs);

  function removeArgs(value) {
    for(var i = 1; value !== null; i++) {
      value !== arguments[i];
    }
  }
  return arr;
}
