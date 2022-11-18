import axios, { AxiosError } from "axios";
import { useEffect, useState } from "react";
import { GithubRepo } from "../typings/githubRepo";

interface GithubAPIRes {
	items: {
		full_name: string;
		description: string;
		license?: {
			name: string;
		};
		stargazers_count: number;
		language: string;
		topics: string[];
		id: number;
		updated_at: string;
		html_url: string;
	}[];
}

export const transformGithubData = (res: GithubAPIRes): GithubRepo[] =>
	res.items.map((item) => ({
		id: item.id,
		name: item.full_name,
		description: item.description,
		licenseName: item.license?.name ?? "",
		stars: item.stargazers_count,
		topics: item.topics,
		lastUpdate: new Date(item.updated_at),
		language: item.language,
		link: item.html_url,
	}));

interface HookResult {
	loading: boolean;
	data?: GithubRepo[];
	error?: AxiosError;
}

export const useSearchGithubRepo = (
	searchValue: string,
	language: string,
): HookResult => {
	const [result, setResult] = useState<HookResult>({
		loading: false,
		data: undefined,
		error: undefined,
	});

	useEffect(() => {
		const loadData = async () => {
			setResult({
				loading: true,
				data: undefined,
				error: undefined,
			});
			try {
				const { data: resData } = await axios.get(
					`https://api.github.com/search/repositories?q=${searchValue}+language:${language}&per_page=20 `,
				);
				setResult({
					loading: false,
					data: transformGithubData(resData),
					error: undefined,
				});
			} catch (e) {
				setResult({
					loading: false,
					data: undefined,
					error: e as AxiosError,
				});
			}
		};

		if (searchValue.length < 3 || language === "") {
			setResult({
				loading: false,
				data: undefined,
				error: undefined,
			});
			return undefined;
		}

		const timeoutId = setTimeout(loadData, 200);

		return () => {
			clearTimeout(timeoutId);
		};
	}, [searchValue, language]);

	return {
		loading: result.loading,
		data: result.data,
		error: result.error,
	};
};
