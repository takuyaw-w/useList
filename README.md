# @takuyaw-w/useList

@takuyaw-w/useList is a custom hook for Vue 3. This custom hook allows you to easily manage and manipulate lists. It encapsulates the state of the list and provides convenient methods.

## Installation

You can install this custom hook using the following command:

```bash
npm install @takuyaw-w/uselist
```

## Usage

Example of importing and using the custom hook:

```typescript
import { useList } from '@takuyaw-w/useList';

// Initialize the custom hook to manage the list
const [list, actions] = useList([1,2,3]);

// List operations
actions.push(4);
actions.removeAt(1);

// Display the state of the list
console.log(list.value); // [1,3,4]
```

## Methods

The useList custom hook provides the following methods:

- set(newList) - Replaces the list with a new list.
- push(element) - Adds an element to the end of the list.
- unshift(element) - Adds an element to the beginning of the list.
- clear() - Empties the list.
- insertAt(index, element) - Inserts an element at the specified index.
- removeAt(index) - Removes the element at the specified index.
- updateAt(index, element) - Replaces the element at the specified index with a new element.
- filter(condition) - Keeps only the elements that match the condition in the list.
- sort(compareFn) - Sorts the list based on a custom comparison function.
