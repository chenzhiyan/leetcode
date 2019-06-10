/*
 * @Author: 陈智焰 
 * @Date: 2019-06-10 23:44:01 
 * @Last Modified by:   陈智焰 
 * @Last Modified time: 2019-06-10 23:44:01 
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
 * @return {number[][]}
 */
var levelOrder = function (root) {
    if (!root)
        return [];
    queue.push(root);
    let level = 0;
    while (queue.length != 0) {
        levels[level] = [];
        let length = queue.length;
        for (let i = 0; i < length; i++) {
            let node = queue.shift();
            if (node.left != null) {
                queue.push(node.left);
            }
            if (node.right != null) {
                queue.push(node.right);
            }
            levels[level].push(node.val);
        }

        level++;
    }
    return levels;

};
var levels = [];
var queue = [];