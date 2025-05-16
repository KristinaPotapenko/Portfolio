import { ProjectContent } from "./ProjectContent";
import { ProjectImage } from "./ProjectImage";
import style from "./ProjectsItem.module.scss";

export const ProjectsItem = ({ image, number, title, description, href }) => {
  return (
    <li
      className={`${style.projectsItem} ${
        Number(number) % 2 === 0 && style.projectsItemReverse
      }`}
    >
      <ProjectImage image={image} />
      <ProjectContent
        number={number}
        title={title}
        description={description}
        href={href}
      />
    </li>
  );
};
