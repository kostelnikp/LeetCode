/**
 * @param {string} s
 * @return {number}
 */
let lengthOfLastWord = function (s) {
  let trimmedString = s.trim();
  return trimmedString.length - trimmedString.lastIndexOf(" ") - 1;
};

console.log(lengthOfLastWord("   fly me   to   the moon  ")); // 5
