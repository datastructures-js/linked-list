# DoublyLinkedList

# Contents
* [Install](#install)
* [require](#require)
* [import](#import)
* [API](#api)
  * [constructor](#constructor)
  * [insertFirst](#insertfirst)
  * [insertLast](#insertlast)
  * [insertBefore](#insertbefore)
  * [insertAfter](#insertafter)
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
  * [remove](#remove)
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

you can also extend DoublyLinkedListNode (in JS & TS) to use as the list node type

```js
class Point extends DoublyLinkedListNode {
  x: number;

  y: number;

  constructor(x: number, y: number) {
    super();
    this.x = x;
    this.y = y;
  }

  toString() {
    return `(${this.x},${this.y})`;
  }
}

const points = new DoublyLinkedList<Point>();
```

### insertFirst
inserts a node at the beginning of the list in O(1) runetime and returns the inserted node.

```js
console.log(doublyLinkedList.insertFirst(3).getValue()); // 3
console.log(doublyLinkedList.insertFirst(2).getValue()); // 2
console.log(doublyLinkedList.insertFirst(1).getValue()); // 1

points.insertFirst(new Point(2, 3));
points.insertFirst(new Point(1, 2));
points.insertFirst(new Point(0, 1));
```

### insertLast
inserts a node at the end of the list in O(1) runtime and returns the inserted node.

```js
const last4 = doublyLinkedList.insertLast(4);
console.log(last4.getValue()); // 4
console.log(last4.getNext()); // null
console.log(last4.getPrev().getValue()); // 3

const last5 = doublyLinkedList.insertLast(5);
console.log(last5.getValue()); // 5
console.log(last5.getNext()); // null
console.log(last5.getPrev().getValue()); // 4

points.insertLast(new Point(3, 4));
points.insertLast(new Point(4, 5));
points.insertLast(new Point(5, 6));
```

### insertBefore
inserts a node before an existing node in O(1) runtime and returns the inserted node.

```js
const n23 = points.find((p) => p.x === 2 && p.y === 3);
const inserted = points.insertBefore(new Point(-1, -2), n23); // insert (-1,-2) before (2,3)
console.log(inserted.getNext().toString()); // (2,3)
```

### insertAfter
inserts a node after an existing node in O(1) runtime and returns the inserted node.

```js
const n34 = points.find((p) => p.x === 3 && p.y === 4);
const inserted = points.insertAfter(new Point(-6, -7), n34); // insert (-6,-7) before (3,4)
console.log(inserted.getPrev().toString()); // (3,4)
```

### insertAt
inserts a node at a specific position of the list in O(n) runtime. First (head) node is at position 0.

```js
const node2 = doublyLinkedList.insertAt(2, 5);
console.log(node2.getValue()); // 5
```

### forEach
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

points.forEach((point) => console.log(point.toString()));
/*
(0,1)
(1,2)
(-1,-2)
(2,3)
(3,4)
(-6,-7)
(4,5)
(5,6)
*/
```

### forEachReverse
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

points.forEachReverse((point) => console.log(point.toString()));
/*
(5,6)
(4,5)
(-6,-7)
(3,4)
(2,3)
(-1,-2)
(1,2)
(0,1)
*/
```

### find
finds the first node that matches the callback criteria or null if nothing is found. It also accepts a second param as the starting node to start searching from.

```js
const node5 = doublyLinkedList.find(
  (node, position) => node.getValue() === 5
);
console.log(node5.getValue()); // 5

console.log(points.find((point) => point.x === 4).toString()); // (4,5)
```

### findReverse
finds the first node that match a callback criteria or null if nothing found by scanning the list from end to beginning. It also accepts a second param as the starting end node to start searching from.

```js
const node5 = doublyLinkedList.findReverse(
  (node, position) => node.getValue() === 5
);
console.log(node5.getValue()); // 5

console.log(points.findReverse((point) => point.x === 4).toString()); // (4,5)
```

### filter
returns a filtered doubly linked list of all the nodes that match a callback criteria.

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

points
  .filter((point) => point.y >= 4)
  .forEach((point) => console.log(point.toString()));
/*
(3,4)
(4,5)
(5,6)
*/
```

### toArray
converts the doubly linked list into an array of nodes.

```js
console.log(doublyLinkedList.toArray().map(n => n.getValue()));
// [1, 2, 5, 3, 4, 5]

console.log(points.toArray().map(p => p.toString()));
// ['(0,1)', '(1,2)', '(-1,-2)', '(2,3)','(3,4)', '(-6,-7)', '(4,5)', '(5,6)']
```

### isEmpty
checks if the list is empty.

```js
console.log(doublyLinkedList.isEmpty()); // false
```

### head
returns the head (first) node of the list.

```js
console.log(doublyLinkedList.head().getValue()); // 1
```

### tail
returns the tail (last) node of the list.

```js
console.log(doublyLinkedList.tail().getValue()); // 5
```

### count
returns the number of nodes in the list.

```js
console.log(doublyLinkedList.count()); // 6
```

### removeFirst
removes the first node in the list in O(1) runtime..

```js
const removed = doublyLinkedList.removeFirst();
console.log(removed.getValue()); // 1
console.log(removed.getNext()); // null

console.log(doublyLinkedList.toArray().map(n => n.getValue())); // [2, 5, 3, 4, 5]
```

### removeLast
removes and returns the last node in the list in O(1) runtime..

```js
const removed = doublyLinkedList.removeLast();
console.log(removed.getValue()); // 5
console.log(removed.getNext()); // null

console.log(doublyLinkedList.toArray().map(n => n.getValue())); // [2, 5, 3, 4]
```

### remove
Removes a given node from the list. This can be done by remembering the reference of the inserted nodes, then call this function to remove a node in O(1) runtime.

```js
const memoizedNode = doublyLinkedList.insertAt(2, 10);
console.log(doublyLinkedList.toArray().map(n => n.getValue())); // [2, 5, 10, 3, 4]

doublyLinkedList.remove(memoizedNode); // O(1)
console.log(doublyLinkedList.toArray().map(n => n.getValue())); // [2, 5, 3, 4]
```

### removeAt
removes and returns the node at a specific position in O(n) runtime. First (head) node is at position 0.

```js
const removed = doublyLinkedList.removeAt(1);
console.log(removed.getValue()); // 5
console.log(removed.getNext()); // null

console.log(doublyLinkedList.toArray().map(n => n.getValue())); // [2, 3, 4]
```

### removeEach
removes the nodes that match a callback criteria and returns the number of removed nodes.

```js
const removedCount = doublyLinkedList.removeEach(
  (node, position) => node.getValue() > 2
);
console.log(removedCount); // 2
console.log(doublyLinkedList.toArray().map(n => n.getValue())); // [2]
```

### clear
clears the list.

```js
doublyLinkedList.clear();
console.log(linkedList.count()); // 0
console.log(doublyLinkedList.head()); // null
console.log(doublyLinkedList.tail()); // null
```

### DoublyLinkedList.fromArray
creates a doubly linked list from an existing array.

##### JS
```js
const dll = DoublyLinkedList.fromArray([1, 2, 3, 4, 5]);
```

##### TS
```js
const dll = DoublyLinkedList.fromArray<number>([1, 2, 3, 4, 5]);
```

### DoublyLinkedListNode

#### setValue(value: any)
sets the value on the node.

#### getValue(): any
gets the value of the node.

#### setPrev(prev: DoublyLinkedListNode)
sets the previous node.

#### getPrev(): DoublyLinkedListNode
gets the previous node.

#### hasPrev(): boolean
checks if node has a previous node.

#### setNext(next: DoublyLinkedListNode)
sets the next node.

#### getNext(): DoublyLinkedListNode
gets the next node.

#### hasNext(): boolean
checks if node has a next node.

#### clone(): DoublyLinkedListNode
clones the node without next or prev references.
