/*
 * @Author: 陈智焰 
 * @Date: 2019-06-05 23:25:53 
 * @Last Modified by: 陈智焰
 * @Last Modified time: 2019-06-05 23:41:47
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
    if (!root)
        return true;
    return isMirror(root.left, root.right);
};
var isMirror = function (t1, t2) {
    if (t1 == null && t2 == null) return true;
    if (t1 == null || t2 == null) return false;
    return (left.val == right.val) && isMirror(t1.left, t2.right) && isMirror(t1.right, t2.left);
    //注意 由于js会自动添加分号,在某些编译器下,下面这种写法会出问题
    // return (left.val==right.val)
    //  &&isMirror(t1.left,t2.right) 
    //  &&isMirror(t1.right,t2.left);
}

