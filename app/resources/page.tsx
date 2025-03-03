"use client"

import { useState } from "react"
import { FaFolder, FaFolderOpen, FaFile } from "react-icons/fa"

const resources = [
  {
    name: "Web Development",
    type: "folder",
    children: [
      { name: "MDN Web Docs", type: "file", url: "https://developer.mozilla.org/en-US/" },
      { name: "freeCodeCamp", type: "file", url: "https://www.freecodecamp.org/" },
      { name: "CSS-Tricks", type: "file", url: "https://css-tricks.com/" },
    ],
  },
  {
    name: "Mobile Development",
    type: "folder",
    children: [
      { name: "Android Developers", type: "file", url: "https://developer.android.com/" },
      { name: "iOS Developer", type: "file", url: "https://developer.apple.com/ios/" },
      { name: "React Native", type: "file", url: "https://reactnative.dev/" },
    ],
  },
  {
    name: "Data Structures and Algorithms",
    type: "folder",
    children: [
      { name: "LeetCode", type: "file", url: "https://leetcode.com/" },
      { name: "HackerRank", type: "file", url: "https://www.hackerrank.com/" },
      { name: "GeeksforGeeks", type: "file", url: "https://www.geeksforgeeks.org/" },
    ],
  },
]

const FileTreeNode = ({ node, level = 0 }) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleOpen = () => {
    if (node.type === "folder") {
      setIsOpen(!isOpen)
    }
  }

  return (
    <li>
      <div
        className={`flex items-center cursor-pointer py-1 px-2 hover:bg-gray-700 transition-colors ${
          node.type === "file" ? "text-green-400" : "text-yellow-300"
        }`}
        style={{ paddingLeft: `${level * 20 + 10}px` }}
        onClick={toggleOpen}
      >
        {node.type === "folder" ? (
          isOpen ? (
            <FaFolderOpen className="mr-2" />
          ) : (
            <FaFolder className="mr-2" />
          )
        ) : (
          <FaFile className="mr-2" />
        )}
        {node.type === "file" ? (
          <a href={node.url} target="_blank" rel="noopener noreferrer" className="hover:underline">
            {node.name}
          </a>
        ) : (
          node.name
        )}
      </div>
      {node.type === "folder" && isOpen && (
        <ul className="ml-4">
          {node.children.map((child, index) => (
            <FileTreeNode key={index} node={child} level={level + 1} />
          ))}
        </ul>
      )}
    </li>
  )
}

export default function Resources() {
  const [terminalInput, setTerminalInput] = useState("")

  const handleInputChange = (e) => {
    setTerminalInput(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // You can add functionality here to "execute" commands if desired
    setTerminalInput("")
  }

  return (
    <div className="min-h-screen bg-gray-900 text-gray-300 p-8 font-mono">
      <h1 className="text-3xl font-bold mb-6 text-green-400">Software Development Resources</h1>
      <div className="bg-gray-800 rounded-lg overflow-hidden shadow-xl">
        <div className="bg-gray-700 px-4 py-2 flex items-center">
          <div className="flex space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <div className="ml-4 text-sm">resources.sh</div>
        </div>
        <div className="p-4">
          <div className="mb-4">
            <span className="text-green-400">user@uwmadison-sdc</span>:
            <span className="text-blue-400">~/resources</span>$ tree
          </div>
          <ul className="ml-4">
            {resources.map((resource, index) => (
              <FileTreeNode key={index} node={resource} />
            ))}
          </ul>
          <form onSubmit={handleSubmit} className="mt-4 flex items-center">
            <span className="text-green-400 mr-2">user@uwmadison-sdc</span>:
            <span className="text-blue-400 mr-2">~/resources</span>$
            <input
              type="text"
              value={terminalInput}
              onChange={handleInputChange}
              className="flex-grow bg-transparent outline-none ml-2"
              placeholder="Type a command..."
            />
          </form>
        </div>
      </div>
    </div>
  )
}

