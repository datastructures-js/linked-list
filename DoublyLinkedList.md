# DoublyLinkedList

<img width="552" alt="Doubly Linked List" src="https://user-images.githubusercontent.com/6517308/35762752-19b17df4-0862-11e8-8ce3-f940d83dde51.png">

# Table of Contents
* [Install](#install)
* [require](#require)
* [import](#import)
* [API](#api)
  * [new](#new)
  * [.insertFirst(value)](#insertfirstvalue)
  * [.insertLast(value)](#insertlastvalue)
  * [.insertAt(position, value)](#insertatposition-value)
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
  * [.remove(node)](#removenode)
  * [.removeAt(position)](#removeatposition)
  * [.removeEach(cb)](#removeeachcb)
  * [.clear()](#clear)
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

### new

```js
const doublyLinkedList = new DoublyLinkedList();
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
    <td align="center">value: any</td>
    <td align="center"><a href="#doublylinkedlistnode">DoublyLinkedListNode</a></td>
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
    <td align="center">value: any</td>
    <td align="center"><a href="#doublylinkedlistnode">DoublyLinkedListNode</a></td>
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
      value: any
    </td>
    <td align="center"><a href="#doublylinkedlistnode">DoublyLinkedListNode</a></td>
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
    <td align="center">cb: function</td>
    <td align="center">O(n)</td>
  </tr>
</table>

```js
doublyLinkedList.forEach((node, position) => console.log(node.getValue(), position));
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
    <td align="center">cb: function</td>
    <td align="center">O(n)</td>
  </tr>
</table>

```js
doublyLinkedList.forEachReverse((node, position) => console.log(node.getValue(), position));
/*
5 5
4 4
3 3
5 2
2 1
1 0
*/
```

### .find(cb)
Finds the first node that returns true from the callback or null if nothing found.

<table>
  <tr>
    <th align="center">params</th>
    <th align="center">return</th>
    <th align="center">runtime</th>
  </tr>
  <tr>
    <td align="center">
      cb: function
    </td>
    <td align="center">
      <a href="#doublylinkedlistnode">DoublyLinkedListNode</a>
    </td>
    <td align="center">O(n)</td>
  </tr>
</table>

```js
const node5 = doublyLinkedList.find((node, position) => node.getValue() === 5);
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
      cb: function
    </td>
    <td align="center">
      <a href="#doublylinkedlist">DoublyLinkedList</a>
    </td>
    <td align="center">
      O(n)
    </td>
  </tr>
</table>

```js
const filterLinkedList = doublyLinkedList.filter((node, position) => node.getValue() > 2);
filterLinkedList.forEach((node, position) => console.log(node.getValue(), position));
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
      array
    </td>
    <td align="center">
      O(n)
    </td>
  </tr>
</table>

```js
console.log(doublyLinkedList.toArray()); // [2, 1, 5, 3, 4]
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
      LinkedListNode | DoublyLinkedListNode
    </td>
    <td align="center">
      O(1)
    </td>
  </tr>
</table>

```js
console.log(linkedList.head().getValue()); // 2

console.log(doublyLinkedList.head().getValue()); // 2
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
      DoublyLinkedListNode
    </td>
    <td align="center">
      O(1)
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
console.log(linkedList.count()); // 5

console.log(doublyLinkedList.count()); // 5
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
      LinkedListNode | DoublyLinkedListNode
    </td>
    <td align="center">
      O(1)
    </td>
  </tr>
</table>

```js
linkedList.removeFirst();

doublyLinkedList.removeFirst();
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
      LinkedListNode | DoublyLinkedListNode
    </td>
    <td>
      LinkedList: O(n)
      <br />
      DoublyLinkedList: O(1)
    </td>
  </tr>
</table>

```js
linkedList.removeLast();

doublyLinkedList.removeLast();
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
      LinkedListNode | DoublyLinkedListNode
    </td>
    <td align="center">
      O(1)
    </td>
  </tr>
</table>

```js
linkedList.removeAt(1);

doublyLinkedList.removeAt(1);
```

### .removeEach(cb)
Loop on the linked list from beginning to end, removes the nodes that returns a list of the removed nodes.

<table>
  <tr>
    <th align="center">params</th>
    <th align="center">return</th>
    <th align="center">runtime</th>
  </tr>
  <tr>
    <td align="center">
      cb: function
    </td>
    <td align="center">
      array&lt;LinkedListNode | DoublyLinkedListNode&gt;
    </td>
    <td align="center">
      O(n)
    </td>
  </tr>
</table>

```js
linkedList.removeEach((node, position) => node.getValue() > 1);
console.log(linkedList.toArray()); // [1]

doublyLinkedList.removeEach((node, position) => node.getValue() > 1);
console.log(doublyLinkedList.toArray()); // [1]
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
linkedList.clear();
console.log(linkedList.count()); // 0
console.log(linkedList.head()); // null

doublyLinkedList.clear();
console.log(linkedList.count()); // 0
console.log(doublyLinkedList.head()); // null
console.log(doublyLinkedList.tail()); // null
```

### LinkedListNode

#### new LinkedListNode(value, next)

<table>
  <tr><th>params</th></tr>
  <tr>
    <td>
      value: any
      <br />
      next: LinkedListNode
    </td>
  </tr>
</table>

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
  <tr><th align="center">params</th></tr>
  <tr><td>next: LinkedListNode</td></tr>
</table>


#### .getNext()
returns the next connected node or null if it's the last node.

<table>
 <tr><th>return</th></tr>
 <tr><td>LinkedListNode</td></tr>
</table>

### DoublyLinkedListNode

#### new DoublyLinkedListNode(value, prev, next)

<table>
  <tr><th>params</th></tr>
  <tr>
    <td>
      value: any
      <br />
      prev: DoublyLinkedListNode
      <br />
      next: DoublyLinkedListNode
    </td>
  </tr>
</table>

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
