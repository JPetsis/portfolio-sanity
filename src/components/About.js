import React, { useState, useEffect } from "react"
import Navbar from "../components/Navbar"
import imageUrlBuilder from "@sanity/image-url"
import BlockContent from "@sanity/block-content-to-react"
import sanityClient from "../client.js"

const builder = imageUrlBuilder(sanityClient)
function urlFor(source) {
  return builder.image(source)
}

export default function About() {
  const [author, setAuthor] = useState(null)

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "author"]{
      name,
      bio,
      "authorImage": image.asset->url
    }`
      )
      .then((data) => setAuthor(data[0]))
      .catch(console.error)
  }, [])

  if (!author) return <div>Loading...</div>

  return (
    <main className="min-h-screen bg-gray-700">
      <Navbar />
      <div className="p-10 lg:pt-48 container mx-auto relative">
        <section className="bg-gray-300 rounded-lg shadow-2xl lg:flex p-20">
          <img
            src={urlFor(author.authorImage).url()}
            className="rounded-full w-40 h-40 lg:w-64 lg:h-64 lg:mr-24 mb-12 ml-8"
            alt={author.name}
          />
          <div className="text-lg flex flex-col justify-center">
            <h1 className="text-3xl md:text-6xl text-red-600 mb-4">
              Hey there! I am <span className="text-gray-700 font-bold">{author.name}</span>
            </h1>
            <div className="prose lg:prose-xl text-black">
              <BlockContent blocks={author.bio} projectId="c5fpq4a4" dataset="production" />
              <span className="text-1xl">
                If you would like to learn more contact me{" "}
                <a href="mailto: petsisjohn@gmail.com" className="font-bold">
                  HERE
                </a>
                <a
                  href="https://drive.google.com/file/d/1tHJ_9FmdodR2Wxu_ZcwFqp9nL9TtMymD/view?usp=sharing"
                  className="ml-60 bg-red-700 rounded bg-opacity-75 py-2 px-4 font-bold"
                  rel="noopener noreferrer"
                  target="_blank"
                  download="Resume.pdf"
                >
                  Resume
                </a>
              </span>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
