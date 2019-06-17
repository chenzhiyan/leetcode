/*
 * @Author: 陈智焰 
 * @Date: 2019-06-14 14:15:36 
 * @Last Modified by:   陈智焰 
 * @Last Modified time: 2019-06-14 14:15:36 
 */
/*
 * @lc app=leetcode.cn id=108 lang=javascript
 *
 * [108] 将有序数组转换为二叉搜索树
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
    return helper(0, nums.length - 1, nums);
};
var helper = function (low, hight, nums) {
    if (low > hight) {
        return null;
    }
    let mid = Math.floor(low + (hight - low) / 2);
    let p = new TreeNode(nums[mid]); 
    p.left = helper(low, mid-1, nums);
    p.right = helper(mid + 1, hight, nums);
    
    return p;
}
