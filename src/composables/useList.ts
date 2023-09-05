import { ref, type Ref } from 'vue';

type ListActions<T> = {
  set: (newList: T[]) => void;
  push: (element: T) => void;
  unshift: (element: T) => void;
  removeAt: (index: number) => void;
  insertAt: (index: number, element: T) => void;
  updateAt: (index: number, element: T) => void;
  clear: () => void;
  filter: (condition: (element: T) => boolean) => void;
  sort: (compareFn: (a: T, b: T) => number) => void;
};

export function useList<T>(defaultList?: T[]): [Ref<T[]>, ListActions<T>] {
  const list = ref<T[]>(defaultList ?? []) as Ref<T[]>;

  const actions: ListActions<T> = {
    set(newList) {
      list.value = newList;
    },
    push(element) {
      list.value.push(element);
    },
    unshift(element) {
      list.value.unshift(element);
    },
    clear() {
      list.value = [];
    },
    insertAt(index, element) {
      list.value.splice(index, 0, element);
    },
    removeAt(index) {
      list.value.splice(index, 1);
    },
    updateAt(index, element) {
      list.value.splice(index, 1, element);
    },
    filter(condition) {
      list.value = list.value.filter(condition);
    },
    sort(compareFn) {
      list.value.sort(compareFn);
    }
  };

  return [list, actions];
}
