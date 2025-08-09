import type { Metadata } from "next";
import projects from "@/data/projects.json";
import hiw from "@/data/how-it-works.json";
import type { Project } from "@/lib/types";
import ProjectCard from "@/components/project-card";
import SectionHeader from "@/components/section-header";
import Timeline from "@/components/timeline";
import MeetingCallout from "@/components/meeting-callout";
import HomeClient from "@/components/home-hero";
import home from "@/data/home.json";

export const metadata: Metadata = {
    title: "Home",
    description: home.hero.subtitle,
};

export default function Page() {
    const featured = (projects as Project[])
        .filter(p => home.featuredProjectIds.includes(p.id))
        .slice(0, 3);

    return (
        <>
            <HomeClient />

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
                <Timeline steps={hiw.timeline} />
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
