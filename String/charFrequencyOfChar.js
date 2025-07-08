/*
Given a string, count how many times each character appears.
console.log(charFrequency("hello"));       
// { h: 1, e: 1, l: 2, o: 1 }

console.log(charFrequency("aabbccdd"));    
// { a: 2, b: 2, c: 2, d: 2 }

console.log(charFrequency("aaa BBB"));     
// { a: 3, B: 3 } (case-sensitive)

console.log(charFrequency(""));            
// {}
*/

function charFrequency(s) {
  let map = {};
  for (let char of s) {
    map[char] = (map[char] ?? 0) + 1;
  }
  return map;
}

console.log(charFrequency("hello"));
