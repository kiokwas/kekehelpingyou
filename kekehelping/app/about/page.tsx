import Link from "next/link"
import { ArrowLeft, Shield } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <header className="border-b">
        <div className="container mx-auto flex h-16 items-center px-4">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl">
            <Shield className="h-6 w-6" />
            <span>CyberSec Hub</span>
          </Link>
        </div>
      </header>
      <main className="flex-1 container mx-auto px-4 py-6">
        <div className="mb-6 flex items-center gap-2">
          <Link href="/">
            <Button variant="outline" size="sm">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Dashboard
            </Button>
          </Link>
          <h1 className="text-2xl font-bold">About</h1>
        </div>

        <div className="prose dark:prose-invert max-w-none">
          <p className="text-lg">
            Hey, I'm creating this because I got tired of asking everyone how to do this and that—now I can just refer
            back here and help others like me!
          </p>
          <p>
            CyberSec Hub is a centralized platform for cybersecurity professionals and enthusiasts to access tools,
            notes, and resources. Our goal is to make cybersecurity knowledge more accessible and streamline the process
            of finding and using essential tools and information.
          </p>
        </div>
      </main>
    </div>
  )
}

