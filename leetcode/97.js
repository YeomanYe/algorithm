/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function(s1, s2, s3) {
    if(s1.length + s2.length !== s3.length) return false;
    let finish = false;
    let backtrack = function (i, j, k) {
        if(k === s3.length) finish = true;
        if(finish) return;
        if(s1[i] === s3[k]) {
            backtrack(i + 1, j, k + 1);
        }
        if(finish) return;
        if(s2[j] === s3[k]) {
            backtrack(i, j + 1, k + 1);
        }
    };
    backtrack(0,0,0);
    return finish;
};