/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    let map = {};
    for(let i = 0, len = s.length;i < len;i++) {
        let c = s[i];
        let n = map[c] || 0;
        map[c] = n + 1;
    }
    const entries = Object.entries(map);
    entries.sort((a, b) => b[1] - a[1]);
    let ans = '';
    for(let i = 0,len = entries.length;i < len;i++) {
        let [c, n] = entries[i];
        for(let j = 0;j < n;j++) {
            ans += c;
        }
    }
    return ans;
};