/**
 * @param {string} S
 * @return {string}
 */
var reorganizeString = function(S) {
    let sArr = S.split('');
    let len = S.length;
    let map = {};
    for(let i = 0,len = sArr.length;i < len;i++) {
        let c = sArr[i];
        let n = map[c] || 0;
        n++;
        map[c] = n;
    }
    let sortArr = Object.entries(map).sort((a, b) => b[1] - a[1]);
    if (sortArr[0][1] > ((S.length + 1) >> 1)) return '';
    let temp = [];
    let n = 0;
    for(let arr of sortArr) {
        let [c, i] = arr;
        while(i--) {
            if (n >= len) {
                n = 1;
            }
            temp[n] = c;
            n+=2;
        }
    }
    return temp.join('');
};