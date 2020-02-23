/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function(board) {
        let len = board.length;
        let cVisited = Array.from(new Array(len), _ => (new Array(len)).fill(true));
        let finish = false;
        for(let i = 0;i < len;i++) {
            for(let j = 0;j < len;j++) {
                cVisited[i][j] = board[i][j] === '.';
            }
        }
        let delSudoku = function(i, j) {
            board[i][j] = '.';
        };
        let canPlace = function(i, j, num) {
            if(board[i].indexOf(num) >= 0) return false;
            for(let index = 0;index < len;index++) {
                if(board[index][j] === num) return false;
            }
            let oi = i > 5 ? 6 : i > 2 ? 3 : 0;
            let oj = j > 5 ? 6 : j > 2 ? 3 : 0;
            for(let i = oi, len1 = i + 3;i < len1;i++) {
                for(let j = oj, len2 = j + 3;j < len2;j++) {
                    if(board[i][j] === num) return false;
                }
            }
            return true;
        };
        let placeSudoku = function (i, j, num) {
            if(i >= 0 && j >= 0) board[i][j] = num;
            let oi = i, oj = j;
            i = i || 0;
            j = j || 0;
            while((oi === i && oj === j ) || (i < len && !cVisited[i][j])) {
                if(j + 1 === len) {
                    j = 0;
                    i++;
                }
                else j++;
            }
            if(i === len) {
                finish = true;
                return;
            }
            for(let num = 1;num < 10;num++){
                let s = num + '';
                if(canPlace(i, j, s)) {
                    placeSudoku(i, j, s);
                    if(finish) return ;
                    delSudoku(i,j);
                }
            }
        };
        placeSudoku();
    };