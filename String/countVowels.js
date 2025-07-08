/*
Given a string s, return an object with the number of vowels, consonants, and spaces in the string.
Ignore digits, punctuation, and special characters. Assume the input may contain both upper and lowercase letters.

*/

function checkVowelsAndConstant(s) {
  let vowelSet = new Set(["a", "e", "i", "o", "u"]);
  let vowels = 0;
  let space = 0;
  let constant = 0;
  for (let char of s.toLowerCase()) {
    if (vowelSet.has(char)) vowels += 1;
    else if (char >= "a" && char <= "z") constant += 1;
    else if (char === " ") space += 1;
  }
  return {
    vowels,
    space,
    constant,
  };
}

console.log(checkVowelsAndConstant("Hello"));
