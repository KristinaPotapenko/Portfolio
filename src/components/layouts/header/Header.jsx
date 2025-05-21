import { Link } from "../../ui/link/Link";
import { Navigation } from "../../ui/navigation/Navigation";
import { ReactComponent as DownloadIcon } from "../../../assets/icons/download.svg";
import { Logo } from "../../ui/logo/Logo";
import { ReactComponent as BurgerIcon } from "../../../assets/icons/burger.svg";
import { ReactComponent as CloseIcon } from "../../../assets/icons/close.svg";
import style from "./Header.module.scss";
import { useState } from "react";
import { useNoScroll } from "../../../scripts/hooks/useNoScroll";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  useNoScroll(isOpen);

  const handleChangeOpen = (isOpen = false) => {
    setIsOpen(isOpen);
  };

  return (
    <div className="container">
      <header className={style.header}>
        <Logo />
        <div className={`${style.headerLinks} ${isOpen && style.isActive}`}>
          <Navigation onClick={handleChangeOpen} />
          <Link
            onClick={handleChangeOpen}
            href="https://kristinapotapenko.github.io/Portfolio/Resume.png"
            download
          >
            Resume <DownloadIcon />
          </Link>
          <button onClick={() => setIsOpen()} className={style.closeButton}>
            <CloseIcon />
          </button>
        </div>
        <button onClick={() => setIsOpen(true)} className={style.headerBurger}>
          <BurgerIcon />
        </button>
      </header>
    </div>
  );
};
