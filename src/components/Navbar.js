import React from "react"
import { NavLink } from "react-router-dom"
import { SocialIcon } from "react-social-icons"

export default function NavBar() {
  return (
    <header className="bg-red-600">
      <div className="container mx-auto flex justify-between">
        <nav className="flex">
          <NavLink
            to="/"
            exact
            activeClassName="text-white"
            className="inflex-flex items-center py-2 px-2 mr-64 my-1 text-red-100 hover:text-green-800 text-3xl font-bold"
          >
            Ioannis
          </NavLink>
        </nav>
        <nav className="flex ml-96">
          <NavLink
            to="/post"
            activeClassName="text-red-100 bg-red-700"
            className="inflex-flex items-center py-2 px-2 my-3 rounded text-red-200 hover:text-green-800"
          >
            Blog
          </NavLink>
          <NavLink
            to="/project"
            activeClassName="text-red-100 bg-red-700"
            className="inflex-flex items-center py-2 px-2 my-3 rounded text-red-200 hover:text-green-800"
          >
            Projects
          </NavLink>
          <NavLink
            to="/about"
            activeClassName="text-red-100 bg-red-700"
            className="inflex-flex items-center py-2 px-2 my-3 rounded text-red-200 hover:text-green-800"
          >
            About Me
          </NavLink>
        </nav>
        <div className="inline-flex py-2 px-2 my-3">
          <SocialIcon
            url="https://github.com/JPetsis"
            className="mr-4"
            target="_blank"
            fgcolor="#fff"
            style={{ height: 28, width: 28 }}
          />
          <SocialIcon
            url="https://www.linkedin.com/in/ioannispetsis/"
            className="mr-4"
            target="_blank"
            fgcolor="#fff"
            style={{ height: 28, width: 28 }}
          />
        </div>
      </div>
    </header>
  )
}
