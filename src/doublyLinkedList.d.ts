import { DoublyLinkedListNode } from './doublyLinkedListNode';

export class DoublyLinkedList<T extends DoublyLinkedListNode> {
  constructor();
  insertFirst(value: T): T;
  insertLast(value: T): T;
  insertAt(position: number, value: T): T;
  insertBefore(value: T, node?: T): T;
  insertAfter(value: T, node?: T): T;
  removeFirst(): T;
  removeLast(): T;
  removeAt(position: number): T;
  remove(node: T): T;
  removeEach(cb: (node: T, position: number) => boolean): number;
  forEach(cb: (node: T, position: number) => void): void;
  forEachReverse(cb: (node: T, position: number) => void): void;
  find(cb: (node: T) => boolean, startingNode?: T): T;
  findReverse(cb: (node: T) => boolean, startingNode?: T): T;
  filter(cb: (node: T, position: number) => boolean): DoublyLinkedList<T>;
  head(): T;
  tail(): T;
  count(): number;
  toArray(): T[];
  isEmpty(): boolean;
  clear(): void;
  static fromArray<T extends DoublyLinkedListNode>(values: T[]): DoublyLinkedList<T>;
}
