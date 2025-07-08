/*
Given a string containing letters and digits, extract all numbers (consecutive digits) and return their sum.
console.log(sumOfNumbersInString("abc12def3gh45"));     // 60
console.log(sumOfNumbersInString("no digits here"));    // 0
console.log(sumOfNumbersInString("1a2b3c4d5"));          // 15
console.log(sumOfNumbersInString("100xyz999"));         // 1099
console.log(sumOfNumbersInString(""));                  // 0

*/

function sumOfNumbersInString(s){
    let nums =  s.match(/\d+/g)
    if(nums){
        return nums.reduce((acc, curr)=> acc+ Number(curr),0)
    }
    return 0
}
console.log(sumOfNumbersInString("100xyz999"));