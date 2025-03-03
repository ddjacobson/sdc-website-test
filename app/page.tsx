import Link from "next/link"
import Image from "next/image"
import dynamic from "next/dynamic"
import { CalendarIcon, CodeBracketIcon, UserGroupIcon } from "@heroicons/react/24/outline"

const TypedText = dynamic(() => import("./components/TypedText"), { ssr: false })

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="grid grid-cols-6 gap-1 h-full w-full">
            {Array.from({ length: 100 }).map((_, i) => (
              <div key={i} className="border border-white/10 aspect-square" />
            ))}
          </div>
        </div>

        <div className="relative container mx-auto px-6 flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-5xl font-bold mb-6">
              <span className="text-uw-red">UW Madison</span>
              <br />
              Software Development Club
            </h1>
            <div className="text-2xl mb-8">
              We code in{" "}
              <span className="text-uw-red">
                <TypedText strings={["JavaScript", "Python", "Java", "C++", "React", "Node.js"]} />
              </span>
            </div>
            <p className="max-w-2xl mx-auto lg:mx-0 text-gray-400 mb-8">
              Join a community of passionate developers, build amazing projects, and enhance your coding skills.
            </p>
            <Link
              href="https://discord.gg/fZRxcFbf"
              className="inline-block bg-uw-red hover:bg-uw-dark-red text-white font-bold py-3 px-6 rounded-lg transition duration-300"
            >
              Join Our Club
            </Link>
          </div>
          <div className="flex-1 relative">
            <div className="relative w-80 h-80 mx-auto">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-A3bt08MGmRMjhYKPL8IkEu7Zt7UdRR.png"
                alt="UW Madison Software Development Club Logo"
                width={400}
                height={400}
                className="w-full h-full object-contain animate-float"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Code Editor-like Sections */}
      <div className="container mx-auto px-4 py-4">
        <div className="bg-gray-800 rounded-lg overflow-hidden shadow-2xl border border-gray-700">
          <div className="bg-gray-700 px-4 py-2 flex items-center">
            <div className="flex space-x-2">
              <div className="w-3 h-3 rounded-full bg-uw-red"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="ml-4 text-sm font-mono">sdc_activities.md</div>
          </div>
          <div className="p-6 space-y-8">
            {/* Upcoming Events */}
            <div className="group">
              <h2 className="text-2xl font-semibold mb-4 flex items-center">
                <CalendarIcon className="w-6 h-6 mr-2 text-uw-red" />
                Upcoming Events
              </h2>
              <ul className="space-y-2">
                {[
                  { date: "Apr 15", event: "Annual Hackathon" },
                  { date: "May 1", event: "Workshop on React and Next.js" },
                  { date: "May 20", event: "Guest Speaker from Google" },
                ].map((item, index) => (
                  <li key={index} className="flex items-center p-2 rounded hover:bg-gray-700/50 transition-colors">
                    <span className="text-uw-red mr-2">&gt;</span>
                    <span className="text-yellow-300">{item.date}</span>: {item.event}
                  </li>
                ))}
              </ul>
            </div>

            {/* Featured Projects
            <div>
              <h2 className="text-2xl font-semibold mb-4 flex items-center">
                <CodeBracketIcon className="w-6 h-6 mr-2 text-uw-red" />
                Featured Projects
              </h2>
              <ul className="space-y-2">
                {["Campus Navigator App", "Study Buddy Finder", "Course Review System"].map((project, index) => (
                  <li key={index} className="flex items-center p-2 rounded hover:bg-gray-700/50 transition-colors">
                    <span className="text-uw-red mr-2">&gt;</span>
                    <Link
                      href={`/projects/${project.toLowerCase().replace(/\s+/g, "-")}`}
                      className="text-blue-400 hover:underline"
                    >
                      {project}
                    </Link>
                  </li>
                ))}
              </ul>
            </div> */}

            {/* Why Join Us */}
            <div>
              <h2 className="text-2xl font-semibold mb-4 flex items-center">
                <UserGroupIcon className="w-6 h-6 mr-2 text-uw-red" />
                Why Join Us
              </h2>
              <ul className="space-y-2">
                {[
                  "Collaborate on real-world projects",
                  "Learn from experienced developers",
                  "Wednesday meetings: Workshop session on CS topics like AI, Resume Optimization, Algorithms, etc.",
                  "Sunday meetings: Project meeting to check in, ask questions, and see live demos of project-building areas ",
                ].map((item, index) => (
                  <li key={index} className="flex items-center p-2 rounded hover:bg-gray-700/50 transition-colors">
                    <span className="text-uw-red mr-2">&gt;</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

