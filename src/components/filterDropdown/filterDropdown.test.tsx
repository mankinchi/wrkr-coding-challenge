import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { FilterDropdown } from "./filterDropdown";

describe("Filter Dropdown component", () => {
	it("should render correctly", () => {
		const onChange = jest.fn();

		const { container } = render(
			<FilterDropdown
				prompt="Filter prompt"
				options={[
					{
						title: "1",
						value: "filter 1",
					},
					{
						title: "2",
						value: "filter 2",
					},
				]}
				value="1"
				onChange={onChange}
			/>,
		);

		expect(container).toMatchSnapshot();
	});

	it("should fire onChange when new value is selected", () => {
		const onChange = jest.fn();

		render(
			<FilterDropdown
				prompt="Filter prompt"
				options={[
					{
						title: "filter 1",
						value: "1",
					},
					{
						title: "filter 2",
						value: "2",
					},
				]}
				value="1"
				onChange={onChange}
			/>,
		);

		userEvent.selectOptions(screen.getByRole("combobox"), ["2"]);

		expect(screen.getByRole("combobox")).toHaveTextContent("filter 2");
		expect(onChange).toHaveBeenCalledTimes(1);
	});
});
