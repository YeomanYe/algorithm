/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    let map1 = new Map();
    for(let c of s1){
        let n = map1.get(c) || 0;
        map1.set(c, n + 1);
    }
    let map2 = new Map();
    let count = 0;
    function compMap() {
        if(count !== s1.length) return false;
        for(let [k,v] of map1.entries()) {
            if(map2.get(k) !== v) return false;
        }
        return true;
    }
    let queue = [];
    for(let c2 of s2) {
        let num = map1.get(c2);
        if(num > 0) {
            if(count === s1.length) {
                let c = queue.shift();
                let n = map2.get(c);
                map2.set(c, n - 1);
                count--;
            }
            let n = map2.get(c2) || 0;
            map2.set(c2, n + 1);
            count++;
            queue.push(c2);
        } else {
            count = 0;
            queue = [];
            map2.clear();
        }
        if(count === s1.length && compMap()){
            return true;
        }
    }
    return compMap();
};

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    let x1 = [];
    let x2 = [];
    for(let i = 0;i < 26;i ++) {
        x1[i] = 0;
        x2[i] = 0;
    }
    let compare = function () {
        for(let i = 0;i < 26;i++){
            if(x1[i] !== x2[i]) return false;
        }
        return true;
    };
    let a = 'a'.charCodeAt(0);
    let len1 = s1.length;
    for(let i = 0;i < len1;i++){
        let index = s1.charCodeAt(i) - a;
        x1[index]++;
        index = s2.charCodeAt(i) - a;
        x2[index]++;
    }

    for (let i = len1;i < s2.length;i++){
        if(compare()) {
            return true;
        }
        let index = s2.charCodeAt(i - len1) - a;
        x2[index] --;
        index = s2.charCodeAt(i) - a;
        x2[index] ++;
    }
    return compare();
};