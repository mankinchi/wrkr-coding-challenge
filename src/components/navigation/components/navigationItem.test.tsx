import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { NavigationItem } from "./navigationItem";

describe("Navigation Item", () => {
	it("should render correctly when not in path", () => {
		const { container } = render(
			<MemoryRouter initialEntries={["/"]}>
				<NavigationItem
					title="Test"
					path="/testPath"
				/>
			</MemoryRouter>,
		);

		expect(container).toMatchSnapshot();
	});

	it("should render correctly when in path", () => {
		const { container } = render(
			<MemoryRouter initialEntries={["/testPath"]}>
				<NavigationItem
					title="Test"
					path="/testPath"
				/>
			</MemoryRouter>,
		);

		expect(container).toMatchSnapshot();
	});
});
