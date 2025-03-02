import FaqQuestion from "../components/Header/FaqQuestion";
import HeroSection from "../components/Header/HeroSection";
import Learn from "../components/Header/Learn";
import OurImpact from "../components/Header/OurImpact";
import ProjectBuild from "../components/Header/ProjectBuild";
import TopCompanies from "../components/Header/TopCompanies";
import XFactor from "../components/Header/XFactor";

const Home = () => {
  return (
    <>
      <HeroSection />
      <TopCompanies />
      <OurImpact />
      <XFactor />
      <Learn />
      <ProjectBuild />
      <FaqQuestion />

    </>
  );
};

export default Home;
