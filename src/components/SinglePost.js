import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import Navbar from "../components/Navbar"
import sanityClient from "../client.js"
import imageUrlBuilder from "@sanity/image-url"
import BlockContent from "@sanity/block-content-to-react"

const builder = imageUrlBuilder(sanityClient)
function urlFor(source) {
  return builder.image(source)
}

export default function SinglePost() {
  const [singlePost, setSinglePost] = useState(null)
  const { slug } = useParams()

  useEffect(() => {
    sanityClient
      .fetch(
        `*[slug.current == "${slug}"] {
      title,
      _id,
      slug,
      mainImage{
        asset ->{
          _id,
          url
        }
      },
      body,
      "name": author->name,
      "authorImage": author->image
    }`
      )
      .then((data) => setSinglePost(data[0]))
      .catch(console.error)
  }, [slug])

  if (!singlePost) return <div>Loading...</div>

  return (
    <main className="bg-gray-700 min-h-screen">
      <Navbar />
      <article className="container shadow-lg mx-auto bg-gray-300 rounded-lg mt-12">
        <header className="relative">
          <div className="absolute h-full w-full flex items-center justify-center p-8">
            <div className="bg-white bg-opacity-75 rounded p-12">
              <h1 className="text-3xl lg:text-6xl mb-4">{singlePost.title}</h1>
              <div className="flex justify-center text-gray-800">
                <img
                  src={urlFor(singlePost.authorImage).url()}
                  alt={singlePost.name}
                  className="w-12 h-12 rounded-full"
                />
                <p className="flex items-center pl-2 text-3xl">{singlePost.name}</p>
              </div>
            </div>
          </div>
          <img
            src={singlePost.mainImage.asset.url}
            alt={singlePost.title}
            className="w-full object-cover rounded-t"
            style={{ height: "400px" }}
          />
        </header>
        <div className="px-16 lg:px-32 py-12 lg:py-20 prose lg:prose-xl max-w-full text-black">
          <BlockContent blocks={singlePost.body} projectId="c5fpq4a4" dataset="production" />
        </div>
      </article>
    </main>
  )
}
