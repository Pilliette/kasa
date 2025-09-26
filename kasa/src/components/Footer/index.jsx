import Logo from "../../../public/whiteLogo_kasa.png"
import styles from "./Footer.module.sass"

function Footer() {
    return(
        <div className={ styles.footer }>
            <img className={ styles.logo } src={ Logo } alt="Logo de Kasa" />
            <p className={ styles.copyright }>© 2020 Kasa. All rights reserved</p>
        </div>
    )
}

export default Footer