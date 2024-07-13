import { LinkedListNode } from './linkedListNode';

export class LinkedList<T> {
  constructor();
  insertFirst(value: T | LinkedListNode): T extends LinkedListNode ? T : LinkedListNode;
  insertLast(value: T | LinkedListNode): T extends LinkedListNode ? T : LinkedListNode;
  insertAt(position: number, value: T | LinkedListNode): T extends LinkedListNode ? T : LinkedListNode;
  removeFirst(): T extends LinkedListNode ? T : LinkedListNode;
  removeLast(): T extends LinkedListNode ? T : LinkedListNode;
  removeEach(cb: (node: T extends LinkedListNode ? T : LinkedListNode, position: number) => boolean): number;
  removeAt(position: number): T extends LinkedListNode ? T : LinkedListNode;
  forEach(cb: (node: T extends LinkedListNode ? T : LinkedListNode, position: number) => void): void;
  find(
    cb: (node: T extends LinkedListNode ? T : LinkedListNode) => boolean,
    startingNode?: T extends LinkedListNode ? T : LinkedListNode
  ): T extends LinkedListNode ? T : LinkedListNode;
  filter(cb: (node: T extends LinkedListNode ? T : LinkedListNode, position: number) => boolean): LinkedList<T>;
  head(): T extends LinkedListNode ? T : LinkedListNode;
  count(): number;
  toArray(): (T extends LinkedListNode ? T : LinkedListNode)[];
  isEmpty(): boolean;
  clear(): void;
  static fromArray<T>(values: (T extends LinkedListNode ? T : LinkedListNode)[]): LinkedList<T>;
}
