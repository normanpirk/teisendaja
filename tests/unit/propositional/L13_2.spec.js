import convert from "@/js/Converter.js";

describe("L13_2 tests", () => {
  test("turns disjunction to implication ¬F∨G", () => {
    const input = "¬F∨G";
    expect(convert(input, "L13_2")).toBe("F⇒G");
  });

  test("turns disjunction to implication  ¬A(x)∨B(y,f(z))", () => {
    const input = "¬A(x)∨B(y,f(z))";
    expect(convert(input, "L13_2")).toBe("A(x)⇒B(y,f(z))");
  });

  test("turns disjunction to implication  ¬¬A(x)∨¬B(y,f(z))", () => {
    const input = "¬¬A(x)∨¬B(y,f(z))";
    expect(convert(input, "L13_2")).toBe("¬A(x)⇒¬B(y,f(z))");
  });

  test("turns disjunction to implication  ¬(A(x)∧C(t))∨B(y,f(z))", () => {
    const input = "¬(A(x)∧C(t))∨B(y,f(z))";
    expect(convert(input, "L13_2")).toBe("(A(x)∧C(t))⇒B(y,f(z))");
  });

  test("turns disjunction to implication  ¬(¬A(x)∨B(y))∨C(z)", () => {
    const input = "¬(¬A(x)∨B(y))∨C(z)";
    expect(convert(input, "L13_2")).toBe("(¬A(x)∨B(y))⇒C(z)");
  });

  test("turns disjunction to implication  ¬(∀xA(x)⇒B(y))∨¬C(z)", () => {
    const input = "¬(∀xA(x)⇒B(y))∨¬C(z)";
    expect(convert(input, "L13_2")).toBe("(∀xA(x)⇒B(y))⇒¬C(z)");
  });

  test("turns disjunction to implication ¬∀xA(x)∨(∃xB(x)⇔C(y))", () => {
    const input = "¬∀xA(x)∨(∃xB(x)⇔C(y))";
    expect(convert(input, "L13_2")).toBe("∀xA(x)⇒(∃xB(x)⇔C(y))");
  });

  test("turns disjunction to implication ¬¬∃x∀y(F(x)⇒G(y)∧H(z,g(t)))∨∃zA(x,z)", () => {
    const input = "¬¬∃x∀y(F(x)⇒G(y)∧H(z,g(t)))∨∃zA(x,z)";
    expect(convert(input, "L13_2")).toBe("¬∃x∀y(F(x)⇒G(y)∧H(z,g(t)))⇒∃zA(x,z)");
  });

  test("returns null if input is not in the form of ¬F∨G", () => {
    const input = "F∨G";
    expect(convert(input, "L13_2")).toBe(null);
  });

  test("returns null if input is not in the form of ¬F∨G", () => {
    const input = "F⇒G";
    expect(convert(input, "L13_2")).toBe(null);
  });

  test("considers commitation rule with G∨¬F", () => {
    const input = "G∨¬F";
    expect(convert(input, "L13_2")).toBe("F⇒G");
  });
});
