/*
 * @Author: 陈智焰 
 * @Date: 2019-06-10 23:44:20 
 * @Last Modified by:   陈智焰 
 * @Last Modified time: 2019-06-10 23:44:20 
 */

/**
 * Definition for a binary tree node. public class TreeNode { int val; TreeNode
 * left; TreeNode right; TreeNode(int x) { val = x; } }
 */
class Solution {
    List<List<Integer>> levers = new ArrayList<List<Integer>>();

    public List<List<Integer>> levelOrder(TreeNode root) {
        if (root == null)
            return levers;
        helper(root, 0);
        return levers;
    }

    private void helper(TreeNode root, int lever) {
        if (levers.size() == lever) {
            levers.add(new ArrayList<Integer>());
        }
        levers.get(lever).add(root.val);
        if (root.left != null) {
            helper(root.left, lever + 1);
        }
        if (root.right != null) {
            helper(root.right, lever + 1);
        }
    }
}