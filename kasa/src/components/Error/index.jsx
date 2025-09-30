import { Link } from "react-router-dom"
import styles from "./Error.module.sass"

function Error() {
    return(
        <div className={ styles.error }>
            <p className={ styles.errorCode }>404</p>
            <p className={ styles.errorMessage }>Oups! La page que vous demandez n'existe pas.</p>
            <Link className={ styles.errorReturnLink } to="/">Retourner sur la page d'accueil</Link>
        </div>
    )
}

export default Error