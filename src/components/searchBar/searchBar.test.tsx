import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { SearchBar } from "./searchBar";

describe("Search Bar", () => {
	it("should render correctly", () => {
		const { container } = render(
			<SearchBar
				value="1"
				onChange={jest.fn()}
			/>,
		);

		expect(container).toMatchSnapshot();
	});

	it("should behave correctly", () => {
		const onChange = jest.fn();
		render(
			<SearchBar
				value="1"
				onChange={onChange}
			/>,
		);

		userEvent.type(screen.getByRole("textbox"), "2");

		expect(onChange).toHaveBeenCalledTimes(1);
		expect(onChange).toHaveBeenCalledWith("12");
	});
});
