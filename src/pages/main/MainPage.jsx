import { Element } from "react-scroll";
import { Header } from "../../components/layouts/header/Header";
import { HeroSection } from "../../sections/hero/HeroSection";
import { SkillsSection } from "../../sections/skills/SkillsSection";
import { ProjectsSection } from "../../sections/projects/ProjectsSection";
import { ContactSection } from "../../sections/contact/ContactSection";
import { Footer } from "../../components/layouts/footer/Footer";

export const MainPage = () => {
  return (
    <div className="wrapper">
      <Header />
      <main>
        <Element name="about">
          <HeroSection />
        </Element>
        <Element name="skills">
          <SkillsSection />
        </Element>
        <Element name="projects">
          <ProjectsSection />
        </Element>
        <Element name="contact">
          <ContactSection />
        </Element>
      </main>
      <Footer />
    </div>
  );
};
