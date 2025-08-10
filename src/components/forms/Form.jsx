import { useEffect, useRef, useState } from "react";
import { Loader } from "../ui/loader/Loader";
import { Button } from "../inputs/button/Button";
import { Inputs } from "./Inputs";
import { SocialBlock } from "../ui/social/socialBlock/SocialBlock";

import { useFetching } from "../../scripts/hooks/useFetching";
import { useNoScroll } from "../../scripts/hooks/useNoScroll";
import { postForm } from "../../scripts/helpers/emailJSForm";
import { checkField } from "../../scripts/helpers/checkField";

import style from "./Form.module.scss";
import gsap from "gsap";

export const Form = ({ section }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    website: "",
    message: "",
  });
  const [fieldErrors, setFieldErrors] = useState({});

  const [fetching, isLoading, error] = useFetching(async (formData) => {
    await postForm(formData);
  });

  useNoScroll(isLoading);

  useEffect(() => {
    const items = gsap.utils.toArray("[data-form-item]");

    gsap.fromTo(
      items,
      {
        y: 30,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: section.current,
          start: "20% 70%",
          end: "90% 90%",
          scrub: true,
        },
      }
    );
  }, []);

  const handleForm = async (e) => {
    e.preventDefault();

    if (checkField(formData) !== true) return;

    await fetching(formData);

    !error &&
      setFormData({
        name: "",
        email: "",
        website: "",
        message: "",
      });
  };

  const handleChangeField = (e) => {
    const { name, value } = e.target;

    const newFormData = {
      ...formData,
      [name]: value,
    };

    setFormData(newFormData);

    const result = checkField(newFormData);
    setFieldErrors(result === true ? {} : result);
  };

  return (
    <>
      {isLoading && <Loader />}
      <form className={style.form} onSubmit={handleForm}>
        <Inputs
          formData={formData}
          handleChangeField={handleChangeField}
          fieldErrors={fieldErrors}
        />
        {error && <p className={style.error}>{error}</p>}
        <div className={style.buttonGroup}>
          <Button disabled={isLoading} type="submit" data-form-item>
            {isLoading ? "Sending..." : "Get In Touch"}
          </Button>
          <SocialBlock section={section} />
        </div>
      </form>
    </>
  );
};
