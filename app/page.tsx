import { Button } from "@/components/ui/button"
import { Send, Github, Linkedin, MoveDown } from "lucide-react"
import Link from "next/link"
import Navbar from "./components/navbar"
import About from "./components/about"
import Projects from "./components/projects"

export default function Home() {

  return (
    <main className="bg-[url('/pattern.svg')] bg-repeat bg-cover">
      <Navbar />
      <div className="flex flex-col min-h-screen items-center justify-center mx-60">

        <div className="h-screen flex items-center justify-center">

          <div className="text-center bg-gray-300 rounded-xl bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 p-16 shadow-lg mb-32 min-w-full">

            <h1 className="text-6xl font-bold text-gray-800">
              FULLSTACK WEB DEVELOPER
            </h1>
            <h1 className="mt-6  text-3xl text-gray-800">
              Let&apos;s create great and beautiful websites together
            </h1>
            <h1 className="mt-1 text-3xl text-gray-800 ">
              I want to deliver unique experiences for you
            </h1>
            <div className="mt-16 flex flex-row justify-center align-middle">
              <Link href="https://www.linkedin.com/in/imanol-herrero-arias-932956247/">
                <Button className="mx-2 text-lg" variant="link">
                  <Linkedin className="mr-2 h-5 w-5" />Linkedin
                </Button>
              </Link>
              <Link href="https://github.com/ImanolHerrero">
                <Button className="mx-2 text-lg" variant="link">
                  <Github className="mr-2 h-4 w-4" />Github
                </Button>
              </Link>
              <Link href="mailto:imano.arias@gmail.com">
                <Button className="mx-2 text-lg" variant="link">
                  <Send className="mr-2 h-4 w-4" />Email
                </Button>
              </Link>
            </div>

          </div>

        </div>
        <About />
        <Projects />
        <div className="mt-40">
        </div>
      </div>
    </main>
  )
}
