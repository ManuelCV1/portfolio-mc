import styles from "./Proyects.module.css"
import searchAppFoto from "./assets/proyects-foto/search-app-foto.PNG"
import pomodoroAppFoto from "./assets/proyects-foto/pomodoro-app-foto.PNG"
import javascriptCalculatorAppFoto from "./assets/proyects-foto/javascript-calculator-app-foto.PNG"
import drumMachineAppFoto from "./assets/proyects-foto/drum-machine-app-foto.PNG"
import markdownAppFoto from "./assets/proyects-foto/markdown-app-foto.PNG"
import randomMachineAppFoto from "./assets/proyects-foto/random-machine-app-foto.PNG"

export function Proyects() {

    const proyectsImg = [[searchAppFoto,"https://search-app-mc.netlify.app","SearchApp"],[pomodoroAppFoto,"https://pomodoro-clock-mc.netlify.app","Pomodoro Clock"],[javascriptCalculatorAppFoto,'https://javascript-calculator-mc.netlify.app',"Calculadora"],[drumMachineAppFoto,"https://drum-machine-mc.netlify.app","Batería Electrónica"],[markdownAppFoto,"https://markdown-mc.netlify.app","Markdown"],[randomMachineAppFoto,"https://maquina-frases-aleatorias.netlify.app","Maquina de Frases"]];

    return (
        <div className={styles.proyectsContainer}>
            <h1 className={styles.tituloPrincipal}>Proyectos Recientes <span>🖥️</span></h1>
            <ul className={styles.grid}>
                {proyectsImg.map( (img,id) => <li key={id} className={styles.proyectTarget}><a href={img[1]} target="_blank" rel="noreferrer"><img src={img[0]} className={styles.imagenesProyects} alt="foto de proyecto"/></a><p className={styles.titleDescription}>{img[2]}</p><p className={styles.appDescription}>Aplicacion Web que permite buscar diversos tipos de contenidos: Gifs , Peliculas , entre otros...</p></li> )}
            </ul>
        </div>
    );
}