type Transform<In, Out> = (i: Iterable<In>) => Iterable<Out>;

type ArgFunction<In, Out> = (v: In, c?: number) => Out;
type FoldFunction<In, Out> = (a: Out, v: In, c?: number) => Out;

const isIterable = (x: any): x is Iterable<any> =>
  x != null && typeof x[Symbol.iterator] === "function";

export { type Transform, type FoldFunction, type ArgFunction, isIterable };
