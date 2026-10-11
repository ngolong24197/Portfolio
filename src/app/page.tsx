import About from "@/components/About";
import Approach from "@/components/Approach";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Journey from "@/components/Journey";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <>
      <div className="bg-aura pointer-events-none fixed inset-0 -z-10" />
      <div className="bg-dot-grid pointer-events-none fixed inset-0 -z-10 opacity-25" />
      <Header />
      <main className="w-full pt-16">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Journey />
        <Approach />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
