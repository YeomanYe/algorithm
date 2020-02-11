/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    let cache = {};
    let calCount = function (m, n) {
        let k1 = m + '-' + n;
        let k2 = n + '-' + m;
        if(m === 1 || n === 1) {
            return 1;
        } else if(cache[k1]) {
            return cache[k1];
        }
        cache[k1] = cache[k2] = calCount(m - 1, n) + calCount(m, n - 1);
        return cache[k1];
    };
    return calCount(m, n);
};