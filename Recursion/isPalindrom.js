function isPalindrom(str){
    if(str.length === 0 || str.length === 1){
        return true
    }
    if(str.charAt(0) === str.charAt(str.length-1)){
        return isPalindrom(str.slice(1,str.length-1))
    }
    return false
}
console.log(isPalindrom('racecar'))
// console.log('racecar'.slice(1, ))