
// Definition for a binary tree node.
 function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
      this.left = (left===undefined ? null : left)
      this.right = (right===undefined ? null : right)

}
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
  if (!root) return 0;

  let maxDepth = 0;

  let current = root;

  const stack = [{node: current, depth: 1}];

  while (stack.length) {
    const {node, depth} = stack.pop();
    if (node) {
      stack.push({node: node.left, depth: depth + 1});
      stack.push({node: node.right, depth: depth + 1});
      maxDepth = Math.max(depth, maxDepth);
    }
  }

  return maxDepth;
};


//[0,2,4,1,null,3,-1,5,1,null,6,null,8]
const root = new TreeNode(0);
root.left = new TreeNode(2);
root.right = new TreeNode(4);
root.left.left = new TreeNode(1);
root.right.left = new TreeNode(3);
root.right.right = new TreeNode(-1);
root.right.right.left = new TreeNode(5);
root.right.right.right = new TreeNode(1);
root.right.right.left.right = new TreeNode(6);
root.right.right.right.right = new TreeNode(8);

console.log(maxDepth(root));