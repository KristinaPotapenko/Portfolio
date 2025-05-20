import { Form } from "../../components/forms/Form";
import { ContactContent } from "../../components/contact/ContactContent/ContactContent";
import style from "./ContactSection.module.scss";

export const ContactSection = () => {
  return (
    <div className="container">
      <section className={`sectionBig ${style.contactSection}`}>
        <Form />
        <ContactContent />
      </section>
    </div>
  );
};
