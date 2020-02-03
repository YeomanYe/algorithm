/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let minPri = Infinity;
    let maxPro = 0;
    for(let i = 0;i < prices.length; i++) {
        let p = prices[i];
        if(p < minPri) {
            minPri = p;
        }else if(p - minPri > maxPro) {
            maxPro = p - minPri;
        }
    }
    return maxPro;
};

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    if(prices.length === 0) return 0;
    let dp = [[0, -prices[0]]];
    let len = prices.length;
    for(let i = 1;i < len;i++){
        dp[i] = [];
    }
    for(let i = 1;i < prices.length; i++){
        dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i]);
        dp[i][1] = Math.max(dp[i - 1][1], -prices[i]);
    }
    return dp[prices.length - 1][0];
};