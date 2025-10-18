/**
 * @param {string} s
 * @return {boolean}
 */

let isValid = function(s) {
    let stack = [];
    let map = {
        '(': ')',
        '{': '}',
        '[': ']'
    };

    for (let char of s) {
        if (char in map) {
            stack.push(char);
        } else {
            let top = stack.pop();
            if (map[top] !== char) {
                return false;
            }
        }
    }
    return stack.length === 0;
};

console.log(isValid("()[]{}"));