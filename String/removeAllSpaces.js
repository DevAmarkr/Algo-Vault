/*
Given a string s, return a new string with all spaces removed.
Only space characters (' ') are removed — keep all other characters unchanged.
*/
function removeSpaces(s) {
  let newStr = "";
  for (let char of s) {
    if (char !== " ") {
      newStr += char;
    }
  }
  return newStr;
}

console.log(removeSpaces("hello world")); // "helloworld"
console.log(removeSpaces("  a b c  ")); // "abc"
console.log(removeSpaces("NoSpaceHere")); // "NoSpaceHere"
console.log(removeSpaces("    ")); // ""
