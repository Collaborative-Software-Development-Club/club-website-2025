"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import site from "@/data/site.json";
import { Button } from "@/components/ui/button";
import BrandButton from "@/components/brand-button";
import { Menu } from "lucide-react";
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";

const nav = [
	{ title: "Home", href: "/" },
	{ title: "Projects", href: "/projects" },
	{ title: "Members", href: "/members" },
];

export default function SiteHeader() {
	const pathname = usePathname();

	return (
		<header className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/40 backdrop-blur supports-[backdrop-filter]:bg-black/30">
			<div className="container mx-auto flex h-16 items-center justify-between px-4">
				<Link href="/" className="flex items-center gap-2">
					<img
						src="/logo.svg"
						alt="CSDC at Ohio State logo"
						className="h-6 w-auto"
					/>
				</Link>

				<nav
					className="hidden items-center gap-6 md:flex"
					aria-label="Primary"
				>
					{nav.map(item => {
						const active = pathname === item.href;
						return (
							<Link
								key={item.href}
								href={item.href}
								aria-current={active ? "page" : undefined}
								className={[
									"text-sm transition-colors",
									active
										? "text-white"
										: "text-zinc-300 hover:text-white",
								].join(" ")}
							>
								{item.title}
							</Link>
						);
					})}
				</nav>

				<div className="hidden md:block">
					<BrandButton asChild>
						<Link
							href={site.footer.discordUrl}
							target="_blank"
							rel="noreferrer"
						>
							Join Discord
						</Link>
					</BrandButton>
				</div>

				{/* Mobile menu */}
				<div className="md:hidden">
					<Sheet>
						<SheetTrigger asChild>
							<Button
								variant="outline"
								size="icon"
								aria-label="Open menu"
							>
								<Menu className="h-5 w-5" />
							</Button>
						</SheetTrigger>

						{/* Improved spacing and structure */}
						<SheetContent
							side="right"
							className="border-l border-white/10 bg-[#0b0b0f] p-0 "
						>
							{/* Nav list */}
							<div className="flex h-full flex-col mt-10 justify-between">
								<nav
									className="px-4 py-3"
									role="navigation"
									aria-label="Mobile"
								>
									<ul className="flex flex-col gap-1">
										{nav.map(item => {
											const active =
												pathname === item.href;
											return (
												<li key={item.href}>
													<SheetClose asChild>
														<Link
															href={item.href}
															aria-current={
																active
																	? "page"
																	: undefined
															}
															className={[
																"block w-full rounded-md px-3 py-3 text-base transition-colors",
																active
																	? "bg-white/5 text-white"
																	: "text-zinc-300 hover:bg-white/5 hover:text-white",
															].join(" ")}
														>
															{item.title}
														</Link>
													</SheetClose>
												</li>
											);
										})}
									</ul>
								</nav>

								{/* Pinned CTA with safe-area padding */}
								<div className="p-4 ">
									<BrandButton asChild className="w-full">
										<a
											href={site.footer.discordUrl}
											target="_blank"
											rel="noreferrer"
										>
											Join Discord
										</a>
									</BrandButton>
								</div>
							</div>
						</SheetContent>
					</Sheet>
				</div>
			</div>
		</header>
	);
}
