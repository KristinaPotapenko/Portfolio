import { SkillsItem } from "../skillsItem/SkillsItem";
import { skills } from "./skills";
import style from "./SkillsList.module.scss";

export const SkillsList = () => {
  return (
    <ul className={style.skillsList}>
      {skills.map((skill) => {
        return <SkillsItem icon={skill.icon} skillsName={skill.skillsName} />;
      })}
    </ul>
  );
};
