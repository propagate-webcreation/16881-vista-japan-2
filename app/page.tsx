import Header from "./components/shared/Header";
import Footer from "./components/shared/Footer";
import HeroSection from "./components/home/HeroSection";
import ProblemSection from "./components/home/ProblemSection";
import ServiceSection from "./components/home/ServiceSection";
import OfferSection from "./components/home/OfferSection";
import ReasonsSection from "./components/home/ReasonsSection";
import FlowSection from "./components/home/FlowSection";
import ResultsSection from "./components/home/ResultsSection";
import CtaBannerSection from "./components/home/CtaBannerSection";
import FaqSection from "./components/home/FaqSection";
import MessageSection from "./components/home/MessageSection";
import CompanySection from "./components/home/CompanySection";
import ContactSection from "./components/home/ContactSection";

export default function Page() {
  return (
    <>
      <Header />
      <HeroSection />
      <ProblemSection />
      <ServiceSection />
      <OfferSection />
      <ReasonsSection />
      <FlowSection />
      <ResultsSection />
      <CtaBannerSection />
      <FaqSection />
      <MessageSection />
      <CompanySection />
      <ContactSection />
      <Footer />
    </>
  );
}
