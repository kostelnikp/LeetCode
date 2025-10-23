// Definition for a binary tree node.
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function (root) {
  let current = root;
  let result = [];
  let stack = [];

  while(current) {
    stack.push(current);
    result.push(current.val);
    current = current.left;
  }

  while(stack.length) {
    let node = stack.pop();
    current = node.right;

    while (current) {
      stack.push(current);
      result.push(current.val);
      current = current.left;
    }
  }

  return result;
};
