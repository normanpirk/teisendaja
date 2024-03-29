import convert from "@/js/Converter.js";

describe("L7_2 tests", () => {
  test("applies the distributive property to A(x)∧B(x)∨A(x)∧C(y)", () => {
    const input = "A(x)∧B(x)∨A(x)∧C(y)";
    expect(convert(input, "L7_2")).toBe("A(x)∧(B(x)∨C(y))");
  });

  test("applies the distributive property to ¬A(x)∧¬B(x)∨¬A(x)∧¬C(y)", () => {
    const input = "¬A(x)∧¬B(x)∨¬A(x)∧¬C(y)";
    expect(convert(input, "L7_2")).toBe("¬A(x)∧(¬B(x)∨¬C(y))");
  });

  test("applies the distributive property to A∧B∧∀xC(x,g(x))∨A∧B∧∃yD(y)", () => {
    const input = "A∧B∧∀xC(x,g(x))∨A∧B∧∃yD(y)";
    expect(convert(input, "L7_2")).toBe("A∧B∧(∀xC(x,g(x))∨∃yD(y))");
  });

  test("applies the distributive property to (A∨B)∧(A∨B)∨(A∨B)∧D", () => {
    const input = "(A∨B)∧(A∨B)∨(A∨B)∧D";
    expect(convert(input, "L7_2")).toBe("(A∨B)∧((A∨B)∨D)");
  });

  test("applies the distributive property to (∀xA(x)⇒D(y))∧C(x)∨(∀xA(x)⇒D(y))∧B(y)", () => {
    const input = "(∀xA(x)⇒D(y))∧C(x)∨(∀xA(x)⇒D(y))∧B(y)";
    expect(convert(input, "L7_2")).toBe("(∀xA(x)⇒D(y))∧(C(x)∨B(y))");
  });

  test("applies the distributive property to (A⇔B)∧C∨(A⇔B)∧D", () => {
    const input = "(A⇔B)∧C∨(A⇔B)∧D";
    expect(convert(input, "L7_2")).toBe("(A⇔B)∧(C∨D)");
  });

  test("applies the distributive property to (∃xF(x)∨((∃xF(x)∨∀yG(y)∨H(x,f(z)))∨C))∧C∨(∃xF(x)∨((∃xF(x)∨∀yG(y)∨H(x,f(z)))∨C))∧D", () => {
    const input =
      "(∃xF(x)∨((∃xF(x)∨∀yG(y)∨H(x,f(z)))∨C))∧C∨(∃xF(x)∨((∃xF(x)∨∀yG(y)∨H(x,f(z)))∨C))∧D";
    expect(convert(input, "L7_2")).toBe(
      "(∃xF(x)∨((∃xF(x)∨∀yG(y)∨H(x,f(z)))∨C))∧(C∨D)"
    );
  });

  test("returns null if input is not in the form of F∧G∨F∧H", () => {
    const input = "F∧G∨F∨H";
    expect(convert(input, "L7_2")).toBe(null);
  });

  test("returns null if input is not in the form of F∧G∨F∧H", () => {
    const input = "F∨G∨H";
    expect(convert(input, "L7_2")).toBe(null);
  });

  test("returns null with F∧G⇒F∧H", () => {
    const input = "F∧G⇒F∧H";
    expect(convert(input, "L7_2")).toBe(null);
  });

  test("considers with commutation rule in F∧G∨H∧F", () => {
    const input = "F∧G∨H∧F";
    expect(convert(input, "L7_2")).toBe("F∧(G∨H)");
  });

  test("considers with commutation rule in G∧F∨H∧F", () => {
    const input = "G∧F∨H∧F";
    expect(convert(input, "L7_2")).toBe("F∧(G∨H)");
  });

  test("considers with commutation rule in G∧F∨F∧H", () => {
    const input = "G∧F∨F∧H";
    expect(convert(input, "L7_2")).toBe("F∧(G∨H)");
  });

  test("returns null with G∧F∨A∧H", () => {
    const input = "G∧F∨A∧H";
    expect(convert(input, "L7_2")).toBe(null);
  });
});
