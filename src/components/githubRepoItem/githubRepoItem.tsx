import { format } from "date-fns";
import { ExternalLink, Star } from "react-feather";
import { GithubRepo } from "../../typings/githubRepo";

interface Props {
	repo: GithubRepo;
}

export const GithubRepoItem = (props: Props) => {
	const {
		repo: {
			name,
			description,
			licenseName,
			stars,
			topics,
			lastUpdate,
			language,
			link,
		},
	} = props;

	const [main, ...rest] = name.split("/").reverse();

	return (
		<div className="flex gap-1">
			<div className="shrink-0 pt-2">
				<img
					src="/logo/repo-16.svg"
					alt="repo"
				/>
			</div>
			<div className="flex flex-col gap-2">
				<div className="text-lg text-blue-600">
					<a
						href={link}
						target="_blank"
						rel="noreferrer"
						className="hover:underline"
					>
						<span>{rest.join("/")}/</span>
						<span className="font-bold">{main}</span>
						<ExternalLink
							size={14}
							className="ml-1 inline align-super"
						/>
					</a>
				</div>
				{description && (
					<div className="select-none">{description}</div>
				)}
				{topics && topics.length !== 0 && (
					<div className="flex select-none flex-wrap gap-2">
						{topics.map((topic) => (
							<div
								key={topic}
								className="w-fit whitespace-nowrap rounded-lg bg-cyan-200 px-2 py-0.5 text-sm"
							>
								{topic}
							</div>
						))}
					</div>
				)}
				<div className="flex select-none items-center gap-5 text-sm text-slate-400">
					<div className="flex items-center gap-1">
						<Star size={12} />
						<span>{stars}</span>
					</div>
					{language && <div>{language}</div>}
					{licenseName && <div>{licenseName}</div>}
					<div>Updated {format(lastUpdate, "dd/MM/yyyy")}</div>
				</div>
			</div>
		</div>
	);
};
