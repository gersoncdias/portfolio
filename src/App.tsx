import { BackToTop } from "./components/BackToTop";
import { Header } from "./components/Header";
import { Hero } from "./sections/Hero";
import { About, Education, Experience, Skills } from "./sections/Career";
import { Projects } from "./sections/Projects";
import { Articles, Contact, Footer } from "./sections/Connect";
import { copy } from "./data";
export default function App() {
  return (
    <>
      <a className="skip-link" href="#content">
        {copy.skip}
      </a>
      <Header />
      <main id="content">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Articles />
        <Education />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
