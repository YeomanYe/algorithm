/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    let result = [];
    if(!s.length || s.length < p.length) {
        return result;
    }
    let dict1 = (new Array(26)).fill(0);
    let dict2 = (new Array(26)).fill(0);
    let pLen = p.length;
    for(let n of p) {
        dict1[n.charCodeAt(0) - 97]++;
    }
    let compare = (a, b) => {
        for(let i = 0;i < a.length;i++) {
            if(a[i] !== b[i])
                return false;
        }
        return true;
    };
    for(let i = 0;i < pLen;i++) {
        dict2[s[i].charCodeAt(0) - 97]++;
    }
    if (compare(dict2, dict1)) {
        result.push(0);
    }
    for(let i = pLen;i < s.length;i++) {
        dict2[s[i - pLen].charCodeAt(0) - 97]--;
        dict2[s[i].charCodeAt(0) - 97]++;
        if (compare(dict1, dict2)) {
            result.push(i - pLen + 1);
        }
    }
    return result;
};