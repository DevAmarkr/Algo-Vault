// var longestConsecutive = function(nums) {
//     if (nums.length === 0) return 0;
    
//     nums.sort((a, b) => a - b);
    
//     let max = 1;
//     let current = 1;
    
//     for (let i = 1; i < nums.length; i++) {
//         if (nums[i] === nums[i - 1]) {
//             continue; // skip duplicates
//         } else if (nums[i] === nums[i - 1] + 1) {
//             current++;
//         } else {
//             max = Math.max(max, current);
//             current = 1; // reset

//         }
//     }
    
//     return Math.max(max, current); // final check (in case last streak is longest)
// };

function longestConsecutive(nums){
    let set =  new Set(nums)
    let max =  0;
    for(let num of set){
        let currentNum = num
        let currentStreak =  1
        if(!set.has(num-1)){
            while(set.has(currentNum+1)){
                currentNum++
                currentStreak++
           }
        }
        max = Math.max(max, currentStreak) 
    }
  return max
}


//  console.log(longestConsecutive([100,4,200,1,3,2]))
 console.log(longestConsecutive([0,3,7,2,5,8,4,6,0,1]))

