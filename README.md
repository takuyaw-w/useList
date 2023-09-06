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
import { useList } from '@takuyaw-w/uselist';

// Initialize the custom hook to manage the list
const [list, actions] = useList([1,2,3]);

// List operations
actions.push(4);
actions.removeAt(1);

// Display the state of the list
console.log(list.value); // [1,3,4]
```

## Parametor

|Name|Type|Description|
|---|---|---|
|defaultList|T[]|The initial list of elements. Default is an empty array.|

## Return Value

|Name|Parameters|Description|
|---|---|---|
|[0]||The current list of elements.|
|[1].set|newList: T[]|Replaces the list with a new list.|
|[1].push|element: T|Adds an element to the end of the list.|
|[1].unshift|element: T|Adds an element to the beginning of the list.|
|[1].removeAt|index: number|Removes the element at the specified index.|
|[1].insertAt|index: number, element: T|Inserts an element at the specified index.|
|[1].updateAt|index: number, element: T|Replaces the element at the specified index with a new element.|
|[1].clear||Empties the list.|
|[1].filter|condition: (element: T) => boolean|Keeps only the elements that match the condition in the list.|
|[1].sort|compareFn: (a: T, b: T) => number|Sorts the list based on a custom comparison function.|
