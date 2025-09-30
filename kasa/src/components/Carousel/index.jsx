import logements from "../../data/logements.json"
// import styles from "./Carousel.module.sass"

function Carousel() {
    return(
        <div>
            {logements.map((house) => (
                <div
                    key={ house.id }
                    image={ house.pictures[0] }
                />
            ))}
        </div>
    )
}

export default Carousel