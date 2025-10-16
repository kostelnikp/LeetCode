/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  let position = digits.length - 1;
  let remainder = (digits[position] + 1) / 10 >= 1 ? 1 : 0;
  digits[position] = (digits[position] + 1) % 10;
  position--;

  while (remainder === 1) {
    if (position < 0) {
      digits.unshift(1);
      return digits;
    }
    remainder = (digits[position] + 1) / 10 >= 1 ? 1 : 0;
    digits[position] = (digits[position] + 1) % 10;
    position--;
  }

  return digits;
};

  console.log(plusOne([0]));
