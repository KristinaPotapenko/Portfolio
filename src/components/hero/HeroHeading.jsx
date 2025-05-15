import style from "./HeroHeading.module.scss";

export const HeroHeading = () => {
  return (
    <h1 className={style.heroTitle}>
      Hello I’am
      <span className={style.heroTitleStrong}> Kristina</span>
      <span className={style.heroTitleStrong}> Frontend </span>
      <span className={style.heroTitleDecoration}>
        <span className={style.heroTitleDecorationStroke}>Developer</span>
        <span className={style.heroTitleDecorationFill}>Developer</span>
      </span>
      Based In
      <span className={style.heroTitleStrong}> Ukraine</span>
    </h1>
  );
};
