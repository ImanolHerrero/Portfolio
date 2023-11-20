import { Button } from "@/components/ui/button"
import { Send, Github, Linkedin, MoveDown } from "lucide-react"
import Link from "next/link"
import Navbar from "./components/navbar"
import About from "./components/about"
import Projects from "./components/projects"

export default function Home() {

  return (
    <main>

      <div className="relative flex flex-col min-h-screen items-center justify-center bg-white  transition-bg">
        <div className="absolute inset-0 overflow-hidden">
          <div className="jumbo absolute -inset-[10px] opacity-50 ">
          </div>
          <Navbar />
        </div>

        <div className="text-center mx-4 mt-40">
          <h1 className="text-6xl font-bold text-gray-800 relative mt-20">
            <span className="underline underline-offset-8 decoration-sky-500/30">FullStack</span> Web Developer
          </h1>
          <h1 className="mt-6  text-3xl text-gray-800 font-semibold">
            Let&apos;s create great and beautiful websites together!
          </h1>
          <h1 className="mt-1 text-3xl text-gray-800 font-semibold">
            I want to deliver unique experiences for you
          </h1>
        </div>

        <div className="relative mt-8 flex-row flex">
          <Link href="https://www.linkedin.com/in/imanol-herrero-arias-932956247/"> <Button className="mx-2" variant="link">
            <Linkedin className="mr-2 h-4 w-4" />Linkedin
          </Button>
          </Link>
          <Link href="https://github.com/ImanolHerrero">
            <Button className="mx-2" variant="link">
              <Github className="mr-2 h-4 w-4" />Github
            </Button>
          </Link>
          <Link href="mailto:imano.arias@gmail.com">
            <Button className="mx-2" variant="link">
              <Send className="mr-2 h-4 w-4" />Email
            </Button>
          </Link>
        </div>
        <div className="mt-20 mb-40 animate-bounce relative">
          <MoveDown />
        </div>
        <div className="mt-40 relative">
          <About />
          <Projects />
        </div>
      </div>

    </main>
  )
}
