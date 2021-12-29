// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    
    // // CLASSIC FOR LOOP
    // let revStr = ""
    // for (let i = str.length - 1; i >= 0; i--) {
    //     revStr = revStr + str[i]
    // }
    // return revStr

    // // USING NEWER SYNTAX
    // for (let character of str) {
    //     revStr = character + revStr
    // }
    // return revStr

    // USING REDUCE HELPER
    return str.split('').reduce((revStr, char) => char + revStr, '');
    
}

module.exports = reverse;
