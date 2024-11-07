import { type FoldFunction, type ArgFunction } from "./common";

const reduce = <T, U>(
  iterable: Iterable<T>,
  reduceFn: FoldFunction<T, U>,
  initValue: U
): U => {
  let count = 0;
  let acc = initValue;
  for (const val of iterable) {
    acc = reduceFn(acc, val, count++);
  }
  return acc;
};

const forEach = <T>(
  iterable: Iterable<T>,
  callbackFn: ArgFunction<T, void>
): void => {
  let count = 0
  for (const value of iterable) {
    callbackFn(value, count++);
  }
};

const toArray = <T>(iterable: Iterable<T>): Array<T> => {
  return [...iterable];
};

export { forEach, reduce, toArray };
