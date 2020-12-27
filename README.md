# @datastrucures-js/linked-list

[![build:?](https://travis-ci.org/datastructures-js/linked-list.svg?branch=master)](https://travis-ci.org/datastructures-js/linked-list) 
[![npm](https://img.shields.io/npm/v/@datastructures-js/linked-list.svg)](https://www.npmjs.com/package/@datastructures-js/linked-list)
[![npm](https://img.shields.io/npm/dm/@datastructures-js/linked-list.svg)](https://www.npmjs.com/package/@datastructures-js/linked-list) [![npm](https://img.shields.io/badge/node-%3E=%206.0-blue.svg)](https://www.npmjs.com/package/@datastructures-js/linked-list)

a javascript implementation of LinkedList & DoublyLinkedList.

<table>
<tr>
<td><b>Linked List</b></td>
<td>
<img width="429" alt="Linked List" src="https://user-images.githubusercontent.com/6517308/35762715-5d00c9bc-0861-11e8-88f7-6e503a1fa3af.png">
</td>
</tr>
<tr>
<td><b>Doubly Linked List</b></td>
<td>
<img width="552" alt="Doubly Linked List" src="https://user-images.githubusercontent.com/6517308/35762752-19b17df4-0862-11e8-8ce3-f940d83dde51.png">
</td>
</tr>
</table>

# Table of Contents
* [Install](#install)
* [require](#require)
* [import](#import)
* [API](#api)
  * [Construction](#construction)
  * [.insertFirst(value)](#insertfirstvalue)
  * [.insertLast(value)](#insertlastvalue)
  * [.insertAt(value, position)](#insertatvalue-position)
  * [.forEach(cb)](#foreachcb)
  * [.forEachReverse(cb)](#foreachreversecb)
  * [.find(cb)](#findcb)
  * [.filter(cb)](#filtercb)
  * [.toArray()](#toarray)
  * [.isEmpty()](#isempty)
  * [.head()](#head)
  * [.tail()](#tail)
  * [.count()](#count)
  * [.removeFirst()](#removefirst)
  * [.removeLast()](#removelast)
  * [.removeAt(position)](#removeatposition)
  * [.removeEach(cb)](#removeeachcb)
  * [.clear()](#clear)
  * [LinkedListNode](#linkedlistnode)
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
  LinkedListNode,
  LinkedList,
  DoublyLinkedListNode,
  DoublyLinkedList,
} = require('@datastructures-js/linked-list');
```

## import
```js
import {
  LinkedListNode,
  LinkedList,
  DoublyLinkedListNode,
  DoublyLinkedList
} from '@datastructures-js/linked-list';
```

## API

### Construction

```js
const linkedList = new LinkedList();

const doublyLinkedList = new DoublyLinkedList();
```

### .insertFirst(value)
inserts a node at the beginning of the list.

<table>
  <tr><th align="center" colspan="2">params</th></tr>
  <tr><td><b>name</b></td><td><b>type</b></td></tr>
  <tr><td>value</td><td>any</td></tr>
</table>

<table>
 <tr><th align="center" colspan="2">return</th><th>decsription</th></tr>
 <tr>
  <td>LinkedList</td>
  <td><a href="#linkedlistnode">LinkedListNode</a></td>
  <td rowspan="2">the inserted node</td>
 </tr>
 <tr>
  <td>DoublyLinkedList</td>
  <td><a href="#doublylinkedlistnode">DoublyLinkedListNode</a></td>
 </tr>
</table>

<table>
 <tr>
  <th>runtime</th>
 </tr>
 <tr>
  <td>O(1)</td>
 </tr>
</table>

#### Example
```js
linkedList.insertFirst(1);
const head1 = linkedList.insertFirst(2);
console.log(head1.getValue()); // 2

doublyLinkedList.insertFirst(1);
const head2 = doublyLinkedList.insertFirst(2);
console.log(head2.getValue()); // 2
```

### .insertLast(value)
inserts a node at the end of the list.

<table>
 <tr><th align="center" colspan="2">params</th></tr>
 <tr><td><b>name</b></td><td><b>type</b></td></tr>
 <tr><td>value</td><td>any</td></tr>
</table>

<table>
 <tr><th align="center" colspan="2">return</th><th>decsription</th></tr>
 <tr>
  <td>LinkedList</td>
  <td><a href="#linkedlistnode">LinkedListNode</a></td>
  <td rowspan="2">the inserted node</td>
 </tr>
 <tr>
  <td>DoublyLinkedList</td>
  <td><a href="#doublylinkedlistnode">DoublyLinkedListNode</a></td>
 </tr>
</table>

<table>
 <tr><th align="center" colspan="2">runtime</th></tr>
 <tr>
  <td>LinkedList</td><td>O(n)</td>
 </tr>
 <tr>
  <td>DoublyLinkedList</td><td>O(1)</td>
 </tr>
</table>

#### Example

```js
linkedList.insertLast(3);
const last1 = linkedList.insertLast(4);
console.log(last1.getValue()); // 4
console.log(last1.getNext()); // null

doublyLinkedList.insertLast(3);
const last2 = doublyLinkedList.insertLast(4);
console.log(last2.getValue()); // 4
console.log(last2.getPrev().getValue()); // 3
```

### .insertAt(position, value)
inserts a node at specific position of the list. First (head) node is at position 0.

<table>
  <tr><th align="center" colspan="2">params</th></tr>
 <tr><td><b>name</b></td><td><b>type</b></td></tr>
  <tr><td>value</td><td>any</td></tr>
  <tr><td>position</td><td>number</td></tr>
</table>

<table>
 <tr><th align="center" colspan="2">return</th><th>description</th></tr>
 <tr>
  <td>LinkedList</td>
  <td><a href="#linkedlistnode">LinkedListNode</a></td>
  <td rowspan="2">the inserted node</td>
 </tr>
 <tr>
  <td>DoublyLinkedList</td>
  <td><a href="#doublylinkedlistnode">DoublyLinkedListNode</a></td>
 </tr>
</table>

<table>
 <tr><th>runtime</th></tr>
 <tr><td>O(n)</td></tr>
</table>

#### Example

```js
const node1 = linkedList.insertAt(2, 5).find(5); // node1.getValue() = 5

const node2 = doublyLinkedList.insertAt(2, 5).find(5); // node2.getValue() = 5
```

### .forEach(cb)
Loop on the linked list from beginning to end, and pass each node to the callback.

<table>
 <tr><th align="center" colspan="2">params</th></tr>
 <tr><td><b>name</b></td><td><b>type</b></td></tr>
  <tr><td>cb</td><td>function</td></tr>
</table>

<table>
 <tr><th>runtime</th></tr>
 <tr><td>O(n)</td></tr>
</table>

#### Example

```js
linkedList.forEach((node, position) => console.log(node.getValue(), position));
/*
2 0
1 1
5 2
3 3
4 4
*/

doublyLinkedList.forEach((node, position) => console.log(node.getValue(), position));
/*
2 0
1 1
5 2
3 3
4 4
*/
```

### .forEachReverse(cb)
Only in DoublyLinkedList. Loop on the doubly linked list from end to beginning, and pass each node to the callback.

<table>
 <tr><th align="center" colspan="2">params</th></tr>
 <tr><td><b>name</b></td><td><b>type</b></td></tr>
 <tr><td>cb</td><td>function</td></tr>
</table>

<table>
 <tr><th>runtime</th></tr>
 <tr><td>O(n)</td></tr>
</table>

#### Example

```js
doublyLinkedList.forEachReverse((node, position) => console.log(node.getValue(), position));
/*
4 4
3 3
5 2
1 1
2 0
*/
```

### .find(cb)
returns the first node that returns true from the callback or null if nothing found.

<table>
  <tr><th align="center" colspan="2">params</th></tr>
 <tr><td><b>name</b></td><td><b>type</b></td></tr>
  <tr><td>cb</td><td>function</td></tr>
</table>

<table>
 <tr><th align="center" colspan="2">return</th><th>description</th></tr>
 <tr>
  <td>LinkedList</td>
  <td><a href="#linkedlistnode">LinkedListNode</a></td>
  <td rowspan="2">the first found node</td>
 </tr>
 <tr>
  <td>DoublyLinkedList</td>
  <td><a href="#doublylinkedlistnode">DoublyLinkedListNode</a></td>
 </tr>
</table>

<table>
 <tr><th>runtime</th></tr>
 <tr><td>O(n)</td></tr>
</table>

#### Example

```js
const node1 = linkedList.find((node) => node.getValue() === 5);
console.log(node1.getValue()); // 5
console.log(node1.getNext().getValue()); // 3

const node2 = doublyLinkedList.find((node) => node.getValue() === 5);
console.log(node2.getValue()); // 5
console.log(node2.getNext().getValue()); // 3
console.log(node2.getPrev().getValue()); // 1
```

### .filter(cb)
returns a filtered list of all the nodes that returns true from the callback.

<table>
 <tr><th align="center" colspan="2">params</th></tr>
 <tr><td><b>name</b></td><td><b>type</b></td></tr>
 <tr><td>cb</td><td>function</td></tr>
</table>

<table>
 <tr><th align="center" colspan="2">return</th></tr>
 <tr>
  <td>LinkedList</td>
  <td><a href="#linkedlistnode">LinkedListNode</a></td>
 </tr>
 <tr>
  <td>DoublyLinkedList</td>
  <td><a href="#doublylinkedlistnode">DoublyLinkedListNode</a></td>
 </tr>
</table>

<table>
 <tr><th>runtime</th></tr>
 <tr><td>O(n)</td></tr>
</table>

#### Example

```js
const filterLinkedList = linkedList.filter((node) => node.getValue() > 2);
filterLinkedList.forEach((node) => console.log(node.getValue()));
/*
5
3
4
*/

const filteredDoublyLinkedList = doublyLinkedList.filter((node) => node.getValue() > 2);
filteredDoublyLinkedList.forEach((node) => console.log(node.getValue()));
/*
5
3
4
*/
```

### .toArray()
converts the linked list into an array.

<table>
 <tr><th>return</th></tr>
 <tr><td>array</td></tr>
</table>

<table>
 <tr><th>runtime</th></tr>
 <tr><td>O(n)</td></tr>
</table>

#### Example

```js
console.log(linkedList.toArray()); // [2, 1, 5, 3, 4]

console.log(doublyLinkedList.toArray()); // [2, 1, 5, 3, 4]
```

### .isEmpty()
checks if the linked list is empty.

<table>
 <tr><th>return</th></tr>
 <tr><td>boolean</td></tr>
</table>

<table>
 <tr><th>runtime</th></tr>
 <tr><td>O(1)</td></tr>
</table>

#### Example
```js
console.log(linkedList.isEmpty()); // false

console.log(doublyLinkedList.isEmpty()); // false
```

### .head()
returns the head node in the linked list.

<table>
 <tr><th align="center" colspan="2">return</th></tr>
 <tr>
  <td>LinkedList</td>
  <td><a href="#linkedlistnode">LinkedListNode</a></td>
 </tr>
 <tr>
  <td>DoublyLinkedList</td>
  <td><a href="#doublylinkedlistnode">DoublyLinkedListNode</a></td>
 </tr>
</table>

<table>
 <tr><th>runtime</th></tr>
 <tr><td>O(1)</td></tr>
</table>

#### Example

```js
console.log(linkedList.head().getValue()); // 2

console.log(doublyLinkedList.head().getValue()); // 2
```

### .tail()
returns the tail node of the doubly linked list.

<table>
 <tr><th>return</th></tr>
 <tr>
  <td><a href="#doublylinkedlistnode">DoublyLinkedListNode</a></td>
 </tr>
</table>

<table>
 <tr><th>runtime</th></tr>
 <tr><td>O(1)</td></tr>
</table>

#### Example

```js
console.log(doublyLinkedList.tail().getValue()); // 4
```

### .count()
returns the number of nodes in the linked list.

<table>
 <tr><th>return</th></tr>
 <tr><td>number</td></tr>
</table>

<table>
 <tr><th>runtime</th></tr>
 <tr><td>O(1)</td></tr>
</table>

#### Example

```js
console.log(linkedList.count()); // 5

console.log(doublyLinkedList.count()); // 5
```

### .removeFirst()
removes the first (head) node of the list.

<table>
 <tr><th>return</th><th>description</th></tr>
 <tr><td>boolean</td><td>true if a node has been removed</td></tr>
</table>

<table>
 <tr><th>runtime</th></tr>
 <tr><td>O(1)</td></tr>
</table>

#### Example

```js
linkedList.removeFirst(); // true

doublyLinkedList.removeFirst(); // true
```

### .removeLast()
removes the last node from the list.

<table>
 <tr><th>return</th><th>description</th></tr>
 <tr><td>boolean</td><td>true if a node has been removed</td></tr>
</table>

<table>
 <tr><th align="center" colspan="2">runtime</th></tr>
 <tr>
  <td>LinkedList</td><td>O(n)</td>
 </tr>
 <tr>
  <td>DoublyLinkedList</td><td>O(1)</td>
 </tr>
</table>

#### Example

```js
linkedList.removeLast(); // true

doublyLinkedList.removeLast(); // true
```

### .removeAt(position)
removes a node at a specific position. First (head) node is at position 0.

<table>
  <tr><th align="center" colspan="2">params</th></tr>
  <tr><td><b>name</b></td><td><b>type</b></td></tr>
  <tr><td>position</td><td>number</td></tr>
</table>

<table>
 <tr><th>return</th><th>description</th></tr>
 <tr><td>boolean</td><td>true if a node has been removed</td></tr>
</table>

<table>
 <tr><th>runtime</th></tr>
 <tr><td>O(n)</td></tr>
</table>

#### Example

```js
linkedList.removeAt(1); // true

doublyLinkedList.removeAt(1); // true
```

### .removeEach(cb)
Loop on the linked list from beginning to end, removes the nodes that returns true from the callback.

<table>
  <tr><th>params</th></tr>
  <tr><td>cb: function</td></tr>
</table>

<table>
 <tr><th>return</th></tr>
 <tr><td>number: number of removed nodes</td></tr>
</table>

<table>
 <tr><th>runtime</th></tr>
 <tr><td>O(n)</td></tr>
</table>

#### Example

```js
linkedList.removeEach((node) => node.getValue() > 1); // 1
console.log(linkedList.toArray()); // [1]

doublyLinkedList.removeEach((node) => node.getValue() > 1); // 1
console.log(doublyLinkedList.toArray()); // [1]
```

### .clear()
remove all nodes in the linked list.

<table>
 <tr><th>runtime</th></tr>
 <tr><td>O(1)</td></tr>
</table>

#### Example

```js
linkedList.clear();
console.log(linkedList.count()); // 0
console.log(linkedList.head()); // null

doublyLinkedList.clear();
console.log(linkedList.count()); // 0
console.log(doublyLinkedList.head()); // null
console.log(doublyLinkedList.tail()); // null
```

### LinkedListNode

#### .setValue(value)
sets the node's value.

<table>
  <tr><th>params</th></tr>
  <tr><td>value: any</td></tr>
</table>

#### .getValue()
returns the node's value.

<table>
  <tr><th>return</th></tr>
  <tr><td>any</td></tr>
</table>

#### .setNext(next)
sets the node's next connected node.

<table>
  <tr><th align="center" colspan="2">params</th></tr>
  <tr><td>next: LinkedListNode</td></tr>
</table>


#### .getNext()
returns the next connected node or null if it's the last node.

<table>
 <tr><th>return</th></tr>
 <tr><td>LinkedListNode</td></tr>
</table>

### DoublyLinkedListNode

#### .setValue(value)
sets the node's value.

<table>
  <tr><th>params</th></tr>
  <tr><td>value: any</td></tr>
</table>

#### .getValue()
returns the node's value.

<table>
  <tr><th>return</th></tr>
  <tr><td>any</td></tr>
</table>

#### .setPrev(prev)
sets the node's previous connected node.

<table>
  <tr><th>params</th></tr>
  <tr><td>prev: DoublyLinkedListNode</td></tr>
</table>

#### .getPrev()
returns the previous connected node or null if it's the first node.

<table>
  <tr><th>return</th></tr>
  <tr><td>DoublyLinkedListNode</td></tr>
</table>

#### .setNext(next)
sets the node's next connected node.

<table>
  <tr><th>params</th></tr>
  <tr><td>next: DoublyLinkedListNode</td></tr>
</table>

#### .getNext()
returns the next connected node or null if it's the last node.

<table>
  <tr><th>return</th></tr>
  <tr><td>DoublyLinkedListNode</td></tr>
</table>

## Build
```
grunt build
```

## License
The MIT License. Full License is [here](https://github.com/datastructures-js/linked-list/blob/master/LICENSE)
