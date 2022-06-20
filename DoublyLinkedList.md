# DoublyLinkedList

# Contents
* [Install](#install)
* [require](#require)
* [import](#import)
* [API](#api)
  * [constructor](#constructor)
  * [insertFirst](#insertfirst)
  * [insertLast](#insertlast)
  * [insertAt](#insertat)
  * [forEach](#foreach)
  * [forEachReverse](#foreachreverse)
  * [find](#find)
  * [findReverse](#findreverse)
  * [filter](#filter)
  * [toArray](#toarray)
  * [isEmpty](#isempty)
  * [head](#head)
  * [tail](#tail)
  * [count](#count)
  * [removeFirst](#removefirst)
  * [removeLast](#removelast)
  * [remove(nod](#remove)
  * [removeAt](#removeat)
  * [removeEach](#removeeach)
  * [clear](#clear)
  * [DoublyLinkedList.fromArray](#doublylinkedlistfromarray)
  * [DoublyLinkedListNode](#doublylinkedlistnode)
* [Build](#build)
* [License](#license)

## install
```sh
npm install --save @datastructures-js/linked-list
```

## require
```js
const {
  DoublyLinkedList,
  DoublyLinkedListNode,
} = require('@datastructures-js/linked-list');
```

## import
```js
import {
  DoublyLinkedList,
  DoublyLinkedListNode,
} from '@datastructures-js/linked-list';
```

## API

### constructor

##### JS
```js
const doublyLinkedList = new DoublyLinkedList();
```

##### TS
```js
const doublyLinkedList = new DoublyLinkedList<number>();
```

### .insertFirst(value)
inserts a node at the beginning of the list.

```js
console.log(doublyLinkedList.insertFirst(3).getValue()); // 3
console.log(doublyLinkedList.insertFirst(2).getValue()); // 2
console.log(doublyLinkedList.insertFirst(1).getValue()); // 1
```

### .insertLast(value)
inserts a node at the end of the list.

```js
const last4 = doublyLinkedList.insertLast(4);
console.log(last4.getValue()); // 4
console.log(last4.getNext()); // null
console.log(last4.getPrev().getValue()); // 3

const last5 = doublyLinkedList.insertLast(5);
console.log(last5.getValue()); // 5
console.log(last5.getNext()); // null
console.log(last5.getPrev().getValue()); // 4
```

### .insertAt(position, value)
inserts a node at specific position of the list. First (head) node is at position 0.

```js
const node2 = doublyLinkedList.insertAt(2, 5);
console.log(node2.getValue()); // 5
```

### .forEach(cb)
Traverse the list from beginning to end, and pass each node to the callback.

```js
doublyLinkedList.forEach(
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

### .forEachReverse(cb)
Traverse the list from end to beginning, and pass each node to the callback.

```js
doublyLinkedList.forEachReverse(
  (node, position) => console.log(node.getValue(), position)
);
/*
5 5
4 4
3 3
5 2
2 1
1 0
*/
```

### .find(cb[, startingNode])
Finds the first node that returns true from the callback or null if nothing found. It accepts a second param as the starting node to search.

```js
const node5 = doublyLinkedList.find(
  (node, position) => node.getValue() === 5
);
console.log(node5.getValue()); // 5
```

### .findReverse(cb[, startingNode])
Reversevly finds the first node that returns true from the callback or null if nothing found. It accepts a second param as the starting node to search.

```js
const node5 = doublyLinkedList.findReverse(
  (node, position) => node.getValue() === 5
);
console.log(node5.getValue()); // 5
```

### .filter(cb)
returns a filtered doubly linked list of all the nodes that returns true from the callback.

```js
const filterLinkedList = doublyLinkedList.filter(
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
converts the doubly linked list into an array.

```js
console.log(doublyLinkedList.toArray()); // [1, 2, 5, 3, 4, 5]
```

### .isEmpty()
checks if the linked list is empty.

```js
console.log(doublyLinkedList.isEmpty()); // false
```

### .head()
returns the head node in the linked list.

```js
console.log(doublyLinkedList.head().getValue()); // 1
```

### .tail()
returns the tail node of the doubly linked list.

```js
console.log(doublyLinkedList.tail().getValue()); // 5
```

### .count()
returns the number of nodes in the linked list.

```js
console.log(doublyLinkedList.count()); // 6
```

### .removeFirst()
removes the first node in the list.

```js
const removed = doublyLinkedList.removeFirst();
console.log(removed.getValue()); // 1
console.log(removed.getNext()); // null

console.log(doublyLinkedList.toArray()); // [2, 5, 3, 4, 5]
```

### .removeLast()
removes and returns the last node in the list.

```js
const removed = doublyLinkedList.removeLast();
console.log(removed.getValue()); // 5
console.log(removed.getNext()); // null

console.log(doublyLinkedList.toArray()); // [2, 5, 3, 4]
```

### .remove(node)
Removes a given node from the list. This can be done by remembering the references of the inserted nodes in the application that uses the doubly linked list, then call this function to remove any existing node in O(1) runtime.

```js
const memoizedNode = doublyLinkedList.insertAt(2, 10);
console.log(doublyLinkedList.toArray()); // [2, 5, 10, 3, 4]

doublyLinkedList.remove(memoizedNode); // O(1)
console.log(doublyLinkedList.toArray()); // [2, 5, 3, 4]
```

### .removeAt(position)
removes and returns the node at a specific position. First (head) node is at position 0.

```js
const removed = doublyLinkedList.removeAt(1);
console.log(removed.getValue()); // 5
console.log(removed.getNext()); // null

console.log(doublyLinkedList.toArray()); // [2, 3, 4]
```

### .removeEach(cb)
removes the nodes that returns true from a callback check and returns the number of removed nodes.

```js
const removedCount = doublyLinkedList.removeEach(
  (node, position) => node.getValue() > 2
);
console.log(removedCount); // 2
console.log(doublyLinkedList.toArray()); // [2]
```

### .clear()
clears the linked list.

```js
doublyLinkedList.clear();
console.log(linkedList.count()); // 0
console.log(doublyLinkedList.head()); // null
console.log(doublyLinkedList.tail()); // null
```

### DoublyLinkedList.fromArray(values)
creates a doubly linked list from an array.

##### JS
```js
const dll = DoublyLinkedList.fromArray([1, 2, 3, 4, 5]);
```

##### TS
```js
const dll = DoublyLinkedList.fromArray<number>([1, 2, 3, 4, 5]);
```

### DoublyLinkedListNode&lt;T&gt;

#### setValue

#### getValue

#### setPrev

#### getPrev

#### hasPrev

#### setNext

#### getNext

#### hasNext
