/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let cache = [1, 2];
    let calCount = (n) => {
        if(cache[n - 1]) return cache[n - 1];
        return cache[n - 1] = calCount(n - 1) + calCount(n - 2);
    };
    return calCount(n);
};