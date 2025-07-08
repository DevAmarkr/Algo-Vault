/*
Given a string, capitalize the first and last character of each word.
console.log(capitalizeFirstAndLast("hello world"));    // HellO WorlD
console.log(capitalizeFirstAndLast("a quick fox"));     // A QuicK FoX
console.log(capitalizeFirstAndLast("i"));               // I
*/

function capitalizeFirstAndLast(s){
    return s.split(' ')
    .map(str=>{
        if(str.length ===1) return str[0].toUpperCase()
        let first = str[0].toUpperCase()
        let last = str[str.length-1].toUpperCase()
        let middle = str.slice(1, -1)
        return `${first}${middle}${last}`
    }).join(' ')
}
console.log(capitalizeFirstAndLast("hello world")); 
console.log(capitalizeFirstAndLast("i"));   