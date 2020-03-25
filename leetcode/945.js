/**
 * @param {number[]} A
 * @return {number}
 */
var minIncrementForUnique = function(A) {
    let set = new Set();
    let ans = 0;
    for(let n of A) {
        if(!set.has(n)) {
            set.add(n);
        } else {
            while(set.has(n)) {
                n++;
                ans++;
            }
            set.add(n);
        }
    }
    return ans;
};