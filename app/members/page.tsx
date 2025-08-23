import members from "@/data/members.json";
import type { Member } from "@/lib/types";
import MemberSection from "@/components/member-section";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Members",
	description: "Executive Board",
};

export default function Page() {
	const all = members as Member[];
	return (
		<div className="container mx-auto px-4 py-12 space-y-10">
			<header>
				<h1 className="text-3xl font-bold text-white">Members</h1>
			</header>

			<MemberSection title="Executive Board" members={all} />
		</div>
	);
}
