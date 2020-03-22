# @datastrucures-js/linked-list

[![build:?](https://travis-ci.org/datastructures-js/linked-list.svg?branch=master)](https://travis-ci.org/datastructures-js/linked-list) 
[![npm](https://img.shields.io/npm/v/@datastructures-js/linked-list.svg)](https://www.npmjs.com/package/@datastructures-js/linked-list)
[![npm](https://img.shields.io/npm/dm/@datastructures-js/linked-list.svg)](https://www.npmjs.com/package/@datastructures-js/linked-list) [![npm](https://img.shields.io/badge/node-%3E=%206.0-blue.svg)](https://www.npmjs.com/package/@datastructures-js/linked-list)

a javascript implementation for LinkedList & DoublyLinkedList.

<img width="429" alt="Linked List" src="https://user-images.githubusercontent.com/6517308/35762715-5d00c9bc-0861-11e8-88f7-6e503a1fa3af.png">

<img width="552" alt="dll" src="https://user-images.githubusercontent.com/6517308/35762752-19b17df4-0862-11e8-8ce3-f940d83dde51.png">

# Table of Contents
* [Install](#install)
* [API](#api)
  * [require](#require)
  * [import](#import)
  * [Creating a List](#create-a-list)
  * [.insertFirst(value)](#insertfirstvalue)
  * [.insertLast(value)](#insertlastvalue)
  * [.insertAt(value, position)](#insertatvalue-position)
  * [.removeFirst()](#removefirst)
  * [.removeLast()](#removelast)
  * [.removeAt(position)](#removeatposition)
  * [.removeEach(cb)](#removeeachcb)
  * [.forEach(cb)](#foreachcb)
  * [.find(cb)](#findcb)
  * [.filter(cb)](#filtercb)
  * [.toArray()](#toarray)
  * [.head()](#head)
  * [.count()](#count)
  * [.clear()](#count)
  * Only in the DoublyLinkedList
    * [.forEachReverse(cb)](#foreachreverse)
    * [.tail()](#tail)
 * [Build](#build)
 * [License](#license)

## install
```sh
npm install --save @datastructures-js/linked-list
```

## API

### require
```js
const { LinkedList, DoublyLinkedList } = require('@datastructures-js/linked-list');
```

### import
```js
import { LinkedList, DoublyLinkedList } from '@datastructures-js/linked-list';
```

### create a list
```js
const linkedList = new LinkedList();

const doublyLinkedList = new DoublyLinkedList();
```

### .insertFirst(value)
inserts a node at the beginning of the list. Returns the inserted node (the head).

<table>
 <tr>
  <th>runtime</th>
  <th>params</th>
  <th>return</th>
 </tr>
 <tr>
  <td>O(1)</td>
  <td>
   value: {object}
  </td>
  <td>
    in LinkedList: {LinkedListNode}
    <br/><br/>
    in DoublyLinkedList: {DoublyLinkedListNode}
  </td>
 </tr>
</table>

```js
let head1 = linkedList.insertFirst(1); // head1.getValue() = 1
head1 = linkedList.insertFirst(2); // head1.getValue() = 2

let head2 = doublyLinkedList.insertFirst(1); // head2.getValue() = 1
head2.doublyLinkedList.insertFirst(2); // head2.getValue() = 2
```

### .insertLast(value)
inserts a node at the end of the list.

<table>
 <tr>
  <th>runtime</th>
  <th>params</th>
  <th>return</th>
 </tr>
 <tr>
  <td>
    in LinkedList: O(n)
    <br/><br />
    in DoublyLinkedList: O(1)
  </td>
  <td>
   value: {object}
  </td>
  <td>
    in LinkedList: {LinkedListNode}
    <br/><br/>
    in DoublyLinkedList: {DoublyLinkedListNode}
  </td>
 </tr>
</table>

```js
let last1 = linkedList.insertLast(3); // last1.getValue() = 3
last1 = linkedList.insertLast(4); // last1.getValue() = 4

let last2 = doublyLinkedList.insertLast(3); // last2.getValue() = 3
last2.doublyLinkedList.insertLast(4); // last2.getValue() = 4
```

### .insertAt(value, position)
inserts a node at specific position of the list. First (head) node is at position 0.

### .removeFirst()
removes the first (head) node of the list.

### .removeLast()
removes the last node from the list.

### .removeAt(position)
removes a node at a specific position. First (head) node is at position 0.

### .removeEach(cb)
Loop on the linked list from beginning to end, removes the nodes that returns true from the callback.

### .forEach(cb)
Loop on the linked list from beginning to end, and pass each node to the callback.

### .find(cb)
returns the first node that returns true from the callback.

### .filter(cb)
returns a filtered linked list of all the nodes that returns true from the callback.

### .toArray()
converts the linked list into an array.

### .head()
returns the head node in the linked list.

### .count()
returns the number of nodes in the linked list.

### .clear()
remove all nodes in the linked list.

### Only in the DoublyLinkedList

#### .tail()
returns the tail node in the doubly linked list

#### .forEachRevers(cb)
Loop on the doubly linked list from end to beginning, and pass each node to the callback.

## Build
```
grunt build
```

## License
The MIT License. Full License is [here](https://github.com/datastructures-js/linked-list/blob/master/LICENSE)
