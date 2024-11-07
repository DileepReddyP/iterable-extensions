type AsyncTransform<In, Out> = (i: AsyncIterable<In>) => AsyncIterable<Out>;

type ArgFunction<In, Out> = (v: In, c?: number) => Out | Promise<Out>;
type FoldFunction<In, Out> = (a: Out, v: In, c?: number) => Out | Promise<Out>;

const isAsyncIterable = (x: any): x is AsyncIterable<any> =>
  x != null && typeof x[Symbol.asyncIterator] === "function";

export {
  type AsyncTransform,
  type ArgFunction,
  type FoldFunction,
  isAsyncIterable,
};
