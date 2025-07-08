/*
Given a string, return all characters that appear exactly once (i.e., non-repeating characters).
console.log(findNonRepeatingChars("aabbcde"));   // ['c', 'd', 'e']
console.log(findNonRepeatingChars("abcabc"));    // []
console.log(findNonRepeatingChars("swiss"));     // ['w']
console.log(findNonRepeatingChars(""));          // []
*/

function findNonRepeatingChars(s) {
  let map = new Map();
  let output = [];
  for (let char of s) {
    map.set(char, (map.get(char) ?? 0) + 1);
  }
  for (let [key, values] of map.entries()) {
    if (values === 1) {
      output.push(key);
    }
  }
  return output;
}
console.log(findNonRepeatingChars("aabbcde"));
