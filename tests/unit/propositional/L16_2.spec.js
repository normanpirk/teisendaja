import convert from "@/js/Converter.js";

describe("L16_2 tests", () => {
  test("turns disjunction of conjunctions to equivalence F∧G∨¬F∧¬G", () => {
    const input = "F∧G∨¬F∧¬G";
    expect(convert(input, "L16_2")).toBe("F⇔G");
  });

  test("turns disjunction of conjunctions to equivalence A(x)∧B(y,f(z))∨¬A(x)∧¬B(y,f(z))", () => {
    const input = "A(x)∧B(y,f(z))∨¬A(x)∧¬B(y,f(z))";
    expect(convert(input, "L16_2")).toBe("A(x)⇔B(y,f(z))");
  });

  test("turns disjunction of conjunctions to equivalence ¬A(x)∧¬B(y,f(z))∨¬¬A(x)∧¬¬B(y,f(z))", () => {
    const input = "¬A(x)∧¬B(y,f(z))∨¬¬A(x)∧¬¬B(y,f(z))";
    expect(convert(input, "L16_2")).toBe("¬A(x)⇔¬B(y,f(z))");
  });

  test("turns disjunction of conjunctions to equivalence (A(x)∧C(t))∧B(y,f(z))∨¬(A(x)∧C(t))∧¬B(y,f(z))", () => {
    const input = "(A(x)∧C(t))∧B(y,f(z))∨¬(A(x)∧C(t))∧¬B(y,f(z))";
    expect(convert(input, "L16_2")).toBe("(A(x)∧C(t))⇔B(y,f(z))");
  });

  test("turns disjunction of conjunctions to equivalence (A(x)∨B(y))∧C(z)∨¬(A(x)∨B(y))∧¬C(z)", () => {
    const input = "(A(x)∨B(y))∧C(z)∨¬(A(x)∨B(y))∧¬C(z)";
    expect(convert(input, "L16_2")).toBe("(A(x)∨B(y))⇔C(z)");
  });

  test("turns disjunction of conjunctions to equivalence (∀xA(x)⇒B(y))∧¬C(z)∨¬(∀xA(x)⇒B(y))∧¬¬C(z)", () => {
    const input = "(∀xA(x)⇒B(y))∧¬C(z)∨¬(∀xA(x)⇒B(y))∧¬¬C(z)";
    expect(convert(input, "L16_2")).toBe("(∀xA(x)⇒B(y))⇔¬C(z)");
  });

  test("turns disjunction of conjunctions to equivalence ∀xA(x)∧(∃xB(x)⇔C(y))∨¬∀xA(x)∧¬(∃xB(x)⇔C(y))", () => {
    const input = "∀xA(x)∧(∃xB(x)⇔C(y))∨¬∀xA(x)∧¬(∃xB(x)⇔C(y))";
    expect(convert(input, "L16_2")).toBe("∀xA(x)⇔(∃xB(x)⇔C(y))");
  });

  test("turns disjunction of conjunctions to equivalence ¬∃x∀y(F(x)⇒G(y)∧H(z,g(t)))∧∃zA(x,z)∨¬¬∃x∀y(F(x)⇒G(y)∧H(z,g(t)))∧¬∃zA(x,z)", () => {
    const input =
      "¬∃x∀y(F(x)⇒G(y)∧H(z,g(t)))∧∃zA(x,z)∨¬¬∃x∀y(F(x)⇒G(y)∧H(z,g(t)))∧¬∃zA(x,z)";
    expect(convert(input, "L16_2")).toBe("¬∃x∀y(F(x)⇒G(y)∧H(z,g(t)))⇔∃zA(x,z)");
  });

  test("returns null if input is not in the form of F∧G∨¬F∧¬G", () => {
    const input = "F∧G∨¬F∧G";
    expect(convert(input, "L16_2")).toBe(null);
  });

  test("returns null if input is not in the form of F∧G∨¬F∧¬G", () => {
    const input = "F⇔G";
    expect(convert(input, "L16_2")).toBe(null);
  });

  test("returns null if the input is not in the form of F∧G∨¬F∧¬G", () => {
    const input = "F∧G∨(¬F∧¬G)";
    expect(convert(input, "L16_2")).toBe(null);
  });

  test("considers commutation rule with F∧G∨¬G∧¬F", () => {
    const input = "F∧G∨¬G∧¬F";
    expect(convert(input, "L16_2")).toBe("F⇔G");
  });

  test("returns null with F∧G∨¬G∧¬H", () => {
    const input = "F∧G∨¬G∧¬H";
    expect(convert(input, "L16_2")).toBe(null);
  });

  test("turns disjunction of conjunctions to equivalence ¬F∧¬G∨F∧G", () => {
    const input = "¬F∧¬G∨F∧G";
    expect(convert(input, "L16_2")).toBe("F⇔G");
  });

  test("turns disjunction of conjunctions to equivalence ¬G∧¬F∨F∧G", () => {
    const input = "¬G∧¬F∨F∧G";
    expect(convert(input, "L16_2")).toBe("G⇔F");
  });

  test("returns null with ¬G∧¬F∨F∧H", () => {
    const input = "¬G∧¬F∨F∧H";
    expect(convert(input, "L16_2")).toBe(null);
  });
});
