import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Portfolio from "@/components/sections/Portfolio";
import Team from "@/components/sections/Team";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";
const Index = () => {
  return <div className="min-h-screen">
      <Navbar />
      <main className="rounded-none">
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Team />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>;
};
export default Index;