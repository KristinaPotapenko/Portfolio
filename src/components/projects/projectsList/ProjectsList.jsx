import { ProjectsItem } from "../projectsItem/ProjectsItem";
import { projects } from "./projects";
import style from "./ProjectsList.module.scss";

export const ProjectsList = () => {
  return (
    <ul className={style.projectsList}>
      {projects.map((project) => {
        return (
          <ProjectsItem
            key={project.number}
            image={project.image}
            number={project.number}
            title={project.title}
            description={project.description}
            href={project.href}
          />
        );
      })}
    </ul>
  );
};
