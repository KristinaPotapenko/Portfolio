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
    <div className={style.projectItem}>
      <ProjectImage image={image} href={href} />
      <ProjectContent
        section={section}
        number={id}
        title={title}
        description={description}
        href={href}
      />
    </div>
  );
};
