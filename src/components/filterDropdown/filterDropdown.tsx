import { ChangeEventHandler } from "react";

interface Props {
	prompt: string;
	options: {
		title: string;
		value: string;
	}[];
	value: string;
	onChange: (newValue: string) => void;
}

export const ALL_OPTION_VALUE = "all";
export type AllOptionType = typeof ALL_OPTION_VALUE;

export const FilterDropdown = (props: Props) => {
	const { prompt, options, value, onChange } = props;

	const handleOptionSelected: ChangeEventHandler<HTMLSelectElement> = (e) => {
		onChange(e.currentTarget.value);
	};

	return (
		<div>
			<span>{prompt}</span>
			<select
				value={value}
				className="focus:outline-none"
				onChange={handleOptionSelected}
			>
				{options.map(({ title, value: optionValue }) => (
					<option
						key={optionValue}
						value={optionValue}
					>
						{title}
					</option>
				))}
			</select>
		</div>
	);
};
