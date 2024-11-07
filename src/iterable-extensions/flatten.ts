import { type ArgFunction, type Transform, isIterable } from "./common";

const flatten = (depth = 1): Transform<any, any> => {
  return function* (iterable: Iterable<any>) {
    if (depth === 0) {
      yield* iterable;
      return;
    }
    for (const value of iterable) {
      if (isIterable(value)) {
        yield* flatten(depth - 1)(value);
      } else {
        yield value;
      }
    }
  };
};

const flatMap = (mapFn: ArgFunction<any, any>, depth = 1): Transform<any, any> => {
  return function* (iterable: Iterable<any>) {
    let count = 0
    for (const value of iterable) {
      const mappedValue = mapFn(value, count++);
      if (isIterable(mappedValue)) {
        yield* flatten(depth - 1)(mappedValue);
      } else {
        yield mappedValue;
      }
    }
  };
};

export { flatten, flatMap };
