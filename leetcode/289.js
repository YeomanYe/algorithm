/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function(board) {
    let zeroArr = [];
    let oneArr = [];
    let dx = [1, -1, 0, 0, 1, -1, 1, -1];
    let dy = [0, 0, 1, -1, -1, 1, 1, -1];
    let row = board.length, col = board[0].length;
    for(let i = 0;i < row;i++) {
        for(let j = 0;j < col;j++) {
            let sum = 0;
            for(let k = 0;k < 8;k++) {
                let nx = i + dx[k];
                let ny = j + dy[k];
                if(nx < 0 || nx >= row || ny < 0 || ny >= col) continue;
                sum += board[nx][ny];
            }
            if(board[i][j] === 1) {
                if(sum < 2 || sum > 3) {
                    zeroArr.push([i,j]);
                }
            } else {
                if(sum === 3) {
                    oneArr.push([i, j]);
                }
            }
        }
    }
    for(let [i,j] of oneArr) {
        board[i][j] = 1;
    }
    for(let [i,j] of zeroArr) {
        board[i][j] = 0;
    }
};