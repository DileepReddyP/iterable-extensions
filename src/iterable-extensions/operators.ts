import { type ArgFunction, type FoldFunction, type Transform } from "./common";

const map = <In, Out>(mapFn: ArgFunction<In, Out>): Transform<In, Out> => {
  return function* (iterable: Iterable<In>) {
    let count = 0;
    for (const value of iterable) {
      yield mapFn(value, count++);
    }
  };
};

const filter = <T>(filterFn: ArgFunction<T, boolean>): Transform<T, T> => {
  return function* (iterable: Iterable<T>) {
    let count = 0;
    for (const value of iterable) {
      if (filterFn(value, count++)) {
        yield value;
      }
    }
  };
};

const tap = <T>(callbackFn: ArgFunction<T, void>): Transform<T, T> => {
  return function* (iterable: Iterable<T>) {
    let count = 0;
    for (const value of iterable) {
      callbackFn(value, count++);
      yield value;
    }
  };
};

const scan = <T, U>(
  scanFn: FoldFunction<T, U>,
  initValue: U
): Transform<T, U> => {
  return function* (iterable: Iterable<T>) {
    let count = 0;
    let acc = initValue;
    for (const value of iterable) {
      acc = scanFn(acc, value, count++);
      yield acc;
    }
  };
};

const take = <T>(n: number): Transform<T, T> => {
  return function* (iterator: Iterable<T>) {
    let count = 0;
    for (const value of iterator) {
      if (count++ === n) {
        return;
      }
      yield value;
    }
  };
};

const drop = <T>(n: number): Transform<T, T> => {
  return function* (iterator: Iterable<T>) {
    let count = 0;
    for (const value of iterator) {
      if (count++ < n) {
        continue;
      }
      yield value;
    }
  };
};

const takeWhile = <T>(predicate: ArgFunction<T, boolean>): Transform<T, T> => {
  return function* (iterator: Iterable<T>) {
    let count = 0;
    for (const value of iterator) {
      if (!predicate(value, count++)) {
        return;
      }
      yield value;
    }
  };
};

const dropWhile = <T>(predicate: ArgFunction<T, boolean>): Transform<T, T> => {
  return function* (iterator: Iterable<T>) {
    let dropActive = true;
    let count = 0
    for (const value of iterator) {
      if (dropActive) {
        if (predicate(value, count++)) {
          continue;
        }
        dropActive = false;
      }
      yield value;
    }
  };
};

export { default as compose } from "./compose";
export { default as concat } from "./concat";
export { default as zip } from "./zip";
export * from "./flatten";
export { drop, dropWhile, map, filter, scan, take, takeWhile, tap };
