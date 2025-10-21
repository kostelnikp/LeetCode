// Definition for a binary tree node.
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

function inorderTraversal(root) {
  const result = [];
  const stack = [];
  let depth = 0;

  let current = root;

  while(current) {
    stack.push(current);
    current = current.left;
    depth++;
  }

  while (stack.length) {
    const node = stack.pop();
    result.push(node.val, depth);
    depth--;
    current = node.right;
    while (current) {
      stack.push(current);
      current = current.left;
      depth++;
    }
  }

  return result;
}


/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
  console.log(inorderTraversal(p).toString());
  console.log(inorderTraversal(q).toString());
  return inorderTraversal(p).toString() === inorderTraversal(q).toString();

}

//[5,4,1,null,1,null,4,2,null,2]
const p = new TreeNode(5);
p.left = new TreeNode(4);
p.right = new TreeNode(1);
p.left.right = new TreeNode(1);
p.right.right = new TreeNode(4);
p.left.right.left = new TreeNode(2);
p.right.right.left = new TreeNode(2);

//[5,1,4,4,null,1,null,null,2,null,2]
const q = new TreeNode(5);
q.left = new TreeNode(1);
q.right = new TreeNode(4);
q.left.left = new TreeNode(4);
q.right.left = new TreeNode(1);
q.left.left.right = new TreeNode(2);
q.right.left.right = new TreeNode(2);

console.log(isSameTree(p, q));
