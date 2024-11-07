import type * as IterableExtensions from "./index";
import { type VerifyAsyncIterableExtensions } from "../async-iterable-extensions/implEquality";

type EnsureSyncVersions<T> = {
  [K in keyof T as `${string & K}Async`]: unknown;
};

export type VerifyIterableExtensions = EnsureSyncVersions<typeof IterableExtensions>;
export function assert<T extends never>() {}
export type TypeEquality<A, B> = Exclude<A, B> | Exclude<B, A>;

assert<TypeEquality<VerifyAsyncIterableExtensions, VerifyIterableExtensions>>();
