/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
    let row = board.length;
    if(row === 0) return;
    let col = board[0].length;
    let dfs = function (i, j) {
        if(i < 0 || j < 0 || i >= row || j >= col || board[i][j] === '#' || board[i][j] === 'X')
            return;
        board[i][j] = '#';
        dfs(i - 1, j);
        dfs(i + 1, j);
        dfs(i, j - 1);
        dfs(i, j + 1);
    };
    for(let i = 0;i < row;i++) {
        for (let j = 0;j < col;j++) {
            let isEdge = i === 0 || j === 0 || i === row - 1 || j === col - 1;
            if(isEdge && board[i][j]) {
                dfs(i, j);
            }
        }
    }
    for(let i = 0; i < row;i++) {
        for(let j = 0; j < col;j++) {
            if(board[i][j] === 'O') {
                board[i][j] = 'X';
            }
            if(board[i][j] === '#') {
                board[i][j] = 'O';
            }
        }
    }
};