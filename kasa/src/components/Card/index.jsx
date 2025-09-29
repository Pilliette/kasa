import styles from "./Card.module.sass"

function Card() {
    return(
        <div className={ styles.card }>
            <h2 className={ styles.titleCard }>Titre de la<br/>location</h2>
        </div>
    )
}

export default Card