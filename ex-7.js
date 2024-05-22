function isPalindrome(string) {
  // Start coding here
  //แยกข้อความออกเป็น Array
  const splitString = string.split("");
  //กลับข้อความ
  const reverseString = splitString.reverse();
  //รวมกลับเป็น String
  const reversedString = reverseString.join("");
  console.log(splitString);
  console.log(reversedString);
  if (string === reversedString) {
    return true;
  } else {
    return false;
  }
}

//Example case
console.log(isPalindrome("reviver")); // true
console.log(isPalindrome("บวบ")); // true
console.log(isPalindrome("deliver")); // false
