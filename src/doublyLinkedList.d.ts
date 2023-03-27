import { DoublyLinkedListNode } from './doublyLinkedListNode';

export class DoublyLinkedList<T> {
  constructor();
  insertFirst(value: T | DoublyLinkedListNode): DoublyLinkedListNode;
  insertLast(value: T | DoublyLinkedListNode): DoublyLinkedListNode;
  insertAt(position: number, value: T | DoublyLinkedListNode): DoublyLinkedListNode;
  insertBefore(value: T | DoublyLinkedListNode, node?: DoublyLinkedListNode): DoublyLinkedListNode;
  insertAfter(value: T | DoublyLinkedListNode, node?: DoublyLinkedListNode): DoublyLinkedListNode;
  removeFirst(): DoublyLinkedListNode;
  removeLast(): DoublyLinkedListNode;
  removeAt(position: number): DoublyLinkedListNode;
  remove(node: DoublyLinkedListNode): DoublyLinkedListNode;
  removeEach(cb: (node: DoublyLinkedListNode, position: number) => boolean): number;
  forEach(cb: (node: DoublyLinkedListNode, position: number) => void): void;
  forEachReverse(cb: (node: DoublyLinkedListNode, position: number) => void): void;
  find(cb: (node: DoublyLinkedListNode) => boolean, startingNode?: DoublyLinkedListNode): DoublyLinkedListNode;
  findReverse(cb: (node: DoublyLinkedListNode) => boolean, startingNode?: DoublyLinkedListNode): DoublyLinkedListNode;
  filter(cb: (node: DoublyLinkedListNode, position: number) => boolean): DoublyLinkedList<T>;
  head(): DoublyLinkedListNode;
  tail(): DoublyLinkedListNode;
  count(): number;
  toArray(): T[];
  isEmpty(): boolean;
  clear(): void;
  static fromArray<T>(values: T[] | DoublyLinkedListNode[]): DoublyLinkedList<T>;
}
