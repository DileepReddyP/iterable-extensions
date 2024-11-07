import { type AsyncTransform } from "./common";

type ConcatType = {
  <I1, I2>(...extraAsyncIterables: [AsyncIterable<I2>]): AsyncTransform<I1, I1 | I2>;

  <I1, I2, I3>(...extraAsyncIterables: [AsyncIterable<I2>, AsyncIterable<I3>]): AsyncTransform<
    I1,
    I1 | I2 | I3
  >;

  <I1, I2, I3, I4>(
    ...extraAsyncIterables: [AsyncIterable<I2>, AsyncIterable<I3>, AsyncIterable<I4>]
  ): AsyncTransform<I1, I1 | I2 | I3 | I4>;

  <I1, I2, I3, I4, I5>(
    ...extraAsyncIterables: [AsyncIterable<I2>, AsyncIterable<I3>, AsyncIterable<I4>, AsyncIterable<I5>]
  ): AsyncTransform<I1, I1 | I2 | I3 | I4 | I5>;

  <I1, I2, I3, I4, I5, I6>(
    ...extraAsyncIterables: [
      AsyncIterable<I2>,
      AsyncIterable<I3>,
      AsyncIterable<I4>,
      AsyncIterable<I5>,
      AsyncIterable<I6>
    ]
  ): AsyncTransform<I1, I1 | I2 | I3 | I4 | I5 | I6>;

  <I1, I2, I3, I4, I5, I6, I7>(
    ...extraAsyncIterables: [
      AsyncIterable<I2>,
      AsyncIterable<I3>,
      AsyncIterable<I4>,
      AsyncIterable<I5>,
      AsyncIterable<I6>,
      AsyncIterable<I7>
    ]
  ): AsyncTransform<I1, I1 | I2 | I3 | I4 | I5 | I6 | I7>;

  <I1, I2, I3, I4, I5, I6, I7, I8>(
    ...extraAsyncIterables: [
      AsyncIterable<I2>,
      AsyncIterable<I3>,
      AsyncIterable<I4>,
      AsyncIterable<I5>,
      AsyncIterable<I6>,
      AsyncIterable<I7>,
      AsyncIterable<I8>
    ]
  ): AsyncTransform<I1, I1 | I2 | I3 | I4 | I5 | I6 | I7 | I8>;
};

const concatAsync: ConcatType = (
  ...extraAsyncIterables: Array<AsyncIterable<any>>
): AsyncTransform<any, any> => {
  return async function* (asyncIterable: AsyncIterable<any>) {
    yield* asyncIterable;
    for (const newIterator of extraAsyncIterables) {
      yield* newIterator;
    }
  };
};

export default concatAsync;