import style from "./ProjectsItem.module.scss";

export const ProjectImage = ({ image, href }) => {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <img className={style.projectImage} src={image} alt="Project" />
    </a>
  );
};
