import { Element } from "react-scroll";
import { HeroSection } from "../../sections/hero/HeroSection";
import { SkillsSection } from "../../sections/skills/SkillsSection";
import { ProjectsSection } from "../../sections/projects/ProjectsSection";
import { ContactSection } from "../../sections/contact/ContactSection";

export const MainPage = () => {
  return (
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
  );
};
