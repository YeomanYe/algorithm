/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    let result = [];
    for(let s of path.split('/')){
        if(s === '..')
            result.pop();
        else if(s && s !== '.')
            result.push(s)
    }
    return '/' + result.join('/');
};