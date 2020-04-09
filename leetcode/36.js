/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    // 表示是否可访问的数组
    let rows = new Array(9);
    let cols = new Array(9);
    let boxes = new Array(9);
    for(let i = 0;i < 9;i++) {
        rows[i] = new Set();
        cols[i] = new Set();
        boxes[i] = new Set();
    }
    for(let i = 0;i < 9;i++) {
        for(let j = 0;j < 9;j++) {
            let c = board[i][j];
            if(c !== '.') {
                let row = rows[i];
                let col = cols[j];
                let box = boxes[parseInt(i / 3) * 3 + parseInt(j / 3)];
                if(row.has(c) || col.has(c) || box.has(c)) return false;
                row.add(c);
                col.add(c);
                box.add(c);
            }
        }
    }
    return true;
};