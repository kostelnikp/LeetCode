/**
 * @param {string[]} strs
 * @return {string}
 */

let longestCommonPrefix = function(strs) {
    let sorted = strs.sort();
    let prefix = "";

    for (let i = 0; i < sorted[0].length; i++) {
        if (sorted[0][i] === sorted[sorted.length - 1][i]) {
            prefix += sorted[0][i];
        } else {
            break;
        }
    }
    return prefix;
};

console.log(longestCommonPrefix(["abab","aba","abc"])); // "ab"