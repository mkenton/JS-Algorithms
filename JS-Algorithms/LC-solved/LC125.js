/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    function charArray(s){
      return  s.replace(/[^A-Za-z0-9]/g,"").toLowerCase().split('');}
  return charArray(s).reverse().join('') === charArray(s).join('')
};