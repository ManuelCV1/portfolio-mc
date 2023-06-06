import { useDispatch, useSelector } from "react-redux";
import style from "./Navbar.module.css";
import { language } from "../actions/language";
import { navText } from "../consts/navbarText";

export function Navbar() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <div className={style.navbarContainer}>
      <button onClick={() => dispatch(language())}>
        {state.language === 0 ? "En" : "Es"}
      </button>

      <nav className={style.navbar}>
        <a href="#ProfileInfo" className={style.anchor}>
          {navText[state.language].info}
        </a>
        <a href="#Proyects" className={style.anchor}>
          {navText[state.language].proyects}
        </a>
        <a href="#Contact" className={style.anchor}>
          {navText[state.language].contact}
        </a>
      </nav>
    </div>
  );
}
