import convert from "@/js/Converter.js";

describe("L22_1 tests", () => {
  test("removes tautology from disjunction F∨G∧¬G", () => {
    const input = "F∨G∧¬G";
    expect(convert(input, "L22_1")).toBe("F");
  });

  test("removes tautology from disjunction F∨¬G∧¬¬G", () => {
    const input = "F∨¬G∧¬¬G";
    expect(convert(input, "L22_1")).toBe("F");
  });

  test("removes tautology from disjunction F∨G∧H∧¬(G∧H)", () => {
    const input = "F∨G∧H∧¬(G∧H)";
    expect(convert(input, "L22_1")).toBe("F");
  });

  test("removes tautology from disjunction F∨(G∨H)∧¬(G∨H)", () => {
    const input = "F∨(G∨H)∧¬(G∨H)";
    expect(convert(input, "L22_1")).toBe("F");
  });

  test("removes tautology from disjunction F∨(∀xF(x)⇒H)∧¬(∀xF(x)⇒H)", () => {
    const input = "F∨(∀xF(x)⇒H)∧¬(∀xF(x)⇒H)";
    expect(convert(input, "L22_1")).toBe("F");
  });

  test("removes tautology from disjunction F∨(∃xF(x)⇔H)∧¬(∃xF(x)⇔H)", () => {
    const input = "F∨(∃xF(x)⇔H)∧¬(∃xF(x)⇔H)";
    expect(convert(input, "L22_1")).toBe("F");
  });

  test("removes tautology from disjunction F∨(∃xF(x)⇔∀yG(y)∧H(x,f(z)))∧¬(∃xF(x)⇔∀yG(y)∧H(x,f(z)))", () => {
    const input = "F∨(∃xF(x)⇔∀yG(y)∧H(x,f(z)))∧¬(∃xF(x)⇔∀yG(y)∧H(x,f(z)))";
    expect(convert(input, "L22_1")).toBe("F");
  });

  test("returns null if there is no tautology F∨G∧¬H", () => {
    const input = "F∨G∧¬H";
    expect(convert(input, "L22_1")).toBe(null);
  });
});
