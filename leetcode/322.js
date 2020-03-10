/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
    let finish = false;
    let ans = Infinity;
    coins.sort((a, b) => a - b);
    let calCount = function (k, count) {
        if (amount === 0) {
            ans = Math.min(ans, count);
            finish = true;
            return true;
        }
        for (let i = parseInt(amount / coins[k]); i >= 0 && i + count < ans; i--) {
            amount -= i * coins[k];
            calCount(k - 1, count + i);
            amount += i * coins[k];
        }
    };
    calCount(coins.length - 1, 0);
    if (!finish) ans = -1;
    return ans;
};