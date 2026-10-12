import { LazyMotion, MotionConfig } from "motion/react";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Stats from "./components/Stats.jsx";
import Services from "./components/Services.jsx";
import Tools from "./components/Tools.jsx";
import Work from "./components/Work.jsx";
import WhyMe from "./components/WhyMe.jsx";
import Process from "./components/Process.jsx";
import Pricing from "./components/Pricing.jsx";
import Reviews from "./components/Reviews.jsx";
import Faq from "./components/Faq.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import ScrollProgress from "./components/ScrollProgress.jsx";
import BackToTop from "./components/BackToTop.jsx";
import ConsentBanner from "./components/ConsentBanner.jsx";

const loadFeatures = () => import("./lib/motion-features.js").then((mod) => mod.default);

export default function App() {
  return (
    <LazyMotion features={loadFeatures} strict>
      <MotionConfig reducedMotion="user">
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <ScrollProgress />
        <Header />
        <main id="main">
          <Hero />
          <Stats />
          <Services />
          <Tools />
          <Work />
          <WhyMe />
          <Process />
          <Pricing />
          <Reviews />
          <Faq />
          <Contact />
        </main>
        <Footer />
        <BackToTop />
        <ConsentBanner />
      </MotionConfig>
    </LazyMotion>
  );
}
