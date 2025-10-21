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
var inorderTraversal = function (root) {
  const result = [];
  const stack = [];

  let current = root;

  while (current) {
    stack.push(current);
    current = current.left;
  }

  while (stack.length) {
    const node = stack.pop();
    result.push(node.val);
    current = node.right;
    while (current) {
      stack.push(current);
      current = current.left;
    }
  }

  return result;
};

const root = new TreeNode(1);
root.right = new TreeNode(2);
root.right.left = new TreeNode(3);

console.log(inorderTraversal(root)); // Output: [1,3,2]
