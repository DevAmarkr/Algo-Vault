// var threeSum = function (nums) {
//   let sort = nums.sort((a, b) => a - b);
//   let set = new Set();
//   let result = [];
//   for (let i = 0; i < sort.length - 2; i++) {
//     let left = i + 1;
//     let right = sort.length - 1;

//     while (left < right) {
//       const sum = sort[i] + sort[left] + sort[right];
//       if (sum === 0) {
//         result.push([sort[i], sort[left], sort[right]]);
//         while (left < right && sort[left] === sort[left + 1]) left++;
//         while (left < right && sort[right] === sort[right - 1]) right--;
//         left++;
//         right--;
//       } else if (sum < 0) {
//         left++;
//       } else {
//         right--;
//       }
//     }
//   }
//   return result;
// };

// console.log(threeSum([-1, 0, 1, 2, -1, -4]));

var threeSum = function (nums) {
  let sort = nums.sort((a, b) => a - b);
  let result = [];
  for (let i = 0; i < sort.length - 2; i++) {
    if (i > 0 && sort[i] === sort[i - 1]) continue;

    let left = i + 1;
    let right = sort.length - 1;

    while (left < right) {
      const sum = sort[i] + sort[left] + sort[right];
      if (sum < 0) {
        left++;
      } else if (sum > 0) {
        right--;
      } else {
        result.push([sort[i], sort[left], sort[right]]);
        while (sort[left] === sort[left + 1] && left < right) left++;
        while (sort[left] === sort[right - 1] && left < right) right--;
        left++
        right--
      }
    }
  }
  return result;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
