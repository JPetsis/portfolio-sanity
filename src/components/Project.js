import React, { useState, useEffect } from "react"
import Navbar from "../components/Navbar"
import sanityClient from "../client.js"

export default function Project() {
  const [projectData, setProjectData] = useState(null)

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "project"]{
      title,
      date,
      place,
      description,
      projectType,
      link,
      tags,
    }`
      )
      .then((data) => setProjectData(data))
      .catch(console.error)
  }, [])

  return (
    <main className="bg-gray-700 min-h-screen">
      <Navbar />
      <section className="container mx-auto p-12">
        <h1 className="text-5xl flex justify-center pb-4">My Projects</h1>
        <h2 className="text-lg text-gray-50 flex justify-center mb-12">
          Welcome to my projects page!
        </h2>
        <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectData &&
            projectData.map((project, index) => (
              <article className="relative rounded-lg shadow-xl bg-gray-300 p-16">
                <h3 className="text-gray-800 text-3xl font-bold mb-2">
                  <a>{project.title}</a>
                </h3>
                <div className="text-gray-500 text-xs space-x-4">
                  <span>
                    <strong className="font-bold">Finished on</strong>:{" "}
                    {new Date(project.date).toLocaleDateString()}
                  </span>
                  <span>
                    <strong className="font-bold">Company</strong>: {project.place}
                  </span>
                  <span>
                    <strong className="font-bold">Type</strong>: {project.projectType}
                  </span>
                  <p className="my-6 text-lg text-gray-700 leading-relaxed">
                    {project.description}
                  </p>
                  <a
                    href={project.link}
                    rel="noopener noreferrer"
                    target="_blank"
                    className="text-red-600 font-bold hover:text-red-400 text-sm"
                  >
                    View The Project{" "}
                    <span role="img" aria-label="right pointer">
                      👈
                    </span>
                  </a>
                </div>
              </article>
            ))}
        </section>
      </section>
    </main>
  )
}
