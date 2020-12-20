/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var subarraysDivByK = function(A, K) {
    let m = (new Array(K)).fill(0);
    let ans = 0;
    let sum = 0;
    m[0] = 1;
    for(let a of A) {
        sum += a;
        let d = (sum % K + K) % K;
        ans += m[d];
        m[d]++;
    }
    return ans;
};