import AllBuildProjects from "../components/Header/AllBuildProjects";
import AllProjects from "../components/Header/AllProjects";
import FaqQuestion from "../components/Header/FaqQuestion";
import HeroSection from "../components/Header/HeroSection";
import Learn from "../components/Header/Learn";
import MeetTeam from "../components/Header/MeetTeam";
import OurImpact from "../components/Header/OurImpact";
import ProjectBuild from "../components/Header/ProjectBuild";
import TopCompanies from "../components/Header/TopCompanies";
import XFactor from "../components/Header/XFactor";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <TopCompanies />
      <OurImpact />
      <XFactor />
      <Learn />
      <ProjectBuild />
      <MeetTeam />
      <FaqQuestion />
    </div>
  );
};

export default Home;
