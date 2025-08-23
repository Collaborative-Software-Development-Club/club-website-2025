"use client";

import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Headshot } from "./headshot";
import Link from "next/link";
import { Github, Linkedin, ExternalLink } from "lucide-react";
import type { Member } from "@/lib/types";

interface MemberDialogProps {
	member: Member;
	open: boolean;
	onOpenChange: (open: boolean) => void;
}

export default function MemberDialog({
	member,
	open,
	onOpenChange,
}: MemberDialogProps) {
	return (
		<Dialog open={open} onOpenChange={onOpenChange}>
			<DialogContent className="md:flex md:flex-row gap-8 md:!max-w-3xl overflow-y-scroll max-h-[80vh]">
				<div className="">
					<Headshot
						filename={member.photoUrl}
						member={member.name}
						className="min-w-50 min-h-50 mx-auto"
					/>
				</div>
				<div className="flex flex-col gap-2">
					<DialogHeader className="flex flex-col items-start">
						<DialogTitle className="text-white">
							{member.name}
						</DialogTitle>
						<div className="flex flex-wrap gap-2">
							{member.roles.map(role => (
								<Badge
									key={role}
									variant="secondary"
									className="bg-[#DE3626]/10 text-[#DE3626] border-[#DE3626]/20"
								>
									{role}
								</Badge>
							))}
						</div>
					</DialogHeader>
					{member.blurb && (
						<div className="flex flex-col gap-1">
							<h3 className="text-sm font-semibold text-zinc-300">
								About
							</h3>
							<p className="text-zinc-300 leading-relaxed">
								{member.blurb}
							</p>
						</div>
					)}

					<div className="flex gap-4">
						{member.links?.github && (
							<Link
								href={member.links.github}
								target="_blank"
								rel="noreferrer"
								className="flex items-center gap-2 text-zinc-300 hover:text-[#DE3626] transition-colors"
							>
								<Github className="w-4 h-4" />
								<span className="text-sm">GitHub</span>
							</Link>
						)}
						{member.links?.linkedin && (
							<Link
								href={member.links.linkedin}
								target="_blank"
								rel="noreferrer"
								className="flex items-center gap-2 text-zinc-300 hover:text-[#DE3626] transition-colors"
							>
								<Linkedin className="w-4 h-4" />
								<span className="text-sm">LinkedIn</span>
							</Link>
						)}
					</div>
				</div>
			</DialogContent>
		</Dialog>
	);
}
