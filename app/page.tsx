import Faq from "@/components/Faq";
import Faq2 from "@/components/Faq2";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HowDoseItWorks from "@/components/HowDoseItWorks";
import ImageUploadForm from "@/components/ImageUploadForm";
import Instructions from "@/components/Instructions";
import LikeFaq from "@/components/LikeFaq";
import Review from "@/components/Review";
import TypesOfShape from "@/components/TypesOfShape";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      {/* <HowDoseItWorks /> */}
      <Instructions />
      <TypesOfShape />

      <LikeFaq />
      <Faq />
      {/*   <Review /> */}
      <Footer />
    </main>
  );
}
