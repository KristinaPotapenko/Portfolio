import { HeroHeading } from "./HeroHeading";
import { SectionDescription } from "../../ui/sectionDescription/SectionDescription";
import { SocialBlock } from "../../ui/social/socialBlock/SocialBlock";
import style from "./HeroContent.module.scss";

export const HeroContent = () => {
  return (
    <div className={style.heroContent}>
      <HeroHeading />
      <SectionDescription marginBottom="60px">
        Frontend Developer passionate about crafting intuitive, visually
        appealing interfaces. With a strong foundation in UI/UX principles
        (Figma) and hands-on experience in personal projects, I thrive on
        turning ideas into clean, responsive code. Eager to contribute
        creativity and problem-solving skills to a collaborative team while
        growing as a developer.
      </SectionDescription>
      <SocialBlock />
    </div>
  );
};
