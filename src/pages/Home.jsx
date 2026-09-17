import Hero from "../components/Hero";
import About from "../components/About";
import Experience from "../components/Experience";
import Services from "../components/Services";
import Projects from "../components/Projects";
import Tools from "../components/Tools";
import Skills from "../components/Skills";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";
import InteractiveFooter from "../components/InteractiveFooter";
import PageTransition from "../components/PageTransition";
import SEO from "../components/SEO";

export default function Home() {
  return (
    <PageTransition>
      <SEO title="Home" />
      <main className="portfolio">
        <Hero />
        <About />
        <Experience />
        <Services />
        <Projects />
        <Tools />
        <Skills />
        <Testimonials />
        <Contact />
        <InteractiveFooter />
      </main>
    </PageTransition>
  );
}
