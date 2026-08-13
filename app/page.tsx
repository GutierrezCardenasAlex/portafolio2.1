import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { About } from "@/sections/about";
import { Contact } from "@/sections/contact";
import { Hero } from "@/sections/hero";
import { Process } from "@/sections/process";
import { Projects } from "@/sections/projects";
import { Services } from "@/sections/services";
import { Technologies } from "@/sections/technologies";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <Technologies />
        <Process />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
