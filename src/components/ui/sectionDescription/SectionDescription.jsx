import style from "./SectionDescription.module.scss";

export const SectionDescription = ({ marginBottom, children }) => {
  return (
    <p style={{ marginBottom }} className={style.sectionDescription}>
      {children}
    </p>
  );
};
