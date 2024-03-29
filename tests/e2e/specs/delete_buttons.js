import createSelection from "../custom/custom_functions.js";

describe("Deleting conversions", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("deletes one conversion", () => {
    cy.get("[data-cy=insertFormula]").type("¬(∀x∃yP(x,y,z)∨∃x∀y¬Q(x,y,z))");
    cy.get("[data-cy=start-conversions]").click();

    createSelection("[data-cy=selectable]", 0, 29);
    cy.get("[data-cy=L11_1").click();
    cy.get("[data-cy=selectable]").contains("¬∀x∃yP(x,y,z)∧¬∃x∀y¬Q(x,y,z)");
    createSelection("[data-cy=selectable]", 0, 13);
    cy.get("[data-cy=P1_1").click();
    cy.get("[data-cy=selectable]").contains("∃x¬∃yP(x,y,z)∧¬∃x∀y¬Q(x,y,z)");
    createSelection("[data-cy=selectable]", 2, 13);
    cy.get("[data-cy=P2_1").click();
    cy.get("[data-cy=selectable]").contains("∃x∀y¬P(x,y,z)∧¬∃x∀y¬Q(x,y,z)");

    cy.get("[data-cy=deleteLast").click();
    cy.get("[data-cy=selectable]").contains("∃x¬∃yP(x,y,z)∧¬∃x∀y¬Q(x,y,z)");
    cy.get("[data-cy=line-2]").contains("∃x¬∃yP(x,y,z)∧¬∃x∀y¬Q(x,y,z)");
  });

  it("deletes one conversion with Ctrl+Z", () => {
    cy.get("[data-cy=insertFormula]").type("¬(∀x∃yP(x,y,z)∨∃x∀y¬Q(x,y,z)){ctrl}{enter}");
    //cy.get("[data-cy=insertFormula]").type("{ctrl+enter}");

    createSelection("[data-cy=selectable]", 0, 29);
    cy.get("[data-cy=L11_1").click();
    cy.get("[data-cy=selectable]").contains("¬∀x∃yP(x,y,z)∧¬∃x∀y¬Q(x,y,z)");
    createSelection("[data-cy=selectable]", 0, 13);
    cy.get("[data-cy=P1_1").click();
    cy.get("[data-cy=selectable]").contains("∃x¬∃yP(x,y,z)∧¬∃x∀y¬Q(x,y,z)");
    createSelection("[data-cy=selectable]", 2, 13);
    cy.get("[data-cy=P2_1").click();
    cy.get("[data-cy=selectable]").contains("∃x∀y¬P(x,y,z)∧¬∃x∀y¬Q(x,y,z)");
    
    cy.get("body").type("{ctrl}Z");
    cy.get("[data-cy=selectable]").contains("∃x¬∃yP(x,y,z)∧¬∃x∀y¬Q(x,y,z)");
    cy.get("[data-cy=line-2]").contains("∃x¬∃yP(x,y,z)∧¬∃x∀y¬Q(x,y,z)");
  });

  it("deletes all conversions", () => {
    cy.get("[data-cy=insertFormula]").type("¬(∀x∃yP(x,y,z)∨∃x∀y¬Q(x,y,z))");
    cy.get("[data-cy=start-conversions]").click();

    createSelection("[data-cy=selectable]", 0, 29);
    cy.get("[data-cy=L11_1").click();
    cy.get("[data-cy=selectable]").contains("¬∀x∃yP(x,y,z)∧¬∃x∀y¬Q(x,y,z)");
    createSelection("[data-cy=selectable]", 0, 13);
    cy.get("[data-cy=P1_1").click();
    cy.get("[data-cy=selectable]").contains("∃x¬∃yP(x,y,z)∧¬∃x∀y¬Q(x,y,z)");
    createSelection("[data-cy=selectable]", 2, 13);
    cy.get("[data-cy=P2_1").click();
    cy.get("[data-cy=selectable]").contains("∃x∀y¬P(x,y,z)∧¬∃x∀y¬Q(x,y,z)");

    cy.get("[data-cy=deleteAll").click();
    cy.get("[data-cy=confirm-delete-all").click();
    cy.get("[data-cy=insertFormula]").should(
      "have.value",
      "¬(∀x∃yP(x,y,z)∨∃x∀y¬Q(x,y,z))"
    );
    cy.get("[data-cy=completed-convs]").not("contains", "P");
  });

  it("deletes all conversions with Ctrl+D", () => {
    cy.get("[data-cy=insertFormula]").type("¬(∀x∃yP(x,y,z)∨∃x∀y¬Q(x,y,z))");
    cy.get("[data-cy=start-conversions]").click();

    createSelection("[data-cy=selectable]", 0, 29);
    cy.get("[data-cy=L11_1").click();
    cy.get("[data-cy=selectable]").contains("¬∀x∃yP(x,y,z)∧¬∃x∀y¬Q(x,y,z)");
    createSelection("[data-cy=selectable]", 0, 13);
    cy.get("[data-cy=P1_1").click();
    cy.get("[data-cy=selectable]").contains("∃x¬∃yP(x,y,z)∧¬∃x∀y¬Q(x,y,z)");
    createSelection("[data-cy=selectable]", 2, 13);
    cy.get("[data-cy=P2_1").click();
    cy.get("[data-cy=selectable]").contains("∃x∀y¬P(x,y,z)∧¬∃x∀y¬Q(x,y,z)");

    cy.get("body").type("{ctrl}D");
    cy.get("[data-cy=confirm-delete-all").click();
    cy.get("[data-cy=insertFormula]").should(
      "have.value",
      "¬(∀x∃yP(x,y,z)∨∃x∀y¬Q(x,y,z))"
    );
    cy.get("[data-cy=completed-convs]").not("contains", "P");
  });

  it("cancels deleting all conversions", () => {
    cy.get("[data-cy=insertFormula]").type("¬(∀x∃yP(x,y,z)∨∃x∀y¬Q(x,y,z))");
    cy.get("[data-cy=start-conversions]").click();

    createSelection("[data-cy=selectable]", 0, 29);
    cy.get("[data-cy=L11_1").click();
    cy.get("[data-cy=selectable]").contains("¬∀x∃yP(x,y,z)∧¬∃x∀y¬Q(x,y,z)");
    createSelection("[data-cy=selectable]", 0, 13);
    cy.get("[data-cy=P1_1").click();
    cy.get("[data-cy=selectable]").contains("∃x¬∃yP(x,y,z)∧¬∃x∀y¬Q(x,y,z)");
    createSelection("[data-cy=selectable]", 2, 13);
    cy.get("[data-cy=P2_1").click();
    cy.get("[data-cy=selectable]").contains("∃x∀y¬P(x,y,z)∧¬∃x∀y¬Q(x,y,z)");

    cy.get("[data-cy=deleteAll").click();
    cy.get("[data-cy=cancel-delete-all").click();
    cy.get("[data-cy=selectable]").contains("∃x∀y¬P(x,y,z)∧¬∃x∀y¬Q(x,y,z)");
  });
});
