/*
Given two strings s1 and s2, return true if s2 contains a permutation of s1, or false otherwise.

In other words, return true if one of s1's permutations is the substring of s2.
*/

function checkInclusion(s1, s2) {
  let n = s1.length;
  let sortStr = (str) => str.split("").sort().join("");
  for (let i = 0; i <= s2.length - n; i++) {
    let window = s2.substring(i, i + n);
    if (sortStr(window) === s1 || window === s1) return true;
  }
  return false;
}

console.log(checkInclusion("ab", "eidbaooo"));
console.log(checkInclusion("ab", "eidbhooo"));
