import Card from "../Card"
import logements from "../../data/logements.json"
import styles from "./Gallery.module.sass"

function Gallery() {
    return(
        <div className={ styles.gallery }>
            { logements.map((house) => (
                <Card
                    key={ house.id }
                    title={ house.title }
                    image={ house.pictures[0] }
                />
            ))}
        </div>
    )
}

export default Gallery