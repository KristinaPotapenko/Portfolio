import { SectionDescription } from "../../ui/sectionDescription/SectionDescription";
import { ContactTitle } from "./ContactTitle";
import style from "./ContactContent.module.scss";

export const ContactContent = () => {
  return (
    <div className={style.contactContent}>
      <ContactTitle />
      <SectionDescription>
        I seek to push the limits of creativity to create high-engaging,
        user-friendly, and memorable interactive experiences.
      </SectionDescription>
    </div>
  );
};
