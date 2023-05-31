import style from "./Contacto.module.css";
import whatsappIcon from "./assets/icons/icons8-whatsapp-96.png";
import GithubIcon from "./assets/icons/icons8-repositorio-96.png";
import Correo from "./assets/icons/icons8-correo-electrónico-96.png";
import { contacMe } from "./consts/contactText";
import { useSelector } from "react-redux";

export function Contacto() {
  const state = useSelector((state) => state);
  return (
    <div className={style.contactContainer} id="Contact">
      <h1 className={style.mainTitle}>
        {contacMe[state.language].contact}{" "}
        <span role="img" aria-label="mail">
          ✉️
        </span>
      </h1>
      <div className={style.socialIconsContainer}>
        <a href="https://wa.me/584242816455" target="_blank" rel="noreferrer">
          <img
            className={style.socialIcon}
            src={whatsappIcon}
            alt="+58-424-2816455"
            title="+58-424-2816455"
          />
        </a>
        <a href="https://github.com/ManuelCV1" target="_blank" rel="noreferrer">
          <img
            className={style.socialIcon}
            src={GithubIcon}
            alt="https://github.com/ManuelCV1"
            title="https://github.com/ManuelCV1"
          />
        </a>
        <a href="mailto:manuelcabrera.cv@gmail.com">
          <img
            src={Correo}
            className={style.socialIcon}
            alt="manuelcabrera.cv@gmail.com"
            title="manuelcabrera.cv@gmail.com"
          />
        </a>
      </div>
    </div>
  );
}
