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


// Acronyms
// Create a function that, given a string, returns the string’s acronym (first letter of the word capitalized). You are allowed to use .split() and .toUpperCase().

// acronym(" there's no free lunch - gotta pay yer way. ") => "TNFL-GPYW". 

// acronym("Live from New York, it's Saturday Night!") => "LFNYISN".

// function acronyms(str){
//   let newArray = str.split(' ')
//   let newString = ''
//   // loop through the new Array
//   for (let i = 0; i < newArray.length; i++){
//        // grab the first letter of each word and capitalize it
//        newString += newArray[i][0]
//   }
//    // return the acronym
//   return newString
 
// }

// console.log(acronyms('Ultimate Fighting Championship'))

// Count Non-Spaces
// Create a function that, given a string, returns the number of non-space characters found in the string. 

// Examples:

// countNonSpaces("Honey pie, you are driving me crazy") => 29
// countNonSpaces("Hello world !") => 11


// function countNonSpaces(str){
//   // create a count variable
//   let count = 0
//   // loop through a given string
//   for (let i =0; i < str.length; i++){
//     // if there is a non-space character add it to count
//     if(str[i] !== ' '){
//       count++
//     }
//   }
//    // return count
//    return count
// }

// console.log(countNonSpaces('Honey pie, you are driving me crazy'))

// Remove Shorter Strings
// Create a function that, given an array of strings and a numerical value, returns an array that only contains strings longer than or equal to the given value.

// Examples:

// removeShorterStrings(['Good morning', 'sunshine', 'the', 'Earth', 'says', 'hello'], 4) => ['Good morning', 'sunshine', 'Earth', 'says', 'hello']
// removeShorterStrings(['There', 'is', 'a', 'bug', 'in', 'the', 'system'], 3) => ['There', 'bug', 'the', 'system']

// function removeShorterStrings(arr, val){
//   // new array 
//   let newArray = []
//   // loop through original array and if the item is greater than the value, add it to new array
//   for (let i = 0; i < arr.length; i++){
//     if(arr[i].length >= val){
//       newArray.push(arr[i])
//     }
//   }
//   // return new Array
//   return newArray
// }

// console.log(removeShorterStrings(['Good morning', 'sunshine', 'the', 'Earth', 'says', 'hello'], 4))

