import { ChangeEventHandler } from "react";
import { Search } from "react-feather";

interface Props {
	value: string;
	onChange: (newValue: string) => void;
}

export const SearchBar = (props: Props) => {
	const { value, onChange } = props;

	const handleInputChange: ChangeEventHandler<HTMLInputElement> = (e) => {
		onChange(e.currentTarget.value);
	};

	return (
		<div className="rounded border border-solid border-slate-600 bg-slate-100 p-4">
			<div className="flex items-center gap-2 rounded-2xl border border-solid border-slate-600 bg-white px-3 py-2">
				<Search size={16} />
				<input
					className="grow focus:outline-none"
					type="text"
					value={value}
					onChange={handleInputChange}
					data-cy="searchbox"
				/>
			</div>
		</div>
	);
};
