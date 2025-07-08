
function swap(nums, l, r){
    while(l< r){
        [nums[l], nums[r]] = [nums[r], nums[l]]
        l++
        r--
    }
}


function rotateArrayByK(nums, k){
    k = k % nums.length
    let l, r

    //Rotate entire array
    l = 0
    r = nums.length-1
    swap(nums, l, r)
    l = 0
    r = k-1
    // Reverse first K-1
    swap(nums, l, r)
    l = k
    r = nums.length-1
    // Reverse rest
    swap(nums, l, r)
    return nums
}
console.log(rotateArrayByK([1,2,3,4,5,6,7], 3))