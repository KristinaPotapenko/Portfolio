import style from "./SkillsItem.module.scss";

export const SkillsItem = ({ icon, skillsName }) => {
  return (
    <li className={style.skillsItem}>
      {icon}
      <p className={style.skillsItemName}>{skillsName}</p>
    </li>
  );
};
