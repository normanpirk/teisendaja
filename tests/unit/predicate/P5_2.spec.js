import convert from "@/js/Converter.js";

describe("P5_2 tests", () => {
  test("moves quantifier out from the parentheses ∀xF(x)∧G", () => {
    const input = "∀xF(x)∧G";
    expect(convert(input, "P5_2")).toBe("∀x(F(x)∧G)");
  });

  test("moves quantifier out from the parentheses ∀xF(x)∨G", () => {
    const input = "∀xF(x)∨G";
    expect(convert(input, "P5_2")).toBe("∀x(F(x)∨G)");
  });

  test("moves quantifier out from the parentheses ∀x(A(x,y)⇔B(z))∧G", () => {
    const input = "∀x(A(x,y)⇔B(z))∧G";
    expect(convert(input, "P5_2")).toBe("∀x((A(x,y)⇔B(z))∧G)");
  });

  test("returns null if individual variable is not in the conjunction ∀x(A(y)⇔B(z))∧G", () => {
    const input = "∀x(A(y)⇔B(z))∧G";
    expect(convert(input, "P5_2")).toBe(null);
  });

  test("returns null if individual variable is on the wrong side of the conjunction ∀x(A(y)⇔B(z))∧G(x)", () => {
    const input = "∀x(A(y)⇔B(z))∧G(x)";
    expect(convert(input, "P5_2")).toBe(null);
  });

  test("returns null if the input is not in the form of ∀xF(x)∧G", () => {
    const input = "∃xF(x)∧G(x)";
    expect(convert(input, "P5_2")).toBe(null);
  });

  test("returns null if the input is not in the form of ∀xF(x)∧G", () => {
    const input = "∀x(F(x)∧G)";
    expect(convert(input, "P5_2")).toBe(null);
  });

  test("moves quantifier out from the parentheses G∧∀xF(x)", () => {
    const input = "G∧∀xF(x)";
    expect(convert(input, "P5_2")).toBe("∀x(G∧F(x))");
  });

  test("returns null if operation is not conjunction G⇔∀xF(x)", () => {
    const input = "G⇔∀xF(x)";
    expect(convert(input, "P5_2")).toBe(null);
  });

  test("returns null if the variable is on both sides of the conjunction G(x)∧∀xF(x)", () => {
    const input = "G(x)∧∀xF(x)";
    expect(convert(input, "P5_2")).toBe(null);
  });
});
