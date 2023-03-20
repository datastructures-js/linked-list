# LinkedList

# Table of Contents
* [Install](#install)
* [require](#require)
* [import](#import)
* [API](#api)
  * [constructor](#constructor)
  * [insertFirst](#insertfirst)
  * [insertLast](#insertlast)
  * [insertAt](#insertat)
  * [forEach](#foreach)
  * [find](#find)
  * [filter](#filter)
  * [toArray](#toarray)
  * [isEmpty](#isempty)
  * [head](#head)
  * [count](#count)
  * [removeFirst](#removefirst)
  * [removeLast](#removelast)
  * [removeAt](#removeat)
  * [removeEach](#removeeach)
  * [clear](#clear)
  * [LinkedList.fromArray](#linkedlistfromarray)
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

you can also extend LinkedListNode (in JS & TS) to use as the list node type

```js
class Point extends LinkedListNode {
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

const points = new LinkedList<Point>();
```

### insertFirst
inserts a node at the beginning of the list in O(1) runetime and returns the inserted node.

```js
console.log(linkedList.insertFirst(3).getValue()); // 3
console.log(linkedList.insertFirst(2).getValue()); // 2
console.log(linkedList.insertFirst(1).getValue()); // 1

points.insertFirst(new Point(2, 3));
points.insertFirst(new Point(1, 2));
points.insertFirst(new Point(0, 1));
```

### insertLast
inserts a node at the end of the list in O(n) runtime. it also accepts an second param as the starting node which can be used to insert in O(1) runtime if last inserted node is memoized.

```js
const last4 = linkedList.insertLast(4);
console.log(last4.getValue()); // 4
console.log(last4.getNext()); // null

const last5 = linkedList.insertLast(5, last4); // O(1)
console.log(last5.getValue()); // 5
console.log(last5.getNext()); // null

points.insertLast(new Point(3, 4));
points.insertLast(new Point(4, 5));
points.insertLast(new Point(5, 6));
```

### insertAt
inserts a node at a specific position of the list in O(n) runtime. First (head) node is at position 0.

```js
const node2 = linkedList.insertAt(2, 5);
console.log(node2.getValue()); // 5
```

### forEach
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

points.forEach((point) => console.log(point.toString()));
/*
(0,1)
(1,2)
(2,3)
(3,4)
(4,5)
(5,6)
*/
```

### find
finds the first node that matches the callback criteria or null if nothing is found. It also accepts a second param as the starting node to start searching from.

```js
const node5 = linkedList.find(
  (node, position) => node.getValue() === 5
);
console.log(node5.getValue()); // 5

console.log(points.find((point) => point.x === 4).toString()); // (4,5)
```

### filter
returns a filtered linked list of all the nodes that match a callback criteria.

```js
linkedList
  .filter((node, position) => node.getValue() > 2);
  .forEach((node, position) => console.log(node.getValue(), position));
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
converts the linked list into an array of nodes.

```js
console.log(linkedList.toArray().map(n => n.getValue())); // [1, 2, 5, 3, 4, 5]

console.log(points.toArray().map(p => p.toString()));
// ['(0,1)', '(1,2)', '(2,3)', '(3,4)', '(4,5)', '(5,6)']
```

### isEmpty
checks if the linked list is empty.

```js
console.log(linkedList.isEmpty()); // false
```

### head
returns the head node in the linked list.

```js
console.log(linkedList.head().getValue()); // 1
```

### count
returns the number of nodes in the linked list.

```js
console.log(linkedList.count()); // 6
```

### removeFirst
removes and returns the first node in the list in O(1) runtime.

```js
const removed = linkedList.removeFirst();
console.log(removed.getValue()); // 1
console.log(removed.getNext()); // null

console.log(linkedList.toArray().map(n => n.getValue())); // [2, 5, 3, 4, 5]
```

### removeLast
removes and returns the last node in the list in O(n) runtime.

```js
const removed = linkedList.removeLast();
console.log(removed.getValue()); // 5
console.log(removed.getNext()); // null

console.log(linkedList.toArray().map(n => n.getValue())); // [2, 5, 3, 4]
```

### removeAt
removes and returns the node at a specific position in O(n) runtime. First (head) node is at position 0.

```js
const removed = linkedList.removeAt(1);
console.log(removed.getValue()); // 5
console.log(removed.getNext()); // null

console.log(linkedList.toArray()); // [2, 3, 4]
```

### removeEach
removes the nodes that match a callback criteria and returns the number of removed nodes.

```js
const removedCount = linkedList.removeEach(
  (node, position) => node.getValue() > 2
);
console.log(removedCount); // 2
console.log(linkedList.toArray().map(n => n.getValue())); // [2]
```

### clear
clears the linked list.

```js
linkedList.clear();
console.log(linkedList.count()); // 0
console.log(linkedList.head()); // null
```

### LinkedList.fromArray
creates a linked list from an existing array.

##### JS
```js
const ll = LinkedList.fromArray([1, 2, 3, 4, 5]);
```

##### TS
```js
const ll = LinkedList.fromArray<number>([1, 2, 3, 4, 5]);
```

### LinkedListNode

#### setValue(value: any)
sets the value on the node.

#### getValue(): any
gets the value of the node.

#### setNext(next: LinkedListNode)
sets the next node.

#### getNext(): LinkedListNode
gets the next node.

#### hasNext(): boolean
checks if node has a next node.

#### clone(): LinkedListNode
clones the node without next reference.
