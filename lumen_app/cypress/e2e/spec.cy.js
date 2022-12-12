describe("Smoke-test-page-load", () => {
  it("passes", () => {
    cy.visit("http://localhost:3000");
  });
});

describe("Smoke-test-header", () => {
  it("passes", () => {
    cy.get(".page-subheader");
  });
});

describe("Smoke-test-Search-box-functionality", () => {
  it("passes", () => {
    cy.get(".search-bar").type("CSS").should("have.value", "CSS");
    cy.get(".results-table > :nth-child(2) > :nth-child(3)").contains("CSS");
  });
});

describe("Smoke-test-Add button-functionality", () => {
  it("passes", () => {
    cy.get(".add-button").click();
    cy.get(".title").click().type("Test");
    cy.get(".URL").click().type("testUrl.com");
    cy.get("#languages").select("CSS");
    cy.get("#category").select("Video");
    cy.get("#description").click().type("TEST DESCRIPTION");
  });
});
