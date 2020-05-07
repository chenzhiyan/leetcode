/*
 * @lc app=leetcode.cn id=572 lang=javascript
 *
 * [572] 另一个树的子树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} s
 * @param {TreeNode} t
 * @return {boolean}
 */
var isSubtree = function (s, t) {
    if (s == null && t == null)
        return true;
    if (s == null || t == null)
        return false;
    return isSmaeTree(s,t)||isSubtree(s.right,t)||isSubtree(s.left,t)
};

var isSmaeTree = function (s, t) {
    if (s == null && t == null)
        return true;
    if(s==null||t==null)
        return false;
    return s.val == t.val && isSmaeTree(s.right, t.right) && isSmaeTree(s.left, t.left)
}
// @lc code=end

