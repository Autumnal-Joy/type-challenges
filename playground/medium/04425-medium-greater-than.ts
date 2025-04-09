/*
  4425 - Greater Than
  -------
  by ch3cknull (@ch3cknull) #medium #array

  ### Question

  In This Challenge, You should implement a type `GreaterThan<T, U>` like `T > U`

  Negative numbers do not need to be considered.

  For example

  ```ts
  GreaterThan<2, 1> //should be true
  GreaterThan<1, 1> //should be false
  GreaterThan<10, 100> //should be false
  GreaterThan<111, 11> //should be true
  ```

  Good Luck!

  > View on GitHub: https://tsch.js.org/4425
*/

/* _____________ Your Code Here _____________ */

type JudgeDigit<
  T extends string,
  U extends string,
  V extends unknown[] = [],
> = Equal<T, U> extends true
  ? 0
  : `${V['length']}` extends U
    ? 1
    : `${V['length']}` extends T
      ? -1
      : JudgeDigit<T, U, [unknown, ...V]>

type Judge<
  T extends string,
  U extends string,
  V extends -1 | 0 | 1 = 0,
> = T extends `${infer F1}${infer R1}`
  ? U extends `${infer F2}${infer R2}`
    ? V extends 0
      ? Judge<R1, R2, JudgeDigit<F1, F2>>
      : Judge<R1, R2, V>
    : 1
  : U extends `${infer _}${infer _}`
    ? -1
    : V

type GreaterThan<T extends number, U extends number> = Judge<
  `${T}`,
  `${U}`
> extends 1
  ? true
  : false

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<GreaterThan<1, 0>, true>>,
  Expect<Equal<GreaterThan<5, 4>, true>>,
  Expect<Equal<GreaterThan<4, 5>, false>>,
  Expect<Equal<GreaterThan<0, 0>, false>>,
  Expect<Equal<GreaterThan<10, 9>, true>>,
  Expect<Equal<GreaterThan<20, 20>, false>>,
  Expect<Equal<GreaterThan<10, 100>, false>>,
  Expect<Equal<GreaterThan<111, 11>, true>>,
  Expect<Equal<GreaterThan<1234567891011, 1234567891010>, true>>,
]

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/4425/answer
  > View solutions: https://tsch.js.org/4425/solutions
  > More Challenges: https://tsch.js.org
*/
