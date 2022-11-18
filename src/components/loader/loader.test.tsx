import { render } from "@testing-library/react";
import { Loader } from "./loader";

describe("Loader component", () => {
	it("should render correctly", () => {
		const { container } = render(<Loader />);
		expect(container).toMatchSnapshot();
	});
});
