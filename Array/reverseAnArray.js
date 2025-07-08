/*
Given an array arr, reverse its elements in-place (i.e., without using extra space if possible).
Input: [1, 2, 3, 4, 5]
Output: [5, 4, 3, 2, 1]
*/

function reverseAnArry(nums){
    return nums.reverse()
}
function reverseAnArry(nums){
    let left = 0;
    let right = nums.length-1
    while(left < right){
        [nums[left], nums[right]] = [nums[right], nums[left]]
        left++
        right--
    }
    return nums

}
console.log(reverseAnArry([1, 2, 3, 4, 5]))