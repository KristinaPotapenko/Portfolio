import { Form } from "../../components/forms/Form";
import { ContactContent } from "../../contact/ContactContent";
import style from "./ContactSection.module.scss";

export const ContactSection = () => {
  return (
    <div className="container">
      <section className={`sectionMedium ${style.contactSection}`}>
        <Form />
        <ContactContent />
      </section>
    </div>
  );
};
