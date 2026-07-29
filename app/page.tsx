import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import FloatingButtons from "../components/FloatingButtons";
import Highlights from "../components/Highlights";
import About from "../components/About";
import Amenities from "../components/Amenities";
import ProjectOverview from "../components/ProjectOverview";
import Location from "../components/Location";
import Gallery from "../components/Gallery";
import Price from "../components/Price";
import ContactForm from "../components/ContactForm";
import FAQ from "../components/FAQ";
import Map from "../components/Map";
import Footer from "../components/Footer";
export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <FloatingButtons />
     <Highlights />
     <About />
     <Amenities />
     <ProjectOverview />
     <Location />
     <Gallery />
     <Price />
     <ContactForm />
     <FAQ />
     <Map />
     <Footer />
    </>
  );
}