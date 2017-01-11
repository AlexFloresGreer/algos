function is_Palindrome(str) {
  len = str.length;
  for (var i = 0; i < len/2; i++) {
    if (str[i] != str[len-1 -i]) {
      console.log("not palindrome");
      return false;
    }
    else {
      console.log("bingo")
      return true;
    }
  }
}

console.log(is_Palindrome("MADAM"));
console.log(is_Palindrome("ABCDEFG"));
