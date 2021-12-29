// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
    if (n === 0) {
        return 0
    }
    let stringInt = n + "";
    let length = stringInt.length


    while (stringInt[length - 1] == "0") {
        stringInt = stringInt.slice(0, -1)
    }

    let reversed = ""

    for (let character of stringInt) {
        reversed = character + reversed
    }

    // move negative sign to beginning
    if (n < 0) {
        reversed = "-" + reversed.slice(0, -1);
    }
    //ALT SOLUTION:  multiply return statement by Math.sign(n)

    return parseInt(reversed)
}



module.exports = reverseInt;
