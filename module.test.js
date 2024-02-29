import { expect, test } from "vitest";
import { fizzBuzz } from "./index";

test("returns FizzBuzz if divisible by both 5 and three", () => {
    expect(fizzBuzz(15)).toBe("FizzBuzz");
})
test("returns Fizz if divisible by 3 only", () => {
    expect(fizzBuzz(6)).toBe("Fizz");
})
test("returns Buzz if divisible by 5 only", () => {
    expect(fizzBuzz(10)).toBe("Buzz");
})