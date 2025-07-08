/*
Given a string s, return a new string with all duplicate characters removed, keeping only the first occurrence of each character.
console.log(removeDuplicates("aabbcc"));      // "abc"
console.log(removeDuplicates("hello"));       // "helo"
console.log(removeDuplicates("aAaA"));        // "aA"
console.log(removeDuplicates(""));            // ""


*/

function removeDuplicates(s) {
  return [...new Set(s)].join("");
}

// function removeDuplicates(s) {
//   let seen = new Set();
//   for (let char of s) {
//     if (!seen.has(char)) {
//       seen.add(char);
//     }
//   }
//   return Array.from(seen).join("");
// }

console.log(removeDuplicates("aabbcc")); // "abc"
console.log(removeDuplicates("hello")); // "helo"
// console.log(removeDuplicates("aAaA")); // "aA"
// console.log(removeDuplicates("")); // ""
