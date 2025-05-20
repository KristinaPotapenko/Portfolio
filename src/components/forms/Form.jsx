import { useState } from "react";
import { Loader } from "../ui/loader/Loader";
import { Button } from "../inputs/button/Button";
import { Inputs } from "./Inputs";
import { SocialBlock } from "../ui/social/socialBlock/SocialBlock";

import { useFetching } from "../../scripts/hooks/useFetching";
import { useNoScroll } from "../../scripts/hooks/useNoScroll";
import { postForm } from "../../scripts/helpers/emailJSForm";
import { checkField } from "../../scripts/helpers/checkField";

import style from "./Form.module.scss";

export const Form = () => {
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
          <Button disabled={isLoading} type="submit">
            {isLoading ? "Sending..." : "Get In Touch"}
          </Button>
          <SocialBlock />
        </div>
      </form>
    </>
  );
};
