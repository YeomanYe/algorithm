/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function(n) {
    let map = new Map();
    let calMulti = function(num) {
        if (num <= 4) return num;
        else if(map.has(num)) return map.get(num);
        let max = 1;
        for(let i = 2;i <= Math.ceil(num / 2);i++) {
            max = Math.max(calMulti(i) * calMulti(num - i), max);
        }
        map.set(num, max);
        return max;
    };
    return n <= 3 ? n - 1 : calMulti(n);
};