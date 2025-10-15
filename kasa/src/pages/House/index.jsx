import { useParams } from "react-router-dom"

import logements from "../../data/logements.json"

import Carousel from "../../components/Carousel"
import Description from "../../components/Description"
import Collapse from "../../components/Collapse" // Code ajouté
import Error from "../../components/Error" // Code ajouté

import styles from "./House.module.sass"

function House() {
    const { id } = useParams()
    const house = logements.find(h => h.id === id)

    // Code ajouté
    if (!house) {
        return <Error />
    }
    //

    return(
        <div>
            <Carousel
                images={ house.pictures }
                altPrefix={ house.title }
            />
            <Description
                title={ house.title }
                location={ house.location }
                tags={ house.tags }
                name={ house.host.name }
                avatar={ house.host.picture }
                rating={parseInt(house.rating, 10)}
            />
            {/* Code ajouté */}
            <div className={ styles.descriptionFooter }>
                <Collapse title="Description">
                    { house.description }
                </Collapse>

                <Collapse title="Équipements">
                    <ul className={ styles.liste }>
                        { house.equipments.map((equipment, i) => (
                            <li key={`${equipment}-${i}`}>
                                {equipment}
                            </li>
                        ))}
                    </ul>
                </Collapse>
            </div>
            {/*  */}
        </div>
    )
}

export default House