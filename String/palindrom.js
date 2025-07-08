/*
Given a string s, return true if it is a palindrome, or false otherwise.
A palindrome is a word, phrase, or sequence that reads the same backward as forward.
racecar-> true
madam-> true
hello->rue
*/

function isPalindrom(s) {
  return s.split("").reverse().join("") === s;
}

function isPalindrom(s) {
  if (!s.length) return false;
  let l = 0;
  let r = s.length - 1;
  while (l < r) {
    if (s[l] === s[r]) {
      l++;
      r--;
    } else {
      return false;
    }
  }
  return true;
}

console.log(isPalindrom("racecar"));
console.log(isPalindrom("madam"));
console.log(isPalindrom("hello"));
console.log(isPalindrom("ab"));
console.log(isPalindrom("a"));
