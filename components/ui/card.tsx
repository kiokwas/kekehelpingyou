import type React from "react"

export function Card({ children }: { children: React.ReactNode }) {
  return <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">{children}</div>
}

export function CardHeader({ children }: { children: React.ReactNode }) {
  return <div className="mb-4">{children}</div>
}

export function CardTitle({ children }: { children: React.ReactNode }) {
  return <h2 className="text-xl font-bold">{children}</h2>
}

export function CardDescription({ children }: { children: React.ReactNode }) {
  return <p className="text-gray-700 text-base">{children}</p>
}

export function CardContent({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>
}

export function CardFooter({ children }: { children: React.ReactNode }) {
  return <div className="border-t pt-4 mt-4">{children}</div>
}

