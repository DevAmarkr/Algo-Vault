/*
Given a string expression that may contain parentheses or brackets like (), {}, or [], return the same string with all brackets removed.

console.log(removeBrackets("(a+b)"));            // "a+b"
console.log(removeBrackets("{x+y}*(z)"));        // "x+y*z"
console.log(removeBrackets("[1+(2*3)]"));        // "1+2*3"
console.log(removeBrackets("a+b"));              // "a+b" (no brackets)
console.log(removeBrackets("((()))"));  
*/


// function removeBrackets(s){
//     return s.replace(/[()[\]\{}]/g, '')
// }

function removeBrackets(s){
    let bracketSet = new Set(['(', ')','[',']','{','}'])
    let newStr = ''
    for(let char of s){
        if(!bracketSet.has(char)){
            newStr+=char
        }
    }
    return newStr
}




console.log(removeBrackets("(a+b)"));            // "a+b"
console.log(removeBrackets("{x+y}*(z)"));        // "x+y*z"
console.log(removeBrackets("[1+(2*3)]"));        // "1+2*3"
console.log(removeBrackets("a+b"));              // "a+b" (no brackets)
console.log(removeBrackets("((()))"));  