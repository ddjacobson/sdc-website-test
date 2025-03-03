import Image from "next/image"
import { FaLinkedin, FaGithub } from "react-icons/fa"

const boardMembers = [
  {
    name: "Aayush Bharadwaj",
    role: "President",
    bio: "Computer Science senior with a passion for AI and machine learning. Leading the club's initiatives in technical workshops and industry partnerships.",
    image: "/placeholder.svg?height=200&width=200",
    linkedin: "https://www.linkedin.com/in/johnsmith",
    github: "https://github.com/johnsmith",
    skills: ["Python", "TensorFlow", "AWS"],
  },
  {
    name: "Dane Jacobson",
    role: "Vice President of Engineering",
    bio: "Senior studying Computer Science and Mathematics with an interest in machine learning and efficient computing systems. After graduation, Dane is working as a Software Engineer at JPMorgan Chase",
    image: "/placeholder.svg?height=200&width=200",
    linkedin: "https://www.linkedin.com/in/emilyjohnson",
    github: "https://github.com/emilyjohnson",
    skills: ["Spring", "PyTorch", "Figma"],
  },
  {
    name: "Lucas Anderson",
    role: "Vice President of Engineering",
    bio: "Sophomore in Computer Engineering with a focus on embedded systems. Manages club finances and sponsorship relationships.",
    image: "/placeholder.svg?height=200&width=200",
    linkedin: "https://www.linkedin.com/in/michaellee",
    github: "https://github.com/michaellee",
    skills: ["C++", "Arduino", "RaspberryPi"],
  },

  {
    name: "Mark Melikyan",
    role: "Vice President of Engineering",
    bio: "Sophomore in Computer Engineering with a focus on embedded systems. Manages club finances and sponsorship relationships.",
    image: "/placeholder.svg?height=200&width=200",
    linkedin: "https://www.linkedin.com/in/michaellee",
    github: "https://github.com/michaellee",
    skills: ["C++", "Arduino", "RaspberryPi"],
  },
  {
    name: "Alyona Zabel",
    role: "Vice President of Engineering",
    bio: "Sophomore in Computer Engineering with a focus on embedded systems. Manages club finances and sponsorship relationships.",
    image: "/placeholder.svg?height=200&width=200",
    linkedin: "https://www.linkedin.com/in/michaellee",
    github: "https://github.com/michaellee",
    skills: ["C++", "Arduino", "RaspberryPi"],
  },
  {
    name: "Man San Lam",
    role: "Vice President of Engineering",
    bio: "Sophomore in Computer Engineering with a focus on embedded systems. Manages club finances and sponsorship relationships.",
    image: "/placeholder.svg?height=200&width=200",
    linkedin: "https://www.linkedin.com/in/michaellee",
    github: "https://github.com/michaellee",
    skills: ["C++", "Arduino", "RaspberryPi"],
  },
]

export default function Board() {
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
            Board <span className="text-uw-red">Members</span>
          </h1>
          <p className="text-gray-400 max-w-2xl">
            Meet our dedicated team of student leaders who work to create opportunities and foster a community of
            software developers at UW Madison.
          </p>
        </div>
      </section>

      {/* Board Members Grid */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {boardMembers.map((member, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg overflow-hidden border border-gray-700 hover:border-uw-red transition-colors group"
            >
              <div className="relative aspect-square">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h2 className="text-2xl font-semibold">{member.name}</h2>
                  <p className="text-uw-red font-medium">{member.role}</p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-300 mb-4">{member.bio}</p>
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {member.skills.map((skill, skillIndex) => (
                      <span key={skillIndex} className="px-3 py-1 bg-gray-700 text-sm rounded-full text-uw-red">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex space-x-4">
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-uw-red transition-colors"
                  >
                    <FaLinkedin className="w-6 h-6" />
                  </a>
                  <a
                    href={member.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-uw-red transition-colors"
                  >
                    <FaGithub className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

