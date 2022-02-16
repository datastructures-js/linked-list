import { DoublyLinkedListNode } from './doublyLinkedListNode';

export class DoublyLinkedList<T> {
  constructor();
  insertFirst(value: T): DoublyLinkedListNode<T>;
  insertLast(value: T): DoublyLinkedListNode<T>;
  insertAt(position: number, value: T): DoublyLinkedListNode<T>;
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
  toArray(): T[];
  isEmpty(): boolean;
  clear(): void;
  static fromArray<T>(values: T[]): DoublyLinkedList<T>;
}
