/**
 * @param {character[][]} board
 * @param {number[]} click
 * @return {character[][]}
 */
var updateBoard = function(board, click) {
    let calX = (x, y) => {
        let dx = [1, 1, -1, -1, 0, 0, 1, -1];
        let dy = [1, -1, 1, -1, 1, -1, 0, 0];
        let q = [];
        if (board[x][y] === 'E') {
            let xNum = 0;
            for(let i = 0;i < 8;i++) {
                let nx = dx[i] + x;
                let ny = dy[i] + y;
                if (nx >= board.length || nx < 0 || ny >= board[0].length || ny < 0) continue;
                if (board[nx][ny] === 'M') xNum++;
                else q.push([nx, ny]);
            }
            if(xNum) {
                board[x][y] = xNum + '';
            } else {
                board[x][y] = 'B';
                for(let [x1, y1] of q) {
                    calX(x1, y1);
                }
            }
        }
    };
    let x = click[0];
    let y = click[1];
    if (board[x][y] === 'E') {
        calX(x, y);
    } else {
        board[x][y] = 'X';
    }
    return board;
};