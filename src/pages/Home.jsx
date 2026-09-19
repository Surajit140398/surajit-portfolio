import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Tools from "../components/Tools";
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
        <Projects />
        <Tools />
        <Contact />
        <InteractiveFooter />
      </main>
    </PageTransition>
  );
}
