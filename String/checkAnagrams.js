/*
Given two strings, determine if they are anagrams (contain the same characters with same frequency, in any order).
console.log(isAnagram("listen", "silent")); // true
console.log(isAnagram("aabbcc", "abcabc")); // true
console.log(isAnagram("rat", "car"));       // false
console.log(isAnagram("Hello", "hello"));   // false (case-sensitive)

*/

// function isAnagram(s,t){
//     return s.split('').sort().join('') === t.split('').sort().join('')
// }

// function isAnagram(s,t){
//     let map_s = new Map()
//     let map_t = new Map()
//     for(let char of s){
//         map_s.set(char, (map_s.get(char) ?? 0) + 1)
//     }
//     for(let char of t){
//         map_t.set(char, (map_t.get(char) ?? 0) + 1)
//     }

//     for(let [key, values] of map_s.entries()){
//         if(!map_t.has(key) || map_t.get(key) !== values){
//             return false
//         }
//     }
//     return true
// }


function isAnagram(s,t){
    let map = new Map()
    for(let char of s){
        map.set(char, (map.get(char) ?? 0) + 1)
    }
    for(let char of t){
       if(!map.has(char))return false
       map.set(char, map.get(char)-1)
       if(map.get(char) < 0) return false
    }
    return true
}
console.log(isAnagram("listen", "silent"))
console.log(isAnagram("rat", "car"));  