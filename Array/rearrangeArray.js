/*
Given an array, rearrange its elements such that the first half is sorted in increasing order and the second half is sorted in decreasing order.
[5, 2, 9, 1, 7, 6]

*/

// function reArrangeArray(nums){
//     nums = nums.sort((a, b)=> a-b)
//     let left =0;
//     let right = nums.length-1
//     let middle = Math.floor((left+right)/ 2)
//     console.log(left, right, middle)

//     //Re-Arrange in descending Order the other half
//     while(middle < right){
//         [nums[middle+1], nums[right]] = [nums[right], nums[middle+1]]
//         middle++
//         right--
//     }
//     return nums
// }

function reArrangeArray(nums){
  nums = nums.sort((a, b)=> a-b)
  mid = Math.floor(nums.length / 2);
  console.log(mid)
  let firstHalf =  nums.slice(0,mid)
  let secondHalf =  nums.slice(mid).reverse()
  return [...firstHalf, ...secondHalf]
}

function reArrangeArray(nums) {
    // 1. Selection Sort (ascending)
    for (let i = 0; i < nums.length - 1; i++) {
      let minIdx = i;
      for (let j = i + 1; j < nums.length; j++) {
        if (nums[j] < nums[minIdx]) {
          minIdx = j;
        }
      }
      // Swap
      [nums[i], nums[minIdx]] = [nums[minIdx], nums[i]];
    }
  
    // 2. Prepare output array
    const result = [];
    const mid = Math.floor(nums.length / 2);
  
    // 3. First half: copy as-is
    for (let i = 0; i < mid; i++) {
      result.push(nums[i]);
    }
  
    // 4. Second half: reverse manually
    for (let i = nums.length - 1; i >= mid; i--) {
      result.push(nums[i]);
    }
  
    return result;
  }

// console.log(reArrangeArray([5, 2, 9, 1, 7, 6]))
console.log(reArrangeArray([5, 2, 9, 1, 7]))

