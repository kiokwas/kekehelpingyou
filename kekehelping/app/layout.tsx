import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "CyberSec Hub",
  description: "Cybersecurity tools and resources hub",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
          <footer className="border-t py-4 text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} My Confidentials
          </footer>
        </ThemeProvider>
      </body>
    </html>
  )
}

