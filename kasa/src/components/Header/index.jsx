import Logo from "../../../public/logo_kasa.png"
import { Link } from "react-router-dom"

function Header() {
    return(
        <div>
            <div>
                <p>K</p>
                <img src={ Logo } alt="Logo de Kasa" />
                <p>sa</p>
            </div>
            <nav>
                <ul>
                    <li><Link to="/">Accueil</Link></li>
                    <li><Link to="/about">A Propos</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default Header