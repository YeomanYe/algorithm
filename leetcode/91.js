/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
    let len = s.length;
    if(s[0] === '0') return 0;
    let dp = new Array(len);
    dp[0] = 1;
    let s1 = parseInt(s.substring(0,2));
    if (s[1] === '0' && s1  > 26) return 0;
    dp[1] = s[1] === '0' || s1  > 26 ? 1 : 2;
    for(let i = 2;i < len;i++) {
        let c = parseInt(s[i]);
        let c0 = parseInt(s[i - 1]);
        if (!c && (c0 > 2 || c0 < 1)) {
            return 0;
        }else if (!c0 || c0 * 10 + c > 26) {
            dp[i] = dp[i - 1];
        } else if (!c) {
            dp[i] = dp[i - 2];
        } else {
            dp[i] = dp[i - 1] + dp[i - 2];
        }
    }
    return dp[len - 1];
};