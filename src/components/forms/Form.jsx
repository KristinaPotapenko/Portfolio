import { Button } from "../inputs/button/Button";
import { SocialBlock } from "../ui/social/socialBlock/SocialBlock";
import { useState } from "react";
import style from "./Form.module.scss";
import { Inputs } from "./Inputs";

export const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    website: "",
    message: "",
  });

  const handleForm = (e) => {
    e.preventDefault();

    const form = e.currentTarget;
  };

  const handleChangeField = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <form className={style.form} onSubmit={handleForm}>
      <Inputs formData={formData} handleChangeField={handleChangeField} />
      <div className={style.buttonGroup}>
        <Button>Get In Touch</Button>
        <SocialBlock />
      </div>
    </form>
  );
};
