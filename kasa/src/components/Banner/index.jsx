import photo from "../../assets/banner.png"
import styles from "./Banner.module.sass"

function Banner() {
    return(
        <div className={ styles.banner }>
            <img className={ styles.photoBanner } src={ photo } alt="Photo de la mer s'écrasant sur la côte" />
            <h1 className={ styles.titleBanner }>Chez vous, partout et ailleurs</h1>
        </div>
    )
}

export default Banner