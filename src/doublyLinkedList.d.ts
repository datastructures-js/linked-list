import { DoublyLinkedListNode } from './doublyLinkedListNode';

export class DoublyLinkedList<T> {
  constructor();
  insertFirst(value: T | DoublyLinkedListNode<T>): DoublyLinkedListNode<T>;
  insertLast(value: T | DoublyLinkedListNode<T>): DoublyLinkedListNode<T>;
  insertAt(position: number, value: T | DoublyLinkedListNode<T>): DoublyLinkedListNode<T>;
  insertBefore(value: T | DoublyLinkedListNode<T>, node?: DoublyLinkedListNode<T>): DoublyLinkedListNode<T>;
  insertAfter(value: T | DoublyLinkedListNode<T>, node?: DoublyLinkedListNode<T>): DoublyLinkedListNode<T>;
  removeFirst(): DoublyLinkedListNode<T>;
  removeLast(): DoublyLinkedListNode<T>;
  removeAt(position: number): DoublyLinkedListNode<T>;
  remove(node: DoublyLinkedListNode<T>): DoublyLinkedListNode<T>;
  removeEach(cb: (node: DoublyLinkedListNode<T>, position: number) => boolean): number;
  forEach(cb: (node: DoublyLinkedListNode<T>, position: number) => void): void;
  forEachReverse(cb: (node: DoublyLinkedListNode<T>, position: number) => void): void;
  find(cb: (node: DoublyLinkedListNode<T>) => boolean, startingNode?: DoublyLinkedListNode<T>): DoublyLinkedListNode<T>;
  findReverse(cb: (node: DoublyLinkedListNode<T>) => boolean, startingNode?: DoublyLinkedListNode<T>): DoublyLinkedListNode<T>;
  filter(cb: (node: DoublyLinkedListNode<T>, position: number) => boolean): DoublyLinkedList<T>;
  head(): DoublyLinkedListNode<T>;
  tail(): DoublyLinkedListNode<T>;
  count(): number;
  toArray(): DoublyLinkedListNode<T>[];
  isEmpty(): boolean;
  clear(): void;
  static fromArray<T>(values: T[] | DoublyLinkedListNode<T>[]): DoublyLinkedList<T>;
}
