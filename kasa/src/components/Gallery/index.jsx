import styles from "./Gallery.module.sass"

function Gallery() {
    return(
        <div className={ styles.gallery }>
            <div className={ styles.card }>
                <h2 className={ styles.titleCard }>Titre de la<br/>location</h2>
            </div>
        </div>
    )
}

export default Gallery