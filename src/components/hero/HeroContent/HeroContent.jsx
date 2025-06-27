import { HeroHeading } from "./HeroHeading";
import { SectionDescription } from "../../ui/sectionDescription/SectionDescription";
import { SocialBlock } from "../../ui/social/socialBlock/SocialBlock";
import style from "./HeroContent.module.scss";

export const HeroContent = () => {
  return (
    <div className={style.heroContent}>
      <HeroHeading />
      <SectionDescription marginBottom="60px">
        I have acquired knowledge of web development on my own and have a strong
        motivation to develop as a Front-end Developer. I have practical
        experience in creating user-friendly, adaptive, and aesthetic interfaces
        in my own pet projects, and I also participated in the team development
        of one of them. I started my career in design, so I have a good
        understanding of Figma and UI/UX principles. Over time, I realized that
        I get the most pleasure from developing and implementing ideas in code.
        I love creating new projects, improving my skills, and working on
        user-centered solutions. I'm looking for an opportunity to join a team
        where I can grow as a developer and contribute to the overall result.
      </SectionDescription>
      <SocialBlock />
    </div>
  );
};
