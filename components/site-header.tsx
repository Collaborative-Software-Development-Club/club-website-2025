"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import site from "@/data/site.json"
import { Button } from "@/components/ui/button"
import BrandButton from "@/components/brand-button"
import { Menu } from "lucide-react"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"

const nav = [
  { title: "Home", href: "/" },
  { title: "Projects", href: "/projects" },
  { title: "Members", href: "/members" },
]

export default function SiteHeader() {
  const pathname = usePathname()

  return (
    <header className="w-full border-b border-white/10 bg-black/40 backdrop-blur supports-[backdrop-filter]:bg-black/30 sticky top-0 z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <img src="/logo.svg" alt="CSDC at Ohio State logo" className="h-6 w-auto" />
          <span className="font-semibold text-white">{site.siteName}</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {nav.map((item) => {
            const active = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm transition-colors ${active ? "text-white font-medium" : "text-zinc-300 hover:text-white"}`}
              >
                {item.title}
              </Link>
            )
          })}
        </nav>

        <div className="hidden md:block">
          <BrandButton asChild>
            <Link href={site.footer.discordUrl} target="_blank" rel="noreferrer">
              Join Discord
            </Link>
          </BrandButton>
        </div>

        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" aria-label="Open menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-[#0b0b0f] border-l border-white/10">
              <SheetHeader>
                <SheetTitle className="text-white">{site.siteName}</SheetTitle>
              </SheetHeader>
              <div className="mt-4 flex flex-col gap-3">
                {nav.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`text-base ${pathname === item.href ? "font-medium text-white" : "text-zinc-300 hover:text-white"}`}
                  >
                    {item.title}
                  </Link>
                ))}
                <BrandButton asChild className="mt-2">
                  <Link href={site.footer.discordUrl} target="_blank" rel="noreferrer">
                    Join Discord
                  </Link>
                </BrandButton>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
