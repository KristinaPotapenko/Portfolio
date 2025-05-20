import styleHeading from "../../../components/ui/sectionTitle/Heading.module.scss";

export const ContactTitle = () => {
  return (
    <h2 className={`${styleHeading.title} ${styleHeading.titleStrong}`}>
      Let’s{" "}
      <span className={styleHeading.titleDecoration}>
        <span className={styleHeading.titleDecorationStroke}>talk</span>
        <span className={styleHeading.titleDecorationFill}>talk</span>
      </span>{" "}
      for Something special
    </h2>
  );
};
