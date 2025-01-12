import styles from "../../cssModules/MainPage.module.css";
import ResponsiveAppBar from "../Header/ResponsiveAppBar";
import FirstSection from "../FirstSection/FirstSection";
import TrajectoryAndTechnologies from "../TrajectoryAndTechnologies/TrajectoryAndTechnologies";
import ProfessionalExperience from "../ProfessionalExperience/ProfessionalExperience";
import PersonalProjects from "../PersonalProjects/PersonalProjects";
import Footer from "../Footer/Footer";
import AOS from "aos";

export default function MainPage() {
  AOS.init();

  return (
    <div>
      <div className={styles.container}>
        <div>
          <ResponsiveAppBar></ResponsiveAppBar>
        </div>
        <FirstSection />
        <TrajectoryAndTechnologies />
        <ProfessionalExperience />
        <PersonalProjects />
        <Footer />
      </div>
    </div>
  );
}
