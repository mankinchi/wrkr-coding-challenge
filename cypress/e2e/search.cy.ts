describe("go to search page", () => {
	beforeEach(() => {
		cy.visit("/search");
	});

	it("should show initial", () => {
		cy.get('[data-cy="search-result"]').should(
			"have.text",
			"Type at least 3 characters to start searching",
		);
		cy.get('[data-cy="filter-select"]').should("contain.value", "all");
	});

	it("should not load when typing less than 3 chars", () => {
		cy.get('[data-cy="searchbox"]').type("re");
		cy.get('[data-cy="search-result"]').should(
			"have.text",
			"Type at least 3 characters to start searching",
		);
	});

	it("should show loading when typing 3 chars", () => {
		cy.get('[data-cy="searchbox"]').type("rea");
		cy.get('[data-cy="loader"]').should("be.visible");
	});
});
