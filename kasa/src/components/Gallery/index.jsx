import Card from "../Card"
import logements from "../../data/logements.json"
import { Link } from "react-router-dom"
import styles from "./Gallery.module.sass"

function Gallery() {
    return(
        <div className={ styles.gallery }>
            {logements.map((house) => (
                <Link className={ styles.cardLink } key={ house.id } to="/house">
                    <Card
                        key={ house.id }
                        title={ house.title }
                        image={ house.cover }
                    />
                </Link>
            ))}
        </div>
    )
}

export default Gallery