export class DoublyLinkedListNode<T> {
  constructor(value?: T, prev?: DoublyLinkedListNode<T>, next?: DoublyLinkedListNode<T>);
  setValue(value: T): DoublyLinkedListNode<T>;
  getValue(): T;
  setNext(next: DoublyLinkedListNode<T>): DoublyLinkedListNode<T>;
  getNext(): DoublyLinkedListNode<T>;
  hasNext(): boolean;
  setPrev(prev: DoublyLinkedListNode<T>): DoublyLinkedListNode<T>;
  getPrev(): DoublyLinkedListNode<T>;
  hasPrev(): boolean;
}
