export class LinkedListNode {
  constructor(value?: any, next?: LinkedListNode);
  setValue(value: any): LinkedListNode;
  getValue(): any;
  setNext(next: LinkedListNode): LinkedListNode;
  getNext(): LinkedListNode;
  hasNext(): boolean;
  clone(): LinkedListNode;
}
