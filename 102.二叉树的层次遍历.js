/*
 * @Author: 陈智焰 
 * @Date: 2019-07-02 09:57:11 
 * @Last Modified by:   陈智焰 
 * @Last Modified time: 2019-07-02 09:57:11 
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
    var leveler = []
    if (!root)
        return [];
    helper(root, 0);
    return leveler;
    function helper(root, level) {
        if (!root)
            return;
        if (leveler.length == level)
            leveler[level] = [];
        leveler[level].push(root.val);
        helper(root.left, level + 1);
        helper(root.right, level + 1);
    }


};

