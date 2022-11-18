import { useState } from "react";
import {
	AllOptionType,
	ALL_OPTION_VALUE,
	FilterDropdown,
} from "../components/filterDropdown";
import { GithubRepoItem } from "../components/githubRepoItem";
import { Loader } from "../components/loader";
import { SearchBar } from "../components/searchBar";
import { SearchFilterOption } from "../enums/searchFilterOptions";
import { useSearchGithubRepo } from "../hooks/useSearchGithubRepo";

export const SearchPage = () => {
	const [searchValue, setSearchValue] = useState("");
	const [selectedFilter, setSelectedFilter] = useState<
		SearchFilterOption | AllOptionType
	>(ALL_OPTION_VALUE);

	const { loading, data, error } = useSearchGithubRepo(
		searchValue,
		selectedFilter,
	);

	const handleFilterChange = (newFilter: string) => {
		setSelectedFilter(newFilter as SearchFilterOption | AllOptionType);
	};

	return (
		<div className="m-auto flex h-full w-3/4 flex-col gap-2 py-2">
			<div className="py-4 text-center text-4xl font-bold">Search</div>
			<SearchBar
				value={searchValue}
				onChange={setSearchValue}
			/>
			<div className="flex flex-col border-b border-slate-300 py-2 px-1 text-lg md:flex-row md:justify-between">
				<FilterDropdown
					prompt="Filter by language:"
					options={[
						{
							title: "All",
							value: ALL_OPTION_VALUE,
						},
						{
							title: "HTML",
							value: SearchFilterOption.HTML,
						},
						{
							title: "CSS",
							value: SearchFilterOption.CSS,
						},
						{
							title: "Javascript",
							value: SearchFilterOption.JS,
						},
						{
							title: "Typescript",
							value: SearchFilterOption.TS,
						},
					]}
					value={selectedFilter}
					onChange={handleFilterChange}
				/>
				{!loading && !error && data && (
					<div className="font-bold">
						{data.length} repository results
					</div>
				)}
			</div>
			{(() => {
				if (error) {
					return (
						<div>
							There is something wrong. Please try again later!
						</div>
					);
				}

				if (loading) {
					return <Loader size={30} />;
				}

				if (!data) {
					return (
						<div>Type at least 3 characters to start searching</div>
					);
				}

				return (
					<div className="flex flex-col gap-1 overflow-auto px-1">
						{data.map((repo) => (
							<div
								className="border-b border-slate-300 py-2 last:border-b-0"
								key={repo.id}
							>
								<GithubRepoItem repo={repo} />
							</div>
						))}
					</div>
				);
			})()}
		</div>
	);
};
