/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    let matchChar = function (i,j) {
        if(j >= p.length ) return i === s.length;
        let firstMatch = i !== s.length && (s[i] === p[j] || p[j] === '.');
        if(p.length - j > 1 && p[j + 1] === '*') {
            return matchChar(i, j + 2) || (firstMatch && matchChar(i + 1, j));
        } else {
            return firstMatch && matchChar(i + 1, j + 1);
        }
    };
    return matchChar(0, 0);
};