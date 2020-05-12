/**
 * @param {number[]} days
 * @param {number[]} costs
 * @return {number}
 */
var mincostTickets = function(days, costs) {
    let minDay = days[0], maxDay= days[days.length - 1];
    let dp = (new Array(maxDay + 31)).fill(0);
    for(let d = maxDay, i = days.length - 1;d >= minDay;d--) {
        if(d === days[i]) {
            dp[d] = Math.min(dp[d + 1] + costs[0], dp[d + 7] + costs[1], dp[d + 30] + costs[2]);
            i--;
        } else {
            dp[d] = dp[d + 1];
        }
    }
    return dp[minDay];
};