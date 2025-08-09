import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"
import site from "@/data/site.json"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: site.siteName,
  description: "Collaborative Software Development Club at The Ohio State University",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-[#0b0b0f] text-white antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {/* Background gradient and glow layers */}
          <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10">
            <div className="absolute -top-32 left-1/2 h-72 w-[36rem] -translate-x-1/2 rounded-full bg-gradient-to-br from-[#DE3626]/40 via-rose-500/20 to-transparent blur-3xl" />
            <div className="absolute bottom-[-10rem] right-[-8rem] h-72 w-[28rem] rounded-full bg-gradient-to-tr from-[#DE3626]/30 via-orange-400/10 to-transparent blur-2xl" />
            <div className="absolute top-1/3 left-[-10rem] h-56 w-80 rounded-full bg-[#DE3626]/10 blur-2xl" />
          </div>

          <div className="min-h-screen flex flex-col">
            <SiteHeader />
            <main className="flex-1">{children}</main>
            <SiteFooter />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
