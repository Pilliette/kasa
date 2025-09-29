import styles from "./Card.module.sass"

function Card({ title, image }) {
    return(
        <div
            className={ styles.card }
            style={{ backgroundImage: `url(${ image })`}}
        >
            <h2 className={ styles.titleCard }>{ title }</h2>
        </div>
    )
}

export default Card