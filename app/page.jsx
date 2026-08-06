import Navbar from '@/components/Navbar';
import ScrollProgress from '@/components/ScrollProgress';
import FloatingSocialBar from '@/components/FloatingSocialBar';
import ScrollToTop from '@/components/ScrollToTop';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import WhatICanBuild from '@/components/WhatICanBuild';
import Education from '@/components/Education';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <FloatingSocialBar />
      <ScrollToTop />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <WhatICanBuild />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
