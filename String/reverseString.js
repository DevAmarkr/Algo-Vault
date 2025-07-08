/*
Given a string s, return a new string that is the reverse of s.
*/

// function reverseString(s) {
//   if (!s.length) {
//     return "";
//   }
//   return reverseString(s.slice(1)) + s[0];
// }

// function reverseString(s) {
//   if (!s.length || typeof s !== "string") {
//     throw new Error("Please provide valid string");
//   }
//   return s.split("").reverse().join("");
// }
function reverseString(s) {
  if (!s.length || typeof s !== "string") {
    throw new Error("Please provide valid string");
  }
  let newStr = "";
  for (let i = s.length - 1; i >= 0; i--) {
    newStr += s[i];
  }
  return newStr
}

console.log(reverseString("hello"));
