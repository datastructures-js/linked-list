import { LinkedListNode } from './linkedListNode';

export class LinkedList<T> {
  constructor();
  insertFirst(value: T): LinkedListNode<T>;
  insertLast(value: T): LinkedListNode<T>;
  insertAt(position: number, value: T): LinkedListNode<T>;
  removeFirst(): LinkedListNode<T>;
  removeLast(): LinkedListNode<T>;
  removeEach(cb: (node: LinkedListNode<T>, position: number) => boolean): number;
  removeAt(position: number): LinkedListNode<T>;
  forEach(cb: (node: LinkedListNode<T>, position: number) => void): void;
  find(cb: (node: LinkedListNode<T>) => boolean, startingNode?: LinkedListNode<T>): LinkedListNode<T>;
  filter(cb: (node: LinkedListNode<T>, position: number) => boolean): LinkedList<T>;
  head(): LinkedListNode<T>;
  count(): number;
  toArray(): T[];
  isEmpty(): boolean;
  clear(): void;
  static fromArray<T>(values: T[]): LinkedList<T>;
}
