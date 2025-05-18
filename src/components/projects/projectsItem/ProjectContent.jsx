import { SectionDescription } from "../../ui/sectionDescription/SectionDescription";
import { ReactComponent as ReadMoreIcon } from "../../../assets/icons/readMore.svg";
import style from "./ProjectsItem.module.scss";

export const ProjectContent = ({ number, title, description, href }) => {
  let formattedNumber;
  if (number < 10) {
    formattedNumber = "0" + number;
  } else {
    formattedNumber = number;
  }

  return (
    <div className={style.projectContent}>
      <p className={style.projectNumber}>{formattedNumber}</p>
      <h3 className={style.projectTitle}>{title}</h3>
      <SectionDescription marginBottom="24px">{description}</SectionDescription>
      <a
        className={style.projectLink}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
      >
        <ReadMoreIcon />
      </a>
    </div>
  );
};
