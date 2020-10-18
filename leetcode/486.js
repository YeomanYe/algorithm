/**
 * @param {number[]} nums
 * @return {boolean}
 */
var PredictTheWinner = function(nums) {
    const map = new Map();
    const helper = (i, j) => {
        const k = i + '-' + j;
        if (map.has(k)) {
            return map.get(k);
        }
        if (i === j) {
            return nums[i];
        }
        const pi = nums[i] - helper(i + 1, j);
        const pj = nums[j] - helper(i, j - 1);
        const ans = Math.max(pi, pj);
        map.set(k, ans);
        return ans;
    };
    return helper(0, nums.length - 1) >= 0;
};

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var PredictTheWinner = function(nums) {
    let len = nums.length;
    let dp = Array.from({length: len}, () => (new Array(len)).fill(0));
    for (let i = 0; i < len; i++) {  // base case
        dp[i][i] = nums[i];
    }
    // iteration
    for (let i = len - 2; i >= 0; i--) {
        for (let j = i + 1; j < len; j++) {
            const pickI = nums[i] - dp[i + 1][j];
            const pickJ = nums[j] - dp[i][j - 1];
            dp[i][j] = Math.max(pickI, pickJ);
        }
    }
    return dp[0][len - 1] >= 0;
};