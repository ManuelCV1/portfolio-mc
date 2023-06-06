import fotoPerfil from "../assets/perfil-foto/fotoPerfil-bajoReloj-Editado.png";
import iconHtml5 from "../assets/icons/icons8-html-5-48.png";
import iconCSS from "../assets/icons/icons8-css3-48.png";
import iconJS from "../assets/icons/icons8-javascript-48.png";
import reactIcon from "../assets/icons/react-icon.png";
import style from "./Profile.module.css";
import { extraInfo, others, title, whatIDo } from "../consts/profileText";
import { useSelector } from "react-redux";

export function Profile() {
  const state = useSelector((state) => state);

  return (
    <div>
      <div className={style.profileDiv} id="ProfileInfo">
        <div className={style.fotoImgContainer}>
          <img
            className={style.fotoImg}
            src={fotoPerfil}
            alt="Foto de Perfil"
          />
          <span className={style.shadowImg}></span>
        </div>

        <div className={style.infoContainer}>
          <div className={style.textInfo}>
            <h1 className={style.saludo} title="Manuel Cabrera">
              Manuel Cabrera
            </h1>
            <p className={style.parrafo2}>
              {title[state.language].profession}{" "}
              <span role="img" aria-label="laptop" className={style.emojiIcon}>
                💻
              </span>{" "}
            </p>
            <p className={style.parrafo3}>
              {whatIDo[state.language].iMake}{" "}
              <span className={style.stackTecnologico}>
                HTML5, CSS, JavaScript, React, Styled Components, Redux
              </span>{" "}
              {others[state.language].more}.{" "}
              <span className={style.extraResponsiveText}>
                {extraInfo[state.language].extra}📈🌎
              </span>
            </p>
          </div>

          <div className={style.iconsContainer}>
            <img
              src={iconHtml5}
              alt="html5"
              className={style.stackIcons}
              title="Html5"
            />
            <img
              src={iconCSS}
              alt="CSS3"
              className={style.stackIcons}
              title="CSS3"
            />
            <img
              src={iconJS}
              alt="Javascript"
              className={style.stackIcons}
              title="Javascript"
            />
            <img
              src={reactIcon}
              alt="React.js"
              className={style.stackIcons}
              title="React.js"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
