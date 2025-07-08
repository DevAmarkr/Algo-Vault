// function containigMostWater(nums){
//   let maxArea= 0;
//   let left =0;
 
//   while(left < nums.length-1){
//     let right = left+1
//     while(right < nums.length){
//         let minHight =  Math.min(nums[left], nums[right])
//         let widhth =  right - left
//         let area =  widhth * minHight
//         maxArea = Math.max(maxArea, area)
//         right++
//     }
//     left++
//   }
//   return maxArea
// }

/*
Time Complexity: O(n^2)
Space Complexity: O(1)
*/


// Only Two Pointer Move left and right based on Greater Side, means 
//if left < right then left++
//else right--

function containigMostWater(nums){
    let maxArea = 0;
    let left = 0;
    let right = nums.length-1
    while(left < right){
        let widhth = right - left
        let height = Math.min(nums[left], nums[right])
        let currentArea =  widhth * height
        maxArea = Math.max(maxArea, currentArea)
        if(nums[left] < nums[right]) left++
        else right--
    }
    return maxArea
}





console.log(containigMostWater([1,8,6,2,5,4,8,3,7]))//49