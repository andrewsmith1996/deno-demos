import {
  assertEquals,
  assertThrows,
} from "https://deno.land/std/testing/asserts.ts";
import add from "./add.ts";

Deno.test("add() correctly returns the sum of two values", () => {
  assertEquals(add(3, 3), 6);
});

Deno.test("add() correctly throws an error if any number is <= 0", () => {
  assertThrows(() => add(-3, 3), Error, "Numbers must be greater than 0!");
});
