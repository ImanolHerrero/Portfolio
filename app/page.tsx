import { Button } from "@/components/ui/button";
import { Send, Github, Linkedin } from "lucide-react";
import Link from "next/link";
import Navbar from "./components/navbar";
import About from "./components/about";
import Projects from "./components/projects";

export default function Home() {
  return (
    <main className="bg-[url('/pattern.svg')] bg-repeat bg-cover min-h-screen">
      <Navbar />
      <div className="flex flex-col items-center justify-center mx-[5%] md:mx-[15%]">
        <div className="h-screen w-full">

          <div className="text-center bg-gray-300 rounded-xl bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 p-8 shadow-2xl md:p-16 lg:p-20 xl:p-16 border border-gray-300 min-w-full">

            <h1 className="text-4xl md:text-6xl font-bold text-gray-800">
              FULLSTACK WEB DEVELOPER
            </h1>
            <h1 className="mt-4 md:mt-6 text-lg md:text-3xl text-gray-800">
              Let&apos;s create great and beautiful websites together
            </h1>
            <h1 className="mt-2 md:mt-1 text-lg md:text-3xl text-gray-800 ">
              I want to deliver unique experiences for you
            </h1>
            <div className="mt-8 md:mt-16 flex flex-col md:flex-row justify-center items-center">
              <Link href="https://www.linkedin.com/in/imanol-herrero-arias-932956247/">
                <Button className="mx-2 my-2 md:my-0 text-md md:text-lg" variant="link">
                  <Linkedin className="mr-2 h-4 md:h-5 w-4 md:w-5" />Linkedin
                </Button>
              </Link>
              <Link href="https://github.com/ImanolHerrero">
                <Button className="mx-2 my-2 md:my-0 text-md md:text-lg" variant="link">
                  <Github className="mr-2 h-3 md:h-4 w-3 md:w-4" />Github
                </Button>
              </Link>
              <Link href="mailto:imano.arias@gmail.com">
                <Button className="mx-2 my-2 md:my-0 text-md md:text-lg" variant="link">
                  <Send className="mr-2 h-3 md:h-4 w-3 md:w-4" />Email
                </Button>
              </Link>
            </div>
          </div>
        </div>

        <About />
        <Projects />
      </div>

    </main>
  );
}
