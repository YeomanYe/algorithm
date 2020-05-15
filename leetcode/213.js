/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    let len = nums.length;
    if(len < 4) {
        return Math.max(...nums,0);
    }
    let dp1 = (new Array(len + 1)).fill(0);
    for(let i = 1;i < len;i++) {
        dp1[i + 1] = Math.max(nums[i] + dp1[i - 1], dp1[i]);
    }
    let dp2 = (new Array(len + 1)).fill(0);
    for (let i = 0;i < len - 1;i++) {
        dp2[i + 2] = Math.max(nums[i] + dp2[i], dp2[i + 1]);
    }
    return Math.max(dp1[len], dp2[len]);
};