/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(board, words) {
    let ans = [];
    let visited = Array.from(new Array(board.length), () => (new Array(board[0].length)).fill(false));
    let Trie = function() {
        this.data = new Array(26);
        this.isEnd = false;
        this.insert = function (c) {
            return this.data[c.charCodeAt(0) - 97] = this.data[c.charCodeAt(0) - 97] || new Trie();
        };
        this.get = function (c) {
            return this.data[c.charCodeAt(0) - 97];
        };
    };
    let root = new Trie();
    for(let w of words) {
        let p = root;
        for(let i = 0;i < w.length;i++) {
            p = p.insert(w[i]);
        }
        p.isEnd = true;
    }
    let temp = [];
    let searchWord = function (i, j, node) {
        if(i < 0 || i > board.length - 1 || j < 0 || j > board[i].length - 1 || visited[i][j]) return;
        let c = board[i][j];
        let p = node.get(c);
        if(!p) return;
        temp.push(c);
        visited[i][j] = true;
        if(p.isEnd && ans.indexOf(temp.join('')) < 0)
            ans.push(temp.join(''));
        searchWord(i - 1,j, p);
        searchWord(i,j - 1, p);
        searchWord(i + 1,j, p);
        searchWord(i,j + 1, p);
        temp.pop();
        visited[i][j] = false;
    };
    for(let i = 0;i < board.length;i++) {
        for(let j = 0;j < board[i].length;j++) {
            temp = [];
            searchWord(i, j, root);
        }
    }
    return  ans;
};