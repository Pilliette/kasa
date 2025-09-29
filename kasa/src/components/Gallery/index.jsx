import Card from "../Card"
import styles from "./Gallery.module.sass"

function Gallery() {
    return(
        <div className={ styles.gallery }>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
    )
}

export default Gallery