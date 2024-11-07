import type * as AsyncIterableExtensions from "./index";
import {
  assert,
  type TypeEquality,
  type VerifyIterableExtensions,
} from "../iterable-extensions/implEquality";

type EnsureAsyncVersions<T> = {
  [K in keyof T]: unknown;
};

export type VerifyAsyncIterableExtensions = EnsureAsyncVersions<typeof AsyncIterableExtensions>;

assert<TypeEquality<VerifyAsyncIterableExtensions, VerifyIterableExtensions>>();
