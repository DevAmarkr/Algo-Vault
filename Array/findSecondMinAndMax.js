/*
Given an array of integers, return the second smallest and second largest element.
If they don’t exist (e.g. array has duplicates or less than 2 distinct values), return [-1].

Input: [4, 9, 2, 15, 6]

Output: [4, 9]

Explanation:
- Sorted array: [2, 4, 6, 9, 15]
- Smallest = 2, Second smallest = 4
- Largest = 15, Second largest = 9

*/

// function findSecondMinAndMax(nums){
//    if(nums.length < 4) return [-1]
//    nums = [...new Set(nums)].sort((a, b)=> a-b)
//    return [nums[1], nums[nums.length-2]]
// }

function findSecondMinAndMax(nums) {
  let min = Infinity,
    secondMin = Infinity;
  let max = -Infinity,
    secondMax = -Infinity;

  for (let num of nums) {
    if (num < min) {
      secondMin = min;
      min = num;
    } else if (num > min && num < secondMin) {
      secondMin = num;
    }

    if (num > max) {
      secondMax = max;
      max = num;
    } else if (num < max && num > secondMax) {
      secondMax = num;
    }
  }
  if(secondMin === Infinity || secondMax === -Infinity){
    return [-1]
  }
  return [secondMin, secondMax]
}
console.log(findSecondMinAndMax([4, 9, 2, 15, 6]));
