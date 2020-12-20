/**
 * @param {number[][]} A
 * @return {number}
 */
var matrixScore = function(A) {
    let row = A.length;
    let col = A[0].length;
    let colNeedRev = (i) => {
        let c = 0;
        for(j = 0;j < row;j++) {
            if (A[j][i]) c++;
        }
        return row - c > c;
    };
    let revA = (i, vert) => {
        if (vert) {
            for(j = 0;j < row;j++) {
                A[j][i] = 1 - A[j][i];
            }
        } else {
            for(j = 0;j < col;j++) {
                A[i][j] = 1 - A[i][j];
            }
        }
    };
    for(let i = 0;i < row;i++) {
        if (!A[i][0]) {
            revA(i);
        }
    }
    for(let i = 0;i < col;i++) {
        if (colNeedRev(i, true)) {
            revA(i, true);
        }
    }
    let ans = 0;
    for(let a of A) {
        ans += parseInt(a.join(''), 2);
    }
    return ans;
};