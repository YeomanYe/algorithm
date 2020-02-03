/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let len = prices.length;
    if(!prices.length) return 0;
    let dp = [[[0, -prices[0]], [0, -prices[0]]]];
    for(let i = 1;i < len;i++) {
        dp[i] = [];
        dp[i][0] = [];
        dp[i][1] = [];
        dp[i][0][0] = [];
        dp[i][1][1] = [];
    }
    for(let i = 1;i < len;i++){
        dp[i][0][0] = Math.max(dp[i - 1][0][0], dp[i - 1][0][1] + prices[i]);
        dp[i][0][1] = Math.max(dp[i - 1][0][1], -prices[i]);
        dp[i][1][0] = Math.max(dp[i - 1][1][0], dp[i - 1][1][1] + prices[i]);
        dp[i][1][1] = Math.max(dp[i - 1][1][1], dp[i - 1][0][0] - prices[i]);
    }
    return dp[len - 1][1][0]
};

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let dp_i_1_0 = 0, dp_i_1_1 = -Infinity,
      dp_i_2_0 = 0, dp_i_2_1 = -Infinity;
  prices.forEach(p => {
      dp_i_1_0 = Math.max(dp_i_1_0, dp_i_1_1 + p);
      dp_i_1_1 = Math.max(dp_i_1_1, -p);
      dp_i_2_0 = Math.max(dp_i_2_0, dp_i_2_1 + p);
      dp_i_2_1 = Math.max(dp_i_2_1, dp_i_1_0 - p);
  });
  return dp_i_2_0;
};