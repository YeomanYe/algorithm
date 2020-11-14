/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    if (k < 0) {
        return;
    }
    while(k--) {
        const n = nums.pop();
        nums.unshift(n);
    }
};