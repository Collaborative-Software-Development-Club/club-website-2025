import Image from "next/image";

export function Headshot({
	filename,
	member,
}: {
	filename?: string;
	member: string;
}) {
	return (
		<Image
			src={filename ? `/headshots${filename}` : "/placeholder.svg"}
			alt={`${member} photo`}
			className="h-16 w-16 rounded-full object-cover border border-white/10"
			width={40}
			height={40}
		/>
	);
}
