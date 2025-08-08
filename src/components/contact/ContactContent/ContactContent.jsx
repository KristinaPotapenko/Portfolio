import { ContactTitle } from "./ContactTitle";
import { SectionDescription } from "../../ui/sectionDescription/SectionDescription";

import style from "./ContactContent.module.scss";

export const ContactContent = ({ section }) => {
  return (
    <div className={style.contactContent}>
      <ContactTitle section={section} />
      <SectionDescription section={section}>
        I seek to push the limits of creativity to create high-engaging,
        user-friendly, and memorable interactive experiences.
      </SectionDescription>
    </div>
  );
};
