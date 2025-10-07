import { useParams } from "react-router-dom"
import logements from "../../data/logements.json"
import Carousel from "../../components/Carousel"
import Description from "../../components/Description"

function House() {
    const { id } = useParams()
    const house = logements.find(h => h.id === id)

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
                description={ house.description }
                equipments={ house.equipments }
            />
        </div>
    )
}

export default House