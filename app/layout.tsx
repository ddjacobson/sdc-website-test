import type React from "react"
import type { Metadata } from "next"
import { Inter, Fira_Code } from "next/font/google"
import "./globals.css"
import Link from "next/link"

const inter = Inter({ subsets: ["latin"] })
const firaCode = Fira_Code({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "UW Madison Software Development Club",
  description: "Official website of the UW Madison Software Development Club",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <header className="bg-gray-800 text-white">
          <nav className="container mx-auto px-6 py-3">
            <ul className="flex space-x-4">
              <li>
                <Link href="/" className="hover:text-gray-300">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-gray-300">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/announcements" className="hover:text-gray-300">
                  Announcements
                </Link>
              </li>
              <li>
                <Link href="/board" className="hover:text-gray-300">
                  Board Members
                </Link>
              </li>
              <li>
                <Link href="/resources" className="hover:text-gray-300">
                  Resources
                </Link>
              </li>
            </ul>
          </nav>
        </header>
        <main>{children}</main>
        <footer className="bg-gray-800 text-white mt-8">
          <div className="container mx-auto px-6 py-3 text-center">
            © {new Date().getFullYear()} UW Madison Software Development Club
          </div>
        </footer>
      </body>
    </html>
  )
}



import './globals.css'