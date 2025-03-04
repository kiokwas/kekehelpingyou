import Link from "next/link"
import { ArrowLeft, Shield, User } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function ContributorsPage() {
  const contributors = [
    { name: "Ali", role: "Security Researcher", contributions: "Network scanning tools, Vulnerability databases" },
    { name: "Abu", role: "Penetration Tester", contributions: "Web application security guides, API testing scripts" },
  ]

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
          <h1 className="text-2xl font-bold">Contributors</h1>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {contributors.map((contributor) => (
            <Card key={contributor.name}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="h-5 w-5" />
                  {contributor.name}
                </CardTitle>
                <CardDescription>{contributor.role}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Contributions: {contributor.contributions}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  )
}

