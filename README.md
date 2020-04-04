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
* [API](#api)
  * [require](#require)
  * [import](#import)
  * [Construction](#construction)
  * [.insertFirst(value)](#insertfirstvalue)
  * [.insertLast(value)](#insertlastvalue)
  * [.insertAt(value, position)](#insertatvalue-position)
  * [.forEach(cb)](#foreachcb)
  * [.forEachReverse(cb)](#foreachreversecb)
  * [.find(cb)](#findcb)
  * [.filter(cb)](#filtercb)
  * [.toArray()](#toarray)
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

## API

### require
```js
const { LinkedList, DoublyLinkedList } = require('@datastructures-js/linked-list');
```

### import
```js
import { LinkedList, DoublyLinkedList } from '@datastructures-js/linked-list';
```

### Construction

#### Example

```js
const linkedList = new LinkedList();

const doublyLinkedList = new DoublyLinkedList();
```

### .insertFirst(value)
inserts a node at the beginning of the list.

<table>
<tr>
  <td>
    <table>
      <tr><th align="center" colspan="2">params</th></tr>
     <tr><td><b>name</b></td><td><b>type</b></td></tr>
      <tr><td>value</td><td>object</td></tr>
    </table>
  </td>
  <td>
    <table>
     <tr>
        <tr><th align="center" colspan="3">return</th></tr>
     </tr>
     <tr>
      <td>LinkedList</td>
      <td><a href="#linkedlistnode">LinkedListNode</a></td>
     </tr>
     <tr>
      <td>DoublyLinkedList</td>
      <td><a href="#doublylinkedlistnode">DoublyLinkedListNode</a></td>
     </tr>
    </table>
  </td>
  <td>
    <table>
     <tr>
      <th>runtime</th>
     </tr>
     <tr>
      <td>O(1)</td>
     </tr>
    </table>
  </td>
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
  <tr><td>value</td><td>object</td></tr>
</table>

<table>
 <tr>
    <tr><th align="center" colspan="3">return</th></tr>
 </tr>
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
 <tr>
  <tr><th align="center" colspan="2">runtime</th></tr>
 </tr>
 <tr>
  <td>LinkedList</td><td>O(n)</td>
 </tr>
 <tr>
  <td>DoublyLinkedList</td><td>O(1)</td>
 </tr>
</table>


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

### .insertAt(value, position)
inserts a node at specific position of the list. First (head) node is at position 0.

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
    in DoublyLinkedList: O(n)
  </td>
  <td>
   value: {object}
   <br /><br />
   position: {number}
  </td>
  <td>
    in LinkedList: {LinkedListNode}
    <br/><br/>
    in DoublyLinkedList: {DoublyLinkedListNode}
  </td>
 </tr>
</table>

```js
const node1 = linkedList.insertAt(5, 2); // node1.getValue() = 5

const node2 = doublyLinkedList.insertAt(5, 2); // node2.getValue() = 5
```

### .forEach(cb)
Loop on the linked list from beginning to end, and pass each node to the callback.

<table>
 <tr>
  <th>runtime</th>
  <th>params</th>
 </tr>
 <tr>
  <td>
    O(n)
  </td>
  <td>
   cb: {function(node)}
  </td>
 </tr>
</table>

```js
linkedList.forEach((node) => console.log(node.getValue()));
/*
2
1
5
3
4
*/

doublyLinkedList.forEach((node) => console.log(node.getValue()));
/*
2
1
5
3
4
*/
```

### .forEachReverse(cb)
Only in DoublyLinkedList. Loop on the doubly linked list from end to beginning, and pass each node to the callback.

<table>
 <tr>
  <th>runtime</th>
  <th>params</th>
 </tr>
 <tr>
  <td>
    O(n)
  </td>
  <td>
   cb: {function(node)}
  </td>
 </tr>
</table>

```js
doublyLinkedList.forEachReverse((node) => console.log(node.getValue()));
/*
4
3
5
1
2
*/
```

### .find(cb)
returns the first node that returns true from the callback.

<table>
 <tr>
  <th>runtime</th>
  <th>params</th>
  <th>return</th>
 </tr>
 <tr>
  <td>
    O(n)
  </td>
  <td>
   cb: {function(node)}
  </td>
  <td>
    in LinkedList: {LinkedListNode}
    <br/><br/>
    in DoublyLinkedList: {DoublyLinkedListNode}
  </td>
 </tr>
</table>

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
returns a filtered linked list of all the nodes that returns true from the callback.

<table>
 <tr>
  <th>runtime</th>
  <th>params</th>
  <th>return</th>
 </tr>
 <tr>
  <td>
    O(n)
  </td>
  <td>
   cb: {function(node)}
  </td>
  <td>
    in LinkedList: {LinkedList}
    <br/><br/>
    in DoublyLinkedList: {DoublyLinkedList}
  </td>
 </tr>
</table>

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
 <tr>
  <th>runtime</th>
  <th>return</th>
 </tr>
 <tr>
  <td>
    O(n)
  </td>
  <td>
    {array}
  </td>
 </tr>
</table>

```js
console.log(linkedList.toArray()); // [2, 1, 5, 3, 4]

console.log(doublyLinkedList.toArray()); // [2, 1, 5, 3, 4]
```

### .head()
returns the head node in the linked list.

<table>
 <tr>
  <th>runtime</th>
  <th>return</th>
 </tr>
 <tr>
  <td>
    O(1)
  </td>
  <td>
    in LinkedList: {LinkedListNode}
    <br/><br/>
    in DoublyLinkedList: {DoublyLinkedListNode}
  </td>
 </tr>
</table>

```js
console.log(linkedList.head().getValue()); // 2

console.log(doublyLinkedList.head().getValue()); // 2
```

### .tail()
Only in DoublyLinkedList. returns the tail node in the doubly linked list

<table>
 <tr>
  <th>runtime</th>
  <th>return</th>
 </tr>
 <tr>
  <td>
    O(1)
  </td>
  <td>
    {DoublyLinkedListNode}
  </td>
 </tr>
</table>

```js
console.log(doublyLinkedList.tail().getValue()); // 4
```

### .count()
returns the number of nodes in the linked list.

<table>
 <tr>
  <th>runtime</th>
  <th>return</th>
 </tr>
 <tr>
  <td>
    O(1)
  </td>
  <td>
    {number}
  </td>
 </tr>
</table>

```js
console.log(linkedList.count()); // 5

console.log(doublyLinkedList.count()); // 5
```

### .removeFirst()
removes the first (head) node of the list.

<table>
 <tr>
  <th>runtime</th>
  <th>return</th>
 </tr>
 <tr>
  <td>O(1)</td>
  <td>{boolean}</td>
 </tr>
</table>

```js
linkedList.removeFirst(); // true

doublyLinkedList.removeFirst(); // true
```

### .removeLast()
removes the last node from the list.

<table>
 <tr>
  <th>runtime</th>
  <th>return</th>
 </tr>
 <tr>
  <td>
    in LinkedList: O(n)
    <br/><br />
    in DoublyLinkedList: O(1)
  </td>
  <td>{boolean}</td>
 </tr>
</table>

```js
linkedList.removeLast(); // true

doublyLinkedList.removeLast(); // true
```

### .removeAt(position)
removes a node at a specific position. First (head) node is at position 0.

<table>
 <tr>
  <th>runtime</th>
  <th>params</th>
  <th>return</th>
 </tr>
 <tr>
  <td>
    O(n)
  </td>
  <td>
   position: {number}
  </td>
  <td>
    {boolean}
  </td>
 </tr>
</table>

```js
linkedList.removeAt(1); // true

doublyLinkedList.removeAt(1); // true
```

### .removeEach(cb)
Loop on the linked list from beginning to end, removes the nodes that returns true from the callback.

<table>
 <tr>
  <th>runtime</th>
  <th>params</th>
  <th>return</th>
 </tr>
 <tr>
  <td>
    O(n)
  </td>
  <td>
   cb: {function(node)}
  </td>
  <td>
    {number} number of removed nodes
  </td>
 </tr>
</table>

```js
linkedList.removeEach((node) => node.getValue() > 1); // 1
console.log(linkedList.toArray()); // [1]

doublyLinkedList.removeEach((node) => node.getValue() > 1); // 1
console.log(doublyLinkedList.toArray()); // [1]
```

### .clear()
remove all nodes in the linked list.

<table>
 <tr>
  <th>runtime</th>
 </tr>
 <tr>
  <td>
    O(1)
  </td>
 </tr>
</table>

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

<table>
  <tr><th><b>method</b></th><th><b>return</b></th></tr>
  <tr><td>.getValue()</td><td>object</td></tr>
  <tr><td>.getNext()</td><td>LinkedListNode</td></tr>
</table>

### DoublyLinkedListNode

<table>
  <tr><th><b>method</b></th><th><b>return</b></th></tr>
  <tr><td>.getValue()</td><td>object</td></tr>
  <tr><td>.getPrev()</td><td>DoublyLinkedListNode</td></tr>
  <tr><td>.getNext()</td><td>DoublyLinkedListNode</td></tr>
</table>

## Build
```
grunt build
```

## License
The MIT License. Full License is [here](https://github.com/datastructures-js/linked-list/blob/master/LICENSE)
