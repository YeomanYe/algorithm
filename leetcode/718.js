/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */
var findLength = function(A, B) {
    let n = A.length;
    let m = B.length;
    let dp = Array.from(new Array(n + 1), () => (new Array(m + 1)).fill(0));
    let ans = 0;
    for(let i = n - 1;i >= 0;i--) {
        for(let j = m - 1;j >= 0;j--) {
            dp[i][j] = A[i] === B[j] ? dp[i + 1][j + 1] + 1 : 0;
            ans = Math.max(ans, dp[i][j]);
        }
    }
    return ans;
};

/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */
var findLength = function(A, B) {
    let maxLength = function (ia, ib, len) {
        let ret = 0, k = 0;
        for(let i = 0;i < len;i++) {
            if(A[ia + i] === B[ib + i]) {
                k++;
            } else {
                k = 0;
            }
            ret = Math.max(ret, k);
        }
        return ret;
    };
    let n = A.length, m = B.length;
    let ans = 0;
    for(let i = 0;i < n;i++) {
        let len = Math.min(n - i, m);
        ans = Math.max(ans, maxLength(i, 0, len));
    }
    for(let i = 0;i < m;i++) {
        let len = Math.min(n, m - i);
        ans = Math.max(ans, maxLength(0, i, len));
    }
    return ans;
};