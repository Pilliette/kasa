import Collapse from "../Collapse"

import styles from "./Description.module.sass"

function Description({ title="", location="", tags=[], name="", avatar, rating=0, description="", equipments=[] }) {

    const houseRating = Number(rating)
    const maxStars = 5

    return(
        <div className={ styles.description }>
            <div className={ styles.descriptionHeader }>
                <div className={ styles.leftDescriptionHeader }>
                    <div className={ styles.topDescriptionHeader }>
                        <h2
                            className={ styles.title }
                            title={ title }
                        >
                            { title }
                        </h2>
                        <p
                            className={ styles.location }
                            location={ location }
                        >
                            { location }
                        </p>
                    </div>

                    <ul
                        className={ styles.tagsContainer }
                        tags={ tags }
                    >
                        { tags.map((tag, i) => (
                            <li
                                key={ i }
                                className={ styles.tag }
                            >
                                { tag }
                            </li>
                        ))}
                    </ul>
                </div>

                <div className={ styles.rightDescriptionHeader }>
                    <div className={ styles.profile }>
                        <p
                            className={ styles.name }
                            name={ name }
                        >
                            { name }
                        </p>
                        <img
                            className={ styles.avatar }
                            src={ avatar }
                            alt="Photo de profil"
                        />
                    </div>

                    <div
                        className={ styles.rating }
                        aria-label={ `Note : ${ houseRating } sur ${ maxStars }` }
                    >
                        { Array.from({ length: maxStars }, (_, i) => (
                            <i
                                key={ i }
                                aria-hidden="true"
                                className={ `${ styles.star } ${ i < houseRating ? styles.pinkStar : styles.greyStar }` }
                            />
                        ))}
                    </div>
                </div>
            </div>

            <div className={ styles.descriptionFooter }>
                <Collapse
                    title="Description"
                    description={ description }
                >
                    { description }
                </Collapse>

                <Collapse
                    title="Équipements"
                    equipments={ equipments }
                >
                    <ul className={ styles.liste }>
                        { equipments.map((equipment, i) => (
                            <li key={ i }>
                                { equipment }
                            </li>
                        ))}
                    </ul>
                </Collapse>
            </div>
        </div>
    )
}

export default Description
