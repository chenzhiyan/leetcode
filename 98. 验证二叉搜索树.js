/*
 * @Author: 陈智焰 
 * @Date: 2019-06-04 23:16:51 
 * @Last Modified by:   陈智焰 
 * @Last Modified time: 2019-06-04 23:16:51 
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */


/**
 * 
 * morris(非递归) 中序遍历二叉树,确保先遍历的数永远小于后遍历到的数
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function (root) {

    return Morris_InOrder(root);
};

var Morris_InOrder = function (root) {
    if (root == null)
        return true;
    let curr = root;
    let mini = -Infinity;
    while (curr != null) {
        if (curr.left == null) {
            if (curr.val <= mini) {
                return false;
            } else {
                mini = curr.val;
            }
            curr = curr.right

        } else {
            let tmp = curr.left;
            while (tmp.right != null && tmp.right != curr) {
                tmp = tmp.right;
            }
            if (tmp.right == null) {
                tmp.right = curr;
                curr = curr.left;
            } else {

                if (curr.val <= mini) {
                    return false;
                } else {
                    mini = curr.val;
                }
                tmp.right = null;
                curr = curr.right;
            }
        }
    }
    return true;

};