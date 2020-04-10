/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    let ans = false;
    let row = board.length;
    let col = board[0].length;
    let visited = Array.from(new Array(row), () => (new Array(col)).fill(false));
    let backtrack = function(i, j, k) {
        if(k === word.length || ans) {
            ans = true;
            return;
        }
        if(i < 0 || j < 0 || i >= row || j >= col || visited[i][j] || board[i][j] !== word[k]) return;
        visited[i][j] = true;
        backtrack(i - 1, j, k + 1);
        backtrack(i, j - 1, k + 1);
        backtrack(i + 1, j, k + 1);
        backtrack(i, j + 1, k + 1);
        visited[i][j] = false;
    };
    for(let i = 0;i < row;i++) {
        for(let j = 0;j < col;j++) {
            if(ans) return true;
            backtrack(i, j, 0);
        }
    }
    return ans;
};
