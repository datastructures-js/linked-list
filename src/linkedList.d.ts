import { LinkedListNode } from './linkedListNode';

export class LinkedList<T> {
  constructor();
  insertFirst(value: T | LinkedListNode): LinkedListNode;
  insertLast(value: T | LinkedListNode): LinkedListNode;
  insertAt(position: number, value: T | LinkedListNode): LinkedListNode;
  removeFirst(): LinkedListNode;
  removeLast(): LinkedListNode;
  removeEach(cb: (node: LinkedListNode, position: number) => boolean): number;
  removeAt(position: number): LinkedListNode;
  forEach(cb: (node: LinkedListNode, position: number) => void): void;
  find(cb: (node: LinkedListNode) => boolean, startingNode?: LinkedListNode): LinkedListNode;
  filter(cb: (node: LinkedListNode, position: number) => boolean): LinkedList<T>;
  head(): LinkedListNode;
  count(): number;
  toArray(): T[];
  isEmpty(): boolean;
  clear(): void;
  static fromArray<T>(values: T[] | LinkedListNode[]): LinkedList<T>;
}
