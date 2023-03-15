import style from "./Navbar.module.css"

export function Navbar() {
  return (
    <div className={style.navbarContainer}>
    <nav className={style.navbar}>
      <a href="#" className={style.anchor}>Info</a>
      <a href="#" className={style.anchor}>Proyectos</a>
      <a href="#" className={style.anchor}>Contacto</a>
    </nav>
    </div>
  );
}
