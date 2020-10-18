/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    let ans = 0;
    for(let i = 0, len = nums.length;i < len;i++) {
        if (i === 0 && nums[i] > nums[i + 1]) {
            ans = i;
            break;
        } else if(i === len - 1 && nums[i - 1] < nums[i]) {
            ans = i;
            break;
        } else if(nums[i] > nums[i + 1] && nums[i] > nums[i - 1]) {
            ans = i;
            break;
        }
    }
    return ans;
};