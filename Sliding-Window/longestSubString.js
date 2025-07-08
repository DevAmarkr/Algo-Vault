var lengthOfLongestSubstring = function (s) {
  let max = 0;
  for (let i = 0; i < s.length; i++) {
    let set = new Set();
    let counter = 0;
    for (let j = i; j < s.length; j++) {
      if (!set.has(s[j])) {
        set.add(s[j]);
        counter++;
      } else {
        break;
      }
    }
    max = Math.max(max, counter);
  }
  return max;
};

// var lengthOfLongestSubstring = function(s) {
//   let set = new Set()
//   let left = 0;
//   let right =0;
//   let max =  0
//   while(right < s.length){
//     while(set.has(s[right])){
//         set.delete(s[left])
//         left++
//     }
//     set.add(s[right])
//     max = Math.max(max, right-left + 1)
//     right++
//   }
//   return max
// };

// console.log(lengthOfLongestSubstring("abcabcbb"));
// console.log(lengthOfLongestSubstring("pwwkew"));
// console.log(lengthOfLongestSubstring(" "));
console.log(lengthOfLongestSubstring("abcadbbcbb"));
