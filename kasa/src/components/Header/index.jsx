import Logo from "/pinkLogo_kasa.png"
import { Link } from "react-router-dom"
import styles from "./Header.module.sass"

function Header() {
    return(
        <nav className={ styles.header }>
            <img className={ styles.logo } src={ Logo } alt="Logo de Kasa" />
            <ul className={ styles.menu }>
                <li className={ styles.menuTitle }><Link className={ styles.menuTitle__link } to="/">Accueil</Link></li>
                <li className={ styles.menuTitle }><Link className={ styles.menuTitle__link } to="/about">A Propos</Link></li>
            </ul>
        </nav>
    )
}

export default Header