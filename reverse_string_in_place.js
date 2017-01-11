function reverse_string(str) {

  if (str.length == 1) {
    return str;
  }
  var k = str.length-1;
  for (var i = 0 ; i <= str.length/2 ; i++) {
    var temp1 = str[i];
      str[i] = str[k];
      str[k] = temp1;
      k--;
      console.log(str, "str");
  }

  return str;
}

console.log(reverse_string("abcdef"));
