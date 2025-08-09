export type LinkSet = {
	github?: string;
	demo?: string;
	linkedin?: string;
	[key: string]: unknown;
};

export type ProjectMedia = {
	type: "image" | "video";
	url: string;
	alt?: string;
};

export type ProjectTeamMember = {
	memberId: string;
	role: string;
};

export type Project = {
	id: string;
	title: string;
	description: string;
	category: string;
	status: string;
	semester: string;
	techStack: string[];
	links?: {
		github?: string;
		demo?: string;
	};
	media?: ProjectMedia[];
	team: ProjectTeamMember[];
	overview: {
		goals: string;
		audience: string;
	};
	timeline?: string;
	thumbnail?: string;
};

export interface Member {
	id: string;
	name: string;
	roles: string[];
	blurb?: string;
	photoUrl?: string;
	links?: {
		github?: string;
		linkedin?: string;
		website?: string;
	};
	affiliations?: string[];
}
