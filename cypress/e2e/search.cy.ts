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

	it("should show error when api fails", () => {
		cy.intercept("https://api.github.com/search/repositories*", {
			statusCode: 404,
		});

		cy.get('[data-cy="searchbox"]').type("rea");
		cy.get('[data-cy="search-result"]').should(
			"have.text",
			"There is something wrong. Please try again later!",
		);
	});

	it("should show empty message when api return no items", () => {
		cy.intercept("https://api.github.com/search/repositories*", {
			statusCode: 200,
			body: {
				items: [],
			},
		});

		cy.get('[data-cy="searchbox"]').type("rea");
		cy.get('[data-cy="search-result"]').should(
			"have.text",
			"There is no result for your search. Please try another query.",
		);
	});
});
