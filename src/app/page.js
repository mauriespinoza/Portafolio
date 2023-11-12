import Image from "next/image";
import Hero from "@/app/components/Hero";
import { About } from "./components/About";
import { Skills } from "./components/Skill";
import { Projects } from "./components/Projects";
import Head from "next/head";
import { Button } from "@nextui-org/button";
import { Footer } from "./components/Footer";
import { Cards } from "./components/Card";

export default function Home() {
  return (
    <>
      <Head>
        <title>Portafolio Mauricio Espinoza Pizarro</title>
        <meta
          name="description"
          content="Portafolio Mauricio Espinoza Pizarro"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/fovicon.ico" />
      </Head>
      <div>
        {/* <sideBar /> */}
        <Hero />
        <About />
        <Skills />
        {/* <Cards/> */}
        <Projects />

        <Footer />
      </div>
    </>
  );
}
