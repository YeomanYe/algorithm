/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let curSum = nums[0];
    let sum = curSum;
    for(let i = 1;i < nums.length;i++) {
        curSum = Math.max(nums[i], curSum + nums[i]);
        sum = Math.max(curSum, sum);
    }
    return sum;
};