"use client"

import { useState } from "react"
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline"

const announcements = [
  {
    title: "Project Meeting",
    date: "03/02/2025",
    content:
      "In [room] we will be going over getting set up with the SDC repo, Git, and getting a bare-bones demo project up and running locally.",
    type: "projects",
  },
  {
    title: "New Project Showcase",
    date: "March 10, 2024",
    content:
      "Check out our latest project showcase on March 30th. Five teams will present their innovative solutions, including a new campus navigation app and a study group finder platform. Don't miss this opportunity to see what your fellow club members have been working on!",
    type: "showcase",
  },
  {
    title: "Guest Speaker: Tech Industry Insights",
    date: "March 5, 2024",
    content:
      "We're excited to host Jane Doe, CTO of TechCorp, for a talk on emerging trends in the software industry on March 20th. Learn about the latest developments in AI, cloud computing, and what skills are in demand for new graduates.",
    type: "speaker",
  },
  {
    title: "Workshop: Intro to Machine Learning",
    date: "February 28, 2024",
    content:
      "Join us for a hands-on workshop on the basics of machine learning. We'll cover fundamental concepts and work through a practical example using Python and scikit-learn. No prior ML experience required!",
    type: "workshop",
  },
  {
    title: "Summer Internship Opportunities",
    date: "February 20, 2024",
    content:
      "We've compiled a list of summer internship opportunities at various tech companies. Check out the club's resource page for application links and deadlines. Don't miss out on these great opportunities to gain real-world experience!",
    type: "opportunity",
  },
]

const allTypes = [...new Set(announcements.map((a) => a.type))]

export default function Announcements() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedType, setSelectedType] = useState("all")

  const filteredAnnouncements = announcements.filter(
    (announcement) =>
      (selectedType === "all" || announcement.type === selectedType) &&
      (announcement.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        announcement.content.toLowerCase().includes(searchTerm.toLowerCase())),
  )

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Header Section */}
      <section className="relative py-12">
        <div className="absolute inset-0 opacity-5">
          <div className="grid grid-cols-6 gap-1 h-full w-full">
            {Array.from({ length: 100 }).map((_, i) => (
              <div key={i} className="border border-white/10 aspect-square" />
            ))}
          </div>
        </div>

        <div className="relative container mx-auto px-6">
          <h1 className="text-4xl font-bold mb-4">
            Club <span className="text-uw-red">Announcements</span>
          </h1>
          <p className="text-gray-400 max-w-2xl">
            Stay up to date with the latest news, events, and opportunities from the UW Madison Software Development
            Club.
          </p>
        </div>
      </section>

      {/* Search and Filter */}
      <div className="container mx-auto px-6 py-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search announcements..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="bg-gray-800 text-white rounded-full py-2 pl-10 pr-4 w-full md:w-64 focus:outline-none focus:ring-2 focus:ring-uw-red"
            />
            <MagnifyingGlassIcon className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setSelectedType("all")}
              className={`px-3 py-1 rounded-full text-sm ${
                selectedType === "all" ? "bg-uw-red text-white" : "bg-gray-800 text-gray-400"
              }`}
            >
              All
            </button>
            {allTypes.map((type) => (
              <button
                key={type}
                onClick={() => setSelectedType(type)}
                className={`px-3 py-1 rounded-full text-sm ${
                  selectedType === type ? "bg-uw-red text-white" : "bg-gray-800 text-gray-400"
                }`}
              >
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Announcements List */}
      <div className="container mx-auto px-6 py-6">
        <div className="space-y-6">
          {filteredAnnouncements.map((announcement, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg p-6 border border-gray-700 hover:border-uw-red transition-colors"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <h2 className="text-xl font-semibold text-uw-red">{announcement.title}</h2>
                <time className="text-sm text-gray-400">{announcement.date}</time>
              </div>
              <p className="text-gray-300">{announcement.content}</p>
              <div className="mt-4">
                <span className="inline-block px-3 py-1 text-sm bg-gray-700 text-uw-red rounded-full">
                  {announcement.type}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

