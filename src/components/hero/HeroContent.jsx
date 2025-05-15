import { HeroHeading } from "./HeroHeading";
import { SectionDescription } from "../ui/sectionDescription/SectionDescription";
import { SocialBlock } from "../ui/social/socialBlock/SocialBlock";

export const HeroContent = () => {
  return (
    <div>
      <HeroHeading />
      <SectionDescription marginBottom="88px">
        I'm Flora Sheen Lorem Ipsum is simply dummy text of the printing and
        typesetting industry. Lorem Ipsum has been the industry's standard dummy
        text ever since the 1500s, when an unknown printer took a galley of type
        and scrambled it to specimen book.
      </SectionDescription>
      <SocialBlock />
    </div>
  );
};
