function minAnd2ndMin(nums){
    nums =  nums.sort((a, b)=>a-b)
    let firstMin = nums[0]
    let secondMin = Number.MIN_SAFE_INTEGER
    let i = 1
    while(i< nums.length){
        if(nums[i] !== secondMin){
            secondMin = nums[i]
            break
        }
    }
    if(secondMin === Number.MIN_SAFE_INTEGER){
        return [-1]
    }
    return [firstMin, secondMin]
}


function minAnd2ndMin(nums){
    nums =  nums.sort((a, b)=>a-b)
    let set = [...new Set(nums)]
    let firstMin = set[0]
    let secondMin = set[1] ?? Number.MIN_SAFE_INTEGER
    if(secondMin === Number.MIN_SAFE_INTEGER){
        return [-1]
    }
    return [firstMin, secondMin]
}

console.log(minAnd2ndMin([12, 25, 8, 55, 10, 33, 17, 11]))