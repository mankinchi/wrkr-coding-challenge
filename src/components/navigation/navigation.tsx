import { NavigationItem } from "./components/navigationItem";

export const Navigation = () => (
	<div
		className="flex flex-col"
		data-cy="navigation"
	>
		<NavigationItem
			title="Home"
			path="/"
		/>
		<NavigationItem
			title="Search"
			path="/search"
		/>
		<NavigationItem
			title="Showcase"
			path="/showcase"
		/>
	</div>
);
