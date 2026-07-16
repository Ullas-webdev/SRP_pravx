import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import ScrollJourney from "@/components/ScrollJourney";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Stats from "@/components/Stats";
import Clients from "@/components/Clients";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import PageShell from "@/components/PageShell";
import FeaturedGallery from "@/components/FeaturedGallery";

export default function Home() {
  return (
    <PageShell>
      <main className="grain relative">
        <Nav />
        <Hero />
        <ScrollJourney />
        <Services />
        <Projects />
        <Stats />
        <FeaturedGallery />
        <Clients />
        <Contact />
        <Footer />
      </main>
    </PageShell>
  );
}
