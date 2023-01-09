describe("ShaperTools.com Masterclasses Page", () => {
  beforeEach(() => {
    cy.setCookie("cookieconsent_status", "acceptall");
  });

  it("loads the masterclasses page", () => {
    cy.visit("https://www.shapertools.com/masterclass");

    cy.findByRole("heading", { name: /woodworking masterclasses/i }).should(
      "exist"
    );
  });

  describe("allows users to sign up for the masterclass series", () => {
    beforeEach(() => {
      cy.visit("https://www.shapertools.com/masterclass");
    });

    describe("when the user is able to sign up successfully", () => {
      it("displays the thank you message", () => {
        cy.findByRole("button", { name: /subscribe to the series/i }).click();

        cy.findByLabelText(/email address/i).type("e2e@shapertools.com");

        cy.findByRole("button", { name: /sign up/i }).click();

        cy.findByText(/thanks for signing up/i).should("exist");
      });
    });
  });
});
