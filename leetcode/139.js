/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    let len = s.length;
    let dp = (new Array(len + 1)).fill(false);
    dp[0] = true;
    for(let i = 1;i <= len;i++) {
        for(let j = 0;j < i;j++) {
            if(dp[j] && wordDict.indexOf(s.substring(j, i)) >= 0 ) {
                dp[i] = true;
            }
        }
    }
    return dp[len];
};