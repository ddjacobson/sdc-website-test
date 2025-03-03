import Image from "next/image"

const projects = [
  {
    title: "madhousing.com",
    description:
      "An interactive map application to help students navigate the UW Madison campus efficiently. Built with React Native and integrates with campus APIs.",
    image: "/madhousing.png?height=200&width=300",
    tech: ["React Native", "Node.js", "MongoDB"],
    github: "https://www.madhousing.com/",
  },
  // {
  //   title: "Study Buddy Finder",
  //   description:
  //     "A platform for students to find study partners based on courses and schedules. Features real-time chat and calendar integration.",
  //   image: "/placeholder.svg?height=200&width=300",
  //   tech: ["Next.js", "TypeScript", "Prisma"],
  //   github: "https://github.com/uw-sdc/study-buddy",
  // },
  // {
  //   title: "Course Review System",
  //   description:
  //     "A web application for students to share and read reviews of UW Madison courses. Includes professor ratings and course difficulty metrics.",
  //   image: "/placeholder.svg?height=200&width=300",
  //   tech: ["React", "Firebase", "TailwindCSS"],
  //   github: "https://github.com/uw-sdc/course-reviews",
  // },
]

export default function Projects() {
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
            Our <span className="text-uw-red">Projects</span>
          </h1>
          <p className="text-gray-400 max-w-2xl">
            Explore projects created by our club members. Each project demonstrates our commitment to
            learning and practical application of software development skills.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg overflow-hidden border border-gray-700 hover:border-uw-red transition-colors group"
            >
              <div className="relative h-48">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={300}
                  height={200}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-uw-red/90 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white font-semibold hover:underline"
                  >
                    View project
                  </a>
                </div>
              </div>
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="px-3 py-1 bg-gray-700 text-sm rounded-full text-uw-red">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

