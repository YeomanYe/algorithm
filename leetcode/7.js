/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let min = -Math.pow(2,31);
    let max = Math.pow(2,31) - 1;
    let ans = 0;
    while(x) {
        ans *= 10;
        let remainder = x % 10;
        x = parseInt(x / 10);
        ans += remainder;
    }
    if(ans < min || ans > max) {
        ans = 0;
    }
    return ans;
};