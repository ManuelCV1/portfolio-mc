import style from "./Navbar.module.css"

export function Navbar() {
  return (
    <div className={style.navbarContainer}>
    <nav className={style.navbar}>
      <span  className={style.anchor}>Info</span>
      <span  className={style.anchor}>Proyectos</span>
      <span  className={style.anchor}>Contacto</span>
    </nav>
    </div>
  );
}
