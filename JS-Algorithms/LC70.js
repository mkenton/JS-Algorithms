/**
 * @param {number} n
 * @return {number}
 */
 var climbStairs = function(n) {
    //end condition - total steps = n. cannot overshoot. try working backwards
    // starting from 2nd to last step only has 1 way to goal n steps (+1 step)
    // starting from 3rd to last step, there are 2 ways ([+1, +1] or [+2])
    // starting from 4th to last step, there are 3 ways [+1, +1, +1] or [ +1, +2] or [+2 ,+1]
    // starting from 5th to last ... same as above, but combine the above two ways (2 ways + 3 ways)
    // ...fibonacci. 
    // n=0, return 1. n=1, return 1. n=2, return 2 (1 + )...
    const arr=[1,1]
        for(let i=2; i <= n; i++) {
            arr[i] = arr[i-1] + arr[i-2]
        }
    return arr[n]
    
};