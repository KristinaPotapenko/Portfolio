import { ProjectContent } from "./ProjectContent";
import { ProjectImage } from "./ProjectImage";
import style from "./ProjectsItem.module.scss";

export const ProjectsItem = ({ image, id, title, description, href }) => {
  return (
    <div className={`${style.projectsItem}`}>
      <ProjectImage image={image} />
      <ProjectContent
        number={id}
        title={title}
        description={description}
        href={href}
      />
    </div>
  );
};
