import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "./layout/main";
import { ErrorPage } from "./pages/error";
import { SearchPage } from "./pages/search";
import { ShowcasePage } from "./pages/showcase";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <MainLayout />,
		children: [
			{
				path: "/search",
				element: <SearchPage />,
			},
			{
				path: "/showcase",
				element: <ShowcasePage />,
			},
			{
				path: "*",
				element: <ErrorPage />,
			},
		],
	},
]);
