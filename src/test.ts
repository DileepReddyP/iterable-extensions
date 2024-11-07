import {
  compose,
  concat,
  drop,
  dropWhile,
  filter,
  flatMap,
  flatten,
  map,
  scan,
  take,
  takeWhile,
  tap,
  zip,
  reduce,
} from "./iterable-extensions";

import {
  composeAsync,
  concatAsync,
  dropAsync,
  dropWhileAsync,
  filterAsync,
  flatMapAsync,
  flattenAsync,
  mapAsync,
  scanAsync,
  takeAsync,
  takeWhileAsync,
  tapAsync,
  zipAsync,
  reduceAsync,
} from "./async-iterable-extensions";

let finalFunc: string, finalAsyncFunc: string;

function* range(start, stop, step = 1) {
  for (let i = start; i < stop; i += step) {
    yield i;
  }
}

const rangeModded1 = compose(range(10, 1000, 10), [
  drop(10),
  map((x: number) => x + 10),
  takeWhile((x: number) => x < 500),
  dropWhile((x: number) => x < 200),
  take<number>(3),
  tap((x) => console.log(x, "1")),
  filter((x: number) => x % 20 == 0),
  concat(range(1, 10, 2)),
  scan((_, b: number) => b, 0),
  tap<number>((x) => console.log(x, "2")),
]);

const rangeModded2 = compose(rangeModded1, [
  map((x: number) => x.toString()),
  flatMap((x: string) => [[[x]]], 3),
  tap<string>((x) => console.log(x, "3")),
  zip<string, string, string>(["a", "b", "c"], ["d", "e", "f"]),
]);

finalFunc = reduce(rangeModded2, (a, b) => a + b, "");

// console.log(
//   ...compose(
//     [1, 2, 1],
//     [
//       flatMap((a) => (a == 2 ? [[2, 2]] : 1)),
//       flatten(1),
//       map((v: number) => v * 2),
//       drop(2),
//       tap((v) => console.log(v, "fl")),
//       take(1),
//     ]
//   )
// );

async function* timedRange(
  start: number,
  stop: number,
  step = 1,
  timeout = 1000
) {
  for (let i = start; i < stop; i += step) {
    await new Promise((resolve) => setTimeout(resolve, timeout));
    yield i;
  }
}

async function* asyncString(arr: string[]) {
  for (let i of arr) {
    yield i;
  }
}

const AsyncRangeModded1 = composeAsync(timedRange(10, 1000, 10, 100), [
  dropAsync(10),
  mapAsync((x: number) => x + 10),
  takeWhileAsync((x: number) => x < 500),
  dropWhileAsync((x: number) => x < 200),
  takeAsync(3),
  tapAsync<number>((x) => console.log(x, "1")),
  filterAsync<number>((x: number) => x % 20 == 0),
  concatAsync(timedRange(1, 10, 2, 100)),
  scanAsync((_, b: number) => b, 0),
  tapAsync<number>((x) => console.log(x, "2")),
]);

const AsyncRangeModded2 = composeAsync(AsyncRangeModded1, [
  mapAsync((x: number) => x.toString()),
  flatMapAsync((x: string) => [[[x]]], 3),
  tapAsync<string>((x) => console.log(x, "3")),
  zipAsync<string, string, string>(
    asyncString(["a", "b", "c"]),
    asyncString(["d", "e", "f"])
  ),
]);

finalAsyncFunc = await reduceAsync(AsyncRangeModded2, (a, b) => a + b, "");
console.assert(finalAsyncFunc === finalFunc);
