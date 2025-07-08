/*
Given an array, find the next greater element for each element in the array. If no greater element exists, return -1

Input:
nums = [4, 5, 2, 10, 8]
Output:
[5, 10, 10, -1, -1]
*/

// function findNextGreatorElement(nums){
//     let left =0;
//     let right = 0;
//     let output = Array(nums.length).fill(-1)
//     while(right < nums.length){
//         if(nums[right] > nums[left]){
//             output[left] = nums[right]
//             left++
//         }else{
//             right++
//         }
//     }
//     return output
// }


// function findNextGreatorElement(nums){
//     let output = Array(nums.length).fill(-1)
//     for(let i =0; i < nums.length; i++){
//         for(let j = i+1; j < nums.length; j++){
//             if(nums[j]> nums[i]){
//                 output[i] = nums[j]
//                 break
//             }
//         }
//     }
//     return output
// }

function findNextGreaterElement(nums) {
    let output = Array(nums.length).fill(-1);
    let stack = [];

    for (let i = 0; i < nums.length; i++) {
        while (stack.length && nums[i] > nums[stack[stack.length - 1]]) {
            const index = stack.pop();
            output[index] = nums[i];
        }
        stack.push(i);
    }

    return output;
}




console.log(findNextGreaterElement([4, 5, 2, 10, 8]))