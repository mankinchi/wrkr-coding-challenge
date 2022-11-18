import { fireEvent, render } from "@testing-library/react";
import { Header } from "./header";

describe("Header component", () => {
	it("should render correctly", () => {
		const { container } = render(<Header onMenuToggle={() => {}} />);
		expect(container).toMatchSnapshot();
	});

	it("should execute onMenuToggle when click toggle menu icon", () => {
		const onMenuToggle = jest.fn();

		const { container } = render(<Header onMenuToggle={onMenuToggle} />);

		expect(container.querySelector("svg")).not.toBeNull();

		fireEvent.click(container.querySelector("svg"));
		expect(onMenuToggle).toBeCalledTimes(1);
	});
});
