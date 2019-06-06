/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
    if (!root)
        return [];
    helper(root, 0);
    return levels;
};
var levels = [];
var helper = function (r, level) {
    if (!r)
        return;
    if (levels.length == level)
        levels.push([]);
    levels[level].push(r.val);
    if (r.left != null)
        helper(r.left, level + 1);
    if (r.right != null)
        helper(r.right, level + 1);



}
