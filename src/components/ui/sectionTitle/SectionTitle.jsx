import style from "./SectionTitle.module.scss";

export const SectionTitle = ({
  isLight = false,
  isTitleBlock = false,
  children,
}) => {
  let styleClass = `${style.title} `;
  if (isLight) {
    styleClass += `${style.titleLight}`;
  }
  if (isTitleBlock) {
    styleClass += `${style.titleBlock}`;
  }

  const title = children.split(" ");

  return (
    <h2 className={styleClass}>
      {title[0] + " "}
      <span>{title.slice(1).join(" ")}</span>
    </h2>
  );
};
