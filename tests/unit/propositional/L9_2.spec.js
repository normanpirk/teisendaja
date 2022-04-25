import convert from "@/js/Converter.js";

describe("L9_2 tests", () => {
  test("Converts 1 to ¬0", () => {
    const input = "1";
    expect(convert(input, "L9_2")).toBe("¬0");
  });

  test("Returns null if input is not 1", () => {
    const input = "¬0";
    expect(convert(input, "L9_2")).toBe(null);
  });
});
