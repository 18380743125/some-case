import {ListNode} from "../data/node";

/**
 * 遍历链表
 * @param head
 */
export function print(head: ListNode | null): void {
  const result: number[] = []
  while(head !== null) {
    result.push(head.val)
    head = head.next
  }
  console.log(result)
}

/**
 * 获取链表长度
 * @param head
 */
export function getSize(head: ListNode | null): number {
  let count = 0
  while(head !== null) {
    count++
    head = head.next
  }
  return count
}

/**
 * 反转链表
 * @param head
 */
export function reverseLinklist(head: ListNode | null): Array<ListNode | null> {
  if (head === null) return [head, head];
  let pre: ListNode | null = null;
  let curr: ListNode | null = head;
  while (curr !== null) {
    const next: ListNode | null = curr.next;
    curr.next = pre;
    pre = curr;
    curr = next;
  }
  return [pre, head];
}