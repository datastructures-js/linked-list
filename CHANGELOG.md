# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]
## [6.1.3] - 2024-07-14
### Fixed
- jsdocs

## [6.1.2] - 2024-07-13
### Fixed
- LinkedList `removeEach` edge case to disconnect removed nodes from the remaining nodes in the list.
- LinkedList & DoublyLinkedList ts types, remove the necessity to cast to the custom node type in functions.

## [6.1.1] - 2023-09-16
### Fixed
- `toArray` fix ts return type.

## [6.1.0] - 2023-05-28
### Added
- `insertBefore` to add a node before an existing node in the DoublyLinkedList.
- `insertAfter` to add a node after an existing node in the DoublyLinkedList.

## [6.0.0] - 2023-03-20
### Changed
- Allow inserting node types into the linked list.

## [5.2.5] - 2023-01-09
### Fixed
- a bug in `removeEach`.

## [5.2.4] - 2022-09-04
### Fixed
- typo in LinkedListNode.

## [5.2.3] - 2022-08-15
### Fixed
- add types to package.json

## [5.2.2] - 2022-06-19
### Fixed
- readme.

## [5.2.1] - 2022-02-16
### Fixed
- TS types and readme.

## [5.2.0] - 2022-02-14
### Added
- `.find` now accepts a second param as the starting node in both types.
- `.findReverse` added to DoublyLinkedList.
- `.fromArray` static method added to both types.

## [5.1.1] - 2021-06-20
### Fixed
- index.d.ts

## [5.1.0] - 2021-06-14
### Added
- typescript.

## [5.0.1] - 2021-04-12
### Fixed
- README

## [5.0.0] - 2021-04-12

### Changed
- insert/remove methods now all returns the inserted/removed nodes.
- `insertLast` in LinkedList now accepts a starting node as a second param, useful to insert a node at the end in O(1) runtime.
- `removeEach` now returns the number of removed nodes.

### Added
- `remove(node)` to DoublyLinkedList to remove any node in O(1) runtime.
- `hasNext`/`hasPrev` cleaner checks of connected nodes to Node classes.

### Fixed
- bug in removeEach method.
- improved README, splitted LinkedList/DoublyLinkedList readmes.

## [4.0.0] - 2021-02-16

### Changed
- `.removeFirst()`, `.removeLast()`, `.removeAt`, `.removeEach` now return the removed nodes.


## [3.0.3] - 2021-01-30

### Fixed
- `.removeFirst()` when removing first from a single-node linked list.

## [3.0.2] - 2021-01-02

### Fixed
- readme

## [3.0.1] - 2021-01-02

### Fixed
- readme

## [3.0.0] - 2020-12-30
### Changed
- `.insertAt(position, value)` position now comes first then value.
- `.insert*` methods now returns a `this` reference so it can be chained.
- `.forEach(cb)` callback now gets called with node and position (starting from 0);
- `.forEachReverse(cb)` callback now gets called with node and position (starting from size -1);
- `LinkedListNode` & `DoublyLinkedListNode` classes are now exported in index.

### Fixed
- jsdoc
- readme

## [2.0.3] - 2020-04-04
### Added
`.isEmpty()` method for LinkedList & DoublyLinkedList.

### Fixed
- README & jsdocs

## [2.0.2] - 2020-03-22
### Fixed
- jsdocs

## [2.0.1] - 2020-03-22
### Fixed
- Readme & package.json

## [2.0.0] - 2020-03-22
### Changed
- New release for LinkedList & DoublyLinkedList
