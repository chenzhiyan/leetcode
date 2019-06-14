/*
 * @lc app=leetcode.cn id=143 lang=javascript
 *
 * [143] 重排链表
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
 * @return {void} Do not return anything, modify head in-place instead.
 */
/*step1反转后半部分链表
  step2 
       tmp = l.next;
       tm2 = r.next;
       l.next = r;
       r = r.next;



*/
var reorderList = function (head) {
    if (!head)
        return;
    //1.找到中间节点
    let slow = head;
    let fast = head;
    while (fast && fast.next) {
        fast = fast.next.next;
        slow = slow.next;
    }

    //2.反转后半部分链表
    let pre = slow;
    let curr = slow.next;
    slow.next = null;
    while (curr) {
        let tmp = curr.next;
        curr.next = pre;
        pre = curr;
        curr = tmp;
    }
    //3.开始拼首尾
    let start = head;
    while (start && pre.next) {
        let tmp1 = start.next;
        let tmp2 = pre.next;
        start.next = pre;
        pre.next = tmp1;
        start = tmp1;
        pre = tmp2;
    }
};

