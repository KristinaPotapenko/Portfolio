import style from "../../ui/sectionTitle/Heading.module.scss";

export const HeroHeading = () => {
  return (
    <h1 className={style.title}>
      Hello I’am
      <span className={style.titleStrong}> Kristina Frontend</span>
      <span className={style.titleStrong}> </span>{" "}
      <span className={style.titleDecoration}>
        <span className={style.titleDecorationStroke}>Developer</span>
        <span className={style.titleDecorationFill}>Developer</span>
      </span>{" "}
      Based In
      <span className={style.titleStrong}> Ukraine</span>
    </h1>
  );
};
