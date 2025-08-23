import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import type { Member } from "@/lib/types";
import { Headshot } from "./headshot";

export default function MemberCard({ member }: { member: Member }) {
	const img = member.photoUrl || "/member-headshot-placeholder.png";
	return (
		<Card className="h-full border-white/10 bg-white/5 hover:shadow-[0_0_20px_rgba(222,54,38,0.2)] transition-shadow">
			<CardHeader className="flex flex-row items-center gap-4">
				<Headshot filename={member.photoUrl} member={member.name} />
				<div>
					<CardTitle className="text-base">{member.name}</CardTitle>
					<div className="mt-1 flex flex-wrap gap-1">
						{member.roles.map(role => (
							<Badge variant="secondary" key={role}>
								{role}
							</Badge>
						))}
					</div>
				</div>
			</CardHeader>
			<CardContent>
				{member.blurb ? (
					<p className="text-sm text-zinc-300">{member.blurb}</p>
				) : null}
				<div className="mt-3 flex gap-3">
					{member.links?.github ? (
						<Link
							href={member.links.github}
							target="_blank"
							rel="noreferrer"
							className="text-sm text-[#DE3626] hover:underline"
						>
							GitHub
						</Link>
					) : null}
					{member.links?.linkedin ? (
						<Link
							href={member.links.linkedin}
							target="_blank"
							rel="noreferrer"
							className="text-sm text-[#DE3626] hover:underline"
						>
							LinkedIn
						</Link>
					) : null}
				</div>
			</CardContent>
		</Card>
	);
}
