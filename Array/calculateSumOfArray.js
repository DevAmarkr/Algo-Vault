/*
Given an array of integers, calculate and return the sum of all elements.
Input: [1, 2, 3, 4, 5]
Output: 15
*/

// function calculateSumOfArray(nums){
//     return nums.reduce((acc, curr)=> acc+curr, 0)
// }

function calculateSumOfArray(nums){
    let sum = 0
    for(let num of nums){
        sum+=num
    }
    return sum
}
console.log(calculateSumOfArray([1, 2, 3, 4, 5]))
console.log(calculateSumOfArray([]))