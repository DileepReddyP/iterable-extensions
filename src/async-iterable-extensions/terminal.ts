import { type FoldFunction, type ArgFunction } from "./common";

const reduceAsync = async <T, U>(
  asyncIterable: AsyncIterable<T>,
  reduceFn: FoldFunction<T, U>,
  initValue: U
): Promise<U> => {
  let count = 0;
  let acc = initValue;
  for await (const val of asyncIterable) {
    acc = await reduceFn(acc, val, count++);
  }
  return acc;
};

const forEachAsync = async <T>(
  asyncIterable: AsyncIterable<T>,
  callbackFn: ArgFunction<T, void>
): Promise<void> => {
  let count = 0;
  for await (const value of asyncIterable) {
    await callbackFn(value, count++);
  }
};

const toArrayAsync = async <T>(
  asyncIterable: AsyncIterable<T>
): Promise<Array<T>> => {
  const coll: T[] = [];
  for await (const val of asyncIterable) {
    coll.push(val);
  }
  return coll;
};

export { forEachAsync, reduceAsync, toArrayAsync };
