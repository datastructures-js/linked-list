# DoublyLinkedList

<img width="552" alt="Doubly Linked List" src="https://user-images.githubusercontent.com/6517308/35762752-19b17df4-0862-11e8-8ce3-f940d83dde51.png">

# Contents
* [Install](#install)
* [require](#require)
* [import](#import)
* [API](#api)
  * [constructor](#constructor)
  * [.insertFirst(value)](#insertfirstvalue)
  * [.insertLast(value)](#insertlastvalue)
  * [.insertAt(position, value)](#insertatposition-value)
  * [.forEach(cb)](#foreachcb)
  * [.forEachReverse(cb)](#foreachreversecb)
  * [.find(cb[, startingNode])](#findcb-startingnode)
  * [.findReverse(cb[, startingNode])](#findreversecb-startingnode)
  * [.filter(cb)](#filtercb)
  * [.toArray()](#toarray)
  * [.isEmpty()](#isempty)
  * [.head()](#head)
  * [.tail()](#tail)
  * [.count()](#count)
  * [.removeFirst()](#removefirst)
  * [.removeLast()](#removelast)
  * [.remove(node)](#removenode)
  * [.removeAt(position)](#removeatposition)
  * [.removeEach(cb)](#removeeachcb)
  * [.clear()](#clear)
  * [DoublyLinkedList.fromArray(values)](#doublylinkedlistfromarrayvalues)
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

<table>
  <tr>
    <th align="center">params</th>
    <th align="center">return</th>
    <th align="center">runtime</th>
  </tr>
  <tr>
    <td align="center">value: T</td>
    <td align="center"><a href="#doublylinkedlistnodet">DoublyLinkedListNode&lt;T&gt;</a></td>
    <td align="center">O(1)</td>
  </tr>
</table>

```js
console.log(doublyLinkedList.insertFirst(3).getValue()); // 3
console.log(doublyLinkedList.insertFirst(2).getValue()); // 2
console.log(doublyLinkedList.insertFirst(1).getValue()); // 1
```

### .insertLast(value)
inserts a node at the end of the list.

<table>
  <tr>
    <th align="center">params</th>
    <th align="center">return</th>
    <th align="center">runtime</th>
  </tr>
  <tr>
    <td align="center">value: T</td>
    <td align="center"><a href="#doublylinkedlistnodet">DoublyLinkedListNode&lt;T&gt;</a></td>
    <td>O(1)</td>
  </tr>
</table>

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

<table>
  <tr>
    <th align="center">params</th>
    <th align="center">return</th>
    <th align="center">runtime</th>
  </tr>
  <tr>
    <td>
      position: number
      <br />
      value: T
    </td>
    <td align="center"><a href="#doublylinkedlistnodet">DoublyLinkedListNode&lt;T&gt;</a></td>
    <td align="center">
      O(n)
    </td>
  </tr>
</table>

```js
const node2 = doublyLinkedList.insertAt(2, 5);
console.log(node2.getValue()); // 5
```

### .forEach(cb)
Traverse the list from beginning to end, and pass each node to the callback.

<table>
  <tr>
    <th align="center">params</th>
    <th align="center">runtime</th>
  </tr>
  <tr>
    <td align="center">cb: (node: DoublyLinkedListNode&lt;T&gt;, position: number) => void</td>
    <td align="center">O(n)</td>
  </tr>
</table>

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

<table>
  <tr>
    <th align="center">params</th>
    <th align="center">runtime</th>
  </tr>
  <tr>
    <td align="center">cb: (node: DoublyLinkedListNode&lt;T&gt;, position: number) => void</td>
    <td align="center">O(n)</td>
  </tr>
</table>

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

<table>
  <tr>
    <th align="center">params</th>
    <th align="center">return</th>
    <th align="center">runtime</th>
  </tr>
  <tr>
    <td>
      cb: (node: DoublyLinkedListNode&lt;T&gt;) => boolean
      <br />
      <i>startingNode: DoublyLinkedListNode&lt;T&gt;</i>
    </td>
    <td align="center">
      <a href="#doublylinkedlistnodet">DoublyLinkedListNode&lt;T&gt;</a>
    </td>
    <td align="center">O(n)</td>
  </tr>
</table>

```js
const node5 = doublyLinkedList.find(
  (node, position) => node.getValue() === 5
);
console.log(node5.getValue()); // 5
```

### .findReverse(cb[, startingNode])
Reversevly finds the first node that returns true from the callback or null if nothing found. It accepts a second param as the starting node to search.

<table>
  <tr>
    <th align="center">params</th>
    <th align="center">return</th>
    <th align="center">runtime</th>
  </tr>
  <tr>
    <td>
      cb: (node: DoublyLinkedListNode&lt;T&gt;) => boolean
      <br />
      <i>startingNode: DoublyLinkedListNode&lt;T&gt;</i>
    </td>
    <td align="center">
      <a href="#doublylinkedlistnodet">DoublyLinkedListNode&lt;T&gt;</a>
    </td>
    <td align="center">O(n)</td>
  </tr>
</table>

```js
const node5 = doublyLinkedList.findReverse(
  (node, position) => node.getValue() === 5
);
console.log(node5.getValue()); // 5
```

### .filter(cb)
returns a filtered doubly linked list of all the nodes that returns true from the callback.

<table>
  <tr>
    <th align="center">params</th>
    <th align="center">return</th>
    <th align="center">runtime</th>
  </tr>
  <tr>
    <td align="center">
      cb: (node: DoublyLinkedListNode&lt;T&gt;, position: number) => boolean
    </td>
    <td align="center">
      <a href="#doublylinkedlist">DoublyLinkedList&lt;T&gt;</a>
    </td>
    <td align="center">
      O(n)
    </td>
  </tr>
</table>

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

<table>
  <tr>
    <th align="center">return</th>
    <th align="center">runtime</th>
  </tr>
  <tr>
    <td align="center">
      T[]
    </td>
    <td align="center">
      O(n)
    </td>
  </tr>
</table>

```js
console.log(doublyLinkedList.toArray()); // [1, 2, 5, 3, 4, 5]
```

### .isEmpty()
checks if the linked list is empty.

<table>
  <tr>
    <th align="center">return</th>
    <th align="center">runtime</th>
  </tr>
  <tr>
    <td align="center">
      boolean
    </td>
    <td align="center">
      O(1)
    </td>
  </tr>
</table>

```js
console.log(doublyLinkedList.isEmpty()); // false
```

### .head()
returns the head node in the linked list.

<table>
  <tr>
    <th align="center">return</th>
    <th align="center">runtime</th>
  </tr>
  <tr>
    <td align="center">
      <a href="#doublylinkedlistnodet">DoublyLinkedListNode&lt;T&gt;</a>
    </td>
    <td align="center">
      O(1)
    </td>
  </tr>
</table>

```js
console.log(doublyLinkedList.head().getValue()); // 1
```

### .tail()
returns the tail node of the doubly linked list.

<table>
  <tr>
    <th align="center">return</th>
    <th align="center">runtime</th>
  </tr>
  <tr>
    <td align="center">
      <a href="#doublylinkedlistnodet">DoublyLinkedListNode&lt;T&gt;</a>
    </td>
    <td align="center">
      O(1)
    </td>
  </tr>
</table>

```js
console.log(doublyLinkedList.tail().getValue()); // 5
```

### .count()
returns the number of nodes in the linked list.

<table>
  <tr>
    <th align="center">return</th>
    <th align="center">runtime</th>
  </tr>
  <tr>
    <td align="center">
      number
    </td>
    <td align="center">
      O(1)
    </td>
  </tr>
</table>

```js
console.log(doublyLinkedList.count()); // 6
```

### .removeFirst()
removes the first node in the list.

<table>
  <tr>
    <th align="center">return</th>
    <th align="center">runtime</th>
  </tr>
  <tr>
    <td align="center">
      <a href="#doublylinkedlistnodet">DoublyLinkedListNode&lt;T&gt;</a>
    </td>
    <td align="center">
      O(1)
    </td>
  </tr>
</table>

```js
const removed = doublyLinkedList.removeFirst();
console.log(removed.getValue()); // 1
console.log(removed.getNext()); // null

console.log(doublyLinkedList.toArray()); // [2, 5, 3, 4, 5]
```

### .removeLast()
removes and returns the last node in the list.

<table>
  <tr>
    <th align="center">return</th>
    <th align="center">runtime</th>
  </tr>
  <tr>
    <td align="center">
      <a href="#doublylinkedlistnodet">DoublyLinkedListNode&lt;T&gt;</a>
    </td>
    <td>
      O(1)
    </td>
  </tr>
</table>

```js
const removed = doublyLinkedList.removeLast();
console.log(removed.getValue()); // 5
console.log(removed.getNext()); // null

console.log(doublyLinkedList.toArray()); // [2, 5, 3, 4]
```

### .remove(node)
Removes a given node from the list. This can be done by remembering the references of the inserted nodes in the application that uses the doubly linked list, then call this function to remove any existing node in O(1) runtime.

<table>
  <tr>
    <th align="center">params</th>
    <th align="center">return</th>
    <th align="center">runtime</th>
  </tr>
  <tr>
    <td align="center">
      node: <a href="#doublylinkedlistnodet">DoublyLinkedListNode&lt;T&gt;</a>
    </td>
    <td align="center">
      <a href="#doublylinkedlistnodet">DoublyLinkedListNode&lt;T&gt;</a>
    </td>
    <td align="center">
      O(1)
    </td>
  </tr>
</table>

```js
const memoizedNode = doublyLinkedList.insertAt(2, 10);
console.log(doublyLinkedList.toArray()); // [2, 5, 10, 3, 4]

doublyLinkedList.remove(memoizedNode); // O(1)
console.log(doublyLinkedList.toArray()); // [2, 5, 3, 4]
```

### .removeAt(position)
removes and returns the node at a specific position. First (head) node is at position 0.

<table>
  <tr>
    <th align="center">params</th>
    <th align="center">return</th>
    <th align="center">runtime</th>
  </tr>
  <tr>
    <td align="center">
      position: number
    </td>
    <td align="center">
      <a href="#doublylinkedlistnodet">DoublyLinkedListNode&lt;T&gt;</a>
    </td>
    <td align="center">
      O(1)
    </td>
  </tr>
</table>

```js
const removed = doublyLinkedList.removeAt(1);
console.log(removed.getValue()); // 5
console.log(removed.getNext()); // null

console.log(doublyLinkedList.toArray()); // [2, 3, 4]
```

### .removeEach(cb)
removes the nodes that returns true from a callback check and returns the number of removed nodes.

<table>
  <tr>
    <th align="center">params</th>
    <th align="center">return</th>
    <th align="center">runtime</th>
  </tr>
  <tr>
    <td align="center">
      cb: (node: DoublyLinkedListNode&lt;T&gt;, position: number)
    </td>
    <td align="center">
      number
    </td>
    <td align="center">
      O(n)
    </td>
  </tr>
</table>

```js
const removedCount = doublyLinkedList.removeEach(
  (node, position) => node.getValue() > 2
);
console.log(removedCount); // 2
console.log(doublyLinkedList.toArray()); // [2]
```

### .clear()
clears the linked list.

<table>
  <tr>
    <th align="center">runtime</th>
  </tr>
  <tr>
    <td align="center">
      O(1)
    </td>
  </tr>
</table>

```js
doublyLinkedList.clear();
console.log(linkedList.count()); // 0
console.log(doublyLinkedList.head()); // null
console.log(doublyLinkedList.tail()); // null
```

### DoublyLinkedList.fromArray(values)
creates a doubly linked list from an array.

<table>
  <tr>
    <th align="center">params</th>
    <th align="center">return</th>
    <th align="center">runtime</th>
  </tr>
  <tr>
    <td align="center">
      values: T[]
    </td>
    <td align="center">
      DoublyLinkedList&lt;T&gt;
    </td>
    <td align="center">
      O(n)
    </td>
  </tr>
</table>

##### JS
```js
const dll = DoublyLinkedList.fromArray([1, 2, 3, 4, 5]);
```

##### TS
```js
const dll = DoublyLinkedList.fromArray<number>([1, 2, 3, 4, 5]);
```

### DoublyLinkedListNode&lt;T&gt;

#### new DoublyLinkedListNode&lt;T&gt;(value, prev, next)

<table>
  <tr><th>params</th></tr>
  <tr>
    <td>
      value: T
      <br />
      prev: <a href="#doublylinkedlistnodet">DoublyLinkedListNode&lt;T&gt;</a>
      <br />
      next: <a href="#doublylinkedlistnodet">DoublyLinkedListNode&lt;T&gt;</a>
    </td>
  </tr>
</table>

#### .setValue(value)

<table>
  <tr><th>params</th></tr>
  <tr><td>value: T</td></tr>
</table>

#### .getValue()

<table>
  <tr><th>return</th></tr>
  <tr><td>T</td></tr>
</table>

#### .setPrev(prev)

<table>
  <tr><th>params</th></tr>
  <tr><td>prev: <a href="#doublylinkedlistnodet">DoublyLinkedListNode&lt;T&gt;</a></td></tr>
</table>

#### .getPrev()

<table>
  <tr><th>return</th></tr>
  <tr><td><a href="#doublylinkedlistnodet">DoublyLinkedListNode&lt;T&gt;</a></td></tr>
</table>

#### .hasPrev()

<table>
 <tr><th>return</th></tr>
 <tr><td>boolean</td></tr>
</table>

#### .setNext(next)

<table>
  <tr><th>params</th></tr>
  <tr><td>next: <a href="#doublylinkedlistnodet">DoublyLinkedListNode&lt;T&gt;</a></td></tr>
</table>

#### .getNext()

<table>
  <tr><th>return</th></tr>
  <tr><td><a href="#doublylinkedlistnodet">DoublyLinkedListNode&lt;T&gt;</a></td></tr>
</table>

#### .hasNext()

<table>
 <tr><th>return</th></tr>
 <tr><td>boolean</td></tr>
</table>
