function reverseString(str){
    //A base case where we want out function to stop
    //Assing to new String and shrink string from the end by each character
   if(str.length == 0) return ""
   return reverseString(str.slice(1)) + str[0]
}
console.log(reverseString('Hello'))