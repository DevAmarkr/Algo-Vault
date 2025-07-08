/*
The "Max Occurring Character" problem asks you to identify the character that appears the most number of times in a given string
Input: apple
Output: p

*/

function maxOccuringChar(s) {
  let map = new Map();
  for (let char of s.toLowerCase()) {
    if (char === " " || !/[a-zA-Z]/.test(char)) continue;
    map.set(char, (map.get(char) ?? 0) + 1);
  }
  let max = 0;
  let maxChar = "";
  for (let [key, values] of map.entries()) {
    if (values > max) {
      max = values;
      maxChar = key;
    }
  }
  return maxChar;
}
console.log(maxOccuringChar("apple"));
console.log(maxOccuringChar("Ama@@@r"));
