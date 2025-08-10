import { Input } from "../inputs/input/Input";
import { Textarea } from "../inputs/textarea/Textarea";

export const Inputs = ({ formData, handleChangeField, fieldErrors }) => {
  return (
    <>
      <Input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChangeField}
        placeholder="Your name"
        error={fieldErrors.name}
        data-form-item
      />
      <Input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChangeField}
        placeholder="Email"
        error={fieldErrors.email}
        data-form-item
      />
      <Input
        type="text"
        name="website"
        value={formData.website}
        onChange={handleChangeField}
        placeholder="Your website (If exists)"
        error={fieldErrors.website}
        data-form-item
      />
      <Textarea
        name="message"
        rows="140px"
        value={formData.message}
        onChange={handleChangeField}
        placeholder="How can I help?*"
        error={fieldErrors.message}
        data-form-item
      />
    </>
  );
};
