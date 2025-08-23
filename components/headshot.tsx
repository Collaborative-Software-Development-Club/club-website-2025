"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";

interface HeadshotProps {
	filename?: string;
	member: string;
	className?: string;
}

export function Headshot({ filename, member, className }: HeadshotProps) {
	const imageSrc = filename
		? `/headshots/${filename}`
		: "/headshots/member-headshot-placeholder.png";

	return (
		<Image
			src={imageSrc || "/placeholder.svg"}
			alt={`${member} photo`}
			className={cn(
				"h-16 w-16 rounded-full object-cover border border-white/10",
				className
			)}
			height={64}
			width={64}
		/>
	);
}
