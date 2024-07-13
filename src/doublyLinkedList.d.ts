import { DoublyLinkedListNode } from './doublyLinkedListNode';

export class DoublyLinkedList<T> {
  constructor();
  insertFirst(value: T | DoublyLinkedListNode): T extends DoublyLinkedListNode ? T : DoublyLinkedListNode;
  insertLast(value: T | DoublyLinkedListNode): T extends DoublyLinkedListNode ? T : DoublyLinkedListNode;
  insertAt(position: number, value: T | DoublyLinkedListNode): T extends DoublyLinkedListNode ? T : DoublyLinkedListNode;
  insertBefore(value: T | DoublyLinkedListNode, node?: T extends DoublyLinkedListNode ? T : DoublyLinkedListNode): T extends DoublyLinkedListNode ? T : DoublyLinkedListNode;
  insertAfter(value: T | DoublyLinkedListNode, node?: T extends DoublyLinkedListNode ? T : DoublyLinkedListNode): T extends DoublyLinkedListNode ? T : DoublyLinkedListNode;
  removeFirst(): T extends DoublyLinkedListNode ? T : DoublyLinkedListNode;
  removeLast(): T extends DoublyLinkedListNode ? T : DoublyLinkedListNode;
  removeAt(position: number): T extends DoublyLinkedListNode ? T : DoublyLinkedListNode;
  remove(node: T extends DoublyLinkedListNode ? T : DoublyLinkedListNode): T extends DoublyLinkedListNode ? T : DoublyLinkedListNode;
  removeEach(cb: (node: T extends DoublyLinkedListNode ? T : DoublyLinkedListNode, position: number) => boolean): number;
  forEach(cb: (node: T extends DoublyLinkedListNode ? T : DoublyLinkedListNode, position: number) => void): void;
  forEachReverse(cb: (node: T extends DoublyLinkedListNode ? T : DoublyLinkedListNode, position: number) => void): void;
  find(
    cb: (node: T extends DoublyLinkedListNode ? T : DoublyLinkedListNode) => boolean,
    startingNode?: T extends DoublyLinkedListNode ? T : DoublyLinkedListNode
  ): T extends DoublyLinkedListNode ? T : DoublyLinkedListNode;
  findReverse(
    cb: (node: T extends DoublyLinkedListNode ? T : DoublyLinkedListNode) => boolean,
    startingNode?: T extends DoublyLinkedListNode ? T : DoublyLinkedListNode
  ): T extends DoublyLinkedListNode ? T : DoublyLinkedListNode;
  filter(cb: (node: T extends DoublyLinkedListNode ? T : DoublyLinkedListNode, position: number) => boolean): DoublyLinkedList<T>;
  head(): T extends DoublyLinkedListNode ? T : DoublyLinkedListNode;
  tail(): T extends DoublyLinkedListNode ? T : DoublyLinkedListNode;
  count(): number;
  toArray(): (T extends DoublyLinkedListNode ? T : DoublyLinkedListNode)[];
  isEmpty(): boolean;
  clear(): void;
  static fromArray<T>(values: (T extends DoublyLinkedListNode ? T : DoublyLinkedListNode)[]): DoublyLinkedList<T>;
}
