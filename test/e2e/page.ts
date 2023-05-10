describe("Home page", () => {
  it("should say hello", () => {
    cy.visit('/');
    cy.get('h1').should('have.text', 'Hello, Next.js!')
  });
});
