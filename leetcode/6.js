/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    let ans = '';
    let len = s.length;
    if(len <= numRows || numRows === 1) return s;
    let n = 0;
    let gap = 2 * numRows - 2;
    while(n < numRows) {
        let i = 0;
        let index = n + i * gap;
        do {
            ans += s[index];
            i++;
            if(n !== 0 && n !== numRows - 1) {
                let gap2 = gap - 2 * n;
                let index2 = index + gap2;
                if(index2 < len) ans += s[index2];
            }
            index = n + i * gap;
        } while(index < len);
        n++;
    }
    return ans;
};