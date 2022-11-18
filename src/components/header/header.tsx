import { Menu } from "react-feather";

interface Props {
	onMenuToggle: () => void;
}

export const Header = (props: Props) => {
	const { onMenuToggle } = props;

	return (
		<div className="flex h-12 items-center gap-2 border-b border-solid border-b-black px-2">
			<Menu
				size={20}
				className="block cursor-pointer md:hidden"
				onClick={onMenuToggle}
				data-cy="navigation-toggle-handler"
			/>

			<div className="text-2xl font-extrabold">Header</div>
		</div>
	);
};
