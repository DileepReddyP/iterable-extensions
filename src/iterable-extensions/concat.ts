import { type Transform } from "./common";

type ConcatType = {
  <I1, I2>(...extraIterables: [Iterable<I2>]): Transform<I1, I1 | I2>;

  <I1, I2, I3>(...extraIterables: [Iterable<I2>, Iterable<I3>]): Transform<
    I1,
    I1 | I2 | I3
  >;

  <I1, I2, I3, I4>(
    ...extraIterables: [Iterable<I2>, Iterable<I3>, Iterable<I4>]
  ): Transform<I1, I1 | I2 | I3 | I4>;

  <I1, I2, I3, I4, I5>(
    ...extraIterables: [Iterable<I2>, Iterable<I3>, Iterable<I4>, Iterable<I5>]
  ): Transform<I1, I1 | I2 | I3 | I4 | I5>;

  <I1, I2, I3, I4, I5, I6>(
    ...extraIterables: [
      Iterable<I2>,
      Iterable<I3>,
      Iterable<I4>,
      Iterable<I5>,
      Iterable<I6>
    ]
  ): Transform<I1, I1 | I2 | I3 | I4 | I5 | I6>;

  <I1, I2, I3, I4, I5, I6, I7>(
    ...extraIterables: [
      Iterable<I2>,
      Iterable<I3>,
      Iterable<I4>,
      Iterable<I5>,
      Iterable<I6>,
      Iterable<I7>
    ]
  ): Transform<I1, I1 | I2 | I3 | I4 | I5 | I6 | I7>;

  <I1, I2, I3, I4, I5, I6, I7, I8>(
    ...extraIterables: [
      Iterable<I2>,
      Iterable<I3>,
      Iterable<I4>,
      Iterable<I5>,
      Iterable<I6>,
      Iterable<I7>,
      Iterable<I8>
    ]
  ): Transform<I1, I1 | I2 | I3 | I4 | I5 | I6 | I7 | I8>;
};

const concat: ConcatType = (
  ...extraIterables: Array<Iterable<any>>
): Transform<any, any> => {
  return function* (iterable: Iterable<any>) {
    yield* iterable;
    for (const newIterator of extraIterables) {
      yield* newIterator;
    }
  };
};

export default concat;