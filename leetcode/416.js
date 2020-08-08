/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
    let len = nums.length;
    if (len === 0) {
        return false;
    }

    let sum = 0;
    for(let n of nums) {
        sum += n;
    }

    if(sum % 2 === 1) {
        return false;
    }

    let target = sum / 2;
    let dp = Array.from(new Array(len), () => (new Array(target + 1)).fill(false));
    if (nums[0] <= target) {
        dp[0][nums[0]] = true;
    }

    for (let i = 1; i < len; i++) {
        for (let j = 0; j <= target; j++) {
            dp[i][j] = dp[i - 1][j];

            if (nums[i] === j) {
                dp[i][j] = true;
                continue;
            }
            if (nums[i] < j) {
                dp[i][j] = dp[i - 1][j] || dp[i - 1][j - nums[i]];
            }
        }
    }
    return dp[len - 1][target];
};