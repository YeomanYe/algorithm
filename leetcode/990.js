/**
 * @param {string[]} equations
 * @return {boolean}
 */
var equationsPossible = function(equations) {
    let unicon = (i1, i2) => {
        col[find(i1)] = find(i2);
    };
    let find = (i) => {
        while(col[i] !== i) {
            col[i] = col[col[i]];
            i = col[i];
        }
        return i;
    };
    let col = [];
    for(let i = 0;i < 26;i++) {
        col[i] = i;
    }
    for(let e of equations) {
        if(e.charAt(1) === '=') {
            let i1 = e.charCodeAt(0) - 97;
            let i2 = e.charCodeAt(3) - 97;
            unicon(i1, i2);
        }
    }
    for(let e of equations) {
        if(e.charAt(1) === '!') {
            let i1 = e.charCodeAt(0) - 97;
            let i2 = e.charCodeAt(3) - 97;
            if(find(i1) === find(i2)) {
                return false
            }
        }
    }
    return true;
};