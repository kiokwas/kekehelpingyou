import Link from "next/link"
import { ArrowLeft, Download, FileText, Shield } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function ReportingPage() {
  const reportingTools = [
    {
      name: "Tracker to Docx",
      author: "Jam",
      description: "Convert tracking data to Word documents",
      version: "1.1.0",
      lastUpdated: "2023-11-15",
      details:
        "This tool allows you to convert tracking data from various sources into formatted Word documents for reporting purposes.",
    },
    {
      name: "SCR Tracker",
      author: "Rafiq",
      description: "Track security compliance requirements",
      version: "2.3.1",
      lastUpdated: "2023-12-20",
      details:
        "A comprehensive tool for tracking security compliance requirements across different standards and frameworks.",
    },
    {
      name: "Vulnerability Report Generator",
      author: "Alex",
      description: "Generate professional vulnerability reports",
      version: "1.5.2",
      lastUpdated: "2024-01-10",
      details:
        "Automatically generate professional-looking vulnerability reports from scan results and assessment data.",
    },
    {
      name: "Findings Database",
      author: "Sarah",
      description: "Manage and track security findings",
      version: "3.0.1",
      lastUpdated: "2024-02-05",
      details:
        "A database tool for managing, tracking, and reporting on security findings across multiple assessments and clients.",
    },
  ]

  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <header className="border-b border-gray-800 bg-gray-900">
        <div className="container mx-auto flex h-16 items-center px-4">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl">
            <Shield className="h-6 w-6 text-green-500" />
            <span>CyberSec Hub</span>
          </Link>
        </div>
      </header>
      <main className="flex-1 container mx-auto px-4 py-6">
        <div className="mb-6 flex items-center gap-2">
          <Link href="/">
            <Button
              variant="outline"
              size="sm"
              className="border-gray-800 bg-transparent text-gray-400 hover:bg-gray-800 hover:text-white"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Dashboard
            </Button>
          </Link>
          <h1 className="text-2xl font-bold">Reporting Tools</h1>
        </div>

        <div className="mb-6 bg-gray-900 border border-gray-800 rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-semibold">Reporting Scripts</h2>
              <p className="text-sm text-gray-400">Download and use reporting scripts created by the team</p>
            </div>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {reportingTools.map((tool) => (
            <Card key={tool.name} className="bg-gray-900 border-gray-800 text-white">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-green-500" />
                  <CardTitle>{tool.name}</CardTitle>
                </div>
                <CardDescription className="text-gray-400">
                  By {tool.author} • {tool.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="text-sm text-gray-400">
                    <p>{tool.details}</p>
                  </div>
                  <div className="text-xs text-gray-500">
                    <p>Version: {tool.version}</p>
                    <p>Updated: {tool.lastUpdated}</p>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full border-green-500 text-green-500 hover:bg-green-500/10">
                  <Download className="mr-2 h-4 w-4" />
                  Download
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </main>
    </div>
  )
}

