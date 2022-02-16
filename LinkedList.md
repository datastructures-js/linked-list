# LinkedList

<img width="429" alt="Linked List" src="https://user-images.githubusercontent.com/6517308/35762715-5d00c9bc-0861-11e8-88f7-6e503a1fa3af.png">

# Table of Contents
* [Install](#install)
* [require](#require)
* [import](#import)
* [API](#api)
  * [constructor](#constructor)
  * [.insertFirst(value)](#insertfirstvalue)
  * [.insertLast(value[, startingNode])](#insertlastvalue-startingnode)
  * [.insertAt(position, value)](#insertatposition-value)
  * [.forEach(cb)](#foreachcb)
  * [.find(cb[, startingNode])](#findcb-startingnode)
  * [.filter(cb)](#filtercb)
  * [.toArray()](#toarray)
  * [.isEmpty()](#isempty)
  * [.head()](#head)
  * [.count()](#count)
  * [.removeFirst()](#removefirst)
  * [.removeLast()](#removelast)
  * [.removeAt(position)](#removeatposition)
  * [.removeEach(cb)](#removeeachcb)
  * [.clear()](#clear)
  * [LinkedList.fromArray(values)](#linkedlistfromarrayvalues)
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

<table>
  <tr>
    <th align="center">params</th>
    <th align="center">return</th>
    <th align="center">runtime</th>
  </tr>
  <tr>
    <td align="center">value: T</td>
    <td align="center"><a href="#linkedlistnodet">LinkedListNode&lt;T&gt;</a></td>
    <td align="center">O(1)</td>
  </tr>
</table>

```js
console.log(linkedList.insertFirst(3).getValue()); // 3
console.log(linkedList.insertFirst(2).getValue()); // 2
console.log(linkedList.insertFirst(1).getValue()); // 1
```

### .insertLast(value[, startingNode])
inserts a node at the end of the list. it accepts an optional second param as the starting node which can be used to insert in O(1) runtime.

<table>
  <tr>
    <th align="center">params</th>
    <th align="center">return</th>
    <th align="center">runtime</th>
  </tr>
  <tr>
    <td>
    value: T
    <br />
    <i>startingNode: LinkedListNode&lt;T&gt;</i>
    </td>
    <td align="center"><a href="#linkedlistnodet">LinkedListNode&lt;T&gt;</a></td>
    <td>
      O(n) | O(1) with last inserted node passed
    </td>
  </tr>
</table>

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
    <td align="center"><a href="#linkedlistnodet">LinkedListNode&lt;T&gt;</a></td>
    <td align="center">O(n)</td>
  </tr>
</table>

```js
const node2 = linkedList.insertAt(2, 5);
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
    <td align="center">
      cb: (node: LinkedListNode&lt;T&gt;, position: number) => void
    </td>
    <td align="center">
      O(n)
    </td>
  </tr>
</table>

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

<table>
  <tr>
    <th align="center">params</th>
    <th align="center">return</th>
    <th align="center">runtime</th>
  </tr>
  <tr>
    <td>
      cb: (node: LinkedListNode&lt;T&gt;) => boolean
      <br />
      <i>startingNode: LinkedListNode&lt;T&gt;</i>
    </td>
    <td align="center"><a href="#linkedlistnodet">LinkedListNode&lt;T&gt;</a></td>
    <td align="center">O(n)</td>
  </tr>
</table>

```js
const node5 = linkedList.find(
  (node, position) => node.getValue() === 5
);
console.log(node5.getValue()); // 5
```

### .filter(cb)
returns a filtered linked list of all the nodes that returns true from the callback.

<table>
  <tr>
    <th align="center">params</th>
    <th align="center">return</th>
    <th align="center">runtime</th>
  </tr>
  <tr>
    <td align="center">
      cb: (node: LinkedListNode&lt;T&gt;, position: number) => boolean
    </td>
    <td align="center"><a href="#linkedlist">LinkedList&lt;T&gt;</a></td>
    <td align="center">O(n)</td>
  </tr>
</table>

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

<table>
  <tr>
    <th align="center">return</th>
    <th align="center">runtime</th>
  </tr>
  <tr>
    <td align="center">T[]</td>
    <td align="center">O(n)</td>
  </tr>
</table>

```js
console.log(linkedList.toArray()); // [1, 2, 5, 3, 4, 5]
```

### .isEmpty()
checks if the linked list is empty.

<table>
  <tr>
    <th align="center">return</th>
    <th align="center">runtime</th>
  </tr>
  <tr>
    <td align="center">boolean</td>
    <td align="center">O(1)</td>
  </tr>
</table>

```js
console.log(linkedList.isEmpty()); // false
```

### .head()
returns the head node in the linked list.

<table>
  <tr>
    <th align="center">return</th>
    <th align="center">runtime</th>
  </tr>
  <tr>
    <td align="center"><a href="#linkedlistnodet">LinkedListNode&lt;T&gt;</a></td>
    <td align="center">O(1)</td>
  </tr>
</table>

```js
console.log(linkedList.head().getValue()); // 1
```

### .count()
returns the number of nodes in the linked list.

<table>
  <tr>
    <th align="center">return</th>
    <th align="center">runtime</th>
  </tr>
  <tr>
    <td align="center">number</td>
    <td align="center">O(1)</td>
  </tr>
</table>

```js
console.log(linkedList.count()); // 6
```

### .removeFirst()
removes and returns the first node in the list.

<table>
  <tr>
    <th align="center">return</th>
    <th align="center">runtime</th>
  </tr>
  <tr>
    <td align="center"><a href="#linkedlistnodet">LinkedListNode&lt;T&gt;</a></td>
    <td align="center">O(1)</td>
  </tr>
</table>

```js
const removed = linkedList.removeFirst();
console.log(removed.getValue()); // 1
console.log(removed.getNext()); // null

console.log(linkedList.toArray()); // [2, 5, 3, 4, 5]
```

### .removeLast()
removes and returns the last node in the list.

<table>
  <tr>
    <th align="center">return</th>
    <th align="center">runtime</th>
  </tr>
  <tr>
    <td align="center">LinkedListNode&lt;T&gt;</td>
    <td>O(n)</td>
  </tr>
</table>

```js
const removed = linkedList.removeLast();
console.log(removed.getValue()); // 5
console.log(removed.getNext()); // null

console.log(linkedList.toArray()); // [2, 5, 3, 4]
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
    <td align="center">position: number</td>
    <td align="center"><a href="#linkedlistnodet">LinkedListNode&lt;T&gt;</a></td>
    <td align="center">O(1)</td>
  </tr>
</table>

```js
const removed = linkedList.removeAt(1);
console.log(removed.getValue()); // 5
console.log(removed.getNext()); // null

console.log(linkedList.toArray()); // [2, 3, 4]
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
    <td align="center">cb: (node: LinkedListNode&lt;T&gt;, position: number) => boolean</td>
    <td align="center">number</td>
    <td align="center">O(n)</td>
  </tr>
</table>

```js
const removedCount = linkedList.removeEach(
  (node, position) => node.getValue() > 2
);
console.log(removedCount); // 2
console.log(linkedList.toArray()); // [2]
```

### .clear()
clears the linked list.

<table>
  <tr>
    <th align="center">runtime</th>
  </tr>
  <tr>
    <td align="center">O(1)</td>
  </tr>
</table>

```js
linkedList.clear();
console.log(linkedList.count()); // 0
console.log(linkedList.head()); // null
```

### LinkedList.fromArray(values)
creates a linked list from an array.

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
      LinkedList&lt;T&gt;
    </td>
    <td align="center">
      O(n)
    </td>
  </tr>
</table>

##### JS
```js
const ll = LinkedList.fromArray([1, 2, 3, 4, 5]);
```

##### TS
```js
const ll = LinkedList.fromArray<number>([1, 2, 3, 4, 5]);
```

### LinkedListNode&lt;T&gt;

#### new LinkedListNode&lt;T&gt;(value, next)

<table>
  <tr><th>params</th></tr>
  <tr>
    <td>
      value: T
      <br />
      next: <a href="#linkedlistnodet">LinkedListNode&lt;T&gt;</a>
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

#### .setNext(next)

<table>
  <tr><th align="center">params</th></tr>
  <tr><td>next: <a href="#linkedlistnodet">LinkedListNode&lt;T&gt;</a></td></tr>
</table>


#### .getNext()

<table>
 <tr><th>return</th></tr>
 <tr><td><a href="#linkedlistnodet">LinkedListNode&lt;T&gt;</a></td></tr>
</table>

#### .hasNext()

<table>
 <tr><th>return</th></tr>
 <tr><td>boolean</td></tr>
</table>
