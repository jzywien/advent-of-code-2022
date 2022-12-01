import { day1step1, day1step2 } from "./day1";
import sample from "./sample.json";
import input from "./input.json";

describe("day1", () => {
  test("day 1 step 1 -- sample", () => {
    const maxCalories = day1step1(sample);
    console.table({ [`Day 1, Step 1 -- Sample: Max Calories`]: maxCalories });
    expect(maxCalories).toEqual(24000);
  });

  test("day 1 step 1 -- input", () => {
    const maxCalories = day1step1(input);
    console.table({ [`Day 1, Step 1 -- Input: Max Calories`]: maxCalories });
    expect(maxCalories).toEqual(67016);
  });

  test("day 1 step 2 -- sample", () => {
    const maxCalories = day1step2(sample, 3);
    console.table({ [`Day 1, Step 2 -- Sample: Max Calories`]: maxCalories });
    expect(maxCalories).toEqual(45000);
  });

  test("day 1 step 2 -- input", () => {
    const maxCalories = day1step2(input, 3);
    console.table({ [`Day 1, Step 2 -- Input: Max Calories`]: maxCalories });
    expect(maxCalories).toEqual(200116);
  });
});
