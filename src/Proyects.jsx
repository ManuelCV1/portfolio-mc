import { useSelector } from "react-redux";
import styles from "./Proyects.module.css";
import { mainTitle } from "./consts/proyectsInfo";

export function Proyects({ proyectsInfo }) {
  const state = useSelector((state) => state);
  return (
    <div className={styles.proyectsContainer} id="Proyects">
      <h1 className={styles.tituloPrincipal}>
        {mainTitle[state.language].title}{" "}
        <span className={styles.emojiTitle} role="img" aria-label="desktop">
          🖥️
        </span>
      </h1>
      <ul className={styles.grid}>
        {proyectsInfo.map((pad, id) => (
          <li key={id} className={styles.proyectTarget}>
            <a href={pad.urlLink} target="_blank" rel="noreferrer">
              <img
                src={pad.Img}
                className={styles.imagenesProyects}
                alt="foto de proyecto"
              />
            </a>
            <p className={styles.titleDescription}>{pad.proyectName}</p>
            <p className={styles.appDescription}>
              {pad.proyectDescription[state.language].description}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
