# LinkedList

<img width="429" alt="Linked List" src="https://user-images.githubusercontent.com/6517308/35762715-5d00c9bc-0861-11e8-88f7-6e503a1fa3af.png">

# Table of Contents
* [Install](#install)
* [require](#require)
* [import](#import)
* [API](#api)
  * [constructor](#constructor)
  * [insertFirst](#insertfirstvalue)
  * [insertLast](#insertlastvalue-startingnode)
  * [insertAt](#insertatposition-value)
  * [forEach](#foreachcb)
  * [find](#findcb-startingnode)
  * [filter](#filtercb)
  * [toArray](#toarray)
  * [isEmpty](#isempty)
  * [head](#head)
  * [count](#count)
  * [removeFirst](#removefirst)
  * [removeLast](#removelast)
  * [removeAt](#removeatposition)
  * [removeEach](#removeeachcb)
  * [clear](#clear)
  * [LinkedList.fromArray](#linkedlistfromarrayvalues)
  * [LinkedListNode](#linkedlistnode)

## install
```sh
npm install --save @datastructures-js/linked-list
```

## require
```js
const {
  LinkedList,
  LinkedListNode
} = require('@datastructures-js/linked-list');
```

## import
```js
import {
  LinkedList,
  LinkedListNode
} from '@datastructures-js/linked-list';
```

## API

### constructor

##### JS
```js
const linkedList = new LinkedList();
```

##### TS
```js
const linkedList = new LinkedList<number>();
```

### .insertFirst(value)
inserts a node at the beginning of the list.

```js
console.log(linkedList.insertFirst(3).getValue()); // 3
console.log(linkedList.insertFirst(2).getValue()); // 2
console.log(linkedList.insertFirst(1).getValue()); // 1
```

### .insertLast(value[, startingNode])
inserts a node at the end of the list. it accepts an optional second param as the starting node which can be used to insert in O(1) runtime.

```js
const last4 = linkedList.insertLast(4);
console.log(last4.getValue()); // 4
console.log(last4.getNext()); // null

const last5 = linkedList.insertLast(5, last4); // O(1)
console.log(last5.getValue()); // 5
console.log(last5.getNext()); // null
```

### .insertAt(position, value)
inserts a node at specific position of the list. First (head) node is at position 0.

```js
const node2 = linkedList.insertAt(2, 5);
console.log(node2.getValue()); // 5
```

### .forEach(cb)
Traverse the list from beginning to end, and pass each node to the callback.

```js
linkedList.forEach(
  (node, position) => console.log(node.getValue(), position)
);
/*
1 0
2 1
5 2
3 3
4 4
5 5
*/
```

### .find(cb[, startingNode])
finds the first node that returns true from the callback or null if nothing found. It accepts a second param as the starting node to search.

```js
const node5 = linkedList.find(
  (node, position) => node.getValue() === 5
);
console.log(node5.getValue()); // 5
```

### .filter(cb)
returns a filtered linked list of all the nodes that returns true from the callback.

```js
const filterLinkedList = linkedList.filter(
  (node, position) => node.getValue() > 2
);
filterLinkedList.forEach(
  (node, position) => console.log(node.getValue(), position)
);
/*
5 0
3 1
4 2
5 3
*/
```

### .toArray()
converts the linked list into an array.

```js
console.log(linkedList.toArray()); // [1, 2, 5, 3, 4, 5]
```

### .isEmpty()
checks if the linked list is empty.

```js
console.log(linkedList.isEmpty()); // false
```

### .head()
returns the head node in the linked list.

```js
console.log(linkedList.head().getValue()); // 1
```

### .count()
returns the number of nodes in the linked list.

```js
console.log(linkedList.count()); // 6
```

### .removeFirst()
removes and returns the first node in the list.

```js
const removed = linkedList.removeFirst();
console.log(removed.getValue()); // 1
console.log(removed.getNext()); // null

console.log(linkedList.toArray()); // [2, 5, 3, 4, 5]
```

### .removeLast()
removes and returns the last node in the list.

```js
const removed = linkedList.removeLast();
console.log(removed.getValue()); // 5
console.log(removed.getNext()); // null

console.log(linkedList.toArray()); // [2, 5, 3, 4]
```

### .removeAt(position)
removes and returns the node at a specific position. First (head) node is at position 0.

```js
const removed = linkedList.removeAt(1);
console.log(removed.getValue()); // 5
console.log(removed.getNext()); // null

console.log(linkedList.toArray()); // [2, 3, 4]
```

### .removeEach(cb)
removes the nodes that returns true from a callback check and returns the number of removed nodes.

```js
const removedCount = linkedList.removeEach(
  (node, position) => node.getValue() > 2
);
console.log(removedCount); // 2
console.log(linkedList.toArray()); // [2]
```

### .clear()
clears the linked list.

```js
linkedList.clear();
console.log(linkedList.count()); // 0
console.log(linkedList.head()); // null
```

### LinkedList.fromArray(values)
creates a linked list from an array.

##### JS
```js
const ll = LinkedList.fromArray([1, 2, 3, 4, 5]);
```

##### TS
```js
const ll = LinkedList.fromArray<number>([1, 2, 3, 4, 5]);
```

### LinkedListNode&lt;T&gt;

#### setValue

#### getValue

#### setNext

#### getNext

#### hasNext
