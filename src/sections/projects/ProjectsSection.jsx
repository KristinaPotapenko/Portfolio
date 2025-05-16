import { SectionTitle } from "../../components/ui/sectionTitle/SectionTitle";
import { ProjectsList } from "../../components/projects/projectsList/ProjectsList";
import style from "./ProjectsSection.module.scss";

export const ProjectsSection = () => {
  return (
    <div className="container containerDark">
      <section className={`sectionMedium ${style.projectsSection}`}>
        <SectionTitle isLight={true}>My Projects</SectionTitle>
        <ProjectsList />
      </section>
    </div>
  );
};
