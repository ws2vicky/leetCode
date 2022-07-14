/**
 * @descriptio 142 环形链表2
 * @author 氧化氢
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
 * @soulution 通过哈希表写
 */
var detectCycle = function (head) {
  if (!head) return null
  let slow = head
  let map = new Map()
  while (slow) {
    if (map.has(slow)) return slow
    map.set(slow, 1)
    slow = slow.next
  }

  return null
};