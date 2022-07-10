// Strings To Do 1
// Write functions using the JavaScript language for all challenges. Use only a single JavaScript file for this assignment. Do not use built-in methods (unless otherwise instructed). (.length is a property, and is allowed.)

// Remove Blanks
// Create a function that, given a string, returns all of that string’s contents, but without blanks. 

// Examples:

// removeBlanks(" Pl ayTha tF u nkyM usi c ") => "PlayThatFunkyMusic"
// removeBlanks("I can not BELIEVE it's not BUTTER") => "IcannotBELIEVEit'snotBUTTER"


// function removeBlanks(str){
//   let newString = ''
//   for(let i = 0; i < str.length; i++){
//     if(str[i] !== ' '){
//       newString += str[i]
//     }
//   }
// return newString
// }

// console.log(removeBlanks('H e l  lo'))


// Get Digits
// Create a JavaScript function that given a string, returns the integer made from the string’s digits. You are allowed to use isNaN() and Number().

// Examples:

// getDigits("abc8c0d1ngd0j0!8") => 801008

// getDigits("0s1a3y5w7h9a2t4?6!8?0") => 1357924680


// function getDigits(str){
//   let digitString = ''
//   // loop through string
//   for (let i = 0; i < str.length; i++){
//      // if character in string is an integer add it to a new string
//      if( !isNaN(str[i])){
//       digitString += str[i]
//      }
//   }
//   // return new string
//   return digitString
 
  
// }

// console.log(getDigits('nn12njn3n69f5'))