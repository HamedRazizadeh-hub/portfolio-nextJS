import { describe, expect, it } from "vitest";
import { truncateText } from "./truncateText";

describe("truncateText", () => {
  it("shortens text that is longer than the maximum length", () => {
    const result = truncateText("Frontend development", 8);

    expect(result).toBe("Frontend...");
  });
});

it("returns the original text when it is shorter than the maximum length", () => {
  const result = truncateText("React", 10);

  expect(result).toBe("React");
});
