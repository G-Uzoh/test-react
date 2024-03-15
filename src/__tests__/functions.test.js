import sum from "../functions";

test("Function sum add 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});
