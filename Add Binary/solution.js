/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
let addBinary = function(a, b) {
  let carry = 0;
  let result = [];
  let i = a.length - 1;
  let j = b.length - 1;

  while (i >= 0 || j >= 0 || carry) {
    const sum = carry + (i >= 0 ? parseInt(a[i]) : 0) + (j >= 0 ? parseInt(b[j]) : 0);
    result.push(sum % 2);
    carry = Math.floor(sum / 2);

    i--;
    j--;
  }
  return result.reverse().join('');
    
};

console.log(addBinary("101", "1")); // Output: "110"