import { Button } from "../inputs/button/Button";
import { SocialBlock } from "../ui/social/socialBlock/SocialBlock";
import { useState } from "react";
import style from "./Form.module.scss";
import { Inputs } from "./Inputs";
import { useFetching } from "../../scripts/hooks/useFetching";
import { postForm } from "../../scripts/helpers/emailJSForm";
import { Loader } from "../ui/loader/Loader";

export const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    website: "",
    message: "",
  });

  const [fetching, isLoading, error] = useFetching(async (formData) => {
    await postForm(formData);
  });

  const handleForm = async (e) => {
    e.preventDefault();

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

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <>
      {isLoading && <Loader />}
      <form className={style.form} onSubmit={handleForm}>
        <Inputs formData={formData} handleChangeField={handleChangeField} />
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
