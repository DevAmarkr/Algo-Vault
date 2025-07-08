/*
/*
🧠 Problem: Group Anagrams
Given an array of strings `strs`, group the anagrams together. You can return the answer in **any order**.
Two strings are anagrams if you can rearrange one to become the other. That is, they have the **same characters with the same frequency**.

🧪 Example:
Input: ["eat", "tea", "tan", "ate", "nat", "bat"]
Output: [["eat","tea","ate"],["tan","nat"],["bat"]]
*/

/*

✅ Approach 1: Brute-force with sorting and memo array

- For each word, store its sorted version.
- Use a `memo` array to mark already grouped items.
- Compare sorted strings to find matching anagrams.

🔍 Time Complexity: O(n × m log m)
🔍 Space Complexity: O(n + m), where

n = number of strings

m = average string length

✅ Advantage:

Easy to understand

No use of maps

❌ Disadvantage:

Not optimal for performance

Nested loop → slower on large input

✅ Approach 2: Optimized using Hash Map

For each string, sort its characters to form a key.

Group all strings with the same sorted key into a hash map.

🔍 Time Complexity: O(n × m log m)
🔍 Space Complexity: O(n × m)

✅ Advantage:

Much faster with large input

Clean, concise code

Avoids unnecessary comparisons

❌ Disadvantage:

Uses additional space for Map and sorted strings

🧠 Best Practice:
Use the Map-based approach unless you’re constrained on memory. It’s cleaner and far more efficient.

*/

/*Brute-force with sorting and memo array*/
var groupAnagrams = function (strs) {
  let output = []
  let memo = Array(strs.length).fill(false)
  let sortedElements = strs.map((ele) => {
    let sortStr = ele.split('').sort().join('')
    return sortStr
  })

  for (let i = 0; i < sortedElements.length; i++) {
    if (memo[i]) continue
    const result = []
    result.push(strs[i])
    memo[i] = true
    for (let j = i + 1; j < sortedElements.length; j++) {
      if (memo[j]) continue
      if (sortedElements[i] === sortedElements[j]) {
        result.push(strs[j])
        memo[j] = true
      }
    }
    output.push(result)
  }
  return output
};

/* Optimized using Hash Map*/
var groupAnagrams = function (strs) {
  let map = new Map()
  for (let value of strs) {
    let sortedValue = value.split('').sort().join('')
    if (!map.has(sortedValue)) {
      map.set(sortedValue, [value])
    } else {
      map.get(sortedValue).push(value)
    }
  }
  return [...map.values()]
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]))


