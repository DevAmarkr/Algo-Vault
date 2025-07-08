function findMostFrequent(nums, k) {
  let map = new Map();
  for (let num of nums) {
    map.set(num, (map.get(num) || 0) + 1);
  }
  let sortedNums = Array.from(map.entries()).sort((a, b)=> b[1]- a[1])
  return sortedNums.slice(0,k).map(nums=> nums[0])

}

console.log(findMostFrequent([1, 1, 1, 2, 2, 3], 2));
console.log(findMostFrequent([1], 1));