function findMedian(nums){
    nums = nums.sort((a,b)=> a-b)
    let n = nums.length
    let mid = Math.floor(n/2)
    if(n%2 !== 0){
        return nums[mid]
    }else{
        //Return avrage
        return (nums[mid-1] + nums[mid])/2
    }
}
console.log(findMedian([2,4,1,3,5]))
console.log(findMedian([2,5,1,7]))