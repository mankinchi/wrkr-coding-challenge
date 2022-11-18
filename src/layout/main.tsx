import clsx from "clsx";
import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Header } from "../components/header";
import { Navigation } from "../components/navigation";

export const MainLayout = () => {
	const [showMenu, setShowMenu] = useState(false);
	const { pathname } = useLocation();

	const handleMenuToggle = () => {
		setShowMenu((val) => !val);
	};

	useEffect(() => {
		setShowMenu(false);
	}, [pathname]);

	useEffect(() => {
		window.addEventListener("resize", () => {
			// 768 is tailwindCSS's md breakpoint
			if (window.innerWidth > 768) {
				setShowMenu(false);
			}
		});
	}, []);

	return (
		<div className="h-screen w-screen">
			<Header onMenuToggle={handleMenuToggle} />
			<div className="relative isolate flex h-[calc(100%-3rem)] flex-row">
				{showMenu && (
					<div className="absolute inset-0 z-10 bg-slate-600 opacity-60 md:hidden" />
				)}
				<div
					className={clsx(
						"absolute -left-full z-20 h-full w-1/2 shrink-0 basis-[200px] border-r border-slate-600 bg-slate-100 transition-all md:static",
						showMenu && "left-0",
					)}
					data-cy="menu-shadow"
				>
					<Navigation />
				</div>
				<div className="grow">
					<Outlet />
				</div>
			</div>
		</div>
	);
};
