/*
 * @Author: 陈智焰 
 * @Date: 2019-06-11 19:35:47 
 * @Last Modified by: 陈智焰
 * @Last Modified time: 2019-06-11 19:46:16
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
 * @return {ListNode}
 */
var reverseList = function (head) {
    if (head == null || head.next == null) return head;
    let p = reverseList(head.next);
    head.next.next = head;
    head.next = null;
    return p;

};
