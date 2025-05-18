import { HeroHeading } from "./HeroHeading";
import { SectionDescription } from "../ui/sectionDescription/SectionDescription";
import { SocialBlock } from "../ui/social/socialBlock/SocialBlock";

export const HeroContent = () => {
  return (
    <div>
      <HeroHeading />
      <SectionDescription marginBottom="60px">
        I have taught myself web development and am highly motivated to continue
        developing in this area. I have experience creating user-friendly and
        attractive interfaces for my own projects, as well as experience working
        in a team on one of my projects. I started my career in design and
        worked with mockups in Figma, but I realized over time that development
        brought me real pleasure. I love developing new projects, honing my
        skills, and designing user-centered solutions. I am looking for an
        opportunity to join a team where I can grow as a developer and
        contribute to a common goal.
      </SectionDescription>
      <SocialBlock />
    </div>
  );
};
