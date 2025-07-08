/*
Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

Example 1:
Input: nums = [1,2,3,1]
Output: true

Example 2:
Input: nums = [1,2,3,4]
Output: false

Example 3:
Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true

Constraints:
1 <= nums.length <= 105
-109 <= nums[i] <= 109
*/

/*
Time Complexity Analysis:

1. Sort & Compare Method:
   - Time Complexity: O(n log n) - due to sorting operation
   - Space Complexity: O(1) - only using a single variable for iteration
   - Note: This modifies the input array due to sorting

2. Frequency Counter (Map) Method:
   - Time Complexity: O(n) - single pass through array to build map
   - Space Complexity: O(n) - storing frequency counts in map
   - Note: More memory efficient than Set for large arrays with many duplicates

3. Set Method:
   - Time Complexity: O(n) - single pass to create Set
   - Space Complexity: O(n) - storing all unique elements in Set
   - Note: Most concise solution but uses more memory than Map for arrays with many duplicates
*/








//Sort & Compare Method
var containsDuplicate = function (nums) {
  nums = nums.sort()
  let i = 0;
  while (i < nums.length) {
      if (nums[i] === nums[i + 1]) return true
      i++
  }
  return false
};

//Frequency Counter
var containsDuplicate = function(nums){
    let map =  new Map
    let i = 0;
    for(let i = 0; i < nums.length; i++){
        map.set(nums[i], (map.get(nums[i]) || 0)+1)
    }
    for(let [key, value] of map.entries()){
        if(value > 1) return true
    }
    return false
}

//Set 
var containsDuplicate = function(nums){
      return new Set(nums).size !== nums.length
}


