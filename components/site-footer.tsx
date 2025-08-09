import site from "@/data/site.json"
import Link from "next/link"

export default function SiteFooter() {
  return (
    <footer className="w-full border-t border-white/10 bg-black/30">
      <div className="container mx-auto px-4 py-8 grid gap-4 sm:grid-cols-2 items-center text-zinc-300">
        <div className="text-sm">
          <span className="font-medium">{site.siteName}</span> {"\u00B7"} {"\u00A9"} {new Date().getFullYear()}{" "}
          {"\u00B7"} The Ohio State University student organization
        </div>
        <div className="flex justify-start sm:justify-end gap-4">
          <Link
            href={site.footer.discordUrl}
            target="_blank"
            rel="noreferrer"
            className="text-sm text-zinc-300 hover:text-white transition-colors"
          >
            Discord
          </Link>
          <Link
            href={site.footer.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="text-sm text-zinc-300 hover:text-white transition-colors"
          >
            GitHub
          </Link>
          <Link
            href={`mailto:${site.footer.email}`}
            className="text-sm text-zinc-300 hover:text-white transition-colors"
          >
            Email
          </Link>
          <Link
            href={site.footer.constitutionUrl}
            target="_blank"
            rel="noreferrer"
            className="text-sm text-zinc-300 hover:text-white transition-colors"
          >
            Constitution
          </Link>
          <Link
            href={site.footer.studentOrgUrl}
            target="_blank"
            rel="noreferrer"
            className="text-sm text-zinc-300 hover:text-white transition-colors"
          >
            Official Org Page
          </Link>
        </div>
      </div>
    </footer>
  )
}
