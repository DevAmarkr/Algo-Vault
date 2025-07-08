/*
Given a string s, return a new string containing only alphabetic characters (both uppercase and lowercase).
Remove all digits, special characters, punctuation, and spaces.
*/

// function removeNonAlphabets(s) {
//   return s.replace(/[^a-zA-Z]/g, "");
// }
// Manual Approach
function removeNonAlphabets(s) {
  let newStr = "";
  for (let char of s) {
    if ((char >= "a" && char <= "z") || (char >= "A" && char <= "Z")) {
      newStr += char;
    }
  }
  return newStr;
}

console.log(removeNonAlphabets("hello123")); // "hello"
console.log(removeNonAlphabets("a-b*c@d")); // "abcd"
console.log(removeNonAlphabets("Hello, World!")); // "HelloWorld"
console.log(removeNonAlphabets("123456")); // ""
console.log(removeNonAlphabets("Good Day! 2025")); // "GoodDay"
