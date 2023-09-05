import { expect, test, describe } from 'vitest';
import { useList } from '.';

describe('useListのテスト', () => {
  test('初期データあり', () => {
    const [list] = useList([1, 2, 3, 4, 5]);

    expect(list.value).toEqual([1, 2, 3, 4, 5]);
  });

  test('空配列で初期化', () => {
    const [list] = useList([]);

    expect(list.value).toEqual([]);
  });

  test('setが行えるか', () => {
    const [list, { set }] = useList([1, 2, 3]);

    expect(list.value).toEqual([1, 2, 3]);

    set([4, 5, 6]);

    expect(list.value).toEqual([4, 5, 6]);
  });

  test('pushのテスト', () => {
    const [list, { push }] = useList([1, 2, 3]);

    expect(list.value).toEqual([1, 2, 3]);

    push(100);

    expect(list.value).toEqual([1, 2, 3, 100]);
  });

  test('unshiftのテスト', () => {
    const [list, { unshift }] = useList([1, 2, 3]);

    expect(list.value).toEqual([1, 2, 3]);

    unshift(100);

    expect(list.value).toEqual([100, 1, 2, 3]);
  });

  test('clearのテスト', () => {
    const [list, { clear }] = useList([1, 2, 3]);

    expect(list.value).toEqual([1, 2, 3]);

    clear();

    expect(list.value).toEqual([]);
  });
  test('insertAtのテスト', () => {
    const [list, { insertAt }] = useList([1, 2, 3]);

    expect(list.value).toEqual([1, 2, 3]);

    insertAt(1, 100);

    expect(list.value).toEqual([1, 100, 2, 3]);
  });
  test('removeAtのテスト', () => {
    const [list, { removeAt }] = useList([1, 2, 3]);

    expect(list.value).toEqual([1, 2, 3]);

    removeAt(1);

    expect(list.value).toEqual([1, 3]);
  });
  test('updateAtのテスト', () => {
    const [list, { updateAt }] = useList([1, 2, 3]);

    expect(list.value).toEqual([1, 2, 3]);

    updateAt(1, 50);

    expect(list.value).toEqual([1, 50, 3]);
  });
  test('filterのテスト', () => {
    const [list, { filter }] = useList([1, 2, 3]);

    expect(list.value).toEqual([1, 2, 3]);

    filter((e) => e % 2 === 0);

    expect(list.value).toEqual([2]);
  });
  test('sortのテスト', () => {
    const [list, { sort }] = useList([3, 2, 1]);

    expect(list.value).toEqual([3, 2, 1]);

    sort((a, b) => a - b);

    expect(list.value).toEqual([1, 2, 3]);
  });
});
