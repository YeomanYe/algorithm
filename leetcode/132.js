/**
 * @param {string} s
 * @return {number}
 */
var minCut = function(s) {
    let map = new Map();
    let isPal = function (i, j) {
        let key = i+'@'+j;
        if(map.has(key)) return map.get(key);
        while(j > i) {
            if(s[i] === s[j]) {
                j--;
                i++;
            } else {
                map.set(key, false);
                return false;
            }
        }
        map.set(key, true);
        return true;
    };
    let cntMap = new Map();
    let calCount = function (i) {
        if(cntMap.has(i)) return cntMap.get(i);
        if(isPal(i, s.length - 1)) return 0;
        let min = Infinity;
        for(let j = i;j < s.length - 1;j++) {
            if(isPal(i, j)) {
                min = Math.min(min,1 + calCount(j + 1));
            }
        }
        cntMap.set(i, min);
        return min;
    };
    return calCount(0);
};