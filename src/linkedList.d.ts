import { LinkedListNode } from './linkedListNode';

export class LinkedList<T extends LinkedListNode> {
  constructor();
  insertFirst(value: T): T;
  insertLast(value: T): T;
  insertAt(position: number, value: T): T;
  removeFirst(): T;
  removeLast(): T;
  removeEach(cb: (node: T, position: number) => boolean): number;
  removeAt(position: number): T;
  forEach(cb: (node: T, position: number) => void): void;
  find(cb: (node: T) => boolean, startingNode?: T): T;
  filter(cb: (node: T, position: number) => boolean): LinkedList<T>;
  head(): T;
  count(): number;
  toArray(): (T)[];
  isEmpty(): boolean;
  clear(): void;
  static fromArray<T extends LinkedListNode>(values: T[]): LinkedList<T>;
}
