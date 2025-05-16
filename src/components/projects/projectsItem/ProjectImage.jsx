import style from "./ProjectsItem.module.scss";

export const ProjectImage = ({ image }) => {
  return <img className={style.projectImage} src={image} alt="Project" />;
};
