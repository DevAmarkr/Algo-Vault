/*
Given an array of integers, count how many times each element appears and return the result in any format (object/map, console output, etc.).
[2, 3, 2, 5, 3, 2, 5, 1]
2 → 3 times  
3 → 2 times  
5 → 2 times  
1 → 1 time
*/

function countTheFrequency(nums){
    let map = new Map()
    for(let num of nums){
        map.set(num, (map.get(num)||0) + 1)
    }
    return Array.from(map.entries()).sort((a, b)=> a[1]-b[1])
}
console.log(countTheFrequency([2, 3, 2, 5, 3, 2, 5, 1]))