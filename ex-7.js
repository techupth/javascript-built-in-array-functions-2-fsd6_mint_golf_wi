function isPalindrome(string) {
  // Start coding here
  let char = string.split("");
  let newChar = char.reverse().join("");
  // console.log(newChar);
  if (string === newChar) {
    return true;
  } else return false;
}

//Example case
console.log(isPalindrome("reviver")); // true
console.log(isPalindrome("บวบ")); // true
console.log(isPalindrome("deliver")); // false
