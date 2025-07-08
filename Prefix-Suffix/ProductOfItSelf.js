var productExceptSelf = function (nums) {
    let n =  nums.length;
    let prefix = Array(n).fill(1)
    let suffix = Array(n).fill(1)
    let result =  []

    for(let i = 1; i < n; i++){
        let product = prefix[i-1] * nums[i-1]
        prefix[i] = product
    }
    for(let i = n-2; i>=0; i--){
        let product = suffix[i+1] * nums[i+1]
        suffix[i] = product
    }
    for(let i = 0; i < n; i++){
        let product = prefix[i] * suffix[i]
        result[i] = product
    }
    return result.map(val=> Object.is(val, -0)? 0: val)

};
console.log(productExceptSelf([1, 2, 3, 4]));
console.log(productExceptSelf([-1,1,0,-3,3]))
