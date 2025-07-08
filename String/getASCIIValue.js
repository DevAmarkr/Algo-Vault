/*
Given a character c, return its ASCII value.
The ASCII value is the numeric code that represents the character in the ASCII table.
*/

function getAsciiValue(c){
  if(!c.length || typeof c !== 'string'){
    throw new Error('Input must be a single character');
  }
  return c.charCodeAt(0)
}

console.log(getAsciiValue("A"))
console.log(getAsciiValue("a"))
console.log(getAsciiValue("0"))

