import { useEffect, useRef, useState } from "react";

import { Form } from "../../components/forms/Form";
import { ContactContent } from "../../components/contact/ContactContent/ContactContent";

import style from "./ContactSection.module.scss";

export const ContactSection = () => {
  const sectionRef = useRef(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div ref={sectionRef} className="container">
      <section className={`sectionBig ${style.contactSection}`}>
        {isMounted && <Form section={sectionRef} />}
        {isMounted && <ContactContent section={sectionRef} />}
      </section>
    </div>
  );
};
