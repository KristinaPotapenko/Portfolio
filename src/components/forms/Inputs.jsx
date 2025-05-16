import { Input } from "../inputs/input/Input";
import { Textarea } from "../inputs/textarea/Textarea";

export const Inputs = ({ formData, handleChangeField }) => {
  return (
    <>
      <Input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChangeField}
        placeholder="Your name"
      />
      <Input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChangeField}
        placeholder="Email"
      />
      <Input
        type="text"
        name="website"
        value={formData.website}
        onChange={handleChangeField}
        placeholder="Your website (If exists)"
      />
      <Textarea
        name="message"
        rows="140px"
        value={formData.message}
        onChange={handleChangeField}
        placeholder="How can I help?*"
      />
    </>
  );
};
