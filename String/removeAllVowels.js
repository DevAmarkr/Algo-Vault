/*
Given a string s, return a new string with all vowels (a, e, i, o, u) removed.
The check should be case-insensitive.


*/
function remvoveAllVowels(s){
  let vowelSet = new Set(['a','e','o','i','u'])
  let newStr =""
  for(let char of s){
    if(!vowelSet.has(char.toLowerCase())){
      newStr+=char
    }
  }
  return newStr
}
console.log(remvoveAllVowels('Hello'))