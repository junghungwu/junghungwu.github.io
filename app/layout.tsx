import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navigation from "@/components/navigation"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Functional Neuroimaging Lab",
  description: "University research lab specializing in functional neuroimaging and brain research",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        <main className="min-h-screen bg-white pt-20">{children}</main>
        <footer className="bg-primary text-white py-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <p className="font-sans">&copy; Functional Neuroimaging Lab. All rights reserved.</p>
              <p className="mt-3 text-sm opacity-80 font-sans">
                George Washington University, Biomedical Engineering | Contact: junghunc@gwu.edu
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
