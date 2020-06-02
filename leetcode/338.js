/**
 * @param {number} num
 * @return {number[]}
 */
var countBits = function(num) {
    let ans = [];
    ans[0] = 0;
    for(let i = 1;i <= num;i++) {
        if (i % 2 === 0) {
            ans[i] = ans[i / 2];
        } else {
            ans[i] = ans[i - 1] + 1;
        }
    }
    return ans;
};