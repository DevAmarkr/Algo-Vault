/*
Given an array of integers, find the largest (maximum) number in the array.
Input: [4, 9, 2, 15, 6]
Output: 15

*/
// function findTheMax(nums){
// return Math.max(...nums)
// }

// function findTheMax(nums){
//     return [...new Set(nums)].sort((a, b)=> b-a)[0]
// }

// function findTheMax(nums){
//     let max = nums[0]
//     for(let num of nums){
//         if(num > max){
//             max = num
//         }
//     }
//     return max
// }
console.log(findTheMax([4, 9, 2, 15, 6]))//15
