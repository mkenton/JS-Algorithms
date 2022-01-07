/**
 * @param {number[]} nums
 * @return {number[]}
 */



var sortedSquares = function(nums) {
  soln = []
    let left = nums.length -1
    let right = 0
    let index = nums.length -1
      while (left >= right) {
        if (nums[left] * nums[left] >= nums[right] * nums[right]) {
            soln[index] = (nums[left] * nums[left]) 
            left--
        }
        else if (nums[left] * nums[left] < nums[right] * nums[right]) {
            soln[index]= (nums[right] * nums[right])
            right++
        }
          index--
      }
 
 return soln

};
