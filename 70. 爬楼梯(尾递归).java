/*
 * @Author: 陈智焰 
 * @Date: 2019-06-10 22:58:54 
 * @Last Modified by:   陈智焰 
 * @Last Modified time: 2019-06-10 22:58:54 
 */
class Solution {
    public int climbStairs(int n) {
        int[] memo = new int[n + 1];
        return climb_stairs(0, n, memo);
    }

    private int climb_stairs(int i, int n, int[] memo) {
        if (i > n)
            return 0;
        if (i == n)
            return 1;
        if (memo[i] == 0)
            memo[i] = climb_stairs(i + 1, n, memo) + climb_stairs(i + 2, n, memo);
        return memo[i];

    }
}