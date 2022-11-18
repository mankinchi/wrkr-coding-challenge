import clsx from "clsx";
import { Link, useLocation } from "react-router-dom";

interface Props {
	title: string;
	path: string;
}

export const NavigationItem = (props: Props) => {
	const { title, path } = props;

	const { pathname } = useLocation();

	return (
		<Link to={path}>
			<div
				className={clsx(
					"cursor-pointer border-b border-slate-600 px-2 py-4 transition-all hover:font-bold",
					pathname === path && "font-semibold",
				)}
			>
				{title}
			</div>
		</Link>
	);
};
