import {
  type ArgFunction,
  type FoldFunction,
  type AsyncTransform,
} from "./common";

const mapAsync = <In, Out>(
  mapFn: ArgFunction<In, Out>
): AsyncTransform<In, Out> => {
  return async function* (asyncIterable: AsyncIterable<In>) {
    let count = 0;
    for await (const value of asyncIterable) {
      yield await mapFn(value, count++);
    }
  };
};

const filterAsync = <T>(
  filterFn: ArgFunction<T, boolean>
): AsyncTransform<T, T> => {
  return async function* (asyncIterable: AsyncIterable<T>) {
    let count = 0;
    for await (const value of asyncIterable) {
      if (await filterFn(value, count++)) {
        yield value;
      }
    }
  };
};

const tapAsync = <T>(
  callbackFn: ArgFunction<T, void>
): AsyncTransform<T, T> => {
  return async function* (asyncIterable: AsyncIterable<T>) {
    let count = 0;
    for await (const value of asyncIterable) {
      await callbackFn(value, count++);
      yield value;
    }
  };
};

const scanAsync = <T, U>(
  scanFn: FoldFunction<T, U>,
  initValue: U
): AsyncTransform<T, U> => {
  return async function* (asyncIterable: AsyncIterable<T>) {
    let count = 0;
    let acc = initValue;
    for await (const value of asyncIterable) {
      acc = await scanFn(acc, value, count++);
      yield acc;
    }
  };
};

const takeAsync = <T>(n: number): AsyncTransform<T, T> => {
  return async function* (asyncIterable: AsyncIterable<T>) {
    let count = 0;
    for await (const value of asyncIterable) {
      if (count++ === n) {
        return;
      }
      yield value;
    }
  };
};

const dropAsync = <T>(n: number): AsyncTransform<T, T> => {
  return async function* (asyncIterable: AsyncIterable<T>) {
    let count = 0;
    for await (const value of asyncIterable) {
      if (count++ < n) {
        continue;
      }
      yield value;
    }
  };
};

const takeWhileAsync = <T>(
  predicate: ArgFunction<T, boolean>
): AsyncTransform<T, T> => {
  return async function* (asyncIterable: AsyncIterable<T>) {
    let count = 0;
    for await (const value of asyncIterable) {
      if (!(await predicate(value, count++))) {
        return;
      }
      yield value;
    }
  };
};

const dropWhileAsync = <T>(
  predicate: ArgFunction<T, boolean>
): AsyncTransform<T, T> => {
  return async function* (asyncIterable: AsyncIterable<T>) {
    let dropActive = true;
    let count = 0;
    for await (const value of asyncIterable) {
      if (dropActive) {
        if (await predicate(value, count++)) {
          continue;
        }
        dropActive = false;
      }
      yield value;
    }
  };
};

export {
  dropAsync,
  dropWhileAsync,
  mapAsync,
  filterAsync,
  scanAsync,
  takeAsync,
  takeWhileAsync,
  tapAsync,
};
