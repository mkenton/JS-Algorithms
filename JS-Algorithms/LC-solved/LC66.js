var plusOne = function (digits) {
    for (let i = digits.length - 1; i >= 0; i--) {
        //standard add digit. e.g. [3,4] => [3,5]. Or, if else statement has been reached, this carries the 1 and returns the digits. Otherwise, it reaches another 9 and iterates again.
        if (digits[i] < 9) {
            digits[i] = digits[i] + 1
            return digits
        } else {
            //if 9, set 0. carry 1
            digits[i] = 0
        }
    }

    // if input is all 9s, algorithm above will return all zeroes of length digits.length, which is not valid. To deal with this case, add a return statement with digits unshifted by 1 (e.g. [9,9,9]) => [1,0,0,0]
    digits.unshift(1)
    return digits
}