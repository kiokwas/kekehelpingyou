"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { AlertCircle, Download, FileText, Home, Info, Shield, Terminal, Users } from "lucide-react"
import { motion } from "framer-motion"

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ThemeToggle } from "@/components/theme-toggle"

const BlurText = ({ text }: { text: string }) => {
  return (
    <motion.h1
      className="text-4xl font-bold mb-4"
      initial={{ filter: "blur(10px)" }}
      animate={{ filter: "blur(0px)" }}
      transition={{ duration: 1 }}
    >
      {text}
    </motion.h1>
  )
}

export default function Dashboard() {
  const [adminAlert, setAdminAlert] = useState({
    title: "System Update",
    description: "New vulnerability scanner has been added. Please update your tools.",
  })

  const categories = [
    {
      id: "tools",
      name: "Security Tools",
      icon: Terminal,
      description: "Download and manage security tools",
    },
    {
      id: "pentest",
      name: "Pentest Notes / Walkthrough",
      icon: FileText,
      description: "Access pentest notes and walkthroughs",
    },
    {
      id: "reporting",
      name: "Reporting",
      icon: Terminal,
      description: "Download reporting scripts and tools",
    },
    {
      id: "contributors",
      name: "Contributors",
      icon: Users,
      description: "View our amazing contributors",
    },
  ]

  const tools = [
    {
      name: "Network Scanner",
      description: "Scan networks for vulnerabilities",
      version: "1.2.3",
      newVersion: "1.3.0",
      lastUpdated: "2023-10-15",
      downloadUrl: "https://example.com/network-scanner-1.3.0.zip",
    },
    {
      name: "Password Cracker",
      description: "Test password strength",
      version: "2.0.1",
      newVersion: "2.1.0",
      lastUpdated: "2023-11-20",
      downloadUrl: "https://example.com/password-cracker-2.1.0.zip",
    },
    // ... (other tools)
  ]

  const reportingTools = [
    {
      name: "Tracker to Docx",
      author: "Jam",
      description: "Convert tracking data to Word documents",
      version: "1.1.0",
      lastUpdated: "2023-11-15",
      downloadUrl: "https://example.com/tracker-to-docx-1.1.0.zip",
    },
    {
      name: "SCR Tracker",
      author: "Rafiq",
      description: "Track security compliance requirements",
      version: "2.3.1",
      lastUpdated: "2023-12-20",
      downloadUrl: "https://example.com/scr-tracker-2.3.1.zip",
    },
  ]

  const [text, setText] = useState("I am so lazy")
  const phrases = ["I am so lazy", "But I love cybersecurity", "Let's hack ethically"]

  useEffect(() => {
    let i = 0
    const intervalId = setInterval(() => {
      setText(phrases[i])
      i = (i + 1) % phrases.length
    }, 3000)
    return () => clearInterval(intervalId)
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <header className="border-b">
        <div className="container mx-auto flex h-16 items-center px-4">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl">
            <Shield className="h-6 w-6" />
            <span>CyberSec Hub</span>
          </Link>
          <nav className="ml-auto flex items-center gap-6">
            <Link
              href="/"
              className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground"
            >
              <Home className="h-4 w-4" />
              Dashboard
            </Link>
            <Link
              href="/about"
              className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground"
            >
              <Info className="h-4 w-4" />
              About
            </Link>
            <ThemeToggle />
          </nav>
        </div>
      </header>
      <main className="flex-1 container mx-auto px-4 py-6">
        <div className="mb-6">
          <Alert>
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>{adminAlert.title}</AlertTitle>
            <AlertDescription>{adminAlert.description}</AlertDescription>
          </Alert>
        </div>

        <div className="mb-8 text-center">
          <BlurText text={text} />
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <Card key={category.id}>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <category.icon className="h-5 w-5" />
                  <CardTitle>{category.name}</CardTitle>
                </div>
                <CardDescription>{category.description}</CardDescription>
              </CardHeader>
              <CardFooter>
                <Link href={`/${category.id}`} className="w-full">
                  <Button variant="outline" className="w-full">
                    View
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-10">
          <Tabs defaultValue="tools" className="w-full">
            <TabsList>
              <TabsTrigger value="tools">Tools</TabsTrigger>
              <TabsTrigger value="reporting">Reporting</TabsTrigger>
            </TabsList>
            <TabsContent value="tools" className="mt-4">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                {tools.map((tool) => (
                  <Card key={tool.name}>
                    <CardHeader>
                      <CardTitle className="text-base">{tool.name}</CardTitle>
                      <CardDescription>{tool.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="text-xs text-muted-foreground">
                        <p>Version: {tool.version}</p>
                        <p>Updated: {tool.lastUpdated}</p>
                      </div>
                    </CardContent>
                    <CardFooter>
                      {tool.newVersion ? (
                        <Button variant="outline" size="sm" className="w-full" asChild>
                          <a href={tool.downloadUrl} download>
                            Update to v{tool.newVersion}
                          </a>
                        </Button>
                      ) : (
                        <Button variant="outline" size="sm" className="w-full" asChild>
                          <a href={tool.downloadUrl} download>
                            <Download className="mr-2 h-4 w-4" />
                            Download
                          </a>
                        </Button>
                      )}
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="reporting" className="mt-4">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                {reportingTools.map((tool) => (
                  <Card key={tool.name}>
                    <CardHeader>
                      <CardTitle className="text-base">{tool.name}</CardTitle>
                      <CardDescription>
                        By {tool.author} • {tool.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="text-xs text-muted-foreground">
                        <p>Version: {tool.version}</p>
                        <p>Updated: {tool.lastUpdated}</p>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" size="sm" className="w-full" asChild>
                        <a href={tool.downloadUrl} download>
                          <Download className="mr-2 h-4 w-4" />
                          Download
                        </a>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  )
}

