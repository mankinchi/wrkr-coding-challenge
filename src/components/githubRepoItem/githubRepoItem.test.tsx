import { render } from "@testing-library/react";
import { GithubRepoItem } from "./githubRepoItem";

describe("Github Repo Item component", () => {
	it("should render correctly", () => {
		const { container } = render(
			<GithubRepoItem
				repo={{
					id: 1,
					name: "Test Repo",
					description: "Random description",
					licenseName: "MIT",
					language: "Typescript",
					stars: 10000,
					topics: ["UI", "Test", "123"],
					lastUpdate: new Date(2022, 18, 11, 9),
					link: "https://google.com",
				}}
			/>,
		);
		expect(container).toMatchSnapshot();
	});

	it("should render with optional attributes correctly", () => {
		const { container } = render(
			<GithubRepoItem
				repo={{
					id: 1,
					name: "Test Repo",
					stars: 10000,
					lastUpdate: new Date(2022, 18, 11, 9),
					link: "https://google.com",
				}}
			/>,
		);
		expect(container).toMatchSnapshot();
	});
});
