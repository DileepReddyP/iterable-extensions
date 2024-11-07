import { type Transform } from "./common";

type ComposeType = {
  <In, Out>(
    iterable: Iterable<In>,
    operators: [Transform<In, Out>]
  ): Iterable<Out>;

  <In, S1, Out>(
    iterable: Iterable<In>,
    operators: [
      Transform<In, S1>,
      Transform<S1, Out>,
    ]
  ): Iterable<Out>;

  <In, S1, S2, Out>(
    iterable: Iterable<In>,
    operators: [
      Transform<In, S1>,
      Transform<S1, S2>,
      Transform<S2, Out>,
    ]
  ): Iterable<Out>;

  <In, S1, S2, S3, Out>(
    iterable: Iterable<In>,
    operators: [
      Transform<In, S1>,
      Transform<S1, S2>,
      Transform<S2, S3>,
      Transform<S3, Out>,
    ]
  ): Iterable<Out>;

  <In, S1, S2, S3, S4, Out>(
    iterable: Iterable<In>,
    operators: [
      Transform<In, S1>,
      Transform<S1, S2>,
      Transform<S2, S3>,
      Transform<S3, S4>,
      Transform<S4, Out>,
    ]
  ): Iterable<Out>;

  <In, S1, S2, S3, S4, S5, Out>(
    iterable: Iterable<In>,
    operators: [
      Transform<In, S1>,
      Transform<S1, S2>,
      Transform<S2, S3>,
      Transform<S3, S4>,
      Transform<S4, S5>,
      Transform<S5, Out>,
    ]
  ): Iterable<Out>;

  <In, S1, S2, S3, S4, S5, S6, Out>(
    iterable: Iterable<In>,
    operators: [
      Transform<In, S1>,
      Transform<S1, S2>,
      Transform<S2, S3>,
      Transform<S3, S4>,
      Transform<S4, S5>,
      Transform<S5, S6>,
      Transform<S6, Out>,
    ]
  ): Iterable<Out>;

  <In, S1, S2, S3, S4, S5, S6, S7, Out>(
    iterable: Iterable<In>,
    operators: [
      Transform<In, S1>,
      Transform<S1, S2>,
      Transform<S2, S3>,
      Transform<S3, S4>,
      Transform<S4, S5>,
      Transform<S5, S6>,
      Transform<S6, S7>,
      Transform<S7, Out>,
    ]
  ): Iterable<Out>;

  <In, S1, S2, S3, S4, S5, S6, S7, S8, Out>(
    iterable: Iterable<In>,
    operators: [
      Transform<In, S1>,
      Transform<S1, S2>,
      Transform<S2, S3>,
      Transform<S3, S4>,
      Transform<S4, S5>,
      Transform<S5, S6>,
      Transform<S6, S7>,
      Transform<S7, S8>,
      Transform<S8, Out>,
    ]
  ): Iterable<Out>;

  <In, S1, S2, S3, S4, S5, S6, S7, S8, S9, Out>(
    iterable: Iterable<In>,
    operators: [
      Transform<In, S1>,
      Transform<S1, S2>,
      Transform<S2, S3>,
      Transform<S3, S4>,
      Transform<S4, S5>,
      Transform<S5, S6>,
      Transform<S6, S7>,
      Transform<S7, S8>,
      Transform<S8, S9>,
      Transform<S9, Out>,
    ]
  ): Iterable<Out>;

  <In, S1, S2, S3, S4, S5, S6, S7, S8, S9, S10, Out>(
    iterable: Iterable<In>,
    operators: [
      Transform<In, S1>,
      Transform<S1, S2>,
      Transform<S2, S3>,
      Transform<S3, S4>,
      Transform<S4, S5>,
      Transform<S5, S6>,
      Transform<S6, S7>,
      Transform<S7, S8>,
      Transform<S8, S9>,
      Transform<S9, S10>,
      Transform<S10, Out>,
    ]
  ): Iterable<Out>;
};

const compose: ComposeType = (
  iterable: Iterable<any>,
  operators: Array<Transform<any, any>>
): Iterable<any> => {
  for (const operator of operators) {
    iterable = operator(iterable);
  }
  return iterable;
};

export default compose;
