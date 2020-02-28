/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(k, prices) {
    let n = prices.length;
    if(!k || n < 2) return 0;
    let maxP = function () {
        let p = 0;
        for(let i = 1;i < prices.length;i++){
            if(prices[i] > prices[i - 1]) {
                p += prices[i] - prices[i - 1];
            }
        }
        return p;
    };
    if(k >= prices.length / 2) {
        return maxP();
    }
    let dp = Array.from(new Array(n), () => Array.from(new Array(k), () => (new Array(2)).fill(0)));
    for(let i = 0;i < k;i++) {
        dp[0][i][1] = -prices[0];
    }
    for(let i = 1;i < n;i++) {
        for(let j = 0;j < k;j++) {
            if(j === 0) {
                dp[i][0][1] = Math.max(-prices[i], dp[i - 1][0][1]);
            } else {
                dp[i][j][1] = Math.max(dp[i - 1][j - 1][0] - prices[i], dp[i - 1][j][1]);
            }
            dp[i][j][0] = Math.max(dp[i - 1][j][1] + prices[i], dp[i - 1][j][0]);
        }
    }
    return dp[n - 1][k - 1][0];
};
