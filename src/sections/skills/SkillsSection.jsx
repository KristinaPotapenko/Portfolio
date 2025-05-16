import { SectionTitle } from "../../components/ui/sectionTitle/SectionTitle";
import { SkillsList } from "../../components/skills/skillsList/SkillsList";
import style from "./SkillsSection.module.scss";

export const SkillsSection = () => {
  return (
    <div className="container">
      <section className={`sectionBig ${style.skillsSection}`}>
        <SectionTitle>My Skills</SectionTitle>
        <SkillsList />
      </section>
    </div>
  );
};
