import { ProjectContent } from "./ProjectContent";
import { ProjectImage } from "./ProjectImage";
import style from "./ProjectsItem.module.scss";

export const ProjectsItem = ({ image, id, title, description, href }) => {
  return (
    <li className={`${style.projectsItem}`}>
      <ProjectImage image={image} />
      <ProjectContent
        id={id}
        title={title}
        description={description}
        href={href}
      />
    </li>
  );
};
