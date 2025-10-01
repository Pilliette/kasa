import { useParams } from "react-router-dom"
import logements from "../../data/logements.json"
import Carousel from "../../components/Carousel"

function House() {
    const { id } = useParams()
    const house = logements.find(h => h.id === id)

    if (!house) return <p>Logement introuvable</p>

    return(
        <div>
            <Carousel
                images={ house.pictures }
                altPrefix={ house.title }
            />
        </div>
    )
}

export default House