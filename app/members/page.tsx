import members from "@/data/members.json";
import type { Member } from "@/lib/types";
import MemberSection from "@/components/member-section";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Members",
    description: "Leadership, project leads, members and alumni.",
};

export default function Page() {
	const all = members as Member[];
	return (
		<div className="container mx-auto px-4 py-12 space-y-10">
			<header>
				<h1 className="text-3xl font-bold text-white">Members</h1>
				<p className="mt-2 text-zinc-300">
					Leadership, project leads, members and alumni.
				</p>
			</header>

			<MemberSection title="Executive Board" members={all} />
		</div>
	);
}
