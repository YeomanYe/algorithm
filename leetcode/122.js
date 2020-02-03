/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let len = prices.length;
    if(!prices.length) return 0;
    let dp = [[0, -prices[0]]];
    for(let i = 1;i < len;i++) {
        dp[i] = [];
    }
    for(let i = 1;i < len;i++) {
        dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i]);
        dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] - prices[i]);
    }
    return dp[len - 1][0];
};