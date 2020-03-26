/**
 * @param {number[]} A
 * @return {number}
 */
var minIncrementForUnique = function(A) {
    let ans = 0;
    A.sort((a,b) => a - b);
    for(let i = 1, len = A.length;i < len;i++) {
        if(A[i] <= A[i - 1]) {
            let d = A[i - 1] - A[i] + 1;
            ans += d;
            A[i] += d;
        }
    }
    return ans;
};

/**
 * @param {number[]} A
 * @return {number}
 */
var minIncrementForUnique = function(A) {
    let ans = 0;
    let pos = [];
    let findPos = function (i) {
        let a = pos[i];
        if(a === undefined) {
            pos[i] = i;
            return i;
        }
        let index = findPos(a + 1);
        pos[i] = index;
        return index;
    };
    for(let n of A) {
        let p = findPos(n);
        ans += p - n;
    }
    return ans;
};