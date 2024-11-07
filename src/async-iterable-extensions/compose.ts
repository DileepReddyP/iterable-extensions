import { type AsyncTransform } from "./common";

type ComposeType = {
  <In, Out>(
    asyncIterable: AsyncIterable<In>,
    operators: [AsyncTransform<In, Out>]
  ): AsyncIterable<Out>;

  <In, S1, Out>(
    asyncIterable: AsyncIterable<In>,
    operators: [
      AsyncTransform<In, S1>,
      AsyncTransform<S1, Out>,
    ]
  ): AsyncIterable<Out>;

  <In, S1, S2, Out>(
    asyncIterable: AsyncIterable<In>,
    operators: [
      AsyncTransform<In, S1>,
      AsyncTransform<S1, S2>,
      AsyncTransform<S2, Out>,
    ]
  ): AsyncIterable<Out>;

  <In, S1, S2, S3, Out>(
    asyncIterable: AsyncIterable<In>,
    operators: [
      AsyncTransform<In, S1>,
      AsyncTransform<S1, S2>,
      AsyncTransform<S2, S3>,
      AsyncTransform<S3, Out>,
    ]
  ): AsyncIterable<Out>;

  <In, S1, S2, S3, S4, Out>(
    asyncIterable: AsyncIterable<In>,
    operators: [
      AsyncTransform<In, S1>,
      AsyncTransform<S1, S2>,
      AsyncTransform<S2, S3>,
      AsyncTransform<S3, S4>,
      AsyncTransform<S4, Out>,
    ]
  ): AsyncIterable<Out>;

  <In, S1, S2, S3, S4, S5, Out>(
    asyncIterable: AsyncIterable<In>,
    operators: [
      AsyncTransform<In, S1>,
      AsyncTransform<S1, S2>,
      AsyncTransform<S2, S3>,
      AsyncTransform<S3, S4>,
      AsyncTransform<S4, S5>,
      AsyncTransform<S5, Out>,
    ]
  ): AsyncIterable<Out>;

  <In, S1, S2, S3, S4, S5, S6, Out>(
    asyncIterable: AsyncIterable<In>,
    operators: [
      AsyncTransform<In, S1>,
      AsyncTransform<S1, S2>,
      AsyncTransform<S2, S3>,
      AsyncTransform<S3, S4>,
      AsyncTransform<S4, S5>,
      AsyncTransform<S5, S6>,
      AsyncTransform<S6, Out>,
    ]
  ): AsyncIterable<Out>;

  <In, S1, S2, S3, S4, S5, S6, S7, Out>(
    asyncIterable: AsyncIterable<In>,
    operators: [
      AsyncTransform<In, S1>,
      AsyncTransform<S1, S2>,
      AsyncTransform<S2, S3>,
      AsyncTransform<S3, S4>,
      AsyncTransform<S4, S5>,
      AsyncTransform<S5, S6>,
      AsyncTransform<S6, S7>,
      AsyncTransform<S7, Out>,
    ]
  ): AsyncIterable<Out>;

  <In, S1, S2, S3, S4, S5, S6, S7, S8, Out>(
    asyncIterable: AsyncIterable<In>,
    operators: [
      AsyncTransform<In, S1>,
      AsyncTransform<S1, S2>,
      AsyncTransform<S2, S3>,
      AsyncTransform<S3, S4>,
      AsyncTransform<S4, S5>,
      AsyncTransform<S5, S6>,
      AsyncTransform<S6, S7>,
      AsyncTransform<S7, S8>,
      AsyncTransform<S8, Out>,
    ]
  ): AsyncIterable<Out>;

  <In, S1, S2, S3, S4, S5, S6, S7, S8, S9, Out>(
    asyncIterable: AsyncIterable<In>,
    operators: [
      AsyncTransform<In, S1>,
      AsyncTransform<S1, S2>,
      AsyncTransform<S2, S3>,
      AsyncTransform<S3, S4>,
      AsyncTransform<S4, S5>,
      AsyncTransform<S5, S6>,
      AsyncTransform<S6, S7>,
      AsyncTransform<S7, S8>,
      AsyncTransform<S8, S9>,
      AsyncTransform<S9, Out>,
    ]
  ): AsyncIterable<Out>;

  <In, S1, S2, S3, S4, S5, S6, S7, S8, S9, S10, Out>(
    asyncIterable: AsyncIterable<In>,
    operators: [
      AsyncTransform<In, S1>,
      AsyncTransform<S1, S2>,
      AsyncTransform<S2, S3>,
      AsyncTransform<S3, S4>,
      AsyncTransform<S4, S5>,
      AsyncTransform<S5, S6>,
      AsyncTransform<S6, S7>,
      AsyncTransform<S7, S8>,
      AsyncTransform<S8, S9>,
      AsyncTransform<S9, S10>,
      AsyncTransform<S10, Out>,
    ]
  ): AsyncIterable<Out>;
};

const composeAsync: ComposeType = (
  asyncIterable: AsyncIterable<any>,
  operators: Array<AsyncTransform<any, any>>
): AsyncIterable<any> => {
  for (const operator of operators) {
    asyncIterable = operator(asyncIterable);
  }
  return asyncIterable;
};

export default composeAsync;
