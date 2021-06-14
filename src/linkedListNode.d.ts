export class LinkedListNode<T> {
  constructor(value?: T, next?: LinkedListNode<T>);
  setValue(value: T): LinkedListNode<T>;
  getValue(): T;
  setNext(next: LinkedListNode<T>): LinkedListNode<T>;
  getNext(): LinkedListNode<T>;
  hasNext(): boolean;
}
