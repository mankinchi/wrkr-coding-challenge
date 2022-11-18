import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Navigation } from "./navigation";

describe("Navigation", () => {
	it("should render correctly", () => {
		const { container } = render(
			<MemoryRouter initialEntries={["/"]}>
				<Navigation />
			</MemoryRouter>,
		);

		expect(container).toMatchSnapshot();
	});
});
