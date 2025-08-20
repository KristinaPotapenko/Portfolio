import { ProjectContent } from "./ProjectContent";
import { ProjectImage } from "./ProjectImage";

import style from "./ProjectsItem.module.scss";

export const ProjectsItem = ({
  section,
  image,
  id,
  title,
  description,
  href,
}) => {
  return (
    <li className={`${style.projectsItem}`} data-project-item>
      <div className={style.projectsItemInner}>
        <ProjectImage image={image} href={href} />
        <ProjectContent
          section={section}
          number={id}
          title={title}
          description={description}
          href={href}
        />
      </div>
    </li>
  );
};
