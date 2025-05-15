import { SocialItem } from "../socialItem/SocialItem";
import { ReactComponent as InstagramIcon } from "../../../../assets/icons/instagram.svg";
import { ReactComponent as TelegramIcon } from "../../../../assets/icons/telegram.svg";
import { ReactComponent as GmailIcon } from "../../../../assets/icons/gmail.svg";
import { ReactComponent as LinkedinIcon } from "../../../../assets/icons/linkedin.svg";
import style from "./SocialBlock.module.scss";

export const SocialBlock = () => {
  return (
    <ul className={style.socialBlock}>
      <SocialItem href="https://www.instagram.com/_k.vladimirovnaa_?igsh=MTBrY3huNDAydzFjYQ%3D%3D&utm_source=qr">
        <InstagramIcon />
      </SocialItem>
      <SocialItem href="https://t.me/kristina_potapenko">
        <TelegramIcon />
      </SocialItem>
      <SocialItem href="mailto:potapenkokristina10@gmail.com">
        <GmailIcon />
      </SocialItem>
      <SocialItem href="https://www.linkedin.com/in/kristina-potapenko-396876249/">
        <LinkedinIcon />
      </SocialItem>
    </ul>
  );
};
