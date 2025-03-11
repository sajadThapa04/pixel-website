import Header from "./components/Headers/Headers";
import Footer from "./components/Footers/Footers";
import PixelServices from "./components/Contents/Contents";
import PixelCTA from "./components/Contents/PixelCTA";
import Features from "./components/Features/Features";
import FeaturesSection from "./components/Features/FeatureSection";
import LeadershipSection from "./components/Teams/Teams";
import ContactForm from "./components/Contact/Contact";
import "./App.css";
import PixelNewsletter from "./components/Newsletter/Newsletter";

function Homepage() {
  return (
    <>
      <PixelServices />
      <PixelCTA />
      <Features />
      <FeaturesSection />
      <LeadershipSection />
      <PixelNewsletter />
    </>
  );
}

export default Homepage;
