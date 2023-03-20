export class DoublyLinkedListNode {
  constructor(value?: any, prev?: DoublyLinkedListNode, next?: DoublyLinkedListNode);
  setValue(value: any): DoublyLinkedListNode;
  getValue(): any;
  setNext(next: DoublyLinkedListNode): DoublyLinkedListNode;
  getNext(): DoublyLinkedListNode;
  hasNext(): boolean;
  setPrev(prev: DoublyLinkedListNode): DoublyLinkedListNode;
  getPrev(): DoublyLinkedListNode;
  hasPrev(): boolean;
  clone(): DoublyLinkedListNode;
}
