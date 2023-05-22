import fotoPerfil from "./assets/perfil-foto/fotoPerfil-bajoReloj-Editado.png";
//import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
//import {faFire , faGlobe} from "@fortawesome/free-solid-svg-icons"
import iconHtml5 from "./assets/icons/icons8-html-5-48.png";
import iconCSS from "./assets/icons/icons8-css3-48.png";
import iconJS from "./assets/icons/icons8-javascript-48.png";
import reactIcon from "./assets/icons/react-icon.png";
import style from "./Profile.module.css";

export function Profile() {
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
              Desarrollador Web Frontend{" "}
              <span role="img" aria-label="laptop" className={style.emojiIcon}>
                💻
              </span>{" "}
            </p>
            <p className={style.parrafo3}>
              {/* Soy un desarrollador freelance en constante aprendizaje y mejoramiento de habilidades de desarrollo y diseño de aplicaciones web. */}
              Manejo un stack de tecnologías como{" "}
              <span className={style.stackTecnologico}>
                html, css, javascript, react, redux, boostrap,
              </span>{" "}
              entre otras{" "}
              <span className={style.extraResponsiveText}>
                y ocasionalmente realizo trabajos de edición
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
