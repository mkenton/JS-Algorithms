// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
    function reduceStr(str){
      return str.replace(/[^A-Za-z0-9]/g,"").toLowerCase().split('').sort().join("");
    }
  return reduceStr(stringA) === reduceStr(stringB)
  
  }

module.exports = anagrams;
