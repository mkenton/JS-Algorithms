//Leetcode 704 with extensive explanation

/* Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

You must write an algorithm with O(log n) runtime complexity. */

var search = function (nums, target) {
    //initialize left and right pointers
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        //calculate mid point
        let mid = Math.floor((right + left) / 2);

        //if middle is target, return the mid...
        if (nums[mid] === target) {
            return mid;
        }
        //otherwise check if target is larger than value at mid, and update left pointer to (midpoint+1) - no need to include mid in the new search because we already know it's not the answer). Now search space has been cut in half (quintessential for binary search)
        if (target > nums[mid]) {
            left = mid + 1;

        //if target is SMALLER, udpate right pointer... mutatis mutandis
        }
        else {
            right = mid - 1;
        }
    }
    //prompt requests a return vaue of -1 if value is not found. This will happen when while loop (left <= right) and the condition (nums[mid] === target) never returned true. While loop exits, so return -1 follows directly after the while loop.
    return -1
};