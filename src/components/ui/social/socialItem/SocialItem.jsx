import style from "./SocialItem.module.scss";

export const SocialItem = ({ children, ...props }) => {
  return (
    <li>
      <a
        target="_blank"
        rel="noopener noreferrer"
        className={style.socialLink}
        {...props}
      >
        {children}
      </a>
    </li>
  );
};
