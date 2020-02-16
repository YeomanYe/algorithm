/**
 * Initialize your data structure here.
 */
var Trie = function() {
    this.end = false;
    this.children = new Array(26);
};

/**
 * Inserts a word into the trie.
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    let t = this;
    for(let i = 0;i < word.length;i++) {
        let children = t.children;
        let index = word[i].charCodeAt() - 97;
        t = children[index] = children[index] || new Trie();
    }
    t.end = true;
};

/**
 * Returns if the word is in the trie.
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    let t = this;
    for(let i = 0;i < word.length;i++) {
        let index = word[i].charCodeAt() - 97;
        t = t.children[index];
        if(!t) return false;
    }
    return t && t.end;
};

/**
 * Returns if there is any word in the trie that starts with the given prefix.
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    let t = this;
    for(let i = 0;i < prefix.length;i++) {
        let index = prefix[i].charCodeAt() - 97;
        t = t.children[index];
        if(!t) return false;
    }
    return true;
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */