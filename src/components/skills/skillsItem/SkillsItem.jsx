import style from "./SkillsItem.module.scss";

export const SkillsItem = ({ icon, skillsName }) => {
  return (
    <li className={style.skillsItemWrapper}>
      {icon}
      <p className={style.skillsItemName}>{skillsName}</p>
    </li>
  );
};
