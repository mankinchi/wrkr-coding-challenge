export interface GithubRepo {
	id: number;
	name: string;
	description?: string;
	licenseName?: string;
	language?: string;
	stars: number;
	topics?: string[];
	lastUpdate: Date;
	link: string;
}
