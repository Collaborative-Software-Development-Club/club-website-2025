import Link from "next/link";
import home from "@/data/home.json";
import site from "@/data/site.json";
import projects from "@/data/projects.json";
import hiw from "@/data/how-it-works.json";
import type { Project } from "@/lib/types";
import ProjectCard from "@/components/project-card";
import BrandButton from "@/components/brand-button";
import SectionHeader from "@/components/section-header";
import Timeline, { type TimelineStep } from "@/components/timeline";
import MeetingCallout from "@/components/meeting-callout";
import RotatingWords from "@/components/rotating-words";
import {
	Users,
	CalendarCheck2,
	CheckCircle2,
	Gavel,
	type LucideIcon,
} from "lucide-react";

const icons: Record<string, LucideIcon> = {
	Users,
	CalendarCheck2,
	CheckCircle2,
	Gavel,
};

export default function Page() {
	const featured = (projects as Project[])
		.filter(p => home.featuredProjectIds.includes(p.id))
		.slice(0, 3);

	const timeline = hiw.timeline.map((step: any) => ({
		...step,
		icon: icons[step.icon],
	}));

	return (
		<>
			{/* Simplified Hero */}
			<section className="relative overflow-hidden">
				<div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-[#DE3626]/5 to-transparent" />
				<div className="container mx-auto px-4 py-16 md:py-24 grid gap-6">
					<div>
						<div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-300">
							Collaborative Software Development Club @ Ohio State
						</div>
						<h1 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight text-white">
							<RotatingWords
								words={["Code", "Develop", "Build", "Learn"]}
								className="pr-2"
								aria-label="Rotating headline"
							/>{" "}
							Together
						</h1>
						<p className="mt-4 text-lg text-zinc-300 max-w-2xl">
							{home.hero.subtitle}
						</p>
						<div className="mt-6">
							<BrandButton asChild size="lg">
								<Link
									href={site.footer.discordUrl}
									target="_blank"
									rel="noreferrer"
								>
									Join Discord
								</Link>
							</BrandButton>
						</div>
					</div>
				</div>
			</section>

			{/* Featured projects */}
			<section className="container mx-auto px-4 py-12">
				<SectionHeader
					title="Featured projects"
					actionHref="/projects"
					actionLabel="View all"
					actionAriaLabel="View all projects"
				/>
				<div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
					{featured.map(p => (
						<ProjectCard key={p.id} project={p} />
					))}
				</div>
			</section>

			{/* How it works - linear timeline */}
			<section id="how-it-works" className="container mx-auto px-4 py-16">
				<SectionHeader
					title="How it works"
					subtitle="A simple path to join a team, ship real projects, and grow through mentorship."
				/>
				<Timeline steps={timeline} />
			</section>

			{/* Weekly Meeting Callout */}
			<section className="container mx-auto px-4 pb-16">
				<MeetingCallout
					dayTime="Wednesdays at 6pm"
					location="Enarson Classroom Building"
				/>
			</section>
		</>
	);
}
