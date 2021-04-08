import React from "react"
import image from "../unsplash2_1.jpg"
import Navbar from "../components/Navbar"

export default function Home() {
  return (
    <main>
      <img src={image} alt="cloudy mountains" className="absolute object-cover w-full h-full" />
      <Navbar />
      <section className="relative flex justify-center pt-52 lg:pt-64 px-8">
        <h1 className="text-8xl text-green-100 font-bold leading-none lg:leading-snug lg:text-9xl">
          Hello, I'm Ioannis
        </h1>
      </section>
    </main>
  )
}
