/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(board, words) {
    let ans = [];
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
};