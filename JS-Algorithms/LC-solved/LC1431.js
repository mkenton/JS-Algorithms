/*There are n kids with candies. You are given an integer array candies, where each candies[i] represents the number of candies the ith kid has, and an integer extraCandies, denoting the number of extra candies that you have.
Return a boolean array result of length n, where result[i] is true if, after giving the ith kid all the extraCandies, they will have the greatest number of candies among all the kids, or false otherwise.
Note that multiple kids can have the greatest number of candies.*/

/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */

// return boolean array corresponding to true/false values of the n kids, where
// true when candies[i] + extra candies = max among all candies[i]

// 
var kidsWithCandies = function (candies, extraCandies) {
    //(consider reviewing Math.max on the array with spread operator - useful javascript shortcut)
    function findMax(candies) {
        let max = 0
        for (let kid of candies) {
            if (kid > max) {
                max = kid
            }
        }
        return max
    }
    greatestCandies = findMax(candies);
    result = []
    for (let kid of candies) {
        result.push(kid + extraCandies >= greatestCandies);
    }
    return result
};