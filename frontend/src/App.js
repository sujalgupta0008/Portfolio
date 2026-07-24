import { useState } from "react";
import "./App.css";
import "./index.css";
import { Loader } from "./components/Loader";
import { CustomCursor } from "./components/CustomCursor";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Education, Experience } from "./components/Experience";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Certifications, Achievements } from "./components/Certifications";
import { AnalyticsWorkflow } from "./components/AnalyticsWorkflow";
import { WhyHireMe } from "./components/WhyHireMe";
import { GithubStats } from "./components/GithubStats";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { useLenisScroll } from "./hooks/useLenisScroll";

function App() {
  const [loaded, setLoaded] = useState(false);
  useLenisScroll();

  return (
    <div className="bg-ink min-h-screen">
      <Loader onComplete={() => setLoaded(true)} />
      <div className="noise-overlay" />
      <CustomCursor />
      {loaded && (
        <>
          <Navbar />
          <main>
            <Hero />
            <About />
            <Education />
            <Experience />
            <Skills />
            <Projects />
            <Certifications />
            <Achievements />
            <AnalyticsWorkflow />
            <WhyHireMe />
            <GithubStats />
            <Contact />
          </main>
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
