describe("go to the page normally", () => {
	beforeEach(() => {
		cy.visit("/");
	});

	it("render correctly on large screen size", () => {
		cy.viewport(1200, 600);

		cy.get('[data-cy="navigation"]').should("be.visible");
		cy.get('[data-cy="navigation-toggle-handler"]').should("be.hidden");
	});

	it("render correctly on large screen size", () => {
		cy.viewport(700, 600);

		// Cypress actually have a bug since this is technically not visible since it's off the screen
		// So disable this for now
		// cy.get('[data-cy="navigation"]').should("be.hidden");
		cy.get('[data-cy="navigation-toggle-handler"]').should("be.visible");
	});

	it("should display navigator when click menu", () => {
		cy.viewport(700, 600);

		cy.get('[data-cy="navigation-toggle-handler"]').click();
		cy.get('[data-cy="menu-shadow"]').should("be.visible");
		cy.get('[data-cy="navigation"]').should("be.visible");
	});
});
