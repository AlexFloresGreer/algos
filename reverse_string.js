function reverse_string(str) {

  var revStr = "";

  for (var i = str.length - 1; i >= 0; i --) {
    console.log(i);
    revStr += str[i];

  }
  return revStr;
}


console.log(reverse_string("abcdef"));
