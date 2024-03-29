import createSelection from "../custom/custom_functions.js";

describe("User input when new subformula or filename needs to be inserted", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Can insert new subformula L5", () => {
    cy.get("[data-cy=insertFormula]").type("∀x∃yP(x,y,z)");
    cy.get("[data-cy=start-conversions]").click();
    createSelection("[data-cy=selectable]", 0, 12);
    cy.get("[data-cy=L5_2]").click();
    cy.get("[data-cy=selectable-new]").type("Q(f(x),y)");
    cy.get("[data-cy=add-new-formula]").click();
    cy.get("[data-cy=selectable]").contains(
      "∀x∃yP(x,y,z)∧(∀x∃yP(x,y,z)∨Q(f(x),y))"
    );
  });

  it("Can insert new subformula L6", () => {
    cy.get("[data-cy=insertFormula]").type("∀x∃yP(x,y,z)");
    cy.get("[data-cy=start-conversions]").click();
    createSelection("[data-cy=selectable]", 4, 12);
    cy.get("[data-cy=L6_2]").click();
    cy.get("[data-cy=selectable-new]").type("Q(f(x),y)");
    cy.get("[data-cy=add-new-formula]").click();
    cy.get("[data-cy=selectable]").contains(
      "∀x∃y(P(x,y,z)∨P(x,y,z)∧Q(f(x),y))"
    );
  });

  it("Can insert new subformula L19", () => {
    cy.get("[data-cy=insertFormula]").type("A⇒B");
    cy.get("[data-cy=start-conversions]").click();
    createSelection("[data-cy=selectable]", 2, 3);
    cy.get("[data-cy=L19_2]").click();
    cy.get("[data-cy=selectable-new]").type("Q(f(x),y)");
    cy.get("[data-cy=add-new-formula]").click();
    cy.get("[data-cy=selectable]").contains("A⇒B∧(Q(f(x),y)∨¬Q(f(x),y))");
  });

  it("Can insert new subformula L20", () => {
    cy.get("[data-cy=insertFormula]").type("A∧B(x)");
    cy.get("[data-cy=start-conversions]").click();
    createSelection("[data-cy=selectable]", 0, 1);
    cy.get("[data-cy=L20_2]").click();
    cy.get("[data-cy=selectable-new]").type("C⇒D");
    cy.get("[data-cy=add-new-formula]").click();
    cy.get("[data-cy=selectable]").contains("(A∨(C⇒D)∧¬(C⇒D))∧B(x)");
  });

  it("Can insert new subformula L24", () => {
    cy.get("[data-cy=insertFormula]").type("A∧B⇔1");
    cy.get("[data-cy=start-conversions]").click();
    createSelection("[data-cy=selectable]", 4, 5);
    cy.get("[data-cy=L24_2]").click();
    cy.get("[data-cy=selectable-new]").type("F");
    cy.get("[data-cy=add-new-formula]").click();
    cy.get("[data-cy=selectable]").contains("A∧B⇔F∨1");
  });

  it("Can insert new subformula L25", () => {
    cy.get("[data-cy=insertFormula]").type("A∧0⇔1");
    cy.get("[data-cy=start-conversions]").click();
    createSelection("[data-cy=selectable]", 2, 3);
    cy.get("[data-cy=L25_2]").click();
    cy.get("[data-cy=selectable-new]").type("F");
    cy.get("[data-cy=add-new-formula]").click();
    cy.get("[data-cy=selectable]").contains("A∧F∧0⇔1");
  });

  it("Can cancel inserting new formula", () => {
    cy.get("[data-cy=insertFormula]").type("A∧0⇔1");
    cy.get("[data-cy=start-conversions]").click();
    createSelection("[data-cy=selectable]", 2, 3);
    cy.get("[data-cy=L22_2]").click();
    cy.get("[data-cy=selectable-new]").type("F");
    cy.get("[data-cy=cancel-add-new-formula]").click();
    cy.get("[data-cy=selectable]").contains("A∧0⇔1");
  });

  it("Can insert new subformula by pressing 'Enter'", () => {
    cy.get("[data-cy=insertFormula]").type("A∧0⇔1");
    cy.get("[data-cy=start-conversions]").click();
    createSelection("[data-cy=selectable]", 2, 3);
    cy.get("[data-cy=L25_2]").click();
    cy.get("[data-cy=selectable-new]").type("F{enter}");
    cy.get("[data-cy=selectable]").contains("A∧F∧0⇔1");
  });
});
