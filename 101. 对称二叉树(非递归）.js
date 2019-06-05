/*
 * @Author: 陈智焰 
 * @Date: 2019-06-05 23:25:53 
 * @Last Modified by:   陈智焰 
 * @Last Modified time: 2019-06-05 23:25:53 
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
    let q = [];
    q.push(root.left);
    q.push(root.right);
    while (q.length != 0) {
        let a = q.shift();
        let b = q.shift();
        if (b == null && a == null) continue;
        if (b == null || a == null||a.val!=b.val) return false;
        q.push(a.right);
        q.push(b.left);
        q.push(a.left);
        q.push(b.right);
    }
    return true;
};