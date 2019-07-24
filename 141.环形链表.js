/*
 * @lc app=leetcode.cn id=141 lang=javascript
 *
 * [141] 环形链表
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
    if (head == null || head.next == null)
        return false;
    
    let r = reverse(head);

    return r.next == head.next;
};
var reverse = function (head) {
    let pre = null;
    let curr = head;
    while (curr) {
        let tmp = curr.next;
        curr.next = pre;
        pre = curr;
        curr = tmp;
    }
    return pre;
}

