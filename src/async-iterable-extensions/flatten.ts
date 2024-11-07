import { flatten } from "../iterable-extensions";
import { isIterable } from "../iterable-extensions/common";
import {
  type ArgFunction,
  type AsyncTransform,
  isAsyncIterable,
} from "./common";

const flattenAsync = (depth = 1): AsyncTransform<any, any> => {
  return async function* (asyncIterable: AsyncIterable<any>) {
    if (depth === 0) {
      yield* asyncIterable;
      return;
    }
    for await (const value of asyncIterable) {
      if (isAsyncIterable(value)) {
        yield* flattenAsync(depth - 1)(value);
      } else {
        yield value;
      }
    }
  };
};

const flatMapAsync = (
  mapFn: ArgFunction<any, any>,
  depth = 1
): AsyncTransform<any, any> => {
  return async function* (asyncIterable: AsyncIterable<any>) {
    let count = 0;
    for await (const value of asyncIterable) {
      const mappedValue = await mapFn(value, count++);
      if (isAsyncIterable(mappedValue)) {
        yield* flattenAsync(depth - 1)(mappedValue);
      } else if (isIterable(mappedValue)) {
        yield* flatten(depth - 1)(mappedValue)
      } else {
        yield mappedValue;
      }
    }
  };
};

export { flattenAsync, flatMapAsync };
