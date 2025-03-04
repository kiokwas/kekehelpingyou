import Link from "next/link"
import { ArrowLeft, Download, Shield, Terminal } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function ToolsPage() {
  const tools = [
    {
      name: "Network Scanner",
      description: "Scan networks for vulnerabilities",
      version: "1.2.3",
      lastUpdated: "2023-10-15",
      downloadUrl: "https://example.com/network-scanner-1.2.3.zip",
    },
    {
      name: "Password Cracker",
      description: "Test password strength",
      version: "2.0.1",
      lastUpdated: "2023-11-20",
      downloadUrl: "https://example.com/password-cracker-2.0.1.zip",
    },
    {
      name: "Packet Analyzer",
      description: "Analyze network traffic",
      version: "3.1.0",
      lastUpdated: "2023-12-05",
      downloadUrl: "https://example.com/packet-analyzer-3.1.0.zip",
    },
    {
      name: "Vulnerability Scanner",
      description: "Identify system vulnerabilities",
      version: "2.4.5",
      lastUpdated: "2024-01-10",
      downloadUrl: "https://example.com/vulnerability-scanner-2.4.5.zip",
    },
    {
      name: "Web Fuzzer",
      description: "Fuzz web applications for vulnerabilities",
      version: "1.5.2",
      lastUpdated: "2024-01-25",
      downloadUrl: "https://example.com/web-fuzzer-1.5.2.zip",
    },
    {
      name: "Exploit Framework",
      description: "Framework for developing and executing exploits",
      version: "4.2.0",
      lastUpdated: "2024-02-05",
      downloadUrl: "https://example.com/exploit-framework-4.2.0.zip",
    },
    {
      name: "Forensic Toolkit",
      description: "Tools for digital forensics",
      version: "2.1.3",
      lastUpdated: "2024-01-30",
      downloadUrl: "https://example.com/forensic-toolkit-2.1.3.zip",
    },
    {
      name: "Reverse Engineering Suite",
      description: "Tools for reverse engineering binaries",
      version: "3.0.2",
      lastUpdated: "2024-02-10",
      downloadUrl: "https://example.com/reverse-engineering-suite-3.0.2.zip",
    },
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
          <h1 className="text-2xl font-bold">Security Tools</h1>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {tools.map((tool) => (
            <Card key={tool.name}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Terminal className="h-5 w-5" />
                  {tool.name}
                </CardTitle>
                <CardDescription>{tool.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Version: {tool.version}
                  <br />
                  Last Updated: {tool.lastUpdated}
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full" asChild>
                  <a href={tool.downloadUrl} download>
                    <Download className="mr-2 h-4 w-4" />
                    Download
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </main>
    </div>
  )
}

