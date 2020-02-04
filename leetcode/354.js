/**
 * @param {number[][]} envelopes
 * @return {number}
 */
var maxEnvelopes = function(envelopes) {
    envelopes.sort((a,b) => {
        let d = a[0] - b[0];
        return d ? d : b[1] - a[1];
    });
    let dp = [];
    let max = 0;
    for(let i = 0;i < envelopes.length;i++){
        dp[i] = 1;
        for(let j = 0;j < i;j++){
            if(envelopes[j][1] < envelopes[i][1])
                dp[i] = Math.max(dp[i], dp[j] + 1);
        }
        max = Math.max(max, dp[i]);
    }
    return max;
};